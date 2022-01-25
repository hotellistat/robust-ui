<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
    :class="{ 'pl-1': stripe }"
  >
    <div
      v-show="stripe"
      class="absolute top-0 left-0 bottom-0 w-1"
      :class="stripeClass"
    ></div>
    <div
      v-if="title || $slots.title"
      class="relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"
    >
      <slot name="title" :title="title" v-if="$slots.title" />
      <template v-else>
        {{ title }}
      </template>
      <button
        v-if="$slots.options"
        ref="dotsRef"
        @click="open = !open"
        class="ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"
      >
        <ph-dots-three-vertical size="24" weight="bold" />
      </button>
    </div>

    <base-popper
      class="z-[100]"
      :append-to="dotsRef"
      v-click-outside="{ handler: closeDropdown, active: open }"
      v-model:open="open"
      :options="{
        placement: 'bottom-start',
      }"
    >
      <slot name="options" />
    </base-popper>

    <section
      v-if="$slots.default"
      class="h-full w-full px-4 pb-3"
      :class="{ 'pt-3': !(title || $slots.title) }"
    >
      <slot />
    </section>

    <slot name="raw" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const open = ref(false)
    const dotsRef = ref()

    const closeDropdown = () => {
      if (open.value === true) {
        open.value = false
        emit('blur')
      }
    }

    return {
      dotsRef,
      open,
      closeDropdown,
    }
  },
  props: {
    title: {
      type: String,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    stripeClass: {
      type: String,
      default: 'bg-primary-500',
    },
  },
})
</script>
