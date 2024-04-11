import{_ as f}from"./index-20828a7e.js";import"./vue.esm-bundler-72d4ff20.js";import"./index-7fd4820d.js";import"./PhWarningCircle.vue-1411aa22.js";const w={title:"Ui/Input",component:f,argTypes:{readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},r=(x,{events:v})=>({template:`<Input class="mb-4" :cthulu="true" @="events" v-bind="args">
    <template #prefix>
    test
    </template>
    <template #suffix>
    test
    </template>
  </Input>`,components:{Input:f},setup(){return{args:x,events:v}}}),t=r.bind();t.args={modelValue:"Input text",title:"Input title"};const e=r.bind();e.args={placeholder:"this is a placeholder",title:"Input title"};const n=r.bind();n.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const s=r.bind();s.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};var a,p,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: \`<Input class="mb-4" :cthulu="true" @="events" v-bind="args">
    <template #prefix>
    test
    </template>
    <template #suffix>
    test
    </template>
  </Input>\`,
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(o=(p=t.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};var u,l,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: \`<Input class="mb-4" :cthulu="true" @="events" v-bind="args">
    <template #prefix>
    test
    </template>
    <template #suffix>
    test
    </template>
  </Input>\`,
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: \`<Input class="mb-4" :cthulu="true" @="events" v-bind="args">
    <template #prefix>
    test
    </template>
    <template #suffix>
    test
    </template>
  </Input>\`,
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,g,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  events
}) => ({
  template: \`<Input class="mb-4" :cthulu="true" @="events" v-bind="args">
    <template #prefix>
    test
    </template>
    <template #suffix>
    test
    </template>
  </Input>\`,
  components: {
    Input
  },
  setup() {
    return {
      args,
      events
    };
  }
})`,...(I=(g=s.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const H=["Default","Placeholder","Hint","ErrorHint"];export{t as Default,s as ErrorHint,n as Hint,e as Placeholder,H as __namedExportsOrder,w as default};
