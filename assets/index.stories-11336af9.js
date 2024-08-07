import{a as i}from"./index-f9482a58.js";import"./vue.esm-bundler-d81b504f.js";import"./PhCaretRight.vue-f7161793.js";import"./index-ea1ad1dd.js";import"./index-b90d3368.js";import"./index-05807df9.js";import"./PhCheck.vue-f4f968d0.js";import"./index-2a6a87e7.js";import"./index-2eb7f321.js";import"./index-3d19f71a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3ac618af.js";import"./index-22facfe1.js";import"./index-8070e360.js";import"./index-5175e8f9.js";import"./index-8e2f40f5.js";import"./PhCaretDown.vue-c5843984.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-cba7849c.js";import"./PhWarningCircle.vue-b07dadc9.js";import"./index-8428959a.js";import"./PhWarning.vue-3446eb47.js";import"./index-5f1e2bcb.js";import"./index-5cefc105.js";import"./index-b096327f.js";import"./index-c12ca444.js";import"./index-85ad0fd2.js";import"./index-3e91c51b.js";import"./index-732c2bfa.js";import"./index-e1977c68.js";import"./index-02617ffc.js";import"./index-6fccc556.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
