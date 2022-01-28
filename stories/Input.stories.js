import Input from '@/components/Input/Input.vue'

export default {
  title: 'Ui/Input',
  component: Input,
  argTypes: {
    onInput: { action: 'input' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Input v-bind="args"/>',
  components: { Input },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',

  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
}
