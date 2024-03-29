import { ref } from 'vue';
import TabsSwitch from './index.vue';

export default {
  title: 'Ui/TabsSwitch',
  component: TabsSwitch,
  argTypes: {
    rounded: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
  },
};

const DefaultTemplate = (args) => ({
  template: '<TabsSwitch  v-bind="args" v-model="value"></TabsSwitch>',
  components: { TabsSwitch },
  setup() {
    const value = ref('item_1');
    return { args, value };
  },
});

export const Default = DefaultTemplate.bind();

Default.args = {
  tabs: [
    {
      title: 'Item 1',
      value: 'item_1',
    },
    {
      title: 'Item 2',
      value: 'item_2',
    },
    {
      title: 'Super long label that migh overflow on mobile',
      value: 'item_3',
    },
  ],
};

const SlotTemplate = (args) => ({
  template: `<TabsSwitch v-bind="args" v-model="value">
  <template v-slot="data">
  <div @click="data.select" class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </TabsSwitch>`,
  components: { TabsSwitch },
  setup() {
    const value = ref('item_1');
    return { args, value };
  },
});

export const Slotted = SlotTemplate.bind();

Slotted.args = {
  tabs: [
    {
      title: 'Item 1',
      value: 'item_1',
    },
    {
      title: 'Item 2',
      value: 'item_2',
    },
    {
      title: 'Super long label that migh overflow on mobile',
      value: 'item_3',
    },
  ],
};
