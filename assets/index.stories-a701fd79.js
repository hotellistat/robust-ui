import{e as r}from"./index-9e33141f.js";import{_ as n}from"./index-c76cdb46.js";import"./vue.esm-bundler-ef1cc146.js";import"./PhCaretRight.vue-7ae8621a.js";import"./index-f4ce6ba5.js";import"./PhCheck.vue-1e3a2306.js";import"./index-9c47b4b9.js";import"./index-148a8599.js";import"./index-a35608fc.js";import"./index-6ef80909.js";import"./index-6bc7d3a2.js";import"./index-225e0bd1.js";import"./index-e1627f9c.js";import"./index-ff2cc070.js";import"./PhCaretDown.vue-4410b647.js";import"./index-17566dcd.js";import"./PhWarningCircle.vue-024f3f27.js";import"./index-62569a99.js";import"./index-6b343119.js";import"./PhWarning.vue-362cfe51.js";import"./index-984daade.js";import"./index-1a4703ef.js";import"./index-20517e6a.js";import"./index-3d6d421b.js";import"./index-ffa02fbf.js";import"./index-38b5df8d.js";import"./index-f2cf7793.js";import"./index-0b84882a.js";import"./index-67ff9fb2.js";import"./index-07d68a6c.js";const z={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
//# sourceMappingURL=index.stories-a701fd79.js.map
