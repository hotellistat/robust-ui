import DaterangePicker from '@/components/DatePicker/DaterangePicker.vue'
import BaseSeparator from '@/components/Separator/Separator.vue'
import { computed, ref } from 'vue'

export default {
  title: 'Ui/DaterangePicker',
  component: DaterangePicker,
  argTypes: {
    compare: { control: { type: 'boolean' } },
    perspective: { control: { type: 'boolean' } },
    perspectiveDate: { control: { type: 'date' } },
    comparePerspectiveDate: { control: { type: 'date' } },
    compareDate: { control: { type: 'array' } },
    modelValue: {
      control: { type: 'array' },
      default: [new Date(), new Date()],
    },
    outline: { control: { type: 'boolean' } },
  },
}

const Template = (args) => ({
  template:
    '<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',
  components: { DaterangePicker, BaseSeparator },
  setup() {
    console.log(args)
    return { args }
  },
})

const date = [new Date(), new Date()]
const modelValue = ref(date)

export const Default = Template.bind({})
Default.args = {
  dateRange: modelValue,
  'onUpdate:dateRange': (val) => {
    modelValue.value = val
  },
}
