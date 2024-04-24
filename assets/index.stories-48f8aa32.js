import{_ as p,p as s}from"./index-d17ac250.js";import{r as m}from"./vue.esm-bundler-055c4c85.js";import"./PhCaretRight.vue-611181c5.js";import"./index-dd41b3c6.js";import"./index-91538fcc.js";import"./index-439c4340.js";import"./PhCheck.vue-93de0707.js";import"./index-f12a484c.js";import"./index-f41d5f48.js";import"./index-49e4792d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-0ec1b475.js";import"./index-61c8c02d.js";import"./index-4d6570b2.js";import"./index-47143930.js";import"./index-6a93e7ba.js";import"./PhCaretDown.vue-fc97a977.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-db286dc5.js";import"./PhWarningCircle.vue-f7cfedaa.js";import"./index-1494bd6d.js";import"./PhWarning.vue-1c367713.js";import"./index-dec26a00.js";import"./index-18d0fd1d.js";import"./index-48739506.js";import"./index-424011d1.js";import"./index-be10592a.js";import"./index-e28967d1.js";import"./index-cee761bf.js";import"./index-065955f8.js";import"./index-e88d6a77.js";import"./index-2ed8dbdf.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
