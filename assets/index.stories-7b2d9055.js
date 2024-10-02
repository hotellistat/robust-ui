import{_ as o}from"./index-b2862db1.js";import"./vue.esm-bundler-5fdd8ab6.js";const l={title:"Ui/InputWrapper",component:o,argTypes:{title:{control:{type:"text"}},class:{control:{type:"text"}},boxClass:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},fixedHeight:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{title:"Date range picker",class:"w-64",boxClass:"",fixedHeight:!0,readonly:!1,condensed:!1,disabled:!1}},e={render:a=>({components:{InputWrapper:o},setup:()=>({args:a}),template:`
      <InputWrapper v-bind="args" v-model="date"></InputWrapper>
      `})};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputWrapper
    },
    setup: () => {
      return {
        args
      };
    },
    template: \`
      <InputWrapper v-bind="args" v-model="date"></InputWrapper>
      \`
  })
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,l as default};
