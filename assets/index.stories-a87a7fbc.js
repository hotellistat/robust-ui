import{d as n}from"./index-f7aaa309.js";import{J as p,G as l}from"./PhSmiley.vue-2f6e47c9.js";import{r as s}from"./vue.esm-bundler-0c98e3e1.js";import"./PhCaretRight.vue-7a2b7b17.js";import"./index-ea21c5c1.js";import"./index-6a018c90.js";import"./index-915c60b9.js";import"./PhCheck.vue-f1236021.js";import"./index-cbdf116b.js";import"./index-74124bbd.js";import"./index-e4ccb488.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-8e26141a.js";import"./index-9f051482.js";import"./index-b4a44b8d.js";import"./index-a15e1ab7.js";import"./index-c18b567d.js";import"./PhCaretDown.vue-c6ed26f7.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-62213630.js";import"./PhWarningCircle.vue-5bc9a8b8.js";import"./index-69395e6a.js";import"./PhWarning.vue-c9232fe6.js";import"./index-1dcf8a6b.js";import"./index-d29e59a6.js";import"./index-cda6547a.js";import"./index-da865374.js";import"./index-0d125223.js";import"./index-b8520628.js";import"./index-61a73380.js";import"./index-07d63fbc.js";import"./index-3797bb42.js";import"./index-7c8f2fa5.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
