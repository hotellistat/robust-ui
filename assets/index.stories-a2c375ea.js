import{b as n,p as m}from"./index-fa093ad8.js";import{r as t}from"./vue.esm-bundler-3e10b1cd.js";import"./PhCaretRight.vue-5868ab31.js";import"./index-f8b74898.js";import"./index-0780a91c.js";import"./index-fc7c47f8.js";import"./PhCheck.vue-c52a3c08.js";import"./index-b9ff3cef.js";import"./index-7155124e.js";import"./index-9ae61987.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-74404727.js";import"./index-06fb2644.js";import"./index-fb423059.js";import"./index-3a0fa72c.js";import"./index-3ec5c200.js";import"./PhCaretDown.vue-859c5bf5.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-f707b652.js";import"./PhWarningCircle.vue-a8887532.js";import"./index-3dee12d2.js";import"./PhWarning.vue-8f256f3e.js";import"./index-a1a4a2f1.js";import"./index-26cc95ce.js";import"./index-3a97e302.js";import"./index-c355538d.js";import"./index-ed542f97.js";import"./index-adbae219.js";import"./index-8a567b64.js";import"./index-db42dd93.js";import"./index-b3f05d78.js";import"./index-fd6ce722.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
