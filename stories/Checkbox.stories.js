import { computed } from '@vue/runtime-core'
import Checkbox from '@/components/Checkbox/Checkbox.vue'

export default {
  title: 'Ui/Checkbox',
  component: Checkbox,
  argTypes: {
    modelValue: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<Checkbox v-bind="computedArgs" v-model="args.modelValue"></Checkbox>',
  components: { Checkbox },
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
    '<Checkbox v-bind="argsWithoutTitle"><template v-slot:title>{{args.title}}</template></Checkbox>',
  components: { Checkbox },
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
