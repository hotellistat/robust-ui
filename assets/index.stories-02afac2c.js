import{_ as a}from"./index-66d9cb5d.js";import{j as l}from"./vue.esm-bundler-7f60e394.js";const p={title:"Ui/Slider",component:a,argTypes:{title:{control:{type:"text",default:"Title"}}}},i=n=>({template:'<Slider v-bind="args" v-model="value" class="w-64" />',components:{Slider:a},setup(){const o=l(500);return{args:n,value:o}}}),e=i.bind();e.args={min:0,max:5e3,step:100};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  template: \`<Slider v-bind="args" v-model="value" class="w-64" />\`,
  components: {
    Slider
  },
  setup() {
    const value = ref(500);
    return {
      args,
      value
    };
  }
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,p as default};
//# sourceMappingURL=index.stories-02afac2c.js.map
