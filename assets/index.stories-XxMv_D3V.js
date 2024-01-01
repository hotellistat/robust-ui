import{_ as a,p as s}from"./index-sx8a-_1O.js";import{r as m}from"./vue.esm-bundler-U1mN_w1c.js";import"./PhCaretRight.vue-oc3ZNeuD.js";import"./index-tpmOQRgO.js";import"./index-YPuapsoM.js";import"./index-o4qo-L9t.js";import"./PhCheck.vue-sJ4YRl3f.js";import"./index-LugFut2P.js";import"./index-FGDhO6oI.js";import"./index-cLvk_ZOz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-Y6LZPOcL.js";import"./index-ToBx9UoQ.js";import"./index-dU9uQFtL.js";import"./index-q92zW2ka.js";import"./index-0lhbIIFJ.js";import"./PhCaretDown.vue-3MXhEOMw.js";import"./index-JoP2b90D.js";import"./PhWarningCircle.vue-sNGinm7E.js";import"./index-KB86D1Ku.js";import"./index-OEAVk76a.js";import"./index-Z0KAZX73.js";import"./PhWarning.vue-VmnKjyII.js";import"./index-K-BiyT7S.js";import"./index-PKXGh8SZ.js";import"./index-HULBzfcb.js";import"./index-SLwA-m6W.js";import"./index-7Kofsbf0.js";import"./index-utLabvHJ.js";import"./index-CSzTOa39.js";import"./_commonjsHelpers-4gQjN7DL.js";const G={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
