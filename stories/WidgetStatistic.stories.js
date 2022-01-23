import WidgetStatistic from '@/components/widgets/WidgetStatistic.vue'

export default {
  title: 'Widgets/WidgetStatistic',
  component: WidgetStatistic,
  argTypes: {
    title: { control: { type: 'text' } },
    value: { control: { type: 'number' } },
    delta: { control: { type: 'number' } },
    deltaPrefix: { control: { type: 'text' } },
    deltaPostivie: { control: { type: 'bool' } },
    unit: { control: { type: 'text' } }
  }
}

const DefaultTemplate = (args) => ({
  template: '<WidgetStatistic v-bind="args" stripe-class="bg-primary-500" :stripe="true" />',
  components: { WidgetStatistic },
  setup () {
    console.log(args)
    return { args }
  }
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
  statistics: [
    {

      value: 245,
      valueDescription: '02.04.2021 - 12.04.2021',
      delta: 10,
      deltaDescription: 'since yesterday',
      positive: true,
      deltaPrefix: '+',
      unit: '$'
    }
  ]
}

const LineChartTemplate = (args) => ({
  template: '<WidgetStatistic v-bind="args" class="border-primary-500"/>',
  components: { WidgetStatistic },
  setup () {
    console.log(args)
    return { args }
  }
})

export const LineChart = LineChartTemplate.bind()

LineChart.args = {
  title: 'Overview widget',
  statistics: [
    {
      value: 245,
      valueDescription: '02.04.2021 - 12.04.2021',
      delta: 10,
      deltaDescription: 'since yesterday',
      positive: true,
      deltaPrefix: '+',
      unit: '€',
      trend: [0, 1, 2, 3, 4, 5, 6, 12, 6, 3, 5, 6, 2, 1, 6, 7, 0, 3, 6, 12, 14, 3, 5, 2, 6, 9, 3, 15, 1, 3, 4, 7, 3, 0, 0, 3]
    },
    {
      value: 153,
      valueDescription: 'rooms',
      delta: 10,
      deltaDescription: 'since yesterday',
      positive: false,
      deltaPrefix: '-',
      trend: [0, 1, 2, 3, 4, 5, 6, 12, 6, 3, 5, 6, 2, 1, 6, 7, 0, 3, 6, 12, 14, 3, 5, 2, 6, 9, 3, 15, 1, 3, 4, 7, 3, 0, 0, 3]
    },
    {
      value: 50,
      valueDescription: 'occupancy',
      delta: 10,
      deltaDescription: 'since yesterday',
      positive: true,
      deltaPrefix: '+',
      unit: '%'
    },
    {
      value: 10,
      valueDescription: 'groups',
      delta: 10,
      deltaDescription: 'compared to last month',
      positive: true,
      deltaPrefix: '+'
    }
  ]

}
