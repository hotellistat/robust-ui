import{a as i}from"./index-9618a4f0.js";import"./vue.esm-bundler-7e0ca5bb.js";import"./PhCaretRight.vue-5eff2c5e.js";import"./index-62b33547.js";import"./index-d897f1f8.js";import"./index-8a2e9412.js";import"./PhCheck.vue-14610fd1.js";import"./index-f4a1cd03.js";import"./index-b7da407d.js";import"./index-28ffac6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-14150d1c.js";import"./index-b0ae763b.js";import"./index-1a29d639.js";import"./index-8b26d0de.js";import"./index-9c6bd464.js";import"./PhCaretDown.vue-13e53ab8.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-51f5fd0a.js";import"./PhWarningCircle.vue-8a48d2e6.js";import"./index-c27c2e6f.js";import"./PhWarning.vue-25009bd4.js";import"./index-54184272.js";import"./index-b8db9072.js";import"./index-28ae34bf.js";import"./index-4fb3fcde.js";import"./index-fac0a23b.js";import"./index-447362c9.js";import"./index-891ecab7.js";import"./index-0d8b574b.js";import"./index-24858e83.js";import"./index-76a3bc56.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
