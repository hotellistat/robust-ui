import{c as p}from"./index-f7aaa309.js";import{r as e}from"./vue.esm-bundler-0c98e3e1.js";import"./PhCaretRight.vue-7a2b7b17.js";import"./index-ea21c5c1.js";import"./index-6a018c90.js";import"./index-915c60b9.js";import"./PhCheck.vue-f1236021.js";import"./index-cbdf116b.js";import"./index-74124bbd.js";import"./index-e4ccb488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-8e26141a.js";import"./index-9f051482.js";import"./index-b4a44b8d.js";import"./index-a15e1ab7.js";import"./index-c18b567d.js";import"./PhCaretDown.vue-c6ed26f7.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-62213630.js";import"./PhWarningCircle.vue-5bc9a8b8.js";import"./index-69395e6a.js";import"./PhWarning.vue-c9232fe6.js";import"./index-1dcf8a6b.js";import"./index-d29e59a6.js";import"./index-cda6547a.js";import"./index-da865374.js";import"./index-0d125223.js";import"./index-b8520628.js";import"./index-61a73380.js";import"./index-07d63fbc.js";import"./index-3797bb42.js";import"./index-7c8f2fa5.js";const V={title:"Ui/DaterangePicker",component:p,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},onBlur:{},onFocus:{},"onUpdate:dateRange":{},"onUpdate:dateRangeComparison":{},"onUpdate:perspectiveDate":{},"onUpdate:perspectiveDateComparison":{},"onUpdate:activePreset":{},"onUpdate:activePresetComparison":{},"onUpdate:perspectivePreset":{},"onUpdate:perspectivePresetComparison":{},onChange:{}},args:{condensed:!1,readonly:!1,enableComparison:!0,enablePerspective:!0,filters:[{title:"On the books",value:"on_the_books"},{title:"Budget",value:"budget"}],comparisonPresets:[{title:"STLY by timeframe",value:"STLY_timeframe"},{title:"LY ACT by timeframe",value:"LY_ACT_TIMEFRAME"}]}},t={render:a=>({components:{DaterangePicker:p},setup:()=>{const s=e(void 0),i=e([]),c=e(void 0),m=e(void 0),d=e(void 0),v=e(void 0),l=e(void 0),P=e(void 0),C=e(!0);return{args:a,dateRange:s,dateRangeComparison:i,perspectiveDate:c,perspectiveDateComparison:m,activePreset:d,activePresetComparison:v,perspectivePreset:l,perspectivePresetComparison:P,showComparison:C}},template:`
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
      const dateRange = ref(undefined);
      const dateRangeComparison = ref([]);
      const perspectiveDate = ref(undefined);
      const perspectiveDateComparison = ref(undefined);
      const activePreset = ref(undefined);
      const activePresetComparison = ref(undefined);
      const perspectivePreset = ref(undefined);
      const perspectivePresetComparison = ref(undefined);
      const showComparison = ref(true);
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
