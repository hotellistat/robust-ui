<script lang="ts">
import Input from '../Input/Input.vue'
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
import { PhCaretLeft, PhCaretRight } from 'phosphor-vue'

export default defineComponent({
  components: {
    Input,
    PhCaretLeft,
    PhCaretRight,
  },
  inheritAttrs: false,
  props: {
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
      default: () => new Date(),
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
    const cursor = ref()
    const selectedDate = ref()
    const refYearEntry = ref({})

    console.log('isarray', modelValue.value, Array.isArray(modelValue.value))

    cursor.value = Array.isArray(modelValue.value)
      ? new Date()
      : new Date(modelValue.value)

    const daysInMonth = computed(() => {
      const date = new Date(cursor.value)
      return getDaysInMonth(date)
    })

    const monthHeading = computed(() => {
      try {
        return format(cursor.value, 'MMM')
      } catch (e) {
        return undefined
      }
    })
    const yearHeading = computed(() => {
      try {
        return format(cursor.value, 'yyyy')
      } catch (e) {
        return undefined
      }
    })

    const firstWeekday = computed(() => {
      const date = new Date(cursor.value)
      date.setDate(1)
      const day = date.getDay()
      return (day === 0 ? 7 : day) - 1
    })

    const activeMonth = computed(() => {
      const date = new Date(cursor.value)
      return date.getMonth()
    })

    const activeYear = computed(() => {
      const date = new Date(cursor.value)
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

      const tmpDate = new Date(cursor.value)
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

      const tmpDate = new Date(cursor.value)
      const newDate = new Date(tmpDate.setDate(day))

      const maxDate = max(modelValue.value)

      // max value
      if (!compareDates(newDate, maxDate)) return true
      return false
    }

    const isBetweenRange = (day) => {
      if (!Array.isArray(modelValue.value)) return false
      if (modelValue.value.length < 2) return false

      const tmpDate = new Date(cursor.value)
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

    const isSelectedDay = (day) => {
      const tmpDate = new Date(cursor.value)
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
      cursor.value = addYears(cursor.value, 1)
    }

    function subYear() {
      cursor.value = subYears(cursor.value, 1)
    }

    function setYear(year) {
      cursor.value = setFnsYear(cursor.value, year)
    }

    function addMonth() {
      cursor.value = addMonths(cursor.value, 1)
    }

    function subMonth() {
      cursor.value = subMonths(cursor.value, 1)
    }

    function setMonth(month) {
      cursor.value = setFnsMonth(cursor.value, month)
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

    const yesterday = () => {
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
        cursor.value = newDates[1]
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
      cursor.value = newDates[1]
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const thisMonth = () => {
      const monthStart = startOfMonth(new Date())
      const monthEnd = endOfMonth(new Date())
      const newDates = [monthStart, monthEnd]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      cursor.value = newDates[1]
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const thisYear = () => {
      const yearStart = startOfYear(new Date())
      const yearEnd = endOfYear(new Date())
      const newDates = [yearStart, yearEnd]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      cursor.value = newDates[1]
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
      cursor.value = newDates[1]
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const lastWeek = () => {
      const startDay = startOfWeek(subDays(new Date(), 7))
      const endDay = endOfWeek(new Date(startDay))
      const newDates = [startDay, endDay]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      cursor.value = newDates[1]
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const lastMonth = () => {
      const startDay = startOfMonth(subDays(startOfMonth(new Date()), 1))
      const endDay = endOfMonth(new Date(startDay))
      const newDates = [startDay, endDay]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      cursor.value = newDates[1]
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const lastYear = () => {
      const startDay = startOfYear(subDays(startOfYear(new Date()), 1))
      const endDay = endOfYear(new Date(startDay))
      const newDates = [startDay, endDay]
      from.value = format(newDates[0], 'MM/dd/yyyy')
      to.value = format(newDates[1], 'MM/dd/yyyy')
      cursor.value = newDates[1]
      emit('update:modelValue', newDates)
      emit('click:relativeDate')
    }

    const dayAllowed = (day) => {
      const date = new Date(cursor.value).setDate(day)
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
      const tmpDate = new Date(cursor.value)
      cursor.value = set(new Date(tmpDate.setDate(day)), {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      })
      if (!Array.isArray(modelValue.value)) {
        selectedDate.value = new Date(cursor.value)
        emit('update:modelValue', cursor.value)
      } else {
        errorFrom.value = ''
        errorTo.value = ''
        let newModelValue = []
        if (modelValue.value.length > 1) {
          newModelValue.push(
            set(new Date(cursor.value), {
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
            set(new Date(cursor.value), {
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
      cursor.value = new Date(new Date().setHours(12))
    }

    function submit() {
      emit('update:modelValue', cursor.value)
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
        cursor.value = new Date(modelValue.value || new Date())
        selectedDate.value = new Date(cursor.value)
      } else {
        cursor.value = new Date(modelValue.value[1] || new Date())
        selectedDate.value = new Date(cursor.value)
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
      cursor,
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
      isSelectedDay,
      addYear,
      subYear,
      addMonth,
      subMonth,
      todayRange,
      yesterday,
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

<template>
  <div class="flex w-max select-none">
    <div
      v-if="Array.isArray(modelValue)"
      class="flex flex-shrink-0 flex-col border-r border-gray-200 py-2 text-sm dark:border-gray-700"
    >
      <div class="flex flex-row sm:flex-col">
        <div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="todayRange"
          >
            Today
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="yesterday"
          >
            Yesterday
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="thisMonthSoFar"
          >
            This month so far
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="thisMonth"
          >
            This month
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="thisYear"
          >
            This year
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="thisYearSoFar"
          >
            This year so far
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="lastWeek"
          >
            Last week
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="lastMonth"
          >
            Last month
          </div>
          <div
            class="cursor-pointer py-2 pl-4 pr-8 hover:bg-gray-50 dark:hover:bg-gray-700"
            @click="lastYear"
          >
            Last year
          </div>
        </div>
      </div>
    </div>
    <section class="p-4 dark:border-gray-700">
      <div class="mb-4 flex items-center text-center text-lg font-semibold">
        <div
          class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          @click="subMonth"
        >
          <PhCaretLeft type="chevron-left" size="14" weight="bold" />
        </div>
        <div class="flex flex-1 justify-center">
          <div
            class="flex h-8 cursor-pointer items-center rounded-lg px-3 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-600"
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
            class="flex h-8 cursor-pointer items-center rounded-lg px-3 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-600"
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
          class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
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
          class="absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"
        >
          <div
            v-for="year in yearSelectionYears"
            :ref="(ref) => (refYearEntry[year] = ref)"
            :key="year"
            class="cursor-pointer rounded-lg py-2 text-center tabular-nums"
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
          class="grid grid-cols-7 gap-y-1"
          :class="[
            {
              'opacity-0': showMonthSelectionActive || showYearSelectionActive,
            },
          ]"
        >
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Mon
          </div>
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Tue
          </div>
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Wed
          </div>
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Thu
          </div>
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Fri
          </div>
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Sat
          </div>
          <div
            class="pb-2 text-center font-courier text-sm text-gray-500 dark:text-gray-400"
          >
            Sun
          </div>

          <div v-for="offset in firstWeekday" :key="offset + '_offset'"></div>
          <div
            v-for="day in daysInMonth"
            :key="day + '_day'"
            class="relative"
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
            <div
              class="relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums"
              :class="[
                isBetweenRange(day) ||
                isLast(day) ||
                isFirst(day) ||
                isSelectedDay(day)
                  ? 'rounded-0 bg-primary-500 text-white hover:bg-primary-600'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700',
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
      class="flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4"
    >
      <label
        class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
        >From</label
      >
      <Input
        v-model="from"
        placeholder="Date"
        :error="errorFrom"
        class="mb-2 w-full"
      />

      <label
        class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
        >To</label
      >
      <Input
        v-model="to"
        placeholder="Date"
        :error="errorTo"
        class="mb-2 w-full"
      />
      <slot />
    </div>
  </div>
</template>
