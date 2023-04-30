import { Meta, StoryObj } from '@storybook/vue3';
import Calendar from './index.vue';
import { ref } from 'vue';
import presets from './presets';

const meta: Meta<typeof Calendar> = {
  title: 'Ui/Calendar',
  component: Calendar,
  argTypes: {
    preset: {
      options: presets.map((preset) => preset.key),
      control: { type: 'select' },
    },
    'onUpdate:preset': {},
    'onUpdate:modelValue': {},
  },
  args: {
    preset: 'this_month',
    enableComparison: true,
    enablePerspective: true,
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args) => ({
    components: { Calendar },
    setup: () => {
      const date = ref(new Date());
      // const dateRangeComparison = ref([new Date(), addDays(new Date(), 30)]);
      // const perspectiveDate = ref(new Date());
      // const perspectiveDateComparison = ref(new Date());
      // const activePreset = ref(undefined);
      // const activePresetComparison = ref(undefined);
      // const perspectivePreset = ref(undefined);
      // const perspectivePresetComparison = ref(undefined);

      return {
        args,
        date,
      };
    },
    template: `
      <Calendar v-bind="args" v-model="date" v-model:preset="args.preset"></Calendar>
      `,
  }),
};

// export default {
//   title: 'Ui/Calendar',
//   component: Calendar,
//   argTypes: {},
// };

// const Template = (args) => ({
//   template: '<Calendar v-bind="args"></Calendar>',
//   components: { Calendar },
//   setup() {
//     return { args };
//   },
// });

// const modelValueDefault = ref(new Date());
// export const Default = Template.bind({});
// Default.args = {
//   modelValue: modelValueDefault,
//   'onUpdate:modelValue': (val) => {
//     modelValueDefault.value = val;
//     console.log(val);
//   },
// };

// const date = [new Date(), new Date()];
// const modelValue = ref(date);

// export const Range = Template.bind({});
// Range.args = {
//   modelValue: modelValue,
//   'onUpdate:modelValue': (val) => {
//     modelValue.value = val;
//     console.log(val);
//   },
// };
