import{_ as p,p as s}from"./index-9695be45.js";import{r as m}from"./vue.esm-bundler-3bce978e.js";import"./PhCaretRight.vue-3ef90c98.js";import"./index-882b6607.js";import"./index-007812b0.js";import"./index-1ecb7cde.js";import"./PhCheck.vue-ef873fb8.js";import"./index-4b9431bf.js";import"./index-b5ae59f9.js";import"./index-9fc7401b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-73f3dee8.js";import"./index-f84509d6.js";import"./index-8e2ad2f2.js";import"./index-997b66b7.js";import"./index-09d2f5d3.js";import"./PhCaretDown.vue-db43725b.js";import"./index-0f582519.js";import"./PhWarningCircle.vue-f1ab05f8.js";import"./index-13db1a73.js";import"./PhWarning.vue-7669e175.js";import"./index-c3f74c73.js";import"./index-dd6a149c.js";import"./index-a19ad943.js";import"./index-bdee1c88.js";import"./index-25064389.js";import"./index-10a4b8c7.js";import"./index-176fb52a.js";import"./index-5997a92d.js";import"./index-154e9419.js";import"./_commonjsHelpers-de833af9.js";import"./index-1c1bac54.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
