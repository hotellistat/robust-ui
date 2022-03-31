<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: [String, Array, Object, Number],
    },
    identifier: {
      type: String,
    },
  },
  setup() {
    return {}
  },
})
</script>
