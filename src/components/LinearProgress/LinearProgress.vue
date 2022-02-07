<template>
  <div
    class="wrapper relative min-w-16 rounded-full bg-gray-200"
    :style="[heightComputed]"
  >
    <div
      class="progress bg-primary h-full rounded-full bg-primary-500"
      :style="[widthComputed]"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: "LinearProgress",
  props: {
    height: {
      type: Number,
      default: 8,
    },
    progress: {
      type: Number,
      default: 50,
    },
  },

  setup(props) {
    const { height, progress } = toRefs(props)

    const heightComputed = computed(() => {
      return `height:${height.value}px`
    })

    const widthComputed = computed(() => {
      return `width:clamp(${height.value}px, ${progress.value}%, 100%);`
    })

    return {
      heightComputed,
      widthComputed,
    }
  },
})
</script>
