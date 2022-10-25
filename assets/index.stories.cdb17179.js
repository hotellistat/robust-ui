import{l}from"./vue.esm-bundler.33188a4f.js";import{_ as a}from"./index.f9c4f2ab.js";const c={title:"Ui/TabsSwitch",component:a,argTypes:{rounded:{control:{type:"boolean"}}}},i=t=>({template:'<TabsSwitch v-bind="args" v-model="value"></TabsSwitch>',components:{TabsSwitch:a},setup(){const e=l("item_1");return{args:t,value:e}}}),o=i.bind();o.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const s=t=>({template:`<TabsSwitch v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </TabsSwitch>`,components:{TabsSwitch:a},setup(){const e=l("item_1");return{args:t,value:e}}}),m=s.bind();m.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const d=["Default","Slotted"];export{o as Default,m as Slotted,d as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories.cdb17179.js.map
