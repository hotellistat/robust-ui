<template>
  <data-table-cell key="role" :model-value="record['group']"
    class="bg-gray-700 py-3 hidden sm:grid  border-b-2" @click="toggleGroup">
    <template v-slot:leftIcon>
      <ph-plus v-if="collapsed" size="16px" class="mr-2 text-white" />
      <ph-minus v-else size="16px" class="mr-2 text-white" />
    </template>
  </data-table-cell>
  <data-table-cell key="count" :model-value="`Count: ${record.count}`"
    class="bg-gray-700 py-3  border-b-2" @click="toggleGroup" />
  <data-table-cell v-for="key in Array(totalCount - 2).keys()"
    :key="`empty-${key}`" model-value=" "
    class="bg-gray-700 hidden sm:grid  border-b-2" @click="toggleGroup" />
</template>
<script>
import { computed, toRefs } from "vue";
import DataTableCell from "./DataTableCell.vue";
import { PhPlus, PhMinus } from '@dnlsndr/vue-phosphor-icons';

export default {
  components: { DataTableCell, PhPlus, PhMinus },
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
