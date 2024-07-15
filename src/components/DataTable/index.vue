<template>
  <div ref="table" class="flex w-[800px] flex-col gap-y-2 sm:gap-y-2 relative">
    <div v-if="search" class="search-wrapper">
      <Input v-model="searchModel" placeholder="Search" />
      <!-- Display filters -->
      <div>
        <slot name="filter" />
      </div>
    </div>
    <RobustNotice
      v-if="displayInfo && isSelectedAll()"
      variant="info"
      class="mb-0"
    >
      You've selected {{ selectedRows.length }} entries.
      <button
        type="button"
        class="dark:text-primay-300 font-semibold text-primary-400"
        @click="selectAll(true)"
      >
        Select all.
      </button>
    </RobustNotice>
    <slot name="header" />
    <div
      class="flex"
      :class="[
        options.stickyHeaderClass,
        horizontalScroll ? 'overflow-scroll' : 'overflow-hidden',
      ]"
    >
      <div
        v-if="options.firstColumnSticky"
        class="flex flex-col sticky left-0 z-20 h-max"
      >
        <div
          class="datatable-grid-column robust-datatable-first-header select-none items-center flex"
          :style="
            header?.clientHeight
              ? { height: header.clientHeight + 'px', width: firstColumnSize }
              : { width: firstColumnSize }
          "
          :class="[
            headerClass,
            horizontalScroll ? 'w-max' : '',
            options.stickyHeader ? 'sticky top-0 z-10' : '',
          ]"
        >
          <div class="checkbox">
            <Checkbox
              v-if="options.selection !== false"
              v-model="checkAllModel"
            />
          </div>
          <div
            class="robust-table-column relative flex min-h-[48px] items-center justify-between w-full"
            :class="[firstColumn?.class]"
          >
            <div
              v-if="!$slots[`c_${firstColumn?.key}`]"
              class="mr-auto overflow-hidden truncate break-words"
            >
              {{ firstColumn?.name }}
            </div>
            <slot v-else :name="`c_${firstColumn?.key}`" :data="firstColumn" />
            <button
              v-if="firstColumn?.sortable !== false"
              type="button"
              @click="sortColumn(firstColumn, $event)"
            >
              <PhSortAscending
                v-show="getDirection(firstColumn) === 1"
                class="text-gray-500"
                :size="20"
              />
              <PhSortDescending
                v-show="getDirection(firstColumn) === -1"
                class="text-gray-500"
                :size="20"
              />
              <PhEquals
                v-show="getDirection(firstColumn) === 0"
                class="text-gray-500"
                :size="20"
              />
            </button>
          </div>
        </div>
        <Separator v-if="!options.removeSeparators" class="hidden sm:block" />
        <div>
          <div
            v-for="(entry, idx) in sortedData"
            :key="idx"
            class="flex flex-col justify-between hover:bg-gray-100 hover:dark:bg-gray-700"
            @click="onClickRow(entry, idx)"
            @mouseover="emitMouseOverRow($event, entry)"
            @mouseleave="emitMouseLeaveRow($event, entry)"
            @mousemove="emitMouseMoveRow($event, entry)"
            @mouseenter="emitMouseEnterRow($event, entry)"
          >
            <div
              class="datatable-grid-columns flex flex-col gap-x-2 gap-y-2"
              :class="entry.rowClass ?? ''"
            >
              <!-- Columns -->
              <div
                class="grid min-h-[48px] grid-cols-2 items-center sm:flex"
                :class="firstColumn?.class ?? ''"
              >
                <div class="block sm:hidden" :class="firstColumn?.class ?? ''">
                  {{ firstColumn?.name }}
                </div>
                <slot
                  v-if="$slots[firstColumn?.key] && !loading"
                  :name="`${firstColumn?.key}`"
                  :data="entry"
                  :idx="idx"
                  :on-click="() => onClickCell(entry)"
                />
                <!-- Column content -->
                <div
                  v-else-if="!$slots[firstColumn?.key] && !loading"
                  class="w-full overflow-hidden break-words"
                  @click="() => onClickCell(entry)"
                >
                  {{
                    entry[firstColumn?.key] === undefined
                      ? 'No data'
                      : entry[firstColumn?.key]
                  }}
                </div>
                <div v-else class="loading dark:loading-dark h-6 w-full"></div>
              </div>
            </div>
            <slot
              name="collapsed"
              :data="entry"
              :style="{
                display: 'grid',
                gridTemplateColumns: sizes,
              }"
            />
            <Separator v-if="!options.removeSeparators" />
          </div>
        </div>
      </div>
      <div class="rows-wrapper flex flex-col h-max">
        <div
          ref="header"
          class="datatable-grid-columns robust-datatable-header hidden select-none items-center gap-x-2 sm:grid"
          :style="{
            gridTemplateColumns: sizes,
          }"
          :class="[
            headerClass,
            horizontalScroll ? 'w-max' : '',
            options.stickyHeader ? 'sticky top-0 z-10' : '',
          ]"
        >
          <div class="checkbox">
            <Checkbox
              v-if="options.selection !== false"
              v-model="checkAllModel"
            />
          </div>
          <div
            v-for="column in tableColumns"
            :key="column.key"
            class="robust-table-column relative flex min-h-[48px] items-center justify-between"
            :class="[column.class]"
          >
            <div
              v-if="!$slots[`c_${column.key}`]"
              class="mr-auto overflow-hidden truncate break-words"
            >
              {{ column.name }}
            </div>
            <slot v-else :name="`c_${column.key}`" :data="column" />
            <button
              v-if="column.sortable !== false"
              type="button"
              @click="sortColumn(column, $event)"
            >
              <PhSortAscending
                v-show="getDirection(column) === 1"
                class="text-gray-500"
                :size="20"
              />
              <PhSortDescending
                v-show="getDirection(column) === -1"
                class="text-gray-500"
                :size="20"
              />
              <PhEquals
                v-show="getDirection(column) === 0"
                class="text-gray-500"
                :size="20"
              />
            </button>
          </div>
        </div>

        <Separator v-if="!options.removeSeparators" class="hidden sm:block" />

        <div>
          <!-- Rows -->
          <div
            v-for="(entry, idx) in sortedData"
            :key="idx"
            class="flex flex-col justify-between hover:bg-gray-100 hover:dark:bg-gray-700"
            @click="onClickRow(entry, idx)"
            @mouseover="emitMouseOverRow($event, entry)"
            @mouseleave="emitMouseLeaveRow($event, entry)"
            @mousemove="emitMouseMoveRow($event, entry)"
            @mouseenter="emitMouseEnterRow($event, entry)"
          >
            <div v-if="entry.isHeader">
              <slot
                name="header-row"
                :data="entry"
                :style="{
                  gridTemplateColumns: sizes,
                }"
              />
            </div>
            <div v-else>
              <div
                class="datatable-grid-columns flex flex-col gap-x-2 gap-y-2 sm:grid sm:items-center"
                :style="{
                  gridTemplateColumns: sizes,
                }"
                :class="entry.rowClass ?? ''"
              >
                <div>
                  <Checkbox
                    v-if="options.selection !== false"
                    v-model="checkboxSelected"
                    :value="entry[options.id]"
                  />
                </div>
                <!-- Columns -->
                <div
                  v-for="column in tableColumns"
                  :key="column.key"
                  class="grid min-h-[48px] grid-cols-2 items-center sm:flex"
                  :class="column.class ?? ''"
                >
                  <div class="block sm:hidden" :class="column.class ?? ''">
                    {{ column.name }}
                  </div>
                  <slot
                    v-if="$slots[column.key] && !loading"
                    :name="`${column.key}`"
                    :data="entry"
                    :idx="idx"
                    :on-click="() => onClickCell(entry)"
                  />
                  <!-- Column content -->
                  <div
                    v-else-if="!$slots[column.key] && !loading"
                    class="w-full overflow-hidden break-words"
                    @click="() => onClickCell(entry)"
                  >
                    {{
                      entry[column.key] === undefined
                        ? 'No data'
                        : entry[column.key]
                    }}
                  </div>
                  <div
                    v-else
                    class="loading dark:loading-dark h-6 w-full"
                  ></div>
                </div>
              </div>
              <slot
                name="collapsed"
                :data="entry"
                :style="{
                  display: 'grid',
                  gridTemplateColumns: sizes,
                }"
              />
            </div>
            <Separator v-if="!options.removeSeparators" />
          </div>
        </div>
      </div>
    </div>
    <slot
      v-if="$slots.footer"
      name="footer"
      :data="{
        size: sizes,
      }"
    />
    <div v-if="isFooterVisible" class="flex items-center justify-between py-2">
      <div v-if="page !== undefined" class="flex items-center gap-x-2">
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
      <div
        v-if="rowsLimitOptions !== undefined"
        class="flex items-center gap-x-2"
      >
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
import { computed, inject } from 'vue';
import { onMounted, onUnmounted, PropType, ref, toRefs, watch } from 'vue';
import Separator from '../Separator/index.vue';
import {
  PhSortDescending,
  PhSortAscending,
  PhCaretLeft,
  PhCaretDoubleLeft,
  PhCaretRight,
  PhCaretDoubleRight,
  PhEquals,
} from '@phosphor-icons/vue';
import Select from '../Select/index.vue';
import Checkbox from '../Checkbox/index.vue';
import Input from '../Input/index.vue';
import Fuse from 'fuse.js';
import { debouncedWatch } from '@vueuse/shared';
import { RobustNotice } from '..';

