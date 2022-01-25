<template>
  <div
    class="grid grid-cols-3 place-items-center gap-x-3 gap-y-3 p-4 sm:grid-cols-6"
  >
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="flex cursor-pointer flex-col items-center gap-y-1"
    >
      <div
        class="h-8 w-16 rounded-md"
        :style="{ background: color }"
        @click="selectedColor(color)"
      ></div>
      <div class="hidden sm:block">{{ color }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    colors: {
      type: Array as PropType<string[]>,
      default: [
        '#FCA5A5',
        '#EF4444',
        '#FDBA74',
        '#F97316',
        '#FCD34D',
        '#F59E0B',
        '#FDE047',
        '#EAB308',
        '#BEF264',
        '#84CC16',
        '#86EFAC',
        '#22C55E',
        '#6EE7B7',
        '#10B981',
        '#5EEAD4',
        '#14B8A6',
        '#67E8F9',
        '#06B6D4',
        '#7DD3FC',
        '#0EA5E9',
        '#93C5FD',
        '#3B82F6',
        '#A5B4FC',
        '#6366F1',
        '#C4B5FD',
        '#8B5CF6',
        '#D8B4FE',
        '#A855F7',
        '#F0ABFC',
        '#D946EF',
        '#F9A8D4',
        '#EC4899',
        '#FDA4AF',
        '#F43F5E',
      ],
    },
  },
  setup(props, { emit }) {
    const selectedColor = (color: string) => {
      emit('change', color)
    }

    return {
      selectedColor,
    }
  },
})
</script>

<style></style>
