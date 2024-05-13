import{b as n,p as m}from"./index-a7019bdf.js";import{r as t}from"./vue.esm-bundler-2f1a0c70.js";import"./PhCaretRight.vue-6237ce29.js";import"./index-a6b7ce87.js";import"./index-8f1fe35f.js";import"./index-9a8885c9.js";import"./PhCheck.vue-9f721f1b.js";import"./index-f21b012c.js";import"./index-cbfcde6e.js";import"./index-46a4f45a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7674da9c.js";import"./index-9564dee0.js";import"./index-3332a755.js";import"./index-3db2181b.js";import"./index-2f0e7de4.js";import"./PhCaretDown.vue-93a8c713.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e8bb37d.js";import"./PhWarningCircle.vue-46898c60.js";import"./index-9af113e7.js";import"./PhWarning.vue-9de62ec5.js";import"./index-250426ec.js";import"./index-380c1435.js";import"./index-5e523301.js";import"./index-9a264dd8.js";import"./index-7feccfd3.js";import"./index-3c98fdd2.js";import"./index-7992c590.js";import"./index-42599c3e.js";import"./index-12ccc56c.js";import"./index-25fa1041.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
