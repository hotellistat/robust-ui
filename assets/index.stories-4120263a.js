import{a as i}from"./index-2e2c721e.js";import"./vue.esm-bundler-9cf70074.js";import"./PhCaretRight.vue-f508473b.js";import"./index-3e809143.js";import"./index-cf38702e.js";import"./index-e5a5b6af.js";import"./PhCheck.vue-a2ac5a0b.js";import"./index-751389b7.js";import"./index-bbb47c86.js";import"./index-a9f8e0f8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-cbd631cc.js";import"./index-401a850c.js";import"./index-3a49f04f.js";import"./index-f6ae1e3f.js";import"./index-053ddc6a.js";import"./PhCaretDown.vue-93ce0372.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fd25965d.js";import"./PhWarningCircle.vue-ba0c66b1.js";import"./index-9c979a71.js";import"./PhWarning.vue-3732c971.js";import"./index-f976adf3.js";import"./index-477f502e.js";import"./index-defbb035.js";import"./index-fbc885b0.js";import"./index-12f0fbd1.js";import"./index-81d6662b.js";import"./index-383b3814.js";import"./index-a9eb0c1d.js";import"./index-90359b98.js";import"./index-8c06287e.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
<ConfirmationModal v-slot="{ click }" v-model:opened="args.opened" v-bind="args">
  <button @click="click">Open</button>
</ConfirmationModal>`})};var t,r,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ConfirmationModal
    },
    setup: () => ({
      args
    }),
    template: \`
<ConfirmationModal v-slot="{ click }" v-model:opened="args.opened" v-bind="args">
  <button @click="click">Open</button>
</ConfirmationModal>\`
  })
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,H as default};
