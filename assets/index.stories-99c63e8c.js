import{c as n,p as m}from"./index-f4fe37fa.js";import{j as t}from"./vue.esm-bundler-9a71f774.js";import"./PhCaretRight.vue-c668cf44.js";import"./index-262d6551.js";import"./index-f32819c3.js";import"./index-6a764f00.js";import"./PhCheck.vue-3e2428e4.js";import"./index-fc0967de.js";import"./index-349da6d7.js";import"./index-54763045.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-58e29f26.js";import"./index-dd586679.js";import"./index-9e5b5138.js";import"./index-8fe0218e.js";import"./PhCaretDown.vue-ef75451e.js";import"./index-fe8dcde2.js";import"./PhWarningCircle.vue-9e2f1763.js";import"./index-7693f52f.js";import"./PhWarning.vue-98bac9a5.js";import"./index-9c5ca614.js";import"./index-6430df8f.js";import"./index-750712ab.js";import"./index-86ec45b9.js";import"./index-dfad5d4a.js";import"./index-26e2b245.js";import"./index-40e9161a.js";import"./index-93882151.js";import"./index-128ea0ee.js";import"./index-d5a40507.js";const H={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
//# sourceMappingURL=index.stories-99c63e8c.js.map
