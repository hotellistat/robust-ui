import{a as i}from"./index-ed79467b.js";import"./vue.esm-bundler-4fde1cfe.js";import"./PhCaretRight.vue-fa735f09.js";import"./index-d407103c.js";import"./index-a3e628cb.js";import"./index-7b240a4b.js";import"./PhCheck.vue-77d1d6d5.js";import"./index-fa11d4d6.js";import"./index-0c961d62.js";import"./index-95c72e10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d61c5a0c.js";import"./index-75e8b5cf.js";import"./index-c55dab01.js";import"./index-8116c02f.js";import"./index-367a905f.js";import"./PhCaretDown.vue-426e23d0.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-bdbc1ce2.js";import"./PhWarningCircle.vue-4d9c0992.js";import"./index-567acb92.js";import"./PhWarning.vue-bcb936fb.js";import"./index-c0fa0db6.js";import"./index-28d60884.js";import"./index-56459c0c.js";import"./index-65c5f553.js";import"./index-8178cbf3.js";import"./index-90a02073.js";import"./index-78c16031.js";import"./index-3d1926c6.js";import"./index-0ac4b6c8.js";import"./index-ae558d6c.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
