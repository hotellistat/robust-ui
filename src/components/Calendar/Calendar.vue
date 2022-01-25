<template>
  <div
    class="grid select-none grid-cols-1 gap-8 p-4"
    :class="{ 'lg:grid-cols-3': Array.isArray(modelValue) }"
  >
    <div class="text-center4 flex items-center text-lg font-semibold">
      <div
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200"
        @click="subYear"
      >
        <ph-caret-double-left size="18" />
      </div>
      <div
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200"
        @click="subMonth"
      >
        <ph-caret-left type="chevron-left" size="18" />
      </div>
      <div class="flex flex-1 justify-center">
        <div
          class="cursor-pointer rounded-lg px-2 hover:bg-gray-100 dark:hover:bg-gray-600"
          @click="
            () => {
              showMonthSelection()
              hideYearSelection()
            }
          "
        >
          {{ monthHeading }}
        </div>
        <div
          class="cursor-pointer rounded-lg px-2 hover:bg-gray-100 dark:hover:bg-gray-600"
          @click="
            () => {
              showYearSelection()
              hideMonthSelection()
            }
          "
        >
          {{ yearHeading }}
        </div>
      </div>
      <div
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200"
        @click="addMonth"
      >
        <ph-caret-right type="chevron-right" size="18" />
      </div>
      <div
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200"
        @click="addYear"
      >
        <ph-caret-double-right type="chevrons-right" size="18" />
      </div>
    </div>
    <h1 v-if="Array.isArray(modelValue)" class="self-center">
      Absolute time range
    </h1>
    <h1 v-if="Array.isArray(modelValue)" class="self-center">
      Relative time ranges
    </h1>

    <div>
      <div v-if="showMonthSelectionActive" class="grid h-60 grid-cols-3 gap-4">
        <div
          v-for="(month, index) in months"
          :key="index"
          class="flex cursor-pointer items-center justify-center rounded-lg py-2 text-center"
          :class="[
            activeMonth === index
              ? 'bg-primary-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-600',
          ]"
          @click="
            () => {
              setMonth(index)
              hideMonthSelection()
            }
          "
        >
          {{ month.title }}
        </div>
      </div>

      <div
        v-if="showYearSelectionActive"
        class="flex h-60 flex-col gap-2 overflow-y-auto"
      >
        <div
          v-for="year in yearSelectionYears"
          :ref="(ref) => (refYearEntry[year] = ref)"
          :key="year"
          class="cursor-pointer rounded-lg py-2 text-center"
          :class="[
            activeYear === year
              ? 'bg-primary-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-600',
          ]"
          :data-year="year"
          @click="
            () => {
              setYear(year)
              hideYearSelection()
            }
          "
        >
          {{ year }}
        </div>
      </div>

      <div
        v-if="!showMonthSelectionActive && !showYearSelectionActive"
        class="grid grid-cols-7 gap-y-2 font-courier"
      >
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Mon</div>
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Tue</div>
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Wed</div>
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Thu</div>
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Fri</div>
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Sat</div>
        <div class="pb-2 text-center text-gray-500 dark:text-gray-400">Sun</div>

        <div
          v-for="offset in firstWeekday"
          :key="offset + '_offset'"
          class="day__offset"
        ></div>
        <div
          v-for="day in daysInMonth"
          :key="day + '_day'"
          class="relative flex justify-center"
          :disabled="!dayAllowed(day)"
          :class="[isBetweenRange(day) ? 'bg-primary-500 text-white' : '']"
          @click="daySelect(day)"
        >
          <div
            v-if="isLast(day) || isFirst(day)"
            class="absolute z-0 h-full bg-primary-500"
            :class="[
              isFirst(day)
                ? 'right-0 w-1/2'
                : isLast(day)
                ? 'left-0 w-1/2'
                : '',
            ]"
          ></div>
          <span
            class="z-[10] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full pt-0.5"
            :class="[
              activeDay(day) ? 'rounded-0 bg-primary-500 text-white' : '',
              isBetweenRange(day) || isLast(day) || isFirst(day)
                ? 'hover:bg-primary-400 dark:hover:bg-primary-400'
                : 'hover:bg-gray-100 dark:hover:bg-gray-600',
            ]"
            >{{ day }}</span
          >
        </div>
      </div>
    </div>
    <div
      v-if="Array.isArray(modelValue)"
      class="flex w-full flex-col items-start"
    >
      <label
        class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
        >From</label
      >
      <input-component
        v-model="from"
        placeholder="Date"
        :error="errorFrom"
        class="mb-2 w-full"
      />

      <label
        class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
        >To</label
      >
      <input-component
        v-model="to"
        placeholder="Date"
        :error="errorTo"
        class="mb-2 w-full"
      />
      <slot />
    </div>
    <div v-if="Array.isArray(modelValue)" class="flex w-full flex-col">
      <div class="flex flex-row sm:flex-col">
        <div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="todayRange"
          >
            Today
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="yesterDay"
          >
            Yesterday
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="thisMonthSoFar"
          >
            This month so far
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="thisMonth"
          >
            This month
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="thisYear"
          >
            This year
          </div>
        </div>

        <div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="thisYearSoFar"
          >
            This year so far
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="lastWeek"
          >
            Last week
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="lastMonth"
          >
            Last month
          </div>
          <div
            class="cursor-pointer rounded-md p-1 hover:bg-gray-300 dark:hover:bg-gray-500"
            @click="lastYear"
          >
            Last year
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import InputComponent from '../Input/Input.vue'
import {
  subYears,
  addYears,
  subMonths,
  addMonths,
  setYear as setFnsYear,
  setMonth as setFnsMonth,
  format,
  isFuture,
  differenceInDays,
  isSameDay,
  getDaysInMonth,
  subDays,
  min,
  max,
  set,
  endOfMonth,
  startOfMonth,
  startOfYear,
  endOfYear,
  startOfWeek,
  endOfWeek,
  isValid,
} from 'date-fns'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  ref,
  toRefs,
  watch,
} from 'vue'

