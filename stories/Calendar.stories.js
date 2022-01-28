import Calendar from '@/components/Calendar/Calendar.vue'

export default {
  title: 'Ui/Calendar',
  component: Calendar,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'warn', 'muted'] },
    },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'date' }, default: new Date() },
  },
}

const Template = (args) => ({
  template: '<Calendar v-bind="args"></Calendar>',
  components: { Calendar },
  setup() {
    return { args }
  },
})

export const Default = Template.bind({})

export const Condensed = Template.bind({})
Condensed.args = {
  condensed: true,
}
