import{a as i}from"./index-c3aa3b6a.js";import"./vue.esm-bundler-40684a2c.js";import"./PhCaretRight.vue-0f45b579.js";import"./index-709bda04.js";import"./index-36c781b8.js";import"./index-0ef6b22c.js";import"./PhCheck.vue-75af1965.js";import"./index-7fe6b76d.js";import"./index-fd20396c.js";import"./index-33f978b5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f5b69b25.js";import"./index-6e010b96.js";import"./index-2225cbf8.js";import"./index-680ec746.js";import"./index-386b04ec.js";import"./PhCaretDown.vue-7409298c.js";import"./index-b1b87519.js";import"./PhWarningCircle.vue-b1dd1b06.js";import"./index-9ebb15dc.js";import"./PhWarning.vue-7952f952.js";import"./index-23c089ce.js";import"./index-1b217a85.js";import"./index-fb6ff9a4.js";import"./index-01c09874.js";import"./index-afa359bf.js";import"./index-4c39c7c0.js";import"./index-b28470de.js";import"./index-aa275c57.js";import"./index-15e948f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-ecb02d23.js";const G={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
