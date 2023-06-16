<template>
  <section>
    <div
      v-if="
        'title' in option && option.title !== null && option.title.length > 0
      "
      class="mb-4 flex-shrink-0 pr-4 text-lg text-gray-500 dark:text-gray-400"
    >
      {{ option.title }}
    </div>
    <RobustInput
      v-bind="option.attributes"
      v-model="computedValue"
      class="w-full"
      type="number"
    >
      <template v-if="option.attributes?.suffix" #suffix>{{
        option.attributes?.suffix
      }}</template>
      <template v-if="option.attributes?.prefix" #prefix>{{
        option.attributes?.prefix
      }}</template>
    </RobustInput>
  </section>
</template>

<script setup lang="ts">
import { PropType, onMounted } from 'vue';
import { SchemaTextOption } from '../FormRenderer';
import RobustInput from '../../Input/index.vue';
import { computed } from 'vue';

const props = defineProps({
  option: {
    type: Object as PropType<SchemaTextOption>,
    required: true,
  },
  modelValue: {
    type: Number,
    default: undefined,
  },
  initializeDefaults: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get() {
    const num = Number(props.modelValue);
    return isNaN(num) ? undefined : num;
  },
  set(val) {
    emit('update:modelValue', Number(val));
  },
});

onMounted(() => {
  if (props.initializeDefaults && computedValue.value === undefined) {
    setDefaultValue();
  }
});

function setDefaultValue() {
  if (props.option.default) {
    emit('update:modelValue', props.option.default);
  }
}
</script>
