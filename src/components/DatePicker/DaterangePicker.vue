<script lang="ts">
import { onClickOutside } from '@vueuse/core'
import { RobustPopper, RobustCalendar, RobustInputWrapper, RobustButton, RobustCheckbox, RobustDatePicker } from '..'

import {
  PhCaretDown,
  PhCalendar,
  PhArrowLeft,
  PhArrowRight,
  PhClockCounterClockwise,
} from '@dnlsndr/vue-phosphor-icons'

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
  name: 'RobustDaterangePicker',

  components: {
    RobustCalendar,
    RobustPopper,
    RobustInputWrapper,
    RobustButton,
    RobustCheckbox,
    RobustDatePicker,
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
      type: Object as PropType<[Date, Date]>,
      required: true,
    },
    compareDateRange: {
      type: Object as PropType<[Date, Date]>,
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
    class: {
      type: String,
      default: 'bg-gray-100 dark:bg-gray-700',
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
  },

  setup(props, { emit, attrs }) {
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

    let tmpDateRange = ref<[Date, Date]>()

    // const computedDateRange = computed<[Date, Date]>({
    //   get() {
    //     return dateRange.value
    //   },
    //   set(value) {
    //     // if (value.length > 1) open.value = false
    //     tmpDateRange.value = value
    //   },
    // })

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

    const compareWith = computed({
      get: () => computedCompare.value.length > 1,
      set: (value) => {
        showCompare(value)
      },
    })

    const displayDate = computed(() => {
      if (!dateRange.value) {
        return 'Select date'
      }

      const realDate = dateRange.value
      try {
        return realDate.length > 1
          ? format(realDate[0], 'P') + ' - ' + format(realDate[1], 'P')
          : format(realDate[0], 'P') + ' - ' + format(realDate[0], 'P')
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

    const updatePerspective = (val: Date) => {
      emit('update:perspectiveDate', val)
    }

    const updateComparePerspective = (val: Date) => {
      emit('update:comparePerspectiveDate', val)
    }

    const handleClick = () => {
      tmpDateRange.value = dateRange.value
      open.value = !open.value
    }

    const goBack = () => {
      displayCompare.value = false
      // mainCalendar.value.toggleCompare(false)
    }

    const saveTime = async () => {
      emit('update:dateRange', tmpDateRange.value)
      emit('change', tmpDateRange.value)
      emit('blur')
      open.value = false
    }

    const enableStoringHistory = (enable: boolean) => {
      storeHistory.value = enable
    }

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
      props,
      refSelectContainer,
      pickedCompare,
      open,
      displayDate,
      saveTime,
      tmpDateRange,
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
  <RobustInputWrapper
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    class="cursor-pointer"
    :readonly="readonly"
    :condensed="condensed"
    ref="inputWrapperRef"
    @click.stop="handleClick"
    v-slot="slotProps"
  >
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
      <div
        class="min-w-0 truncate text-sm tabular-nums sm:text-base"
      >{{ displayDate }}</div>
    </div>

    <div
      class="flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500"
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
    ref="popperRef"
    v-if="inputWrapperRef?.wrapperRef"
    class="z-[100] origin-top-left"
    :append-to="inputWrapperRef?.wrapperRef"
    v-model:open="open"
    :options="{
      placement: 'bottom-start',
    }"
  >
    <h3
      class="font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"
    >Date range</h3>
    <div>
      <RobustCalendar
        ref="mainCalendar"
        v-model="tmpDateRange"
        @click:relativeDate="enableStoringHistory(false)"
      >
        <div v-if="enablePerspective" class="flex flex-col items-start gap-y-3">
          <div>
            <label
              class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
            >Perspective of</label>
            <RobustDatePicker placeholder="Date" v-model="perspectiveOf" />
          </div>
          <RobustCheckbox
            v-if="enableComparison"
            v-model="compareWith"
            title="Compare with"
          />
        </div>
      </RobustCalendar>
    </div>
    <h3
      v-if="enableComparison"
      class="font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"
    >Comparison date range</h3>
    <div v-if="enableComparison">
      <RobustCalendar
        variant="secondary"
        v-model="computedCompare"
        @click:relativeDate="enableStoringHistory(false)"
      >
        <div v-if="enablePerspective" class="flex flex-col items-start">
          <label
            class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
          >Perspective of</label>
          <RobustDatePicker placeholder="Date" v-model="comparePerspectiveOf" />
        </div>
      </RobustCalendar>
    </div>
    <div
      class="flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"
    >
      <RobustButton
        type="primary"
        class="ml-auto"
        @click="saveTime"
      >Apply time range</RobustButton>
    </div>
  </RobustPopper>
</template>
