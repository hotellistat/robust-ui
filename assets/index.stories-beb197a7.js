import{a as d}from"./vue.esm-bundler-c29c03ae.js";import{_ as s}from"./index-946d8714.js";const g={title:"Ui/TabsSwitch",component:s,argTypes:{rounded:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}}}},u=a=>({template:'<TabsSwitch  v-bind="args" v-model="value"></TabsSwitch>',components:{TabsSwitch:s},setup(){const n=d("item_1");return{args:a,value:n}}}),e=u.bind();e.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const v=a=>({template:`<TabsSwitch v-bind="args" v-model="value">
  <template v-slot="data">
  <div @click="data.select" class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </TabsSwitch>`,components:{TabsSwitch:s},setup(){const n=d("item_1");return{args:a,value:n}}}),t=v.bind();t.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};var l,o,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["Default","Slotted"];export{e as Default,t as Slotted,S as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-beb197a7.js.map
