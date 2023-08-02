<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import RobustFloating from '../Floating/index.vue';

import {
  RobustCalendar,
  RobustInputWrapper,
  RobustButton,
  RobustCheckbox,
  RobustDatePicker,
  RobustTabs,
} from '..';
import { PhCaretDown, PhCalendar } from '@phosphor-icons/vue';
import { computed, PropType, ref, watch } from 'vue';
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

const open = ref(false);
const inputWrapperRef = ref();
const mainCalendar = ref();

const presetsComputed = computed(() =>
  props.presets.filter((d) => d.type === 'range')
);

// const enabledHistory = ref(false);
// const displayCompare = ref();
// const storeHistory = ref(true);
const elementRef = ref();
const activeSection = ref<'comparison' | 'main'>('main');

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

const showComparisonPicker = ref(props.dateRangeComparison ? true : false);
watch(showComparisonPicker, (value) => {
  console.log('showComparisonPicker', value);

  if (value) {
    stagedDateRangeComparison.value = [
      stagedDateRange.value[0],
      stagedDateRange.value[1],
    ];
    activeSection.value = 'comparison';
  } else {
    stagedDateRangeComparison.value = undefined;
    stagedPerspectivePresetComparison.value = undefined;
    stagedActivePresetComparison.value = undefined;
  }
});

// type DateType = DateTypeCustom | DateTypePreset;

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
  if (!props.dateRange || props.dateRange.length < 2) {
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

  console.log(props.dateRangeComparison);

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
      ref="select"
      class="w-full select-none items-center bg-transparent text-current outline-none"
      :class="[condensed ? 'pl-2' : 'pl-3']"
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
  <RobustFloating
    ref="elementRef"
    v-model:open="open"
    class="z-[100] origin-top-left"
    :reference="inputWrapperRef?.wrapperRef"
    :options="{
      placement: 'bottom-start',
    }"
  >
    <div
      class="flex items-center justify-between border-gray-200 dark:border-gray-700"
    >
      <RobustTabs
        v-if="showComparisonPicker && enableComparison"
        v-model="activeSection"
        class="w-full"
        :tabs="
          [
            { title: 'Main date range', value: 'main' },
            { title: 'Comparison date range', value: 'comparison' },
          ].filter((item) => enableComparison || item?.value !== 'comparison')
        "
      />
    </div>
    <section v-if="activeSection === 'main'">
      <RobustCalendar
        ref="mainCalendar"
        v-model="stagedDateRange"
        v-model:preset="stagedActivePreset"
        :presets="presetsComputed"
        :future="future"
        :past="past"
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
        :presets="presetsComputed"
        :future="future"
        :past="past"
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
      <slot name="footer" />
      <RobustButton type="primary" class="ml-auto" @click="saveTime"
        >Apply time range</RobustButton
      >
    </div>
  </RobustFloating>
</template>
