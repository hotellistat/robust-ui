import{_ as i}from"./index-ecc1de43.js";import{J as p,G as l}from"./PhSmiley.vue-29fbf070.js";import{r as s}from"./vue.esm-bundler-4b093791.js";import"./index-e446e932.js";import"./PhCheck.vue-c83224dd.js";import"./index-28ca9316.js";import"./floating-ui.dom-28dd0c9f.js";import"./PhCaretRight.vue-c4b142bd.js";import"./index-3a409b03.js";import"./index-06095ad2.js";import"./index-3f9b8550.js";import"./index-3ca9fd0b.js";import"./index-5704c243.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-a820f662.js";import"./index-ea48fdd0.js";import"./index-534e149b.js";import"./index-1fc27f8c.js";import"./PhCaretDown.vue-6e23ca25.js";import"./index-f39ddd26.js";import"./PhWarningCircle.vue-f5df56c7.js";import"./index-67ef798e.js";import"./index-53ebb12c.js";import"./index-15cec3ca.js";import"./PhWarning.vue-eb212a4c.js";import"./index-9b2ccf9e.js";import"./index-85c55c81.js";import"./index-4acbc033.js";import"./index-b97c47da.js";import"./index-71194958.js";import"./index-87b802c0.js";import"./index-2fbd1fb3.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Ui/FormRenderer",component:i,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:a=>({components:{FormRenderer:i,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const m=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],n=s({});return{args:a,options:m,data:n}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-5471a081.js.map
