import{r as i}from"./vue.esm-bundler-40684a2c.js";import{_ as o}from"./index-680ec746.js";const d={title:"Ui/FLoating",component:o,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}},l=r=>({template:'<FLoating v-bind="args" v-model="value">ldsajfk</FLoating>',components:{FLoating:o},setup(){const s=i(!1);return{args:r,value:s}}}),t=l.bind({});t.args={title:"FLoating title",description:"FLoating description text to be placed here"};var e,n,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  template: '<FLoating v-bind="args" v-model="value">ldsajfk</FLoating>',
  components: {
    FLoating
  },
  setup() {
    const value = ref(false);
    return {
      args,
      value
    };
  }
})`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,d as default};