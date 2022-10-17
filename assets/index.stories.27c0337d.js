import{_ as e}from"./index.ad78fcdd.js";import{s}from"./vue-phosphor-icons.2d993973.js";import{_ as o}from"./index.c33cb5dc.js";import{I as n}from"./index.add36740.js";import"./iframe.4adac04e.js";import"./index.0e7396ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={title:"Ui/EmptyState",component:e,argTypes:{title:{control:{type:"text",default:"Title"}}}},i=t=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:e},setup(){return{args:t}}}),a=i.bind();a.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const p=t=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:e,RobustButton:o},setup(){return{args:t}}}),u=p.bind();u.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const r=t=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:e,RobustButton:o,RobustImg:n},setup(){return{args:t}}}),m=r.bind();m.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:s};const g=["Default","CallToAction","CustomIcon"];export{u as CallToAction,m as CustomIcon,a as Default,g as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories.27c0337d.js.map
