import{r as c}from"./vue.esm-bundler-d631efa9.js";import{_ as s}from"./index-c19cb848.js";const m={title:"Ui/Switch",component:s,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}},i=o=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:s},setup(){const a=c(!1);return{args:o,value:a}}}),t=i.bind({});t.args={title:"Switch title",description:"Switch description text to be placed here"};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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