import{a as i}from"./index-e88037f8.js";import"./vue.esm-bundler-af08b7b0.js";import"./PhCaretRight.vue-08a17de6.js";import"./index-0a0fa230.js";import"./index-54d94260.js";import"./index-13867c25.js";import"./PhCheck.vue-d61ee31d.js";import"./index-fde0acfc.js";import"./index-b032ebef.js";import"./index-84430697.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-aa8dde2a.js";import"./index-e225b605.js";import"./index-3f74c8d7.js";import"./index-afdc6f80.js";import"./index-704610ab.js";import"./PhCaretDown.vue-5eaeff9c.js";import"./index-c74939c9.js";import"./PhWarningCircle.vue-351e1363.js";import"./index-0484aa64.js";import"./index-9c90464e.js";import"./index-e67e5908.js";import"./PhWarning.vue-c0ab9d24.js";import"./index-fd68cf33.js";import"./index-8e8da391.js";import"./index-22eda798.js";import"./index-fc78b686.js";import"./index-87c8af66.js";import"./index-f6f7f089.js";import"./index-27004747.js";import"./_commonjsHelpers-de833af9.js";const F={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,F as default};
