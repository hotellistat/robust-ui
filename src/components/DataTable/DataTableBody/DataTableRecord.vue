<template>
  <div
    class="block sm:hidden data-table-header border-bottom-2 flex items-center justify-center text-center whitespace-nowrap px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-200 dark:bg-gray-500"
  >Value</div>
  <data-table-cell
    v-if="isGrouped"
    :key="-1"
    modelValue
    class="hidden sm:grid"
  />

  <template
    v-for="column in columns.slice(isGrouped ? 1 : 0)"
    :key="column.key"
  >
    <slot :name="column.key" :row="record" :value="record[column.key]" :column="column.key" >
      <data-table-cell
        :type="column.type"
        :column="column.key"
        :options="column.options"
        :isInlineEditMode="isInlineEditMode"
        :class="column.fnClassRule ? column.fnClassRule(record[column.key], record) : null"
        @click="$emit('click')"
        @change="changeHandler"
        v-model="record[column.key]"
      />
    </slot>
  </template>

  <div v-if="hasActionColumn">
    <div
      v-if="!isInlineEditMode"
      class="flex items-center justify-center px-4 py-2 text-center whitespace-nowrap text-xs font-medium"
    >
      <component
        v-if="actionComponent"
        :is="actionComponent"
        :record="record"
        @reload="$emit('reload')"
        @action="(e) => $emit('action', e)"
      />
      <button
        v-else
        @click="$emit('edit')"
        class="p-1.5 rounded bg-blue-500 text-gray-100"
      >
        <ph-pencil :size="15" />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, inject } from "vue";
import DataTableCell from "./DataTableCell.vue";
import { AddUpdatedRecordSymbol } from "../ProvideDataTableSettings";

export default {
  components: { DataTableCell },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => []
    },
    isGrouped: {
      type: Boolean,
      default: false
    },
    isInlineEditMode: {
      type: Boolean
    },
    actionComponent: {
      type: Object
    },
    hasActionColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "click", "edit"],
  setup(props) {
    const { modelValue } = toRefs(props);

    const addUpdatedRecord = inject(AddUpdatedRecordSymbol);

    const changeHandler = () => {
      addUpdatedRecord(modelValue.value);
    };

    return {
      record: modelValue,
      changeHandler
    };
  }
};
</script>
