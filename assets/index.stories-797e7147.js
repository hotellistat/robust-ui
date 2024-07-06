import{_ as p,p as s}from"./index-f7aaa309.js";import{r as m}from"./vue.esm-bundler-0c98e3e1.js";import"./PhCaretRight.vue-7a2b7b17.js";import"./index-ea21c5c1.js";import"./index-6a018c90.js";import"./index-915c60b9.js";import"./PhCheck.vue-f1236021.js";import"./index-cbdf116b.js";import"./index-74124bbd.js";import"./index-e4ccb488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-8e26141a.js";import"./index-9f051482.js";import"./index-b4a44b8d.js";import"./index-a15e1ab7.js";import"./index-c18b567d.js";import"./PhCaretDown.vue-c6ed26f7.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-62213630.js";import"./PhWarningCircle.vue-5bc9a8b8.js";import"./index-69395e6a.js";import"./PhWarning.vue-c9232fe6.js";import"./index-1dcf8a6b.js";import"./index-d29e59a6.js";import"./index-cda6547a.js";import"./index-da865374.js";import"./index-0d125223.js";import"./index-b8520628.js";import"./index-61a73380.js";import"./index-07d63fbc.js";import"./index-3797bb42.js";import"./index-7c8f2fa5.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
