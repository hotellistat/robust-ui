import{_ as r}from"./index-8e8da391.js";import{r as o}from"./vue.esm-bundler-af08b7b0.js";const m={title:"Ui/Slider",component:r,argTypes:{title:{control:{type:"text",default:"Title"}}}},i=n=>({template:'<Slider v-bind="args" v-model="value" class="h-64 w-64"  /> <div class="tabular-nums">{{value}}</div>',components:{Slider:r},setup(){const l=o(500);return{args:n,value:l}}}),e=i.bind();e.args={min:0,max:5e3,step:400};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  template: \`<Slider v-bind="args" v-model="value" class="h-64 w-64"  /> <div class="tabular-nums">{{value}}</div>\`,
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
})`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
