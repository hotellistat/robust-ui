var fa=Object.defineProperty,ga=Object.defineProperties;var ya=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;var Tt=(e,t,o)=>t in e?fa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,me=(e,t)=>{for(var o in t||(t={}))Vt.call(t,o)&&Tt(e,o,t[o]);if(ze)for(var o of ze(t))It.call(t,o)&&Tt(e,o,t[o]);return e},Se=(e,t)=>ga(e,ya(t));var Bt=(e,t)=>{var o={};for(var n in e)Vt.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&ze)for(var n of ze(e))t.indexOf(n)<0&&It.call(e,n)&&(o[n]=e[n]);return o};import{d as E,c as w,u as ct,a as d,b as c,o as u,r as f,t as N,e as L,w as K,n as D,f as qe,g as v,h as O,i as h,P as ba,j as va,k as R,m as de,l as nn,p as ee,v as on,q as x,s as he,x as He,y as We,z as Pt,A as Ue,B as Rt,C as ha,D as _a,E as an,F as rn,G as ka,H as fe,I as oe,J as X,K as Ge,L as ot,M as at,N as wa,O as Da,Q as Ca,R as xa,S as Sa,T as $a,U as Ta,V as Va,W as Ia,X as ue,Y as P,Z as A,_ as Ba,$ as pt,a0 as Ye,a1 as Z,a2 as ge,a3 as sn,a4 as Ee,a5 as Ie,a6 as ke,a7 as mt,a8 as rt,a9 as Pa,aa as ye,ab as be,ac as ie,ad as Me,ae as Te,af as Et,ag as Ra,ah as ln,ai as Ke,aj as Ea,ak as st,al as Ma,am as ja,an as Ve,ao as La,ap as Oa,aq as ft,ar as gt,as as yt,at as Fa,au as Aa,av as Na,aw as je,ax as za,ay as Ha,az as Wa,aA as Ua,aB as Ga,aC as qa,aD as Mt,aE as jt,aF as Ya,aG as Ka,aH as Ja,aI as Xa,aJ as Qa,aK as Za,aL as er,aM as tr,aN as nr,aO as or,aP as ar,aQ as rr,aR as sr,aS as lr,aT as ir,aU as ur}from"./vendor.22474b5b.js";const dr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};dr();const cr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var pr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:cr});var S=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const bt=E({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=w(()=>.666*(e.size-2*e.safeMargin)),o=w(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:o}}}),Lt=()=>{ct(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},Ot=bt.setup;bt.setup=Ot?(e,t)=>(Lt(),Ot(e,t)):Lt;const un=bt,mr=["width","height","viewBox"],fr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function gr(e,t,o,n,r,s){return u(),d("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,fr)],8,mr)}var Je=S(un,[["render",gr],["__scopeId","data-v-2e051f42"]]);un.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var yr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const dn=E({name:"RobustButton",components:{RobustSpinner:Je},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=f(!1),{loading:o,variant:n}=N(e);return{variantStyles:w(()=>yr[n.value]),loading:o,displaySpinner:t}}}),br={key:0,class:"mr-2"},vr={class:"whitespace-no-wrap truncate"},hr={key:1,class:"ml-2"};function _r(e,t,o,n,r,s){const a=v("RobustSpinner");return u(),L(qe(e.tag),{disabled:e.disabled,class:D(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:K(()=>[c("div",{class:D(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(u(),d("div",br,[O(e.$slots,"prefix",{tag:"div"})])):h("",!0),c("div",vr,[O(e.$slots,"default")]),e.$slots.suffix?(u(),d("div",hr,[O(e.$slots,"suffix",{tag:"div"})])):h("",!0)],2),e.loading?(u(),L(a,{key:0,size:20,stroke:2,class:"spinner absolute"})):h("",!0)]),_:3},8,["disabled","class"])}var ve=S(dn,[["render",_r]]);dn.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var kr={parameters:{storySource:{source:`import Button from './Button.vue'
import { PhSmiley, PhPaperPlaneTilt } from "@dnlsndr/vue-phosphor-icons"
export default {
  title: 'Ui/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'warn', 'muted', 'transparent'],
      },
    },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  components: { Button },
  template: '<Button v-bind="args">Click here</Button>',
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind({})

const PrefixTemplate = (args) => ({
  template: \`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>\`,
  components: { Button, PhSmiley },
  setup() {
    return { args }
  },
})

export const Prefix = PrefixTemplate.bind()

const SuffixTemplate = (args) => ({
  template: \`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>\`,
  components: { Button, PhPaperPlaneTilt },
  setup() {
    return { args }
  },
})

export const Suffix = SuffixTemplate.bind()

const LoadingTemplate = (args) => ({
  template: \`<Button loading v-bind="args">Click here</Button>\`,
  components: { Button },
  setup() {
    return { args }
  },
})

export const Loading = LoadingTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:ve,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const wr=e=>({components:{Button:ve},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Dr=wr.bind({}),Cr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:ve,PhSmiley:ba},setup(){return{args:e}}}),xr=Cr.bind(),Sr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:ve,PhPaperPlaneTilt:va},setup(){return{args:e}}}),$r=Sr.bind(),Tr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:ve},setup(){return{args:e}}}),Vr=Tr.bind(),Ir=["Default","Prefix","Suffix","Loading"];var Br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kr,Default:Dr,Prefix:xr,Suffix:$r,Loading:Vr,__namedExportsOrder:Ir});let Pr=0;const cn=E({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},boxClass:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const o=(++Pr).toString(),n=/^on[^a-z]/,r=m=>n.test(m);let s=w(()=>Object.fromEntries(Object.entries(t).filter(m=>r(m[0]))));const a=f();function l(){}function i(){}return{cuid:o,wrapperRef:a,blurred:l,focused:i,listeners:s}}}),Rr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Er={key:1,class:"block pt-1"},Mr={key:0,class:"select-none text-xs text-gray-400"},jr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Lr(e,t,o,n,r,s){return u(),d("fieldset",{class:D([e.$props.class])},[e.title?(u(),d("legend",Rr,R(e.title),1)):h("",!0),c("div",de(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.boxClass,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[O(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(u(),d("label",Er,[e.hint!==void 0?(u(),d("div",Mr,R(e.hint),1)):h("",!0),e.error!==void 0?(u(),d("div",jr,R(e.error),1)):h("",!0)])):h("",!0)],2)}var De=S(cn,[["render",Lr]]);cn.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"boxClass",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const pn=E({name:"RobustInput",inheritAttrs:!1,components:{RobustInputWrapper:De,PhWarningCircle:nn},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const n=f(),r=o,s=w({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function a(){var i;(i=n.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:s,inputAttrs:r,props:e,inputRef:n,focus:a,clear:l}}}),Or=["id","disabled","readonly"],Fr={key:1,class:"text-red-400"};function Ar(e,t,o,n,r,s){const a=v("PhWarningCircle"),l=v("RobustInputWrapper");return u(),L(l,{title:e.title,hint:e.hint,error:e.error,class:D(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:K(i=>[e.$slots.prefix?(u(),d("div",{key:0,class:D(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[O(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),ee(c("input",de({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=m=>e.inputFieldValue=m),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Or),[[on,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),d("div",{key:1,class:D(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),d("div",Fr,[x(a,{size:"20",class:"block"})])):O(e.$slots,"suffix",{key:0,tag:"div"})],2)):h("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var vt=S(pn,[["render",Ar]]);pn.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Nr=[{title:"today",preset:()=>{const e=he(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,he(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=he(He(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,he(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[We(new Date),he(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[We(new Date),Pt(new Date)]},{title:"this_year",preset:()=>[Ue(new Date),Rt(new Date)]},{title:"this_year_so_far",preset:()=>[Ue(new Date),he(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=ha(He(new Date,7));return[e,_a(new Date(e))]}},{title:"last_month",preset:()=>{let e=We(He(We(new Date),1));return[e,Pt(e)]}},{title:"last_year",preset:()=>{const e=Ue(He(Ue(new Date),1));return[e,Rt(new Date(e))]}}],zr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const mn=E({name:"RobustCalendar",components:{RobustInput:vt,PhCaretLeft:an,PhCaretRight:rn},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:o,past:n,today:r,modelValue:s}=N(e),a=f(),l=f(),i=f(),m=f(),y=f(),p=Array.isArray(s.value)?f(new Date):f(new Date(s.value)),g=f(),b=f({}),C=Nr,_=w(()=>zr[e.variant]),k=w(()=>{const I=new Date(p.value);return ka(I)}),z=w(()=>{try{return fe(p.value,"MMM")}catch{return}}),B=w(()=>{try{return fe(p.value,"yyyy")}catch{return}}),q=w(()=>{const I=new Date(p.value);I.setDate(1);const T=I.getDay();return(T===0?7:T)-1}),te=w(()=>new Date(p.value).getMonth()),Y=w(()=>new Date(p.value).getFullYear()),U=()=>{if(console.log("applying time"),a.value!=""&&!Ge(new Date(a.value))&&(i.value="Please enter a valid date."),l.value!=""&&!Ge(new Date(l.value))&&(m.value="Please enter a valid date."),Ge(new Date(a.value))&&Ge(new Date(l.value))){i.value="",m.value="";const I=[new Date(a.value),new Date(l.value)];t("update:modelValue",I)}},G=(I,T)=>{const W=ne(I,T);return W<0?1:W>0?-1:0},ne=(I,T)=>{const W=Date.UTC(T.getFullYear(),T.getMonth(),T.getDate()),pe=Date.UTC(I.getFullYear(),I.getMonth(),I.getDate());return(W-pe)/864e5},ce=I=>{if(!Array.isArray(s.value)||s.value.length<2||!G(...s.value))return!1;const T=new Date;T.setDate(I),T.setMonth(p.value.getMonth()),T.setFullYear(p.value.getFullYear());const W=ot(s.value);return!G(T,W)},ae=I=>{if(!Array.isArray(s.value)||s.value.length<2||!G(...s.value))return!1;const T=new Date;T.setDate(I),T.setMonth(p.value.getMonth()),T.setFullYear(p.value.getFullYear());const W=at(s.value);return!G(T,W)},M=I=>{if(!Array.isArray(s.value)||s.value.length<2)return!1;const T=new Date;T.setDate(I),T.setMonth(p.value.getMonth()),T.setFullYear(p.value.getFullYear());const W=ot(s.value),pe=at(s.value);return G(T,pe)===-1&&G(T,W)===1},J=I=>{const T=new Date;if(T.setDate(I),T.setMonth(p.value.getMonth()),T.setFullYear(p.value.getFullYear()),Array.isArray(s.value)){const W=s.value.map(pe=>new Date(pe));for(let pe=0;pe<W.length;pe++)if(!G(W[pe],T))return!0}else if(!G(new Date(g.value),T))return!0};function re(I){t("update:modelValue",I),p.value=I[1]}function se(){p.value=wa(p.value,1)}function Ce(){p.value=Da(p.value,1)}function j(I){p.value=Ca(p.value,I)}function H(){p.value=xa(p.value,1)}function V(){p.value=Sa(p.value,1)}function Ne(I){p.value=$a(p.value,I)}const xe=I=>{const T=new Date(p.value).setDate(I);return!(!r.value&&Ta(y.value,T)||!n.value&&Va(y.value,T)>0||!o.value&&Ia(T))},_e=I=>{if(!xe(I))return;const T=new Date;if(T.setDate(I),T.setMonth(p.value.getMonth()),T.setFullYear(p.value.getFullYear()),p.value=T,Array.isArray(s.value)){i.value="",m.value="";let W=[];s.value.length>=2?(W.push(new Date(p.value)),l.value=""):(W=s.value,W.push(new Date(p.value)),W.length>1&&(W=[he(ot(W),{hours:0,minutes:0,seconds:0}),he(at(W),{hours:23,minutes:59,seconds:59})],l.value=W[1].toLocaleDateString())),a.value=W[0].toLocaleDateString(),t("update:modelValue",W)}else g.value=new Date(p.value),t("update:modelValue",p.value)},$=()=>{p.value=new Date(new Date().setHours(12))};oe(s,I=>{const T=I[0]||void 0,W=I[1]||void 0;T?a.value=T.toLocaleDateString():a.value="",W?l.value=W.toLocaleDateString():l.value=""}),X(()=>{if(Array.isArray(s.value)){p.value=new Date(s.value[1]||new Date),g.value=p.value;const I=s.value[0]||void 0,T=s.value[1]||void 0;I?a.value=I.toLocaleDateString():a.value="",T?l.value=T.toLocaleDateString():l.value=""}else p.value=new Date(s.value||new Date),g.value=p.value});const Q=w(()=>{const I=[];for(let T=1900;T<=2100;T++)I.push(T);return I}),le=f(!1);function Re(){le.value=!0}function tt(){le.value=!1}const nt=f(!1);function pa(){nt.value=!0,ue(()=>{b.value[Y.value].scrollIntoView({block:"start",behavior:"auto"})})}function ma(){nt.value=!1}return{months:w(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:a,to:l,errorFrom:i,errorTo:m,showMonthSelectionActive:le,showYearSelectionActive:nt,now:y,cursor:p,selectedDate:g,showMonthSelection:Re,showYearSelection:pa,hideMonthSelection:tt,hideYearSelection:ma,daysInMonth:k,monthHeading:z,yearHeading:B,refYearEntry:b,setYear:j,setMonth:Ne,firstWeekday:q,activeMonth:te,activeYear:Y,compareDates:G,applyTime:U,dayDiff:ne,isFirst:ce,isLast:ae,isBetweenRange:M,isSelectedDay:J,addYear:se,subYear:Ce,addMonth:H,subMonth:V,dayAllowed:xe,daySelect:_e,reset:$,yearSelectionYears:Q,quickActions:C,setQuickAction:re,variantStyling:_}}}),Hr={class:"relative flex w-max select-none"},Wr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},Ur={class:"absolute inset-0 overflow-auto py-2"},Gr=["onClick"],qr={class:"p-4 dark:border-gray-600"},Yr={class:"mb-4 flex items-center text-center text-lg font-semibold"},Kr={class:"flex flex-1"},Jr={class:"relative w-max"},Xr={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},Qr=["onClick"],Zr={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},es=["data-year","onClick"],ts=Ba('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),ns=["disabled","onClick"],os={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},as=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),rs=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function ss(e,t,o,n,r,s){const a=v("PhCaretLeft"),l=v("PhCaretRight"),i=v("RobustInput");return u(),d("div",Hr,[Array.isArray(e.modelValue)?(u(),d("div",Wr,[c("div",Ur,[(u(!0),d(P,null,A(e.quickActions,m=>(u(),d("div",{key:m.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:y=>e.setQuickAction(m.preset())},R(m.title),9,Gr))),128))])])):h("",!0),c("section",qr,[c("div",Yr,[c("div",Kr,[c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},R(e.monthHeading),1),c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},R(e.yearHeading),1)]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...m)=>e.subMonth&&e.subMonth(...m))},[x(a,{type:"chevron-left",size:"14",weight:"bold"})]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...m)=>e.addMonth&&e.addMonth(...m))},[x(l,{type:"chevron-right",size:"14",weight:"bold"})])]),c("div",Jr,[e.showMonthSelectionActive?(u(),d("div",Xr,[(u(!0),d(P,null,A(e.months,(m,y)=>(u(),d("div",{key:y,class:D(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===y?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(y),e.hideMonthSelection()}},R(m.title),11,Qr))),128))])):h("",!0),e.showYearSelectionActive?(u(),d("div",Zr,[(u(!0),d(P,null,A(e.yearSelectionYears,m=>(u(),d("div",{ref_for:!0,ref:y=>e.refYearEntry[m]=y,key:m,class:D(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===m?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":m,onClick:()=>{e.setYear(m),e.hideYearSelection()}},R(m),11,es))),128))])):h("",!0),c("div",{class:D(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ts,(u(!0),d(P,null,A(e.firstWeekday,m=>(u(),d("div",{key:m+"_offset"}))),128)),(u(!0),d(P,null,A(e.daysInMonth,m=>(u(),d("div",{key:m+"_day",class:D(["relative",[e.isBetweenRange(m)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(m),onClick:y=>e.daySelect(m)},[e.isLast(m)||e.isFirst(m)?(u(),d("div",{key:0,class:D(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(m)?"right-0 w-1/2":e.isLast(m)?"left-0 w-1/2":""]])},null,2)):h("",!0),c("div",{class:D(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(m)||e.isLast(m)||e.isFirst(m)||e.isSelectedDay(m)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},R(m),3)],10,ns))),128))],2)])]),Array.isArray(e.modelValue)?(u(),d("div",os,[as,x(i,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=m=>e.from=m),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),rs,x(i,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=m=>e.to=m),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),O(e.$slots,"default")])):h("",!0)])}var Xe=S(mn,[["render",ss]]);mn.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var ls={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
import { ref } from 'vue'

export default {
  title: 'Ui/Calendar',
  component: Calendar,
  argTypes: {},
}

const Template = (args) => ({
  template: '<Calendar v-bind="args"></Calendar>',
  components: { Calendar },
  setup() {
    return { args }
  },
})

const modelValueDefault = ref(new Date())
export const Default = Template.bind({})
Default.args = {
  modelValue: modelValueDefault,
  'onUpdate:modelValue': (val) => {
    modelValueDefault.value = val
    console.log(val)
  },
}

const date = [new Date(), new Date()]
const modelValue = ref(date)

export const Range = Template.bind({})
Range.args = {
  modelValue: modelValue,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val
    console.log(val)
  },
}
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Xe,argTypes:{}};const fn=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Xe},setup(){return{args:e}}}),Ft=f(new Date),gn=fn.bind({});gn.args={modelValue:Ft,"onUpdate:modelValue":e=>{Ft.value=e,console.log(e)}};const is=[new Date,new Date],At=f(is),yn=fn.bind({});yn.args={modelValue:At,"onUpdate:modelValue":e=>{At.value=e,console.log(e)}};const us=["Default","Range"];var ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ls,Default:gn,Range:yn,__namedExportsOrder:us});const bn=E({components:{PhCheck:pt},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const n="_"+Math.random().toString(36).substr(2,9),r=w({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(s){let a=e.modelValue;Array.isArray(a)?s?a.push(e.value):a.splice(a.indexOf(e.value),1):s?a=e.value:a=e.disabledValue,t("update:modelValue",a),t("change",a)}});return{cuid:n,isChecked:r,attrs:o}}}),cs={class:"inline-block"},ps={class:"flex cursor-pointer items-start"},ms=["id"],fs={key:0,class:"w-full select-none pt-px leading-4"},gs={key:1,class:"w-full select-none pt-px leading-4"};function ys(e,t,o,n,r,s){const a=v("PhCheck");return u(),d("div",cs,[c("label",ps,[ee(c("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,ms),[[Ye,e.isChecked]]),c("div",{class:D(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[x(a,{class:D([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(u(),d("div",fs,R(e.title),1)):h("",!0),!e.title&&e.$slots.title?(u(),d("div",gs,[O(e.$slots,"title")])):h("",!0)])])}var Qe=S(bn,[["render",ys]]);bn.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var bs={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
import Checkbox from './Checkbox.vue'
import { ref } from 'vue'

export default {
  title: 'Ui/Checkbox',
  component: Checkbox,
  argTypes: {
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Checkbox v-bind="args" v-model="value"></Checkbox>',
  components: { Checkbox },
  setup() {
    let value = ref(false)
    return { value, args }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Checkbox title',
}

const SlotTemplate = (args) => ({
  template:
    '<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',
  components: { Checkbox },
  setup() {
    let value = ref(false)
    return { value, args }
  },
})

export const SlottedTitle = SlotTemplate.bind({})
SlottedTitle.args = {
  title: 'V-Slot Checkbox title',
}
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Qe,argTypes:{title:{control:{type:"text"}}}};const vs=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Qe},setup(){return{value:f(!1),args:e}}}),vn=vs.bind({});vn.args={title:"Checkbox title"};const hs=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Qe},setup(){return{value:f(!1),args:e}}}),hn=hs.bind({});hn.args={title:"V-Slot Checkbox title"};const _s=["Default","SlottedTitle"];var ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bs,Default:vn,SlottedTitle:hn,__namedExportsOrder:_s});const _n=E({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),ws=["width","height","viewBox"],Ds=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function Cs(e,t,o,n,r,s){return u(),d("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Ds)],8,ws)}var kn=S(_n,[["render",Cs]]);_n.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var xs={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

export default {
  title: 'Ui/CircularProgress',
  component: CircularProgress,
  argTypes: {
    progress: { control: { type: 'number' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<CircularProgress v-bind="args" />
  <CircularProgress :progress="1" />
  <CircularProgress :progress="10" />
  <CircularProgress :progress="20" />
  <CircularProgress :progress="30" />
  <CircularProgress :progress="40" />
  <CircularProgress :progress="50" />
  <CircularProgress :progress="60" />
  <CircularProgress :progress="70" />
  <CircularProgress :progress="80" />
  <CircularProgress :progress="90" />
  <CircularProgress :progress="100" />
  \`,
  components: { CircularProgress },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:kn,argTypes:{progress:{control:{type:"number"}}}};const Ss=e=>({template:`<CircularProgress v-bind="args" />
  <CircularProgress :progress="1" />
  <CircularProgress :progress="10" />
  <CircularProgress :progress="20" />
  <CircularProgress :progress="30" />
  <CircularProgress :progress="40" />
  <CircularProgress :progress="50" />
  <CircularProgress :progress="60" />
  <CircularProgress :progress="70" />
  <CircularProgress :progress="80" />
  <CircularProgress :progress="90" />
  <CircularProgress :progress="100" />
  `,components:{CircularProgress:kn},setup(){return{args:e}}}),$s=Ss.bind(),Ts=["Default"];var Vs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xs,Default:$s,__namedExportsOrder:Ts});function $e(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Bs(e):/rgb/.test(e)?t=zt(e):typeof e=="string"?t=zt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:o,g:n,b:r,a:s}=t,{h:a,s:l,v:i}=Ps(t);return{r:o,g:n,b:r,a:s===void 0?1:s,h:a,s:l,v:i}}function wn(e){const t=document.createElement("canvas"),o=t.getContext("2d"),n=e*2;return t.width=n,t.height=n,o.fillStyle="#ffffff",o.fillRect(0,0,n,n),o.fillStyle="#ccd5db",o.fillRect(0,0,e,e),o.fillRect(e,e,e,e),t}function Nt(e,t,o,n,r,s){const a=e==="l",l=t.createLinearGradient(0,0,a?o:0,a?0:n);l.addColorStop(.01,r),l.addColorStop(.99,s),t.fillStyle=l,t.fillRect(0,0,o,n)}function Is({r:e,g:t,b:o},n){const r=a=>("0"+Number(a).toString(16)).slice(-2),s=`#${r(e)}${r(t)}${r(o)}`;return n?s.toUpperCase():s}function Bs(e){e=e.slice(1);const t=o=>parseInt(o,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function zt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Ps({r:e,g:t,b:o}){e=e/255,t=t/255,o=o/255;const n=Math.max(e,t,o),r=Math.min(e,t,o),s=n-r;let a=0;n===r?a=0:n===e?t>=o?a=60*(t-o)/s:a=60*(t-o)/s+360:n===t?a=60*(o-e)/s+120:n===o&&(a=60*(e-t)/s+240),a=Math.floor(a);const l=parseFloat((n===0?0:1-r/n).toFixed(2)),i=parseFloat(n.toFixed(2));return{h:a,s:l,v:i}}const Dn=E({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const o=f({}),{size:n,hsv:r,color:s}=N(e),a=f(),l=f(),i=p=>{const g=p,b=n.value,C=g.getContext("2d");g.width=b,g.height=b,C.fillStyle=s.value,C.fillRect(0,0,b,b),Nt("l",C,b,b,"#FFFFFF","rgba(255,255,255,0)"),Nt("p",C,b,b,"rgba(0,0,0,0)","#000000")},m=()=>{o.value={left:r.value.s*n.value-5+"px",top:(1-r.value.v)*n.value-5+"px"}},y=p=>{const{top:g,left:b}=a.value.getBoundingClientRect(),C=p.target.getContext("2d"),_=z=>{let B=z.clientX-b,q=z.clientY-g;B<0&&(B=0),q<0&&(q=0),B>n.value&&(B=n.value),q>n.value&&(q=n.value),o.value={left:B-5+"px",top:q-5+"px"};const te=C.getImageData(Math.min(B,n.value-1),Math.min(q,n.value-1),1,1),[Y,U,G]=te.data;t("selectSaturation",{r:Y,g:U,b:G})};_(p);const k=()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",_),document.addEventListener("mouseup",k)};return X(()=>{i(l.value),m()}),{slideSaturationStyle:o,selectSaturation:y,renderSlide:m,renderColor:i,saturation:a,canvasSaturation:l,color:s,hsv:r,size:n}}}),Rs={ref:"canvasSaturation"};function Es(e,t,o,n,r,s){return u(),d("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ge((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[c("canvas",Rs,null,512),c("div",{style:Z(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Ms=S(Dn,[["render",Es]]);Dn.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Cn=E({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const o=f({}),n=f(),{height:r,width:s,hsv:a}=N(e),l=f(),i=p=>{const g=p,b=s.value,C=r.value,_=g.getContext("2d");g.width=b,g.height=C;const k=_.createLinearGradient(0,0,0,C);k.addColorStop(0,"#FF0000"),k.addColorStop(.17*1,"#FF00FF"),k.addColorStop(.17*2,"#0000FF"),k.addColorStop(.17*3,"#00FFFF"),k.addColorStop(.17*4,"#00FF00"),k.addColorStop(.17*5,"#FFFF00"),k.addColorStop(1,"#FF0000"),_.fillStyle=k,_.fillRect(0,0,b,C)},m=()=>{o.value={top:(1-a.value.h/360)*r.value-2+"px"}},y=p=>{const{top:g}=l.value.getBoundingClientRect(),b=p.target.getContext("2d"),C=k=>{let z=k.clientY-g;z<0&&(z=0),z>r.value&&(z=r.value),o.value={top:z-2+"px"};const B=b.getImageData(0,Math.min(z,r.value-1),1,1),[q,te,Y]=B.data;t("selectHue",{r:q,g:te,b:Y})};C(p);const _=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",_)};return X(()=>{i(n.value),m()}),{slideHueStyle:o,hue:l,width:s,height:r,renderSlide:m,selectHue:y,renderColor:i,hsv:a,canvasHue:n}}}),js={ref:"canvasHue"};function Ls(e,t,o,n,r,s){return u(),d("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ge((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[c("canvas",js,null,512),c("div",{style:Z(e.slideHueStyle),class:"slide"},null,4)],544)}var Os=S(Cn,[["render",Ls]]);Cn.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const xn=E({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=f(5),{color:o,width:n,height:r}=N(e),s=f(),a=l=>{const i=l,m=n.value,y=r.value,p=t.value,g=wn(p),b=i.getContext("2d");i.width=m,i.height=y,b.fillStyle=b.createPattern(g,"repeat"),b.fillRect(0,0,m,y),b.fillStyle=o.value,b.fillRect(0,0,m,y)};return X(()=>{sn(()=>{a(s.value)}),a(s.value)}),{alphaSize:t,color:o,width:n,height:r,canvas:s}}}),Fs={ref:"canvas"};function As(e,t,o,n,r,s){return u(),d("canvas",Fs,null,512)}var Ns=S(xn,[["render",As]]);xn.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const Sn=E({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:w({get(){return e.color||""},set(n){t("inputColor",n)}})}}}),zs={class:"color-type"},Hs={class:"name"};function Ws(e,t,o,n,r,s){return u(),d("div",zs,[c("span",Hs,R(e.name),1),ee(c("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.modelColor=a),class:"value"},null,512),[[Ee,e.modelColor]])])}var Us=S(Sn,[["render",Ws]]);Sn.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const $n=E({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const o=f(),n=f([]),r=f();e.colorsHistoryKey&&localStorage&&(n.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),r.value=wn(4).toDataURL(),Ie(()=>{s(o.value)});const s=l=>{if(!l)return;const i=n.value||[],m=i.indexOf(l);m>=0&&i.splice(m,1),i.length>=8&&(i.length=7),i.unshift(l),n.value=i||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(i))};return{setColorsHistory:s,colorsHistory:n,color:o,imgAlphaBase64:r,selectColor:l=>{t("selectColor",l)}}}}),Gs={class:"colors"},qs=["onClick"],Ys={key:0,class:"colors history"},Ks=["onClick"];function Js(e,t,o,n,r,s){return u(),d("div",null,[c("ul",Gs,[(u(!0),d(P,null,A(e.colorsDefault,a=>(u(),d("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[c("div",{style:Z({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:Z({background:a}),class:"color"},null,4)],8,qs))),128))]),e.colorsHistory.length?(u(),d("ul",Ys,[(u(!0),d(P,null,A(e.colorsHistory,a=>(u(),d("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[c("div",{style:Z({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:Z({background:a}),class:"color"},null,4)],8,Ks))),128))])):h("",!0)])}var Xs=S($n,[["render",Js]]);$n.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Tn=E({name:"RobustColorPicker",components:{Saturation:Ms,Hue:Os,Preview:Ns,Box:Us,Colors:Xs},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const o=f(15),n=f(152),r=f(20),s=f(""),a=f(""),l=f(0),i=f(0),m=f(0),y=f(1),p=f(0),g=f(0),b=f(0),C=f(),_=f(),{theme:k,color:z}=N(e),B=w(()=>k.value==="light"),q=w(()=>n.value+(o.value+8)*2),te=w(()=>q.value-r.value),Y=w(()=>({r:l.value,g:i.value,b:m.value,a:y.value})),U=w(()=>({h:p.value,s:g.value,v:b.value})),G=w(()=>`rgb(${l.value}, ${i.value}, ${m.value})`),ne=w(()=>`${l.value}, ${i.value}, ${m.value}`),ce=w(()=>`rgb(${ne.value})`),ae=w(()=>Is(Y.value,!0)),M=()=>{a.value=ae.value,s.value=ne.value};return X(()=>{const H=$e(z.value);l.value=H.r,i.value=H.g,m.value=H.b,y.value=H.a,p.value=H.h,g.value=H.s,b.value=H.v,M()}),sn(()=>{t("changeColor",{rgba:Y.value,hsv:U.value,hex:a.value})}),{hueWidth:o,hueHeight:n,previewHeight:r,modelRgba:s,modelHex:a,r:l,g:i,b:m,a:y,h:p,s:g,v:b,isLightTheme:B,totalWidth:q,previewWidth:te,rgba:Y,hsv:U,rgbString:G,rgbStringShort:ne,rgbaString:ce,hexString:ae,setText:M,selectSaturation:H=>{const V=$e(H);l.value=V.r,i.value=V.g,m.value=V.b,y.value=V.a,p.value=V.h,g.value=V.s,b.value=V.v,M()},selectHue:H=>{const V=$e(H);l.value=V.r,i.value=V.g,m.value=V.b,y.value=V.a,p.value=V.h,g.value=V.s,b.value=V.v,M(),ue(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide()})},inputHex:H=>{const V=$e(H);l.value=V.r,i.value=V.g,m.value=V.b,y.value=V.a,p.value=V.h,g.value=V.s,b.value=V.v,a.value=H,s.value=ne.value,ue(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),C.value.renderSlide()})},inputRgba:H=>{const V=$e(H);l.value=V.r,i.value=V.g,m.value=V.b,y.value=V.a,p.value=V.h,g.value=V.s,b.value=V.v,a.value=ae.value,s.value=`${l.value}, ${i.value}, ${m.value}`,ue(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),C.value.renderSlide()})},selectColor:H=>{const V=$e(H);l.value=V.r,i.value=V.g,m.value=V.b,y.value=V.a,p.value=V.h,g.value=V.s,b.value=V.v,M(),ue(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),C.value.renderSlide()})},saturation:_,hue:C,color:z,theme:k}}}),Qs={class:"color-set"};function Zs(e,t,o,n,r,s){const a=v("Saturation"),l=v("Hue"),i=v("Preview"),m=v("Box"),y=v("Colors");return u(),d("div",{class:D(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:Z({width:e.totalWidth+"px"})},[c("div",Qs,[x(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),x(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),c("div",{style:Z({height:e.previewHeight+"px"}),class:"color-show"},[x(i,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),x(m,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),x(m,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),x(y,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var Vn=S(Tn,[["render",Zs]]);Tn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
  '#000000',
  '#FFFFFF',
  '#FF1900',
  '#F47365',
  '#FFB243',
  '#FFE623',
  '#6EFF2A',
  '#1BC7B1',
  '#00BEFF',
  '#2E81FF',
  '#5D61FF',
  '#FF89CF',
  '#FC3CAD',
  '#BF3DCE',
  '#8E00A7',
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var el={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
import { PhWarning } from '@dnlsndr/vue-phosphor-icons'

export default {
  title: 'Ui/ColorPicker',
  component: ColorPicker,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<ColorPicker v-bind="args" />\`,
  components: { ColorPicker },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:Vn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const tl=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:Vn},setup(){return{args:e}}}),nl=tl.bind(),ol=["Default"];var al=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:el,Default:nl,__namedExportsOrder:ol});const In=E({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),rl={key:1,class:"flex items-center"},sl={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function ll(e,t,o,n,r,s){return e.$slots.default?(u(),d("div",rl,[c("div",{class:D(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),c("div",sl,[O(e.$slots,"default")]),c("div",{class:D(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(u(),d("div",{key:0,class:D(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var il=S(In,[["render",ll]]);In.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const Bn=E({name:"RobustContentBox",components:{RobustSeparator:il},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),ul={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},dl={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},cl={class:"flex"},pl={key:1,class:"text-gray-500 dark:text-gray-500"},ml={class:"p-4 sm:p-6"};function fl(e,t,o,n,r,s){const a=v("RobustSeparator");return u(),d("section",ul,[e.description!==void 0||e.title!==void 0?(u(),d("header",dl,[e.stripe?(u(),d("div",{key:0,class:D(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):h("",!0),c("h1",cl,[c("div",{class:D(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[O(e.$slots,"title",{title:e.title},()=>[ke(R(e.title),1)])],2)]),e.description!==void 0?(u(),d("p",pl,[O(e.$slots,"description",{description:e.description},()=>[ke(R(e.description),1)])])):h("",!0)])):h("",!0),x(a),c("div",ml,[O(e.$slots,"default")])])}var Le=S(Bn,[["render",fl]]);Bn.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var gl={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

export default {
  title: 'Ui/ContentBox',
  component: ContentBox,
  argTypes: {
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>\`,
  components: { ContentBox },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

const TitleTemplate = (args) => ({
  template: \`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>\`,
  components: { ContentBox },
  setup() {
    return { args }
  },
})

export const Title = TitleTemplate.bind()

Title.args = {
  title: 'Input title',
}

const TitlePropTemplate = (args) => ({
  template: \`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>\`,
  components: { ContentBox },
  setup() {
    return { args }
  },
})

export const TitleProp = TitlePropTemplate.bind()

TitleProp.args = {
  title: 'Input title',
}

const StripeTemplate = (args) => ({
  template: \`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>\`,
  components: { ContentBox },
  setup() {
    return { args }
  },
})

export const Stripe = StripeTemplate.bind()

Stripe.args = {
  title: 'Input title',
}
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Le,argTypes:{title:{control:{type:"text"}}}};const yl=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),bl=yl.bind(),vl=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),Pn=vl.bind();Pn.args={title:"Input title"};const hl=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),Rn=hl.bind();Rn.args={title:"Input title"};const _l=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),En=_l.bind();En.args={title:"Input title"};const kl=["Default","Title","TitleProp","Stripe"];var wl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gl,Default:bl,Title:Pn,TitleProp:Rn,Stripe:En,__namedExportsOrder:kl});const Oe=Symbol("Data Table settings state provider identifier"),Be=Symbol("Data Table settings update provider identifier"),ht=Symbol("Data Table settings add udpated record provider identifier");var Dl={setup(){const e=mt({totalCount:0,pageSize:25,page:1,updatedRecords:{},isDirty:!1,keyword:""});oe(e.updatedRecords,()=>{e.isDirty||(e.isDirty=!0)},{deep:!0});const t=(n,r)=>{e[n]=r},o=n=>{e.updatedRecords[n.id]=n};rt(Oe,N(Pa(e))),rt(ht,o),rt(Be,t)},render(){return this.$slots.default()}};const Mn={props:{size:{type:String,default:"24px"}}},Cl=e=>(ye("data-v-738db624"),e=e(),be(),e),xl=["width","height"],Sl=Cl(()=>c("path",{class:"icon","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"},null,-1)),$l=[Sl];function Tl(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},$l,8,xl)}var Vl=S(Mn,[["render",Tl],["__scopeId","data-v-738db624"]]);Mn.__docgenInfo={exportName:"default",displayName:"SortAscIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const jn={props:{size:{type:String,default:"24px"}}},Il=e=>(ye("data-v-20e50232"),e=e(),be(),e),Bl=["width","height"],Pl=Il(()=>c("path",{class:"icon","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"},null,-1)),Rl=[Pl];function El(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},Rl,8,Bl)}var Ml=S(jn,[["render",El],["__scopeId","data-v-20e50232"]]);jn.__docgenInfo={exportName:"default",displayName:"SortDescIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const Ln={props:{size:{type:String,default:"24px"}}},jl=e=>(ye("data-v-040f55c5"),e=e(),be(),e),Ll=["width","height"],Ol=jl(()=>c("path",{class:"icon","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)),Fl=[Ol];function Al(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},Fl,8,Ll)}var Nl=S(Ln,[["render",Al],["__scopeId","data-v-040f55c5"]]);Ln.__docgenInfo={exportName:"default",displayName:"MenuIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const On={props:{size:{type:String,default:"24px"}}},zl=e=>(ye("data-v-3e6ad335"),e=e(),be(),e),Hl=["width","height"],Wl=zl(()=>c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"},null,-1)),Ul=[Wl];function Gl(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},Ul,8,Hl)}var Fn=S(On,[["render",Gl],["__scopeId","data-v-3e6ad335"]]);On.__docgenInfo={exportName:"default",displayName:"PlusIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const An={props:{size:{type:String,default:"24px"}}},ql=e=>(ye("data-v-0bc25aaa"),e=e(),be(),e),Yl=["width","height"],Kl=ql(()=>c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1)),Jl=[Kl];function Xl(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},Jl,8,Yl)}var Nn=S(An,[["render",Xl],["__scopeId","data-v-0bc25aaa"]]);An.__docgenInfo={exportName:"default",displayName:"MinusIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const zn={components:{SortAscIcon:Vl,SortDescIcon:Ml,MenuIcon:Nl},props:{modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:o}=N(e),n=w({get(){return o.value},set(s){t("update:modelValue",s)}});return{sort:n,onToggle:()=>{n.value>0?n.value=-1:n.value+=1}}}};function Ql(e,t,o,n,r,s){const a=v("sort-asc-icon"),l=v("sort-desc-icon"),i=v("menu-icon");return u(),d("div",{class:D(["data-table-header__icon",n.sort?"visible":"sm:invisible"]),onClick:t[0]||(t[0]=(...m)=>n.onToggle&&n.onToggle(...m))},[n.sort<0?(u(),L(a,{key:0,size:"16px"})):n.sort>0?(u(),L(l,{key:1,size:"16px"})):(u(),L(i,{key:2,size:"16px"}))],2)}var Zl=S(zn,[["render",Ql]]);zn.__docgenInfo={exportName:"default",displayName:"SortToggle",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}]};const Hn={components:{SortToggle:Zl},props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:o}=N(e);return{cell:w({get(){return o.value},set(r){t("update:modelValue",r)}})}}},ei=["title"];function ti(e,t,o,n,r,s){const a=v("sort-toggle");return u(),d(P,null,[c("span",{class:"font-medium text-sm uppercase truncate",title:n.cell.title},R(n.cell.title),9,ei),n.cell.sortable?(u(),L(a,{key:0,modelValue:n.cell.sortDirection,"onUpdate:modelValue":t[0]||(t[0]=l=>n.cell.sortDirection=l)},null,8,["modelValue"])):h("",!0)],64)}var ni=S(Hn,[["render",ti],["__scopeId","data-v-149a1c8f"]]);Hn.__docgenInfo={exportName:"default",displayName:"DataTableHeaderCell",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}}],events:[{name:"update:modelValue"}]};const Wn={components:{HeaderCell:ni},emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},hideFirst:{type:Boolean,default:!1},isInlineEditMode:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t}){const{modelValue:o}=N(e);return{headersData:w({get(){const a=o.value,{sort:r}=a;return Bt(a,["sort"])},set(r){t("update:modelValue",r)}})}}},oi=e=>(ye("data-v-601d07c3"),e=e(),be(),e),ai={key:0},ri={key:0,class:"data-table-header border-bottom-2 flex items-center justify-between sm:justify-center px-4 py-2 text-sm tracking-wider cursor-pointer"},si=oi(()=>c("span",{class:"font-medium uppercase truncate",title:"actions"},"actions",-1)),li=[si];function ii(e,t,o,n,r,s){const a=v("header-cell");return u(),d(P,null,[(u(!0),d(P,null,A(o.hideFirst?Object.keys(n.headersData).slice(1):Object.keys(n.headersData),l=>(u(),d("div",{key:l,class:D(["data-table-header border-bottom-2 flex items-center justify-between sm:justify-center px-4 py-2 text-sm tracking-wider cursor-pointer",o.isInlineEditMode?"h-12 sm:h-auto":"h-10 sm:h-auto"])},[x(a,{modelValue:n.headersData[l],"onUpdate:modelValue":i=>n.headersData[l]=i},null,8,["modelValue","onUpdate:modelValue"])],2))),128)),o.hasActionColumn?(u(),d("div",ai,[o.isInlineEditMode?h("",!0):(u(),d("div",ri,li))])):h("",!0)],64)}var ui=S(Wn,[["render",ii],["__scopeId","data-v-601d07c3"]]);Wn.__docgenInfo={exportName:"default",displayName:"DataTableHeader",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"data",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hideFirst",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInlineEditMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const _t={components:{TableHeader:ui,PlusIcon:Fn,MinusIcon:Nn},emits:["update:modelValue"],props:{modelValue:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},config:Object,gridTemplateColumnsCss:String,isInlineEditMode:{type:Boolean,default:!0},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t}){const{modelValue:o,config:n}=N(e),r=w({get(){return o.value},set(s){t("update:modelValue",s)}});return me({headersData:r},mt({size:Object.keys(r.value).length}))}},Ht=()=>{ct(e=>({"24da5266":e.size}))},Wt=_t.setup;_t.setup=Wt?(e,t)=>(Ht(),Wt(e,t)):Ht;const Un=_t,Gn=e=>(ye("data-v-2f237892"),e=e(),be(),e),di={class:"data-table-header-container grid sm:hidden col-span-1"},ci={class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-3 text-sm tracking-wider cursor-pointer bg-gray-700 border-b-2"},pi={class:"mr-2 text-white"},mi={class:"truncate w-full"},fi=Gn(()=>c("div",{class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"},"Key",-1)),gi=Gn(()=>c("div",{class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"},"Key",-1));function yi(e,t,o,n,r,s){const a=v("plus-icon"),l=v("minus-icon"),i=v("table-header");return u(),d(P,null,[c("div",di,[o.config.groupBy?(u(!0),d(P,{key:0},A(o.data,(m,y)=>(u(),d(P,{key:y},[c("div",ci,[c("div",pi,[o.config.collapsed&&o.config.collapsed[y]?(u(),L(a,{key:0,size:"16px"})):(u(),L(l,{key:1,size:"16px"}))]),c("span",mi,R(`${o.config.groupBy.toUpperCase()}: ${y}`),1)]),o.config.collapsed&&o.config.collapsed[y]?h("",!0):(u(!0),d(P,{key:0},A(o.data[y].children,p=>(u(),d(P,{key:p.id},[fi,x(i,{modelValue:n.headersData,"onUpdate:modelValue":t[0]||(t[0]=g=>n.headersData=g),hideFirst:!0},null,8,["modelValue"])],64))),128))],64))),128)):(u(!0),d(P,{key:1},A(o.data,m=>(u(),d("div",{key:m.id},[gi,x(i,{modelValue:n.headersData,"onUpdate:modelValue":t[1]||(t[1]=y=>n.headersData=y),isInlineEditMode:o.isInlineEditMode},null,8,["modelValue","isInlineEditMode"])]))),128))]),c("div",{class:"data-table-header-container hidden sm:grid col-span-1 grid-cols-1 bg-gray-500",style:Z({"grid-template-columns":o.gridTemplateColumnsCss})},[x(i,{modelValue:n.headersData,"onUpdate:modelValue":t[2]||(t[2]=m=>n.headersData=m),isInlineEditMode:o.isInlineEditMode},null,8,["modelValue","isInlineEditMode"])],4)],64)}var bi=S(Un,[["render",yi],["__scopeId","data-v-2f237892"]]);Un.__docgenInfo={exportName:"default",displayName:"DataTableHeaderContainer",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"data",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"}},{name:"gridTemplateColumnsCss",type:{name:"string"}},{name:"isInlineEditMode",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const qn={components:{PhCaretLeft:an,PhCaretRight:rn},setup(){const{pageSize:e,totalCount:t,page:o}=ie(Oe),n=f(0),r=ie(Be),s=a=>r("page",a);return oe([t,e],()=>n.value=Math.ceil(t.value/e.value)),{pageSize:e,pageCount:n,page:o,setPage:s}}},Yn=e=>(ye("data-v-76c1c062"),e=e(),be(),e),vi={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},hi=Yn(()=>c("span",{class:"sr-only"},"Previous",-1)),_i=["onClick"],ki=Yn(()=>c("span",{class:"sr-only"},"Next",-1));function wi(e,t,o,n,r,s){const a=v("PhCaretLeft"),l=v("PhCaretRight");return u(),d("div",null,[c("nav",vi,[c("span",{onClick:t[0]||(t[0]=()=>n.page>1&&n.setPage(n.page-1)),class:"paginate-btn relative inline-flex items-center p-2 rounded-l-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[hi,x(a,{type:"chevron-left",class:"h-5 w-5",size:"24",weight:"bold"})]),(u(!0),d(P,null,A(n.pageCount,i=>(u(),d("span",{key:i,onClick:()=>n.setPage(i),class:D(["paginate-btn relative inline-flex items-center px-4 py-2 border border-gray-700 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300",i===n.page?"bg-gray-200 active":""])},R(i),11,_i))),128)),c("span",{onClick:t[1]||(t[1]=()=>n.page<n.pageCount&&n.setPage(n.page+1)),class:"paginate-btn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[ki,x(l,{type:"chevron-right",class:"h-5 w-5",size:"24",weight:"bold"})])])])}var Di=S(qn,[["render",wi],["__scopeId","data-v-76c1c062"]]);qn.__docgenInfo={exportName:"default",displayName:"PaginationBar",description:"",tags:{}};const Kn={components:{PhCaretDown:Me},setup(){const e=f(),t=f(null),{pageSize:o}=ie(Oe),n=ie(Be),r=()=>{e.value=!e.value},s=l=>{l!==o.value&&(o.value=l,e.value=!1,n("pageSize",l))},a=l=>{e.value&&!t.value.contains(l.target)&&(e.value=!1)};return X(()=>{document.addEventListener("click",a)}),Ie(()=>{document.removeEventListener("click",a)}),{isOpen:e,containerRef:t,pageSize:o,toggleDropdown:r,selectItem:s}}},Ci={class:"flex flex-col ml-2 h-full",ref:"containerRef"},xi={class:"truncate min-w-0 select-none"},Si={key:0,class:"absolute top-[60px] ml-0.5 z-50 bg-gray-700 shadow-2xl rounded-lg py-2"},$i=["onClick"];function Ti(e,t,o,n,r,s){const a=v("ph-caret-down");return u(),d("div",null,[c("div",Ci,[c("div",{class:"flex relative items-center p-1.5 h-full cursor-pointer border border-gray-700 rounded-md overflow-hidden shadow-inner flex focus-within:outline-none focus-within:ring shadow-outline h-8",onClick:t[0]||(t[0]=(...l)=>n.toggleDropdown&&n.toggleDropdown(...l))},[c("div",{class:D(["bg-transparent w-full h-full text-current outline-none flex items-center",[e.$slots.prefix||"pl-2"]])},[c("div",xi,R(n.pageSize),1)],2),c("div",{class:D(["h-full flex-shrink-0 flex items-center pr-2 text-gray-400",["pl-2"]])},[x(a,{size:18,class:D(["transition-transform duration-200",{"transform rotate-180":n.isOpen}])},null,8,["class"])])]),n.isOpen?(u(),d("ul",Si,[(u(),d(P,null,A([10,25,50],l=>c("li",{class:D(["px-4 py-1.5 cursor-pointer hover:bg-gray-600 transition-colors duration-200 flex justify-center items-center",n.pageSize===l?"bg-gray-400":""]),key:l,onClick:i=>n.selectItem(l)},[c("span",null,R(l),1)],10,$i)),64))])):h("",!0)],512)])}var Vi=S(Kn,[["render",Ti]]);Kn.__docgenInfo={exportName:"default",displayName:"PageSizeSelectBar",description:"",tags:{}};const Jn={components:{PageSizeSelectBar:Vi,PaginationBar:Di},props:{config:Object},emits:["patch-records"],setup(e,{emit:t}){const{isDirty:o,updatedRecords:n}=ie(Oe),r=ie(Be),s=()=>{r("updatedRecords",{}),r("isDirty",!1)};return{isDirty:o,updatedRecords:n,patchRecords:()=>{t("patch-records",Object.values(n.value)),s()}}}},Ii={class:"sticky bottom-4 opacity-40 hover:opacity-100 sm:opacity-100 sm:flex"},Bi={class:"flex items-start ml-auto mt-4 w-full"},Pi=ke(" Update "),Ri={class:"group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-gray-500 text-gray-200"};function Ei(e,t,o,n,r,s){const a=v("pagination-bar"),l=v("page-size-select-bar");return u(),d("div",Ii,[c("div",Bi,[o.config.hidePagination?h("",!0):(u(),L(a,{key:0})),o.config.hidePagination?h("",!0):(u(),L(l,{key:1})),n.isDirty&&(!o.config.hideUpdateButton||o.config.hideUpdateButton===!1)?(u(),d("button",{key:2,type:"button",onClick:t[0]||(t[0]=(...i)=>n.patchRecords&&n.patchRecords(...i)),class:"ml-auto inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[Pi,c("span",Ri,R(Object.keys(n.updatedRecords).length),1)])):h("",!0)])])}var Mi=S(Jn,[["render",Ei]]);Jn.__docgenInfo={exportName:"default",displayName:"DataTableFooter",description:"",tags:{},props:[{name:"config",type:{name:"object"}}],events:[{name:"patch-records"}]};var ji=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],Pe=E({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:o}){const{open:n,appendTo:r}=N(e),s=f();let a;const l=f(!1),i={strategy:"absolute",placement:"bottom-start",modifiers:[...ji,...e.modifiers]};function m(){a==null||a.destroy(),l.value=!1}async function y(b){if(!b)return;const C=Object.assign({},i,e.options);!s.value||(a=Ra(b,s.value,C),await a.update())}Ie(()=>{m()});async function p(){await y(r.value),s.value&&(a==null||a.update(),Et.fromTo(s.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function g(){s.value&&Et.fromTo(s.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{m()})}return X(()=>{if(!o.default)throw new Error("Popper does not have a child slot");oe(n,b=>{l.value=!0,ue(async()=>{b?p():g()})})}),{appendTo:r,root:s,render:l}},render(){if(this.render)return Te("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const Xn=E({name:"RobustDatePicker",components:{RobustPopper:Pe,RobustCalendar:Xe,RobustInputWrapper:De,PhCaretDown:Me,PhCalendar:ln},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const n=f(),{modelValue:r}=N(e),s=f(!1),a=f(),l=f();Ke(a,p=>{s.value&&(l.value.wrapperRef.contains(p.target)&&(p.stopPropagation(),p.preventDefault()),y(),t("blur"))});const i=w({get(){return(r==null?void 0:r.value)?r.value:new Date},set(p){s.value=!1,t("update:modelValue",p),t("change",p),t("blur")}}),m=w(()=>{if(!i.value)return"Select date";const p=i.value;try{return p?fe(p,"P"):"Unknown"}catch{return}});function y(){s.value===!0&&(s.value=!1,t("blur"))}return{attrs:o,refSelectContainer:n,open:s,props:e,displayDate:m,computedValue:i,closeDropdown:y,popperRef:a,inputWrapperRef:l}},methods:{}}),Li=["id"],Oi={class:"min-w-0 truncate tabular-nums"};function Fi(e,t,o,n,r,s){var p,g;const a=v("PhCalendar"),l=v("PhCaretDown"),i=v("RobustInputWrapper"),m=v("RobustCalendar"),y=v("RobustPopper");return u(),d(P,null,[x(i,{title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ge(b=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:K(b=>[c("div",{class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[x(a,{size:"20"})],2),c("div",de({id:b.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Oi,R(e.displayDate),1)],16,Li),c("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[x(l,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((p=e.inputWrapperRef)==null?void 0:p.wrapperRef)?(u(),L(y,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(g=e.inputWrapperRef)==null?void 0:g.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=b=>e.open=b),options:{placement:"bottom-start"}},{default:K(()=>[x(m,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=b=>e.computedValue=b)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):h("",!0)],64)}var Fe=S(Xn,[["render",Fi]]);Xn.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Qn=E({name:"RobustSelect",components:{RobustPopper:Pe,RobustInputWrapper:De,PhCheck:pt,PhCaretDown:Me},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:o}){const n=f(),r=f(),{options:s}=N(e),a=f(!1),l=f(),i=f(),m=f("");let y=f([]);async function p(B){e.searchFunction!==void 0&&(y.value=await e.searchFunction(B)),B===""?y.value=s.value:y.value=s.value.filter(q=>q.title.toLowerCase().substring(0,B.length)===B.toLowerCase())}Ea(m,async B=>{await p(B)},{debounce:150}),X(async()=>{await p("")});const g=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:B=>{B.state.styles.popper.width=`${Math.max(B.state.rects.reference.width,200)}px`},effect:B=>{B.state.elements.popper.style.width=`${B.state.elements.reference.getBoundingClientRect().width}px`}}],b=w(()=>e.options.find(B=>B.value===e.modelValue));function C(B){ue(()=>{k()}),t("update:modelValue",B.value),t("change",B.value)}function _(){a.value=!0,ue(()=>{r.value.focus()}),t("focus")}Ke(l,B=>{a.value&&(i.value.wrapperRef.contains(B.target)&&(B.stopPropagation(),B.preventDefault()),z(),k(),t("blur"))});function k(){a.value=!1}function z(){m.value=""}return{refSelectInput:r,refSelectContainer:n,closeDropdown:k,open:a,props:e,openDropdown:_,inputWrapper:i,popperModifiers:g,activeItem:b,selectItem:C,computedOptions:y,resetFields:z,attrs:o,search:m,popperRef:l}}}),Ai=["id"],Ni={class:"min-w-0 select-none truncate"},zi={key:0,class:"max-h-72 overflow-auto"},Hi=["onClick"],Wi={key:1,class:"py-2 text-center text-gray-400"};function Ui(e,t,o,n,r,s){var y,p;const a=v("PhCaretDown"),l=v("RobustInputWrapper"),i=v("PhCheck"),m=v("RobustPopper");return u(),d(P,null,[x(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:K(g=>[e.$slots.prefix?(u(),d("div",{key:0,class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[O(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),ee(c("div",de({id:g.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[c("div",Ni,R(e.activeItem?e.activeItem.title:"Select"),1)],16,Ai),[[st,!e.open]]),ee(c("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=b=>e.search=b),size:"1",class:D(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[st,e.open],[Ee,e.search]]),c("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[x(a,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((y=e.inputWrapper)==null?void 0:y.wrapperRef)?(u(),L(m,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=g=>e.open=g),ref:"popperRef",class:"z-[100] origin-top","append-to":(p=e.inputWrapper)==null?void 0:p.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:K(()=>[e.computedOptions.length>0?(u(),d("ul",zi,[(u(!0),d(P,null,A(e.computedOptions,g=>(u(),d("li",{key:g.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:b=>e.selectItem(g)},[c("span",null,R(g.title),1),e.modelValue===g.value?(u(),L(i,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):h("",!0)],8,Hi))),128))])):(u(),d("div",Wi,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):h("",!0)],64)}var Ze=S(Qn,[["render",Ui]]);Qn.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const Zn={components:{DatePicker:Fe,Select:Ze},props:{modelValue:{type:[String,Number]},type:{type:String},options:{type:Array},isInlineEditMode:{type:Boolean}},emits:["update:modelValue","click","change"],setup(e,{emit:t}){const{modelValue:o}=N(e);return{cell:w({get:()=>o.value,set:r=>{t("update:modelValue",r),t("change")}})}}},Gi={key:0,class:"flex w-full"},qi={key:1,class:"flex items-center class w-full truncate"};function Yi(e,t,o,n,r,s){const a=v("DatePicker"),l=v("Select");return u(),d("div",{class:D(["flex px-4 py-2 text-center whitespace-nowrap text-sm font-medium",o.isInlineEditMode?"h-12 sm:h-auto":"h-10 sm:h-auto"]),onClick:t[4]||(t[4]=i=>e.$emit("click"))},[o.isInlineEditMode?(u(),d("div",Gi,[O(e.$slots,"leftIcon"),o.type==="text"||o.type==="number"?ee((u(),d("input",{key:0,type:"{{type}}","onUpdate:modelValue":t[0]||(t[0]=i=>n.cell=i),class:"bg-transparent truncate"},null,512)),[[Ee,n.cell]]):h("",!0),o.type==="checkbox"?ee((u(),d("input",{key:1,type:"checkbox",class:"bg-transparent truncate","onUpdate:modelValue":t[1]||(t[1]=i=>n.cell=i)},null,512)),[[Ye,n.cell]]):h("",!0),o.type==="date"?(u(),L(a,{key:2,class:"p-2 col-span-2 sm:col-span-1",modelValue:new Date(n.cell),"onUpdate:modelValue":t[2]||(t[2]=i=>n.cell=i)},null,8,["modelValue"])):h("",!0),o.type==="enum"?(u(),L(l,{key:3,class:"bg-transparent truncate rounded",modelValue:n.cell,"onUpdate:modelValue":t[3]||(t[3]=i=>n.cell=i),options:o.options},null,8,["modelValue","options"])):h("",!0)])):h("",!0),o.isInlineEditMode?h("",!0):(u(),d("div",qi,[c("span",null,R(n.cell),1)]))],2)}var eo=S(Zn,[["render",Yi]]);Zn.__docgenInfo={exportName:"default",displayName:"DataTableCell",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"type",type:{name:"string"}},{name:"options",type:{name:"array"}},{name:"isInlineEditMode",type:{name:"boolean"}}],events:[{name:"click"},{name:"update:modelValue"},{name:"change"}],slots:[{name:"leftIcon"}]};const to={components:{DataTableCell:eo},props:{modelValue:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},isGrouped:{type:Boolean,default:!1},isInlineEditMode:{type:Boolean},actionComponent:{type:Object},hasActionColumn:{type:Boolean,default:!1}},emits:["update:modelValue","click","edit"],setup(e){const{modelValue:t}=N(e),o=ie(ht);return{record:t,changeHandler:()=>{o(t.value)}}}},Ki=c("div",{class:"block sm:hidden data-table-header border-bottom-2 flex items-center justify-center text-center whitespace-nowrap px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-200 dark:bg-gray-500"},"Value",-1),Ji={key:1},Xi={key:0,class:"flex items-center justify-center px-4 py-2 text-center whitespace-nowrap text-xs font-medium"};function Qi(e,t,o,n,r,s){const a=v("data-table-cell"),l=v("ph-pencil");return u(),d(P,null,[Ki,o.isGrouped?(u(),L(a,{key:-1,modelValue:"",class:"hidden sm:grid"})):h("",!0),(u(!0),d(P,null,A(o.columns.slice(o.isGrouped?1:0),i=>O(e.$slots,i.key,{key:i.key,row:n.record,value:n.record[i.key],column:i.key},()=>[x(a,{type:i.type,column:i.key,options:i.options,isInlineEditMode:o.isInlineEditMode,class:D(i.fnClassRule?i.fnClassRule(n.record[i.key],n.record):null),onClick:t[0]||(t[0]=m=>e.$emit("click")),onChange:n.changeHandler,modelValue:n.record[i.key],"onUpdate:modelValue":m=>n.record[i.key]=m},null,8,["type","column","options","isInlineEditMode","class","onChange","modelValue","onUpdate:modelValue"])])),128)),o.hasActionColumn?(u(),d("div",Ji,[o.isInlineEditMode?h("",!0):(u(),d("div",Xi,[o.actionComponent?(u(),L(qe(o.actionComponent),{key:0,record:n.record,onReload:t[1]||(t[1]=i=>e.$emit("reload")),onAction:t[2]||(t[2]=i=>e.$emit("action",i))},null,8,["record"])):(u(),d("button",{key:1,onClick:t[3]||(t[3]=i=>e.$emit("edit")),class:"p-1.5 rounded bg-blue-500 text-gray-100"},[x(l,{size:15})]))]))])):h("",!0)],64)}var Zi=S(to,[["render",Qi]]);to.__docgenInfo={exportName:"default",displayName:"DataTableRecord",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"isGrouped",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInlineEditMode",type:{name:"boolean"}},{name:"actionComponent",type:{name:"object"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"reload"},{name:"action"},{name:"edit"},{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"},{name:"column",title:"binding"}]}]};const no={components:{DataTableCell:eo,PlusIcon:Fn,MinusIcon:Nn},props:{modelValue:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},totalCount:{type:Number,default:2},collapsed:{type:Boolean,default:!1}},emits:["update:modelValue","toggle"],setup(e,{emit:t}){const{modelValue:o}=N(e),n=w({get:()=>o.value,set:s=>t("update:modelValue",s)});return{record:n,toggleGroup:()=>{t("toggle",n.value.group)}}}};function eu(e,t,o,n,r,s){const a=v("plus-icon"),l=v("minus-icon"),i=v("data-table-cell");return u(),d(P,null,[x(i,{key:"role",modelValue:n.record.group,class:"bg-gray-700 py-3 hidden sm:grid cursor-pointer border-b-2",onClick:n.toggleGroup},{leftIcon:K(()=>[o.collapsed?(u(),L(a,{key:0,size:"16px",class:"mr-2 text-white"})):(u(),L(l,{key:1,size:"16px",class:"mr-2 text-white"}))]),_:1},8,["modelValue","onClick"]),x(i,{key:"count",modelValue:`Count: ${n.record.count}`,class:"bg-gray-700 py-3 cursor-pointer border-b-2",onClick:n.toggleGroup},null,8,["modelValue","onClick"]),(u(!0),d(P,null,A(Array(o.totalCount-2).keys(),m=>(u(),L(i,{key:`empty-${m}`,modelValue:" ",class:"bg-gray-700 hidden sm:grid cursor-pointer border-b-2",onClick:n.toggleGroup},null,8,["onClick"]))),128))],64)}var tu=S(no,[["render",eu]]);no.__docgenInfo={exportName:"default",displayName:"DataTableGroupRecord",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"collapsed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"toggle"}]};const oo=E({name:"RobustModal",inheritAttrs:!1,components:{PhX:Ma},props:{modalClass:{type:String},opened:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:o}=N(e);let n=ja(document.body);oe(o,l=>{l?n.value=!0:n.value=!1});function r(l){l.key==="Escape"&&o.value===!0&&(l.stopPropagation(),l.preventDefault(),a())}X(()=>{window.addEventListener("keydown",r)}),Ie(()=>{window.removeEventListener("keydown",r)});async function s(){o.value=!0,t("update:opened",!0),t("open")}async function a(){o.value=!1,t("update:opened",!1),t("close")}return{open:s,close:a,opened:o}}}),nu={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},ou={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},au={class:"leading-4"};function ru(e,t,o,n,r,s){const a=v("PhX");return u(),L(Oa,{to:"#modal-area"},[x(La,de(e.$attrs,{name:"slide"}),{default:K(()=>[e.opened?(u(),d("div",nu,[c("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75",onClick:t[0]||(t[0]=ge((...l)=>e.close&&e.close(...l),["self"]))}),c("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Ve((...l)=>e.close&&e.close(...l),["esc"]))},[c("div",{class:D(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(u(),d("div",ou,[c("div",au,[O(e.$slots,"title",{},void 0,!0)]),c("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[x(a,{size:"20",class:"block"})])])):h("",!0),O(e.$slots,"default",{},void 0,!0)],2)],32)],512)):h("",!0)]),_:3},16)])}var kt=S(oo,[["render",ru],["__scopeId","data-v-8b5e15d4"]]);oo.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};const wt={components:{Record:Zi,DataTableGroupRecord:tu,DatePicker:Fe,Modal:kt,Select:Ze},emits:["update:modelData","update:modelConfig","toggleGroup","clickRecord"],props:{columns:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})},config:Object,isInlineEditMode:{type:Boolean},hasActionColumn:{type:Boolean,default:!1},gridTemplateColumnsCss:String,actionComponent:{type:Object}},setup(e,{emit:t,slots:o}){const{data:n,columns:r,config:s,isInlineEditMode:a}=N(e),l=f(null),i=f(null),m=ie(ht),y=w({get(){return n.value},set(_){t("update:modelData",_)}}),p=s.value.groupBy?w({get(){return[r.value.find(_=>_.key===s.value.groupBy),{title:"Count",key:"count",sortable:!0,editable:!0,hidden:!1,sortDirection:0}]}}):"";return me({$slots:o,bodyData:y,groupColumns:p,toggleGroup:_=>{t("toggleGroup",_)},modalRef:l,openRecordEditModal:_=>{a.value||(i.value=y.value[_],l.value.open())},selectedRecord:i,updateSelectedRecord:()=>{m(i.value),l.value.close()}},mt({size:r.value.length}))}},Ut=()=>{ct(e=>({"65e55302":e.size}))},Gt=wt.setup;wt.setup=Gt?(e,t)=>(Ut(),Gt(e,t)):Ut;const ao=wt,su={class:"px-6 pt-8 pb-4 grid grid-cols-2"},lu={class:"flex items-center min-w-[5.6rem]"},iu={class:"flex w-full overflow-hidden"},uu=["type","onUpdate:modelValue"],du=["onUpdate:modelValue"],cu={class:"p-4 pt-0 flex justify-end"};function pu(e,t,o,n,r,s){const a=v("data-table-group-record"),l=v("Record"),i=v("DatePicker"),m=v("Select"),y=v("Modal");return u(),d(P,null,[c("div",{class:"data-table-body block sm:grid col-span-1",style:Z({"grid-template-columns":o.gridTemplateColumnsCss})},[o.config.groupBy?(u(!0),d(P,{key:0},A(n.bodyData,(p,g)=>(u(),d(P,{key:g},[x(a,{modelValue:{group:g,count:p.children.length},columns:n.groupColumns,totalCount:o.columns.length,collapsed:o.config.collapsed&&o.config.collapsed[g],onToggle:n.toggleGroup},null,8,["modelValue","columns","totalCount","collapsed","onToggle"]),o.config.collapsed&&o.config.collapsed[g]?h("",!0):(u(!0),d(P,{key:0},A(n.bodyData[g].children,(b,C)=>(u(),L(l,{modelValue:n.bodyData[g].children[C],"onUpdate:modelValue":_=>n.bodyData[g].children[C]=_,columns:o.columns,key:b.id,"is-grouped":""},null,8,["modelValue","onUpdate:modelValue","columns"]))),128))],64))),128)):(u(!0),d(P,{key:1},A(n.bodyData,(p,g)=>(u(),L(l,{key:g,onEdit:b=>n.openRecordEditModal(g),onClick:b=>e.$emit("clickRecord",n.bodyData[g]),modelValue:n.bodyData[g],"onUpdate:modelValue":b=>n.bodyData[g]=b,columns:o.columns,isInlineEditMode:o.isInlineEditMode,actionComponent:o.actionComponent,hasActionColumn:o.hasActionColumn,onReload:t[0]||(t[0]=b=>e.$emit("reload")),onAction:t[1]||(t[1]=b=>e.$emit("action",b))},ft({_:2},[A(n.$slots,(b,C)=>({name:C,fn:K(_=>[O(e.$slots,C,gt(yt(_||{})),void 0,!0)])}))]),1032,["onEdit","onClick","modelValue","onUpdate:modelValue","columns","isInlineEditMode","actionComponent","hasActionColumn"]))),128))],4),x(y,{name:"update-field",ref:"modalRef"},{default:K(()=>[c("div",su,[(u(!0),d(P,null,A(o.columns,p=>(u(),d("div",{key:p.key,class:"flex items-center mx-2 my-4"},[c("span",lu,R(p.title)+":",1),c("div",iu,[O(e.$slots,"leftIcon",{},void 0,!0),p.type==="text"||p.type==="number"?ee((u(),d("input",{key:0,type:p.type,class:"bg-transparent truncate","onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,uu)),[[on,n.selectedRecord[p.key]]]):h("",!0),p.type==="checkbox"?ee((u(),d("input",{key:1,type:"checkbox",class:"bg-transparent truncate","onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,du)),[[Ye,n.selectedRecord[p.key]]]):h("",!0),p.type==="date"?(u(),L(i,{key:2,class:"bg-transparent truncate",modelValue:new Date(n.selectedRecord[p.key]),"onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,["modelValue","onUpdate:modelValue"])):h("",!0),p.type==="enum"?(u(),L(m,{key:3,class:"bg-transparent truncate rounded",options:p.options,modelValue:n.selectedRecord[p.key],"onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,["options","modelValue","onUpdate:modelValue"])):h("",!0)])]))),128))]),c("div",cu,[c("button",{onClick:t[2]||(t[2]=(...p)=>n.updateSelectedRecord&&n.updateSelectedRecord(...p))},"Save"),c("button",{onClick:t[3]||(t[3]=(...p)=>n.modalRef.close&&n.modalRef.close(...p)),class:"ml-2 bg-gray-400 hover:bg-gray-500"},"Cancel")])]),_:3},512)],64)}var mu=S(ao,[["render",pu],["__scopeId","data-v-3c1a8e61"]]);ao.__docgenInfo={exportName:"default",displayName:"DataTableBody",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"data",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"}},{name:"isInlineEditMode",type:{name:"boolean"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gridTemplateColumnsCss",type:{name:"string"}},{name:"actionComponent",type:{name:"object"}}],events:[{name:"clickRecord"},{name:"reload"},{name:"action"},{name:"update:modelData"},{name:"update:modelConfig"},{name:"toggleGroup"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"leftIcon"}]};const ro={components:{PhCheck:pt,PhCaretDown:Me},props:{columns:{type:Array,default:()=>[]},config:Object},emits:["toggleColumn"],setup(e,{emit:t}){const o=f(),n=f(null),r=()=>{o.value=!o.value},s=l=>{o.value&&!n.value.contains(l.target)&&(o.value=!1)},a=l=>{t("toggleColumn",l)};return X(()=>{document.addEventListener("click",s)}),Ie(()=>{document.removeEventListener("click",s)}),{isOpen:o,toggleDropdown:r,containerRef:n,selectItem:a}}},fu={key:0,class:"inline-block relative",ref:"containerRef"},gu=c("div",{class:"truncate min-w-0 select-none text-gray-700 dark:text-gray-50"},"Columns",-1),yu=[gu],bu={key:0,class:"absolute right-0 z-50 bg-white dark:bg-gray-700 shadow-2xl rounded-lg py-4 text-gray-700 dark:text-gray-50"},vu=["onClick"],hu={class:"text-[0.9rem]"};function _u(e,t,o,n,r,s){const a=v("ph-caret-down"),l=v("ph-check");return!o.config.hideKeys||o.config.hideKeys!==!0?(u(),d("div",fu,[c("div",{class:"flex bg-gray-200 dark:bg-gray-700 cursor-pointer rounded overflow-hidden flex focus-within:outline-none focus-within:ring shadow-outline h-8",onClick:t[0]||(t[0]=(...i)=>n.toggleDropdown&&n.toggleDropdown(...i))},[c("div",{class:D(["bg-transparent w-full h-full text-current outline-none flex items-center",[e.$slots.prefix||"pl-2"]])},yu,2),c("div",{class:D(["h-full flex-shrink-0 flex items-center pr-2 text-gray-400",["pl-2"]])},[x(a,{type:"chevron-down",size:18,class:D(["transition-transform duration-200",{"transform rotate-180":n.isOpen}])},null,8,["class"])])]),n.isOpen?(u(),d("ul",bu,[(u(!0),d(P,null,A(o.columns,i=>(u(),d("li",{onClick:m=>n.selectItem(i.key),class:"px-4 py-2 w-32 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-100 transition-colors duration-200 flex items-center",key:i.key},[x(l,{class:D(["text-gray-400 mr-1",i.hidden?"opacity-0":""]),size:"18"},null,8,["class"]),c("span",hu,R(i.title),1)],8,vu))),128))])):h("",!0)],512)):h("",!0)}var ku=S(ro,[["render",_u]]);ro.__docgenInfo={exportName:"default",displayName:"DataTableSettings",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"config",type:{name:"object"}}],events:[{name:"toggleColumn"}]};const so={components:{PhMagnifyingGlass:Fa},emits:["search-submit"],setup(e,{emit:t}){const o=f(""),n=ie(Be);return oe(o,r=>{n("keyword",r)}),{keyword:o,submitSearch(){t("search-submit",o.value)}}}},wu={class:"flex-1 flex justify-end"},Du={class:"max-w-[14rem] min-w-[9rem] border border-gray-700 pl-2 rounded ml-2 flex items-center bg-gray-50 dark:bg-gray-800"};function Cu(e,t,o,n,r,s){const a=v("PhMagnifyingGlass");return u(),d("div",wu,[c("div",Du,[x(a,{class:"text-gray-500 dark:text-gray-50",size:"18"}),ee(c("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.keyword=l),placeholder:"search...",onKeyup:t[1]||(t[1]=Ve((...l)=>n.submitSearch&&n.submitSearch(...l),["enter"])),class:"bg-gray-50 rounded w-full dark:bg-gray-800 px-2 py-1 outline-none"},null,544),[[Ee,n.keyword]])])])}var xu=S(so,[["render",Cu]]);so.__docgenInfo={exportName:"default",displayName:"DataSearchBox",description:"",tags:{},events:[{name:"search-submit"}]};const Su=function(e,t){return e.reduce(function(o,n){return(o[n[t]]=o[n[t]]||{children:[],collapsed:!1}).children.push(n),o},{})};function $u(e,t,o){const n=w({get(){return o.value?Su(e.value,o.value):e.value}}),r=w({get(){if(!o.value)return t.value;const s=t.value.findIndex(i=>i.key===o.value);let a=[...t.value];return a=[a.splice(s,1)[0],...a],a}});return{groupedData:n,groupedColumn:r}}var Tu="/robust-ui/assets/loading.0d051c03.gif";const lo={components:{DataTableSettings:ku,DataSearchBox:xu,TableHeader:bi,TableFooter:Mi,TableBody:mu},emits:["patch-records","page","search","record-click","search-submit"],data(){return{isInlineEditModeTabs:[{title:"Enable",value:"true"},{title:"Disable",value:"false"}],fieldTypes:[{title:"Text",value:"text"},{title:"Number",value:"number"},{title:"Enum",value:"enum"},{title:"Date",value:"date"}]}},props:{columns:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},isTurnOnInlineMode:{type:Boolean,default:!1},isShowInlineTab:{type:Boolean,default:!1},actionComponent:{type:Object},isLoading:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t,slots:o}){const{columns:n,modelValue:r,config:s,totalCount:a,isTurnOnInlineMode:l,hasActionColumn:i}=N(e),m=ie(Be),{pageSize:y,page:p,keyword:g}=ie(Oe),b=f("true");l.value||(b.value="false");let C=y.value;const _=f(n.value),k=f(_.value.filter(M=>!M.hidden)),z=()=>{let M="",J=0;for(const se of k.value)J+=se.width;const re=b.value==="false"&&k.value.length&&i.value?100/k.value.length:0;for(const se of k.value)M+=se.width*(100-re)/J+"% ";return re!==0&&(M+=re+"%"),M},B=f(z()),q=M=>m("totalCount",M);oe(a,()=>q(a.value)),X(()=>{q(a.value)}),oe([y,p],()=>{let M=y.value*(p.value-1);const J=y.value;C!==y.value&&p.value!==1?(M=0,m("page",1)):C=y.value,t("page",{offset:M,limit:J})}),oe(g,M=>{t("search",M)});const{groupedData:te,groupedColumn:Y}=$u(r,k,f(s.value.groupBy)),U=f(s.value),G=M=>{U.value.collapsed===void 0?U.value=Se(me({},U.value),{collapsed:{[M]:!0}}):U.value.collapsed[M]===void 0?U.value.collapsed=Se(me({},U.value.collapsed),{[M]:!0}):U.value.collapsed=Se(me({},U.value.collapsed),{[M]:!U.value.collapsed[M]})},ne=w({get(){return Se(me({},U.value),{size:Y.value.length})}}),ce=M=>{_.value=_.value.map(J=>(J.key===M&&(J.hidden=!J.hidden),J)),k.value=_.value.filter(J=>!J.hidden)};return oe([k,b],()=>{B.value=z()}),{$slots:o,columnData:Y,bodyData:te,toggleGroup:G,tableConfig:ne,allColumns:_,filteredColumns:k,toggleColumn:ce,isInlineEditMode:b,gridTemplateColumnsCss:B,recordClickHandler:M=>{b.value==="false"&&t("record-click",M)}}}},io=e=>(ye("data-v-b69b110c"),e=e(),be(),e),Vu={class:"flex flex-wrap mb-1.5 items-center justify-between"},Iu={key:0,class:"flex items-start mr-4 my-2"},Bu=io(()=>c("label",{class:"mr-1 whitespace-nowrap"},"Inline edit:",-1)),Pu={class:"flex justify-end"},Ru={key:0,class:"loading min-h-[400px]"},Eu=io(()=>c("div",{class:"relative w-full h-full"},[c("img",{src:Tu,alt:"Loading",width:"80",style:{position:"absolute",top:"50%",left:"50%"}})],-1)),Mu=[Eu];function ju(e,t,o,n,r,s){const a=v("base-tab-switch"),l=v("data-search-box"),i=v("data-table-settings"),m=v("table-header"),y=v("table-body"),p=v("table-footer");return u(),d("div",null,[c("div",Vu,[o.isTurnOnInlineMode&&o.isShowInlineTab?(u(),d("div",Iu,[Bu,x(a,{modelValue:n.isInlineEditMode,"onUpdate:modelValue":t[0]||(t[0]=g=>n.isInlineEditMode=g),tabs:r.isInlineEditModeTabs},null,8,["modelValue","tabs"])])):h("",!0),!n.tableConfig.hideSearch||n.tableConfig.hideSearch===!1?(u(),L(l,{key:1,class:"mr-2",onSearchSubmit:t[1]||(t[1]=g=>e.$emit("search-submit",g))})):h("",!0),c("div",Pu,[x(i,{columns:n.allColumns,config:n.tableConfig,activeColumn:n.filteredColumns,onToggleColumn:n.toggleColumn},null,8,["columns","config","activeColumn","onToggleColumn"])])]),(u(),d("div",{key:n.columnData.length,class:"grid sm:block grid-cols-2 border border-gray-700"},[x(m,{modelValue:n.columnData,"onUpdate:modelValue":t[2]||(t[2]=g=>n.columnData=g),data:n.bodyData,config:n.tableConfig,gridTemplateColumnsCss:n.gridTemplateColumnsCss,isInlineEditMode:n.isInlineEditMode==="true",hasActionColumn:o.hasActionColumn},null,8,["modelValue","data","config","gridTemplateColumnsCss","isInlineEditMode","hasActionColumn"]),x(y,{columns:n.columnData,isInlineEditMode:n.isInlineEditMode==="true",data:n.bodyData,"onUpdate:data":t[3]||(t[3]=g=>n.bodyData=g),config:n.tableConfig,"onUpdate:config":t[4]||(t[4]=g=>n.tableConfig=g),onToggleGroup:n.toggleGroup,onClickRecord:n.recordClickHandler,gridTemplateColumnsCss:n.gridTemplateColumnsCss,actionComponent:o.actionComponent,hasActionColumn:o.hasActionColumn,onReload:t[5]||(t[5]=g=>e.$emit("reload")),onAction:t[6]||(t[6]=g=>e.$emit("action",g))},ft({_:2},[A(n.$slots,(g,b)=>({name:b,fn:K(C=>[O(e.$slots,b,gt(yt(C||{})),void 0,!0)])}))]),1032,["columns","isInlineEditMode","data","config","onToggleGroup","onClickRecord","gridTemplateColumnsCss","actionComponent","hasActionColumn"])])),x(p,{config:n.tableConfig,onPatchRecords:t[7]||(t[7]=g=>e.$emit("patch-records",g))},null,8,["config"]),o.isLoading?(u(),d("div",Ru,Mu)):h("",!0)])}var Lu=S(lo,[["render",ju],["__scopeId","data-v-b69b110c"]]);lo.__docgenInfo={exportName:"default",displayName:"DataTable",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"isTurnOnInlineMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isShowInlineTab",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actionComponent",type:{name:"object"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"search-submit"},{name:"reload"},{name:"action"},{name:"patch-records"},{name:"page"},{name:"search"},{name:"record-click"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const uo={components:{ProvideDataTableSettings:Dl,DataTable:Lu},emits:["page","update:modelValue","patch-records","record-click","search-submit"],props:{columns:{type:Array,default:()=>[]},config:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},modelValue:{type:Object,default:()=>({})},isTurnOnInlineMode:{type:Boolean,default:!1},isShowInlineTab:{type:Boolean,default:!1},actionComponent:{type:Object},isLoading:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t,slots:o}){const{modelValue:n}=N(e),r=w(()=>e.columns.value.map(i=>i.key)),s=w({get(){return n.value},set(i){t("update:modelValue",i)}});return{page:i=>t("page",i),search:i=>t("search",i),bodyData:s,slotNames:r,$slots:o}}};function Ou(e,t,o,n,r,s){const a=v("data-table"),l=v("provide-data-table-settings");return u(),L(l,null,{default:K(()=>[x(a,de(e.$props,{onPage:n.page,onSearch:n.search,modelValue:n.bodyData,"onUpdate:modelValue":t[0]||(t[0]=i=>n.bodyData=i),class:"relative",totalCount:o.totalCount,"is-loading":o.isLoading,hasActionColumn:o.hasActionColumn,isTurnOnInlineMode:o.isTurnOnInlineMode,isShowInlineTab:o.isShowInlineTab,onPatchRecords:t[1]||(t[1]=i=>e.$emit("patch-records",i)),onRecordClick:t[2]||(t[2]=i=>e.$emit("record-click",i)),onReload:t[3]||(t[3]=i=>e.$emit("reload")),onAction:t[4]||(t[4]=i=>e.$emit("action",i)),onSearchSubmit:t[5]||(t[5]=i=>e.$emit("search-submit",i))}),ft({_:2},[A(n.$slots,(i,m)=>({name:m,fn:K(y=>[O(e.$slots,m,gt(yt(y||{})))])}))]),1040,["onPage","onSearch","modelValue","totalCount","is-loading","hasActionColumn","isTurnOnInlineMode","isShowInlineTab"])]),_:3})}var co=S(uo,[["render",Ou]]);uo.__docgenInfo={exportName:"default",displayName:"DataTableContainer",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"config",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"isTurnOnInlineMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isShowInlineTab",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actionComponent",type:{name:"object"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"patch-records"},{name:"record-click"},{name:"reload"},{name:"action"},{name:"search-submit"},{name:"page"},{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};var Fu={title:"Ui/DataTable",component:co,parameters:{storySource:{source:`import { ref } from 'vue'
import DataTable from './DataTableContainer.vue'

export default {
  title: 'Ui/DataTable',
  component: DataTable,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#00aced' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
}
const columns = [
  {
    title: 'Hotel',
    key: 'name',
    sortable: true,
    editable: true,
    hidden: false,
    type: 'text',
    sortDirection: 0,
    width: 40,
  },

  {
    title: 'City',
    key: 'city',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'Country',
    key: 'country_name',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'enum',
    options: [
      {
        title: 'DEU',
        value: 'DEU',
      },
    ],
    width: 30,
  },
  {
    title: 'Chain',
    key: 'chain_name',
    sortable: false,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'Brand',
    key: 'brand_name',
    sortable: false,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'Contract',
    key: 'contract_name',
    sortable: false,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'End Date',
    key: 'enddate_contract_formatted',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'date',
    sort: (a, b) => new Date(a) - new Date(b),
    width: 40,
  },
  {
    title: 'Custom Render',
    key: 'custom_render',
    width: 40,
  },
]

const data = [
  {
    id: '1d5b8be1-13ba-4b04-a76f-53105076f1e6',
    name: 'Hartmann LLC',
    country: 'DEU',
    city: 'Lake Vivienneton',
    country_name: 'Germany',
    chain_name: 'Graham, Hilll and Sawayn',
    brand_name: 'Megane',
    enddate_contract_formatted: '05/04/2022',
    contract_name: 'Intelligent',
  },
  {
    id: '1d6f17a9-0e4c-4839-8cab-0e2f59921a4b',
    name: 'Adams LLC',
    country: 'DEU',
    city: 'South Charlotte',
    country_name: 'Germany',
    chain_name: 'Kautzer LLC',
    brand_name: 'Clarabelle',
    enddate_contract_formatted: '06/04/2022',
    contract_name: 'Clever',
  },
  {
    id: '83be9c92-ed3a-4875-825c-8db64e0ca7b9',
    name: 'Gorczany Inc',
    country: 'DEU',
    city: 'Konopelskiborough',
    country_name: 'Germany',
    chain_name: 'Gerhold - Kris',
    brand_name: 'Andy',
    enddate_contract_formatted: '07/04/2022',
    contract_name: 'Intelligent',
  },
]
const config = {
  totalCount: 200,
  pageSize: 25,
  page: 1,
  updatedRecords: {},
  isDirty: false,
}
const DefaultTemplate = (args) => ({
  template: \`
  <DataTable
      :totalCount="totalCount"
      v-model="tableData"
      :columns="tableColumns"
      :config="tableConfig"
      :is-loading="isLoading"
      @page="setPaginationParams"
      @search="setKeyword"
      @record-click="handleClickRecord"
    >

      <template #name="{row, value, column}">
        <div class="flex items-center w-full pl-2">
          <span class="text-rose-500">{{value}}</span>
        </div>
      </template>

      <template #custom_render="{row, value, column}">
        <div class="flex items-center w-full">
          <span class="w-4 h-2 bg-green-600"></span>
          <span class="w-4 h-2 bg-amber-600"></span>
          <span class="w-4 h-2 bg-red-600"></span>
          <span class="w-4 h-2 bg-green-600"></span>
          <span class="w-4 h-2 bg-amber-600"></span>
          <span class="w-4 h-2 bg-red-600"></span>
        </div>
      </template>

    </DataTable>
\`,
  components: { DataTable },
  setup() {
    const totalCount = ref(200)
    const tableColumns = ref(columns)
    const tableData = ref(data)
    const tableConfig = ref(config)
    const isLoading = ref(false)
    const keyword = ref('')
    const paginationParams = ref({ offset: 0, limit: 25 })
    const setPaginationParams = (params) => {
      paginationParams.value = params
    }
    const setKeyword = (value) => {
      keyword.value = value
    }
    const handleClickRecord = function (record) {
      console.log(record)
    }
    return {
      args,
      totalCount,
      tableColumns,
      tableConfig,
      tableData,
      isLoading,
      setPaginationParams,
      setKeyword,
      handleClickRecord,
    }
  },
})

export const Default = DefaultTemplate.bind()
Default.parameters = {
  backgrounds: { default: 'dark' },
}
`,locationsMap:{default:{startLoc:{col:24,line:145},endLoc:{col:2,line:207},startBody:{col:24,line:145},endBody:{col:2,line:207}}}},backgrounds:{default:"dark",values:[{name:"light",value:"#00aced"},{name:"dark",value:"#111827"}]}}};const Au=[{title:"Hotel",key:"name",sortable:!0,editable:!0,hidden:!1,type:"text",sortDirection:0,width:40},{title:"City",key:"city",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Country",key:"country_name",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"enum",options:[{title:"DEU",value:"DEU"}],width:30},{title:"Chain",key:"chain_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Brand",key:"brand_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Contract",key:"contract_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"End Date",key:"enddate_contract_formatted",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"date",sort:(e,t)=>new Date(e)-new Date(t),width:40},{title:"Custom Render",key:"custom_render",width:40}],Nu=[{id:"1d5b8be1-13ba-4b04-a76f-53105076f1e6",name:"Hartmann LLC",country:"DEU",city:"Lake Vivienneton",country_name:"Germany",chain_name:"Graham, Hilll and Sawayn",brand_name:"Megane",enddate_contract_formatted:"05/04/2022",contract_name:"Intelligent"},{id:"1d6f17a9-0e4c-4839-8cab-0e2f59921a4b",name:"Adams LLC",country:"DEU",city:"South Charlotte",country_name:"Germany",chain_name:"Kautzer LLC",brand_name:"Clarabelle",enddate_contract_formatted:"06/04/2022",contract_name:"Clever"},{id:"83be9c92-ed3a-4875-825c-8db64e0ca7b9",name:"Gorczany Inc",country:"DEU",city:"Konopelskiborough",country_name:"Germany",chain_name:"Gerhold - Kris",brand_name:"Andy",enddate_contract_formatted:"07/04/2022",contract_name:"Intelligent"}],zu={totalCount:200,pageSize:25,page:1,updatedRecords:{},isDirty:!1},Hu=e=>({template:`
  <DataTable
      :totalCount="totalCount"
      v-model="tableData"
      :columns="tableColumns"
      :config="tableConfig"
      :is-loading="isLoading"
      @page="setPaginationParams"
      @search="setKeyword"
      @record-click="handleClickRecord"
    >

      <template #name="{row, value, column}">
        <div class="flex items-center w-full pl-2">
          <span class="text-rose-500">{{value}}</span>
        </div>
      </template>

      <template #custom_render="{row, value, column}">
        <div class="flex items-center w-full">
          <span class="w-4 h-2 bg-green-600"></span>
          <span class="w-4 h-2 bg-amber-600"></span>
          <span class="w-4 h-2 bg-red-600"></span>
          <span class="w-4 h-2 bg-green-600"></span>
          <span class="w-4 h-2 bg-amber-600"></span>
          <span class="w-4 h-2 bg-red-600"></span>
        </div>
      </template>

    </DataTable>
`,components:{DataTable:co},setup(){const t=f(200),o=f(Au),n=f(Nu),r=f(zu),s=f(!1),a=f(""),l=f({offset:0,limit:25});return{args:e,totalCount:t,tableColumns:o,tableConfig:r,tableData:n,isLoading:s,setPaginationParams:p=>{l.value=p},setKeyword:p=>{a.value=p},handleClickRecord:function(p){console.log(p)}}}}),po=Hu.bind();po.parameters={backgrounds:{default:"dark"}};const Wu=["Default"];var Uu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fu,Default:po,__namedExportsOrder:Wu}),Gu={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
import { ref } from 'vue'

export default {
  title: 'Ui/DatePicker',
  component: DatePicker,
  argTypes: {
    title: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const Template = (args) => ({
  template:
    '<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',
  components: { DatePicker },
  setup() {
    return { args }
  },
})

const date = new Date()
const modelValue = ref(date)

export const Default = Template.bind({})
Default.args = {
  modelValue: modelValue,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val
  },
}
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:Fe,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const qu=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:Fe},setup(){return{args:e}}}),Yu=new Date,qt=f(Yu),mo=qu.bind({});mo.args={modelValue:qt,"onUpdate:modelValue":e=>{qt.value=e}};const Ku=["Default"];var Ju=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gu,Default:mo,__namedExportsOrder:Ku});const Xu=E({props:{colors:{type:Array,default:["#FCA5A5","#EF4444","#FDBA74","#F97316","#FCD34D","#F59E0B","#FDE047","#EAB308","#BEF264","#84CC16","#86EFAC","#22C55E","#6EE7B7","#10B981","#5EEAD4","#14B8A6","#67E8F9","#06B6D4","#7DD3FC","#0EA5E9","#93C5FD","#3B82F6","#A5B4FC","#6366F1","#C4B5FD","#8B5CF6","#D8B4FE","#A855F7","#F0ABFC","#D946EF","#F9A8D4","#EC4899","#FDA4AF","#F43F5E"]}},setup(e,{emit:t}){return{selectedColor:n=>{t("change",n)}}}});Xu.__docgenInfo={exportName:"default",displayName:"ColorPalette",description:"",tags:{},props:[{name:"colors",type:{name:"string[]"},defaultValue:{func:!1,value:`[
  '#FCA5A5',
  '#EF4444',
  '#FDBA74',
  '#F97316',
  '#FCD34D',
  '#F59E0B',
  '#FDE047',
  '#EAB308',
  '#BEF264',
  '#84CC16',
  '#86EFAC',
  '#22C55E',
  '#6EE7B7',
  '#10B981',
  '#5EEAD4',
  '#14B8A6',
  '#67E8F9',
  '#06B6D4',
  '#7DD3FC',
  '#0EA5E9',
  '#93C5FD',
  '#3B82F6',
  '#A5B4FC',
  '#6366F1',
  '#C4B5FD',
  '#8B5CF6',
  '#D8B4FE',
  '#A855F7',
  '#F0ABFC',
  '#D946EF',
  '#F9A8D4',
  '#EC4899',
  '#FDA4AF',
  '#F43F5E',
]`}}]};const fo=E({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),Qu={class:"py-4 flex flex-col text-center items-center"},Zu={class:"mb-4 text-gray-600 dark:text-gray-400"},ed={class:"text-xl text-gray-600 dark:text-gray-400 mb-2"},td={class:"inline-block"};function nd(e,t,o,n,r,s){return u(),d("div",Qu,[c("div",Zu,[e.$slots.icon?O(e.$slots,"icon",{key:1}):(u(),L(qe(e.icon),{key:0,size:"40"}))]),c("div",ed,R(e.title),1),c("div",{class:D(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},R(e.description),3),c("div",td,[O(e.$slots,"default")])])}var et=S(fo,[["render",nd]]);fo.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};let F,lt,it,ut,we;const dt=(e,t,o=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,o):t.el.dispatchEvent(new CustomEvent(e,o))},od=(e,t)=>{if(t.parentNode===e.parentNode){for(let o=e.previousSibling;o;o=o.previousSibling)if(o===t)return!0}return!1},Yt=function(e,t){var o,n;if(dt("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;F=this,lt=we.handleClass&&F.querySelector(`.${we.handleClass}`),it=Array.from((o=F==null?void 0:F.parentElement)==null?void 0:o.children).indexOf(F),(n=F==null?void 0:F.parentElement)==null||n.classList.add("drag")},Kt=function(e){var o;if(!F)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(n=>{var r;if(Array.from((r=F==null?void 0:F.parentElement)==null?void 0:r.children).indexOf(n)>=0)return n})),Array.from((o=F==null?void 0:F.parentElement)==null?void 0:o.children).indexOf(t)!==-1&&(F.classList.add(we.placeholderClass),od(F,t)?t.parentNode.insertBefore(F,t):t.parentNode.insertBefore(F,t.nextSibling))},Jt=(e,t)=>{var r,s;if(!F)return;dt("end",t,e),lt&&F.setAttribute("draggable","false"),F.classList.remove(we.placeholderClass),(r=F==null?void 0:F.parentElement)==null||r.classList.remove("drag");const o=it,n=Array.from((s=F==null?void 0:F.parentElement)==null?void 0:s.children).indexOf(F);ut.splice(n,0,ut.splice(o,1)[0]),dt("change",t,{from:o,to:n}),setTimeout(()=>{F=null,it=null,lt=null},0)},Xt=(e,t)=>{const o=we.handleClass&&e.querySelector(`.${we.handleClass}`);o?(o.onmousedown=n=>{e.setAttribute("draggable","true")},o.ontouchstart=n=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},o.onmouseup=n=>{e.setAttribute("draggable","false")},o.ontouchend=n=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=n=>{n.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=n=>Yt.bind(e,n,t)(),e.ondragenter=Kt,e.ondragend=n=>Jt.bind(e,n,t)(),e.ontouchstart=n=>Yt.bind(e,n,t)(),e.ontouchmove=Kt,e.ontouchend=n=>Jt.bind(e,n,t)()};var ad={mounted:(e,t,o)=>{let n=t.value.depth||0;for(;n;)e=e.firstElementChild,n--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(r){return console.error(r)}ut=t.value&&t.value.value,we={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(r=>Xt(r,o)),e.addEventListener("DOMNodeInserted",function(r){F||r.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(r.target)!==-1&&Xt(r.target,o)})}};const go=E({name:"RobustDraggable",directives:{draggable:ad},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:o}=N(e),n=w({get:()=>o.value,set:r=>{t("update:modelValue",r)}});return ue(()=>{console.log("alo")}),{list:n}}});function rd(e,t,o,n,r,s){const a=Aa("draggable");return ee((u(),d("div",null,[(u(!0),d(P,null,A(e.list,l=>(u(),d("div",{key:l},[O(e.$slots,"element",{item:l})]))),128))])),[[a,{value:e.list}]])}var yo=S(go,[["render",rd]]);go.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};const bo=E({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:o}=N(e),n=w(()=>{var r,s,a,l,i;return{"gs-id":(r=o.value)==null?void 0:r.id,"gs-x":(s=o.value)==null?void 0:s.gridstack.x,"gs-y":(a=o.value)==null?void 0:a.gridstack.y,"gs-w":(l=o.value)==null?void 0:l.gridstack.w,"gs-h":(i=o.value)==null?void 0:i.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:n}}}),sd={class:"grid-stack-item-content bg-gray-300"};function ld(e,t,o,n,r,s){return u(),d("div",de({class:"grid-stack-item"},e.widgetAttributes),[c("div",sd,[ke(R(e.widget.id)+" "+R(e.widget.gridstack)+" ",1),(u(),L(qe(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var id=S(bo,[["render",ld]]);bo.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const vo=E({name:"RobustGrid",components:{GridItem:id},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:o}=N(e),n,r=f();return X(()=>{console.log("mounting"),n=Na.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},r.value),n.on("change",(s,a)=>{!o.value||([...o.value],Array.isArray(a)&&o.value.forEach(l=>{let i=a.find(m=>m.id===l.id);i&&(l.gridstack=Se(me({},l.gridstack),{x:i.x,y:i.y,w:i.w,h:i.h}))}),t("update:widgets",o))})}),{gridContainer:r}}}),ud={ref:"gridContainer",class:"grid-stack bg-gray-200"};function dd(e,t,o,n,r,s){const a=v("GridItem");return u(),d("div",null,[ke(R(e.locked)+" ",1),c("section",ud,[(u(!0),d(P,null,A(e.widgets,l=>(u(),L(a,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var ho=S(vo,[["render",dd]]);vo.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Ae=E({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const o=f(!0),n=f(!1),r=new Image;return r.onload=()=>{t("loaded",!0),o.value=!1},r.onerror=s=>{t("error",s),n.value=!0,o.value=!1},X(()=>{r.src=e.src}),{error:n,loading:o}},render(){return this.loading?Te("div",{class:"flex items-center justify-center"},Te(Je,{size:24,stroke:2})):this.error?this.fallbackSrc?Te("img",{src:this.fallbackSrc}):Te(je,{size:20}):Te("img",{src:this.src})}});const _o=E({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:o}=N(e),n=w(()=>`height:${t.value}px`),r=w(()=>`width:clamp(${t.value}px, ${o.value}%, 100%);`);return{heightComputed:n,widthComputed:r}}});function cd(e,t,o,n,r,s){return u(),d("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:Z([e.heightComputed])},[c("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:Z([e.widthComputed])},null,4)],4)}var ko=S(_o,[["render",cd]]);_o.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var pd={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const wo=E({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:w(()=>pd[e.variant])}}});function md(e,t,o,n,r,s){return u(),d("div",{class:D([e.computedClass,"mb-4 border-l-4 p-4"])},[O(e.$slots,"default")],2)}var Do=S(wo,[["render",md]]);wo.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};let fd=0;const Co=E({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:o}){const n=(++fd).toString(),r=w({get(){return e.modelValue===e.value},set(){let s=e.modelValue;s=e.value,t("update:modelValue",s),t("change",s)}});return{cuid:n,isChecked:r,attrs:o}}}),gd={class:"inline-block"},yd=["id"],bd=["for"],vd={key:0,class:"w-full select-none leading-4"};function hd(e,t,o,n,r,s){return u(),d("div",gd,[ee(c("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),type:"radio",class:"hidden"},null,8,yd),[[za,e.isChecked]]),c("label",{for:`radio_${e.cuid}`,class:D([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[c("div",{class:D(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[c("div",{class:D([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(u(),d("div",vd,R(e.title),1)):h("",!0),c("div",null,[e.$slots.title?O(e.$slots,"title",{key:0}):h("",!0)])],10,bd)])}var xo=S(Co,[["render",hd]]);Co.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};const So=E({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const o=f(e.modelValue),n=f(!1),r=f(!1),s=f(e.modelValue),a=f(),l=f(),i=f(),m=w(()=>[{"is-dragging":r.value},{"is-disabled":e.disabled},{"is-active":n.value},{"has-icon":y},{"has-marker":e.showMarker}]),y=w(()=>Boolean(e.icon)),p=w(()=>({transform:"scaleX("+xe(s.value)+")"})),g=w(()=>({left:xe(s.value)*100+"%"})),b=w(()=>e.markerValue===void 0?e.modelValue:e.markerValue),C=w(()=>{const $=[];let Q=e.step*Math.ceil(_()/e.step);for(;Q<=k();)$.push(Q),Q+=e.step;return $}),_=()=>e.max>e.min?e.min:0,k=()=>e.max>e.min?e.max:100,z=()=>{a.value.focus()},B=()=>{G(o)},q=()=>{n.value=!0,t("focus")},te=()=>{n.value=!1,t("blur")},Y=$=>{a.value.contains($.target)||te()},U=$=>{$=_e($),e.snapToSteps&&($=Ne($)),G($)},G=$=>{$=_e($),$!==s.value&&(s.value=$,t("update:modelValue",$),t("change",$))},ne=()=>{U(s.value+e.step)},ce=()=>{U(s.value-e.step)},ae=()=>{let $=l.value,Q=$.offsetLeft;for(;$.offsetParent;)$=$.offsetParent,Q+=$.offsetLeft;return Q},M=$=>({left:$+"%"}),J=()=>{document.addEventListener("touchend",V),document.addEventListener("mouseup",V),document.addEventListener("click",Y),document.addEventListener("touchstart",Y),se()},re=()=>{document.removeEventListener("touchend",V),document.removeEventListener("mouseup",V),document.removeEventListener("click",Y)},se=()=>{const $=_e(s.value?s.value:0);G($)},Ce=$=>{e.disabled||(n.value||q(),r.value=!0,H($),document.addEventListener("touchmove",j),document.addEventListener("mousemove",j),t("dragstart",s.value,$))},j=$=>{H($)},H=$=>{const Q=$.touches?$.touches[0].pageX:$.pageX,le=l.value.offsetWidth,Re=(Q-ae())/le,tt=_e(_()+Re*(k()-_()));r.value&&G(Math.round(tt))},V=$=>{r.value&&(r.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&U(e.modelValue),document.removeEventListener("touchmove",j),document.removeEventListener("mousemove",j),t("dragend",s.value,$))},Ne=$=>{const Q=Math.floor($/e.step)*e.step,le=Q+e.step,Re=(Q+le)/2;return Q<_()?le>k()?$:le:$>=Re&&le<=k()?le:Q},xe=$=>($-_())/(k()-_()),_e=$=>$<_()?_():$>k()?k():$;return X(()=>{J()}),Ha(()=>{re()}),{slider:a,track:l,thumb:i,initialValue:o,isActive:n,isDragging:r,localValue:s,classes:m,hasIcon:y,fillStyle:p,thumbStyle:g,markerText:b,snapPoints:C,moderatedMin:_,moderatedMax:k,focus:z,reset:B,onFocus:q,onBlur:te,onExternalClick:Y,setValueWithSnap:U,setValue:G,incrementValue:ne,decrementValue:ce,getTrackOffset:ae,getPointStyle:M,initializeSlider:J,teardownSlider:re,initializeDrag:se,onDragStart:Ce,onDragMove:j,dragUpdate:H,onDragStop:V,getNearestSnapPoint:Ne,relativeValue:xe,moderateValue:_e}}}),_d=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],kd=["name","value"],wd={key:1,class:"base-slider__icon"},Dd={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Cd={key:0},xd={key:0,class:"base-slider__marker text-xs"},Sd=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[c("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),$d={class:"base-slider__marker-text text-xs"};function Td(e,t,o,n,r,s){const a=v("feather");return u(),d("div",{ref:"slider",class:D(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Ve(ge((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Ve(ge((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Ve(ge((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Ve(ge((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(u(),d("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,kd)):h("",!0),e.hasIcon?(u(),d("div",wd,[O(e.$slots,"icon",{},()=>[x(a,{type:e.icon,size:"20"},null,8,["type"])])])):h("",!0),c("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[c("div",Dd,[e.snapToSteps?(u(),d("div",Cd,[(u(!0),d(P,null,A(e.snapPoints,(l,i)=>(u(),d("span",{key:i,class:"base-slider__snap-point",style:Z({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):h("",!0)]),c("div",{class:"base-slider__track-fill bg-primary-400",style:Z(e.fillStyle)},null,4),c("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:Z(e.thumbStyle)},[e.showMarker?(u(),d("div",xd,[Sd,c("span",$d,R(e.markerText),1)])):h("",!0)],4)],544)],42,_d)}var $o=S(So,[["render",Td]]);So.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};const To=E({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:o}=N(e);return{isChecked:w({get:()=>o.value,set:r=>{t("update:modelValue",r)}})}}}),Vd={class:"flex cursor-pointer items-center gap-x-3"},Id={key:0},Bd={class:"text-sm text-gray-400"};function Pd(e,t,o,n,r,s){return u(),d("label",Vd,[ee(c("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),class:"hidden",type:"checkbox"},null,512),[[Ye,e.isChecked]]),c("div",{class:D(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[c("div",{class:D(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(u(),d("div",Id,[c("div",null,R(e.title),1),c("div",Bd,R(e.description),1)])):h("",!0)])}var Vo=S(To,[["render",Pd]]);To.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};const Io=E({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const o=f(),n=f([]),r=a=>{var l;(l=n.value)==null||l.push(a)};return X(()=>{const a=n.value.find(l=>l.dataset.value===e.modelValue);a&&(console.log(a),a.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:a=>{t("update:modelValue",a)},root:o,registerTab:r}}}),Rd={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},Ed=["data-value"],Md=["onClick"],jd=c("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function Ld(e,t,o,n,r,s){return u(),d("div",Rd,[(u(!0),d(P,null,A(e.tabs,a=>(u(),d("div",{key:a.value,ref_for:!0,ref:e.registerTab,"data-value":a.value,class:D(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[a.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[O(e.$slots,"tab",{tab:a,select:()=>e.select(a.value)},()=>[c("div",{class:"px-4 py-3",onClick:()=>e.select(a.value)},R(a.title),9,Md)])],10,Ed))),128)),jd],512)}var Dt=S(Io,[["render",Ld]]);Io.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};const Od=E({name:"RobustTabsSwitch",props:{tabs:{type:Array,required:!0},rounded:{type:Boolean,default:!1},modelValue:{required:!0}},setup(e,{emit:t}){const o=f([]),n=N(e),r=C=>{var _;(_=o.value)==null||_.push(C)},s=f(0),a=f(0),l=f(!1),i=f();f();const m=new ResizeObserver(()=>{const C=y();C&&p(C)});X(()=>{i.value&&m.observe(i.value),ue(()=>{l.value=!0})}),Ie(()=>{i.value&&m.unobserve(i.value)});const y=()=>o.value.find(C=>C.dataset.value===n.modelValue.value),p=C=>{var B;const _=(B=i.value)==null?void 0:B.getBoundingClientRect();if(!_)throw new Error("no container box specified");const k=C.getBoundingClientRect(),z={x:k.x-_.x,y:k.y-_.y};s.value=z.x,a.value=k.width},g=(C,_)=>{t("update:modelValue",_),C.target&&C.target instanceof HTMLElement&&p(C.target)},b=y();return b&&p(b),{root:i,select:g,registerTab:r,showBackground:l,backgroundXOffset:s,backgroundWidth:a}}});Od.__docgenInfo={displayName:"RobustTabsSwitch",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!0}]};const Bo=E({name:"RobustTextarea",inheritAttrs:!1,components:{RobustInputWrapper:De,PhWarningCircle:nn},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const n=f(),r=o,s=w({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function a(){var i;(i=n.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:s,inputAttrs:r,props:e,inputRef:n,focus:a,clear:l}}}),Fd=["id","disabled","readonly"],Ad={key:1,class:"text-red-400"};function Nd(e,t,o,n,r,s){const a=v("PhWarningCircle"),l=v("RobustInputWrapper");return u(),L(l,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,"box-class":[e.condensed?"pt-1":"pt-2",e.$props.class],readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:K(i=>[e.$slots.prefix?(u(),d("div",{key:0,class:D(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[O(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),ee(c("textarea",de({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=m=>e.inputFieldValue=m),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Fd),[[Ee,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),d("div",{key:1,class:D(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),d("div",Ad,[x(a,{size:"20",class:"block"})])):O(e.$slots,"suffix",{key:0,tag:"div"})],2)):h("",!0)]),_:3},8,["title","hint","error","box-class","readonly","disabled","condensed"])}var Po=S(Bo,[["render",Nd]]);Bo.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const Ro=E({name:"RobustWidgetWrapper",components:{RobustPopper:Pe,PhDotsThreeVertical:Wa},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const o=f(!1),n=f(),r=f();Ke(r,a=>{o.value&&(n.value.contains(a.target)&&(a.stopPropagation(),a.preventDefault()),s(),t("blur"))});const s=()=>{o.value===!0&&(o.value=!1,t("blur"))};return{open:o,closeDropdown:s,popperRef:r,contextButtonRef:n}}}),zd={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Hd(e,t,o,n,r,s){const a=v("PhDotsThreeVertical"),l=v("RobustPopper");return u(),d(P,null,[c("div",de(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[ee(c("div",{class:D(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[st,e.stripe]]),e.title||e.$slots.title?(u(),d("div",zd,[e.$slots.title?O(e.$slots,"title",{key:0,title:e.title}):(u(),d(P,{key:1},[ke(R(e.title),1)],64)),e.$slots.options?(u(),d("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=i=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[x(a,{size:"24",weight:"bold"})],512)):h("",!0)])):h("",!0),e.$slots.default?(u(),d("section",{key:1,class:D(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[O(e.$slots,"default")],2)):h("",!0),O(e.$slots,"raw")],16),x(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=i=>e.open=i),options:{placement:"bottom-end"}},{default:K(()=>[O(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var Eo=S(Ro,[["render",Hd]]);Ro.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};const Mo=E({name:"RobustDaterangePicker",components:{RobustCalendar:Xe,RobustPopper:Pe,RobustInputWrapper:De,RobustButton:ve,RobustCheckbox:Qe,RobustDatePicker:Fe,PhCaretDown:Me,PhCalendar:ln,PhArrowLeft:Ua,PhArrowRight:Ga,PhClockCounterClockwise:qa},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:o}){const{dateRange:n,compareDateRange:r,perspectiveDate:s,comparePerspectiveDate:a}=N(e),l=f(),i=f(!1),m=f(),y=f(),p=f(s.value),g=f(a.value),b=f(!1),C=f(),_=f(),k=f(!0),z=f(),B=w(()=>U.value.length>1),q=(j,H)=>H?fe(j,"dd.MM.yyyy HH:mm:ss"):fe(j,"dd.MM.yyyy"),te=w(()=>e.dateHistory||[]);let Y=f();const U=f(r.value),G=w({get(){return U.value},set(j){U.value=j,t("update:compareDate",j),t("blur")}}),ne=w({get:()=>G.value.length>1,set:j=>{M(j)}}),ce=w(()=>{if(!n.value)return"Select date";const j=n.value;try{return j.length>1?fe(j[0],"P")+" - "+fe(j[1],"P"):fe(j[0],"P")+" - "+fe(j[0],"P")}catch{return}});function ae(){i.value===!0&&(i.value=!1,b.value=!1,t("blur"))}const M=j=>{j?C.value=j:(t("update:comparison-date",void 0),G.value=void 0)};Ke(z,j=>{i.value&&(m.value.wrapperRef.contains(j.target)&&(j.stopPropagation(),j.preventDefault()),ae(),t("blur"))});const J=()=>{Y.value=n.value,i.value=!i.value},re=()=>{C.value=!1},se=async()=>{t("update:dateRange",Y.value),t("change",Y.value),t("blur"),i.value=!1},Ce=j=>{k.value=j};return oe(p,j=>{t("update:perspectiveDate",j)}),oe(g,j=>{t("update:comparePerspectiveDate",j)}),{displayCompare:C,computedCompare:G,attrs:o,props:e,refSelectContainer:l,pickedCompare:B,open:i,displayDate:ce,saveTime:se,tmpDateRange:Y,dateConfig:_,closeDropdown:ae,showCompare:M,comparePerspectiveOf:g,compareWith:ne,storeHistory:k,handleClick:J,goBack:re,mainCalendar:y,perspectiveOf:p,enabledHistory:b,dateHistory:te,formatDate:q,enableStoringHistory:Ce,inputWrapperRef:m,popperRef:z}},methods:{}}),Wd=["id"],Ud={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Gd=c("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},"Date range",-1),qd={key:0,class:"flex flex-col items-start gap-y-3"},Yd=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Kd={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},Jd={key:1},Xd={key:0,class:"flex flex-col items-start"},Qd=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Zd={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},ec=ke("Apply time range");function tc(e,t,o,n,r,s){var C,_;const a=v("PhCalendar"),l=v("PhCaretDown"),i=v("RobustInputWrapper"),m=v("RobustDatePicker"),y=v("RobustCheckbox"),p=v("RobustCalendar"),g=v("RobustButton"),b=v("RobustPopper");return u(),d(P,null,[x(i,{title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ge(e.handleClick,["stop"])},{default:K(k=>[c("div",{class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[x(a,{size:"20"})],2),c("div",de({id:k.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Ud,R(e.displayDate),1)],16,Wd),c("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[x(l,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((C=e.inputWrapperRef)==null?void 0:C.wrapperRef)?(u(),L(b,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(_=e.inputWrapperRef)==null?void 0:_.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=k=>e.open=k),options:{placement:"bottom-start"}},{default:K(()=>[Gd,c("div",null,[x(p,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=k=>e.tmpDateRange=k),"onClick:relativeDate":t[3]||(t[3]=k=>e.enableStoringHistory(!1))},{default:K(()=>[e.enablePerspective?(u(),d("div",qd,[c("div",null,[Yd,x(m,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=k=>e.perspectiveOf=k)},null,8,["modelValue"])]),e.enableComparison?(u(),L(y,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=k=>e.compareWith=k),title:"Compare with"},null,8,["modelValue"])):h("",!0)])):h("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(u(),d("h3",Kd,"Comparison date range")):h("",!0),e.enableComparison?(u(),d("div",Jd,[x(p,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=k=>e.computedCompare=k),"onClick:relativeDate":t[6]||(t[6]=k=>e.enableStoringHistory(!1))},{default:K(()=>[e.enablePerspective?(u(),d("div",Xd,[Qd,x(m,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=k=>e.comparePerspectiveOf=k)},null,8,["modelValue"])])):h("",!0)]),_:1},8,["modelValue"])])):h("",!0),c("div",Zd,[x(g,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:K(()=>[ec]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):h("",!0)],64)}var jo=S(Mo,[["render",tc]]);Mo.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var nc={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
import { computed, ref } from 'vue'

export default {
  title: 'Ui/DaterangePicker',
  component: DaterangePicker,
  argTypes: {
    condensed: { control: { type: 'boolean' } },
    enableComparison: { control: { type: 'boolean' } },
    enablePerspective: { control: { type: 'boolean' } },
    perspectiveDate: { control: { type: 'date' } },
    comparePerspectiveDate: { control: { type: 'date' } },
    outline: { control: { type: 'boolean' } },
  },
}

const Template = (args) => ({
  template:
    '<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',
  components: { DaterangePicker },
  setup() {
    return { args }
  },
})

const date = [new Date(), new Date()]
const dateRange = ref(date)
const compareDateRange = ref(date)

export const Default = Template.bind({})
Default.args = {
  dateRange: dateRange,
  'onUpdate:dateRange': (val) => {
    dateRange.value = val
  },
  compareDateRange: compareDateRange,
  'onUpdate:compareDateRange': (val) => {
    compareDateRange.value = val
  },
}
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:jo,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const oc=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:jo},setup(){return{args:e}}}),Lo=[new Date,new Date],Qt=f(Lo),Zt=f(Lo),Oo=oc.bind({});Oo.args={dateRange:Qt,"onUpdate:dateRange":e=>{Qt.value=e},compareDateRange:Zt,"onUpdate:compareDateRange":e=>{Zt.value=e}};const ac=["Default"];var rc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nc,Default:Oo,__namedExportsOrder:ac}),sc={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
import { ref } from 'vue'

export default {
  title: 'Ui/Draggable',
  component: Draggable,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'warn', 'muted'] },
    },
    loading: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    modelValue: {
      control: { type: 'array' },
      default: [
        {
          name: 'test',
          value: 1,
        },
        {
          name: 'john',
          value: 'doe',
        },
      ],
    },
  },
}

const Template = (args) => ({
  template: \`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>\`,
  components: { Draggable },
  setup() {
    let list = ref([
      {
        name: 'test',
        value: 1,
      },
      {
        name: 'john',
        value: 'doe',
      },
    ])
    return { args, list }
  },
})

export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:yo,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const lc=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:yo},setup(){let t=f([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),ic=lc.bind({}),uc=["Default"];var dc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sc,Default:ic,__namedExportsOrder:uc}),cc={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
import { PhWarning } from '@dnlsndr/vue-phosphor-icons'
import RobustButton from "../Button/Button.vue"
import RobustImg from "../Img/Img.ts"

export default {
  title: 'Ui/EmptyState',
  component: EmptyState,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<EmptyState v-bind="args" />\`,
  components: { EmptyState },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
}

const CallToActionTemplate = (args) => ({
  template: \`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>\`,
  components: { EmptyState, RobustButton },
  setup() {
    return { args }
  },
})

export const CallToAction = CallToActionTemplate.bind()

CallToAction.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
}

const CustomIconTemplate = (args) => ({
  template: \`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>\`,
  components: { EmptyState, RobustButton, RobustImg },
  setup() {
    return { args }
  },
})

export const CustomIcon = CustomIconTemplate.bind()

CustomIcon.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
}
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:et,argTypes:{title:{control:{type:"text",default:"Title"}}}};const pc=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:et},setup(){return{args:e}}}),Fo=pc.bind();Fo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const mc=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:et,RobustButton:ve},setup(){return{args:e}}}),Ao=mc.bind();Ao.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const fc=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:et,RobustButton:ve,RobustImg:Ae},setup(){return{args:e}}}),No=fc.bind();No.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const gc=["Default","CallToAction","CustomIcon"];var yc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cc,Default:Fo,CallToAction:Ao,CustomIcon:No,__namedExportsOrder:gc}),bc={title:"Ui/Grid",component:ho,parameters:{storySource:{source:`import Grid from './Grid.vue'
import { ref, defineComponent, markRaw, watch } from 'vue'
export default {
  title: 'Ui/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    locked: {
      control: {
        type: 'boolean',
        default: false,
      },
    },
  },
}

let component = defineComponent({
  props: {
    options: {
      type: Object,
    },
  },
  render(h) {
    return 'hi' + JSON.stringify(this.options)
  },
})

const DefaultTemplate = (args) => ({
  template: '<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',
  components: { Grid },
  setup() {
    let widgets = ref([
      {
        id: 'test',
        component: markRaw(component),
        options: {
          key: 'one',
        },
        gridstack: {
          x: 1,
          y: 0,
          w: 3,
          h: 1,
        },
      },
      {
        id: 'test1',
        component: markRaw(component),
        options: {
          key: 'one',
        },
        gridstack: {
          x: 4,
          y: 4,
          w: 2,
          h: 4,
        },
      },
    ])

    watch(widgets, () => {
      console.log('widgets update', widgets)
    })

    return {
      args,
      widgets,
    }
  },
})

export const Default = DefaultTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let en=E({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const vc=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:ho},setup(){let t=f([{id:"test",component:Mt(en),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:Mt(en),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return oe(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),hc=vc.bind(),_c=["Default"];var kc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bc,Default:hc,__namedExportsOrder:_c}),wc={parameters:{storySource:{source:`import Img from './Img'

export default {
  title: 'Ui/Img',
  component: Img,
  argTypes: {
    onImg: { action: 'Img' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',
  components: { Img },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Img title',
}

const BrokenTemplate = (args) => ({
  template:
    '<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',
  components: { Img },
  setup() {
    return { args }
  },
})

export const Broken = BrokenTemplate.bind()

Broken.args = {
  title: 'Img title',
}

const FallbackTemplate = (args) => ({
  template:
    '<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',
  components: { Img },
  setup() {
    return { args }
  },
})

export const Fallback = FallbackTemplate.bind()

Fallback.args = {
  title: 'Img title',
}
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Ae,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Dc=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Ae},setup(){return{args:e}}}),zo=Dc.bind();zo.args={title:"Img title"};const Cc=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Ae},setup(){return{args:e}}}),Ho=Cc.bind();Ho.args={title:"Img title"};const xc=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Ae},setup(){return{args:e}}}),Wo=xc.bind();Wo.args={title:"Img title"};const Sc=["Default","Broken","Fallback"];var $c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wc,Default:zo,Broken:Ho,Fallback:Wo,__namedExportsOrder:Sc}),Tc={parameters:{storySource:{source:`import Input from './Input.vue'

export default {
  title: 'Ui/Input',
  component: Input,
  argTypes: {
    onInput: { action: 'input' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Input class="mb-4" :cthulu="true" v-bind="args"/>',
  components: { Input },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  modelValue: 'Input text',
  title: 'Input title',
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
}
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:vt,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ct=e=>({template:'<Input class="mb-4" :cthulu="true" v-bind="args"/>',components:{Input:vt},setup(){return{args:e}}}),Uo=Ct.bind();Uo.args={modelValue:"Input text",title:"Input title"};const Go=Ct.bind();Go.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const qo=Ct.bind();qo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Vc=["Default","Hint","ErrorHint"];var Ic=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tc,Default:Uo,Hint:Go,ErrorHint:qo,__namedExportsOrder:Vc}),Bc={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

export default {
  title: 'Ui/InputWrapper',
  component: InputWrapper,
  argTypes: {
    condensed: { control: { type: 'boolean' } },
    outline: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<InputWrapper v-bind="args"></InputWrapper>\`,
  components: { InputWrapper },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
  outline: false,
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  outline: false,
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',

  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
}
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:De,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const xt=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:De},setup(){return{args:e}}}),Yo=xt.bind();Yo.args={title:"Input title",outline:!1};const Ko=xt.bind();Ko.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Jo=xt.bind();Jo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Pc=["Default","Hint","ErrorHint"];var Rc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bc,Default:Yo,Hint:Ko,ErrorHint:Jo,__namedExportsOrder:Pc}),Ec={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

export default {
  title: 'Ui/LinearProgress',
  component: LinearProgress,
  argTypes: {
    progress: { control: { type: 'number' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<LinearProgress v-bind="args" />\`,
  components: { LinearProgress },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:ko,argTypes:{progress:{control:{type:"number"}}}};const Mc=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:ko},setup(){return{args:e}}}),jc=Mc.bind(),Lc=["Default"];var Oc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ec,Default:jc,__namedExportsOrder:Lc}),Fc={parameters:{storySource:{source:`import { ref } from 'vue'
import Modal from './Modal.vue'
import { RobustButton } from '..'

export default {
  title: 'Ui/Modal',
  component: Modal,
  argTypes: {
    onModal: { action: 'Modal' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

let opened = ref(true)
Default.args = {
  title: 'Modal title',
  opened: opened,
  "onUpdate:opened": (value) => {
    console.log("opeone");
    opened.value = value
  }
}
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}}}}},title:"Ui/Modal",component:kt,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ac=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',components:{Modal:kt,RobustButton:ve},setup(){return{args:e}}}),Xo=Ac.bind();let tn=f(!0);Xo.args={title:"Modal title",opened:tn,"onUpdate:opened":e=>{console.log("opeone"),tn.value=e}};const Nc=["Default"];var zc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fc,Default:Xo,__namedExportsOrder:Nc}),Hc={parameters:{storySource:{source:`import Notice from './Notice.vue'
import { PhWarning } from '@dnlsndr/vue-phosphor-icons'

export default {
  title: 'Ui/Notice',
  component: Notice,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<Notice v-bind="args" >This is a notice</Notice>\`,
  components: { Notice },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Do,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Wc=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Do},setup(){return{args:e}}}),Uc=Wc.bind(),Gc=["Default"];var qc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Hc,Default:Uc,__namedExportsOrder:Gc}),Yc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
import Popper from './Popper'

export default {
  title: 'Ui/Popper',
  component: Popper,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Popper v-bind="args" v-model="value">ldsajfk</Popper>',
  components: { Popper },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Popper title',
  description: 'Popper description text to be placed here',
}
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:Pe,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Kc=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:Pe},setup(){const t=f(!1);return{args:e,value:t}}}),Qo=Kc.bind({});Qo.args={title:"Popper title",description:"Popper description text to be placed here"};const Jc=["Default"];var Xc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yc,Default:Qo,__namedExportsOrder:Jc}),Qc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
import Radio from './Radio.vue'

export default {
  title: 'Ui/Radio',
  component: Radio,
  argTypes: {
    title: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    \`,
  components: { Radio },
  setup() {
    const value = ref('test')
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Radio title',
}
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:xo,argTypes:{title:{control:{type:"text"}}}};const Zc=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:xo},setup(){const t=f("test");return{args:e,value:t}}}),Zo=Zc.bind({});Zo.args={title:"Radio title"};const ep=["Default"];var tp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qc,Default:Zo,__namedExportsOrder:ep});const np=E({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});np.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var op={parameters:{storySource:{source:`import Select from './Select.vue'
import SelectOption from './SelectOption.vue'
import { ref } from 'vue'
export default {
  title: 'Ui/Select',
  component: Select,
  argTypes: {
    onInput: { action: 'input' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',
  components: { Select },
  setup() {
    let value = ref(undefined)

    let options = ref([
      {
        title: 'Item 1',
        value: true,
      },
      {
        title: 'Item 2',
        value: false,
      },
      {
        title: 'Item 3',
        value: 'test',
      },
      {
        title: 'Hello',
        value: 12,
      },
      {
        title: 'Bye',
        value: 0,
      },
    ])

    return {
      value,
      options,
      args,
    }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Input title',
  hint: 'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  error:
    'This is an input error. It tells the user, that there is something wrong with the current input state',
}


const OptionsTemplate = (args) => ({
  template:
    \`<Select v-bind="args" v-model="value">
      <SelectOption value="test" identifier="hello">Hello</SelectOption>
    </Select>\`,
  components: { Select, SelectOption },
  setup() {
    let value = ref(undefined)

    let options = ref([
      {
        title: 'Item 1',
        value: true,
      },
      {
        title: 'Item 2',
        value: false,
      },
      {
        title: 'Item 3',
        value: 'test',
      },
      {
        title: 'Hello',
        value: 12,
      },
      {
        title: 'Bye',
        value: 0,
      },
    ])

    return {
      value,
      options,
      args,
    }
  },
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:Ze,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const St=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Ze},setup(){let t=f(void 0),o=f([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:o,args:e}}}),ea=St.bind();ea.args={title:"Input title"};const ta=St.bind();ta.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const na=St.bind();na.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const ap=["Default","Hint","ErrorHint"];var rp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:op,Default:ea,Hint:ta,ErrorHint:na,__namedExportsOrder:ap}),sp={parameters:{storySource:{source:`import Slider from './Slider.vue'
import { PhWarning } from '@dnlsndr/vue-phosphor-icons'

export default {
  title: 'Ui/Slider',
  component: Slider,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<Slider v-bind="args" />\`,
  components: { Slider },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
}
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:$o,argTypes:{title:{control:{type:"text",default:"Title"}}}};const lp=e=>({template:'<Slider v-bind="args" />',components:{Slider:$o},setup(){return{args:e}}}),oa=lp.bind();oa.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const ip=["Default"];var up=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sp,Default:oa,__namedExportsOrder:ip}),dp={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

export default {
  title: 'Ui/Spinner',
  component: Spinner,
  argTypes: {},
}

const DefaultTemplate = (args) => ({
  template: '<Spinner />',
  components: { Spinner },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Je,argTypes:{}};const cp=e=>({template:"<Spinner />",components:{Spinner:Je},setup(){return{args:e}}}),pp=cp.bind(),mp=["Default"];var fp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dp,Default:pp,__namedExportsOrder:mp}),gp={parameters:{storySource:{source:`import { computed, ref } from 'vue'
import Switch from './Switch.vue'

export default {
  title: 'Ui/Switch',
  component: Switch,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Switch v-bind="args" v-model="value"></Switch>',
  components: { Switch },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'Switch title',
  description: 'Switch description text to be placed here',
}
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:Vo,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const yp=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:Vo},setup(){const t=f(!1);return{args:e,value:t}}}),aa=yp.bind({});aa.args={title:"Switch title",description:"Switch description text to be placed here"};const bp=["Default"];var vp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gp,Default:aa,__namedExportsOrder:bp}),hp={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
import Tabs from './Tabs.vue'

export default {
  title: 'Ui/Tabs',
  component: Tabs,
  argTypes: {
    rounded: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Tabs v-bind="args" v-model="value"></Tabs>',
  components: { Tabs },
  setup() {
    const value = ref('item_1')
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  tabs: [
    {
      title: 'Item 1',
      value: 'item_1',
    },
    {
      title: 'Item 2',
      value: 'item_2',
    },
    {
      title: 'Super long label that migh overflow on mobile',
      value: 'item_3',
    },
  ],
}

const SlotTemplate = (args) => ({
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
  components: { Tabs },
  setup() {
    const value = ref('item_1')
    return { args, value }
  },
})

export const Slotted = SlotTemplate.bind()

Slotted.args = {
  tabs: [
    {
      title: 'Item 1',
      value: 'item_1',
    },
    {
      title: 'Item 2',
      value: 'item_2',
    },
    {
      title: 'Super long label that migh overflow on mobile',
      value: 'item_3',
    },
  ],
}
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:Dt,argTypes:{rounded:{control:{type:"boolean"}}}};const _p=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:Dt},setup(){const t=f("item_1");return{args:e,value:t}}}),ra=_p.bind();ra.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const kp=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:Dt},setup(){const t=f("item_1");return{args:e,value:t}}}),sa=kp.bind();sa.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const wp=["Default","Slotted"];var Dp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hp,Default:ra,Slotted:sa,__namedExportsOrder:wp}),Cp={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

export default {
  title: 'Ui/Textarea',
  component: Textarea,
  argTypes: {
    onTextarea: { action: 'textarea' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: '<Textarea v-bind="args"/>',
  components: { Textarea },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  modelValue: 'Textarea text',
  title: 'Textarea title',
}

export const Hint = DefaultTemplate.bind()

Hint.args = {
  title: 'Textarea title',
  hint: 'This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does',
}

export const ErrorHint = DefaultTemplate.bind()

ErrorHint.args = {
  title: 'Textarea title',
  hint: 'This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does',
  error:
    'This is an textarea error. It tells the user, that there is something wrong with the current textarea state',
}
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:Po,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const $t=e=>({template:'<Textarea v-bind="args"/>',components:{Textarea:Po},setup(){return{args:e}}}),la=$t.bind();la.args={modelValue:"Textarea text",title:"Textarea title"};const ia=$t.bind();ia.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const ua=$t.bind();ua.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const xp=["Default","Hint","ErrorHint"];var Sp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cp,Default:la,Hint:ia,ErrorHint:ua,__namedExportsOrder:xp}),$p={parameters:{storySource:{source:`import { computed, ref } from 'vue'
import WidgetWrapper from './WidgetWrapper.vue'

export default {
  title: 'Ui/WidgetWrapper',
  component: WidgetWrapper,
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>\`,
  components: { WidgetWrapper },
  setup() {
    const value = ref(false)
    return { args, value }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  title: 'WidgetWrapper title',
  description: 'WidgetWrapper description text to be placed here',
}
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:Eo,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Tp=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:Eo},setup(){const t=f(!1);return{args:e,value:t}}}),da=Tp.bind({});da.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Vp=["Default"];var Ip=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$p,Default:da,__namedExportsOrder:Vp});function ca(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Br,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":ds,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":ks,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Vs,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":al,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":wl,"/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js":Uu,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Ju,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":rc,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":dc,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":yc,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":kc,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":$c,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Ic,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Rc,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":Oc,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":zc,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":qc,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":Xc,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":tp,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":rp,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":up,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":fp,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":vp,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":Dp,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":Sp,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Ip}[e]}Object.assign(ca,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js":"./src/components/DataTable/DataTable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});function Bp(e){e(ca,{hot:!1},!1)}const Pp=[Za,er,tr,nr,or,ar,rr,sr,lr,ir,pr].filter(Boolean);Pp.forEach(e=>{Object.keys(e).forEach(t=>{const o=e[t];switch(t){case"args":case"argTypes":return Qa.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(n=>Xa(n,!1));case"loaders":return o.forEach(n=>Ja(n,!1));case"parameters":return jt(me({},o),!1);case"argTypesEnhancers":return o.forEach(n=>Ka(n));case"argsEnhancers":return o.forEach(n=>Ya(n));case"globals":case"globalTypes":{const n={};return n[t]=o,jt(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});Bp(ur);
//# sourceMappingURL=iframe.9209f2fc.js.map
