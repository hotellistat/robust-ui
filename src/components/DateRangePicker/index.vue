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
  perspectivePreset: {
    type: String,
    default: () => undefined,
  },
  comparePerspectivePreset: {
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
  'update:compareDateRange',
  'update:perspectiveDate',
  'update:comparePerspectiveDate',
  'update:dateRange',
  'update:activePreset',
  'update:activeComparePreset',
  'update:perspectivePreset',
  'update:comparePerspectivePreset',
  'change',
]);

const {
  dateRange,
  compareDateRange,
  perspectiveDate,
  comparePerspectiveDate,
  activeComparePreset,
  perspectivePreset,
  comparePerspectivePreset,
  presets,
} = toRefs(props);

const cursorPointer = inject('enableCursorPointer', true);

const localActivePreset = ref(props.activePreset);
const localActiveComparePreset = ref(props.activeComparePreset);
const localPerspectivePreset = ref(props.perspectivePreset);
const localComparePerspectivePreset = ref(props.comparePerspectivePreset);

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

type DateType = DateTypeCustom | DateTypePreset;

interface DateTypeCustom {
  name: 'custom';
}

interface DateTypePreset {
  name: 'preset';
  value: string;
}

const dateType = ref<DateType>({
  name: 'custom',
});
const compareDateType = ref<DateType>({
  name: 'custom',
});
const perspectiveDateType = ref<DateType>({
  name: 'custom',
});
const comparePerspectiveDateType = ref<DateType>({
  name: 'custom',
});

const perspectiveDatePresets = ref(
  presets.value.filter((d) => d.type === 'perspective')
);

const tmpDateRange = ref<[Date, Date]>();
const tmpCompareDateRange = ref<[Date, Date]>();

const showComparisonPicker = ref(props.compareDateRange ? true : false);

const displayDate = computed(() => {
  if (!dateRange.value) {
    return 'Select date';
  }

  const realDate = dateRange.value;
  const formatter = Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatter.format(realDate[0]) + ' - ' + formatter.format(realDate[1]);
});

const displayPreset = computed(() => {
  if (!dateRange.value) {
    return undefined;
  }
  if (props.activePreset) {
    const preset = presets.value.find((d) => d.key === props.activePreset);
    return preset.title;
  }

  return undefined;
});

function closeDropdown() {
  if (open.value === true) {
    open.value = false;
    active.value = 'main';
    enabledHistory.value = false;
    emit('blur');
  }
}

onClickOutside(popperRef, (event) => {
  if (open.value) {
    if (inputWrapperRef.value.wrapperRef.contains(event.target)) {
      event.stopPropagation();
      event.preventDefault();
    }
    localActivePreset.value = props.activePreset;
    closeDropdown();
    emit('blur');
  }
});

const handleClick = () => {
  tmpDateRange.value = dateRange.value;
  if (showComparisonPicker.value)
    tmpCompareDateRange.value = compareDateRange.value ?? [
      new Date(),
      new Date(),
    ];
  localActivePreset.value = props.activePreset;
  localActiveComparePreset.value = props.activeComparePreset;
  perspectivePreset.value = props.perspectivePreset;
  comparePerspectivePreset.value = props.comparePerspectivePreset;

  let preset = presets.value.find((d) => d.key === localActivePreset.value);
  dateType.value = preset
    ? {
        name: 'preset',
        value: preset.key,
      }
    : {
        name: 'custom',
      };
  preset = presets.value.find((d) => d.key === localActiveComparePreset.value);
  compareDateType.value = preset
    ? {
        name: 'preset',
        value: preset.key,
      }
    : {
        name: 'custom',
      };
  preset = presets.value.find((d) => d.key === localPerspectivePreset.value);
  perspectiveDateType.value = preset
    ? {
        name: 'preset',
        value: preset.key,
      }
    : {
        name: 'custom',
      };
  preset = presets.value.find(
    (d) => d.key === localComparePerspectivePreset.value
  );
  comparePerspectiveDateType.value = preset
    ? {
        name: 'preset',
        value: preset.key,
      }
    : {
        name: 'custom',
      };

  open.value = !open.value;
};

const goBack = () => {
  displayCompare.value = false;
  // mainCalendar.value.toggleCompare(false)
};

