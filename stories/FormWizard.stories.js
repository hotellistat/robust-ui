import FormWizard from '@/components/form/FormWizard.vue'
import FormWizardFrame from '@/components/form/FormWizardFrame.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseInput from '@/components/common/BaseInput.vue'
import FormWizardItem from '@/components/form/FormWizardItem.vue'
import '../src/validators'

export default {
  title: 'Ui/FormWizard',
  components: { FormWizard },
  argTypes: {
    title: { control: { type: 'text' } }
  }
}

const DefaultTemplate = (args) => ({
  template: `
  <FormWizard>
      <FormWizardFrame :schema="args.schema" v-slot="{ fields, form }">
        {{fields}}

        {{form}}

        <base-input title="First name" v-bind="fields[0]"/>

        <base-button type="submit">Submit</base-button>
      </FormWizardFrame>
  </FormWizard>
  `,
  components: { FormWizard, FormWizardFrame, BaseButton, BaseInput },
  setup () {
    console.log(args)
    return { args }
  }
})

export const Default = DefaultTemplate.bind()

Default.args = {
  schema: [
    {
      name: 'name_first',
      rules: 'required',
      options: {
        label: 'First name'
      }
    }
  ]
}
