import type { Meta } from '@storybook/vue3';
import Button from './index.vue';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

export default meta;

// export default {
//   title: 'Ui/Button',
//   component: Button,
//   argTypes: {
//     onClick: { action: 'clicked' },
//     variant: {
//       control: {
//         type: 'select',
//         options: [
//           'primary',
//           'warn',
//           'muted',
//           'transparent',
//           'danger',
//           'danger-text',
//           'danger-outline',
//         ],
//       },
//     },
//     loading: { control: { type: 'boolean' } },
//     disabled: { control: { type: 'boolean' } },
//     condensed: { control: { type: 'boolean' } },
//     rounded: { control: { type: 'boolean' } },
//   },
// };

// const DefaultTemplate = (args) => ({
//   components: { Button },
//   template: '<Button v-bind="args" variant="danger">Click here</Button>',
//   setup() {
//     return { args };
//   },
// });

// export const Default = DefaultTemplate.bind({});

// const PrefixTemplate = (args) => ({
//   template: `<Button v-bind="args">
//   <template v-slot:prefix>
//   <PhSmiley size="20" />
//   </template>
//   Click here
//   </Button>`,
//   components: { Button, PhSmiley },
//   setup() {
//     return { args };
//   },
// });

// export const Prefix = PrefixTemplate.bind();

// const SuffixTemplate = (args) => ({
//   template: `<Button v-bind="args">
//   Click here
//   <template v-slot:suffix>
//   <PhPaperPlaneTilt size="20" />
//   </template>
//   </Button>`,
//   components: { Button, PhPaperPlaneTilt },
//   setup() {
//     return { args };
//   },
// });

// export const Suffix = SuffixTemplate.bind();

// const LoadingTemplate = (args) => ({
//   template: `<Button loading v-bind="args">Click here</Button>`,
//   components: { Button },
//   setup() {
//     return { args };
//   },
// });

// export const Loading = LoadingTemplate.bind();
