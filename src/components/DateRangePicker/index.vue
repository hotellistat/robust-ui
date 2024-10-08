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
import { computed, onMounted, PropType, ref, watch } from 'vue';
import defaultPresets, { Filter, Preset } from '../Calendar/presets';
import {
  addDays,
  addMonths,
  addYears,
  differenceInDays,
  endOfMonth,
  endOfYear,
  isSameDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
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
    default: () => false,
  },
  showComparison: {
    type: Boolean,
    default: () => false,
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
    default: () => false,
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
    default: () => true,
  },
  enableComparisonPreset: {
    type: Boolean,
    default: () => true,
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
    type: Array as PropType<Array<Filter>>,
    default: () => [],
  },
  filter: {
    type: String || Number,
    default: () => undefined,
  },
  comparisonFilters: {
    type: Array as PropType<Array<Filter>>,
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
const isClearComparisonOnHover = ref(false);

const presetsMainComputed = computed(() =>
  props.presetsMain.filter((d) => d.type === 'range')
);

const presetsComparisonComputed = computed(() =>
  props.presetsComparison.filter((d) => d.type === 'range')
);

const filtersComputed = computed(() => props.filters || []);

const mainFiltersComputed = computed<Filter[]>(() => props.filters);

const comparisonFiltersComputed = computed<Filter[]>(
  () => props.comparisonFilters
);

const computedMainFilterPreset = computed(() => {
  if (!props.filter) {
    return undefined;
  }

  const foundFilter = mainFiltersComputed.value.find(
    (f) => f.key === props.filter
  );

  return foundFilter;
});

const computedComparisonFilterPreset = computed(() => {
  if (!props.comparisonFilter) {
    return undefined;
  }

  const foundFilter = comparisonFiltersComputed.value.find(
    (f) => f.key === props.comparisonFilter
  );

  return foundFilter;
});

// const enabledHistory = ref(false);
// const displayCompare = ref();
// const storeHistory = ref(true);
const mainElementRef = ref();
const activeSection = ref<'comparison' | 'main'>('main');

const isDateRange = (value: any) => {
  return !(
    !value ||
    !Array.isArray(value) ||
    value.length < 2 ||
    value.some((d) => !(d instanceof Date))
  );
};

const stagedDateRangeComparison = ref<[Date, Date] | []>();
watch(
  () => props.dateRangeComparison,
  (value) => {
    if (!isDateRange(value)) {
      return (stagedDateRangeComparison.value = []);
    }
    stagedDateRangeComparison.value = value;
  },
  { immediate: true }
);

const stagedPerspectiveDateComparison = ref<Date>();
watch(
  () => props.perspectiveDateComparison,
  (value) => {
    if (!value || !(value instanceof Date)) {
      return (stagedPerspectiveDateComparison.value = undefined);
    }
    stagedPerspectiveDateComparison.value = value;
  },
  { immediate: true }
);

const stagedDateRange = ref<[Date, Date] | []>();
watch(
  () => props.dateRange,
  (value) => {
    if (!isDateRange(value)) {
      return (stagedDateRange.value = []);
    }
    stagedDateRange.value = value;

    if (computedComparisonFilterPreset.value) {
      if (computedComparisonFilterPreset.value.eval) {
        stagedDateRangeComparison.value =
          computedComparisonFilterPreset.value.eval(stagedDateRange.value) as [
            Date,
            Date,
          ];
        emit('update:dateRangeComparison', stagedDateRangeComparison.value);
      }
      if (computedComparisonFilterPreset.value.evalPerspective) {
        stagedPerspectiveDateComparison.value =
          computedComparisonFilterPreset.value.evalPerspective(
            stagedDateRange.value
          );
        emit(
          'update:perspectiveDateComparison',
          stagedPerspectiveDateComparison.value
        );
      }
    }
  },
  { immediate: true }
);

const stagedPerspectiveDate = ref<Date>();
watch(
  () => props.perspectiveDate,
  (value) => {
    if (!value || !(value instanceof Date)) {
      return (stagedPerspectiveDate.value = undefined);
    }
    stagedPerspectiveDate.value = value;
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

    if (
      computedMainFilterPreset.value &&
      computedMainFilterPreset.value.evalPerspective
    ) {
      stagedPerspectiveDate.value =
        computedMainFilterPreset.value.evalPerspective(
          stagedDateRange.value as [Date, Date]
        );
    }
  },
  { immediate: true }
);

const stagedActiveComparisonFilter = ref<string | number>();
watch(
  () => props.comparisonFilter,
  (value) => {
    stagedActiveComparisonFilter.value = value;

    if (
      computedComparisonFilterPreset.value &&
      computedComparisonFilterPreset.value.evalPerspective
    ) {
      stagedPerspectiveDateComparison.value =
        computedComparisonFilterPreset.value.evalPerspective(
          stagedDateRange.value as [Date, Date]
        );
    }
  },
  { immediate: true }
);
// type DateType = DateTypeCustom | DateTypePreset;

const computedEnableMainPreset = ref(props.enableMainPreset);

const computedMainReadOnly = computed(() => {
  if (
    props.readOnlyMainCalendar === true ||
    (computedMainFilterPreset.value &&
      computedMainFilterPreset.value.disableEdit)
  ) {
    return true;
  } else {
    return false;
  }
});

const computedEnableMainPerspective = computed(() => {
  if (!props.enablePerspective || !props.enableMainPerspective) {
    return false;
  }

  if (
    computedMainFilterPreset.value &&
    computedMainFilterPreset.value.disablePerspective
  ) {
    return false;
  } else {
    return true;
  }
});

const computedEnableComparisonPerspective = computed(() => {
  if (!props.enablePerspective || !props.enableComparisonPerspective) {
    return false;
  }

  if (
    computedComparisonFilterPreset.value &&
    computedComparisonFilterPreset.value.disablePerspective
  ) {
    return false;
  } else {
    return true;
  }
});

const computedComparisonReadOnly = computed(() => {
  if (
    props.readOnlyComparisonCalendar === true ||
    (computedComparisonFilterPreset.value &&
      computedComparisonFilterPreset.value.disableEdit)
  ) {
    return true;
  } else {
    return false;
  }
});

const enableComparisonPreset = ref(props.enableComparisonPreset);

const hideMainCalendar = ref(false);
const hideComparisonCalendar = ref(false);

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
  if (!isDateRange(props.dateRange)) {
    return 'Select date';
  }

  const realDate = props.dateRange;
  if (isDaterangeFullMonth(realDate) || displayPreset.value) {
    const monthFormatter = Intl.DateTimeFormat(navigator.language, {
      month: 'short',
    });

    return (
      monthFormatter.format(realDate[0]) + '. ' + realDate[0].getFullYear()
    );
  } else if (isDaterangeFullYear(realDate)) {
    return realDate[0].getFullYear();
  } else {
    const formatter = Intl.DateTimeFormat(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return (
      formatter.format(realDate[0]) + ' - ' + formatter.format(realDate[1])
    );
  }
});

