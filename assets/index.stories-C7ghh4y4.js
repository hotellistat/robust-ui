import{d as n}from"./index-DGF0P7OU.js";import{J as p,G as l}from"./PhSmiley.vue-BJjUd4eG.js";import{r as s}from"./vue.esm-bundler-Bz3qryIq.js";import"./PhCaretRight.vue-BdMnY5Sb.js";import"./index-DEFBeL9q.js";import"./index-BU_rksmQ.js";import"./index-BlJvGyEY.js";import"./PhCheck.vue-LWmbIflT.js";import"./index-CJaCNXen.js";import"./index-DIemJ4uL.js";import"./index-BZHNt2Vw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CLsNVtzP.js";import"./index-SF679qGP.js";import"./index-B5I386vR.js";import"./index-B8HfPLlM.js";import"./index-D05znLir.js";import"./PhCaretDown.vue-DnCQUr8d.js";import"./index-QvkJk991.js";import"./PhWarningCircle.vue-BVo6iGy_.js";import"./index-6BUjMNqN.js";import"./PhWarning.vue-OkfWgJnO.js";import"./index-DTSWV6Q7.js";import"./index-CZvPACog.js";import"./index-CxUsfRvA.js";import"./index-MrLv7tfR.js";import"./index-B9fQDvLm.js";import"./index-CGQgqzjB.js";import"./index-DdH171X7.js";import"./index-BmUARsfE.js";import"./index-CFe1HMxT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CibTL6pJ.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
