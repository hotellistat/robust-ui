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
    <RobustCheckbox
      v-bind="option.attributes"
      v-model="computedValue"
      :title="option.label"
      class="mr-3"
    ></RobustCheckbox>
  </section>
</template>

<script setup lang="ts">
import { PropType, onMounted } from 'vue';
import { SchemaCheckboxOption } from '../FormRenderer';
import { computed } from 'vue';
import RobustCheckbox from '../../Checkbox/index.vue';

const props = defineProps({
  option: {
    type: Object as PropType<SchemaCheckboxOption>,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean, Array, undefined] as PropType<
      string | number | boolean | unknown[] | undefined
    >,
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
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
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
