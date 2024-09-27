import{_ as p,p as s}from"./index-61419ace.js";import{r as m}from"./vue.esm-bundler-5fdd8ab6.js";import"./PhCaretRight.vue-65fe5738.js";import"./index-fab4988d.js";import"./index-067a97f2.js";import"./index-7dab12d0.js";import"./PhCheck.vue-f0a19b25.js";import"./index-14dfe2df.js";import"./index-23aecf2a.js";import"./index-0e3aa9d0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-9d743ffa.js";import"./index-d7a657a6.js";import"./index-b2862db1.js";import"./index-54d4f55f.js";import"./index-aad9d61c.js";import"./PhCaretDown.vue-9c723a04.js";import"./_commonjsHelpers-de833af9.js";import"./index-879beed2.js";import"./PhWarningCircle.vue-ec851534.js";import"./index-70bef210.js";import"./PhWarning.vue-bbee8eb9.js";import"./index-d99262a5.js";import"./index-bcb0dcc9.js";import"./index-07f9524f.js";import"./index-856c80c0.js";import"./index-ca7f747a.js";import"./index-ae7da360.js";import"./index-070cb6dc.js";import"./index-add55788.js";import"./index-ebb28332.js";import"./index-b8d441cc.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
