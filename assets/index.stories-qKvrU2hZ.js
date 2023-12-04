import{e as a,p as s}from"./index-xQdPCOih.js";import{r as m}from"./vue.esm-bundler-ZZc3duQ9.js";import"./index-wDSPh2MS.js";import"./PhCheck.vue-SjdxJUh_.js";import"./index-fjIZKoVZ.js";import"./PhCaretRight.vue-gHVbAUnG.js";import"./index-bM8dfERt.js";import"./index-KUNjbr23.js";import"./index-E2TMcxML.js";import"./index-IpcoKZKE.js";import"./index-WxuYYmVk.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-F4HejbI_.js";import"./index-v_Zhq6xj.js";import"./index-cD5pOX5N.js";import"./index-5AA-1Csv.js";import"./PhCaretDown.vue-zsXIbriY.js";import"./index-2kUHkoqZ.js";import"./PhWarningCircle.vue-QTcTiKMq.js";import"./index-04PBf7SZ.js";import"./index-YAAidyoN.js";import"./index-0Fnqjw1k.js";import"./PhWarning.vue-bZTGYL4s.js";import"./index-c3_gO9A-.js";import"./index-gbe0978B.js";import"./index-BE9bb5tC.js";import"./index-P_INR-KG.js";import"./index-KPICpn-D.js";import"./index-pWd_5Euw.js";import"./index-hZ2TzwfU.js";import"./_commonjsHelpers-4gQjN7DL.js";const G={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
//# sourceMappingURL=index.stories-qKvrU2hZ.js.map
