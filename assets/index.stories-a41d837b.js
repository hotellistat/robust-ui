import{_ as a}from"./index-6a764f00.js";import{j as p}from"./vue.esm-bundler-9a71f774.js";import"./PhCheck.vue-3e2428e4.js";const h={title:"Ui/Checkbox",component:a,argTypes:{title:{control:{type:"text"}}}},i=o=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',components:{Checkbox:a},setup(){return{value:p(!1),args:o}}}),e=i.bind({});e.args={title:"Checkbox title"};const v=o=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:a},setup(){return{value:p(!1),args:o}}}),t=v.bind({});t.args={title:"V-Slot Checkbox title"};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  template: '<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',
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
})`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var r,c,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const k=["Default","SlottedTitle"];export{e as Default,t as SlottedTitle,k as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories-a41d837b.js.map
