<template>
  <div>
    {{ locked }}
    <section ref="gridContainer" class="grid-stack bg-gray-200">
      <GridItem
        v-for="widget in widgets"
        :key="widget.id"
        :widget="widget"
        :locked="locked"
      />
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
} from 'vue'
import { GridStack } from 'gridstack'
import 'gridstack/dist/h5/gridstack-dd-native'
import GridItem from './GridItem.vue'
import { Widget } from './GridItem.vue'

export default defineComponent({
  name: 'RobustGrid',

  components: {
    GridItem,
  },
  props: {
    widgets: {
      type: Array as PropType<Array<Widget>>,
    },
    locked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    let { widgets } = toRefs(props)

    let grid: GridStack | undefined = undefined

    let gridContainer = ref()

    onMounted(() => {
      console.log('mounting')

      grid = GridStack.init(
        {
          cellHeight: 256,
          column: 8,
          acceptWidgets: true,
          // animate: false,
        },
        gridContainer.value
      )

      grid.on('change', (event, nodes) => {
        if (!widgets.value) {
          return
        }

        let tmpWidgets = [...widgets.value]

        if (Array.isArray(nodes)) {
          widgets.value.forEach((widget) => {
            let node = nodes.find((item) => item.id === widget.id)
            if (node) {
              widget.gridstack = {
                ...widget.gridstack,
                x: node.x,
                y: node.y,
                w: node.w,
                h: node.h,
              }
            }
          })
        }

        emit('update:widgets', widgets)
      })
    })

    return {
      gridContainer,
    }
  },
})
</script>

<style lang="postcss" scoped>
.grid-stack {
  position: relative;
}
.grid-stack.grid-stack-rtl {
  direction: ltr;
}
.grid-stack .grid-stack-placeholder > .placeholder-content {
  @apply bg-indigo-500/10;
  margin: 0;
  position: absolute;
  width: auto;
  z-index: 0 !important;
  text-align: center;
}
</style>
