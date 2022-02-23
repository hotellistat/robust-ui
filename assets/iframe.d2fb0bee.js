var yo=Object.defineProperty,vo=Object.defineProperties;var bo=Object.getOwnPropertyDescriptors;var it=Object.getOwnPropertySymbols;var ho=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable;var ut=(e,t,n)=>t in e?yo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,He=(e,t)=>{for(var n in t||(t={}))ho.call(t,n)&&ut(e,n,t[n]);if(it)for(var n of it(t))ko.call(t,n)&&ut(e,n,t[n]);return e},dt=(e,t)=>vo(e,bo(t));import{d as P,c as $,u as wo,a as f,b as m,o as u,r as d,t as z,e as K,w as q,n as _,f as Je,g as B,h as j,i as x,P as Do,j as So,k as M,m as ie,l as Vt,p as re,v as $o,q as I,s as de,x as Ve,y as Ie,z as pt,A as Re,B as ct,C as _o,D as Co,E as xo,F as To,G as Bo,H as se,I as De,J as X,K as Ee,L as ze,M as Ue,N as Po,O as Vo,Q as Io,R as Ro,S as Eo,T as Mo,U as jo,V as Fo,W as Lo,X as oe,Y as H,Z,_ as Oo,$ as It,a0 as Rt,a1 as G,a2 as le,a3 as Et,a4 as Qe,a5 as Me,a6 as Se,a7 as we,a8 as mt,a9 as No,aa as Ze,ab as Mt,ac as je,ad as Ao,ae as Wo,af as xe,ag as Ho,ah as zo,ai as Ce,aj as Uo,ak as Yo,al as qo,am as Go,an as Ye,ao as Ko,ap as Xo,aq as Jo,ar as Qo,as as Zo,at as ft,au as gt,av as er,aw as tr,ax as nr,ay as or,az as rr,aA as ar,aB as sr,aC as lr,aD as ir,aE as ur,aF as dr,aG as pr,aH as cr,aI as mr,aJ as fr,aK as gr}from"./vendor.4b905ee0.js";const yr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};yr();const vr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:vr});var E=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const et=P({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=$(()=>.666*(e.size-2*e.safeMargin)),n=$(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:n}}}),yt=()=>{wo(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},vt=et.setup;et.setup=vt?(e,t)=>(yt(),vt(e,t)):yt;const jt=et,hr=["width","height","viewBox"],kr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function wr(e,t,n,o,s,a){return u(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[m("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,kr)],8,hr)}var Fe=E(jt,[["render",wr],["__scopeId","data-v-2e051f42"]]);jt.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var Dr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const Ft=P({name:"RobustButton",components:{RobustSpinner:Fe},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=d(!1),{loading:n,variant:o}=z(e);return{variantStyles:$(()=>Dr[o.value]),loading:n,displaySpinner:t}}}),Sr={key:0,class:"mr-2"},$r={class:"whitespace-no-wrap truncate"},_r={key:1,class:"ml-2"};function Cr(e,t,n,o,s,a){const r=B("RobustSpinner");return u(),K(Je(e.tag),{disabled:e.disabled,class:_(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:q(()=>[m("div",{class:_(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(u(),f("div",Sr,[j(e.$slots,"prefix",{tag:"div"})])):x("",!0),m("div",$r,[j(e.$slots,"default")]),e.$slots.suffix?(u(),f("div",_r,[j(e.$slots,"suffix",{tag:"div"})])):x("",!0)],2),e.loading?(u(),K(r,{key:0,size:20,stroke:2,class:"spinner absolute"})):x("",!0)]),_:3},8,["disabled","class"])}var ue=E(Ft,[["render",Cr]]);Ft.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var xr={parameters:{storySource:{source:`import Button from './Button.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:ue,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Tr=e=>({components:{Button:ue},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Br=Tr.bind({}),Pr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:ue,PhSmiley:Do},setup(){return{args:e}}}),Vr=Pr.bind(),Ir=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:ue,PhPaperPlaneTilt:So},setup(){return{args:e}}}),Rr=Ir.bind(),Er=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:ue},setup(){return{args:e}}}),Mr=Er.bind(),jr=["Default","Prefix","Suffix","Loading"];var Fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xr,Default:Br,Prefix:Vr,Suffix:Rr,Loading:Mr,__namedExportsOrder:jr});let Lr=0;const Lt=P({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},boxClass:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++Lr).toString(),o=/^on[^a-z]/,s=p=>o.test(p);let a=$(()=>Object.fromEntries(Object.entries(t).filter(p=>s(p[0]))));const r=d();function l(){}function i(){}return{cuid:n,wrapperRef:r,blurred:l,focused:i,listeners:a}}}),Or={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Nr={key:1,class:"block pt-1"},Ar={key:0,class:"select-none text-xs text-gray-400"},Wr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Hr(e,t,n,o,s,a){return u(),f("fieldset",{class:_([e.$props.class])},[e.title?(u(),f("legend",Or,M(e.title),1)):x("",!0),m("div",ie(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.boxClass,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[j(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(u(),f("label",Nr,[e.hint!==void 0?(u(),f("div",Ar,M(e.hint),1)):x("",!0),e.error!==void 0?(u(),f("div",Wr,M(e.error),1)):x("",!0)])):x("",!0)],2)}var ve=E(Lt,[["render",Hr]]);Lt.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"boxClass",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Ot=P({name:"RobustInput",inheritAttrs:!1,components:{RobustInputWrapper:ve,PhWarningCircle:Vt},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=d(),s=n,a=$({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function r(){var i;(i=o.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),zr=["id","disabled","readonly"],Ur={key:1,class:"text-red-400"};function Yr(e,t,n,o,s,a){const r=B("PhWarningCircle"),l=B("RobustInputWrapper");return u(),K(l,{title:e.title,hint:e.hint,error:e.error,class:_(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(i=>[e.$slots.prefix?(u(),f("div",{key:0,class:_(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[j(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),re(m("input",ie({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=p=>e.inputFieldValue=p),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,zr),[[$o,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),f("div",{key:1,class:_(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),f("div",Ur,[I(r,{size:"20",class:"block"})])):j(e.$slots,"suffix",{key:0,tag:"div"})],2)):x("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var tt=E(Ot,[["render",Yr]]);Ot.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var qr=[{title:"today",preset:()=>{const e=de(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=de(Ve(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Ie(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Ie(new Date),pt(new Date)]},{title:"this_year",preset:()=>[Re(new Date),ct(new Date)]},{title:"this_year_so_far",preset:()=>[Re(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=_o(Ve(new Date,7));return[e,Co(new Date(e))]}},{title:"last_month",preset:()=>{let e=Ie(Ve(Ie(new Date),1));return[e,pt(e)]}},{title:"last_year",preset:()=>{const e=Re(Ve(Re(new Date),1));return[e,ct(new Date(e))]}}],Gr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const Nt=P({name:"RobustCalendar",components:{RobustInput:tt,PhCaretLeft:xo,PhCaretRight:To},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:a}=z(e),r=d(),l=d(),i=d(),p=d(),y=d(),c=Array.isArray(a.value)?d(new Date):d(new Date(a.value)),v=d(),g=d({}),D=qr,h=$(()=>Gr[e.variant]),b=$(()=>{const C=new Date(c.value);return Bo(C)}),O=$(()=>{try{return se(c.value,"MMM")}catch{return}}),T=$(()=>{try{return se(c.value,"yyyy")}catch{return}}),A=$(()=>{const C=new Date(c.value);C.setDate(1);const w=C.getDay();return(w===0?7:w)-1}),J=$(()=>new Date(c.value).getMonth()),W=$(()=>new Date(c.value).getFullYear()),U=()=>{if(console.log("applying time"),r.value!=""&&!Ee(new Date(r.value))&&(i.value="Please enter a valid date."),l.value!=""&&!Ee(new Date(l.value))&&(p.value="Please enter a valid date."),Ee(new Date(r.value))&&Ee(new Date(l.value))){i.value="",p.value="";const C=[new Date(r.value),new Date(l.value)];t("update:modelValue",C)}},N=(C,w)=>{const L=ee(C,w);return L<0?1:L>0?-1:0},ee=(C,w)=>{const L=Date.UTC(w.getFullYear(),w.getMonth(),w.getDate()),ae=Date.UTC(C.getFullYear(),C.getMonth(),C.getDate());return(L-ae)/864e5},pe=C=>{if(!Array.isArray(a.value)||a.value.length<2||!N(...a.value))return!1;const w=new Date;w.setDate(C),w.setMonth(c.value.getMonth()),w.setFullYear(c.value.getFullYear());const L=ze(a.value);return!N(w,L)},te=C=>{if(!Array.isArray(a.value)||a.value.length<2||!N(...a.value))return!1;const w=new Date;w.setDate(C),w.setMonth(c.value.getMonth()),w.setFullYear(c.value.getFullYear());const L=Ue(a.value);return!N(w,L)},Q=C=>{if(!Array.isArray(a.value)||a.value.length<2)return!1;const w=new Date;w.setDate(C),w.setMonth(c.value.getMonth()),w.setFullYear(c.value.getFullYear());const L=ze(a.value),ae=Ue(a.value);return N(w,ae)===-1&&N(w,L)===1},ce=C=>{const w=new Date;if(w.setDate(C),w.setMonth(c.value.getMonth()),w.setFullYear(c.value.getFullYear()),Array.isArray(a.value)){const L=a.value.map(ae=>new Date(ae));for(let ae=0;ae<L.length;ae++)if(!N(L[ae],w))return!0}else if(!N(new Date(v.value),w))return!0};function me(C){t("update:modelValue",C),c.value=C[1]}function fe(){c.value=Po(c.value,1)}function be(){c.value=Vo(c.value,1)}function V(C){c.value=Io(c.value,C)}function F(){c.value=Ro(c.value,1)}function S(){c.value=Eo(c.value,1)}function Pe(C){c.value=Mo(c.value,C)}const he=C=>{const w=new Date(c.value).setDate(C);return!(!s.value&&jo(y.value,w)||!o.value&&Fo(y.value,w)>0||!n.value&&Lo(w))},ge=C=>{if(!he(C))return;const w=new Date;if(w.setDate(C),w.setMonth(c.value.getMonth()),w.setFullYear(c.value.getFullYear()),c.value=w,Array.isArray(a.value)){i.value="",p.value="";let L=[];a.value.length>=2?(L.push(new Date(c.value)),l.value=""):(L=a.value,L.push(new Date(c.value)),L.length>1&&(L=[de(ze(L),{hours:0,minutes:0,seconds:0}),de(Ue(L),{hours:23,minutes:59,seconds:59})],l.value=L[1].toLocaleDateString())),r.value=L[0].toLocaleDateString(),t("update:modelValue",L)}else v.value=new Date(c.value),t("update:modelValue",c.value)},k=()=>{c.value=new Date(new Date().setHours(12))};De(a,C=>{const w=C[0]||void 0,L=C[1]||void 0;w?r.value=w.toLocaleDateString():r.value="",L?l.value=L.toLocaleDateString():l.value=""}),X(()=>{if(Array.isArray(a.value)){c.value=new Date(a.value[1]||new Date),v.value=c.value;const C=a.value[0]||void 0,w=a.value[1]||void 0;C?r.value=C.toLocaleDateString():r.value="",w?l.value=w.toLocaleDateString():l.value=""}else c.value=new Date(a.value||new Date),v.value=c.value});const Y=$(()=>{const C=[];for(let w=1900;w<=2100;w++)C.push(w);return C}),ne=d(!1);function _e(){ne.value=!0}function Ae(){ne.value=!1}const We=d(!1);function fo(){We.value=!0,oe(()=>{g.value[W.value].scrollIntoView({block:"start",behavior:"auto"})})}function go(){We.value=!1}return{months:$(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:r,to:l,errorFrom:i,errorTo:p,showMonthSelectionActive:ne,showYearSelectionActive:We,now:y,cursor:c,selectedDate:v,showMonthSelection:_e,showYearSelection:fo,hideMonthSelection:Ae,hideYearSelection:go,daysInMonth:b,monthHeading:O,yearHeading:T,refYearEntry:g,setYear:V,setMonth:Pe,firstWeekday:A,activeMonth:J,activeYear:W,compareDates:N,applyTime:U,dayDiff:ee,isFirst:pe,isLast:te,isBetweenRange:Q,isSelectedDay:ce,addYear:fe,subYear:be,addMonth:F,subMonth:S,dayAllowed:he,daySelect:ge,reset:k,yearSelectionYears:Y,quickActions:D,setQuickAction:me,variantStyling:h}}}),Kr={class:"relative flex w-max select-none"},Xr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},Jr={class:"absolute inset-0 overflow-auto py-2"},Qr=["onClick"],Zr={class:"p-4 dark:border-gray-600"},ea={class:"mb-4 flex items-center text-center text-lg font-semibold"},ta={class:"flex flex-1"},na={class:"relative w-max"},oa={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},ra=["onClick"],aa={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},sa=["data-year","onClick"],la=Oo('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),ia=["disabled","onClick"],ua={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},da=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),pa=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function ca(e,t,n,o,s,a){const r=B("PhCaretLeft"),l=B("PhCaretRight"),i=B("RobustInput");return u(),f("div",Kr,[Array.isArray(e.modelValue)?(u(),f("div",Xr,[m("div",Jr,[(u(!0),f(H,null,Z(e.quickActions,p=>(u(),f("div",{key:p.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:y=>e.setQuickAction(p.preset())},M(p.title),9,Qr))),128))])])):x("",!0),m("section",Zr,[m("div",ea,[m("div",ta,[m("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},M(e.monthHeading),1),m("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},M(e.yearHeading),1)]),m("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...p)=>e.subMonth&&e.subMonth(...p))},[I(r,{type:"chevron-left",size:"14",weight:"bold"})]),m("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...p)=>e.addMonth&&e.addMonth(...p))},[I(l,{type:"chevron-right",size:"14",weight:"bold"})])]),m("div",na,[e.showMonthSelectionActive?(u(),f("div",oa,[(u(!0),f(H,null,Z(e.months,(p,y)=>(u(),f("div",{key:y,class:_(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===y?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(y),e.hideMonthSelection()}},M(p.title),11,ra))),128))])):x("",!0),e.showYearSelectionActive?(u(),f("div",aa,[(u(!0),f(H,null,Z(e.yearSelectionYears,p=>(u(),f("div",{ref_for:!0,ref:y=>e.refYearEntry[p]=y,key:p,class:_(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===p?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":p,onClick:()=>{e.setYear(p),e.hideYearSelection()}},M(p),11,sa))),128))])):x("",!0),m("div",{class:_(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[la,(u(!0),f(H,null,Z(e.firstWeekday,p=>(u(),f("div",{key:p+"_offset"}))),128)),(u(!0),f(H,null,Z(e.daysInMonth,p=>(u(),f("div",{key:p+"_day",class:_(["relative",[e.isBetweenRange(p)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(p),onClick:y=>e.daySelect(p)},[e.isLast(p)||e.isFirst(p)?(u(),f("div",{key:0,class:_(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(p)?"right-0 w-1/2":e.isLast(p)?"left-0 w-1/2":""]])},null,2)):x("",!0),m("div",{class:_(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(p)||e.isLast(p)||e.isFirst(p)||e.isSelectedDay(p)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},M(p),3)],10,ia))),128))],2)])]),Array.isArray(e.modelValue)?(u(),f("div",ua,[da,I(i,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=p=>e.from=p),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),pa,I(i,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=p=>e.to=p),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),j(e.$slots,"default")])):x("",!0)])}var Le=E(Nt,[["render",ca]]);Nt.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var ma={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Le,argTypes:{}};const At=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Le},setup(){return{args:e}}}),bt=d(new Date),Wt=At.bind({});Wt.args={modelValue:bt,"onUpdate:modelValue":e=>{bt.value=e,console.log(e)}};const fa=[new Date,new Date],ht=d(fa),Ht=At.bind({});Ht.args={modelValue:ht,"onUpdate:modelValue":e=>{ht.value=e,console.log(e)}};const ga=["Default","Range"];var ya=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ma,Default:Wt,Range:Ht,__namedExportsOrder:ga});const zt=P({components:{PhCheck:It},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=$({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(a){let r=e.modelValue;Array.isArray(r)?a?r.push(e.value):r.splice(r.indexOf(e.value),1):a?r=e.value:r=e.disabledValue,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),va={class:"inline-block"},ba={class:"flex cursor-pointer items-start"},ha=["id"],ka={key:0,class:"w-full select-none pt-px leading-4"},wa={key:1,class:"w-full select-none pt-px leading-4"};function Da(e,t,n,o,s,a){const r=B("PhCheck");return u(),f("div",va,[m("label",ba,[re(m("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,ha),[[Rt,e.isChecked]]),m("div",{class:_(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[I(r,{class:_([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(u(),f("div",ka,M(e.title),1)):x("",!0),!e.title&&e.$slots.title?(u(),f("div",wa,[j(e.$slots,"title")])):x("",!0)])])}var Oe=E(zt,[["render",Da]]);zt.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var Sa={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Oe,argTypes:{title:{control:{type:"text"}}}};const $a=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Oe},setup(){return{value:d(!1),args:e}}}),Ut=$a.bind({});Ut.args={title:"Checkbox title"};const _a=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Oe},setup(){return{value:d(!1),args:e}}}),Yt=_a.bind({});Yt.args={title:"V-Slot Checkbox title"};const Ca=["Default","SlottedTitle"];var xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Sa,Default:Ut,SlottedTitle:Yt,__namedExportsOrder:Ca});const qt=P({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),Ta=["width","height","viewBox"],Ba=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function Pa(e,t,n,o,s,a){return u(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[m("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Ba)],8,Ta)}var Gt=E(qt,[["render",Pa]]);qt.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Va={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Gt,argTypes:{progress:{control:{type:"number"}}}};const Ia=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Gt},setup(){return{args:e}}}),Ra=Ia.bind(),Ea=["Default"];var Ma=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Va,Default:Ra,__namedExportsOrder:Ea});function ke(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Fa(e):/rgb/.test(e)?t=wt(e):typeof e=="string"?t=wt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a}=t,{h:r,s:l,v:i}=La(t);return{r:n,g:o,b:s,a:a===void 0?1:a,h:r,s:l,v:i}}function Kt(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function kt(e,t,n,o,s,a){const r=e==="l",l=t.createLinearGradient(0,0,r?n:0,r?0:o);l.addColorStop(.01,s),l.addColorStop(.99,a),t.fillStyle=l,t.fillRect(0,0,n,o)}function ja({r:e,g:t,b:n},o){const s=r=>("0"+Number(r).toString(16)).slice(-2),a=`#${s(e)}${s(t)}${s(n)}`;return o?a.toUpperCase():a}function Fa(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function wt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function La({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),a=o-s;let r=0;o===s?r=0:o===e?t>=n?r=60*(t-n)/a:r=60*(t-n)/a+360:o===t?r=60*(n-e)/a+120:o===n&&(r=60*(e-t)/a+240),r=Math.floor(r);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),i=parseFloat(o.toFixed(2));return{h:r,s:l,v:i}}const Xt=P({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=d({}),{size:o,hsv:s,color:a}=z(e),r=d(),l=d(),i=c=>{const v=c,g=o.value,D=v.getContext("2d");v.width=g,v.height=g,D.fillStyle=a.value,D.fillRect(0,0,g,g),kt("l",D,g,g,"#FFFFFF","rgba(255,255,255,0)"),kt("p",D,g,g,"rgba(0,0,0,0)","#000000")},p=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},y=c=>{const{top:v,left:g}=r.value.getBoundingClientRect(),D=c.target.getContext("2d"),h=O=>{let T=O.clientX-g,A=O.clientY-v;T<0&&(T=0),A<0&&(A=0),T>o.value&&(T=o.value),A>o.value&&(A=o.value),n.value={left:T-5+"px",top:A-5+"px"};const J=D.getImageData(Math.min(T,o.value-1),Math.min(A,o.value-1),1,1),[W,U,N]=J.data;t("selectSaturation",{r:W,g:U,b:N})};h(c);const b=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",b)};return X(()=>{i(l.value),p()}),{slideSaturationStyle:n,selectSaturation:y,renderSlide:p,renderColor:i,saturation:r,canvasSaturation:l,color:a,hsv:s,size:o}}}),Oa={ref:"canvasSaturation"};function Na(e,t,n,o,s,a){return u(),f("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=le((...r)=>e.selectSaturation&&e.selectSaturation(...r),["prevent","stop"]))},[m("canvas",Oa,null,512),m("div",{style:G(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Aa=E(Xt,[["render",Na]]);Xt.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Jt=P({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=d({}),o=d(),{height:s,width:a,hsv:r}=z(e),l=d(),i=c=>{const v=c,g=a.value,D=s.value,h=v.getContext("2d");v.width=g,v.height=D;const b=h.createLinearGradient(0,0,0,D);b.addColorStop(0,"#FF0000"),b.addColorStop(.17*1,"#FF00FF"),b.addColorStop(.17*2,"#0000FF"),b.addColorStop(.17*3,"#00FFFF"),b.addColorStop(.17*4,"#00FF00"),b.addColorStop(.17*5,"#FFFF00"),b.addColorStop(1,"#FF0000"),h.fillStyle=b,h.fillRect(0,0,g,D)},p=()=>{n.value={top:(1-r.value.h/360)*s.value-2+"px"}},y=c=>{const{top:v}=l.value.getBoundingClientRect(),g=c.target.getContext("2d"),D=b=>{let O=b.clientY-v;O<0&&(O=0),O>s.value&&(O=s.value),n.value={top:O-2+"px"};const T=g.getImageData(0,Math.min(O,s.value-1),1,1),[A,J,W]=T.data;t("selectHue",{r:A,g:J,b:W})};D(c);const h=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",h)};return X(()=>{i(o.value),p()}),{slideHueStyle:n,hue:l,width:a,height:s,renderSlide:p,selectHue:y,renderColor:i,hsv:r,canvasHue:o}}}),Wa={ref:"canvasHue"};function Ha(e,t,n,o,s,a){return u(),f("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=le((...r)=>e.selectHue&&e.selectHue(...r),["prevent","stop"]))},[m("canvas",Wa,null,512),m("div",{style:G(e.slideHueStyle),class:"slide"},null,4)],544)}var za=E(Jt,[["render",Ha]]);Jt.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Qt=P({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=d(5),{color:n,width:o,height:s}=z(e),a=d(),r=l=>{const i=l,p=o.value,y=s.value,c=t.value,v=Kt(c),g=i.getContext("2d");i.width=p,i.height=y,g.fillStyle=g.createPattern(v,"repeat"),g.fillRect(0,0,p,y),g.fillStyle=n.value,g.fillRect(0,0,p,y)};return X(()=>{Et(()=>{r(a.value)}),r(a.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:a}}}),Ua={ref:"canvas"};function Ya(e,t,n,o,s,a){return u(),f("canvas",Ua,null,512)}var qa=E(Qt,[["render",Ya]]);Qt.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const Zt=P({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:$({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),Ga={class:"color-type"},Ka={class:"name"};function Xa(e,t,n,o,s,a){return u(),f("div",Ga,[m("span",Ka,M(e.name),1),re(m("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.modelColor=r),class:"value"},null,512),[[Qe,e.modelColor]])])}var Ja=E(Zt,[["render",Xa]]);Zt.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const en=P({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=d(),o=d([]),s=d();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Kt(4).toDataURL(),Me(()=>{a(n.value)});const a=l=>{if(!l)return;const i=o.value||[],p=i.indexOf(l);p>=0&&i.splice(p,1),i.length>=8&&(i.length=7),i.unshift(l),o.value=i||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(i))};return{setColorsHistory:a,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),Qa={class:"colors"},Za=["onClick"],es={key:0,class:"colors history"},ts=["onClick"];function ns(e,t,n,o,s,a){return u(),f("div",null,[m("ul",Qa,[(u(!0),f(H,null,Z(e.colorsDefault,r=>(u(),f("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[m("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),m("div",{style:G({background:r}),class:"color"},null,4)],8,Za))),128))]),e.colorsHistory.length?(u(),f("ul",es,[(u(!0),f(H,null,Z(e.colorsHistory,r=>(u(),f("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[m("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),m("div",{style:G({background:r}),class:"color"},null,4)],8,ts))),128))])):x("",!0)])}var os=E(en,[["render",ns]]);en.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const tn=P({name:"RobustColorPicker",components:{Saturation:Aa,Hue:za,Preview:qa,Box:Ja,Colors:os},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=d(15),o=d(152),s=d(20),a=d(""),r=d(""),l=d(0),i=d(0),p=d(0),y=d(1),c=d(0),v=d(0),g=d(0),D=d(),h=d(),{theme:b,color:O}=z(e),T=$(()=>b.value==="light"),A=$(()=>o.value+(n.value+8)*2),J=$(()=>A.value-s.value),W=$(()=>({r:l.value,g:i.value,b:p.value,a:y.value})),U=$(()=>({h:c.value,s:v.value,v:g.value})),N=$(()=>`rgb(${l.value}, ${i.value}, ${p.value})`),ee=$(()=>`${l.value}, ${i.value}, ${p.value}`),pe=$(()=>`rgb(${ee.value})`),te=$(()=>ja(W.value,!0)),Q=()=>{r.value=te.value,a.value=ee.value};return X(()=>{const F=ke(O.value);l.value=F.r,i.value=F.g,p.value=F.b,y.value=F.a,c.value=F.h,v.value=F.s,g.value=F.v,Q()}),Et(()=>{t("changeColor",{rgba:W.value,hsv:U.value,hex:r.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:a,modelHex:r,r:l,g:i,b:p,a:y,h:c,s:v,v:g,isLightTheme:T,totalWidth:A,previewWidth:J,rgba:W,hsv:U,rgbString:N,rgbStringShort:ee,rgbaString:pe,hexString:te,setText:Q,selectSaturation:F=>{const S=ke(F);l.value=S.r,i.value=S.g,p.value=S.b,y.value=S.a,c.value=S.h,v.value=S.s,g.value=S.v,Q()},selectHue:F=>{const S=ke(F);l.value=S.r,i.value=S.g,p.value=S.b,y.value=S.a,c.value=S.h,v.value=S.s,g.value=S.v,Q(),oe(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide()})},inputHex:F=>{const S=ke(F);l.value=S.r,i.value=S.g,p.value=S.b,y.value=S.a,c.value=S.h,v.value=S.s,g.value=S.v,r.value=F,a.value=ee.value,oe(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),D.value.renderSlide()})},inputRgba:F=>{const S=ke(F);l.value=S.r,i.value=S.g,p.value=S.b,y.value=S.a,c.value=S.h,v.value=S.s,g.value=S.v,r.value=te.value,a.value=`${l.value}, ${i.value}, ${p.value}`,oe(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),D.value.renderSlide()})},selectColor:F=>{const S=ke(F);l.value=S.r,i.value=S.g,p.value=S.b,y.value=S.a,c.value=S.h,v.value=S.s,g.value=S.v,Q(),oe(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),D.value.renderSlide()})},saturation:h,hue:D,color:O,theme:b}}}),rs={class:"color-set"};function as(e,t,n,o,s,a){const r=B("Saturation"),l=B("Hue"),i=B("Preview"),p=B("Box"),y=B("Colors");return u(),f("div",{class:_(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:G({width:e.totalWidth+"px"})},[m("div",rs,[I(r,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),I(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),m("div",{style:G({height:e.previewHeight+"px"}),class:"color-show"},[I(i,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),I(p,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),I(p,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),I(y,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var nn=E(tn,[["render",as]]);tn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var ss={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:nn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ls=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:nn},setup(){return{args:e}}}),is=ls.bind(),us=["Default"];var ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ss,Default:is,__namedExportsOrder:us});const on=P({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),ps={key:1,class:"flex items-center"},cs={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function ms(e,t,n,o,s,a){return e.$slots.default?(u(),f("div",ps,[m("div",{class:_(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),m("div",cs,[j(e.$slots,"default")]),m("div",{class:_(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(u(),f("div",{key:0,class:_(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var fs=E(on,[["render",ms]]);on.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const rn=P({name:"RobustContentBox",components:{RobustSeparator:fs},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),gs={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},ys={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},vs={class:"flex"},bs={key:1,class:"text-gray-500 dark:text-gray-500"},hs={class:"p-4 sm:p-6"};function ks(e,t,n,o,s,a){const r=B("RobustSeparator");return u(),f("section",gs,[e.description!==void 0||e.title!==void 0?(u(),f("header",ys,[e.stripe?(u(),f("div",{key:0,class:_(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):x("",!0),m("h1",vs,[m("div",{class:_(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[j(e.$slots,"title",{title:e.title},()=>[Se(M(e.title),1)])],2)]),e.description!==void 0?(u(),f("p",bs,[j(e.$slots,"description",{description:e.description},()=>[Se(M(e.description),1)])])):x("",!0)])):x("",!0),I(r),m("div",hs,[j(e.$slots,"default")])])}var Te=E(rn,[["render",ks]]);rn.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var ws={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Te,argTypes:{title:{control:{type:"text"}}}};const Ds=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),Ss=Ds.bind(),$s=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),an=$s.bind();an.args={title:"Input title"};const _s=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),sn=_s.bind();sn.args={title:"Input title"};const Cs=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),ln=Cs.bind();ln.args={title:"Input title"};const xs=["Default","Title","TitleProp","Stripe"];var Ts=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ws,Default:Ss,Title:an,TitleProp:sn,Stripe:ln,__namedExportsOrder:xs}),Bs=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],$e=P({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=z(e),a=d();let r;const l=d(!1),i={strategy:"absolute",placement:"bottom-start",modifiers:[...Bs,...e.modifiers]};function p(){r==null||r.destroy(),l.value=!1}async function y(g){if(!g)return;const D=Object.assign({},i,e.options);!a.value||(r=No(g,a.value,D),await r.update())}Me(()=>{p()});async function c(){await y(s.value),a.value&&(r==null||r.update(),mt.fromTo(a.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function v(){a.value&&mt.fromTo(a.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{p()})}return X(()=>{if(!n.default)throw new Error("Popper does not have a child slot");De(o,g=>{l.value=!0,oe(async()=>{g?c():v()})})}),{appendTo:s,root:a,render:l}},render(){if(this.render)return we("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const un=P({name:"RobustDatePicker",components:{RobustPopper:$e,RobustCalendar:Le,RobustInputWrapper:ve,PhCaretDown:Ze,PhCalendar:Mt},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=d(),{modelValue:s}=z(e),a=d(!1),r=d(),l=d();je(r,c=>{a.value&&(l.value.wrapperRef.contains(c.target)&&(c.stopPropagation(),c.preventDefault()),y(),t("blur"))});const i=$({get(){return(s==null?void 0:s.value)?s.value:new Date},set(c){a.value=!1,t("update:modelValue",c),t("change",c),t("blur")}}),p=$(()=>{if(!i.value)return"Select date";const c=i.value;try{return c?se(c,"P"):"Unknown"}catch{return}});function y(){a.value===!0&&(a.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:a,props:e,displayDate:p,computedValue:i,closeDropdown:y,popperRef:r,inputWrapperRef:l}},methods:{}}),Ps=["id"],Vs={class:"min-w-0 truncate tabular-nums"};function Is(e,t,n,o,s,a){var c,v;const r=B("PhCalendar"),l=B("PhCaretDown"),i=B("RobustInputWrapper"),p=B("RobustCalendar"),y=B("RobustPopper");return u(),f(H,null,[I(i,{title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=le(g=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:q(g=>[m("div",{class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[I(r,{size:"20"})],2),m("div",ie({id:g.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[m("div",Vs,M(e.displayDate),1)],16,Ps),m("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[I(l,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((c=e.inputWrapperRef)==null?void 0:c.wrapperRef)?(u(),K(y,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(v=e.inputWrapperRef)==null?void 0:v.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=g=>e.open=g),options:{placement:"bottom-start"}},{default:q(()=>[I(p,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=g=>e.computedValue=g)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):x("",!0)],64)}var nt=E(un,[["render",Is]]);un.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Rs={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:nt,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Es=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:nt},setup(){return{args:e}}}),Ms=new Date,Dt=d(Ms),dn=Es.bind({});dn.args={modelValue:Dt,"onUpdate:modelValue":e=>{Dt.value=e}};const js=["Default"];var Fs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rs,Default:dn,__namedExportsOrder:js});const Ls=P({props:{colors:{type:Array,default:["#FCA5A5","#EF4444","#FDBA74","#F97316","#FCD34D","#F59E0B","#FDE047","#EAB308","#BEF264","#84CC16","#86EFAC","#22C55E","#6EE7B7","#10B981","#5EEAD4","#14B8A6","#67E8F9","#06B6D4","#7DD3FC","#0EA5E9","#93C5FD","#3B82F6","#A5B4FC","#6366F1","#C4B5FD","#8B5CF6","#D8B4FE","#A855F7","#F0ABFC","#D946EF","#F9A8D4","#EC4899","#FDA4AF","#F43F5E"]}},setup(e,{emit:t}){return{selectedColor:o=>{t("change",o)}}}});Ls.__docgenInfo={exportName:"default",displayName:"ColorPalette",description:"",tags:{},props:[{name:"colors",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}}]};const pn=P({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),Os={class:"py-4 flex flex-col text-center items-center"},Ns={class:"mb-4 text-gray-600 dark:text-gray-400"},As={class:"text-xl text-gray-600 dark:text-gray-400 mb-2"},Ws={class:"inline-block"};function Hs(e,t,n,o,s,a){return u(),f("div",Os,[m("div",Ns,[e.$slots.icon?j(e.$slots,"icon",{key:1}):(u(),K(Je(e.icon),{key:0,size:"40"}))]),m("div",As,M(e.title),1),m("div",{class:_(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},M(e.description),3),m("div",Ws,[j(e.$slots,"default")])])}var Ne=E(pn,[["render",Hs]]);pn.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};let R,qe,Ge,Ke,ye;const Xe=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},zs=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},St=function(e,t){var n,o;if(Xe("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;R=this,qe=ye.handleClass&&R.querySelector(`.${ye.handleClass}`),Ge=Array.from((n=R==null?void 0:R.parentElement)==null?void 0:n.children).indexOf(R),(o=R==null?void 0:R.parentElement)==null||o.classList.add("drag")},$t=function(e){var n;if(!R)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=R==null?void 0:R.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=R==null?void 0:R.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(R.classList.add(ye.placeholderClass),zs(R,t)?t.parentNode.insertBefore(R,t):t.parentNode.insertBefore(R,t.nextSibling))},_t=(e,t)=>{var s,a;if(!R)return;Xe("end",t,e),qe&&R.setAttribute("draggable","false"),R.classList.remove(ye.placeholderClass),(s=R==null?void 0:R.parentElement)==null||s.classList.remove("drag");const n=Ge,o=Array.from((a=R==null?void 0:R.parentElement)==null?void 0:a.children).indexOf(R);Ke.splice(o,0,Ke.splice(n,1)[0]),Xe("change",t,{from:n,to:o}),setTimeout(()=>{R=null,Ge=null,qe=null},0)},Ct=(e,t)=>{const n=ye.handleClass&&e.querySelector(`.${ye.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>St.bind(e,o,t)(),e.ondragenter=$t,e.ondragend=o=>_t.bind(e,o,t)(),e.ontouchstart=o=>St.bind(e,o,t)(),e.ontouchmove=$t,e.ontouchend=o=>_t.bind(e,o,t)()};var Us={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}Ke=t.value&&t.value.value,ye={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Ct(s,n)),e.addEventListener("DOMNodeInserted",function(s){R||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Ct(s.target,n)})}};const cn=P({name:"RobustDraggable",directives:{draggable:Us},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e),o=$({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return oe(()=>{console.log("alo")}),{list:o}}});function Ys(e,t,n,o,s,a){const r=Ao("draggable");return re((u(),f("div",null,[(u(!0),f(H,null,Z(e.list,l=>(u(),f("div",{key:l},[j(e.$slots,"element",{item:l})]))),128))])),[[r,{value:e.list}]])}var mn=E(cn,[["render",Ys]]);cn.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};const fn=P({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=z(e),o=$(()=>{var s,a,r,l,i;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(a=n.value)==null?void 0:a.gridstack.x,"gs-y":(r=n.value)==null?void 0:r.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(i=n.value)==null?void 0:i.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),qs={class:"grid-stack-item-content bg-gray-300"};function Gs(e,t,n,o,s,a){return u(),f("div",ie({class:"grid-stack-item"},e.widgetAttributes),[m("div",qs,[Se(M(e.widget.id)+" "+M(e.widget.gridstack)+" ",1),(u(),K(Je(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var Ks=E(fn,[["render",Gs],["__scopeId","data-v-7520d7ac"]]);fn.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const gn=P({name:"RobustGrid",components:{GridItem:Ks},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=z(e),o,s=d();return X(()=>{console.log("mounting"),o=Wo.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(a,r)=>{!n.value||([...n.value],Array.isArray(r)&&n.value.forEach(l=>{let i=r.find(p=>p.id===l.id);i&&(l.gridstack=dt(He({},l.gridstack),{x:i.x,y:i.y,w:i.w,h:i.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),Xs={ref:"gridContainer",class:"grid-stack bg-gray-200"};function Js(e,t,n,o,s,a){const r=B("GridItem");return u(),f("div",null,[Se(M(e.locked)+" ",1),m("section",Xs,[(u(!0),f(H,null,Z(e.widgets,l=>(u(),K(r,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var yn=E(gn,[["render",Js],["__scopeId","data-v-dc6f9d18"]]);gn.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Be=P({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=d(!0),o=d(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=a=>{t("error",a),o.value=!0,n.value=!1},X(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?we("div",{class:"flex items-center justify-center"},we(Fe,{size:24,stroke:2})):this.error?this.fallbackSrc?we("img",{src:this.fallbackSrc}):we(xe,{size:20}):we("img",{src:this.src})}});const vn=P({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=z(e),o=$(()=>`height:${t.value}px`),s=$(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function Qs(e,t,n,o,s,a){return u(),f("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:G([e.heightComputed])},[m("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:G([e.widthComputed])},null,4)],4)}var bn=E(vn,[["render",Qs]]);vn.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};const hn=P({name:"RobustModal",inheritAttrs:!1,components:{PhX:Ho},props:{modalClass:{type:String},opened:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:n}=z(e);let o=zo(document.body);De(n,l=>{l?o.value=!0:o.value=!1});function s(l){l.key==="Escape"&&n.value===!0&&(l.stopPropagation(),l.preventDefault(),r())}X(()=>{window.addEventListener("keydown",s)}),Me(()=>{window.removeEventListener("keydown",s)});async function a(){n.value=!0,t("update:opened",!0),t("open")}async function r(){n.value=!1,t("update:opened",!1),t("close")}return{open:a,close:r,opened:n}}}),Zs={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},el={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},tl={class:"leading-4"};function nl(e,t,n,o,s,a){const r=B("PhX");return u(),K(Yo,{to:"#modal-area"},[I(Uo,ie(e.$attrs,{name:"slide"}),{default:q(()=>[e.opened?(u(),f("div",Zs,[m("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75",onClick:t[0]||(t[0]=le((...l)=>e.close&&e.close(...l),["self"]))}),m("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Ce((...l)=>e.close&&e.close(...l),["esc"]))},[m("div",{class:_(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(u(),f("div",el,[m("div",tl,[j(e.$slots,"title",{},void 0,!0)]),m("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[I(r,{size:"20",class:"block"})])])):x("",!0),j(e.$slots,"default",{},void 0,!0)],2)],32)],512)):x("",!0)]),_:3},16)])}var kn=E(hn,[["render",nl],["__scopeId","data-v-8b5e15d4"]]);hn.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};var ol={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const wn=P({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:$(()=>ol[e.variant])}}});function rl(e,t,n,o,s,a){return u(),f("div",{class:_([e.computedClass,"mb-4 border-l-4 p-4"])},[j(e.$slots,"default")],2)}var Dn=E(wn,[["render",rl]]);wn.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};let al=0;const Sn=P({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++al).toString(),s=$({get(){return e.modelValue===e.value},set(){let a=e.modelValue;a=e.value,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),sl={class:"inline-block"},ll=["id"],il=["for"],ul={key:0,class:"w-full select-none leading-4"};function dl(e,t,n,o,s,a){return u(),f("div",sl,[re(m("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),type:"radio",class:"hidden"},null,8,ll),[[qo,e.isChecked]]),m("label",{for:`radio_${e.cuid}`,class:_([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[m("div",{class:_(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[m("div",{class:_([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(u(),f("div",ul,M(e.title),1)):x("",!0),m("div",null,[e.$slots.title?j(e.$slots,"title",{key:0}):x("",!0)])],10,il)])}var $n=E(Sn,[["render",dl]]);Sn.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};const _n=P({name:"RobustSelect",components:{RobustPopper:$e,RobustInputWrapper:ve,PhCheck:It,PhCaretDown:Ze},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=d(),s=d(),{options:a}=z(e),r=d(!1),l=d(),i=d(),p=d("");let y=d([]);async function c(T){e.searchFunction!==void 0&&(y.value=await e.searchFunction(T)),T===""?y.value=a.value:y.value=a.value.filter(A=>A.title.toLowerCase().substring(0,T.length)===T.toLowerCase())}Go(p,async T=>{await c(T)},{debounce:150}),X(async()=>{await c("")});const v=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:T=>{T.state.styles.popper.width=`${Math.max(T.state.rects.reference.width,200)}px`},effect:T=>{T.state.elements.popper.style.width=`${T.state.elements.reference.getBoundingClientRect().width}px`}}],g=$(()=>e.options.find(T=>T.value===e.modelValue));function D(T){oe(()=>{b()}),t("update:modelValue",T.value),t("change",T.value)}function h(){r.value=!0,oe(()=>{s.value.focus()}),t("focus")}je(l,T=>{r.value&&(i.value.wrapperRef.contains(T.target)&&(T.stopPropagation(),T.preventDefault()),O(),b(),t("blur"))});function b(){r.value=!1}function O(){p.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:b,open:r,props:e,openDropdown:h,inputWrapper:i,popperModifiers:v,activeItem:g,selectItem:D,computedOptions:y,resetFields:O,attrs:n,search:p,popperRef:l}}}),pl=["id"],cl={class:"min-w-0 select-none truncate"},ml={key:0,class:"max-h-72 overflow-auto"},fl=["onClick"],gl={key:1,class:"py-2 text-center text-gray-400"};function yl(e,t,n,o,s,a){var y,c;const r=B("PhCaretDown"),l=B("RobustInputWrapper"),i=B("PhCheck"),p=B("RobustPopper");return u(),f(H,null,[I(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:q(v=>[e.$slots.prefix?(u(),f("div",{key:0,class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[j(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),re(m("div",ie({id:v.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[m("div",cl,M(e.activeItem?e.activeItem.title:"Select"),1)],16,pl),[[Ye,!e.open]]),re(m("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=g=>e.search=g),size:"1",class:_(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ye,e.open],[Qe,e.search]]),m("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[I(r,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((y=e.inputWrapper)==null?void 0:y.wrapperRef)?(u(),K(p,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=v=>e.open=v),ref:"popperRef",class:"z-[100] origin-top","append-to":(c=e.inputWrapper)==null?void 0:c.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:q(()=>[e.computedOptions.length>0?(u(),f("ul",ml,[(u(!0),f(H,null,Z(e.computedOptions,v=>(u(),f("li",{key:v.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:g=>e.selectItem(v)},[m("span",null,M(v.title),1),e.modelValue===v.value?(u(),K(i,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):x("",!0)],8,fl))),128))])):(u(),f("div",gl,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):x("",!0)],64)}var Cn=E(_n,[["render",yl]]);_n.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const xn=P({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=d(e.modelValue),o=d(!1),s=d(!1),a=d(e.modelValue),r=d(),l=d(),i=d(),p=$(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":y},{"has-marker":e.showMarker}]),y=$(()=>Boolean(e.icon)),c=$(()=>({transform:"scaleX("+he(a.value)+")"})),v=$(()=>({left:he(a.value)*100+"%"})),g=$(()=>e.markerValue===void 0?e.modelValue:e.markerValue),D=$(()=>{const k=[];let Y=e.step*Math.ceil(h()/e.step);for(;Y<=b();)k.push(Y),Y+=e.step;return k}),h=()=>e.max>e.min?e.min:0,b=()=>e.max>e.min?e.max:100,O=()=>{r.value.focus()},T=()=>{N(n)},A=()=>{o.value=!0,t("focus")},J=()=>{o.value=!1,t("blur")},W=k=>{r.value.contains(k.target)||J()},U=k=>{k=ge(k),e.snapToSteps&&(k=Pe(k)),N(k)},N=k=>{k=ge(k),k!==a.value&&(a.value=k,t("update:modelValue",k),t("change",k))},ee=()=>{U(a.value+e.step)},pe=()=>{U(a.value-e.step)},te=()=>{let k=l.value,Y=k.offsetLeft;for(;k.offsetParent;)k=k.offsetParent,Y+=k.offsetLeft;return Y},Q=k=>({left:k+"%"}),ce=()=>{document.addEventListener("touchend",S),document.addEventListener("mouseup",S),document.addEventListener("click",W),document.addEventListener("touchstart",W),fe()},me=()=>{document.removeEventListener("touchend",S),document.removeEventListener("mouseup",S),document.removeEventListener("click",W)},fe=()=>{const k=ge(a.value?a.value:0);N(k)},be=k=>{e.disabled||(o.value||A(),s.value=!0,F(k),document.addEventListener("touchmove",V),document.addEventListener("mousemove",V),t("dragstart",a.value,k))},V=k=>{F(k)},F=k=>{const Y=k.touches?k.touches[0].pageX:k.pageX,ne=l.value.offsetWidth,_e=(Y-te())/ne,Ae=ge(h()+_e*(b()-h()));s.value&&N(Math.round(Ae))},S=k=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&U(e.modelValue),document.removeEventListener("touchmove",V),document.removeEventListener("mousemove",V),t("dragend",a.value,k))},Pe=k=>{const Y=Math.floor(k/e.step)*e.step,ne=Y+e.step,_e=(Y+ne)/2;return Y<h()?ne>b()?k:ne:k>=_e&&ne<=b()?ne:Y},he=k=>(k-h())/(b()-h()),ge=k=>k<h()?h():k>b()?b():k;return X(()=>{ce()}),Ko(()=>{me()}),{slider:r,track:l,thumb:i,initialValue:n,isActive:o,isDragging:s,localValue:a,classes:p,hasIcon:y,fillStyle:c,thumbStyle:v,markerText:g,snapPoints:D,moderatedMin:h,moderatedMax:b,focus:O,reset:T,onFocus:A,onBlur:J,onExternalClick:W,setValueWithSnap:U,setValue:N,incrementValue:ee,decrementValue:pe,getTrackOffset:te,getPointStyle:Q,initializeSlider:ce,teardownSlider:me,initializeDrag:fe,onDragStart:be,onDragMove:V,dragUpdate:F,onDragStop:S,getNearestSnapPoint:Pe,relativeValue:he,moderateValue:ge}}}),vl=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],bl=["name","value"],hl={key:1,class:"base-slider__icon"},kl={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},wl={key:0},Dl={key:0,class:"base-slider__marker text-xs"},Sl=m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[m("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),$l={class:"base-slider__marker-text text-xs"};function _l(e,t,n,o,s,a){const r=B("feather");return u(),f("div",{ref:"slider",class:_(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Ce(le((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Ce(le((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Ce(le((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Ce(le((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(u(),f("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,bl)):x("",!0),e.hasIcon?(u(),f("div",hl,[j(e.$slots,"icon",{},()=>[I(r,{type:e.icon,size:"20"},null,8,["type"])])])):x("",!0),m("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[m("div",kl,[e.snapToSteps?(u(),f("div",wl,[(u(!0),f(H,null,Z(e.snapPoints,(l,i)=>(u(),f("span",{key:i,class:"base-slider__snap-point",style:G({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):x("",!0)]),m("div",{class:"base-slider__track-fill bg-primary-400",style:G(e.fillStyle)},null,4),m("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:G(e.thumbStyle)},[e.showMarker?(u(),f("div",Dl,[Sl,m("span",$l,M(e.markerText),1)])):x("",!0)],4)],544)],42,vl)}var Tn=E(xn,[["render",_l]]);xn.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};const Bn=P({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e);return{isChecked:$({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),Cl={class:"flex cursor-pointer items-center gap-x-3"},xl={key:0},Tl={class:"text-sm text-gray-400"};function Bl(e,t,n,o,s,a){return u(),f("label",Cl,[re(m("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),class:"hidden",type:"checkbox"},null,512),[[Rt,e.isChecked]]),m("div",{class:_(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[m("div",{class:_(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(u(),f("div",xl,[m("div",null,M(e.title),1),m("div",Tl,M(e.description),1)])):x("",!0)])}var Pn=E(Bn,[["render",Bl]]);Bn.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};const Vn=P({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=d(),o=d([]),s=r=>{var l;(l=o.value)==null||l.push(r)};return X(()=>{const r=o.value.find(l=>l.dataset.value===e.modelValue);r&&(console.log(r),r.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:r=>{t("update:modelValue",r)},root:n,registerTab:s}}}),Pl={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},Vl=["data-value"],Il=["onClick"],Rl=m("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function El(e,t,n,o,s,a){return u(),f("div",Pl,[(u(!0),f(H,null,Z(e.tabs,r=>(u(),f("div",{key:r.value,ref_for:!0,ref:e.registerTab,"data-value":r.value,class:_(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[r.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[j(e.$slots,"tab",{tab:r,select:()=>e.select(r.value)},()=>[m("div",{class:"px-4 py-3",onClick:()=>e.select(r.value)},M(r.title),9,Il)])],10,Vl))),128)),Rl],512)}var ot=E(Vn,[["render",El]]);Vn.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};const Ml=P({name:"RobustTabsSwitch",props:{tabs:{type:Array,required:!0},rounded:{type:Boolean,default:!1},modelValue:{required:!0}},setup(e,{emit:t}){const n=d([]),o=z(e),s=D=>{var h;(h=n.value)==null||h.push(D)},a=d(0),r=d(0),l=d(!1),i=d();d();const p=new ResizeObserver(()=>{const D=y();D&&c(D)});X(()=>{i.value&&p.observe(i.value),oe(()=>{l.value=!0})}),Me(()=>{i.value&&p.unobserve(i.value)});const y=()=>n.value.find(D=>D.dataset.value===o.modelValue.value),c=D=>{var T;const h=(T=i.value)==null?void 0:T.getBoundingClientRect();if(!h)throw new Error("no container box specified");const b=D.getBoundingClientRect(),O={x:b.x-h.x,y:b.y-h.y};a.value=O.x,r.value=b.width},v=(D,h)=>{t("update:modelValue",h),D.target&&D.target instanceof HTMLElement&&c(D.target)},g=y();return g&&c(g),{root:i,select:v,registerTab:s,showBackground:l,backgroundXOffset:a,backgroundWidth:r}}});Ml.__docgenInfo={displayName:"RobustTabsSwitch",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!0}]};const In=P({name:"RobustTextarea",inheritAttrs:!1,components:{RobustInputWrapper:ve,PhWarningCircle:Vt},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=d(),s=n,a=$({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function r(){var i;(i=o.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),jl=["id","disabled","readonly"],Fl={key:1,class:"text-red-400"};function Ll(e,t,n,o,s,a){const r=B("PhWarningCircle"),l=B("RobustInputWrapper");return u(),K(l,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,"box-class":[e.condensed?"pt-1":"pt-2",e.$props.class],readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(i=>[e.$slots.prefix?(u(),f("div",{key:0,class:_(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[j(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),re(m("textarea",ie({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=p=>e.inputFieldValue=p),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,jl),[[Qe,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),f("div",{key:1,class:_(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),f("div",Fl,[I(r,{size:"20",class:"block"})])):j(e.$slots,"suffix",{key:0,tag:"div"})],2)):x("",!0)]),_:3},8,["title","hint","error","box-class","readonly","disabled","condensed"])}var Rn=E(In,[["render",Ll]]);In.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const En=P({name:"RobustWidgetWrapper",components:{RobustPopper:$e,PhDotsThreeVertical:Xo},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=d(!1),o=d(),s=d();je(s,r=>{n.value&&(o.value.contains(r.target)&&(r.stopPropagation(),r.preventDefault()),a(),t("blur"))});const a=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:a,popperRef:s,contextButtonRef:o}}}),Ol={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Nl(e,t,n,o,s,a){const r=B("PhDotsThreeVertical"),l=B("RobustPopper");return u(),f(H,null,[m("div",ie(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[re(m("div",{class:_(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ye,e.stripe]]),e.title||e.$slots.title?(u(),f("div",Ol,[e.$slots.title?j(e.$slots,"title",{key:0,title:e.title}):(u(),f(H,{key:1},[Se(M(e.title),1)],64)),e.$slots.options?(u(),f("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=i=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[I(r,{size:"24",weight:"bold"})],512)):x("",!0)])):x("",!0),e.$slots.default?(u(),f("section",{key:1,class:_(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[j(e.$slots,"default")],2)):x("",!0),j(e.$slots,"raw")],16),I(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=i=>e.open=i),options:{placement:"bottom-end"}},{default:q(()=>[j(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var Mn=E(En,[["render",Nl]]);En.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};const jn=P({name:"RobustDaterangePicker",components:{RobustCalendar:Le,RobustPopper:$e,RobustInputWrapper:ve,RobustButton:ue,RobustCheckbox:Oe,RobustDatePicker:nt,PhCaretDown:Ze,PhCalendar:Mt,PhArrowLeft:Jo,PhArrowRight:Qo,PhClockCounterClockwise:Zo},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:a,comparePerspectiveDate:r}=z(e),l=d(),i=d(!1),p=d(),y=d(),c=d(a.value),v=d(r.value),g=d(!1),D=d(),h=d(),b=d(!0),O=d(),T=$(()=>U.value.length>1),A=(V,F)=>F?se(V,"dd.MM.yyyy HH:mm:ss"):se(V,"dd.MM.yyyy"),J=$(()=>e.dateHistory||[]);let W=d();const U=d(s.value),N=$({get(){return U.value},set(V){U.value=V,t("update:compareDate",V),t("blur")}}),ee=$({get:()=>N.value.length>1,set:V=>{Q(V)}}),pe=$(()=>{if(!o.value)return"Select date";const V=o.value;try{return V.length>1?se(V[0],"P")+" - "+se(V[1],"P"):se(V[0],"P")+" - "+se(V[0],"P")}catch{return}});function te(){i.value===!0&&(i.value=!1,g.value=!1,t("blur"))}const Q=V=>{V?D.value=V:(t("update:comparison-date",void 0),N.value=void 0)};je(O,V=>{i.value&&(p.value.wrapperRef.contains(V.target)&&(V.stopPropagation(),V.preventDefault()),te(),t("blur"))});const ce=()=>{W.value=o.value,i.value=!i.value},me=()=>{D.value=!1},fe=async()=>{t("update:dateRange",W.value),t("change",W.value),t("blur"),i.value=!1},be=V=>{b.value=V};return De(c,V=>{t("update:perspectiveDate",V)}),De(v,V=>{t("update:comparePerspectiveDate",V)}),{displayCompare:D,computedCompare:N,attrs:n,props:e,refSelectContainer:l,pickedCompare:T,open:i,displayDate:pe,saveTime:fe,tmpDateRange:W,dateConfig:h,closeDropdown:te,showCompare:Q,comparePerspectiveOf:v,compareWith:ee,storeHistory:b,handleClick:ce,goBack:me,mainCalendar:y,perspectiveOf:c,enabledHistory:g,dateHistory:J,formatDate:A,enableStoringHistory:be,inputWrapperRef:p,popperRef:O}},methods:{}}),Al=["id"],Wl={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Hl=m("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},"Date range",-1),zl={key:0,class:"flex flex-col items-start gap-y-3"},Ul=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Yl={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},ql={key:1},Gl={key:0,class:"flex flex-col items-start"},Kl=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Xl={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},Jl=Se("Apply time range");function Ql(e,t,n,o,s,a){var D,h;const r=B("PhCalendar"),l=B("PhCaretDown"),i=B("RobustInputWrapper"),p=B("RobustDatePicker"),y=B("RobustCheckbox"),c=B("RobustCalendar"),v=B("RobustButton"),g=B("RobustPopper");return u(),f(H,null,[I(i,{title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:le(e.handleClick,["stop"])},{default:q(b=>[m("div",{class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[I(r,{size:"20"})],2),m("div",ie({id:b.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[m("div",Wl,M(e.displayDate),1)],16,Al),m("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[I(l,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((D=e.inputWrapperRef)==null?void 0:D.wrapperRef)?(u(),K(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(h=e.inputWrapperRef)==null?void 0:h.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=b=>e.open=b),options:{placement:"bottom-start"}},{default:q(()=>[Hl,m("div",null,[I(c,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=b=>e.tmpDateRange=b),"onClick:relativeDate":t[3]||(t[3]=b=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(u(),f("div",zl,[m("div",null,[Ul,I(p,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=b=>e.perspectiveOf=b)},null,8,["modelValue"])]),e.enableComparison?(u(),K(y,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=b=>e.compareWith=b),title:"Compare with"},null,8,["modelValue"])):x("",!0)])):x("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(u(),f("h3",Yl,"Comparison date range")):x("",!0),e.enableComparison?(u(),f("div",ql,[I(c,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=b=>e.computedCompare=b),"onClick:relativeDate":t[6]||(t[6]=b=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(u(),f("div",Gl,[Kl,I(p,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=b=>e.comparePerspectiveOf=b)},null,8,["modelValue"])])):x("",!0)]),_:1},8,["modelValue"])])):x("",!0),m("div",Xl,[I(v,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:q(()=>[Jl]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):x("",!0)],64)}var Fn=E(jn,[["render",Ql]]);jn.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var Zl={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:Fn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const ei=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:Fn},setup(){return{args:e}}}),Ln=[new Date,new Date],xt=d(Ln),Tt=d(Ln),On=ei.bind({});On.args={dateRange:xt,"onUpdate:dateRange":e=>{xt.value=e},compareDateRange:Tt,"onUpdate:compareDateRange":e=>{Tt.value=e}};const ti=["Default"];var ni=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zl,Default:On,__namedExportsOrder:ti}),oi={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:mn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const ri=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:mn},setup(){let t=d([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),ai=ri.bind({}),si=["Default"];var li=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oi,Default:ai,__namedExportsOrder:si}),ii={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:Ne,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ui=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:Ne},setup(){return{args:e}}}),Nn=ui.bind();Nn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:xe};const di=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Ne,RobustButton:ue},setup(){return{args:e}}}),An=di.bind();An.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:xe};const pi=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Ne,RobustButton:ue,RobustImg:Be},setup(){return{args:e}}}),Wn=pi.bind();Wn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:xe};const ci=["Default","CallToAction","CustomIcon"];var mi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ii,Default:Nn,CallToAction:An,CustomIcon:Wn,__namedExportsOrder:ci}),fi={title:"Ui/Grid",component:yn,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Bt=P({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const gi=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:yn},setup(){let t=d([{id:"test",component:ft(Bt),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:ft(Bt),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return De(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),yi=gi.bind(),vi=["Default"];var bi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fi,Default:yi,__namedExportsOrder:vi}),hi={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Be,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ki=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Be},setup(){return{args:e}}}),Hn=ki.bind();Hn.args={title:"Img title"};const wi=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Be},setup(){return{args:e}}}),zn=wi.bind();zn.args={title:"Img title"};const Di=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Be},setup(){return{args:e}}}),Un=Di.bind();Un.args={title:"Img title"};const Si=["Default","Broken","Fallback"];var $i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hi,Default:Hn,Broken:zn,Fallback:Un,__namedExportsOrder:Si}),_i={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:tt,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const rt=e=>({template:'<Input class="mb-4" :cthulu="true" v-bind="args"/>',components:{Input:tt},setup(){return{args:e}}}),Yn=rt.bind();Yn.args={modelValue:"Input text",title:"Input title"};const qn=rt.bind();qn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Gn=rt.bind();Gn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Ci=["Default","Hint","ErrorHint"];var xi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_i,Default:Yn,Hint:qn,ErrorHint:Gn,__namedExportsOrder:Ci}),Ti={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:ve,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const at=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:ve},setup(){return{args:e}}}),Kn=at.bind();Kn.args={title:"Input title",outline:!1};const Xn=at.bind();Xn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Jn=at.bind();Jn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Bi=["Default","Hint","ErrorHint"];var Pi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ti,Default:Kn,Hint:Xn,ErrorHint:Jn,__namedExportsOrder:Bi}),Vi={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:bn,argTypes:{progress:{control:{type:"number"}}}};const Ii=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:bn},setup(){return{args:e}}}),Ri=Ii.bind(),Ei=["Default"];var Mi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vi,Default:Ri,__namedExportsOrder:Ei}),ji={parameters:{storySource:{source:`import { ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}}}}},title:"Ui/Modal",component:kn,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Fi=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',components:{Modal:kn,RobustButton:ue},setup(){return{args:e}}}),Qn=Fi.bind();let Pt=d(!0);Qn.args={title:"Modal title",opened:Pt,"onUpdate:opened":e=>{console.log("opeone"),Pt.value=e}};const Li=["Default"];var Oi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ji,Default:Qn,__namedExportsOrder:Li}),Ni={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Dn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Ai=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Dn},setup(){return{args:e}}}),Wi=Ai.bind(),Hi=["Default"];var zi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ni,Default:Wi,__namedExportsOrder:Hi}),Ui={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:$e,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Yi=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:$e},setup(){const t=d(!1);return{args:e,value:t}}}),Zn=Yi.bind({});Zn.args={title:"Popper title",description:"Popper description text to be placed here"};const qi=["Default"];var Gi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ui,Default:Zn,__namedExportsOrder:qi}),Ki={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:$n,argTypes:{title:{control:{type:"text"}}}};const Xi=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:$n},setup(){const t=d("test");return{args:e,value:t}}}),eo=Xi.bind({});eo.args={title:"Radio title"};const Ji=["Default"];var Qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ki,Default:eo,__namedExportsOrder:Ji});const Zi=P({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});Zi.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var eu={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:Cn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const st=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Cn},setup(){let t=d(void 0),n=d([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),to=st.bind();to.args={title:"Input title"};const no=st.bind();no.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const oo=st.bind();oo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const tu=["Default","Hint","ErrorHint"];var nu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:eu,Default:to,Hint:no,ErrorHint:oo,__namedExportsOrder:tu}),ou={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:Tn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ru=e=>({template:'<Slider v-bind="args" />',components:{Slider:Tn},setup(){return{args:e}}}),ro=ru.bind();ro.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:xe};const au=["Default"];var su=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ou,Default:ro,__namedExportsOrder:au}),lu={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Fe,argTypes:{}};const iu=e=>({template:"<Spinner />",components:{Spinner:Fe},setup(){return{args:e}}}),uu=iu.bind(),du=["Default"];var pu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lu,Default:uu,__namedExportsOrder:du}),cu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:Pn,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const mu=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:Pn},setup(){const t=d(!1);return{args:e,value:t}}}),ao=mu.bind({});ao.args={title:"Switch title",description:"Switch description text to be placed here"};const fu=["Default"];var gu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cu,Default:ao,__namedExportsOrder:fu}),yu={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:ot,argTypes:{rounded:{control:{type:"boolean"}}}};const vu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:ot},setup(){const t=d("item_1");return{args:e,value:t}}}),so=vu.bind();so.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const bu=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:ot},setup(){const t=d("item_1");return{args:e,value:t}}}),lo=bu.bind();lo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const hu=["Default","Slotted"];var ku=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yu,Default:so,Slotted:lo,__namedExportsOrder:hu}),wu={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:Rn,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const lt=e=>({template:'<Textarea v-bind="args"/>',components:{Textarea:Rn},setup(){return{args:e}}}),io=lt.bind();io.args={modelValue:"Textarea text",title:"Textarea title"};const uo=lt.bind();uo.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const po=lt.bind();po.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const Du=["Default","Hint","ErrorHint"];var Su=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wu,Default:io,Hint:uo,ErrorHint:po,__namedExportsOrder:Du}),$u={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:Mn,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const _u=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:Mn},setup(){const t=d(!1);return{args:e,value:t}}}),co=_u.bind({});co.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Cu=["Default"];var xu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$u,Default:co,__namedExportsOrder:Cu});function mo(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Fr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":ya,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":xa,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Ma,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":ds,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Ts,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Fs,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":ni,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":li,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":mi,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":bi,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":$i,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":xi,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Pi,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":Mi,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":Oi,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":zi,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":Gi,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":Qi,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":nu,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":su,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":pu,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":gu,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":ku,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":Su,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":xu}[e]}Object.assign(mo,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});function Tu(e){e(mo,{hot:!1},!1)}const Bu=[ar,sr,lr,ir,ur,dr,pr,cr,mr,fr,br].filter(Boolean);Bu.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return rr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>or(o,!1));case"loaders":return n.forEach(o=>nr(o,!1));case"parameters":return gt(He({},n),!1);case"argTypesEnhancers":return n.forEach(o=>tr(o));case"argsEnhancers":return n.forEach(o=>er(o));case"globals":case"globalTypes":{const o={};return o[t]=n,gt(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});Tu(gr);
//# sourceMappingURL=iframe.d2fb0bee.js.map
