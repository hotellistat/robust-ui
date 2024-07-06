import{a as i}from"./index-f7aaa309.js";import"./vue.esm-bundler-0c98e3e1.js";import"./PhCaretRight.vue-7a2b7b17.js";import"./index-ea21c5c1.js";import"./index-6a018c90.js";import"./index-915c60b9.js";import"./PhCheck.vue-f1236021.js";import"./index-cbdf116b.js";import"./index-74124bbd.js";import"./index-e4ccb488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-8e26141a.js";import"./index-9f051482.js";import"./index-b4a44b8d.js";import"./index-a15e1ab7.js";import"./index-c18b567d.js";import"./PhCaretDown.vue-c6ed26f7.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-62213630.js";import"./PhWarningCircle.vue-5bc9a8b8.js";import"./index-69395e6a.js";import"./PhWarning.vue-c9232fe6.js";import"./index-1dcf8a6b.js";import"./index-d29e59a6.js";import"./index-cda6547a.js";import"./index-da865374.js";import"./index-0d125223.js";import"./index-b8520628.js";import"./index-61a73380.js";import"./index-07d63fbc.js";import"./index-3797bb42.js";import"./index-7c8f2fa5.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
