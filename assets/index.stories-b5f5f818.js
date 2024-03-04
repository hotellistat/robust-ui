import{d as n}from"./index-fbaa88a8.js";import{J as p,G as l}from"./PhSmiley.vue-f23dcdf2.js";import{r as s}from"./vue.esm-bundler-72d4ff20.js";import"./PhCaretRight.vue-824c69d1.js";import"./index-9e32e11f.js";import"./index-2f0c86a9.js";import"./index-85f1818c.js";import"./PhCheck.vue-9e6a3c2e.js";import"./index-b7a303c1.js";import"./index-de0bd467.js";import"./index-27de333b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d531d5f5.js";import"./index-29350378.js";import"./index-7fd4820d.js";import"./index-d91f25a7.js";import"./index-c1abcfe0.js";import"./PhCaretDown.vue-b8e75b60.js";import"./index-20828a7e.js";import"./PhWarningCircle.vue-1411aa22.js";import"./index-717081f7.js";import"./PhWarning.vue-c01382f6.js";import"./index-7fbfe550.js";import"./index-aab83b42.js";import"./index-28f17575.js";import"./index-323d997c.js";import"./index-00af0eaf.js";import"./index-2e7b94a6.js";import"./index-dc1f6e39.js";import"./index-4133167f.js";import"./index-6d20ce66.js";import"./_commonjsHelpers-de833af9.js";import"./index-2bda9442.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const K=["Default"];export{t as Default,K as __namedExportsOrder,I as default};
