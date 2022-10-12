<template>
  <DataTableCell
    key="role"
    :model-value="record['group']"
    class="hidden border-b-2 bg-gray-700 py-3 sm:grid"
    @click="toggleGroup"
  >
    <template #leftIcon>
      <PhPlus v-if="collapsed" size="16px" class="mr-2 text-white" />
      <PhMinus v-else size="16px" class="mr-2 text-white" />
    </template>
  </DataTableCell>
  <DataTableCell
    key="count"
    :model-value="`Count: ${record.count}`"
    class="border-b-2 bg-gray-700 py-3"
    @click="toggleGroup"
  />
  <DataTableCell
    v-for="key in Array(totalCount - 2).keys()"
    :key="`empty-${key}`"
    model-value=" "
    class="hidden border-b-2 bg-gray-700 sm:grid"
    @click="toggleGroup"
  />
</template>

<script>
import { computed, toRefs } from 'vue'
import DataTableCell from './DataTableCell.vue'
import { PhPlus, PhMinus } from '@dnlsndr/vue-phosphor-icons'

export default {
  components: { DataTableCell, PhPlus, PhMinus },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    columns: {
      type: Array,
      default: () => [],
    },
    totalCount: {
      type: Number,
      default: 2,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'toggle'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)

    const record = computed({
      get: () => modelValue.value,
      set: (value) => emit('update:modelValue', value),
    })

    const toggleGroup = () => {
      emit('toggle', record.value.group)
    }

    return {
      record,
      toggleGroup,
    }
  },
}
</script>
