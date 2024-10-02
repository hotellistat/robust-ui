import{_ as l}from"./index-d7a657a6.js";import{r as a}from"./vue.esm-bundler-5fdd8ab6.js";import"./index-b2862db1.js";import"./index-54d4f55f.js";import"./index-aad9d61c.js";import"./PhCaretDown.vue-9c723a04.js";import"./PhCheck.vue-f0a19b25.js";import"./_commonjsHelpers-de833af9.js";const x={title:"Ui/Select",component:l,argTypes:{title:{control:{type:"text"}},class:{control:{type:"text"}},boxClass:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}},fixedHeight:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},searchable:{control:{type:"boolean"}}},args:{title:"Date range picker",boxClass:"",fixedHeight:!0,readonly:!1,condensed:!1,disabled:!1,searchable:!1}},m=a([{title:"Item undefined",value:void 0},{title:"Item null",value:null},{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3 very long title that might not fit into the select box",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0},{title:"Object value",value:{name:"test",asdf:98,value:!0,yeahhhh:null}},{title:"Different object value",value:{name:"test",asdf:98,value:!0,yeahhhh:void 0}}]),e={render:n=>({components:{Select:l},setup:()=>{const o=a(void 0);return{args:n,value:o,options:m}},template:`
      <Select v-bind="args" :options="options" v-model="value" >
        <template #prefix>
          test
        </template>
      </Select>
      `})},t={render:n=>({components:{Select:l},setup:()=>{const o=a([]);return{args:n,value:o,options:m}},template:`
      <Select v-bind="args" :options="options" v-model="value" />
      `})};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const I=["Default","MultiSelect"];export{e as Default,t as MultiSelect,I as __namedExportsOrder,x as default};
