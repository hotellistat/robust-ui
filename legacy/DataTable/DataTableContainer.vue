<template>
  <ProvideDataTableSettings>
    <DataTable
      v-bind="$props"
      v-model="bodyData"
      class="relative"
      :total-count="totalCount"
      :is-loading="isLoading"
      :has-action-column="hasActionColumn"
      :is-turn-on-inline-mode="isTurnOnInlineMode"
      :is-show-inline-tab="isShowInlineTab"
      @page="page"
      @search="search"
      @patch-records="(records) => $emit('patch-records', records)"
      @record-click="(record) => $emit('record-click', record)"
      @reload="$emit('reload')"
      @action="(e) => $emit('action', e)"
      @search-submit="(val) => $emit('search-submit', val)"
    >
      <template v-for="(_, slot) in $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </DataTable>
  </ProvideDataTableSettings>
</template>

<script lang="ts">
import { toRefs, computed, defineComponent, PropType } from 'vue'
import ProvideDataTableSettings from './ProvideDataTableSettings'
import DataTable from './DataTable.vue'

export default defineComponent({
  components: { ProvideDataTableSettings, DataTable },
  props: {
    columns: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    isTurnOnInlineMode: {
      type: Boolean,
      default: false,
    },
    isShowInlineTab: {
      type: Boolean,
      default: false,
    },
    actionComponent: {
      type: Object,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasActionColumn: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'page',
    'update:modelValue',
    'patch-records',
    'record-click',
    'search-submit',
    'reload',
    'search',
    'action',
  ],
  setup(props, { emit, slots }) {
    const { modelValue } = toRefs(props)
    const slotNames = computed(() =>
      (props.columns as any).value.map((e) => e.key)
    )
    const bodyData = computed({
      get() {
        return modelValue.value
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })
    const page = (data) => emit('page', data)
    const search = (keyword) => emit('search', keyword)

    return {
      page,
      search,
      bodyData,
      slotNames,
      $slots: slots,
      $props: props as any,
    }
  },
})
</script>
