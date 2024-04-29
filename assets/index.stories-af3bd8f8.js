import{b as n,p as m}from"./index-cf753c18.js";import{r as t}from"./vue.esm-bundler-3a6ccb9d.js";import"./PhCaretRight.vue-7a865273.js";import"./index-4dbc5af7.js";import"./index-fffe1495.js";import"./index-c740f187.js";import"./PhCheck.vue-baf99df6.js";import"./index-3c86eeab.js";import"./index-882777ef.js";import"./index-5f476b10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5a91f5ec.js";import"./index-a8d4d443.js";import"./index-63d9c9dd.js";import"./index-6fc90b9b.js";import"./index-e7b79041.js";import"./PhCaretDown.vue-cf6068cb.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-9cece67e.js";import"./PhWarningCircle.vue-53e622e7.js";import"./index-827efad9.js";import"./PhWarning.vue-b7a22815.js";import"./index-d93382a3.js";import"./index-37cfe9e2.js";import"./index-a109fab6.js";import"./index-68df4b28.js";import"./index-ce28540e.js";import"./index-420f0172.js";import"./index-289cb84b.js";import"./index-e8da600d.js";import"./index-60df7083.js";import"./index-ab63aaee.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
