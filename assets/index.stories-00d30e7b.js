import{_ as p,p as s}from"./index-7ab4e3cb.js";import{r as m}from"./vue.esm-bundler-1415f10d.js";import"./PhCaretRight.vue-c792c773.js";import"./index-c86cea6c.js";import"./index-17412b18.js";import"./index-4249d0e1.js";import"./PhCheck.vue-6eab9662.js";import"./index-e5191172.js";import"./index-f6c81f56.js";import"./index-4c74889a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3f7bae1f.js";import"./index-e82f58a1.js";import"./index-9e658c62.js";import"./index-28f4c80d.js";import"./index-63cb6f2d.js";import"./PhCaretDown.vue-6d047fd4.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-3ba1cfef.js";import"./PhWarningCircle.vue-7012dbd6.js";import"./index-b8ce9251.js";import"./PhWarning.vue-d51f35ea.js";import"./index-4b5e66fc.js";import"./index-4999d272.js";import"./index-d092110b.js";import"./index-269ddc29.js";import"./index-94a18a89.js";import"./index-c5ebee70.js";import"./index-6cc68c6b.js";import"./index-bd067066.js";import"./index-69dbf21a.js";import"./index-acc7b459.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
