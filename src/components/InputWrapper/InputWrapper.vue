<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'

let uid = 0
export default defineComponent({
  name: 'RobustInputWrapper',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
    },
    class: {
      type: String as PropType<string | string[] | object>,
    },
    boxClass: {
      type: String as PropType<string | string[] | object>,
    },
    hint: {
      type: String,
    },
    error: {
      type: String,
    },
    fixedHeight: {
      type: Boolean,
      default: true
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
  },
  setup(_, { attrs }) {
    const cuid = (++uid).toString()

    const onRE = /^on[^a-z]/
    const isOn = (key: string) => onRE.test(key)

    let listeners = computed(() => {
      return Object.fromEntries(
        Object.entries(attrs).filter((entry) => isOn(entry[0]))
      )
    })

    const wrapperRef = ref()

    function blurred() { }

    function focused() { }

    return {
      cuid,
      wrapperRef,
      blurred,
      focused,
      listeners,
    }
  },
})
</script>

<template>
  <fieldset :class="[$props.class]">
    <legend v-if="title"
      class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400">
      {{ title }}</legend>
    <div v-bind="listeners" ref="wrapperRef"
      class="relative flex rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
      :class="[
        $props.boxClass,
        fixedHeight ? (condensed ? 'h-9' : 'h-10') : undefined,
        {
          'ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500':
            !readonly,
        },
        disabled ? 'text-gray-500' : '',
      ]">
      <slot :cuid="cuid" :wrapperRef="wrapperRef" />
    </div>
    <label v-if="hint !== undefined || error !== undefined" class="block pt-1">
      <div v-if="hint !== undefined" class="select-none text-xs text-gray-400">
        {{ hint }}</div>
      <div v-if="error !== undefined"
        class="select-none text-xs text-red-400 dark:text-red-400">{{ error }}
      </div>
    </label>
  </fieldset>
</template>
