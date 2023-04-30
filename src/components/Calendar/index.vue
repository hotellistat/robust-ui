<script lang="ts" setup>
import {
  subMonths,
  addMonths,
  setYear as setFnsYear,
  setMonth as setFnsMonth,
  format,
  isFuture,
  differenceInDays,
  isSameDay,
  getDaysInMonth,
  min,
  max,
  set,
  addYears,
  subYears,
} from 'date-fns';
import {
  computed,
  nextTick,
  onMounted,
  PropType,
  ref,
  toRefs,
  watch,
} from 'vue';
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';
import defaultPresets, { Preset } from './presets';
import variants from './variants';
import { RobustDatePicker } from '..';

const props = defineProps({
  future: {
    type: Boolean,
    default: true,
  },
  past: {
    type: Boolean,
    default: true,
  },
  today: {
    type: Boolean,
    default: true,
  },
  variant: {
    type: String,
    default: 'primary',
  },
  modelValue: {
    type: Object as PropType<[Date, Date] | Date>,
    default: () => new Date(),
  },
  presets: {
    type: Array as PropType<Array<Preset>>,
    default: () => defaultPresets.filter((d) => d.type === 'range'),
  },
  preset: {
    type: String,
    default: () => undefined,
  },
});

const emit = defineEmits(['update:modelValue', 'update:preset']);

const {
  future,
  past,
  today,
  modelValue,
  presets,
  preset: currentPreset,
} = toRefs(props);

const now = ref();
// const cursor = ref<Date>()
const cursor = Array.isArray(modelValue.value)
  ? ref<Date>(new Date())
  : ref<Date>(new Date(modelValue.value));

const selectedDate = ref<Date>(new Date());
const refYearEntry = ref({});

const variantStyling = computed(() => {
  return variants[props.variant];
});

const daysInMonth = computed(() => {
  const date = new Date(cursor.value);
  return getDaysInMonth(date);
});

const monthHeading = computed(() => {
  try {
    return format(cursor.value, 'MMM');
  } catch (e) {
    return undefined;
  }
});
const yearHeading = computed(() => {
  try {
    return format(cursor.value, 'yyyy');
  } catch (e) {
    return undefined;
  }
});

const firstWeekday = computed(() => {
  const date = new Date(cursor.value);
  date.setDate(1);
  const day = date.getDay();
  return (day === 0 ? 7 : day) - 1;
});

const activeMonth = computed(() => {
  const date = new Date(cursor.value);
  return date.getMonth();
});

const activeYear = computed(() => {
  const date = new Date(cursor.value);
  return date.getFullYear();
});

// const applyTime = () => {
//   console.log('applying time');

//   if (from.value != '' && !isValid(new Date(from.value))) {
//     errorFrom.value = 'Please enter a valid date.';
//   }
//   if (to.value != '' && !isValid(new Date(to.value))) {
//     errorTo.value = 'Please enter a valid date.';
//   }
//   if (isValid(new Date(from.value)) && isValid(new Date(to.value))) {
//     errorFrom.value = '';
//     errorTo.value = '';
//     const newModelValue = [new Date(from.value), new Date(to.value)];
//     emit('update:modelValue', newModelValue);
//   }
// };

const compareDates = (dateOne, dateTwo) => {
  const diff = dayDiff(dateOne, dateTwo);

  if (diff < 0) {
    return 1;
  } else if (diff > 0) {
    return -1;
  }
  return 0;
};

const dayDiff = (d1, d2) => {
  const endDate = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
  const startDate = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  return (endDate - startDate) / 86400000;
};

const isFirst = (day) => {
  // checking if it is daterange or only datepicker
  if (!Array.isArray(modelValue.value)) {
    return false;
  }

  // doesn't do any actions if you've choosen only one date
  if (modelValue.value.length < 2) {
    return false;
  }

  if (!compareDates(...modelValue.value)) {
    return false;
  }

  const tmpDate = new Date();
  tmpDate.setFullYear(cursor.value.getFullYear());
  tmpDate.setMonth(cursor.value.getMonth());
  tmpDate.setDate(day);

  const minDate = min(modelValue.value);

  // minimal value
  if (!compareDates(tmpDate, minDate)) {
    return true;
  }
  return false;
};

