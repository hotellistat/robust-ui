import{a as i}from"./index-7d33729c.js";import"./vue.esm-bundler-1415f10d.js";import"./PhCaretRight.vue-c792c773.js";import"./index-c86cea6c.js";import"./index-17412b18.js";import"./index-4249d0e1.js";import"./PhCheck.vue-6eab9662.js";import"./index-e5191172.js";import"./index-f6c81f56.js";import"./index-4c74889a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3f7bae1f.js";import"./index-e82f58a1.js";import"./index-9e658c62.js";import"./index-28f4c80d.js";import"./index-63cb6f2d.js";import"./PhCaretDown.vue-6d047fd4.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-3ba1cfef.js";import"./PhWarningCircle.vue-7012dbd6.js";import"./index-b8ce9251.js";import"./PhWarning.vue-d51f35ea.js";import"./index-4b5e66fc.js";import"./index-4999d272.js";import"./index-d092110b.js";import"./index-269ddc29.js";import"./index-94a18a89.js";import"./index-c5ebee70.js";import"./index-6cc68c6b.js";import"./index-bd067066.js";import"./index-69dbf21a.js";import"./index-acc7b459.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
