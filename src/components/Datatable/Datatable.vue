<template>
  <div class="flex flex-col">
    <div class="flex gap-x-2">
      <div
        class="flex-1"
        v-for="column in options.columns"
        :class="column.class ?? ''"
      >
        <div>{{ column.name }}</div>
      </div>
    </div>
    <Separator />
    <div v-for="entry in data">
      <div class="flex gap-x-2">
        <div
          class="flex-1"
          v-for="column in options.columns"
          :class="column.class ?? ''"
        >
          <div>{{ entry[column.key] }}</div>
        </div>
      </div>
      <Separator />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue'
import Separator from '../Separator/Separator.vue'

type Column = {
  name: string
  key: string
  class?: string
}

type DataTableOptions = {
  columns: Column[]
  serverSide?: boolean
}

const defaultOptions: Partial<DataTableOptions> = {
  serverSide: false,
}

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  options: {
    type: Object as PropType<DataTableOptions>,
    required: true,
  },
})

const { options } = toRefs(props)
</script>
