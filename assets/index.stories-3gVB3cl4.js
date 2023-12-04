import{_ as l}from"./index-v_Zhq6xj.js";import{r}from"./vue.esm-bundler-ZZc3duQ9.js";import"./index-cD5pOX5N.js";import"./index-fjIZKoVZ.js";import"./index-5AA-1Csv.js";import"./PhCaretDown.vue-zsXIbriY.js";import"./PhCheck.vue-SjdxJUh_.js";const x={title:"Ui/Select",component:l,argTypes:{title:{control:{type:"text"}},class:{control:{type:"text"}},boxClass:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},fixedHeight:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},searchable:{control:{type:"boolean"}}},args:{title:"Date range picker",boxClass:"",fixedHeight:!0,readonly:!1,condensed:!1,disabled:!1,searchable:!1}},u=r([{title:"Item undefined",value:void 0},{title:"Item null",value:null},{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]),e={render:n=>({components:{Select:l},setup:()=>{const o=r(void 0);return{args:n,value:o,options:u}},template:`
      <Select v-bind="args" :options="options" v-model="value" >
        <template #prefix>
          test
        </template>
      </Select>
      `})},t={render:n=>({components:{Select:l},setup:()=>{const o=r([]);return{args:n,value:o,options:u}},template:`
      <Select v-bind="args" :options="options" v-model="value" />
      `})};var a,s,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <Select v-bind="args" :options="options" v-model="value" >
        <template #prefix>
          test
        </template>
      </Select>
      \`
  })
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const h=["Default","MultiSelect"];export{e as Default,t as MultiSelect,h as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-3gVB3cl4.js.map
