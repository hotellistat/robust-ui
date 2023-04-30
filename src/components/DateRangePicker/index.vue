<script lang="ts" setup>
import { MaybeRef, onClickOutside } from '@vueuse/core';
import {
  RobustPopper,
  RobustCalendar,
  RobustInputWrapper,
  RobustButton,
  RobustCheckbox,
  RobustDatePicker,
  RobustTabs,
} from '..';
import { PhCaretDown, PhCalendar } from '@phosphor-icons/vue';
import { computed, inject, PropType, readonly, ref, toRefs, watch } from 'vue';
import defaultPresets, { Preset } from '../Calendar/presets';

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  hint: {
    type: String,
    default: undefined,
  },
  dateRange: {
    type: Object as PropType<[Date, Date]>,
    required: true,
  },
  dateRangeComparison: {
    type: Object as PropType<[Date, Date]>,
    default: undefined,
  },
  enableComparison: {
    type: Boolean,
    default: false,
  },
  perspectiveDate: {
    type: Date,
    default: undefined,
  },
  perspectiveDateComparison: {
    type: Date,
    default: undefined,
  },
  enablePerspective: {
    type: Boolean,
    default: false,
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
  dateHistory: {
    type: Array,
    default: () => [],
  },
  activePreset: {
    type: String,
    default: () => undefined,
  },
  activePresetComparison: {
    type: String,
    default: () => undefined,
  },
  perspectivePreset: {
    type: String,
    default: () => undefined,
  },
  perspectivePresetComparison: {
    type: String,
    default: () => undefined,
  },
  presets: {
    type: Array as PropType<Preset[]>,
    default: () => defaultPresets,
  },
});

const emit = defineEmits([
  'blur',
  'focus',
  'update:dateRange',
  'update:dateRangeComparison',
  'update:perspectiveDate',
  'update:perspectiveDateComparison',
  'update:activePreset',
  'update:activePresetComparison',
  'update:perspectivePreset',
  'update:perspectivePresetComparison',
  'change',
]);

const cursorPointer = inject<MaybeRef<boolean>>('enableCursorPointer', true);

const open = ref(false);
const inputWrapperRef = ref();
const mainCalendar = ref();

const enabledHistory = ref(false);
const displayCompare = ref();
const storeHistory = ref(true);
const popperRef = ref();
const active = ref<'comparison' | 'main'>('main');

const showComparisonPicker = ref(props.dateRangeComparison ? true : false);

const stagedDateRange = ref<[Date, Date]>();
watch(
  () => props.dateRange,
  (value) => {
    stagedDateRange.value = value;
  },
  { immediate: true }
);

const stagedDateRangeComparison = ref<[Date, Date]>();
watch(
  () => props.dateRangeComparison,
  (value) => {
    stagedDateRangeComparison.value = value;
  },
  { immediate: true }
);

const stagedPerspectiveDate = ref<Date>();
watch(
  () => props.perspectiveDate,
  (value) => {
    stagedPerspectiveDate.value = value;
  },
  { immediate: true }
);

const stagedPerspectiveDateComparison = ref<Date>();
watch(
  () => props.perspectiveDateComparison,
  (value) => {
    stagedPerspectiveDateComparison.value = value;
  },
  { immediate: true }
);

const stagedActivePreset = ref();
watch(
  () => props.activePreset,
  (value) => {
    stagedActivePreset.value = value;
  },
  { immediate: true }
);
const stagedActivePresetComparison = ref<string>();
watch(
  () => props.activePresetComparison,
  (value) => {
    stagedActivePresetComparison.value = value;
  },
  { immediate: true }
);

const stagedPerspectivePreset = ref<string>();
watch(
  () => props.perspectivePreset,
  (value) => {
    stagedPerspectivePreset.value = value;
  },
  { immediate: true }
);

const stagedPerspectivePresetComparison = ref<string>();
watch(
  () => props.perspectivePresetComparison,
  (value) => {
    stagedPerspectivePresetComparison.value = value;
  },
  { immediate: true }
);

type DateType = DateTypeCustom | DateTypePreset;

interface DateTypeCustom {
  name: 'custom';
}

interface DateTypePreset {
  name: 'preset';
  value: string;
}

const perspectiveDatePresets = computed(() =>
  props.presets.filter((d) => d.type === 'perspective')
);

const displayDate = computed(() => {
  if (!props.dateRange) {
    return 'Select date';
  }

  const realDate = props.dateRange;
  const formatter = Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatter.format(realDate[0]) + ' - ' + formatter.format(realDate[1]);
});

const displayComparisonDate = computed(() => {
  if (!props.enableComparison) {
    return undefined;
  }

  if (!props.dateRangeComparison) {
    return 'Select date';
  }

  const realDate = props.dateRangeComparison;
  const formatter = Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatter.format(realDate[0]) + ' - ' + formatter.format(realDate[1]);
});

const displayPreset = computed(() => {
  if (!props.dateRange) {
    return undefined;
  }
  if (props.activePreset) {
    const preset = props.presets.find((d) => d.key === props.activePreset);
    return preset?.title;
  }

  return undefined;
});

const displayComparisonPreset = computed(() => {
  if (!props.dateRangeComparison) {
    return undefined;
  }
  if (props.activePresetComparison) {
    const preset = props.presets.find(
      (d) => d.key === props.activePresetComparison
    );
    return preset?.title;
  }

  return undefined;
});

