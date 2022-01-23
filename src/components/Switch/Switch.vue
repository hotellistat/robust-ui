<template>
  <label class="cursor-pointer flex items-center gap-x-3">
    <input class="hidden" type="checkbox" v-model="isChecked" />
    <div
      class="
        rounded-2xl
        w-8
        h-4
        relative
        border-4
        box-content
        shadow-md
        transition-colors
        duration-250
      "
      :class="
        isChecked
          ? 'bg-primary-500 border-primary-500'
          : 'bg-gray-400 border-gray-400'
      "
    >
      <div
        class="
          absolute
          top-0
          left-0
          bg-white
          w-4
          h-4
          rounded-full
          transition
          duration-250
          ease-in-out
        "
        :class="[isChecked ? 'translate-x-4' : '']"
      ></div>
    </div>
    <div v-if="title">
      <div>
        {{ title }}
      </div>
      <div class="text-sm text-gray-400">
        {{ description }}
      </div>
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'

export default defineComponent({
  name: 'BaseSwitch',
  props: {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [Boolean, Number, String, Object],
      required: true,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const isChecked = computed({
      get: () => modelValue.value,
      set: (value) => {
        emit('update:modelValue', value)
      },
    })

    return {
      isChecked,
    }
  },
})
</script>
