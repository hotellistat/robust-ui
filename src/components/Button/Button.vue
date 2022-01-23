<template>
  <component
    :is="tag"
    :disabled="disabled"
    class="
      flex
      items-center
      justify-center
      truncate
      transition-color
      duration-75
      focus:ring
      ring-opacity-50
      font-medium
    "
    :class="[
      disabled
        ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-400'
        : variantStyles,
      condensed ? 'h-8 px-3' : 'h-10 px-4',
      rounded ? 'rounded-full' : 'rounded-md',
    ]"
  >
    <div
      class="transition-all duration-150 flex items-center select-none"
      :class="[loading ? 'opacity-0' : 'opacity-1']"
    >
      <div class="mr-2" v-if="$slots.prefix">
        <slot tag="div" name="prefix" />
      </div>
      <div class="whitespace-no-wrap truncate">
        <slot />
      </div>
      <div class="ml-2" v-if="$slots.suffix">
        <slot tag="div" name="suffix" />
      </div>
    </div>
    <spinner v-if="loading" size="20px" class="absolute spinner" />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
import Spinner from '../Spinner/Spinner.vue'
import variants from './variants'

export default defineComponent({
  components: {
    Spinner,
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

    console.log(variants)

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
