import InputWrapper from '@/components/InputWrapper/InputWrapper.vue'

export default {
  title: 'Ui/InputWrapper',
  component: InputWrapper,
  argTypes: {
    condensed: { control: { type: 'boolean' } },
    outline: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<InputWrapper v-bind="args"/>',
  components: { InputWrapper },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
  outline: false,
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  outline: false,
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',

  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
}
