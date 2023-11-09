import{e as a,p as s}from"./index-1cf8b557.js";import{r as m}from"./vue.esm-bundler-ebcf9369.js";import"./index-286161d2.js";import"./PhCheck.vue-910ea200.js";import"./index-bccff33e.js";import"./PhCaretRight.vue-aa6fb311.js";import"./index-09d52eb2.js";import"./index-0a4d6cf7.js";import"./index-a2b4b7ff.js";import"./index-9c2bee41.js";import"./index-dc269292.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5979ae88.js";import"./index-c6cd5b92.js";import"./index-44e83eb1.js";import"./index-a579ba8f.js";import"./PhCaretDown.vue-76628bb3.js";import"./index-f9c8087d.js";import"./PhWarningCircle.vue-346e7bab.js";import"./index-321b96c5.js";import"./index-c0f46616.js";import"./index-c74d5e7d.js";import"./PhWarning.vue-5df51850.js";import"./index-40b68041.js";import"./index-27180d89.js";import"./index-945804a9.js";import"./index-afdcd96e.js";import"./index-b6bed80e.js";import"./index-37832a1d.js";import"./index-a5ee0ed5.js";import"./_commonjsHelpers-de833af9.js";const G={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=index.stories-febdee4f.js.map
