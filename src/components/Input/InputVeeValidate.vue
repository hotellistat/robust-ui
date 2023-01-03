<template>
  <RobustInput
    :id="name"
    :title="label"
    :name="name"
    :type="type"
    :model-value="inputValue"
    :placeholder="placeholder"
    :error="errorMessage"
    v-bind="$attrs"
    @input="handleChange"
    @blur="handleBlur"
  >
    <template v-for="(index, name) in $slots" #[name]>
      <slot :name="name"></slot>
    </template>
  </RobustInput>
</template>

<script lang="ts" setup>
import RobustInput from './Input.vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(props.name, undefined, {
  initialValue: props.value,
});
</script>
