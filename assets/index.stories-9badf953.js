import{l as r}from"./vue.esm-bundler-bdd4c61f.js";import{_ as s}from"./index-78167d50.js";const u={title:"Ui/TabsSwitch",component:s,argTypes:{rounded:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}}}},i=a=>({template:'<TabsSwitch  v-bind="args" v-model="value"></TabsSwitch>',components:{TabsSwitch:s},setup(){const n=r("item_1");return{args:a,value:n}}}),e=i.bind();e.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const m=a=>({template:`<TabsSwitch v-bind="args" v-model="value">
  <template v-slot="data">
  <div @click="data.select" class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </TabsSwitch>`,components:{TabsSwitch:s},setup(){const n=r("item_1");return{args:a,value:n}}}),t=m.bind();t.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};var l;e.parameters={...e.parameters,storySource:{source:`args => ({
  template: '<TabsSwitch  v-bind="args" v-model="value"></TabsSwitch>',
  components: {
    TabsSwitch
  },
  setup() {
    const value = ref('item_1');
    return {
      args,
      value
    };
  }
})`,...(l=e.parameters)==null?void 0:l.storySource}};var o;t.parameters={...t.parameters,storySource:{source:`args => ({
  template: \`<TabsSwitch v-bind="args" v-model="value">
  <template v-slot="data">
  <div @click="data.select" class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </TabsSwitch>\`,
  components: {
    TabsSwitch
  },
  setup() {
    const value = ref('item_1');
    return {
      args,
      value
    };
  }
})`,...(o=t.parameters)==null?void 0:o.storySource}};const v=["Default","Slotted"];export{e as Default,t as Slotted,v as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories-9badf953.js.map
