import{a as i}from"./index-1f07f080.js";import"./vue.esm-bundler-6f49bc6f.js";import"./PhCaretRight.vue-4dfd7fd9.js";import"./index-f7d8b249.js";import"./index-32eddac2.js";import"./index-252e551c.js";import"./PhCheck.vue-584b6994.js";import"./index-645fbc8d.js";import"./index-feeb6e8a.js";import"./index-a615481d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-bd98586a.js";import"./index-785d8004.js";import"./index-b6643815.js";import"./index-10277db9.js";import"./index-ef84e4ed.js";import"./PhCaretDown.vue-dde853fc.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-1f188261.js";import"./PhWarningCircle.vue-4ed838bf.js";import"./index-5893e872.js";import"./PhWarning.vue-70085507.js";import"./index-4dab90b9.js";import"./index-7e509391.js";import"./index-86bb0c0e.js";import"./index-db2680f7.js";import"./index-cca15249.js";import"./index-0fee726f.js";import"./index-f126fa57.js";import"./index-32657282.js";import"./index-ca3930a2.js";import"./index-a5d3099f.js";const H={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
