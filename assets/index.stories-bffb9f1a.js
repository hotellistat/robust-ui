import{d as n}from"./index-1f07f080.js";import{J as p,G as l}from"./PhSmiley.vue-1e224e4c.js";import{r as s}from"./vue.esm-bundler-6f49bc6f.js";import"./PhCaretRight.vue-4dfd7fd9.js";import"./index-f7d8b249.js";import"./index-32eddac2.js";import"./index-252e551c.js";import"./PhCheck.vue-584b6994.js";import"./index-645fbc8d.js";import"./index-feeb6e8a.js";import"./index-a615481d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-bd98586a.js";import"./index-785d8004.js";import"./index-b6643815.js";import"./index-10277db9.js";import"./index-ef84e4ed.js";import"./PhCaretDown.vue-dde853fc.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./index-1f188261.js";import"./PhWarningCircle.vue-4ed838bf.js";import"./index-5893e872.js";import"./PhWarning.vue-70085507.js";import"./index-4dab90b9.js";import"./index-7e509391.js";import"./index-86bb0c0e.js";import"./index-db2680f7.js";import"./index-cca15249.js";import"./index-0fee726f.js";import"./index-f126fa57.js";import"./index-32657282.js";import"./index-ca3930a2.js";import"./index-a5d3099f.js";const K={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
