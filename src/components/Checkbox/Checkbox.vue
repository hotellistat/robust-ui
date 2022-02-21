<template>
  <div class="inline-block">
    <label class="flex cursor-pointer items-start">
      <input :id="cuid" v-model="isChecked" type="checkbox" class="hidden" />
      <div
        class="relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100"
        :class="[
          isChecked
            ? 'border-primary-500 bg-primary-500 '
            : 'border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600',
        ]"
      >
        <PhCheck
          :class="[isChecked ? 'opacity-1' : 'opacity-0']"
          size="14"
          weight="bold"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"
        />
      </div>
      <div
        v-if="title && !$slots.title"
        class="w-full select-none pt-px leading-4"
      >{{ title }}</div>
      <div
        v-if="!title && $slots.title"
        class="w-full select-none pt-px leading-4"
      >
        <slot name="title" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { PhCheck } from "@dnlsndr/vue-phosphor-icons"
export default defineComponent({
  components: {
    PhCheck
  },
  name: 'RobustCheckbox',

  emits: ['update:modelValue', 'change'],
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
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
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
