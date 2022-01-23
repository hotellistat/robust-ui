import FormRenderer from '@/components/form/FormRenderer.vue'

export default {
  title: 'Ui/FormRenderer',
  components: { FormRenderer },
  argTypes: {
    title: { control: { type: 'text' } }
  }
}

const DefaultTemplate = (args) => ({
  template: `
  <FormRenderer :schema="schema"></FormRenderer>
  `,
  components: { FormRenderer },
  setup() {

    let schema = ref({

    })

    console.log(args)
    return {
      args,
      schema
    }
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
