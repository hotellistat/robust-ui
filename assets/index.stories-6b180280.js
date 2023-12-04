import{c as n,p as m}from"./index-a0b7b3f5.js";import{r as t}from"./vue.esm-bundler-ae7acd23.js";import"./index-c53ab45f.js";import"./PhCheck.vue-d5a5bf42.js";import"./index-6cfca2e9.js";import"./PhCaretRight.vue-60a7c514.js";import"./index-7b17e556.js";import"./index-42825869.js";import"./index-7a6fafbc.js";import"./index-ad5f9d14.js";import"./index-22bc3957.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7ee25441.js";import"./index-7cc3a26b.js";import"./index-ded63a45.js";import"./index-685cc6c8.js";import"./PhCaretDown.vue-0142dae5.js";import"./index-d5167709.js";import"./PhWarningCircle.vue-f808551e.js";import"./index-4630769a.js";import"./index-8856fcc3.js";import"./index-98689c3c.js";import"./PhWarning.vue-82de2386.js";import"./index-0cfa2c11.js";import"./index-a103b92d.js";import"./index-6449a901.js";import"./index-e1fd4b7e.js";import"./index-612415ca.js";import"./index-da7b8437.js";import"./index-f1dd971c.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
//# sourceMappingURL=index.stories-6b180280.js.map
