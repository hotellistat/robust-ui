<script lang="ts">
export default {
  name: 'RobustSelect',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import RobustInputWrapper from '../InputWrapper/index.vue';
import FLoating from '../Floating/index.vue';
import {
  ref,
  computed,
  nextTick,
  toRefs,
  onMounted,
  inject,
  PropType,
} from 'vue';
import { MaybeRef, debouncedWatch } from '@vueuse/core';
import { onClickOutside } from '@vueuse/core';
import { PhCheck, PhCaretDown } from '@phosphor-icons/vue';
import { size } from '@floating-ui/vue';

export type Value = string | number | boolean | null | undefined;

export interface Option {
  title: string;
  value: Value;
  class?: string;
}

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  class: {
    type: String as PropType<string | string[] | object>,
    default: undefined,
  },
  boxClass: {
    type: String as PropType<string | string[] | object>,
    default: undefined,
  },
  hint: {
    type: String,
    default: undefined,
  },
  error: {
    type: String,
    default: undefined,
  },
  fixedHeight: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: true,
  },
  searchFunction: {
    type: Function as PropType<(query: string) => Promise<Array<Option>>>,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: 'Select',
  },
  options: {
    type: Array as PropType<Array<Option>>,
    default: () => [],
  },
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<Value | Array<Value>>,
    default: undefined,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'input',
  'change',
  'focus',
  'blur',
  'search',
]);
// const refSelectContainer = ref()
const refSelectInput = ref();

const refSelectWrapper = ref();
const { options, modelValue } = toRefs(props);

const anchorRef = ref();

const open = ref(false);
const elementRef = ref();
// const inputWrapper = ref()

const search = ref('');

const middleware = [
  // size({
  //   apply({ rects }) {
  //     Object.assign(elementRef.value.style, {
  //       width: `${rects.reference.width}px`,
  //     });
  //   },
  // }),
];

const computedOptions = ref<Option[]>([]);

