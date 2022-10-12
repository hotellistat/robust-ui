<template>
  <div>
    <ul class="colors">
      <li
        v-for="item in colorsDefault"
        :key="item as string"
        class="item"
        @click="selectColor(item)"
      >
        <div :style="{ background: `url(${imgAlphaBase64})` }" class="alpha" />
        <div :style="{ background: item as string }" class="color" />
      </li>
    </ul>
    <ul v-if="colorsHistory.length" class="colors history">
      <li
        v-for="item in colorsHistory"
        :key="item as string"
        class="item"
        @click="selectColor(item)"
      >
        <div :style="{ background: `url(${imgAlphaBase64})` }" class="alpha" />
        <div :style="{ background: item as string }" class="color" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, PropType, ref } from 'vue'
import { createAlphaSquare } from './composable'

const props = defineProps({
  color: {
    type: String,
    default: '#000000',
  },
  colorsDefault: {
    type: Array as PropType<string[]>,
    required: true,
  },
  colorsHistoryKey: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['selectColor'])

const color = ref()
const colorsHistory = ref<string[]>([])
const imgAlphaBase64 = ref()
if (props.colorsHistoryKey && localStorage) {
  colorsHistory.value =
    JSON.parse(localStorage.getItem(props.colorsHistoryKey)) || []
}

imgAlphaBase64.value = createAlphaSquare(4).toDataURL()

onUnmounted(() => {
  setColorsHistory(color.value)
})

const setColorsHistory = (color) => {
  if (!color) {
    return
  }
  const colors = colorsHistory.value || []
  const index = colors.indexOf(color)
  if (index >= 0) {
    colors.splice(index, 1)
  }
  if (colors.length >= 8) {
    colors.length = 7
  }
  colors.unshift(color)
  colorsHistory.value = colors || []
  if (localStorage && props.colorsHistoryKey) {
    localStorage.setItem(props.colorsHistoryKey, JSON.stringify(colors))
  }
}
const selectColor = (color) => {
  emit('selectColor', color)
}
</script>

<style>
.colors {
  padding: 0;
  margin: 0;
}

.colors .item {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 10px 0 0 10px;
  border-radius: 3px;
  box-sizing: border-box;
  vertical-align: top;
  display: inline-block;
  transition: all 0.1s;
  cursor: pointer;
}

.colors .item:hover {
  transform: scale(1.4);
}

.colors .alpha {
  height: 100%;
  border-radius: 4px;
}
.colors .color {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

.colors.history {
  margin-top: 10px;
  border-top: 1px solid #2e333a;
}
</style>