const isLast = (day) => {
  // checking if it is daterange or only datepicker
  if (!Array.isArray(modelValue.value)) {
    return false;
  }

  // doesn't do any actions if you've choosen only one date
  if (modelValue.value.length < 2) {
    return false;
  }

  if (!compareDates(...modelValue.value)) {
    return false;
  }

  const tmpDate = new Date();
  tmpDate.setFullYear(cursor.value.getFullYear());
  tmpDate.setMonth(cursor.value.getMonth());
  tmpDate.setDate(day);

  const maxDate = max(modelValue.value);

  // max value
  if (!compareDates(tmpDate, maxDate)) {
    return true;
  }
  return false;
};

const isBetweenRange = (day) => {
  if (!Array.isArray(modelValue.value)) {
    return false;
  }
  if (modelValue.value.length < 2) {
    return false;
  }

  const tmpDate = new Date();
  tmpDate.setFullYear(cursor.value.getFullYear());
  tmpDate.setMonth(cursor.value.getMonth());
  tmpDate.setDate(day);
  const minDate = min(modelValue.value);
  const maxDate = max(modelValue.value);

  if (
    compareDates(tmpDate, maxDate) === -1 &&
    compareDates(tmpDate, minDate) === 1
  ) {
    return true;
  }
  return false;
};

const isSelectedDay = (day: number) => {
  const tmpDate = new Date();
  tmpDate.setFullYear(cursor.value.getFullYear());
  tmpDate.setMonth(cursor.value.getMonth());
  tmpDate.setDate(day);

  if (Array.isArray(modelValue.value)) {
    const selectedDates = modelValue.value.map((date) => new Date(date));
    for (let i = 0; i < selectedDates.length; i++) {
      if (!compareDates(selectedDates[i], tmpDate)) {
        return true;
      }
    }
  } else {
    if (isSameDay(selectedDate.value, tmpDate)) {
      return true;
    }
  }
};

function setQuickAction(preset: Preset) {
  console.log('quick action');

  const presetValue = preset.eval();
  emit('update:modelValue', presetValue);
  emit('update:preset', preset.key);

  if (Array.isArray(presetValue)) {
    cursor.value = presetValue[1];
  } else {
    cursor.value = presetValue;
  }
}
function addYear() {
  cursor.value = addYears(cursor.value, 1);
}

function subYear() {
  cursor.value = subYears(cursor.value, 1);
}

function setYear(year) {
  cursor.value = setFnsYear(cursor.value, year);
}

function addMonth() {
  cursor.value = addMonths(cursor.value, 1);
}

function subMonth() {
  cursor.value = subMonths(cursor.value, 1);
}

function setMonth(month) {
  cursor.value = setFnsMonth(cursor.value, month);
}

const dayAllowed = (day) => {
  const date = new Date(cursor.value).setDate(day);
  if (!today.value && isSameDay(now.value, date)) {
    return false;
  }
  if (!past.value && differenceInDays(now.value, date) > 0) {
    return false;
  }
  if (!future.value && isFuture(date)) {
    return false;
  }
  return true;
};

