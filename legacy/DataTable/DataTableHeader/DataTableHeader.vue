<template>
  <div
    v-for="key in hideFirst
      ? Object.keys(headersData).slice(1)
      : Object.keys(headersData)"
    :key="key"
    class="data-table-header border-bottom-2 flex items-center justify-between px-4 py-2 text-sm tracking-wider sm:justify-center"
    :class="isInlineEditMode ? 'h-12 sm:h-auto' : 'h-10 sm:h-auto'"
  >
    <HeaderCell v-model="headersData[key]" />
  </div>

  <div v-if="hasActionColumn">
    <div
      v-if="!isInlineEditMode"
      class="data-table-header border-bottom-2 flex items-center justify-between px-4 py-2 text-sm tracking-wider sm:justify-center"
    >
      <span class="truncate font-medium uppercase" title="actions"
        >actions</span
      >
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import HeaderCell from './DataTableHeaderCell/DataTableHeaderCell.vue'

export default {
  components: { HeaderCell },
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    hideFirst: {
      type: Boolean,
      default: false,
    },
    isInlineEditMode: {
      type: Boolean,
      default: false,
    },
    hasActionColumn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)

    const headersData = computed({
      get() {
        const { sort, ...headers } = modelValue.value
        return headers
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })
    return {
      headersData,
    }
  },
}
</script>

<style scoped lang="postcss">
.data-table-header:hover {
  .data-table-header__icon {
    visibility: visible;
  }
}
</style>
