import{b as n,p as m}from"./index-c080ed1e.js";import{r as t}from"./vue.esm-bundler-055c4c85.js";import"./PhCaretRight.vue-611181c5.js";import"./index-dd41b3c6.js";import"./index-91538fcc.js";import"./index-439c4340.js";import"./PhCheck.vue-93de0707.js";import"./index-f12a484c.js";import"./index-f41d5f48.js";import"./index-49e4792d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-0ec1b475.js";import"./index-61c8c02d.js";import"./index-4d6570b2.js";import"./index-47143930.js";import"./index-6a93e7ba.js";import"./PhCaretDown.vue-fc97a977.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-db286dc5.js";import"./PhWarningCircle.vue-f7cfedaa.js";import"./index-1494bd6d.js";import"./PhWarning.vue-1c367713.js";import"./index-dec26a00.js";import"./index-18d0fd1d.js";import"./index-48739506.js";import"./index-ce4e40a6.js";import"./index-be10592a.js";import"./index-e28967d1.js";import"./index-cee761bf.js";import"./index-065955f8.js";import"./index-e88d6a77.js";import"./index-2ed8dbdf.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
