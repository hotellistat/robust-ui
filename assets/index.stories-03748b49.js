import{e as p,p as s}from"./index-ecc1de43.js";import{r as m}from"./vue.esm-bundler-4b093791.js";import"./index-e446e932.js";import"./PhCheck.vue-c83224dd.js";import"./index-28ca9316.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-c4b142bd.js";import"./index-3a409b03.js";import"./index-06095ad2.js";import"./index-3f9b8550.js";import"./index-3ca9fd0b.js";import"./index-5704c243.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-a820f662.js";import"./index-ea48fdd0.js";import"./index-534e149b.js";import"./index-1fc27f8c.js";import"./PhCaretDown.vue-6e23ca25.js";import"./index-f39ddd26.js";import"./PhWarningCircle.vue-f5df56c7.js";import"./index-67ef798e.js";import"./index-53ebb12c.js";import"./index-15cec3ca.js";import"./PhWarning.vue-eb212a4c.js";import"./index-9b2ccf9e.js";import"./index-85c55c81.js";import"./index-4acbc033.js";import"./index-b97c47da.js";import"./index-71194958.js";import"./index-87b802c0.js";import"./index-2fbd1fb3.js";import"./_commonjsHelpers-de833af9.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
      <Calendar v-bind="args" v-model="date" v-model:preset="args.preset"></Calendar>
      `})};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Calendar
    },
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
        date
      };
    },
    template: \`
      <Calendar v-bind="args" v-model="date" v-model:preset="args.preset"></Calendar>
      \`
  })
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=index.stories-03748b49.js.map
