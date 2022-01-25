<template>
  <div class="inline-block">
    <label
      :class="[$slots.title ? 'items-start' : 'items-center']"
      class="vue-checkbox flex cursor-pointer items-center"
    >
      <input :id="cuid" v-model="isChecked" type="checkbox" class="hidden" />
      <div
        class="vue-checkbox__inner relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100"
        :class="[
          isChecked
            ? 'border-primary-500 bg-primary-500 text-white'
            : 'border-gray-300  bg-gray-100 dark:border-gray-600 dark:bg-gray-700',
        ]"
      >
        <div class="h-1 w-1 rounded-full bg-white"></div>
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
export default defineComponent({
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
})
</script>
