<template>
  <div class="flex">
    <nav
      class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <span
        class="paginate-btn relative inline-flex items-center rounded-l-md border-gray-200 bg-gray-50 p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
        @click="() => page > 1 && setPage(page - 1)"
      >
        <span class="sr-only">Previous</span>
        <PhCaretLeft
          type="chevron-left"
          class="h-5 w-5"
          size="24"
          weight="bold"
        />
      </span>
      <template v-for="(value, index) in listPages" :key="index">
        <span
          class="paginate-btn relative inline-flex w-12 items-center justify-center border-gray-200 bg-gray-50 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-800"
          :class="value === page ? 'active bg-gray-100 dark:text-gray-900' : ''"
          @click="() => setPage(value)"
          >{{ value }}</span
        >
        <span
          v-if="showDot(index)"
          class="paginate-btn relative inline-flex w-12 items-center justify-center border-gray-200 bg-gray-50 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-800"
          >...</span
        >
      </template>

      <span
        class="paginate-btn relative inline-flex items-center rounded-r-md border-gray-200 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
        @click="() => page < pageCount && setPage(page + 1)"
      >
        <span class="sr-only">Next</span>
        <PhCaretRight
          type="chevron-right"
          class="h-5 w-5"
          size="24"
          weight="bold"
        />
      </span>
    </nav>
    <div v-if="showPageSize">
      <div ref="containerRef" class="relative ml-2 flex h-full flex-col">
        <div
          class="shadow-outline flex flex h-full h-8 items-center overflow-hidden rounded-md border-gray-200 bg-gray-50 p-1.5 shadow-inner focus-within:outline-none focus-within:ring dark:border-gray-600 dark:bg-gray-800"
          @click="toggleDropdown"
        >
          <div
            class="flex h-full w-full items-center bg-transparent text-current outline-none"
            :class="[$slots.prefix || 'pl-2']"
          >
            <div class="min-w-0 select-none truncate">{{ pageSize }}</div>
          </div>

          <div
            class="flex h-full flex-shrink-0 items-center pr-2 pl-2 text-gray-400"
          >
            <PhCaretDown
              :size="18"
              class="transition-transform duration-200"
              :class="{ 'rotate-180 transform': isOpen }"
            />
          </div>
        </div>

        <ul
          v-if="isOpen"
          class="absolute top-10 z-50 ml-0.5 w-full rounded-lg py-2 text-gray-700 shadow-2xl dark:bg-gray-700 dark:text-white"
        >
          <li
            v-for="size in [10, 25, 50]"
            :key="size"
            class="flex items-center justify-center px-4 py-1.5 transition-colors duration-200 hover:bg-gray-500 hover:text-white"
            :class="pageSize === size ? 'bg-gray-500 text-white ' : ''"
            @click="selectItem(size)"
          >
            <span>{{ size }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'
import {
  PhCaretLeft,
  PhCaretRight,
  PhCaretDown,
} from '@dnlsndr/vue-phosphor-icons'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  pageSize: {
    type: Number,
    default: 0,
  },
  totalCount: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 0,
  },
  showPageSize: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['update:page', 'update:pageSize'])

const { pageSize, totalCount, page } = toRefs(props)
const pageCount = ref(0)
const containerRef = ref(null)
const isOpen = ref(false)
const listPages = ref([])

const setPage = (value) => {
  emit('update:page', value)
}

watch([totalCount, pageSize, page], () => listPageShow())
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectItem = (value) => {
  if (value !== pageSize.value) {
    isOpen.value = false
    emit('update:pageSize', value)
  }
}

onClickOutside(containerRef, (e) => {
  if (isOpen.value && !containerRef.value.contains(e.target)) {
    isOpen.value = false
  }
})

const listPageShow = () => {
  pageCount.value = Math.ceil(totalCount.value / pageSize.value)
  const pages = []
  if (pageCount.value < 10) {
    for (let i = 1; i <= pageCount.value; i++) {
      pages.push(i)
    }
    listPages.value = pages
    return listPages.value
  }
  // try to keep 3 more pages each side of current page
  let start = page.value - 3 < 1 ? 1 : page.value - 3
  let end = page.value + 3 > pageCount.value ? pageCount.value : page.value + 3

  // if start or end is not next to two side, remove a page
  // because this case we will have 2 ... each side
  if (start === 1) end = 7 + start
  if (end === pageCount.value) start = end - 7

  if (end < pageCount.value - 1 && start > 2 && end - start === 6) {
    end -= 1
  }
  for (let i = start; i <= end; i++) {
    if (i > 0 && i < pageCount.value) {
      pages.push(i)
    }
  }
  if (pages[0] !== 1) {
    pages.unshift(1)
  }
  if (pages[pages.length - 1] !== pageCount.value) {
    pages.push(pageCount.value)
  }
  listPages.value = pages
  return listPages.value
}
const showDot = (index: number) => {
  if (listPages.value[index + 1] - listPages.value[index] > 1) return true
  return false
}

onMounted(() => {
  listPageShow()
})
</script>

<style lang="postcss" scoped>
.dark .paginate-btn {
  background: rgba(0, 0, 0, 0);
  color: #e5e7eb;
}

.dark .paginate-btn.active {
  background: #323f51;
}

.dark .paginate-btn:hover {
  background: rgba(31, 41, 55, var(--tw-bg-opacity));
}

.active {
  background-color: rgb(229 231 234) !important;
}

.dark .active {
  color: #111111 !important;
}
</style>
