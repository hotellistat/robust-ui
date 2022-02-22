<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import RobustInputWrapper from '../InputWrapper/InputWrapper.vue'
import { PhWarningCircle } from '@dnlsndr/vue-phosphor-icons'

export default defineComponent({
  name: 'RobustTextarea',

  inheritAttrs: false,
  components: {
    RobustInputWrapper,
    PhWarningCircle,
  },
  props: {
    title: {
      type: String,
    },
    hint: {
      type: String,
    },
    error: {
      type: String,
    },
    class: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    inputClass: {
      type: String,
    },
    modelValue: {
      type: String as PropType<string | number | string[]>,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit, attrs }) {
    const inputRef = ref()

    const inputAttrs = attrs

    const inputFieldValue = computed<string | number | string[]>({
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
      props,
      inputRef,
      focus,
      clear,
    }
  },
})
</script>

<template>
  <RobustInputWrapper
    :fixed-height="false"
    :title="title"
    :hint="hint"
    :error="error"
    :class="[condensed ? 'pt-1' : 'pt-2', $props.class]"
    :readonly="readonly"
    :disabled="disabled"
    :condensed="condensed"
    v-slot="slotProps"
  >
    <div
      v-if="$slots.prefix"
      class="flex h-full select-none items-center pr-2 text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <slot tag="div" name="prefix" />
    </div>

    <textarea
      :id="slotProps.cuid"
      ref="inputRef"
      v-bind="$attrs"
      v-model="inputFieldValue"
      :disabled="disabled"
      size="8"
      class="block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600"
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
