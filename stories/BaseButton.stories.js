import BaseButton from '@/components/common/BaseButton.vue'

export default {
  title: 'Ui/BaseButton',
  component: BaseButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: { type: 'select', options: ['primary', 'warn', 'muted', 'transparent'] } },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } }
  }
}

const DefaultTemplate = (args) => ({
  components: { BaseButton },
  template: '<base-button v-bind="args">Click here</base-button>',
  setup () {
    return { args }
  }
})

export const Default = DefaultTemplate.bind({})

const PrefixTemplate = (args) => ({
  template: `<base-button v-bind="args">
  <template v-slot:prefix>
  <ph-smiley size="20" />
  </template>
  Click here
  </base-button>`,
  components: { BaseButton },
  setup () {
    return { args }
  }
})

export const Prefix = PrefixTemplate.bind()

const SuffixTemplate = (args) => ({
  template: `<base-button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </base-button>`,
  components: { BaseButton },
  setup () {
    return { args }
  }
})

export const Suffix = SuffixTemplate.bind()
