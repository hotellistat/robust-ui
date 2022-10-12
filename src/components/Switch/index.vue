<template>
  <label class="flex items-center gap-x-3">
    <input v-model="isChecked" class="hidden" type="checkbox" />
    <div
      class="duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors"
      :class="
        isChecked
          ? 'border-primary-500 bg-primary-500'
          : 'border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500'
      "
    >
      <div
        class="duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out"
        :class="[isChecked ? 'translate-x-4' : '']"
      ></div>
    </div>
    <div v-if="title">
      <div>{{ title }}</div>
      <div class="text-sm text-gray-400">{{ description }}</div>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: [Boolean, Number, String, Object],
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'change', 'input'])

const { modelValue } = toRefs(props)
const isChecked: any = computed({
  get: () => modelValue.value,
  set: (value) => {
    emit('input', value)
    emit('change', value)
    emit('update:modelValue', value)
  },
})
</script>
