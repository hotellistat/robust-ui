import { computed, ref } from 'vue'
import Popper from './Popper.vue'
import { RobustButton } from '..'

export default {
  title: 'Ui/Popper',
  component: Popper,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: `
  <div style="height: 400px">
    <Popper v-bind="args" v-model:open="value" appendTo="btn">
      <template #pop>
        <div>Popcorn</div>
        <div>sizes</div>
        <div>&amp; Price</div>
        <div>XXS: $1.99</div>
        <div>XS: $2.99</div>
        <div>S: $3.99</div>
        <div>M: $4.99</div>
        <div>L: $5.99</div>
        <div>XL: $6.99</div>
        <div>XXL: $7.99</div>
      </template>
      <template #root>
        <RobustButton>show me!</RobustButton>
      </template>
    </Popper>
  </div>`,
  components: { Popper, RobustButton },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})
export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Popper title',
  description: 'Popper description text to be placed here',
  gpu: true,
}
