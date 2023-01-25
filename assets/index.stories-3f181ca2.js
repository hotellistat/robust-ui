import{_ as n}from"./index-f25fc835.js";import"./vue.esm-bundler-840ab50e.js";import"./index-edf5c941.js";import"./index-3ec847ae.js";const m={title:"Ui/WidgetWrapper",component:n,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},o=a=>({template:`<WidgetWrapper v-bind="args">
    <template #title>Widget wrapper</template>
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:n},setup(){return{args:a}}}),e=o.bind({});e.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};var t,p,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(r=(p=e.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
//# sourceMappingURL=index.stories-3f181ca2.js.map
