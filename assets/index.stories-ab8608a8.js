import{c as r}from"./index-5638c2d0.js";import{_ as n}from"./index-d4dd5ed2.js";import"./vue.esm-bundler-41a4e227.js";import"./index-0db63305.js";import"./PhCaretRight.vue-3e8fe415.js";import"./index-da133626.js";import"./index-81d554aa.js";import"./index-71c7ac07.js";import"./index-ed803f13.js";import"./PhCheck.vue-79b5837e.js";import"./index-6723635b.js";import"./index-fce9d380.js";import"./PhWarningCircle.vue-a2bb71c6.js";import"./index-2ffdbd4f.js";import"./index-a8f069ee.js";import"./index-9a7015f6.js";import"./index-ee8a0811.js";import"./index-9464f6c0.js";import"./index-194407f7.js";import"./index-5c75c8cf.js";import"./index-1862fc14.js";import"./index-6806c05e.js";import"./index-03d576ab.js";import"./index-24b4ea4c.js";import"./index-c74bf357.js";import"./index-a37b1315.js";import"./index-9abffaa3.js";import"./index-4646bf29.js";import"./index-e5cdbdcc.js";const q={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
//# sourceMappingURL=index.stories-ab8608a8.js.map
