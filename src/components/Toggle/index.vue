<template>
  <label>
    <input v-model="isChecked" class="hidden" type="checkbox" />
    <div type="checkbox" class="grid rounded-full p-2" :class="props.class">
      <slot v-if="$slots.content" class="self-center" name="content"></slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { computed, toRefs, HTMLAttributes } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  class: HTMLAttributes['class'];
}>();

const emit = defineEmits(['update:modelValue', 'change', 'input']);

const { modelValue } = toRefs(props);
const isChecked = computed({
  get: () => modelValue.value,
  set: (value) => {
    emit('input', value);
    emit('change', value);
    emit('update:modelValue', value);
  },
});
</script>
