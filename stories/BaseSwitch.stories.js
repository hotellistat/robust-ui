import { computed, ref } from 'vue'
import BaseSwitch from '@/components/Switch/Switch.vue'

export default {
  title: 'Ui/BaseSwitch',
  component: BaseSwitch,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<base-switch v-bind="args" v-model="value"></base-switch>',
  components: { BaseSwitch },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Switch title',
  description: 'Switch description text to be placed here',
}
