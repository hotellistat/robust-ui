<script lang="ts">
export default {
  name: 'RobustSelect',
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import RobustInputWrapper from '../InputWrapper/index.vue'
import RobustPopper from '../Popper'
import { ref, computed, nextTick, toRefs, onMounted, PropType } from 'vue'
import { debouncedWatch } from '@vueuse/core'
import { Modifier } from '@popperjs/core'
import { onClickOutside } from '@vueuse/core'
import { PhCheck, PhCaretDown } from '@dnlsndr/vue-phosphor-icons'

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  zIndex: {
    type: String,
    default: 'z-[50]',
  },
  hint: {
    type: String,
    default: undefined,
  },
  error: {
    type: String,
    default: undefined,
  },
  class: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: [String, Boolean, Number, Array],
    required: true,
  },
  options: {
    type: Array as PropType<Array<{ title: string; value: string | number }>>,
    required: true,
  },
  condensed: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  searchFunction: {
    type: Function,
  },
})

const emit = defineEmits([
  'update:modelValue',
  'input',
  'change',
  'focus',
  'blur',
])
// const refSelectContainer = ref()
const refSelectInput = ref()

const refSelectWrapper = ref()
const { options, modelValue } = toRefs(props)

const anchorRef = ref()

const open = ref(false)
const popperRef = ref()
// const inputWrapper = ref()

const search = ref('')

const computedOptions = ref([])

async function filterBySearchTerm(value) {
  if (props.searchFunction !== undefined) {
    computedOptions.value = await props.searchFunction(value)
  }

  if (value === '') {
    computedOptions.value = options.value
  } else {
    computedOptions.value = options.value.filter((option) =>
      option.title.toLowerCase().includes(value.toLowerCase())
    )
  }
}

debouncedWatch(
  [search, options],
  async ([value, optValue]) => {
    await filterBySearchTerm(value)
  },
  { debounce: 150 }
)

onMounted(async () => {
  await filterBySearchTerm('')
})

const popperModifiers: Array<
  Partial<Modifier<string, Record<string, unknown>>>
> = [
  {
    name: 'sameWidth',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: (args) => {
      args.state.styles.popper.width = `${Math.max(
        args.state.rects.reference.width,
        200
      )}px`
    },
    effect: (args) => {
      args.state.elements.popper.style.width = `${
        args.state.elements.reference.getBoundingClientRect().width
      }px`
    },
  },
]

const activeItem = computed(() => {
  return props.options.find((item) => item.value === props.modelValue)
})

function selectItem(item) {
  if (Array.isArray(modelValue.value)) {
    let updatedValue = modelValue.value
    if (modelValue.value.includes(item.value)) {
      updatedValue = modelValue.value.filter((v) => v !== item.value)
    } else {
      updatedValue = [...updatedValue, item.value]
    }
    emit('input', updatedValue)
    emit('change', updatedValue)
    emit('update:modelValue', updatedValue)
  } else {
    emit('input', item.value)
    if (item.value !== props.modelValue) {
      emit('change', item.value)
      emit('update:modelValue', item.value)
    }
    nextTick(() => {
      closeDropdown()
      emit('blur')
    })
  }
}

function openDropdown() {
  open.value = true
  sortOptionsBySelected()
  nextTick(() => {
    refSelectInput.value.focus()
  })
  emit('focus')
}

onClickOutside(popperRef, (event) => {
  if (open.value) {
    if (anchorRef.value.contains(event.target)) {
      event.stopPropagation()
      event.preventDefault()
    }
    resetFields()
    closeDropdown()
    emit('blur')
  }
})

function closeDropdown() {
  open.value = false
}

function resetFields() {
  search.value = ''
}

// returns if options is selected
// in form of boolean
function optionSelected(option: any) {
  if (Array.isArray(modelValue.value)) {
    return modelValue.value.includes(option.value)
  }
  return modelValue.value === option.value
}

