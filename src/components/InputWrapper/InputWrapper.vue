<template>
  <label
    v-if="title"
    :for="cuid"
    class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"
    >{{ title }}</label
  >
  <div
    v-bind="$attrs"
    ref="wrapperRef"
    class="relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
    :class="[
      condensed ? 'h-8' : 'h-10',
      {
        'ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500':
          !readonly,
      },
    ]"
  >
    <slot v-bind="props" :cuid="cuid" :wrapperRef="wrapperRef" />
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
import { defineComponent, ref } from 'vue'

let uid = 0

export default defineComponent({
  props: {
    title: String,
    hint: String,
    error: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const cuid = 'input_' + ++uid

    const wrapperRef = ref()

    function blurred() {}

    function focused() {}

    return {
      props,
      wrapperRef,
      cuid,
      blurred,
      focused,
    }
  },
})
</script>
