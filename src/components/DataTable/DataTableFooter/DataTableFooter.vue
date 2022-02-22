<template>
  <div
    class="sticky bottom-4 opacity-40 hover:opacity-100 sm:opacity-100 sm:flex"
  >
    <div class="flex items-start ml-auto mt-4 w-full">
      <pagination-bar v-if="!config.hidePagination" />
      <page-size-select-bar v-if="!config.hidePagination" />
      <button
        v-if="isDirty && (!config.hideUpdateButton || config.hideUpdateButton === false)"
        type="button"
        @click="patchRecords"
        class="ml-auto inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update
        <span
          class="group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-gray-500 text-gray-200"
        >
          {{ Object.keys(updatedRecords).length }}
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
import PaginationBar from "./PaginationBar";
import PageSizeSelectBar from "./PageSizeSelectBar";
import { StateSymbol, UpdateSymbol } from "../ProvideDataTableSettings";

export default {
  components: {
    PageSizeSelectBar,
    PaginationBar
  },
  props: {
    config: Object,
  },
  emits: ["patch-records"],
  setup(_, { emit }) {
    const { isDirty, updatedRecords } = inject(StateSymbol);

    const updateSettings = inject(UpdateSymbol);
    const clearUpdatedRecords = () => {
      updateSettings("updatedRecords", {});
      updateSettings("isDirty", false);
    }

    const patchRecords = () => {
      emit("patch-records", Object.values(updatedRecords.value));
      clearUpdatedRecords();
    }

    return { isDirty, updatedRecords, patchRecords };
  }
};
</script>
