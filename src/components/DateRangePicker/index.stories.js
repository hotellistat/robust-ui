import DaterangePicker from './index.vue';
import { ref } from 'vue';

export default {
  title: 'Ui/DaterangePicker',
  component: DaterangePicker,
  argTypes: {
    condensed: { control: { type: 'boolean' } },
    enableComparison: { control: { type: 'boolean' } },
    enablePerspective: { control: { type: 'boolean' } },
    perspectiveDate: { control: { type: 'date' } },
    comparePerspectiveDate: { control: { type: 'date' } },
    outline: { control: { type: 'boolean' } },
  },
};

const Template = (args) => ({
  template: '<DaterangePicker v-bind="args"></DaterangePicker>',
  components: { DaterangePicker },
  setup() {
    return { args };
  },
});

const date = [new Date(), new Date()];
const dateRange = ref(date);
const compareDateRange = ref(date);

export const Default = Template.bind({});
Default.args = {
  dateRange: dateRange,
  'onUpdate:dateRange': (val) => {
    dateRange.value = val;
  },
  compareDateRange: compareDateRange,
  'onUpdate:compareDateRange': (val) => {
    compareDateRange.value = val;
  },
};
