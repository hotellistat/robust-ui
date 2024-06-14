import{b as n,p as m}from"./index-531d22ce.js";import{r as t}from"./vue.esm-bundler-7e0ca5bb.js";import"./PhCaretRight.vue-5eff2c5e.js";import"./index-62b33547.js";import"./index-d897f1f8.js";import"./index-8a2e9412.js";import"./PhCheck.vue-14610fd1.js";import"./index-f4a1cd03.js";import"./index-b7da407d.js";import"./index-28ffac6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-14150d1c.js";import"./index-b0ae763b.js";import"./index-1a29d639.js";import"./index-8b26d0de.js";import"./index-9c6bd464.js";import"./PhCaretDown.vue-13e53ab8.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-51f5fd0a.js";import"./PhWarningCircle.vue-8a48d2e6.js";import"./index-c27c2e6f.js";import"./PhWarning.vue-25009bd4.js";import"./index-54184272.js";import"./index-b8db9072.js";import"./index-28ae34bf.js";import"./index-4fb3fcde.js";import"./index-fac0a23b.js";import"./index-447362c9.js";import"./index-891ecab7.js";import"./index-0d8b574b.js";import"./index-24858e83.js";import"./index-76a3bc56.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
