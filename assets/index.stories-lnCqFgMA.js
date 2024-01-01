import{e as n}from"./index-sx8a-_1O.js";import{J as p,G as l}from"./PhSmiley.vue-PEwRFaK8.js";import{r as s}from"./vue.esm-bundler-U1mN_w1c.js";import"./PhCaretRight.vue-oc3ZNeuD.js";import"./index-tpmOQRgO.js";import"./index-YPuapsoM.js";import"./index-o4qo-L9t.js";import"./PhCheck.vue-sJ4YRl3f.js";import"./index-LugFut2P.js";import"./index-FGDhO6oI.js";import"./index-cLvk_ZOz.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-Y6LZPOcL.js";import"./index-ToBx9UoQ.js";import"./index-dU9uQFtL.js";import"./index-q92zW2ka.js";import"./index-0lhbIIFJ.js";import"./PhCaretDown.vue-3MXhEOMw.js";import"./index-JoP2b90D.js";import"./PhWarningCircle.vue-sNGinm7E.js";import"./index-KB86D1Ku.js";import"./index-OEAVk76a.js";import"./index-Z0KAZX73.js";import"./PhWarning.vue-VmnKjyII.js";import"./index-K-BiyT7S.js";import"./index-PKXGh8SZ.js";import"./index-HULBzfcb.js";import"./index-SLwA-m6W.js";import"./index-7Kofsbf0.js";import"./index-utLabvHJ.js";import"./index-CSzTOa39.js";import"./_commonjsHelpers-4gQjN7DL.js";const H={title:"Ui/FormRenderer",component:n,argTypes:{onClick:{action:"clicked"},variant:{options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"],control:{type:"select"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}},args:{variant:"primary",loading:!1,disabled:!1,condensed:!1,rounded:!1}},t={render:i=>({components:{FormRenderer:n,PhSmiley:p,PhPaperPlaneTilt:l},setup:()=>{const a=[{type:"text",item:"name",title:"Name",default:"John Doe"},{type:"text",item:"email",title:"Email"},{type:"checkbox",item:"marketing_mail",title:"Marketing Mail"}],m=s({});return{args:i,options:a,data:m}},template:'<FormRenderer :options="options" v-model="data"/>'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
