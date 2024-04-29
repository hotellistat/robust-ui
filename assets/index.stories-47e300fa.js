import{d as n}from"./index-cf753c18.js";import{J as p,G as l}from"./PhSmiley.vue-0e33cbc7.js";import{r as s}from"./vue.esm-bundler-3a6ccb9d.js";import"./PhCaretRight.vue-7a865273.js";import"./index-4dbc5af7.js";import"./index-fffe1495.js";import"./index-c740f187.js";import"./PhCheck.vue-baf99df6.js";import"./index-3c86eeab.js";import"./index-882777ef.js";import"./index-5f476b10.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5a91f5ec.js";import"./index-a8d4d443.js";import"./index-63d9c9dd.js";import"./index-6fc90b9b.js";import"./index-e7b79041.js";import"./PhCaretDown.vue-cf6068cb.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-9cece67e.js";import"./PhWarningCircle.vue-53e622e7.js";import"./index-827efad9.js";import"./PhWarning.vue-b7a22815.js";import"./index-d93382a3.js";import"./index-37cfe9e2.js";import"./index-a109fab6.js";import"./index-68df4b28.js";import"./index-ce28540e.js";import"./index-420f0172.js";import"./index-289cb84b.js";import"./index-e8da600d.js";import"./index-60df7083.js";import"./index-ab63aaee.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
