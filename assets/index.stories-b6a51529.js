import{b as n,p as m}from"./index-f0886299.js";import{j as t}from"./vue.esm-bundler-b4bdeeb0.js";import"./PhCaretRight.vue-8f509f64.js";import"./index-6534fe95.js";import"./index-d11309f6.js";import"./index-4145d83e.js";import"./PhCheck.vue-55785c72.js";import"./index-ef7d0473.js";import"./index-e5f640a6.js";import"./index-7ea59af2.js";import"./index-6368aee8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-df746c37.js";import"./index-fb9fd3fa.js";import"./index-56a24cc0.js";import"./index-7f9dbdf9.js";import"./PhCaretDown.vue-dd6a24d7.js";import"./index-0505c4dc.js";import"./PhWarningCircle.vue-6d2e90a0.js";import"./index-de5d6c2f.js";import"./PhWarning.vue-12b26d3d.js";import"./index-d636e3c0.js";import"./index-736e2f2f.js";import"./index-d357b62c.js";import"./index-1aa696c4.js";import"./index-1367b130.js";import"./index-0432cbdb.js";import"./index-d1aafa30.js";import"./index-9ecf1989.js";import"./index-5387a211.js";import"./index-68c7be1b.js";const I={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
//# sourceMappingURL=index.stories-b6a51529.js.map
