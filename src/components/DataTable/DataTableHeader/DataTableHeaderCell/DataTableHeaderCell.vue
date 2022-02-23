<template>
  <span
    class="font-medium text-sm uppercase truncate"
    :title="cell.title"
  >{{ cell.title }}</span>
  <sort-toggle v-if="cell.sortable" v-model="cell['sortDirection']" />
</template>
<script>
import { computed, toRefs } from "vue";
import SortToggle from "./SortToggle.vue";

export default {
  components: { SortToggle },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const cell = computed({
      get() {
        return modelValue.value;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    return {
      cell
    };
  }
};
</script>
<style scoped lang="postcss">
.data-table-header:hover {
  .data-table-header__icon {
    visibility: visible;
  }
}
</style>
