import WidgetWrapper from './index.vue'

export default {
  title: 'Ui/WidgetWrapper',
  component: WidgetWrapper,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    draggable: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  template: `<WidgetWrapper v-bind="args">
    <template #title>Widget wrapper</template>
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,
  components: { WidgetWrapper },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'WidgetWrapper title',
  description: 'WidgetWrapper description text to be placed here',
}
