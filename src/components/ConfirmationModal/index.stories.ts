import ConfirmationModal from './index.vue';
import { Meta, StoryObj } from '@storybook/vue3';
const meta: Meta<typeof ConfirmationModal> = {
  title: 'Ui/ConfirmationModal',
  component: ConfirmationModal,
  argTypes: {
    'onUpdated:opened': { action: 'ConfirmationModal' },
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' },
    opened: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      control: { type: 'select' },
    },
  },
  args: {
    opened: true,
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  render: (args) => ({
    components: { ConfirmationModal },
    setup: () => ({ args }),
    template: `
<ConfirmationModal v-slot="{ click }" v-model:opened="args.opened" v-bind="args">
  <button @click="click">Open</button>
</ConfirmationModal>`,
  }),
};
