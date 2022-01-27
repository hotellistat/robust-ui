import { computed, ref } from 'vue'
import BaseRadio from '@/components/Radio/Radio.vue';

export default {
  title: 'Ui/BaseRadio',
  component: BaseRadio,
  argTypes: {
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<base-radio v-bind="args" v-model="value"></base-radio>',
  components: { BaseRadio },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Radio title',
}
