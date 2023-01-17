import{_ as e}from"./index-20d9745c.js";import{d as u,Z as m}from"./vue-phosphor-icons-f4f4d043.js";import"./vue.esm-bundler-bdd4c61f.js";import"./index-0672f0cb.js";const h={title:"Ui/Button",component:e,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}},c=t=>({components:{Button:e},template:'<Button v-bind="args" variant="dark">Click here</Button>',setup(){return{args:t}}}),n=c.bind({}),d=t=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:e,PhSmiley:u},setup(){return{args:t}}}),r=d.bind(),g=t=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:e,PhPaperPlaneTilt:m},setup(){return{args:t}}}),o=g.bind(),B=t=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:e},setup(){return{args:t}}}),a=B.bind();var s;n.parameters={...n.parameters,storySource:{source:`args => ({
  components: {
    Button
  },
  template: '<Button v-bind="args" variant="dark">Click here</Button>',
  setup() {
    return {
      args
    };
  }
})`,...(s=n.parameters)==null?void 0:s.storySource}};var p;r.parameters={...r.parameters,storySource:{source:`args => ({
  template: \`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>\`,
  components: {
    Button,
    PhSmiley
  },
  setup() {
    return {
      args
    };
  }
})`,...(p=r.parameters)==null?void 0:p.storySource}};var i;o.parameters={...o.parameters,storySource:{source:`args => ({
  template: \`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>\`,
  components: {
    Button,
    PhPaperPlaneTilt
  },
  setup() {
    return {
      args
    };
  }
})`,...(i=o.parameters)==null?void 0:i.storySource}};var l;a.parameters={...a.parameters,storySource:{source:`args => ({
  template: \`<Button loading v-bind="args">Click here</Button>\`,
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  }
})`,...(l=a.parameters)==null?void 0:l.storySource}};const v=["Default","Prefix","Suffix","Loading"];export{n as Default,a as Loading,r as Prefix,o as Suffix,v as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories-a5bb7478.js.map
