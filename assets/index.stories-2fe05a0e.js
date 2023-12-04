import{e as a,p as s}from"./index-792adf29.js";import{r as m}from"./vue.esm-bundler-ae7acd23.js";import"./index-c53ab45f.js";import"./PhCheck.vue-d5a5bf42.js";import"./index-6cfca2e9.js";import"./PhCaretRight.vue-60a7c514.js";import"./index-7b17e556.js";import"./index-42825869.js";import"./index-7a6fafbc.js";import"./index-ad5f9d14.js";import"./index-22bc3957.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7ee25441.js";import"./index-b6a7ce83.js";import"./index-ded63a45.js";import"./index-685cc6c8.js";import"./PhCaretDown.vue-0142dae5.js";import"./index-d5167709.js";import"./PhWarningCircle.vue-f808551e.js";import"./index-4630769a.js";import"./index-8856fcc3.js";import"./index-98689c3c.js";import"./PhWarning.vue-82de2386.js";import"./index-0cfa2c11.js";import"./index-a103b92d.js";import"./index-6449a901.js";import"./index-e1fd4b7e.js";import"./index-612415ca.js";import"./index-da7b8437.js";import"./index-f1dd971c.js";import"./_commonjsHelpers-de833af9.js";const G={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=index.stories-2fe05a0e.js.map
