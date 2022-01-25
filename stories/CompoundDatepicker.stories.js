import CompoundDatepicker from '@/components/common/CompoundDatepicker.vue'
import BaseSeparator from '@/components/common/BaseSeparator.vue'
import { computed, ref } from 'vue'

export default {
  title: 'Ui/CompoundDatepicker',
  component: CompoundDatepicker,
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
    '<compound-datepicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></compound-datepicker>',
  components: { CompoundDatepicker },
  setup() {
    console.log(args)
    return { args }
  },
})

const date = [new Date(), new Date()]
const modelValue = ref(date)

export const Default = Template.bind({})

Default.args = {
  daterange: modelValue,
  'onUpdate:daterange': (val) => {
    daterange.value = val
  },
}
