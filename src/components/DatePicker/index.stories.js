import DatePicker from './index.vue';
import { ref } from 'vue';

export default {
  title: 'Ui/DatePicker',
  component: DatePicker,
  argTypes: {
    title: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
};

const Template = (args) => ({
  template:
    '<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args" title="Date picker"></DatePicker>',
  components: { DatePicker },
  setup() {
    return { args };
  },
});

const date = new Date();
const modelValue = ref(date);

export const Default = Template.bind({});

Default.args = {
  modelValue: undefined,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val;
  },
};
