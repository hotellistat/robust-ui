import{_ as p,p as s}from"./index-fa093ad8.js";import{r as m}from"./vue.esm-bundler-3e10b1cd.js";import"./PhCaretRight.vue-5868ab31.js";import"./index-f8b74898.js";import"./index-0780a91c.js";import"./index-fc7c47f8.js";import"./PhCheck.vue-c52a3c08.js";import"./index-b9ff3cef.js";import"./index-7155124e.js";import"./index-9ae61987.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-74404727.js";import"./index-06fb2644.js";import"./index-fb423059.js";import"./index-3a0fa72c.js";import"./index-3ec5c200.js";import"./PhCaretDown.vue-859c5bf5.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-f707b652.js";import"./PhWarningCircle.vue-a8887532.js";import"./index-3dee12d2.js";import"./PhWarning.vue-8f256f3e.js";import"./index-a1a4a2f1.js";import"./index-26cc95ce.js";import"./index-3a97e302.js";import"./index-c355538d.js";import"./index-ed542f97.js";import"./index-adbae219.js";import"./index-8a567b64.js";import"./index-db42dd93.js";import"./index-b3f05d78.js";import"./index-fd6ce722.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
