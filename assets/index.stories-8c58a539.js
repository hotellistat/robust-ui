import{c as r}from"./index-8ab0f3e1.js";import{_ as n}from"./index-0dd01302.js";import"./vue.esm-bundler-4519e859.js";import"./index-c6cbf090.js";import"./PhCaretRight.vue-bd931c20.js";import"./index-8b3765dd.js";import"./index-5bccaf5b.js";import"./index-07ab28bf.js";import"./index-3877e96f.js";import"./PhCheck.vue-cda0fe7c.js";import"./index-54902208.js";import"./index-aa7b6f53.js";import"./PhWarningCircle.vue-143a0786.js";import"./index-ba99bd1d.js";import"./index-32c87424.js";import"./index-89f41328.js";import"./index-39d3006f.js";import"./index-1f410b88.js";import"./index-b6c7dde7.js";import"./index-254d1100.js";import"./index-d8b76aa7.js";import"./index-0277e4c3.js";import"./index-00ca6b85.js";import"./index-867d9c13.js";import"./index-5ffd34b6.js";import"./index-3c66279a.js";import"./index-46fbcf96.js";import"./index-9808c78b.js";import"./index-2cda4a91.js";const q={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-8c58a539.js.map
