<template>
  <Teleport to="body">
    <Transition
      v-bind="$attrs"
      :name="animationName"
      @after-leave="emit('close')"
      @leave-cancelled="emit('close')"
      @after-enter="emit('open')"
      @enter-cancelled="emit('open')"
    >
      <div
        v-if="opened"
        ref="root"
        class="fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24"
        role="dialog"
      >
        <div
          class="robust-ui-modal__backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50"
          @click.self="close"
        ></div>

        <div
          class="robust-ui-modal__box"
          :class="[modalBoxClass]"
          @keydown.esc="close"
        >
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
              <div class="ml-auto" @click="close">
                <PhX size="20" class="block" />
              </div>
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, onMounted, toRefs, watch } from 'vue';
import { PhX } from '@phosphor-icons/vue';
import { useScrollLock } from '@vueuse/core';

const props = defineProps({
  modalClass: {
    type: String,
    default: undefined,
  },
  opened: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
  slideOutLeft: {
    type: Boolean,
    default: false,
  },
  slideOutRight: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['open', 'close', 'update:opened']);

const { opened } = toRefs(props);
let scrollLocked;

const animationName = computed(() => {
  if (props.slideOutLeft) {
    return 'robust-ui-modal__slide-left';
  }
  if (props.slideOutRight) {
    return 'robust-ui-modal__slide-right';
  }

  return 'robust-ui-modal__fade';
});

const modalBoxClass = computed(() => {
  let classString = '';

  if (props.slideOutLeft) {
    classString += 'absolute left-0 top-0 bottom-0 h-full min-h-0 w-full';
  } else if (props.slideOutRight) {
    classString += 'absolute right-0 top-0 bottom-0 h-full min-h-0 w-full';
  } else {
    classString += 'mx-auto h-full min-h-0';
  }

  switch (props.size) {
    case '3xl': {
      classString += ' max-w-7xl';
      break;
    }
    case '2xl': {
      classString += ' max-w-6xl';
      break;
    }
    case 'xl': {
      classString += ' max-w-5xl';
      break;
    }
    case 'lg': {
      classString += ' max-w-4xl';
      break;
    }
    case 'sm': {
      classString += ' max-w-md';
      break;
    }
    default: {
      classString += ' max-w-lg';
      break;
    }
  }

  return classString;
});

const isSlideOut = computed(() => {
  return props.slideOutLeft || props.slideOutRight;
});

watch(opened, stateChange);

function stateChange(value) {
  if (value) {
    window.addEventListener('keydown', keyPress);
    scrollLocked.value = true;
  } else {
    window.removeEventListener('keydown', keyPress);
    scrollLocked.value = false;
  }
}

function keyPress(e: KeyboardEvent) {
  if (e.key === 'Escape' && opened.value === true) {
    e.stopPropagation();
    e.preventDefault();
    close();
  }
}

onMounted(() => {
  scrollLocked = useScrollLock(document.body);
  stateChange(opened.value);
});

async function open() {
  opened.value = true;
  emit('update:opened', true);
}

async function close() {
  opened.value = false;
  emit('update:opened', false);
}

defineExpose({
  open,
  close,
});
</script>

<style lang="postcss">
.robust-ui-modal__backdrop {
  backdrop-filter: blur(4px);
}

.robust-ui-modal__fade-enter-active {
  transition: all 100ms ease-in-out;

  .robust-ui-modal__backdrop {
    transition: all 100ms ease-in-out;
  }

  .robust-ui-modal__box {
    transition: all 100ms ease-in-out;
  }
}

.robust-ui-modal__fade-leave-active {
  transition: all 100ms ease-in-out;

  .robust-ui-modal__backdrop {
    transition: all 100ms ease-in-out;
  }

  .robust-ui-modal__box {
    transition: all 100ms ease-in-out;
  }
}

.robust-ui-modal__fade-enter-from {
  .robust-ui-modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .robust-ui-modal__box {
    opacity: 0;
  }
}

.robust-ui-modal__fade-leave-to {
  .robust-ui-modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .robust-ui-modal__box {
    opacity: 0;
  }
}

.robust-ui-modal__slide-right-enter-active,
.robust-ui-modal__slide-left-enter-active {
  transition: all 150ms ease-in-out;

  .robust-ui-modal__backdrop {
    transition: all 150ms ease-in-out;
  }

  .robust-ui-modal__box {
    transition: all 150ms ease-in-out;
  }
}

.robust-ui-modal__slide-right-leave-active,
.robust-ui-modal__slide-left-leave-active {
  transition: all 150ms ease-in-out;

  .robust-ui-modal__backdrop {
    transition: all 150ms ease-in-out;
  }

  .robust-ui-modal__box {
    transition: all 150ms ease-in-out;
  }
}

.robust-ui-modal__slide-right-enter-from {
  .robust-ui-modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .robust-ui-modal__box {
    transform: translateX(100%);
    opacity: 0;
  }
}

.robust-ui-modal__slide-right-leave-to {
  .robust-ui-modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .robust-ui-modal__box {
    transform: translateX(100%);
    opacity: 0;
  }
}

.robust-ui-modal__slide-left-enter-from {
  .robust-ui-modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .robust-ui-modal__box {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.robust-ui-modal__slide-left-leave-to {
  .robust-ui-modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .robust-ui-modal__box {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
