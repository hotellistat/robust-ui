<template>
  <label
    v-if="title"
    :for="cuid"
    class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"
    >{{ title }}</label
  >
  <div
    v-bind="listeners"
    ref="wrapperRef"
    class="relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
    :class="[
      props.class,
      props.condensed ? 'h-9' : 'h-10',
      {
        'ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500':
          !props.readonly,
      },
    ]"
  >
    <slot
      v-bind="{ ...filteredAttrs, ...props }"
      :cuid="cuid"
      :wrapperRef="wrapperRef"
    />
  </div>
  <div v-if="hint || error" class="pt-1">
    <div v-if="hint" class="select-none text-xs text-gray-400">
      {{ hint }}
    </div>
    <div
      v-if="error"
      class="select-none text-xs text-red-400 dark:text-red-400"
    >
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

let uid = 0

export default defineComponent({
  inheritAttrs: false,
  props: {
    title: {
      type: String,
    },
    class: {
      type: String,
    },
    hint: {
      type: String,
    },
    error: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const cuid = 'input_' + ++uid

    const onRE = /^on[^a-z]/
    const isOn = (key: string) => onRE.test(key)

    let listeners = computed(() => {
      return Object.fromEntries(
        Object.entries(attrs).filter((entry) => isOn(entry[0]))
      )
    })

    let filteredAttrs = computed(() => {
      return Object.fromEntries(
        Object.entries(attrs).filter((entry) => !isOn(entry[0]))
      )
    })

    const wrapperRef = ref()

    function blurred() {}

    function focused() {}

    return {
      wrapperRef,
      cuid,
      blurred,
      focused,
      props,
      filteredAttrs,
      listeners,
    }
  },
})
</script>
