import DataTable from './Datatable.vue'

import { data, options } from './mockData.ts'

export default {
  title: 'Ui/DataTable',
  component: DataTable,
  argTypes: {
    options: { control: { type: 'array' } },
    data: { control: { type: 'object' } },
  },
}

const DefaultTemplate = (args) => ({
  components: { DataTable },
  template: '<DataTable v-bind="args" ></DataTable>',
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  data,
  options,
}
