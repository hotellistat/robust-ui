<template>
  <teleport to="#modal-area">
    <transition v-bind="$attrs" :name="animationName">
      <div
        v-if="opened"
        ref="root"
        class="fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24"
        role="dialog"
      >
        <div
          class="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50"
          @click.self="close"
        ></div>

        <div :class="['modal-box', modalBoxClass]" @keydown.esc="close">
          <div
            class="relative flex max-h-full min-h-0 w-full flex-col bg-white shadow-xl dark:bg-gray-800"
            :class="[modalClass, !isSlideOut ? 'rounded-md' : 'h-full']"
          >
            <div
              v-if="$slots.title"
              class="flex flex-shrink-0 items-center p-4 text-xl"
            >
              <div class="leading-4">
                <slot name="title"></slot>
              </div>
              <div class="ml-auto cursor-pointer" @click="close">
                <PhX size="20" class="block" />
              </div>
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { PhX } from "@dnlsndr/vue-phosphor-icons"
import { useScrollLock } from '@vueuse/core'
export default defineComponent({
  name: 'RobustModal',
  inheritAttrs: false,
  components: {
    PhX
  },
  props: {
    modalClass: {
      type: String,
    },
    opened: {
      type: Boolean,
      default: false,
    },
    slideOutLeft: {
      type: Boolean,
      default: false,
    },
    slideOutRight: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const { opened } = toRefs(props)
    let scrollLocked = useScrollLock(document.body)


    const animationName = computed(() => {
      if (props.slideOutLeft) {
        return "slide-left"
      }
      if (props.slideOutRight) {
        return "slide-right"
      }

      return "fade"
    })

    const modalBoxClass = computed(() => {
      if (props.slideOutLeft) {
        return "absolute left-0 top-0 bottom-0 h-full min-h-0 max-w-lg w-full"
      }
      if (props.slideOutRight) {
        return "absolute right-0 top-0 bottom-0 h-full min-h-0 max-w-lg w-full"
      }

      return "mx-auto h-full min-h-0 max-w-lg"
    })

    const isSlideOut = computed(() => {
      return props.slideOutLeft || props.slideOutRight
    })

    watch(opened, (value) => {
      if (value) {
        scrollLocked.value = true
      } else {
        scrollLocked.value = false
      }
    })

    function keyPress(e: KeyboardEvent) {
      if (e.key === "Escape" && opened.value === true) {
        e.stopPropagation()
        e.preventDefault()
        close()
      }
    }

    onMounted(() => {
      window.addEventListener("keydown", keyPress)
    })

    onUnmounted(() => {
      window.removeEventListener("keydown", keyPress)
    })

    async function open() {
      opened.value = true
      emit('update:opened', true)
      emit('open')
    }

    async function close() {
      opened.value = false
      emit('update:opened', false)
      emit('close')
    }

    return {
      open,
      close,
      opened,
      animationName,
      modalBoxClass,
      isSlideOut
    }
  },
})
</script>

<style lang="postcss" scoped>
.modal-backdrop {
  backdrop-filter: blur(2px);
}

.fade-enter-active {
  transition: all 200ms ease-in-out;

  .modal-backdrop {
    transition: all 100ms ease-in-out;
  }

  .modal-box {
    transition: all 200ms ease-in-out;
  }
}

.fade-leave-active {
  transition: all 50ms ease-in-out;

  .modal-backdrop {
    transition: all 50ms ease-in-out;
  }

  .modal-box {
    transition: all 50ms ease-in-out;
  }
}

.fade-enter-from {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    opacity: 0;
  }
}

.fade-leave-to {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    opacity: 0;
  }
}

.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 150ms ease-in-out;

  .modal-backdrop {
    transition: all 150ms ease-in-out;
  }

  .modal-box {
    transition: all 150ms ease-in-out;
  }
}

.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 150ms ease-in-out;

  .modal-backdrop {
    transition: all 150ms ease-in-out;
  }

  .modal-box {
    transition: all 150ms ease-in-out;
  }
}

.slide-right-enter-from {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    transform: translateX(100%);
    opacity: 0;
  }
}

.slide-right-leave-to {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    transform: translateX(100%);
    opacity: 0;
  }
}

.slide-left-enter-from {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.slide-left-leave-to {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
