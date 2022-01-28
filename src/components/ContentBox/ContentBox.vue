<template>
  <div
    class="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
  >
    <div
      v-if="description !== undefined || title !== undefined"
      class="p-4 sm:p-6"
    >
      <div class="flex">
        <div
          class="text-xl font-semibold"
          :class="[description !== undefined ? 'mb-2' : '']"
        >
          <slot name="title" :title="title">{{ title }}</slot>
        </div>
      </div>
      <div
        v-if="description !== undefined"
        class="text-gray-500 dark:text-gray-500"
      >
        <slot name="description" :description="description">{{
          description
        }}</slot>
      </div>
    </div>
    <base-separator />
    <section class="p-4 sm:p-6">
      <slot />
    </section>
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
  },
})
</script>
