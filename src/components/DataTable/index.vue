<template>
  <div ref="table" class="flex flex-col gap-y-2 sm:gap-y-2">
    <div class="search-wrapper">
      <Input v-model="searchModel" placeholder="Search" />
      <!-- Display filters -->
      <div>
        <slot name="filter" />
      </div>
    </div>
    <div class="rows-wrapper">
      <div
        class="datatable-grid-columns hidden select-none items-center gap-x-2 p-4 sm:grid"
        :class="headerClass"
      >
        <Checkbox v-model="checkAllModel" />
        <div
          v-for="column in options.columns"
          :key="column.key"
          class="relative table-column"
          :class="column.class ?? ''"
        >
          <div
            class="flex cursor-pointer gap-x-1"
            @click="sortColumn(column, $event)"
          >
            <div class="overflow-hidden truncate break-words">
              {{ column.name }}
            </div>
            <div class="flex flex-col">
              <PhCaretUp
                :class="getDirection(column) === 1 ? 'visible' : 'invisible'"
                weight="bold"
                :size="12"
              />
              <PhCaretDown
                :class="getDirection(column) === -1 ? 'visible' : 'invisible'"
                weight="bold"
                :size="12"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator class="hidden sm:block" />

      <div
        class="datatable-grid-rows"
        :class="sortedData.length ? '' : 'datatable-grid-rows-empty'"
      >
        <!-- Rows -->
        <div
          v-for="(entry, idx) in sortedData"
          :key="idx"
          class="flex flex-col justify-between"
        >
          <div
            class="datatable-grid-columns flex flex-col gap-y-2 gap-x-2 p-4 sm:grid sm:items-center"
          >
            <!-- Columns -->
            <Checkbox v-model="selectedRows" :value="entry[options.id]" />
            <div
              v-for="column in options.columns"
              :key="column.key"
              class="grid grid-cols-2 sm:flex"
              :class="column.class ?? ''"
            >
              <!-- Column name on mobile device -->
              <div class="block sm:hidden" :class="column.class ?? ''">
                {{ column.name }}
              </div>

              <!-- Column content -->
              <div v-if="!loading" class="overflow-hidden break-words">
                <div v-if="!$slots[column.key]">
                  {{
                    entry[column.key] === undefined
                      ? 'No data'
                      : entry[column.key]
                  }}
                </div>
                <slot :name="`${column.key}`" :data="entry" />
              </div>
              <div v-else class="loading dark:loading-dark h-6 w-full"></div>
            </div>
          </div>
          <Separator />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between py-2">
      <div class="flex gap-x-2">
        <div class="flex gap-x-2">
          <PhCaretDoubleLeft :size="24" @click="firstPage" />
          <PhCaretLeft :size="24" @click="prevPage" />
        </div>
        <div>{{ page }}</div>
        <div class="flex gap-x-2">
          <PhCaretRight :size="24" @click="nextPage" />
          <PhCaretDoubleRight :size="24" @click="lastPage" />
        </div>
      </div>
      <div class="flex items-center gap-x-2">
        <div>Rows per page:</div>
        <Select
          v-model="rowsLimit"
          :options="rowsLimitOptions"
          @change="rowsLimitChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { onMounted, onUnmounted, PropType, ref, toRefs, watch } from 'vue'
import Separator from '../Separator/index.vue'
import {
  PhCaretUp,
  PhCaretDown,
  PhCaretLeft,
  PhCaretDoubleLeft,
  PhCaretRight,
  PhCaretDoubleRight,
} from '@dnlsndr/vue-phosphor-icons'
import Select from '../Select/index.vue'
import Checkbox from '../Checkbox/index.vue'
import Input from '../Input/index.vue'
import Fuse from 'fuse.js'
import { debouncedWatch } from '@vueuse/shared'

export type Direction = 0 | -1 | 1

export interface Column {
  key: string
  name: string
  class?: string
  size?: string
  direction?: Direction
  sort?: (
    a: number | string | boolean,
    b: number | string | boolean,
    direction: 'asc' | 'desc'
  ) => number
}

type DataTableOptions = {
  columns: Column[]
  /* key of identifier */
  id: string
  serverSide?: boolean
  rowsLimit?: number
  page?: number
  maxPage: number
  rowsLimitOptions?: number[]
  searchKeys?: string[]
  resize: boolean
  minColSize: number
}

const defaultOptions: Partial<DataTableOptions> = {
  serverSide: false,
  rowsLimit: 10,
  page: 1,
  maxPage: 1,
  rowsLimitOptions: [10, 25, 50],
  resize: true,
  minColSize: 100,
}

