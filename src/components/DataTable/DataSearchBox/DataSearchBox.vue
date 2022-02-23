<template>
  <div class="flex-1 flex justify-end">
    <div
      class="max-w-[14rem] min-w-[9rem] border border-gray-700 pl-2 rounded ml-2 flex items-center bg-gray-50 dark:bg-gray-800"
    >
      <PhMagnifyingGlass class="text-gray-500 dark:text-gray-50" size="18" />
      <input
        v-model="keyword"
        placeholder="search..."
        @keyup.enter="submitSearch"
        class="bg-gray-50 rounded w-full dark:bg-gray-800 px-2 py-1 outline-none"
      />
    </div>
  </div>
</template>
<script>
import { inject, ref, watch } from "vue";
import { UpdateSymbol } from "../ProvideDataTableSettings";
import { PhMagnifyingGlass } from "@dnlsndr/vue-phosphor-icons";

export default {
  components: { PhMagnifyingGlass },
  emits: ["search-submit"],
  setup(props, { emit }) {
    const keyword = ref("");
    const updateSettings = inject(UpdateSymbol);

    watch(keyword, (newValue) => {
      updateSettings("keyword", newValue);
    });

    return {
      keyword,
      submitSearch() {
        emit("search-submit", keyword.value);
      }
    };
  }
};
</script>
