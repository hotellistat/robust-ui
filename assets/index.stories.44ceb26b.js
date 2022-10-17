import{_ as e}from"./index.c33cb5dc.js";import{d as n,Z as o}from"./vue-phosphor-icons.2d993973.js";import"./iframe.4adac04e.js";import"./index.0e7396ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";const m={title:"Ui/Button",component:e,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}},a=t=>({components:{Button:e},template:'<Button v-bind="args" >Click here</Button>',setup(){return{args:t}}}),f=a.bind({}),r=t=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:e,PhSmiley:n},setup(){return{args:t}}}),b=r.bind(),i=t=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:e,PhPaperPlaneTilt:o},setup(){return{args:t}}}),g=i.bind(),l=t=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:e},setup(){return{args:t}}}),B=l.bind(),x=["Default","Prefix","Suffix","Loading"];export{f as Default,B as Loading,b as Prefix,g as Suffix,x as __namedExportsOrder,m as default};
//# sourceMappingURL=index.stories.44ceb26b.js.map
