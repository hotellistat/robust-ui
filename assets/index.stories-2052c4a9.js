import{b as n,p as m}from"./index-d8705622.js";import{r as t}from"./vue.esm-bundler-1415f10d.js";import"./PhCaretRight.vue-c792c773.js";import"./index-c86cea6c.js";import"./index-17412b18.js";import"./index-4249d0e1.js";import"./PhCheck.vue-6eab9662.js";import"./index-e5191172.js";import"./index-f6c81f56.js";import"./index-4c74889a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3f7bae1f.js";import"./index-e82f58a1.js";import"./index-9e658c62.js";import"./index-28f4c80d.js";import"./index-63cb6f2d.js";import"./PhCaretDown.vue-6d047fd4.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-3ba1cfef.js";import"./PhWarningCircle.vue-7012dbd6.js";import"./index-b8ce9251.js";import"./PhWarning.vue-d51f35ea.js";import"./index-4b5e66fc.js";import"./index-4999d272.js";import"./index-d092110b.js";import"./index-269ddc29.js";import"./index-94a18a89.js";import"./index-c5ebee70.js";import"./index-6cc68c6b.js";import"./index-bd067066.js";import"./index-69dbf21a.js";import"./index-acc7b459.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
