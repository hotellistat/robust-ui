import { computed, ref } from 'vue'
import Popper from './Popper'
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
    <RobustButton ref="btn" @click="open=!open">show me!</RobustButton>
    <Popper ref="popperRef"
      class="z-[100] origin-top-left"
      :append-to="btnref"
      v-model:open="open"
      :options="{
        placement: 'bottom-start',
      }"
      v-bind="args"
      >
      <div class="p-3">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </div>
    </Popper>
  </div>`,
  components: { Popper, RobustButton },
  setup() {
    const value = ref(false)
    const btnref = ref(null)
    const open = ref(false)
    return { args, value, btnref, open }
  },
})

export const Default = DefaultTemplate.bind({})

Default.args = {
  title: 'Popper title',
  description: 'Popper description text to be placed here',
  gpu: true,
}
