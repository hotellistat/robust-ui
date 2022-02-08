<template>
  <div
    ref="root"
    class="relative flex select-none justify-start overflow-x-auto"
  >
    <div
      v-for="tab in tabs"
      :key="(tab.value as any)"
      :ref="registerTab"
      :data-value="tab.value"
      class="whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium"
      :class="[
        tab.value === modelValue
          ? 'border-primary-500'
          : 'text-gray-400 dark:border-gray-600 dark:text-gray-500',
      ]"
    >
      <slot name="tab" :tab="tab" :select="() => select(tab.value)">
        <div class="px-4 py-3" @click="() => select(tab.value)">{{ tab.title }}</div>
      </slot>
    </div>

    <div class="flex-1 border-b-2 dark:border-gray-600"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'

interface Tab {
  title: string
  value: string
}

export default defineComponent({

  props: {
    tabs: {
      type: Array as PropType<Tab[]>,
      required: true,
    },
    modelValue: {
      required: true,
    },
  },

  setup(props, { emit }) {
    const root = ref<HTMLElement>()

    const tabsRefs = ref<HTMLElement[]>([])

    const registerTab = (el: HTMLElement) => {
      tabsRefs.value?.push(el)
    }

    onMounted(() => {
      const activeTab = tabsRefs.value.find(
        (item) => item.dataset.value === props.modelValue
      )
      // console.log(activeTab);
      if (activeTab) {
        console.log(activeTab)

        activeTab.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        })
      }
    })

    const select = (value: string) => {
      emit('update:modelValue', value)
    }

    return {
      select,
      root,
      registerTab,
    }
  },
})
</script>
