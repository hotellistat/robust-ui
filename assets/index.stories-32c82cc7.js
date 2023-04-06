import{f as r}from"./index-9528d206.js";import{_ as n}from"./index-68f58b30.js";import"./vue.esm-bundler-7f60e394.js";import"./PhCaretRight.vue-ff6d2462.js";import"./index-d87ddea3.js";import"./PhCheck.vue-2562e881.js";import"./index-c94906d2.js";import"./index-0fb5aa92.js";import"./index-2ec087a1.js";import"./index-219ed869.js";import"./index-2471f932.js";import"./index-0773c51d.js";import"./index-9585fd4a.js";import"./index-22d9b209.js";import"./index-1be4c819.js";import"./PhWarningCircle.vue-cbb6e471.js";import"./index-ef9e3050.js";import"./index-cdad79fe.js";import"./PhWarning.vue-7762b4f0.js";import"./index-88c349b4.js";import"./index-687cefe2.js";import"./index-b2c8899c.js";import"./index-66d9cb5d.js";import"./index-c665e89d.js";import"./index-09fde77f.js";import"./index-d307373b.js";import"./index-aa3f1d94.js";import"./index-4ef99693.js";const j={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
//# sourceMappingURL=index.stories-32c82cc7.js.map
