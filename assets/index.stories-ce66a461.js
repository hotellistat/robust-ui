import{_ as p,p as s}from"./index-5aa96659.js";import{r as m}from"./vue.esm-bundler-a72848c3.js";import"./PhCaretRight.vue-7ff22dd5.js";import"./index-cbad4310.js";import"./index-a9a12fc1.js";import"./index-1966277d.js";import"./PhCheck.vue-68734a86.js";import"./index-40d3ea92.js";import"./index-41b1b57b.js";import"./index-463eda1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-37a2f809.js";import"./index-98285913.js";import"./index-9c5463c6.js";import"./index-7f4babf5.js";import"./index-36ec367c.js";import"./PhCaretDown.vue-53494515.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-aa6f1b08.js";import"./PhWarningCircle.vue-dbb785ea.js";import"./index-8ea92436.js";import"./PhWarning.vue-710aeebd.js";import"./index-ae3827ca.js";import"./index-e959302c.js";import"./index-03b15471.js";import"./index-ab56e974.js";import"./index-ef933970.js";import"./index-6b29d817.js";import"./index-2d17b8ec.js";import"./index-19e6843a.js";import"./index-99db6534.js";import"./index-7fde1482.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
