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
        v-show="opened"
        ref="root"
        class="fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:p-12"
        role="dialog"
      >
        <div
          class="robust-ui-modal__backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-100/70 dark:bg-black/40"
          @click.self="close"
        ></div>
        <div
          class="robust-ui-modal__box"
          :class="[modalBoxClass]"
          @keydown.esc="close"
        >
          <div
            class="relative flex max-h-full min-h-0 w-full flex-col border border-gray-200 bg-white/70 backdrop-blur-3xl dark:border-gray-800 dark:bg-gray-800/70"
            :class="[
              modalClass,
              modalBoxInnerClass,
              !isSlideOut ? 'rounded-2xl' : 'h-full',
            ]"
          >
            <div
              v-if="$slots.title"
              class="flex flex-shrink-0 items-center p-6 text-lg"
            >
              <div class="flex-1 truncate">
                <slot name="title" :close="manualClose"></slot>
              </div>
              <button
                v-if="props.dismissable"
                type="button"
                class="-m-4 p-4 text-gray-400 transition-colors duration-150 hover:text-gray-900 dark:hover:text-gray-100"
                @click="close"
              >
                <PhX size="20" class="block" />
              </button>
            </div>
            <div v-if="$slots.header" class="w-full flex-shrink-0">
              <slot name="header" :close="manualClose"></slot>
            </div>
            <section
              :class="[
                autoOverflow
                  ? 'overflow-y-auto supports-[overflow:overlay]:[overflow-y:overlay]'
                  : undefined,
              ]"
              class="flex-1"
            >
              <slot :close="manualClose"></slot>
            </section>
            <div v-if="$slots.footer" class="w-full flex-shrink-0">
              <slot name="footer" :close="manualClose"></slot>
            </div>
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
  dismissable: {
    type: Boolean,
    default: true,
  },
  autoOverflow: {
    type: Boolean,
    default: true,
  },
  slideOutLeft: {
    type: Boolean,
    default: false,
  },
  slideOutRight: {
    type: Boolean,
    default: false,
  },
  center: {
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
  } else if (props.center) {
    classString += 'mx-auto h-full min-h-0 flex items-center';
  } else {
    classString += 'mx-auto h-full min-h-0';
  }

  switch (props.size) {
    case 'full': {
      classString += ' w-full';
      break;
    }
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
const modalBoxInnerClass = computed(() => {
  let classString = '';

  switch (props.size) {
    case 'full': {
      classString += ' h-full';
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
  scrollLocked = useScrollLock(document.documentElement);
  stateChange(opened.value);
});

async function open() {
  opened.value = true;
  emit('update:opened', true);
}

async function close() {
  if (props.dismissable) {
    opened.value = false;
    emit('update:opened', false);
  }
}

async function manualClose() {
  opened.value = false;
  emit('update:opened', false);
}

defineExpose({
  open,
  close,
});
</script>
<style lang="postcss">
.robust-ui-modal__fade-enter-active {
  transition: all 150ms ease-in-out;

  .robust-ui-modal__backdrop {
    transition: all 150ms ease-in-out;
  }

  .robust-ui-modal__box {
    transition: all 150ms ease-in-out;
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
  }

  .robust-ui-modal__box {
    transform: translateY(-10px);
    opacity: 0;
  }
}

.robust-ui-modal__fade-leave-to {
  .robust-ui-modal__backdrop {
    opacity: 0;
  }

  .robust-ui-modal__box {
    transform: translateY(10px);
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
  }

  .robust-ui-modal__box {
    transform: translateX(100%);
    opacity: 0;
  }
}

.robust-ui-modal__slide-right-leave-to {
  .robust-ui-modal__backdrop {
    opacity: 0;
  }

  .robust-ui-modal__box {
    transform: translateX(100%);
    opacity: 0;
  }
}

.robust-ui-modal__slide-left-enter-from {
  .robust-ui-modal__backdrop {
    opacity: 0;
  }

  .robust-ui-modal__box {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.robust-ui-modal__slide-left-leave-to {
  .robust-ui-modal__backdrop {
    opacity: 0;
  }

  .robust-ui-modal__box {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
