<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    x="0px"
    y="0px"
    :viewBox="`0 0 ${size} ${size}`"
  >
    <circle
      class="robust-ui-spinner"
      fill="transparent"
      stroke="currentColor"
      :stroke-width="stroke"
      stroke-linecap="round"
      :stroke-dasharray="3.1415 * (size - 2 * safeMargin)"
      :transform-origin="`${0.5 * size} ${0.5 * size} 0`"
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 2 - stroke / 2 - safeMargin"
    />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 24,
  },
  stroke: {
    type: Number,
    default: 2,
  },
  safeMargin: {
    type: Number,
    default: 1,
  },
});

const minDashOffset = computed(() => {
  return 0.666 * (props.size - 2 * props.safeMargin);
});

const maxDashOffset = computed(() => {
  return 3.1415 * (props.size - 2 * props.safeMargin);
});
</script>

<style>
.robust-ui-spinner {
  animation: grow 2s linear infinite, spin 2s linear infinite;
}

@keyframes grow {
  0% {
    stroke-dashoffset: v-bind(minDashOffset);
  }
  50% {
    stroke-dashoffset: v-bind(maxDashOffset);
  }
  100% {
    stroke-dashoffset: v-bind(minDashOffset);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(720deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
</style>