const daySelect = (day) => {
  if (!dayAllowed(day)) {
    return;
  }

  const tmpDate = new Date();
  tmpDate.setFullYear(cursor.value.getFullYear());
  tmpDate.setMonth(cursor.value.getMonth());
  tmpDate.setDate(day);
  cursor.value = tmpDate;

  if (Array.isArray(modelValue.value)) {
    let newModelValue = [];
    if (modelValue.value.length >= 2) {
      newModelValue.push(new Date(cursor.value));
    } else {
      newModelValue = modelValue.value;
      newModelValue.push(new Date(cursor.value));
      if (newModelValue.length > 1) {
        newModelValue = [
          set(min(newModelValue), {
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
          set(max(newModelValue), {
            hours: 23,
            minutes: 59,
            seconds: 59,
          }),
        ];
      }
    }
    emit('update:modelValue', newModelValue);
    emit('update:preset', undefined);
  } else {
    selectedDate.value = new Date(cursor.value);
    emit('update:modelValue', cursor.value);
    emit('update:preset', undefined);
  }
};

const reset = () => {
  cursor.value = new Date(new Date().setHours(12));
};

// const fromChanged = (value: string) => {
//   const fromDate = value;
//   const toDate = to.value;
//   const regexp = /^(0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])[/-]\d{4}$/;
//   if (regexp.test(fromDate) && regexp.test(toDate)) {
//     console.log('changed valid');
//     emit('update:modelValue', [new Date(fromDate), new Date(toDate)]);
//   }
// };

// const toChanged = (value: string) => {
//   const toDate = value;
//   const fromDate = from.value;
//   const regexp = /^(0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])[/-]\d{4}$/;
//   if (regexp.test(fromDate) && regexp.test(toDate)) {
//     emit('update:modelValue', [new Date(fromDate), new Date(toDate)]);
//   }
// };

onMounted(() => {
  if (Array.isArray(modelValue.value)) {
    cursor.value = new Date(modelValue.value[1] || new Date());
    selectedDate.value = cursor.value;
  } else {
    cursor.value = new Date(modelValue.value || new Date());
    selectedDate.value = cursor.value;
  }
});

const yearSelectionYears = computed(() => {
  const years = [];
  for (let year = 1900; year <= 2100; year++) {
    years.push(year);
  }
  return years;
});

const showMonthSelectionActive = ref(false);

function showMonthSelection() {
  showMonthSelectionActive.value = true;
}
function hideMonthSelection() {
  showMonthSelectionActive.value = false;
}

const showYearSelectionActive = ref(false);
function showYearSelection() {
  showYearSelectionActive.value = true;
  nextTick(() => {
    const yearEntry = refYearEntry.value[activeYear.value];
    yearEntry.scrollIntoView({ block: 'start', behavior: 'auto' });
  });
}
function hideYearSelection() {
  showYearSelectionActive.value = false;
}

const capitalize = (str: string) => {
  const s = str.charAt(0).toUpperCase();

  return s + str.slice(1, str.length);
};

const getShortMonthName = (month: number) => {
  const formatter = Intl.DateTimeFormat(navigator.language, {
    month: 'long',
  });
  const objDate = new Date();
  objDate.setDate(1);
  objDate.setMonth(month - 1);
  console.log(formatter.format(objDate));
  return capitalize(formatter.format(objDate).slice(0, 3));
};

const getDayNames = () => {
  const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const dd = day < 10 ? `0${day}` : day;
    return new Date(`2016-02-${dd}T00:00:00+00:00`);
  });
  return days.map((date) =>
    date.toLocaleString(navigator.language, {
      weekday: 'long',
    })
  );
};

const months = computed(() => {
  return [
    {
      title: getShortMonthName(1),
    },
    {
      title: getShortMonthName(2),
    },
    {
      title: getShortMonthName(3),
    },
    {
      title: getShortMonthName(4),
    },
    {
      title: getShortMonthName(5),
    },
    {
      title: getShortMonthName(6),
    },
    {
      title: getShortMonthName(7),
    },
    {
      title: getShortMonthName(8),
    },
    {
      title: getShortMonthName(9),
    },
    {
      title: getShortMonthName(10),
    },
    {
      title: getShortMonthName(11),
    },
    {
      title: getShortMonthName(12),
    },
  ];
});

const getPresetStyle = (preset: Preset) => {
  if (!currentPreset.value) {
    return '';
  }
  if (preset.key === currentPreset.value) {
    if (props.variant === 'secondary') {
      return 'bg-emerald-500 hover:bg-emerald-500 text-white';
    }
    return 'bg-primary-500 hover:bg-primary-500 text-white';
  }
  return '';
};

// watch(currentPreset, (newVal, oldValue) => {
//   if (newVal !== oldValue && currentPreset.value) {
//     const preset = defaultPresets.find((d) => d.key === currentPreset.value);
//     if (preset) {
//       setQuickAction(preset);
//     }
//   }
// });

defineExpose({
  addYear,
  subYear,
  addMonth,
  subMonth,
  reset,
});
</script>

