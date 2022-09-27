<template>
  <div v-if="!config.hideKeys || config.hideKeys !== true"
    class="inline-block relative" ref="containerRef">
    <div
      class="flex bg-gray-200 dark:bg-gray-700  rounded overflow-hidden flex focus-within:outline-none focus-within:ring shadow-outline h-8"
      @click="toggleDropdown">
      <div
        class="bg-transparent w-full h-full text-current outline-none flex items-center"
        :class="[$slots.prefix || 'pl-2']">
        <div
          class="truncate min-w-0 select-none text-gray-700 dark:text-gray-50">
          Columns</div>
      </div>

      <div class="h-full flex-shrink-0 flex items-center pr-2 text-gray-400"
        :class="['pl-2']">
        <ph-caret-down type="chevron-down" :size="18"
          class="transition-transform duration-200"
          :class="{ 'transform rotate-180': isOpen }" />
      </div>
    </div>

    <ul v-if="isOpen"
      class="absolute right-0 z-50 bg-white dark:bg-gray-700 shadow-2xl rounded-lg py-4 text-gray-700 dark:text-gray-50">
      <li v-for="column in columns" @click="selectItem(column.key)"
        class="px-4 py-2 w-32  dark:hover:bg-gray-600 hover:bg-gray-100 transition-colors duration-200 flex items-center"
        :key="column.key">
        <ph-check class="text-gray-400 mr-1"
          :class="column.hidden ? 'opacity-0' : ''" size="18" />
        <span class="text-[0.9rem]">{{ column.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, toRefs, watch, watchEffect } from "vue";
import { PhCheck, PhCaretDown } from "@dnlsndr/vue-phosphor-icons";

export default {
  components: { PhCheck, PhCaretDown },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    config: Object,
  },
  emits: ["toggleColumn"],
  setup(props, { emit }) {
    const isOpen = ref();
    const containerRef = ref(null);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const outSideClickHandler = (e) => {
      if (isOpen.value && !containerRef.value.contains(e.target)) {
        isOpen.value = false;
      }
    };

    const selectItem = (key) => {
      emit("toggleColumn", key);
    };

    onMounted(() => {
      document.addEventListener("click", outSideClickHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("click", outSideClickHandler);
    });

    return {
      isOpen,
      toggleDropdown,
      containerRef,
      selectItem
    };
  }
};
</script>
