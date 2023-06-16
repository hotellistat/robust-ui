import{f as i}from"./index-4bc6d3c9.js";import{J as p,G as l}from"./PhSmiley.vue-9e337304.js";import{a as s}from"./vue.esm-bundler-17561e39.js";import"./PhCaretRight.vue-eb8c336c.js";import"./index-9f786b8e.js";import"./index-04f315e1.js";import"./index-745ce5ee.js";import"./PhCheck.vue-8f274b2b.js";import"./index-dc6dca65.js";import"./index-95c8f8e0.js";import"./index-e8bfdf8b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5755a50b.js";import"./index-70d4b3d5.js";import"./index-7327a516.js";import"./index-9e2b4583.js";import"./PhCaretDown.vue-87a41fe5.js";import"./index-59e1a890.js";import"./PhWarningCircle.vue-fc65e2d4.js";import"./index-1694b2ee.js";import"./index-3cafb0ea.js";import"./index-f994fa20.js";import"./PhWarning.vue-9fff1b8c.js";import"./index-1f6e8ca0.js";import"./index-c4b1fc12.js";import"./index-475986b9.js";import"./index-52361d40.js";import"./index-5cbc5df8.js";import"./index-b8008aff.js";import"./index-56457b85.js";import"./_commonjsHelpers-87174ba5.js";const B={title:"Ui/FormRenderer",component:i,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:a=>({components:{FormRenderer:i,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const m=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],n=s({});return{args:a,options:m,data:n}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-adb6dc50.js.map
