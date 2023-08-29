import { Meta, StoryObj } from '@storybook/vue3';
import Separator from './index.vue';
import { ref } from 'vue';

const meta: Meta<typeof Separator> = {
  title: 'Ui/Separator',
  component: Separator,
  argTypes: {
    vert: { control: { type: 'boolean' } },
    colorClass: { control: { type: 'text' } },
  },
  args: {
    vert: false,
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;


export const Default: Story = {
  render: (args) => ({
    components: { Separator },
    setup: () => {

      return {
        args,
      };
    },
    template: `
      <Separator class="w-64 h-64" v-bind="args">
      Hi there test
      </Separator>
      `,
  }),
};