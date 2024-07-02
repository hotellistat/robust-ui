import Modal from './index.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import lorem from './lorem';
const meta: Meta<typeof Modal> = {
  title: 'Ui/Modal',
  component: Modal,
  argTypes: {
    'onUpdated:opened': { action: 'Modal' },
    opened: {
      control: { type: 'boolean' },
    },
    dismissable: {
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

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => ({
    components: { Modal },
    setup: () => ({ args }),
    template: `
<div class="dark:text-white max-w-screen-lg" @click="args.opened = true"> ${lorem}</div>
<Modal v-model:opened="args.opened" v-bind="args">
  <template #title>
    Title ggg
  </template>
  <template #header>
    <div class="p-4">header</div>
  </template>
  <div class="w-full h-[500px] "></div>
  <template #footer>
    <div class="p-4">footer</div>
  </template>
</Modal>`,
  }),
};
