import{a as i}from"./index-4f276869.js";import"./vue.esm-bundler-0373854b.js";import"./PhCaretRight.vue-42ea7355.js";import"./index-a4f49a66.js";import"./index-ebf6f712.js";import"./index-b860cc56.js";import"./PhCheck.vue-a6a00380.js";import"./index-e0602dad.js";import"./index-5a521923.js";import"./index-38b0fde2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-130c47b0.js";import"./index-aa89bf66.js";import"./index-5c8f9725.js";import"./index-fe73e184.js";import"./index-70035db1.js";import"./PhCaretDown.vue-e4573649.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fb1f7c04.js";import"./PhWarningCircle.vue-ccb33d13.js";import"./index-39873b0e.js";import"./PhWarning.vue-b3989803.js";import"./index-8ceadaf8.js";import"./index-af6497a4.js";import"./index-9d3f790a.js";import"./index-8af3af6f.js";import"./index-7deb46d7.js";import"./index-62499eb5.js";import"./index-5bddcb50.js";import"./index-7b2ff929.js";import"./index-ab38f846.js";import"./index-f8b2b370.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
