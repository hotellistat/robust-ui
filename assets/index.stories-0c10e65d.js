import{b as n,p as m}from"./index-b1a15c24.js";import{r as t}from"./vue.esm-bundler-1c357e36.js";import"./PhCaretRight.vue-a9db7d7a.js";import"./index-9f6eb20a.js";import"./index-2348dd5e.js";import"./index-c6ed8b1a.js";import"./PhCheck.vue-5043450a.js";import"./index-5666bc06.js";import"./index-56d33763.js";import"./index-1e12db06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-fa6438c8.js";import"./index-9cef77e2.js";import"./index-b5f11823.js";import"./index-a6fd7365.js";import"./index-9e99b68a.js";import"./PhCaretDown.vue-68ceef7b.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e01e20c.js";import"./PhWarningCircle.vue-db9629c4.js";import"./index-efecb5ea.js";import"./PhWarning.vue-84a7b139.js";import"./index-caeb6456.js";import"./index-5b207562.js";import"./index-57b0e8e2.js";import"./index-743b45f3.js";import"./index-933dfdc5.js";import"./index-cd2a1313.js";import"./index-4d459671.js";import"./index-529fd614.js";import"./index-009e303b.js";import"./index-ca186dab.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
