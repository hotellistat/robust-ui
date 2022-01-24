<template>
  <base-input-wrapper
    :title="title"
    :hint="hint"
    :error="error"
    :condensed="condensed"
    @click="openDropdown"
    class="cursor-pointer"
  >
    <template v-slot:default="slotProps">
      <div
        class="h-full flex items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
        v-if="$slots.prefix"
      >
        <slot tag="div" name="prefix" />
      </div>
      <div
        v-show="!open"
        :id="'select_' + cuid"
        ref="select"
        class="
          bg-transparent
          w-full
          h-full
          text-current
          outline-none
          flex
          items-center
        "
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
        v-bind="attrs"
      >
        <div class="truncate min-w-0 select-none">
          {{ activeItem ? activeItem.title : 'Select' }}
        </div>
      </div>
      <input
        v-show="open"
        v-model="search"
        size="1"
        ref="refSelectInput"
        class="bg-transparent block w-full h-full text-current outline-none"
        :class="[$slots.prefix || condensed ? 'pl-2' : 'pl-3']"
      />

      <div
        class="h-full flex-shrink-0 flex items-center pr-2 text-gray-400"
        :class="[condensed ? 'pl-2' : 'pl-3']"
      >
        <ph-caret-down
          :size="18"
          class="transition-transform duration-200"
          :class="{ 'transform rotate-180': open }"
        />
      </div>

      <base-popper
        v-if="slotProps.wrapperRef"
        class="z-[100] origin-top-left"
        :append-to="slotProps.wrapperRef"
        @closed="resetFields"
        v-click-outside="{ handler: blurDropdown, active: open }"
        :modifiers="popperModifiers"
        v-model:open="open"
        :options="{
          placement: 'bottom-start',
        }"
      >
        <ul v-if="computedOptions.length > 0" class="max-h-40 overflow-auto">
          <li
            class="
              px-4
              py-2
              cursor-pointer
              dark:hover:bg-gray-600
              hover:bg-gray-100
              transition-colors
              duration-200
              flex
              items-center
            "
            @click="selectItem(option)"
            v-for="option in computedOptions"
            :key="option.value"
          >
            <span>{{ option.title }}</span>
            <ph-check
              class="ml-auto text-gray-400"
              v-if="modelValue === option.value"
              size="20"
            />
          </li>
        </ul>
        <div v-else class="text-center py-2 text-gray-400">No options</div>
      </base-popper>
    </template>
  </base-input-wrapper>
</template>

<script lang="ts">
import BasePopper from '../../utils/Popper'
import { ref, computed, nextTick, toRefs, onMounted, defineComponent, PropType } from 'vue'
import BaseInputWrapper from '../InputWrapper/InputWrapper.vue'
import { debouncedWatch } from '@vueuse/core'
import { Modifier } from '@popperjs/core'

export default defineComponent({
  inheritAttrs: false,
  components: {
    BasePopper,
    BaseInputWrapper,
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
      type: String,
    },
    options: {
      type: Array as PropType<Array<{title: string, value: string | number}>>,
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

    const popperModifiers: Array<Modifier<string, Record<string, unknown>>> = [
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
