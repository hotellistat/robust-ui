import{j as c}from"./vue.esm-bundler-9cbc270d.js";import{_ as n}from"./index-29d8f35e.js";const g={title:"Ui/Tabs",component:n,argTypes:{rounded:{control:{type:"boolean"}}}},u=a=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:n},setup(){const s=c("item_1");return{args:a,value:s}}}),e=u.bind();e.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const v=a=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:n},setup(){const s=c("item_1");return{args:a,value:s}}}),t=v.bind();t.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};var l,r,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["Default","Slotted"];export{e as Default,t as Slotted,f as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-7cb401ac.js.map
