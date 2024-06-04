import{E as a}from"./index-28ffac6d.js";import{I as r}from"./PhWarning.vue-25009bd4.js";import{_ as p}from"./index-62b33547.js";import{I}from"./index-f6e5abe4.js";import"./vue.esm-bundler-7e0ca5bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d897f1f8.js";const N={title:"Ui/EmptyState",component:a,argTypes:{title:{control:{type:"text",default:"Title"}}}},E=t=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:a},setup(){return{args:t}}}),e=E.bind();e.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:r};const B=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:a,RobustButton:p},setup(){return{args:t}}}),n=B.bind();n.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:r};const T=t=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:a,RobustButton:p,RobustImg:I},setup(){return{args:t}}}),s=T.bind();s.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:r};const C=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:a,RobustButton:p,RobustImg:I},setup(){return{args:t}}}),o=C.bind();o.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};var i,u,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  template: \`<EmptyState v-bind="args" />\`,
  components: {
    EmptyState
  },
  setup() {
    return {
      args
    };
  }
})`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  template: \`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>\`,
  components: {
    EmptyState,
    RobustButton
  },
  setup() {
    return {
      args
    };
  }
})`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var b,g,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  template: \`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>\`,
  components: {
    EmptyState,
    RobustButton,
    RobustImg
  },
  setup() {
    return {
      args
    };
  }
})`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,R,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  template: \`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>\`,
  components: {
    EmptyState,
    RobustButton,
    RobustImg
  },
  setup() {
    return {
      args
    };
  }
})`,...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const O=["Default","CallToAction","CustomIcon","NoIcon"];export{n as CallToAction,s as CustomIcon,e as Default,o as NoIcon,O as __namedExportsOrder,N as default};
