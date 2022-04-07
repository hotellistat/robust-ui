<template>
  <div class="data-table-header-container grid sm:hidden col-span-1">
    <template v-if="config.groupBy">
      <template v-for="(group, groupKey) in data" :key="groupKey">
        <div
          class="data-table-header border-bottom-2 flex items-center justify-center px-4 py-3 text-sm tracking-wider cursor-pointer bg-gray-700 border-b-2"
        >
          <div class="mr-2 text-white">
            <ph-plus
              v-if="config.collapsed && config.collapsed[groupKey]"
              size="16px"
            />
            <ph-minus v-else size="16px" />
          </div>
          <span class="truncate w-full">
            {{
              `${config.groupBy.toUpperCase()}: ${groupKey}`
            }}
          </span>
        </div>
        <template v-if="!(config.collapsed && config.collapsed[groupKey])">
          <template v-for="record in data[groupKey].children" :key="record.id">
            <div
              class="data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"
            >Key</div>
            <table-header v-model="headersData" :hideFirst="true" />
          </template>
        </template>
      </template>
    </template>
    <div v-else v-for="record in data" :key="record.id">
      <div
        class="data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"
      >Key</div>
      <table-header v-model="headersData" :isInlineEditMode="isInlineEditMode" />
    </div>
  </div>
  <div
    class="data-table-header-container hidden sm:grid col-span-1 grid-cols-1 bg-gray-500"
    :style="{ 'grid-template-columns': gridTemplateColumnsCss }"
  >
    <table-header v-model="headersData" :isInlineEditMode="isInlineEditMode" />
  </div>
</template>
<script>
import { computed, toRefs, reactive } from "vue";
import TableHeader from "../DataTableHeader/DataTableHeader.vue";
import { PhPlus, PhMinus } from '@dnlsndr/vue-phosphor-icons'


export default {
  components: { TableHeader, PhPlus, PhMinus },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    config: Object,
    gridTemplateColumnsCss: String,
    isInlineEditMode: {
      type: Boolean,
      default: true
    },
    hasActionColumn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { modelValue, config } = toRefs(props);

    const headersData = computed({
      get() {
        return modelValue.value;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    return {
      headersData,
      ...reactive({ size: Object.keys(headersData.value).length })
    };
  }
};
</script>
<style scoped>
@media (min-width: 640px) {
  .data-table-header-container {
    grid-template-columns: repeat(v-bind(size), minmax(0, 1fr));
    grid-column: span v-bind(size) / span v-bind(size);
  }
}
</style>
