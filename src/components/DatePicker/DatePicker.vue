<template>
  <hs-input-wrapper
    :title="title"
    :hint="hint"
    :error="error"
    :condensed="condensed"
    @click.stop="open = !open"
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
        <div class="min-w-0 truncate font-courier">{{ displayDate }}</div>
      </div>

      <div
        class="flex h-full flex-shrink-0 items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <ph-caret-down
          size="18"
          class="transition-transform duration-200"
          :class="{ 'rotate-180 transform': open }"
        />
      </div>

      <hs-popper
        v-if="slotProps.wrapperRef"
        class="z-[100] origin-top-left"
        :append-to="slotProps.wrapperRef"
        v-click-outside="{ handler: closeDropdown, active: open }"
        v-model:open="open"
        :options="{
          placement: 'bottom-start',
        }"
      >
        <hs-calendar v-model="computedValue" />
      </hs-popper>
    </template>
  </hs-input-wrapper>
</template>

<script lang="ts">
import HsPopper from '../Popper/Popper'
import HsCalendar from '../Calendar/Calendar.vue'
import { format } from 'date-fns'
import HsInputWrapper from '../InputWrapper/InputWrapper.vue'

import { computed, defineComponent, ref, toRefs } from 'vue'

export default defineComponent({
  components: {
    HsPopper,
    HsCalendar,
    HsInputWrapper,
  },
  props: {
    title: {
      type: String,
    },
    hint: {
      type: String,
    },
    modelValue: {
      type: [Date, String],
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
  },
  setup(props, { emit, attrs }) {
    const refSelectContainer = ref()
    const { modelValue } = toRefs(props)
    const open = ref(false)
    const cuid = '_' + Math.random().toString(36).substr(2, 9)

    const computedValue = computed<Date | undefined>({
      get() {
        return modelValue?.value ? new Date(modelValue.value) : undefined
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
      cuid,
      displayDate,
      computedValue,
      closeDropdown,
    }
  },

  methods: {},
})
</script>
