import{_ as a}from"./index-f0c28235.js";import{l as r}from"./vue.esm-bundler-bdd4c61f.js";import"./vue-phosphor-icons-f4f4d043.js";const v={title:"Ui/Checkbox",component:a,argTypes:{title:{control:{type:"text"}}}},c=o=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',components:{Checkbox:a},setup(){return{value:r(!1),args:o}}}),e=c.bind({});e.args={title:"Checkbox title"};const m=o=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:a},setup(){return{value:r(!1),args:o}}}),t=m.bind({});t.args={title:"V-Slot Checkbox title"};var l;e.parameters={...e.parameters,storySource:{source:`args => ({
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
})`,...(l=e.parameters)==null?void 0:l.storySource}};var n;t.parameters={...t.parameters,storySource:{source:`args => ({
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
})`,...(n=t.parameters)==null?void 0:n.storySource}};const b=["Default","SlottedTitle"];export{e as Default,t as SlottedTitle,b as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-054d261a.js.map
