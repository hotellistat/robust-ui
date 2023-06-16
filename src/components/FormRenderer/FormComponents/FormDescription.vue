<template>
  <p v-bind="option.attributes" v-html="option.content"></p>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SchemaDescriptionOption } from '../FormRenderer';

defineProps({
  option: {
    type: Object as PropType<SchemaDescriptionOption>,
    required: true,
  },
});
</script>
