import{_ as e}from"./index.8a79be7b.js";import{s}from"./vue-phosphor-icons.9c01704a.js";import{_ as o}from"./index.f83e1052.js";import{I as n}from"./index.190a6aae.js";import"./vue.esm-bundler.33188a4f.js";import"./index.ae49dfed.js";const y={title:"Ui/EmptyState",component:e,argTypes:{title:{control:{type:"text",default:"Title"}}}},i=t=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:e},setup(){return{args:t}}}),a=i.bind();a.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const p=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:e,RobustButton:o},setup(){return{args:t}}}),u=p.bind();u.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const r=t=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:e,RobustButton:o,RobustImg:n},setup(){return{args:t}}}),m=r.bind();m.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const f=["Default","CallToAction","CustomIcon"];export{u as CallToAction,m as CustomIcon,a as Default,f as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories.0eb3c7ed.js.map
