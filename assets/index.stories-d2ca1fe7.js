import{_ as o}from"./index-3d59b8b4.js";import{l as n}from"./vue.esm-bundler-bdd4c61f.js";import"./index-76d4f674.js";import"./index-afb26f7a.js";import"./index-4a7170fd.js";import"./index-65b9075a.js";import"./vue-phosphor-icons-f4f4d043.js";import"./index-39205538.js";const f={title:"Ui/DatePicker",component:o,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},s=t=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args" title="Date picker"></DatePicker>',components:{DatePicker:o},setup(){return{args:t}}}),p=new Date,r=n(p),e=s.bind({});e.args={modelValue:r,"onUpdate:modelValue":t=>{r.value=t}};var a;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: '<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args" title="Date picker"></DatePicker>',
  components: {
    DatePicker
  },
  setup() {
    return {
      args
    };
  }
})`,...(a=e.parameters)==null?void 0:a.storySource}};const P=["Default"];export{e as Default,P as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories-d2ca1fe7.js.map
