<template>
  <data-table-cell
    key="role"
    :modelValue="record['group']"
    class="bg-gray-700 py-3 hidden sm:grid cursor-pointer border-b-2"
    @click="toggleGroup"
  >
    <template v-slot:leftIcon>
      <plus-icon v-if="collapsed" size="16px" class="mr-2 text-white" />
      <minus-icon v-else size="16px" class="mr-2 text-white" />
    </template>
  </data-table-cell>
  <data-table-cell
    key="count"
    :modelValue="`Count: ${record.count}`"
    class="bg-gray-700 py-3 cursor-pointer border-b-2"
    @click="toggleGroup"
  />
  <data-table-cell
    v-for="key in Array(totalCount - 2).keys()"
    :key="`empty-${key}`"
    modelValue=" "
    class="bg-gray-700 hidden sm:grid cursor-pointer border-b-2"
    @click="toggleGroup"
  />
</template>
<script>
import { computed, toRefs } from "vue";
import DataTableCell from "./DataTableCell.vue";
import { PlusIcon, MinusIcon } from "../common/icons";

export default {
  components: { DataTableCell, PlusIcon, MinusIcon },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => []
    },
    totalCount: {
      type: Number,
      default: 2
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "toggle"],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const record = computed({
      get: () => modelValue.value,
      set: (value) => emit("update:modelValue", value)
    });

    const toggleGroup = () => {
      emit("toggle", record.value.group);
    };

    return {
      record,
      toggleGroup
    };
  }
};
</script>
