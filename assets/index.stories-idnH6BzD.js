import{c as a,d as C}from"./index-eCnKTUXy.js";import{r as e}from"./vue.esm-bundler-K5TEJ--t.js";import"./PhCaretRight.vue-dlXRfe80.js";import"./index-4551Cd6c.js";import"./index-KL80NxgM.js";import"./index-wFcuGPju.js";import"./PhCheck.vue-U5B8rUzB.js";import"./index-xHrpYyuz.js";import"./index-Rza8L8ts.js";import"./index-rpwshKwm.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-pJWFkETw.js";import"./index-7Q3Hr3U6.js";import"./index-aouWP0zy.js";import"./index-qylRT29W.js";import"./index-nV4tVoxk.js";import"./PhCaretDown.vue-C0t7Susw.js";import"./index-BYYA_Utq.js";import"./PhWarningCircle.vue-iOVsCZLu.js";import"./index-_Veg0b7T.js";import"./index-rtLxIiL9.js";import"./index--GwMOkHI.js";import"./PhWarning.vue-8eg3yxdW.js";import"./index-4_el2xJL.js";import"./index-HxKYYJ8T.js";import"./index-mEmu92-W.js";import"./index-Vx_2mOtr.js";import"./index--L_maO6f.js";import"./index-gDMgr7RS.js";import"./index-VqWTpiqi.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LT2-D9pZ.js";const W={title:"Ui/DaterangePicker",component:a,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},onBlur:{},onFocus:{},"onUpdate:dateRange":{},"onUpdate:dateRangeComparison":{},"onUpdate:perspectiveDate":{},"onUpdate:perspectiveDateComparison":{},"onUpdate:activePreset":{},"onUpdate:activePresetComparison":{},"onUpdate:perspectivePreset":{},"onUpdate:perspectivePresetComparison":{},onChange:{}},args:{title:"Date range picker",condensed:!1,readonly:!1,enableComparison:!0,enablePerspective:!0}},t={render:p=>({components:{DaterangePicker:a},setup:()=>{const s=e([new Date,C(new Date,30)]),i=e(void 0),c=e(void 0),m=e(void 0),d=e(void 0),v=e(void 0),l=e(void 0),P=e(void 0),g=e(!1);return{args:p,dateRange:s,dateRangeComparison:i,perspectiveDate:c,perspectiveDateComparison:m,activePreset:d,activePresetComparison:v,perspectivePreset:l,perspectivePresetComparison:P,showComparison:g}},template:`
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,W as default};
