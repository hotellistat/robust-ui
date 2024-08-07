import{d as n}from"./index-f9482a58.js";import{J as p,G as l}from"./PhSmiley.vue-01e2311c.js";import{r as s}from"./vue.esm-bundler-d81b504f.js";import"./PhCaretRight.vue-f7161793.js";import"./index-ea1ad1dd.js";import"./index-b90d3368.js";import"./index-05807df9.js";import"./PhCheck.vue-f4f968d0.js";import"./index-2a6a87e7.js";import"./index-2eb7f321.js";import"./index-3d19f71a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3ac618af.js";import"./index-22facfe1.js";import"./index-8070e360.js";import"./index-5175e8f9.js";import"./index-8e2f40f5.js";import"./PhCaretDown.vue-c5843984.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-cba7849c.js";import"./PhWarningCircle.vue-b07dadc9.js";import"./index-8428959a.js";import"./PhWarning.vue-3446eb47.js";import"./index-5f1e2bcb.js";import"./index-5cefc105.js";import"./index-b096327f.js";import"./index-c12ca444.js";import"./index-85ad0fd2.js";import"./index-3e91c51b.js";import"./index-732c2bfa.js";import"./index-e1977c68.js";import"./index-02617ffc.js";import"./index-6fccc556.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
