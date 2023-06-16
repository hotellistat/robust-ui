<template>
  <RobustModal v-model:opened="open" :size="size">
    <template #title>
      <slot name="title"> Confirm </slot>
    </template>
    <div class="p-6">
      <div v-if="!$slots.body" class="mb-8">
        <slot name="description">
          Are you sure you want to proceed with this action?
        </slot>
      </div>
      <div class="flex justify-end gap-2">
        <slot name="cancel" :cancel="cancel">
          <RobustButton
            variant="muted"
            class="uppercase"
            @click.capture.stop.prevent="cancel"
          >
            Cancel
          </RobustButton>
        </slot>
        <slot name="confirm" :confirm="confirm">
          <RobustButton
            variant="danger"
            class="uppercase"
            @click.capture.stop.prevent="confirm"
          >
            Proceed
          </RobustButton>
        </slot>
      </div>
    </div>
  </RobustModal>
  <slot :click="handleClick" />
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

const emit = defineEmits(['confirm', 'cancel', 'update:opened']);

const confirm = () => {
  open.value = false;
  emit('update:opened', false);
  emit('confirm');
};

const cancel = () => {
  open.value = false;
  emit('update:opened', false);
  emit('cancel');
};

const open = ref(false);

const handleClick = (e: MouseEvent) => {
  if (e.shiftKey) {
    return confirm();
  }
  emit('update:opened', true);
  open.value = true;
};
</script>
