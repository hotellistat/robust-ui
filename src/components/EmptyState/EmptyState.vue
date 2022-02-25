<template>
  <div class="py-4 flex flex-col text-center items-center">
    <div class="mb-4 text-gray-700 dark:text-gray-400">
      <component v-if="!$slots.icon" :is="icon" size="40" />
      <slot v-else name="icon" />
    </div>
    <div class="text-xl text-gray-700 dark:text-gray-400 mb-2">{{ title }}</div>
    <div
      class="text-gray-400 dark:text-gray-500"
      :class="[$slots.default ? 'mb-4' : null]"
    >{{ description }}</div>
    <div class="inline-block">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RobustContentPlaceholder',

  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    icon: {
      type: Object,
    },
  },
})
</script>
