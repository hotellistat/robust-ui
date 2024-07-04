import{_ as p,p as s}from"./index-ed79467b.js";import{r as m}from"./vue.esm-bundler-4fde1cfe.js";import"./PhCaretRight.vue-fa735f09.js";import"./index-d407103c.js";import"./index-a3e628cb.js";import"./index-7b240a4b.js";import"./PhCheck.vue-77d1d6d5.js";import"./index-fa11d4d6.js";import"./index-0c961d62.js";import"./index-95c72e10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d61c5a0c.js";import"./index-75e8b5cf.js";import"./index-c55dab01.js";import"./index-8116c02f.js";import"./index-367a905f.js";import"./PhCaretDown.vue-426e23d0.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-bdbc1ce2.js";import"./PhWarningCircle.vue-4d9c0992.js";import"./index-567acb92.js";import"./PhWarning.vue-bcb936fb.js";import"./index-c0fa0db6.js";import"./index-28d60884.js";import"./index-56459c0c.js";import"./index-65c5f553.js";import"./index-8178cbf3.js";import"./index-90a02073.js";import"./index-78c16031.js";import"./index-3d1926c6.js";import"./index-0ac4b6c8.js";import"./index-ae558d6c.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
