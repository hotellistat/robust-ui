import{_ as o}from"./index-3a409b03.js";import{J as l,G as s}from"./PhSmiley.vue-29fbf070.js";import"./vue.esm-bundler-4b093791.js";import"./index-06095ad2.js";const c={title:"Ui/Button",component:o,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:r=>({components:{Button:o,PhSmiley:l,PhPaperPlaneTilt:s},setup:()=>({args:r}),template:`
    <Button v-bind="args">
      <template v-slot:prefix>
        <PhSmiley />
      </template>
      Click here
      <template v-slot:suffix>
        <PhPaperPlaneTilt />
      </template>
    </Button>`})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      PhSmiley,
      PhPaperPlaneTilt
    },
    setup: () => ({
      args
    }),
    template: \`
    <Button v-bind="args">
      <template v-slot:prefix>
        <PhSmiley />
      </template>
      Click here
      <template v-slot:suffix>
        <PhPaperPlaneTilt />
      </template>
    </Button>\`
  })
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories-dcac875d.js.map
