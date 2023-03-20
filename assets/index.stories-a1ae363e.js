import{e as r}from"./index-59f871df.js";import{_ as n}from"./index-d47bf033.js";import"./vue.esm-bundler-3b691b43.js";import"./PhCaretRight.vue-045fc64f.js";import"./index-7e9830df.js";import"./PhCheck.vue-16f6c1e2.js";import"./index-249b93c4.js";import"./index-2e5d7437.js";import"./index-0ed6e44b.js";import"./index-3a757b23.js";import"./index-115a47d7.js";import"./index-543c1cea.js";import"./index-b274b172.js";import"./index-3d0147ab.js";import"./index-c7510feb.js";import"./PhWarningCircle.vue-ec351f92.js";import"./index-70803264.js";import"./index-ba8d2f8c.js";import"./PhWarning.vue-cb3c6787.js";import"./index-807ae073.js";import"./index-5530cb20.js";import"./index-d7438b10.js";import"./index-b51a335e.js";import"./index-88a616a7.js";import"./index-7690dff3.js";import"./index-c70ba432.js";import"./index-bd08ed65.js";import"./index-0871f275.js";const j={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
    <template #title>Widget wrapper</template>
    Test content
    <template #options={close}>
    <div style="padding: 16px">
       Hello option
       {{close}}
       <RobustButton @click="close()" >Close</RobustButton>
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:r,RobustButton:n},setup(){return{args:i}}}),t=s.bind({});t.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};var e,o,p;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  template: \`<WidgetWrapper v-bind="args" class="test">
    <template #title>Widget wrapper</template>
    Test content
    <template #options={close}>
    <div style="padding: 16px">
       Hello option
       {{close}}
       <RobustButton @click="close()" >Close</RobustButton>
    </div>
    </template>
  </WidgetWrapper>\`,
  components: {
    WidgetWrapper,
    RobustButton: Button
  },
  setup() {
    return {
      args
    };
  }
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories-a1ae363e.js.map