export default defineComponent({
  components: {
    InputComponent,
  },
  inheritAttrs: false,
  props: {
    date: {
      type: Date,
      default: () => new Date(),
    },
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
    modelValue: {
      type: [Array, Date] as PropType<[Date, Date] | Date>,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'click:relativeDate'],
  setup(props, { emit }) {
    const { future, past, today, modelValue } = toRefs(props)

    const from = ref()
    const to = ref()
    const errorFrom = ref()
    const errorTo = ref()
    const now = ref()
    const virtualDate = ref()
    const selectedDate = ref()
    // const perspectiveOf = ref(new Date(perspectiveDate.value))

    const refYearEntry = ref({})

    virtualDate.value = Array.isArray(modelValue.value)
      ? new Date()
      : new Date(modelValue.value)

    const daysInMonth = computed(() => {
      const date = new Date(virtualDate.value)
      return getDaysInMonth(date)
    })

    console.log(daysInMonth.value)

    const monthHeading = computed(() => {
      try {
        return format(virtualDate.value, 'MMM')
      } catch (e) {
        return undefined
      }
    })
    const yearHeading = computed(() => {
      try {
        return format(virtualDate.value, 'yyyy')
      } catch (e) {
        return undefined
      }
    })

    const firstWeekday = computed(() => {
      const date = new Date(virtualDate.value)
      date.setDate(1)
      const day = date.getDay()
      return (day === 0 ? 7 : day) - 1
    })

    const activeMonth = computed(() => {
      const date = new Date(virtualDate.value)
      return date.getMonth()
    })

    const activeYear = computed(() => {
      const date = new Date(virtualDate.value)
      return date.getFullYear()
    })

    const applyTime = () => {
      if (from.value != '' && !isValid(new Date(from.value))) {
        errorFrom.value = 'Please enter a valid date.'
      }
      if (to.value != '' && !isValid(new Date(to.value))) {
        errorTo.value = 'Please enter a valid date.'
      }
      if (isValid(new Date(from.value)) && isValid(new Date(to.value))) {
        errorFrom.value = ''
        errorTo.value = ''
        const newModelValue = [new Date(from.value), new Date(to.value)]
        emit('update:modelValue', newModelValue)
      }
    }

    const compareDates = (dateOne, dateTwo) => {
      const diff = dayDiff(dateOne, dateTwo)

      if (diff < 0) return 1
      else if (diff > 0) return -1
      return 0
    }

    const dayDiff = (d1, d2) => {
      const endDate = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate())
      const startDate = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate())
      return (endDate - startDate) / 86400000
    }

    const isFirst = (day) => {
      // checking if it is daterange or only datepicker
      if (!Array.isArray(modelValue.value)) return false

      // doesn't do any actions if you've choosen only one date
      if (modelValue.value.length < 2) return false

      if (!compareDates(...modelValue.value)) return false

      const tmpDate = new Date(virtualDate.value)
      const newDate = new Date(tmpDate.setDate(day))

      const minDate = min(modelValue.value)

      // minimal value
      if (!compareDates(newDate, minDate)) return true
      return false
    }

    const isLast = (day) => {
      // checking if it is daterange or only datepicker
      if (!Array.isArray(modelValue.value)) return false

      // doesn't do any actions if you've choosen only one date
      if (modelValue.value.length < 2) return false

      if (!compareDates(...modelValue.value)) return false

      const tmpDate = new Date(virtualDate.value)
      const newDate = new Date(tmpDate.setDate(day))

      const maxDate = max(modelValue.value)

      // max value
      if (!compareDates(newDate, maxDate)) return true
      return false
    }

    const isBetweenRange = (day) => {
      if (!Array.isArray(modelValue.value)) return false
      if (modelValue.value.length < 2) return false

      const tmpDate = new Date(virtualDate.value)
      const newDate = new Date(tmpDate.setDate(day))
      const minDate = min(modelValue.value)
      const maxDate = max(modelValue.value)

      if (
        compareDates(newDate, maxDate) === -1 &&
        compareDates(newDate, minDate) === 1
      ) {
        return true
      }
      return false
    }

    const activeDay = (day) => {
      const tmpDate = new Date(virtualDate.value)
      const newDate = new Date(tmpDate.setDate(day))

      if (Array.isArray(modelValue.value)) {
        const selectedDates = modelValue.value.map((date) => new Date(date))
        for (let i = 0; i < selectedDates.length; i++) {
          if (!compareDates(selectedDates[i], newDate)) {
            return true
          }
        }
      } else {
        if (!compareDates(new Date(selectedDate.value), newDate)) {
          return true
        }
      }
    }

    function addYear() {
      virtualDate.value = addYears(virtualDate.value, 1)
    }

    function subYear() {
      virtualDate.value = subYears(virtualDate.value, 1)
    }

    function setYear(year) {
      virtualDate.value = setFnsYear(virtualDate.value, year)
    }

    function addMonth() {
      virtualDate.value = addMonths(virtualDate.value, 1)
    }

    function subMonth() {
      virtualDate.value = subMonths(virtualDate.value, 1)
    }

    function setMonth(month) {
      virtualDate.value = setFnsMonth(virtualDate.value, month)
    }

    const todayRange = () => {
      if (!Array.isArray(modelValue.value)) {
        selectedDate.value = set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        })
        emit('update:modelValue', selectedDate.value)
      } else {
        const today = set(new Date(), {
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        })
        const newDates = [
          today,
          set(new Date(today), {
            hours: 23,
            minutes: 59,
            seconds: 59,
          }),
        ]
        from.value = format(newDates[0], 'MM/dd/yyyy')
        to.value = format(newDates[1], 'MM/dd/yyyy')
        emit('update:modelValue', newDates)
      }
      emit('click:relativeDate')
    }

    const yesterDay = () => {
      if (!Array.isArray(modelValue.value)) {
        selectedDate.value = set(subDays(new Date(), 1), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        })
        emit('update:modelValue', selectedDate.value)
      } else {
        const yesterday = set(subDays(new Date(), 1), {
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        })
        const newDates = [
          yesterday,
          set(new Date(yesterday), {
            hours: 23,
            minutes: 59,
            seconds: 59,
          }),
        ]
        from.value = format(newDates[0], 'MM/dd/yyyy')
        to.value = format(newDates[1], 'MM/dd/yyyy')
        emit('update:modelValue', newDates)
      }
      emit('click:relativeDate')
    }

    const thisMonthSoFar = () => {
      const monthStart = startOfMonth(new Date())
      const newDates = [
        monthStart,
        set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      ]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const thisMonth = () => {
      const monthStart = startOfMonth(new Date())
      const monthEnd = endOfMonth(new Date())
      const newDates = [monthStart, monthEnd]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const thisYear = () => {
      const yearStart = startOfYear(new Date())
      const yearEnd = endOfYear(new Date())
      const newDates = [yearStart, yearEnd]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const thisYearSoFar = () => {
      const yearStart = startOfYear(new Date())
      const yearEnd = set(new Date(), {
        hours: 23,
        minutes: 59,
        seconds: 59,
      })
      const newDates = [yearStart, yearEnd]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const lastWeek = () => {
      const startDay = startOfWeek(subDays(new Date(), 7))
      const endDay = endOfWeek(new Date(startDay))
      const newDates = [startDay, endDay]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const lastMonth = () => {
      const startDay = startOfMonth(subDays(startOfMonth(new Date()), 1))
      const endDay = endOfMonth(new Date(startDay))
      const newDates = [startDay, endDay]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const lastYear = () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1))
      const endDay = endOfYear(new Date(startDay))
      const newDates = [startDay, endDay]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const dayAllowed = (day) => {
      const date = new Date(virtualDate.value).setDate(day)
      if (!today.value && isSameDay(now.value, date)) {
        return false
      }
      if (!past.value && differenceInDays(now.value, date) > 0) {
        return false
      }
      if (!future.value && isFuture(date)) {
        return false
      }
      return true
    }

    const daySelect = (day) => {
      if (!dayAllowed(day)) {
        return
      }
      const tmpDate = new Date(virtualDate.value)
      virtualDate.value = set(new Date(tmpDate.setDate(day)), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      })
      if (!Array.isArray(modelValue.value)) {
        selectedDate.value = new Date(virtualDate.value)
        emit('update:modelValue', virtualDate.value)
      } else {
        errorFrom.value = ''
        errorTo.value = ''
        let newModelValue = []
        if (modelValue.value.length > 1) {
          newModelValue.push(
            set(new Date(virtualDate.value), {
              hours: 0,
              minutes: 0,
              seconds: 0,
              milliseconds: 0,
            })
          )
          to.value = ''
        } else {
          newModelValue = modelValue.value
          newModelValue.push(
            set(new Date(virtualDate.value), {
              hours: 23,
              minutes: 59,
              seconds: 59,
            })
          )
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
            ]
            to.value = format(newModelValue[1], 'MM/dd/yyyy')
          }
        }
        from.value = format(newModelValue[0], 'MM/dd/yyyy')
        emit('update:modelValue', newModelValue)
      }
    }

    const reset = () => {
      virtualDate.value = new Date(new Date().setHours(12))
    }

    function submit() {
      emit('update:modelValue', virtualDate.value)
      this.$refs.modal.close()
    }

    watch([from, to], () => {
      applyTime()
    })

    watch(modelValue, (val) => {
      const f = val[0] || undefined
      const t = val[1] || undefined
      if (f) from.value = format(f, 'MM/dd/yyyy')
      else from.value = ''
      if (t) to.value = format(t, 'MM/dd/yyyy')
      else to.value = ''
    })

    onMounted(() => {
      if (!Array.isArray(modelValue.value)) {
        virtualDate.value = new Date(modelValue.value || new Date())
        selectedDate.value = new Date(virtualDate.value)
      } else {
        virtualDate.value = new Date(new Date())
        selectedDate.value = new Date(virtualDate.value)
        const f = modelValue.value[0] || undefined
        const t = modelValue.value[1] || undefined
        if (f) from.value = format(f, 'MM/dd/yyyy')
        else from.value = ''
        if (t) to.value = format(t, 'MM/dd/yyyy')
        else to.value = ''
      }
    })

    const yearSelectionYears = computed(() => {
      const years = []
      for (let year = 1900; year <= 2100; year++) {
        years.push(year)
      }
      return years
    })

    const showMonthSelectionActive = ref(false)
    function showMonthSelection() {
      showMonthSelectionActive.value = true
    }
    function hideMonthSelection() {
      showMonthSelectionActive.value = false
    }

    const showYearSelectionActive = ref(false)
    function showYearSelection() {
      showYearSelectionActive.value = true
      nextTick(() => {
        console.log(refYearEntry, activeYear.value)
        const yearEntry = refYearEntry.value[activeYear.value]
        console.log(yearEntry)
        yearEntry.scrollIntoView({ block: 'start', behavior: 'auto' })
      })
    }
    function hideYearSelection() {
      showYearSelectionActive.value = false
    }

    const months = computed(() => {
      return [
        {
          title: 'Jan',
        },
        {
          title: 'Feb',
        },
        {
          title: 'Mar',
        },
        {
          title: 'Apr',
        },
        {
          title: 'May',
        },
        {
          title: 'Jun',
        },
        {
          title: 'Jul',
        },
        {
          title: 'Aug',
        },
        {
          title: 'Sep',
        },
        {
          title: 'Oct',
        },
        {
          title: 'Nov',
        },
        {
          title: 'Dec',
        },
      ]
    })

    return {
      months,
      from,
      to,
      errorFrom,
      errorTo,
      showMonthSelectionActive,
      showYearSelectionActive,
      now,
      virtualDate,
      selectedDate,
      showMonthSelection,
      showYearSelection,
      hideMonthSelection,
      hideYearSelection,
      daysInMonth,
      monthHeading,
      yearHeading,
      refYearEntry,
      setYear,
      setMonth,
      firstWeekday,
      activeMonth,
      activeYear,
      compareDates,
      applyTime,
      dayDiff,
      isFirst,
      isLast,
      isBetweenRange,
      activeDay,
      addYear,
      subYear,
      addMonth,
      subMonth,
      todayRange,
      yesterDay,
      thisMonthSoFar,
      thisMonth,
      thisYear,
      thisYearSoFar,
      lastWeek,
      lastMonth,
      lastYear,
      dayAllowed,
      daySelect,
      reset,
      submit,
      yearSelectionYears,
    }
  },
})
</script>
