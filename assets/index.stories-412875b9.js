import{f as i}from"./index-19b0c229.js";import{J as p,G as l}from"./PhSmiley.vue-3e365a78.js";import{a as s}from"./vue.esm-bundler-c29c03ae.js";import"./PhCaretRight.vue-10d95dc4.js";import"./index-a173c4a8.js";import"./index-be0f0031.js";import"./index-525869d2.js";import"./PhCheck.vue-4321f7f1.js";import"./index-53d6c2da.js";import"./index-0ba9f111.js";import"./index-14c06499.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-05f32547.js";import"./index-7e9988f7.js";import"./index-54c9e3a1.js";import"./index-ed275ab4.js";import"./PhCaretDown.vue-d1c52ee7.js";import"./index-e224144a.js";import"./PhWarningCircle.vue-a9bc05a3.js";import"./index-fd4ca2cb.js";import"./index-8267663a.js";import"./index-4ceae020.js";import"./PhWarning.vue-045f1f2d.js";import"./index-07427818.js";import"./index-28ccbb04.js";import"./index-f07a6f7c.js";import"./index-bd31839f.js";import"./index-946d8714.js";import"./index-c1a418bc.js";import"./index-2831ba26.js";import"./_commonjsHelpers-87174ba5.js";const B={title:"Ui/FormRenderer",component:i,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:a=>({components:{FormRenderer:i,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const m=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],n=s({});return{args:a,options:m,data:n}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,B as default};
//# sourceMappingURL=index.stories-412875b9.js.map
