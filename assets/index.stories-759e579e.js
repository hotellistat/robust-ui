import{b as n,p as m}from"./index-1dc51016.js";import{r as t}from"./vue.esm-bundler-72d4ff20.js";import"./PhCaretRight.vue-824c69d1.js";import"./index-9e32e11f.js";import"./index-2f0c86a9.js";import"./index-85f1818c.js";import"./PhCheck.vue-9e6a3c2e.js";import"./index-b7a303c1.js";import"./index-de0bd467.js";import"./index-27de333b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d531d5f5.js";import"./index-29350378.js";import"./index-7fd4820d.js";import"./index-d91f25a7.js";import"./index-c1abcfe0.js";import"./PhCaretDown.vue-b8e75b60.js";import"./index-20828a7e.js";import"./PhWarningCircle.vue-1411aa22.js";import"./index-717081f7.js";import"./PhWarning.vue-c01382f6.js";import"./index-7fbfe550.js";import"./index-aab83b42.js";import"./index-28f17575.js";import"./index-323d997c.js";import"./index-00af0eaf.js";import"./index-2e7b94a6.js";import"./index-dc1f6e39.js";import"./index-4133167f.js";import"./index-6d20ce66.js";import"./_commonjsHelpers-de833af9.js";import"./index-2bda9442.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
