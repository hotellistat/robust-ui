<template>
  <div class="py-4 text-gray-500 dark:text-gray-400">
    <div class="mb-2 flex justify-center">
      <component :is="icon" size="40" />
    </div>
    <div class="mx-auto text-center text-xl font-bold">{{ title }}</div>
    <div class="mx-auto text-center">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({


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
