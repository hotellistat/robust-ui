<template>
  <base-input-wrapper
    :title="title"
    :hint="hint"
    :error="error"
    :condensed="condensed"
    @click.stop="handleClick"
    class="cursor-pointer"
  >
    <template v-slot:default="slotProps">
      <div
        class="flex h-full items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <ph-calendar size="20" />
      </div>
      <div
        :id="'select_' + cuid"
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
        <ph-caret-down
          size="18"
          class="transition-transform duration-150"
          :class="{ 'rotate-180 transform': open }"
        />
      </div>

      <base-popper
        v-if="slotProps.wrapperRef"
        class="z-[100]"
        :append-to="slotProps.wrapperRef"
        v-click-outside="{ handler: closeDropdown, active: open }"
        v-model:open="open"
        :options="{
          placement: 'bottom-start',
        }"
      >
        <div
          class="slide absolute h-full w-full transform transition-all duration-150 ease-in-out"
          :class="enabledHistory ? 'translate-y-0' : '-translate-y-full'"
        >
          <div class="flex flex-col gap-y-2 p-4">
            <div
              v-for="(item, index) in dateHistory"
              :key="index"
              class="w-full rounded-md border border-gray-400 p-3 text-xs hover:cursor-pointer"
              @click="prefillDates(item)"
            >
              <div class="flex flex-col gap-y-2">
                <div class="flex gap-x-1 font-bold">
                  <div :class="item.module_details.class">
                    {{ item.module_details.module }} >
                    {{ item.module_details.subpage }}
                  </div>
                  <div>({{ formatDate(new Date(item.updated), true) }})</div>
                </div>
                <div class="grid grid-cols-2">
                  <div>
                    <div>
                      Date range:
                      {{
                        item.global_date
                          .map((date) => formatDate(new Date(date)))
                          .join(' - ') || 'Not selected'
                      }}
                    </div>
                    <div>
                      Perspective date:
                      {{
                        formatDate(new Date(item.perspective_date)) ||
                        'Not selected'
                      }}
                    </div>
                  </div>
                  <div class="text-left">
                    <div>
                      Compare:
                      {{
                        item.compare_date
                          .map((date) => formatDate(new Date(date)))
                          .join(' - ') || 'Not selected'
                      }}
                    </div>
                    <div>
                      Perspective date:
                      {{
                        formatDate(new Date(item.compare_perspective_date)) ||
                        'Not selected'
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slide relative transform transition-all duration-150 ease-in-out"
          :class="!enabledHistory ? 'translate-y-0' : 'translate-y-full'"
        >
          <div
            v-if="compare"
            class="flex items-center justify-between gap-x-2 px-4 py-2 hover:cursor-pointer"
          >
            <ph-arrow-left
              @click="goBack"
              size="24"
              :class="displayCompare ? 'visible' : 'invisible'"
            ></ph-arrow-left>
            <div class="text-lg">
              {{ displayCompare ? 'Compare' : 'Date range' }}
            </div>
            <ph-arrow-right
              @click="displayCompare = true"
              size="24"
              :class="displayCompare ? 'invisible' : 'visible'"
            ></ph-arrow-right>
          </div>
          <div
            class="slide transform transition-all duration-150 ease-in-out"
            :class="[
              !displayCompare ? 'translate-x-0' : '-translate-x-full',
              compare ? 'absolute' : '',
            ]"
          >
            <base-calendar
              ref="mainCalendar"
              v-model="computedValue"
              @click:relativeDate="enableStoringHistory(false)"
            >
              <div v-if="perspective" class="flex flex-col items-start gap-y-3">
                <div>
                  <label
                    class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
                    >Perspective of</label
                  >
                  <base-datepicker placeholder="Date" v-model="perspectiveOf" />
                </div>
                <base-checkbox
                  v-if="compare"
                  v-model="compareWith"
                  title="Compare with"
                />
              </div>
            </base-calendar>
          </div>
          <div
            v-if="compare"
            class="slide transform transition-all duration-150 ease-in-out"
            :class="[!displayCompare ? 'translate-x-full' : 'translate-x-0']"
          >
            <base-calendar
              v-model="computedCompare"
              @click:relativeDate="enableStoringHistory(false)"
            >
              <div v-if="perspective" class="flex flex-col items-start">
                <label
                  class="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"
                  >Perspective of</label
                >
                <base-datepicker
                  placeholder="Date"
                  v-model="comparePerspectiveOf"
                />
              </div>
            </base-calendar>
          </div>
          <!-- <base-separator></base-separator> -->
          <div class="flex items-start justify-between p-3">
            <ph-clock-counter-clockwise
              :class="dateHistory.length > 0 ? 'visible' : 'invisible'"
              @click="enabledHistory = !enabledHistory"
              class="hover:cursor-pointer"
              :size="35"
            />
            <hs-button type="primary" @click="saveTime"
              >Apply time range</hs-button
            >
          </div>
        </div>
      </base-popper>
    </template>
  </base-input-wrapper>
</template>

<script lang="ts">
import HsPopper from '../../utils/Popper'
import HsCalendar from '../Calendar/Calendar.vue'
import HsButton from '../Button/Button.vue'
import HsCheckbox from '../Checkbox/Checkbox.vue'
import HsDatePicker from '../DatePicker/DatePicker.vue'
import HsInputWrapper from '../InputWrapper/InputWrapper.vue'

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
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    HsCalendar,
    HsPopper,
    HsInputWrapper,
    HsButton,
    HsCheckbox,
    HsDatePicker,
    // BaseSeparator,
  },
  props: {
    title: {
      type: String,
    },
    hint: {
      type: String,
    },
    modelValue: {
      type: Array as PropType<Array<Date>>,
      required: true,
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
    compare: {
      type: Boolean,
      default: false,
    },
    compareDate: {
      type: Array as PropType<Date[]>,
    },
    perspective: {
      type: Boolean,
      default: false,
    },
    perspectiveDate: {
      type: Date,
    },
    comparePerspectiveDate: {
      type: Date,
    },
  },
  setup(props, { emit, attrs }) {
    const route = useRoute()
    const store = useStore()
    const cuid = '_' + Math.random().toString(36).substr(2, 9)
    const { modelValue, compareDate, perspectiveDate, comparePerspectiveDate } =
      toRefs(props)

    const refSelectContainer = ref()
    const open = ref(false)

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

    const pickedCompare = computed(() => {
      return compareDates.value.length > 1
    })

    const formatDate = (date: Date, time?: boolean) => {
      if (!time) return format(date, 'dd.MM.yyyy')
      return format(date, 'dd.MM.yyyy HH:mm:ss')
    }

    const dateHistory = computed(() => {
      return store.getters.dateHistory || []
    })

    const computedValue = computed<Array<Date>>({
      get() {
        return modelValue.value
      },
      set(value) {
        emit('update:modelValue', value)
        emit('change', value)
        emit('blur')
        // if (value.length > 1) open.value = false
      },
    })

    const compareDates = ref<any>(compareDate.value)

    const computedCompare = computed<Array<Date>>({
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
      if (!computedValue.value) {
        return 'Select date'
      }

      const realDate = computedValue.value
      try {
        return realDate.length > 1
          ? format(realDate[0], 'P') + ' - ' + format(realDate[1], 'P')
          : format(realDate[0], 'P') + ' - ' + 'Select date'
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
        if (store) store.commit('SET_COMPARE_DATE', [])
        computedCompare.value = []
      }
    }

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
      if (store) {
        store.commit('SET_DATE_MODULE_DETAILS', {
          module: route.matched[1].meta.title
            ? route.matched[1].meta.title
            : 'Default',
          subpage: route.meta.title,
          class: route.meta.color ? route.meta.color : 'text-gray',
        })
        store.commit('SET_DATE_CONFIG')
        if (storeHistory.value) await store.dispatch('set_date_history')
      }
    }

    const enableStoringHistory = (enable: boolean) => {
      storeHistory.value = enable
    }

    const prefillDates = (item: any) => {
      if (store) {
        if (item.global_date)
          store.commit(
            'SET_GLOBAL_DATE',
            item.global_date.map((date: Date) => new Date(date))
          )
        if (item.perspective_date)
          perspectiveOf.value = new Date(item.perspective_date)

        if (item.compare_date)
          store.commit(
            'SET_COMPARE_DATE',
            item.compare_date.map((date: Date) => new Date(date))
          )
        if (item.compare_perspective_date)
          comparePerspectiveOf.value = new Date(item.compare_perspective_date)
      }
      enabledHistory.value = !enabledHistory.value
      enableStoringHistory(false)
    }

    watch(compareDate, (val: any) => {
      compareDates.value = val
    })

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
      computedValue,
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
    }
  },

  methods: {},
})
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-25px);
  opacity: 0;
}
</style>
