<template>
  <base-input-wrapper
    :title="title"
    :hint="hint"
    :error="error"
    :condensed="condensed"
  >
    <template v-slot:default="slotProps">
      <div
        class="select-none h-full flex items-center pr-2 text-gray-400"
        :class="[slotProps.condensed ? 'pl-2' : 'pl-3']"
        v-if="$slots.prefix"
      >
        <slot tag="div" name="prefix" />
      </div>
      <input
        size="8"
        :id="'input_' + slotProps.uid"
        ref="inputRef"
        class="
          bg-transparent
          block
          w-full
          h-full
          text-current
          outline-none
          dark:placeholder-gray-600
        "
        :class="[
          $slots.prefix || slotProps.condensed ? 'pl-2' : 'pl-3',
          $slots.suffix || slotProps.condensed ? 'pr-2' : 'pr-3',
          {
            'cursor-not-allowed': slotProps.readonly,
          },
        ]"
        :readonly="slotProps.readonly"
        v-bind="$attrs"
        v-model="inputFieldValue"
      />
      <div
        class="select-none h-full flex items-center pl-2 text-gray-400 ml-auto"
        :class="[slotProps.condensed ? 'pr-2' : 'pr-3']"
        v-if="$slots.suffix || slotProps.error"
      >
        <slot tag="div" name="suffix" v-if="!slotProps.error" />
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
  props: {
    title: String,
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
  components: {
    BaseInputWrapper,
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { emit, attrs }) {
    const inputRef = ref()

    const inputAttrs = attrs

    const cuid = '_' + Math.random().toString(36).substr(2, 9)

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
      cuid,
      inputRef,
      focus,
      clear,
    }
  },
})
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-in-out;
  overflow: hidden;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  padding-top: theme('spacing.1');
}
.fade-enter-from,
.fade-leave-to {
  padding-top: 0;
  opacity: 0;
  line-height: 0;
}
</style>
