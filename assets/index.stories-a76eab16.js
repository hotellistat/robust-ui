import{_ as l}from"./index-b4593544.js";import{l as m}from"./vue.esm-bundler-bdd4c61f.js";import"./index-67d924c6.js";import"./index-65b9075a.js";import"./vue-phosphor-icons-f4f4d043.js";const f={title:"Ui/Calendar",component:l,argTypes:{}},d=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:l},setup(){return{args:e}}}),r=m(new Date),a=d.bind({});a.args={modelValue:r,"onUpdate:modelValue":e=>{r.value=e,console.log(e)}};const p=[new Date,new Date],t=m(p),n=d.bind({});n.args={modelValue:t,"onUpdate:modelValue":e=>{t.value=e,console.log(e)}};var o;a.parameters={...a.parameters,storySource:{source:`args => ({
  template: '<Calendar v-bind="args"></Calendar>',
  components: {
    Calendar
  },
  setup() {
    return {
      args
    };
  }
})`,...(o=a.parameters)==null?void 0:o.storySource}};var s;n.parameters={...n.parameters,storySource:{source:`args => ({
  template: '<Calendar v-bind="args"></Calendar>',
  components: {
    Calendar
  },
  setup() {
    return {
      args
    };
  }
})`,...(s=n.parameters)==null?void 0:s.storySource}};const D=["Default","Range"];export{a as Default,n as Range,D as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories-a76eab16.js.map
