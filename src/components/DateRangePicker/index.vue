<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
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
import { format } from 'date-fns';
import { computed, PropType, readonly, ref, toRefs, watch } from 'vue';
import presets from '../Calendar/presets';

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
  compareDateRange: {
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
  comparePerspectiveDate: {
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
  readonly: {
    type: Boolean,
    default: false,
  },
  dark: {
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
  activeComparePreset: {
    type: String,
    default: () => undefined,
  },
});

const emit = defineEmits([
  'blur',
  'focus',
  'update:compareDateRange',
  'update:perspectiveDate',
  'update:comparePerspectiveDate',
  'update:dateRange',
  'update:activePreset',
  'update:activeComparePreset',
  'change',
]);

const {
  dateRange,
  compareDateRange,
  perspectiveDate,
  comparePerspectiveDate,
  activePreset,
  activeComparePreset,
} = toRefs(props);

const open = ref(false);
const inputWrapperRef = ref();

const mainCalendar = ref();
const perspectiveOf = ref<Date | undefined>(perspectiveDate.value);
const comparePerspectiveOf = ref<Date | undefined>(
  comparePerspectiveDate.value
);

const enabledHistory = ref(false);
const displayCompare = ref();
const storeHistory = ref(true);
const popperRef = ref();
const active = ref<'comparison' | 'main'>('main');

const dateType = ref<any>('custom');
const compareDateType = ref<any>('custom');

const perspectiveDatePresets = ref(
  presets.filter((d) => d.type === 'perspective')
);

// const pickedCompare = computed(() => {
//   return compareDates.value.length > 1
// })

// const formatDate = (date: Date, time?: boolean) => {
//   if (!time) return format(date, 'dd.MM.yyyy')
//   return format(date, 'dd.MM.yyyy HH:mm:ss')
// }

// const dateHistory = computed(() => {
//   return props.dateHistory || []
// })

const tmpDateRange = ref<[Date, Date]>();
const tmpCompareDateRange = ref<[Date, Date]>();

// const computedDateRange = computed<[Date, Date]>({
//   get() {
//     return dateRange.value
//   },
//   set(value) {
//     // if (value.length > 1) open.value = false
//     tmpDateRange.value = value
//   },
// })

const showComparisonPicker = ref(props.compareDateRange ? true : false);

const displayDate = computed(() => {
  if (!dateRange.value) {
    return 'Select date';
  }

  const realDate = dateRange.value;
  try {
    return realDate.length > 1
      ? format(realDate[0], 'P') + ' - ' + format(realDate[1], 'P')
      : format(realDate[0], 'P') + ' - ' + format(realDate[0], 'P');
  } catch (e) {
    return undefined;
  }
});

function closeDropdown() {
  if (open.value === true) {
    open.value = false;
    active.value = 'main';
    enabledHistory.value = false;
    emit('blur');
  }
}

// const showCompare = (val: boolean) => {
//   if (val) {
//     displayCompare.value = val
//   } else {
//     emit('update:compareDate', undefined)
//     computedCompare.value = undefined
//   }
// }

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

// const updatePerspective = (val: Date) => {
//   emit('update:perspectiveDate', val)
// }

// const updateComparePerspective = (val: Date) => {
//   emit('update:comparePerspectiveDate', val)
// }

const handleClick = () => {
  tmpDateRange.value = dateRange.value;
  if (showComparisonPicker.value)
    tmpCompareDateRange.value = compareDateRange.value ?? [
      new Date(),
      new Date(),
    ];
  open.value = !open.value;
};

const goBack = () => {
  displayCompare.value = false;
  // mainCalendar.value.toggleCompare(false)
};

const saveTime = async () => {
  emit('update:dateRange', tmpDateRange.value);
  emit('update:activePreset', dateType.value);
  emit('update:compareDateRange', tmpCompareDateRange.value);
  emit('update:activeComparePreset', compareDateType.value);
  emit('change', tmpDateRange.value);
  emit('blur');
  open.value = false;
};

const enableStoringHistory = (enable: boolean) => {
  storeHistory.value = enable;
};

const updateRelative = (preset: { key: string; date: Date | Date[] }) => {
  dateType.value = {
    name: 'preset',
    value: preset.key,
  };
  tmpDateRange.value = preset.date as [Date, Date];
  emit('update:activePreset', dateType.value);
};

const updateCompareRelative = (preset: {
  key: string;
  date: Date | Date[];
}) => {
  compareDateType.value = {
    name: 'preset',
    value: preset.key,
  };
  tmpCompareDateRange.value = preset.date as [Date, Date];
  emit('update:activeComparePreset', compareDateType.value);
};

const updateMain = (val: [Date, Date]) => {
  tmpDateRange.value = val;
  dateType.value = {
    name: 'custom',
  };
  emit('update:activePreset', undefined);
};

const updateCompare = (val: [Date, Date]) => {
  tmpCompareDateRange.value = val;
  compareDateType.value = {
    name: 'custom',
  };
  emit('update:activeComparePreset', undefined);
};

// const updateDate = () => {
//   dateType.value = 'custom';
// };

watch(perspectiveOf, (val) => {
  emit('update:perspectiveDate', val);
});

watch(comparePerspectiveOf, (val) => {
  emit('update:comparePerspectiveDate', val);
});

watch(showComparisonPicker, (val) => {
  if (!val) {
    tmpCompareDateRange.value = undefined;
    active.value = 'main';
    emit('update:compareDateRange', tmpCompareDateRange.value);
  } else {
    active.value = 'comparison';
    tmpCompareDateRange.value = [new Date(), new Date()];
  }
});

defineExpose({
  goBack,
});
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
    :readonly="readonly"
    :condensed="condensed"
    @click.stop="handleClick"
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
      class="w-full cursor-default items-center bg-transparent text-current outline-none"
      :class="[condensed ? 'pl-2' : 'pl-3']"
      v-bind="$attrs"
    >
      <div class="min-w-0 truncate text-sm tabular-nums sm:text-base">
        {{ displayDate }}
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
      class="flex items-center justify-between border-b border-t border-gray-200 p-2 dark:border-gray-700"
    >
      <div class="p-2">
        {{ active == 'main' ? 'Main' : 'Comparison' }} date range
      </div>
      <RobustTabs
        v-if="enableComparison && showComparisonPicker"
        v-model="active"
        :tabs="[
          { title: 'Main', value: 'main' },
          { title: 'Comparison', value: 'comparison' },
        ]"
      />
      <!-- <div v-if="enableComparison && showComparisonPicker" class="flex gap-x-2">
        <div
          class="cursor flex justify-center rounded-md p-2"
          :class="
            active == 'main'
              ? 'bg-gray-300 dark:bg-gray-500'
              : 'bg-gray-200 dark:bg-gray-700'
          "
          @click="() => (active = 'main')"
        >
          Main
        </div>
        <div
          class="justify-cneter cursor flex rounded-md p-2"
          :class="
            active == 'comparison'
              ? 'bg-gray-300 dark:bg-gray-500'
              : 'bg-gray-200 dark:bg-gray-700'
          "
          @click="() => (active = 'comparison')"
        >
          Comparison
        </div>
      </div> -->
    </div>
    <section v-if="active === 'main'">
      <!-- <h3 -->
      <!--   class="font-lg border-b border-gray-200 p-4 font-medium dark:border-gray-700" -->
      <!-- > -->
      <!--   Date range -->
      <!-- </h3> -->
      <RobustCalendar
        ref="mainCalendar"
        :model-value="tmpDateRange"
        :active-preset="activePreset"
        @update:model-value="updateMain"
        @update:relative="updateRelative"
      >
        <div v-if="enablePerspective" class="flex flex-col items-start gap-y-3">
          <div>
            <label
              class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
              >Perspective of</label
            >
            <RobustDatePicker
              v-model="perspectiveOf"
              placeholder="Date"
              :presets="perspectiveDatePresets"
            />
          </div>
          <RobustCheckbox v-model="showComparisonPicker">
            <template #title>Compare</template>
          </RobustCheckbox>
        </div>
      </RobustCalendar>
    </section>

    <section v-else>
      <RobustCalendar
        :model-value="tmpCompareDateRange"
        :active-preset="activeComparePreset"
        variant="secondary"
        @update:model-value="updateCompare"
        @click:relative-date="enableStoringHistory(false)"
        @update:relative="updateCompareRelative"
      >
        <div v-if="enablePerspective" class="flex flex-col items-start">
          <label
            class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
            >Perspective of</label
          >
          <RobustDatePicker v-model="comparePerspectiveOf" placeholder="Date" />
        </div>
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
