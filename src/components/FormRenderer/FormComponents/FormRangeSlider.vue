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
    <div class="flex items-center">
      <div v-if="option.prefix" class="w-2/12 text-right">
        {{ option.prefix }}
      </div>
      <div class="w-full px-3">
        <RobustRangeSlider
          v-if="computedValue"
          v-bind="option.attributes"
          v-model="computedValue"
          :value="computedValue[0]"
        />
      </div>

      <div v-if="option.suffix" class="w-2/12 text-left">
        {{ option.suffix }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PropType, onMounted } from 'vue';
import { SchemaSliderOption } from '../FormRenderer';
import { computed } from 'vue';
import RobustRangeSlider from '../../RangeSlider/index.vue';

const props = defineProps({
  option: {
    type: Object as PropType<SchemaSliderOption>,
    required: true,
  },
  modelValue: {
    type: Array as unknown as PropType<[number, number]>,
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
