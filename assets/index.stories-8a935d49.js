import{_ as p}from"./index-bd350feb.js";import"./vue.esm-bundler-bdd4c61f.js";import"./index-76d4f674.js";import"./vue-phosphor-icons-f4f4d043.js";import"./index-39205538.js";const d={title:"Ui/WidgetWrapper",component:p,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},n=r=>({template:`<WidgetWrapper v-bind="args">
    <template #title>Widget wrapper</template>
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:p},setup(){return{args:r}}}),t=n.bind({});t.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};var e;t.parameters={...t.parameters,storySource:{source:`args => ({
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
})`,...(e=t.parameters)==null?void 0:e.storySource}};const m=["Default"];export{t as Default,m as __namedExportsOrder,d as default};
//# sourceMappingURL=index.stories-8a935d49.js.map
