import{r}from"./vue.esm-bundler-4b093791.js";import{_ as o}from"./index-874912d3.js";const u={title:"Ui/Radio",component:o,argTypes:{title:{control:{type:"text"}}}},n=l=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:o},setup(){const d=r("test");return{args:l,value:d}}}),e=n.bind({});e.args={title:"Radio title"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  template: \`
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
//# sourceMappingURL=index.stories-3a44e55b.js.map
