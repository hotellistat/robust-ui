import{_ as e}from"./index.87e4e1ae.js";import"./vue.esm-bundler.32ce71b1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const m={title:"Ui/ContentBox",component:e,argTypes:{title:{control:{type:"text"}}}},n=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),x=n.bind(),o=t=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),s=o.bind();s.args={title:"Input title"};const i=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),p=i.bind();p.args={title:"Input title"};const r=t=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),l=r.bind();l.args={title:"Input title"};const u=["Default","Title","TitleProp","Stripe"];export{x as Default,l as Stripe,s as Title,p as TitleProp,u as __namedExportsOrder,m as default};
//# sourceMappingURL=index.stories.846af86c.js.map
