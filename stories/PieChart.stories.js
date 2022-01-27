import PieChart from '@/components/Charts/PieChart.vue'

export default {
  title: 'Charts/PieChart',
  component: PieChart,
  argTypes: {
    data: { control: { type: 'array' } },
  },
}

const Template = (args) => ({
  template: '<pie-chart v-bind="args"></pie-chart>',
  components: { PieChart },
  setup() {
    return { args }
  },
})

export const Default = Template.bind({})

Default.args = {
  data: [
    { display: 'sunday', value: 400, disabled: false },
    { display: 'monday', value: 300, disabled: false },
    { display: 'tuesday', value: 250, disabled: false },
    { display: 'wednesday', value: 200, disabled: false },
    { display: 'thusday', value: 150, disabled: false },
    { display: 'friday', value: 100, disabled: false },
    { display: 'saturday', value: 310, disabled: false },
  ],
  overview: 'Test',
}
