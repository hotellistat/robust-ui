import{d as n}from"./index-5aa96659.js";import{J as p,G as l}from"./PhSmiley.vue-3d969ec5.js";import{r as s}from"./vue.esm-bundler-a72848c3.js";import"./PhCaretRight.vue-7ff22dd5.js";import"./index-cbad4310.js";import"./index-a9a12fc1.js";import"./index-1966277d.js";import"./PhCheck.vue-68734a86.js";import"./index-40d3ea92.js";import"./index-41b1b57b.js";import"./index-463eda1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-37a2f809.js";import"./index-98285913.js";import"./index-9c5463c6.js";import"./index-7f4babf5.js";import"./index-36ec367c.js";import"./PhCaretDown.vue-53494515.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-aa6f1b08.js";import"./PhWarningCircle.vue-dbb785ea.js";import"./index-8ea92436.js";import"./PhWarning.vue-710aeebd.js";import"./index-ae3827ca.js";import"./index-e959302c.js";import"./index-03b15471.js";import"./index-ab56e974.js";import"./index-ef933970.js";import"./index-6b29d817.js";import"./index-2d17b8ec.js";import"./index-19e6843a.js";import"./index-99db6534.js";import"./index-7fde1482.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
