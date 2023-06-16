<template>
  <section>
    <RobustButton
      v-bind="option.attributes"
      class="w-full"
      @click="option.click"
    >
      {{ option.title }}
    </RobustButton>
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SchemaButtonOption } from '../FormRenderer';
import RobustButton from '../../Button/index.vue';
type Value = string | number | boolean | null | undefined;

const props = defineProps({
  option: {
    type: Object as PropType<SchemaButtonOption>,
    required: true,
  },
  modelValue: {
    type: [String, Array] as PropType<Value | Value[]>,
    default: undefined,
  },
  initializeDefaults: {
    type: Boolean,
    default: true,
  },
});
</script>
