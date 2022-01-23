import BaseDateRangepicker from '@/components/common/BaseDateRangepicker.vue'
import BaseSeparator from '@/components/common/BaseSeparator.vue'
import { computed, ref } from 'vue'

export default {
  title: 'Ui/BaseDateRangepicker',
  component: BaseDateRangepicker,
  argTypes: {
    compare: { control: { type: 'boolean' } },
    perspective: { control: { type: 'boolean' } },
    perspectiveDate: { control: { type: 'date' } },
    comparePerspectiveDate: { control: { type: 'date' } },
    compareDate: { control: { type: 'array' } },
    modelValue: { control: { type: 'array' }, default: [new Date(), new Date()] },
    outline: { control: { type: 'boolean' } },

  }
}

const Template = (args) => ({
  template: '<base-date-rangepicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></base-date-rangepicker>',
  components: { BaseDateRangepicker, BaseSeparator },
  setup () {
    console.log(args)
    return { args }
  }
})

const date = [new Date(), new Date()]
const modelValue = ref(date)

export const Default = Template.bind({})
Default.args = {
  modelValue: modelValue,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val
  }
}

export const Compare = Template.bind({})

Compare.args = {
  compare: true,
  compareDate: [new Date(), new Date()],
  modelValue: modelValue,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val
  },
  perspective: true,
  perspectiveDate: new Date()
}

export const Outline = Template.bind({})

Outline.args = {
  outline: true,
  compare: true,
  compareDate: [new Date(), new Date()],
  modelValue: modelValue,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val
  },
  perspective: true,
  perspectiveDate: new Date()
}

// export const Perspective = Template.bind({})
// Perspective.args = {
//   perspective: true,
//   perspectiveDate: new Date(),
//   comparePerspectiveDate: new Date(),
//   modelValue: modelValue,
//   'onUpdate:modelValue': (val) => {
//     modelValue.value = val
//   }
// }
