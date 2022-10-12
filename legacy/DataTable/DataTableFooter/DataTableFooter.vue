<template>
  <div
    class="sticky bottom-4 opacity-40 hover:opacity-100 sm:flex sm:opacity-100"
  >
    <div class="ml-auto mt-4 flex w-full items-start">
      <Pagination
        :total-count="totalCount"
        :page="page"
        :page-size="pageSize"
        @update:page="setPage"
        @update:page-size="selectPageSize"
      />
      <Button
        v-if="
          isDirty &&
          (!config.hideUpdateButton || config.hideUpdateButton === false)
        "
        type="button"
        class="ml-auto inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="patchRecords"
      >
        Update
        <span
          class="ml-3 inline-block rounded-full bg-gray-500 py-0.5 px-3 text-xs font-medium text-gray-200 group-hover:bg-gray-800"
          >{{ Object.keys(updatedRecords).length }}</span
        >
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'
import { StateSymbol, UpdateSymbol } from '../ProvideDataTableSettings'
import Button from '../../Button/Button.vue'
import Pagination from '../../Pagination/Pagination.vue'

export default defineComponent({
  components: {
    Button,
    Pagination,
  },
  props: {
    config: Object,
  },
  emits: ['patch-records'],
  setup(_, { emit }) {
    const { isDirty, updatedRecords, pageSize, totalCount, page } =
      inject(StateSymbol)

    const updateSettings: any = inject(UpdateSymbol)
    const clearUpdatedRecords = () => {
      updateSettings('updatedRecords', {})
      updateSettings('isDirty', false)
    }
    const setPage = (value) => updateSettings('page', value)
    const selectPageSize = (value) => {
      if (value !== pageSize.value) {
        pageSize.value = value
        updateSettings('pageSize', value)
      }
    }
    const patchRecords = () => {
      emit('patch-records', Object.values(updatedRecords.value))
      clearUpdatedRecords()
    }

    return {
      isDirty,
      updatedRecords,
      patchRecords,
      pageSize,
      totalCount,
      page,
      setPage,
      selectPageSize,
    }
  },
})
</script>
