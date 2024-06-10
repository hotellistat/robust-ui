import{d as n}from"./index-9618a4f0.js";import{J as p,G as l}from"./PhSmiley.vue-e31193ff.js";import{r as s}from"./vue.esm-bundler-7e0ca5bb.js";import"./PhCaretRight.vue-5eff2c5e.js";import"./index-62b33547.js";import"./index-d897f1f8.js";import"./index-8a2e9412.js";import"./PhCheck.vue-14610fd1.js";import"./index-f4a1cd03.js";import"./index-b7da407d.js";import"./index-28ffac6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-14150d1c.js";import"./index-b0ae763b.js";import"./index-1a29d639.js";import"./index-8b26d0de.js";import"./index-9c6bd464.js";import"./PhCaretDown.vue-13e53ab8.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-51f5fd0a.js";import"./PhWarningCircle.vue-8a48d2e6.js";import"./index-c27c2e6f.js";import"./PhWarning.vue-25009bd4.js";import"./index-54184272.js";import"./index-b8db9072.js";import"./index-28ae34bf.js";import"./index-4fb3fcde.js";import"./index-fac0a23b.js";import"./index-447362c9.js";import"./index-891ecab7.js";import"./index-0d8b574b.js";import"./index-24858e83.js";import"./index-76a3bc56.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
