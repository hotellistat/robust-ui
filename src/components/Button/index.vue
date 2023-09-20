<template>
  <Component
    :is="(tag as any)"
    :disabled="disabled"
    class="flex items-center justify-center font-medium"
    :class="[
      variantStyles && disabled
        ? ' bg-gray-900/5 text-gray-900/40 dark:bg-white/10 dark:text-white/50'
        : undefined,
      variantStyles && !disabled
        ? variantStyles + ' ring-opacity-50 focus:ring'
        : undefined,
      condensed ? 'h-8 gap-2 px-3' : ' h-10 gap-3 px-4',
      rounded ? 'rounded-full' : 'rounded-md',
    ]"
  >
    <slot name="raw">
      <div v-if="$slots.prefix" :class="[loading ? 'invisible' : 'visible']">
        <slot tag="div" name="prefix" />
      </div>

      <span
        :class="[loading ? 'invisible' : 'visible']"
        class="whitespace-no-wrap inline-block truncate align-top"
      >
        <slot />
      </span>
      <div v-if="$slots.suffix" :class="[loading ? 'invisible' : 'visible']">
        <slot tag="div" name="suffix" />
      </div>

      <RobustSpinner
        v-if="loading"
        :size="condensed ? 16 : 20"
        class="absolute"
      />
    </slot>
  </Component>
</template>

<script lang="ts" setup>
import { computed, inject, PropType, toRefs } from 'vue';
import RobustSpinner from '../Spinner/index.vue';
import variants from './variants';
import { MaybeRef } from '@vueuse/core';

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: [String, Boolean] as PropType<string | false>,
    default: 'primary',
  },
  condensed: {
    type: Boolean,
    default: false,
  },
});

const { loading, variant } = toRefs(props);

const variantStyles = computed<string>(() => {
  if (variant.value === false) {
    return undefined;
  }

  return variants[variant.value];
});
</script>
