import{_ as p,p as s}from"./index-e2635068.js";import{r as m}from"./vue.esm-bundler-5304782f.js";import"./PhCaretRight.vue-532aa00e.js";import"./index-457a627f.js";import"./index-64853bec.js";import"./index-db90c89f.js";import"./PhCheck.vue-ea5bd38e.js";import"./index-071cb0d2.js";import"./index-210156ca.js";import"./index-203fa594.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-be24201c.js";import"./index-9210c1aa.js";import"./index-dacb4fc9.js";import"./index-8f79d0e7.js";import"./index-01ad2f80.js";import"./PhCaretDown.vue-5bce5257.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-a6044dbe.js";import"./PhWarningCircle.vue-0ed7a858.js";import"./index-7007677a.js";import"./PhWarning.vue-e627ea19.js";import"./index-1ec12e92.js";import"./index-41b3f7a9.js";import"./index-f9466c62.js";import"./index-45a1baa9.js";import"./index-cc1bc9ef.js";import"./index-a92001d2.js";import"./index-52ac5391.js";import"./index-632a28af.js";import"./index-9b873d7b.js";import"./index-d5b13bb5.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
