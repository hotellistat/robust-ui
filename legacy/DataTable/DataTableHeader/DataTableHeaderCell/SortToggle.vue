<template>
  <div
    class="data-table-header__icon"
    :class="[sort ? 'visible' : 'sm:invisible']"
    @click="onToggle"
  >
    <PhSortDescending v-if="sort < 0" size="16px" />
    <PhSortAscending v-else-if="sort > 0" size="16px" />
    <PhList v-else size="16px" />
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import {
  PhSortAscending,
  PhSortDescending,
  PhList,
} from '@dnlsndr/vue-phosphor-icons'
export default {
  components: { PhSortDescending, PhSortAscending, PhList },
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)

    const sort = computed({
      get() {
        return modelValue.value
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })

    const onToggle = () => {
      if (sort.value > 0) sort.value = -1
      else sort.value += 1
    }

    return { sort, onToggle }
  },
}
</script>