<template>
  <div class="relative flex w-max select-none flex-col sm:flex-row">
    <div
      v-if="presets.length"
      class="relative hidden min-h-0 w-48 border-r border-gray-200 dark:border-gray-700 lg:block"
    >
      <div class="absolute inset-0 overflow-auto py-2">
        <div
          v-for="(preset, index) in presets"
          :key="index"
          class="py-2 px-4"
          :class="getPresetStyle(preset)"
          @click="setQuickAction(preset)"
        >
          {{ preset.title }}
        </div>
      </div>
    </div>

    <section class="p-4 dark:border-gray-700">
      <div class="mb-4 flex items-center text-center text-lg font-semibold">
        <div class="flex flex-1">
          <div
            class="flex h-8 items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="
              () => {
                showMonthSelection();
                hideYearSelection();
              }
            "
          >
            {{ monthHeading }}
          </div>
          <div
            class="flex h-8 items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="
              () => {
                showYearSelection();
                hideMonthSelection();
              }
            "
          >
            {{ yearHeading }}
          </div>
        </div>
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          @click="subMonth"
        >
          <PhCaretLeft type="chevron-left" size="14" weight="bold" />
        </div>

        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          @click="addMonth"
        >
          <PhCaretRight type="chevron-right" size="14" weight="bold" />
        </div>
      </div>

      <div class="relative w-max">
        <div
          v-if="showMonthSelectionActive"
          class="absolute inset-0 z-10 grid grid-cols-3 gap-4"
        >
          <div
            v-for="(month, index) in months"
            :key="index"
            class="flex items-center justify-center rounded-lg py-2 text-center"
            :class="[
              activeMonth === index
                ? variantStyling.background
                : 'hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
            @click="
              () => {
                setMonth(index);
                hideMonthSelection();
              }
            "
          >
            {{ month.title }}
          </div>
        </div>

        <div
          v-if="showYearSelectionActive"
          class="absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"
        >
          <div
            v-for="year in yearSelectionYears"
            :ref="(ref) => (refYearEntry[year] = ref)"
            :key="year"
            class="rounded-lg py-2 text-center tabular-nums"
            :class="[
              activeYear === year
                ? variantStyling.background
                : 'hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
            :data-year="year"
            @click="
              () => {
                setYear(year);
                hideYearSelection();
              }
            "
          >
            {{ year }}
          </div>
        </div>

        <div
          class="grid grid-cols-7 gap-y-1"
          :class="[
            {
              'opacity-0': showMonthSelectionActive || showYearSelectionActive,
            },
          ]"
        >
          <div
            v-for="(day, idx) in getDayNames()"
            :key="idx"
            class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"
          >
            {{ day.charAt(0).toUpperCase() }}
          </div>
          <div v-for="offset in firstWeekday" :key="offset + '_offset'"></div>
          <div
            v-for="day in daysInMonth"
            :key="day + '_day'"
            class="relative"
            :disabled="!dayAllowed(day)"
            :class="[isBetweenRange(day) ? variantStyling.background : '']"
            @click="daySelect(day)"
          >
            <div
              v-if="isLast(day) || isFirst(day)"
              class="absolute z-0 h-full"
              :class="[
                variantStyling.background,
                isFirst(day)
                  ? 'right-0 w-1/2'
                  : isLast(day)
                  ? 'left-0 w-1/2'
                  : '',
              ]"
            ></div>
            <div
              class="relative z-10 flex h-8 w-8 min-w-8 items-center justify-center rounded-lg text-sm font-medium tabular-nums"
              :class="[
                isBetweenRange(day) ||
                isLast(day) ||
                isFirst(day) ||
                isSelectedDay(day)
                  ? `rounded-0 ${variantStyling.background}`
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800',
              ]"
            >
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      v-if="Array.isArray(modelValue)"
      class="flex flex-shrink-0 flex-col items-start border-gray-200 p-4 dark:border-gray-700 sm:border-l"
    >
      <RobustDatePicker
        v-model="modelValue[0]"
        title="From"
        condensed
        class="mb-4 w-full"
      />
      <RobustDatePicker
        v-model="modelValue[1]"
        title="To"
        condensed
        class="mb-4 w-full"
      />
      <slot />
    </div>
  </div>
</template>
