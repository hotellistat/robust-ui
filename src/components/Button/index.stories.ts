import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './index.vue';
import { PhSmiley, PhPaperPlaneTilt } from '@phosphor-icons/vue';
const meta: Meta<typeof Button> = {
  title: 'Ui/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: [
        'primary',
        'warn',
        'muted',
        'transparent',
        'danger',
        'danger-text',
        'danger-outline',
      ],
      control: {
        type: 'select',
      },
    },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'primary',
    loading: false,
    disabled: false,
    condensed: false,
    rounded: false,
    tag: 'button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => ({
    components: { Button, PhSmiley, PhPaperPlaneTilt },
    setup: () => ({ args }),
    template: `
    <Button v-bind="args">
      <template v-slot:prefix>
        <PhSmiley />
      </template>
      Click here
      <template v-slot:suffix>
        <PhPaperPlaneTilt />
      </template>
    </Button>`,
  }),
};
