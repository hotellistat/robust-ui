import{d as n}from"./index-61419ace.js";import{J as p,G as l}from"./PhSmiley.vue-43345d3c.js";import{r as s}from"./vue.esm-bundler-5fdd8ab6.js";import"./PhCaretRight.vue-65fe5738.js";import"./index-fab4988d.js";import"./index-067a97f2.js";import"./index-7dab12d0.js";import"./PhCheck.vue-f0a19b25.js";import"./index-14dfe2df.js";import"./index-23aecf2a.js";import"./index-0e3aa9d0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-9d743ffa.js";import"./index-d7a657a6.js";import"./index-b2862db1.js";import"./index-54d4f55f.js";import"./index-aad9d61c.js";import"./PhCaretDown.vue-9c723a04.js";import"./_commonjsHelpers-de833af9.js";import"./index-879beed2.js";import"./PhWarningCircle.vue-ec851534.js";import"./index-70bef210.js";import"./PhWarning.vue-bbee8eb9.js";import"./index-d99262a5.js";import"./index-bcb0dcc9.js";import"./index-07f9524f.js";import"./index-856c80c0.js";import"./index-ca7f747a.js";import"./index-ae7da360.js";import"./index-070cb6dc.js";import"./index-add55788.js";import"./index-ebb28332.js";import"./index-b8d441cc.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
