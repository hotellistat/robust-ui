<template>
  <RobustSeparator v-bind="option?.attributes">
    {{ option?.title }}
  </RobustSeparator>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SchemaSeparatorOption } from '../FormRenderer';
import RobustSeparator from '../../Separator/index.vue';

defineProps({
  option: {
    type: Object as PropType<SchemaSeparatorOption>,
    default: undefined,
  },
});
</script>
