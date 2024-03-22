import { ref } from 'vue';
import Radio from './index.vue';

export default {
  title: 'Ui/Radio',
  component: Radio,
  argTypes: {
    title: { control: { type: 'text' } },
  },
};

const DefaultTemplate = (args) => ({
  template: `
    {{value}}
    <div><Radio :value="0" title="Radio title 0" v-model="value"/></div>
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    <div><Radio value="disabled" title="Disabled radio" v-model="value" disabled/></div>
    `,
  components: { Radio },
  setup() {
    const value = ref('test');
    return { args, value };
  },
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Radio title',
};
