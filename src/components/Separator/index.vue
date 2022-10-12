<template>
  <div
    v-if="!$slots.default"
    class="flex-shrink-0"
    :class="[colorClass, vert ? 'w-px self-stretch' : 'h-px w-full']"
  ></div>
  <div v-else class="flex items-center">
    <div
      class="flex-1 bg-gray-100 dark:bg-gray-700"
      :class="[vert ? 'w-px self-stretch' : 'h-px w-full']"
    ></div>
    <div class="flex-shrink-0 px-2 text-gray-300 dark:text-gray-500">
      <slot />
    </div>
    <div
      class="flex-1 bg-gray-100 dark:bg-gray-700"
      :class="[vert ? 'w-px self-stretch' : 'h-px w-full']"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RobustSeparator',

  props: {
    vert: {
      type: Boolean,
      default: false,
    },
    colorClass: {
      type: String,
      default: 'bg-gray-100 dark:bg-gray-700 ',
    },
  },
})
</script>
