import{_ as p,p as s}from"./index-b1a15c24.js";import{r as m}from"./vue.esm-bundler-1c357e36.js";import"./PhCaretRight.vue-a9db7d7a.js";import"./index-9f6eb20a.js";import"./index-2348dd5e.js";import"./index-c6ed8b1a.js";import"./PhCheck.vue-5043450a.js";import"./index-5666bc06.js";import"./index-56d33763.js";import"./index-1e12db06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-fa6438c8.js";import"./index-9cef77e2.js";import"./index-b5f11823.js";import"./index-a6fd7365.js";import"./index-9e99b68a.js";import"./PhCaretDown.vue-68ceef7b.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e01e20c.js";import"./PhWarningCircle.vue-db9629c4.js";import"./index-efecb5ea.js";import"./PhWarning.vue-84a7b139.js";import"./index-caeb6456.js";import"./index-5b207562.js";import"./index-57b0e8e2.js";import"./index-743b45f3.js";import"./index-933dfdc5.js";import"./index-cd2a1313.js";import"./index-4d459671.js";import"./index-529fd614.js";import"./index-009e303b.js";import"./index-ca186dab.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
