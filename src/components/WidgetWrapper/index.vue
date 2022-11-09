<script lang="ts">
export default {
  name: 'RobustWidgetWrapper',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import RobustPopper from '../Popper'
import { PhDotsThreeVertical } from '@dnlsndr/vue-phosphor-icons'
import { onClickOutside } from '@vueuse/core'

defineProps({
  title: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmits(['blur'])

const open = ref(false)
const contextButtonRef = ref()
const popperRef = ref()

onClickOutside(popperRef, (event) => {
  if (open.value) {
    if (contextButtonRef.value.contains(event.target)) {
      event.stopPropagation()
      event.preventDefault()
    }
    closeDropdown()
    emit('blur')
  }
})

const closeDropdown = () => {
  if (open.value === true) {
    open.value = false
    emit('blur')
  }
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="group relative flex flex-col rounded-md bg-white dark:bg-gray-800"
  >
    <div
      v-if="title || $slots.title"
      class="relative mb-3 flex min-w-0 justify-between truncate px-4 pt-3 text-gray-700 dark:text-gray-400"
    >
      <slot v-if="$slots.title" name="title" :title="title" />
      <template v-else>{{ title }}</template>
      <button
        v-if="$slots.options"
        ref="contextButtonRef"
        class="ml-2 -mr-2 -mt-1 cursor-default rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-800"
        @click="open = !open"
      >
        <PhDotsThreeVertical size="24" weight="bold" />
      </button>
    </div>
    <section
      v-if="$slots.default"
      class="h-full w-full px-4 pb-3"
      :class="{ 'pt-3': !(title || $slots.title) }"
    >
      <slot />
    </section>
    <slot name="raw" />
  </div>
  <RobustPopper
    ref="popperRef"
    v-model:open="open"
    class="z-[100]"
    :append-to="contextButtonRef"
    :options="{
      placement: 'bottom-end',
    }"
  >
    <slot name="options" />
  </RobustPopper>
</template>
