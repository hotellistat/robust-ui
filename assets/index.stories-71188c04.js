import{p as u}from"./vue.esm-bundler-88d2a0e4.js";import{b as t}from"./index-11c1ee58.js";import{_ as n}from"./index-8c1cc074.js";import"./index-a68961a4.js";import"./index-e9adc478.js";import"./index-2a907a46.js";import"./index-3ae24b82.js";import"./index-94313148.js";import"./index-a5b6866f.js";import"./index-ff8a4914.js";import"./index-aeba010d.js";import"./index-d38cf034.js";import"./index-36cdf539.js";import"./index-8d87f78a.js";import"./index-5f346414.js";import"./index-3fbb08d2.js";import"./index-eff87a84.js";import"./index-e3cf39d0.js";import"./index-9a388757.js";import"./index-ba853e4a.js";import"./index-9224fe00.js";import"./index-8258981d.js";import"./index-72d845a5.js";import"./index-8131d29f.js";import"./index-950c3e2d.js";import"./PhCaretRight.vue-b4d609ca.js";import"./index-a3831003.js";import"./PhCheck.vue-32f889b2.js";import"./PhWarningCircle.vue-94c9a257.js";const me={title:"Ui/Modal",component:t,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}},q=e=>({template:`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">
  <template #title>
   Title
  </template>
  <template #header>
    <div class="p-4">header</div>
  </template>
   <div class="w-32 h-[50vh] bg-gray-300"></div>
  <template #footer>
   <div class="p-4">footer</div>
  </template>

    </Modal>`,components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),a=q.bind(),o=u(!0);a.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const D=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),r=D.bind();r.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const w=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),s=w.bind();s.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const E=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal opened="open1" v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),l=E.bind();l.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const V=e=>({template:`<RobustButton @click="open1 = true">modal open {{args.opened}}</RobustButton>
    <Modal v-model:opened="open1" @close="open2 = true">test 1</Modal>
    <Modal v-model:opened="open2" @close="open1 = true">test 2</Modal>
    `,components:{Modal:t,RobustButton:n},setup(){const x=u(!1),L=u(!1);return{args:e,open1:x,open2:L}}}),p=V.bind();p.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const $=e=>({template:`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton>
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
   <div class="w-32 h-[50vh] bg-gray-300"></div>
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
})`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var h,k,O;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,_,U;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(U=(_=d.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const ge=["Default","SlideRight","SlideLeft","Large","Sequential","Overlay"];export{a as Default,l as Large,d as Overlay,p as Sequential,s as SlideLeft,r as SlideRight,ge as __namedExportsOrder,me as default};
//# sourceMappingURL=index.stories-71188c04.js.map
