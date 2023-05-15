import{c as n,p as m}from"./index-03f0dedb.js";import{j as t}from"./vue.esm-bundler-f1fc8c70.js";import"./PhCaretRight.vue-be2c54d3.js";import"./index-a6e99cfe.js";import"./index-46158cd1.js";import"./index-247454b2.js";import"./PhCheck.vue-2a6e97ce.js";import"./index-03989efd.js";import"./index-e7f12c4f.js";import"./index-162636c8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-0b1d3253.js";import"./index-5b12c75f.js";import"./index-c7de367e.js";import"./index-a45e3703.js";import"./PhCaretDown.vue-a7ca04cb.js";import"./index-385d106a.js";import"./PhWarningCircle.vue-f945cc84.js";import"./index-12bebe35.js";import"./PhWarning.vue-a5a7bd13.js";import"./index-6f96be05.js";import"./index-945dea89.js";import"./index-dab94189.js";import"./index-0a3e20b8.js";import"./index-c635474c.js";import"./index-bff2aedd.js";import"./index-bcb1b2b3.js";import"./index-52915470.js";import"./index-a36df1a8.js";import"./index-4febfadb.js";const H={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=index.stories-bc336bb3.js.map
