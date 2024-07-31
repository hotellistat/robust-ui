import{d as n}from"./index-fa093ad8.js";import{J as p,G as l}from"./PhSmiley.vue-df6184e6.js";import{r as s}from"./vue.esm-bundler-3e10b1cd.js";import"./PhCaretRight.vue-5868ab31.js";import"./index-f8b74898.js";import"./index-0780a91c.js";import"./index-fc7c47f8.js";import"./PhCheck.vue-c52a3c08.js";import"./index-b9ff3cef.js";import"./index-7155124e.js";import"./index-9ae61987.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-74404727.js";import"./index-06fb2644.js";import"./index-fb423059.js";import"./index-3a0fa72c.js";import"./index-3ec5c200.js";import"./PhCaretDown.vue-859c5bf5.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-f707b652.js";import"./PhWarningCircle.vue-a8887532.js";import"./index-3dee12d2.js";import"./PhWarning.vue-8f256f3e.js";import"./index-a1a4a2f1.js";import"./index-26cc95ce.js";import"./index-3a97e302.js";import"./index-c355538d.js";import"./index-ed542f97.js";import"./index-adbae219.js";import"./index-8a567b64.js";import"./index-db42dd93.js";import"./index-b3f05d78.js";import"./index-fd6ce722.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
