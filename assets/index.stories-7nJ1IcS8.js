import{a as i}from"./index-sx8a-_1O.js";import"./vue.esm-bundler-U1mN_w1c.js";import"./PhCaretRight.vue-oc3ZNeuD.js";import"./index-tpmOQRgO.js";import"./index-YPuapsoM.js";import"./index-o4qo-L9t.js";import"./PhCheck.vue-sJ4YRl3f.js";import"./index-LugFut2P.js";import"./index-FGDhO6oI.js";import"./index-cLvk_ZOz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-Y6LZPOcL.js";import"./index-ToBx9UoQ.js";import"./index-dU9uQFtL.js";import"./index-q92zW2ka.js";import"./index-0lhbIIFJ.js";import"./PhCaretDown.vue-3MXhEOMw.js";import"./index-JoP2b90D.js";import"./PhWarningCircle.vue-sNGinm7E.js";import"./index-KB86D1Ku.js";import"./index-OEAVk76a.js";import"./index-Z0KAZX73.js";import"./PhWarning.vue-VmnKjyII.js";import"./index-K-BiyT7S.js";import"./index-PKXGh8SZ.js";import"./index-HULBzfcb.js";import"./index-SLwA-m6W.js";import"./index-7Kofsbf0.js";import"./index-utLabvHJ.js";import"./index-CSzTOa39.js";import"./_commonjsHelpers-4gQjN7DL.js";const F={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,F as default};
