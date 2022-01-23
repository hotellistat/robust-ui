<template>
  <div
    class="select-none p-4 grid grid-cols-1 gap-8"
    :class="{ 'lg:grid-cols-3': Array.isArray(modelValue) }"
  >
    <div class="flex text-lg font-semibold items-center text-center4">
      <div
        class="
          h-7
          w-7
          flex
          items-center
          justify-center
          cursor-pointer
          rounded-full
          text-gray-500
          hover:text-gray-700 hover:bg-gray-100
          dark:hover:text-gray-200 dark:hover:bg-gray-600
          active:bg-gray-200
        "
        @click="subYear"
      >
        <ph-caret-double-left size="18" />
      </div>
      <div
        class="
          h-7
          w-7
          flex
          items-center
          justify-center
          cursor-pointer
          rounded-full
          text-gray-500
          hover:text-gray-700 hover:bg-gray-100
          dark:hover:text-gray-200 dark:hover:bg-gray-600
          active:bg-gray-200
        "
        @click="subMonth"
      >
        <ph-caret-left type="chevron-left" size="18" />
      </div>
      <div class="flex-1 flex justify-center">
        <div
          class="
            hover:bg-gray-100
            dark:hover:bg-gray-600
            rounded-lg
            px-2
            cursor-pointer
          "
          @click="showMonthSelection() && hideYearSelection()"
        >
          {{ monthHeading }}
        </div>
        <div
          class="
            hover:bg-gray-100
            dark:hover:bg-gray-600
            rounded-lg
            px-2
            cursor-pointer
          "
          @click="showYearSelection() && hideMonthSelection()"
        >
          {{ yearHeading }}
        </div>
      </div>
      <div
        class="
          h-7
          w-7
          flex
          items-center
          justify-center
          cursor-pointer
          rounded-full
          text-gray-500
          hover:text-gray-700 hover:bg-gray-100
          dark:hover:text-gray-200 dark:hover:bg-gray-600
          active:bg-gray-200
        "
        @click="addMonth"
      >
        <ph-caret-right type="chevron-right" size="18" />
      </div>
      <div
        class="
          h-7
          w-7
          flex
          items-center
          justify-center
          cursor-pointer
          rounded-full
          text-gray-500
          hover:text-gray-700 hover:bg-gray-100
          dark:hover:text-gray-200 dark:hover:bg-gray-600
          active:bg-gray-200
        "
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
      <div v-if="showMonthSelectionActive" class="grid grid-cols-3 gap-4 h-60">
        <div
          v-for="(month, index) in months"
          class="
            py-2
            text-center
            rounded-lg
            cursor-pointer
            flex
            items-center
            justify-center
          "
          :class="[
            activeMonth === index
              ? 'bg-primary-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-600',
          ]"
          @click="setMonth(index) && hideMonthSelection()"
          :key="index"
        >
          {{ month.title }}
        </div>
      </div>

      <div
        v-if="showYearSelectionActive"
        class="h-60 overflow-y-auto flex flex-col gap-2"
      >
        <div
          class="text-center py-2 cursor-pointer rounded-lg"
          :ref="(ref) => (refYearEntry[year] = ref)"
          :key="year"
          :class="[
            activeYear === year
              ? 'bg-primary-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-600',
          ]"
          :data-year="year"
          v-for="year in yearSelectionYears"
          @click="setYear(year) && hideYearSelection()"
        >
          {{ year }}
        </div>
      </div>

      <div
        v-if="!showMonthSelectionActive && !showYearSelectionActive"
        class="grid grid-cols-7 gap-y-2 font-courier"
      >
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Mon</div>
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Tue</div>
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Wed</div>
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Thu</div>
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Fri</div>
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Sat</div>
        <div class="text-center pb-2 text-gray-500 dark:text-gray-400">Sun</div>

        <div
          class="day__offset"
          v-for="offset in firstWeekday"
          :key="offset + '_offset'"
        ></div>
        <div
          v-for="day in daysInMonth"
          :key="day + '_day'"
          class="flex justify-center relative"
          @click="daySelect(day)"
          :disabled="!dayAllowed(day)"
          :class="[isBetweenRange(day) ? 'bg-primary-500 text-white' : '']"
        >
          <div
            v-if="isLast(day) || isFirst(day)"
            class="absolute h-full bg-primary-500 z-0"
            :class="[
              isFirst(day)
                ? 'right-0 w-1/2'
                : isLast(day)
                ? 'left-0 w-1/2'
                : '',
            ]"
          ></div>
          <span
            class="
              h-8
              w-8
              rounded-full
              flex
              items-center
              justify-center
              pt-0.5
              cursor-pointer
              z-[10]
            "
            :class="[
              activeDay(day) ? 'text-white bg-primary-500 rounded-0' : '',
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
      class="flex flex-col items-start w-full"
    >
      <label
        class="block font-medium mb-1 text-gray-500 dark:text-gray-400 text-sm"
        >From</label
      >
      <input-component
        placeholder="Date"
        v-model="from"
        :error="errorFrom"
        class="w-full mb-2"
      />

      <label
        class="block font-medium mb-1 text-gray-500 dark:text-gray-400 text-sm"
        >To</label
      >
      <input-component
        placeholder="Date"
        v-model="to"
        :error="errorTo"
        class="w-full mb-2"
      />
      <slot />
    </div>
    <div v-if="Array.isArray(modelValue)" class="flex flex-col w-full">
      <div class="flex flex-row sm:flex-col">
        <div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="todayRange"
          >
            Today
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="yesterDay"
          >
            Yesterday
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="thisMonthSoFar"
          >
            This month so far
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="thisMonth"
          >
            This month
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="thisYear"
          >
            This year
          </div>
        </div>

        <div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="thisYearSoFar"
          >
            This year so far
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="lastWeek"
          >
            Last week
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="lastMonth"
          >
            Last month
          </div>
          <div
            class="
              cursor-pointer
              p-1
              rounded-md
              hover:bg-gray-300
              dark:hover:bg-gray-500
            "
            @click="lastYear"
          >
            Last year
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue'

export default {
  inheritAttrs: false,
  components: {
    InputComponent,
  },
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
      type: [Array, Date],
    },
    rangeColors: {
      type: Object,
    },
  },
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
}
</script>
