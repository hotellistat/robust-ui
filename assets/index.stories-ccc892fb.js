import{_ as v}from"./index-9b7047e1.js";import{j as i}from"./vue.esm-bundler-9cbc270d.js";import"./index-9a1ea72a.js";import"./index-a1a5feae.js";import"./index-419285db.js";import"./PhCheck.vue-d5ba83ff.js";const U={title:"Ui/Select",component:v,argTypes:{readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},o=(a,{events:r})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:v},setup(){const u=i(void 0),p=i([{title:"Item undefined",value:void 0},{title:"Item null",value:null},{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:a,events:r}}}),e=o.bind();e.args={title:"Input title"};const t=o.bind();t.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const n=o.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const l=o.bind();l.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};const B=(a,{events:r})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:v},setup(){const u=i([]),p=i([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:a,events:r}}}),s=B.bind();s.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item undefined',
      value: undefined
    }, {
      title: 'Item null',
      value: null
    }, {
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
})`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,f,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item undefined',
      value: undefined
    }, {
      title: 'Item null',
      value: null
    }, {
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
})`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var I,b,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item undefined',
      value: undefined
    }, {
      title: 'Item null',
      value: null
    }, {
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
})`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,S,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: '<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',
  components: {
    Select
  },
  setup() {
    const value = ref(undefined);
    const options = ref([{
      title: 'Item undefined',
      value: undefined
    }, {
      title: 'Item null',
      value: null
    }, {
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
})`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var H,T,V;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`(args, {
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
})`,...(V=(T=s.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const k=["Default","Hint","ErrorHint","Inline","Multiselect"];export{e as Default,n as ErrorHint,t as Hint,l as Inline,s as Multiselect,k as __namedExportsOrder,U as default};
//# sourceMappingURL=index.stories-ccc892fb.js.map
