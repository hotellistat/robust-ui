import { computed, ref } from 'vue'
import Radio from '@/components/Radio/Radio.vue'

export default {
  title: 'Ui/Radio',
  component: Radio,
  argTypes: {
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Radio v-bind="args" v-model="value"></Radio>',
  components: { Radio },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Radio title',
}
