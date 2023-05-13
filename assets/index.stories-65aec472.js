import{_ as a,p as s}from"./index-8db9cec2.js";import{j as m}from"./vue.esm-bundler-b4bdeeb0.js";import"./PhCaretRight.vue-8f509f64.js";import"./index-7bded734.js";import"./index-d11309f6.js";import"./index-4145d83e.js";import"./PhCheck.vue-55785c72.js";import"./index-ef7d0473.js";import"./index-e5f640a6.js";import"./index-7ea59af2.js";import"./index-c67bbc98.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-c8a27de7.js";import"./index-cd7f630a.js";import"./index-56a24cc0.js";import"./index-7f9dbdf9.js";import"./PhCaretDown.vue-dd6a24d7.js";import"./index-71f132b4.js";import"./PhWarningCircle.vue-6d2e90a0.js";import"./index-de5d6c2f.js";import"./PhWarning.vue-12b26d3d.js";import"./index-d636e3c0.js";import"./index-8bb5849b.js";import"./index-d357b62c.js";import"./index-5b1a5b7c.js";import"./index-1367b130.js";import"./index-350d2ce9.js";import"./index-aae67b84.js";import"./index-61be3490.js";import"./index-92dadb48.js";import"./index-68c7be1b.js";const G={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
//# sourceMappingURL=index.stories-65aec472.js.map
