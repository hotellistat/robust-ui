<script lang="ts">
let uid = 0
</script>

<script lang="ts" setup>
import { computed, PropType, readonly, ref, useAttrs } from 'vue'

defineProps({
  title: {
    type: String,
    default: undefined,
  },
  class: {
    type: String as PropType<string | string[] | object>,
    default: undefined,
  },
  boxClass: {
    type: String as PropType<string | string[] | object>,
    default: undefined,
  },
  hint: {
    type: String,
    default: undefined,
  },
  error: {
    type: String,
    default: undefined,
  },
  fixedHeight: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const attrs = useAttrs()

const cuid = (++uid).toString()

const listeners = computed(() => {
  return Object.fromEntries(
    Object.entries(attrs).filter((entry) => /^on[^a-z]/.test(entry[0]))
  )
})

const wrapperRef = ref()

defineExpose({
  wrapperRef,
})
</script>

<template>
  <fieldset :class="[$props.class]">
    <legend
      v-if="title"
      class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"
    >
      {{ title }}
    </legend>
    <div
      v-bind="listeners"
      ref="wrapperRef"
      class="relative flex rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
      :class="[
        $props.boxClass,
        fixedHeight ? (condensed ? 'h-9' : 'h-10') : undefined,
        {
          'ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500':
            !readonly,
        },
        disabled ? 'text-gray-500' : '',
      ]"
    >
      <slot :cuid="cuid" :wrapper-ref="wrapperRef" />
    </div>
    <label v-if="hint !== undefined || error !== undefined" class="block pt-1">
      <div v-if="hint !== undefined" class="select-none text-xs text-gray-400">
        {{ hint }}
      </div>
      <div
        v-if="error !== undefined"
        class="select-none text-xs text-red-400 dark:text-red-400"
      >
        {{ error }}
      </div>
    </label>
  </fieldset>
</template>
