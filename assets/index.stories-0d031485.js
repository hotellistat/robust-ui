import{c as r}from"./index-8dfdc8d5.js";import{_ as n}from"./index-8c1cc074.js";import"./vue.esm-bundler-88d2a0e4.js";import"./index-94313148.js";import"./PhCaretRight.vue-b4d609ca.js";import"./index-e3cf39d0.js";import"./index-36cdf539.js";import"./index-3fbb08d2.js";import"./index-a3831003.js";import"./PhCheck.vue-32f889b2.js";import"./index-e9adc478.js";import"./index-d38cf034.js";import"./PhWarningCircle.vue-94c9a257.js";import"./index-a68961a4.js";import"./index-2a907a46.js";import"./index-3ae24b82.js";import"./index-a5b6866f.js";import"./index-ff8a4914.js";import"./index-aeba010d.js";import"./index-ba853e4a.js";import"./index-8d87f78a.js";import"./index-5f346414.js";import"./index-eff87a84.js";import"./index-9a388757.js";import"./index-9224fe00.js";import"./index-8258981d.js";import"./index-72d845a5.js";import"./index-8131d29f.js";import"./index-950c3e2d.js";const q={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
//# sourceMappingURL=index.stories-0d031485.js.map
