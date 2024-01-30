import{b as n,p as m}from"./index-32aa2288.js";import{r as t}from"./vue.esm-bundler-af08b7b0.js";import"./PhCaretRight.vue-08a17de6.js";import"./index-0a0fa230.js";import"./index-54d94260.js";import"./index-13867c25.js";import"./PhCheck.vue-d61ee31d.js";import"./index-fde0acfc.js";import"./index-b032ebef.js";import"./index-84430697.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-aa8dde2a.js";import"./index-e225b605.js";import"./index-3f74c8d7.js";import"./index-afdc6f80.js";import"./index-704610ab.js";import"./PhCaretDown.vue-5eaeff9c.js";import"./index-c74939c9.js";import"./PhWarningCircle.vue-351e1363.js";import"./index-0484aa64.js";import"./index-9c90464e.js";import"./index-e67e5908.js";import"./PhWarning.vue-c0ab9d24.js";import"./index-fd68cf33.js";import"./index-8e8da391.js";import"./index-22eda798.js";import"./index-fc78b686.js";import"./index-87c8af66.js";import"./index-f6f7f089.js";import"./index-f4b64890.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const J=["Default"];export{e as Default,J as __namedExportsOrder,I as default};
