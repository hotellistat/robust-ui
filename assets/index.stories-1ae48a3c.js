import{e as r}from"./index-8c2f018c.js";import{_ as n}from"./index-f450eb8d.js";import"./vue.esm-bundler-11053946.js";import"./PhCaretRight.vue-8b6848f9.js";import"./index-6ade69cb.js";import"./PhCheck.vue-f0ad762b.js";import"./index-935c2389.js";import"./index-8ad7a9c1.js";import"./index-93be6097.js";import"./index-6796690e.js";import"./index-15f12df5.js";import"./index-a537f561.js";import"./index-5e6b3be4.js";import"./index-1748c350.js";import"./PhCaretDown.vue-6db8f745.js";import"./index-0c6f82ef.js";import"./PhWarningCircle.vue-427c7eac.js";import"./index-2166361d.js";import"./index-64082fad.js";import"./PhWarning.vue-1803e7f9.js";import"./index-bb27379a.js";import"./index-0c9892af.js";import"./index-abe02260.js";import"./index-cd920086.js";import"./index-ed46e7fe.js";import"./index-f7746136.js";import"./index-0bc2690a.js";import"./index-d526e3c7.js";import"./index-9d5fc93f.js";import"./index-1dfb49ef.js";const z={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,z as default};
//# sourceMappingURL=index.stories-1ae48a3c.js.map
