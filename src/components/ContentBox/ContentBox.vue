<template>
  <section
    class="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"
  >
    <header
      v-if="description !== undefined || title !== undefined"
      class="p-4 sm:p-6"
    >
      <h1 class="flex">
        <div
          class="text-xl font-semibold"
          :class="[description !== undefined ? 'mb-2' : '']"
        >
          <slot name="title" :title="title">{{ title }}</slot>
        </div>
      </h1>
      <p
        v-if="description !== undefined"
        class="text-gray-500 dark:text-gray-500"
      >
        <slot name="description" :description="description">{{
          description
        }}</slot>
      </p>
    </header>
    <Separator />
    <div class="p-4 sm:p-6">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Separator from '../Separator/Separator.vue'

export default defineComponent({
  components: {
    Separator,
  },
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
