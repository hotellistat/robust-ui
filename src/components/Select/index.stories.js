import Select from './index.vue';
import { ref } from 'vue';
export default {
  title: 'Ui/Select',
  component: Select,
  argTypes: {
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
};

const DefaultTemplate = (args, { events }) => ({
  template:
    '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: { Select },
  setup() {
    const value = ref(undefined);

    const options = ref([
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
    ]);

    return {
      value,
      options,
      args,
      events,
    };
  },
});

export const Default = DefaultTemplate.bind();

Default.args = {
  title: 'Input title',
};

export const Hint = DefaultTemplate.bind();

Hint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
};

export const ErrorHint = DefaultTemplate.bind();

ErrorHint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
};

export const Inline = DefaultTemplate.bind();

Inline.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
  searchable: false,
};

const MultiselectTemplate = (args, { events }) => ({
  template:
    '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: { Select },
  setup() {
    const value = ref([]);

    const options = ref([
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
    ]);

    return {
      value,
      options,
      args,
      events,
    };
  },
});

export const Multiselect = MultiselectTemplate.bind();

Multiselect.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
  searchable: false,
};