import{e as p,p as s}from"./index-6825f66c.js";import{r as m}from"./vue.esm-bundler-22b53bfc.js";import"./index-a059c78d.js";import"./PhCheck.vue-4eaa9e07.js";import"./index-0209670b.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-ab999ed8.js";import"./index-3c486f74.js";import"./index-f8a39b50.js";import"./index-21a0a241.js";import"./index-806109a3.js";import"./index-70413851.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-71bc0e30.js";import"./index-09ffe11c.js";import"./index-f0e16eec.js";import"./index-3e7c15ad.js";import"./PhCaretDown.vue-8f79e38b.js";import"./index-ea618137.js";import"./PhWarningCircle.vue-46d5e3f6.js";import"./index-77b5f578.js";import"./index-c9ac3d5c.js";import"./index-65fa0a4f.js";import"./PhWarning.vue-967f20ed.js";import"./index-c0a29e75.js";import"./index-2b207480.js";import"./index-af568efc.js";import"./index-956cca8d.js";import"./index-104bc87b.js";import"./index-da374c1b.js";import"./index-8f2a5f12.js";import"./_commonjsHelpers-de833af9.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
//# sourceMappingURL=index.stories-561d1241.js.map
