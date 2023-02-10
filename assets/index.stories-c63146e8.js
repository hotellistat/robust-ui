import{c as r}from"./index-d5eb03ff.js";import{_ as n}from"./index-53659b90.js";import"./vue.esm-bundler-e6794ced.js";import"./index-689abc5e.js";import"./PhCaretRight.vue-3ee20804.js";import"./index-eee7414a.js";import"./index-4ad535a4.js";import"./index-e06476fb.js";import"./index-3dabf12b.js";import"./PhCheck.vue-470ff877.js";import"./index-a11cbdf5.js";import"./index-627fbbbf.js";import"./PhWarningCircle.vue-8a86454c.js";import"./index-76097654.js";import"./index-60b1ab76.js";import"./index-e2c30a39.js";import"./index-4a479f2d.js";import"./index-446736c4.js";import"./index-4acf6541.js";import"./index-7515eef0.js";import"./index-3fa4704f.js";import"./index-11e08adf.js";import"./index-fe9ab896.js";import"./index-b5f7afb9.js";import"./index-f9677b2e.js";import"./index-1dec00ce.js";import"./index-050e0319.js";import"./index-59ea390e.js";import"./index-bd362a17.js";const q={title:"Ui/WidgetWrapper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},s=i=>({template:`<WidgetWrapper v-bind="args" class="test">
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
//# sourceMappingURL=index.stories-c63146e8.js.map
