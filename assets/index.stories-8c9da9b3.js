import{d as n}from"./index-9a4fda51.js";import{J as p,G as l}from"./PhSmiley.vue-679462ea.js";import{r as s}from"./vue.esm-bundler-4fde1cfe.js";import"./PhCaretRight.vue-fa735f09.js";import"./index-d407103c.js";import"./index-a3e628cb.js";import"./index-7b240a4b.js";import"./PhCheck.vue-77d1d6d5.js";import"./index-fa11d4d6.js";import"./index-0c961d62.js";import"./index-95c72e10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d61c5a0c.js";import"./index-75e8b5cf.js";import"./index-c55dab01.js";import"./index-8116c02f.js";import"./index-367a905f.js";import"./PhCaretDown.vue-426e23d0.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-bdbc1ce2.js";import"./PhWarningCircle.vue-4d9c0992.js";import"./index-567acb92.js";import"./PhWarning.vue-bcb936fb.js";import"./index-c0fa0db6.js";import"./index-2205e1c9.js";import"./index-56459c0c.js";import"./index-65c5f553.js";import"./index-8178cbf3.js";import"./index-90a02073.js";import"./index-78c16031.js";import"./index-3d1926c6.js";import"./index-0ac4b6c8.js";import"./index-ae558d6c.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
