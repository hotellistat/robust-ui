<template>
  <div class="flex flex-col items-center py-4 text-center">
    <div class="mb-4 text-gray-700 dark:text-gray-400">
      <slot name="icon">
        <Component :is="icon" v-if="icon !== undefined" size="40" />
      </slot>
    </div>
    <div class="mb-2 text-xl text-gray-700 dark:text-gray-400">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      class="text-gray-400 dark:text-gray-500"
      :class="[$slots.default ? 'mb-8' : null]"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </div>
    <div class="inline-block">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  icon: {
    type: Object,
    default: undefined,
  },
});
</script>
