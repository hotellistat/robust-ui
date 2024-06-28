import{d as n}from"./index-4f276869.js";import{J as p,G as l}from"./PhSmiley.vue-afcee7c3.js";import{r as s}from"./vue.esm-bundler-0373854b.js";import"./PhCaretRight.vue-42ea7355.js";import"./index-a4f49a66.js";import"./index-ebf6f712.js";import"./index-b860cc56.js";import"./PhCheck.vue-a6a00380.js";import"./index-e0602dad.js";import"./index-5a521923.js";import"./index-38b0fde2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-130c47b0.js";import"./index-aa89bf66.js";import"./index-5c8f9725.js";import"./index-fe73e184.js";import"./index-70035db1.js";import"./PhCaretDown.vue-e4573649.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-fb1f7c04.js";import"./PhWarningCircle.vue-ccb33d13.js";import"./index-39873b0e.js";import"./PhWarning.vue-b3989803.js";import"./index-8ceadaf8.js";import"./index-af6497a4.js";import"./index-9d3f790a.js";import"./index-8af3af6f.js";import"./index-7deb46d7.js";import"./index-62499eb5.js";import"./index-5bddcb50.js";import"./index-7b2ff929.js";import"./index-ab38f846.js";import"./index-f8b2b370.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
