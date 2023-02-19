import{q as u}from"./vue.esm-bundler-41a4e227.js";import{b as t}from"./index-5638c2d0.js";import{_ as n}from"./index-d4dd5ed2.js";import"./index-2ffdbd4f.js";import"./index-6723635b.js";import"./index-a8f069ee.js";import"./index-9a7015f6.js";import"./index-0db63305.js";import"./index-ee8a0811.js";import"./index-9464f6c0.js";import"./index-194407f7.js";import"./index-fce9d380.js";import"./index-81d554aa.js";import"./index-1862fc14.js";import"./index-6806c05e.js";import"./index-71c7ac07.js";import"./index-03d576ab.js";import"./index-da133626.js";import"./index-24b4ea4c.js";import"./index-5c75c8cf.js";import"./index-c74bf357.js";import"./index-a37b1315.js";import"./index-9abffaa3.js";import"./index-4646bf29.js";import"./index-e5cdbdcc.js";import"./PhCaretRight.vue-3e8fe415.js";import"./index-ed803f13.js";import"./PhCheck.vue-79b5837e.js";import"./PhWarningCircle.vue-a2bb71c6.js";const me={title:"Ui/Modal",component:t,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},q=e=>({template:`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">
  <template #title>
   Title
  </template>
  <template #header>
    <div class="p-4">header</div>
  </template>
   <div class="w-32 h-[1000px] bg-gray-300"></div>
  <template #footer>
   <div class="p-4">footer</div>
  </template>

    </Modal>`,components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),a=q.bind(),o=u(!0);a.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const D=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),r=D.bind();r.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const w=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),s=w.bind();s.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const E=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal opened="open1" v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),l=E.bind();l.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const V=e=>({template:`<RobustButton @click="open1 = true">modal open {{args.opened}}</RobustButton>
    <Modal v-model:opened="open1" @close="open2 = true">test 1</Modal>
    <Modal v-model:opened="open2" @close="open1 = true">test 2</Modal>
    `,components:{Modal:t,RobustButton:n},setup(){const U=u(!1),L=u(!1);return{args:e,open1:U,open2:L}}}),p=V.bind();p.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const $=e=>({template:`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton>
  <Modal v-bind="args">
  <RobustButton @click="args.overlayOpened.value = true">modal open {{args.overlayOpened}}</RobustButton>
  </Modal>
  <Modal :opened="args.overlayOpened">
  overlay
  </Modal>`,components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),d=$.bind(),j=u(!1);d.args={title:"Modal title",opened:o,overlayOpened:j,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  template: \`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">
  <template #title>
   Title
  </template>
  <template #header>
    <div class="p-4">header</div>
  </template>
   <div class="w-32 h-[1000px] bg-gray-300"></div>
  <template #footer>
   <div class="p-4">footer</div>
  </template>

    </Modal>\`,
  components: {
    Modal,
    RobustButton
  },
  setup() {
    return {
      args
    };
  }
})`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,b,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',
  components: {
    Modal,
    RobustButton
  },
  setup() {
    return {
      args
    };
  }
})`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var M,R,B;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',
  components: {
    Modal,
    RobustButton
  },
  setup() {
    return {
      args
    };
  }
})`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var f,y,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal opened="open1" v-bind="args">test</Modal>',
  components: {
    Modal,
    RobustButton
  },
  setup() {
    return {
      args
    };
  }
})`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,h,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  template: \`<RobustButton @click="open1 = true">modal open {{args.opened}}</RobustButton>
    <Modal v-model:opened="open1" @close="open2 = true">test 1</Modal>
    <Modal v-model:opened="open2" @close="open1 = true">test 2</Modal>
    \`,
  components: {
    Modal,
    RobustButton
  },
  setup() {
    const open1 = ref(false);
    const open2 = ref(false);
    return {
      args,
      open1,
      open2
    };
  }
})`,...(O=(h=p.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,x,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  template: \`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton>
  <Modal v-bind="args">
  <RobustButton @click="args.overlayOpened.value = true">modal open {{args.overlayOpened}}</RobustButton>
  </Modal>
  <Modal :opened="args.overlayOpened">
  overlay
  </Modal>\`,
  components: {
    Modal,
    RobustButton
  },
  setup() {
    return {
      args
    };
  }
})`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const ge=["Default","SlideRight","SlideLeft","Large","Sequential","Overlay"];export{a as Default,l as Large,d as Overlay,p as Sequential,s as SlideLeft,r as SlideRight,ge as __namedExportsOrder,me as default};
//# sourceMappingURL=index.stories-79848197.js.map