export type Direction = 0 | -1 | 1;

export interface Column {
  key: string;
  name: string;
  class?: string;
  size?: string;
  direction?: Direction;
  sortable?: boolean;
  resizable?: boolean;
  fixed?: boolean;
  sort?: (
    a: number | string | boolean,
    b: number | string | boolean,
    direction: 'asc' | 'desc'
  ) => number;
}

type DataTableOptions = {
  columns: Column[];
  /* key of identifier */
  id: string;
  serverSide?: boolean;
  rowsLimit?: number;
  page?: number;
  maxPage: number;
  rowsLimitOptions?: number[];
  searchKeys?: string[];
  resize: boolean;
  minColSize: number;
  ghostColumns?: boolean;
  defaultColSize?: string;
  selection?: boolean;
  search?: boolean;
  searchModel?: string;
  robustSearch?: boolean;
  stickyHeader?: boolean;
  stickyHeaderClass?: string;
  firstColumnSticky?: boolean;
  removeSeparators?: boolean;
};

const defaultOptions: Partial<DataTableOptions> = {
  serverSide: false,
  rowsLimit: 10,
  page: 1,
  maxPage: 1,
  rowsLimitOptions: [10, 25, 50],
  resize: true,
  minColSize: 100,
  ghostColumns: true,
  defaultColSize: '150px',
  selection: true,
  search: true,
  searchModel: '',
};

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
  horizontalScroll: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:page',
  'update:rowsLimit',
  'update:sort',
  'update:search',
  'update:selectedRows',
  'update:resize',
  'clickRow',
  'clickCell',
  'onHoverRow',
  'onLeaveRow',
  'onMoveRow',
  'onEnterRow',
]);

