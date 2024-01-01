import{_ as a,p as s}from"./index-e88037f8.js";import{r as m}from"./vue.esm-bundler-af08b7b0.js";import"./PhCaretRight.vue-08a17de6.js";import"./index-0a0fa230.js";import"./index-54d94260.js";import"./index-13867c25.js";import"./PhCheck.vue-d61ee31d.js";import"./index-fde0acfc.js";import"./index-b032ebef.js";import"./index-84430697.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-aa8dde2a.js";import"./index-e225b605.js";import"./index-3f74c8d7.js";import"./index-afdc6f80.js";import"./index-704610ab.js";import"./PhCaretDown.vue-5eaeff9c.js";import"./index-c74939c9.js";import"./PhWarningCircle.vue-351e1363.js";import"./index-0484aa64.js";import"./index-9c90464e.js";import"./index-e67e5908.js";import"./PhWarning.vue-c0ab9d24.js";import"./index-fd68cf33.js";import"./index-8e8da391.js";import"./index-22eda798.js";import"./index-fc78b686.js";import"./index-87c8af66.js";import"./index-f6f7f089.js";import"./index-27004747.js";import"./_commonjsHelpers-de833af9.js";const G={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
