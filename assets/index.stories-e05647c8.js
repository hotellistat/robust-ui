import{b as n,p as m}from"./index-f9482a58.js";import{r as t}from"./vue.esm-bundler-d81b504f.js";import"./PhCaretRight.vue-f7161793.js";import"./index-ea1ad1dd.js";import"./index-b90d3368.js";import"./index-05807df9.js";import"./PhCheck.vue-f4f968d0.js";import"./index-2a6a87e7.js";import"./index-2eb7f321.js";import"./index-3d19f71a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3ac618af.js";import"./index-22facfe1.js";import"./index-8070e360.js";import"./index-5175e8f9.js";import"./index-8e2f40f5.js";import"./PhCaretDown.vue-c5843984.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-cba7849c.js";import"./PhWarningCircle.vue-b07dadc9.js";import"./index-8428959a.js";import"./PhWarning.vue-3446eb47.js";import"./index-5f1e2bcb.js";import"./index-5cefc105.js";import"./index-b096327f.js";import"./index-c12ca444.js";import"./index-85ad0fd2.js";import"./index-3e91c51b.js";import"./index-732c2bfa.js";import"./index-e1977c68.js";import"./index-02617ffc.js";import"./index-6fccc556.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
      <DatePicker
        class="p-2
        col-span-2
        sm:col-span-1"
        v-bind="args"
        v-model="value"
        v-model:preset="preset"
        title="Date picker"
        :presets="presets"
      >
      </DatePicker>`,setup:()=>{const a=t(),i=t(void 0);return{args:s,value:a,presets:m,preset:i}}})};var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DatePicker
    },
    template: \`
      <DatePicker
        class="p-2
        col-span-2
        sm:col-span-1"
        v-bind="args"
        v-model="value"
        v-model:preset="preset"
        title="Date picker"
        :presets="presets"
      >
      </DatePicker>\`,
    setup: () => {
      const value = ref();
      const preset = ref(undefined);
      return {
        args,
        value,
        presets,
        preset
      };
    }
  })
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,K as default};
