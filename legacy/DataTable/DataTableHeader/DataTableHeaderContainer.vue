<template>
  <div class="data-table-header-container col-span-1 grid sm:hidden">
    <template v-if="config.groupBy">
      <template v-for="(group, groupKey) in data" :key="groupKey">
        <div
          class="data-table-header border-bottom-2 flex items-center justify-center border-b-2 bg-gray-700 px-4 py-3 text-sm tracking-wider"
        >
          <div class="mr-2 text-white">
            <PhPlus
              v-if="config.collapsed && config.collapsed[groupKey]"
              size="16px"
            />
            <PhMinus v-else size="16px" />
          </div>
          <span class="w-full truncate">
            {{ `${config.groupBy.toUpperCase()}: ${groupKey}` }}
          </span>
        </div>
        <template v-if="!(config.collapsed && config.collapsed[groupKey])">
          <template v-for="record in data[groupKey].children" :key="record.id">
            <div
              class="data-table-header border-bottom-2 flex items-center justify-center bg-gray-500 px-4 py-2 text-sm tracking-wider"
            >
              Key
            </div>
            <TableHeader v-model="headersData" :hide-first="true" />
          </template>
        </template>
      </template>
    </template>
    <div v-for="record in data" v-else :key="record.id">
      <div
        class="data-table-header border-bottom-2 flex items-center justify-center bg-gray-500 px-4 py-2 text-sm tracking-wider"
      >
        Key
      </div>
      <TableHeader
        v-model="headersData"
        :is-inline-edit-mode="isInlineEditMode"
      />
    </div>
  </div>
  <div
    class="data-table-header-container col-span-1 hidden grid-cols-1 bg-gray-500 sm:grid"
    :style="{ 'grid-template-columns': gridTemplateColumnsCss }"
  >
    <TableHeader
      v-model="headersData"
      :is-inline-edit-mode="isInlineEditMode"
    />
  </div>
</template>

<script>
import { computed, toRefs, reactive } from 'vue'
import TableHeader from '../DataTableHeader/DataTableHeader.vue'
import { PhPlus, PhMinus } from '@dnlsndr/vue-phosphor-icons'

export default {
  components: { TableHeader, PhPlus, PhMinus },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    config: Object,
    gridTemplateColumnsCss: String,
    isInlineEditMode: {
      type: Boolean,
      default: true,
    },
    hasActionColumn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue, config } = toRefs(props)

    const headersData = computed({
      get() {
        return modelValue.value
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })
    return {
      headersData,
      ...reactive({ size: Object.keys(headersData.value).length }),
    }
  },
}
</script>

<style scoped>
@media (min-width: 640px) {
  .data-table-header-container {
    grid-template-columns: repeat(v-bind(size), minmax(0, 1fr));
    grid-column: span v-bind(size) / span v-bind(size);
  }
}
</style>
