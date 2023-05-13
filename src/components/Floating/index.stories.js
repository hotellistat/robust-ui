import { ref } from 'vue';
import FLoating from './index.vue';

export default {
  title: 'Ui/FLoating',
  component: FLoating,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
};

const DefaultTemplate = (args) => ({
  template: '<FLoating v-bind="args" v-model="value">ldsajfk</FLoating>',
  components: { FLoating },
  setup() {
    const value = ref(false);
    return { args, value };
  },
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'FLoating title',
  description: 'FLoating description text to be placed here',
};
