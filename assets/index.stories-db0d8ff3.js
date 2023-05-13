import{_ as a,p as s}from"./index-f4fe37fa.js";import{j as m}from"./vue.esm-bundler-9a71f774.js";import"./PhCaretRight.vue-c668cf44.js";import"./index-262d6551.js";import"./index-f32819c3.js";import"./index-6a764f00.js";import"./PhCheck.vue-3e2428e4.js";import"./index-fc0967de.js";import"./index-349da6d7.js";import"./index-54763045.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-58e29f26.js";import"./index-dd586679.js";import"./index-9e5b5138.js";import"./index-8fe0218e.js";import"./PhCaretDown.vue-ef75451e.js";import"./index-fe8dcde2.js";import"./PhWarningCircle.vue-9e2f1763.js";import"./index-7693f52f.js";import"./PhWarning.vue-98bac9a5.js";import"./index-9c5ca614.js";import"./index-6430df8f.js";import"./index-750712ab.js";import"./index-86ec45b9.js";import"./index-dfad5d4a.js";import"./index-26e2b245.js";import"./index-40e9161a.js";import"./index-93882151.js";import"./index-128ea0ee.js";import"./index-d5a40507.js";const F={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-db0d8ff3.js.map
