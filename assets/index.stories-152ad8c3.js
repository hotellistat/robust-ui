import{_ as c}from"./index-8608fcbb.js";import{p as o}from"./vue.esm-bundler-e6794ced.js";import"./index-4ad535a4.js";import"./index-e06476fb.js";import"./index-7162fc24.js";import"./PhCaretDown.vue-2cf61869.js";import"./PhCheck.vue-470ff877.js";const k={title:"Ui/Select",component:c,argTypes:{readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},i=(a,{events:r})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:c},setup(){const u=o(void 0),p=o([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:a,events:r}}}),e=i.bind();e.args={title:"Input title"};const t=i.bind();t.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const n=i.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const s=i.bind();s.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};const B=(a,{events:r})=>({template:'<Select v-bind="args" :options="options" v-model="value" @="events" class="w-64 min-w-0"/><br/>Value: {{value}}',components:{Select:c},setup(){const u=o([]),p=o([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:u,options:p,args:a,events:r}}}),l=B.bind();l.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state",searchable:!1};var v,m,h;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`(args, {
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
})`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var d,g,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
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
})`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var I,b,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`(args, {
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
})`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,S,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
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
})`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var H,T,V;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`(args, {
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
})`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const q=["Default","Hint","ErrorHint","Inline","Multiselect"];export{e as Default,n as ErrorHint,t as Hint,s as Inline,l as Multiselect,q as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories-152ad8c3.js.map
