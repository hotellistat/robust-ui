import{a as i}from"./index-d17ac250.js";import"./vue.esm-bundler-055c4c85.js";import"./PhCaretRight.vue-611181c5.js";import"./index-dd41b3c6.js";import"./index-91538fcc.js";import"./index-439c4340.js";import"./PhCheck.vue-93de0707.js";import"./index-f12a484c.js";import"./index-f41d5f48.js";import"./index-49e4792d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-0ec1b475.js";import"./index-61c8c02d.js";import"./index-4d6570b2.js";import"./index-47143930.js";import"./index-6a93e7ba.js";import"./PhCaretDown.vue-fc97a977.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-db286dc5.js";import"./PhWarningCircle.vue-f7cfedaa.js";import"./index-1494bd6d.js";import"./PhWarning.vue-1c367713.js";import"./index-dec26a00.js";import"./index-18d0fd1d.js";import"./index-48739506.js";import"./index-424011d1.js";import"./index-be10592a.js";import"./index-e28967d1.js";import"./index-cee761bf.js";import"./index-065955f8.js";import"./index-e88d6a77.js";import"./index-2ed8dbdf.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
