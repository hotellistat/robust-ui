import{d as n}from"./index-c080ed1e.js";import{J as p,G as l}from"./PhSmiley.vue-a47b7a15.js";import{r as s}from"./vue.esm-bundler-055c4c85.js";import"./PhCaretRight.vue-611181c5.js";import"./index-dd41b3c6.js";import"./index-91538fcc.js";import"./index-439c4340.js";import"./PhCheck.vue-93de0707.js";import"./index-f12a484c.js";import"./index-f41d5f48.js";import"./index-49e4792d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-0ec1b475.js";import"./index-61c8c02d.js";import"./index-4d6570b2.js";import"./index-47143930.js";import"./index-6a93e7ba.js";import"./PhCaretDown.vue-fc97a977.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-db286dc5.js";import"./PhWarningCircle.vue-f7cfedaa.js";import"./index-1494bd6d.js";import"./PhWarning.vue-1c367713.js";import"./index-dec26a00.js";import"./index-18d0fd1d.js";import"./index-48739506.js";import"./index-ce4e40a6.js";import"./index-be10592a.js";import"./index-e28967d1.js";import"./index-cee761bf.js";import"./index-065955f8.js";import"./index-e88d6a77.js";import"./index-2ed8dbdf.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
