import{b as n,p as m}from"./index-c3aa3b6a.js";import{r as t}from"./vue.esm-bundler-40684a2c.js";import"./PhCaretRight.vue-0f45b579.js";import"./index-709bda04.js";import"./index-36c781b8.js";import"./index-0ef6b22c.js";import"./PhCheck.vue-75af1965.js";import"./index-7fe6b76d.js";import"./index-fd20396c.js";import"./index-33f978b5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f5b69b25.js";import"./index-6e010b96.js";import"./index-2225cbf8.js";import"./index-680ec746.js";import"./index-386b04ec.js";import"./PhCaretDown.vue-7409298c.js";import"./index-b1b87519.js";import"./PhWarningCircle.vue-b1dd1b06.js";import"./index-9ebb15dc.js";import"./PhWarning.vue-7952f952.js";import"./index-23c089ce.js";import"./index-1b217a85.js";import"./index-fb6ff9a4.js";import"./index-01c09874.js";import"./index-afa359bf.js";import"./index-4c39c7c0.js";import"./index-b28470de.js";import"./index-aa275c57.js";import"./index-15e948f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-ecb02d23.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
