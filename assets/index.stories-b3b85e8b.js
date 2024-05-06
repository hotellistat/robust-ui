import{d as n}from"./index-4d205d97.js";import{J as p,G as l}from"./PhSmiley.vue-cd640dc0.js";import{r as s}from"./vue.esm-bundler-1c357e36.js";import"./PhCaretRight.vue-a9db7d7a.js";import"./index-9f6eb20a.js";import"./index-2348dd5e.js";import"./index-c6ed8b1a.js";import"./PhCheck.vue-5043450a.js";import"./index-5666bc06.js";import"./index-56d33763.js";import"./index-1e12db06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-fa6438c8.js";import"./index-f1bb0671.js";import"./index-b5f11823.js";import"./index-a6fd7365.js";import"./index-9e99b68a.js";import"./PhCaretDown.vue-68ceef7b.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e01e20c.js";import"./PhWarningCircle.vue-db9629c4.js";import"./index-efecb5ea.js";import"./PhWarning.vue-84a7b139.js";import"./index-caeb6456.js";import"./index-5b207562.js";import"./index-57b0e8e2.js";import"./index-743b45f3.js";import"./index-933dfdc5.js";import"./index-cd2a1313.js";import"./index-4d459671.js";import"./index-529fd614.js";import"./index-009e303b.js";import"./index-ca186dab.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormRenderer,
      PhSmiley,
      PhPaperPlaneTilt
    },
    setup: () => {
      const options: Option[] = [{
        type: 'text',
        item: 'name',
        title: 'Name',
        default: 'John Doe'
      }, {
        type: 'text',
        item: 'email',
        title: 'Email'
      }, {
        type: 'checkbox',
        item: 'marketing_mail',
        title: 'Marketing Mail'
      }];
      const data = ref({});
      return {
        args,
        options,
        data
      };
    },
    template: \`<FormRenderer :options="options" v-model="data"/>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,K as default};
