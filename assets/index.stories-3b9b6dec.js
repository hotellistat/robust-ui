import{b as n,p as m}from"./index-9a4fda51.js";import{r as t}from"./vue.esm-bundler-4fde1cfe.js";import"./PhCaretRight.vue-fa735f09.js";import"./index-d407103c.js";import"./index-a3e628cb.js";import"./index-7b240a4b.js";import"./PhCheck.vue-77d1d6d5.js";import"./index-fa11d4d6.js";import"./index-0c961d62.js";import"./index-95c72e10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d61c5a0c.js";import"./index-75e8b5cf.js";import"./index-c55dab01.js";import"./index-8116c02f.js";import"./index-367a905f.js";import"./PhCaretDown.vue-426e23d0.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-bdbc1ce2.js";import"./PhWarningCircle.vue-4d9c0992.js";import"./index-567acb92.js";import"./PhWarning.vue-bcb936fb.js";import"./index-c0fa0db6.js";import"./index-2205e1c9.js";import"./index-56459c0c.js";import"./index-65c5f553.js";import"./index-8178cbf3.js";import"./index-90a02073.js";import"./index-78c16031.js";import"./index-3d1926c6.js";import"./index-0ac4b6c8.js";import"./index-ae558d6c.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
