import{c}from"./index-f8a39ad9.js";import{j as a}from"./vue.esm-bundler-520a4af3.js";import"./PhCaretRight.vue-03aa7ff1.js";import"./index-d4fd2a81.js";import"./index-696242a5.js";import"./index-85dbcc94.js";import"./PhCheck.vue-47cf9af8.js";import"./index-cf060d4c.js";import"./index-f15f7196.js";import"./index-8dbc6030.js";import"./index-7c3c2d7f.js";import"./index-3d2e9b31.js";import"./index-843876fe.js";import"./index-f8a43586.js";import"./index-0db6ea41.js";import"./index-abc78244.js";import"./PhWarningCircle.vue-f06053ef.js";import"./index-0ccbbf42.js";import"./PhWarning.vue-5d9bd4e2.js";import"./index-c94484ad.js";import"./index-cf5ea2dd.js";import"./index-0a70da5e.js";import"./index-35aa5603.js";import"./index-65dacbf3.js";import"./index-f29684f7.js";import"./index-90df7131.js";import"./index-1e1fdf08.js";import"./index-37d32579.js";const I={title:"Ui/DaterangePicker",component:c,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}},u=e=>({template:'<DaterangePicker v-bind="args"></DaterangePicker>',components:{DaterangePicker:c},setup(){return{args:e}}}),d=[new Date,new Date],n=a(d),p=a(d),t=a(),r=a(),o=u.bind({});o.args={activePreset:t,activeComparePreset:r,dateRange:n,"onUpdate:dateRange":e=>{n.value=e==null?void 0:e.date,e&&e.type.name==="preset"?t.value=e.type.value:t.value=void 0},compareDateRange:p,"onUpdate:compareDateRange":e=>{p.value=e==null?void 0:e.date,e&&e.type.name==="preset"?r.value=e.type.value:r.value=void 0},"onUpdate:relative":e=>{e&&e.name==="preset"?t.value=e.value:t.value=void 0},"onUpdate:compareRelative":e=>{e&&e.name==="preset"?r.value=e.value:r.value=void 0}};var i,m,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  template: '<DaterangePicker v-bind="args"></DaterangePicker>',
  components: {
    DaterangePicker
  },
  setup() {
    return {
      args
    };
  }
})`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories-4bc62886.js.map
