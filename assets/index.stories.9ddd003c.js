import{_ as e}from"./index.f83e1052.js";import{d as n,Z as o}from"./vue-phosphor-icons.9c01704a.js";import"./vue.esm-bundler.33188a4f.js";import"./index.ae49dfed.js";const d={title:"Ui/Button",component:e,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}},a=t=>({components:{Button:e},template:'<Button v-bind="args" >Click here</Button>',setup(){return{args:t}}}),m=a.bind({}),r=t=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:e,PhSmiley:n},setup(){return{args:t}}}),f=r.bind(),i=t=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:e,PhPaperPlaneTilt:o},setup(){return{args:t}}}),b=i.bind(),l=t=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:e},setup(){return{args:t}}}),g=l.bind(),B=["Default","Prefix","Suffix","Loading"];export{m as Default,g as Loading,f as Prefix,b as Suffix,B as __namedExportsOrder,d as default};
//# sourceMappingURL=index.stories.9ddd003c.js.map
