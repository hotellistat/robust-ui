import { createPopper } from '@popperjs/core'
import type {
  Instance,
  Options,
  Modifier,
} from '@popperjs/core'
import gsap from 'gsap'

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
} from 'vue'

export default defineComponent({
  props: {
    appendTo: {
      type: HTMLElement,
      required: true,
    },
    options: {
      type: Object as PropType<Object>,
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
      type: Array as PropType<Array<Partial<Modifier<string, Record<string, unknown>>>>>,
      default: () => [],
    },
  },

  setup(props, { emit, slots }) {
    const { open, appendTo } = toRefs(props)
    const root = ref<HTMLElement>()
    let popper: Instance | undefined
    const render = ref(false)

    const defaultPopperOptions: Options = {
      strategy: 'absolute',
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            roundOffsets: ({ x, y }: { x: number; y: number }) => ({
              x: Math.round(x),
              y: Math.round(y),
            }),
            adaptive: true,
            gpuAcceleration: props.gpu
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 2],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            padding: 8,
          },
        },
        ...props.modifiers,
      ],
    }

    function destroy() {
      popper?.destroy()
    }

    async function init(appendElement: HTMLElement) {
      if (!appendElement) {
        return
      }

      const mergedOptions = Object.assign(
        {},
        defaultPopperOptions,
        props.options
      )

      if (!root.value) {
        return
      }

      console.log(appendElement,
        root.value,
        mergedOptions);

      popper = createPopper(
        appendElement,
        root.value,
        mergedOptions
      )

      console.log("uppupp");

      await popper.update()
    }

    onUnmounted(() => {
      console.log('popper unmounted')
      destroy()
    })

    onMounted(() => {
      if (!slots.default) {
        throw new Error('Popper does not have a child slot')
      }

      watch(open, (value) => {
        render.value = true
        nextTick(async () => {
          if (value === true) {
            if (root.value) {
              nextTick(() => {
                popper?.update()
              })
            }
            await init(appendTo.value)
            if (root.value) {
              gsap
                .fromTo(
                  root.value,
                  {
                    scale: 0.9,
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.1,
                    ease: 'power1',
                  }
                )
                .then(() => {
                  emit('opened')
                })
            }
          } else {
            if (root.value) {
              gsap
                .fromTo(
                  root.value,
                  {
                    scale: 1,
                    opacity: 1,
                  },
                  {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.1,
                    ease: 'power1',
                  }
                )
                .then(() => {
                  if (root.value) {
                    destroy()
                    render.value = false
                  }
                })
            }
          }
        })
      })
    })

    return {
      appendTo,
      root,
      render,
    }
  },
  render() {
    if (this.render) {
      return h(
        'div',
        {
          ref: 'root',
          onClick: (event: MouseEvent) => {
            event.preventDefault()
            event.stopPropagation()
          },
          class:
            'bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md  shadow-2xl',
        },
        this.$slots.default ? this.$slots.default() : undefined
      )
    } else {
      return undefined
    }
  },
})
