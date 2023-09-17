import Spinner from './index.vue';

export default {
  title: 'Ui/Spinner',
  component: Spinner,
  argTypes: {},
};

const DefaultTemplate = (args) => ({
  template: '<Spinner v-bind="args" />',
  components: { Spinner },
  setup() {
    return { args };
  },
});

export const Default = DefaultTemplate.bind();
