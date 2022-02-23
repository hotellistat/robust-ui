<template>
  <div
    class="flex px-4 py-2 text-center whitespace-nowrap text-sm font-medium"
    :class="isInlineEditMode ? 'h-12 sm:h-auto' : 'h-10 sm:h-auto'"
    @click="$emit('click')"
  >
    <div v-if="isInlineEditMode" class="flex w-full">
      <slot name="leftIcon"></slot>
      <input
        v-if="type === 'text' || type === 'number'"
        type="{{type}}"
        v-model="cell"
        class="bg-transparent truncate"
      />

      <input
        v-if="type === 'checkbox'"
        type="checkbox"
        class="bg-transparent truncate"
        v-model="cell"
      />
      <DatePicker
        v-if="type === 'date'"
        class="p-2 col-span-2 sm:col-span-1"
        :modelValue="new Date(cell)"
        @update:modelValue="(v) => cell = v"
      />

      <Select
        v-if="type === 'enum'"
        class="bg-transparent truncate rounded"
        v-model="cell"
        :options="options"
      />
    </div>
    <div
      v-if="!isInlineEditMode"
      class="flex items-center class w-full truncate"
    >
      <span>{{ cell }}</span>
    </div>
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
import DatePicker from '../../DatePicker/DatePicker.vue';
import Select from '../../Select/Select.vue';
export default {
  components: { DatePicker, Select },
  props: {
    modelValue: {
      type: [String, Number]
    },
    type: {
      type: String
    },
    options: {
      type: Array
    },
    isInlineEditMode: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const cell = computed({
      get: () => modelValue.value,
      set: (value) => {
        emit("update:modelValue", value);
        emit("change");
      }
    });

    return {
      cell
    };
  }
};
</script>
