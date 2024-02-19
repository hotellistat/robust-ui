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
    // title: 'Date range picker',
    condensed: false,
    readonly: false,
    enableComparison: true,
    enablePerspective: true,
    filters: [
      {
        title: 'On the books',
        value: 'on_the_books',
      },
      {
        title: 'Budget',
        value: 'budget',
      },
    ],
    comparisonPresets: [
      {
        title: 'STLY by timeframe',
        value: 'STLY_timeframe',
      },
      {
        title: 'LY ACT by timeframe',
        value: 'LY_ACT_TIMEFRAME',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof DaterangePicker>;

export const Default: Story = {
  render: (args) => ({
    components: { DaterangePicker },
    setup: () => {
      const dateRange = ref(undefined);
      const dateRangeComparison = ref([]);
      const perspectiveDate = ref(undefined);
      const perspectiveDateComparison = ref(undefined);
      const activePreset = ref(undefined);
      const activePresetComparison = ref(undefined);
      const perspectivePreset = ref(undefined);
      const perspectivePresetComparison = ref(undefined);
      const showComparison = ref(true);

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
        showComparison,
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
        v-model:show-comparison="showComparison"
      >
      </DaterangePicker>
      `,
  }),
};
