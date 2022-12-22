import{I as r}from"./index-e889a8c6.js";import"./vue.esm-bundler-bdd4c61f.js";import"./index-0672f0cb.js";import"./vue-phosphor-icons-f4f4d043.js";const b={title:"Ui/Img",component:r,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},m=t=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:r},setup(){return{args:t}}}),e=m.bind();e.args={title:"Img title"};const c=t=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:r},setup(){return{args:t}}}),o=c.bind();o.args={title:"Img title"};const l=t=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:r},setup(){return{args:t}}}),a=l.bind();a.args={title:"Img title"};var n;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: '<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',
  components: {
    Img
  },
  setup() {
    return {
      args
    };
  }
})`,...(n=e.parameters)==null?void 0:n.storySource}};var s;o.parameters={...o.parameters,storySource:{source:`args => ({
  template: '<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',
  components: {
    Img
  },
  setup() {
    return {
      args
    };
  }
})`,...(s=o.parameters)==null?void 0:s.storySource}};var p;a.parameters={...a.parameters,storySource:{source:`args => ({
  template: '<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',
  components: {
    Img
  },
  setup() {
    return {
      args
    };
  }
})`,...(p=a.parameters)==null?void 0:p.storySource}};const d=["Default","Broken","Fallback"];export{o as Broken,e as Default,a as Fallback,d as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-f1b80468.js.map
