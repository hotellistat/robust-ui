import{_ as a,p as s}from"./index-4bc6d3c9.js";import{a as m}from"./vue.esm-bundler-17561e39.js";import"./PhCaretRight.vue-eb8c336c.js";import"./index-9f786b8e.js";import"./index-04f315e1.js";import"./index-745ce5ee.js";import"./PhCheck.vue-8f274b2b.js";import"./index-dc6dca65.js";import"./index-95c8f8e0.js";import"./index-e8bfdf8b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5755a50b.js";import"./index-70d4b3d5.js";import"./index-7327a516.js";import"./index-9e2b4583.js";import"./PhCaretDown.vue-87a41fe5.js";import"./index-59e1a890.js";import"./PhWarningCircle.vue-fc65e2d4.js";import"./index-1694b2ee.js";import"./index-3cafb0ea.js";import"./index-f994fa20.js";import"./PhWarning.vue-9fff1b8c.js";import"./index-1f6e8ca0.js";import"./index-c4b1fc12.js";import"./index-475986b9.js";import"./index-52361d40.js";import"./index-5cbc5df8.js";import"./index-b8008aff.js";import"./index-56457b85.js";import"./_commonjsHelpers-87174ba5.js";const F={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-fb1c8583.js.map
