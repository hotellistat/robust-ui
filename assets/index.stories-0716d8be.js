import{_ as p}from"./index-e461e1f4.js";import"./vue.esm-bundler-b0d1999c.js";import"./index-b6252be3.js";import"./index-fcf1f1d6.js";const l={title:"Ui/WidgetWrapper",component:p,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},n=r=>({template:`<WidgetWrapper v-bind="args">
    <template #title>Widget wrapper</template>
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:p},setup(){return{args:r}}}),e=n.bind({});e.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};var t;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: \`<WidgetWrapper v-bind="args">
    <template #title>Widget wrapper</template>
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>\`,
  components: {
    WidgetWrapper
  },
  setup() {
    return {
      args
    };
  }
})`,...(t=e.parameters)==null?void 0:t.storySource}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
//# sourceMappingURL=index.stories-0716d8be.js.map
