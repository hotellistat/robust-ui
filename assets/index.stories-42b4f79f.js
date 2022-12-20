import{l}from"./vue.esm-bundler-bdd4c61f.js";import{_ as a}from"./index-e85e6f1e.js";const v={title:"Ui/Radio",component:a,argTypes:{title:{control:{type:"text"}}}},d=i=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:a},setup(){const o=l("test");return{args:i,value:o}}}),e=d.bind({});e.args={title:"Radio title"};var t;e.parameters={...e.parameters,storySource:{source:`args => ({
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
})`,...(t=e.parameters)==null?void 0:t.storySource}};const s=["Default"];export{e as Default,s as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-42b4f79f.js.map
