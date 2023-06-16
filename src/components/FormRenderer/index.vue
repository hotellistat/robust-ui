<template>
  <div class="flex gap-8" :class="horizontal ? 'flex-row' : 'flex-col'">
    <div v-for="(option, index) in options" :key="index" class="last:mb-0">
      <div
        v-if="option.type === 'subform'"
        :class="{
          'mb-4 border-l-4 border-gray-200 pl-6 dark:border-gray-700':
            getSubformDependency(option)?.type !== 'static',
        }"
      >
        <FormRenderer
          v-if="getSubform(option) !== undefined"
          v-model="modelValueRef[option.item]"
          :initialize-defaults="initializeDefaults"
          :options="getSubform(option) || []"
        />
      </div>
      <div
        v-if="option.type === 'layout_horizontal'"
        class="grid items-end gap-4"
        :style="{
          'grid-template-columns': `repeat(${option.attributes.columns}, minmax(0, 1fr))`,
        }"
      >
        <FormRenderer
          v-model="modelValueRef"
          :initialize-defaults="initializeDefaults"
          :options="option.options"
        />
      </div>

      <template v-else>
        <Component
          :is="formComponentMap.get(option.type)"
          v-if="'item' in option"
          ref="formComponents"
          v-model="modelValueRef[option.item]"
          :initialize-defaults="initializeDefaults"
          :option="option"
        />
        <Component
          :is="formComponentMap.get(option.type)"
          v-else
          :option="option"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs, Component as VueComponent, ref, watch } from 'vue';

import FormRenderer from './index.vue';
import { Option, SchemaSubformOption } from './FormRenderer';
import FormCheckbox from './FormComponents/FormCheckbox.vue';
import FormCheckboxes from './FormComponents/FormCheckboxes.vue';
import FormDate from './FormComponents/FormDate.vue';
import FormDescription from './FormComponents/FormDescription.vue';
import FormDraggable from './FormComponents/FormDraggable.vue';
import FormRadio from './FormComponents/FormRadio.vue';
import FormNumber from './FormComponents/FormNumber.vue';
import FormRangeSlider from './FormComponents/FormRangeSlider.vue';
import FormSelect from './FormComponents/FormSelect.vue';
import FormSeparator from './FormComponents/FormSeparator.vue';
import FormSwitch from './FormComponents/FormSwitch.vue';
import FormText from './FormComponents/FormText.vue';
import FormInputArray from './FormComponents/FormInputArray.vue';
import FormTextarea from './FormComponents/FormTextarea.vue';
import FormButton from './FormComponents/FormButton.vue';

defineOptions({
  name: 'FormRenderer',
});

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  initializeDefaults: {
    type: Boolean,
    default: true,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const formComponentMap = new Map<string, VueComponent>();

formComponentMap.set('checkbox', FormCheckbox);
formComponentMap.set('checkboxes', FormCheckboxes);
formComponentMap.set('date', FormDate);
formComponentMap.set('description', FormDescription);
formComponentMap.set('draggable', FormDraggable);
formComponentMap.set('number', FormNumber);
formComponentMap.set('radio', FormRadio);
formComponentMap.set('slider', FormRangeSlider);
formComponentMap.set('select', FormSelect);
formComponentMap.set('separator', FormSeparator);
formComponentMap.set('switch', FormSwitch);
formComponentMap.set('text', FormText);
formComponentMap.set('textarea', FormTextarea);
formComponentMap.set('input_array', FormInputArray);
formComponentMap.set('button', FormButton);

type FormComponent = VueComponent & { setDefaultValue?: () => void };
const formComponents = ref<Array<FormComponent>>([]);

const { options, modelValue: modelValueRef } = toRefs(props);

// The main form object that gets filled recursively if subforms are used

watch(
  modelValueRef,
  (value) => {
    emit('update:modelValue', value);
  },
  {
    deep: true,
  }
);

for (const option of options.value) {
  if (option.type === 'subform') {
    modelValueRef.value[option.item] = modelValueRef.value[option.item] || {};
    continue;
  }
}

// fetches the subform options based on the dependency
function getSubform(item: SchemaSubformOption): Option[] | undefined {
  const subformOptions = item.options?.find(
    (option) => option?.identifier === modelValueRef.value[item.dependency]
  )?.options;

  return subformOptions;
}

// fetches the dependency option based on the dependency
function getSubformDependency(item: SchemaSubformOption): Option | undefined {
  return props.options.find(
    (option) => 'item' in option && option.item === item.dependency
  );
}

// defineExpose({
//   setDefaults,
// });
</script>
