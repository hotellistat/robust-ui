<script lang="ts" setup>
import RobustPopper from '../Popper';
import RobustCalendar from '../Calendar/index.vue';
import RobustInputWrapper from '../InputWrapper/index.vue';
import { format } from 'date-fns';
import { PhCaretDown, PhCalendar } from '@phosphor-icons/vue';
import { computed, ref, toRefs, PropType, readonly } from 'vue';
import { onClickOutside } from '@vueuse/core';

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
  readonly: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['blur', 'update:modelValue', 'change', 'blur']);

const { modelValue } = toRefs(props);
const open = ref(false);
const popperRef = ref();
const inputWrapperRef = ref();

onClickOutside(popperRef, (event) => {
  if (open.value) {
    if (inputWrapperRef.value.wrapperRef.contains(event.target)) {
      event.stopPropagation();
      event.preventDefault();
    }
    closeDropdown();
    emit('blur');
  }
});

const computedValue = computed<Date>({
  get() {
    return modelValue?.value ? modelValue.value : new Date();
  },
  set(value) {
    open.value = false;
    emit('update:modelValue', value);
    emit('change', value);
    emit('blur');
  },
});

const displayDate = computed(() => {
  if (!computedValue.value) {
    return 'Select date';
  }

  const realDate = computedValue.value;
  try {
    return realDate ? format(realDate, 'P') : 'Unknown';
  } catch (e) {
    return undefined;
  }
});

function closeDropdown() {
  if (open.value === true) {
    open.value = false;
    emit('blur');
  }
}
</script>

<template>
  <RobustInputWrapper
    ref="inputWrapperRef"
    v-slot="slotProps"
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    :readonly="readonly"
    :condensed="condensed"
    @click.stop="open = !open"
  >
    <div
      class="flex h-full items-center pr-2 text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <PhCalendar size="20" />
    </div>
    <div
      :id="slotProps.cuid"
      ref="select"
      class="flex h-full w-full cursor-default items-center bg-transparent pl-2 text-current outline-none"
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
  </RobustInputWrapper>
  <RobustPopper
    v-if="inputWrapperRef?.wrapperRef"
    ref="popperRef"
    v-model:open="open"
    class="z-[100] origin-top-left"
    :append-to="inputWrapperRef?.wrapperRef"
    :options="{
      placement: 'bottom-start',
    }"
  >
    <RobustCalendar v-model="computedValue" />
  </RobustPopper>
</template>
