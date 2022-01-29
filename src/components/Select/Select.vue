<template>
  <input-wrapper
    :title="title"
    :hint="hint"
    :error="error"
    :condensed="condensed"
    class="cursor-pointer"
    @click="openDropdown"
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
        :id="'select_' + cuid"
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
        class="flex h-full flex-shrink-0 items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <ph-caret-down
          :size="18"
          class="transition-transform duration-200"
          :class="{ 'rotate-180 transform': open }"
        />
      </div>

      <base-popper
        v-if="slotProps.wrapperRef"
        v-model:open="open"
        v-click-outside="{ handler: blurDropdown, active: open }"
        class="z-[100] origin-top"
        :append-to="slotProps.wrapperRef"
        :modifiers="popperModifiers"
        :options="{
          placement: 'bottom-start',
        }"
        @closed="resetFields"
      >
        <ul v-if="computedOptions.length > 0" class="max-h-40 overflow-auto">
          <li
            v-for="option in computedOptions"
            :key="option.value"
            class="flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            @click="selectItem(option)"
          >
            <span>{{ option.title }}</span>
            <ph-check
              v-if="modelValue === option.value"
              class="ml-auto text-gray-400"
              size="20"
            />
          </li>
        </ul>
        <div v-else class="py-2 text-center text-gray-400">No options</div>
      </base-popper>
    </template>
  </input-wrapper>
</template>

<script lang="ts">
import BasePopper from '../Popper/Popper'
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
import clickOutside from '../../utils/clickOutside'
export default defineComponent({
  components: {
    BasePopper,
    InputWrapper,
  },
  inheritAttrs: false,
  directives: {
    clickOutside,
  },
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

    console.log(options.value)

    const cuid = '_' + Math.random().toString(36).substr(2, 9)
    const open = ref(false)

    const search = ref('')

    // watch(search, value => value === "" ? search.value = undefined : undefined)

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

      console.log(computedOptions.value)
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
      {
        name: 'offset',
        options: {
          offset: [0, 2],
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
    }

    function focusDropdown() {
      openDropdown()
      emit('focus')
    }

    function closeDropdown() {
      open.value = false
    }

    function blurDropdown() {
      closeDropdown()
      emit('blur')
    }

    function resetFields() {
      nextTick(() => {
        search.value = undefined
      })
    }

    return {
      refSelectInput,
      refSelectContainer,
      blurDropdown,
      closeDropdown,
      focusDropdown,
      cuid,
      open,
      openDropdown,
      popperModifiers,
      activeItem,
      selectItem,
      computedOptions,
      resetFields,
      attrs,
      search,
    }
  },
})
</script>
