<script lang="ts">
const uid = 0;
</script>

<script lang="ts" setup>
import { computed, PropType, ref, useAttrs } from 'vue';

defineProps({
  tag: {
    type: String,
    default: 'div',
  },
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
});
const attrs = useAttrs();

const listeners = computed(() => {
  return Object.fromEntries(
    Object.entries(attrs).filter((entry) => /^on[^a-z]/.test(entry[0]))
  );
});

const wrapperRef = ref<HTMLElement>();

defineExpose({
  wrapperRef,
});
</script>

<template>
  <!-- We can't use label as a wrapper since it causes events not to trigger when e.g. using it in a select component -->
  <div class="inline-block" :class="[$props.class]">
    <label
      v-if="title"
      class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"
    >
      {{ title }}
    </label>
    <Component
      :is="tag"
      v-bind="attrs"
      ref="wrapperRef"
      class="relative flex w-full rounded-md border border-black/[.15] border-gray-200 text-left ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring dark:border-white/[.15] dark:border-gray-600 focus-within:dark:border-primary-500"
      :class="[
        $props.boxClass,
        fixedHeight ? (condensed ? 'h-8' : 'h-10') : undefined,
        disabled ? 'text-gray-500' : '',
      ]"
    >
      <slot :wrapper-ref="wrapperRef" />
    </Component>
    <div v-if="hint !== undefined || error !== undefined" class="mt-2">
      <div v-if="hint !== undefined" class="select-none text-xs text-gray-400">
        {{ hint }}
      </div>
      <div
        v-if="error !== undefined"
        class="select-none text-xs text-red-400 dark:text-red-400"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>
