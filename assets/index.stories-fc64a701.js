import{c as n,p as m}from"./index-f563a8c7.js";import{r as t}from"./vue.esm-bundler-4b093791.js";import"./index-e446e932.js";import"./PhCheck.vue-c83224dd.js";import"./index-9c0bb730.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-c4b142bd.js";import"./index-3a409b03.js";import"./index-06095ad2.js";import"./index-3f9b8550.js";import"./index-3ca9fd0b.js";import"./index-5704c243.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f31d1b7e.js";import"./index-f6c5c656.js";import"./index-1fc27f8c.js";import"./PhCaretDown.vue-6e23ca25.js";import"./index-dd89bf07.js";import"./PhWarningCircle.vue-f5df56c7.js";import"./index-67ef798e.js";import"./index-11b8a59f.js";import"./index-45e833db.js";import"./PhWarning.vue-eb212a4c.js";import"./index-874912d3.js";import"./index-85c55c81.js";import"./index-4acbc033.js";import"./index-b97c47da.js";import"./index-71194958.js";import"./index-cab02b25.js";import"./index-2fbd1fb3.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
//# sourceMappingURL=index.stories-fc64a701.js.map
