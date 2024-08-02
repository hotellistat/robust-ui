import{d as n}from"./index-2e2c721e.js";import{J as p,G as l}from"./PhSmiley.vue-92430e81.js";import{r as s}from"./vue.esm-bundler-9cf70074.js";import"./PhCaretRight.vue-f508473b.js";import"./index-3e809143.js";import"./index-cf38702e.js";import"./index-e5a5b6af.js";import"./PhCheck.vue-a2ac5a0b.js";import"./index-751389b7.js";import"./index-bbb47c86.js";import"./index-a9f8e0f8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-cbd631cc.js";import"./index-401a850c.js";import"./index-3a49f04f.js";import"./index-f6ae1e3f.js";import"./index-053ddc6a.js";import"./PhCaretDown.vue-93ce0372.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fd25965d.js";import"./PhWarningCircle.vue-ba0c66b1.js";import"./index-9c979a71.js";import"./PhWarning.vue-3732c971.js";import"./index-f976adf3.js";import"./index-477f502e.js";import"./index-defbb035.js";import"./index-fbc885b0.js";import"./index-12f0fbd1.js";import"./index-81d6662b.js";import"./index-383b3814.js";import"./index-a9eb0c1d.js";import"./index-90359b98.js";import"./index-8c06287e.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