onClickOutside(popperRef, (event) => {
  if (!open.value) {
    return;
  }

  event.stopPropagation();

  open.value = false;
  emit('blur');
});

const handleClick = () => {
  open.value = !open.value;
};

const saveTime = async () => {
  emit('update:dateRange', stagedDateRange.value);
  emit('update:dateRangeComparison', stagedDateRangeComparison.value);
  emit('update:perspectiveDate', stagedPerspectiveDate.value);
  emit(
    'update:perspectiveDateComparison',
    stagedPerspectiveDateComparison.value
  );
  emit('update:activePreset', stagedActivePreset.value);
  emit('update:activePresetComparison', stagedActivePresetComparison.value);
  emit('update:perspectivePreset', stagedPerspectivePreset.value);
  emit(
    'update:perspectivePresetComparison',
    stagedPerspectivePresetComparison.value
  );
  emit('change', stagedDateRange.value);
  emit('blur');
  open.value = false;
};
</script>

<template>
  <RobustInputWrapper
    ref="inputWrapperRef"
    v-slot="slotProps"
    box-class="items-center"
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    :condensed="condensed"
    @click.stop="open = true"
  >
    <div
      class="items-center text-gray-400"
      :class="[condensed ? 'pl-2' : 'pl-3']"
    >
      <PhCalendar size="20" />
    </div>
    <div
      :id="slotProps.cuid"
      ref="select"
      class="w-full select-none items-center bg-transparent text-current outline-none"
      :class="[
        condensed ? 'pl-2' : 'pl-3',
        cursorPointer ? 'cursor-pointer' : 'cursor-default',
      ]"
      v-bind="$attrs"
    >
      <div
        class="flex items-center gap-2"
        :class="[
          enableComparison && showComparisonPicker
            ? condensed
              ? 'text-xs font-medium'
              : 'text-sm'
            : 'text-base',
        ]"
      >
        <div class="relative flex flex-shrink-0">
          <div
            :style="{ visibility: displayPreset ? 'hidden' : 'visible' }"
            class="min-w-0 truncate tabular-nums"
          >
            {{ displayDate }}
          </div>
          <div v-show="displayPreset" class="absolute inset-0 min-w-0 truncate">
            {{ displayPreset }}
          </div>
        </div>
        <div
          :class="[perspectiveDate ? 'visible' : 'invisible']"
          class="ml-auto h-[8px] w-[8px] rounded-full bg-primary-300/50"
          title="Perspective date enabled"
        ></div>
      </div>

      <div
        v-if="showComparisonPicker && enableComparison"
        class="flex items-center gap-2 text-gray-400 dark:text-gray-400"
        :class="[!condensed ? 'text-xs' : 'text-[0.6rem] font-medium']"
      >
        <div class="relative flex flex-shrink-0">
          <div
            :style="{
              visibility: displayComparisonPreset ? 'hidden' : 'visible',
            }"
            class="min-w-0 truncate tabular-nums"
          >
            {{ displayComparisonDate }}
          </div>
          <div
            v-show="displayComparisonPreset"
            class="absolute inset-0 min-w-0 truncate"
          >
            {{ displayComparisonPreset }}
          </div>
        </div>
        <div
          :class="[perspectiveDateComparison ? 'visible' : 'invisible']"
          class="ml-auto h-[6px] w-[6px] rounded-full bg-primary-300/50"
          title="Perspective date enabled"
        ></div>
      </div>
    </div>

    <div
      class="flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500"
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
    <div
      class="flex items-center justify-between border-gray-200 dark:border-gray-700"
    >
      <RobustTabs
        v-if="showComparisonPicker && enableComparison"
        v-model="active"
        class="w-full"
        :tabs="
          [
            { title: 'Main date range', value: 'main' },
            { title: 'Comparison date range', value: 'comparison' },
          ].filter((item) => enableComparison || item?.value !== 'comparison')
        "
      />
    </div>
    <section v-if="active === 'main'">
      <RobustCalendar
        ref="mainCalendar"
        v-model="stagedDateRange"
        v-model:preset="stagedActivePreset"
      >
        <RobustDatePicker
          v-if="enablePerspective"
          v-model="stagedPerspectiveDate"
          v-model:preset="stagedPerspectivePreset"
          placeholder="Newest"
          title="Perspective of"
          condensed
          resetable
          class="mb-4 w-56"
          :presets="perspectiveDatePresets"
        />

        <RobustCheckbox v-if="enableComparison" v-model="showComparisonPicker">
          <template #title>Compare</template>
        </RobustCheckbox>
      </RobustCalendar>
    </section>

    <section v-else>
      <RobustCalendar
        v-model="stagedDateRangeComparison"
        v-model:preset="stagedActivePresetComparison"
        variant="secondary"
      >
        <RobustDatePicker
          v-if="enablePerspective"
          v-model="stagedPerspectiveDateComparison"
          v-model:preset="stagedPerspectivePresetComparison"
          placeholder="Newest"
          title="Perspective of"
          condensed
          resetable
          class="mb-4 w-56"
          :presets="perspectiveDatePresets"
        />
      </RobustCalendar>
    </section>
    <div
      class="flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"
    >
      <RobustButton type="primary" class="ml-auto" @click="saveTime"
        >Apply time range</RobustButton
      >
    </div>
  </RobustPopper>
</template>
