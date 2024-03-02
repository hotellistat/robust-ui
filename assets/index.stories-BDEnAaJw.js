import{b as n,p as m}from"./index-BmQAtlyA.js";import{r as t}from"./vue.esm-bundler-Bz3qryIq.js";import"./PhCaretRight.vue-BdMnY5Sb.js";import"./index-DEFBeL9q.js";import"./index-BU_rksmQ.js";import"./index-BlJvGyEY.js";import"./PhCheck.vue-LWmbIflT.js";import"./index-CJaCNXen.js";import"./index-DIemJ4uL.js";import"./index-BZHNt2Vw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CLsNVtzP.js";import"./index-SF679qGP.js";import"./index-B5I386vR.js";import"./index-B8HfPLlM.js";import"./index-D05znLir.js";import"./PhCaretDown.vue-DnCQUr8d.js";import"./index-QvkJk991.js";import"./PhWarningCircle.vue-BVo6iGy_.js";import"./index-6BUjMNqN.js";import"./PhWarning.vue-OkfWgJnO.js";import"./index-DTSWV6Q7.js";import"./index-CZvPACog.js";import"./index-CxUsfRvA.js";import"./index-MrLv7tfR.js";import"./index-B9fQDvLm.js";import"./index-CGQgqzjB.js";import"./index-DdH171X7.js";import"./index-BmUARsfE.js";import"./index-CFe1HMxT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CibTL6pJ.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const K=["Default"];export{e as Default,K as __namedExportsOrder,J as default};
