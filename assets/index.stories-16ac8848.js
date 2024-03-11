import{d as n}from"./index-ec0efed2.js";import{J as p,G as l}from"./PhSmiley.vue-1186cc81.js";import{r as s}from"./vue.esm-bundler-3bce978e.js";import"./PhCaretRight.vue-3ef90c98.js";import"./index-882b6607.js";import"./index-007812b0.js";import"./index-1ecb7cde.js";import"./PhCheck.vue-ef873fb8.js";import"./index-4b9431bf.js";import"./index-b5ae59f9.js";import"./index-9fc7401b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-73f3dee8.js";import"./index-6a80c127.js";import"./index-8e2ad2f2.js";import"./index-997b66b7.js";import"./index-58f60a27.js";import"./PhCaretDown.vue-db43725b.js";import"./index-0f582519.js";import"./PhWarningCircle.vue-f1ab05f8.js";import"./index-13db1a73.js";import"./PhWarning.vue-7669e175.js";import"./index-c3f74c73.js";import"./index-35ce92cd.js";import"./index-a19ad943.js";import"./index-bdee1c88.js";import"./index-25064389.js";import"./index-10a4b8c7.js";import"./index-176fb52a.js";import"./index-5997a92d.js";import"./index-154e9419.js";import"./_commonjsHelpers-de833af9.js";import"./index-1c1bac54.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
