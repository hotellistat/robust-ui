import{_ as e}from"./index.185af462.js";import{s}from"./vue-phosphor-icons.85dccd03.js";import{_ as o}from"./index.19deef9e.js";import{I as n}from"./index.69ea4b18.js";import"./vue.esm-bundler.32ce71b1.js";import"./index.334ab1cc.js";const y={title:"Ui/EmptyState",component:e,argTypes:{title:{control:{type:"text",default:"Title"}}}},i=t=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:e},setup(){return{args:t}}}),a=i.bind();a.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const p=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:e,RobustButton:o},setup(){return{args:t}}}),u=p.bind();u.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const r=t=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:e,RobustButton:o,RobustImg:n},setup(){return{args:t}}}),m=r.bind();m.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const f=["Default","CallToAction","CustomIcon"];export{u as CallToAction,m as CustomIcon,a as Default,f as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories.e8041215.js.map
