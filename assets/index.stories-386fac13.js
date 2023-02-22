import{j as u}from"./vue.esm-bundler-9cbc270d.js";import{d as t}from"./index-1738952e.js";import{_ as n}from"./index-27b9bd6d.js";import"./index-08e97f00.js";import"./index-6ce7d9f2.js";import"./index-262e3e2c.js";import"./index-72d98b26.js";import"./index-a43f9690.js";import"./index-178a1b98.js";import"./index-4c56d6e1.js";import"./index-9a1ea72a.js";import"./index-7e352881.js";import"./index-e870b89a.js";import"./index-a1a5feae.js";import"./index-055ac414.js";import"./index-9b7047e1.js";import"./index-b79cea11.js";import"./index-18a854ec.js";import"./index-1469d29d.js";import"./index-29d8f35e.js";import"./index-b32284b8.js";import"./index-8195f034.js";import"./index-15b9d225.js";import"./PhCaretRight.vue-4de73c41.js";import"./index-419285db.js";import"./PhCheck.vue-d5ba83ff.js";import"./PhWarningCircle.vue-9ae5b03b.js";const ie={title:"Ui/Modal",component:t,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},opened:{defaultValue:!0,default:!0,control:{type:"boolean",defaultValue:!0,default:!0}},condensed:{control:{type:"boolean",defaultValue:"true"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}},defaultValue:{opened:!0}},V=e=>({template:`<Modal v-bind="args">
  <template #title>
   Title
  </template>
  <template #header>
    <div class="p-4">header</div>
  </template>
   <div class="w-full h-[500px] bg-gray-300"></div>
  <template #footer>
   <div class="p-4">footer</div>
  </template>

    </Modal>`,components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),a=V.bind(),o=u(!0);a.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const q=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),r=q.bind();r.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const D=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),s=D.bind();s.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const w=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal opened="open1" v-bind="args">test</Modal>',components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),l=w.bind();l.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const j=e=>({template:`<RobustButton @click="open1 = true">modal open {{args.opened}}</RobustButton>
    <Modal v-model:opened="open1" @close="open2 = true">test 1</Modal>
    <Modal v-model:opened="open2" @close="open1 = true">test 2</Modal>
    `,components:{Modal:t,RobustButton:n},setup(){const U=u(!1),L=u(!1);return{args:e,open1:U,open2:L}}}),p=j.bind();p.args={title:"Modal title",opened:o,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};const E=e=>({template:`<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton>
  <Modal v-bind="args">
  <RobustButton @click="args.overlayOpened.value = true">modal open {{args.overlayOpened}}</RobustButton>
  </Modal>
  <Modal :opened="args.overlayOpened">
  overlay
  </Modal>`,components:{Modal:t,RobustButton:n},setup(){return{args:e}}}),d=E.bind(),$=u(!1);d.args={title:"Modal title",opened:o,overlayOpened:$,"onUpdate:opened":e=>{console.log("opeone"),o.value=e}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  template: \`<Modal v-bind="args">
  <template #title>
   Title
  </template>
  <template #header>
    <div class="p-4">header</div>
  </template>
   <div class="w-full h-[500px] bg-gray-300"></div>
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
})`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,_,x;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(x=(_=d.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const ce=["Default","SlideRight","SlideLeft","Large","Sequential","Overlay"];export{a as Default,l as Large,d as Overlay,p as Sequential,s as SlideLeft,r as SlideRight,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=index.stories-386fac13.js.map