const displayComparisonDate = computed(() => {
  if (!props.enableComparison) {
    return undefined;
  }

  if (!isDateRange(props.dateRangeComparison)) {
    return 'Select Comparison';
  }

  const realDate = props.dateRangeComparison;
  if (isDaterangeFullMonth(realDate) || displayComparisonPreset.value) {
    const monthFormatter = Intl.DateTimeFormat(navigator.language, {
      month: 'short',
    });

    return (
      'vs. ' +
      monthFormatter.format(realDate[0]) +
      '. ' +
      realDate[0].getFullYear()
    );
  } else if (isDaterangeFullYear(realDate)) {
    return 'vs. ' + realDate[0].getFullYear();
  } else {
    const formatter = Intl.DateTimeFormat(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return (
      'vs. ' +
      formatter.format(realDate[0]) +
      ' - ' +
      formatter.format(realDate[1])
    );
  }
});

const displayPreset = computed(() => {
  if (!isDateRange(props.dateRange)) {
    return undefined;
  }
  if (props.activePreset) {
    const preset = props.presetsMain.find((d) => d.key === props.activePreset);
    return preset?.title;
  }

  return undefined;
});

const displayComparisonPreset = computed(() => {
  if (!isDateRange(props.dateRangeComparison)) {
    return undefined;
  }

  if (props.comparisonFilter) {
    if (computedComparisonFilterPreset.value?.eval) {
      return `vs. ${computedComparisonFilterPreset.value?.title}`;
    }
  }
  if (props.activePresetComparison) {
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

  if (isClearComparisonOnHover.value) {
    return clearComparisonDate();
  }

  if (
    inputWrapperMainRef.value?.wrapperRef.contains(event.target) ||
    inputWrapperComparisonRef.value?.wrapperRef.contains(event.target)
  ) {
    event.stopPropagation();
  }

  closeDropdown();
});

function isDaterangeFullMonth(range: [Date, Date]) {
  if (!range[0] || !range[1] || range[0].getMonth() !== range[1].getMonth()) {
    return false;
  }

  if (
    isSameDay(startOfMonth(range[0]), range[0]) &&
    isSameDay(endOfMonth(range[1]), range[1])
  ) {
    return true;
  }

  return false;
}

function isDaterangeFullYear(range: [Date, Date]) {
  if (
    !range[0] ||
    !range[1] ||
    range[0].getFullYear() !== range[1].getFullYear()
  ) {
    return false;
  }

  if (
    isSameDay(startOfYear(range[0]), range[0]) &&
    isSameDay(endOfYear(range[1]), range[1])
  ) {
    return true;
  }

  return false;
}

function subTimeframeFromDate() {
  if (!isDateRange(props.dateRange)) {
    return;
  }

  if (isDaterangeFullMonth(props.dateRange)) {
    const previousMonthDate = subMonths(props.dateRange[0], 1);
    const previousMonthStart = new Date(startOfMonth(previousMonthDate));
    const previousMonthEnd = new Date(endOfMonth(previousMonthDate));

    stagedDateRange.value = [previousMonthStart, previousMonthEnd];
  } else if (isDaterangeFullYear(props.dateRange)) {
    const previousYearDate = subYears(props.dateRange[0], 1);
    const previousYearStart = new Date(startOfYear(previousYearDate));
    const previousYearEnd = new Date(endOfYear(previousYearDate));

    stagedDateRange.value = [previousYearStart, previousYearEnd];
  } else {
    const diffDays = Math.abs(
      differenceInDays(stagedDateRange.value[0], stagedDateRange.value[1])
    );
    const refDate: [Date, Date] = [
      subDays(stagedDateRange.value[0], diffDays + 1),
      subDays(stagedDateRange.value[0], 1),
    ];

    stagedDateRange.value = refDate;
  }

  stagedActivePreset.value && (stagedActivePreset.value = undefined);
  saveTime();
}

function addTimeframeFromDate() {
  if (!isDateRange(props.dateRange)) {
    return;
  }

  if (isDaterangeFullMonth(props.dateRange)) {
    const previousMonthDate = addMonths(props.dateRange[0], 1);
    const previousMonthStart = new Date(startOfMonth(previousMonthDate));
    const previousMonthEnd = new Date(endOfMonth(previousMonthDate));

    stagedDateRange.value = [previousMonthStart, previousMonthEnd];
  } else if (isDaterangeFullYear(props.dateRange)) {
    const previousYearDate = addYears(props.dateRange[0], 1);
    const previousYearStart = new Date(startOfYear(previousYearDate));
    const previousYearEnd = new Date(endOfYear(previousYearDate));

    stagedDateRange.value = [previousYearStart, previousYearEnd];
  } else {
    const diffDays = Math.abs(
      differenceInDays(stagedDateRange.value[0], stagedDateRange.value[1])
    );

    const refDate: [Date, Date] = [
      addDays(stagedDateRange.value[1], 1),
      addDays(stagedDateRange.value[1], diffDays + 1),
    ];

    stagedDateRange.value = refDate;
  }

  stagedActivePreset.value && (stagedActivePreset.value = undefined);
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
  emit('update:filter', filterValue);

  const foundFilter = mainFiltersComputed.value.find(
    (filter) => filter.key === filterValue
  );
  stagedActiveMainFilter.value = filterValue;
  if (foundFilter.disableCalendar) {
    hideMainCalendar.value = true;
  } else {
    hideMainCalendar.value = false;
  }

  if (props.enableMainPreset !== false) {
    if (foundFilter?.disablePreset) {
      computedEnableMainPreset.value = false;
    } else {
      computedEnableMainPreset.value = true;
    }
  } else {
    return presetsMainComputed.value.length !== 0;
  }
};

const filterComparisonUpdated = (filterValue: string | number) => {
  emit('update:comparisonFilter', filterValue);

  const foundFilter = comparisonFiltersComputed.value.find(
    (filter) => filter.key === filterValue
  );
  stagedActiveComparisonFilter.value = filterValue;
  if (foundFilter?.disableCalendar) {
    hideComparisonCalendar.value = true;
  } else {
    hideComparisonCalendar.value = false;
  }

  if (props.enableComparisonPreset !== false) {
    if (foundFilter?.disablePreset) {
      enableComparisonPreset.value = false;
    } else {
      enableComparisonPreset.value = true;
    }
  } else {
    return presetsComparisonComputed.value.length !== 0;
  }
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
  const foundDefaultFilter = comparisonFiltersComputed.value.find(
    (filter) => filter.default
  );
  stagedActiveComparisonFilter.value = foundDefaultFilter?.key || undefined;
  hideComparisonCalendar.value = foundDefaultFilter?.disableCalendar || false;
  stagedPerspectiveDateComparison.value = undefined;
  stagedActivePresetComparison.value = undefined;
  isClearComparisonOnHover.value = false;
  stagedDateRangeComparison.value = [];
  openComparison.value = false;
  emit('comparisonCleared');
  saveTime();
};

const saveTime = async () => {
  emit(
    'update:dateRange',
    stagedDateRange.value?.length ? stagedDateRange.value : undefined
  );
  emit(
    'update:dateRangeComparison',
    stagedDateRangeComparison.value?.length
      ? stagedDateRangeComparison.value
      : undefined
  );
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
  emit('change', stagedDateRange.value);
  emit('blur');
  openMain.value = false;
  openComparison.value = false;
};

const stagedPresetReferenceDate = computed(() => {
  if (stagedDateRange.value && stagedDateRange.value.length === 2) {
    return stagedDateRange.value;
  } else {
    return undefined;
  }
});

onMounted(() => {
  const foundFilter = mainFiltersComputed.value.find(
    (filter) => filter.key === props.filter
  );

  if (foundFilter) {
    if (foundFilter.disableCalendar) {
      hideMainCalendar.value = true;
    } else {
      hideMainCalendar.value = false;
    }

    if (foundFilter.disablePreset) {
      computedEnableMainPreset.value = false;
    } else {
      computedEnableMainPreset.value = true;
    }
  }

  if (props.enableComparison) {
    const foundComparisonFilter = comparisonFiltersComputed.value.find(
      (filter) => filter.key === props.comparisonFilter
    );

    if (foundComparisonFilter) {
      if (foundComparisonFilter.disableCalendar) {
        hideComparisonCalendar.value = true;
      } else {
        hideComparisonCalendar.value = false;
      }

      if (foundComparisonFilter.disablePreset) {
        enableComparisonPreset.value = false;
      } else {
        enableComparisonPreset.value = true;
      }
    }
  }
});
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label
      v-if="title"
      class="mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"
    >
      {{ title }}
    </label>
    <div
      class="flex flex-wrap gap-x-1 gap-y-1"
      :class="enableComparison && 'justify-center items-center'"
    >
      <div class="flex justify-center items-center">
        <RobustButton
          variant="transparent"
          class="rounded active:bg-primary-500 active:text-white flex justify-center items-center transition-colors duration-100 focus:ring-0"
          :condensed="condensed"
          @click="subTimeframeFromDate"
          :disabled="!props.dateRange || stagedDateRange.length < 2"
        >
          <PhCaretLeft class="block" />
        </RobustButton>
        <RobustInputWrapper
          ref="inputWrapperMainRef"
          box-class="items-center border-0 focus-within:ring-0"
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
                  :class="condensed ? 'min-w-28' : 'min-w-36'"
                  class="truncate tabular-nums"
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
                v-if="
                  perspectiveDate &&
                  props.enablePerspective &&
                  props.enableMainPerspective
                "
                class="ml-auto h-[8px] w-[8px] rounded-full bg-primary-300/50"
                title="Perspective date enabled"
              ></div>
            </div>
          </RobustButton>
        </RobustInputWrapper>
        <RobustButton
          variant="transparent"
          class="rounded active:bg-primary-500 active:text-white flex justify-center items-center transition-colors duration-100 focus:ring-0"
          :condensed="condensed"
          @click="addTimeframeFromDate"
          :disabled="!props.dateRange || stagedDateRange.length < 2"
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
              :enable-preset="computedEnableMainPreset"
              :read-only="computedMainReadOnly"
              :hide-calendar="hideMainCalendar"
              dual-calendar
              @update:filter="filterUpdated"
            >
            </RobustCalendar>
            <div
              v-if="computedEnableMainPerspective"
              class="flex w-full justify-end gap-x-8 items-center py-2 pr-4"
              :class="hideMainCalendar && 'px-6'"
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
              :filters="comparisonFiltersComputed"
              :presets="presetsComparisonComputed"
              :future="future"
              :past="past"
              :enable-preset="enableComparisonPreset"
              :read-only="computedComparisonReadOnly"
              variant="secondary"
              :hide-calendar="hideComparisonCalendar"
              dual-calendar
              @update:filter="filterComparisonUpdated"
            />
            <div
              v-if="computedEnableComparisonPerspective"
              class="flex w-full justify-end gap-x-8 items-center py-4 px-4"
              :class="hideComparisonCalendar && 'px-6'"
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
            <RobustButton
              type="primary"
              class="ml-auto"
              @click="saveTime"
              :disabled="
                (activeSection === 'main' && stagedDateRange.length < 2) ||
                (activeSection === 'comparison' &&
                  stagedDateRangeComparison?.length < 2)
              "
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
        @click="openComparisonModal"
      >
        <RobustButton
          variant="transparent"
          class="font-normal relative overflow-visible focus:ring-0"
          :class="condensed ? 'text-xs' : 'text-sm'"
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
            :class="condensed ? 'top-[1px] right-0' : 'top-0.5 right-[1px]'"
            @mouseover="isClearComparisonOnHover = true"
            @mouseleave="isClearComparisonOnHover = false"
            :weight="isClearComparisonOnHover ? 'fill' : 'regular'"
            :size="condensed ? 14 : 16"
            @click.stop="clearComparisonDate"
          />
          <div class="flex items-center gap-2 relative">
            <div
              :style="{
                visibility: displayComparisonPreset ? 'hidden' : 'visible',
              }"
              :class="condensed ? 'min-w-28' : 'min-w-36'"
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
              v-if="
                perspectiveDateComparison &&
                props.enablePerspective &&
                props.enableComparisonPerspective
              "
              class="ml-auto h-[8px] w-[8px] rounded-full bg-primary-300/50"
              title="Perspective date enabled"
            ></div>
          </div>
        </RobustButton>
      </RobustInputWrapper>
    </div>
    <div v-if="hint !== undefined || error !== undefined" class="mt-2">
      <div v-if="hint !== undefined" class="select-none text-xs text-gray-400">
        {{ hint }}
      </div>
      <div
        v-if="error !== undefined"
        class="select-none text-xs text-red-400 dark:text-red-400"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>
