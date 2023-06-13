import{_ as a,p as s}from"./index-364f7923.js";import{j as m}from"./vue.esm-bundler-b37ea11a.js";import"./PhCaretRight.vue-e7b7305c.js";import"./index-249efe23.js";import"./index-ed922b58.js";import"./index-b715e563.js";import"./PhCheck.vue-97ccf9ac.js";import"./index-e13631fd.js";import"./index-07cce8f0.js";import"./index-48ca93db.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-148ec06e.js";import"./index-f2c357f9.js";import"./index-533ae1c1.js";import"./index-173ce52e.js";import"./PhCaretDown.vue-34b1f9d1.js";import"./index-8eaf7fc5.js";import"./PhWarningCircle.vue-086f4217.js";import"./index-223ac432.js";import"./index-10a8790a.js";import"./index-300798c5.js";import"./PhWarning.vue-22197565.js";import"./index-c168056e.js";import"./index-eac1ed8c.js";import"./index-8b5ba3e1.js";import"./index-a990aa87.js";import"./index-17b9b820.js";import"./index-346bfbed.js";import"./index-85b188c3.js";const B={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
//# sourceMappingURL=index.stories-0ae049b6.js.map
