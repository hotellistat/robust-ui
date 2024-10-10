import{d as n}from"./index-3377574c.js";import{J as p,G as l}from"./PhSmiley.vue-0705b922.js";import{r as s}from"./vue.esm-bundler-b2033fd2.js";import"./PhCaretRight.vue-e2c7635c.js";import"./index-367ed299.js";import"./index-b204258c.js";import"./index-78cf3a4a.js";import"./PhCheck.vue-dec63360.js";import"./index-d3b88f5b.js";import"./index-2e6aa3b9.js";import"./index-488bc39e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5c990de3.js";import"./index-a2ea4aec.js";import"./index-693acf9b.js";import"./index-750889b2.js";import"./index-9c32d6c6.js";import"./PhCaretDown.vue-e5f4bd51.js";import"./_commonjsHelpers-de833af9.js";import"./index-af6d963e.js";import"./PhWarningCircle.vue-7ee36e3e.js";import"./index-f943382a.js";import"./PhWarning.vue-cf185922.js";import"./index-bbb6ccd6.js";import"./index-89c710e1.js";import"./index-2aa0caa9.js";import"./index-ff029517.js";import"./index-91fde20b.js";import"./index-7701de0f.js";import"./index-a85164f7.js";import"./index-86fc2c29.js";import"./index-33a53e32.js";import"./index-49e0b4fd.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
