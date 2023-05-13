import{j as n}from"./vue.esm-bundler-9a71f774.js";import{_ as o}from"./index-86ec45b9.js";const u={title:"Ui/Radio",component:o,argTypes:{title:{control:{type:"text"}}}},r=l=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:o},setup(){const d=n("test");return{args:l,value:d}}}),e=r.bind({});e.args={title:"Radio title"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
//# sourceMappingURL=index.stories-1433c447.js.map
