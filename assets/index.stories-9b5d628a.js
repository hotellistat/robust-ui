import{_ as i}from"./index-4a7170fd.js";import"./vue.esm-bundler-bdd4c61f.js";import"./index-65b9075a.js";import"./vue-phosphor-icons-f4f4d043.js";const I={title:"Ui/Input",component:i,argTypes:{readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},s=(l,{events:c})=>({template:'<Input class="mb-4" :cthulu="true" @="events" v-bind="args"/>',components:{Input:i},setup(){return{args:l,events:c}}}),t=s.bind();t.args={modelValue:"Input text",title:"Input title"};const e=s.bind();e.args={placeholder:"this is a placeholder",title:"Input title"};const n=s.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const r=s.bind();r.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};var o;t.parameters={...t.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Input class="mb-4" :cthulu="true" @="events" v-bind="args"/>',
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(o=t.parameters)==null?void 0:o.storySource}};var a;e.parameters={...e.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Input class="mb-4" :cthulu="true" @="events" v-bind="args"/>',
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(a=e.parameters)==null?void 0:a.storySource}};var u;n.parameters={...n.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Input class="mb-4" :cthulu="true" @="events" v-bind="args"/>',
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(u=n.parameters)==null?void 0:u.storySource}};var p;r.parameters={...r.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Input class="mb-4" :cthulu="true" @="events" v-bind="args"/>',
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(p=r.parameters)==null?void 0:p.storySource}};const v=["Default","Placeholder","Hint","ErrorHint"];export{t as Default,r as ErrorHint,n as Hint,e as Placeholder,v as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories-9b5d628a.js.map
