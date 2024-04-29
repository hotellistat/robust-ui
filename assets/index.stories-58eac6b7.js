import{_ as a}from"./index-c740f187.js";import{r as m}from"./vue.esm-bundler-3a6ccb9d.js";import"./PhCheck.vue-baf99df6.js";const h={title:"Ui/Checkbox",component:a,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}},i=o=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:a},setup(){return{value:m(!1),args:o}}}),e=i.bind({});e.args={title:"Checkbox title"};const d=o=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:a},setup(){return{value:m(!1),args:o}}}),t=d.bind({});t.args={title:"V-Slot Checkbox title"};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  template: '<Checkbox v-bind="args" v-model="value"></Checkbox>',
  components: {
    Checkbox
  },
  setup() {
    const value = ref(false);
    return {
      value,
      args
    };
  }
})`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  template: '<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',
  components: {
    Checkbox
  },
  setup() {
    const value = ref(false);
    return {
      value,
      args
    };
  }
})`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["Default","SlottedTitle"];export{e as Default,t as SlottedTitle,k as __namedExportsOrder,h as default};
