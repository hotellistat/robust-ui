import { createPopper, OptionsGeneric } from '@popperjs/core';
import type { Instance, Options, Modifier } from '@popperjs/core';

import {
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  toRefs,
  watch,
} from 'vue';

import defaultModifiers from './defaultModifiers';

export default defineComponent({
  name: 'RobustPopper',

  props: {
    appendTo: {
      type: Object as PropType<HTMLElement>,
      required: true,
    },
    options: {
      type: Object as PropType<
        Partial<OptionsGeneric<Partial<Modifier<string, unknown>>>>
      >,
      default: () => ({}),
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
      type: Array as PropType<Array<Partial<Modifier<string, unknown>>>>,
      default: () => [],
    },
  },

  emits: ['opened'],

  setup(props, { emit, slots }) {
    const { open, appendTo } = toRefs(props);
    const root = ref<HTMLElement>();
    let popper: Instance | undefined;
    const render = ref(false);

    const defaultPopperOptions: Options = {
      strategy: 'absolute',
      placement: 'bottom-start',
      modifiers: [...defaultModifiers, ...props.modifiers],
    };

    function destroy() {
      popper?.destroy();
      render.value = false;
    }

    async function init(appendElement: HTMLElement) {
      if (!appendElement) {
        return;
      }

      const mergedOptions = Object.assign(
        {},
        defaultPopperOptions,
        props.options
      );

      if (!root.value) {
        return;
      }

      popper = createPopper(appendElement, root.value, mergedOptions);

      await popper.update();
    }

    onUnmounted(() => {
      destroy();
    });

    async function mountPopper() {
      await init(appendTo.value);
      if (root.value) {
        popper?.update();
        emit('opened');
      }
    }

    async function destroyPopper() {
      if (root.value) {
        destroy();
      }
    }

    onMounted(() => {
      if (!slots.default) {
        throw new Error('Popper does not have a child slot');
      }
      watch(open, (value) => {
        render.value = true;
        // Only mount popper in the next dom update cycle after
        // popper content could be drawn, such that it can fetch the correct
        // partent dimenstions etc.
        nextTick(async () => {
          if (value) {
            mountPopper();
          } else {
            destroyPopper();
          }
        });
      });
    });

    return {
      root,
      render,
    };
  },
  render() {
    if (this.render) {
      return h(
        'div',
        {
          ref: 'root',
          class:
            'absolute bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-2xl',
        },
        this.$slots.default ? this.$slots.default() : undefined
      );
    } else {
      return undefined;
    }
  },
});
