import{a as i}from"./index-e4d91411.js";import"./vue.esm-bundler-72d4ff20.js";import"./PhCaretRight.vue-824c69d1.js";import"./index-9e32e11f.js";import"./index-2f0c86a9.js";import"./index-85f1818c.js";import"./PhCheck.vue-9e6a3c2e.js";import"./index-b7a303c1.js";import"./index-de0bd467.js";import"./index-27de333b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d531d5f5.js";import"./index-29350378.js";import"./index-7fd4820d.js";import"./index-d91f25a7.js";import"./index-c1abcfe0.js";import"./PhCaretDown.vue-b8e75b60.js";import"./index-20828a7e.js";import"./PhWarningCircle.vue-1411aa22.js";import"./index-717081f7.js";import"./PhWarning.vue-c01382f6.js";import"./index-7fbfe550.js";import"./index-aab83b42.js";import"./index-71b1c673.js";import"./index-323d997c.js";import"./index-00af0eaf.js";import"./index-2e7b94a6.js";import"./index-dc1f6e39.js";import"./index-4133167f.js";import"./index-6d20ce66.js";import"./_commonjsHelpers-de833af9.js";import"./index-2bda9442.js";const G={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
