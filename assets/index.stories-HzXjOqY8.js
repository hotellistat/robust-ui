import{b as n,p as m}from"./index-jKwqWZl3.js";import{r as t}from"./vue.esm-bundler-K5TEJ--t.js";import"./PhCaretRight.vue-dlXRfe80.js";import"./index-4551Cd6c.js";import"./index-KL80NxgM.js";import"./index-wFcuGPju.js";import"./PhCheck.vue-U5B8rUzB.js";import"./index-xHrpYyuz.js";import"./index-Rza8L8ts.js";import"./index-apVMdiqz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-pJWFkETw.js";import"./index-7Q3Hr3U6.js";import"./index-aouWP0zy.js";import"./index-qylRT29W.js";import"./index-nV4tVoxk.js";import"./PhCaretDown.vue-C0t7Susw.js";import"./index-BYYA_Utq.js";import"./PhWarningCircle.vue-iOVsCZLu.js";import"./index-_Veg0b7T.js";import"./index-rtLxIiL9.js";import"./index--GwMOkHI.js";import"./PhWarning.vue-8eg3yxdW.js";import"./index-4_el2xJL.js";import"./index-HxKYYJ8T.js";import"./index-mEmu92-W.js";import"./index-Vx_2mOtr.js";import"./index--L_maO6f.js";import"./index-gDMgr7RS.js";import"./index-VqWTpiqi.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LT2-D9pZ.js";const J={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
