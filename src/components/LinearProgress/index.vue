<template>
  <div
    class="wrapper relative min-w-16 rounded-full bg-gray-100 dark:bg-gray-600"
    :style="[heightComputed]"
  >
    <div
      class="progress bg-primary h-full rounded-full bg-primary-500"
      :style="[widthComputed]"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RobustLinearProgress',
};
</script>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  height: {
    type: Number,
    default: 8,
  },
  progress: {
    type: Number,
    default: 50,
  },
});

const { height, progress } = toRefs(props);

const heightComputed = computed(() => {
  return `height:${height.value}px`;
});

const widthComputed = computed(() => {
  return `width:clamp(${height.value}px, ${progress.value}%, 100%);`;
});
</script>
