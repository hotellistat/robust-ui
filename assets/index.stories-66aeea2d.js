import{_ as p,p as s}from"./index-2e2c721e.js";import{r as m}from"./vue.esm-bundler-9cf70074.js";import"./PhCaretRight.vue-f508473b.js";import"./index-3e809143.js";import"./index-cf38702e.js";import"./index-e5a5b6af.js";import"./PhCheck.vue-a2ac5a0b.js";import"./index-751389b7.js";import"./index-bbb47c86.js";import"./index-a9f8e0f8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-cbd631cc.js";import"./index-401a850c.js";import"./index-3a49f04f.js";import"./index-f6ae1e3f.js";import"./index-053ddc6a.js";import"./PhCaretDown.vue-93ce0372.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fd25965d.js";import"./PhWarningCircle.vue-ba0c66b1.js";import"./index-9c979a71.js";import"./PhWarning.vue-3732c971.js";import"./index-f976adf3.js";import"./index-477f502e.js";import"./index-defbb035.js";import"./index-fbc885b0.js";import"./index-12f0fbd1.js";import"./index-81d6662b.js";import"./index-383b3814.js";import"./index-a9eb0c1d.js";import"./index-90359b98.js";import"./index-8c06287e.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
