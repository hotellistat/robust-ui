import{_ as a,p as s}from"./index-22ffcb54.js";import{a as m}from"./vue.esm-bundler-c29c03ae.js";import"./PhCaretRight.vue-10d95dc4.js";import"./index-a173c4a8.js";import"./index-be0f0031.js";import"./index-525869d2.js";import"./PhCheck.vue-4321f7f1.js";import"./index-53d6c2da.js";import"./index-0ba9f111.js";import"./index-14c06499.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-944bab45.js";import"./index-7e9988f7.js";import"./index-54c9e3a1.js";import"./index-ed275ab4.js";import"./PhCaretDown.vue-d1c52ee7.js";import"./index-e224144a.js";import"./PhWarningCircle.vue-a9bc05a3.js";import"./index-fd4ca2cb.js";import"./index-8267663a.js";import"./index-4ceae020.js";import"./PhWarning.vue-045f1f2d.js";import"./index-07427818.js";import"./index-28ccbb04.js";import"./index-f07a6f7c.js";import"./index-bd31839f.js";import"./index-946d8714.js";import"./index-c1a418bc.js";import"./index-61ba406b.js";import"./_commonjsHelpers-87174ba5.js";const F={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-09c6faa5.js.map
