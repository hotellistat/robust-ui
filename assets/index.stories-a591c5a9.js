import{c as n,p as m}from"./index-901cc206.js";import{r as t}from"./vue.esm-bundler-ebcf9369.js";import"./index-286161d2.js";import"./PhCheck.vue-910ea200.js";import"./index-bccff33e.js";import"./PhCaretRight.vue-aa6fb311.js";import"./index-09d52eb2.js";import"./index-0a4d6cf7.js";import"./index-a2b4b7ff.js";import"./index-9c2bee41.js";import"./index-dc269292.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5979ae88.js";import"./index-97254010.js";import"./index-44e83eb1.js";import"./index-a579ba8f.js";import"./PhCaretDown.vue-76628bb3.js";import"./index-f9c8087d.js";import"./PhWarningCircle.vue-346e7bab.js";import"./index-321b96c5.js";import"./index-c0f46616.js";import"./index-c74d5e7d.js";import"./PhWarning.vue-5df51850.js";import"./index-40b68041.js";import"./index-27180d89.js";import"./index-945804a9.js";import"./index-afdcd96e.js";import"./index-b6bed80e.js";import"./index-37832a1d.js";import"./index-a5ee0ed5.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
//# sourceMappingURL=index.stories-a591c5a9.js.map
