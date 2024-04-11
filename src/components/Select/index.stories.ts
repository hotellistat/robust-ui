import { Meta, StoryObj } from '@storybook/vue3';
import Select from './index.vue';
import { ref } from 'vue';

const meta: Meta<typeof Select> = {
  title: 'Ui/Select',
  component: Select,
  argTypes: {
    title: { control: { type: 'text' } },
    class: { control: { type: 'text' } },
    boxClass: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
    fixedHeight: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    searchable: { control: { type: 'boolean' } },
  },
  args: {
    title: 'Date range picker',
    boxClass: '',
    fixedHeight: true,
    readonly: false,
    condensed: false,
    disabled: false,
    searchable: false,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = ref([
  {
    title: 'Item undefined',
    value: undefined,
  },
  {
    title: 'Item null',
    value: null,
  },
  {
    title: 'Item 1',
    value: true,
  },
  {
    title: 'Item 2',
    value: false,
  },
  {
    title: 'Item 3 very long title that might not fit into the select box',
    value: 'test',
  },
  {
    title: 'Hello',
    value: 12,
  },
  {
    title: 'Bye',
    value: 0,
  },
  {
    title: 'Object value',
    value: {
      name: "test",
      asdf: 98,
      value: true,
      yeahhhh: null
    },
  },
]);

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup: () => {
      const value = ref(undefined);

      return {
        args,
        value,
        options,
      };
    },
    template: `
      <Select v-bind="args" :options="options" v-model="value" >
        <template #prefix>
          test
        </template>
      </Select>
      `,
  }),
};

export const MultiSelect: Story = {
  render: (args) => ({
    components: { Select },
    setup: () => {
      const value = ref([]);

      return {
        args,
        value,
        options,
      };
    },
    template: `
      <Select v-bind="args" :options="options" v-model="value" />
      `,
  }),
};
