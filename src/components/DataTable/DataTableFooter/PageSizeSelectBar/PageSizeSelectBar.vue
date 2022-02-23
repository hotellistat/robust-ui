<template>
  <div>
    <div class="flex flex-col ml-2 h-full" ref="containerRef">
      <div
        class="flex relative items-center p-1.5 h-full cursor-pointer border border-gray-700 rounded-md overflow-hidden shadow-inner flex focus-within:outline-none focus-within:ring shadow-outline h-8"
        @click="toggleDropdown"
      >
        <div
          class="bg-transparent w-full h-full text-current outline-none flex items-center"
          :class="[$slots.prefix || 'pl-2']"
        >
          <div class="truncate min-w-0 select-none">{{ pageSize }}</div>
        </div>

        <div
          class="h-full flex-shrink-0 flex items-center pr-2 text-gray-400"
          :class="['pl-2']"
        >
          <ph-caret-down
            :size="18"
            class="transition-transform duration-200"
            :class="{ 'transform rotate-180': isOpen }"
          />
        </div>
      </div>

      <ul
        v-if="isOpen"
        class="absolute top-[60px] ml-0.5 z-50 bg-gray-700 shadow-2xl rounded-lg py-2"
      >
        <li
          v-for="size in [10, 25, 50]"
          class="px-4 py-1.5 cursor-pointer hover:bg-gray-600 transition-colors duration-200 flex justify-center items-center"
          :key="size"
          :class="pageSize === size ? 'bg-gray-400' : ''"
          @click="selectItem(size)"
        >
          <span>{{ size }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { inject, onMounted, onUnmounted, ref } from "vue";
import { StateSymbol, UpdateSymbol } from "../../ProvideDataTableSettings";
import { PhCaretDown } from "@dnlsndr/vue-phosphor-icons";

export default {
  components: { PhCaretDown },
  setup() {
    const isOpen = ref();
    const containerRef = ref(null);
    const { pageSize } = inject(StateSymbol);

    const updateSettings = inject(UpdateSymbol);
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectItem = (value) => {
      if (value !== pageSize.value) {
        pageSize.value = value;
        isOpen.value = false;
        updateSettings("pageSize", value);
      }
    };

    const outSideClickHandler = (e) => {
      if (isOpen.value && !containerRef.value.contains(e.target)) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", outSideClickHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("click", outSideClickHandler);
    });

    return {
      isOpen,
      containerRef,
      pageSize,
      toggleDropdown,
      selectItem
    };
  }
};
</script>
