import Checkbox from './index.vue';
import { ref } from 'vue';

export default {
  title: 'Ui/Checkbox',
  component: Checkbox,
  argTypes: {
    title: { control: { type: 'text' } },
  },
};

const DefaultTemplate = (args) => ({
  template: '<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',
  components: { Checkbox },
  setup() {
    const value = ref(false);
    return { value, args };
  },
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Checkbox title',
};

const SlotTemplate = (args) => ({
  template:
    '<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',
  components: { Checkbox },
  setup() {
    const value = ref(false);
    return { value, args };
  },
});

export const SlottedTitle = SlotTemplate.bind({});
SlottedTitle.args = {
  title: 'V-Slot Checkbox title',
};
