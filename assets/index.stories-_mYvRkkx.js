import{b as n,p as m}from"./index-8CK22sh4.js";import{r as t}from"./vue.esm-bundler-U1mN_w1c.js";import"./PhCaretRight.vue-oc3ZNeuD.js";import"./index-tpmOQRgO.js";import"./index-YPuapsoM.js";import"./index-o4qo-L9t.js";import"./PhCheck.vue-sJ4YRl3f.js";import"./index-LugFut2P.js";import"./index-FGDhO6oI.js";import"./index-cLvk_ZOz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-Y6LZPOcL.js";import"./index-ToBx9UoQ.js";import"./index-dU9uQFtL.js";import"./index-q92zW2ka.js";import"./index-0lhbIIFJ.js";import"./PhCaretDown.vue-3MXhEOMw.js";import"./index-JoP2b90D.js";import"./PhWarningCircle.vue-sNGinm7E.js";import"./index-KB86D1Ku.js";import"./index-OEAVk76a.js";import"./index-Z0KAZX73.js";import"./PhWarning.vue-VmnKjyII.js";import"./index-K-BiyT7S.js";import"./index-PKXGh8SZ.js";import"./index-HULBzfcb.js";import"./index-SLwA-m6W.js";import"./index-7Kofsbf0.js";import"./index-utLabvHJ.js";import"./index-yG9fXIVT.js";import"./_commonjsHelpers-4gQjN7DL.js";const I={title:"Ui/DatePicker",component:n,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},"onUpdate:modelValue":{},"onUpdate:preset":{},onChange:{},onBlur:{}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:s=>({components:{DatePicker:n},template:`
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
