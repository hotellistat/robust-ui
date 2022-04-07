import SelectInline from './SelectInline.vue'
import SelectInlineOption from './SelectInlineOption.vue'
import { ref } from 'vue'
export default {
  title: 'Ui/SelectInline',
  component: SelectInline,
  argTypes: {
    onInput: { action: 'input' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<SelectInline v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',
  components: { SelectInline },
  setup() {
    let value = ref(undefined)

    let options = ref([
      {
        title: 'Item 1122222222222222',
        value: true,
      },
      {
        title: 'Item 2',
        value: false,
      },
      {
        title: 'Item 3',
        value: 'test',
      },
      {
        title: 'Hello',
        value: 12,
      },
      {
        title: 'Bye',
        value: 0,
      },
    ])

    return {
      value,
      options,
      args,
    }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
}



const OptionsTemplate = (args) => ({
  template:
    `<SelectInline v-bind="args" v-model="value">
      <SelectInlineOption value="test" identifier="hello">Hello</SelectInlineOption>
    </SelectInline>`,
  components: { SelectInline, SelectInlineOption },
  setup() {
    let value = ref(undefined)

    let options = ref([
      {
        title: 'Item 1',
        value: true,
      },
      {
        title: 'Item 2',
        value: false,
      },
      {
        title: 'Item 3',
        value: 'test',
      },
      {
        title: 'Hello',
        value: 12,
      },
      {
        title: 'Bye',
        value: 0,
      },
    ])

    return {
      value,
      options,
      args,
    }
  },
})