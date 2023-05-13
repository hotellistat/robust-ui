import{_ as l}from"./index-b4e173fc.js";import{j as r}from"./vue.esm-bundler-f1fc8c70.js";import"./index-521bda7b.js";import"./index-a18b622e.js";import"./index-a45e3703.js";import"./PhCaretDown.vue-a7ca04cb.js";import"./PhCheck.vue-2a6e97ce.js";const x={title:"Ui/Select",component:l,argTypes:{title:{control:{type:"text"}},class:{control:{type:"text"}},boxClass:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},fixedHeight:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},searchable:{control:{type:"boolean"}}},args:{title:"Date range picker",class:"w-64",boxClass:"",fixedHeight:!0,readonly:!1,condensed:!1,disabled:!1,searchable:!1}},d=r([{title:"Item undefined",value:void 0},{title:"Item null",value:null},{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]),e={render:o=>({components:{Select:l},setup:()=>{const n=r(void 0);return{args:o,value:n,options:d}},template:`
      <Select v-bind="args" :options="options" v-model="value" />
      `})},t={render:o=>({components:{Select:l},setup:()=>{const n=r([]);return{args:o,value:n,options:d}},template:`
      <Select v-bind="args" :options="options" v-model="value" />
      `})};var a,s,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup: () => {
      const value = ref(undefined);
      return {
        args,
        value,
        options
      };
    },
    template: \`
      <Select v-bind="args" :options="options" v-model="value" />
      \`
  })
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup: () => {
      const value = ref([]);
      return {
        args,
        value,
        options
      };
    },
    template: \`
      <Select v-bind="args" :options="options" v-model="value" />
      \`
  })
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["Default","MultiSelect"];export{e as Default,t as MultiSelect,h as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-188d96bd.js.map