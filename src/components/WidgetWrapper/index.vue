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
      v-if="$slots.title"
      class="relative flex min-w-0 items-center justify-between gap-4 truncate p-4 font-medium text-gray-500 dark:text-gray-400"
    >
      <slot v-if="$slots.title" name="title" />
      <div
        v-if="$slots.options"
        ref="contextButtonRef"
        class="-m-1 cursor-default rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-100 group-hover:opacity-100 dark:hover:bg-gray-700"
        @click="open = !open"
      >
        <PhDotsThreeVertical size="20" weight="bold" />
      </div>
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
    <section
      v-if="$slots.default"
      class="h-full w-full px-4 pb-4"
      :class="{ 'pt-4': !$slots.title }"
    >
      <slot />
    </section>
    <slot name="raw" />
  </div>
</template>
