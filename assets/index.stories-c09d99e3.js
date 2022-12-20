import{l as o}from"./vue.esm-bundler-bdd4c61f.js";import{_ as s}from"./index-dc45a1e9.js";const v={title:"Ui/Tabs",component:s,argTypes:{rounded:{control:{type:"boolean"}}}},m=a=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:s},setup(){const n=o("item_1");return{args:a,value:n}}}),e=m.bind();e.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const i=a=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:s},setup(){const n=o("item_1");return{args:a,value:n}}}),t=i.bind();t.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};var l;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: '<Tabs v-bind="args" v-model="value"></Tabs>',
  components: {
    Tabs
  },
  setup() {
    const value = ref('item_1');
    return {
      args,
      value
    };
  }
})`,...(l=e.parameters)==null?void 0:l.storySource}};var r;t.parameters={...t.parameters,storySource:{source:`args => ({
  template: \`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>\`,
  components: {
    Tabs
  },
  setup() {
    const value = ref('item_1');
    return {
      args,
      value
    };
  }
})`,...(r=t.parameters)==null?void 0:r.storySource}};const p=["Default","Slotted"];export{e as Default,t as Slotted,p as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-c09d99e3.js.map
