import{_ as i}from"./index-7c769de1.js";import{J as p,G as l}from"./PhSmiley.vue-a11a6331.js";import{r as s}from"./vue.esm-bundler-ebcf9369.js";import"./index-286161d2.js";import"./PhCheck.vue-910ea200.js";import"./index-bccff33e.js";import"./PhCaretRight.vue-aa6fb311.js";import"./index-09d52eb2.js";import"./index-0a4d6cf7.js";import"./index-a2b4b7ff.js";import"./index-9c2bee41.js";import"./index-dc269292.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5979ae88.js";import"./index-c6cd5b92.js";import"./index-44e83eb1.js";import"./index-a579ba8f.js";import"./PhCaretDown.vue-76628bb3.js";import"./index-f9c8087d.js";import"./PhWarningCircle.vue-346e7bab.js";import"./index-321b96c5.js";import"./index-c0f46616.js";import"./index-c74d5e7d.js";import"./PhWarning.vue-5df51850.js";import"./index-40b68041.js";import"./index-27180d89.js";import"./index-945804a9.js";import"./index-afdcd96e.js";import"./index-b6bed80e.js";import"./index-37832a1d.js";import"./index-a5ee0ed5.js";import"./_commonjsHelpers-de833af9.js";const H={title:"Ui/FormRenderer",component:i,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:a=>({components:{FormRenderer:i,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const m=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],n=s({});return{args:a,options:m,data:n}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-f2b5be4b.js.map
