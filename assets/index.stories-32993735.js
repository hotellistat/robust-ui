import{E as o}from"./index-48ca93db.js";import{I as a}from"./PhWarning.vue-22197565.js";import{_ as b}from"./index-249efe23.js";import{I as h}from"./index-160d70fd.js";import"./vue.esm-bundler-b37ea11a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-ed922b58.js";const x={title:"Ui/EmptyState",component:o,argTypes:{title:{control:{type:"text",default:"Title"}}}},y=t=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:o},setup(){return{args:t}}}),e=y.bind();e.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:a};const S=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:o,RobustButton:b},setup(){return{args:t}}}),n=S.bind();n.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:a};const E=t=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:o,RobustButton:b,RobustImg:h},setup(){return{args:t}}}),s=E.bind();s.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:a};var r,p,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  template: \`<EmptyState v-bind="args" />\`,
  components: {
    EmptyState
  },
  setup() {
    return {
      args
    };
  }
})`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const _=["Default","CallToAction","CustomIcon"];export{n as CallToAction,s as CustomIcon,e as Default,_ as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-32993735.js.map