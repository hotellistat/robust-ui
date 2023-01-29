import{_ as a}from"./index-b5f7afb9.js";import{p as l}from"./vue.esm-bundler-e6794ced.js";const c={title:"Ui/Slider",component:a,argTypes:{title:{control:{type:"text",default:"Title"}}}},i=n=>({template:'<Slider v-bind="args" v-model="value" class="w-64" />',components:{Slider:a},setup(){const o=l(500);return{args:n,value:o}}}),e=i.bind();e.args={min:0,max:5e3,step:100};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories-20d8813d.js.map
