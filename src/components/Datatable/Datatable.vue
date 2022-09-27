<template>
  <div class="flex flex-col gap-y-2 sm:gap-y-0">
    <div class="datatable-grid-columns hidden gap-x-2 p-2 sm:grid">
      <div v-for="column in options.columns" :class="column.class ?? ''">
        <div>{{ column.name }}</div>
      </div>
    </div>

    <Separator class="hidden sm:block" />

    <!-- Rows -->
    <div v-for="entry in data" ref="rows">
      <!-- set height to maxHeight -->
      <div
        class="p-2"
        :class="`datatable-grid-columns flex flex-col gap-x-2 sm:grid`"
      >
        <!-- Columns -->
        <div
          class="grid grid-cols-2 sm:flex"
          v-for="column in options.columns"
          :class="column.class ?? ''"
        >
          <div class="block sm:hidden">{{ column.name }}</div>
          <div>{{ entry[column.key] }}</div>
        </div>
      </div>
      <Separator />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { onMounted, PropType, ref, toRefs } from 'vue'
import Separator from '../Separator/Separator.vue'

type Column = {
  name: string
  key: string
  class?: string
  size?: string
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
const rows = ref()
const maxHeight = ref(0)

const sizes = computed(() => {
  const colsSizeArray = options.value.columns.map((col) =>
    col.size !== undefined ? `minmax(0, ${col.size})` : 'minmax(0, 1fr)'
  )
  return colsSizeArray.join(' ')
})

const getHeighestRow = () => {
  rows.value.forEach((el) => {
    const h = el.clientHeight
    maxHeight.value = Math.max(h, maxHeight.value)
  })
  console.log(maxHeight.value)
}

onMounted(() => {
  getHeighestRow()
})
</script>

<style>
/* :class="`grid-cols-[repeat(${options.columns.length},minmax(0,1fr))]`" */
.datatable-grid-columns {
  grid-template-columns: v-bind('sizes');
}
</style>
