<template>
  <section class="relative rounded-lg bg-white shadow-widget dark:bg-gray-800">
    <header
      v-if="description !== undefined || title !== undefined"
      class="relative overflow-hidden rounded-md p-4 sm:p-6"
    >
      <div
        v-if="stripe"
        class="absolute inset-x-0 top-0 h-1"
        :class="stripeClass"
      ></div>
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
    <div
      v-if="description !== undefined || title !== undefined"
      class="px-4 sm:px-6"
    >
      <RobustSeparator />
    </div>
    <div class="p-4 sm:p-6">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'RobustContentBox',
};
</script>

<script lang="ts" setup>
import RobustSeparator from '../Separator/index.vue';

defineProps({
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  stripeClass: {
    type: String,
    default: 'bg-primary-500',
  },
});
</script>
