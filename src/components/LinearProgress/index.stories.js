import LinearProgress from './index.vue';

export default {
  title: 'Ui/LinearProgress',
  component: LinearProgress,
  argTypes: {
    progress: { control: { type: 'number' } },
  },
};

const DefaultTemplate = (args) => ({
  template: `<LinearProgress v-bind="args" />`,
  components: { LinearProgress },
  setup() {
    return { args };
  },
});

export const Default = DefaultTemplate.bind();
