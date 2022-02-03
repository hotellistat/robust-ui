<script lang="ts">
import Popper from '../Popper/Popper'
import Calendar from '../Calendar/Calendar.vue'
import Button from '../Button/Button.vue'
import Checkbox from '../Checkbox/Checkbox.vue'
import DatePicker from '../DatePicker/DatePicker.vue'
import InputWrapper from '../InputWrapper/InputWrapper.vue'
import { onClickOutside } from '@vueuse/core'

import {
  PhCaretDown,
  PhCalendar,
  PhArrowLeft,
  PhArrowRight,
  PhClockCounterClockwise,
} from 'phosphor-vue'

import { format } from 'date-fns'
import {
  computed,
  defineComponent,
  nextTick,
  PropType,
  ref,
  toRefs,
  watch,
} from 'vue'

export default defineComponent({
  components: {
    Calendar,
    Popper,
    InputWrapper,
    Button,
    Checkbox,
    DatePicker,
    PhCaretDown,
    PhCalendar,
    PhArrowLeft,
    PhArrowRight,
    PhClockCounterClockwise,
  },

  props: {
    title: {
      type: String,
    },
    hint: {
      type: String,
    },
    dateRange: {
      type: Array as unknown as PropType<[Date, Date]>,
      required: true,
    },
    compareDateRange: {
      type: Array as unknown as PropType<[Date, Date]>,
    },
    enableComparison: {
      type: Boolean,
      default: false,
    },
    perspectiveDate: {
      type: Date,
    },
    comparePerspectiveDate: {
      type: Date,
    },
    enablePerspective: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    inputClass: {
      type: String,
      default: 'bg-gray-100 dark:bg-gray-700',
    },
    condensed: {
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
  },

  setup(props, { emit, attrs }) {
    const cuid = '_' + Math.random().toString(36).substr(2, 9)
    const {
      dateRange,
      compareDateRange,
      perspectiveDate,
      comparePerspectiveDate,
    } = toRefs(props)

    const refSelectContainer = ref()
    const open = ref(false)
    const inputWrapperRef = ref()

    const mainCalendar = ref()
    const perspectiveOf = ref<Date | undefined>(perspectiveDate.value)
    const comparePerspectiveOf = ref<Date | undefined>(
      comparePerspectiveDate.value
    )
    const compareWith = computed({
      get: () => computedCompare.value.length > 1,
      set: (value) => {
        showCompare(value)
      },
    })

    const enabledHistory = ref(false)
    const displayCompare = ref()
    const dateConfig = ref()
    const storeHistory = ref(true)
    const popperRef = ref()
    const pickedCompare = computed(() => {
      return compareDates.value.length > 1
    })

    const formatDate = (date: Date, time?: boolean) => {
      if (!time) return format(date, 'dd.MM.yyyy')
      return format(date, 'dd.MM.yyyy HH:mm:ss')
    }

    const dateHistory = computed(() => {
      return props.dateHistory || []
    })

    const computedDateRange = computed<[Date, Date]>({
      get() {
        return dateRange.value
      },
      set(value) {
        emit('update:dateRange', value)
        emit('change', value)
        emit('blur')
        // if (value.length > 1) open.value = false
      },
    })

    const compareDates = ref<[Date, Date] | undefined>(compareDateRange.value)

    const computedCompare = computed<[Date, Date] | undefined>({
      get() {
        return compareDates.value
      },
      set(value) {
        compareDates.value = value
        emit('update:compareDate', value)
        emit('blur')
      },
    })

    const displayDate = computed(() => {
      if (!computedDateRange.value) {
        return 'Select date'
      }

      const realDate = computedDateRange.value
      try {
        return realDate.length > 1
          ? format(realDate[0], 'P') + ' - ' + format(realDate[1], 'P')
          : format(realDate[0], 'P') + ' - ' + '-- -- ----'
      } catch (e) {
        return undefined
      }
    })

    function closeDropdown() {
      if (open.value === true) {
        open.value = false
        enabledHistory.value = false
        emit('blur')
      }
    }

    const showCompare = (val: boolean) => {
      if (val) {
        displayCompare.value = val
      } else {
        emit('update:comparison-date', undefined)
        computedCompare.value = undefined
      }
    }

    onClickOutside(popperRef, (event) => {
      if (open.value) {
        if (inputWrapperRef.value.wrapperRef.contains(event.target)) {
          event.stopPropagation()
          event.preventDefault()
        }
        closeDropdown()
        emit('blur')
      }
    })

    // const updatePerspective = (val: Date) => {
    //   emit('update:perspectiveDate', val)
    // }

    // const updateComparePerspective = (val: Date) => {
    //   emit('update:comparePerspectiveDate', val)
    // }

    const handleClick = () => {
      open.value = !open.value
    }

    const goBack = () => {
      displayCompare.value = false
      // mainCalendar.value.toggleCompare(false)
    }

    const saveTime = async () => {
      // if (store) {
      //   store.commit('SET_DATE_MODULE_DETAILS', {
      //     module: route.matched[1].meta.title
      //       ? route.matched[1].meta.title
      //       : 'Default',
      //     subpage: route.meta.title,
      //     class: route.meta.color ? route.meta.color : 'text-gray',
      //   })
      //   store.commit('SET_DATE_CONFIG')
      //   if (storeHistory.value) await store.dispatch('set_date_history')
      // }
    }

    const enableStoringHistory = (enable: boolean) => {
      storeHistory.value = enable
    }

    const prefillDates = (item: any) => {
      // if (store) {
      //   if (item.global_date)
      //     store.commit(
      //       'SET_GLOBAL_DATE',
      //       item.global_date.map((date: Date) => new Date(date))
      //     )
      //   if (item.perspective_date)
      //     perspectiveOf.value = new Date(item.perspective_date)

      //   if (item.compare_date)
      //     store.commit(
      //       'SET_COMPARE_DATE',
      //       item.compare_date.map((date: Date) => new Date(date))
      //     )
      //   if (item.compare_perspective_date)
      //     comparePerspectiveOf.value = new Date(item.compare_perspective_date)
      // }
      enabledHistory.value = !enabledHistory.value
      enableStoringHistory(false)
    }

    // watch(compareDate, (val: any) => {
    //   compareDates.value = val
    // })

    watch(perspectiveOf, (val) => {
      emit('update:perspectiveDate', val)
    })

    watch(comparePerspectiveOf, (val) => {
      emit('update:comparePerspectiveDate', val)
    })

    return {
      displayCompare,
      computedCompare,
      attrs,
      refSelectContainer,
      pickedCompare,
      open,
      cuid,
      displayDate,
      saveTime,
      computedDateRange,
      prefillDates,
      dateConfig,
      closeDropdown,
      showCompare,
      comparePerspectiveOf,
      compareWith,
      storeHistory,
      handleClick,
      goBack,
      mainCalendar,
      perspectiveOf,
      enabledHistory,
      dateHistory,
      formatDate,
      enableStoringHistory,
      inputWrapperRef,
      popperRef,
    }
  },

  methods: {},
})
</script>

<template>
  <InputWrapper
    v-bind="$attrs"
    :title="title"
    ref="inputWrapperRef"
    :hint="hint"
    :error="error"
    :condensed="condensed"
    @click.stop="handleClick"
    class="cursor-pointer"
  >
    <template #default="slotProps">
      <div
        class="flex h-full items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <PhCalendar size="20" />
      </div>
      <div
        :id="slotProps.cuid"
        ref="select"
        class="flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"
        v-bind="$attrs"
      >
        <div class="min-w-0 truncate font-courier text-sm sm:text-base">
          {{ displayDate }}
        </div>
      </div>

      <div
        class="flex h-full flex-shrink-0 items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <PhCaretDown
          size="18"
          class="transition-transform duration-150"
          :class="{ 'rotate-180 transform': open }"
        />
      </div>
    </template>
  </InputWrapper>
  <Popper
    ref="popperRef"
    v-if="inputWrapperRef?.wrapperRef"
    class="z-[100] origin-top-left"
    :append-to="inputWrapperRef?.wrapperRef"
    v-model:open="open"
    :options="{
      placement: 'bottom-start',
    }"
  >
    <div
      class=""
      :class="!enabledHistory ? 'translate-y-0' : 'translate-y-full'"
    >
      <div
        v-if="enableComparison"
        class="flex items-center justify-between gap-x-2 px-4 py-2 hover:cursor-pointer"
      >
        <PhArrowRight
          @click="goBack"
          size="24"
          :class="displayCompare ? 'visible' : 'invisible'"
        />
        <div class="text-lg">
          {{ displayCompare ? 'Compare' : 'Date range' }}
        </div>
        <PhArrowLeft
          @click="displayCompare = true"
          size="24"
          :class="displayCompare ? 'invisible' : 'visible'"
        />
      </div>
      <div
        class="flex"
        :class="[
          !displayCompare ? 'translate-x-0' : '-translate-x-full',
          enableComparison ? 'absolute' : '',
        ]"
      >
        <Calendar
          ref="mainCalendar"
          v-model="computedDateRange"
          @click:relativeDate="enableStoringHistory(false)"
        >
          <div
            v-if="enablePerspective"
            class="flex flex-col items-start gap-y-3"
          >
            <div>
              <label
                class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
                >Perspective of</label
              >
              <DatePicker placeholder="Date" v-model="perspectiveOf" />
            </div>
            <Checkbox
              v-if="enableComparison"
              v-model="compareWith"
              title="Compare with"
            />
          </div>
        </Calendar>
      </div>
      <div
        v-if="enableComparison"
        class="slide transform transition-all duration-150 ease-in-out"
        :class="[!displayCompare ? 'translate-x-full' : 'translate-x-0']"
      >
        <Calendar
          v-model="computedCompare"
          @click:relativeDate="enableStoringHistory(false)"
        >
          <div v-if="enablePerspective" class="flex flex-col items-start">
            <label
              class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
              >Perspective of</label
            >
            <DatePicker placeholder="Date" v-model="comparePerspectiveOf" />
          </div>
        </Calendar>
      </div>
      <div
        class="flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"
      >
        <PhClockCounterClockwise
          :class="dateHistory.length > 0 ? 'visible' : 'invisible'"
          @click="enabledHistory = !enabledHistory"
          class="hover:cursor-pointer"
          :size="35"
        />
        <Button type="primary" @click="saveTime">Apply time range</Button>
      </div>
    </div>
  </Popper>
</template>
