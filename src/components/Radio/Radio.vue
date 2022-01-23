<template>
  <div class="inline-block">
    <label
      :class="[$slots.title ? 'items-start' : 'items-center']"
      class="vue-checkbox flex items-center cursor-pointer"
    >
      <input v-model="isChecked" :id="cuid" type="checkbox" class="hidden" />
      <div
        class="
          vue-checkbox__inner
          border
          rounded-full
          w-4
          h-4
          mr-2
          relative
          cursor-pointer
          flex-shrink-0 flex-grow-0
          box-content
          transition-all
          duration-100
          flex
          items-center
          justify-center
        "
        :class="[
          isChecked
            ? 'bg-primary-500 border-primary-500 text-white'
            : 'bg-gray-100  dark:bg-gray-700 border-gray-300 dark:border-gray-600',
        ]"
      >
        <div class="rounded-full bg-white h-1 w-1"></div>
      </div>

      <div v-if="title && !$slots.title" class="select-none w-full leading-4">
        {{ title }}
      </div>
      <div>
        <slot v-if="$slots.title" name="title" />
      </div>
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
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
    const cuid = '_' + Math.random().toString(36).substr(2, 9)

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

  methods: {
    uid() {
      return uid()
    },
  },
}
</script>
