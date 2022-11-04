import{l as a}from"./vue.esm-bundler.33188a4f.js";import{_ as l}from"./index.3524925d.js";const c={title:"Ui/TabsSwitch",component:l,argTypes:{rounded:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}}}},o=t=>({template:'<TabsSwitch  v-bind="args" v-model="value"></TabsSwitch>',components:{TabsSwitch:l},setup(){const e=a("item_1");return{args:t,value:e}}}),i=o.bind();i.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const s=t=>({template:`<TabsSwitch v-bind="args" v-model="value">
  <template v-slot="data">
  <div @click="data.select" class="flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </TabsSwitch>`,components:{TabsSwitch:l},setup(){const e=a("item_1");return{args:t,value:e}}}),n=s.bind();n.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const d=["Default","Slotted"];export{i as Default,n as Slotted,d as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories.16aa07ac.js.map
