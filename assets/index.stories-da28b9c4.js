import{d as n}from"./index-4f4b2b35.js";import{J as p,G as l}from"./PhSmiley.vue-12450495.js";import{r as s}from"./vue.esm-bundler-40684a2c.js";import"./PhCaretRight.vue-0f45b579.js";import"./index-709bda04.js";import"./index-36c781b8.js";import"./index-0ef6b22c.js";import"./PhCheck.vue-75af1965.js";import"./index-7fe6b76d.js";import"./index-fd20396c.js";import"./index-33f978b5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f5b69b25.js";import"./index-6e010b96.js";import"./index-2225cbf8.js";import"./index-680ec746.js";import"./index-386b04ec.js";import"./PhCaretDown.vue-7409298c.js";import"./index-b1b87519.js";import"./PhWarningCircle.vue-b1dd1b06.js";import"./index-9ebb15dc.js";import"./PhWarning.vue-7952f952.js";import"./index-23c089ce.js";import"./index-1b217a85.js";import"./index-7aac2350.js";import"./index-01c09874.js";import"./index-afa359bf.js";import"./index-4c39c7c0.js";import"./index-b28470de.js";import"./index-aa275c57.js";import"./index-15e948f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-ecb02d23.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
