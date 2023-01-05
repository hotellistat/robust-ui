import{_ as v}from"./index-51c46025.js";import{l as o}from"./vue.esm-bundler-bdd4c61f.js";import"./index-65b9075a.js";import"./index-76d4f674.js";import"./index-39205538.js";import"./vue-phosphor-icons-f4f4d043.js";const H={title:"Ui/Select",component:v,argTypes:{readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},i=(a,{events:r})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:v},setup(){const u=o(void 0),p=o([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:a,events:r}}}),e=i.bind();e.args={title:"Input title"};const t=i.bind();t.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const n=i.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const s=i.bind();s.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};const f=(a,{events:r})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:v},setup(){const u=o([]),p=o([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:a,events:r}}}),l=f.bind();l.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};var c;e.parameters={...e.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item 1',
      value: true
    }, {
      title: 'Item 2',
      value: false
    }, {
      title: 'Item 3 very long title that might not fit into the select box',
      value: 'test'
    }, {
      title: 'Hello',
      value: 12
    }, {
      title: 'Bye',
      value: 0
    }]);
    return {
      value,
      options,
      args,
      events
    };
  }
})`,...(c=e.parameters)==null?void 0:c.storySource}};var m;t.parameters={...t.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item 1',
      value: true
    }, {
      title: 'Item 2',
      value: false
    }, {
      title: 'Item 3 very long title that might not fit into the select box',
      value: 'test'
    }, {
      title: 'Hello',
      value: 12
    }, {
      title: 'Bye',
      value: 0
    }]);
    return {
      value,
      options,
      args,
      events
    };
  }
})`,...(m=t.parameters)==null?void 0:m.storySource}};var h;n.parameters={...n.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item 1',
      value: true
    }, {
      title: 'Item 2',
      value: false
    }, {
      title: 'Item 3 very long title that might not fit into the select box',
      value: 'test'
    }, {
      title: 'Hello',
      value: 12
    }, {
      title: 'Bye',
      value: 0
    }]);
    return {
      value,
      options,
      args,
      events
    };
  }
})`,...(h=n.parameters)==null?void 0:h.storySource}};var d;s.parameters={...s.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item 1',
      value: true
    }, {
      title: 'Item 2',
      value: false
    }, {
      title: 'Item 3 very long title that might not fit into the select box',
      value: 'test'
    }, {
      title: 'Hello',
      value: 12
    }, {
      title: 'Bye',
      value: 0
    }]);
    return {
      value,
      options,
      args,
      events
    };
  }
})`,...(d=s.parameters)==null?void 0:d.storySource}};var g;l.parameters={...l.parameters,storySource:{source:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref([]);
    const options = ref([{
      title: 'Item 1',
      value: true
    }, {
      title: 'Item 2',
      value: false
    }, {
      title: 'Item 3 very long title that might not fit into the select box',
      value: 'test'
    }, {
      title: 'Hello',
      value: 12
    }, {
      title: 'Bye',
      value: 0
    }]);
    return {
      value,
      options,
      args,
      events
    };
  }
})`,...(g=l.parameters)==null?void 0:g.storySource}};const T=["Default","Hint","ErrorHint","Inline","Multiselect"];export{e as Default,n as ErrorHint,t as Hint,s as Inline,l as Multiselect,T as __namedExportsOrder,H as default};
//# sourceMappingURL=index.stories-3207a972.js.map
