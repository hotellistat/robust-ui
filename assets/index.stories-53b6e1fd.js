import{_ as p,p as s}from"./index-4f276869.js";import{r as m}from"./vue.esm-bundler-0373854b.js";import"./PhCaretRight.vue-42ea7355.js";import"./index-a4f49a66.js";import"./index-ebf6f712.js";import"./index-b860cc56.js";import"./PhCheck.vue-a6a00380.js";import"./index-e0602dad.js";import"./index-5a521923.js";import"./index-38b0fde2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-130c47b0.js";import"./index-aa89bf66.js";import"./index-5c8f9725.js";import"./index-fe73e184.js";import"./index-70035db1.js";import"./PhCaretDown.vue-e4573649.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fb1f7c04.js";import"./PhWarningCircle.vue-ccb33d13.js";import"./index-39873b0e.js";import"./PhWarning.vue-b3989803.js";import"./index-8ceadaf8.js";import"./index-af6497a4.js";import"./index-9d3f790a.js";import"./index-8af3af6f.js";import"./index-7deb46d7.js";import"./index-62499eb5.js";import"./index-5bddcb50.js";import"./index-7b2ff929.js";import"./index-ab38f846.js";import"./index-f8b2b370.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
