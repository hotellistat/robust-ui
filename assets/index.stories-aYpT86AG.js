import{_ as p,p as s}from"./index-eCnKTUXy.js";import{r as m}from"./vue.esm-bundler-K5TEJ--t.js";import"./PhCaretRight.vue-dlXRfe80.js";import"./index-4551Cd6c.js";import"./index-KL80NxgM.js";import"./index-wFcuGPju.js";import"./PhCheck.vue-U5B8rUzB.js";import"./index-xHrpYyuz.js";import"./index-Rza8L8ts.js";import"./index-rpwshKwm.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-pJWFkETw.js";import"./index-7Q3Hr3U6.js";import"./index-aouWP0zy.js";import"./index-qylRT29W.js";import"./index-nV4tVoxk.js";import"./PhCaretDown.vue-C0t7Susw.js";import"./index-BYYA_Utq.js";import"./PhWarningCircle.vue-iOVsCZLu.js";import"./index-_Veg0b7T.js";import"./index-rtLxIiL9.js";import"./index--GwMOkHI.js";import"./PhWarning.vue-8eg3yxdW.js";import"./index-4_el2xJL.js";import"./index-HxKYYJ8T.js";import"./index-mEmu92-W.js";import"./index-Vx_2mOtr.js";import"./index--L_maO6f.js";import"./index-gDMgr7RS.js";import"./index-VqWTpiqi.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LT2-D9pZ.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
