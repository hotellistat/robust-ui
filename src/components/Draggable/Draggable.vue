<template>
  <div v-draggable="{ value: list }">
    <div v-for="item of list" :key="item">
      <slot name="element" :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, toRefs } from 'vue'
import draggable from './directive'

export default defineComponent({
  name: "Draggable",
  directives: {
    draggable,
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const list = computed({
      get: () => modelValue.value,
      set: (value: any) => {
        emit('update:modelValue', value)
      },
    })

    nextTick(() => {
      console.log('alo')
    })

    return {
      list,
    }
  },
})
</script>
