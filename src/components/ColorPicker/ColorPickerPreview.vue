<template>
  <canvas ref="canvas" />
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs, watchEffect } from 'vue';
import { createAlphaSquare } from './composable';

const props = defineProps({
  color: {
    type: String,
    default: '#000000',
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 30,
  },
});

const alphaSize = ref(5);
const { color, width, height } = toRefs(props);
const canvas = ref();

const renderColor = (canvasElement: any) => {
  const canvasRender = canvasElement;
  const widthRender = width.value;
  const heightRender = height.value;
  const size = alphaSize.value;
  const canvasSquare = createAlphaSquare(size);

  const ctx = canvasRender.getContext('2d');
  canvasRender.width = widthRender;
  canvasRender.height = heightRender;

  ctx.fillStyle = ctx.createPattern(canvasSquare, 'repeat');
  ctx.fillRect(0, 0, widthRender, heightRender);

  ctx.fillStyle = color.value;
  ctx.fillRect(0, 0, widthRender, heightRender);
};

onMounted(() => {
  watchEffect(() => {
    renderColor(canvas.value);
  });
  renderColor(canvas.value);
});
</script>
