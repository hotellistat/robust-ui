<template>
  <div
    :class="computedClass"
    class="flex items-center gap-2 rounded-md border-l-4 p-4"
  >
    <div v-if="variantIcons[props.variant]" class="flex-shrink-0">
      <Component :is="variantIcons[props.variant]" size="20" />
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, markRaw } from 'vue';
import variants from './variants';
import {
  PhInfo,
  PhWarning,
  PhXCircle,
  PhCheckCircle,
} from '@phosphor-icons/vue';

const props = defineProps({
  variant: {
    type: String as PropType<'info' | 'warning' | 'error' | 'success'>,
    default: 'info',
  },
});

const variantIcons = {
  info: markRaw(PhInfo),
  warning: markRaw(PhWarning),
  error: markRaw(PhXCircle),
  success: markRaw(PhCheckCircle),
};

const computedClass = computed(() => {
  return variants[props.variant];
});
</script>
