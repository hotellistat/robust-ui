<template>
  <div>
    <nav
      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <span
        @click="() => page > 1 && setPage(page - 1)"
        class="paginate-btn relative inline-flex items-center p-2 rounded-l-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span class="sr-only">Previous</span>
        <!-- <chevron-left class="h-5 w-5" :size="24" /> -->
        <PhCaretLeft
          type="chevron-left"
          class="h-5 w-5"
          size="24"
          weight="bold"
        />
      </span>
      <span
        v-for="index in pageCount"
        :key="index"
        @click="() => setPage(index)"
        class="paginate-btn relative inline-flex items-center px-4 py-2 border border-gray-700 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300"
        :class="index === page ? 'bg-gray-200 active' : ''"
      >{{ index }}</span>
      <span
        @click="() => page < pageCount && setPage(page + 1)"
        class="paginate-btn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span class="sr-only">Next</span>
        <!-- <chevron-right class="h-5 w-5" :size="24" /> -->
        <PhCaretRight
          type="chevron-right"
          class="h-5 w-5"
          size="24"
          weight="bold"
        />
      </span>
    </nav>
  </div>
</template>
<script>
import { ref, inject, computed, watch } from "vue";
import { PhCaretLeft, PhCaretRight } from '@dnlsndr/vue-phosphor-icons'
import { StateSymbol, UpdateSymbol } from "../../ProvideDataTableSettings";

export default {
  components: {
    PhCaretLeft,
    PhCaretRight
  },
  setup() {
    const { pageSize, totalCount, page } = inject(StateSymbol);
    const pageCount = ref(0);

    const updateSettings = inject(UpdateSymbol);
    const setPage = (value) => updateSettings("page", value);

    watch(
      [totalCount, pageSize],
      () => (pageCount.value = Math.ceil(totalCount.value / pageSize.value))
    );

    return {
      pageSize,
      pageCount,
      page,
      setPage
    };
  }
};
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
</style>
