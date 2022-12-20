import{_ as r}from"./index-c3dba0ad.js";import{l as a}from"./vue.esm-bundler-bdd4c61f.js";const i={title:"Ui/Slider",component:r,argTypes:{title:{control:{type:"text",default:"Title"}}}},o=n=>({template:'<Slider v-bind="args" v-model="value" class="w-64" />',components:{Slider:r},setup(){const s=a(500);return{args:n,value:s}}}),e=o.bind();e.args={min:0,max:5e3,step:100};var t;e.parameters={...e.parameters,storySource:{source:`args => ({
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
})`,...(t=e.parameters)==null?void 0:t.storySource}};const p=["Default"];export{e as Default,p as __namedExportsOrder,i as default};
//# sourceMappingURL=index.stories-bd449d94.js.map
