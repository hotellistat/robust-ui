import{e as r}from"./index-01e02c69.js";import{_ as n}from"./index-bd0df30e.js";import"./vue.esm-bundler-520a4af3.js";import"./PhCaretRight.vue-03aa7ff1.js";import"./index-85dbcc94.js";import"./PhCheck.vue-47cf9af8.js";import"./index-cf060d4c.js";import"./index-f15f7196.js";import"./index-8dbc6030.js";import"./index-7c3c2d7f.js";import"./index-3d2e9b31.js";import"./index-843876fe.js";import"./index-f8a43586.js";import"./index-0db6ea41.js";import"./index-abc78244.js";import"./PhWarningCircle.vue-f06053ef.js";import"./index-0ccbbf42.js";import"./index-696242a5.js";import"./PhWarning.vue-5d9bd4e2.js";import"./index-c94484ad.js";import"./index-cf5ea2dd.js";import"./index-0a70da5e.js";import"./index-35aa5603.js";import"./index-65dacbf3.js";import"./index-60d875f0.js";import"./index-90df7131.js";import"./index-1e1fdf08.js";import"./index-37d32579.js";const j={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
//# sourceMappingURL=index.stories-bdf9aacd.js.map
