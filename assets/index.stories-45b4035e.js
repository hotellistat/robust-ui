import{a as c}from"./vue.esm-bundler-17561e39.js";import{_ as s}from"./index-475986b9.js";const m={title:"Ui/Switch",component:s,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}},i=a=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:s},setup(){const o=c(!1);return{args:a,value:o}}}),t=i.bind({});t.args={title:"Switch title",description:"Switch description text to be placed here"};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  template: '<Switch v-bind="args" v-model="value"></Switch>',
  components: {
    Switch
  },
  setup() {
    const value = ref(false);
    return {
      args,
      value
    };
  }
})`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,m as default};
//# sourceMappingURL=index.stories-45b4035e.js.map
