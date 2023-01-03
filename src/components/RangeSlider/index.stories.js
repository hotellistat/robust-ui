import RangeSlider from './index.vue';
import { ref } from 'vue';

export default {
  title: 'Ui/RangeSlider',
  component: RangeSlider,
  argTypes: {
    min: { control: { type: 'number', default: 0 } },
    max: { control: { type: 'number', default: 100 } },
    step: { control: { type: 'number', default: 10 } },
    snapToSteps: { control: { type: 'boolean', default: false } },
  },
};

const DefaultTemplate = (args) => ({
  template: `<RangeSlider v-bind="args" v-model="value" class="w-64" />`,
  components: { RangeSlider },
  setup() {
    const value = ref([-500, 500]);
    return { args, value };
  },
});

export const Default = DefaultTemplate.bind();

Default.args = {
  min: 0,
  max: 5000,
  step: 100,
};
