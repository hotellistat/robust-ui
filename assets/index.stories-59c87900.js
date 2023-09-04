import{a,b as g}from"./index-d435a255.js";import{r as e}from"./vue.esm-bundler-4b093791.js";import"./index-e446e932.js";import"./PhCheck.vue-c83224dd.js";import"./index-28ca9316.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-c4b142bd.js";import"./index-3a409b03.js";import"./index-06095ad2.js";import"./index-3f9b8550.js";import"./index-3ca9fd0b.js";import"./index-5704c243.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-a820f662.js";import"./index-dfeae9aa.js";import"./index-113bbb3b.js";import"./index-1fc27f8c.js";import"./PhCaretDown.vue-6e23ca25.js";import"./index-98a6a1db.js";import"./PhWarningCircle.vue-f5df56c7.js";import"./index-67ef798e.js";import"./index-53ebb12c.js";import"./index-15cec3ca.js";import"./PhWarning.vue-eb212a4c.js";import"./index-9b2ccf9e.js";import"./index-85c55c81.js";import"./index-4acbc033.js";import"./index-b97c47da.js";import"./index-71194958.js";import"./index-37766973.js";import"./index-2fbd1fb3.js";import"./_commonjsHelpers-de833af9.js";const V={title:"Ui/DaterangePicker",component:a,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},onBlur:{},onFocus:{},"onUpdate:dateRange":{},"onUpdate:dateRangeComparison":{},"onUpdate:perspectiveDate":{},"onUpdate:perspectiveDateComparison":{},"onUpdate:activePreset":{},"onUpdate:activePresetComparison":{},"onUpdate:perspectivePreset":{},"onUpdate:perspectivePresetComparison":{},onChange:{}},args:{title:"Date range picker",condensed:!1,readonly:!1,enableComparison:!0,enablePerspective:!0}},t={render:p=>({components:{DaterangePicker:a},setup:()=>{const s=e([new Date,g(new Date,30)]),i=e(void 0),c=e(void 0),m=e(void 0),d=e(void 0),v=e(void 0),l=e(void 0),P=e(void 0);return{args:p,dateRange:s,dateRangeComparison:i,perspectiveDate:c,perspectiveDateComparison:m,activePreset:d,activePresetComparison:v,perspectivePreset:l,perspectivePresetComparison:P}},template:`
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
//# sourceMappingURL=index.stories-59c87900.js.map
