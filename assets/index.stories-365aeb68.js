import{_ as s}from"./index-d402c4ef.js";import"./vue.esm-bundler-840ab50e.js";import"./_plugin-vue_export-helper-c27b6911.js";const D={title:"Ui/ContentBox",component:s,argTypes:{title:{control:{type:"text"}}}},C=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:s},setup(){return{args:t}}}),r=C.bind(),b=t=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:s},setup(){return{args:t}}}),e=b.bind();e.args={title:"Input title"};const T=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:s},setup(){return{args:t}}}),n=T.bind();n.args={title:"Input title"};const f=t=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:s},setup(){return{args:t}}}),o=f.bind();o.args={title:"Input title"};var a,p,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  template: \`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>\`,
  components: {
    ContentBox
  },
  setup() {
    return {
      args
    };
  }
})`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  template: \`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>\`,
  components: {
    ContentBox
  },
  setup() {
    return {
      args
    };
  }
})`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  template: \`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>\`,
  components: {
    ContentBox
  },
  setup() {
    return {
      args
    };
  }
})`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,v,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  template: \`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>\`,
  components: {
    ContentBox
  },
  setup() {
    return {
      args
    };
  }
})`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const I=["Default","Title","TitleProp","Stripe"];export{r as Default,o as Stripe,e as Title,n as TitleProp,I as __namedExportsOrder,D as default};
//# sourceMappingURL=index.stories-365aeb68.js.map
