<template>
  <div
    :class="['data-table-header__icon', sort ? 'visible' : 'sm:invisible']"
    @click="onToggle"
  >
    <ph-sort-descending v-if="sort < 0" size="16px" />
    <ph-sort-ascending v-else-if="sort > 0" size="16px" />
    <ph-list v-else size="16px" />
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
import { PhSortAscending, PhSortDescending, PhList } from '@dnlsndr/vue-phosphor-icons'
export default {
  components: { PhSortDescending, PhSortAscending, PhList },
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const sort = computed({
      get() {
        return modelValue.value;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });

    const onToggle = () => {
      if (sort.value > 0) sort.value = -1;
      else sort.value += 1;
    };

    return { sort, onToggle };
  }
};
</script>
