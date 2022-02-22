var Co=Object.defineProperty,To=Object.defineProperties;var Bo=Object.getOwnPropertyDescriptors;var bt=Object.getOwnPropertySymbols;var Po=Object.prototype.hasOwnProperty,Vo=Object.prototype.propertyIsEnumerable;var ht=(e,t,n)=>t in e?Co(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ze=(e,t)=>{for(var n in t||(t={}))Po.call(t,n)&&ht(e,n,t[n]);if(bt)for(var n of bt(t))Vo.call(t,n)&&ht(e,n,t[n]);return e},kt=(e,t)=>To(e,Bo(t));import{d as P,c as S,u as Io,a as m,b as c,o as i,r as p,t as z,e as K,w as G,n as D,f as st,g as T,h as L,i as _,P as Ro,j as Mo,k as j,m as ie,l as Ft,p as oe,v as jo,q as I,s as de,x as Re,y as Me,z as wt,A as je,B as St,C as Lo,D as Eo,E as Oo,F as No,G as Wo,H as ae,I as Se,J as Z,K as Le,L as Ue,M as Ye,N as Fo,O as Ho,Q as Ao,R as zo,S as Uo,T as Yo,U as Go,V as qo,W as Ko,X as se,Y as A,Z as Q,_ as Jo,$ as Ht,a0 as At,a1 as q,a2 as le,a3 as zt,a4 as lt,a5 as it,a6 as De,a7 as we,a8 as Dt,a9 as Xo,aa as ut,ab as Ut,ac as Ee,ad as Qo,ae as Zo,af as er,ag as tr,ah as Be,ai as nr,aj as $t,ak as or,al as Ce,am as rr,an as ar,ao as sr,ap as lr,aq as Ge,ar as ir,as as ur,at as _t,au as dr,av as pr,aw as cr,ax as mr,ay as fr,az as gr,aA as yr,aB as vr,aC as br,aD as hr,aE as kr,aF as wr,aG as Sr,aH as Dr,aI as $r,aJ as _r}from"./vendor.0cd0825a.js";const xr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};xr();const Cr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var Tr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:Cr});var M=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const dt=P({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=S(()=>.666*(e.size-2*e.safeMargin)),n=S(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:n}}}),xt=()=>{Io(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},Ct=dt.setup;dt.setup=Ct?(e,t)=>(xt(),Ct(e,t)):xt;const Yt=dt,Br=["width","height","viewBox"],Pr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function Vr(e,t,n,o,s,a){return i(),m("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Pr)],8,Br)}var Oe=M(Yt,[["render",Vr],["__scopeId","data-v-2e051f42"]]);Yt.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var Ir={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const Gt=P({name:"RobustButton",components:{Spinner:Oe},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=p(!1),{loading:n,variant:o}=z(e);return{variantStyles:S(()=>Ir[o.value]),loading:n,displaySpinner:t}}}),Rr={key:0,class:"mr-2"},Mr={class:"whitespace-no-wrap truncate"},jr={key:1,class:"ml-2"};function Lr(e,t,n,o,s,a){const r=T("spinner");return i(),K(st(e.tag),{disabled:e.disabled,class:D(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:G(()=>[c("div",{class:D(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(i(),m("div",Rr,[L(e.$slots,"prefix",{tag:"div"})])):_("",!0),c("div",Mr,[L(e.$slots,"default")]),e.$slots.suffix?(i(),m("div",jr,[L(e.$slots,"suffix",{tag:"div"})])):_("",!0)],2),e.loading?(i(),K(r,{key:0,size:20,stroke:2,class:"spinner absolute"})):_("",!0)]),_:3},8,["disabled","class"])}var ue=M(Gt,[["render",Lr]]);Gt.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Er={parameters:{storySource:{source:`import Button from './Button.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:ue,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Or=e=>({components:{Button:ue},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Nr=Or.bind({}),Wr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:ue,PhSmiley:Ro},setup(){return{args:e}}}),Fr=Wr.bind(),Hr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:ue,PhPaperPlaneTilt:Mo},setup(){return{args:e}}}),Ar=Hr.bind(),zr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:ue},setup(){return{args:e}}}),Ur=zr.bind(),Yr=["Default","Prefix","Suffix","Loading"];var Gr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Er,Default:Nr,Prefix:Fr,Suffix:Ar,Loading:Ur,__namedExportsOrder:Yr});let qr=0;const qt=P({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++qr).toString(),o=/^on[^a-z]/,s=d=>o.test(d);let a=S(()=>Object.fromEntries(Object.entries(t).filter(d=>s(d[0]))));const r=p();function l(){}function u(){}return{cuid:n,wrapperRef:r,blurred:l,focused:u,listeners:a}}}),Kr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Jr={key:1,class:"block pt-1"},Xr={key:0,class:"select-none text-xs text-gray-400"},Qr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Zr(e,t,n,o,s,a){return i(),m("fieldset",null,[e.title?(i(),m("legend",Kr,j(e.title),1)):_("",!0),c("div",ie(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.class,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[L(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(i(),m("label",Jr,[e.hint!==void 0?(i(),m("div",Xr,j(e.hint),1)):_("",!0),e.error!==void 0?(i(),m("div",Qr,j(e.error),1)):_("",!0)])):_("",!0)])}var ve=M(qt,[["render",Zr]]);qt.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Kt=P({name:"RobustInput",inheritAttrs:!1,components:{InputWrapper:ve,PhWarningCircle:Ft},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=p(),s=n,a=S({get(){return e.modelValue},set(u){t("input",u),t("change",u),t("update:modelValue",u)}});function r(){var u;(u=o.value)==null||u.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),ea=["id","disabled","readonly"],ta={key:1,class:"text-red-400"};function na(e,t,n,o,s,a){const r=T("PhWarningCircle"),l=T("InputWrapper");return i(),K(l,{title:e.title,hint:e.hint,error:e.error,class:D(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:G(u=>[e.$slots.prefix?(i(),m("div",{key:0,class:D(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):_("",!0),oe(c("input",ie({id:u.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=d=>e.inputFieldValue=d),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,ea),[[jo,e.inputFieldValue]]),e.$slots.suffix||e.error?(i(),m("div",{key:1,class:D(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(i(),m("div",ta,[I(r,{size:"20",class:"block"})])):L(e.$slots,"suffix",{key:0,tag:"div"})],2)):_("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var pt=M(Kt,[["render",na]]);Kt.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var oa=[{title:"today",preset:()=>{const e=de(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=de(Re(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Me(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Me(new Date),wt(new Date)]},{title:"this_year",preset:()=>[je(new Date),St(new Date)]},{title:"this_year_so_far",preset:()=>[je(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=Lo(Re(new Date,7));return[e,Eo(new Date(e))]}},{title:"last_month",preset:()=>{let e=Me(Re(Me(new Date),1));return[e,wt(e)]}},{title:"last_year",preset:()=>{const e=je(Re(je(new Date),1));return[e,St(new Date(e))]}}],ra={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const Jt=P({name:"RobustCalendar",components:{Input:pt,PhCaretLeft:Oo,PhCaretRight:No},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:a}=z(e),r=p(),l=p(),u=p(),d=p(),y=p(),f=Array.isArray(a.value)?p(new Date):p(new Date(a.value)),v=p(),g=p({}),V=oa,x=S(()=>ra[e.variant]),b=S(()=>{const $=new Date(f.value);return Wo($)}),W=S(()=>{try{return ae(f.value,"MMM")}catch{return}}),C=S(()=>{try{return ae(f.value,"yyyy")}catch{return}}),F=S(()=>{const $=new Date(f.value);$.setDate(1);const k=$.getDay();return(k===0?7:k)-1}),J=S(()=>new Date(f.value).getMonth()),H=S(()=>new Date(f.value).getFullYear()),U=()=>{if(console.log("applying time"),r.value!=""&&!Le(new Date(r.value))&&(u.value="Please enter a valid date."),l.value!=""&&!Le(new Date(l.value))&&(d.value="Please enter a valid date."),Le(new Date(r.value))&&Le(new Date(l.value))){u.value="",d.value="";const $=[new Date(r.value),new Date(l.value)];t("update:modelValue",$)}},N=($,k)=>{const O=ee($,k);return O<0?1:O>0?-1:0},ee=($,k)=>{const O=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),re=Date.UTC($.getFullYear(),$.getMonth(),$.getDate());return(O-re)/864e5},pe=$=>{if(!Array.isArray(a.value)||a.value.length<2||!N(...a.value))return!1;const k=new Date;k.setDate($),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const O=Ue(a.value);return!N(k,O)},te=$=>{if(!Array.isArray(a.value)||a.value.length<2||!N(...a.value))return!1;const k=new Date;k.setDate($),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const O=Ye(a.value);return!N(k,O)},X=$=>{if(!Array.isArray(a.value)||a.value.length<2)return!1;const k=new Date;k.setDate($),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const O=Ue(a.value),re=Ye(a.value);return N(k,re)===-1&&N(k,O)===1},ce=$=>{const k=new Date;if(k.setDate($),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear()),Array.isArray(a.value)){const O=a.value.map(re=>new Date(re));for(let re=0;re<O.length;re++)if(!N(O[re],k))return!0}else if(!N(new Date(v.value),k))return!0};function me($){t("update:modelValue",$),f.value=$[1]}function fe(){f.value=Fo(f.value,1)}function be(){f.value=Ho(f.value,1)}function B($){f.value=Ao(f.value,$)}function E(){f.value=zo(f.value,1)}function w(){f.value=Uo(f.value,1)}function Ie($){f.value=Yo(f.value,$)}const he=$=>{const k=new Date(f.value).setDate($);return!(!s.value&&Go(y.value,k)||!o.value&&qo(y.value,k)>0||!n.value&&Ko(k))},ge=$=>{if(!he($))return;const k=new Date;if(k.setDate($),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear()),f.value=k,Array.isArray(a.value)){u.value="",d.value="";let O=[];a.value.length>=2?(O.push(new Date(f.value)),l.value=""):(O=a.value,O.push(new Date(f.value)),O.length>1&&(O=[de(Ue(O),{hours:0,minutes:0,seconds:0}),de(Ye(O),{hours:23,minutes:59,seconds:59})],l.value=O[1].toLocaleDateString())),r.value=O[0].toLocaleDateString(),t("update:modelValue",O)}else v.value=new Date(f.value),t("update:modelValue",f.value)},h=()=>{f.value=new Date(new Date().setHours(12))};Se(a,$=>{const k=$[0]||void 0,O=$[1]||void 0;k?r.value=k.toLocaleDateString():r.value="",O?l.value=O.toLocaleDateString():l.value=""}),Z(()=>{if(Array.isArray(a.value)){f.value=new Date(a.value[1]||new Date),v.value=f.value;const $=a.value[0]||void 0,k=a.value[1]||void 0;$?r.value=$.toLocaleDateString():r.value="",k?l.value=k.toLocaleDateString():l.value=""}else f.value=new Date(a.value||new Date),v.value=f.value});const Y=S(()=>{const $=[];for(let k=1900;k<=2100;k++)$.push(k);return $}),ne=p(!1);function xe(){ne.value=!0}function He(){ne.value=!1}const Ae=p(!1);function _o(){Ae.value=!0,se(()=>{g.value[H.value].scrollIntoView({block:"start",behavior:"auto"})})}function xo(){Ae.value=!1}return{months:S(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:r,to:l,errorFrom:u,errorTo:d,showMonthSelectionActive:ne,showYearSelectionActive:Ae,now:y,cursor:f,selectedDate:v,showMonthSelection:xe,showYearSelection:_o,hideMonthSelection:He,hideYearSelection:xo,daysInMonth:b,monthHeading:W,yearHeading:C,refYearEntry:g,setYear:B,setMonth:Ie,firstWeekday:F,activeMonth:J,activeYear:H,compareDates:N,applyTime:U,dayDiff:ee,isFirst:pe,isLast:te,isBetweenRange:X,isSelectedDay:ce,addYear:fe,subYear:be,addMonth:E,subMonth:w,dayAllowed:he,daySelect:ge,reset:h,yearSelectionYears:Y,quickActions:V,setQuickAction:me,variantStyling:x}}}),aa={class:"relative flex w-max select-none"},sa={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},la={class:"absolute inset-0 overflow-auto py-2"},ia=["onClick"],ua={class:"p-4 dark:border-gray-600"},da={class:"mb-4 flex items-center text-center text-lg font-semibold"},pa={class:"flex flex-1"},ca={class:"relative w-max"},ma={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},fa=["onClick"],ga={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},ya=["data-year","onClick"],va=Jo('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),ba=["disabled","onClick"],ha={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},ka=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),wa=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function Sa(e,t,n,o,s,a){const r=T("PhCaretLeft"),l=T("PhCaretRight"),u=T("Input");return i(),m("div",aa,[Array.isArray(e.modelValue)?(i(),m("div",sa,[c("div",la,[(i(!0),m(A,null,Q(e.quickActions,d=>(i(),m("div",{key:d.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:y=>e.setQuickAction(d.preset())},j(d.title),9,ia))),128))])])):_("",!0),c("section",ua,[c("div",da,[c("div",pa,[c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},j(e.monthHeading),1),c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},j(e.yearHeading),1)]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...d)=>e.subMonth&&e.subMonth(...d))},[I(r,{type:"chevron-left",size:"14",weight:"bold"})]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...d)=>e.addMonth&&e.addMonth(...d))},[I(l,{type:"chevron-right",size:"14",weight:"bold"})])]),c("div",ca,[e.showMonthSelectionActive?(i(),m("div",ma,[(i(!0),m(A,null,Q(e.months,(d,y)=>(i(),m("div",{key:y,class:D(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===y?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(y),e.hideMonthSelection()}},j(d.title),11,fa))),128))])):_("",!0),e.showYearSelectionActive?(i(),m("div",ga,[(i(!0),m(A,null,Q(e.yearSelectionYears,d=>(i(),m("div",{ref_for:!0,ref:y=>e.refYearEntry[d]=y,key:d,class:D(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===d?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":d,onClick:()=>{e.setYear(d),e.hideYearSelection()}},j(d),11,ya))),128))])):_("",!0),c("div",{class:D(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[va,(i(!0),m(A,null,Q(e.firstWeekday,d=>(i(),m("div",{key:d+"_offset"}))),128)),(i(!0),m(A,null,Q(e.daysInMonth,d=>(i(),m("div",{key:d+"_day",class:D(["relative",[e.isBetweenRange(d)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(d),onClick:y=>e.daySelect(d)},[e.isLast(d)||e.isFirst(d)?(i(),m("div",{key:0,class:D(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(d)?"right-0 w-1/2":e.isLast(d)?"left-0 w-1/2":""]])},null,2)):_("",!0),c("div",{class:D(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(d)||e.isLast(d)||e.isFirst(d)||e.isSelectedDay(d)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},j(d),3)],10,ba))),128))],2)])]),Array.isArray(e.modelValue)?(i(),m("div",ha,[ka,I(u,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=d=>e.from=d),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),wa,I(u,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=d=>e.to=d),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),L(e.$slots,"default")])):_("",!0)])}var Ne=M(Jt,[["render",Sa]]);Jt.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var Da={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ne,argTypes:{}};const Xt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ne},setup(){return{args:e}}}),Tt=p(new Date),Qt=Xt.bind({});Qt.args={modelValue:Tt,"onUpdate:modelValue":e=>{Tt.value=e,console.log(e)}};const $a=[new Date,new Date],Bt=p($a),Zt=Xt.bind({});Zt.args={modelValue:Bt,"onUpdate:modelValue":e=>{Bt.value=e,console.log(e)}};const _a=["Default","Range"];var xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Da,Default:Qt,Range:Zt,__namedExportsOrder:_a});const en=P({components:{PhCheck:Ht},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=S({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(a){let r=e.modelValue;Array.isArray(r)?a?r.push(e.value):r.splice(r.indexOf(e.value),1):a?r=e.value:r=e.disabledValue,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),Ca={class:"inline-block"},Ta={class:"flex cursor-pointer items-start"},Ba=["id"],Pa={key:0,class:"w-full select-none pt-px leading-4"},Va={key:1,class:"w-full select-none pt-px leading-4"};function Ia(e,t,n,o,s,a){const r=T("PhCheck");return i(),m("div",Ca,[c("label",Ta,[oe(c("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,Ba),[[At,e.isChecked]]),c("div",{class:D(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[I(r,{class:D([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(i(),m("div",Pa,j(e.title),1)):_("",!0),!e.title&&e.$slots.title?(i(),m("div",Va,[L(e.$slots,"title")])):_("",!0)])])}var We=M(en,[["render",Ia]]);en.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var Ra={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:We,argTypes:{title:{control:{type:"text"}}}};const Ma=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:We},setup(){return{value:p(!1),args:e}}}),tn=Ma.bind({});tn.args={title:"Checkbox title"};const ja=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:We},setup(){return{value:p(!1),args:e}}}),nn=ja.bind({});nn.args={title:"V-Slot Checkbox title"};const La=["Default","SlottedTitle"];var Ea=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ra,Default:tn,SlottedTitle:nn,__namedExportsOrder:La});const on=P({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),Oa=["width","height","viewBox"],Na=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function Wa(e,t,n,o,s,a){return i(),m("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Na)],8,Oa)}var rn=M(on,[["render",Wa]]);on.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Fa={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:rn,argTypes:{progress:{control:{type:"number"}}}};const Ha=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:rn},setup(){return{args:e}}}),Aa=Ha.bind(),za=["Default"];var Ua=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fa,Default:Aa,__namedExportsOrder:za});function ke(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ga(e):/rgb/.test(e)?t=Vt(e):typeof e=="string"?t=Vt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a}=t,{h:r,s:l,v:u}=qa(t);return{r:n,g:o,b:s,a:a===void 0?1:a,h:r,s:l,v:u}}function an(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function Pt(e,t,n,o,s,a){const r=e==="l",l=t.createLinearGradient(0,0,r?n:0,r?0:o);l.addColorStop(.01,s),l.addColorStop(.99,a),t.fillStyle=l,t.fillRect(0,0,n,o)}function Ya({r:e,g:t,b:n},o){const s=r=>("0"+Number(r).toString(16)).slice(-2),a=`#${s(e)}${s(t)}${s(n)}`;return o?a.toUpperCase():a}function Ga(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function Vt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function qa({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),a=o-s;let r=0;o===s?r=0:o===e?t>=n?r=60*(t-n)/a:r=60*(t-n)/a+360:o===t?r=60*(n-e)/a+120:o===n&&(r=60*(e-t)/a+240),r=Math.floor(r);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),u=parseFloat(o.toFixed(2));return{h:r,s:l,v:u}}const sn=P({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=p({}),{size:o,hsv:s,color:a}=z(e),r=p(),l=p(),u=f=>{const v=f,g=o.value,V=v.getContext("2d");v.width=g,v.height=g,V.fillStyle=a.value,V.fillRect(0,0,g,g),Pt("l",V,g,g,"#FFFFFF","rgba(255,255,255,0)"),Pt("p",V,g,g,"rgba(0,0,0,0)","#000000")},d=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},y=f=>{const{top:v,left:g}=r.value.getBoundingClientRect(),V=f.target.getContext("2d"),x=W=>{let C=W.clientX-g,F=W.clientY-v;C<0&&(C=0),F<0&&(F=0),C>o.value&&(C=o.value),F>o.value&&(F=o.value),n.value={left:C-5+"px",top:F-5+"px"};const J=V.getImageData(Math.min(C,o.value-1),Math.min(F,o.value-1),1,1),[H,U,N]=J.data;t("selectSaturation",{r:H,g:U,b:N})};x(f);const b=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",b)};return Z(()=>{u(l.value),d()}),{slideSaturationStyle:n,selectSaturation:y,renderSlide:d,renderColor:u,saturation:r,canvasSaturation:l,color:a,hsv:s,size:o}}}),Ka={ref:"canvasSaturation"};function Ja(e,t,n,o,s,a){return i(),m("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=le((...r)=>e.selectSaturation&&e.selectSaturation(...r),["prevent","stop"]))},[c("canvas",Ka,null,512),c("div",{style:q(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Xa=M(sn,[["render",Ja]]);sn.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const ln=P({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=p({}),o=p(),{height:s,width:a,hsv:r}=z(e),l=p(),u=f=>{const v=f,g=a.value,V=s.value,x=v.getContext("2d");v.width=g,v.height=V;const b=x.createLinearGradient(0,0,0,V);b.addColorStop(0,"#FF0000"),b.addColorStop(.17*1,"#FF00FF"),b.addColorStop(.17*2,"#0000FF"),b.addColorStop(.17*3,"#00FFFF"),b.addColorStop(.17*4,"#00FF00"),b.addColorStop(.17*5,"#FFFF00"),b.addColorStop(1,"#FF0000"),x.fillStyle=b,x.fillRect(0,0,g,V)},d=()=>{n.value={top:(1-r.value.h/360)*s.value-2+"px"}},y=f=>{const{top:v}=l.value.getBoundingClientRect(),g=f.target.getContext("2d"),V=b=>{let W=b.clientY-v;W<0&&(W=0),W>s.value&&(W=s.value),n.value={top:W-2+"px"};const C=g.getImageData(0,Math.min(W,s.value-1),1,1),[F,J,H]=C.data;t("selectHue",{r:F,g:J,b:H})};V(f);const x=()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",V),document.addEventListener("mouseup",x)};return Z(()=>{u(o.value),d()}),{slideHueStyle:n,hue:l,width:a,height:s,renderSlide:d,selectHue:y,renderColor:u,hsv:r,canvasHue:o}}}),Qa={ref:"canvasHue"};function Za(e,t,n,o,s,a){return i(),m("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=le((...r)=>e.selectHue&&e.selectHue(...r),["prevent","stop"]))},[c("canvas",Qa,null,512),c("div",{style:q(e.slideHueStyle),class:"slide"},null,4)],544)}var es=M(ln,[["render",Za]]);ln.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const un=P({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=p(5),{color:n,width:o,height:s}=z(e),a=p(),r=l=>{const u=l,d=o.value,y=s.value,f=t.value,v=an(f),g=u.getContext("2d");u.width=d,u.height=y,g.fillStyle=g.createPattern(v,"repeat"),g.fillRect(0,0,d,y),g.fillStyle=n.value,g.fillRect(0,0,d,y)};return Z(()=>{zt(()=>{r(a.value)}),r(a.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:a}}}),ts={ref:"canvas"};function ns(e,t,n,o,s,a){return i(),m("canvas",ts,null,512)}var os=M(un,[["render",ns]]);un.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const dn=P({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:S({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),rs={class:"color-type"},as={class:"name"};function ss(e,t,n,o,s,a){return i(),m("div",rs,[c("span",as,j(e.name),1),oe(c("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.modelColor=r),class:"value"},null,512),[[lt,e.modelColor]])])}var ls=M(dn,[["render",ss]]);dn.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const pn=P({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=p(),o=p([]),s=p();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=an(4).toDataURL(),it(()=>{a(n.value)});const a=l=>{if(!l)return;const u=o.value||[],d=u.indexOf(l);d>=0&&u.splice(d,1),u.length>=8&&(u.length=7),u.unshift(l),o.value=u||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(u))};return{setColorsHistory:a,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),is={class:"colors"},us=["onClick"],ds={key:0,class:"colors history"},ps=["onClick"];function cs(e,t,n,o,s,a){return i(),m("div",null,[c("ul",is,[(i(!0),m(A,null,Q(e.colorsDefault,r=>(i(),m("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[c("div",{style:q({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:q({background:r}),class:"color"},null,4)],8,us))),128))]),e.colorsHistory.length?(i(),m("ul",ds,[(i(!0),m(A,null,Q(e.colorsHistory,r=>(i(),m("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[c("div",{style:q({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:q({background:r}),class:"color"},null,4)],8,ps))),128))])):_("",!0)])}var ms=M(pn,[["render",cs]]);pn.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const cn=P({name:"RobustColorPicker",components:{Saturation:Xa,Hue:es,Preview:os,Box:ls,Colors:ms},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=p(15),o=p(152),s=p(20),a=p(""),r=p(""),l=p(0),u=p(0),d=p(0),y=p(1),f=p(0),v=p(0),g=p(0),V=p(),x=p(),{theme:b,color:W}=z(e),C=S(()=>b.value==="light"),F=S(()=>o.value+(n.value+8)*2),J=S(()=>F.value-s.value),H=S(()=>({r:l.value,g:u.value,b:d.value,a:y.value})),U=S(()=>({h:f.value,s:v.value,v:g.value})),N=S(()=>`rgb(${l.value}, ${u.value}, ${d.value})`),ee=S(()=>`${l.value}, ${u.value}, ${d.value}`),pe=S(()=>`rgb(${ee.value})`),te=S(()=>Ya(H.value,!0)),X=()=>{r.value=te.value,a.value=ee.value};return Z(()=>{const E=ke(W.value);l.value=E.r,u.value=E.g,d.value=E.b,y.value=E.a,f.value=E.h,v.value=E.s,g.value=E.v,X()}),zt(()=>{t("changeColor",{rgba:H.value,hsv:U.value,hex:r.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:a,modelHex:r,r:l,g:u,b:d,a:y,h:f,s:v,v:g,isLightTheme:C,totalWidth:F,previewWidth:J,rgba:H,hsv:U,rgbString:N,rgbStringShort:ee,rgbaString:pe,hexString:te,setText:X,selectSaturation:E=>{const w=ke(E);l.value=w.r,u.value=w.g,d.value=w.b,y.value=w.a,f.value=w.h,v.value=w.s,g.value=w.v,X()},selectHue:E=>{const w=ke(E);l.value=w.r,u.value=w.g,d.value=w.b,y.value=w.a,f.value=w.h,v.value=w.s,g.value=w.v,X(),se(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide()})},inputHex:E=>{const w=ke(E);l.value=w.r,u.value=w.g,d.value=w.b,y.value=w.a,f.value=w.h,v.value=w.s,g.value=w.v,r.value=E,a.value=ee.value,se(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide(),V.value.renderSlide()})},inputRgba:E=>{const w=ke(E);l.value=w.r,u.value=w.g,d.value=w.b,y.value=w.a,f.value=w.h,v.value=w.s,g.value=w.v,r.value=te.value,a.value=`${l.value}, ${u.value}, ${d.value}`,se(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide(),V.value.renderSlide()})},selectColor:E=>{const w=ke(E);l.value=w.r,u.value=w.g,d.value=w.b,y.value=w.a,f.value=w.h,v.value=w.s,g.value=w.v,X(),se(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide(),V.value.renderSlide()})},saturation:x,hue:V,color:W,theme:b}}}),fs={class:"color-set"};function gs(e,t,n,o,s,a){const r=T("Saturation"),l=T("Hue"),u=T("Preview"),d=T("Box"),y=T("Colors");return i(),m("div",{class:D(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:q({width:e.totalWidth+"px"})},[c("div",fs,[I(r,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),I(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),c("div",{style:q({height:e.previewHeight+"px"}),class:"color-show"},[I(u,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),I(d,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),I(d,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),I(y,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var mn=M(cn,[["render",gs]]);cn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var ys={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:mn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const vs=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:mn},setup(){return{args:e}}}),bs=vs.bind(),hs=["Default"];var ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ys,Default:bs,__namedExportsOrder:hs});const fn=P({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),ws={key:1,class:"flex items-center"},Ss={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function Ds(e,t,n,o,s,a){return e.$slots.default?(i(),m("div",ws,[c("div",{class:D(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),c("div",Ss,[L(e.$slots,"default")]),c("div",{class:D(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(i(),m("div",{key:0,class:D(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var $s=M(fn,[["render",Ds]]);fn.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const gn=P({name:"RobustContentBox",components:{Separator:$s},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),_s={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},xs={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},Cs={class:"flex"},Ts={key:1,class:"text-gray-500 dark:text-gray-500"},Bs={class:"p-4 sm:p-6"};function Ps(e,t,n,o,s,a){const r=T("Separator");return i(),m("section",_s,[e.description!==void 0||e.title!==void 0?(i(),m("header",xs,[e.stripe?(i(),m("div",{key:0,class:D(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):_("",!0),c("h1",Cs,[c("div",{class:D(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[L(e.$slots,"title",{title:e.title},()=>[De(j(e.title),1)])],2)]),e.description!==void 0?(i(),m("p",Ts,[L(e.$slots,"description",{description:e.description},()=>[De(j(e.description),1)])])):_("",!0)])):_("",!0),I(r),c("div",Bs,[L(e.$slots,"default")])])}var Pe=M(gn,[["render",Ps]]);gn.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var Vs={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Pe,argTypes:{title:{control:{type:"text"}}}};const Is=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),Rs=Is.bind(),Ms=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),yn=Ms.bind();yn.args={title:"Input title"};const js=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),vn=js.bind();vn.args={title:"Input title"};const Ls=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),bn=Ls.bind();bn.args={title:"Input title"};const Es=["Default","Title","TitleProp","Stripe"];var Os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vs,Default:Rs,Title:yn,TitleProp:vn,Stripe:bn,__namedExportsOrder:Es}),Ns=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],_e=P({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=z(e),a=p();let r;const l=p(!1),u={strategy:"absolute",placement:"bottom-start",modifiers:[...Ns,...e.modifiers]};function d(){r==null||r.destroy(),l.value=!1}async function y(g){if(!g)return;const V=Object.assign({},u,e.options);!a.value||(r=Xo(g,a.value,V),await r.update())}it(()=>{d()});async function f(){await y(s.value),a.value&&(r==null||r.update(),Dt.fromTo(a.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function v(){a.value&&Dt.fromTo(a.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{d()})}return Z(()=>{if(!n.default)throw new Error("Popper does not have a child slot");Se(o,g=>{l.value=!0,se(async()=>{g?f():v()})})}),{appendTo:s,root:a,render:l}},render(){if(this.render)return we("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const hn=P({name:"RobustDatePicker",components:{Popper:_e,Calendar:Ne,InputWrapper:ve,PhCaretDown:ut,PhCalendar:Ut},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=p(),{modelValue:s}=z(e),a=p(!1),r=p(),l=p();Ee(r,f=>{a.value&&(l.value.wrapperRef.contains(f.target)&&(f.stopPropagation(),f.preventDefault()),y(),t("blur"))});const u=S({get(){return(s==null?void 0:s.value)?s.value:new Date},set(f){a.value=!1,t("update:modelValue",f),t("change",f),t("blur")}}),d=S(()=>{if(!u.value)return"Select date";const f=u.value;try{return f?ae(f,"P"):"Unknown"}catch{return}});function y(){a.value===!0&&(a.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:a,props:e,displayDate:d,computedValue:u,closeDropdown:y,popperRef:r,inputWrapperRef:l}},methods:{}}),Ws=["id"],Fs={class:"min-w-0 truncate tabular-nums"};function Hs(e,t,n,o,s,a){var f,v;const r=T("PhCalendar"),l=T("PhCaretDown"),u=T("InputWrapper"),d=T("Calendar"),y=T("Popper");return i(),m(A,null,[I(u,{title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=le(g=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:G(g=>[c("div",{class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[I(r,{size:"20"})],2),c("div",ie({id:g.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Fs,j(e.displayDate),1)],16,Ws),c("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[I(l,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((f=e.inputWrapperRef)==null?void 0:f.wrapperRef)?(i(),K(y,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(v=e.inputWrapperRef)==null?void 0:v.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=g=>e.open=g),options:{placement:"bottom-start"}},{default:G(()=>[I(d,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=g=>e.computedValue=g)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):_("",!0)],64)}var ct=M(hn,[["render",Hs]]);hn.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var As={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:ct,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const zs=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:ct},setup(){return{args:e}}}),Us=new Date,It=p(Us),kn=zs.bind({});kn.args={modelValue:It,"onUpdate:modelValue":e=>{It.value=e}};const Ys=["Default"];var Gs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:As,Default:kn,__namedExportsOrder:Ys});const wn=P({name:"RobustDaterangePicker",components:{Calendar:Ne,Popper:_e,InputWrapper:ve,Button:ue,Checkbox:We,DatePicker:ct,PhCaretDown:ut,PhCalendar:Ut,PhArrowLeft:Qo,PhArrowRight:Zo,PhClockCounterClockwise:er},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:a,comparePerspectiveDate:r}=z(e),l=p(),u=p(!1),d=p(),y=p(),f=p(a.value),v=p(r.value),g=p(!1),V=p(),x=p(),b=p(!0),W=p(),C=S(()=>U.value.length>1),F=(B,E)=>E?ae(B,"dd.MM.yyyy HH:mm:ss"):ae(B,"dd.MM.yyyy"),J=S(()=>e.dateHistory||[]);let H=p();const U=p(s.value),N=S({get(){return U.value},set(B){U.value=B,t("update:compareDate",B),t("blur")}}),ee=S({get:()=>N.value.length>1,set:B=>{X(B)}}),pe=S(()=>{if(!o.value)return"Select date";const B=o.value;try{return B.length>1?ae(B[0],"P")+" - "+ae(B[1],"P"):ae(B[0],"P")+" - "+ae(B[0],"P")}catch{return}});function te(){u.value===!0&&(u.value=!1,g.value=!1,t("blur"))}const X=B=>{B?V.value=B:(t("update:comparison-date",void 0),N.value=void 0)};Ee(W,B=>{u.value&&(d.value.wrapperRef.contains(B.target)&&(B.stopPropagation(),B.preventDefault()),te(),t("blur"))});const ce=()=>{H.value=o.value,u.value=!u.value},me=()=>{V.value=!1},fe=async()=>{t("update:dateRange",H.value),t("change",H.value),t("blur"),u.value=!1},be=B=>{b.value=B};return Se(f,B=>{t("update:perspectiveDate",B)}),Se(v,B=>{t("update:comparePerspectiveDate",B)}),{displayCompare:V,computedCompare:N,attrs:n,props:e,refSelectContainer:l,pickedCompare:C,open:u,displayDate:pe,saveTime:fe,tmpDateRange:H,dateConfig:x,closeDropdown:te,showCompare:X,comparePerspectiveOf:v,compareWith:ee,storeHistory:b,handleClick:ce,goBack:me,mainCalendar:y,perspectiveOf:f,enabledHistory:g,dateHistory:J,formatDate:F,enableStoringHistory:be,inputWrapperRef:d,popperRef:W}},methods:{}}),qs=["id"],Ks={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Js=c("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},"Date range",-1),Xs={key:0,class:"flex flex-col items-start gap-y-3"},Qs=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Zs={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},el={key:1},tl={key:0,class:"flex flex-col items-start"},nl=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),ol={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},rl=De("Apply time range");function al(e,t,n,o,s,a){var V,x;const r=T("PhCalendar"),l=T("PhCaretDown"),u=T("InputWrapper"),d=T("DatePicker"),y=T("Checkbox"),f=T("Calendar"),v=T("Button"),g=T("Popper");return i(),m(A,null,[I(u,{title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:le(e.handleClick,["stop"])},{default:G(b=>[c("div",{class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[I(r,{size:"20"})],2),c("div",ie({id:b.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Ks,j(e.displayDate),1)],16,qs),c("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[I(l,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((V=e.inputWrapperRef)==null?void 0:V.wrapperRef)?(i(),K(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(x=e.inputWrapperRef)==null?void 0:x.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=b=>e.open=b),options:{placement:"bottom-start"}},{default:G(()=>[Js,c("div",null,[I(f,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=b=>e.tmpDateRange=b),"onClick:relativeDate":t[3]||(t[3]=b=>e.enableStoringHistory(!1))},{default:G(()=>[e.enablePerspective?(i(),m("div",Xs,[c("div",null,[Qs,I(d,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=b=>e.perspectiveOf=b)},null,8,["modelValue"])]),e.enableComparison?(i(),K(y,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=b=>e.compareWith=b),title:"Compare with"},null,8,["modelValue"])):_("",!0)])):_("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(i(),m("h3",Zs,"Comparison date range")):_("",!0),e.enableComparison?(i(),m("div",el,[I(f,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=b=>e.computedCompare=b),"onClick:relativeDate":t[6]||(t[6]=b=>e.enableStoringHistory(!1))},{default:G(()=>[e.enablePerspective?(i(),m("div",tl,[nl,I(d,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=b=>e.comparePerspectiveOf=b)},null,8,["modelValue"])])):_("",!0)]),_:1},8,["modelValue"])])):_("",!0),c("div",ol,[I(v,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:G(()=>[rl]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):_("",!0)],64)}var Sn=M(wn,[["render",al]]);wn.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var sl={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:Sn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const ll=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:Sn},setup(){return{args:e}}}),Dn=[new Date,new Date],Rt=p(Dn),Mt=p(Dn),$n=ll.bind({});$n.args={dateRange:Rt,"onUpdate:dateRange":e=>{Rt.value=e},compareDateRange:Mt,"onUpdate:compareDateRange":e=>{Mt.value=e}};const il=["Default"];var ul=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sl,Default:$n,__namedExportsOrder:il});let R,qe,Ke,Je,ye;const Xe=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},dl=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},jt=function(e,t){var n,o;if(Xe("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;R=this,qe=ye.handleClass&&R.querySelector(`.${ye.handleClass}`),Ke=Array.from((n=R==null?void 0:R.parentElement)==null?void 0:n.children).indexOf(R),(o=R==null?void 0:R.parentElement)==null||o.classList.add("drag")},Lt=function(e){var n;if(!R)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=R==null?void 0:R.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=R==null?void 0:R.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(R.classList.add(ye.placeholderClass),dl(R,t)?t.parentNode.insertBefore(R,t):t.parentNode.insertBefore(R,t.nextSibling))},Et=(e,t)=>{var s,a;if(!R)return;Xe("end",t,e),qe&&R.setAttribute("draggable","false"),R.classList.remove(ye.placeholderClass),(s=R==null?void 0:R.parentElement)==null||s.classList.remove("drag");const n=Ke,o=Array.from((a=R==null?void 0:R.parentElement)==null?void 0:a.children).indexOf(R);Je.splice(o,0,Je.splice(n,1)[0]),Xe("change",t,{from:n,to:o}),setTimeout(()=>{R=null,Ke=null,qe=null},0)},Ot=(e,t)=>{const n=ye.handleClass&&e.querySelector(`.${ye.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>jt.bind(e,o,t)(),e.ondragenter=Lt,e.ondragend=o=>Et.bind(e,o,t)(),e.ontouchstart=o=>jt.bind(e,o,t)(),e.ontouchmove=Lt,e.ontouchend=o=>Et.bind(e,o,t)()};var pl={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}Je=t.value&&t.value.value,ye={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Ot(s,n)),e.addEventListener("DOMNodeInserted",function(s){R||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Ot(s.target,n)})}};const _n=P({name:"RobustDraggable",directives:{draggable:pl},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e),o=S({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return se(()=>{console.log("alo")}),{list:o}}});function cl(e,t,n,o,s,a){const r=tr("draggable");return oe((i(),m("div",null,[(i(!0),m(A,null,Q(e.list,l=>(i(),m("div",{key:l},[L(e.$slots,"element",{item:l})]))),128))])),[[r,{value:e.list}]])}var xn=M(_n,[["render",cl]]);_n.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};var ml={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:xn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const fl=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:xn},setup(){let t=p([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),gl=fl.bind({}),yl=["Default"];var vl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ml,Default:gl,__namedExportsOrder:yl});const Cn=P({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),bl={class:"py-4 flex flex-col text-center items-center"},hl={class:"mb-4 text-gray-600 dark:text-gray-400"},kl={class:"text-xl text-gray-600 dark:text-gray-400 mb-2"},wl={class:"inline-block"};function Sl(e,t,n,o,s,a){return i(),m("div",bl,[c("div",hl,[e.$slots.icon?L(e.$slots,"icon",{key:1}):(i(),K(st(e.icon),{key:0,size:"40"}))]),c("div",kl,j(e.title),1),c("div",{class:D(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},j(e.description),3),c("div",wl,[L(e.$slots,"default")])])}var Fe=M(Cn,[["render",Sl]]);Cn.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};var Ve=P({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=p(!0),o=p(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=a=>{t("error",a),o.value=!0,n.value=!1},Z(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?we("div",{class:"flex items-center justify-center"},we(Oe,{size:24,stroke:2})):this.error?this.fallbackSrc?we("img",{src:this.fallbackSrc}):we(Be,{size:20}):we("img",{src:this.src})}}),Dl={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:Fe,argTypes:{title:{control:{type:"text",default:"Title"}}}};const $l=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:Fe},setup(){return{args:e}}}),Tn=$l.bind();Tn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const _l=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Fe,RobustButton:ue},setup(){return{args:e}}}),Bn=_l.bind();Bn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const xl=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Fe,RobustButton:ue,RobustImg:Ve},setup(){return{args:e}}}),Pn=xl.bind();Pn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const Cl=["Default","CallToAction","CustomIcon"];var Tl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dl,Default:Tn,CallToAction:Bn,CustomIcon:Pn,__namedExportsOrder:Cl});const Vn=P({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=z(e),o=S(()=>{var s,a,r,l,u;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(a=n.value)==null?void 0:a.gridstack.x,"gs-y":(r=n.value)==null?void 0:r.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(u=n.value)==null?void 0:u.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),Bl={class:"grid-stack-item-content bg-gray-300"};function Pl(e,t,n,o,s,a){return i(),m("div",ie({class:"grid-stack-item"},e.widgetAttributes),[c("div",Bl,[De(j(e.widget.id)+" "+j(e.widget.gridstack)+" ",1),(i(),K(st(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var Vl=M(Vn,[["render",Pl],["__scopeId","data-v-7520d7ac"]]);Vn.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const In=P({name:"RobustGrid",components:{GridItem:Vl},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=z(e),o,s=p();return Z(()=>{console.log("mounting"),o=nr.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(a,r)=>{!n.value||([...n.value],Array.isArray(r)&&n.value.forEach(l=>{let u=r.find(d=>d.id===l.id);u&&(l.gridstack=kt(ze({},l.gridstack),{x:u.x,y:u.y,w:u.w,h:u.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),Il={ref:"gridContainer",class:"grid-stack bg-gray-200"};function Rl(e,t,n,o,s,a){const r=T("GridItem");return i(),m("div",null,[De(j(e.locked)+" ",1),c("section",Il,[(i(!0),m(A,null,Q(e.widgets,l=>(i(),K(r,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var Rn=M(In,[["render",Rl],["__scopeId","data-v-dc6f9d18"]]);In.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Ml={title:"Ui/Grid",component:Rn,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Nt=P({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const jl=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:Rn},setup(){let t=p([{id:"test",component:$t(Nt),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:$t(Nt),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return Se(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),Ll=jl.bind(),El=["Default"];var Ol=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ml,Default:Ll,__namedExportsOrder:El}),Nl={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Ve,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Wl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Ve},setup(){return{args:e}}}),Mn=Wl.bind();Mn.args={title:"Img title"};const Fl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Ve},setup(){return{args:e}}}),jn=Fl.bind();jn.args={title:"Img title"};const Hl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Ve},setup(){return{args:e}}}),Ln=Hl.bind();Ln.args={title:"Img title"};const Al=["Default","Broken","Fallback"];var zl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nl,Default:Mn,Broken:jn,Fallback:Ln,__namedExportsOrder:Al}),Ul={parameters:{storySource:{source:`import Input from './Input.vue'

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
  template: '<Input v-bind="args"/>',
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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:pt,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const mt=e=>({template:'<Input v-bind="args"/>',components:{Input:pt},setup(){return{args:e}}}),En=mt.bind();En.args={modelValue:"Input text",title:"Input title"};const On=mt.bind();On.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Nn=mt.bind();Nn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Yl=["Default","Hint","ErrorHint"];var Gl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ul,Default:En,Hint:On,ErrorHint:Nn,__namedExportsOrder:Yl}),ql={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:ve,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const ft=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:ve},setup(){return{args:e}}}),Wn=ft.bind();Wn.args={title:"Input title",outline:!1};const Fn=ft.bind();Fn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Hn=ft.bind();Hn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Kl=["Default","Hint","ErrorHint"];var Jl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ql,Default:Wn,Hint:Fn,ErrorHint:Hn,__namedExportsOrder:Kl});const An=P({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=z(e),o=S(()=>`height:${t.value}px`),s=S(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function Xl(e,t,n,o,s,a){return i(),m("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:q([e.heightComputed])},[c("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:q([e.widthComputed])},null,4)],4)}var zn=M(An,[["render",Xl]]);An.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Ql={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:zn,argTypes:{progress:{control:{type:"number"}}}};const Zl=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:zn},setup(){return{args:e}}}),ei=Zl.bind(),ti=["Default"];var ni=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ql,Default:ei,__namedExportsOrder:ti});let $e,Qe,Ze,et,tt,nt,ot,rt,at,Te;const Un=e=>{const t=e||navigator.userAgent,n=/(iPad).*OS\s([\d_]+)/.test(t),o=!n&&/(iPhone\sOS)\s([\d_]+)/.test(t);return/(Android);?[\s/]+([\d.]+)?/.test(t)||o||n},oi=()=>{const e=document.body,t=window.innerWidth-e.clientWidth;$e=e.style.overflow,Qe=e.style.boxSizing,Ze=e.style.paddingRight,e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight=`${t+e.style.paddingRight}px`},ri=()=>{const e=document.body;e.style.overflow=$e,e.style.boxSizing=Qe,e.style.paddingRight=Ze,$e="",Qe="",Ze=""},ai=()=>{const e=document.documentElement,t=document.body;Te=e.scrollTop||t.scrollTop,et=e.style.height,tt=e.style.overflow,nt=t.style.top,ot=t.style.width,rt=t.style.height,at=t.style.position,$e=t.style.overflow,e.style.height="100%",e.style.overflow="hidden",t.style.top=`-${Te}px`,t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden"},si=()=>{const e="scrollBehavior"in document.documentElement.style,t=document.documentElement,n=document.body;t.style.height=et,t.style.overflow=tt,n.style.top=nt,n.style.width=ot,n.style.height=rt,n.style.position=at,n.style.overflow=$e,e?window.scrollTo({top:Te,behavior:"auto"}):window.scrollTo(0,Te),$e="",et="",tt="",nt="",ot="",rt="",at="",Te=""},li=()=>{Un()&&ai(),oi()},ii=()=>{Un()&&si(),ri()};const Yn=P({name:"RobustModal",inheritAttrs:!1,components:{PhX:or},props:{modalClass:{type:String},opened:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:n}=z(e);Se(n,r=>{r?li():ii()});function o(r){r.key==="Escape"&&n.value===!0&&(r.stopPropagation(),r.preventDefault(),a())}Z(()=>{window.addEventListener("keydown",o)}),it(()=>{window.removeEventListener("keydown",o)});async function s(){n.value=!0,t("update:opened",!0),t("open")}async function a(){n.value=!1,t("update:opened",!1),t("close")}return{open:s,close:a,opened:n}}}),ui={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},di={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},pi={class:"leading-4"};function ci(e,t,n,o,s,a){const r=T("PhX");return i(),K(ar,{to:"#modal-area"},[I(rr,ie(e.$attrs,{name:"slide"}),{default:G(()=>[e.opened?(i(),m("div",ui,[c("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75",onClick:t[0]||(t[0]=le((...l)=>e.close&&e.close(...l),["self"]))}),c("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Ce((...l)=>e.close&&e.close(...l),["esc"]))},[c("div",{class:D(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(i(),m("div",di,[c("div",pi,[L(e.$slots,"title",{},void 0,!0)]),c("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[I(r,{size:"20",class:"block"})])])):_("",!0),L(e.$slots,"default",{},void 0,!0)],2)],32)],512)):_("",!0)]),_:3},16)])}var Gn=M(Yn,[["render",ci],["__scopeId","data-v-5424aeae"]]);Yn.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};var mi={parameters:{storySource:{source:`import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from '../Button/Button.vue'

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
  template: ' <Button @click="args.opened.value = true">modal open {{args.opened}}</Button><Modal v-bind="args">test</Modal>',
  components: { Modal, Button },
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}}}}},title:"Ui/Modal",component:Gn,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const fi=e=>({template:' <Button @click="args.opened.value = true">modal open {{args.opened}}</Button><Modal v-bind="args">test</Modal>',components:{Modal:Gn,Button:ue},setup(){return{args:e}}}),qn=fi.bind();let Wt=p(!0);qn.args={title:"Modal title",opened:Wt,"onUpdate:opened":e=>{console.log("opeone"),Wt.value=e}};const gi=["Default"];var yi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mi,Default:qn,__namedExportsOrder:gi}),vi={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const Kn=P({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:S(()=>vi[e.variant])}}});function bi(e,t,n,o,s,a){return i(),m("div",{class:D([e.computedClass,"mb-4 border-l-4 p-4"])},[L(e.$slots,"default")],2)}var Jn=M(Kn,[["render",bi]]);Kn.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};var hi={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Jn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ki=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Jn},setup(){return{args:e}}}),wi=ki.bind(),Si=["Default"];var Di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hi,Default:wi,__namedExportsOrder:Si}),$i={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:_e,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const _i=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:_e},setup(){const t=p(!1);return{args:e,value:t}}}),Xn=_i.bind({});Xn.args={title:"Popper title",description:"Popper description text to be placed here"};const xi=["Default"];var Ci=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$i,Default:Xn,__namedExportsOrder:xi});let Ti=0;const Qn=P({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++Ti).toString(),s=S({get(){return e.modelValue===e.value},set(){let a=e.modelValue;a=e.value,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),Bi={class:"inline-block"},Pi=["id"],Vi=["for"],Ii={key:0,class:"w-full select-none leading-4"};function Ri(e,t,n,o,s,a){return i(),m("div",Bi,[oe(c("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),type:"radio",class:"hidden"},null,8,Pi),[[sr,e.isChecked]]),c("label",{for:`radio_${e.cuid}`,class:D([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[c("div",{class:D(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[c("div",{class:D([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(i(),m("div",Ii,j(e.title),1)):_("",!0),c("div",null,[e.$slots.title?L(e.$slots,"title",{key:0}):_("",!0)])],10,Vi)])}var Zn=M(Qn,[["render",Ri]]);Qn.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};var Mi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:Zn,argTypes:{title:{control:{type:"text"}}}};const ji=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:Zn},setup(){const t=p("test");return{args:e,value:t}}}),eo=ji.bind({});eo.args={title:"Radio title"};const Li=["Default"];var Ei=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mi,Default:eo,__namedExportsOrder:Li});const to=P({name:"RobustSelect",components:{Popper:_e,InputWrapper:ve,PhCheck:Ht,PhCaretDown:ut},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=p(),s=p(),{options:a}=z(e),r=p(!1),l=p(),u=p(),d=p("");let y=p([]);async function f(C){e.searchFunction!==void 0&&(y.value=await e.searchFunction(C)),C===""?y.value=a.value:y.value=a.value.filter(F=>F.title.toLowerCase().substring(0,C.length)===C.toLowerCase())}lr(d,async C=>{await f(C)},{debounce:150}),Z(async()=>{await f("")});const v=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:C=>{C.state.styles.popper.width=`${Math.max(C.state.rects.reference.width,200)}px`},effect:C=>{C.state.elements.popper.style.width=`${C.state.elements.reference.getBoundingClientRect().width}px`}}],g=S(()=>e.options.find(C=>C.value===e.modelValue));function V(C){se(()=>{b()}),t("update:modelValue",C.value),t("change",C.value)}function x(){r.value=!0,se(()=>{s.value.focus()}),t("focus")}Ee(l,C=>{r.value&&(u.value.wrapperRef.contains(C.target)&&(C.stopPropagation(),C.preventDefault()),W(),b(),t("blur"))});function b(){r.value=!1}function W(){d.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:b,open:r,props:e,openDropdown:x,inputWrapper:u,popperModifiers:v,activeItem:g,selectItem:V,computedOptions:y,resetFields:W,attrs:n,search:d,popperRef:l}}}),Oi=["id"],Ni={class:"min-w-0 select-none truncate"},Wi={key:0,class:"max-h-72 overflow-auto"},Fi=["onClick"],Hi={key:1,class:"py-2 text-center text-gray-400"};function Ai(e,t,n,o,s,a){var y,f;const r=T("PhCaretDown"),l=T("InputWrapper"),u=T("PhCheck"),d=T("Popper");return i(),m(A,null,[I(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:G(v=>[e.$slots.prefix?(i(),m("div",{key:0,class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):_("",!0),oe(c("div",ie({id:v.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[c("div",Ni,j(e.activeItem?e.activeItem.title:"Select"),1)],16,Oi),[[Ge,!e.open]]),oe(c("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=g=>e.search=g),size:"1",class:D(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ge,e.open],[lt,e.search]]),c("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[I(r,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((y=e.inputWrapper)==null?void 0:y.wrapperRef)?(i(),K(d,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=v=>e.open=v),ref:"popperRef",class:"z-[100] origin-top","append-to":(f=e.inputWrapper)==null?void 0:f.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:G(()=>[e.computedOptions.length>0?(i(),m("ul",Wi,[(i(!0),m(A,null,Q(e.computedOptions,v=>(i(),m("li",{key:v.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:g=>e.selectItem(v)},[c("span",null,j(v.title),1),e.modelValue===v.value?(i(),K(u,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):_("",!0)],8,Fi))),128))])):(i(),m("div",Hi,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):_("",!0)],64)}var no=M(to,[["render",Ai]]);to.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const zi=P({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});zi.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var Ui={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:no,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const gt=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:no},setup(){let t=p(void 0),n=p([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),oo=gt.bind();oo.args={title:"Input title"};const ro=gt.bind();ro.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const ao=gt.bind();ao.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Yi=["Default","Hint","ErrorHint"];var Gi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ui,Default:oo,Hint:ro,ErrorHint:ao,__namedExportsOrder:Yi});const so=P({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=p(e.modelValue),o=p(!1),s=p(!1),a=p(e.modelValue),r=p(),l=p(),u=p(),d=S(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":y},{"has-marker":e.showMarker}]),y=S(()=>Boolean(e.icon)),f=S(()=>({transform:"scaleX("+he(a.value)+")"})),v=S(()=>({left:he(a.value)*100+"%"})),g=S(()=>e.markerValue===void 0?e.modelValue:e.markerValue),V=S(()=>{const h=[];let Y=e.step*Math.ceil(x()/e.step);for(;Y<=b();)h.push(Y),Y+=e.step;return h}),x=()=>e.max>e.min?e.min:0,b=()=>e.max>e.min?e.max:100,W=()=>{r.value.focus()},C=()=>{N(n)},F=()=>{o.value=!0,t("focus")},J=()=>{o.value=!1,t("blur")},H=h=>{r.value.contains(h.target)||J()},U=h=>{h=ge(h),e.snapToSteps&&(h=Ie(h)),N(h)},N=h=>{h=ge(h),h!==a.value&&(a.value=h,t("update:modelValue",h),t("change",h))},ee=()=>{U(a.value+e.step)},pe=()=>{U(a.value-e.step)},te=()=>{let h=l.value,Y=h.offsetLeft;for(;h.offsetParent;)h=h.offsetParent,Y+=h.offsetLeft;return Y},X=h=>({left:h+"%"}),ce=()=>{document.addEventListener("touchend",w),document.addEventListener("mouseup",w),document.addEventListener("click",H),document.addEventListener("touchstart",H),fe()},me=()=>{document.removeEventListener("touchend",w),document.removeEventListener("mouseup",w),document.removeEventListener("click",H)},fe=()=>{const h=ge(a.value?a.value:0);N(h)},be=h=>{e.disabled||(o.value||F(),s.value=!0,E(h),document.addEventListener("touchmove",B),document.addEventListener("mousemove",B),t("dragstart",a.value,h))},B=h=>{E(h)},E=h=>{const Y=h.touches?h.touches[0].pageX:h.pageX,ne=l.value.offsetWidth,xe=(Y-te())/ne,He=ge(x()+xe*(b()-x()));s.value&&N(Math.round(He))},w=h=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&U(e.modelValue),document.removeEventListener("touchmove",B),document.removeEventListener("mousemove",B),t("dragend",a.value,h))},Ie=h=>{const Y=Math.floor(h/e.step)*e.step,ne=Y+e.step,xe=(Y+ne)/2;return Y<x()?ne>b()?h:ne:h>=xe&&ne<=b()?ne:Y},he=h=>(h-x())/(b()-x()),ge=h=>h<x()?x():h>b()?b():h;return Z(()=>{ce()}),ir(()=>{me()}),{slider:r,track:l,thumb:u,initialValue:n,isActive:o,isDragging:s,localValue:a,classes:d,hasIcon:y,fillStyle:f,thumbStyle:v,markerText:g,snapPoints:V,moderatedMin:x,moderatedMax:b,focus:W,reset:C,onFocus:F,onBlur:J,onExternalClick:H,setValueWithSnap:U,setValue:N,incrementValue:ee,decrementValue:pe,getTrackOffset:te,getPointStyle:X,initializeSlider:ce,teardownSlider:me,initializeDrag:fe,onDragStart:be,onDragMove:B,dragUpdate:E,onDragStop:w,getNearestSnapPoint:Ie,relativeValue:he,moderateValue:ge}}}),qi=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],Ki=["name","value"],Ji={key:1,class:"base-slider__icon"},Xi={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Qi={key:0},Zi={key:0,class:"base-slider__marker text-xs"},eu=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[c("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),tu={class:"base-slider__marker-text text-xs"};function nu(e,t,n,o,s,a){const r=T("feather");return i(),m("div",{ref:"slider",class:D(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Ce(le((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Ce(le((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Ce(le((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Ce(le((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(i(),m("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,Ki)):_("",!0),e.hasIcon?(i(),m("div",Ji,[L(e.$slots,"icon",{},()=>[I(r,{type:e.icon,size:"20"},null,8,["type"])])])):_("",!0),c("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[c("div",Xi,[e.snapToSteps?(i(),m("div",Qi,[(i(!0),m(A,null,Q(e.snapPoints,(l,u)=>(i(),m("span",{key:u,class:"base-slider__snap-point",style:q({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):_("",!0)]),c("div",{class:"base-slider__track-fill bg-primary-400",style:q(e.fillStyle)},null,4),c("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:q(e.thumbStyle)},[e.showMarker?(i(),m("div",Zi,[eu,c("span",tu,j(e.markerText),1)])):_("",!0)],4)],544)],42,qi)}var lo=M(so,[["render",nu]]);so.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};var ou={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:lo,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ru=e=>({template:'<Slider v-bind="args" />',components:{Slider:lo},setup(){return{args:e}}}),io=ru.bind();io.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Be};const au=["Default"];var su=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ou,Default:io,__namedExportsOrder:au}),lu={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Oe,argTypes:{}};const iu=e=>({template:"<Spinner />",components:{Spinner:Oe},setup(){return{args:e}}}),uu=iu.bind(),du=["Default"];var pu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lu,Default:uu,__namedExportsOrder:du});const uo=P({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e);return{isChecked:S({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),cu={class:"flex cursor-pointer items-center gap-x-3"},mu={key:0},fu={class:"text-sm text-gray-400"};function gu(e,t,n,o,s,a){return i(),m("label",cu,[oe(c("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),class:"hidden",type:"checkbox"},null,512),[[At,e.isChecked]]),c("div",{class:D(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[c("div",{class:D(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(i(),m("div",mu,[c("div",null,j(e.title),1),c("div",fu,j(e.description),1)])):_("",!0)])}var po=M(uo,[["render",gu]]);uo.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};var yu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:po,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const vu=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:po},setup(){const t=p(!1);return{args:e,value:t}}}),co=vu.bind({});co.args={title:"Switch title",description:"Switch description text to be placed here"};const bu=["Default"];var hu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yu,Default:co,__namedExportsOrder:bu});const mo=P({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=p(),o=p([]),s=r=>{var l;(l=o.value)==null||l.push(r)};return Z(()=>{const r=o.value.find(l=>l.dataset.value===e.modelValue);r&&(console.log(r),r.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:r=>{t("update:modelValue",r)},root:n,registerTab:s}}}),ku={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},wu=["data-value"],Su=["onClick"],Du=c("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function $u(e,t,n,o,s,a){return i(),m("div",ku,[(i(!0),m(A,null,Q(e.tabs,r=>(i(),m("div",{key:r.value,ref_for:!0,ref:e.registerTab,"data-value":r.value,class:D(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[r.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[L(e.$slots,"tab",{tab:r,select:()=>e.select(r.value)},()=>[c("div",{class:"px-4 py-3",onClick:()=>e.select(r.value)},j(r.title),9,Su)])],10,wu))),128)),Du],512)}var yt=M(mo,[["render",$u]]);mo.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};var _u={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:yt,argTypes:{rounded:{control:{type:"boolean"}}}};const xu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:yt},setup(){const t=p("item_1");return{args:e,value:t}}}),fo=xu.bind();fo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Cu=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:yt},setup(){const t=p("item_1");return{args:e,value:t}}}),go=Cu.bind();go.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Tu=["Default","Slotted"];var Bu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_u,Default:fo,Slotted:go,__namedExportsOrder:Tu});const yo=P({name:"RobustTextarea",inheritAttrs:!1,components:{InputWrapper:ve,PhWarningCircle:Ft},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=p(),s=n,a=S({get(){return e.modelValue},set(u){t("input",u),t("change",u),t("update:modelValue",u)}});function r(){var u;(u=o.value)==null||u.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),Pu=["id","disabled","readonly"],Vu={key:1,class:"text-red-400"};function Iu(e,t,n,o,s,a){const r=T("PhWarningCircle"),l=T("InputWrapper");return i(),K(l,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,class:D([e.condensed?"pt-1":"pt-2",e.$props.class]),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:G(u=>[e.$slots.prefix?(i(),m("div",{key:0,class:D(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):_("",!0),oe(c("textarea",ie({id:u.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=d=>e.inputFieldValue=d),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Pu),[[lt,e.inputFieldValue]]),e.$slots.suffix||e.error?(i(),m("div",{key:1,class:D(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(i(),m("div",Vu,[I(r,{size:"20",class:"block"})])):L(e.$slots,"suffix",{key:0,tag:"div"})],2)):_("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var vo=M(yo,[["render",Iu]]);yo.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Ru={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:vo,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const vt=e=>({template:'<Textarea v-bind="args"/>',components:{Textarea:vo},setup(){return{args:e}}}),bo=vt.bind();bo.args={modelValue:"Textarea text",title:"Textarea title"};const ho=vt.bind();ho.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const ko=vt.bind();ko.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const Mu=["Default","Hint","ErrorHint"];var ju=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ru,Default:bo,Hint:ho,ErrorHint:ko,__namedExportsOrder:Mu});const wo=P({name:"RobustWidgetWrapper",components:{Popper:_e,PhDotsThreeVertical:ur},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=p(!1),o=p(),s=p();Ee(s,r=>{n.value&&(o.value.contains(r.target)&&(r.stopPropagation(),r.preventDefault()),a(),t("blur"))});const a=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:a,popperRef:s,contextButtonRef:o}}}),Lu={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Eu(e,t,n,o,s,a){const r=T("PhDotsThreeVertical"),l=T("Popper");return i(),m(A,null,[c("div",ie(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[oe(c("div",{class:D(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ge,e.stripe]]),e.title||e.$slots.title?(i(),m("div",Lu,[e.$slots.title?L(e.$slots,"title",{key:0,title:e.title}):(i(),m(A,{key:1},[De(j(e.title),1)],64)),e.$slots.options?(i(),m("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=u=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[I(r,{size:"24",weight:"bold"})],512)):_("",!0)])):_("",!0),e.$slots.default?(i(),m("section",{key:1,class:D(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[L(e.$slots,"default")],2)):_("",!0),L(e.$slots,"raw")],16),I(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=u=>e.open=u),options:{placement:"bottom-end"}},{default:G(()=>[L(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var So=M(wo,[["render",Eu]]);wo.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};var Ou={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:So,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Nu=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:So},setup(){const t=p(!1);return{args:e,value:t}}}),Do=Nu.bind({});Do.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Wu=["Default"];var Fu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ou,Default:Do,__namedExportsOrder:Wu});function $o(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Gr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":xa,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Ea,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Ua,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":ks,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Os,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Gs,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":ul,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":vl,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":Tl,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":Ol,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":zl,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Gl,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Jl,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":ni,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":yi,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":Di,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":Ci,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":Ei,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":Gi,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":su,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":pu,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":hu,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":Bu,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":ju,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Fu}[e]}Object.assign($o,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});function Hu(e){e($o,{hot:!1},!1)}const Au=[gr,yr,vr,br,hr,kr,wr,Sr,Dr,$r,Tr].filter(Boolean);Au.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return fr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>mr(o,!1));case"loaders":return n.forEach(o=>cr(o,!1));case"parameters":return _t(ze({},n),!1);case"argTypesEnhancers":return n.forEach(o=>pr(o));case"argsEnhancers":return n.forEach(o=>dr(o));case"globals":case"globalTypes":{const o={};return o[t]=n,_t(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});Hu(_r);
//# sourceMappingURL=iframe.0017e2c7.js.map
