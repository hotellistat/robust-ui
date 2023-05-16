import{c as n,p as m}from"./index-4147667a.js";import{j as t}from"./vue.esm-bundler-49cceb47.js";import"./PhCaretRight.vue-28a5f669.js";import"./index-bd1ef4cf.js";import"./index-60e54176.js";import"./index-7e88fd75.js";import"./PhCheck.vue-2a3aa9ce.js";import"./index-40b6dd35.js";import"./index-4ef3c5a7.js";import"./index-ced6a88b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-98f12cb9.js";import"./index-369a5683.js";import"./index-b2de816c.js";import"./index-771a5c2b.js";import"./PhCaretDown.vue-c3f11e7b.js";import"./index-e08ff25f.js";import"./PhWarningCircle.vue-d9e821d9.js";import"./index-72edcd83.js";import"./index-ee1d73e7.js";import"./index-0173aba3.js";import"./PhWarning.vue-1bf992fd.js";import"./index-620eb653.js";import"./index-039a550a.js";import"./index-f04f24eb.js";import"./index-c24fedc0.js";import"./index-0ad4c76b.js";import"./index-0804d564.js";import"./index-780069fb.js";const G={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=index.stories-7c445626.js.map
