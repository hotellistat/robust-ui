import{b as n,p as m}from"./index-6e5541c2.js";import{r as t}from"./vue.esm-bundler-5304782f.js";import"./PhCaretRight.vue-532aa00e.js";import"./index-457a627f.js";import"./index-64853bec.js";import"./index-db90c89f.js";import"./PhCheck.vue-ea5bd38e.js";import"./index-071cb0d2.js";import"./index-210156ca.js";import"./index-203fa594.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-be24201c.js";import"./index-c75d838f.js";import"./index-dacb4fc9.js";import"./index-8f79d0e7.js";import"./index-01ad2f80.js";import"./PhCaretDown.vue-5bce5257.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-a6044dbe.js";import"./PhWarningCircle.vue-0ed7a858.js";import"./index-7007677a.js";import"./PhWarning.vue-e627ea19.js";import"./index-1ec12e92.js";import"./index-552e92bb.js";import"./index-f9466c62.js";import"./index-45a1baa9.js";import"./index-cc1bc9ef.js";import"./index-a92001d2.js";import"./index-52ac5391.js";import"./index-632a28af.js";import"./index-9b873d7b.js";import"./index-d5b13bb5.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
