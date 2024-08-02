import{b as n,p as m}from"./index-2e2c721e.js";import{r as t}from"./vue.esm-bundler-9cf70074.js";import"./PhCaretRight.vue-f508473b.js";import"./index-3e809143.js";import"./index-cf38702e.js";import"./index-e5a5b6af.js";import"./PhCheck.vue-a2ac5a0b.js";import"./index-751389b7.js";import"./index-bbb47c86.js";import"./index-a9f8e0f8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-cbd631cc.js";import"./index-401a850c.js";import"./index-3a49f04f.js";import"./index-f6ae1e3f.js";import"./index-053ddc6a.js";import"./PhCaretDown.vue-93ce0372.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fd25965d.js";import"./PhWarningCircle.vue-ba0c66b1.js";import"./index-9c979a71.js";import"./PhWarning.vue-3732c971.js";import"./index-f976adf3.js";import"./index-477f502e.js";import"./index-defbb035.js";import"./index-fbc885b0.js";import"./index-12f0fbd1.js";import"./index-81d6662b.js";import"./index-383b3814.js";import"./index-a9eb0c1d.js";import"./index-90359b98.js";import"./index-8c06287e.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
