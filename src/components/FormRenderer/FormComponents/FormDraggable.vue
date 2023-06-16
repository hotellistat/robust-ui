<template>
  <section>
    <div
      v-if="
        'title' in option && option.title !== null && option.title.length > 0
      "
      class="group mb-4 flex flex-shrink-0 items-center justify-between pr-4 text-lg text-gray-500 dark:text-gray-400"
    >
      <div>
        {{ option.title }}
      </div>
      <div
        class="rounded-full p-1 opacity-0 transition-all duration-100 hover:text-gray-300 group-hover:opacity-100"
        @click="setDefaultValue"
      >
        <PhArrowCounterClockwise />
      </div>
    </div>
    <section v-if="computedValue && computedValue.length > 0">
      <Draggable
        v-bind="option.attributes"
        v-model="computedValue"
        class="mb-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-600"
        item-key="value"
        handle=".handle"
      >
        <template #item="{ element, index }">
          <div
            class="flex items-center gap-2 rounded border-b border-gray-200 last:border-none dark:border-gray-600"
          >
            <div
              class="handle flex h-10 w-10 cursor-grab items-center justify-center active:cursor-grabbing"
            >
              <PhDotsSixVertical />
            </div>
            <div class="">{{ index + 1 }}.</div>
            <div class="flex-1">
              {{ element.title }}
            </div>
            <div
              v-if="option.attributes?.editable === true"
              class="handle flex h-10 w-10 items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              @click="removeElement(element.value)"
            >
              <PhTrash size="16" />
            </div>
          </div>
        </template>
      </Draggable>
    </section>
    <RobustEmptyState
      v-else
      :icon="PhListBullets"
      title="No items"
      description="Add items to reorder them"
    ></RobustEmptyState>
    <RobustSelect
      v-if="remainingOptions.length > 1 && option.attributes?.editable === true"
      class="w-full"
      :options="remainingOptions"
      :model-value="null"
      @update:model-value="addElement"
    >
      <template #prefix>
        <PhPlus size="16" />
      </template>
    </RobustSelect>
  </section>
</template>

<script setup lang="ts">
import { PropType, onMounted, toRefs } from 'vue';
import { SchemaSelectOption, SchemaSelectOptionOption } from '../FormRenderer';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import {
  PhArrowCounterClockwise,
  PhDotsSixVertical,
  PhListBullets,
  PhPlus,
  PhTrash,
} from '@phosphor-icons/vue';
import RobustEmptyState from '../../EmptyState/index.vue';
import RobustSelect from '../../Select/index.vue';

type Item = string | number | boolean | undefined | null;

const props = defineProps({
  option: {
    type: Object as PropType<SchemaSelectOption>,
    required: true,
  },
  modelValue: {
    type: [Array] as PropType<SchemaSelectOptionOption[]>,
    default: undefined,
  },
  initializeDefaults: {
    type: Boolean,
    default: true,
  },
});

const { option, modelValue } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

function setDefaultValue() {
  console.log('Setting draggable default value');

  emit(
    'update:modelValue',
    option.value.options.map((item) => item.value)
  );
}

const computedValue = computed({
  get() {
    return modelValue?.value?.map((item) =>
      props.option.options.find((option) => option.value === item)
    );
  },
  set(val) {
    const finalValue = val
      ?.filter((item): item is SchemaSelectOptionOption => item !== undefined)
      .map((item) => item.value);
    console.log('final draggable', finalValue);

    emit('update:modelValue', finalValue);
  },
});

const remainingOptions = computed(() => {
  if (computedValue.value === undefined) {
    return [];
  }
  const options = option.value.options
    .filter(
      (item) =>
        computedValue.value?.find((value) => value?.value === item.value) ===
        undefined
    )
    .map((option) => ({
      title: option.title.toString(),
      value: option.value,
    }));

  return [
    {
      title: 'Add an item',
      value: null,
    },
    ...options,
  ];
});

function removeElement(value: Item) {
  console.log('removeElement', value);
  if (computedValue.value === undefined) {
    return;
  }
  computedValue.value = computedValue.value.filter(
    (item) => item?.value !== value
  );
}

function addElement(value: Item) {
  console.log('adding');

  if (computedValue.value === undefined) {
    return;
  }
  const itemReference = option.value.options.find(
    (item) => item.value === value
  );
  console.log('reffff', itemReference);

  computedValue.value = [...computedValue.value, itemReference];

  console.log(computedValue.value);
}

onMounted(() => {
  if (props.initializeDefaults && computedValue.value === undefined) {
    setDefaultValue();
  }
});

defineExpose({
  setDefaultValue,
});
</script>
