import{_ as a,p as s}from"./index-4147667a.js";import{j as m}from"./vue.esm-bundler-49cceb47.js";import"./PhCaretRight.vue-28a5f669.js";import"./index-bd1ef4cf.js";import"./index-60e54176.js";import"./index-7e88fd75.js";import"./PhCheck.vue-2a3aa9ce.js";import"./index-40b6dd35.js";import"./index-4ef3c5a7.js";import"./index-ced6a88b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-98f12cb9.js";import"./index-369a5683.js";import"./index-b2de816c.js";import"./index-771a5c2b.js";import"./PhCaretDown.vue-c3f11e7b.js";import"./index-e08ff25f.js";import"./PhWarningCircle.vue-d9e821d9.js";import"./index-72edcd83.js";import"./index-ee1d73e7.js";import"./index-0173aba3.js";import"./PhWarning.vue-1bf992fd.js";import"./index-620eb653.js";import"./index-039a550a.js";import"./index-f04f24eb.js";import"./index-c24fedc0.js";import"./index-0ad4c76b.js";import"./index-0804d564.js";import"./index-780069fb.js";const B={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,B as default};
//# sourceMappingURL=index.stories-49c51fb9.js.map
