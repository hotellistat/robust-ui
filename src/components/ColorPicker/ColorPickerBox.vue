<template>
  <div class="color-type">
    <span class="name">
      {{ name }}
    </span>
    <input v-model="modelColor" class="value" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['inputColor']);

const modelColor = computed({
  get() {
    return props.color || '';
  },
  set(val) {
    emit('inputColor', val);
  },
});
</script>

<style>
.color-type {
  display: flex;
  margin-top: 8px;
  font-size: 12px;
}

.color-type .name {
  width: 60px;
  height: 30px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgb(21 183 124);
}

.color-type .value {
  flex: 1;
  height: 30px;
  min-width: 100px;
  padding: 0 12px;
  border: 0;
  color: #fff;
  background: rgb(100 133 255);
  box-sizing: border-box;
}
</style>
