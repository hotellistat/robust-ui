<template>
  <div
    ref="root"
    class="transition-color text-shade-20 relative flex select-none gap-1 bg-gray-100 p-1 duration-100 ease-in-out dark:bg-gray-700"
    :class="[rounded ? 'rounded-full' : 'rounded-lg']"
  >
    <button
      v-for="tab in tabs"
      :key="tab.value"
      :ref="registerTab"
      :data-value="tab.value"
      class="whitespace-no-wrap z-10 flex h-full flex-1 flex-shrink-0 flex-grow cursor-default items-center justify-center self-stretch whitespace-nowrap rounded transition-colors duration-75"
      :class="[
        condensed ? 'px-3 py-1' : 'px-4  py-1.5',
        {
          'bg-primary-500 text-white': modelValue === tab.value,
        },
      ]"
      @click="select($event, tab.value)"
    >
      <slot :tab="tab">
        {{ tab.title }}
      </slot>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'

export interface Tab {
  title: string
  value: string
}

defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
  condensed: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const registeredTabs = ref<HTMLElement[]>([])

const registerTab = (el: HTMLElement) => {
  registeredTabs.value?.push(el)
}

const root = ref<HTMLElement>()

const select = (event: MouseEvent, value: string) => {
  // emit a value update event and change the background size and position to the newly selected tab
  emit('update:modelValue', value)
}
</script>