const saveTime = async () => {
  emit('update:dateRange', tmpDateRange.value);
  emit('update:compareDateRange', tmpCompareDateRange.value);
  emit('update:perspectiveDate', perspectiveOf.value);
  emit('update:comparePerspectiveDate', comparePerspectiveOf.value);
  emit('update:activePreset', dateType.value);
  emit('update:activeComparePreset', compareDateType.value);
  emit('update:perspectivePreset', perspectiveDateType.value);
  emit('update:comparePerspectivePreset', comparePerspectiveDateType.value);
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
  localActivePreset.value = preset.key;
  // emit('update:activePreset', dateType.value);
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
  localActiveComparePreset.value = preset.key;
  // emit('update:activeComparePreset', compareDateType.value);
};

const updatePerspectiveRelative = (preset: {
  key: string;
  date: Date | Date[];
}) => {
  perspectiveDateType.value = {
    name: 'preset',
    value: preset.key,
  };
  perspectiveOf.value = preset.date as Date;
  localPerspectivePreset.value = preset.key;
  // emit('update:perspectivePreset', perspectiveDateType.value);
};

const updateComparePerspectiveRelative = (preset: {
  key: string;
  date: Date | Date[];
}) => {
  comparePerspectiveDateType.value = {
    name: 'preset',
    value: preset.key,
  };
  comparePerspectiveOf.value = preset.date as Date;
  localComparePerspectivePreset.value = preset.key;
  // emit('update:comparePerspectivePreset', comparePerspectiveDateType.value);
};

const updateMain = (val: [Date, Date]) => {
  tmpDateRange.value = val;
  dateType.value = {
    name: 'custom',
  };
  localActivePreset.value = undefined;
  // emit('update:activePreset', undefined);
};

const updateCompare = (val: [Date, Date]) => {
  tmpCompareDateRange.value = val;
  compareDateType.value = {
    name: 'custom',
  };
  localActiveComparePreset.value = undefined;
  // emit('update:activeComparePreset', undefined);
};

watch(activeComparePreset, () => {
  localActiveComparePreset.value = activeComparePreset.value;
});

// watch(perspectiveOf, (val) => {
//   emit('update:perspectiveDate', val);
// });
//
// watch(comparePerspectiveOf, (val) => {
//   emit('update:comparePerspectiveDate', val);
// });

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
      class="relative w-full items-center bg-transparent text-current outline-none"
      :class="[
        condensed ? 'pl-2' : 'pl-3',
        cursorPointer ? 'cursor-pointer' : 'cursor-default',
      ]"
      v-bind="$attrs"
    >
      <div
        :style="{ visibility: displayPreset ? 'hidden' : 'visible' }"
        class="min-w-0 truncate text-sm tabular-nums sm:text-base"
      >
        {{ displayDate }}
      </div>
      <div
        v-show="displayPreset"
        class="absolute inset-0 min-w-0 truncate px-4 text-sm sm:text-base"
      >
        {{ displayPreset }}
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
      <!-- <div class="p-2">
        {{ active == 'main' ? 'Main' : 'Comparison' }} date range
      </div> -->
      <RobustTabs
        v-if="showComparisonPicker"
        v-model="active"
        class="w-full"
        :tabs="
          [
            { title: 'Main date range', value: 'main' },
            { title: 'Comparison date range', value: 'comparison' },
          ].filter((item) => enableComparison || item?.value !== 'comparison')
        "
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
        :active-preset="localActivePreset"
        @update:model-value="updateMain"
        @update:relative="updateRelative"
      >
        <div v-if="enablePerspective" class="flex flex-col items-start gap-y-3">
          <div>
            <RobustDatePicker
              v-model="perspectiveOf"
              placeholder="Date"
              title="Perspective of"
              condensed
              :presets="perspectiveDatePresets"
              :active-preset="localPerspectivePreset"
              @update:relative="updatePerspectiveRelative"
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
        :active-preset="localActiveComparePreset"
        variant="secondary"
        @update:model-value="updateCompare"
        @click:relative-date="enableStoringHistory(false)"
        @update:relative="updateCompareRelative"
      >
        <div v-if="enablePerspective" class="flex flex-col items-start">
          <RobustDatePicker
            v-model="comparePerspectiveOf"
            placeholder="Date"
            title="Perspective of"
            condensed
            variant="secondary"
            :presets="perspectiveDatePresets"
            :active-preset="localComparePerspectivePreset"
            @update:relative="updateComparePerspectiveRelative"
          />
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
