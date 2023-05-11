import{f as r}from"./index-a455d26a.js";import{_ as n}from"./index-8bd9a185.js";import"./vue.esm-bundler-b4bdeeb0.js";import"./PhCaretRight.vue-8f509f64.js";import"./index-4145d83e.js";import"./PhCheck.vue-55785c72.js";import"./index-ef7d0473.js";import"./index-e5f640a6.js";import"./index-7ea59af2.js";import"./index-6368aee8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-df746c37.js";import"./index-fb9fd3fa.js";import"./index-56a24cc0.js";import"./index-7f9dbdf9.js";import"./PhCaretDown.vue-dd6a24d7.js";import"./index-aabe200f.js";import"./PhWarningCircle.vue-6d2e90a0.js";import"./index-de5d6c2f.js";import"./index-d11309f6.js";import"./PhWarning.vue-12b26d3d.js";import"./index-d636e3c0.js";import"./index-0538ab19.js";import"./index-d357b62c.js";import"./index-52bf5ade.js";import"./index-1367b130.js";import"./index-e7944729.js";import"./index-ca927547.js";import"./index-9ecf1989.js";import"./index-5387a211.js";import"./index-68c7be1b.js";const A={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories-545ee762.js.map
