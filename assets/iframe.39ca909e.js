var So=Object.defineProperty,Do=Object.defineProperties;var $o=Object.getOwnPropertyDescriptors;var pt=Object.getOwnPropertySymbols;var _o=Object.prototype.hasOwnProperty,Co=Object.prototype.propertyIsEnumerable;var ct=(e,t,n)=>t in e?So(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qe=(e,t)=>{for(var n in t||(t={}))_o.call(t,n)&&ct(e,n,t[n]);if(pt)for(var n of pt(t))Co.call(t,n)&&ct(e,n,t[n]);return e},mt=(e,t)=>Do(e,$o(t));import{d as P,c as w,u as xo,a as f,b as c,o as d,r as u,t as z,e as G,w as Y,n as k,f as et,g as B,h as L,i as x,P as To,j as Bo,k as M,m as ue,l as Rt,p as ae,v as Po,q as V,s as de,x as je,y as Me,z as ft,A as Le,B as gt,C as Io,D as Vo,E as Ro,F as jo,G as Mo,H as le,I as $e,J,K as Ee,L as Ye,M as Ge,N as Lo,O as Eo,Q as Oo,R as Fo,S as No,T as Ao,U as Wo,V as Ho,W as zo,X as re,Y as H,Z as K,_ as Uo,$ as tt,a0 as jt,a1 as X,a2 as ie,a3 as Mt,a4 as nt,a5 as Oe,a6 as _e,a7 as De,a8 as vt,a9 as qo,aa as Fe,ab as Lt,ac as Te,ad as Yo,ae as Go,af as Be,ag as Ko,ah as Xo,ai as xe,aj as Jo,ak as Qo,al as Zo,am as er,an as Ke,ao as tr,ap as nr,aq as or,ar as rr,as as ar,at as yt,au as bt,av as sr,aw as lr,ax as ir,ay as ur,az as dr,aA as pr,aB as cr,aC as mr,aD as fr,aE as gr,aF as vr,aG as yr,aH as br,aI as hr,aJ as kr,aK as wr}from"./vendor.c5c07767.js";const Sr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};Sr();const Dr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var $r=Object.freeze(Object.defineProperty({__proto__:null,parameters:Dr},Symbol.toStringTag,{value:"Module"}));var j=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const ot=P({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=w(()=>.666*(e.size-2*e.safeMargin)),n=w(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:n}}}),ht=()=>{xo(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},kt=ot.setup;ot.setup=kt?(e,t)=>(ht(),kt(e,t)):ht;const Et=ot,_r=["width","height","viewBox"],Cr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function xr(e,t,n,o,s,r){return d(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Cr)],8,_r)}var Ne=j(Et,[["render",xr],["__scopeId","data-v-2e051f42"]]);Et.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var Tr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",danger:"bg-rose-500 active:bg-rose-600 text-gray-900/75 shadow ring-rose-500","danger-text":"hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500","danger-outline":"border border-rose-500 hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"};const Ot=P({name:"RobustButton",components:{RobustSpinner:Ne},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=u(!1),{loading:n,variant:o}=z(e);return{variantStyles:w(()=>Tr[o.value]),loading:n,displaySpinner:t}}}),Br={key:0,class:"mr-2"},Pr={class:"whitespace-no-wrap truncate"},Ir={key:1,class:"ml-2"};function Vr(e,t,n,o,s,r){const a=B("RobustSpinner");return d(),G(et(e.tag),{disabled:e.disabled,class:k(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:Y(()=>[c("div",{class:k(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(d(),f("div",Br,[L(e.$slots,"prefix",{tag:"div"})])):x("",!0),c("div",Pr,[L(e.$slots,"default")]),e.$slots.suffix?(d(),f("div",Ir,[L(e.$slots,"suffix",{tag:"div"})])):x("",!0)],2),e.loading?(d(),G(a,{key:0,size:20,stroke:2,class:"spinner absolute"})):x("",!0)]),_:3},8,["disabled","class"])}var ee=j(Ot,[["render",Vr]]);Ot.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Rr={parameters:{storySource:{source:`import Button from './Button.vue'
import { PhSmiley, PhPaperPlaneTilt } from "@dnlsndr/vue-phosphor-icons"
export default {
  title: 'Ui/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'warn', 'muted', 'transparent', 'danger', 'danger-text', 'danger-outline'],
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:ee,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent","danger","danger-text","danger-outline"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const jr=e=>({components:{Button:ee},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Mr=jr.bind({}),Lr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:ee,PhSmiley:To},setup(){return{args:e}}}),Er=Lr.bind(),Or=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:ee,PhPaperPlaneTilt:Bo},setup(){return{args:e}}}),Fr=Or.bind(),Nr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:ee},setup(){return{args:e}}}),Ar=Nr.bind(),Wr=["Default","Prefix","Suffix","Loading"];var Hr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr,Default:Mr,Prefix:Er,Suffix:Fr,Loading:Ar,__namedExportsOrder:Wr},Symbol.toStringTag,{value:"Module"}));let zr=0;const Ft=P({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},boxClass:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++zr).toString(),o=/^on[^a-z]/,s=p=>o.test(p);let r=w(()=>Object.fromEntries(Object.entries(t).filter(p=>s(p[0]))));const a=u();function l(){}function i(){}return{cuid:n,wrapperRef:a,blurred:l,focused:i,listeners:r}}}),Ur={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},qr={key:1,class:"block pt-1"},Yr={key:0,class:"select-none text-xs text-gray-400"},Gr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Kr(e,t,n,o,s,r){return d(),f("fieldset",{class:k([e.$props.class])},[e.title?(d(),f("legend",Ur,M(e.title),1)):x("",!0),c("div",ue(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",[e.$props.boxClass,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[L(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(d(),f("label",qr,[e.hint!==void 0?(d(),f("div",Yr,M(e.hint),1)):x("",!0),e.error!==void 0?(d(),f("div",Gr,M(e.error),1)):x("",!0)])):x("",!0)],2)}var be=j(Ft,[["render",Kr]]);Ft.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"boxClass",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Nt=P({name:"RobustInput",inheritAttrs:!1,components:{RobustInputWrapper:be,PhWarningCircle:Rt},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=u(),s=n,r=w({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function a(){var i;(i=o.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:r,inputAttrs:s,props:e,inputRef:o,focus:a,clear:l}}}),Xr=["id","disabled","readonly"],Jr={key:1,class:"text-red-400"};function Qr(e,t,n,o,s,r){const a=B("PhWarningCircle"),l=B("RobustInputWrapper");return d(),G(l,{title:e.title,hint:e.hint,error:e.error,class:k(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:Y(i=>[e.$slots.prefix?(d(),f("div",{key:0,class:k(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),ae(c("input",ue({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=p=>e.inputFieldValue=p),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-700",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Xr),[[Po,e.inputFieldValue]]),e.$slots.suffix||e.error?(d(),f("div",{key:1,class:k(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(d(),f("div",Jr,[V(a,{size:"20",class:"block"})])):L(e.$slots,"suffix",{key:0,tag:"div"})],2)):x("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var rt=j(Nt,[["render",Qr]]);Nt.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Zr=[{title:"today",preset:()=>{const e=de(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=de(je(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Me(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Me(new Date),ft(new Date)]},{title:"this_year",preset:()=>[Le(new Date),gt(new Date)]},{title:"this_year_so_far",preset:()=>[Le(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=Io(je(new Date,7));return[e,Vo(new Date(e))]}},{title:"last_month",preset:()=>{let e=Me(je(Me(new Date),1));return[e,ft(e)]}},{title:"last_year",preset:()=>{const e=Le(je(Le(new Date),1));return[e,gt(new Date(e))]}}],ea={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const At=P({name:"RobustCalendar",components:{RobustInput:rt,PhCaretLeft:Ro,PhCaretRight:jo},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:r}=z(e),a=u(),l=u(),i=u(),p=u(),g=u(),m=Array.isArray(r.value)?u(new Date):u(new Date(r.value)),y=u(),v=u({}),$=Zr,h=w(()=>ea[e.variant]),b=w(()=>{const C=new Date(m.value);return Mo(C)}),F=w(()=>{try{return le(m.value,"MMM")}catch{return}}),T=w(()=>{try{return le(m.value,"yyyy")}catch{return}}),A=w(()=>{const C=new Date(m.value);C.setDate(1);const D=C.getDay();return(D===0?7:D)-1}),Q=w(()=>new Date(m.value).getMonth()),W=w(()=>new Date(m.value).getFullYear()),U=()=>{if(console.log("applying time"),a.value!=""&&!Ee(new Date(a.value))&&(i.value="Please enter a valid date."),l.value!=""&&!Ee(new Date(l.value))&&(p.value="Please enter a valid date."),Ee(new Date(a.value))&&Ee(new Date(l.value))){i.value="",p.value="";const C=[new Date(a.value),new Date(l.value)];t("update:modelValue",C)}},N=(C,D)=>{const O=te(C,D);return O<0?1:O>0?-1:0},te=(C,D)=>{const O=Date.UTC(D.getFullYear(),D.getMonth(),D.getDate()),se=Date.UTC(C.getFullYear(),C.getMonth(),C.getDate());return(O-se)/864e5},ce=C=>{if(!Array.isArray(r.value)||r.value.length<2||!N(...r.value))return!1;const D=new Date;D.setDate(C),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear());const O=Ye(r.value);return!N(D,O)},ne=C=>{if(!Array.isArray(r.value)||r.value.length<2||!N(...r.value))return!1;const D=new Date;D.setDate(C),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear());const O=Ge(r.value);return!N(D,O)},Z=C=>{if(!Array.isArray(r.value)||r.value.length<2)return!1;const D=new Date;D.setDate(C),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear());const O=Ye(r.value),se=Ge(r.value);return N(D,se)===-1&&N(D,O)===1},me=C=>{const D=new Date;if(D.setDate(C),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear()),Array.isArray(r.value)){const O=r.value.map(se=>new Date(se));for(let se=0;se<O.length;se++)if(!N(O[se],D))return!0}else if(!N(new Date(y.value),D))return!0};function fe(C){t("update:modelValue",C),m.value=C[1]}function ge(){m.value=Lo(m.value,1)}function ke(){m.value=Eo(m.value,1)}function I(C){m.value=Oo(m.value,C)}function E(){m.value=Fo(m.value,1)}function _(){m.value=No(m.value,1)}function Re(C){m.value=Ao(m.value,C)}const we=C=>{const D=new Date(m.value).setDate(C);return!(!s.value&&Wo(g.value,D)||!o.value&&Ho(g.value,D)>0||!n.value&&zo(D))},ve=C=>{if(!we(C))return;const D=new Date;if(D.setDate(C),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear()),m.value=D,Array.isArray(r.value)){i.value="",p.value="";let O=[];r.value.length>=2?(O.push(new Date(m.value)),l.value=""):(O=r.value,O.push(new Date(m.value)),O.length>1&&(O=[de(Ye(O),{hours:0,minutes:0,seconds:0}),de(Ge(O),{hours:23,minutes:59,seconds:59})],l.value=O[1].toLocaleDateString())),a.value=O[0].toLocaleDateString(),t("update:modelValue",O)}else y.value=new Date(m.value),t("update:modelValue",m.value)},S=()=>{m.value=new Date(new Date().setHours(12))};$e(r,C=>{const D=C[0]||void 0,O=C[1]||void 0;D?a.value=D.toLocaleDateString():a.value="",O?l.value=O.toLocaleDateString():l.value=""}),J(()=>{if(Array.isArray(r.value)){m.value=new Date(r.value[1]||new Date),y.value=m.value;const C=r.value[0]||void 0,D=r.value[1]||void 0;C?a.value=C.toLocaleDateString():a.value="",D?l.value=D.toLocaleDateString():l.value=""}else m.value=new Date(r.value||new Date),y.value=m.value});const q=w(()=>{const C=[];for(let D=1900;D<=2100;D++)C.push(D);return C}),oe=u(!1);function Ce(){oe.value=!0}function ze(){oe.value=!1}const Ue=u(!1);function ko(){Ue.value=!0,re(()=>{v.value[W.value].scrollIntoView({block:"start",behavior:"auto"})})}function wo(){Ue.value=!1}return{months:w(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:a,to:l,errorFrom:i,errorTo:p,showMonthSelectionActive:oe,showYearSelectionActive:Ue,now:g,cursor:m,selectedDate:y,showMonthSelection:Ce,showYearSelection:ko,hideMonthSelection:ze,hideYearSelection:wo,daysInMonth:b,monthHeading:F,yearHeading:T,refYearEntry:v,setYear:I,setMonth:Re,firstWeekday:A,activeMonth:Q,activeYear:W,compareDates:N,applyTime:U,dayDiff:te,isFirst:ce,isLast:ne,isBetweenRange:Z,isSelectedDay:me,addYear:ge,subYear:ke,addMonth:E,subMonth:_,dayAllowed:we,daySelect:ve,reset:S,yearSelectionYears:q,quickActions:$,setQuickAction:fe,variantStyling:h}}}),ta={class:"relative flex w-max select-none"},na={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-700"},oa={class:"absolute inset-0 overflow-auto py-2"},ra=["onClick"],aa={class:"p-4 dark:border-gray-700"},sa={class:"mb-4 flex items-center text-center text-lg font-semibold"},la={class:"flex flex-1"},ia={class:"relative w-max"},ua={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},da=["onClick"],pa={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},ca=["data-year","onClick"],ma=Uo('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),fa=["disabled","onClick"],ga={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-700"},va=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),ya=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function ba(e,t,n,o,s,r){const a=B("PhCaretLeft"),l=B("PhCaretRight"),i=B("RobustInput");return d(),f("div",ta,[Array.isArray(e.modelValue)?(d(),f("div",na,[c("div",oa,[(d(!0),f(H,null,K(e.quickActions,p=>(d(),f("div",{key:p.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800",onClick:g=>e.setQuickAction(p.preset())},M(p.title),9,ra))),128))])])):x("",!0),c("section",aa,[c("div",sa,[c("div",la,[c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-800",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},M(e.monthHeading),1),c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-800",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},M(e.yearHeading),1)]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...p)=>e.subMonth&&e.subMonth(...p))},[V(a,{type:"chevron-left",size:"14",weight:"bold"})]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...p)=>e.addMonth&&e.addMonth(...p))},[V(l,{type:"chevron-right",size:"14",weight:"bold"})])]),c("div",ia,[e.showMonthSelectionActive?(d(),f("div",ua,[(d(!0),f(H,null,K(e.months,(p,g)=>(d(),f("div",{key:g,class:k(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===g?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-700"]]),onClick:()=>{e.setMonth(g),e.hideMonthSelection()}},M(p.title),11,da))),128))])):x("",!0),e.showYearSelectionActive?(d(),f("div",pa,[(d(!0),f(H,null,K(e.yearSelectionYears,p=>(d(),f("div",{ref_for:!0,ref:g=>e.refYearEntry[p]=g,key:p,class:k(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===p?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-700"]]),"data-year":p,onClick:()=>{e.setYear(p),e.hideYearSelection()}},M(p),11,ca))),128))])):x("",!0),c("div",{class:k(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ma,(d(!0),f(H,null,K(e.firstWeekday,p=>(d(),f("div",{key:p+"_offset"}))),128)),(d(!0),f(H,null,K(e.daysInMonth,p=>(d(),f("div",{key:p+"_day",class:k(["relative",[e.isBetweenRange(p)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(p),onClick:g=>e.daySelect(p)},[e.isLast(p)||e.isFirst(p)?(d(),f("div",{key:0,class:k(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(p)?"right-0 w-1/2":e.isLast(p)?"left-0 w-1/2":""]])},null,2)):x("",!0),c("div",{class:k(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(p)||e.isLast(p)||e.isFirst(p)||e.isSelectedDay(p)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-800"]])},M(p),3)],10,fa))),128))],2)])]),Array.isArray(e.modelValue)?(d(),f("div",ga,[va,V(i,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=p=>e.from=p),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),ya,V(i,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=p=>e.to=p),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),L(e.$slots,"default")])):x("",!0)])}var Ae=j(At,[["render",ba]]);At.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var ha={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ae,argTypes:{}};const Wt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ae},setup(){return{args:e}}}),wt=u(new Date),Ht=Wt.bind({});Ht.args={modelValue:wt,"onUpdate:modelValue":e=>{wt.value=e,console.log(e)}};const ka=[new Date,new Date],St=u(ka),zt=Wt.bind({});zt.args={modelValue:St,"onUpdate:modelValue":e=>{St.value=e,console.log(e)}};const wa=["Default","Range"];var Sa=Object.freeze(Object.defineProperty({__proto__:null,default:ha,Default:Ht,Range:zt,__namedExportsOrder:wa},Symbol.toStringTag,{value:"Module"}));const Ut=P({components:{PhCheck:tt},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=w({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(r){let a=e.modelValue;Array.isArray(a)?r?a.push(e.value):a.splice(a.indexOf(e.value),1):r?a=e.value:a=e.disabledValue,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),Da={class:"inline-block"},$a={class:"flex cursor-pointer items-start"},_a=["id"],Ca={key:0,class:"w-full select-none pt-px leading-4"},xa={key:1,class:"w-full select-none pt-px leading-4"};function Ta(e,t,n,o,s,r){const a=B("PhCheck");return d(),f("div",Da,[c("label",$a,[ae(c("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,_a),[[jt,e.isChecked]]),c("div",{class:k(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[V(a,{class:k([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(d(),f("div",Ca,M(e.title),1)):x("",!0),!e.title&&e.$slots.title?(d(),f("div",xa,[L(e.$slots,"title")])):x("",!0)])])}var We=j(Ut,[["render",Ta]]);Ut.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var Ba={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
  template: '<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:We,argTypes:{title:{control:{type:"text"}}}};const Pa=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',components:{Checkbox:We},setup(){return{value:u(!1),args:e}}}),qt=Pa.bind({});qt.args={title:"Checkbox title"};const Ia=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:We},setup(){return{value:u(!1),args:e}}}),Yt=Ia.bind({});Yt.args={title:"V-Slot Checkbox title"};const Va=["Default","SlottedTitle"];var Ra=Object.freeze(Object.defineProperty({__proto__:null,default:Ba,Default:qt,SlottedTitle:Yt,__namedExportsOrder:Va},Symbol.toStringTag,{value:"Module"}));const Gt=P({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),ja=["width","height","viewBox"],Ma=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function La(e,t,n,o,s,r){return d(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Ma)],8,ja)}var Kt=j(Gt,[["render",La]]);Gt.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Ea={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Kt,argTypes:{progress:{control:{type:"number"}}}};const Oa=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Kt},setup(){return{args:e}}}),Fa=Oa.bind(),Na=["Default"];var Aa=Object.freeze(Object.defineProperty({__proto__:null,default:Ea,Default:Fa,__namedExportsOrder:Na},Symbol.toStringTag,{value:"Module"}));function Se(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ha(e):/rgb/.test(e)?t=$t(e):typeof e=="string"?t=$t(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a:r}=t,{h:a,s:l,v:i}=za(t);return{r:n,g:o,b:s,a:r===void 0?1:r,h:a,s:l,v:i}}function Xt(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function Dt(e,t,n,o,s,r){const a=e==="l",l=t.createLinearGradient(0,0,a?n:0,a?0:o);l.addColorStop(.01,s),l.addColorStop(.99,r),t.fillStyle=l,t.fillRect(0,0,n,o)}function Wa({r:e,g:t,b:n},o){const s=a=>("0"+Number(a).toString(16)).slice(-2),r=`#${s(e)}${s(t)}${s(n)}`;return o?r.toUpperCase():r}function Ha(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function $t(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function za({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),r=o-s;let a=0;o===s?a=0:o===e?t>=n?a=60*(t-n)/r:a=60*(t-n)/r+360:o===t?a=60*(n-e)/r+120:o===n&&(a=60*(e-t)/r+240),a=Math.floor(a);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),i=parseFloat(o.toFixed(2));return{h:a,s:l,v:i}}const Jt=P({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=u({}),{size:o,hsv:s,color:r}=z(e),a=u(),l=u(),i=m=>{const y=m,v=o.value,$=y.getContext("2d");y.width=v,y.height=v,$.fillStyle=r.value,$.fillRect(0,0,v,v),Dt("l",$,v,v,"#FFFFFF","rgba(255,255,255,0)"),Dt("p",$,v,v,"rgba(0,0,0,0)","#000000")},p=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},g=m=>{const{top:y,left:v}=a.value.getBoundingClientRect(),$=m.target.getContext("2d"),h=F=>{let T=F.clientX-v,A=F.clientY-y;T<0&&(T=0),A<0&&(A=0),T>o.value&&(T=o.value),A>o.value&&(A=o.value),n.value={left:T-5+"px",top:A-5+"px"};const Q=$.getImageData(Math.min(T,o.value-1),Math.min(A,o.value-1),1,1),[W,U,N]=Q.data;t("selectSaturation",{r:W,g:U,b:N})};h(m);const b=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",b)};return J(()=>{i(l.value),p()}),{slideSaturationStyle:n,selectSaturation:g,renderSlide:p,renderColor:i,saturation:a,canvasSaturation:l,color:r,hsv:s,size:o}}}),Ua={ref:"canvasSaturation"};function qa(e,t,n,o,s,r){return d(),f("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ie((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[c("canvas",Ua,null,512),c("div",{style:X(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Ya=j(Jt,[["render",qa]]);Jt.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Qt=P({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=u({}),o=u(),{height:s,width:r,hsv:a}=z(e),l=u(),i=m=>{const y=m,v=r.value,$=s.value,h=y.getContext("2d");y.width=v,y.height=$;const b=h.createLinearGradient(0,0,0,$);b.addColorStop(0,"#FF0000"),b.addColorStop(.17*1,"#FF00FF"),b.addColorStop(.17*2,"#0000FF"),b.addColorStop(.17*3,"#00FFFF"),b.addColorStop(.17*4,"#00FF00"),b.addColorStop(.17*5,"#FFFF00"),b.addColorStop(1,"#FF0000"),h.fillStyle=b,h.fillRect(0,0,v,$)},p=()=>{n.value={top:(1-a.value.h/360)*s.value-2+"px"}},g=m=>{const{top:y}=l.value.getBoundingClientRect(),v=m.target.getContext("2d"),$=b=>{let F=b.clientY-y;F<0&&(F=0),F>s.value&&(F=s.value),n.value={top:F-2+"px"};const T=v.getImageData(0,Math.min(F,s.value-1),1,1),[A,Q,W]=T.data;t("selectHue",{r:A,g:Q,b:W})};$(m);const h=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",h)};return J(()=>{i(o.value),p()}),{slideHueStyle:n,hue:l,width:r,height:s,renderSlide:p,selectHue:g,renderColor:i,hsv:a,canvasHue:o}}}),Ga={ref:"canvasHue"};function Ka(e,t,n,o,s,r){return d(),f("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ie((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[c("canvas",Ga,null,512),c("div",{style:X(e.slideHueStyle),class:"slide"},null,4)],544)}var Xa=j(Qt,[["render",Ka]]);Qt.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Zt=P({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=u(5),{color:n,width:o,height:s}=z(e),r=u(),a=l=>{const i=l,p=o.value,g=s.value,m=t.value,y=Xt(m),v=i.getContext("2d");i.width=p,i.height=g,v.fillStyle=v.createPattern(y,"repeat"),v.fillRect(0,0,p,g),v.fillStyle=n.value,v.fillRect(0,0,p,g)};return J(()=>{Mt(()=>{a(r.value)}),a(r.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:r}}}),Ja={ref:"canvas"};function Qa(e,t,n,o,s,r){return d(),f("canvas",Ja,null,512)}var Za=j(Zt,[["render",Qa]]);Zt.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const en=P({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:w({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),es={class:"color-type"},ts={class:"name"};function ns(e,t,n,o,s,r){return d(),f("div",es,[c("span",ts,M(e.name),1),ae(c("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.modelColor=a),class:"value"},null,512),[[nt,e.modelColor]])])}var os=j(en,[["render",ns]]);en.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const tn=P({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=u(),o=u([]),s=u();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Xt(4).toDataURL(),Oe(()=>{r(n.value)});const r=l=>{if(!l)return;const i=o.value||[],p=i.indexOf(l);p>=0&&i.splice(p,1),i.length>=8&&(i.length=7),i.unshift(l),o.value=i||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(i))};return{setColorsHistory:r,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),rs={class:"colors"},as=["onClick"],ss={key:0,class:"colors history"},ls=["onClick"];function is(e,t,n,o,s,r){return d(),f("div",null,[c("ul",rs,[(d(!0),f(H,null,K(e.colorsDefault,a=>(d(),f("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[c("div",{style:X({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:X({background:a}),class:"color"},null,4)],8,as))),128))]),e.colorsHistory.length?(d(),f("ul",ss,[(d(!0),f(H,null,K(e.colorsHistory,a=>(d(),f("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[c("div",{style:X({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:X({background:a}),class:"color"},null,4)],8,ls))),128))])):x("",!0)])}var us=j(tn,[["render",is]]);tn.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const nn=P({name:"RobustColorPicker",components:{Saturation:Ya,Hue:Xa,Preview:Za,Box:os,Colors:us},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=u(15),o=u(152),s=u(20),r=u(""),a=u(""),l=u(0),i=u(0),p=u(0),g=u(1),m=u(0),y=u(0),v=u(0),$=u(),h=u(),{theme:b,color:F}=z(e),T=w(()=>b.value==="light"),A=w(()=>o.value+(n.value+8)*2),Q=w(()=>A.value-s.value),W=w(()=>({r:l.value,g:i.value,b:p.value,a:g.value})),U=w(()=>({h:m.value,s:y.value,v:v.value})),N=w(()=>`rgb(${l.value}, ${i.value}, ${p.value})`),te=w(()=>`${l.value}, ${i.value}, ${p.value}`),ce=w(()=>`rgb(${te.value})`),ne=w(()=>Wa(W.value,!0)),Z=()=>{a.value=ne.value,r.value=te.value};return J(()=>{const E=Se(F.value);l.value=E.r,i.value=E.g,p.value=E.b,g.value=E.a,m.value=E.h,y.value=E.s,v.value=E.v,Z()}),Mt(()=>{t("changeColor",{rgba:W.value,hsv:U.value,hex:a.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:r,modelHex:a,r:l,g:i,b:p,a:g,h:m,s:y,v,isLightTheme:T,totalWidth:A,previewWidth:Q,rgba:W,hsv:U,rgbString:N,rgbStringShort:te,rgbaString:ce,hexString:ne,setText:Z,selectSaturation:E=>{const _=Se(E);l.value=_.r,i.value=_.g,p.value=_.b,g.value=_.a,m.value=_.h,y.value=_.s,v.value=_.v,Z()},selectHue:E=>{const _=Se(E);l.value=_.r,i.value=_.g,p.value=_.b,g.value=_.a,m.value=_.h,y.value=_.s,v.value=_.v,Z(),re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide()})},inputHex:E=>{const _=Se(E);l.value=_.r,i.value=_.g,p.value=_.b,g.value=_.a,m.value=_.h,y.value=_.s,v.value=_.v,a.value=E,r.value=te.value,re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),$.value.renderSlide()})},inputRgba:E=>{const _=Se(E);l.value=_.r,i.value=_.g,p.value=_.b,g.value=_.a,m.value=_.h,y.value=_.s,v.value=_.v,a.value=ne.value,r.value=`${l.value}, ${i.value}, ${p.value}`,re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),$.value.renderSlide()})},selectColor:E=>{const _=Se(E);l.value=_.r,i.value=_.g,p.value=_.b,g.value=_.a,m.value=_.h,y.value=_.s,v.value=_.v,Z(),re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),$.value.renderSlide()})},saturation:h,hue:$,color:F,theme:b}}}),ds={class:"color-set"};function ps(e,t,n,o,s,r){const a=B("Saturation"),l=B("Hue"),i=B("Preview"),p=B("Box"),g=B("Colors");return d(),f("div",{class:k(["hu-color-picker rounded bg-gray-800 shadow",{light:e.isLightTheme}]),style:X({width:e.totalWidth+"px"})},[c("div",ds,[V(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),V(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),c("div",{style:X({height:e.previewHeight+"px"}),class:"color-show"},[V(i,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),V(p,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),V(p,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),V(g,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var on=j(nn,[["render",ps]]);nn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var cs={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:on,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ms=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:on},setup(){return{args:e}}}),fs=ms.bind(),gs=["Default"];var vs=Object.freeze(Object.defineProperty({__proto__:null,default:cs,Default:fs,__namedExportsOrder:gs},Symbol.toStringTag,{value:"Module"}));const rn=P({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-700 "}}}),ys={key:1,class:"flex items-center"},bs={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function hs(e,t,n,o,s,r){return e.$slots.default?(d(),f("div",ys,[c("div",{class:k(["flex-1 bg-gray-100 dark:bg-gray-700",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),c("div",bs,[L(e.$slots,"default")]),c("div",{class:k(["flex-1 bg-gray-100 dark:bg-gray-700",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(d(),f("div",{key:0,class:k(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var ks=j(rn,[["render",hs]]);rn.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-700 '"}}],slots:[{name:"default"}]};const an=P({name:"RobustContentBox",components:{RobustSeparator:ks},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),ws={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"},Ss={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},Ds={class:"flex"},$s={key:1,class:"text-gray-500 dark:text-gray-500"},_s={class:"p-4 sm:p-6"};function Cs(e,t,n,o,s,r){const a=B("RobustSeparator");return d(),f("section",ws,[e.description!==void 0||e.title!==void 0?(d(),f("header",Ss,[e.stripe?(d(),f("div",{key:0,class:k(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):x("",!0),c("h1",Ds,[c("div",{class:k(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[L(e.$slots,"title",{title:e.title},()=>[_e(M(e.title),1)])],2)]),e.description!==void 0?(d(),f("p",$s,[L(e.$slots,"description",{description:e.description},()=>[_e(M(e.description),1)])])):x("",!0)])):x("",!0),V(a),c("div",_s,[L(e.$slots,"default")])])}var Pe=j(an,[["render",Cs]]);an.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var xs={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Pe,argTypes:{title:{control:{type:"text"}}}};const Ts=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),Bs=Ts.bind(),Ps=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),sn=Ps.bind();sn.args={title:"Input title"};const Is=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),ln=Is.bind();ln.args={title:"Input title"};const Vs=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),un=Vs.bind();un.args={title:"Input title"};const Rs=["Default","Title","TitleProp","Stripe"];var js=Object.freeze(Object.defineProperty({__proto__:null,default:xs,Default:Bs,Title:sn,TitleProp:ln,Stripe:un,__namedExportsOrder:Rs},Symbol.toStringTag,{value:"Module"})),Ms=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],he=P({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=z(e),r=u();let a;const l=u(!1),i={strategy:"absolute",placement:"bottom-start",modifiers:[...Ms,...e.modifiers]};function p(){a==null||a.destroy(),l.value=!1}async function g(v){if(!v)return;const $=Object.assign({},i,e.options);!r.value||(a=qo(v,r.value,$),await a.update())}Oe(()=>{p()});async function m(){await g(s.value),r.value&&(a==null||a.update(),vt.fromTo(r.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function y(){r.value&&vt.fromTo(r.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{p()})}return J(()=>{if(!n.default)throw new Error("Popper does not have a child slot");$e(o,v=>{l.value=!0,re(async()=>{v?m():y()})})}),{appendTo:s,root:r,render:l}},render(){if(this.render)return De("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const dn=P({name:"RobustDatePicker",components:{RobustPopper:he,RobustCalendar:Ae,RobustInputWrapper:be,PhCaretDown:Fe,PhCalendar:Lt},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-700"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=u(),{modelValue:s}=z(e),r=u(!1),a=u(),l=u();Te(a,m=>{r.value&&(l.value.wrapperRef.contains(m.target)&&(m.stopPropagation(),m.preventDefault()),g(),t("blur"))});const i=w({get(){return(s==null?void 0:s.value)?s.value:new Date},set(m){r.value=!1,t("update:modelValue",m),t("change",m),t("blur")}}),p=w(()=>{if(!i.value)return"Select date";const m=i.value;try{return m?le(m,"P"):"Unknown"}catch{return}});function g(){r.value===!0&&(r.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:r,props:e,displayDate:p,computedValue:i,closeDropdown:g,popperRef:a,inputWrapperRef:l}},methods:{}}),Ls=["id"],Es={class:"min-w-0 truncate tabular-nums"};function Os(e,t,n,o,s,r){var m,y;const a=B("PhCalendar"),l=B("PhCaretDown"),i=B("RobustInputWrapper"),p=B("RobustCalendar"),g=B("RobustPopper");return d(),f(H,null,[V(i,{title:e.title,hint:e.hint,error:e.error,class:k([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ie(v=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:Y(v=>[c("div",{class:k(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[V(a,{size:"20"})],2),c("div",ue({id:v.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Es,M(e.displayDate),1)],16,Ls),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[V(l,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((m=e.inputWrapperRef)==null?void 0:m.wrapperRef)?(d(),G(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(y=e.inputWrapperRef)==null?void 0:y.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=v=>e.open=v),options:{placement:"bottom-start"}},{default:Y(()=>[V(p,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=v=>e.computedValue=v)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):x("",!0)],64)}var at=j(dn,[["render",Os]]);dn.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-700'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Fs={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:at,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ns=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:at},setup(){return{args:e}}}),As=new Date,_t=u(As),pn=Ns.bind({});pn.args={modelValue:_t,"onUpdate:modelValue":e=>{_t.value=e}};const Ws=["Default"];var Hs=Object.freeze(Object.defineProperty({__proto__:null,default:Fs,Default:pn,__namedExportsOrder:Ws},Symbol.toStringTag,{value:"Module"}));const zs=P({props:{colors:{type:Array,default:["#FCA5A5","#EF4444","#FDBA74","#F97316","#FCD34D","#F59E0B","#FDE047","#EAB308","#BEF264","#84CC16","#86EFAC","#22C55E","#6EE7B7","#10B981","#5EEAD4","#14B8A6","#67E8F9","#06B6D4","#7DD3FC","#0EA5E9","#93C5FD","#3B82F6","#A5B4FC","#6366F1","#C4B5FD","#8B5CF6","#D8B4FE","#A855F7","#F0ABFC","#D946EF","#F9A8D4","#EC4899","#FDA4AF","#F43F5E"]}},setup(e,{emit:t}){return{selectedColor:o=>{t("change",o)}}}});zs.__docgenInfo={exportName:"default",displayName:"ColorPalette",description:"",tags:{},props:[{name:"colors",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}}]};const cn=P({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),Us={class:"py-4 flex flex-col text-center items-center"},qs={class:"mb-4 text-gray-700 dark:text-gray-400"},Ys={class:"text-xl text-gray-700 dark:text-gray-400 mb-2"},Gs={class:"inline-block"};function Ks(e,t,n,o,s,r){return d(),f("div",Us,[c("div",qs,[e.$slots.icon?L(e.$slots,"icon",{key:1}):(d(),G(et(e.icon),{key:0,size:"40"}))]),c("div",Ys,M(e.title),1),c("div",{class:k(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},M(e.description),3),c("div",Gs,[L(e.$slots,"default")])])}var He=j(cn,[["render",Ks]]);cn.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};let R,Xe,Je,Qe,ye;const Ze=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},Xs=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},Ct=function(e,t){var n,o;if(Ze("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;R=this,Xe=ye.handleClass&&R.querySelector(`.${ye.handleClass}`),Je=Array.from((n=R==null?void 0:R.parentElement)==null?void 0:n.children).indexOf(R),(o=R==null?void 0:R.parentElement)==null||o.classList.add("drag")},xt=function(e){var n;if(!R)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=R==null?void 0:R.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=R==null?void 0:R.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(R.classList.add(ye.placeholderClass),Xs(R,t)?t.parentNode.insertBefore(R,t):t.parentNode.insertBefore(R,t.nextSibling))},Tt=(e,t)=>{var s,r;if(!R)return;Ze("end",t,e),Xe&&R.setAttribute("draggable","false"),R.classList.remove(ye.placeholderClass),(s=R==null?void 0:R.parentElement)==null||s.classList.remove("drag");const n=Je,o=Array.from((r=R==null?void 0:R.parentElement)==null?void 0:r.children).indexOf(R);Qe.splice(o,0,Qe.splice(n,1)[0]),Ze("change",t,{from:n,to:o}),setTimeout(()=>{R=null,Je=null,Xe=null},0)},Bt=(e,t)=>{const n=ye.handleClass&&e.querySelector(`.${ye.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>Ct.bind(e,o,t)(),e.ondragenter=xt,e.ondragend=o=>Tt.bind(e,o,t)(),e.ontouchstart=o=>Ct.bind(e,o,t)(),e.ontouchmove=xt,e.ontouchend=o=>Tt.bind(e,o,t)()};var Js={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}Qe=t.value&&t.value.value,ye={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Bt(s,n)),e.addEventListener("DOMNodeInserted",function(s){R||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Bt(s.target,n)})}};const mn=P({name:"RobustDraggable",directives:{draggable:Js},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e),o=w({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return re(()=>{console.log("alo")}),{list:o}}});function Qs(e,t,n,o,s,r){const a=Yo("draggable");return ae((d(),f("div",null,[(d(!0),f(H,null,K(e.list,l=>(d(),f("div",{key:l},[L(e.$slots,"element",{item:l})]))),128))])),[[a,{value:e.list}]])}var fn=j(mn,[["render",Qs]]);mn.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};const gn=P({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=z(e),o=w(()=>{var s,r,a,l,i;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(r=n.value)==null?void 0:r.gridstack.x,"gs-y":(a=n.value)==null?void 0:a.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(i=n.value)==null?void 0:i.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),Zs={class:"grid-stack-item-content bg-gray-300"};function el(e,t,n,o,s,r){return d(),f("div",ue({class:"grid-stack-item"},e.widgetAttributes),[c("div",Zs,[_e(M(e.widget.id)+" "+M(e.widget.gridstack)+" ",1),(d(),G(et(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var tl=j(gn,[["render",el],["__scopeId","data-v-7520d7ac"]]);gn.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const vn=P({name:"RobustGrid",components:{GridItem:tl},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=z(e),o,s=u();return J(()=>{console.log("mounting"),o=Go.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(r,a)=>{!n.value||([...n.value],Array.isArray(a)&&n.value.forEach(l=>{let i=a.find(p=>p.id===l.id);i&&(l.gridstack=mt(qe({},l.gridstack),{x:i.x,y:i.y,w:i.w,h:i.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),nl={ref:"gridContainer",class:"grid-stack bg-gray-200"};function ol(e,t,n,o,s,r){const a=B("GridItem");return d(),f("div",null,[_e(M(e.locked)+" ",1),c("section",nl,[(d(!0),f(H,null,K(e.widgets,l=>(d(),G(a,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var yn=j(vn,[["render",ol],["__scopeId","data-v-dc6f9d18"]]);vn.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Ie=P({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=u(!0),o=u(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=r=>{t("error",r),o.value=!0,n.value=!1},J(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?De("div",{class:"flex items-center justify-center"},De(Ne,{size:24,stroke:2})):this.error?this.fallbackSrc?De("img",{src:this.fallbackSrc}):De(Be,{size:20}):De("img",{src:this.src})}});const bn=P({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=z(e),o=w(()=>`height:${t.value}px`),s=w(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function rl(e,t,n,o,s,r){return d(),f("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:X([e.heightComputed])},[c("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:X([e.widthComputed])},null,4)],4)}var hn=j(bn,[["render",rl]]);bn.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};const kn=P({name:"RobustModal",inheritAttrs:!1,components:{PhX:Ko},props:{modalClass:{type:String},opened:{type:Boolean,default:!1},size:{type:String,default:"md"},slideOutLeft:{type:Boolean,default:!1},slideOutRight:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:n}=z(e);let o=Xo(document.body);const s=w(()=>e.slideOutLeft?"slide-left":e.slideOutRight?"slide-right":"fade"),r=w(()=>{let g="";switch(e.slideOutLeft?g+="absolute left-0 top-0 bottom-0 h-full min-h-0 w-full":e.slideOutRight?g+="absolute right-0 top-0 bottom-0 h-full min-h-0 w-full":g+="mx-auto h-full min-h-0",e.size){case"lg":{g+=" max-w-4xl";break}case"sm":{g+=" max-w-md";break}default:{g+=" max-w-lg";break}}return g}),a=w(()=>e.slideOutLeft||e.slideOutRight);$e(n,g=>{g?o.value=!0:o.value=!1});function l(g){g.key==="Escape"&&n.value===!0&&(g.stopPropagation(),g.preventDefault(),p())}J(()=>{window.addEventListener("keydown",l)}),Oe(()=>{window.removeEventListener("keydown",l)});async function i(){n.value=!0,t("update:opened",!0),t("open")}async function p(){n.value=!1,t("update:opened",!1),t("close")}return{open:i,close:p,opened:n,animationName:s,modalBoxClass:r,isSlideOut:a}}}),al={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},sl={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},ll={class:"leading-4"};function il(e,t,n,o,s,r){const a=B("PhX");return d(),G(Qo,{to:"body"},[V(Jo,ue(e.$attrs,{name:e.animationName}),{default:Y(()=>[e.opened?(d(),f("div",al,[c("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50",onClick:t[0]||(t[0]=ie((...l)=>e.close&&e.close(...l),["self"]))}),c("div",{class:k(["modal-box",e.modalBoxClass]),onKeydown:t[2]||(t[2]=xe((...l)=>e.close&&e.close(...l),["esc"]))},[c("div",{class:k(["relative flex max-h-full min-h-0 w-full flex-col bg-white shadow-xl dark:bg-gray-800",[e.modalClass,e.isSlideOut?"h-full":"rounded-md"]])},[e.$slots.title?(d(),f("div",sl,[c("div",ll,[L(e.$slots,"title",{},void 0,!0)]),c("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[V(a,{size:"20",class:"block"})])])):x("",!0),L(e.$slots,"default",{},void 0,!0)],2)],34)],512)):x("",!0)]),_:3},16,["name"])])}var Ve=j(kn,[["render",il],["__scopeId","data-v-c87c9c0a"]]);kn.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"slideOutLeft",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"slideOutRight",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};var ul={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const wn=P({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:w(()=>ul[e.variant])}}});function dl(e,t,n,o,s,r){return d(),f("div",{class:k([e.computedClass,"mb-4 border-l-4 p-4"])},[L(e.$slots,"default")],2)}var Sn=j(wn,[["render",dl]]);wn.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};let pl=0;const Dn=P({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++pl).toString(),s=w({get(){return e.modelValue===e.value},set(){let r=e.modelValue;r=e.value,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),cl={class:"inline-block"},ml=["id"],fl=["for"],gl={key:0,class:"w-full select-none leading-4"};function vl(e,t,n,o,s,r){return d(),f("div",cl,[ae(c("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),type:"radio",class:"hidden"},null,8,ml),[[Zo,e.isChecked]]),c("label",{for:`radio_${e.cuid}`,class:k([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[c("div",{class:k(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[c("div",{class:k([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(d(),f("div",gl,M(e.title),1)):x("",!0),c("div",null,[e.$slots.title?L(e.$slots,"title",{key:0}):x("",!0)])],10,fl)])}var $n=j(Dn,[["render",vl]]);Dn.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};const _n=P({name:"RobustSelect",components:{RobustPopper:he,RobustInputWrapper:be,PhCheck:tt,PhCaretDown:Fe},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=u(),s=u(),{options:r}=z(e),a=u(!1),l=u(),i=u(),p=u("");let g=u([]);async function m(T){e.searchFunction!==void 0&&(g.value=await e.searchFunction(T)),T===""?g.value=r.value:g.value=r.value.filter(A=>A.title.toLowerCase().substring(0,T.length)===T.toLowerCase())}er(p,async T=>{await m(T)},{debounce:150}),J(async()=>{await m("")});const y=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:T=>{T.state.styles.popper.width=`${Math.max(T.state.rects.reference.width,200)}px`},effect:T=>{T.state.elements.popper.style.width=`${T.state.elements.reference.getBoundingClientRect().width}px`}}],v=w(()=>e.options.find(T=>T.value===e.modelValue));function $(T){re(()=>{b()}),t("update:modelValue",T.value),t("change",T.value)}function h(){a.value=!0,re(()=>{s.value.focus()}),t("focus")}Te(l,T=>{a.value&&(i.value.wrapperRef.contains(T.target)&&(T.stopPropagation(),T.preventDefault()),F(),b(),t("blur"))});function b(){a.value=!1}function F(){p.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:b,open:a,props:e,openDropdown:h,inputWrapper:i,popperModifiers:y,activeItem:v,selectItem:$,computedOptions:g,resetFields:F,attrs:n,search:p,popperRef:l}}}),yl=["id"],bl={class:"min-w-0 select-none truncate"},hl={key:0,class:"max-h-72 overflow-auto"},kl=["onClick"],wl={key:1,class:"py-2 text-center text-gray-400"};function Sl(e,t,n,o,s,r){var g,m;const a=B("PhCaretDown"),l=B("RobustInputWrapper"),i=B("PhCheck"),p=B("RobustPopper");return d(),f(H,null,[V(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:k([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:Y(y=>[e.$slots.prefix?(d(),f("div",{key:0,class:k(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),ae(c("div",ue({id:y.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[c("div",bl,M(e.activeItem?e.activeItem.title:"Select"),1)],16,yl),[[Ke,!e.open]]),ae(c("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=v=>e.search=v),size:"1",class:k(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ke,e.open],[nt,e.search]]),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[V(a,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((g=e.inputWrapper)==null?void 0:g.wrapperRef)?(d(),G(p,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=y=>e.open=y),ref:"popperRef",class:"z-[100] origin-top","append-to":(m=e.inputWrapper)==null?void 0:m.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:Y(()=>[e.computedOptions.length>0?(d(),f("ul",hl,[(d(!0),f(H,null,K(e.computedOptions,y=>(d(),f("li",{key:y.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:v=>e.selectItem(y)},[c("span",null,M(y.title),1),e.modelValue===y.value?(d(),G(i,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):x("",!0)],8,kl))),128))])):(d(),f("div",wl,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):x("",!0)],64)}var Cn=j(_n,[["render",Sl]]);_n.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const xn=P({name:"RobustSelectInline",components:{RobustPopper:he,PhCheck:tt,PhCaretDown:Fe},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=u(),s=u();z(e);const r=u(!1),a=u(),l=u(),i=u(),p=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:v=>{v.state.styles.popper.width=`${Math.max(v.state.rects.reference.width,200)}px`},effect:v=>{v.state.elements.popper.style.width=`${v.state.elements.reference.getBoundingClientRect().width}px`}}],g=w(()=>e.options.find(v=>v.value===e.modelValue));function m(v){re(()=>{r.value=!1}),t("update:modelValue",v.value),t("change",v.value)}function y(){r.value=!r.value}return Te(i,()=>{r.value&&(r.value=!1,t("blur"))}),{refSelectInlineInput:s,refSelectInlineContainer:o,open:r,props:e,toggleDropdown:y,wrapperRef:i,popperModifiers:p,activeItem:g,selectItem:m,attrs:n,popperRef:a,currentActive:l}}}),Dl={class:"min-w-0 select-none truncate"},$l={key:0,class:"max-h-72 overflow-auto"},_l=["onClick"],Cl={key:1,class:"py-2 text-center text-gray-400"};function xl(e,t,n,o,s,r){var p;const a=B("PhCaretDown"),l=B("PhCheck"),i=B("RobustPopper");return d(),f(H,null,[c("div",{ref:"wrapperRef",class:"cursor-pointer relative flex min-w-20 max-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900 h-10 ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500",onClick:t[0]||(t[0]=(...g)=>e.toggleDropdown&&e.toggleDropdown(...g))},[c("div",{class:k(["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},[c("div",Dl,M(e.activeItem?e.activeItem.title:"Select"),1)],2),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[V(a,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)],512),V(i,{open:e.open,"onUpdate:open":t[1]||(t[1]=g=>e.open=g),ref:"popperRef","append-to":(p=e.wrapperRef)==null?void 0:p.value,modifiers:e.popperModifiers,options:{placement:"bottom-start"}},{default:Y(()=>[e.options.length>0?(d(),f("ul",$l,[(d(!0),f(H,null,K(e.options,g=>(d(),f("li",{key:g.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:m=>e.selectItem(g)},[c("span",null,M(g.title),1),e.modelValue===g.value?(d(),G(l,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):x("",!0)],8,_l))),128))])):(d(),f("div",Cl,"No options"))]),_:1},8,["open","append-to","modifiers"])],64)}var Tn=j(xn,[["render",xl]]);xn.__docgenInfo={displayName:"RobustSelectInline",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Bn=P({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=u(e.modelValue),o=u(!1),s=u(!1),r=u(e.modelValue),a=u(),l=u(),i=u(),p=w(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":g},{"has-marker":e.showMarker}]),g=w(()=>Boolean(e.icon)),m=w(()=>({transform:"scaleX("+we(r.value)+")"})),y=w(()=>({left:we(r.value)*100+"%"})),v=w(()=>e.markerValue===void 0?e.modelValue:e.markerValue),$=w(()=>{const S=[];let q=e.step*Math.ceil(h()/e.step);for(;q<=b();)S.push(q),q+=e.step;return S}),h=()=>e.max>e.min?e.min:0,b=()=>e.max>e.min?e.max:100,F=()=>{a.value.focus()},T=()=>{N(n)},A=()=>{o.value=!0,t("focus")},Q=()=>{o.value=!1,t("blur")},W=S=>{a.value.contains(S.target)||Q()},U=S=>{S=ve(S),e.snapToSteps&&(S=Re(S)),N(S)},N=S=>{S=ve(S),S!==r.value&&(r.value=S,t("update:modelValue",S),t("change",S))},te=()=>{U(r.value+e.step)},ce=()=>{U(r.value-e.step)},ne=()=>{let S=l.value,q=S.offsetLeft;for(;S.offsetParent;)S=S.offsetParent,q+=S.offsetLeft;return q},Z=S=>({left:S+"%"}),me=()=>{document.addEventListener("touchend",_),document.addEventListener("mouseup",_),document.addEventListener("click",W),document.addEventListener("touchstart",W),ge()},fe=()=>{document.removeEventListener("touchend",_),document.removeEventListener("mouseup",_),document.removeEventListener("click",W)},ge=()=>{const S=ve(r.value?r.value:0);N(S)},ke=S=>{e.disabled||(o.value||A(),s.value=!0,E(S),document.addEventListener("touchmove",I),document.addEventListener("mousemove",I),t("dragstart",r.value,S))},I=S=>{E(S)},E=S=>{const q=S.touches?S.touches[0].pageX:S.pageX,oe=l.value.offsetWidth,Ce=(q-ne())/oe,ze=ve(h()+Ce*(b()-h()));s.value&&N(Math.round(ze))},_=S=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&U(e.modelValue),document.removeEventListener("touchmove",I),document.removeEventListener("mousemove",I),t("dragend",r.value,S))},Re=S=>{const q=Math.floor(S/e.step)*e.step,oe=q+e.step,Ce=(q+oe)/2;return q<h()?oe>b()?S:oe:S>=Ce&&oe<=b()?oe:q},we=S=>(S-h())/(b()-h()),ve=S=>S<h()?h():S>b()?b():S;return J(()=>{me()}),tr(()=>{fe()}),{slider:a,track:l,thumb:i,initialValue:n,isActive:o,isDragging:s,localValue:r,classes:p,hasIcon:g,fillStyle:m,thumbStyle:y,markerText:v,snapPoints:$,moderatedMin:h,moderatedMax:b,focus:F,reset:T,onFocus:A,onBlur:Q,onExternalClick:W,setValueWithSnap:U,setValue:N,incrementValue:te,decrementValue:ce,getTrackOffset:ne,getPointStyle:Z,initializeSlider:me,teardownSlider:fe,initializeDrag:ge,onDragStart:ke,onDragMove:I,dragUpdate:E,onDragStop:_,getNearestSnapPoint:Re,relativeValue:we,moderateValue:ve}}}),Tl=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],Bl=["name","value"],Pl={key:1,class:"base-slider__icon"},Il={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Vl={key:0},Rl={key:0,class:"base-slider__marker text-xs"},jl=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[c("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),Ml={class:"base-slider__marker-text text-xs"};function Ll(e,t,n,o,s,r){const a=B("feather");return d(),f("div",{ref:"slider",class:k(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=xe(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=xe(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=xe(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=xe(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(d(),f("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,Bl)):x("",!0),e.hasIcon?(d(),f("div",Pl,[L(e.$slots,"icon",{},()=>[V(a,{type:e.icon,size:"20"},null,8,["type"])])])):x("",!0),c("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[c("div",Il,[e.snapToSteps?(d(),f("div",Vl,[(d(!0),f(H,null,K(e.snapPoints,(l,i)=>(d(),f("span",{key:i,class:"base-slider__snap-point",style:X({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):x("",!0)]),c("div",{class:"base-slider__track-fill bg-primary-400",style:X(e.fillStyle)},null,4),c("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:X(e.thumbStyle)},[e.showMarker?(d(),f("div",Rl,[jl,c("span",Ml,M(e.markerText),1)])):x("",!0)],4)],544)],42,Tl)}var Pn=j(Bn,[["render",Ll]]);Bn.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};const In=P({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e);return{isChecked:w({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),El={class:"flex cursor-pointer items-center gap-x-3"},Ol={key:0},Fl={class:"text-sm text-gray-400"};function Nl(e,t,n,o,s,r){return d(),f("label",El,[ae(c("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),class:"hidden",type:"checkbox"},null,512),[[jt,e.isChecked]]),c("div",{class:k(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[c("div",{class:k(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(d(),f("div",Ol,[c("div",null,M(e.title),1),c("div",Fl,M(e.description),1)])):x("",!0)])}var Vn=j(In,[["render",Nl]]);In.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};const Rn=P({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=u(),o=u([]),s=a=>{var l;(l=o.value)==null||l.push(a)};return J(()=>{const a=o.value.find(l=>l.dataset.value===e.modelValue);a&&(console.log(a),a.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:a=>{t("update:modelValue",a)},root:n,registerTab:s}}}),Al={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},Wl=["data-value"],Hl=["onClick"],zl=c("div",{class:"flex-1 border-b-2 dark:border-gray-700"},null,-1);function Ul(e,t,n,o,s,r){return d(),f("div",Al,[(d(!0),f(H,null,K(e.tabs,a=>(d(),f("div",{key:a.value,ref_for:!0,ref:e.registerTab,"data-value":a.value,class:k(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[a.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-700 dark:text-gray-500"]])},[L(e.$slots,"tab",{tab:a,select:()=>e.select(a.value)},()=>[c("div",{class:"px-4 py-3",onClick:()=>e.select(a.value)},M(a.title),9,Hl)])],10,Wl))),128)),zl],512)}var st=j(Rn,[["render",Ul]]);Rn.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};const ql=P({name:"RobustTabsSwitch",props:{tabs:{type:Array,required:!0},rounded:{type:Boolean,default:!1},modelValue:{required:!0}},setup(e,{emit:t}){const n=u([]),o=z(e),s=$=>{var h;(h=n.value)==null||h.push($)},r=u(0),a=u(0),l=u(!1),i=u();u();const p=new ResizeObserver(()=>{const $=g();$&&m($)});J(()=>{i.value&&p.observe(i.value),re(()=>{l.value=!0})}),Oe(()=>{i.value&&p.unobserve(i.value)});const g=()=>n.value.find($=>$.dataset.value===o.modelValue.value),m=$=>{var T;const h=(T=i.value)==null?void 0:T.getBoundingClientRect();if(!h)throw new Error("no container box specified");const b=$.getBoundingClientRect(),F={x:b.x-h.x,y:b.y-h.y};r.value=F.x,a.value=b.width},y=($,h)=>{t("update:modelValue",h),$.target&&$.target instanceof HTMLElement&&m($.target)},v=g();return v&&m(v),{root:i,select:y,registerTab:s,showBackground:l,backgroundXOffset:r,backgroundWidth:a}}});ql.__docgenInfo={displayName:"RobustTabsSwitch",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!0}]};const jn=P({name:"RobustTextarea",inheritAttrs:!1,components:{RobustInputWrapper:be,PhWarningCircle:Rt},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=u(),s=n,r=w({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function a(){var i;(i=o.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:r,inputAttrs:s,props:e,inputRef:o,focus:a,clear:l}}}),Yl=["id","disabled","readonly"],Gl={key:1,class:"text-red-400"};function Kl(e,t,n,o,s,r){const a=B("PhWarningCircle"),l=B("RobustInputWrapper");return d(),G(l,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,class:k(e.$props.class),"box-class":[e.condensed?"pt-1":"pt-2"],readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:Y(i=>[e.$slots.prefix?(d(),f("div",{key:0,class:k(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),ae(c("textarea",ue({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=p=>e.inputFieldValue=p),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-700",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Yl),[[nt,e.inputFieldValue]]),e.$slots.suffix||e.error?(d(),f("div",{key:1,class:k(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(d(),f("div",Gl,[V(a,{size:"20",class:"block"})])):L(e.$slots,"suffix",{key:0,tag:"div"})],2)):x("",!0)]),_:3},8,["title","hint","error","class","box-class","readonly","disabled","condensed"])}var Mn=j(jn,[["render",Kl]]);jn.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const Ln=P({name:"RobustWidgetWrapper",components:{RobustPopper:he,PhDotsThreeVertical:nr},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=u(!1),o=u(),s=u();Te(s,a=>{n.value&&(o.value.contains(a.target)&&(a.stopPropagation(),a.preventDefault()),r(),t("blur"))});const r=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:r,popperRef:s,contextButtonRef:o}}}),Xl={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-700 dark:text-gray-400"};function Jl(e,t,n,o,s,r){const a=B("PhDotsThreeVertical"),l=B("RobustPopper");return d(),f(H,null,[c("div",ue(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800",{"pl-1":e.stripe}]}),[ae(c("div",{class:k(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ke,e.stripe]]),e.title||e.$slots.title?(d(),f("div",Xl,[e.$slots.title?L(e.$slots,"title",{key:0,title:e.title}):(d(),f(H,{key:1},[_e(M(e.title),1)],64)),e.$slots.options?(d(),f("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=i=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-800"},[V(a,{size:"24",weight:"bold"})],512)):x("",!0)])):x("",!0),e.$slots.default?(d(),f("section",{key:1,class:k(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[L(e.$slots,"default")],2)):x("",!0),L(e.$slots,"raw")],16),V(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=i=>e.open=i),options:{placement:"bottom-end"}},{default:Y(()=>[L(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var En=j(Ln,[["render",Jl]]);Ln.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};const On=P({name:"RobustDaterangePicker",components:{RobustCalendar:Ae,RobustPopper:he,RobustInputWrapper:be,RobustButton:ee,RobustCheckbox:We,RobustDatePicker:at,PhCaretDown:Fe,PhCalendar:Lt,PhArrowLeft:or,PhArrowRight:rr,PhClockCounterClockwise:ar},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:r,comparePerspectiveDate:a}=z(e),l=u(),i=u(!1),p=u(),g=u(),m=u(r.value),y=u(a.value),v=u(!1),$=u(),h=u(),b=u(!0),F=u(),T=w(()=>U.value.length>1),A=(I,E)=>E?le(I,"dd.MM.yyyy HH:mm:ss"):le(I,"dd.MM.yyyy"),Q=w(()=>e.dateHistory||[]);let W=u();const U=u(s.value),N=w({get(){return U.value},set(I){U.value=I,t("update:compareDate",I),t("blur")}}),te=w({get:()=>N.value.length>1,set:I=>{Z(I)}}),ce=w(()=>{if(!o.value)return"Select date";const I=o.value;try{return I.length>1?le(I[0],"P")+" - "+le(I[1],"P"):le(I[0],"P")+" - "+le(I[0],"P")}catch{return}});function ne(){i.value===!0&&(i.value=!1,v.value=!1,t("blur"))}const Z=I=>{I?$.value=I:(t("update:comparison-date",void 0),N.value=void 0)};Te(F,I=>{i.value&&(p.value.wrapperRef.contains(I.target)&&(I.stopPropagation(),I.preventDefault()),ne(),t("blur"))});const me=()=>{W.value=o.value,i.value=!i.value},fe=()=>{$.value=!1},ge=async()=>{t("update:dateRange",W.value),t("change",W.value),t("blur"),i.value=!1},ke=I=>{b.value=I};return $e(m,I=>{t("update:perspectiveDate",I)}),$e(y,I=>{t("update:comparePerspectiveDate",I)}),{displayCompare:$,computedCompare:N,attrs:n,props:e,refSelectContainer:l,pickedCompare:T,open:i,displayDate:ce,saveTime:ge,tmpDateRange:W,dateConfig:h,closeDropdown:ne,showCompare:Z,comparePerspectiveOf:y,compareWith:te,storeHistory:b,handleClick:me,goBack:fe,mainCalendar:g,perspectiveOf:m,enabledHistory:v,dateHistory:Q,formatDate:A,enableStoringHistory:ke,inputWrapperRef:p,popperRef:F}},methods:{}}),Ql=["id"],Zl={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},ei=c("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"},"Date range",-1),ti={key:0,class:"flex flex-col items-start gap-y-3"},ni=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),oi={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"},ri={key:1},ai={key:0,class:"flex flex-col items-start"},si=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),li={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"},ii=_e("Apply time range");function ui(e,t,n,o,s,r){var $,h;const a=B("PhCalendar"),l=B("PhCaretDown"),i=B("RobustInputWrapper"),p=B("RobustDatePicker"),g=B("RobustCheckbox"),m=B("RobustCalendar"),y=B("RobustButton"),v=B("RobustPopper");return d(),f(H,null,[V(i,{title:e.title,hint:e.hint,error:e.error,class:k([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ie(e.handleClick,["stop"])},{default:Y(b=>[c("div",{class:k(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[V(a,{size:"20"})],2),c("div",ue({id:b.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Zl,M(e.displayDate),1)],16,Ql),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[V(l,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),(($=e.inputWrapperRef)==null?void 0:$.wrapperRef)?(d(),G(v,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(h=e.inputWrapperRef)==null?void 0:h.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=b=>e.open=b),options:{placement:"bottom-start"}},{default:Y(()=>[ei,c("div",null,[V(m,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=b=>e.tmpDateRange=b),"onClick:relativeDate":t[3]||(t[3]=b=>e.enableStoringHistory(!1))},{default:Y(()=>[e.enablePerspective?(d(),f("div",ti,[c("div",null,[ni,V(p,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=b=>e.perspectiveOf=b)},null,8,["modelValue"])]),e.enableComparison?(d(),G(g,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=b=>e.compareWith=b),title:"Compare with"},null,8,["modelValue"])):x("",!0)])):x("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(d(),f("h3",oi,"Comparison date range")):x("",!0),e.enableComparison?(d(),f("div",ri,[V(m,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=b=>e.computedCompare=b),"onClick:relativeDate":t[6]||(t[6]=b=>e.enableStoringHistory(!1))},{default:Y(()=>[e.enablePerspective?(d(),f("div",ai,[si,V(p,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=b=>e.comparePerspectiveOf=b)},null,8,["modelValue"])])):x("",!0)]),_:1},8,["modelValue"])])):x("",!0),c("div",li,[V(y,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:Y(()=>[ii]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):x("",!0)],64)}var Fn=j(On,[["render",ui]]);On.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var di={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:Fn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const pi=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:Fn},setup(){return{args:e}}}),Nn=[new Date,new Date],Pt=u(Nn),It=u(Nn),An=pi.bind({});An.args={dateRange:Pt,"onUpdate:dateRange":e=>{Pt.value=e},compareDateRange:It,"onUpdate:compareDateRange":e=>{It.value=e}};const ci=["Default"];var mi=Object.freeze(Object.defineProperty({__proto__:null,default:di,Default:An,__namedExportsOrder:ci},Symbol.toStringTag,{value:"Module"})),fi={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:fn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const gi=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:fn},setup(){let t=u([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),vi=gi.bind({}),yi=["Default"];var bi=Object.freeze(Object.defineProperty({__proto__:null,default:fi,Default:vi,__namedExportsOrder:yi},Symbol.toStringTag,{value:"Module"})),hi={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:He,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ki=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:He},setup(){return{args:e}}}),Wn=ki.bind();Wn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const wi=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:He,RobustButton:ee},setup(){return{args:e}}}),Hn=wi.bind();Hn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const Si=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:He,RobustButton:ee,RobustImg:Ie},setup(){return{args:e}}}),zn=Si.bind();zn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const Di=["Default","CallToAction","CustomIcon"];var $i=Object.freeze(Object.defineProperty({__proto__:null,default:hi,Default:Wn,CallToAction:Hn,CustomIcon:zn,__namedExportsOrder:Di},Symbol.toStringTag,{value:"Module"})),_i={title:"Ui/Grid",component:yn,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Vt=P({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const Ci=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:yn},setup(){let t=u([{id:"test",component:yt(Vt),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:yt(Vt),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return $e(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),xi=Ci.bind(),Ti=["Default"];var Bi=Object.freeze(Object.defineProperty({__proto__:null,default:_i,Default:xi,__namedExportsOrder:Ti},Symbol.toStringTag,{value:"Module"})),Pi={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Ie,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ii=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Ie},setup(){return{args:e}}}),Un=Ii.bind();Un.args={title:"Img title"};const Vi=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Ie},setup(){return{args:e}}}),qn=Vi.bind();qn.args={title:"Img title"};const Ri=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Ie},setup(){return{args:e}}}),Yn=Ri.bind();Yn.args={title:"Img title"};const ji=["Default","Broken","Fallback"];var Mi=Object.freeze(Object.defineProperty({__proto__:null,default:Pi,Default:Un,Broken:qn,Fallback:Yn,__namedExportsOrder:ji},Symbol.toStringTag,{value:"Module"})),Li={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:rt,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const lt=e=>({template:'<Input class="mb-4" :cthulu="true" v-bind="args"/>',components:{Input:rt},setup(){return{args:e}}}),Gn=lt.bind();Gn.args={modelValue:"Input text",title:"Input title"};const Kn=lt.bind();Kn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Xn=lt.bind();Xn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Ei=["Default","Hint","ErrorHint"];var Oi=Object.freeze(Object.defineProperty({__proto__:null,default:Li,Default:Gn,Hint:Kn,ErrorHint:Xn,__namedExportsOrder:Ei},Symbol.toStringTag,{value:"Module"})),Fi={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:be,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const it=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:be},setup(){return{args:e}}}),Jn=it.bind();Jn.args={title:"Input title",outline:!1};const Qn=it.bind();Qn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Zn=it.bind();Zn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Ni=["Default","Hint","ErrorHint"];var Ai=Object.freeze(Object.defineProperty({__proto__:null,default:Fi,Default:Jn,Hint:Qn,ErrorHint:Zn,__namedExportsOrder:Ni},Symbol.toStringTag,{value:"Module"})),Wi={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:hn,argTypes:{progress:{control:{type:"number"}}}};const Hi=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:hn},setup(){return{args:e}}}),zi=Hi.bind(),Ui=["Default"];var qi=Object.freeze(Object.defineProperty({__proto__:null,default:Wi,Default:zi,__namedExportsOrder:Ui},Symbol.toStringTag,{value:"Module"})),Yi={parameters:{storySource:{source:`import { ref } from 'vue'
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

const SlideRightTemplate = (args) => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const SlideRight = SlideRightTemplate.bind()

SlideRight.args = {
  title: 'Modal title',
  opened: opened,
  "onUpdate:opened": (value) => {
    console.log("opeone");
    opened.value = value
  }
}

const SlideLeftTemplate = (args) => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const SlideLeft = SlideLeftTemplate.bind()

SlideLeft.args = {
  title: 'Modal title',
  opened: opened,
  "onUpdate:opened": (value) => {
    console.log("opeone");
    opened.value = value
  }
}

const LargeTemplate = (args) => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal size="lg" v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const Large = LargeTemplate.bind()

Large.args = {
  title: 'Modal title',
  opened: opened,
  "onUpdate:opened": (value) => {
    console.log("opeone");
    opened.value = value
  }
}
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}},"slide-right":{startLoc:{col:27,line:39},endLoc:{col:2,line:45},startBody:{col:27,line:39},endBody:{col:2,line:45}},"slide-left":{startLoc:{col:26,line:58},endLoc:{col:2,line:64},startBody:{col:26,line:58},endBody:{col:2,line:64}},large:{startLoc:{col:22,line:77},endLoc:{col:2,line:83},startBody:{col:22,line:77},endBody:{col:2,line:83}}}}},title:"Ui/Modal",component:Ve,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Gi=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',components:{Modal:Ve,RobustButton:ee},setup(){return{args:e}}}),eo=Gi.bind();let pe=u(!0);eo.args={title:"Modal title",opened:pe,"onUpdate:opened":e=>{console.log("opeone"),pe.value=e}};const Ki=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',components:{Modal:Ve,RobustButton:ee},setup(){return{args:e}}}),to=Ki.bind();to.args={title:"Modal title",opened:pe,"onUpdate:opened":e=>{console.log("opeone"),pe.value=e}};const Xi=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',components:{Modal:Ve,RobustButton:ee},setup(){return{args:e}}}),no=Xi.bind();no.args={title:"Modal title",opened:pe,"onUpdate:opened":e=>{console.log("opeone"),pe.value=e}};const Ji=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal size="lg" v-bind="args">test</Modal>',components:{Modal:Ve,RobustButton:ee},setup(){return{args:e}}}),oo=Ji.bind();oo.args={title:"Modal title",opened:pe,"onUpdate:opened":e=>{console.log("opeone"),pe.value=e}};const Qi=["Default","SlideRight","SlideLeft","Large"];var Zi=Object.freeze(Object.defineProperty({__proto__:null,default:Yi,Default:eo,SlideRight:to,SlideLeft:no,Large:oo,__namedExportsOrder:Qi},Symbol.toStringTag,{value:"Module"})),eu={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Sn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const tu=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Sn},setup(){return{args:e}}}),nu=tu.bind(),ou=["Default"];var ru=Object.freeze(Object.defineProperty({__proto__:null,default:eu,Default:nu,__namedExportsOrder:ou},Symbol.toStringTag,{value:"Module"})),au={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:he,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const su=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:he},setup(){const t=u(!1);return{args:e,value:t}}}),ro=su.bind({});ro.args={title:"Popper title",description:"Popper description text to be placed here"};const lu=["Default"];var iu=Object.freeze(Object.defineProperty({__proto__:null,default:au,Default:ro,__namedExportsOrder:lu},Symbol.toStringTag,{value:"Module"})),uu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:$n,argTypes:{title:{control:{type:"text"}}}};const du=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:$n},setup(){const t=u("test");return{args:e,value:t}}}),ao=du.bind({});ao.args={title:"Radio title"};const pu=["Default"];var cu=Object.freeze(Object.defineProperty({__proto__:null,default:uu,Default:ao,__namedExportsOrder:pu},Symbol.toStringTag,{value:"Module"}));const mu=P({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});mu.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var fu={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:Cn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ut=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Cn},setup(){let t=u(void 0),n=u([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),so=ut.bind();so.args={title:"Input title"};const lo=ut.bind();lo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const io=ut.bind();io.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const gu=["Default","Hint","ErrorHint"];var vu=Object.freeze(Object.defineProperty({__proto__:null,default:fu,Default:so,Hint:lo,ErrorHint:io,__namedExportsOrder:gu},Symbol.toStringTag,{value:"Module"}));const yu=P({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});yu.__docgenInfo={exportName:"default",displayName:"SelectInlineOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var bu={parameters:{storySource:{source:`import SelectInline from './SelectInline.vue'
import SelectInlineOption from './SelectInlineOption.vue'
import { ref } from 'vue'
export default {
  title: 'Ui/SelectInline',
  component: SelectInline,
  argTypes: {
    onInput: { action: 'input' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template:
    '<SelectInline v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',
  components: { SelectInline },
  setup() {
    let value = ref(undefined)

    let options = ref([
      {
        title: 'Item 1122222222222222',
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



const OptionsTemplate = (args) => ({
  template:
    \`<SelectInline v-bind="args" v-model="value">
      <SelectInlineOption value="test" identifier="hello">Hello</SelectInlineOption>
    </SelectInline>\`,
  components: { SelectInline, SelectInlineOption },
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
})`,locationsMap:{default:{startLoc:{col:24,line:15},endLoc:{col:2,line:51},startBody:{col:24,line:15},endBody:{col:2,line:51}}}}},title:"Ui/SelectInline",component:Tn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}}}};const hu=e=>({template:'<SelectInline v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{SelectInline:Tn},setup(){let t=u(void 0),n=u([{title:"Item 1122222222222222",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),uo=hu.bind();uo.args={title:"Input title"};const ku=["Default"];var wu=Object.freeze(Object.defineProperty({__proto__:null,default:bu,Default:uo,__namedExportsOrder:ku},Symbol.toStringTag,{value:"Module"})),Su={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:Pn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Du=e=>({template:'<Slider v-bind="args" />',components:{Slider:Pn},setup(){return{args:e}}}),po=Du.bind();po.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const $u=["Default"];var _u=Object.freeze(Object.defineProperty({__proto__:null,default:Su,Default:po,__namedExportsOrder:$u},Symbol.toStringTag,{value:"Module"})),Cu={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Ne,argTypes:{}};const xu=e=>({template:"<Spinner />",components:{Spinner:Ne},setup(){return{args:e}}}),Tu=xu.bind(),Bu=["Default"];var Pu=Object.freeze(Object.defineProperty({__proto__:null,default:Cu,Default:Tu,__namedExportsOrder:Bu},Symbol.toStringTag,{value:"Module"})),Iu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:Vn,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Vu=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:Vn},setup(){const t=u(!1);return{args:e,value:t}}}),co=Vu.bind({});co.args={title:"Switch title",description:"Switch description text to be placed here"};const Ru=["Default"];var ju=Object.freeze(Object.defineProperty({__proto__:null,default:Iu,Default:co,__namedExportsOrder:Ru},Symbol.toStringTag,{value:"Module"})),Mu={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:st,argTypes:{rounded:{control:{type:"boolean"}}}};const Lu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:st},setup(){const t=u("item_1");return{args:e,value:t}}}),mo=Lu.bind();mo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Eu=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:st},setup(){const t=u("item_1");return{args:e,value:t}}}),fo=Eu.bind();fo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Ou=["Default","Slotted"];var Fu=Object.freeze(Object.defineProperty({__proto__:null,default:Mu,Default:mo,Slotted:fo,__namedExportsOrder:Ou},Symbol.toStringTag,{value:"Module"})),Nu={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
  template: '<Textarea v-bind="args" class="mb-5"/>',
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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:Mn,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const dt=e=>({template:'<Textarea v-bind="args" class="mb-5"/>',components:{Textarea:Mn},setup(){return{args:e}}}),go=dt.bind();go.args={modelValue:"Textarea text",title:"Textarea title"};const vo=dt.bind();vo.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const yo=dt.bind();yo.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const Au=["Default","Hint","ErrorHint"];var Wu=Object.freeze(Object.defineProperty({__proto__:null,default:Nu,Default:go,Hint:vo,ErrorHint:yo,__namedExportsOrder:Au},Symbol.toStringTag,{value:"Module"})),Hu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:En,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const zu=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:En},setup(){const t=u(!1);return{args:e,value:t}}}),bo=zu.bind({});bo.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Uu=["Default"];var qu=Object.freeze(Object.defineProperty({__proto__:null,default:Hu,Default:bo,__namedExportsOrder:Uu},Symbol.toStringTag,{value:"Module"}));const Yu=[cr,mr,fr,gr,vr,yr,br,hr,kr,wr,$r];Yu.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return dr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>ur(o,!1));case"loaders":return n.forEach(o=>ir(o,!1));case"parameters":return bt(qe({},n),!1);case"argTypesEnhancers":return n.forEach(o=>lr(o));case"argsEnhancers":return n.forEach(o=>sr(o));case"globals":case"globalTypes":{const o={};return o[t]=n,bt(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function ho(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Hr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":Sa,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Ra,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Aa,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":vs,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":js,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Hs,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":mi,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":bi,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":$i,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":Bi,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":Mi,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Oi,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Ai,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":qi,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":Zi,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":ru,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":iu,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":cu,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":vu,"/home/runner/work/robust-ui/robust-ui/src/components/SelectInline/SelectInline.stories.js":wu,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":_u,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":Pu,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":ju,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":Fu,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":Wu,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":qu}[e]}Object.assign(ho,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/SelectInline/SelectInline.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/SelectInline/SelectInline.stories.js":"./src/components/SelectInline/SelectInline.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});pr(ho,{hot:!1},!1);
//# sourceMappingURL=iframe.39ca909e.js.map
