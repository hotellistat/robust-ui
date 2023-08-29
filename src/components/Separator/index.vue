<template>
  <div
    v-if="!$slots.default"
    class="flex-shrink-0"
    :class="[colorClass, vert ? 'w-px self-stretch' : 'h-px w-full']"
  ></div>
  <div v-else class="flex items-center gap-2" :class="[vert ? 'flex-col' : 'flex-row ']">
    <div
      class="flex-1"
      :class="[colorClass, vert ? 'w-px' : 'h-px']"
    ></div>
    <div class="flex-shrink-0">
      <slot />
    </div>
    <div
      class="flex-1"
      :class="[colorClass, vert ? 'w-px' : 'h-px']"
    ></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  vert: {
    type: Boolean,
    default: false,
  },
  colorClass: {
    type: String,
    default: 'bg-gray-100 dark:bg-gray-700 ',
  },
});
</script>
