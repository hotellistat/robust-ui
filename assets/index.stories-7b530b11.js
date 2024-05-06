import{a as i}from"./index-4d205d97.js";import"./vue.esm-bundler-1c357e36.js";import"./PhCaretRight.vue-a9db7d7a.js";import"./index-9f6eb20a.js";import"./index-2348dd5e.js";import"./index-c6ed8b1a.js";import"./PhCheck.vue-5043450a.js";import"./index-5666bc06.js";import"./index-56d33763.js";import"./index-1e12db06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-fa6438c8.js";import"./index-f1bb0671.js";import"./index-b5f11823.js";import"./index-a6fd7365.js";import"./index-9e99b68a.js";import"./PhCaretDown.vue-68ceef7b.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e01e20c.js";import"./PhWarningCircle.vue-db9629c4.js";import"./index-efecb5ea.js";import"./PhWarning.vue-84a7b139.js";import"./index-caeb6456.js";import"./index-5b207562.js";import"./index-57b0e8e2.js";import"./index-743b45f3.js";import"./index-933dfdc5.js";import"./index-cd2a1313.js";import"./index-4d459671.js";import"./index-529fd614.js";import"./index-009e303b.js";import"./index-ca186dab.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
