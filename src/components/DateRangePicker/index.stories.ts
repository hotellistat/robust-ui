import { Meta, StoryObj } from '@storybook/vue3';
import DaterangePicker from './index.vue';
import { ref } from 'vue';
import { addDays } from 'date-fns';

const meta: Meta<typeof DaterangePicker> = {
  title: 'Ui/DaterangePicker',
  component: DaterangePicker,
  argTypes: {
    title: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    enableComparison: { control: { type: 'boolean' } },
    enablePerspective: { control: { type: 'boolean' } },
    perspectiveDate: { control: { type: 'date' } },
    comparePerspectiveDate: { control: { type: 'date' } },
    onBlur: {},
    onFocus: {},
    'onUpdate:dateRange': {},
    'onUpdate:dateRangeComparison': {},
    'onUpdate:perspectiveDate': {},
    'onUpdate:perspectiveDateComparison': {},
    'onUpdate:activePreset': {},
    'onUpdate:activePresetComparison': {},
    'onUpdate:perspectivePreset': {},
    'onUpdate:perspectivePresetComparison': {},
    onChange: {},
  },
  args: {
    title: 'Date range picker',
    condensed: false,
    readonly: false,
    enableComparison: true,
    enablePerspective: true,
  },
};

export default meta;

type Story = StoryObj<typeof DaterangePicker>;

export const Default: Story = {
  render: (args) => ({
    components: { DaterangePicker },
    setup: () => {
      const dateRange = ref([new Date(), addDays(new Date(), 30)]);
      const dateRangeComparison = ref([new Date(), addDays(new Date(), 30)]);
      const perspectiveDate = ref(new Date());
      const perspectiveDateComparison = ref(new Date());
      const activePreset = ref(undefined);
      const activePresetComparison = ref(undefined);
      const perspectivePreset = ref(undefined);
      const perspectivePresetComparison = ref(undefined);

      return {
        args,
        dateRange,
        dateRangeComparison,
        perspectiveDate,
        perspectiveDateComparison,
        activePreset,
        activePresetComparison,
        perspectivePreset,
        perspectivePresetComparison,
      };
    },
    template: `
      <DaterangePicker
        v-bind="args"
        v-model:date-range="dateRange"
        v-model:date-range-comparison="dateRangeComparison"
        v-model:perspective-date="perspectiveDate"
        v-model:perspective-date-comparison="perspectiveDateComparison"
        v-model:active-preset="activePreset"
        v-model:active-preset-comparison="activePresetComparison"
        v-model:perspective-preset="perspectivePreset"
        v-model:perspective-preset-comparison="perspectivePresetComparison"
      >
      </DaterangePicker>`,
  }),
};