const { data, options, loading, headerClass, horizontalScroll } = toRefs(props);

const table = ref();
const header = ref();
const search = ref(
  options.value.search === undefined
    ? defaultOptions.search
    : options.value.search
);

const minColSize = computed(() => {
  return options.value.minColSize ?? defaultOptions.minColSize;
});

const fuseOptions = computed(() => ({
  includeScore: false,
  keys: options.value.searchKeys ?? options.value.columns.map((c) => c.key),
  threshold: 0.3,
}));

const checkAllModel = computed({
  get() {
    return selectedRows.value.length > 0 || selectedAll.value;
  },
  set(value) {
    if (!value) {
      selectedRows.value = [];
      emit('update:selectedRows', {
        type: 'include',
        data: selectedRows.value,
      });
      selectAll(false);
    } else {
      selectedRows.value = sortedData.value.map((d) => d[options.value.id]);
      emit('update:selectedRows', {
        type: 'include',
        data: selectedRows.value,
      });
      displayInfo.value = true;
    }
  },
});

// const checkAllModel = computed(() => selectedRows.value.length > 0)

const selectedRows = ref([]);
const excludedRows = ref([]);
const searchModel = ref(
  options.value.searchModel === undefined
    ? defaultOptions.searchModel
    : options.value.searchModel
);
const displayInfo = ref(false);
const selectedAll = ref(false);

