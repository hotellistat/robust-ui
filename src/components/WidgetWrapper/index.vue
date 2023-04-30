<script lang="ts" setup>
import { inject, ref } from 'vue';
import { PhDotsThreeVertical } from '@phosphor-icons/vue';
import { RobustModal } from '..';
import { MaybeRef } from '@vueuse/core';

defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
  showOptions: {
    type: Boolean,
    default: true,
  },
});
const cursorPointer = inject<MaybeRef<boolean>>('enableCursorPointer', true);

const emit = defineEmits(['optionsOpened', 'optionsClosed']);

const open = ref(false);
</script>

<template>
  <RobustModal
    v-if="showOptions"
    v-model:opened="open"
    slide-out-right
    @close="emit('optionsClosed')"
    @open="emit('optionsOpened')"
  >
    <template #title>
      <slot v-if="$slots.title" name="title" />
    </template>
    <slot
      name="options"
      :set="
        (value: boolean) => {
          open = value;
        }
      "
    />
  </RobustModal>
  <div
    v-bind="$attrs"
    class="group relative flex flex-col rounded-md bg-white dark:bg-gray-800"
  >
    <div
      v-if="$slots.title"
      class="widget-header relative flex min-w-0 flex-shrink-0 select-none items-center justify-between gap-4 truncate rounded-md p-4 font-medium text-gray-500 dark:text-gray-400"
      :class="{
        'hover:bg-gray-200 dark:hover:bg-gray-700': draggable,
      }"
    >
      <slot v-if="$slots.title" name="title" />
      <div
        v-if="$slots.options && showOptions"
        class="-m-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-100 group-hover:opacity-100 dark:hover:bg-gray-700"
        :class="[cursorPointer ? 'cursor-pointer' : 'cursor-default']"
        @click="open = !open"
      >
        <PhDotsThreeVertical size="20" weight="bold" />
      </div>
    </div>
    <section
      v-if="$slots.default"
      class="h-full w-full px-4 pb-4 pt-2"
      :class="{ 'pt-4': !$slots.title }"
    >
      <slot />
    </section>
    <slot name="raw" />
  </div>
</template>
