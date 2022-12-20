import{_ as i}from"./index-69401065.js";import"./vue.esm-bundler-bdd4c61f.js";import"./index-65b9075a.js";import"./vue-phosphor-icons-f4f4d043.js";const x={title:"Ui/Textarea",component:i,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},a=p=>({template:'<Textarea v-bind="args" class="mb-5"/>',components:{Textarea:i},setup(){return{args:p}}}),e=a.bind();e.args={modelValue:"Textarea text",title:"Textarea title"};const t=a.bind();t.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const r=a.bind();r.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};var n;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: '<Textarea v-bind="args" class="mb-5"/>',
  components: {
    Textarea
  },
  setup() {
    return {
      args
    };
  }
})`,...(n=e.parameters)==null?void 0:n.storySource}};var s;t.parameters={...t.parameters,storySource:{source:`args => ({
  template: '<Textarea v-bind="args" class="mb-5"/>',
  components: {
    Textarea
  },
  setup() {
    return {
      args
    };
  }
})`,...(s=t.parameters)==null?void 0:s.storySource}};var o;r.parameters={...r.parameters,storySource:{source:`args => ({
  template: '<Textarea v-bind="args" class="mb-5"/>',
  components: {
    Textarea
  },
  setup() {
    return {
      args
    };
  }
})`,...(o=r.parameters)==null?void 0:o.storySource}};const d=["Default","Hint","ErrorHint"];export{e as Default,r as ErrorHint,t as Hint,d as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-edd66246.js.map
