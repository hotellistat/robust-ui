import{r as v}from"./vue.esm-bundler-3e10b1cd.js";import{_ as d}from"./index-3a97e302.js";const u={title:"Ui/Radio",component:d,argTypes:{title:{control:{type:"text"}}}},s=l=>({template:`
    {{value}}
    <div><Radio :value="0" title="Radio title 0" v-model="value"/></div>
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    <div><Radio value="disabled" title="Disabled radio" v-model="value" disabled/></div>
    `,components:{Radio:d},setup(){const o=v("test");return{args:l,value:o}}}),e=s.bind({});e.args={title:"Radio title"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  template: \`
    {{value}}
    <div><Radio :value="0" title="Radio title 0" v-model="value"/></div>
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    <div><Radio value="disabled" title="Disabled radio" v-model="value" disabled/></div>
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
