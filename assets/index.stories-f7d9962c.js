import{d as n}from"./index-a7019bdf.js";import{J as p,G as l}from"./PhSmiley.vue-1d43e361.js";import{r as s}from"./vue.esm-bundler-2f1a0c70.js";import"./PhCaretRight.vue-6237ce29.js";import"./index-a6b7ce87.js";import"./index-8f1fe35f.js";import"./index-9a8885c9.js";import"./PhCheck.vue-9f721f1b.js";import"./index-f21b012c.js";import"./index-cbfcde6e.js";import"./index-46a4f45a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7674da9c.js";import"./index-9564dee0.js";import"./index-3332a755.js";import"./index-3db2181b.js";import"./index-2f0e7de4.js";import"./PhCaretDown.vue-93a8c713.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-4e8bb37d.js";import"./PhWarningCircle.vue-46898c60.js";import"./index-9af113e7.js";import"./PhWarning.vue-9de62ec5.js";import"./index-250426ec.js";import"./index-380c1435.js";import"./index-5e523301.js";import"./index-9a264dd8.js";import"./index-7feccfd3.js";import"./index-3c98fdd2.js";import"./index-7992c590.js";import"./index-42599c3e.js";import"./index-12ccc56c.js";import"./index-25fa1041.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
