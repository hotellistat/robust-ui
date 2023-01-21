import{_ as v}from"./index-baf86065.js";import{l as o}from"./vue.esm-bundler-b0d1999c.js";import"./index-b3c475ea.js";import"./index-b6252be3.js";import"./index-fcf1f1d6.js";import"./PhCaretDown.vue-ba2234b0.js";import"./PhCheck.vue-6eebfc20.js";const T={title:"Ui/Select",component:v,argTypes:{readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},i=(r,{events:a})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:v},setup(){const u=o(void 0),p=o([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:r,events:a}}}),e=i.bind();e.args={title:"Input title"};const t=i.bind();t.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const n=i.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const s=i.bind();s.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};const f=(r,{events:a})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:v},setup(){const u=o([]),p=o([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:r,events:a}}}),l=f.bind();l.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};var c;e.parameters={...e.parameters,storySource:{source:`(args, {
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
})`,...(g=l.parameters)==null?void 0:g.storySource}};const V=["Default","Hint","ErrorHint","Inline","Multiselect"];export{e as Default,n as ErrorHint,t as Hint,s as Inline,l as Multiselect,V as __namedExportsOrder,T as default};
//# sourceMappingURL=index.stories-eba78e11.js.map
