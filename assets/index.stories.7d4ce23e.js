import{y as l}from"./iframe.f4e7a11c.js";import{_ as a}from"./index.24f55b10.js";const d={title:"Ui/Tabs",component:a,argTypes:{rounded:{control:{type:"boolean"}}}},o=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:a},setup(){const t=l("item_1");return{args:e,value:t}}}),s=o.bind();s.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const i=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:a},setup(){const t=l("item_1");return{args:e,value:t}}}),m=i.bind();m.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const u=["Default","Slotted"];export{s as Default,m as Slotted,u as __namedExportsOrder,d as default};
//# sourceMappingURL=index.stories.7d4ce23e.js.map