const props = defineProps({
  data: {
    type: Array as PropType<Record<string, unknown>[]>,
    required: true,
  },
  options: {
    type: Object as PropType<DataTableOptions>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  headerClass: {
    type: String,
    default: () => '',
  },
})

const emit = defineEmits([
  'update:page',
  'update:rowsLimit',
  'update:sort',
  'update:search',
  'update:selectedRows',
  'update:resize',
])

const { data, options, loading, headerClass } = toRefs(props)

const table = ref()

const minColSize = computed(() => {
  return options.value.minColSize ?? defaultOptions.minColSize
})

const fuseOptions = computed(() => ({
  includeScore: false,
  keys: options.value.searchKeys ?? options.value.columns.map((c) => c.key),
  threshold: 0.3,
}))

const checkAllModel = computed({
  get() {
    return selectedRows.value.length > 0
  },
  set(value) {
    if (!value) {
      selectedRows.value = []
    } else {
      selectedRows.value = sortedData.value.map((d) => d[options.value.id])
    }
  },
})

// const checkAllModel = computed(() => selectedRows.value.length > 0)

const selectedRows = ref([])
const searchModel = ref('')

const rowsLimitController = ref(
  options.value.rowsLimit ?? defaultOptions.rowsLimit
)
const rowsLimit = computed({
  get() {
    if (options.value.serverSide) return options.value.rowsLimit
    return rowsLimitController.value
  },
  set(value: number) {
    rowsLimitController.value = value
  },
})

const rowsLimitOptionsInit = () => {
  const optionsArray =
    options.value.rowsLimitOptions ?? defaultOptions.rowsLimitOptions
  return optionsArray.map((o) => ({
    value: o,
    title: `${o}`,
  }))
}
const rowsLimitOptions = ref(rowsLimitOptionsInit())

const sortedData = computed(() => {
  if (loading.value) return Array(rowsLimit.value).fill({})
  if (options.value.serverSide) return data.value
  const sorted = sortData()
  gotoPage(page.value)
  const pageOffset = page.value - 1
  const currPage = pageOffset * rowsLimit.value
  return sorted.slice(currPage, currPage + rowsLimit.value)
})

const initMaxPage = () => {
  if (options.value.serverSide)
    return options.value.maxPage ?? defaultOptions.maxPage
  return Math.ceil(data.value.length / rowsLimit.value)
}
const maxPageController = ref(initMaxPage())

const maxPage = computed({
  get() {
    if (options.value.serverSide) return initMaxPage()
    return maxPageController.value
  },
  set(value) {
    maxPageController.value = value
  },
})

const initPage = () => {
  if (!options.value.page) return defaultOptions.page
  if (options.value.page > maxPage.value) return defaultOptions.page
  return options.value.page
}

const pageController = ref(initPage())

const page = computed({
  get() {
    if (options.value.serverSide) return options.value.page
    return pageController.value
  },
  set(value) {
    pageController.value = value
  },
})

const initSorting = () => {
  const sortArray: Column[] = []
  for (const column of options.value.columns) {
    sortArray.push({
      ...column,
      direction: 0,
    })
  }
  return sortArray
}

// Used for storing column order direction
// key: Column.key
// value: Sort
const sorting = ref<Column[]>(initSorting())

const initSizes = () => {
  const colsSizeArray = options.value.columns.map((col) => col.size)
  // checkbox
  colsSizeArray.unshift('2rem')
  return colsSizeArray
}

const sizesController = ref(initSizes())

const sizes = computed(() => {
  // const colsSizeArray = options.value.columns.map((col) =>
  //   col.size !== undefined ? `minmax(0, ${col.size})` : 'minmax(0, 1fr)'
  // )
  // colsSizeArray.unshift('minmax(0, 2rem)')
  const colsSizeArray = sizesController.value.map((size) =>
    size !== undefined ? `minmax(0, ${size})` : 'minmax(0, 1fr)'
  )
  return colsSizeArray.join(' ')
})

const sortData = () => {
  let cpData = Array.from(data.value)

  if (searchModel.value !== '') {
    const fuse = new Fuse(cpData, fuseOptions.value)
    cpData = fuse.search(searchModel.value).map((d) => d.item)
  }

  if (!options.value.serverSide)
    maxPage.value = Math.ceil(cpData.length / rowsLimit.value)

  const sorted = cpData.sort((a, b) => {
    for (const sort of sorting.value) {
      // Skip unsorted keys
      if (sort.direction === 0) continue

      const sortKey = sort.key

      if (sort.direction === -1) {
        if (sort.sort) {
          const rSort = sort.sort(
            (a as any)[sortKey],
            (b as any)[sortKey],
            'desc'
          )
          if (rSort) return rSort
        } else {
          if (a[sortKey] > b[sortKey]) return -1
          if (a[sortKey] < b[sortKey]) return 1
        }
      } else if (sort.direction === 1) {
        if (sort.sort) {
          const rSort = sort.sort(
            (a as any)[sortKey],
            (b as any)[sortKey],
            'asc'
          )
          if (rSort) return rSort
        } else {
          if (a[sortKey] > b[sortKey]) return 1
          if (a[sortKey] < b[sortKey]) return -1
        }
      }
    }
  })
  return sorted
}

const sortOnShiftClick = (cSort: Column) => {
  const index = sorting.value.findIndex((s) => s.key === cSort.key)
  const tempSortObj = sorting.value[index]

  // on click at the latest clicked column change direction
  if (tempSortObj.direction === 0 || index === sorting.value.length - 1) {
    // changing direction based on current direction
    // 0 to 1 (default to ascending)
    // 1 to -1 (ascending to descending)
    // -1 to 0 (descending to default)
    switch (tempSortObj.direction) {
      case 0:
        tempSortObj.direction = 1
        break
      case 1:
        tempSortObj.direction = -1
        break
      default:
        tempSortObj.direction = 0
    }
  }
  // otherwise we reset column to default value
  else {
    tempSortObj.direction = 0
  }

  sorting.value.splice(index, 1)

  // placing element at the end of the array to keep history
  // in case of ascending and descendng direction
  if (tempSortObj.direction) sorting.value.push(tempSortObj)
  // if element is at default direction
  // placing it at the beginning
  else sorting.value.unshift(tempSortObj)

  // emit directions for server side sorting
  const directions = sorting.value.filter((c) => c.direction !== 0)
  emit('update:sort', directions)
}

const sortOnSimpleClick = (cSort: Column) => {
  const index = sorting.value.findIndex((s) => s.key === cSort.key)
  const tempSortObj = sorting.value[index]

  // changing direction based on current direction
  // 0 to 1 (default to ascending)
  // 1 to -1 (ascending to descending)
  // -1 to 0 (descending to default)
  switch (tempSortObj.direction) {
    case 0:
      tempSortObj.direction = 1
      break
    case 1:
      tempSortObj.direction = -1
      break
    default:
      tempSortObj.direction = 0
  }

  sorting.value.splice(index, 1)

  // Resetting all other column directions on slimple click
  // Shift + Click used for multiple sorting
  sorting.value = sorting.value.map((cSort) => ({
    ...cSort,
    direction: 0,
  }))

  // placing element at the end of the array to keep history
  // in case of ascending and descendng direction
  sorting.value.push(tempSortObj)

  // emit directions for server side sorting
  const directions = sorting.value.filter((c) => c.direction !== 0)
  emit('update:sort', directions)
}

const sortColumn = (cSort: Column, event: MouseEvent) => {
  if (loading.value) return
  if (event.shiftKey) return sortOnShiftClick(cSort)
  return sortOnSimpleClick(cSort)
}

const getDirection = (column: Column) => {
  const dir = sorting.value.find((s) => s.key === column.key)
  return dir.direction
}

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max)

