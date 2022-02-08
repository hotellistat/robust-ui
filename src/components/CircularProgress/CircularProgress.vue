<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    x="0px"
    y="0px"
    :viewBox="`0 0 ${size} ${size}`"
  >
    <circle
      fill="transparent"
      stroke="currentColor"
      :stroke-width="stroke"
      stroke-linecap="round"
      transform="rotate(-90)"
      :stroke-dasharray="3.1415 * (size - 2 * safeMargin)"
      :stroke-dashoffset="3.1415 * size * (1 - progress / 100)"
      :transform-origin="`${0.5 * size} ${0.5 * size} 0`"
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 2 - stroke / 2 - safeMargin"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "RobustCircularProgress",

  props: {
    size: {
      type: Number,
      default: 32,
    },
    stroke: {
      type: Number,
      default: 4,
    },
    safeMargin: {
      type: Number,
      default: 1,
    },
    progress: {
      type: Number,
      default: 25,
    },
  }

})
</script>
