<template>
  <div class="flex flex-col items-center py-4 text-center">
    <div
      class="relative mb-4 flex w-full max-w-sm items-center justify-center py-12 text-gray-700 dark:text-gray-400"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        class="svg absolute inset-0"
      >
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect width="20" height="20" fill="url(#smallGrid)" />
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              opacity="0.2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div
        class="relative z-10 rounded-lg bg-gradient-to-b from-white to-gray-50 p-3 shadow-lg ring-1 ring-gray-200 dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700"
      >
        <slot name="icon">
          <Component :is="icon" v-if="icon !== undefined" class="" size="32" />
        </slot>
      </div>
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

<style scoped>
.svg {
  mask-image: radial-gradient(black, transparent);
}
</style>
