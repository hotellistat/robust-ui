import ContentBox from '@/components/ContentBox/ContentBox.vue'

export default {
  title: 'Ui/ContentBox',
  component: ContentBox,
  argTypes: {
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: `<ContentBox v-bind="args" >
      <div class="p-8 text-gray-600">content</div>
  </ContentBox>`,
  components: { ContentBox },
  setup() {
    console.log(args)
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

const TitleTemplate = (args) => ({
  template: `<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 text-gray-600">content</div>
  </ContentBox>`,
  components: { ContentBox },
  setup() {
    console.log(args)
    return { args }
  },
})

export const Title = TitleTemplate.bind()

Title.args = {
  title: 'Input title',
}

const TitlePropTemplate = (args) => ({
  template: `<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 text-gray-600">content</div>
  </ContentBox>`,
  components: { ContentBox },
  setup() {
    console.log(args)
    return { args }
  },
})

export const TitleProp = TitlePropTemplate.bind()

TitleProp.args = {
  title: 'Input title',
}

const StripeTemplate = (args) => ({
  template: `<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 text-gray-600">content</div>
  </ContentBox>`,
  components: { ContentBox },
  setup() {
    console.log(args)
    return { args }
  },
})

export const Stripe = StripeTemplate.bind()

Stripe.args = {
  title: 'Input title',
}
