import{a as i}from"./index-5aa96659.js";import"./vue.esm-bundler-a72848c3.js";import"./PhCaretRight.vue-7ff22dd5.js";import"./index-cbad4310.js";import"./index-a9a12fc1.js";import"./index-1966277d.js";import"./PhCheck.vue-68734a86.js";import"./index-40d3ea92.js";import"./index-41b1b57b.js";import"./index-463eda1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-37a2f809.js";import"./index-98285913.js";import"./index-9c5463c6.js";import"./index-7f4babf5.js";import"./index-36ec367c.js";import"./PhCaretDown.vue-53494515.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-aa6f1b08.js";import"./PhWarningCircle.vue-dbb785ea.js";import"./index-8ea92436.js";import"./PhWarning.vue-710aeebd.js";import"./index-ae3827ca.js";import"./index-e959302c.js";import"./index-03b15471.js";import"./index-ab56e974.js";import"./index-ef933970.js";import"./index-6b29d817.js";import"./index-2d17b8ec.js";import"./index-19e6843a.js";import"./index-99db6534.js";import"./index-7fde1482.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
