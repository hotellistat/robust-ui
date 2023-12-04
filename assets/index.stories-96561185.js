import{_ as i}from"./index-792adf29.js";import{J as p,G as l}from"./PhSmiley.vue-ebcb2f1f.js";import{r as s}from"./vue.esm-bundler-ae7acd23.js";import"./index-c53ab45f.js";import"./PhCheck.vue-d5a5bf42.js";import"./index-6cfca2e9.js";import"./PhCaretRight.vue-60a7c514.js";import"./index-7b17e556.js";import"./index-42825869.js";import"./index-7a6fafbc.js";import"./index-ad5f9d14.js";import"./index-22bc3957.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-7ee25441.js";import"./index-b6a7ce83.js";import"./index-ded63a45.js";import"./index-685cc6c8.js";import"./PhCaretDown.vue-0142dae5.js";import"./index-d5167709.js";import"./PhWarningCircle.vue-f808551e.js";import"./index-4630769a.js";import"./index-8856fcc3.js";import"./index-98689c3c.js";import"./PhWarning.vue-82de2386.js";import"./index-0cfa2c11.js";import"./index-a103b92d.js";import"./index-6449a901.js";import"./index-e1fd4b7e.js";import"./index-612415ca.js";import"./index-da7b8437.js";import"./index-f1dd971c.js";import"./_commonjsHelpers-de833af9.js";const H={title:"Ui/FormRenderer",component:i,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:a=>({components:{FormRenderer:i,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const m=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],n=s({});return{args:a,options:m,data:n}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=index.stories-96561185.js.map
