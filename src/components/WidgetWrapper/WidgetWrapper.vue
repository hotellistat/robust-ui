<script lang="ts">
import { defineComponent, ref } from 'vue'
import RobustPopper from '../Popper/Popper'
import { PhDotsThreeVertical } from '@dnlsndr/vue-phosphor-icons'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'RobustWidgetWrapper',

  components: {
    RobustPopper,
    PhDotsThreeVertical,
  },
  props: {
    title: {
      type: String,
    },
  },
  setup(_, { emit }) {
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

    return {
      open,
      closeDropdown,
      popperRef,
      contextButtonRef,
    }
  },
})
</script>

<template>
  <div
    v-bind="$attrs"
    class="group relative flex flex-col rounded-md bg-white dark:bg-gray-800"
  >
    <div
      v-if="title || $slots.title"
      class="relative mb-3 flex justify-between px-4 pt-3 text-gray-700 dark:text-gray-400"
    >
      <slot
        name="title"
        :title="title"
        v-if="$slots.title"
      />
      <template v-else>{{ title }}</template>
      <button
        v-if="$slots.options"
        ref="contextButtonRef"
        @click="open = !open"
        class="ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-800 cursor-default"
      >
        <PhDotsThreeVertical
          size="24"
          weight="bold"
        />
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
    class="z-[100]"
    :append-to="contextButtonRef"
    v-model:open="open"
    :options="{
      placement: 'bottom-end',
    }"
  >
    <slot name="options" />
  </RobustPopper>
</template>
