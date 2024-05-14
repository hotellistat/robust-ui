import{_ as p,p as s}from"./index-22b36610.js";import{r as m}from"./vue.esm-bundler-2f1a0c70.js";import"./PhCaretRight.vue-6237ce29.js";import"./index-a6b7ce87.js";import"./index-8f1fe35f.js";import"./index-9a8885c9.js";import"./PhCheck.vue-9f721f1b.js";import"./index-f21b012c.js";import"./index-cbfcde6e.js";import"./index-46a4f45a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7674da9c.js";import"./index-19c2c983.js";import"./index-3332a755.js";import"./index-3db2181b.js";import"./index-2f0e7de4.js";import"./PhCaretDown.vue-93a8c713.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e8bb37d.js";import"./PhWarningCircle.vue-46898c60.js";import"./index-9af113e7.js";import"./PhWarning.vue-9de62ec5.js";import"./index-250426ec.js";import"./index-380c1435.js";import"./index-5e523301.js";import"./index-9a264dd8.js";import"./index-7feccfd3.js";import"./index-3c98fdd2.js";import"./index-7992c590.js";import"./index-42599c3e.js";import"./index-12ccc56c.js";import"./index-25fa1041.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
