import{_ as p,p as s}from"./index-f9482a58.js";import{r as m}from"./vue.esm-bundler-d81b504f.js";import"./PhCaretRight.vue-f7161793.js";import"./index-ea1ad1dd.js";import"./index-b90d3368.js";import"./index-05807df9.js";import"./PhCheck.vue-f4f968d0.js";import"./index-2a6a87e7.js";import"./index-2eb7f321.js";import"./index-3d19f71a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3ac618af.js";import"./index-22facfe1.js";import"./index-8070e360.js";import"./index-5175e8f9.js";import"./index-8e2f40f5.js";import"./PhCaretDown.vue-c5843984.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-cba7849c.js";import"./PhWarningCircle.vue-b07dadc9.js";import"./index-8428959a.js";import"./PhWarning.vue-3446eb47.js";import"./index-5f1e2bcb.js";import"./index-5cefc105.js";import"./index-b096327f.js";import"./index-c12ca444.js";import"./index-85ad0fd2.js";import"./index-3e91c51b.js";import"./index-732c2bfa.js";import"./index-e1977c68.js";import"./index-02617ffc.js";import"./index-6fccc556.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const J=["Default"];export{e as Default,J as __namedExportsOrder,I as default};
