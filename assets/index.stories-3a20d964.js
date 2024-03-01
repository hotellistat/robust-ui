import{b as n,p as m}from"./index-4589bccd.js";import{r as t}from"./vue.esm-bundler-d631efa9.js";import"./PhCaretRight.vue-058956ce.js";import"./index-01ce3e4d.js";import"./index-fbf8ffd5.js";import"./index-bac46253.js";import"./PhCheck.vue-06252efc.js";import"./index-99b6f554.js";import"./index-449ab7cc.js";import"./index-27ef2dcf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-981d5bc2.js";import"./index-0faa3e16.js";import"./index-45c625bf.js";import"./index-0a641469.js";import"./index-edee24c9.js";import"./PhCaretDown.vue-dd59dd83.js";import"./index-0c053482.js";import"./PhWarningCircle.vue-54a8d4cd.js";import"./index-1263b94b.js";import"./PhWarning.vue-ef4e26f8.js";import"./index-62f9a98d.js";import"./index-dcaa9eea.js";import"./index-6964d622.js";import"./index-385a42b4.js";import"./index-c19cb848.js";import"./index-8baabd7a.js";import"./index-82ba3e93.js";import"./index-398f8f6a.js";import"./index-453c61c2.js";import"./_commonjsHelpers-de833af9.js";import"./index-3e5b2d82.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const K=["Default"];export{e as Default,K as __namedExportsOrder,J as default};
