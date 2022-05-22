
<template>
  <div class="flex">
    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination">
      <span @click="() => page > 1 && setPage(page - 1)"
        class="paginate-btn relative inline-flex items-center p-2 rounded-l-md border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800  text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span class="sr-only">Previous</span>
        <PhCaretLeft type="chevron-left" class="h-5 w-5" size="24"
          weight="bold" />
      </span>
      <template v-for="(value, index) in listPages" :key="index">
        <span @click="() => setPage(value)"
          class="paginate-btn relative inline-flex items-center justify-center w-12 py-2 border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800  text-sm font-medium text-gray-700 hover:bg-gray-300"
          :class="value === page ? 'bg-gray-200 active dark:text-gray-900' : ''">{{
              value
          }}</span>
        <span v-if="showDot(index)"
          class="paginate-btn relative inline-flex items-center justify-center w-12 py-2 border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800  text-sm font-medium text-gray-700 hover:bg-gray-300">...</span>
      </template>

      <span @click="() => page < pageCount && setPage(page + 1)"
        class="paginate-btn relative inline-flex items-center px-2 py-2 rounded-r-md border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800  text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span class="sr-only">Next</span>
        <PhCaretRight type="chevron-right" class="h-5 w-5" size="24"
          weight="bold" />
      </span>
    </nav>
    <div v-if="showPageSize">
      <div class="flex flex-col ml-2 h-full relative" ref="containerRef">
        <div
          class="flex items-center p-1.5 h-full border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800 rounded-md overflow-hidden shadow-inner flex focus-within:outline-none focus-within:ring shadow-outline h-8"
          @click="toggleDropdown">
          <div
            class="bg-transparent w-full h-full text-current outline-none flex items-center"
            :class="[$slots.prefix || 'pl-2']">
            <div class="truncate min-w-0 select-none">{{ pageSize }}</div>
          </div>

          <div class="h-full flex-shrink-0 flex items-center pr-2 text-gray-400"
            :class="['pl-2']">
            <ph-caret-down :size="18" class="transition-transform duration-200"
              :class="{ 'transform rotate-180': isOpen }" />
          </div>
        </div>

        <ul v-if="isOpen"
          class="absolute top-10 ml-0.5 z-50 shadow-2xl rounded-lg py-2 w-full dark:bg-gray-700  dark:text-white text-gray-700">
          <li v-for="size in [10, 25, 50]"
            class="px-4 py-1.5 hover:bg-gray-500 transition-colors duration-200 flex justify-center items-center hover:text-white"
            :key="size"
            :class="pageSize === size ? 'bg-gray-500 text-white ' : ''"
            @click="selectItem(size)">
            <span>{{ size }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, watch, toRefs, onMounted, defineComponent } from "vue";
import { PhCaretLeft, PhCaretRight, PhCaretDown } from '@dnlsndr/vue-phosphor-icons';
import { onClickOutside } from '@vueuse/core';

export default defineComponent({
  components: {
    PhCaretLeft,
    PhCaretRight,
    PhCaretDown,
  },
  props: {
    pageSize: {
      type: Number,
    },
    totalCount: {
      type: Number,
    },
    page: {
      type: Number,
    },
    showPageSize: {
      type: Boolean,
      default: true,
    }
  },
  emits: ["update:page", "update:pageSize"],
  setup(props, { emit }) {
    const { pageSize, totalCount, page } = toRefs(props)
    const pageCount = ref(0);
    const containerRef = ref(null);
    const isOpen = ref(false);
    const listPages = ref([]);

    const setPage = (value) => {
      emit('update:page', value)
    }

    watch(
      [totalCount, pageSize, page],
      () => listPageShow()
    );
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectItem = (value) => {
      if (value !== pageSize.value) {
        isOpen.value = false;
        emit('update:pageSize', value)
      }
    };

    onClickOutside(containerRef, (e) => {
      if (isOpen.value && !containerRef.value.contains(e.target)) {
        isOpen.value = false;
      }
    })

    const listPageShow = () => {
      pageCount.value = Math.ceil(totalCount.value / pageSize.value)
      let pages = [];
      if (pageCount.value < 10) {
        for (let i = 1; i <= pageCount.value; i++) {
          pages.push(i);
        }
        listPages.value = pages;
        return listPages.value
      }
      // try to keep 3 more pages each side of current page
      let start = (page.value - 3) < 1 ? 1 : (page.value - 3);
      let end = (page.value + 3) > pageCount.value ? pageCount.value : (page.value + 3);

      // if start or end is not next to two side, remove a page
      // because this case we will have 2 ... each side
      if (start === 1) end = 7 + start;
      if (end === pageCount.value) start = end - 7;

      if (end < pageCount.value - 1 && start > 2 && end - start === 6) {
        end -= 1;
      }
      for (let i = start; i <= end; i++) {
        if (i > 0 && i < pageCount.value) {
          pages.push(i)
        }
      }
      if (pages[0] !== 1) {
        pages.unshift(1);
      }
      if (pages[pages.length - 1] !== pageCount.value) {
        pages.push(pageCount.value)
      }
      listPages.value = pages;
      return listPages.value
    }
    const showDot = (index: number) => {
      if (listPages.value[index + 1] - listPages.value[index] > 1) return true;
      return false;
    }

    onMounted(() => {
      listPageShow()
    });

    return {
      isOpen,
      pageSize,
      pageCount,
      page,
      listPages,
      setPage,
      toggleDropdown,
      selectItem,
      showDot,
      containerRef
    };
  }
});
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
