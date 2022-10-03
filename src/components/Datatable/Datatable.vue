<template>
  <div class="flex flex-col gap-y-2 sm:gap-y-0">
    <div class="datatable-grid-columns hidden select-none gap-x-2 p-2 sm:grid">
      <div v-for="column in options.columns" :class="column.class ?? ''">
        <div
          class="flex cursor-pointer gap-x-1"
          @click="sortColumn(column, $event)"
        >
          <div class="overflow-hidden break-words">
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

    <div class="datatable-grid-rows">
      <!-- Rows -->
      <div class="flex flex-col justify-between" v-for="entry in sortedData">
        <div
          class="datatable-grid-columns flex flex-col gap-y-2 gap-x-2 p-2 sm:grid"
        >
          <!-- Columns -->
          <div
            class="grid grid-cols-2 sm:flex"
            v-for="column in options.columns"
            :class="column.class ?? ''"
          >
            <!-- Column name on mobile device -->
            <div class="block sm:hidden">{{ column.name }}</div>

            <!-- Column content -->
            <div v-if="!loading" class="overflow-hidden break-words">
              <div v-if="!$slots[column.key]">
                {{ entry[column.key] ?? 'No data' }}
              </div>
              <slot :name="`${column.key}`" :data="entry" :row="entry" />
            </div>
            <div v-else class="loading dark:loading-dark h-6 w-full"></div>
          </div>
        </div>
        <Separator />
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
          @change="rowsLimitChange"
          v-model="rowsLimit"
          :options="rowsLimitOptions"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { PropType, ref, toRefs } from 'vue'
import Separator from '../Separator/Separator.vue'
import {
  PhCaretUp,
  PhCaretDown,
  PhCaretLeft,
  PhCaretDoubleLeft,
  PhCaretRight,
  PhCaretDoubleRight,
} from '@dnlsndr/vue-phosphor-icons'
import Select from '../Select/Select.vue'

type Column = {
  name: string
  key: string
  class?: string
  size?: string
  sort?: (a: any, b: any, direction: 'asc' | 'desc') => number
}

type Sort = {
  key: string
  name: string
  direction: Direction
  sort?: (a: any, b: any, direction: 'asc' | 'desc') => number
}

type Direction = 0 | -1 | 1

type DataTableOptions = {
  columns: Column[]
  serverSide?: boolean
  rowsLimit?: number
  page?: number
  maxPage: number
  rowsLimitOptions?: number[]
}

const defaultOptions: Partial<DataTableOptions> = {
  serverSide: false,
  rowsLimit: 10,
  page: 1,
  maxPage: 1,
  rowsLimitOptions: [10, 25, 50],
}

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
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
})

const emit = defineEmits(['update:page', 'update:rowsLimit', 'update:sort'])

const { data, options, loading } = toRefs(props)

const rowsLimit = ref(options.value.rowsLimit ?? defaultOptions.rowsLimit)

const rowsLimitOptionsInit = () => {
  let optionsArray =
    options.value.rowsLimitOptions ?? defaultOptions.rowsLimitOptions
  return optionsArray.map((o) => ({
    value: o,
    title: `${o}`,
  }))
}
const rowsLimitOptions = ref(rowsLimitOptionsInit())

const sortedData = computed(() => {
  if (loading.value) return Array(rowsLimit.value).fill({} as any)
  if (options.value.serverSide) return data.value
  const sorted = sortData()
  const pageOffset = page.value - 1
  const currPage = pageOffset * rowsLimit.value
  return sorted.slice(currPage, currPage + rowsLimit.value)
})

const maxPage = () => {
  if (options.value.serverSide)
    return options.value.maxPage ?? defaultOptions.maxPage
  return Math.ceil(data.value.length / rowsLimit.value)
}

const initPage = () => {
  if (!options.value.page) return defaultOptions.page
  if (options.value.page > maxPage()) return defaultOptions.page
  return options.value.page
}

const page = ref(initPage())

const initSorting = () => {
  // const sortMap = new Map<string, Sort>()
  // for (const column of options.value.columns) {
  //   sortMap.set(column.key, {
  //     name: column.name,
  //     direction: 0,
  //   })
  // }
  // return sortMap
  const sortArray: Sort[] = []
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
const sorting = ref<Sort[]>(initSorting())

const sizes = computed(() => {
  const colsSizeArray = options.value.columns.map((col) =>
    col.size !== undefined ? `minmax(0, ${col.size})` : 'minmax(0, 1fr)'
  )
  return colsSizeArray.join(' ')
})

// const getHeighestRow = () => {
//   rows.value.forEach((el) => {
//     const h = el.clientHeight
//     maxHeight.value = Math.max(h, maxHeight.value)
//   })
//   console.log(maxHeight.value)
// }

const sortData = () => {
  const cpData = Array.from(data.value)
  const sorted = cpData.sort((a, b) => {
    for (const sort of sorting.value) {
      // Skip unsorted keys
      if (sort.direction === 0) continue

      const sortKey = sort.key

      if (sort.direction === -1) {
        if (sort.sort) {
          const rSort = sort.sort(a[sortKey], b[sortKey], 'desc')
          if (rSort) return rSort
        } else {
          if (a[sortKey] > b[sortKey]) return -1
          if (a[sortKey] < b[sortKey]) return 1
        }
      } else if (sort.direction === 1) {
        if (sort.sort) {
          const rSort = sort.sort(a[sortKey], b[sortKey], 'asc')
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

const sortOnShiftClick = (cSort: Sort) => {
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

const sortOnSimpleClick = (cSort: Sort) => {
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

const sortColumn = (cSort: Sort, event: MouseEvent) => {
  if (loading.value) return
  if (event.shiftKey) return sortOnShiftClick(cSort)
  return sortOnSimpleClick(cSort)
}

const getDirection = (column: Sort) => {
  const dir = sorting.value.find((s) => s.key === column.key)
  return dir.direction
}

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max)

const gotoPage = (pageNum: number) => {
  if (loading.value) return
  if (options.value.serverSide) {
    emit('update:page', page.value)
    return
  }
  page.value = clamp(pageNum, 1, maxPage())
}

const nextPage = () => gotoPage(page.value + 1)
const prevPage = () => gotoPage(page.value - 1)
const firstPage = () => gotoPage(1)
const lastPage = () => gotoPage(Infinity)

const rowsLimitChange = (newLimit: number) => {
  rowsLimit.value = newLimit
  gotoPage(page.value)
  emit('update:rowsLimit', newLimit)
}
</script>

<style lang="postcss" scoped>
.datatable-grid-columns {
  grid-template-columns: v-bind('sizes');
}

/* use v-bind for (max rows per page) */
.datatable-grid-rows {
  display: grid;
  grid-template-rows: repeat(v-bind(rowsLimit), minmax(0, 1fr));
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
</style>
