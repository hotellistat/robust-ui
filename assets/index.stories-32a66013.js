import{_ as o}from"./index-3ef2a912.js";import{s as a}from"./vue-phosphor-icons-f4f4d043.js";import{_ as u}from"./index-20d9745c.js";import{I as m}from"./index-e889a8c6.js";import"./vue.esm-bundler-bdd4c61f.js";import"./index-0672f0cb.js";const R={title:"Ui/EmptyState",component:o,argTypes:{title:{control:{type:"text",default:"Title"}}}},c=t=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:o},setup(){return{args:t}}}),e=c.bind();e.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:a};const l=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:o,RobustButton:u},setup(){return{args:t}}}),n=l.bind();n.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:a};const d=t=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:o,RobustButton:u,RobustImg:m},setup(){return{args:t}}}),s=d.bind();s.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:a};var r;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: \`<EmptyState v-bind="args" />\`,
  components: {
    EmptyState
  },
  setup() {
    return {
      args
    };
  }
})`,...(r=e.parameters)==null?void 0:r.storySource}};var p;n.parameters={...n.parameters,storySource:{source:`args => ({
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
})`,...(p=n.parameters)==null?void 0:p.storySource}};var i;s.parameters={...s.parameters,storySource:{source:`args => ({
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
})`,...(i=s.parameters)==null?void 0:i.storySource}};const I=["Default","CallToAction","CustomIcon"];export{n as CallToAction,s as CustomIcon,e as Default,I as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-32a66013.js.map
