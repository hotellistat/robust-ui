import{_ as a,p as s}from"./index-b90b71b6.js";import{j as m}from"./vue.esm-bundler-f1fc8c70.js";import"./PhCaretRight.vue-be2c54d3.js";import"./index-a6e99cfe.js";import"./index-46158cd1.js";import"./index-247454b2.js";import"./PhCheck.vue-2a6e97ce.js";import"./index-03989efd.js";import"./index-e7f12c4f.js";import"./index-162636c8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-b4e173fc.js";import"./index-521bda7b.js";import"./index-a18b622e.js";import"./index-a45e3703.js";import"./PhCaretDown.vue-a7ca04cb.js";import"./index-e02ebd47.js";import"./PhWarningCircle.vue-f945cc84.js";import"./index-279a375b.js";import"./PhWarning.vue-a5a7bd13.js";import"./index-6f96be05.js";import"./index-945dea89.js";import"./index-dab94189.js";import"./index-0a3e20b8.js";import"./index-c635474c.js";import"./index-bff2aedd.js";import"./index-bcb1b2b3.js";import"./index-52915470.js";import"./index-6ace059d.js";import"./index-4febfadb.js";const F={title:"Ui/Calendar",component:a,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:a},setup:()=>{const p=m(new Date);return{args:t,date:p}},template:`
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
//# sourceMappingURL=index.stories-b7347eff.js.map