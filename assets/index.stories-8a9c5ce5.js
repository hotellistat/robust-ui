import{r as v}from"./vue.esm-bundler-ae7acd23.js";import{_ as l}from"./index-0cfa2c11.js";const u={title:"Ui/Radio",component:l,argTypes:{title:{control:{type:"text"}}}},n=o=>({template:`
    {{value}}
    <div><Radio :value="0" title="Radio title 0" v-model="value"/></div>
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:l},setup(){const d=v("test");return{args:o,value:d}}}),e=n.bind({});e.args={title:"Radio title"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  template: \`
    {{value}}
    <div><Radio :value="0" title="Radio title 0" v-model="value"/></div>
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    \`,
  components: {
    Radio
  },
  setup() {
    const value = ref('test');
    return {
      args,
      value
    };
  }
})`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories-8a9c5ce5.js.map
