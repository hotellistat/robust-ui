import{_ as p,p as s}from"./index-2ea8756c.js";import{r as m}from"./vue.esm-bundler-b2033fd2.js";import"./PhCaretRight.vue-e2c7635c.js";import"./index-367ed299.js";import"./index-b204258c.js";import"./index-78cf3a4a.js";import"./PhCheck.vue-dec63360.js";import"./index-d3b88f5b.js";import"./index-2e6aa3b9.js";import"./index-488bc39e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5c990de3.js";import"./index-a2ea4aec.js";import"./index-693acf9b.js";import"./index-750889b2.js";import"./index-9c32d6c6.js";import"./PhCaretDown.vue-e5f4bd51.js";import"./_commonjsHelpers-de833af9.js";import"./index-af6d963e.js";import"./PhWarningCircle.vue-7ee36e3e.js";import"./index-f943382a.js";import"./PhWarning.vue-cf185922.js";import"./index-bbb6ccd6.js";import"./index-89c710e1.js";import"./index-2aa0caa9.js";import"./index-ff029517.js";import"./index-91fde20b.js";import"./index-7701de0f.js";import"./index-a85164f7.js";import"./index-86fc2c29.js";import"./index-33a53e32.js";import"./index-49e0b4fd.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
