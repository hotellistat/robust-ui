<script lang="ts">
import Popper from '../Popper/Popper'
import {
  ref,
  computed,
  nextTick,
  toRefs,
  onMounted,
  defineComponent,
  PropType,
} from 'vue'
import InputWrapper from '../InputWrapper/InputWrapper.vue'
import { debouncedWatch } from '@vueuse/core'
import { Modifier } from '@popperjs/core'
import { onClickOutside } from '@vueuse/core'
import { PhCheck } from 'phosphor-vue'

export default defineComponent({
  components: {
    Popper,
    InputWrapper,
    PhCheck,
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
    },
    zIndex: {
      type: String,
      default: 'z-[50]',
    },
    hint: {
      type: String,
    },
    error: {
      type: String,
    },
    inputClass: {
      type: String,
    },
    modelValue: {
      type: [String, Boolean, Number],
    },
    options: {
      type: Array as PropType<Array<{ title: string; value: string | number }>>,
      required: true,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
    searchFunction: {
      type: Function,
    },
  },

  setup(props, { emit, attrs }) {
    const refSelectContainer = ref()
    const refSelectInput = ref()

    const { options } = toRefs(props)

    const open = ref(false)
    const popperRef = ref()
    const inputWrapper = ref()

    const search = ref('')

    let computedOptions = ref([])

    async function filterBySearchTerm(value) {
      if (props.searchFunction !== undefined) {
        computedOptions.value = await props.searchFunction(value)
      }

      if (value === '') {
        computedOptions.value = options.value
      } else {
        computedOptions.value = options.value.filter(
          (option) =>
            option.title.toLowerCase().substring(0, value.length) ===
            value.toLowerCase()
        )
      }
    }

    debouncedWatch(
      search,
      async (value) => {
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
      nextTick(() => {
        closeDropdown()
      })
      emit('update:modelValue', item.value)
      emit('change', item.value)
    }

    function openDropdown() {
      open.value = true
      nextTick(() => {
        refSelectInput.value.focus()
      })
      emit('focus')
    }

    onClickOutside(popperRef, (event) => {
      if (open.value) {
        if (inputWrapper.value.wrapperRef.contains(event.target)) {
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

    return {
      refSelectInput,
      refSelectContainer,
      closeDropdown,
      open,
      props,
      openDropdown,
      inputWrapper,
      popperModifiers,
      activeItem,
      selectItem,
      computedOptions,
      resetFields,
      attrs,
      search,
      popperRef,
    }
  },
})
</script>

<template>
  <InputWrapper
    ref="inputWrapper"
    class="cursor-pointer"
    v-bind="props"
    @click="openDropdown"
    @focus="openDropdown"
    @blur="closeDropdown"
  >
    <template #default="slotProps">
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
        class="flex h-full w-full items-center bg-transparent text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
        v-bind="attrs"
      >
        <div class="min-w-0 select-none truncate">
          {{ activeItem ? activeItem.title : 'Select' }}
        </div>
      </div>
      <input
        v-show="open"
        ref="refSelectInput"
        v-model="search"
        size="1"
        class="block h-full w-full bg-transparent text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
      />

      <div
        class="flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-600"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <ph-caret-down
          :size="14"
          weight="bold"
          class="transition-transform duration-200"
          :class="{ 'rotate-180 transform': open }"
        />
      </div>
    </template>
  </InputWrapper>
  <Popper
    v-if="inputWrapper?.wrapperRef"
    v-model:open="open"
    ref="popperRef"
    class="z-[100] origin-top"
    :append-to="inputWrapper?.wrapperRef"
    :modifiers="popperModifiers"
    :options="{
      placement: 'bottom-start',
    }"
    @closed="resetFields"
  >
    <ul v-if="computedOptions.length > 0" class="max-h-72 overflow-auto">
      <li
        v-for="option in computedOptions"
        :key="option.value"
        class="flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        @click="selectItem(option)"
      >
        <span>{{ option.title }}</span>
        <PhCheck
          v-if="modelValue === option.value"
          class="ml-auto text-gray-400"
          weight="bold"
          size="14"
        />
      </li>
    </ul>
    <div v-else class="py-2 text-center text-gray-400">No options</div>
  </Popper>
</template>
