<template>
  <div
    ref="root"
    class="relative flex select-none justify-start overflow-x-auto"
  >
    <div
      v-for="tab in tabs"
      :key="(tab.value as any)"
      :ref="registerTab"
      :data-value="tab.value"
      class="whitespace-no-wrap flex-shrink-0 border-b-2 font-medium"
      :class="[
        tab.value === modelValue
          ? 'border-primary-500'
          : 'text-gray-400 dark:border-gray-700 dark:text-gray-500',
      ]"
    >
      <slot name="tab" :tab="tab" :select="() => select(tab.value)">
        <div class="px-4 py-3" @click="() => select(tab.value)">
          {{ tab.title }}
        </div>
      </slot>
    </div>

    <div class="flex-1 border-b-2 dark:border-gray-700"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue';
export interface Tab {
  title: string;
  value: string;
}

const props = defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const root = ref<HTMLElement>();

const tabsRefs = ref<HTMLElement[]>([]);

const registerTab = (el: HTMLElement) => {
  tabsRefs.value?.push(el);
};

onMounted(() => {
  const activeTab = tabsRefs.value.find(
    (item) => item.dataset.value === props.modelValue
  );
  // console.log(activeTab);
  if (activeTab) {
    console.log(activeTab);

    activeTab.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
});

const select = (value: string) => {
  emit('update:modelValue', value);
};
</script>
