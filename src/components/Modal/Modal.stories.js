import Modal from './Modal.vue'

export default {
  title: 'Ui/Modal',
  component: Modal,
  argTypes: {
    onModal: { action: 'Modal' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Modal v-bind="args"/>',
  components: { Modal },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Modal title',
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Modal title',
  hint: 'This is an Modal hint. It is supposed to help the user understand the reason this Modal exists and what it does',
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Modal title',
  hint: 'This is an Modal hint. It is supposed to help the user understand the reason this Modal exists and what it does',

  error:
    'This is an Modal error. It tells the user, that there is something wrong with the current Modal state',
}
