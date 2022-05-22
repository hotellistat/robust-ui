<template>
  <component :is="(tag as any)" :disabled="disabled"
    class="flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring cursor-default"
    :class="[
      disabled
        ? 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-400'
        : variantStyles,
      condensed ? 'h-8 px-3' : 'h-10 px-4',
      rounded ? 'rounded-full' : 'rounded-md',
    ]">
    <div class="flex select-none items-center"
      :class="[loading ? 'opacity-0' : 'opacity-1']">
      <div v-if="$slots.prefix" class="mr-2">
        <slot tag="div" name="prefix" />
      </div>
      <div class="whitespace-no-wrap truncate">
        <slot />
      </div>
      <div v-if="$slots.suffix" class="ml-2">
        <slot tag="div" name="suffix" />
      </div>
    </div>
    <RobustSpinner v-if="loading" :size="20" :stroke="2"
      class="spinner absolute" />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
import RobustSpinner from '../Spinner/Spinner.vue'
import variants from './variants'

export default defineComponent({
  name: 'RobustButton',
  components: {
    RobustSpinner,
  },
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    condensed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const displaySpinner = ref(false)

    const { loading, variant } = toRefs(props)

    const variantStyles = computed<string>(() => {
      return variants[variant.value]
    })

    return {
      variantStyles,
      loading,
      displaySpinner,
    }
  },
})
</script>
