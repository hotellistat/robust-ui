import{_ as l}from"./index-d12e0f03.js";import{l as m}from"./vue.esm-bundler-b0d1999c.js";import"./index-16f4c063.js";import"./index-b3c475ea.js";import"./PhWarningCircle.vue-c5295325.js";import"./PhCaretRight.vue-72da0a51.js";const D={title:"Ui/Calendar",component:l,argTypes:{}},d=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:l},setup(){return{args:e}}}),r=m(new Date),a=d.bind({});a.args={modelValue:r,"onUpdate:modelValue":e=>{r.value=e,console.log(e)}};const p=[new Date,new Date],t=m(p),n=d.bind({});n.args={modelValue:t,"onUpdate:modelValue":e=>{t.value=e,console.log(e)}};var o;a.parameters={...a.parameters,storySource:{source:`args => ({
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
})`,...(s=n.parameters)==null?void 0:s.storySource}};const V=["Default","Range"];export{a as Default,n as Range,V as __namedExportsOrder,D as default};
//# sourceMappingURL=index.stories-9fb56f69.js.map
