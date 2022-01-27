import { computed } from '@vue/runtime-core'
import BaseCheckbox from '@/components/Checkbox/Checkbox.vue'

export default {
  title: 'Ui/BaseCheckbox',
  component: BaseCheckbox,
  argTypes: {
    modelValue: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<base-checkbox v-bind="computedArgs" v-model="args.modelValue"></base-checkbox>',
  components: { BaseCheckbox },
  setup() {
    const computedArgs = computed(() => {
      const { modelValue, ...all } = args
      return all
    })
    return { computedArgs, args }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Checkbox title',
  modelValue: false,
}

const SlotTemplate = (args) => ({
  template:
    '<base-checkbox v-bind="argsWithoutTitle"><template v-slot:title>{{args.title}}</template></base-checkbox>',
  components: { BaseCheckbox },
  setup() {
    const argsWithoutTitle = computed(() => {
      const { title, ...all } = args
      return all
    })
    return { argsWithoutTitle, args }
  },
})

export const SlottedTitle = SlotTemplate.bind({})
SlottedTitle.args = {
  title: 'V-Slot Checkbox title',
  modelValue: false,
}
