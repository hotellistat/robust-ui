import{a as i}from"./index-6e5541c2.js";import"./vue.esm-bundler-5304782f.js";import"./PhCaretRight.vue-532aa00e.js";import"./index-457a627f.js";import"./index-64853bec.js";import"./index-db90c89f.js";import"./PhCheck.vue-ea5bd38e.js";import"./index-071cb0d2.js";import"./index-210156ca.js";import"./index-203fa594.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-be24201c.js";import"./index-c75d838f.js";import"./index-dacb4fc9.js";import"./index-8f79d0e7.js";import"./index-01ad2f80.js";import"./PhCaretDown.vue-5bce5257.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-a6044dbe.js";import"./PhWarningCircle.vue-0ed7a858.js";import"./index-7007677a.js";import"./PhWarning.vue-e627ea19.js";import"./index-1ec12e92.js";import"./index-552e92bb.js";import"./index-f9466c62.js";import"./index-45a1baa9.js";import"./index-cc1bc9ef.js";import"./index-a92001d2.js";import"./index-52ac5391.js";import"./index-632a28af.js";import"./index-9b873d7b.js";import"./index-d5b13bb5.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
