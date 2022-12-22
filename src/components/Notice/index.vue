<template>
  <div :class="computedClass" class="mb-4 rounded-md border-l-4 p-4">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import variants from './variants';

const props = defineProps({
  variant: {
    type: String as PropType<'info' | 'warning' | 'error' | 'success'>,
    default: 'info',
  },
});

const computedClass = computed(() => {
  return variants[props.variant];
});
</script>
