<template>
  <div
    ref="saturation"
    class="saturation"
    @mousedown.prevent.stop="selectSaturation"
  >
    <canvas ref="canvasSaturation"></canvas>
    <div :style="slideSaturationStyle" class="slide" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs } from 'vue';
import { createLinearGradient } from './composable';

const props = defineProps({
  color: {
    type: String,
    default: '#000000',
  },
  hsv: {
    type: Object,
    default: null,
  },
  size: {
    type: Number,
    default: 152,
  },
});

const emit = defineEmits(['selectSaturation']);

const slideSaturationStyle = ref({});
const { size, hsv, color } = toRefs(props);
const saturation = ref();
const canvasSaturation = ref();

const renderColor = (canvasElement: any) => {
  const canvas = canvasElement;
  const sized = size.value;
  const ctx = canvas.getContext('2d');
  canvas.width = sized;
  canvas.height = sized;

  ctx.fillStyle = color.value;
  ctx.fillRect(0, 0, sized, sized);

  createLinearGradient(
    'l',
    ctx,
    sized,
    sized,
    '#FFFFFF',
    'rgba(255,255,255,0)'
  );
  createLinearGradient('p', ctx, sized, sized, 'rgba(0,0,0,0)', '#000000');
};

const renderSlide = () => {
  slideSaturationStyle.value = {
    left: hsv.value.s * size.value - 5 + 'px',
    top: (1 - hsv.value.v) * size.value - 5 + 'px',
  };
};

const selectSaturation = (e: any) => {
  const { top: saturationTop, left: saturationLeft } =
    saturation.value.getBoundingClientRect();
  const ctx = e.target.getContext('2d');

  const mousemove = (e: any) => {
    let x = e.clientX - saturationLeft;
    let y = e.clientY - saturationTop;

    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    if (x > size.value) {
      x = size.value;
    }
    if (y > size.value) {
      y = size.value;
    }

    // Do not modify the dom by monitoring data changes, otherwise when the color is #ffffff, the slide will go to the lower left corner
    slideSaturationStyle.value = {
      left: x - 5 + 'px',
      top: y - 5 + 'px',
    };
    // If you use the maximum value, the selected pixel will be empty, and the empty default is black
    const imgData = ctx.getImageData(
      Math.min(x, size.value - 1),
      Math.min(y, size.value - 1),
      1,
      1
    );
    const [r, g, b] = imgData.data;
    emit('selectSaturation', { r, g, b });
  };

  mousemove(e);

  const mouseup = () => {
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };

  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
};

onMounted(() => {
  renderColor(canvasSaturation.value);
  renderSlide();
});
</script>

<style>
.saturation {
  position: relative;
  cursor: pointer;
}

.saturation .slide {
  position: absolute;
  left: 100px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
</style>
