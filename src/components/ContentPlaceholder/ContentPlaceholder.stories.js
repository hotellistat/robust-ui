import ContentPlaceholder from './ContentPlaceholder.vue'
import { PhWarning } from 'phosphor-vue'

export default {
  title: 'Ui/ContentPlaceholder',
  component: ContentPlaceholder,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: `<ContentPlaceholder v-bind="args" />`,
  components: { ContentPlaceholder },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
}