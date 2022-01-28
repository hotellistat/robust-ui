import Button from '../src/components/Button/Button.vue'

export default {
  title: 'Ui/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'warn', 'muted', 'transparent'],
      },
    },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  components: { Button },
  template: '<Button v-bind="args">Click here</Button>',
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind({})

const PrefixTemplate = (args) => ({
  template: `<Button v-bind="args">
  <template v-slot:prefix>
  <ph-smiley size="20" />
  </template>
  Click here
  </Button>`,
  components: { Button },
  setup() {
    return { args }
  },
})

export const Prefix = PrefixTemplate.bind()

const SuffixTemplate = (args) => ({
  template: `<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </Button>`,
  components: { Button },
  setup() {
    return { args }
  },
})

export const Suffix = SuffixTemplate.bind()

const LoadingTemplate = (args) => ({
  template: `<Button loading v-bind="args">Click here</Button>`,
  components: { Button },
  setup() {
    return { args }
  },
})

export const Loading = LoadingTemplate.bind()
