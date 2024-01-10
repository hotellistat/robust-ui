import{e as n}from"./index-6b72d320.js";import{J as p,G as l}from"./PhSmiley.vue-802fdd58.js";import{r as s}from"./vue.esm-bundler-af08b7b0.js";import"./PhCaretRight.vue-08a17de6.js";import"./index-0a0fa230.js";import"./index-54d94260.js";import"./index-13867c25.js";import"./PhCheck.vue-d61ee31d.js";import"./index-fde0acfc.js";import"./index-b032ebef.js";import"./index-84430697.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-aa8dde2a.js";import"./index-e225b605.js";import"./index-3f74c8d7.js";import"./index-afdc6f80.js";import"./index-704610ab.js";import"./PhCaretDown.vue-5eaeff9c.js";import"./index-c74939c9.js";import"./PhWarningCircle.vue-351e1363.js";import"./index-0484aa64.js";import"./index-9c90464e.js";import"./index-e67e5908.js";import"./PhWarning.vue-c0ab9d24.js";import"./index-fd68cf33.js";import"./index-8e8da391.js";import"./index-22eda798.js";import"./index-fc78b686.js";import"./index-87c8af66.js";import"./index-f6f7f089.js";import"./index-27004747.js";import"./_commonjsHelpers-de833af9.js";const H={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,H as default};
