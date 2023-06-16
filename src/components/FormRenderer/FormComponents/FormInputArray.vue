<template>
  <section>
    <div
      v-if="
        'title' in option && option.title !== null && option.title
          ? option.title.length > 0
          : undefined
      "
      class="mb-4 flex-shrink-0 pr-4 text-lg text-gray-500 dark:text-gray-400"
    >
      {{ option.title }}
    </div>
    <div>
      <form class="relative flex" @submit.prevent="pushInput">
        <RobustInput
          v-model="inputValue"
          class="w-full"
          @keydown.enter.prevent="pushInput"
        >
        </RobustInput>
        <RobustButton
          type="submit"
          race="primary-outlined"
          class="ml-3 block flex-shrink-0 bg-primary-400 text-white"
          >Add</RobustButton
        >
      </form>
      <div
        class="flex flex-col gap-2"
        :class="{ 'mt-4': computedValue && computedValue.length > 0 }"
      >
        <div
          v-for="item in modelValue"
          :key="item"
          class="bg-blue flex w-full items-center justify-between rounded-lg bg-gray-100 p-2 dark:bg-gray-700"
        >
          <div>{{ item }}</div>
          <RobustConfirmationModal v-slot="{ click }" @confirm="popInput(item)">
            <button
              class="-m-1 flex items-center justify-center self-stretch rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-100"
              @click="click"
            >
              <PhX />
            </button>
          </RobustConfirmationModal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RobustButton from '../../Button/index.vue';
import RobustConfirmationModal from '../../ConfirmationModal/index.vue';
import RobustInput from '../../Input/index.vue';
import { toRefs, PropType, ref } from 'vue';
import { SchemaInputListOption } from '../FormRenderer';
import { computed } from 'vue';
import { PhX } from '@phosphor-icons/vue';

const props = defineProps({
  option: {
    type: Object as PropType<SchemaInputListOption>,
    required: true,
  },
  modelValue: {
    type: Array as PropType<Array<string | number>>,
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

const { modelValue } = toRefs(props);

const inputValue = ref('');

function pushInput() {
  if (inputValue.value.length === 0) {
    return;
  }
  if (computedValue?.value?.includes(inputValue.value)) {
    return;
  }
  console.log(inputValue.value);

  console.log(computedValue.value);

  if (!computedValue.value) {
    computedValue.value = [inputValue.value];
  } else {
    computedValue.value?.push(inputValue.value);
  }

  inputValue.value = '';
}

function popInput(value: string | number) {
  computedValue.value = computedValue.value?.filter((item) => item !== value);
}
</script>