const checkboxSelected = computed({
  get() {
    return selectedRows.value;
  },
  set(value) {
    if (options.value.serverSide && selectedAll.value) {
      const excluded = [];
      for (const row of data.value) {
        if (!value.includes(row[options.value.id])) {
          excluded.push(row[options.value.id]);
        }
      }
      excludedRows.value = excluded;
    } else {
      emit('update:selectedRows', {
        type: 'include',
        data: selectedRows.value,
      });
    }
  },
});

const rowsLimitController = ref(options.value.rowsLimit ?? data.value.length);
const rowsLimit = computed({
  get() {
    if (options.value.serverSide) {
      return options.value.rowsLimit;
    }
    return rowsLimitController.value;
  },
  set(value: number) {
    rowsLimitController.value = value;
  },
});

const rowsLimitOptionsInit = () => {
  const optionsArray = options.value.rowsLimitOptions;
  if (!optionsArray) {
    return undefined;
  }
  return optionsArray.map((o) => ({
    value: o,
    title: `${o}`,
  }));
};
const rowsLimitOptions = ref(rowsLimitOptionsInit());

const ghostColumns = computed(() => {
  if (
    options.value.ghostColumns === undefined ||
    options.value.ghostColumns === true
  ) {
    return rowsLimit.value;
  }
  return sortedData.value.length;
});

const sortedData = computed(() => {
  if (loading.value) {
    return Array(rowsLimit.value).fill({});
  }
  if (options.value.serverSide) {
    return data.value;
  }
  const sorted = sortData();
  gotoPage(page.value);
  const pageOffset = page.value - 1;
  const currPage = pageOffset * rowsLimit.value;
  return sorted.slice(currPage, currPage + rowsLimit.value);
});

const initMaxPage = () => {
  if (options.value.serverSide) {
    return options.value.maxPage ?? defaultOptions.maxPage;
  }
  return Math.ceil(data.value.length / rowsLimit.value);
};
const maxPageController = ref(initMaxPage());

const maxPage = computed({
  get() {
    if (options.value.serverSide) {
      return initMaxPage();
    }
    return maxPageController.value;
  },
  set(value) {
    maxPageController.value = value;
  },
});

const initPage = () => {
  if (!options.value.page) {
    return defaultOptions.page;
  }
  if (options.value.page > maxPage.value) {
    return defaultOptions.page;
  }
  return options.value.page;
};

const pageController = ref(initPage());

const page = computed({
  get() {
    if (options.value.serverSide) {
      return options.value.page;
    }
    return pageController.value;
  },
  set(value) {
    pageController.value = value;
  },
});

const initSorting = () => {
  const sortArray: Column[] = [];
  for (const column of options.value.columns) {
    sortArray.push({
      direction: 0,
      ...column,
    });
  }
  return sortArray;
};

// Used for storing column order direction
// key: Column.key
// value: Sort
const sorting = ref<Column[]>(initSorting());

const isPercentage = (str: string) => {
  if (str) {
    return str.includes('%');
  }
};

const isPx = (str: string) => {
  if (str) {
    return str.includes('px');
  }
};

const initSizes = () => {
  const colsSizeArray = options.value.columns.map(
    (c) =>
      c.size ?? options.value.defaultColSize ?? defaultOptions.defaultColSize
  );

  // checkbox
  const size = options.value.selection === false ? '0px' : '24px';
  colsSizeArray.unshift(size);
  return colsSizeArray;
};

const sizesController = ref(initSizes());

const sizes = computed(() => {
  let controller = [...sizesController.value];
  if (options.value.firstColumnSticky) {
    controller.splice(1, 1);
  }
  const colsSizeArray = controller.map((size) => {
    return size !== undefined ? `${size}` : `minmax(0,1fr)`;
  });
  return colsSizeArray.join(' ');
});

const firstColumnSize = computed(() => {
  return sizesController.value[1];
});

const firstColumn = computed(() => {
  return options.value.columns[0];
});

const tableColumns = computed(() => {
  if (options.value.firstColumnSticky) {
    return options.value.columns.slice(1);
  } else {
    return options.value.columns;
  }
});

