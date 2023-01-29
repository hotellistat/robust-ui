<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import {
  RobustPopper,
  RobustCalendar,
  RobustInputWrapper,
  RobustButton,
  RobustCheckbox,
  RobustDatePicker,
} from '..';
import { PhCaretDown, PhCalendar } from '@phosphor-icons/vue';
import { format } from 'date-fns';
import { computed, PropType, readonly, ref, toRefs, watch } from 'vue';

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
});

const emit = defineEmits([
  'blur',
  'focus',
  'update:compareDateRange',
  'update:perspectiveDate',
  'update:comparePerspectiveDate',
  'update:dateRange',
  'change',
]);

const { dateRange, compareDateRange, perspectiveDate, comparePerspectiveDate } =
  toRefs(props);

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
  tmpCompareDateRange.value = compareDateRange.value;
  open.value = !open.value;
};

const goBack = () => {
  displayCompare.value = false;
  // mainCalendar.value.toggleCompare(false)
};

const saveTime = async () => {
  emit('update:dateRange', tmpDateRange.value);
  emit('update:compareDateRange', tmpCompareDateRange.value);
  emit('change', tmpDateRange.value);
  emit('blur');
  open.value = false;
};

const enableStoringHistory = (enable: boolean) => {
  storeHistory.value = enable;
};

watch(perspectiveOf, (val) => {
  emit('update:perspectiveDate', val);
});

watch(comparePerspectiveOf, (val) => {
  emit('update:comparePerspectiveDate', val);
});

watch(showComparisonPicker, (val) => {
  if (!val) {
    tmpCompareDateRange.value = undefined;
    emit('update:compareDateRange', tmpCompareDateRange.value);
  } else {
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
    <section>
      <h3
        class="font-lg border-b border-gray-200 p-4 font-medium dark:border-gray-700"
      >
        Date range
      </h3>
      <RobustCalendar ref="mainCalendar" v-model="tmpDateRange">
        <div v-if="enablePerspective" class="flex flex-col items-start gap-y-3">
          <div>
            <label
              class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
              >Perspective of</label
            >
            <RobustDatePicker v-model="perspectiveOf" placeholder="Date" />
          </div>
          <RobustCheckbox v-model="showComparisonPicker">
            <template #title>Compare</template>
          </RobustCheckbox>
        </div>
      </RobustCalendar>
    </section>

    <section v-if="enableComparison && showComparisonPicker">
      <h3
        class="font-lg border-b border-t border-gray-200 p-4 font-medium dark:border-gray-700"
      >
        Comparison date range
      </h3>
      <RobustCalendar
        v-model="tmpCompareDateRange"
        variant="secondary"
        @click:relativeDate="enableStoringHistory(false)"
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
