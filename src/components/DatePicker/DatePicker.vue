<script lang="ts">
import Popper from '../Popper/Popper'
import Calendar from '../Calendar/Calendar.vue'
import { format } from 'date-fns'
import InputWrapper from '../InputWrapper/InputWrapper.vue'
import { PhCaretDown, PhCalendar } from 'phosphor-vue'
import { computed, defineComponent, ref, toRefs, PropType } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: "RobustDatePicker",

  components: {
    Popper,
    Calendar,
    InputWrapper,
    PhCaretDown,
    PhCalendar,
  },
  props: {
    title: {
      type: String,
    },
    hint: {
      type: String,
    },
    modelValue: {
      type: Object as PropType<Date>,
    },
    error: {
      type: String,
    },
    class: {
      type: String,
      default: 'bg-gray-100 dark:bg-gray-600',
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
  },
  setup(props, { emit, attrs }) {


    const refSelectContainer = ref()
    const { modelValue } = toRefs(props)
    const open = ref(false)
    const popperRef = ref()
    const inputWrapperRef = ref()

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

    const computedValue = computed<Date>({
      get() {
        return modelValue?.value ? modelValue.value : new Date()
      },
      set(value) {
        open.value = false
        emit('update:modelValue', value)
        emit('change', value)
        emit('blur')
      },
    })

    const displayDate = computed(() => {
      if (!computedValue.value) {
        return 'Select date'
      }

      const realDate = computedValue.value
      try {
        return realDate ? format(realDate, 'P') : 'Unknown'
      } catch (e) {
        return undefined
      }
    })

    function closeDropdown() {
      if (open.value === true) {
        open.value = false
        emit('blur')
      }
    }

    return {
      attrs,
      refSelectContainer,
      open,
      props,
      displayDate,
      computedValue,
      closeDropdown,
      popperRef,
      inputWrapperRef,
    }
  },

  methods: {},
})
</script>

<template>
  <InputWrapper
    :title="title"
    :hint="hint"
    :error="error"
    :class="$props.class"
    class="cursor-pointer"
    :readonly="readonly"
    :condensed="condensed"
    @click.stop="open = !open"
    ref="inputWrapperRef"
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
      <div class="min-w-0 truncate tabular-nums">{{ displayDate }}</div>
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
  </InputWrapper>
  <Popper
    v-if="inputWrapperRef?.wrapperRef"
    ref="popperRef"
    class="z-[100] origin-top-left"
    :append-to="inputWrapperRef?.wrapperRef"
    v-model:open="open"
    :options="{
      placement: 'bottom-start',
    }"
  >
    <Calendar v-model="computedValue" />
  </Popper>
</template>