const robustSearch = (search: string, data: unknown[], keys: string[]) => {
  const matchingDataMapped = data.map((d: any) => {
    const matchingFilter = [];
    keys.forEach((k) => matchingFilter.push(String(d[k]).toLowerCase()));
    d.matchingFilter = matchingFilter;
    return d;
  });

  const searchWords = search.toLowerCase().split(' ');

  const filteredData = matchingDataMapped.filter((d: any) => {
    const searchWordsMatchAny = searchWords.every((s: string) =>
      d.matchingFilter.some((f: any) => f.includes(s))
    );

    return (
      d.matchingFilter.includes(String(search).toLowerCase()) ||
      searchWordsMatchAny
    );
  });

  return filteredData;
};

const sortData = () => {
  let cpData = Array.from(data.value);

  if (searchModel.value !== '') {
    if (options.value.robustSearch) {
      cpData = robustSearch(searchModel.value, cpData, fuseOptions.value.keys);
    } else {
      const fuse = new Fuse(cpData, fuseOptions.value);
      cpData = fuse.search(searchModel.value).map((d) => d.item);
    }
  }

  if (!options.value.serverSide) {
    maxPage.value = Math.ceil(cpData.length / rowsLimit.value);
  }

  const sorted = cpData.sort((a, b) => {
    for (const sort of sorting.value) {
      // Skip unsorted keys
      if (sort.direction === 0) {
        continue;
      }

      const sortKey = sort.key;

      if (sort.direction === -1) {
        if (sort.sort) {
          const rSort = sort.sort(
            (a as any)[sortKey],
            (b as any)[sortKey],
            'desc'
          );
          if (rSort) {
            return rSort;
          }
        } else {
          if (a[sortKey] > b[sortKey]) {
            return -1;
          }
          if (a[sortKey] < b[sortKey]) {
            return 1;
          }
        }
      } else if (sort.direction === 1) {
        if (sort.sort) {
          const rSort = sort.sort(
            (a as any)[sortKey],
            (b as any)[sortKey],
            'asc'
          );
          if (rSort) {
            return rSort;
          }
        } else {
          if (a[sortKey] > b[sortKey]) {
            return 1;
          }
          if (a[sortKey] < b[sortKey]) {
            return -1;
          }
        }
      }
    }
  });
  return sorted;
};

const sortOnShiftClick = (cSort: Column) => {
  const index = sorting.value.findIndex((s) => s.key === cSort.key);
  const tempSortObj = sorting.value[index];

  // on click at the latest clicked column change direction
  if (tempSortObj.direction === 0 || index === sorting.value.length - 1) {
    // changing direction based on current direction
    // 0 to 1 (default to ascending)
    // 1 to -1 (ascending to descending)
    // -1 to 0 (descending to default)
    switch (tempSortObj.direction) {
      case 0:
        tempSortObj.direction = 1;
        break;
      case 1:
        tempSortObj.direction = -1;
        break;
      default:
        tempSortObj.direction = 0;
    }
  }
  // otherwise we reset column to default value
  else {
    tempSortObj.direction = 0;
  }

  sorting.value.splice(index, 1);

  // placing element at the end of the array to keep history
  // in case of ascending and descendng direction
  if (tempSortObj.direction) {
    sorting.value.push(tempSortObj);
  }
  // if element is at default direction
  // placing it at the beginning
  else {
    sorting.value.unshift(tempSortObj);
  }

  // emit directions for server side sorting
  const directions = sorting.value.filter((c) => c.direction !== 0);
  emit('update:sort', directions);
};

const sortOnSimpleClick = (cSort: Column) => {
  const index = sorting.value.findIndex((s) => s.key === cSort.key);
  const tempSortObj = sorting.value[index];

  // changing direction based on current direction
  // 0 to 1 (default to ascending)
  // 1 to -1 (ascending to descending)
  // -1 to 0 (descending to default)
  switch (tempSortObj.direction) {
    case 0:
      tempSortObj.direction = 1;
      break;
    case 1:
      tempSortObj.direction = -1;
      break;
    default:
      tempSortObj.direction = 0;
  }

  sorting.value.splice(index, 1);

  // Resetting all other column directions on slimple click
  // Shift + Click used for multiple sorting
  sorting.value = sorting.value.map((cSort) => ({
    ...cSort,
    direction: 0,
  }));

  // placing element at the end of the array to keep history
  // in case of ascending and descendng direction
  sorting.value.push(tempSortObj);

  // emit directions for server side sorting
  const directions = sorting.value.filter((c) => c.direction !== 0);
  emit('update:sort', directions);
};

