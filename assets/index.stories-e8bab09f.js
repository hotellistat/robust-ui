import{a as i}from"./index-4f3354fe.js";import"./vue.esm-bundler-d631efa9.js";import"./PhCaretRight.vue-058956ce.js";import"./index-01ce3e4d.js";import"./index-fbf8ffd5.js";import"./index-bac46253.js";import"./PhCheck.vue-06252efc.js";import"./index-99b6f554.js";import"./index-449ab7cc.js";import"./index-27ef2dcf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-981d5bc2.js";import"./index-0faa3e16.js";import"./index-45c625bf.js";import"./index-0a641469.js";import"./index-edee24c9.js";import"./PhCaretDown.vue-dd59dd83.js";import"./index-0c053482.js";import"./PhWarningCircle.vue-54a8d4cd.js";import"./index-1263b94b.js";import"./PhWarning.vue-ef4e26f8.js";import"./index-62f9a98d.js";import"./index-dcaa9eea.js";import"./index-6964d622.js";import"./index-385a42b4.js";import"./index-c19cb848.js";import"./index-8baabd7a.js";import"./index-82ba3e93.js";import"./index-398f8f6a.js";import"./index-453c61c2.js";import"./_commonjsHelpers-de833af9.js";import"./index-3e5b2d82.js";const G={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,G as default};
