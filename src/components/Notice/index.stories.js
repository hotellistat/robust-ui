import Notice from './index.vue';

export default {
  title: 'Ui/Notice',
  component: Notice,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
};

const DefaultTemplate = (args) => ({
  template: `<Notice v-bind="args" >This is a notice</Notice>`,
  components: { Notice },
  setup() {
    return { args };
  },
});

export const Default = DefaultTemplate.bind();
