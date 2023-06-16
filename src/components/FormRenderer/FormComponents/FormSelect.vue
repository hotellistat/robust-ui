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
    <RobustSelect
      v-bind="option.attributes"
      v-model="computedValue"
      class="w-full"
      :options="
        option.options.map((option) => ({
          title: option.title.toString(),
          value: option.value,
        }))
      "
    >
      <template v-if="option.prefix" #prefix>{{ option.prefix }}</template>
    </RobustSelect>
  </section>
</template>

<script setup lang="ts">
import { PropType, onMounted } from 'vue';
import { SchemaSelectOption } from '../FormRenderer';
import { computed } from 'vue';
import RobustSelect from '../../Select/index.vue';
type Value = string | number | boolean | null | undefined;

const props = defineProps({
  option: {
    type: Object as PropType<SchemaSelectOption>,
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
