import{a as i}from"./index-2ea8756c.js";import"./vue.esm-bundler-b2033fd2.js";import"./PhCaretRight.vue-e2c7635c.js";import"./index-367ed299.js";import"./index-b204258c.js";import"./index-78cf3a4a.js";import"./PhCheck.vue-dec63360.js";import"./index-d3b88f5b.js";import"./index-2e6aa3b9.js";import"./index-488bc39e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5c990de3.js";import"./index-a2ea4aec.js";import"./index-693acf9b.js";import"./index-750889b2.js";import"./index-9c32d6c6.js";import"./PhCaretDown.vue-e5f4bd51.js";import"./_commonjsHelpers-de833af9.js";import"./index-af6d963e.js";import"./PhWarningCircle.vue-7ee36e3e.js";import"./index-f943382a.js";import"./PhWarning.vue-cf185922.js";import"./index-bbb6ccd6.js";import"./index-89c710e1.js";import"./index-2aa0caa9.js";import"./index-ff029517.js";import"./index-91fde20b.js";import"./index-7701de0f.js";import"./index-a85164f7.js";import"./index-86fc2c29.js";import"./index-33a53e32.js";import"./index-49e0b4fd.js";const G={title:"Ui/ConfirmationModal",component:i,argTypes:{"onUpdated:opened":{action:"ConfirmationModal"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"},opened:{control:{type:"boolean"}},size:{options:["sm","md","lg","xl","2xl","3xl","full"],control:{type:"select"}}},args:{opened:!0}},o={render:e=>({components:{ConfirmationModal:i},setup:()=>({args:e}),template:`
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
