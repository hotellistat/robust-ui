import{_ as p,p as s}from"./index-16e7f677.js";import{r as m}from"./vue.esm-bundler-40684a2c.js";import"./PhCaretRight.vue-0f45b579.js";import"./index-709bda04.js";import"./index-36c781b8.js";import"./index-0ef6b22c.js";import"./PhCheck.vue-75af1965.js";import"./index-7fe6b76d.js";import"./index-fd20396c.js";import"./index-33f978b5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f5b69b25.js";import"./index-6e010b96.js";import"./index-2225cbf8.js";import"./index-680ec746.js";import"./index-386b04ec.js";import"./PhCaretDown.vue-7409298c.js";import"./index-b1b87519.js";import"./PhWarningCircle.vue-b1dd1b06.js";import"./index-9ebb15dc.js";import"./PhWarning.vue-7952f952.js";import"./index-23c089ce.js";import"./index-1b217a85.js";import"./index-7aac2350.js";import"./index-01c09874.js";import"./index-afa359bf.js";import"./index-4c39c7c0.js";import"./index-b28470de.js";import"./index-aa275c57.js";import"./index-15e948f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-ecb02d23.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
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
