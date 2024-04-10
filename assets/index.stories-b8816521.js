import{_ as p,p as s}from"./index-df005e9b.js";import{r as m}from"./vue.esm-bundler-72d4ff20.js";import"./PhCaretRight.vue-824c69d1.js";import"./index-9e32e11f.js";import"./index-2f0c86a9.js";import"./index-85f1818c.js";import"./PhCheck.vue-9e6a3c2e.js";import"./index-b7a303c1.js";import"./index-de0bd467.js";import"./index-27de333b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d531d5f5.js";import"./index-29350378.js";import"./index-7fd4820d.js";import"./index-d91f25a7.js";import"./index-c1abcfe0.js";import"./PhCaretDown.vue-b8e75b60.js";import"./index-20828a7e.js";import"./PhWarningCircle.vue-1411aa22.js";import"./index-717081f7.js";import"./PhWarning.vue-c01382f6.js";import"./index-7fbfe550.js";import"./index-aab83b42.js";import"./index-71b1c673.js";import"./index-323d997c.js";import"./index-00af0eaf.js";import"./index-2e7b94a6.js";import"./index-dc1f6e39.js";import"./index-4133167f.js";import"./index-6d20ce66.js";import"./_commonjsHelpers-de833af9.js";import"./index-2bda9442.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
