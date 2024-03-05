import{d as n}from"./index-4f3354fe.js";import{J as p,G as l}from"./PhSmiley.vue-ba490df1.js";import{r as s}from"./vue.esm-bundler-d631efa9.js";import"./PhCaretRight.vue-058956ce.js";import"./index-01ce3e4d.js";import"./index-fbf8ffd5.js";import"./index-bac46253.js";import"./PhCheck.vue-06252efc.js";import"./index-99b6f554.js";import"./index-449ab7cc.js";import"./index-27ef2dcf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-981d5bc2.js";import"./index-0faa3e16.js";import"./index-45c625bf.js";import"./index-0a641469.js";import"./index-edee24c9.js";import"./PhCaretDown.vue-dd59dd83.js";import"./index-0c053482.js";import"./PhWarningCircle.vue-54a8d4cd.js";import"./index-1263b94b.js";import"./PhWarning.vue-ef4e26f8.js";import"./index-62f9a98d.js";import"./index-dcaa9eea.js";import"./index-6964d622.js";import"./index-385a42b4.js";import"./index-c19cb848.js";import"./index-8baabd7a.js";import"./index-82ba3e93.js";import"./index-398f8f6a.js";import"./index-453c61c2.js";import"./_commonjsHelpers-de833af9.js";import"./index-3e5b2d82.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
