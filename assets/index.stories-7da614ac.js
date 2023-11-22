import{_ as o}from"./index-09d52eb2.js";import{J as l,G as s}from"./PhSmiley.vue-a11a6331.js";import"./vue.esm-bundler-ebcf9369.js";import"./index-0a4d6cf7.js";const c={title:"Ui/Button",component:o,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1,tag:"button"}},e={render:r=>({components:{Button:o,PhSmiley:l,PhPaperPlaneTilt:s},setup:()=>({args:r}),template:`
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
//# sourceMappingURL=index.stories-7da614ac.js.map