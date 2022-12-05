import Slider from './index.vue'
import { ref } from 'vue'

export default {
  title: 'Ui/Slider',
  component: Slider,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: `<Slider v-bind="args" v-model="value" class="w-64" />`,
  components: { Slider },
  setup() {
    const value = ref(500)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  min: 0,
  max: 5000,
  step: 100,
}
