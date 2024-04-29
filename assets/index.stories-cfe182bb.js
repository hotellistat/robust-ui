import{a as i}from"./index-cf753c18.js";import"./vue.esm-bundler-3a6ccb9d.js";import"./PhCaretRight.vue-7a865273.js";import"./index-4dbc5af7.js";import"./index-fffe1495.js";import"./index-c740f187.js";import"./PhCheck.vue-baf99df6.js";import"./index-3c86eeab.js";import"./index-882777ef.js";import"./index-5f476b10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5a91f5ec.js";import"./index-a8d4d443.js";import"./index-63d9c9dd.js";import"./index-6fc90b9b.js";import"./index-e7b79041.js";import"./PhCaretDown.vue-cf6068cb.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-9cece67e.js";import"./PhWarningCircle.vue-53e622e7.js";import"./index-827efad9.js";import"./PhWarning.vue-b7a22815.js";import"./index-d93382a3.js";import"./index-37cfe9e2.js";import"./index-a109fab6.js";import"./index-68df4b28.js";import"./index-ce28540e.js";import"./index-420f0172.js";import"./index-289cb84b.js";import"./index-e8da600d.js";import"./index-60df7083.js";import"./index-ab63aaee.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
