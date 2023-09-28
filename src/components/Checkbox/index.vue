<template>
  <div class="inline-block">
    <label class="grid grid-cols-[1fr,auto] items-center">
      <input :id="cuid" v-model="isChecked" type="checkbox" class="hidden" />
      <div
        class="relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 rounded border text-white transition-all duration-100"
        :class="[
          isChecked
            ? 'border-primary-500 bg-primary-500 '
            : 'border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-700',
        ]"
      >
        <PhCheck
          :class="[isChecked ? 'opacity-1' : 'opacity-0']"
          size="14"
          weight="bold"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"
        />
      </div>
      <div class="w-full select-none pt-px">
        {{ title }}
        <slot name="title"/>
      </div>

      <div v-if="description || $slots.description"></div>

      <p v-if="description || $slots.description" class="opacity-60 text-sm">
        {{ description }}
        <slot name="description"/>
      </p>

    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { PhCheck } from '@phosphor-icons/vue';

const props = defineProps({
  modelValue: {
    type: [Array, String, Number, Boolean],
    default: false,
  },
  value: {
    type: [Array, String, Number, Boolean],
    default: true,
  },
  disabledValue: {
    type: [Array, String, Number, Boolean],
    default: false,
  },
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'change']);

const cuid = '_' + Math.random().toString(36).substr(2, 9);

const isChecked = computed<boolean>({
  get(): boolean {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(props.value);
    } else {
      return props.modelValue === props.value;
    }
  },
  set(value) {
    let newModelValue = props.modelValue;
    if (Array.isArray(newModelValue)) {
      if (value) {
        newModelValue.push(props.value);
      } else {
        newModelValue.splice(newModelValue.indexOf(props.value), 1);
      }
    } else {
      if (value) {
        newModelValue = props.value;
      } else {
        newModelValue = props.disabledValue;
      }
    }
    emit('update:modelValue', newModelValue);
    emit('change', newModelValue);
  },
});
</script>
