<template>
  <div
    class="flex whitespace-nowrap px-4 py-2 text-center text-sm font-medium"
    :class="isInlineEditMode ? 'h-12 sm:h-auto' : 'h-10 sm:h-auto'"
    @click="$emit('click')"
  >
    <div v-if="isInlineEditMode" class="flex w-full items-center">
      <slot name="leftIcon"></slot>
      <Input
        v-if="type === 'text' || type === 'number'"
        v-model="cell"
        type="{{type}}"
        class="truncate bg-transparent"
      />

      <Checkbox
        v-if="type === 'checkbox'"
        v-model="cell"
        class="truncate bg-transparent"
      />
      <DatePicker
        v-if="type === 'date'"
        class="col-span-2 p-2 sm:col-span-1"
        :model-value="new Date(cell)"
        @update:modelValue="(v) => (cell = v)"
      />

      <Select
        v-if="type === 'enum'"
        v-model="cell"
        class="truncate rounded bg-transparent"
        :options="options"
      />
    </div>
    <div
      v-if="!isInlineEditMode"
      class="class flex w-full items-center truncate"
    >
      <span>{{ cell }}</span>
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import DatePicker from '../../DatePicker/DatePicker.vue'
import Select from '../../Select/Select.vue'
import Input from '../../Input/Input.vue'
import Checkbox from '../../Checkbox/Checkbox.vue'
export default {
  components: { DatePicker, Select, Input, Checkbox },
  props: {
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String,
    },
    options: {
      type: Array,
    },
    isInlineEditMode: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'click', 'change'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)

    const cell = computed({
      get: () => modelValue.value,
      set: (value) => {
        emit('update:modelValue', value)
        emit('change')
      },
    })

    return {
      cell,
    }
  },
}
</script>
