<template>
  <div class="inline-block">
    <label
      :class="[$slots.title ? 'items-start' : 'items-center']"
      class="vue-checkbox flex cursor-pointer items-center"
    >
      <input :id="cuid" v-model="isChecked" type="checkbox" class="hidden" />
      <div
        :class="[
          isChecked
            ? 'border-primary-500 bg-primary-500 text-white'
            : 'border-gray-300  bg-gray-100 dark:border-gray-600 dark:bg-gray-700',
        ]"
        class="vue-checkbox__inner relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border transition-all duration-100"
      >
        <ph-check
          v-show="isChecked"
          size="14"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </div>

      <div v-if="title && !$slots.title" class="w-full select-none leading-4">
        {{ title }}
      </div>
      <div v-if="!title && $slots.title" class="w-full select-none leading-4">
        <slot name="title" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: [Array, String, Number, Boolean],
      default: false,
    },
    value: {
      type: [Array, String, Number, Boolean],
      default: true,
    },
    disabledValue: {
      type: [Array, String, Number, Boolean],
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, attrs }) {
    const cuid = '_' + Math.random().toString(36).substr(2, 9)

    const isChecked = computed<boolean>({
      get(): boolean {
        if (Array.isArray(props.modelValue)) {
          return props.modelValue.includes(props.value)
        } else {
          return props.modelValue === props.value
        }
      },
      set(value) {
        let newModelValue = props.modelValue
        if (Array.isArray(newModelValue)) {
          if (value) {
            newModelValue.push(props.value)
          } else {
            newModelValue.splice(newModelValue.indexOf(props.value), 1)
          }
        } else {
          if (value) {
            newModelValue = props.value
          } else {
            newModelValue = props.disabledValue
          }
        }
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
