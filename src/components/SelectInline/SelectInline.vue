<script lang="ts">
import RobustPopper from '../Popper/Popper'
import {
  ref,
  computed,
  nextTick,
  toRefs,
  defineComponent,
  PropType,
} from 'vue'
import { Modifier } from '@popperjs/core'
import { onClickOutside } from '@vueuse/core'
import { PhCheck, PhCaretDown } from '@dnlsndr/vue-phosphor-icons'
export default defineComponent({
  name: 'RobustSelectInline',

  components: {
    RobustPopper,
    PhCheck,
    PhCaretDown,
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
    class: {
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
    readonly: {
      type: Boolean,
      default: false,
    }
  },

  setup(props, { emit, attrs }) {
    const refSelectInlineContainer = ref()
    const refSelectInlineInput = ref()
    const { options } = toRefs(props)

    const open = ref(false)
    const popperRef = ref()
    const currentActive = ref()
    const wrapperRef = ref()


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
            args.state.elements.popper.style.width = `${args.state.elements.reference.getBoundingClientRect().width
              }px`
          },
        },
      ]

    const activeItem = computed(() => {
      return props.options.find((item) => item.value === props.modelValue)
    })

    function selectItem(item) {
      nextTick(() => {
        open.value = false
      })
      emit('update:modelValue', item.value)
      emit('change', item.value)
    }

    function toggleDropdown() {
      open.value = !open.value
    }

    onClickOutside(wrapperRef, () => {
      if(open.value) {
        open.value = false
        emit('blur')
      }
    })
  

    return {
      refSelectInlineInput,
      refSelectInlineContainer,
      open,
      props,
      toggleDropdown,
      wrapperRef,
      popperModifiers,
      activeItem,
      selectItem,
      attrs,
      popperRef,
      currentActive
    }
  },
})
</script>

<template>
  <div
    ref="wrapperRef"
    class="
    cursor-pointer
    relative flex min-w-20 max-w-52
    rounded-md border border-gray-200 
    bg-gray-50 dark:border-gray-700 
    dark:bg-gray-900 h-10 
    ring-primary-500 ring-opacity-30 
    focus-within:border-primary-500 
    focus-within:outline-none 
    focus-within:ring 
    focus-within:dark:border-primary-500"
    @click="toggleDropdown"
  >
    <div
      class="flex h-full w-full items-center bg-transparent text-current outline-none"
      :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
    >
      <div
        class="min-w-0 select-none truncate"
      >{{ activeItem ? activeItem.title : 'Select' }}</div>
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
    
  </div>
  <RobustPopper
      v-model:open="open"
      ref="popperRef"
      :append-to="wrapperRef?.value"
      :modifiers="popperModifiers"
      :options="{
        placement: 'bottom-start',
      }"
    >
      <ul v-if="options.length > 0" class="max-h-72 overflow-auto">
        <li
          v-for="option in options"
          :key="option.value"
          class="flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
  </RobustPopper>
  
</template>