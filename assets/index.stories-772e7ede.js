import{b as n,p as m}from"./index-61419ace.js";import{r as t}from"./vue.esm-bundler-5fdd8ab6.js";import"./PhCaretRight.vue-65fe5738.js";import"./index-fab4988d.js";import"./index-067a97f2.js";import"./index-7dab12d0.js";import"./PhCheck.vue-f0a19b25.js";import"./index-14dfe2df.js";import"./index-23aecf2a.js";import"./index-0e3aa9d0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-9d743ffa.js";import"./index-d7a657a6.js";import"./index-b2862db1.js";import"./index-54d4f55f.js";import"./index-aad9d61c.js";import"./PhCaretDown.vue-9c723a04.js";import"./_commonjsHelpers-de833af9.js";import"./index-879beed2.js";import"./PhWarningCircle.vue-ec851534.js";import"./index-70bef210.js";import"./PhWarning.vue-bbee8eb9.js";import"./index-d99262a5.js";import"./index-bcb0dcc9.js";import"./index-07f9524f.js";import"./index-856c80c0.js";import"./index-ca7f747a.js";import"./index-ae7da360.js";import"./index-070cb6dc.js";import"./index-add55788.js";import"./index-ebb28332.js";import"./index-b8d441cc.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
