import{b as n,p as m}from"./index-1f07f080.js";import{r as t}from"./vue.esm-bundler-6f49bc6f.js";import"./PhCaretRight.vue-4dfd7fd9.js";import"./index-f7d8b249.js";import"./index-32eddac2.js";import"./index-252e551c.js";import"./PhCheck.vue-584b6994.js";import"./index-645fbc8d.js";import"./index-feeb6e8a.js";import"./index-a615481d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-bd98586a.js";import"./index-785d8004.js";import"./index-b6643815.js";import"./index-10277db9.js";import"./index-ef84e4ed.js";import"./PhCaretDown.vue-dde853fc.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-1f188261.js";import"./PhWarningCircle.vue-4ed838bf.js";import"./index-5893e872.js";import"./PhWarning.vue-70085507.js";import"./index-4dab90b9.js";import"./index-7e509391.js";import"./index-86bb0c0e.js";import"./index-db2680f7.js";import"./index-cca15249.js";import"./index-0fee726f.js";import"./index-f126fa57.js";import"./index-32657282.js";import"./index-ca3930a2.js";import"./index-a5d3099f.js";const K={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
