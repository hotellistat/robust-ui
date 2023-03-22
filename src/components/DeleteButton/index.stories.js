import DeleteButton from './index.vue';

export default {
  title: 'Ui/DeleteButton',
  component: DeleteButton,
  argTypes: {},
};

const Template = (args) => ({
  template: `
  <DeleteButton v-bind="args">
    DELETE
  </DeleteButton>`,
  components: { DeleteButton },
  setup() {
    return { args };
  },
});

export const Default = Template.bind({});
Default.args = {};
