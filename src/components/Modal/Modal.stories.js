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
  template: '<Modal v-bind="args">test</Modal>',
  components: { Modal },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Modal title',
}
