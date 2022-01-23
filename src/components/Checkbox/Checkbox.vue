<template>
  <div class="inline-block">
    <label
      :class="[$slots.title ? 'items-start' : 'items-center']"
      class="vue-checkbox flex items-center cursor-pointer"
    >
      <input v-model="isChecked" :id="cuid" type="checkbox" class="hidden" />
      <div
        :class="[
          isChecked
            ? 'bg-primary-500 border-primary-500 text-white'
            : 'bg-gray-100  dark:bg-gray-700 border-gray-300 dark:border-gray-600',
        ]"
        class="
          vue-checkbox__inner
          border
          rounded
          w-4
          h-4
          mr-2
          relative
          cursor-pointer
          flex-shrink-0 flex-grow-0
          box-content
          transition-all
          duration-100
        "
      >
        <ph-check
          v-show="isChecked"
          size="14"
          class="
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
          "
        />
      </div>

      <div v-if="title && !$slots.title" class="select-none w-full leading-4">
        {{ title }}
      </div>
      <div v-if="!title && $slots.title" class="select-none w-full leading-4">
        <slot name="title" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: {
      type: [Array, String, Number, Boolean],
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
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, attrs }) {
    const cuid = "_" + Math.random().toString(36).substr(2, 9);

    const isChecked = computed({
      get() {
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
        emit("update:modelValue", newModelValue);
        emit("change", newModelValue);
      },
    });

    return {
      cuid,
      isChecked,
      attrs,
    };
  },
});
</script>
