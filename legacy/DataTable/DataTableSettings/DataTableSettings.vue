<template>
  <div
    v-if="!config.hideKeys || config.hideKeys !== true"
    ref="containerRef"
    class="relative inline-block"
  >
    <div
      class="shadow-outline flex flex h-8 overflow-hidden rounded bg-gray-200 focus-within:outline-none focus-within:ring dark:bg-gray-700"
      @click="toggleDropdown"
    >
      <div
        class="flex h-full w-full items-center bg-transparent text-current outline-none"
        :class="[$slots.prefix || 'pl-2']"
      >
        <div
          class="min-w-0 select-none truncate text-gray-700 dark:text-gray-50"
        >
          Columns
        </div>
      </div>

      <div
        class="flex h-full flex-shrink-0 items-center pr-2 pl-2 text-gray-400"
      >
        <PhCaretDown
          type="chevron-down"
          :size="18"
          class="transition-transform duration-200"
          :class="{ 'rotate-180 transform': isOpen }"
        />
      </div>
    </div>

    <ul
      v-if="isOpen"
      class="absolute right-0 z-50 rounded-lg bg-white py-4 text-gray-700 shadow-2xl dark:bg-gray-700 dark:text-gray-50"
    >
      <li
        v-for="column in columns"
        :key="column.key"
        class="flex w-32 items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        @click="selectItem(column.key)"
      >
        <PhCheck
          class="mr-1 text-gray-400"
          :class="column.hidden ? 'opacity-0' : ''"
          size="18"
        />
        <span class="text-[0.9rem]">{{ column.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { PhCheck, PhCaretDown } from '@dnlsndr/vue-phosphor-icons'

export default {
  components: { PhCheck, PhCaretDown },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    config: Object,
  },
  emits: ['toggleColumn'],
  setup(props, { emit }) {
    const isOpen = ref()
    const containerRef = ref(null)

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    const outSideClickHandler = (e) => {
      if (isOpen.value && !containerRef.value.contains(e.target)) {
        isOpen.value = false
      }
    }

    const selectItem = (key) => {
      emit('toggleColumn', key)
    }

    onMounted(() => {
      document.addEventListener('click', outSideClickHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', outSideClickHandler)
    })

    return {
      isOpen,
      toggleDropdown,
      containerRef,
      selectItem,
    }
  },
}
</script>
