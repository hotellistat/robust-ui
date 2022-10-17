import{_ as e}from"./index.349727a4.js";import"./iframe.4adac04e.js";import"./index.47197eca.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={title:"Ui/ContentBox",component:e,argTypes:{title:{control:{type:"text"}}}},n=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),u=n.bind(),o=t=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),i=o.bind();i.args={title:"Input title"};const s=t=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),p=s.bind();p.args={title:"Input title"};const r=t=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:e},setup(){return{args:t}}}),l=r.bind();l.args={title:"Input title"};const v=["Default","Title","TitleProp","Stripe"];export{u as Default,l as Stripe,i as Title,p as TitleProp,v as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories.877eec81.js.map
