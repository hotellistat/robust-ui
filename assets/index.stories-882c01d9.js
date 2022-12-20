import{_ as n}from"./index-825f9205.js";import{l as s}from"./vue.esm-bundler-bdd4c61f.js";const p={title:"Ui/RangeSlider",component:n,argTypes:{min:{control:{type:"number",default:0}},max:{control:{type:"number",default:100}},step:{control:{type:"number",default:10}},snapToSteps:{control:{type:"boolean",default:!1}}}},o=a=>({template:'<RangeSlider v-bind="args" v-model="value" class="w-64" />',components:{RangeSlider:n},setup(){const r=s([-500,500]);return{args:a,value:r}}}),e=o.bind();e.args={min:0,max:5e3,step:100};var t;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: \`<RangeSlider v-bind="args" v-model="value" class="w-64" />\`,
  components: {
    RangeSlider
  },
  setup() {
    const value = ref([-500, 500]);
    return {
      args,
      value
    };
  }
})`,...(t=e.parameters)==null?void 0:t.storySource}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
//# sourceMappingURL=index.stories-882c01d9.js.map