function getInputTitle() {
  if (Array.isArray(modelValue.value)) {
    if (modelValue.value.length < 1) return 'Select'
    const titles = []
    for (const value of modelValue.value) {
      const found = options.value.find((o) => o.value === value)
      titles.push(found.title)
    }
    return titles.join(', ')
  } else {
    return activeItem.value ? activeItem.value.title : 'Select'
  }
}

function sortOptionsBySelected() {
  if (Array.isArray(modelValue.value)) {
    const selectedOptions = []
    const notSelectedOptions = []

    for (const option of computedOptions.value) {
      if (modelValue.value.includes(option.value)) selectedOptions.push(option)
      else notSelectedOptions.push(option)
    }

    computedOptions.value = [...selectedOptions, ...notSelectedOptions]
    console.log(computedOptions.value)
  }
}

function controlAll() {
  if (!Array.isArray(modelValue.value)) return
  if (modelValue.value.length < 1) selectAll()
  else deselectAll()
}

function selectAll() {
  const newValue = computedOptions.value.map((option) => option.value)
  emit('input', newValue)
  emit('change', newValue)
  emit('update:modelValue', newValue)
}

function deselectAll() {
  const newValue = []
  emit('input', newValue)
  emit('change', newValue)
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div ref="anchorRef">
    <RobustInputWrapper
      v-if="searchable"
      ref="refSelectWrapper"
      v-slot="slotProps"
      :title="title"
      :hint="hint"
      :error="error"
      :class="$props.class"
      class=""
      :readonly="readonly"
      :condensed="condensed"
      @click="openDropdown"
      @focus="openDropdown"
      @blur="closeDropdown"
    >
      <div
        v-if="$slots.prefix"
        class="flex h-full items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <slot tag="div" name="prefix" />
      </div>
      <div
        v-show="!open"
        :id="slotProps.cuid"
        ref="select"
        class="flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
        v-bind="$attrs"
      >
        <div class="min-w-0 select-none truncate">
          {{ getInputTitle() }}
        </div>
      </div>
      <input
        v-show="open"
        ref="refSelectInput"
        v-model="search"
        size="1"
        class="block h-full min-w-0 flex-1 flex-shrink bg-transparent text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
      />

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
    <RobustInputWrapper
      v-else
      ref="refSelectWrapper"
      :title="title"
      :hint="hint"
      :error="error"
      :class="$props.class"
      class=""
      :readonly="readonly"
      :condensed="condensed"
      @click="openDropdown"
      @focus="openDropdown"
      @blur="closeDropdown"
    >
      <div
        class="flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
      >
        <div class="min-w-0 select-none truncate">
          {{ activeItem ? activeItem.title : 'Select' }}
        </div>
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
  </div>
  <RobustPopper
    v-if="refSelectWrapper?.wrapperRef"
    ref="popperRef"
    v-model:open="open"
    class="z-[100] origin-top"
    :append-to="refSelectWrapper?.wrapperRef"
    :modifiers="popperModifiers"
    :options="{
      placement: 'bottom-start',
    }"
    @closed="resetFields"
  >
    <div v-if="Array.isArray(modelValue)" class="flex justify-end py-2 px-4">
      <div class="cursor-pointer font-light" @click="controlAll">
        <div v-if="Array.isArray(modelValue) && modelValue.length > 0">
          Clear all
        </div>
        <div v-else>Select all</div>
      </div>
    </div>
    <ul v-if="computedOptions.length > 0" class="max-h-72 overflow-auto">
      <li
        v-for="option in computedOptions"
        :key="option.value"
        class="flex cursor-default items-center gap-4 px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="selectItem(option)"
      >
        <span>{{ option.title }}</span>
        <PhCheck
          v-if="optionSelected(option)"
          class="ml-auto flex-shrink-0 text-gray-400"
          weight="bold"
          size="14"
        />
      </li>
    </ul>
    <div v-else class="py-2 text-center text-gray-400">No options</div>
  </RobustPopper>
</template>
