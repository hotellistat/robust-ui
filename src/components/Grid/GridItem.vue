<template>
	<div class="grid-stack-item" v-bind="widgetAttributes">
		<div class="grid-stack-item-content bg-gray-300">
			{{ widget.id }}
			{{ widget.gridstack }}
			<component :is="widget.component" :options="widget.options" />
		</div>
	</div>
</template>

<script lang="ts">
import { GridStackNode, GridStackOptions, GridStackPosition } from "gridstack";
import { computed, DefineComponent, defineComponent, PropType, toRefs, } from "vue";

export interface Widget {
	id: number | string,
	component: DefineComponent,
	options: Record<string, unknown>,
	gridstack: GridStackNode
}

export default defineComponent({
	props: {
		widget: {
			type: Object as PropType<Widget>
		},
		locked: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { emit }) {

		const { widget } = toRefs(props)

		const widgetAttributes = computed(() => {
			return {
				"gs-id": widget.value?.id,
				"gs-x": widget.value?.gridstack.x,
				"gs-y": widget.value?.gridstack.y,
				"gs-w": widget.value?.gridstack.w,
				"gs-h": widget.value?.gridstack.h,
				"gs-no-move": props.locked,
				"gs-no-resize": props.locked
			}
		}
		)

		return {

			props,

			widgetAttributes
		}
	}
})
</script>
