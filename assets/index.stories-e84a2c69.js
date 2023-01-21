import{_ as o}from"./index-b3c475ea.js";import"./vue.esm-bundler-b0d1999c.js";const c={title:"Ui/InputWrapper",component:o,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}},r=i=>({template:'<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>',components:{InputWrapper:o},setup(){return{args:i}}}),t=r.bind();t.args={title:"Input title",outline:!1};const e=r.bind();e.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const n=r.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};var s;t.parameters={...t.parameters,storySource:{source:`args => ({
  template: \`<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>\`,
  components: {
    InputWrapper
  },
  setup() {
    return {
      args
    };
  }
})`,...(s=t.parameters)==null?void 0:s.storySource}};var p;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: \`<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>\`,
  components: {
    InputWrapper
  },
  setup() {
    return {
      args
    };
  }
})`,...(p=e.parameters)==null?void 0:p.storySource}};var a;n.parameters={...n.parameters,storySource:{source:`args => ({
  template: \`<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>\`,
  components: {
    InputWrapper
  },
  setup() {
    return {
      args
    };
  }
})`,...(a=n.parameters)==null?void 0:a.storySource}};const m=["Default","Hint","ErrorHint"];export{t as Default,n as ErrorHint,e as Hint,m as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories-e84a2c69.js.map
