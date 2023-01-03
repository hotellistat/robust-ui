<script lang="ts" setup>
import RobustInputWrapper from '../InputWrapper/index.vue'
import { computed, ref } from 'vue'
import { PhWarningCircle } from '@dnlsndr/vue-phosphor-icons'

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  hint: {
    type: String,
    default: undefined,
  },
  error: {
    type: String,
    default: undefined,
  },
  class: {
    type: String,
    default: undefined,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue', 'input', 'change'])

const inputRef = ref()

const inputFieldValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('input', value)
    emit('change', value)
    emit('update:modelValue', value)
  },
})
function focus() {
  inputRef.value?.focus()
}

function clear() {
  emit('update:modelValue', '')
}

defineExpose({
  focus,
  clear,
})
</script>

<template>
  <RobustInputWrapper
    v-slot="slotProps"
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    :readonly="readonly"
    :disabled="disabled"
    :condensed="condensed"
  >
    <div
      v-if="$slots.prefix"
      class="flex h-full select-none items-center pr-2 text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <slot tag="div" name="prefix" />
    </div>
    <input
      :id="slotProps.cuid"
      ref="inputRef"
      v-bind="$attrs"
      v-model="inputFieldValue"
      :disabled="disabled"
      size="8"
      class="block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-500"
      :class="[
        $slots.prefix || condensed ? 'pl-2' : 'pl-3',
        error ? 'pr-10' : $slots.suffix || condensed ? 'pr-2' : 'pr-3',
        {
          'cursor-not-allowed': readonly,
        },
        disabled ? 'cursor-not-allowed text-gray-500' : '',
      ]"
      :readonly="readonly"
    />
    <div
      v-if="$slots.suffix || error"
      class="pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400"
      :class="[condensed ? 'pr-2' : 'pr-3']"
    >
      <slot v-if="!error" tag="div" name="suffix" />
      <div v-else class="text-red-400">
        <PhWarningCircle size="20" class="block" />
      </div>
    </div>
  </RobustInputWrapper>
</template>
