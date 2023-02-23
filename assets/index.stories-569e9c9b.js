import{e as r}from"./index-feee2703.js";import{_ as n}from"./index-27b9bd6d.js";import"./vue.esm-bundler-9cbc270d.js";import"./PhCaretRight.vue-4de73c41.js";import"./index-08e97f00.js";import"./PhCheck.vue-d5ba83ff.js";import"./index-6ce7d9f2.js";import"./index-262e3e2c.js";import"./index-72d98b26.js";import"./index-a43f9690.js";import"./index-9b7047e1.js";import"./index-9a1ea72a.js";import"./index-a1a5feae.js";import"./index-419285db.js";import"./index-4c56d6e1.js";import"./PhWarningCircle.vue-9ae5b03b.js";import"./index-178a1b98.js";import"./index-18a854ec.js";import"./index-7e352881.js";import"./index-e870b89a.js";import"./index-055ac414.js";import"./index-b79cea11.js";import"./index-1469d29d.js";import"./index-29d8f35e.js";import"./index-b32284b8.js";import"./index-8195f034.js";import"./index-15b9d225.js";const $={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=index.stories-569e9c9b.js.map