const sortColumn = (cSort: Column, event: MouseEvent) => {
  if (loading.value) {
    return;
  }
  // if sortable is explicitly false -> not sorting
  // since it's sortable by default
  if (cSort.sortable === false) {
    return;
  }
  if (event.shiftKey) {
    return sortOnShiftClick(cSort);
  }
  return sortOnSimpleClick(cSort);
};

const getDirection = (column: Column) => {
  const dir = sorting.value.find((s) => s.key === column.key);
  if (dir) {
    return dir.direction;
  }
  const foundColumn = options.value.columns.find(
    (col) => col.key === column.key
  );
  const newColumn = {
    direction: 0,
    ...foundColumn,
  };
  sorting.value.push(newColumn as Column);
  return newColumn;
};

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

const gotoPage = (pageNum: number, emitEvent = true) => {
  if (loading.value) {
    return;
  }
  if (options.value.serverSide) {
    if (emitEvent) {
      emit('update:page', pageNum);
    }
    return;
  }
  page.value = clamp(pageNum, 1, maxPage.value);
};

const nextPage = () => gotoPage(page.value + 1);
const prevPage = () => gotoPage(page.value - 1);
const firstPage = () => gotoPage(1);
const lastPage = () => {
  if (!options.value.serverSide) {
    return gotoPage(Infinity);
  }
  return gotoPage(options.value.maxPage);
};

const rowsLimitChange = (newLimit: number) => {
  rowsLimit.value = newLimit;
  gotoPage(page.value);
  emit('update:rowsLimit', newLimit);
};

debouncedWatch(
  searchModel,
  () => {
    emit('update:search', searchModel.value);
  },
  {
    debounce: 150,
  }
);

watch(maxPage, () => {
  gotoPage(page.value);
});

watch(excludedRows, () => {
  if (options.value.serverSide && selectedAll.value) {
    emit('update:selectedRows', {
      type: 'exclude',
      data: excludedRows.value,
    });
  }
});

watch(data, () => {
  if (options.value.serverSide && selectedAll.value) {
    const newSelectedRows = [];
    for (const row of data.value) {
      if (!excludedRows.value.includes(row[options.value.id])) {
        newSelectedRows.push(row[options.value.id]);
      }
    }
    selectedRows.value = newSelectedRows;
  }
  if (options.value.rowsLimit === undefined) {
    rowsLimitController.value = data.value.length;
  }
});

/*
 Resets column sizes to px value.
**/
// TODO: Bring back gap-x-2 between columns
const resetSizes = (resizable = false) => {
  const tableEl = table.value;
  const cols: HTMLElement[] = tableEl.querySelectorAll('.robust-table-column');
  const rowsWrapper = tableEl.querySelector('.rows-wrapper');
  const sizes: string[] = [];
  cols.forEach((col, idx) => {
    if (resizable && options.value.columns[idx].fixed !== true) {
      const perc =
        col && rowsWrapper
          ? (col.clientWidth / rowsWrapper.clientWidth) * 100
          : 0;
      sizesController.value[idx + 1] = `minmax(0, ${perc}%)`;
      sizes.push(`${perc}%`);
    } else {
      sizesController.value[idx + 1] = `${col.clientWidth}px`;
      sizes.push(`${col.clientWidth}px`);
    }
  });
  if (resizable) {
    emit('update:resize', sizes);
  }
};

const initColSize = (sizes: string[]) => {
  sizes.forEach((sz, idx) => {
    sizesController.value[idx + 1] = `minmax(0, ${sz})`;
  });
};

