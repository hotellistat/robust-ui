<script lang="ts" setup>
import RobustFloating from '../Floating/index.vue';
import RobustCalendar from '../Calendar/index.vue';
import RobustInputWrapper from '../InputWrapper/index.vue';
import { PhCaretDown, PhCalendar, PhArrowClockwise } from '@phosphor-icons/vue';
import { computed, ref, toRefs, PropType, inject } from 'vue';
import { MaybeRef, onClickOutside } from '@vueuse/core';
import { Preset } from '../Calendar/presets';

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  hint: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: Object as PropType<Date>,
    default: undefined,
  },
  error: {
    type: String,
    default: undefined,
  },
  class: {
    type: String,
    default: undefined,
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Select date',
  },
  resetable: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  preset: {
    type: String,
    default: () => undefined,
  },
  presets: {
    type: Array as PropType<Preset[]>,
    default: () => [],
  },
  variant: {
    type: String,
    default: () => 'primary',
  },
  past: {
    type: Boolean,
    default: true,
  },
  future: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'update:preset',
  'change',
  'blur',
]);

const { modelValue, presets, variant } = toRefs(props);

const open = ref(false);
const elementRef = ref();
const inputWrapperRef = ref();

const computedValue = computed<Date>({
  get() {
    return modelValue?.value;
  },
  set(value) {
    open.value = false;
    if (Array.isArray(value)) {
      emit('update:modelValue', value[0]);
      emit('change', value[0]);
    } else {
      emit('update:modelValue', value);
      emit('change', value);
    }
    emit('blur');
  },
});

const preset = computed({
  get() {
    return props.preset;
  },
  set(value) {
    emit('update:preset', value);
  },
});

const displayDate = computed(() => {
  if (!computedValue.value) {
    return props.placeholder;
  }

  if (preset.value) {
    return presets.value.find((p) => p.key === preset.value)?.title;
  }

  const realDate = computedValue.value;
  const formatter = Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  if (Array.isArray(realDate)) {
    return formatter.format(realDate[0]);
  } else {
    return formatter.format(realDate);
  }
});

onClickOutside(elementRef, (event) => {
  if (!open.value) {
    return;
  }

  if (inputWrapperRef.value?.wrapperRef.contains(event.target)) {
    event.stopPropagation();
  }

  closeDropdown();
});

function closeDropdown() {
  if (open.value === true) {
    open.value = false;
    emit('blur');
  }
}
function resetValue() {
  open.value = false;
  computedValue.value = undefined;
  preset.value = undefined;
}
</script>

<template>
  <RobustInputWrapper
    ref="inputWrapperRef"
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    :readonly="readonly"
    :condensed="condensed"
    @click.stop="open = !open"
  >
    <div
      v-if="$slots.prefix"
      class="pointer-events-none flex h-full select-none items-center pr-2 text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <slot tag="div" name="prefix" />
    </div>
    <div
      class="flex h-full items-center pr-2 text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <PhCalendar size="20" />
    </div>
    <div
      ref="select"
      class="flex h-full w-full select-none items-center bg-transparent pl-2 text-current outline-none"
      v-bind="$attrs"
    >
      <div class="min-w-0 truncate tabular-nums">{{ displayDate }}</div>
    </div>

    <div
      class="flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <PhCaretDown
        :size="14"
        weight="bold"
        class="transition-transform duration-200"
        :class="{ 'rotate-180 transform': open }"
      />
    </div>
    <div
      v-if="resetable"
      class="flex h-full flex-shrink-0 items-center px-3 pr-3 text-gray-400 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-700"
      @click.stop="resetValue"
    >
      <PhArrowClockwise
        :size="14"
        weight="bold"
        class="transition-transform duration-200"
      />
    </div>
  </RobustInputWrapper>
  <RobustFloating
    v-if="inputWrapperRef?.wrapperRef"
    ref="elementRef"
    v-model:open="open"
    class="z-[100] origin-top-left"
    :reference="inputWrapperRef?.wrapperRef"
    :options="{
      placement: 'bottom-start',
    }"
  >
    <RobustCalendar
      v-model="computedValue"
      v-model:preset="preset"
      :presets="presets"
      :variant="variant"
      :past="past"
      :future="future"
      :enable-preset="presets.length !== 0"
    />
  </RobustFloating>
</template>
