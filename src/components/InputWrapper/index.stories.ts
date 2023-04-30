import { Meta, StoryObj } from '@storybook/vue3';
import InputWrapper from './index.vue';

const meta: Meta<typeof InputWrapper> = {
  title: 'Ui/InputWrapper',
  component: InputWrapper,
  argTypes: {
    title: { control: { type: 'text' } },
    class: { control: { type: 'text' } },
    boxClass: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
    fixedHeight: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    title: 'Date range picker',
    class: 'w-64',
    boxClass: '',
    fixedHeight: true,
    readonly: false,
    condensed: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof InputWrapper>;

export const Default: Story = {
  render: (args) => ({
    components: { InputWrapper },
    setup: () => {
      return {
        args,
      };
    },
    template: `
      <InputWrapper v-bind="args" v-model="date"></InputWrapper>
      `,
  }),
};

// const DefaultTemplate = (args) => ({
//   template: `<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>`,
//   components: { InputWrapper },
//   setup() {
//     return { args };
//   },
// });

// export const Default = DefaultTemplate.bind();

// Default.args = {
//   title: 'Input title',
//   outline: false,
// };

// export const Hint = DefaultTemplate.bind();

// Hint.args = {
//   title: 'Input title',
//   hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
//   outline: false,
// };

// export const ErrorHint = DefaultTemplate.bind();

// ErrorHint.args = {
//   title: 'Input title',
//   hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',

//   error:
//     'This is an input error. It tells the user, that there is something wrong with the current input state',
// };
