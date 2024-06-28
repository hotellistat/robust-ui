import{b as n,p as m}from"./index-4f276869.js";import{r as t}from"./vue.esm-bundler-0373854b.js";import"./PhCaretRight.vue-42ea7355.js";import"./index-a4f49a66.js";import"./index-ebf6f712.js";import"./index-b860cc56.js";import"./PhCheck.vue-a6a00380.js";import"./index-e0602dad.js";import"./index-5a521923.js";import"./index-38b0fde2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-130c47b0.js";import"./index-aa89bf66.js";import"./index-5c8f9725.js";import"./index-fe73e184.js";import"./index-70035db1.js";import"./PhCaretDown.vue-e4573649.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fb1f7c04.js";import"./PhWarningCircle.vue-ccb33d13.js";import"./index-39873b0e.js";import"./PhWarning.vue-b3989803.js";import"./index-8ceadaf8.js";import"./index-af6497a4.js";import"./index-9d3f790a.js";import"./index-8af3af6f.js";import"./index-7deb46d7.js";import"./index-62499eb5.js";import"./index-5bddcb50.js";import"./index-7b2ff929.js";import"./index-ab38f846.js";import"./index-f8b2b370.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
