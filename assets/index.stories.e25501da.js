import{_ as t}from"./index.e8edd37a.js";import"./vue.esm-bundler.ed6ce848.js";import"./index.187d1ec2.js";import"./vue-phosphor-icons.ba647a17.js";import"./index.75609ed9.js";const d={title:"Ui/WidgetWrapper",component:t,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},draggable:{control:{type:"boolean"}}}},p=e=>({template:`<WidgetWrapper v-bind="args">
    <template #title>Widget wrapper</template>
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:t},setup(){return{args:e}}}),r=p.bind({});r.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const s=["Default"];export{r as Default,s as __namedExportsOrder,d as default};
//# sourceMappingURL=index.stories.e25501da.js.map