/*
  Creates resizable column by adding event listeners.
  Calculates new size of column by calculating offset
  of mouse x position before and after resize.
**/
const createResizableColumn = function (
  col: HTMLElement,
  resizer: HTMLElement,
  resizerHandle: HTMLElement,
  idx: number
) {
  if (!options.value.resize) {
    return;
  }
  // Track the current position of mouse
  let x = 0;
  let w = 0;

  // Storing width of coulmn and mouse X position
  // for calculating offset between current and new X postion
  const mouseDownHandler = function (e: MouseEvent) {
    resetSizes();
    const currentCol = idx + 1;
    sizesController.value[currentCol + 1] =
      `minmax(${minColSize.value}px, 1fr)`;
    // Get the current mouse position
    x = e.clientX;

    // Calculate the current width of column
    w = col.clientWidth;

    // Attach listeners for document's events
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    const body = document.querySelector('body');
    body.classList.add('resizer-cursor');

    const resizers = document.querySelectorAll('.resizer');
    resizers.forEach((r) => r.classList.add('resizer-not-active'));

    resizer.classList.remove('resizer-not-active');
    resizer.classList.add('resizing');
  };

  const mouseMoveHandler = function (e: MouseEvent) {
    // Determine how far the mouse has been moved
    const dx = e.clientX - x;
    const calculatedWidth = w + dx;

    const currentCol = idx + 1;
    const size = Math.max(calculatedWidth, minColSize.value);

    // Update the width of column
    sizesController.value[currentCol] =
      `minmax(${minColSize.value}px,${size}px)`;

    // we set next column size to 1fr such that
    // it adapts to newly calculated width of previous column
    // const nextColWidth = Math.max(
    //   parseInt(sizesController.value[currentCol + 1]) - dx,
    //   minColSize.value
    // );
    // const normalized = isNaN(nextColWidth) ? minColSize.value : nextColWidth;
    // sizesController.value[
    //   currentCol + 1
    // ] = `minmax(${minColSize.value}px, 1fr)`;
  };

  // When user releases the mouse, remove the existing event listeners
  const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    resetSizes(true);

    const body = document.querySelector('body');
    body.classList.remove('resizer-cursor');

    const resizers = document.querySelectorAll('.resizer');
    resizers.forEach((r) => r.classList.remove('resizer-not-active'));
    resizer.classList.remove('resizing');
  };

  resizerHandle.addEventListener('mousedown', mouseDownHandler);
};

// resetting resize Line
const resizeLine = () => {
  if (!options.value.resize) {
    return;
  }
  const tableEl = table.value;
  const cols: HTMLElement[] = tableEl.querySelectorAll('.robust-table-column');
  const rowsWrapper = tableEl.querySelector('.rows-wrapper');

  cols.forEach((col, i) => {
    if (i < cols.length - 1) {
      const resizer = col.querySelector<HTMLDivElement>('.resizer');
      const resizerHandle =
        col.querySelector<HTMLDivElement>('.resizer-handle');

      if (resizer) {
        resizer.style.height = `${rowsWrapper.clientHeight}px`;
      }

      if (resizerHandle) {
        resizerHandle.style.height = `${header.value.clientHeight}px`;
      }
    }
  });
};

const createResizableTable = () => {
  if (!options.value.resize || horizontalScroll.value) {
    return;
  }

  const tableEl = table.value;
  const cols: HTMLElement[] = tableEl.querySelectorAll('.robust-table-column');
  const rowsWrapper = tableEl.querySelector('.rows-wrapper');

  cols.forEach((col, idx) => {
    if (idx < cols.length - 1) {
      if (options.value.columns[idx].resizable === false) {
        return;
      }
      const resizer = document.createElement('div');
      const resizerHandle = document.createElement('div');

      resizerHandle.addEventListener('click', (e) => e.stopPropagation());

      resizer.classList.add('resizer');
      resizerHandle.classList.add('resizer-handle');

      resizerHandle.style.height = `${header.value.clientHeight}px`;
      resizerHandle.style.zIndex = '2';
      resizer.style.height = `${rowsWrapper.clientHeight}px`;
      col.appendChild(resizerHandle);
      col.appendChild(resizer);
      createResizableColumn(col, resizer, resizerHandle, idx);
    }
  });

  // resetSizes()
};

const selectAll = (value: boolean) => {
  selectedAll.value = value;

  if (selectedAll.value) {
    selectedRows.value = data.value.map((d) => d[options.value.id]);
    emit('update:selectedRows', {
      type: 'exclude',
      data: [],
    });
    displayInfo.value = false;
  } else {
    if (options.value.serverSide) {
      excludedRows.value = [];
    }
    selectedRows.value = [];
    displayInfo.value = false;
  }
};

