<template>
  <div class="inline-block">
    <input
      :id="`radio_${cuid}`"
      v-model="isChecked"
      type="radio"
      class="hidden"
    />
    <label
      :for="`radio_${cuid}`"
      :class="[$slots.title ? 'items-start' : 'items-center']"
      class="flex cursor-pointer items-center"
    >
      <div
        class="relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100"
        :class="[
          isChecked
            ? 'border-primary-500 bg-primary-500'
            : 'border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600',
        ]"
      >
        <div
          :class="[isChecked ? 'opacity-1' : 'opacity-0']"
          class="h-2 w-2 rounded-full bg-white transition-all duration-100"
        ></div>
      </div>

      <div v-if="title && !$slots.title" class="w-full select-none leading-4">
        {{ title }}
      </div>
      <div>
        <slot v-if="$slots.title" name="title" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

let uid = 0

export default defineComponent({
  name: 'RobustRadio',

  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
    },
    value: {
      type: [String, Number, Boolean, Object],
    },
    title: {
      type: String,
      default: '',
    },
  },

  setup(props, { emit, attrs }) {
    const cuid = (++uid).toString()

    const isChecked = computed({
      get() {
        return props.modelValue === props.value
      },
      set() {
        let newModelValue = props.modelValue
        newModelValue = props.value
        emit('update:modelValue', newModelValue)
        emit('change', newModelValue)
      },
    })

    return {
      cuid,
      isChecked,
      attrs,
    }
  },
})
</script>
