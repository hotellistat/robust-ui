import{_ as i}from"./index-44321f87.js";import{J as p,G as l}from"./PhSmiley.vue-0f773674.js";import{r as s}from"./vue.esm-bundler-22b53bfc.js";import"./index-bdfed0c8.js";import"./PhCheck.vue-4eaa9e07.js";import"./index-0209670b.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-ab999ed8.js";import"./index-f56eb3d6.js";import"./index-040cf2c3.js";import"./index-21a0a241.js";import"./index-806109a3.js";import"./index-70413851.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-71bc0e30.js";import"./index-3f79f682.js";import"./index-fd5f4f8a.js";import"./index-3e7c15ad.js";import"./PhCaretDown.vue-8f79e38b.js";import"./index-ec988ce3.js";import"./PhWarningCircle.vue-46d5e3f6.js";import"./index-77b5f578.js";import"./index-c9ac3d5c.js";import"./index-65fa0a4f.js";import"./PhWarning.vue-967f20ed.js";import"./index-c0a29e75.js";import"./index-2b207480.js";import"./index-af568efc.js";import"./index-956cca8d.js";import"./index-104bc87b.js";import"./index-d23954d7.js";import"./index-8f2a5f12.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Ui/FormRenderer",component:i,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:a=>({components:{FormRenderer:i,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const m=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],n=s({});return{args:a,options:m,data:n}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-12b5f138.js.map
