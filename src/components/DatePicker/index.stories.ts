import DatePicker from './index.vue';
import { ref } from 'vue';
import presets from '../Calendar/presets';
import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof DatePicker> = {
  title: 'Ui/DatePicker',
  component: DatePicker,
  argTypes: {
    title: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
    'onUpdate:modelValue': {},
    'onUpdate:preset': {},
    onChange: {},
    onBlur: {},
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

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    template: `
      <DatePicker
        class="p-2
        col-span-2
        sm:col-span-1"
        v-bind="args"
        v-model="value"
        v-model:preset="preset"
        title="Date picker"
        :presets="presets"
      >
      </DatePicker>`,
    setup: () => {
      const value = ref();
      const preset = ref(undefined);

      return { args, value, presets, preset };
    },
  }),
};