const gotoPage = (pageNum: number, emitEvent = true) => {
  if (loading.value) return
  if (options.value.serverSide) {
    if (emitEvent) emit('update:page', pageNum)
    return
  }
  page.value = clamp(pageNum, 1, maxPage.value)
}

const nextPage = () => gotoPage(page.value + 1)
const prevPage = () => gotoPage(page.value - 1)
const firstPage = () => gotoPage(1)
const lastPage = () => {
  if (!options.value.serverSide) return gotoPage(Infinity)
  return gotoPage(options.value.maxPage)
}

const rowsLimitChange = (newLimit: number) => {
  rowsLimit.value = newLimit
  gotoPage(page.value)
  emit('update:rowsLimit', newLimit)
}

debouncedWatch(
  searchModel,
  () => {
    emit('update:search', searchModel.value)
  },
  {
    debounce: 150,
  }
)

watch(maxPage, () => {
  gotoPage(page.value)
})

watch(selectedRows, () => {
  emit('update:selectedRows', selectedRows.value)
})

/*
 Resets column sizes to px value.
**/
const resetSizes = () => {
  const tableEl = table.value
  const cols: HTMLElement[] = tableEl.querySelectorAll('.table-column')
  cols.forEach((col, idx) => {
    sizesController.value[idx + 1] = col.clientWidth + 'px'
  })
  emit('update:resize', sizesController.value)
}

