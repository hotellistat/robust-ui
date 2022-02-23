<template>
  <div
    ref="root"
    class="transition-color text-shade-20 relative flex select-none items-center bg-gray-200 duration-100 ease-in-out dark:bg-gray-700"
    :class="[rounded ? 'rounded-full' : 'rounded-md']"
  >
    <div
      ref="highlighter"
      class="absolute top-0 bottom-0 z-0 bg-primary-500 transition-all duration-200 ease-in-out"
      :class="[rounded ? 'rounded-full' : 'rounded-md']"
      :style="{ left: backgroundXOffset + 'px', width: backgroundWidth + 'px' }"
    ></div>

    <button
      v-for="tab in tabs"
      :key="tab.value"
      :ref="registerTab"
      :data-value="tab.value"
      @click="select($event, tab.value)"
      class="whitespace-no-wrap z-10 flex-1 flex-shrink-0 flex-grow self-stretch whitespace-nowrap px-4 transition-colors duration-200"
      :class="{ 'text-white': modelValue === tab.value }"
    >{{ tab.title }}</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  toRefs,
} from 'vue'

interface Tab {
  title: string
  value: string
}

export default defineComponent({
  name: 'RobustTabsSwitch',

  props: {
    tabs: {
      type: Array as PropType<Tab[]>,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      required: true,
    },
  },

  setup(props, { emit }) {
    const tabs = ref<HTMLElement[]>([])

    const propRefs = toRefs(props)

    const registerTab = (el: HTMLElement) => {
      tabs.value?.push(el)
    }

    const backgroundXOffset = ref(0)
    const backgroundWidth = ref(0)

    const showBackground = ref(false)

    const root = ref<HTMLElement>()
    const highlighter = ref<HTMLElement>()

    const resizeObserver: ResizeObserver = new ResizeObserver(() => {
      const activeElement = getActiveElement()

      if (activeElement) {
        updateHighlighter(activeElement)
      }
    })

    onMounted(() => {
      if (root.value) {
        resizeObserver.observe(root.value)
      }
      nextTick(() => {
        showBackground.value = true
      })
    })

    onUnmounted(() => {
      if (root.value) {
        resizeObserver.unobserve(root.value)
      }
    })

    const getActiveElement = () => {
      return tabs.value.find(
        (tab) => tab.dataset.value === propRefs.modelValue.value
      )
    }

    const updateHighlighter = (element: HTMLElement) => {
      // Fetch the container box of the root ref
      const containerBox = root.value?.getBoundingClientRect()

      if (!containerBox) {
        throw new Error('no container box specified')
      }

      // Fetch the container box of the currently selected tab ref
      const selectedTabBox = element.getBoundingClientRect()

      // Calculate the difference between the root and the selectedTab to get the relative offset of the selectedTab to the root
      const relativeOffset = {
        x: selectedTabBox.x - containerBox.x,
        y: selectedTabBox.y - containerBox.y,
      }

      // Update the background position and size to the relative offset and size
      backgroundXOffset.value = relativeOffset.x
      backgroundWidth.value = selectedTabBox.width
    }

    const select = (event: MouseEvent, value: string) => {
      // emit a value update event and change the background size and position to the newly selected tab
      emit('update:modelValue', value)
      if (event.target && event.target instanceof HTMLElement) {
        updateHighlighter(event.target)
      }
    }

    const activeElement = getActiveElement()

    if (activeElement) {
      updateHighlighter(activeElement)
    }

    return {
      root,
      select,
      registerTab,
      showBackground,
      backgroundXOffset,
      backgroundWidth,
    }
  },
})
</script>
