<script setup lang="ts">
import {
  Middleware,
  Placement,
  ReferenceElement,
  Strategy,
  autoUpdate,
  flip,
  hide,
  offset,
  size,
  useFloating,
} from '@floating-ui/vue';
import {
  PropType,
  Ref,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
} from 'vue';

const props = defineProps({
  reference: {
    type: Object as PropType<ReferenceElement>,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
  sameSize: {
    type: Boolean,
    default: false,
  },
  offset: {
    type: Number,
    default: 4,
  },
  strategy: {
    type: String as PropType<Strategy>,
    default: 'absolute',
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom-start',
  },
  transform: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  middleware: {
    type: Array as PropType<Middleware[]>,
    default: () => [],
  },
});

const { reference } = toRefs(props);
const floating = ref<HTMLElement>();

const { floatingStyles, update } = useFloating(reference, floating, {
  strategy: props.strategy,
  placement: props.placement,
  transform: props.transform,
  middleware: [
    flip({
      padding: 10,
    }),
    offset({
      mainAxis: props.offset,
    }),
    hide(),
    props.sameSize
      ? size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
              minWidth: '200px',
            });
          },
        })
      : undefined,
    ...props.middleware,
  ],
});

let cleanup = undefined;

watch(
  () => props.open,
  (open) => {
    if (open) {
      nextTick(() => {
        cleanup = autoUpdate(reference.value, floating.value, update);
      });
    } else {
      cleanup?.();
    }
  }
);

onUnmounted(() => {
  cleanup?.();
});
</script>

<template>
  <div
    v-if="open"
    ref="floating"
    :style="floatingStyles"
    class="absolute rounded-md border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800"
  >
    <slot></slot>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
