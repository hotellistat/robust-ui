<template>
  <div>
    <label
      :for="'input_' + cuid"
      v-if="title"
      class="
        select-none
        block
        font-medium
        text-gray-500
        dark:text-gray-400
        mb-1
        text-sm
      "
      >{{ title }}</label
    >
    <div
      v-bind="attrs"
      ref="wrapperRef"
      class="
        bg-gray-50
        dark:bg-gray-900
        rounded-md
        overflow-hidden
        border border-gray-200
        dark:border-gray-700
        flex
        min-w-52
      "
      :class="[
        condensed ? 'h-8' : 'h-10',
        {
          'focus-within:outline-none focus-within:border-primary-500 focus-within:ring ring-opacity-30 ring-primary-500':
            !readonly,
        },
      ]"
    >
      <slot v-bind="props" :wrapperRef="wrapperRef" />
    </div>
    <transition-group name="fade">
      <div class="pt-1" v-if="hint || error">
        <div class="select-none text-xs text-gray-400" v-if="hint">
          {{ hint }}
        </div>
        <div
          class="select-none text-xs text-red-400 dark:text-red-400"
          v-if="error"
        >
          {{ error }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    title: String,
    hint: String,
    error: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const cuid = "_" + Math.random().toString(36).substr(2, 9);

    const wrapperRef = ref();

    return {
      props,
      wrapperRef,
      attrs,
      cuid,
    };
  },
});
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-in-out;
  overflow: hidden;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  padding-top: theme("spacing.1");
}
.fade-enter-from,
.fade-leave-to {
  padding-top: 0;
  opacity: 0;
  line-height: 0;
}
</style>