/*
  Creates resizable column by adding event listeners.
  Calculates new size of column by calculating offset
  of mouse x position before and after resize.
**/
const createResizableColumn = function (
  col: HTMLElement,
  resizer: HTMLElement,
  idx: number
) {
  if (!options.value.resize) return
  // Track the current position of mouse
  let x = 0
  let w = 0

  // Storing width of coulmn and mouse X position
  // for calculating offset between current and new X postion
  const mouseDownHandler = function (e: MouseEvent) {
    // Get the current mouse position
    x = e.clientX

    // Calculate the current width of column
    w = col.clientWidth

    // Attach listeners for document's events
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)

    resizer.classList.add('resizing')
  }

  const mouseMoveHandler = function (e: MouseEvent) {
    // Determine how far the mouse has been moved
    const dx = e.clientX - x
    const calculatedWidth = w + dx

    const currentCol = idx + 1
    const tableEl: HTMLElement = table.value
    const columns = tableEl.querySelectorAll('.table-column')

    // width of current Element
    const currWidth = columns[currentCol - 1].clientWidth
    // next column width because columns don't count checkbox
    const width = columns[currentCol].clientWidth

    // if new calculatedWidth for coulmn is less than min Column height
    // prevent column from resizing
    if (currWidth <= minColSize.value && dx < 0) return
    if (width <= minColSize.value && dx > 0) return

    // we set next column size to 1fr such that
    // it adapts to newly calculated width of previous column
    sizesController.value[currentCol + 1] = '1fr'

    // Update the width of column
    sizesController.value[currentCol] = `${calculatedWidth}px`
  }

  // When user releases the mouse, remove the existing event listeners
  const mouseUpHandler = function () {
    resetSizes()
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
    resizer.classList.remove('resizing')
  }

  resizer.addEventListener('mousedown', mouseDownHandler)
}

const resizeLine = () => {
  if (!options.value.resize) return
  const tableEl = table.value
  const cols: HTMLElement[] = tableEl.querySelectorAll('.table-column')
  const rowsWrapper = tableEl.querySelector('.rows-wrapper')

  cols.forEach((col) => {
    const resizer = col.querySelector<HTMLDivElement>('.resizer')
    if (resizer) resizer.style.height = `${rowsWrapper.clientHeight}px`
  })
}

const createResizableTable = () => {
  if (!options.value.resize) return

  const tableEl = table.value
  const cols: HTMLElement[] = tableEl.querySelectorAll('.table-column')
  const rowsWrapper = tableEl.querySelector('.rows-wrapper')

  cols.forEach((col, idx) => {
    const resizer = document.createElement('div')
    resizer.classList.add('resizer')
    resizer.style.height = `${rowsWrapper.clientHeight}px`
    col.appendChild(resizer)
    createResizableColumn(col, resizer, idx)
  })

  resetSizes()
}

let resizeObserver: ResizeObserver

onMounted(() => {
  createResizableTable()
  resizeObserver = new ResizeObserver(() => resizeLine())
  resizeObserver.observe(table.value)
})

onUnmounted(() => {
  resizeObserver.disconnect()
})
</script>

<style lang="postcss">
.datatable-grid-columns {
  grid-template-columns: v-bind('sizes');
}

/* use v-bind for (max rows per page) */
.datatable-grid-rows {
  display: grid;
  grid-template-rows: repeat(v-bind(rowsLimit), minmax(0, 1fr));
}

.datatable-grid-rows-empty {
  display: grid;
  grid-template-rows: repeat(v-bind(rowsLimit), minmax(0, 3.57rem));
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

.loading {
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1s shine linear infinite;
}

.dark .dark\:loading-dark {
  background: linear-gradient(110deg, #1f2937 8%, #374151 18%, #1f2937 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1s shine linear infinite;
}

.search-wrapper {
  display: grid;
  grid-template-columns: minmax(0, 24rem) minmax(0, 1fr);
  align-items: center;
  column-gap: 1rem;
}

.resizer {
  /* Displayed at the right side of column */
  position: absolute;
  top: -15px;
  right: 0;
  width: 5px;
  cursor: col-resize;
  user-select: none;
}

.resizer:hover,
.resizing {
  @apply border-r-2 border-r-gray-400;
}
</style>
