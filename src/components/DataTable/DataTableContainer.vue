<template>
  <provide-data-table-settings>
    <data-table
      v-bind="$props"
      @page="page"
      @search="search"
      v-model="bodyData"
      class="relative"
      :totalCount="totalCount"
      :is-loading="isLoading"
      :hasActionColumn="hasActionColumn"
      :isTurnOnInlineMode="isTurnOnInlineMode"
      :isShowInlineTab="isShowInlineTab"
      @patch-records="records => $emit('patch-records', records)"
      @record-click="record => $emit('record-click', record)"
      @reload="$emit('reload')"
      @action="(e) => $emit('action', e)"
      @search-submit="(val) => $emit('search-submit', val)"
    >
      <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </data-table>
  </provide-data-table-settings>
</template>

<script lang="ts">
import { toRefs, computed } from "vue";
import ProvideDataTableSettings from "./ProvideDataTableSettings";
import DataTable from "./DataTable.vue";

export default {
  components: { ProvideDataTableSettings, DataTable },
  emits: ["page", "update:modelValue", "patch-records", "record-click", "search-submit"],
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => ({})
    },
    totalCount: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    isTurnOnInlineMode: {
      type: Boolean,
      default: false
    },
    isShowInlineTab: {
      type: Boolean,
      default: false
    },
    actionComponent: {
      type: Object
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasActionColumn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    const { modelValue } = toRefs(props);
    const slotNames = computed(() => props.columns.value.map(e => e.key))
    const bodyData = computed({
      get() {
        return modelValue.value;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const page = (data) => emit("page", data);
    const search = (keyword) => emit("search", keyword);

    return {
      page,
      search,
      bodyData,
      slotNames,
      $slots: slots
    };
  }
};
</script>
