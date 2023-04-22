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
const perspectiveDate = ref(undefined);
const comparePerspectiveDate = ref(undefined);
const compareDateRange = ref(date);
const activePreset = ref();
const activeComparePreset = ref();
const perspectivePreset = ref();
const comparePerspectivePreset = ref();

export const Default = Template.bind({});
Default.args = {
  perspectiveDate,
  comparePerspectiveDate,
  activePreset,
  activeComparePreset,
  perspectivePreset,
  comparePerspectivePreset,
  enableComparison: true,
  dateRange: dateRange,
  'onUpdate:dateRange': (val) => {
    dateRange.value = val;
  },
  compareDateRange: compareDateRange,
  'onUpdate:compareDateRange': (val) => {
    compareDateRange.value = val;
  },
  'onUpdate:activePreset': (type) => {
    if (type && type.name === 'preset') {
      activePreset.value = type.value;
    } else {
      activePreset.value = undefined;
    }
  },
  'onUpdate:activeComparePreset': (type) => {
    if (type && type.name === 'preset') {
      activeComparePreset.value = type.value;
    } else {
      activeComparePreset.value = undefined;
    }
  },
  'onUpdate:perspectivePreset': (type) => {
    if (type && type.name === 'preset') {
      perspectivePreset.value = type.value;
    } else {
      perspectivePreset.value = undefined;
    }
  },
  'onUpdate:comparePerspectivePreset': (type) => {
    if (type && type.name === 'preset') {
      comparePerspectivePreset.value = type.value;
    } else {
      comparePerspectivePreset.value = undefined;
    }
  },
  'onUpdate:perspectiveDate': (d) => {
    perspectiveDate.value = d;
  },
  'onUpdate:comparePerspectiveDate': (d) => {
    comparePerspectiveDate.value = d;
  },
  // 'onUpdate:relative': (val) => {
  //   console.log('update:relative', val);
  // },
};
