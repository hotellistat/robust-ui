import{b as n,p as m}from"./index-c4a800d4.js";import{r as t}from"./vue.esm-bundler-b2033fd2.js";import"./PhCaretRight.vue-e2c7635c.js";import"./index-367ed299.js";import"./index-b204258c.js";import"./index-78cf3a4a.js";import"./PhCheck.vue-dec63360.js";import"./index-d3b88f5b.js";import"./index-2e6aa3b9.js";import"./index-488bc39e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5c990de3.js";import"./index-a2ea4aec.js";import"./index-693acf9b.js";import"./index-750889b2.js";import"./index-9c32d6c6.js";import"./PhCaretDown.vue-e5f4bd51.js";import"./_commonjsHelpers-de833af9.js";import"./index-af6d963e.js";import"./PhWarningCircle.vue-7ee36e3e.js";import"./index-f943382a.js";import"./PhWarning.vue-cf185922.js";import"./index-bbb6ccd6.js";import"./index-89c710e1.js";import"./index-2aa0caa9.js";import"./index-ff029517.js";import"./index-91fde20b.js";import"./index-7701de0f.js";import"./index-a85164f7.js";import"./index-86fc2c29.js";import"./index-33a53e32.js";import"./index-49e0b4fd.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
