import{_ as r}from"./index-4ef99693.js";import{j as l}from"./vue.esm-bundler-7f60e394.js";const c={title:"Ui/RangeSlider",component:r,argTypes:{min:{control:{type:"number",default:0}},max:{control:{type:"number",default:100}},step:{control:{type:"number",default:10}},snapToSteps:{control:{type:"boolean",default:!1}}}},m=s=>({template:'<RangeSlider v-bind="args" v-model="value" class="w-64" />',components:{RangeSlider:r},setup(){const o=l([-500,500]);return{args:s,value:o}}}),e=m.bind();e.args={min:0,max:5e3,step:100};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories-2df80759.js.map