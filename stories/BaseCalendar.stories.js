import BaseCalendar from '@/components/Calendar/Calendar.vue'

export default {
  title: 'Ui/BaseCalendar',
  component: BaseCalendar,
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
  template: '<base-calendar v-bind="args"></base-calendar>',
  components: { BaseCalendar },
  setup() {
    return { args }
  },
})

export const Default = Template.bind({})

export const Condensed = Template.bind({})
Condensed.args = {
  condensed: true,
}
