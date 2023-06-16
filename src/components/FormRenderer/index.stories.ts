import type { Meta, StoryObj } from '@storybook/vue3';

import FormRenderer from './index.vue';
import { PhSmiley, PhPaperPlaneTilt } from '@phosphor-icons/vue';
import { Option } from './FormRenderer';
import { ref } from 'vue';
const meta: Meta<typeof FormRenderer> = {
  title: 'Ui/FormRenderer',
  component: FormRenderer,
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
  },
};

export default meta;

type Story = StoryObj<typeof FormRenderer>;

export const Default: Story = {
  render: (args) => ({
    components: { FormRenderer, PhSmiley, PhPaperPlaneTilt },
    setup: () => {
      const options: Option[] = [
        {
          type: 'text',
          item: 'name',
          title: 'Name',
          default: 'John Doe',
        },
        {
          type: 'text',
          item: 'email',
          title: 'Email',
        },
        {
          type: 'checkbox',
          item: 'marketing_mail',
          title: 'Marketing Mail',
        },
      ];

      const data = ref({});
      return {
        args,
        options,
        data,
      };
    },
    template: `<FormRenderer :options="options" v-model="data"/>`,
  }),
};
