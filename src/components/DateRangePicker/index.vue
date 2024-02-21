<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import RobustFloating from '../Floating/index.vue';

import {
  RobustCalendar,
  RobustInputWrapper,
  RobustButton,
  RobustDatePicker,
  RobustModal,
} from '..';
import { PhCaretLeft, PhCaretRight, PhXCircle } from '@phosphor-icons/vue';
import { computed, PropType, ref, watch } from 'vue';
import defaultPresets, { Preset } from '../Calendar/presets';
import {
  addDays,
  addWeeks,
  differenceInDays,
  getDay,
  startOfYear,
  subDays,
} from 'date-fns';

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
  showComparison: {
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
  enableMainPerspective: {
    type: Boolean,
    default: () => true,
  },
  enableComparisonPerspective: {
    type: Boolean,
    default: () => true,
  },
  enableMainPreset: {
    type: Boolean,
    default: () => false,
  },
  enableComparisonPreset: {
    type: Boolean,
    default: () => false,
  },
  readOnlyMainCalendar: {
    type: Boolean,
    default: () => false,
  },
  readOnlyComparisonCalendar: {
    type: Boolean,
    default: () => false,
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
  presetsMain: {
    type: Array as PropType<Preset[]>,
    default: () => defaultPresets,
  },
  presetsComparison: {
    type: Array as PropType<Preset[]>,
    default: () => defaultPresets,
  },
  filters: {
    type: Array as PropType<Array<{ title: string; value: number | string }>>,
    default: () => [],
  },
  filter: {
    type: String || Number,
    default: () => undefined,
  },
  comparisonFilters: {
    type: Array as PropType<
      Array<{ title: string; value: number | string } | Preset>
    >,
    default: () => [],
  },
  comparisonFilter: {
    type: String || Number,
    default: () => undefined,
  },
  past: {
    type: Boolean,
    default: true,
  },
  future: {
    type: Boolean,
    default: true,
  },
  perspectiveTitle: {
    type: String,
    default: 'Perspective of',
  },
  type: {
    type: String as PropType<'dropdown' | 'modal'>,
    default: 'dropdown',
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
  'update:showComparison',
  'update:filter',
  'update:comparisonFilter',
  'comparisonCleared',
  'change',
]);

const openMain = ref(false);
const openComparison = ref(false);
const inputWrapperMainRef = ref();
const inputWrapperComparisonRef = ref();
const mainCalendar = ref();

const presetsMainComputed = computed(() =>
  props.presetsMain.filter((d) => d.type === 'range')
);

const presetsComparisonComputed = computed(() =>
  props.presetsComparison.filter((d) => d.type === 'range')
);

const filtersComputed = computed(() => props.filters || []);

// const enabledHistory = ref(false);
// const displayCompare = ref();
// const storeHistory = ref(true);
const mainElementRef = ref();
const activeSection = ref<'comparison' | 'main'>('main');

const stagedDateRange = ref<[Date, Date] | []>();
watch(
  () => props.dateRange,
  (value) => {
    stagedDateRange.value = value || [];
  },
  { immediate: true }
);

const stagedDateRangeComparison = ref<[Date, Date] | []>();
watch(
  () => props.dateRangeComparison,
  (value) => {
    stagedDateRangeComparison.value = value || [];
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

const showComparisonPicker = computed({
  get: () => props.showComparison,
  set: (value) => {
    if (value) {
      activeSection.value = 'comparison';
    }
    emit('update:showComparison', value);
  },
});

watch(showComparisonPicker, (value) => {
  if (value) {
    // if date range is set, set comparison date range to the same
    if (stagedDateRange.value.length > 1) {
      stagedDateRangeComparison.value = [
        stagedDateRange.value[0],
        stagedDateRange.value[1],
      ];
    } else {
      stagedDateRangeComparison.value = [new Date(), new Date()];
    }
  } else {
    stagedDateRangeComparison.value = undefined;
    stagedPerspectivePresetComparison.value = undefined;
    stagedActivePresetComparison.value = undefined;
    stagedPerspectiveDateComparison.value = undefined;
  }
});

const stagedActiveMainFilter = ref<string | number>();
watch(
  () => props.filter,
  (value) => {
    stagedActiveMainFilter.value = value;
  },
  { immediate: true }
);

const stagedActiveComparisonFilter = ref<string | number>();
watch(
  () => props.comparisonFilter,
  (value) => {
    stagedActiveComparisonFilter.value = value;
  },
  { immediate: true }
);
// type DateType = DateTypeCustom | DateTypePreset;

interface DateTypeCustom {
  name: 'custom';
}

interface DateTypePreset {
  name: 'preset';
  value: string;
}

const perspectiveDatePresets = computed(() =>
  props.presetsMain.filter((d) => d.type === 'perspective')
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

  if (!props.dateRangeComparison || props.dateRangeComparison.length < 2) {
    return 'Select Comparison';
  }

  const realDate = props.dateRangeComparison;
  const formatter = Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return `vs. ${formatter.format(realDate[0])} - ${formatter.format(
    realDate[1]
  )}`;
});

const displayPreset = computed(() => {
  if (!props.dateRange) {
    return undefined;
  }
  if (props.activePreset) {
    const preset = props.presetsMain.find((d) => d.key === props.activePreset);
    return preset?.title;
  }

  return undefined;
});

const computedComparisonFilterPreset = computed(() => {
  if (!props.comparisonFilter) {
    return undefined;
  }

  const foundFilter = comparisonDataTypesComputed.value.find(
    (f) =>
      f.key === props.comparisonFilter || f.value === props.comparisonFilter
  );

  return foundFilter;
});

const displayComparisonPreset = computed(() => {
  if (
    !props.dateRangeComparison ||
    props.dateRangeComparison.length < 2 ||
    (computedComparisonFilterPreset.value &&
      !computedComparisonFilterPreset.value.eval &&
      (!props.dateRangeComparison || props.dateRangeComparison.length < 2))
  ) {
    return undefined;
  }

  if (props.comparisonFilter) {
    const preset: any = props.comparisonFilters.find(
      (f: Preset) => f.key === props.comparisonFilter
    );

    if (!preset) {
      return undefined;
    }

    return `vs. ${preset?.title}`;
  } else if (props.activePresetComparison) {
    const preset = props.presetsComparison.find(
      (d) => d.key === props.activePresetComparison
    );

    if (!preset) {
      return undefined;
    }

    return `vs. ${preset?.title}`;
  }

  return undefined;
});

onClickOutside(mainElementRef, (event) => {
  if ((!openMain.value && !openComparison.value) || props.type === 'modal') {
    return;
  }

  if (
    inputWrapperMainRef.value?.wrapperRef.contains(event.target) ||
    inputWrapperComparisonRef.value?.wrapperRef.contains(event.target)
  ) {
    event.stopPropagation();
  }

  closeDropdown();
});

function subTimeframeFromDate() {
  if (!props.dateRange || props.dateRange.length < 2) {
    return;
  }
  const diffDays = Math.abs(
    differenceInDays(stagedDateRange.value[0], stagedDateRange.value[1])
  );
  const refDate: [Date, Date] = [
    subDays(stagedDateRange.value[0], diffDays),
    stagedDateRange.value[0],
  ];

  stagedDateRange.value = refDate;
  stagedActivePreset.value && (stagedActivePreset.value = undefined);
  saveTime();
}

function addTimeframeFromDate() {
  if (!props.dateRange || props.dateRange.length < 2) {
    return;
  }
  const diffDays = Math.abs(
    differenceInDays(stagedDateRange.value[0], stagedDateRange.value[1])
  );

  const refDate: [Date, Date] = [
    stagedDateRange.value[1],
    addDays(stagedDateRange.value[1], diffDays),
  ];

  stagedDateRange.value = refDate;
  saveTime();
}

function closeDropdown() {
  if (openMain.value === true) {
    openMain.value = false;
    emit('blur');
  }

  if ((openComparison.value = true)) {
    openComparison.value = false;
  }
}

const wrapperAttrs = computed(() => {
  if (props.type === 'modal') {
    return {
      opened:
        activeSection.value === 'main' ? openMain.value : openComparison.value,
      size: 'xl',
      center: true,
      'onUpdate:opened': (value: boolean) => {
        activeSection.value === 'main'
          ? (openMain.value = false)
          : (openComparison.value = false);
      },
    };
  }
  return {
    open:
      activeSection.value === 'main' ? openMain.value : openComparison.value,
    class: 'z-[100] origin-top-left',
    reference:
      activeSection.value === 'main'
        ? inputWrapperMainRef.value?.wrapperRef
        : inputWrapperComparisonRef.value?.wrapperRef,
    options: {
      placement: 'bottom-start',
    },
  };
});

const filterUpdated = (filterValue: string | number) => {
  stagedActiveMainFilter.value = filterValue;
};

const filterComparisonUpdated = (filterValue: string | number) => {
  emit('update:comparisonFilter', filterValue);
  stagedActiveComparisonFilter.value = filterValue;
  saveTime();
};

const openMainModal = () => {
  openMain.value = true;
  activeSection.value = 'main';
};

const openComparisonModal = () => {
  openComparison.value = true;
  activeSection.value = 'comparison';
};

const clearComparisonDate = () => {
  stagedActivePresetComparison.value = undefined;
  stagedActiveComparisonFilter.value = undefined;
  stagedDateRangeComparison.value = [];
  saveTime();
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
  emit('update:filter', stagedActiveMainFilter.value);
  emit('update:comparisonFilter', stagedActiveComparisonFilter.value);
  emit('comparisonCleared');
  emit('change', stagedDateRange.value);
  emit('blur');
  openMain.value = false;
};

const stagedPresetReferenceDate = computed(() => {
  if (stagedDateRange.value && stagedDateRange.value.length === 2) {
    return stagedDateRange.value;
  } else {
    return undefined;
  }
});

const comparisonDataTypesComputed = computed<any[]>(
  () => props.comparisonFilters
);
</script>

<template>
  <div class="flex flex-wrap gap-x-1 justify-center items-center">
    <div class="flex justify-center items-center">
      <RobustButton
        variant="transparent"
        class="rounded active:bg-primary-500 active:text-white flex justify-center items-center transition-colors duration-100"
        :condensed="condensed"
        @click="subTimeframeFromDate"
      >
        <PhCaretLeft class="block" />
      </RobustButton>
      <RobustInputWrapper
        ref="inputWrapperMainRef"
        box-class="items-center border-0 focus-within:ring-0"
        :hint="hint"
        :error="error"
        :condensed="condensed"
        @click.stop="openMainModal"
      >
        <RobustButton
          variant="transparent"
          ref="select"
          class="w-full select-none items-center bg-transparent text-current outline-none"
          :class="condensed ? 'px-1' : 'px-2'"
          v-bind="$attrs"
        >
          <div
            class="flex items-center gap-2"
            :class="[condensed ? 'text-xs' : 'text-sm']"
          >
            <div class="relative flex flex-shrink-0">
              <div
                :style="{ visibility: displayPreset ? 'hidden' : 'visible' }"
                class="min-w-0 truncate tabular-nums"
              >
                {{ displayDate }}
              </div>
              <div
                v-show="displayPreset"
                class="absolute inset-0 min-w-0 truncate"
              >
                {{ displayPreset }}
              </div>
            </div>
            <div
              v-if="perspectiveDate"
              class="ml-auto h-[8px] w-[8px] rounded-full bg-primary-300/50"
              title="Perspective date enabled"
            ></div>
          </div>
        </RobustButton>
      </RobustInputWrapper>
      <RobustButton
        variant="transparent"
        class="rounded active:bg-primary-500 active:text-white flex justify-center items-center transition-colors duration-100"
        :condensed="condensed"
        @click="addTimeframeFromDate"
      >
        <PhCaretRight class="block" />
      </RobustButton>
      <Component
        :is="type === 'modal' ? RobustModal : RobustFloating"
        v-bind="wrapperAttrs"
        ref="mainElementRef"
      >
        <section v-if="activeSection === 'main'">
          <RobustCalendar
            ref="mainCalendar"
            v-model="stagedDateRange"
            v-model:preset="stagedActivePreset"
            :presets="presetsMainComputed"
            :filters="filtersComputed"
            :filter="stagedActiveMainFilter"
            :future="future"
            :past="past"
            dual-calendar
            @update:filter="filterUpdated"
          >
          </RobustCalendar>
          <div
            v-if="enablePerspective && enableMainPerspective"
            class="flex w-full justify-end gap-x-8 items-center py-2 pr-4"
          >
            <div>
              {{ perspectiveTitle }}
            </div>
            <RobustDatePicker
              v-model="stagedPerspectiveDate"
              v-model:preset="stagedPerspectivePreset"
              placeholder="Newest"
              condensed
              resetable
              :presets="perspectiveDatePresets"
            />
          </div>
        </section>

        <section v-else>
          <RobustCalendar
            v-model="stagedDateRangeComparison"
            v-model:preset="stagedActivePresetComparison"
            v-model:presetReferenceDate="stagedPresetReferenceDate"
            v-model:filter="stagedActiveComparisonFilter"
            :filters="comparisonDataTypesComputed"
            :presets="presetsComparisonComputed"
            :future="future"
            :past="past"
            :enable-preset="props.enableComparisonPreset"
            :read-only="props.readOnlyComparisonCalendar"
            variant="secondary"
            @update:filter="filterComparisonUpdated"
          />
          <div
            v-if="enablePerspective && enableComparisonPerspective"
            class="flex w-full justify-end gap-x-8 items-center py-2 pr-4"
          >
            <div>
              {{ perspectiveTitle }}
            </div>
            <RobustDatePicker
              v-model="stagedPerspectiveDateComparison"
              v-model:preset="stagedPerspectivePresetComparison"
              placeholder="Newest"
              condensed
              resetable
              :presets="perspectiveDatePresets"
            />
          </div>
        </section>
        <div
          class="flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"
        >
          <slot name="footer" />
          <RobustButton type="primary" class="ml-auto" @click="saveTime"
            >Apply time range</RobustButton
          >
        </div>
      </Component>
    </div>
    <RobustInputWrapper
      v-if="enableComparison"
      ref="inputWrapperComparisonRef"
      box-class="border-0 overflow-visible focus-within:ring-0"
      :condensed="condensed"
      @click.stop="openComparisonModal"
    >
      <RobustButton
        variant="transparent"
        class="font-normal relative overflow-visible focus:ring-0"
        :class="condensed ? 'text-[0.6rem]' : 'text-xs'"
        :disabled="!props.dateRange || props.dateRange.length < 2"
        :condensed="condensed"
      >
        <PhXCircle
          v-if="
            (props.dateRangeComparison &&
              props.dateRangeComparison.length === 2) ||
            props.activePresetComparison
          "
          class="absolute hover:text-red-500"
          :class="condensed ? 'top-[1px] right-[1px]' : 'top-1 right-1'"
          size="14"
          @click="clearComparisonDate"
        />
        <div class="flex items-center gap-2 relative">
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
          <div
            v-if="perspectiveDateComparison"
            class="ml-auto h-[8px] w-[8px] rounded-full bg-primary-300/50"
            title="Perspective date enabled"
          ></div>
        </div>
      </RobustButton>
    </RobustInputWrapper>
  </div>
</template>
