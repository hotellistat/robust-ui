import{_ as n}from"./index-45343636.js";import"./vue.esm-bundler-b0d1999c.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={title:"Ui/ContentBox",component:n,argTypes:{title:{control:{type:"text"}}}},l=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:n},setup(){return{args:t}}}),s=l.bind(),m=t=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:n},setup(){return{args:t}}}),e=m.bind();e.args={title:"Input title"};const d=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:n},setup(){return{args:t}}}),o=d.bind();o.args={title:"Input title"};const u=t=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:n},setup(){return{args:t}}}),r=u.bind();r.args={title:"Input title"};var a;s.parameters={...s.parameters,storySource:{source:`args => ({
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
})`,...(a=s.parameters)==null?void 0:a.storySource}};var p;e.parameters={...e.parameters,storySource:{source:`args => ({
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
})`,...(p=e.parameters)==null?void 0:p.storySource}};var i;o.parameters={...o.parameters,storySource:{source:`args => ({
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
})`,...(i=o.parameters)==null?void 0:i.storySource}};var c;r.parameters={...r.parameters,storySource:{source:`args => ({
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
})`,...(c=r.parameters)==null?void 0:c.storySource}};const C=["Default","Title","TitleProp","Stripe"];export{s as Default,r as Stripe,e as Title,o as TitleProp,C as __namedExportsOrder,B as default};
//# sourceMappingURL=index.stories-fdffc86d.js.map
