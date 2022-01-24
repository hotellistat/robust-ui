<template>
  <div ref="hue" class="hue" @mousedown.prevent.stop="selectHue">
    <canvas ref="canvasHue" />
    <div :style="slideHueStyle" class="slide" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watchEffect } from 'vue'

export default defineComponent({
  props: {
    hsv: {
      type: Object,
      default: null,
    },
    width: {
      type: Number,
      default: 15,
    },
    height: {
      type: Number,
      default: 152,
    },
  },
  setup(props, { emit }) {
    const slideHueStyle = ref({})
    const canvasHue = ref()
    const { height, width, hsv } = toRefs(props)
    const hue = ref()

    const renderColor = (canvas_element: any) => {
      const canvas: any = canvas_element
      const width_render = width.value
      const height_render = height.value
      const ctx = canvas.getContext('2d')
      canvas.width = width_render
      canvas.height = height_render

      const gradient = ctx.createLinearGradient(0, 0, 0, height_render)
      gradient.addColorStop(0, '#FF0000') // red
      gradient.addColorStop(0.17 * 1, '#FF00FF') // purple
      gradient.addColorStop(0.17 * 2, '#0000FF') // blue
      gradient.addColorStop(0.17 * 3, '#00FFFF') // green
      gradient.addColorStop(0.17 * 4, '#00FF00') // green
      gradient.addColorStop(0.17 * 5, '#FFFF00') // yellow
      gradient.addColorStop(1, '#FF0000') // red
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width_render, height_render)
    }

    const renderSlide = () => {
      slideHueStyle.value = {
        top: (1 - hsv.value.h / 360) * height.value - 2 + 'px',
      }
    }

    const selectHue = (e: any) => {
      const { top: hueTop } = hue.value.getBoundingClientRect()
      const ctx = e.target.getContext('2d')

      const mousemove = (e: any) => {
        let y = e.clientY - hueTop

        if (y < 0) {
          y = 0
        }
        if (y > height.value) {
          y = height.value
        }

        slideHueStyle.value = {
          top: y - 2 + 'px',
        }
        // If you use the maximum value, the selected pixel will be empty, and the empty default is black
        const imgData = ctx.getImageData(0, Math.min(y, height.value - 1), 1, 1)
        const [r, g, b] = imgData.data
        emit('selectHue', { r, g, b })
      }

      mousemove(e)

      const mouseup = () => {
        document.removeEventListener('mousemove', mousemove)
        document.removeEventListener('mouseup', mouseup)
      }

      document.addEventListener('mousemove', mousemove)
      document.addEventListener('mouseup', mouseup)
    }

    onMounted(() => {
      renderColor(canvasHue.value)
      renderSlide()
    })

    return {
      slideHueStyle,
      hue,
      width,
      height,
      renderSlide,
      selectHue,
      renderColor,
      hsv,
      canvasHue,
    }
  },
})
</script>

<style>
.hue {
  position: relative;
  margin-left: 8px;
  cursor: pointer;
}
.hue .slide {
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 4px;
  background: #fff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
</style>
