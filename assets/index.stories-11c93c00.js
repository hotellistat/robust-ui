import{b as n,p as m}from"./index-5aa96659.js";import{r as t}from"./vue.esm-bundler-a72848c3.js";import"./PhCaretRight.vue-7ff22dd5.js";import"./index-cbad4310.js";import"./index-a9a12fc1.js";import"./index-1966277d.js";import"./PhCheck.vue-68734a86.js";import"./index-40d3ea92.js";import"./index-41b1b57b.js";import"./index-463eda1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-37a2f809.js";import"./index-98285913.js";import"./index-9c5463c6.js";import"./index-7f4babf5.js";import"./index-36ec367c.js";import"./PhCaretDown.vue-53494515.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-aa6f1b08.js";import"./PhWarningCircle.vue-dbb785ea.js";import"./index-8ea92436.js";import"./PhWarning.vue-710aeebd.js";import"./index-ae3827ca.js";import"./index-e959302c.js";import"./index-03b15471.js";import"./index-ab56e974.js";import"./index-ef933970.js";import"./index-6b29d817.js";import"./index-2d17b8ec.js";import"./index-19e6843a.js";import"./index-99db6534.js";import"./index-7fde1482.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
