import SelectFix from './SelectFix.vue'
import SelectFixOption from './SelectFixOption.vue'
import { ref } from 'vue'
export default {
  title: 'Ui/SelectFix',
  component: SelectFix,
  argTypes: {
    onInput: { action: 'input' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<SelectFix v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',
  components: { SelectFix },
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
    `<SelectFix v-bind="args" v-model="value">
      <SelectFixOption value="test" identifier="hello">Hello</SelectFixOption>
    </SelectFix>`,
  components: { SelectFix, SelectFixOption },
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