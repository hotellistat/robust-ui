import{_ as p,p as s}from"./index-cf753c18.js";import{r as m}from"./vue.esm-bundler-3a6ccb9d.js";import"./PhCaretRight.vue-7a865273.js";import"./index-4dbc5af7.js";import"./index-fffe1495.js";import"./index-c740f187.js";import"./PhCheck.vue-baf99df6.js";import"./index-3c86eeab.js";import"./index-882777ef.js";import"./index-5f476b10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5a91f5ec.js";import"./index-a8d4d443.js";import"./index-63d9c9dd.js";import"./index-6fc90b9b.js";import"./index-e7b79041.js";import"./PhCaretDown.vue-cf6068cb.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-9cece67e.js";import"./PhWarningCircle.vue-53e622e7.js";import"./index-827efad9.js";import"./PhWarning.vue-b7a22815.js";import"./index-d93382a3.js";import"./index-37cfe9e2.js";import"./index-a109fab6.js";import"./index-68df4b28.js";import"./index-ce28540e.js";import"./index-420f0172.js";import"./index-289cb84b.js";import"./index-e8da600d.js";import"./index-60df7083.js";import"./index-ab63aaee.js";const I={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
