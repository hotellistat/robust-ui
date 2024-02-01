import{e as n}from"./index-jKwqWZl3.js";import{J as p,G as l}from"./PhSmiley.vue-as4Y5knT.js";import{r as s}from"./vue.esm-bundler-K5TEJ--t.js";import"./PhCaretRight.vue-dlXRfe80.js";import"./index-4551Cd6c.js";import"./index-KL80NxgM.js";import"./index-wFcuGPju.js";import"./PhCheck.vue-U5B8rUzB.js";import"./index-xHrpYyuz.js";import"./index-Rza8L8ts.js";import"./index-apVMdiqz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-pJWFkETw.js";import"./index-7Q3Hr3U6.js";import"./index-aouWP0zy.js";import"./index-qylRT29W.js";import"./index-nV4tVoxk.js";import"./PhCaretDown.vue-C0t7Susw.js";import"./index-BYYA_Utq.js";import"./PhWarningCircle.vue-iOVsCZLu.js";import"./index-_Veg0b7T.js";import"./index-rtLxIiL9.js";import"./index--GwMOkHI.js";import"./PhWarning.vue-8eg3yxdW.js";import"./index-4_el2xJL.js";import"./index-HxKYYJ8T.js";import"./index-mEmu92-W.js";import"./index-Vx_2mOtr.js";import"./index--L_maO6f.js";import"./index-gDMgr7RS.js";import"./index-VqWTpiqi.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LT2-D9pZ.js";const I={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
