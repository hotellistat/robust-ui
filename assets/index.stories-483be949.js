import{b as n,p as m}from"./index-f7aaa309.js";import{r as t}from"./vue.esm-bundler-0c98e3e1.js";import"./PhCaretRight.vue-7a2b7b17.js";import"./index-ea21c5c1.js";import"./index-6a018c90.js";import"./index-915c60b9.js";import"./PhCheck.vue-f1236021.js";import"./index-cbdf116b.js";import"./index-74124bbd.js";import"./index-e4ccb488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-8e26141a.js";import"./index-9f051482.js";import"./index-b4a44b8d.js";import"./index-a15e1ab7.js";import"./index-c18b567d.js";import"./PhCaretDown.vue-c6ed26f7.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-62213630.js";import"./PhWarningCircle.vue-5bc9a8b8.js";import"./index-69395e6a.js";import"./PhWarning.vue-c9232fe6.js";import"./index-1dcf8a6b.js";import"./index-d29e59a6.js";import"./index-cda6547a.js";import"./index-da865374.js";import"./index-0d125223.js";import"./index-b8520628.js";import"./index-61a73380.js";import"./index-07d63fbc.js";import"./index-3797bb42.js";import"./index-7c8f2fa5.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
