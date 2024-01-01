import{c as a,d as C}from"./index-sx8a-_1O.js";import{r as e}from"./vue.esm-bundler-U1mN_w1c.js";import"./PhCaretRight.vue-oc3ZNeuD.js";import"./index-tpmOQRgO.js";import"./index-YPuapsoM.js";import"./index-o4qo-L9t.js";import"./PhCheck.vue-sJ4YRl3f.js";import"./index-LugFut2P.js";import"./index-FGDhO6oI.js";import"./index-cLvk_ZOz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-Y6LZPOcL.js";import"./index-ToBx9UoQ.js";import"./index-dU9uQFtL.js";import"./index-q92zW2ka.js";import"./index-0lhbIIFJ.js";import"./PhCaretDown.vue-3MXhEOMw.js";import"./index-JoP2b90D.js";import"./PhWarningCircle.vue-sNGinm7E.js";import"./index-KB86D1Ku.js";import"./index-OEAVk76a.js";import"./index-Z0KAZX73.js";import"./PhWarning.vue-VmnKjyII.js";import"./index-K-BiyT7S.js";import"./index-PKXGh8SZ.js";import"./index-HULBzfcb.js";import"./index-SLwA-m6W.js";import"./index-7Kofsbf0.js";import"./index-utLabvHJ.js";import"./index-CSzTOa39.js";import"./_commonjsHelpers-4gQjN7DL.js";const V={title:"Ui/DaterangePicker",component:a,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},onBlur:{},onFocus:{},"onUpdate:dateRange":{},"onUpdate:dateRangeComparison":{},"onUpdate:perspectiveDate":{},"onUpdate:perspectiveDateComparison":{},"onUpdate:activePreset":{},"onUpdate:activePresetComparison":{},"onUpdate:perspectivePreset":{},"onUpdate:perspectivePresetComparison":{},onChange:{}},args:{title:"Date range picker",condensed:!1,readonly:!1,enableComparison:!0,enablePerspective:!0}},t={render:p=>({components:{DaterangePicker:a},setup:()=>{const s=e([new Date,C(new Date,30)]),i=e(void 0),c=e(void 0),m=e(void 0),d=e(void 0),v=e(void 0),l=e(void 0),P=e(void 0),g=e(!1);return{args:p,dateRange:s,dateRangeComparison:i,perspectiveDate:c,perspectiveDateComparison:m,activePreset:d,activePresetComparison:v,perspectivePreset:l,perspectivePresetComparison:P,showComparison:g}},template:`
      <DaterangePicker
        v-bind="args"
        v-model:date-range="dateRange"
        v-model:date-range-comparison="dateRangeComparison"
        v-model:perspective-date="perspectiveDate"
        v-model:perspective-date-comparison="perspectiveDateComparison"
        v-model:active-preset="activePreset"
        v-model:active-preset-comparison="activePresetComparison"
        v-model:perspective-preset="perspectivePreset"
        v-model:perspective-preset-comparison="perspectivePresetComparison"
        v-model:show-comparison="showComparison"
      >
      </DaterangePicker>
      `})};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DaterangePicker
    },
    setup: () => {
      const dateRange = ref([new Date(), addDays(new Date(), 30)]);
      const dateRangeComparison = ref(undefined);
      const perspectiveDate = ref(undefined);
      const perspectiveDateComparison = ref(undefined);
      const activePreset = ref(undefined);
      const activePresetComparison = ref(undefined);
      const perspectivePreset = ref(undefined);
      const perspectivePresetComparison = ref(undefined);
      const showComparison = ref(false);
      return {
        args,
        dateRange,
        dateRangeComparison,
        perspectiveDate,
        perspectiveDateComparison,
        activePreset,
        activePresetComparison,
        perspectivePreset,
        perspectivePresetComparison,
        showComparison
      };
    },
    template: \`
      <DaterangePicker
        v-bind="args"
        v-model:date-range="dateRange"
        v-model:date-range-comparison="dateRangeComparison"
        v-model:perspective-date="perspectiveDate"
        v-model:perspective-date-comparison="perspectiveDateComparison"
        v-model:active-preset="activePreset"
        v-model:active-preset-comparison="activePresetComparison"
        v-model:perspective-preset="perspectivePreset"
        v-model:perspective-preset-comparison="perspectivePresetComparison"
        v-model:show-comparison="showComparison"
      >
      </DaterangePicker>
      \`
  })
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,V as default};
