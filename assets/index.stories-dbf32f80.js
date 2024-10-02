import{a as i}from"./index-5e6801b1.js";import"./vue.esm-bundler-5fdd8ab6.js";import"./PhCaretRight.vue-65fe5738.js";import"./index-fab4988d.js";import"./index-067a97f2.js";import"./index-7dab12d0.js";import"./PhCheck.vue-f0a19b25.js";import"./index-14dfe2df.js";import"./index-23aecf2a.js";import"./index-0e3aa9d0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-9d743ffa.js";import"./index-d7a657a6.js";import"./index-b2862db1.js";import"./index-54d4f55f.js";import"./index-aad9d61c.js";import"./PhCaretDown.vue-9c723a04.js";import"./_commonjsHelpers-de833af9.js";import"./index-879beed2.js";import"./PhWarningCircle.vue-ec851534.js";import"./index-70bef210.js";import"./PhWarning.vue-bbee8eb9.js";import"./index-d99262a5.js";import"./index-bcb0dcc9.js";import"./index-07f9524f.js";import"./index-856c80c0.js";import"./index-ca7f747a.js";import"./index-ae7da360.js";import"./index-070cb6dc.js";import"./index-add55788.js";import"./index-ebb28332.js";import"./index-b8d441cc.js";const G={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
