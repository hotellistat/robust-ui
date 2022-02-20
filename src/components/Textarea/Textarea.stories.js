import Textarea from './Textarea.vue'

export default {
  title: 'Ui/Textarea',
  component: Textarea,
  argTypes: {
    onTextarea: { action: 'textarea' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Textarea v-bind="args"/>',
  components: { Textarea },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  modelValue: 'Textarea text',
  title: 'Textarea title',
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Textarea title',
  hint: 'This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does',
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Textarea title',
  hint: 'This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does',
  error:
    'This is an textarea error. It tells the user, that there is something wrong with the current textarea state',
}
