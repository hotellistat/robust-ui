import{b as n,p as m}from"./index-ec0efed2.js";import{r as t}from"./vue.esm-bundler-3bce978e.js";import"./PhCaretRight.vue-3ef90c98.js";import"./index-882b6607.js";import"./index-007812b0.js";import"./index-1ecb7cde.js";import"./PhCheck.vue-ef873fb8.js";import"./index-4b9431bf.js";import"./index-b5ae59f9.js";import"./index-9fc7401b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-73f3dee8.js";import"./index-6a80c127.js";import"./index-8e2ad2f2.js";import"./index-997b66b7.js";import"./index-58f60a27.js";import"./PhCaretDown.vue-db43725b.js";import"./index-0f582519.js";import"./PhWarningCircle.vue-f1ab05f8.js";import"./index-13db1a73.js";import"./PhWarning.vue-7669e175.js";import"./index-c3f74c73.js";import"./index-35ce92cd.js";import"./index-a19ad943.js";import"./index-bdee1c88.js";import"./index-25064389.js";import"./index-10a4b8c7.js";import"./index-176fb52a.js";import"./index-5997a92d.js";import"./index-154e9419.js";import"./_commonjsHelpers-de833af9.js";import"./index-1c1bac54.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