const isFooterVisible = computed(() => {
  return maxPage.value > 1 || rowsLimitOptions.value !== undefined;
});

const isSelectedAll = () => {
  return (
    (!options.value.serverSide &&
      selectedRows.value.length !== data.value.length) ||
    options.value.serverSide
  );
};

const onClickRow = (data: any, idx: number) => {
  emit('clickRow', data, idx);
};

const onClickCell = (data: any) => {
  emit('clickCell', data);
};

let resizeObserver: ResizeObserver;

const onResize = () => {
  resizeLine();
};

const getSpace = () => {
  // gap between columns 8px
  const padding = 8;
  let sizes = options.value.columns.map((c) => {
    if (c.size && !isPercentage(c.size) && !isPx(c.size)) {
      throw Error('Only "px" and "%" units are allowed for column size!');
    }
    const size =
      c.size ?? options.value.defaultColSize ?? defaultOptions.defaultColSize;
    const type = isPercentage(size) ? '%' : 'px';
    return {
      type,
      value: parseInt(size),
    };
  });
  const headerWidth = header.value.clientWidth;
  const checkboxWidth =
    header.value.querySelector('.checkbox').clientWidth + padding;
  const availableSpace = headerWidth - checkboxWidth;
  const fixedSpace = sizes
    .filter((c) => c.type === 'px')
    .reduce((acc, curr) => acc + curr.value, 0);
  const percentages = sizes
    .filter((c) => c.type === '%')
    .reduce((acc, curr) => acc + curr.value, 0);
  const scale = availableSpace / fixedSpace;
  const percentageScale = 100 / percentages;
  const responsiveSpace = Math.max(availableSpace - fixedSpace, 0);
  const perc = (c: any) => {
    const t = ((c.value * percentageScale) / 100) * responsiveSpace;
    const t2 = (t / availableSpace) * 100;
    return t2;
  };
  if (fixedSpace > availableSpace) {
    sizes = sizes.map((c) => ({
      ...c,
      value: c.type === 'px' ? c.value * scale : c.value,
    }));
  }
  sizes = sizes.map((c) => ({
    ...c,
    value: c.type === '%' ? perc(c) : c.value,
  }));
  return {
    sizes,
    available: availableSpace,
    responsive_space: responsiveSpace,
  };
};

const emitMouseOverRow = (e: MouseEvent, data: any) => {
  emit('onHoverRow', e, data);
};

const emitMouseMoveRow = (e: MouseEvent, data: any) => {
  emit('onMoveRow', e, data);
};

const emitMouseEnterRow = (e: MouseEvent, data: any) => {
  emit('onEnterRow', e, data);
};

const emitMouseLeaveRow = (e: MouseEvent, data: any) => {
  emit('onLeaveRow', e, data);
};

const initSpace = () => {
  const space = getSpace();
  const newSizeValues = space.sizes.map((s) => s.value + s.type);
  initColSize(newSizeValues);
};

watch(
  () => options.value.columns,
  () => {
    if (!horizontalScroll.value) initSpace();
  },
  {
    deep: true,
  }
);

watch(
  () => horizontalScroll,
  () => {
    if (!horizontalScroll.value) initSpace();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  createResizableTable();
  if (!horizontalScroll.value) initSpace();
  resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(table.value);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
});
</script>

<style lang="postcss">
/* .datatable-grid-columns { */
/*   grid-template-columns: v-bind('sizes'); */
/* } */

/* use v-bind for (max rows per page) */
.datatable-grid-rows {
  display: grid;
  grid-template-rows: repeat(v-bind(ghostColumns), minmax(0, 1fr));
}

.datatable-grid-rows-empty {
  display: grid;
  grid-template-rows: repeat(v-bind(ghostColumns), minmax(0, 3.57rem));
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
  position: absolute;
  top: 0;
  right: -4px;
  width: 1px;
  user-select: none;
  height: 999999px;
}

.resizer-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
  width: 8px;
  cursor: col-resize;
}

.resizer-handle:hover + .resizer:not(.resizer-not-active) {
  @apply visible flex bg-gray-400;
}

.resizing {
  @apply visible flex bg-gray-400;
}

.robust-table-column.robust-table-column-not-active {
  cursor: col-resize;
}

.resizer-cursor * {
  cursor: col-resize;
}
</style>
