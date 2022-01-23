// import { ref } from '@vue/reactivity';
// import BaseRouterTabs from '../components/common/BaseRouterTabs.vue';

// export default {
//   title: 'Ui/BaseRouterTabs',
//   component: BaseRouterTabs,
//   argTypes: {
//     rounded: { control: { type: 'boolean' } },
//   },
// };

// const DefaultTemplate = (args) => ({
//   template: '<base-router-tabs v-bind="args" v-model="value"></base-router-tabs>',
//   components: { BaseRouterTabs },
//   setup() {
//     let value = ref("item_1")
//     return { args, value };
//   },
// });

// export const Default = DefaultTemplate.bind();

// Default.args = {
//   tabs: [
//     {
//       title: "Item 1",
//       value: "item_1"
//     },
//     {
//       title: "Item 2",
//       value: "item_2"
//     },
//     {
//       title: "Super long label that migh overflow on mobile",
//       value: "item_3"
//     }
//   ],
// }

