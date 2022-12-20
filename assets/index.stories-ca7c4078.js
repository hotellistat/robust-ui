import{l as s}from"./vue.esm-bundler-bdd4c61f.js";import{_ as r}from"./index-0e151721.js";const l={title:"Ui/Switch",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}},a=n=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:r},setup(){const o=s(!1);return{args:n,value:o}}}),t=a.bind({});t.args={title:"Switch title",description:"Switch description text to be placed here"};var e;t.parameters={...t.parameters,storySource:{source:`args => ({
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
})`,...(e=t.parameters)==null?void 0:e.storySource}};const p=["Default"];export{t as Default,p as __namedExportsOrder,l as default};
//# sourceMappingURL=index.stories-ca7c4078.js.map
