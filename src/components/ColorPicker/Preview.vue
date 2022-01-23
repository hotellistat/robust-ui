<template>
  <canvas ref="canvas" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watchEffect } from 'vue'
import { createAlphaSquare } from './composable'

export default defineComponent({
  props: {
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
  },
  setup(props) {
    const alphaSize = ref(5)
    const { color, width, height } = toRefs(props)
    const canvas = ref()

    const renderColor = (canvas_element: any) => {
      const canvas_render = canvas_element
      const width_render = width.value
      const height_render = height.value
      const size = alphaSize.value
      const canvasSquare = createAlphaSquare(size)

      const ctx = canvas_render.getContext('2d')
      canvas_render.width = width_render
      canvas_render.height = height_render

      ctx.fillStyle = ctx.createPattern(canvasSquare, 'repeat')
      ctx.fillRect(0, 0, width_render, height_render)

      ctx.fillStyle = color.value
      ctx.fillRect(0, 0, width_render, height_render)
    }

    onMounted(() => {
      watchEffect(() => {
        renderColor(canvas.value)
      })
      renderColor(canvas.value)
    })

    return {
      alphaSize,
      color,
      width,
      height,
      canvas,
    }
  },
})
</script>
