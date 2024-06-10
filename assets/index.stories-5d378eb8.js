import{_ as p,p as s}from"./index-9618a4f0.js";import{r as m}from"./vue.esm-bundler-7e0ca5bb.js";import"./PhCaretRight.vue-5eff2c5e.js";import"./index-62b33547.js";import"./index-d897f1f8.js";import"./index-8a2e9412.js";import"./PhCheck.vue-14610fd1.js";import"./index-f4a1cd03.js";import"./index-b7da407d.js";import"./index-28ffac6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-14150d1c.js";import"./index-b0ae763b.js";import"./index-1a29d639.js";import"./index-8b26d0de.js";import"./index-9c6bd464.js";import"./PhCaretDown.vue-13e53ab8.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-51f5fd0a.js";import"./PhWarningCircle.vue-8a48d2e6.js";import"./index-c27c2e6f.js";import"./PhWarning.vue-25009bd4.js";import"./index-54184272.js";import"./index-b8db9072.js";import"./index-28ae34bf.js";import"./index-4fb3fcde.js";import"./index-fac0a23b.js";import"./index-447362c9.js";import"./index-891ecab7.js";import"./index-0d8b574b.js";import"./index-24858e83.js";import"./index-76a3bc56.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
