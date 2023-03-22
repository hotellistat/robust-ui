<template>
  <div>
    <RobustModal v-model:opened="open" :size="size">
      <template #title> Delete </template>
      <div class="p-4">
        <slot name="body" />
        <div v-if="!$slots.body" class="flex flex-col gap-y-2">
          <div class="mb-4">Are you sure you want to delete this item?</div>
        </div>
        <div class="flex justify-end">
          <div class="flex gap-x-2">
            <RobustButton variant="danger" class="uppercase" @click="confirm">
              Delete</RobustButton
            >
            <RobustButton variant="muted" class="uppercase" @click="decline">
              Cancel
            </RobustButton>
          </div>
        </div>
      </div>
    </RobustModal>
    <RobustButton v-bind="props" @click.stop="handleClick">
      <slot />
    </RobustButton>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { RobustButton, RobustModal } from '..';

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: [String, Boolean] as PropType<string | false>,
    default: 'danger',
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: () => 'sm',
  },
});

const emit = defineEmits(['confirm', 'decline']);

const confirm = () => {
  open.value = false;
  emit('confirm');
};

const decline = () => {
  open.value = false;
  emit('decline');
};

const open = ref(false);

const handleClick = (e: MouseEvent) => {
  if (e.shiftKey) return confirm();
  open.value = true;
};
</script>
