import{_ as p,p as s}from"./index-4589bccd.js";import{r as m}from"./vue.esm-bundler-d631efa9.js";import"./PhCaretRight.vue-058956ce.js";import"./index-01ce3e4d.js";import"./index-fbf8ffd5.js";import"./index-bac46253.js";import"./PhCheck.vue-06252efc.js";import"./index-99b6f554.js";import"./index-449ab7cc.js";import"./index-27ef2dcf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-981d5bc2.js";import"./index-0faa3e16.js";import"./index-45c625bf.js";import"./index-0a641469.js";import"./index-edee24c9.js";import"./PhCaretDown.vue-dd59dd83.js";import"./index-0c053482.js";import"./PhWarningCircle.vue-54a8d4cd.js";import"./index-1263b94b.js";import"./PhWarning.vue-ef4e26f8.js";import"./index-62f9a98d.js";import"./index-dcaa9eea.js";import"./index-6964d622.js";import"./index-385a42b4.js";import"./index-c19cb848.js";import"./index-8baabd7a.js";import"./index-82ba3e93.js";import"./index-398f8f6a.js";import"./index-453c61c2.js";import"./_commonjsHelpers-de833af9.js";import"./index-3e5b2d82.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,H as default};
