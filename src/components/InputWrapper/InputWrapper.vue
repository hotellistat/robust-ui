<template>
  <div>
    <label
      v-if="title"
      :for="'input_' + cuid"
      class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"
      >{{ title }}</label
    >
    <div
      v-bind="attrs"
      ref="wrapperRef"
      class="flex min-w-52 overflow-hidden rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
      :class="[
        condensed ? 'h-8' : 'h-10',
        {
          'ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring':
            !readonly,
        },
      ]"
    >
      <slot v-bind="props" :wrapperRef="wrapperRef" />
    </div>
    <transition-group name="fade">
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
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    uid: String,
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
  setup(props, { attrs }) {
    const cuid = '_' + Math.random().toString(36).substr(2, 9)

    const wrapperRef = ref()

    return {
      props,
      wrapperRef,
      attrs,
      cuid,
    }
  },
})
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-in-out;
  overflow: hidden;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  padding-top: theme('spacing.1');
}
.fade-enter-from,
.fade-leave-to {
  padding-top: 0;
  opacity: 0;
  line-height: 0;
}
</style>
