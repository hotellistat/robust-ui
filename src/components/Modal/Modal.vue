<template>
  <teleport to="#modal-area">
    <transition v-bind="$attrs" name="slide">
      <div
        v-if="opened"
        ref="root"
        class="fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24"
        role="dialog"
      >
        <div
          class="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75"
          @click.self="close"
        ></div>

        <div
          class="modal-box mx-auto h-full min-h-0 max-w-lg"
          @keydown.esc="close"
        >
          <div
            class="relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700"
            :class="[modalClass]"
          >
            <div
              v-if="$slots.title"
              class="flex flex-shrink-0 items-center p-4 text-xl"
            >
              <div class="leading-4">
                <slot name="title"></slot>
              </div>
              <div class="ml-auto cursor-pointer" @click="close">
                <ph-x size="20" class="block" />
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
import { lockScroll, unlockScroll } from '../../utils/scrollLock'

export default defineComponent({
  name: 'RobustModal',

  inheritAttrs: false,
  props: {
    modalClass: {
      type: String,
    },
    opened: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { opened } = toRefs(props)

    watch(opened, (value) => {
      if (value) {
        lockScroll()
      } else {
        unlockScroll()
      }
    })

    function keyPress(e: KeyboardEvent){
      if(e.key === "Escape" && opened.value === true){
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
    }
  },
})
</script>

<style lang="postcss" scoped>
.modal-backdrop {
  backdrop-filter: blur(60px) saturate(200%);
}

.slide-enter-active {
  transition: all 50ms cubic-bezier(0, 0, 0.2, 1);

  .modal-backdrop {
    transition: all 50ms cubic-bezier(0, 0, 0.2, 1);
  }

  .modal-box {
    transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
  }
}

.slide-leave-active {
  transition: all 50ms cubic-bezier(0.4, 0, 0.2, 1);

  .modal-backdrop {
    transition: all 50ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal-box {
    transition: all 50ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.slide-enter-from {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    opacity: 0;
  }
}

.slide-leave-to {
  .modal-backdrop {
    opacity: 0;
  }
  .modal-box {
    opacity: 0;
  }
}
</style>
