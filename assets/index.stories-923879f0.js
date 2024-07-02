import{d as n}from"./index-619a314c.js";import{J as p,G as l}from"./PhSmiley.vue-40d0a68a.js";import{r as s}from"./vue.esm-bundler-5304782f.js";import"./PhCaretRight.vue-532aa00e.js";import"./index-457a627f.js";import"./index-64853bec.js";import"./index-db90c89f.js";import"./PhCheck.vue-ea5bd38e.js";import"./index-071cb0d2.js";import"./index-210156ca.js";import"./index-203fa594.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-be24201c.js";import"./index-9210c1aa.js";import"./index-dacb4fc9.js";import"./index-8f79d0e7.js";import"./index-01ad2f80.js";import"./PhCaretDown.vue-5bce5257.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-a6044dbe.js";import"./PhWarningCircle.vue-0ed7a858.js";import"./index-7007677a.js";import"./PhWarning.vue-e627ea19.js";import"./index-1ec12e92.js";import"./index-e8639ca1.js";import"./index-f9466c62.js";import"./index-45a1baa9.js";import"./index-cc1bc9ef.js";import"./index-a92001d2.js";import"./index-52ac5391.js";import"./index-632a28af.js";import"./index-9b873d7b.js";import"./index-d5b13bb5.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
