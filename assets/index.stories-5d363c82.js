import{a,b as g}from"./index-63b54f4f.js";import{r as e}from"./vue.esm-bundler-22b53bfc.js";import"./index-bdfed0c8.js";import"./PhCheck.vue-4eaa9e07.js";import"./index-0209670b.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-ab999ed8.js";import"./index-3c486f74.js";import"./index-f8a39b50.js";import"./index-21a0a241.js";import"./index-806109a3.js";import"./index-70413851.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-71bc0e30.js";import"./index-09ffe11c.js";import"./index-f0e16eec.js";import"./index-3e7c15ad.js";import"./PhCaretDown.vue-8f79e38b.js";import"./index-ea618137.js";import"./PhWarningCircle.vue-46d5e3f6.js";import"./index-77b5f578.js";import"./index-c9ac3d5c.js";import"./index-65fa0a4f.js";import"./PhWarning.vue-967f20ed.js";import"./index-c0a29e75.js";import"./index-2b207480.js";import"./index-af568efc.js";import"./index-956cca8d.js";import"./index-104bc87b.js";import"./index-da374c1b.js";import"./index-8f2a5f12.js";import"./_commonjsHelpers-de833af9.js";const V={title:"Ui/DaterangePicker",component:a,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},onBlur:{},onFocus:{},"onUpdate:dateRange":{},"onUpdate:dateRangeComparison":{},"onUpdate:perspectiveDate":{},"onUpdate:perspectiveDateComparison":{},"onUpdate:activePreset":{},"onUpdate:activePresetComparison":{},"onUpdate:perspectivePreset":{},"onUpdate:perspectivePresetComparison":{},onChange:{}},args:{title:"Date range picker",condensed:!1,readonly:!1,enableComparison:!0,enablePerspective:!0}},t={render:p=>({components:{DaterangePicker:a},setup:()=>{const s=e([new Date,g(new Date,30)]),i=e(void 0),c=e(void 0),m=e(void 0),d=e(void 0),v=e(void 0),l=e(void 0),P=e(void 0);return{args:p,dateRange:s,dateRangeComparison:i,perspectiveDate:c,perspectiveDateComparison:m,activePreset:d,activePresetComparison:v,perspectivePreset:l,perspectivePresetComparison:P}},template:`
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
      >
      </DaterangePicker>
      `})};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      return {
        args,
        dateRange,
        dateRangeComparison,
        perspectiveDate,
        perspectiveDateComparison,
        activePreset,
        activePresetComparison,
        perspectivePreset,
        perspectivePresetComparison
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
      >
      </DaterangePicker>
      \`
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const W=["Default"];export{t as Default,W as __namedExportsOrder,V as default};
//# sourceMappingURL=index.stories-5d363c82.js.map
