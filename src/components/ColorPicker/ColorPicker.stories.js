import ColorPicker from './index.vue';

export default {
  title: 'Ui/ColorPicker',
  component: ColorPicker,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
};

const DefaultTemplate = (args) => ({
  template: `<ColorPicker v-bind="args" />`,
  components: { ColorPicker },
  setup() {
    return { args };
  },
});

export const Default = DefaultTemplate.bind();
