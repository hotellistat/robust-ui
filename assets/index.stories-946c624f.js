import{a as i}from"./index-a7019bdf.js";import"./vue.esm-bundler-2f1a0c70.js";import"./PhCaretRight.vue-6237ce29.js";import"./index-a6b7ce87.js";import"./index-8f1fe35f.js";import"./index-9a8885c9.js";import"./PhCheck.vue-9f721f1b.js";import"./index-f21b012c.js";import"./index-cbfcde6e.js";import"./index-46a4f45a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7674da9c.js";import"./index-9564dee0.js";import"./index-3332a755.js";import"./index-3db2181b.js";import"./index-2f0e7de4.js";import"./PhCaretDown.vue-93a8c713.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e8bb37d.js";import"./PhWarningCircle.vue-46898c60.js";import"./index-9af113e7.js";import"./PhWarning.vue-9de62ec5.js";import"./index-250426ec.js";import"./index-380c1435.js";import"./index-5e523301.js";import"./index-9a264dd8.js";import"./index-7feccfd3.js";import"./index-3c98fdd2.js";import"./index-7992c590.js";import"./index-42599c3e.js";import"./index-12ccc56c.js";import"./index-25fa1041.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
