import{a as i}from"./index-fa093ad8.js";import"./vue.esm-bundler-3e10b1cd.js";import"./PhCaretRight.vue-5868ab31.js";import"./index-f8b74898.js";import"./index-0780a91c.js";import"./index-fc7c47f8.js";import"./PhCheck.vue-c52a3c08.js";import"./index-b9ff3cef.js";import"./index-7155124e.js";import"./index-9ae61987.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-74404727.js";import"./index-06fb2644.js";import"./index-fb423059.js";import"./index-3a0fa72c.js";import"./index-3ec5c200.js";import"./PhCaretDown.vue-859c5bf5.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-f707b652.js";import"./PhWarningCircle.vue-a8887532.js";import"./index-3dee12d2.js";import"./PhWarning.vue-8f256f3e.js";import"./index-a1a4a2f1.js";import"./index-26cc95ce.js";import"./index-3a97e302.js";import"./index-c355538d.js";import"./index-ed542f97.js";import"./index-adbae219.js";import"./index-8a567b64.js";import"./index-db42dd93.js";import"./index-b3f05d78.js";import"./index-fd6ce722.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
