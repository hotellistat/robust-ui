import{d as n}from"./index-7d33729c.js";import{J as p,G as l}from"./PhSmiley.vue-8ad83f6d.js";import{r as s}from"./vue.esm-bundler-1415f10d.js";import"./PhCaretRight.vue-c792c773.js";import"./index-c86cea6c.js";import"./index-17412b18.js";import"./index-4249d0e1.js";import"./PhCheck.vue-6eab9662.js";import"./index-e5191172.js";import"./index-f6c81f56.js";import"./index-4c74889a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3f7bae1f.js";import"./index-e82f58a1.js";import"./index-9e658c62.js";import"./index-28f4c80d.js";import"./index-63cb6f2d.js";import"./PhCaretDown.vue-6d047fd4.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-3ba1cfef.js";import"./PhWarningCircle.vue-7012dbd6.js";import"./index-b8ce9251.js";import"./PhWarning.vue-d51f35ea.js";import"./index-4b5e66fc.js";import"./index-4999d272.js";import"./index-d092110b.js";import"./index-269ddc29.js";import"./index-94a18a89.js";import"./index-c5ebee70.js";import"./index-6cc68c6b.js";import"./index-bd067066.js";import"./index-69dbf21a.js";import"./index-acc7b459.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
