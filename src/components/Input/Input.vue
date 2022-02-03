<template>
  <base-input-wrapper
    :title="title"
    :hint="hint"
    :error="error"
    :condensed="condensed"
  >
    <template #default="slotProps">
      <div
        v-if="$slots.prefix"
        class="flex h-full select-none items-center pr-2 text-gray-400"
        :class="[slotProps.condensed ? 'pl-2' : 'pl-3']"
      >
        <slot tag="div" name="prefix" />
      </div>
      <input
        :id="slotProps.cuid"
        ref="inputRef"
        v-model="inputFieldValue"
        size="8"
        class="block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600"
        :class="[
          $slots.prefix || slotProps.condensed ? 'pl-2' : 'pl-3',
          slotProps.error
            ? 'pr-10'
            : $slots.suffix || slotProps.condensed
            ? 'pr-2'
            : 'pr-3',
          {
            'cursor-not-allowed': slotProps.readonly,
          },
        ]"
        :readonly="slotProps.readonly"
        v-bind="$attrs"
      />
      <div
        v-if="$slots.suffix || slotProps.error"
        class="pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400"
        :class="[slotProps.condensed ? 'pr-2' : 'pr-3']"
      >
        <slot v-if="!slotProps.error" tag="div" name="suffix" />
        <div v-else class="text-red-400">
          <ph-warning-circle size="20" class="block" />
        </div>
      </div>
    </template>
  </base-input-wrapper>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import BaseInputWrapper from '../InputWrapper/InputWrapper.vue'

export default defineComponent({
  components: {
    BaseInputWrapper,
  },
  props: {
    title: {
      type: String,
      default: undefined,
    },
    hint: String,
    error: String,
    inputClass: String,
    modelValue: String,
    readonly: Boolean,
    condensed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit, attrs }) {
    const inputRef = ref()

    const inputAttrs = attrs

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

    return {
      inputFieldValue,
      inputAttrs,

      inputRef,
      focus,
      clear,
    }
  },
})
</script>
