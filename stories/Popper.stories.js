import { computed, ref } from 'vue'
import Popper from '@/components/Popper/Popper'

export default {
  title: 'Ui/Popper',
  component: Popper,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Popper v-bind="args" v-model="value"></Popper>',
  components: { Popper },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Popper title',
  description: 'Popper description text to be placed here',
}
