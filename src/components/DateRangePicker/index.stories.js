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
const activePreset = ref();
const activeComparePreset = ref();

export const Default = Template.bind({});
Default.args = {
  activePreset,
  activeComparePreset,
  dateRange: dateRange,
  'onUpdate:dateRange': (val) => {
    dateRange.value = val?.date;
    if (val && val.type.name === 'preset') {
      activePreset.value = val.type.value;
    } else {
      activePreset.value = undefined;
    }
  },
  compareDateRange: compareDateRange,
  'onUpdate:compareDateRange': (val) => {
    compareDateRange.value = val?.date;
    if (val && val.type.name === 'preset') {
      activeComparePreset.value = val.type.value;
    } else {
      activeComparePreset.value = undefined;
    }
  },
  'onUpdate:relative': (type) => {
    if (type && type.name === 'preset') {
      activePreset.value = type.value;
    } else {
      activePreset.value = undefined;
    }
  },
  'onUpdate:compareRelative': (type) => {
    if (type && type.name === 'preset') {
      activeComparePreset.value = type.value;
    } else {
      activeComparePreset.value = undefined;
    }
  },
  // 'onUpdate:relative': (val) => {
  //   console.log('update:relative', val);
  // },
};
