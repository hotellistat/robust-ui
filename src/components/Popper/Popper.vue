<template>
  <div ref="root" aria-describedby="tooltip" @click="handleClick">
    <slot name="root"></slot>
  </div>
  <div ref="pop" role="tooltip" v-show="isOpen">
    <slot name="pop"></slot>
    <div data-popper="arrow"></div>
  </div>
</template>

<script lang="ts">
import { createPopper } from '@popperjs/core'
import type { Instance, Options, Modifier } from '@popperjs/core'

import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  watch,
} from 'vue'

import defaultModifiers from './defaultModifiers'

export default defineComponent({
  name: 'RobustPopper',

  props: {
    appendTo: {
      type: HTMLElement,
      required: true,
    },
    options: {
      type: Object as PropType<Object>,
      default: {}
    },
    gpu: {
      type: Boolean,
      default: true,
    },
    height: {
      type: [String, Number],
      default: 230,
    },
    open: {
      type: Boolean,
      default: false,
    },
    modifiers: {
      type: Array as PropType<Array<Partial<Modifier<any, any>>>>,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    const defaultPopperOptions: Options = {
      strategy: 'absolute',
      placement: 'bottom-start',
      modifiers: [...defaultModifiers, ...props.modifiers],
    };
    const root = ref(null)
    const pop = ref(null);
    const isOpen = ref(props.open)

    let popper: Instance | undefined;

    async function init() {
      const mergedOptions = Object.assign(
        {},
        defaultPopperOptions,
        props.options
      );
      popper = createPopper(root.value, pop.value, mergedOptions as any);
      await popper.update()
    }

    function handleClick(event: Event) {
      isOpen.value = !isOpen.value;
      event.stopPropagation();
    }

    function handleClose(event: Event) {
      if (root.value.contains(event.target)) {
        isOpen.value = !isOpen.value;
        return;
      }
      if (isOpen.value) {
        isOpen.value = false
      }
    }

    onMounted(async () => {
      init();
      await popper.update();
      document.addEventListener('click', handleClose)
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClose)
    })
    watch([isOpen], () => {
      if (isOpen.value) {
        popper.update()
      };
      emit('update:open', isOpen.value)
    })

    return {
      root,
      pop,
      isOpen,
      handleClick
    }
  }
})
</script>

<style scoped>
div[data-popper-placement^="top"] > div[data-popper="arrow"] {
  bottom: -4px;
}

div[data-popper-placement^="bottom"] > div[data-popper="arrow"] {
  top: -4px;
}

div[data-popper-placement^="left"] > div[data-popper="arrow"] {
  right: -4px;
}

div[data-popper-placement^="right"] > div[data-popper="arrow"] {
  left: -4px;
}
div[role="tooltip"] {
  @apply shadow-md text-base font-normal rounded p-1.5 inline-block;
}

div[data-popper="arrow"],
div[data-popper="arrow"]::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

div[data-popper="arrow"] {
  visibility: hidden;
}

div[data-popper="arrow"]::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}
</style>