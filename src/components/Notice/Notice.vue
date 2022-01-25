<template>
  <div :class="computedClass" class="mb-4 border-l-4 p-4">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import variants from './variants'

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<'info' | 'warning' | 'error' | 'success'>,
      default: 'info',
    },
  },

  setup(props) {
    const computedClass = computed(() => {
      return variants[props.variant]
    })

    return {
      computedClass,
    }
  },
})
</script>
