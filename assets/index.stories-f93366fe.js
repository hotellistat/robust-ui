import{l as n}from"./vue.esm-bundler-b0d1999c.js";import{P as r}from"./index-b6252be3.js";const c={title:"Ui/Popper",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}},s=o=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:r},setup(){const p=n(!1);return{args:o,value:p}}}),e=s.bind({});e.args={title:"Popper title",description:"Popper description text to be placed here"};var t;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: '<Popper v-bind="args" v-model="value">ldsajfk</Popper>',
  components: {
    Popper
  },
  setup() {
    const value = ref(false);
    return {
      args,
      value
    };
  }
})`,...(t=e.parameters)==null?void 0:t.storySource}};const i=["Default"];export{e as Default,i as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories-f93366fe.js.map
