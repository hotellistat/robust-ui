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
   <div class="dark:text-white"> ${lorem}</div>
<Modal v-model:opened="args.opened">
  <template #title>
    Title
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
