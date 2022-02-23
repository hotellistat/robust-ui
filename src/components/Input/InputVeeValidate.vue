<template>
  <RobustInput
    :title="label"
    :name="name"
    :id="name"
    :type="type"
    :model-value="inputValue"
    :placeholder="placeholder"
    :error="errorMessage"
    v-bind="$attrs"
    @input="handleChange"
    @blur="handleBlur"
  >
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name"></slot>
    </template>
  </RobustInput>
</template>

<script lang="ts">
import RobustInput from "./Input.vue"
import { useField } from "vee-validate";
import { defineComponent } from "vue";

export default defineComponent({
  isShim: true,
  inheritAttrs: false,
  name: "RobustInputVeeValidate",
  components: {
    RobustInput
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
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
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  }
})
</script>