var bo=Object.defineProperty,ho=Object.defineProperties;var ko=Object.getOwnPropertyDescriptors;var dt=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,So=Object.prototype.propertyIsEnumerable;var pt=(e,t,n)=>t in e?bo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t)=>{for(var n in t||(t={}))wo.call(t,n)&&pt(e,n,t[n]);if(dt)for(var n of dt(t))So.call(t,n)&&pt(e,n,t[n]);return e},ct=(e,t)=>ho(e,ko(t));import{d as P,c as w,u as Do,a as f,b as m,o as d,r as p,t as z,e as K,w as q,n as D,f as Ze,g as B,h as L,i as x,P as $o,j as _o,k as E,m as ue,l as Rt,p as ae,v as Co,q as R,s as de,x as Re,y as Ie,z as mt,A as Me,B as ft,C as xo,D as To,E as Bo,F as Po,G as Vo,H as le,I as Se,J as X,K as Ee,L as Ye,M as qe,N as Ro,O as Io,Q as Mo,R as Eo,S as Lo,T as jo,U as Fo,V as Oo,W as No,X as re,Y as H,Z,_ as Ao,$ as It,a0 as Mt,a1 as G,a2 as ie,a3 as Et,a4 as et,a5 as Le,a6 as De,a7 as we,a8 as gt,a9 as Wo,aa as tt,ab as Lt,ac as je,ad as Ho,ae as zo,af as Te,ag as Uo,ah as Yo,ai as xe,aj as qo,ak as Go,al as Ko,am as Xo,an as Ge,ao as Jo,ap as Qo,aq as Zo,ar as er,as as tr,at as vt,au as yt,av as nr,aw as or,ax as rr,ay as ar,az as sr,aA as lr,aB as ir,aC as ur,aD as dr,aE as pr,aF as cr,aG as mr,aH as fr,aI as gr,aJ as vr,aK as yr}from"./vendor.4b905ee0.js";const br=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};br();const hr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:hr});var M=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const nt=P({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=w(()=>.666*(e.size-2*e.safeMargin)),n=w(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:n}}}),bt=()=>{Do(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},ht=nt.setup;nt.setup=ht?(e,t)=>(bt(),ht(e,t)):bt;const jt=nt,wr=["width","height","viewBox"],Sr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function Dr(e,t,n,o,s,a){return d(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[m("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Sr)],8,wr)}var Fe=M(jt,[["render",Dr],["__scopeId","data-v-2e051f42"]]);jt.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var $r={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"};const Ft=P({name:"RobustButton",components:{RobustSpinner:Fe},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=p(!1),{loading:n,variant:o}=z(e);return{variantStyles:w(()=>$r[o.value]),loading:n,displaySpinner:t}}}),_r={key:0,class:"mr-2"},Cr={class:"whitespace-no-wrap truncate"},xr={key:1,class:"ml-2"};function Tr(e,t,n,o,s,a){const r=B("RobustSpinner");return d(),K(Ze(e.tag),{disabled:e.disabled,class:D(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:q(()=>[m("div",{class:D(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(d(),f("div",_r,[L(e.$slots,"prefix",{tag:"div"})])):x("",!0),m("div",Cr,[L(e.$slots,"default")]),e.$slots.suffix?(d(),f("div",xr,[L(e.$slots,"suffix",{tag:"div"})])):x("",!0)],2),e.loading?(d(),K(r,{key:0,size:20,stroke:2,class:"spinner absolute"})):x("",!0)]),_:3},8,["disabled","class"])}var oe=M(Ft,[["render",Tr]]);Ft.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Br={parameters:{storySource:{source:`import Button from './Button.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:oe,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Pr=e=>({components:{Button:oe},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Vr=Pr.bind({}),Rr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:oe,PhSmiley:$o},setup(){return{args:e}}}),Ir=Rr.bind(),Mr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:oe,PhPaperPlaneTilt:_o},setup(){return{args:e}}}),Er=Mr.bind(),Lr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:oe},setup(){return{args:e}}}),jr=Lr.bind(),Fr=["Default","Prefix","Suffix","Loading"];var Or=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Br,Default:Vr,Prefix:Ir,Suffix:Er,Loading:jr,__namedExportsOrder:Fr});let Nr=0;const Ot=P({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},boxClass:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++Nr).toString(),o=/^on[^a-z]/,s=u=>o.test(u);let a=w(()=>Object.fromEntries(Object.entries(t).filter(u=>s(u[0]))));const r=p();function l(){}function i(){}return{cuid:n,wrapperRef:r,blurred:l,focused:i,listeners:a}}}),Ar={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Wr={key:1,class:"block pt-1"},Hr={key:0,class:"select-none text-xs text-gray-400"},zr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Ur(e,t,n,o,s,a){return d(),f("fieldset",{class:D([e.$props.class])},[e.title?(d(),f("legend",Ar,E(e.title),1)):x("",!0),m("div",ue(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",[e.$props.boxClass,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[L(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(d(),f("label",Wr,[e.hint!==void 0?(d(),f("div",Hr,E(e.hint),1)):x("",!0),e.error!==void 0?(d(),f("div",zr,E(e.error),1)):x("",!0)])):x("",!0)],2)}var ye=M(Ot,[["render",Ur]]);Ot.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"boxClass",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Nt=P({name:"RobustInput",inheritAttrs:!1,components:{RobustInputWrapper:ye,PhWarningCircle:Rt},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=p(),s=n,a=w({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function r(){var i;(i=o.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),Yr=["id","disabled","readonly"],qr={key:1,class:"text-red-400"};function Gr(e,t,n,o,s,a){const r=B("PhWarningCircle"),l=B("RobustInputWrapper");return d(),K(l,{title:e.title,hint:e.hint,error:e.error,class:D(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(i=>[e.$slots.prefix?(d(),f("div",{key:0,class:D(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),ae(m("input",ue({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=u=>e.inputFieldValue=u),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-700",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Yr),[[Co,e.inputFieldValue]]),e.$slots.suffix||e.error?(d(),f("div",{key:1,class:D(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(d(),f("div",qr,[R(r,{size:"20",class:"block"})])):L(e.$slots,"suffix",{key:0,tag:"div"})],2)):x("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var ot=M(Nt,[["render",Gr]]);Nt.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Kr=[{title:"today",preset:()=>{const e=de(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=de(Re(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,de(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Ie(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Ie(new Date),mt(new Date)]},{title:"this_year",preset:()=>[Me(new Date),ft(new Date)]},{title:"this_year_so_far",preset:()=>[Me(new Date),de(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=xo(Re(new Date,7));return[e,To(new Date(e))]}},{title:"last_month",preset:()=>{let e=Ie(Re(Ie(new Date),1));return[e,mt(e)]}},{title:"last_year",preset:()=>{const e=Me(Re(Me(new Date),1));return[e,ft(new Date(e))]}}],Xr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const At=P({name:"RobustCalendar",components:{RobustInput:ot,PhCaretLeft:Bo,PhCaretRight:Po},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:a}=z(e),r=p(),l=p(),i=p(),u=p(),g=p(),c=Array.isArray(a.value)?p(new Date):p(new Date(a.value)),y=p(),v=p({}),$=Kr,h=w(()=>Xr[e.variant]),b=w(()=>{const C=new Date(c.value);return Vo(C)}),O=w(()=>{try{return le(c.value,"MMM")}catch{return}}),T=w(()=>{try{return le(c.value,"yyyy")}catch{return}}),A=w(()=>{const C=new Date(c.value);C.setDate(1);const S=C.getDay();return(S===0?7:S)-1}),J=w(()=>new Date(c.value).getMonth()),W=w(()=>new Date(c.value).getFullYear()),U=()=>{if(console.log("applying time"),r.value!=""&&!Ee(new Date(r.value))&&(i.value="Please enter a valid date."),l.value!=""&&!Ee(new Date(l.value))&&(u.value="Please enter a valid date."),Ee(new Date(r.value))&&Ee(new Date(l.value))){i.value="",u.value="";const C=[new Date(r.value),new Date(l.value)];t("update:modelValue",C)}},N=(C,S)=>{const F=ee(C,S);return F<0?1:F>0?-1:0},ee=(C,S)=>{const F=Date.UTC(S.getFullYear(),S.getMonth(),S.getDate()),se=Date.UTC(C.getFullYear(),C.getMonth(),C.getDate());return(F-se)/864e5},pe=C=>{if(!Array.isArray(a.value)||a.value.length<2||!N(...a.value))return!1;const S=new Date;S.setDate(C),S.setMonth(c.value.getMonth()),S.setFullYear(c.value.getFullYear());const F=Ye(a.value);return!N(S,F)},te=C=>{if(!Array.isArray(a.value)||a.value.length<2||!N(...a.value))return!1;const S=new Date;S.setDate(C),S.setMonth(c.value.getMonth()),S.setFullYear(c.value.getFullYear());const F=qe(a.value);return!N(S,F)},Q=C=>{if(!Array.isArray(a.value)||a.value.length<2)return!1;const S=new Date;S.setDate(C),S.setMonth(c.value.getMonth()),S.setFullYear(c.value.getFullYear());const F=Ye(a.value),se=qe(a.value);return N(S,se)===-1&&N(S,F)===1},ce=C=>{const S=new Date;if(S.setDate(C),S.setMonth(c.value.getMonth()),S.setFullYear(c.value.getFullYear()),Array.isArray(a.value)){const F=a.value.map(se=>new Date(se));for(let se=0;se<F.length;se++)if(!N(F[se],S))return!0}else if(!N(new Date(y.value),S))return!0};function me(C){t("update:modelValue",C),c.value=C[1]}function fe(){c.value=Ro(c.value,1)}function be(){c.value=Io(c.value,1)}function V(C){c.value=Mo(c.value,C)}function j(){c.value=Eo(c.value,1)}function _(){c.value=Lo(c.value,1)}function Ve(C){c.value=jo(c.value,C)}const he=C=>{const S=new Date(c.value).setDate(C);return!(!s.value&&Fo(g.value,S)||!o.value&&Oo(g.value,S)>0||!n.value&&No(S))},ge=C=>{if(!he(C))return;const S=new Date;if(S.setDate(C),S.setMonth(c.value.getMonth()),S.setFullYear(c.value.getFullYear()),c.value=S,Array.isArray(a.value)){i.value="",u.value="";let F=[];a.value.length>=2?(F.push(new Date(c.value)),l.value=""):(F=a.value,F.push(new Date(c.value)),F.length>1&&(F=[de(Ye(F),{hours:0,minutes:0,seconds:0}),de(qe(F),{hours:23,minutes:59,seconds:59})],l.value=F[1].toLocaleDateString())),r.value=F[0].toLocaleDateString(),t("update:modelValue",F)}else y.value=new Date(c.value),t("update:modelValue",c.value)},k=()=>{c.value=new Date(new Date().setHours(12))};Se(a,C=>{const S=C[0]||void 0,F=C[1]||void 0;S?r.value=S.toLocaleDateString():r.value="",F?l.value=F.toLocaleDateString():l.value=""}),X(()=>{if(Array.isArray(a.value)){c.value=new Date(a.value[1]||new Date),y.value=c.value;const C=a.value[0]||void 0,S=a.value[1]||void 0;C?r.value=C.toLocaleDateString():r.value="",S?l.value=S.toLocaleDateString():l.value=""}else c.value=new Date(a.value||new Date),y.value=c.value});const Y=w(()=>{const C=[];for(let S=1900;S<=2100;S++)C.push(S);return C}),ne=p(!1);function Ce(){ne.value=!0}function He(){ne.value=!1}const ze=p(!1);function vo(){ze.value=!0,re(()=>{v.value[W.value].scrollIntoView({block:"start",behavior:"auto"})})}function yo(){ze.value=!1}return{months:w(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:r,to:l,errorFrom:i,errorTo:u,showMonthSelectionActive:ne,showYearSelectionActive:ze,now:g,cursor:c,selectedDate:y,showMonthSelection:Ce,showYearSelection:vo,hideMonthSelection:He,hideYearSelection:yo,daysInMonth:b,monthHeading:O,yearHeading:T,refYearEntry:v,setYear:V,setMonth:Ve,firstWeekday:A,activeMonth:J,activeYear:W,compareDates:N,applyTime:U,dayDiff:ee,isFirst:pe,isLast:te,isBetweenRange:Q,isSelectedDay:ce,addYear:fe,subYear:be,addMonth:j,subMonth:_,dayAllowed:he,daySelect:ge,reset:k,yearSelectionYears:Y,quickActions:$,setQuickAction:me,variantStyling:h}}}),Jr={class:"relative flex w-max select-none"},Qr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-700"},Zr={class:"absolute inset-0 overflow-auto py-2"},ea=["onClick"],ta={class:"p-4 dark:border-gray-700"},na={class:"mb-4 flex items-center text-center text-lg font-semibold"},oa={class:"flex flex-1"},ra={class:"relative w-max"},aa={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},sa=["onClick"],la={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},ia=["data-year","onClick"],ua=Ao('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),da=["disabled","onClick"],pa={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-700"},ca=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),ma=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function fa(e,t,n,o,s,a){const r=B("PhCaretLeft"),l=B("PhCaretRight"),i=B("RobustInput");return d(),f("div",Jr,[Array.isArray(e.modelValue)?(d(),f("div",Qr,[m("div",Zr,[(d(!0),f(H,null,Z(e.quickActions,u=>(d(),f("div",{key:u.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800",onClick:g=>e.setQuickAction(u.preset())},E(u.title),9,ea))),128))])])):x("",!0),m("section",ta,[m("div",na,[m("div",oa,[m("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-800",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},E(e.monthHeading),1),m("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-800",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},E(e.yearHeading),1)]),m("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...u)=>e.subMonth&&e.subMonth(...u))},[R(r,{type:"chevron-left",size:"14",weight:"bold"})]),m("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...u)=>e.addMonth&&e.addMonth(...u))},[R(l,{type:"chevron-right",size:"14",weight:"bold"})])]),m("div",ra,[e.showMonthSelectionActive?(d(),f("div",aa,[(d(!0),f(H,null,Z(e.months,(u,g)=>(d(),f("div",{key:g,class:D(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===g?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-700"]]),onClick:()=>{e.setMonth(g),e.hideMonthSelection()}},E(u.title),11,sa))),128))])):x("",!0),e.showYearSelectionActive?(d(),f("div",la,[(d(!0),f(H,null,Z(e.yearSelectionYears,u=>(d(),f("div",{ref_for:!0,ref:g=>e.refYearEntry[u]=g,key:u,class:D(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===u?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-700"]]),"data-year":u,onClick:()=>{e.setYear(u),e.hideYearSelection()}},E(u),11,ia))),128))])):x("",!0),m("div",{class:D(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ua,(d(!0),f(H,null,Z(e.firstWeekday,u=>(d(),f("div",{key:u+"_offset"}))),128)),(d(!0),f(H,null,Z(e.daysInMonth,u=>(d(),f("div",{key:u+"_day",class:D(["relative",[e.isBetweenRange(u)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(u),onClick:g=>e.daySelect(u)},[e.isLast(u)||e.isFirst(u)?(d(),f("div",{key:0,class:D(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(u)?"right-0 w-1/2":e.isLast(u)?"left-0 w-1/2":""]])},null,2)):x("",!0),m("div",{class:D(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(u)||e.isLast(u)||e.isFirst(u)||e.isSelectedDay(u)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-800"]])},E(u),3)],10,da))),128))],2)])]),Array.isArray(e.modelValue)?(d(),f("div",pa,[ca,R(i,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=u=>e.from=u),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),ma,R(i,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=u=>e.to=u),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),L(e.$slots,"default")])):x("",!0)])}var Oe=M(At,[["render",fa]]);At.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var ga={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Oe,argTypes:{}};const Wt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Oe},setup(){return{args:e}}}),kt=p(new Date),Ht=Wt.bind({});Ht.args={modelValue:kt,"onUpdate:modelValue":e=>{kt.value=e,console.log(e)}};const va=[new Date,new Date],wt=p(va),zt=Wt.bind({});zt.args={modelValue:wt,"onUpdate:modelValue":e=>{wt.value=e,console.log(e)}};const ya=["Default","Range"];var ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ga,Default:Ht,Range:zt,__namedExportsOrder:ya});const Ut=P({components:{PhCheck:It},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=w({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(a){let r=e.modelValue;Array.isArray(r)?a?r.push(e.value):r.splice(r.indexOf(e.value),1):a?r=e.value:r=e.disabledValue,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),ha={class:"inline-block"},ka={class:"flex cursor-pointer items-start"},wa=["id"],Sa={key:0,class:"w-full select-none pt-px leading-4"},Da={key:1,class:"w-full select-none pt-px leading-4"};function $a(e,t,n,o,s,a){const r=B("PhCheck");return d(),f("div",ha,[m("label",ka,[ae(m("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,wa),[[Mt,e.isChecked]]),m("div",{class:D(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[R(r,{class:D([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(d(),f("div",Sa,E(e.title),1)):x("",!0),!e.title&&e.$slots.title?(d(),f("div",Da,[L(e.$slots,"title")])):x("",!0)])])}var Ne=M(Ut,[["render",$a]]);Ut.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var _a={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Ne,argTypes:{title:{control:{type:"text"}}}};const Ca=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>{{value}}',components:{Checkbox:Ne},setup(){return{value:p(!1),args:e}}}),Yt=Ca.bind({});Yt.args={title:"Checkbox title"};const xa=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Ne},setup(){return{value:p(!1),args:e}}}),qt=xa.bind({});qt.args={title:"V-Slot Checkbox title"};const Ta=["Default","SlottedTitle"];var Ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_a,Default:Yt,SlottedTitle:qt,__namedExportsOrder:Ta});const Gt=P({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),Pa=["width","height","viewBox"],Va=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function Ra(e,t,n,o,s,a){return d(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[m("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Va)],8,Pa)}var Kt=M(Gt,[["render",Ra]]);Gt.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Ia={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Kt,argTypes:{progress:{control:{type:"number"}}}};const Ma=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Kt},setup(){return{args:e}}}),Ea=Ma.bind(),La=["Default"];var ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ia,Default:Ea,__namedExportsOrder:La});function ke(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Oa(e):/rgb/.test(e)?t=Dt(e):typeof e=="string"?t=Dt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a}=t,{h:r,s:l,v:i}=Na(t);return{r:n,g:o,b:s,a:a===void 0?1:a,h:r,s:l,v:i}}function Xt(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function St(e,t,n,o,s,a){const r=e==="l",l=t.createLinearGradient(0,0,r?n:0,r?0:o);l.addColorStop(.01,s),l.addColorStop(.99,a),t.fillStyle=l,t.fillRect(0,0,n,o)}function Fa({r:e,g:t,b:n},o){const s=r=>("0"+Number(r).toString(16)).slice(-2),a=`#${s(e)}${s(t)}${s(n)}`;return o?a.toUpperCase():a}function Oa(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function Dt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Na({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),a=o-s;let r=0;o===s?r=0:o===e?t>=n?r=60*(t-n)/a:r=60*(t-n)/a+360:o===t?r=60*(n-e)/a+120:o===n&&(r=60*(e-t)/a+240),r=Math.floor(r);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),i=parseFloat(o.toFixed(2));return{h:r,s:l,v:i}}const Jt=P({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=p({}),{size:o,hsv:s,color:a}=z(e),r=p(),l=p(),i=c=>{const y=c,v=o.value,$=y.getContext("2d");y.width=v,y.height=v,$.fillStyle=a.value,$.fillRect(0,0,v,v),St("l",$,v,v,"#FFFFFF","rgba(255,255,255,0)"),St("p",$,v,v,"rgba(0,0,0,0)","#000000")},u=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},g=c=>{const{top:y,left:v}=r.value.getBoundingClientRect(),$=c.target.getContext("2d"),h=O=>{let T=O.clientX-v,A=O.clientY-y;T<0&&(T=0),A<0&&(A=0),T>o.value&&(T=o.value),A>o.value&&(A=o.value),n.value={left:T-5+"px",top:A-5+"px"};const J=$.getImageData(Math.min(T,o.value-1),Math.min(A,o.value-1),1,1),[W,U,N]=J.data;t("selectSaturation",{r:W,g:U,b:N})};h(c);const b=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",b)};return X(()=>{i(l.value),u()}),{slideSaturationStyle:n,selectSaturation:g,renderSlide:u,renderColor:i,saturation:r,canvasSaturation:l,color:a,hsv:s,size:o}}}),Aa={ref:"canvasSaturation"};function Wa(e,t,n,o,s,a){return d(),f("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ie((...r)=>e.selectSaturation&&e.selectSaturation(...r),["prevent","stop"]))},[m("canvas",Aa,null,512),m("div",{style:G(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Ha=M(Jt,[["render",Wa]]);Jt.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Qt=P({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=p({}),o=p(),{height:s,width:a,hsv:r}=z(e),l=p(),i=c=>{const y=c,v=a.value,$=s.value,h=y.getContext("2d");y.width=v,y.height=$;const b=h.createLinearGradient(0,0,0,$);b.addColorStop(0,"#FF0000"),b.addColorStop(.17*1,"#FF00FF"),b.addColorStop(.17*2,"#0000FF"),b.addColorStop(.17*3,"#00FFFF"),b.addColorStop(.17*4,"#00FF00"),b.addColorStop(.17*5,"#FFFF00"),b.addColorStop(1,"#FF0000"),h.fillStyle=b,h.fillRect(0,0,v,$)},u=()=>{n.value={top:(1-r.value.h/360)*s.value-2+"px"}},g=c=>{const{top:y}=l.value.getBoundingClientRect(),v=c.target.getContext("2d"),$=b=>{let O=b.clientY-y;O<0&&(O=0),O>s.value&&(O=s.value),n.value={top:O-2+"px"};const T=v.getImageData(0,Math.min(O,s.value-1),1,1),[A,J,W]=T.data;t("selectHue",{r:A,g:J,b:W})};$(c);const h=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",h)};return X(()=>{i(o.value),u()}),{slideHueStyle:n,hue:l,width:a,height:s,renderSlide:u,selectHue:g,renderColor:i,hsv:r,canvasHue:o}}}),za={ref:"canvasHue"};function Ua(e,t,n,o,s,a){return d(),f("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ie((...r)=>e.selectHue&&e.selectHue(...r),["prevent","stop"]))},[m("canvas",za,null,512),m("div",{style:G(e.slideHueStyle),class:"slide"},null,4)],544)}var Ya=M(Qt,[["render",Ua]]);Qt.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Zt=P({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=p(5),{color:n,width:o,height:s}=z(e),a=p(),r=l=>{const i=l,u=o.value,g=s.value,c=t.value,y=Xt(c),v=i.getContext("2d");i.width=u,i.height=g,v.fillStyle=v.createPattern(y,"repeat"),v.fillRect(0,0,u,g),v.fillStyle=n.value,v.fillRect(0,0,u,g)};return X(()=>{Et(()=>{r(a.value)}),r(a.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:a}}}),qa={ref:"canvas"};function Ga(e,t,n,o,s,a){return d(),f("canvas",qa,null,512)}var Ka=M(Zt,[["render",Ga]]);Zt.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const en=P({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:w({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),Xa={class:"color-type"},Ja={class:"name"};function Qa(e,t,n,o,s,a){return d(),f("div",Xa,[m("span",Ja,E(e.name),1),ae(m("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.modelColor=r),class:"value"},null,512),[[et,e.modelColor]])])}var Za=M(en,[["render",Qa]]);en.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const tn=P({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=p(),o=p([]),s=p();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Xt(4).toDataURL(),Le(()=>{a(n.value)});const a=l=>{if(!l)return;const i=o.value||[],u=i.indexOf(l);u>=0&&i.splice(u,1),i.length>=8&&(i.length=7),i.unshift(l),o.value=i||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(i))};return{setColorsHistory:a,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),es={class:"colors"},ts=["onClick"],ns={key:0,class:"colors history"},os=["onClick"];function rs(e,t,n,o,s,a){return d(),f("div",null,[m("ul",es,[(d(!0),f(H,null,Z(e.colorsDefault,r=>(d(),f("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[m("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),m("div",{style:G({background:r}),class:"color"},null,4)],8,ts))),128))]),e.colorsHistory.length?(d(),f("ul",ns,[(d(!0),f(H,null,Z(e.colorsHistory,r=>(d(),f("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[m("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),m("div",{style:G({background:r}),class:"color"},null,4)],8,os))),128))])):x("",!0)])}var as=M(tn,[["render",rs]]);tn.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const nn=P({name:"RobustColorPicker",components:{Saturation:Ha,Hue:Ya,Preview:Ka,Box:Za,Colors:as},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=p(15),o=p(152),s=p(20),a=p(""),r=p(""),l=p(0),i=p(0),u=p(0),g=p(1),c=p(0),y=p(0),v=p(0),$=p(),h=p(),{theme:b,color:O}=z(e),T=w(()=>b.value==="light"),A=w(()=>o.value+(n.value+8)*2),J=w(()=>A.value-s.value),W=w(()=>({r:l.value,g:i.value,b:u.value,a:g.value})),U=w(()=>({h:c.value,s:y.value,v:v.value})),N=w(()=>`rgb(${l.value}, ${i.value}, ${u.value})`),ee=w(()=>`${l.value}, ${i.value}, ${u.value}`),pe=w(()=>`rgb(${ee.value})`),te=w(()=>Fa(W.value,!0)),Q=()=>{r.value=te.value,a.value=ee.value};return X(()=>{const j=ke(O.value);l.value=j.r,i.value=j.g,u.value=j.b,g.value=j.a,c.value=j.h,y.value=j.s,v.value=j.v,Q()}),Et(()=>{t("changeColor",{rgba:W.value,hsv:U.value,hex:r.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:a,modelHex:r,r:l,g:i,b:u,a:g,h:c,s:y,v,isLightTheme:T,totalWidth:A,previewWidth:J,rgba:W,hsv:U,rgbString:N,rgbStringShort:ee,rgbaString:pe,hexString:te,setText:Q,selectSaturation:j=>{const _=ke(j);l.value=_.r,i.value=_.g,u.value=_.b,g.value=_.a,c.value=_.h,y.value=_.s,v.value=_.v,Q()},selectHue:j=>{const _=ke(j);l.value=_.r,i.value=_.g,u.value=_.b,g.value=_.a,c.value=_.h,y.value=_.s,v.value=_.v,Q(),re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide()})},inputHex:j=>{const _=ke(j);l.value=_.r,i.value=_.g,u.value=_.b,g.value=_.a,c.value=_.h,y.value=_.s,v.value=_.v,r.value=j,a.value=ee.value,re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),$.value.renderSlide()})},inputRgba:j=>{const _=ke(j);l.value=_.r,i.value=_.g,u.value=_.b,g.value=_.a,c.value=_.h,y.value=_.s,v.value=_.v,r.value=te.value,a.value=`${l.value}, ${i.value}, ${u.value}`,re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),$.value.renderSlide()})},selectColor:j=>{const _=ke(j);l.value=_.r,i.value=_.g,u.value=_.b,g.value=_.a,c.value=_.h,y.value=_.s,v.value=_.v,Q(),re(()=>{h.value.renderColor(h.value.canvasSaturation),h.value.renderSlide(),$.value.renderSlide()})},saturation:h,hue:$,color:O,theme:b}}}),ss={class:"color-set"};function ls(e,t,n,o,s,a){const r=B("Saturation"),l=B("Hue"),i=B("Preview"),u=B("Box"),g=B("Colors");return d(),f("div",{class:D(["hu-color-picker rounded bg-gray-800 shadow",{light:e.isLightTheme}]),style:G({width:e.totalWidth+"px"})},[m("div",ss,[R(r,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),R(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),m("div",{style:G({height:e.previewHeight+"px"}),class:"color-show"},[R(i,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),R(u,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),R(u,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),R(g,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var on=M(nn,[["render",ls]]);nn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var is={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:on,argTypes:{title:{control:{type:"text",default:"Title"}}}};const us=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:on},setup(){return{args:e}}}),ds=us.bind(),ps=["Default"];var cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:is,Default:ds,__namedExportsOrder:ps});const rn=P({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-700 "}}}),ms={key:1,class:"flex items-center"},fs={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function gs(e,t,n,o,s,a){return e.$slots.default?(d(),f("div",ms,[m("div",{class:D(["flex-1 bg-gray-100 dark:bg-gray-700",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),m("div",fs,[L(e.$slots,"default")]),m("div",{class:D(["flex-1 bg-gray-100 dark:bg-gray-700",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(d(),f("div",{key:0,class:D(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var vs=M(rn,[["render",gs]]);rn.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-700 '"}}],slots:[{name:"default"}]};const an=P({name:"RobustContentBox",components:{RobustSeparator:vs},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),ys={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"},bs={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},hs={class:"flex"},ks={key:1,class:"text-gray-500 dark:text-gray-500"},ws={class:"p-4 sm:p-6"};function Ss(e,t,n,o,s,a){const r=B("RobustSeparator");return d(),f("section",ys,[e.description!==void 0||e.title!==void 0?(d(),f("header",bs,[e.stripe?(d(),f("div",{key:0,class:D(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):x("",!0),m("h1",hs,[m("div",{class:D(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[L(e.$slots,"title",{title:e.title},()=>[De(E(e.title),1)])],2)]),e.description!==void 0?(d(),f("p",ks,[L(e.$slots,"description",{description:e.description},()=>[De(E(e.description),1)])])):x("",!0)])):x("",!0),R(r),m("div",ws,[L(e.$slots,"default")])])}var Be=M(an,[["render",Ss]]);an.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var Ds={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Be,argTypes:{title:{control:{type:"text"}}}};const $s=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Be},setup(){return{args:e}}}),_s=$s.bind(),Cs=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Be},setup(){return{args:e}}}),sn=Cs.bind();sn.args={title:"Input title"};const xs=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Be},setup(){return{args:e}}}),ln=xs.bind();ln.args={title:"Input title"};const Ts=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Be},setup(){return{args:e}}}),un=Ts.bind();un.args={title:"Input title"};const Bs=["Default","Title","TitleProp","Stripe"];var Ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ds,Default:_s,Title:sn,TitleProp:ln,Stripe:un,__namedExportsOrder:Bs}),Vs=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],_e=P({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=z(e),a=p();let r;const l=p(!1),i={strategy:"absolute",placement:"bottom-start",modifiers:[...Vs,...e.modifiers]};function u(){r==null||r.destroy(),l.value=!1}async function g(v){if(!v)return;const $=Object.assign({},i,e.options);!a.value||(r=Wo(v,a.value,$),await r.update())}Le(()=>{u()});async function c(){await g(s.value),a.value&&(r==null||r.update(),gt.fromTo(a.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function y(){a.value&&gt.fromTo(a.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{u()})}return X(()=>{if(!n.default)throw new Error("Popper does not have a child slot");Se(o,v=>{l.value=!0,re(async()=>{v?c():y()})})}),{appendTo:s,root:a,render:l}},render(){if(this.render)return we("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const dn=P({name:"RobustDatePicker",components:{RobustPopper:_e,RobustCalendar:Oe,RobustInputWrapper:ye,PhCaretDown:tt,PhCalendar:Lt},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-700"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=p(),{modelValue:s}=z(e),a=p(!1),r=p(),l=p();je(r,c=>{a.value&&(l.value.wrapperRef.contains(c.target)&&(c.stopPropagation(),c.preventDefault()),g(),t("blur"))});const i=w({get(){return(s==null?void 0:s.value)?s.value:new Date},set(c){a.value=!1,t("update:modelValue",c),t("change",c),t("blur")}}),u=w(()=>{if(!i.value)return"Select date";const c=i.value;try{return c?le(c,"P"):"Unknown"}catch{return}});function g(){a.value===!0&&(a.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:a,props:e,displayDate:u,computedValue:i,closeDropdown:g,popperRef:r,inputWrapperRef:l}},methods:{}}),Rs=["id"],Is={class:"min-w-0 truncate tabular-nums"};function Ms(e,t,n,o,s,a){var c,y;const r=B("PhCalendar"),l=B("PhCaretDown"),i=B("RobustInputWrapper"),u=B("RobustCalendar"),g=B("RobustPopper");return d(),f(H,null,[R(i,{title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ie(v=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:q(v=>[m("div",{class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[R(r,{size:"20"})],2),m("div",ue({id:v.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[m("div",Is,E(e.displayDate),1)],16,Rs),m("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[R(l,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((c=e.inputWrapperRef)==null?void 0:c.wrapperRef)?(d(),K(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(y=e.inputWrapperRef)==null?void 0:y.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=v=>e.open=v),options:{placement:"bottom-start"}},{default:q(()=>[R(u,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=v=>e.computedValue=v)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):x("",!0)],64)}var rt=M(dn,[["render",Ms]]);dn.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-700'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Es={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:rt,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ls=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:rt},setup(){return{args:e}}}),js=new Date,$t=p(js),pn=Ls.bind({});pn.args={modelValue:$t,"onUpdate:modelValue":e=>{$t.value=e}};const Fs=["Default"];var Os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Es,Default:pn,__namedExportsOrder:Fs});const Ns=P({props:{colors:{type:Array,default:["#FCA5A5","#EF4444","#FDBA74","#F97316","#FCD34D","#F59E0B","#FDE047","#EAB308","#BEF264","#84CC16","#86EFAC","#22C55E","#6EE7B7","#10B981","#5EEAD4","#14B8A6","#67E8F9","#06B6D4","#7DD3FC","#0EA5E9","#93C5FD","#3B82F6","#A5B4FC","#6366F1","#C4B5FD","#8B5CF6","#D8B4FE","#A855F7","#F0ABFC","#D946EF","#F9A8D4","#EC4899","#FDA4AF","#F43F5E"]}},setup(e,{emit:t}){return{selectedColor:o=>{t("change",o)}}}});Ns.__docgenInfo={exportName:"default",displayName:"ColorPalette",description:"",tags:{},props:[{name:"colors",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}}]};const cn=P({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),As={class:"py-4 flex flex-col text-center items-center"},Ws={class:"mb-4 text-gray-700 dark:text-gray-400"},Hs={class:"text-xl text-gray-700 dark:text-gray-400 mb-2"},zs={class:"inline-block"};function Us(e,t,n,o,s,a){return d(),f("div",As,[m("div",Ws,[e.$slots.icon?L(e.$slots,"icon",{key:1}):(d(),K(Ze(e.icon),{key:0,size:"40"}))]),m("div",Hs,E(e.title),1),m("div",{class:D(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},E(e.description),3),m("div",zs,[L(e.$slots,"default")])])}var Ae=M(cn,[["render",Us]]);cn.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};let I,Ke,Xe,Je,ve;const Qe=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},Ys=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},_t=function(e,t){var n,o;if(Qe("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;I=this,Ke=ve.handleClass&&I.querySelector(`.${ve.handleClass}`),Xe=Array.from((n=I==null?void 0:I.parentElement)==null?void 0:n.children).indexOf(I),(o=I==null?void 0:I.parentElement)==null||o.classList.add("drag")},Ct=function(e){var n;if(!I)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=I==null?void 0:I.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=I==null?void 0:I.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(I.classList.add(ve.placeholderClass),Ys(I,t)?t.parentNode.insertBefore(I,t):t.parentNode.insertBefore(I,t.nextSibling))},xt=(e,t)=>{var s,a;if(!I)return;Qe("end",t,e),Ke&&I.setAttribute("draggable","false"),I.classList.remove(ve.placeholderClass),(s=I==null?void 0:I.parentElement)==null||s.classList.remove("drag");const n=Xe,o=Array.from((a=I==null?void 0:I.parentElement)==null?void 0:a.children).indexOf(I);Je.splice(o,0,Je.splice(n,1)[0]),Qe("change",t,{from:n,to:o}),setTimeout(()=>{I=null,Xe=null,Ke=null},0)},Tt=(e,t)=>{const n=ve.handleClass&&e.querySelector(`.${ve.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>_t.bind(e,o,t)(),e.ondragenter=Ct,e.ondragend=o=>xt.bind(e,o,t)(),e.ontouchstart=o=>_t.bind(e,o,t)(),e.ontouchmove=Ct,e.ontouchend=o=>xt.bind(e,o,t)()};var qs={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}Je=t.value&&t.value.value,ve={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Tt(s,n)),e.addEventListener("DOMNodeInserted",function(s){I||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Tt(s.target,n)})}};const mn=P({name:"RobustDraggable",directives:{draggable:qs},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e),o=w({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return re(()=>{console.log("alo")}),{list:o}}});function Gs(e,t,n,o,s,a){const r=Ho("draggable");return ae((d(),f("div",null,[(d(!0),f(H,null,Z(e.list,l=>(d(),f("div",{key:l},[L(e.$slots,"element",{item:l})]))),128))])),[[r,{value:e.list}]])}var fn=M(mn,[["render",Gs]]);mn.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};const gn=P({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=z(e),o=w(()=>{var s,a,r,l,i;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(a=n.value)==null?void 0:a.gridstack.x,"gs-y":(r=n.value)==null?void 0:r.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(i=n.value)==null?void 0:i.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),Ks={class:"grid-stack-item-content bg-gray-300"};function Xs(e,t,n,o,s,a){return d(),f("div",ue({class:"grid-stack-item"},e.widgetAttributes),[m("div",Ks,[De(E(e.widget.id)+" "+E(e.widget.gridstack)+" ",1),(d(),K(Ze(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var Js=M(gn,[["render",Xs],["__scopeId","data-v-7520d7ac"]]);gn.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const vn=P({name:"RobustGrid",components:{GridItem:Js},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=z(e),o,s=p();return X(()=>{console.log("mounting"),o=zo.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(a,r)=>{!n.value||([...n.value],Array.isArray(r)&&n.value.forEach(l=>{let i=r.find(u=>u.id===l.id);i&&(l.gridstack=ct(Ue({},l.gridstack),{x:i.x,y:i.y,w:i.w,h:i.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),Qs={ref:"gridContainer",class:"grid-stack bg-gray-200"};function Zs(e,t,n,o,s,a){const r=B("GridItem");return d(),f("div",null,[De(E(e.locked)+" ",1),m("section",Qs,[(d(!0),f(H,null,Z(e.widgets,l=>(d(),K(r,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var yn=M(vn,[["render",Zs],["__scopeId","data-v-dc6f9d18"]]);vn.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Pe=P({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=p(!0),o=p(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=a=>{t("error",a),o.value=!0,n.value=!1},X(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?we("div",{class:"flex items-center justify-center"},we(Fe,{size:24,stroke:2})):this.error?this.fallbackSrc?we("img",{src:this.fallbackSrc}):we(Te,{size:20}):we("img",{src:this.src})}});const bn=P({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=z(e),o=w(()=>`height:${t.value}px`),s=w(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function el(e,t,n,o,s,a){return d(),f("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:G([e.heightComputed])},[m("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:G([e.widthComputed])},null,4)],4)}var hn=M(bn,[["render",el]]);bn.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};const kn=P({name:"RobustModal",inheritAttrs:!1,components:{PhX:Uo},props:{modalClass:{type:String},opened:{type:Boolean,default:!1},slideOutLeft:{type:Boolean,default:!1},slideOutRight:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:n}=z(e);let o=Yo(document.body);const s=w(()=>e.slideOutLeft?"slide-left":e.slideOutRight?"slide-right":"fade"),a=w(()=>e.slideOutLeft?"absolute left-0 top-0 bottom-0 h-full min-h-0 max-w-lg w-full":e.slideOutRight?"absolute right-0 top-0 bottom-0 h-full min-h-0 max-w-lg w-full":"mx-auto h-full min-h-0 max-w-lg"),r=w(()=>e.slideOutLeft||e.slideOutRight);Se(n,g=>{g?o.value=!0:o.value=!1});function l(g){g.key==="Escape"&&n.value===!0&&(g.stopPropagation(),g.preventDefault(),u())}X(()=>{window.addEventListener("keydown",l)}),Le(()=>{window.removeEventListener("keydown",l)});async function i(){n.value=!0,t("update:opened",!0),t("open")}async function u(){n.value=!1,t("update:opened",!1),t("close")}return{open:i,close:u,opened:n,animationName:s,modalBoxClass:a,isSlideOut:r}}}),tl={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},nl={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},ol={class:"leading-4"};function rl(e,t,n,o,s,a){const r=B("PhX");return d(),K(Go,{to:"body"},[R(qo,ue(e.$attrs,{name:e.animationName}),{default:q(()=>[e.opened?(d(),f("div",tl,[m("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50",onClick:t[0]||(t[0]=ie((...l)=>e.close&&e.close(...l),["self"]))}),m("div",{class:D(["modal-box",e.modalBoxClass]),onKeydown:t[2]||(t[2]=xe((...l)=>e.close&&e.close(...l),["esc"]))},[m("div",{class:D(["relative flex max-h-full min-h-0 w-full flex-col bg-white shadow-xl dark:bg-gray-800",[e.modalClass,e.isSlideOut?"h-full":"rounded-md"]])},[e.$slots.title?(d(),f("div",nl,[m("div",ol,[L(e.$slots,"title",{},void 0,!0)]),m("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[R(r,{size:"20",class:"block"})])])):x("",!0),L(e.$slots,"default",{},void 0,!0)],2)],34)],512)):x("",!0)]),_:3},16,["name"])])}var We=M(kn,[["render",rl],["__scopeId","data-v-5355a3c2"]]);kn.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"slideOutLeft",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"slideOutRight",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};var al={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const wn=P({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:w(()=>al[e.variant])}}});function sl(e,t,n,o,s,a){return d(),f("div",{class:D([e.computedClass,"mb-4 border-l-4 p-4"])},[L(e.$slots,"default")],2)}var Sn=M(wn,[["render",sl]]);wn.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};let ll=0;const Dn=P({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++ll).toString(),s=w({get(){return e.modelValue===e.value},set(){let a=e.modelValue;a=e.value,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),il={class:"inline-block"},ul=["id"],dl=["for"],pl={key:0,class:"w-full select-none leading-4"};function cl(e,t,n,o,s,a){return d(),f("div",il,[ae(m("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),type:"radio",class:"hidden"},null,8,ul),[[Ko,e.isChecked]]),m("label",{for:`radio_${e.cuid}`,class:D([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[m("div",{class:D(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[m("div",{class:D([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(d(),f("div",pl,E(e.title),1)):x("",!0),m("div",null,[e.$slots.title?L(e.$slots,"title",{key:0}):x("",!0)])],10,dl)])}var $n=M(Dn,[["render",cl]]);Dn.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};const _n=P({name:"RobustSelect",components:{RobustPopper:_e,RobustInputWrapper:ye,PhCheck:It,PhCaretDown:tt},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=p(),s=p(),{options:a}=z(e),r=p(!1),l=p(),i=p(),u=p("");let g=p([]);async function c(T){e.searchFunction!==void 0&&(g.value=await e.searchFunction(T)),T===""?g.value=a.value:g.value=a.value.filter(A=>A.title.toLowerCase().substring(0,T.length)===T.toLowerCase())}Xo(u,async T=>{await c(T)},{debounce:150}),X(async()=>{await c("")});const y=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:T=>{T.state.styles.popper.width=`${Math.max(T.state.rects.reference.width,200)}px`},effect:T=>{T.state.elements.popper.style.width=`${T.state.elements.reference.getBoundingClientRect().width}px`}}],v=w(()=>e.options.find(T=>T.value===e.modelValue));function $(T){re(()=>{b()}),t("update:modelValue",T.value),t("change",T.value)}function h(){r.value=!0,re(()=>{s.value.focus()}),t("focus")}je(l,T=>{r.value&&(i.value.wrapperRef.contains(T.target)&&(T.stopPropagation(),T.preventDefault()),O(),b(),t("blur"))});function b(){r.value=!1}function O(){u.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:b,open:r,props:e,openDropdown:h,inputWrapper:i,popperModifiers:y,activeItem:v,selectItem:$,computedOptions:g,resetFields:O,attrs:n,search:u,popperRef:l}}}),ml=["id"],fl={class:"min-w-0 select-none truncate"},gl={key:0,class:"max-h-72 overflow-auto"},vl=["onClick"],yl={key:1,class:"py-2 text-center text-gray-400"};function bl(e,t,n,o,s,a){var g,c;const r=B("PhCaretDown"),l=B("RobustInputWrapper"),i=B("PhCheck"),u=B("RobustPopper");return d(),f(H,null,[R(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:q(y=>[e.$slots.prefix?(d(),f("div",{key:0,class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),ae(m("div",ue({id:y.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[m("div",fl,E(e.activeItem?e.activeItem.title:"Select"),1)],16,ml),[[Ge,!e.open]]),ae(m("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=v=>e.search=v),size:"1",class:D(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ge,e.open],[et,e.search]]),m("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[R(r,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((g=e.inputWrapper)==null?void 0:g.wrapperRef)?(d(),K(u,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=y=>e.open=y),ref:"popperRef",class:"z-[100] origin-top","append-to":(c=e.inputWrapper)==null?void 0:c.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:q(()=>[e.computedOptions.length>0?(d(),f("ul",gl,[(d(!0),f(H,null,Z(e.computedOptions,y=>(d(),f("li",{key:y.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:v=>e.selectItem(y)},[m("span",null,E(y.title),1),e.modelValue===y.value?(d(),K(i,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):x("",!0)],8,vl))),128))])):(d(),f("div",yl,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):x("",!0)],64)}var Cn=M(_n,[["render",bl]]);_n.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const xn=P({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=p(e.modelValue),o=p(!1),s=p(!1),a=p(e.modelValue),r=p(),l=p(),i=p(),u=w(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":g},{"has-marker":e.showMarker}]),g=w(()=>Boolean(e.icon)),c=w(()=>({transform:"scaleX("+he(a.value)+")"})),y=w(()=>({left:he(a.value)*100+"%"})),v=w(()=>e.markerValue===void 0?e.modelValue:e.markerValue),$=w(()=>{const k=[];let Y=e.step*Math.ceil(h()/e.step);for(;Y<=b();)k.push(Y),Y+=e.step;return k}),h=()=>e.max>e.min?e.min:0,b=()=>e.max>e.min?e.max:100,O=()=>{r.value.focus()},T=()=>{N(n)},A=()=>{o.value=!0,t("focus")},J=()=>{o.value=!1,t("blur")},W=k=>{r.value.contains(k.target)||J()},U=k=>{k=ge(k),e.snapToSteps&&(k=Ve(k)),N(k)},N=k=>{k=ge(k),k!==a.value&&(a.value=k,t("update:modelValue",k),t("change",k))},ee=()=>{U(a.value+e.step)},pe=()=>{U(a.value-e.step)},te=()=>{let k=l.value,Y=k.offsetLeft;for(;k.offsetParent;)k=k.offsetParent,Y+=k.offsetLeft;return Y},Q=k=>({left:k+"%"}),ce=()=>{document.addEventListener("touchend",_),document.addEventListener("mouseup",_),document.addEventListener("click",W),document.addEventListener("touchstart",W),fe()},me=()=>{document.removeEventListener("touchend",_),document.removeEventListener("mouseup",_),document.removeEventListener("click",W)},fe=()=>{const k=ge(a.value?a.value:0);N(k)},be=k=>{e.disabled||(o.value||A(),s.value=!0,j(k),document.addEventListener("touchmove",V),document.addEventListener("mousemove",V),t("dragstart",a.value,k))},V=k=>{j(k)},j=k=>{const Y=k.touches?k.touches[0].pageX:k.pageX,ne=l.value.offsetWidth,Ce=(Y-te())/ne,He=ge(h()+Ce*(b()-h()));s.value&&N(Math.round(He))},_=k=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&U(e.modelValue),document.removeEventListener("touchmove",V),document.removeEventListener("mousemove",V),t("dragend",a.value,k))},Ve=k=>{const Y=Math.floor(k/e.step)*e.step,ne=Y+e.step,Ce=(Y+ne)/2;return Y<h()?ne>b()?k:ne:k>=Ce&&ne<=b()?ne:Y},he=k=>(k-h())/(b()-h()),ge=k=>k<h()?h():k>b()?b():k;return X(()=>{ce()}),Jo(()=>{me()}),{slider:r,track:l,thumb:i,initialValue:n,isActive:o,isDragging:s,localValue:a,classes:u,hasIcon:g,fillStyle:c,thumbStyle:y,markerText:v,snapPoints:$,moderatedMin:h,moderatedMax:b,focus:O,reset:T,onFocus:A,onBlur:J,onExternalClick:W,setValueWithSnap:U,setValue:N,incrementValue:ee,decrementValue:pe,getTrackOffset:te,getPointStyle:Q,initializeSlider:ce,teardownSlider:me,initializeDrag:fe,onDragStart:be,onDragMove:V,dragUpdate:j,onDragStop:_,getNearestSnapPoint:Ve,relativeValue:he,moderateValue:ge}}}),hl=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],kl=["name","value"],wl={key:1,class:"base-slider__icon"},Sl={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Dl={key:0},$l={key:0,class:"base-slider__marker text-xs"},_l=m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[m("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),Cl={class:"base-slider__marker-text text-xs"};function xl(e,t,n,o,s,a){const r=B("feather");return d(),f("div",{ref:"slider",class:D(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=xe(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=xe(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=xe(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=xe(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(d(),f("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,kl)):x("",!0),e.hasIcon?(d(),f("div",wl,[L(e.$slots,"icon",{},()=>[R(r,{type:e.icon,size:"20"},null,8,["type"])])])):x("",!0),m("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[m("div",Sl,[e.snapToSteps?(d(),f("div",Dl,[(d(!0),f(H,null,Z(e.snapPoints,(l,i)=>(d(),f("span",{key:i,class:"base-slider__snap-point",style:G({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):x("",!0)]),m("div",{class:"base-slider__track-fill bg-primary-400",style:G(e.fillStyle)},null,4),m("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:G(e.thumbStyle)},[e.showMarker?(d(),f("div",$l,[_l,m("span",Cl,E(e.markerText),1)])):x("",!0)],4)],544)],42,hl)}var Tn=M(xn,[["render",xl]]);xn.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};const Bn=P({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=z(e);return{isChecked:w({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),Tl={class:"flex cursor-pointer items-center gap-x-3"},Bl={key:0},Pl={class:"text-sm text-gray-400"};function Vl(e,t,n,o,s,a){return d(),f("label",Tl,[ae(m("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),class:"hidden",type:"checkbox"},null,512),[[Mt,e.isChecked]]),m("div",{class:D(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[m("div",{class:D(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(d(),f("div",Bl,[m("div",null,E(e.title),1),m("div",Pl,E(e.description),1)])):x("",!0)])}var Pn=M(Bn,[["render",Vl]]);Bn.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};const Vn=P({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=p(),o=p([]),s=r=>{var l;(l=o.value)==null||l.push(r)};return X(()=>{const r=o.value.find(l=>l.dataset.value===e.modelValue);r&&(console.log(r),r.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:r=>{t("update:modelValue",r)},root:n,registerTab:s}}}),Rl={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},Il=["data-value"],Ml=["onClick"],El=m("div",{class:"flex-1 border-b-2 dark:border-gray-700"},null,-1);function Ll(e,t,n,o,s,a){return d(),f("div",Rl,[(d(!0),f(H,null,Z(e.tabs,r=>(d(),f("div",{key:r.value,ref_for:!0,ref:e.registerTab,"data-value":r.value,class:D(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[r.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-700 dark:text-gray-500"]])},[L(e.$slots,"tab",{tab:r,select:()=>e.select(r.value)},()=>[m("div",{class:"px-4 py-3",onClick:()=>e.select(r.value)},E(r.title),9,Ml)])],10,Il))),128)),El],512)}var at=M(Vn,[["render",Ll]]);Vn.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};const jl=P({name:"RobustTabsSwitch",props:{tabs:{type:Array,required:!0},rounded:{type:Boolean,default:!1},modelValue:{required:!0}},setup(e,{emit:t}){const n=p([]),o=z(e),s=$=>{var h;(h=n.value)==null||h.push($)},a=p(0),r=p(0),l=p(!1),i=p();p();const u=new ResizeObserver(()=>{const $=g();$&&c($)});X(()=>{i.value&&u.observe(i.value),re(()=>{l.value=!0})}),Le(()=>{i.value&&u.unobserve(i.value)});const g=()=>n.value.find($=>$.dataset.value===o.modelValue.value),c=$=>{var T;const h=(T=i.value)==null?void 0:T.getBoundingClientRect();if(!h)throw new Error("no container box specified");const b=$.getBoundingClientRect(),O={x:b.x-h.x,y:b.y-h.y};a.value=O.x,r.value=b.width},y=($,h)=>{t("update:modelValue",h),$.target&&$.target instanceof HTMLElement&&c($.target)},v=g();return v&&c(v),{root:i,select:y,registerTab:s,showBackground:l,backgroundXOffset:a,backgroundWidth:r}}});jl.__docgenInfo={displayName:"RobustTabsSwitch",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!0}]};const Rn=P({name:"RobustTextarea",inheritAttrs:!1,components:{RobustInputWrapper:ye,PhWarningCircle:Rt},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=p(),s=n,a=w({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function r(){var i;(i=o.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),Fl=["id","disabled","readonly"],Ol={key:1,class:"text-red-400"};function Nl(e,t,n,o,s,a){const r=B("PhWarningCircle"),l=B("RobustInputWrapper");return d(),K(l,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,"box-class":[e.condensed?"pt-1":"pt-2",e.$props.class],readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(i=>[e.$slots.prefix?(d(),f("div",{key:0,class:D(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[L(e.$slots,"prefix",{tag:"div"})],2)):x("",!0),ae(m("textarea",ue({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=u=>e.inputFieldValue=u),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-700",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Fl),[[et,e.inputFieldValue]]),e.$slots.suffix||e.error?(d(),f("div",{key:1,class:D(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(d(),f("div",Ol,[R(r,{size:"20",class:"block"})])):L(e.$slots,"suffix",{key:0,tag:"div"})],2)):x("",!0)]),_:3},8,["title","hint","error","box-class","readonly","disabled","condensed"])}var In=M(Rn,[["render",Nl]]);Rn.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const Mn=P({name:"RobustWidgetWrapper",components:{RobustPopper:_e,PhDotsThreeVertical:Qo},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=p(!1),o=p(),s=p();je(s,r=>{n.value&&(o.value.contains(r.target)&&(r.stopPropagation(),r.preventDefault()),a(),t("blur"))});const a=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:a,popperRef:s,contextButtonRef:o}}}),Al={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-700 dark:text-gray-400"};function Wl(e,t,n,o,s,a){const r=B("PhDotsThreeVertical"),l=B("RobustPopper");return d(),f(H,null,[m("div",ue(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800",{"pl-1":e.stripe}]}),[ae(m("div",{class:D(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ge,e.stripe]]),e.title||e.$slots.title?(d(),f("div",Al,[e.$slots.title?L(e.$slots,"title",{key:0,title:e.title}):(d(),f(H,{key:1},[De(E(e.title),1)],64)),e.$slots.options?(d(),f("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=i=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-800"},[R(r,{size:"24",weight:"bold"})],512)):x("",!0)])):x("",!0),e.$slots.default?(d(),f("section",{key:1,class:D(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[L(e.$slots,"default")],2)):x("",!0),L(e.$slots,"raw")],16),R(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=i=>e.open=i),options:{placement:"bottom-end"}},{default:q(()=>[L(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var En=M(Mn,[["render",Wl]]);Mn.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};const Ln=P({name:"RobustDaterangePicker",components:{RobustCalendar:Oe,RobustPopper:_e,RobustInputWrapper:ye,RobustButton:oe,RobustCheckbox:Ne,RobustDatePicker:rt,PhCaretDown:tt,PhCalendar:Lt,PhArrowLeft:Zo,PhArrowRight:er,PhClockCounterClockwise:tr},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:a,comparePerspectiveDate:r}=z(e),l=p(),i=p(!1),u=p(),g=p(),c=p(a.value),y=p(r.value),v=p(!1),$=p(),h=p(),b=p(!0),O=p(),T=w(()=>U.value.length>1),A=(V,j)=>j?le(V,"dd.MM.yyyy HH:mm:ss"):le(V,"dd.MM.yyyy"),J=w(()=>e.dateHistory||[]);let W=p();const U=p(s.value),N=w({get(){return U.value},set(V){U.value=V,t("update:compareDate",V),t("blur")}}),ee=w({get:()=>N.value.length>1,set:V=>{Q(V)}}),pe=w(()=>{if(!o.value)return"Select date";const V=o.value;try{return V.length>1?le(V[0],"P")+" - "+le(V[1],"P"):le(V[0],"P")+" - "+le(V[0],"P")}catch{return}});function te(){i.value===!0&&(i.value=!1,v.value=!1,t("blur"))}const Q=V=>{V?$.value=V:(t("update:comparison-date",void 0),N.value=void 0)};je(O,V=>{i.value&&(u.value.wrapperRef.contains(V.target)&&(V.stopPropagation(),V.preventDefault()),te(),t("blur"))});const ce=()=>{W.value=o.value,i.value=!i.value},me=()=>{$.value=!1},fe=async()=>{t("update:dateRange",W.value),t("change",W.value),t("blur"),i.value=!1},be=V=>{b.value=V};return Se(c,V=>{t("update:perspectiveDate",V)}),Se(y,V=>{t("update:comparePerspectiveDate",V)}),{displayCompare:$,computedCompare:N,attrs:n,props:e,refSelectContainer:l,pickedCompare:T,open:i,displayDate:pe,saveTime:fe,tmpDateRange:W,dateConfig:h,closeDropdown:te,showCompare:Q,comparePerspectiveOf:y,compareWith:ee,storeHistory:b,handleClick:ce,goBack:me,mainCalendar:g,perspectiveOf:c,enabledHistory:v,dateHistory:J,formatDate:A,enableStoringHistory:be,inputWrapperRef:u,popperRef:O}},methods:{}}),Hl=["id"],zl={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Ul=m("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"},"Date range",-1),Yl={key:0,class:"flex flex-col items-start gap-y-3"},ql=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Gl={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"},Kl={key:1},Xl={key:0,class:"flex flex-col items-start"},Jl=m("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Ql={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"},Zl=De("Apply time range");function ei(e,t,n,o,s,a){var $,h;const r=B("PhCalendar"),l=B("PhCaretDown"),i=B("RobustInputWrapper"),u=B("RobustDatePicker"),g=B("RobustCheckbox"),c=B("RobustCalendar"),y=B("RobustButton"),v=B("RobustPopper");return d(),f(H,null,[R(i,{title:e.title,hint:e.hint,error:e.error,class:D([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ie(e.handleClick,["stop"])},{default:q(b=>[m("div",{class:D(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[R(r,{size:"20"})],2),m("div",ue({id:b.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[m("div",zl,E(e.displayDate),1)],16,Hl),m("div",{class:D(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[R(l,{size:14,weight:"bold",class:D(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),(($=e.inputWrapperRef)==null?void 0:$.wrapperRef)?(d(),K(v,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(h=e.inputWrapperRef)==null?void 0:h.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=b=>e.open=b),options:{placement:"bottom-start"}},{default:q(()=>[Ul,m("div",null,[R(c,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=b=>e.tmpDateRange=b),"onClick:relativeDate":t[3]||(t[3]=b=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(d(),f("div",Yl,[m("div",null,[ql,R(u,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=b=>e.perspectiveOf=b)},null,8,["modelValue"])]),e.enableComparison?(d(),K(g,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=b=>e.compareWith=b),title:"Compare with"},null,8,["modelValue"])):x("",!0)])):x("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(d(),f("h3",Gl,"Comparison date range")):x("",!0),e.enableComparison?(d(),f("div",Kl,[R(c,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=b=>e.computedCompare=b),"onClick:relativeDate":t[6]||(t[6]=b=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(d(),f("div",Xl,[Jl,R(u,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=b=>e.comparePerspectiveOf=b)},null,8,["modelValue"])])):x("",!0)]),_:1},8,["modelValue"])])):x("",!0),m("div",Ql,[R(y,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:q(()=>[Zl]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):x("",!0)],64)}var jn=M(Ln,[["render",ei]]);Ln.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var ti={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:jn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const ni=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:jn},setup(){return{args:e}}}),Fn=[new Date,new Date],Bt=p(Fn),Pt=p(Fn),On=ni.bind({});On.args={dateRange:Bt,"onUpdate:dateRange":e=>{Bt.value=e},compareDateRange:Pt,"onUpdate:compareDateRange":e=>{Pt.value=e}};const oi=["Default"];var ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ti,Default:On,__namedExportsOrder:oi}),ai={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:fn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const si=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:fn},setup(){let t=p([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),li=si.bind({}),ii=["Default"];var ui=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ai,Default:li,__namedExportsOrder:ii}),di={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:Ae,argTypes:{title:{control:{type:"text",default:"Title"}}}};const pi=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:Ae},setup(){return{args:e}}}),Nn=pi.bind();Nn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Te};const ci=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Ae,RobustButton:oe},setup(){return{args:e}}}),An=ci.bind();An.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Te};const mi=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Ae,RobustButton:oe,RobustImg:Pe},setup(){return{args:e}}}),Wn=mi.bind();Wn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Te};const fi=["Default","CallToAction","CustomIcon"];var gi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:di,Default:Nn,CallToAction:An,CustomIcon:Wn,__namedExportsOrder:fi}),vi={title:"Ui/Grid",component:yn,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Vt=P({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const yi=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:yn},setup(){let t=p([{id:"test",component:vt(Vt),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:vt(Vt),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return Se(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),bi=yi.bind(),hi=["Default"];var ki=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vi,Default:bi,__namedExportsOrder:hi}),wi={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Pe,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Si=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Pe},setup(){return{args:e}}}),Hn=Si.bind();Hn.args={title:"Img title"};const Di=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Pe},setup(){return{args:e}}}),zn=Di.bind();zn.args={title:"Img title"};const $i=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Pe},setup(){return{args:e}}}),Un=$i.bind();Un.args={title:"Img title"};const _i=["Default","Broken","Fallback"];var Ci=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wi,Default:Hn,Broken:zn,Fallback:Un,__namedExportsOrder:_i}),xi={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:ot,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const st=e=>({template:'<Input class="mb-4" :cthulu="true" v-bind="args"/>',components:{Input:ot},setup(){return{args:e}}}),Yn=st.bind();Yn.args={modelValue:"Input text",title:"Input title"};const qn=st.bind();qn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Gn=st.bind();Gn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Ti=["Default","Hint","ErrorHint"];var Bi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xi,Default:Yn,Hint:qn,ErrorHint:Gn,__namedExportsOrder:Ti}),Pi={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:ye,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const lt=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:ye},setup(){return{args:e}}}),Kn=lt.bind();Kn.args={title:"Input title",outline:!1};const Xn=lt.bind();Xn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Jn=lt.bind();Jn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Vi=["Default","Hint","ErrorHint"];var Ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pi,Default:Kn,Hint:Xn,ErrorHint:Jn,__namedExportsOrder:Vi}),Ii={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:hn,argTypes:{progress:{control:{type:"number"}}}};const Mi=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:hn},setup(){return{args:e}}}),Ei=Mi.bind(),Li=["Default"];var ji=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ii,Default:Ei,__namedExportsOrder:Li}),Fi={parameters:{storySource:{source:`import { ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}},"slide-right":{startLoc:{col:27,line:39},endLoc:{col:2,line:45},startBody:{col:27,line:39},endBody:{col:2,line:45}},"slide-left":{startLoc:{col:26,line:58},endLoc:{col:2,line:64},startBody:{col:26,line:58},endBody:{col:2,line:64}}}}},title:"Ui/Modal",component:We,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Oi=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',components:{Modal:We,RobustButton:oe},setup(){return{args:e}}}),Qn=Oi.bind();let $e=p(!0);Qn.args={title:"Modal title",opened:$e,"onUpdate:opened":e=>{console.log("opeone"),$e.value=e}};const Ni=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',components:{Modal:We,RobustButton:oe},setup(){return{args:e}}}),Zn=Ni.bind();Zn.args={title:"Modal title",opened:$e,"onUpdate:opened":e=>{console.log("opeone"),$e.value=e}};const Ai=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',components:{Modal:We,RobustButton:oe},setup(){return{args:e}}}),eo=Ai.bind();eo.args={title:"Modal title",opened:$e,"onUpdate:opened":e=>{console.log("opeone"),$e.value=e}};const Wi=["Default","SlideRight","SlideLeft"];var Hi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fi,Default:Qn,SlideRight:Zn,SlideLeft:eo,__namedExportsOrder:Wi}),zi={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Sn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Ui=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Sn},setup(){return{args:e}}}),Yi=Ui.bind(),qi=["Default"];var Gi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zi,Default:Yi,__namedExportsOrder:qi}),Ki={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:_e,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Xi=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:_e},setup(){const t=p(!1);return{args:e,value:t}}}),to=Xi.bind({});to.args={title:"Popper title",description:"Popper description text to be placed here"};const Ji=["Default"];var Qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ki,Default:to,__namedExportsOrder:Ji}),Zi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:$n,argTypes:{title:{control:{type:"text"}}}};const eu=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:$n},setup(){const t=p("test");return{args:e,value:t}}}),no=eu.bind({});no.args={title:"Radio title"};const tu=["Default"];var nu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zi,Default:no,__namedExportsOrder:tu});const ou=P({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});ou.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var ru={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:Cn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const it=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Cn},setup(){let t=p(void 0),n=p([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),oo=it.bind();oo.args={title:"Input title"};const ro=it.bind();ro.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const ao=it.bind();ao.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const au=["Default","Hint","ErrorHint"];var su=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ru,Default:oo,Hint:ro,ErrorHint:ao,__namedExportsOrder:au}),lu={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:Tn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const iu=e=>({template:'<Slider v-bind="args" />',components:{Slider:Tn},setup(){return{args:e}}}),so=iu.bind();so.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Te};const uu=["Default"];var du=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lu,Default:so,__namedExportsOrder:uu}),pu={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Fe,argTypes:{}};const cu=e=>({template:"<Spinner />",components:{Spinner:Fe},setup(){return{args:e}}}),mu=cu.bind(),fu=["Default"];var gu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pu,Default:mu,__namedExportsOrder:fu}),vu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:Pn,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const yu=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:Pn},setup(){const t=p(!1);return{args:e,value:t}}}),lo=yu.bind({});lo.args={title:"Switch title",description:"Switch description text to be placed here"};const bu=["Default"];var hu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vu,Default:lo,__namedExportsOrder:bu}),ku={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:at,argTypes:{rounded:{control:{type:"boolean"}}}};const wu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:at},setup(){const t=p("item_1");return{args:e,value:t}}}),io=wu.bind();io.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Su=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:at},setup(){const t=p("item_1");return{args:e,value:t}}}),uo=Su.bind();uo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Du=["Default","Slotted"];var $u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ku,Default:io,Slotted:uo,__namedExportsOrder:Du}),_u={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:In,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ut=e=>({template:'<Textarea v-bind="args"/>',components:{Textarea:In},setup(){return{args:e}}}),po=ut.bind();po.args={modelValue:"Textarea text",title:"Textarea title"};const co=ut.bind();co.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const mo=ut.bind();mo.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const Cu=["Default","Hint","ErrorHint"];var xu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_u,Default:po,Hint:co,ErrorHint:mo,__namedExportsOrder:Cu}),Tu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:En,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Bu=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:En},setup(){const t=p(!1);return{args:e,value:t}}}),fo=Bu.bind({});fo.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Pu=["Default"];var Vu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tu,Default:fo,__namedExportsOrder:Pu});function go(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Or,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":ba,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Ba,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":ja,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":cs,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Ps,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Os,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":ri,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":ui,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":gi,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":ki,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":Ci,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Bi,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Ri,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":ji,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":Hi,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":Gi,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":Qi,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":nu,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":su,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":du,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":gu,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":hu,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":$u,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":xu,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Vu}[e]}Object.assign(go,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});function Ru(e){e(go,{hot:!1},!1)}const Iu=[lr,ir,ur,dr,pr,cr,mr,fr,gr,vr,kr].filter(Boolean);Iu.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return sr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>ar(o,!1));case"loaders":return n.forEach(o=>rr(o,!1));case"parameters":return yt(Ue({},n),!1);case"argTypesEnhancers":return n.forEach(o=>or(o));case"argsEnhancers":return n.forEach(o=>nr(o));case"globals":case"globalTypes":{const o={};return o[t]=n,yt(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});Ru(yr);
//# sourceMappingURL=iframe.4c3c624a.js.map