async function filterBySearchTerm(value) {
  if (props.searchFunction !== undefined) {
    computedOptions.value = await props.searchFunction(value);
  }

  if (value === '') {
    computedOptions.value = options.value;
  } else {
    computedOptions.value = options.value.filter((option) =>
      option.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}

debouncedWatch(
  options,
  async () => {
    if (!props.lazy) {
      await filterBySearchTerm(search.value);
    }
  },
  { debounce: 150 }
);

debouncedWatch(
  search,
  async (value) => {
    if (!props.lazy) {
      await filterBySearchTerm(search.value);
    }
    emit('search', value);
  },
  { debounce: 150 }
);

onClickOutside(elementRef, (event) => {
  if (!open.value) {
    return;
  }

  if (refSelectWrapper.value?.wrapperRef.contains(event.target)) {
    event.stopPropagation();
  }

  resetFields();
  closeDropdown();
});

function openDropdown(event) {
  open.value = true;
  sortOptionsBySelected();
  nextTick(() => {
    if (refSelectInput.value) {
      refSelectInput.value.focus();
    }
  });
  emit('focus');
}

function closeDropdown() {
  open.value = false;
  emit('blur');
}

onMounted(async () => {
  await filterBySearchTerm('');
});

const activeItem = computed(() => {
  return props.options.find((item) => item.value === props.modelValue);
});

function selectItem(item) {
  if (Array.isArray(modelValue.value)) {
    let updatedValue = modelValue.value;
    if (modelValue.value.includes(item.value)) {
      updatedValue = modelValue.value.filter((v) => v !== item.value);
    } else {
      updatedValue = [...updatedValue, item.value];
    }
    emit('input', updatedValue);
    emit('change', updatedValue);
    emit('update:modelValue', updatedValue);
  } else {
    emit('input', item.value);
    if (item.value !== props.modelValue) {
      emit('change', item.value);
      emit('update:modelValue', item.value);
    }
    nextTick(() => {
      closeDropdown();
      emit('blur');
    });
  }
}

console.log(refSelectWrapper);

function resetFields() {
  search.value = '';
}

// returns if options is selected
// in form of boolean
function optionSelected(option: any) {
  if (Array.isArray(modelValue.value)) {
    return modelValue.value.includes(option.value);
  }
  return modelValue.value === option.value;
}

function getInputTitle() {
  if (Array.isArray(modelValue.value)) {
    if (modelValue.value.length < 1) {
      return props.placeholder;
    }
    const titles = [];
    for (const value of modelValue.value) {
      const found = options.value.find((o) => o.value === value);
      if (found) {
        titles.push(found.title);
      }
    }
    return titles.join(', ');
  } else {
    return activeItem.value ? activeItem.value.title : props.placeholder;
  }
}

function sortOptionsBySelected() {
  if (Array.isArray(modelValue.value)) {
    const selectedOptions = [];
    const notSelectedOptions = [];

    for (const option of computedOptions.value) {
      if (modelValue.value.includes(option.value)) {
        selectedOptions.push(option);
      } else {
        notSelectedOptions.push(option);
      }
    }

    computedOptions.value = [...selectedOptions, ...notSelectedOptions];
    console.log(computedOptions.value);
  }
}

function controlAll() {
  if (!Array.isArray(modelValue.value)) {
    return;
  }
  if (modelValue.value.length < 1) {
    selectAll();
  } else {
    deselectAll();
  }
}

function selectAll() {
  const newValue = computedOptions.value.map((option) => option.value);
  emit('input', newValue);
  emit('change', newValue);
  emit('update:modelValue', newValue);
}

function deselectAll() {
  const newValue = [];
  emit('input', newValue);
  emit('change', newValue);
  emit('update:modelValue', newValue);
}
</script>

<template>
  <RobustInputWrapper
    ref="refSelectWrapper"
    type="button"
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    :readonly="readonly"
    :condensed="condensed"
    v-bind="$attrs"
    @click.stop="openDropdown"
    @focus.stop="openDropdown"
    @blur.stop="closeDropdown"
  >
    <div
      v-if="$slots.prefix"
      class="pointer-events-none flex h-full select-none items-center pr-2 text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <slot tag="div" name="prefix" />
    </div>
    <div
      ref="refSelect"
      class="relative flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none"
      :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
      v-bind="$attrs"
    >
      <div
        :class="[!open || !searchable ? 'opacity-100' : 'opacity-0']"
        class="min-w-0 select-none truncate"
      >
        {{ getInputTitle() }}
      </div>
      <input
        v-if="open && searchable"
        ref="refSelectInput"
        v-model="search"
        class="pointer-events-none absolute block h-full w-full min-w-0 select-none bg-transparent text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
      />
    </div>

    <div
      class="pointer-events-none flex h-full flex-shrink-0 select-none items-center pr-3 text-gray-400 dark:text-gray-500"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <PhCaretDown
        :size="14"
        weight="bold"
        class="transition-transform duration-200"
        :class="{ 'rotate-180 transform': open }"
      />
    </div>
  </RobustInputWrapper>
  <FLoating
    v-if="refSelectWrapper?.wrapperRef"
    ref="elementRef"
    v-model:open="open"
    same-size
    class="z-[100] origin-top select-none overflow-hidden"
    :reference="refSelectWrapper?.wrapperRef"
    :middleware="middleware"
  >
    <div v-if="Array.isArray(modelValue)" class="flex justify-end px-4 py-2">
      <button type="button" class="select-none font-light" @click="controlAll">
        <div v-if="Array.isArray(modelValue) && modelValue.length > 0">
          Clear all
        </div>
        <div v-else>Select all</div>
      </button>
    </div>
    <div v-if="computedOptions.length > 0" class="max-h-72 overflow-auto">
      <button
        v-for="option in computedOptions"
        :key="String(option.value)"
        type="button"
        class="flex w-full min-w-0 max-w-full items-center gap-4 whitespace-pre-wrap px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        :class="option.class"
        @click="selectItem(option)"
      >
        <span>{{ option.title }}</span>
        <PhCheck
          v-if="optionSelected(option)"
          class="ml-auto flex-shrink-0 text-gray-400"
          weight="bold"
          size="14"
        />
      </button>
    </div>
    <div v-else class="py-2 text-center text-gray-400">No options</div>
  </FLoating>
</template>
