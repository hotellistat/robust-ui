import{a as i}from"./index-9695be45.js";import"./vue.esm-bundler-3bce978e.js";import"./PhCaretRight.vue-3ef90c98.js";import"./index-882b6607.js";import"./index-007812b0.js";import"./index-1ecb7cde.js";import"./PhCheck.vue-ef873fb8.js";import"./index-4b9431bf.js";import"./index-b5ae59f9.js";import"./index-9fc7401b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-73f3dee8.js";import"./index-f84509d6.js";import"./index-8e2ad2f2.js";import"./index-997b66b7.js";import"./index-09d2f5d3.js";import"./PhCaretDown.vue-db43725b.js";import"./index-0f582519.js";import"./PhWarningCircle.vue-f1ab05f8.js";import"./index-13db1a73.js";import"./PhWarning.vue-7669e175.js";import"./index-c3f74c73.js";import"./index-dd6a149c.js";import"./index-a19ad943.js";import"./index-bdee1c88.js";import"./index-25064389.js";import"./index-10a4b8c7.js";import"./index-176fb52a.js";import"./index-5997a92d.js";import"./index-154e9419.js";import"./_commonjsHelpers-de833af9.js";import"./index-1c1bac54.js";const G={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
