import{_ as p,p as s}from"./index-1f07f080.js";import{r as m}from"./vue.esm-bundler-6f49bc6f.js";import"./PhCaretRight.vue-4dfd7fd9.js";import"./index-f7d8b249.js";import"./index-32eddac2.js";import"./index-252e551c.js";import"./PhCheck.vue-584b6994.js";import"./index-645fbc8d.js";import"./index-feeb6e8a.js";import"./index-a615481d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-bd98586a.js";import"./index-785d8004.js";import"./index-b6643815.js";import"./index-10277db9.js";import"./index-ef84e4ed.js";import"./PhCaretDown.vue-dde853fc.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-1f188261.js";import"./PhWarningCircle.vue-4ed838bf.js";import"./index-5893e872.js";import"./PhWarning.vue-70085507.js";import"./index-4dab90b9.js";import"./index-7e509391.js";import"./index-86bb0c0e.js";import"./index-db2680f7.js";import"./index-cca15249.js";import"./index-0fee726f.js";import"./index-f126fa57.js";import"./index-32657282.js";import"./index-ca3930a2.js";import"./index-a5d3099f.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
