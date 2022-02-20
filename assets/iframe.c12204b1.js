var Bo=Object.defineProperty,Vo=Object.defineProperties;var Io=Object.getOwnPropertyDescriptors;var bt=Object.getOwnPropertySymbols;var Fo=Object.prototype.hasOwnProperty,Ro=Object.prototype.propertyIsEnumerable;var ht=(e,t,o)=>t in e?Bo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,He=(e,t)=>{for(var o in t||(t={}))Fo.call(t,o)&&ht(e,o,t[o]);if(bt)for(var o of bt(t))Ro.call(t,o)&&ht(e,o,t[o]);return e},kt=(e,t)=>Vo(e,Io(t));import{d as B,c as S,u as jo,a as f,b as c,o as u,r as i,t as G,e as ee,w as X,n as _,f as at,g as V,h as E,i as $,j as F,m as ve,P as Mo,k as ie,v as Lo,l as j,s as ye,p as Ie,q as Fe,x as wt,y as Re,z as Dt,A as Wo,B as Oo,C as Eo,D as zo,E as No,F as pe,G as _e,H as te,I as je,J as Ue,K as Ye,L as Ao,M as Ho,N as Uo,O as Yo,Q as qo,R as Go,S as Ko,T as Jo,U as Xo,V as me,W as Y,X as re,Y as st,Z as zt,_ as ae,$ as fe,a0 as Nt,a1 as At,a2 as lt,a3 as ge,a4 as it,a5 as De,a6 as _t,a7 as Qo,a8 as ut,a9 as Ht,aa as Le,ab as Ut,ac as Yt,ad as Zo,ae as er,af as qt,ag as tr,ah as nr,ai as or,aj as rr,ak as Me,al as ar,am as $t,an as Pe,ao as sr,ap as lr,aq as ir,ar as ur,as as dr,at as cr,au as St,av as pr,aw as mr,ax as fr,ay as gr,az as vr,aA as yr,aB as br,aC as hr,aD as kr,aE as wr,aF as Dr,aG as _r,aH as $r,aI as Sr,aJ as Cr,aK as Tr}from"./vendor.eb402c5d.js";const xr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};xr();const Pr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var Br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:Pr});var M=(e,t)=>{const o=e.__vccOpts||e;for(const[a,s]of t)o[a]=s;return o};const dt=B({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=S(()=>.666*(e.size-2*e.safeMargin)),o=S(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:o}}}),Ct=()=>{jo(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},Tt=dt.setup;dt.setup=Tt?(e,t)=>(Ct(),Tt(e,t)):Ct;const Gt=dt,Vr=["width","height","viewBox"],Ir=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function Fr(e,t,o,a,s,r){return u(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Ir)],8,Vr)}var We=M(Gt,[["render",Fr],["__scopeId","data-v-2e051f42"]]);Gt.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var Rr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const Kt=B({name:"RobustButton",components:{Spinner:We},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=i(!1),{loading:o,variant:a}=G(e);return{variantStyles:S(()=>Rr[a.value]),loading:o,displaySpinner:t}}}),jr={key:0,class:"mr-2"},Mr={class:"whitespace-no-wrap truncate"},Lr={key:1,class:"ml-2"};function Wr(e,t,o,a,s,r){const n=V("spinner");return u(),ee(at(e.tag),{disabled:e.disabled,class:_(["transition-color flex items-center justify-center truncate font-medium ring-opacity-50 duration-75 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:X(()=>[c("div",{class:_(["flex select-none items-center transition-all duration-150",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(u(),f("div",jr,[E(e.$slots,"prefix",{tag:"div"})])):$("",!0),c("div",Mr,[E(e.$slots,"default")]),e.$slots.suffix?(u(),f("div",Lr,[E(e.$slots,"suffix",{tag:"div"})])):$("",!0)],2),e.loading?(u(),ee(n,{key:0,size:20,stroke:2,class:"spinner absolute"})):$("",!0)]),_:3},8,["disabled","class"])}var be=M(Kt,[["render",Wr]]);Kt.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Or={parameters:{storySource:{source:`import Button from './Button.vue'

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
  <ph-smiley size="20" />
  </template>
  Click here
  </Button>\`,
  components: { Button },
  setup() {
    return { args }
  },
})

export const Prefix = PrefixTemplate.bind()

const SuffixTemplate = (args) => ({
  template: \`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </Button>\`,
  components: { Button },
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:be,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Er=e=>({components:{Button:be},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),zr=Er.bind({}),Nr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <ph-smiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:be},setup(){return{args:e}}}),Ar=Nr.bind(),Hr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </Button>`,components:{Button:be},setup(){return{args:e}}}),Ur=Hr.bind(),Yr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:be},setup(){return{args:e}}}),qr=Yr.bind(),Gr=["Default","Prefix","Suffix","Loading"];var Kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Or,Default:zr,Prefix:Ar,Suffix:Ur,Loading:qr,__namedExportsOrder:Gr});let Jr=0;const Jt=B({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},hint:{type:String},error:{type:String},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const o=(++Jr).toString(),a=/^on[^a-z]/,s=d=>a.test(d);let r=S(()=>Object.fromEntries(Object.entries(t).filter(d=>s(d[0]))));const n=i();function l(){}function p(){}return{cuid:o,wrapperRef:n,blurred:l,focused:p,listeners:r}}}),Xr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Qr={key:1,class:"block pt-1"},Zr={key:0,class:"select-none text-xs text-gray-400"},ea={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function ta(e,t,o,a,s,r){return u(),f("fieldset",null,[e.title?(u(),f("legend",Xr,F(e.title),1)):$("",!0),c("div",ve(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.class,e.condensed?"h-9":"h-10",{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[E(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(u(),f("label",Qr,[e.hint!==void 0?(u(),f("div",Zr,F(e.hint),1)):$("",!0),e.error!==void 0?(u(),f("div",ea,F(e.error),1)):$("",!0)])):$("",!0)])}var Se=M(Jt,[["render",ta]]);Jt.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Xt=B({name:"RobustInput",inheritAttrs:!1,components:{InputWrapper:Se,PhWarningCircle:Mo},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const a=i(),s=o,r=S({get(){return e.modelValue},set(p){t("input",p),t("change",p),t("update:modelValue",p)}});function n(){var p;(p=a.value)==null||p.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:r,inputAttrs:s,props:e,inputRef:a,focus:n,clear:l}}}),na=["id","disabled","readonly"],oa={key:1,class:"text-red-400"};function ra(e,t,o,a,s,r){const n=V("PhWarningCircle"),l=V("InputWrapper");return u(),ee(l,{title:e.title,hint:e.hint,error:e.error,class:_(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:X(p=>[e.$slots.prefix?(u(),f("div",{key:0,class:_(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[E(e.$slots,"prefix",{tag:"div"})],2)):$("",!0),ie(c("input",ve({id:p.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=d=>e.inputFieldValue=d),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,na),[[Lo,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),f("div",{key:1,class:_(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),f("div",oa,[j(n,{size:"20",class:"block"})])):E(e.$slots,"suffix",{key:0,tag:"div"})],2)):$("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var Oe=M(Xt,[["render",ra]]);Xt.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var aa=[{title:"today",preset:()=>{const e=ye(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ye(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=ye(Ie(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ye(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Fe(new Date),ye(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Fe(new Date),wt(new Date)]},{title:"this_year",preset:()=>[Re(new Date),Dt(new Date)]},{title:"this_year_so_far",preset:()=>[Re(new Date),ye(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=Wo(Ie(new Date,7));return[e,Oo(new Date(e))]}},{title:"last_month",preset:()=>{let e=Fe(Ie(Fe(new Date),1));return[e,wt(e)]}},{title:"last_year",preset:()=>{const e=Re(Ie(Re(new Date),1));return[e,Dt(new Date(e))]}}],sa={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const Qt=B({name:"RobustCalendar",components:{Input:Oe,PhCaretLeft:Eo,PhCaretRight:zo},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:o,past:a,today:s,modelValue:r}=G(e),n=i(),l=i(),p=i(),d=i(),g=i(),m=Array.isArray(r.value)?i(new Date):i(new Date(r.value)),b=i(),h=i({}),R=aa,C=S(()=>sa[e.variant]),k=S(()=>{const T=new Date(m.value);return No(T)}),A=S(()=>{try{return pe(m.value,"MMM")}catch{return}}),P=S(()=>{try{return pe(m.value,"yyyy")}catch{return}}),H=S(()=>{const T=new Date(m.value);T.setDate(1);const D=T.getDay();return(D===0?7:D)-1}),K=S(()=>new Date(m.value).getMonth()),z=S(()=>new Date(m.value).getFullYear()),q=()=>{if(console.log("applying time"),n.value!=""&&!je(new Date(n.value))&&(p.value="Please enter a valid date."),l.value!=""&&!je(new Date(l.value))&&(d.value="Please enter a valid date."),je(new Date(n.value))&&je(new Date(l.value))){p.value="",d.value="";const T=[new Date(n.value),new Date(l.value)];t("update:modelValue",T)}},N=(T,D)=>{const O=ne(T,D);return O<0?1:O>0?-1:0},ne=(T,D)=>{const O=Date.UTC(D.getFullYear(),D.getMonth(),D.getDate()),ce=Date.UTC(T.getFullYear(),T.getMonth(),T.getDate());return(O-ce)/864e5},se=T=>{if(!Array.isArray(r.value)||r.value.length<2||!N(...r.value))return!1;const D=new Date;D.setDate(T),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear());const O=Ue(r.value);return!N(D,O)},J=T=>{if(!Array.isArray(r.value)||r.value.length<2||!N(...r.value))return!1;const D=new Date;D.setDate(T),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear());const O=Ye(r.value);return!N(D,O)},Q=T=>{if(!Array.isArray(r.value)||r.value.length<2)return!1;const D=new Date;D.setDate(T),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear());const O=Ue(r.value),ce=Ye(r.value);return N(D,ce)===-1&&N(D,O)===1},le=T=>{const D=new Date;if(D.setDate(T),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear()),Array.isArray(r.value)){const O=r.value.map(ce=>new Date(ce));for(let ce=0;ce<O.length;ce++)if(!N(O[ce],D))return!0}else if(!N(new Date(b.value),D))return!0};function ue(T){t("update:modelValue",T),m.value=T[1]}function de(){m.value=Ao(m.value,1)}function oe(){m.value=Ho(m.value,1)}function I(T){m.value=Uo(m.value,T)}function W(){m.value=Yo(m.value,1)}function w(){m.value=qo(m.value,1)}function he(T){m.value=Go(m.value,T)}const y=T=>{const D=new Date(m.value).setDate(T);return!(!s.value&&Ko(g.value,D)||!a.value&&Jo(g.value,D)>0||!o.value&&Xo(D))},x=T=>{if(!y(T))return;const D=new Date;if(D.setDate(T),D.setMonth(m.value.getMonth()),D.setFullYear(m.value.getFullYear()),m.value=D,Array.isArray(r.value)){p.value="",d.value="";let O=[];r.value.length>=2?(O.push(new Date(m.value)),l.value=""):(O=r.value,O.push(new Date(m.value)),O.length>1&&(O=[ye(Ue(O),{hours:0,minutes:0,seconds:0}),ye(Ye(O),{hours:23,minutes:59,seconds:59})],l.value=O[1].toLocaleDateString())),n.value=O[0].toLocaleDateString(),t("update:modelValue",O)}else b.value=new Date(m.value),t("update:modelValue",m.value)},v=()=>{m.value=new Date(new Date().setHours(12))};_e(r,T=>{const D=T[0]||void 0,O=T[1]||void 0;D?n.value=D.toLocaleDateString():n.value="",O?l.value=O.toLocaleDateString():l.value=""}),te(()=>{if(Array.isArray(r.value)){m.value=new Date(r.value[1]||new Date),b.value=m.value;const T=r.value[0]||void 0,D=r.value[1]||void 0;T?n.value=T.toLocaleDateString():n.value="",D?l.value=D.toLocaleDateString():l.value=""}else m.value=new Date(r.value||new Date),b.value=m.value});const U=S(()=>{const T=[];for(let D=1900;D<=2100;D++)T.push(D);return T}),Z=i(!1);function xe(){Z.value=!0}function Ne(){Z.value=!1}const Ae=i(!1);function xo(){Ae.value=!0,me(()=>{h.value[z.value].scrollIntoView({block:"start",behavior:"auto"})})}function Po(){Ae.value=!1}return{months:S(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:n,to:l,errorFrom:p,errorTo:d,showMonthSelectionActive:Z,showYearSelectionActive:Ae,now:g,cursor:m,selectedDate:b,showMonthSelection:xe,showYearSelection:xo,hideMonthSelection:Ne,hideYearSelection:Po,daysInMonth:k,monthHeading:A,yearHeading:P,refYearEntry:h,setYear:I,setMonth:he,firstWeekday:H,activeMonth:K,activeYear:z,compareDates:N,applyTime:q,dayDiff:ne,isFirst:se,isLast:J,isBetweenRange:Q,isSelectedDay:le,addYear:de,subYear:oe,addMonth:W,subMonth:w,dayAllowed:y,daySelect:x,reset:v,yearSelectionYears:U,quickActions:R,setQuickAction:ue,variantStyling:C}}}),la={class:"relative flex sm:flex-row flex-col w-max select-none"},ia={key:0,class:"relative border-r border-gray-200 dark:border-gray-600 h-36 sm:h-auto sm:w-48 w-full"},ua={class:"absolute inset-0 overflow-auto py-2 sm:h-auto w-full"},da=["onClick"],ca={class:"p-4 dark:border-gray-600"},pa={class:"mb-4 flex items-center text-center text-lg font-semibold"},ma={class:"flex flex-1"},fa={class:"relative w-max"},ga={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},va=["onClick"],ya={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},ba=["data-year","onClick"],ha=st('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),ka=["disabled","onClick"],wa={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},Da=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),_a=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function $a(e,t,o,a,s,r){const n=V("PhCaretLeft"),l=V("PhCaretRight"),p=V("Input");return u(),f("div",la,[Array.isArray(e.modelValue)?(u(),f("div",ia,[c("div",ua,[(u(!0),f(Y,null,re(e.quickActions,d=>(u(),f("div",{key:d.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:g=>e.setQuickAction(d.preset())},F(d.title),9,da))),128))])])):$("",!0),c("section",ca,[c("div",pa,[c("div",ma,[c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},F(e.monthHeading),1),c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},F(e.yearHeading),1)]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...d)=>e.subMonth&&e.subMonth(...d))},[j(n,{type:"chevron-left",size:"14",weight:"bold"})]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...d)=>e.addMonth&&e.addMonth(...d))},[j(l,{type:"chevron-right",size:"14",weight:"bold"})])]),c("div",fa,[e.showMonthSelectionActive?(u(),f("div",ga,[(u(!0),f(Y,null,re(e.months,(d,g)=>(u(),f("div",{key:g,class:_(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===g?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(g),e.hideMonthSelection()}},F(d.title),11,va))),128))])):$("",!0),e.showYearSelectionActive?(u(),f("div",ya,[(u(!0),f(Y,null,re(e.yearSelectionYears,d=>(u(),f("div",{ref_for:!0,ref:g=>e.refYearEntry[d]=g,key:d,class:_(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===d?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":d,onClick:()=>{e.setYear(d),e.hideYearSelection()}},F(d),11,ba))),128))])):$("",!0),c("div",{class:_(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ha,(u(!0),f(Y,null,re(e.firstWeekday,d=>(u(),f("div",{key:d+"_offset"}))),128)),(u(!0),f(Y,null,re(e.daysInMonth,d=>(u(),f("div",{key:d+"_day",class:_(["relative",[e.isBetweenRange(d)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(d),onClick:g=>e.daySelect(d)},[e.isLast(d)||e.isFirst(d)?(u(),f("div",{key:0,class:_(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(d)?"right-0 w-1/2":e.isLast(d)?"left-0 w-1/2":""]])},null,2)):$("",!0),c("div",{class:_(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(d)||e.isLast(d)||e.isFirst(d)||e.isSelectedDay(d)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},F(d),3)],10,ka))),128))],2)])]),Array.isArray(e.modelValue)?(u(),f("div",wa,[Da,j(p,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=d=>e.from=d),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),_a,j(p,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=d=>e.to=d),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),E(e.$slots,"default")])):$("",!0)])}var Ee=M(Qt,[["render",$a]]);Qt.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var Sa={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ee,argTypes:{}};const Zt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ee},setup(){return{args:e}}}),xt=i(new Date),en=Zt.bind({});en.args={modelValue:xt,"onUpdate:modelValue":e=>{xt.value=e,console.log(e)}};const Ca=[new Date,new Date],Pt=i(Ca),tn=Zt.bind({});tn.args={modelValue:Pt,"onUpdate:modelValue":e=>{Pt.value=e,console.log(e)}};const Ta=["Default","Range"];var xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Sa,Default:en,Range:tn,__namedExportsOrder:Ta});const nn=B({name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const a="_"+Math.random().toString(36).substr(2,9),s=S({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(r){let n=e.modelValue;Array.isArray(n)?r?n.push(e.value):n.splice(n.indexOf(e.value),1):r?n=e.value:n=e.disabledValue,t("update:modelValue",n),t("change",n)}});return{cuid:a,isChecked:s,attrs:o}}}),Pa={class:"inline-block"},Ba={class:"flex cursor-pointer items-start"},Va=["id"],Ia={key:0,class:"w-full select-none pt-px leading-4"},Fa={key:1,class:"w-full select-none pt-px leading-4"};function Ra(e,t,o,a,s,r){const n=V("ph-check");return u(),f("div",Pa,[c("label",Ba,[ie(c("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,Va),[[zt,e.isChecked]]),c("div",{class:_(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[j(n,{class:_([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(u(),f("div",Ia,F(e.title),1)):$("",!0),!e.title&&e.$slots.title?(u(),f("div",Fa,[E(e.$slots,"title")])):$("",!0)])])}var Ce=M(nn,[["render",Ra]]);nn.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var ja={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Ce,argTypes:{title:{control:{type:"text"}}}};const Ma=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Ce},setup(){return{value:i(!1),args:e}}}),on=Ma.bind({});on.args={title:"Checkbox title"};const La=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Ce},setup(){return{value:i(!1),args:e}}}),rn=La.bind({});rn.args={title:"V-Slot Checkbox title"};const Wa=["Default","SlottedTitle"];var Oa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ja,Default:on,SlottedTitle:rn,__namedExportsOrder:Wa});const an=B({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),Ea=["width","height","viewBox"],za=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function Na(e,t,o,a,s,r){return u(),f("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,za)],8,Ea)}var sn=M(an,[["render",Na]]);an.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Aa={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:sn,argTypes:{progress:{control:{type:"number"}}}};const Ha=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:sn},setup(){return{args:e}}}),Ua=Ha.bind(),Ya=["Default"];var qa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Aa,Default:Ua,__namedExportsOrder:Ya});function we(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ka(e):/rgb/.test(e)?t=Vt(e):typeof e=="string"?t=Vt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:o,g:a,b:s,a:r}=t,{h:n,s:l,v:p}=Ja(t);return{r:o,g:a,b:s,a:r===void 0?1:r,h:n,s:l,v:p}}function ln(e){const t=document.createElement("canvas"),o=t.getContext("2d"),a=e*2;return t.width=a,t.height=a,o.fillStyle="#ffffff",o.fillRect(0,0,a,a),o.fillStyle="#ccd5db",o.fillRect(0,0,e,e),o.fillRect(e,e,e,e),t}function Bt(e,t,o,a,s,r){const n=e==="l",l=t.createLinearGradient(0,0,n?o:0,n?0:a);l.addColorStop(.01,s),l.addColorStop(.99,r),t.fillStyle=l,t.fillRect(0,0,o,a)}function Ga({r:e,g:t,b:o},a){const s=n=>("0"+Number(n).toString(16)).slice(-2),r=`#${s(e)}${s(t)}${s(o)}`;return a?r.toUpperCase():r}function Ka(e){e=e.slice(1);const t=o=>parseInt(o,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function Vt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Ja({r:e,g:t,b:o}){e=e/255,t=t/255,o=o/255;const a=Math.max(e,t,o),s=Math.min(e,t,o),r=a-s;let n=0;a===s?n=0:a===e?t>=o?n=60*(t-o)/r:n=60*(t-o)/r+360:a===t?n=60*(o-e)/r+120:a===o&&(n=60*(e-t)/r+240),n=Math.floor(n);const l=parseFloat((a===0?0:1-s/a).toFixed(2)),p=parseFloat(a.toFixed(2));return{h:n,s:l,v:p}}const un=B({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const o=i({}),{size:a,hsv:s,color:r}=G(e),n=i(),l=i(),p=m=>{const b=m,h=a.value,R=b.getContext("2d");b.width=h,b.height=h,R.fillStyle=r.value,R.fillRect(0,0,h,h),Bt("l",R,h,h,"#FFFFFF","rgba(255,255,255,0)"),Bt("p",R,h,h,"rgba(0,0,0,0)","#000000")},d=()=>{o.value={left:s.value.s*a.value-5+"px",top:(1-s.value.v)*a.value-5+"px"}},g=m=>{const{top:b,left:h}=n.value.getBoundingClientRect(),R=m.target.getContext("2d"),C=A=>{let P=A.clientX-h,H=A.clientY-b;P<0&&(P=0),H<0&&(H=0),P>a.value&&(P=a.value),H>a.value&&(H=a.value),o.value={left:P-5+"px",top:H-5+"px"};const K=R.getImageData(Math.min(P,a.value-1),Math.min(H,a.value-1),1,1),[z,q,N]=K.data;t("selectSaturation",{r:z,g:q,b:N})};C(m);const k=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",k)};return te(()=>{p(l.value),d()}),{slideSaturationStyle:o,selectSaturation:g,renderSlide:d,renderColor:p,saturation:n,canvasSaturation:l,color:r,hsv:s,size:a}}}),Xa={ref:"canvasSaturation"};function Qa(e,t,o,a,s,r){return u(),f("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=fe((...n)=>e.selectSaturation&&e.selectSaturation(...n),["prevent","stop"]))},[c("canvas",Xa,null,512),c("div",{style:ae(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Za=M(un,[["render",Qa]]);un.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const dn=B({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const o=i({}),a=i(),{height:s,width:r,hsv:n}=G(e),l=i(),p=m=>{const b=m,h=r.value,R=s.value,C=b.getContext("2d");b.width=h,b.height=R;const k=C.createLinearGradient(0,0,0,R);k.addColorStop(0,"#FF0000"),k.addColorStop(.17*1,"#FF00FF"),k.addColorStop(.17*2,"#0000FF"),k.addColorStop(.17*3,"#00FFFF"),k.addColorStop(.17*4,"#00FF00"),k.addColorStop(.17*5,"#FFFF00"),k.addColorStop(1,"#FF0000"),C.fillStyle=k,C.fillRect(0,0,h,R)},d=()=>{o.value={top:(1-n.value.h/360)*s.value-2+"px"}},g=m=>{const{top:b}=l.value.getBoundingClientRect(),h=m.target.getContext("2d"),R=k=>{let A=k.clientY-b;A<0&&(A=0),A>s.value&&(A=s.value),o.value={top:A-2+"px"};const P=h.getImageData(0,Math.min(A,s.value-1),1,1),[H,K,z]=P.data;t("selectHue",{r:H,g:K,b:z})};R(m);const C=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",C)};return te(()=>{p(a.value),d()}),{slideHueStyle:o,hue:l,width:r,height:s,renderSlide:d,selectHue:g,renderColor:p,hsv:n,canvasHue:a}}}),es={ref:"canvasHue"};function ts(e,t,o,a,s,r){return u(),f("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=fe((...n)=>e.selectHue&&e.selectHue(...n),["prevent","stop"]))},[c("canvas",es,null,512),c("div",{style:ae(e.slideHueStyle),class:"slide"},null,4)],544)}var ns=M(dn,[["render",ts]]);dn.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const cn=B({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=i(5),{color:o,width:a,height:s}=G(e),r=i(),n=l=>{const p=l,d=a.value,g=s.value,m=t.value,b=ln(m),h=p.getContext("2d");p.width=d,p.height=g,h.fillStyle=h.createPattern(b,"repeat"),h.fillRect(0,0,d,g),h.fillStyle=o.value,h.fillRect(0,0,d,g)};return te(()=>{Nt(()=>{n(r.value)}),n(r.value)}),{alphaSize:t,color:o,width:a,height:s,canvas:r}}}),os={ref:"canvas"};function rs(e,t,o,a,s,r){return u(),f("canvas",os,null,512)}var as=M(cn,[["render",rs]]);cn.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const pn=B({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:S({get(){return e.color||""},set(a){t("inputColor",a)}})}}}),ss={class:"color-type"},ls={class:"name"};function is(e,t,o,a,s,r){return u(),f("div",ss,[c("span",ls,F(e.name),1),ie(c("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>e.modelColor=n),class:"value"},null,512),[[At,e.modelColor]])])}var us=M(pn,[["render",is]]);pn.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const mn=B({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const o=i(),a=i([]),s=i();e.colorsHistoryKey&&localStorage&&(a.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=ln(4).toDataURL(),lt(()=>{r(o.value)});const r=l=>{if(!l)return;const p=a.value||[],d=p.indexOf(l);d>=0&&p.splice(d,1),p.length>=8&&(p.length=7),p.unshift(l),a.value=p||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(p))};return{setColorsHistory:r,colorsHistory:a,color:o,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),ds={class:"colors"},cs=["onClick"],ps={key:0,class:"colors history"},ms=["onClick"];function fs(e,t,o,a,s,r){return u(),f("div",null,[c("ul",ds,[(u(!0),f(Y,null,re(e.colorsDefault,n=>(u(),f("li",{key:n,class:"item",onClick:l=>e.selectColor(n)},[c("div",{style:ae({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:ae({background:n}),class:"color"},null,4)],8,cs))),128))]),e.colorsHistory.length?(u(),f("ul",ps,[(u(!0),f(Y,null,re(e.colorsHistory,n=>(u(),f("li",{key:n,class:"item",onClick:l=>e.selectColor(n)},[c("div",{style:ae({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:ae({background:n}),class:"color"},null,4)],8,ms))),128))])):$("",!0)])}var gs=M(mn,[["render",fs]]);mn.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const fn=B({name:"RobustColorPicker",components:{Saturation:Za,Hue:ns,Preview:as,Box:us,Colors:gs},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const o=i(15),a=i(152),s=i(20),r=i(""),n=i(""),l=i(0),p=i(0),d=i(0),g=i(1),m=i(0),b=i(0),h=i(0),R=i(),C=i(),{theme:k,color:A}=G(e),P=S(()=>k.value==="light"),H=S(()=>a.value+(o.value+8)*2),K=S(()=>H.value-s.value),z=S(()=>({r:l.value,g:p.value,b:d.value,a:g.value})),q=S(()=>({h:m.value,s:b.value,v:h.value})),N=S(()=>`rgb(${l.value}, ${p.value}, ${d.value})`),ne=S(()=>`${l.value}, ${p.value}, ${d.value}`),se=S(()=>`rgb(${ne.value})`),J=S(()=>Ga(z.value,!0)),Q=()=>{n.value=J.value,r.value=ne.value};return te(()=>{const W=we(A.value);l.value=W.r,p.value=W.g,d.value=W.b,g.value=W.a,m.value=W.h,b.value=W.s,h.value=W.v,Q()}),Nt(()=>{t("changeColor",{rgba:z.value,hsv:q.value,hex:n.value})}),{hueWidth:o,hueHeight:a,previewHeight:s,modelRgba:r,modelHex:n,r:l,g:p,b:d,a:g,h:m,s:b,v:h,isLightTheme:P,totalWidth:H,previewWidth:K,rgba:z,hsv:q,rgbString:N,rgbStringShort:ne,rgbaString:se,hexString:J,setText:Q,selectSaturation:W=>{const w=we(W);l.value=w.r,p.value=w.g,d.value=w.b,g.value=w.a,m.value=w.h,b.value=w.s,h.value=w.v,Q()},selectHue:W=>{const w=we(W);l.value=w.r,p.value=w.g,d.value=w.b,g.value=w.a,m.value=w.h,b.value=w.s,h.value=w.v,Q(),me(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide()})},inputHex:W=>{const w=we(W);l.value=w.r,p.value=w.g,d.value=w.b,g.value=w.a,m.value=w.h,b.value=w.s,h.value=w.v,n.value=W,r.value=ne.value,me(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide(),R.value.renderSlide()})},inputRgba:W=>{const w=we(W);l.value=w.r,p.value=w.g,d.value=w.b,g.value=w.a,m.value=w.h,b.value=w.s,h.value=w.v,n.value=J.value,r.value=`${l.value}, ${p.value}, ${d.value}`,me(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide(),R.value.renderSlide()})},selectColor:W=>{const w=we(W);l.value=w.r,p.value=w.g,d.value=w.b,g.value=w.a,m.value=w.h,b.value=w.s,h.value=w.v,Q(),me(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide(),R.value.renderSlide()})},saturation:C,hue:R,color:A,theme:k}}}),vs={class:"color-set"};function ys(e,t,o,a,s,r){const n=V("Saturation"),l=V("Hue"),p=V("Preview"),d=V("Box"),g=V("Colors");return u(),f("div",{class:_(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:ae({width:e.totalWidth+"px"})},[c("div",vs,[j(n,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),j(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),c("div",{style:ae({height:e.previewHeight+"px"}),class:"color-show"},[j(p,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),j(d,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),j(d,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),j(g,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var gn=M(fn,[["render",ys]]);fn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var bs={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:gn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const hs=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:gn},setup(){return{args:e}}}),ks=hs.bind(),ws=["Default"];var Ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bs,Default:ks,__namedExportsOrder:ws});const vn=B({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),_s={key:1,class:"flex items-center"},$s={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function Ss(e,t,o,a,s,r){return e.$slots.default?(u(),f("div",_s,[c("div",{class:_(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),c("div",$s,[E(e.$slots,"default")]),c("div",{class:_(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(u(),f("div",{key:0,class:_(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var Cs=M(vn,[["render",Ss]]);vn.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const yn=B({name:"RobustContentBox",components:{Separator:Cs},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),Ts={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},xs={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},Ps={class:"flex"},Bs={key:1,class:"text-gray-500 dark:text-gray-500"},Vs={class:"p-4 sm:p-6"};function Is(e,t,o,a,s,r){const n=V("Separator");return u(),f("section",Ts,[e.description!==void 0||e.title!==void 0?(u(),f("header",xs,[e.stripe?(u(),f("div",{key:0,class:_(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):$("",!0),c("h1",Ps,[c("div",{class:_(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[E(e.$slots,"title",{title:e.title},()=>[ge(F(e.title),1)])],2)]),e.description!==void 0?(u(),f("p",Bs,[E(e.$slots,"description",{description:e.description},()=>[ge(F(e.description),1)])])):$("",!0)])):$("",!0),j(n),c("div",Vs,[E(e.$slots,"default")])])}var Ve=M(yn,[["render",Is]]);yn.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var Fs={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Ve,argTypes:{title:{control:{type:"text"}}}};const Rs=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Ve},setup(){return{args:e}}}),js=Rs.bind(),Ms=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Ve},setup(){return{args:e}}}),bn=Ms.bind();bn.args={title:"Input title"};const Ls=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Ve},setup(){return{args:e}}}),hn=Ls.bind();hn.args={title:"Input title"};const Ws=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Ve},setup(){return{args:e}}}),kn=Ws.bind();kn.args={title:"Input title"};const Os=["Default","Title","TitleProp","Stripe"];var Es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fs,Default:js,Title:bn,TitleProp:hn,Stripe:kn,__namedExportsOrder:Os});const wn=B({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),zs={class:"py-4 text-gray-500 dark:text-gray-400"},Ns={class:"mb-2 flex justify-center"},As={class:"mx-auto text-center text-xl font-bold"},Hs={class:"mx-auto text-center"};function Us(e,t,o,a,s,r){return u(),f("div",zs,[c("div",Ns,[(u(),ee(at(e.icon),{size:"40"}))]),c("div",As,F(e.title),1),c("div",Hs,F(e.description),1)])}var Dn=M(wn,[["render",Us]]);wn.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}]};var Ys={parameters:{storySource:{source:`import ContentPlaceholder from './ContentPlaceholder.vue'
import { PhWarning } from '@dnlsndr/vue-phosphor-icons'

export default {
  title: 'Ui/ContentPlaceholder',
  component: ContentPlaceholder,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<ContentPlaceholder v-bind="args" />\`,
  components: { ContentPlaceholder },
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ContentPlaceholder",component:Dn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const qs=e=>({template:'<ContentPlaceholder v-bind="args" />',components:{ContentPlaceholder:Dn},setup(){return{args:e}}}),_n=qs.bind();_n.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:it};const Gs=["Default"];var Ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ys,Default:_n,__namedExportsOrder:Gs}),Js=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],Te=B({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:o}){const{open:a,appendTo:s}=G(e),r=i();let n;const l=i(!1),p={strategy:"absolute",placement:"bottom-start",modifiers:[...Js,...e.modifiers]};function d(){n==null||n.destroy(),l.value=!1}async function g(h){if(!h)return;const R=Object.assign({},p,e.options);!r.value||(n=Qo(h,r.value,R),await n.update())}lt(()=>{d()});async function m(){await g(s.value),r.value&&(n==null||n.update(),_t.fromTo(r.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function b(){r.value&&_t.fromTo(r.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{d()})}return te(()=>{if(!o.default)throw new Error("Popper does not have a child slot");_e(a,h=>{l.value=!0,me(async()=>{h?m():b()})})}),{appendTo:s,root:r,render:l}},render(){if(this.render)return De("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const $n=B({name:"RobustDatePicker",components:{Popper:Te,Calendar:Ee,InputWrapper:Se,PhCaretDown:ut,PhCalendar:Ht},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const a=i(),{modelValue:s}=G(e),r=i(!1),n=i(),l=i();Le(n,m=>{r.value&&(l.value.wrapperRef.contains(m.target)&&(m.stopPropagation(),m.preventDefault()),g(),t("blur"))});const p=S({get(){return(s==null?void 0:s.value)?s.value:new Date},set(m){r.value=!1,t("update:modelValue",m),t("change",m),t("blur")}}),d=S(()=>{if(!p.value)return"Select date";const m=p.value;try{return m?pe(m,"P"):"Unknown"}catch{return}});function g(){r.value===!0&&(r.value=!1,t("blur"))}return{attrs:o,refSelectContainer:a,open:r,props:e,displayDate:d,computedValue:p,closeDropdown:g,popperRef:n,inputWrapperRef:l}},methods:{}}),Xs=["id"],Qs={class:"min-w-0 truncate tabular-nums"};function Zs(e,t,o,a,s,r){var m,b;const n=V("PhCalendar"),l=V("PhCaretDown"),p=V("InputWrapper"),d=V("Calendar"),g=V("Popper");return u(),f(Y,null,[j(p,{title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=fe(h=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:X(h=>[c("div",{class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[j(n,{size:"20"})],2),c("div",ve({id:h.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Qs,F(e.displayDate),1)],16,Xs),c("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[j(l,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((m=e.inputWrapperRef)==null?void 0:m.wrapperRef)?(u(),ee(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(b=e.inputWrapperRef)==null?void 0:b.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=h=>e.open=h),options:{placement:"bottom-start"}},{default:X(()=>[j(d,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=h=>e.computedValue=h)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):$("",!0)],64)}var ct=M($n,[["render",Zs]]);$n.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var el={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:ct,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const tl=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:ct},setup(){return{args:e}}}),nl=new Date,It=i(nl),Sn=tl.bind({});Sn.args={modelValue:It,"onUpdate:modelValue":e=>{It.value=e}};const ol=["Default"];var rl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:el,Default:Sn,__namedExportsOrder:ol});const Cn=B({name:"RobustDaterangePicker",components:{Calendar:Ee,Popper:Te,InputWrapper:Se,Button:be,Checkbox:Ce,DatePicker:ct,PhCaretDown:ut,PhCalendar:Ht,PhArrowLeft:Ut,PhArrowRight:Yt,PhClockCounterClockwise:Zo},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:o}){const{dateRange:a,compareDateRange:s,perspectiveDate:r,comparePerspectiveDate:n}=G(e),l=i(),p=i(!1),d=i(),g=i(),m=i(r.value),b=i(n.value),h=i(!1),R=i(),C=i(),k=i(!0),A=i(),P=S(()=>q.value.length>1),H=(I,W)=>W?pe(I,"dd.MM.yyyy HH:mm:ss"):pe(I,"dd.MM.yyyy"),K=S(()=>e.dateHistory||[]);let z=i();const q=i(s.value),N=S({get(){return q.value},set(I){q.value=I,t("update:compareDate",I),t("blur")}}),ne=S({get:()=>N.value.length>1,set:I=>{Q(I)}}),se=S(()=>{if(!a.value)return"Select date";const I=a.value;try{return I.length>1?pe(I[0],"P")+" - "+pe(I[1],"P"):pe(I[0],"P")+" - "+pe(I[0],"P")}catch{return}});function J(){p.value===!0&&(p.value=!1,h.value=!1,t("blur"))}const Q=I=>{I?R.value=I:(t("update:comparison-date",void 0),N.value=void 0)};Le(A,I=>{p.value&&(d.value.wrapperRef.contains(I.target)&&(I.stopPropagation(),I.preventDefault()),J(),t("blur"))});const le=()=>{z.value=a.value,p.value=!p.value},ue=()=>{R.value=!1},de=async()=>{t("update:dateRange",z.value),t("change",z.value),t("blur"),p.value=!1},oe=I=>{k.value=I};return _e(m,I=>{t("update:perspectiveDate",I)}),_e(b,I=>{t("update:comparePerspectiveDate",I)}),{displayCompare:R,computedCompare:N,attrs:o,props:e,refSelectContainer:l,pickedCompare:P,open:p,displayDate:se,saveTime:de,tmpDateRange:z,dateConfig:C,closeDropdown:J,showCompare:Q,comparePerspectiveOf:b,compareWith:ne,storeHistory:k,handleClick:le,goBack:ue,mainCalendar:g,perspectiveOf:m,enabledHistory:h,dateHistory:K,formatDate:H,enableStoringHistory:oe,inputWrapperRef:d,popperRef:A}},methods:{}}),al=["id"],sl={class:"min-w-0 truncate text-xs tabular-nums sm:text-base"},ll=c("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"}," Date range ",-1),il={key:0,class:"flex flex-col items-start gap-y-3"},ul=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),dl={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},cl={key:1},pl={key:0,class:"flex flex-col items-start"},ml=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),fl={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},gl=ge("Apply time range");function vl(e,t,o,a,s,r){var R,C;const n=V("PhCalendar"),l=V("PhCaretDown"),p=V("InputWrapper"),d=V("DatePicker"),g=V("Checkbox"),m=V("Calendar"),b=V("Button"),h=V("Popper");return u(),f(Y,null,[j(p,{title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:fe(e.handleClick,["stop"])},{default:X(k=>[c("div",{class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[j(n,{size:"20"})],2),c("div",ve({id:k.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",sl,F(e.displayDate),1)],16,al),c("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[j(l,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((R=e.inputWrapperRef)==null?void 0:R.wrapperRef)?(u(),ee(h,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(C=e.inputWrapperRef)==null?void 0:C.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=k=>e.open=k),options:{placement:"bottom-start"}},{default:X(()=>[ll,c("div",null,[j(m,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=k=>e.tmpDateRange=k),"onClick:relativeDate":t[3]||(t[3]=k=>e.enableStoringHistory(!1))},{default:X(()=>[e.enablePerspective?(u(),f("div",il,[c("div",null,[ul,j(d,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=k=>e.perspectiveOf=k)},null,8,["modelValue"])]),e.enableComparison?(u(),ee(g,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=k=>e.compareWith=k),title:"Compare with"},null,8,["modelValue"])):$("",!0)])):$("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(u(),f("h3",dl," Comparison date range ")):$("",!0),e.enableComparison?(u(),f("div",cl,[j(m,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=k=>e.computedCompare=k),"onClick:relativeDate":t[6]||(t[6]=k=>e.enableStoringHistory(!1))},{default:X(()=>[e.enablePerspective?(u(),f("div",pl,[ml,j(d,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=k=>e.comparePerspectiveOf=k)},null,8,["modelValue"])])):$("",!0)]),_:1},8,["modelValue"])])):$("",!0),c("div",fl,[j(b,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:X(()=>[gl]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):$("",!0)],64)}var pt=M(Cn,[["render",vl]]);Cn.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var yl={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:pt,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const bl=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:pt},setup(){return{args:e}}}),Tn=[new Date,new Date],Ft=i(Tn),Rt=i(Tn),xn=bl.bind({});xn.args={dateRange:Ft,"onUpdate:dateRange":e=>{Ft.value=e},compareDateRange:Rt,"onUpdate:compareDateRange":e=>{Rt.value=e}};const hl=["Default"];var kl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yl,Default:xn,__namedExportsOrder:hl});let L,qe,Ge,Ke,ke;const Je=(e,t,o=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,o):t.el.dispatchEvent(new CustomEvent(e,o))},wl=(e,t)=>{if(t.parentNode===e.parentNode){for(let o=e.previousSibling;o;o=o.previousSibling)if(o===t)return!0}return!1},jt=function(e,t){var o,a;if(Je("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;L=this,qe=ke.handleClass&&L.querySelector(`.${ke.handleClass}`),Ge=Array.from((o=L==null?void 0:L.parentElement)==null?void 0:o.children).indexOf(L),(a=L==null?void 0:L.parentElement)==null||a.classList.add("drag")},Mt=function(e){var o;if(!L)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(a=>{var s;if(Array.from((s=L==null?void 0:L.parentElement)==null?void 0:s.children).indexOf(a)>=0)return a})),Array.from((o=L==null?void 0:L.parentElement)==null?void 0:o.children).indexOf(t)!==-1&&(L.classList.add(ke.placeholderClass),wl(L,t)?t.parentNode.insertBefore(L,t):t.parentNode.insertBefore(L,t.nextSibling))},Lt=(e,t)=>{var s,r;if(!L)return;Je("end",t,e),qe&&L.setAttribute("draggable","false"),L.classList.remove(ke.placeholderClass),(s=L==null?void 0:L.parentElement)==null||s.classList.remove("drag");const o=Ge,a=Array.from((r=L==null?void 0:L.parentElement)==null?void 0:r.children).indexOf(L);Ke.splice(a,0,Ke.splice(o,1)[0]),Je("change",t,{from:o,to:a}),setTimeout(()=>{L=null,Ge=null,qe=null},0)},Wt=(e,t)=>{const o=ke.handleClass&&e.querySelector(`.${ke.handleClass}`);o?(o.onmousedown=a=>{e.setAttribute("draggable","true")},o.ontouchstart=a=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},o.onmouseup=a=>{e.setAttribute("draggable","false")},o.ontouchend=a=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=a=>{a.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=a=>jt.bind(e,a,t)(),e.ondragenter=Mt,e.ondragend=a=>Lt.bind(e,a,t)(),e.ontouchstart=a=>jt.bind(e,a,t)(),e.ontouchmove=Mt,e.ontouchend=a=>Lt.bind(e,a,t)()};var Dl={mounted:(e,t,o)=>{let a=t.value.depth||0;for(;a;)e=e.firstElementChild,a--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}Ke=t.value&&t.value.value,ke={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Wt(s,o)),e.addEventListener("DOMNodeInserted",function(s){L||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Wt(s.target,o)})}};const Pn=B({name:"RobustDraggable",directives:{draggable:Dl},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:o}=G(e),a=S({get:()=>o.value,set:s=>{t("update:modelValue",s)}});return me(()=>{console.log("alo")}),{list:a}}});function _l(e,t,o,a,s,r){const n=er("draggable");return ie((u(),f("div",null,[(u(!0),f(Y,null,re(e.list,l=>(u(),f("div",{key:l},[E(e.$slots,"element",{item:l})]))),128))])),[[n,{value:e.list}]])}var Bn=M(Pn,[["render",_l]]);Pn.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};var $l={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:Bn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const Sl=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:Bn},setup(){let t=i([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),Cl=Sl.bind({}),Tl=["Default"];var xl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$l,Default:Cl,__namedExportsOrder:Tl});const Vn=B({components:{"hs-button":be,PhCheck:qt,PhArrowLeft:Ut,PhDotsThree:tr,PhArrowRight:Yt},props:{validateOnBack:{type:Boolean,default:!1},numberOfDisplayedSteps:{type:Number,default:3}},setup(e,{emit:t}){const{validateOnBack:o,numberOfDisplayedSteps:a}=G(e),s=i(),r=i([]),n=i(Number.POSITIVE_INFINITY),l=i(!1),p=i(0),d=i(),g=a.value,m=y=>{console.log(r.value);const v=Array.prototype.slice.call(s.value.children).indexOf(y.vnode.el);y.ctx.setTabId(`${y.ctx.title.replace(/ /g,"")}${v}`),r.value.splice(v,0,y),v<n.value&&(p.value=v,oe(n.value+1,v))},b=()=>{p.value=0,le(0)},h=y=>y.ctx.active,R=y=>y.ctx.validated,C=(y,x)=>{if(y===null&&x===null){const v=n.value+g<=r.value.length?n.value+g:r.value.length;return r.value.slice(n.value,v)}if(y>x&&y%g==0)return r.value.slice(y-g,y);if(x%g==0){const v=x+g<=r.value.length?x+g:r.value.length;return r.value.slice(x,v)}return d.value},k=y=>y<d.value.length-1;te(()=>{console.log("called mount"),d.value=C(null,null)});const A=()=>{p.value=r.value.length-1};nr("addTab",m);const P=y=>(y==null?void 0:y.then)&&typeof y.then=="function",H=S(()=>n.value===K.value-1),K=S(()=>r.value.length),z=y=>{r.value[n.value].ctx.setValidationError(y),y&&r.value[n.value].ctx.devalidate(),t("on-error",y)},q=()=>{let y=n.value/g;return y=Math.trunc(y)*g,y},N=()=>{let y=g-n.value%g;return r.value.length-(n.value+y)},ne=(y,x)=>{P(y)?(l.value=!0,y.then(v=>{l.value=!1,se(v===!0,x)}).catch(v=>{l.value=!1,z(v),console.log(v)})):se(y===!0,x)},se=(y,x)=>{t("on-validate",y,n.value),y?(r.value[n.value].ctx.validate(),x()):(console.log("errrrrrorrrr"),r.value[n.value].ctx.validationError="error",r.value[n.value].ctx.devalidate())},J=(y,x)=>{if(l.value)return;const v=r.value[y];if(v&&v.ctx.beforeChange!==void 0){const U=v.ctx.beforeChange();ne(U,x)}else x()},Q=y=>{if(l.value)return;const x=r.value[y];x&&x.afterChange!==void 0&&x.afterChange()},le=y=>{const x=y>n.value;if(y<=p.value){const v=()=>{x&&y-n.value>1?(oe(n.value,n.value+1),J(n.value,v)):(oe(n.value,y),Q(n.value))};x?J(n.value,v):(z(null),v())}return y<=p.value},ue=()=>{console.log(r.value);const y=()=>{n.value<K.value-1?(oe(n.value,n.value+1),Q(n.value)):t("on-complete")};J(n.value,y)},de=()=>{const y=()=>{n.value>0&&(z(null),oe(n.value,n.value-1))};o.value?J(n.value,y):y()},oe=(y,x,v=!0)=>{const U=r.value[y],Z=r.value[x];return U&&U.ctx.deactivate(),Z&&Z.ctx.activate(),v&&n.value!==x&&I(y,x),n.value=x,W(n.value),d.value=C(y,x),!0},I=(y,x)=>{t("on-change",y,x),t("update:startIndex",x)},W=y=>{he(y),y>p.value&&(p.value=y),n.value=y},w=()=>{r.value.forEach(y=>{y.ctx.deactivate()})},he=y=>{w();const x=r.value[y];x&&x.ctx.activate()};return{tabs:r,defaultSlot:s,loading:l,activeTabIndex:n,activateTabAndCheckStep:W,addTab:m,reset:b,activateAll:A,maxStep:p,isLastStep:H,tabCount:K,activateTab:he,changeTab:oe,setValidationError:z,navigateToTab:le,prevTab:de,nextTab:ue,getTabs:C,displayedTabs:d,stepsFinished:q,stepsLeft:N,isOnLastDisplayedStep:k,isActive:h,isValidated:R}}}),Pl={class:"flex flex-col gap-y-3 w-full"},Bl={class:"flex items-center gap-x-2"},Vl={key:0,class:"flex items-center gap-x-2"},Il=st('<div class="flex items-center sm:gap-x-4 gap-x-2 font-semibold text-gray-400"><div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div><div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div><div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div><div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div></div>',1),Fl=["onClick"],Rl={key:0},jl={key:1},Ml={key:1,class:"flex items-center gap-x-2"},Ll=st('<div class="flex items-center sm:gap-x-4 gap-x-2 font-semibold text-gray-400"><div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div><div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div><div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div><div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600"></div></div>',1),Wl={class:"bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow p-5"},Ol={ref:"defaultSlot",class:"py-3"},El={class:"flex justify-between"},zl=ge("BACK"),Nl=ge("FINISH"),Al=ge("NEXT");function Hl(e,t,o,a,s,r){const n=V("PhArrowLeft"),l=V("PhCheck"),p=V("PhArrowRight"),d=V("hs-button");return u(),f("div",Pl,[c("div",Bl,[e.stepsFinished()>0?(u(),f("div",Vl,[j(n,{class:"text-gray-400"}),c("div",{class:"flex items-center justify-center text-center rounded-full cursor-pointer sm:h-8 sm:w-8 h-8 w-8 text-white bg-hs-green-30",onClick:t[0]||(t[0]=g=>e.navigateToTab(0))},[c("div",null,"+"+F(e.stepsFinished()),1)]),Il])):$("",!0),(u(!0),f(Y,null,re(e.displayedTabs,(g,m)=>E(e.$slots,"step",{key:m,tab:g,index:m},()=>[c("div",{class:_(["flex items-center",[e.isOnLastDisplayedStep(m)?"gap-x-2":"gap-x-0 sm:gap-x-2"]])},[c("div",{class:_(["flex items-center justify-center rounded-full cursor-pointer sm:h-8 sm:w-8 h-8 w-8 text-gray-400",[e.isActive(g)?"bg-primary-400 text-white":"",e.isValidated(g)&&!e.isActive(g)?"bg-hs-green-30 text-white":"",!e.isValidated(g)&&!e.isActive(g)?"bg-gray-300 dark:bg-gray-700 text-gray-500":""]]),onClick:b=>e.navigateToTab(m)},[e.isValidated(g)?(u(),f("div",jl,[j(l)])):(u(),f("div",Rl,F(m+1),1))],10,Fl),c("div",{class:_(["sm:flex hidden w-fit",[e.isActive(g)?"dark:text-gray-300 text-gray-500":"text-gray-400"]])},F(g.ctx.title),3),e.isOnLastDisplayedStep(m)?(u(),f("div",{key:0,class:_(["h-0.5 sm:w-16 w-4",[e.isValidated(g)?"bg-hs-green-30":"bg-gray-300 dark:bg-gray-600"]])},null,2)):$("",!0)],2)])),128)),e.stepsLeft()>0?(u(),f("div",Ml,[Ll,c("div",{class:"flex items-center justify-center rounded-full cursor-pointer sm:h-8 sm:w-8 h-8 w-8 bg-gray-300 text-gray-500 dark:bg-gray-700",onClick:t[1]||(t[1]=g=>e.navigateToTab(0))},[c("div",null,"+"+F(e.stepsLeft()),1)]),j(p,{class:"text-gray-400"})])):$("",!0)]),c("div",Wl,[c("div",Ol,[E(e.$slots,"default")],512),c("div",El,[j(d,{onClick:e.prevTab,disabled:e.loading,variant:"muted"},{default:X(()=>[zl]),_:1},8,["onClick","disabled"]),e.isLastStep?(u(),ee(d,{key:0,onClick:e.nextTab,disabled:e.loading},{default:X(()=>[Nl]),_:1},8,["onClick","disabled"])):(u(),ee(d,{key:1,onClick:e.nextTab,disabled:e.loading},{default:X(()=>[Al]),_:1},8,["onClick","disabled"]))])])])}var In=M(Vn,[["render",Hl]]);Vn.__docgenInfo={exportName:"default",displayName:"FormWizard",description:"",tags:{},props:[{name:"validateOnBack",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"numberOfDisplayedSteps",type:{name:"number"},defaultValue:{func:!1,value:"3"}}],slots:[{name:"step",scoped:!0,bindings:[{name:"key",title:"binding"},{name:"tab",title:"binding"},{name:"index",title:"binding"}]},{name:"default"}]};const Fn=B({props:{title:{type:String,required:!0},beforeChange:{type:Function}},setup(){const e=or(),t=rr("addTab"),o=i(!1),a=i(""),s=i(""),r=i(!1),n=()=>{o.value=!0},l=()=>{o.value=!1,m("")},p=()=>{r.value=!0},d=()=>{console.log("called devalidate"),r.value=!1},g=b=>{a.value=b},m=b=>{s.value=b};return te(()=>{t(e)}),{addTab:t,tabId:a,activate:n,deactivate:l,setTabId:g,active:o,validationError:s,validated:r,validate:p,devalidate:d,setValidationError:m}}}),Ul=["id","aria-hidden","aria-labelledby"],Yl={key:0,class:"text-red-600 sm:text-base text-sm flex justify-center rounded-md overflow-hidden p-1 bg-red-400 border border-red-600"};function ql(e,t,o,a,s,r){return ie((u(),f("div",{role:"tabpanel",id:e.tabId,"aria-hidden":!e.active,"aria-labelledby":`step-${e.tabId}`},[e.validationError.length>1?(u(),f("div",Yl,F(e.validationError),1)):$("",!0),E(e.$slots,"default",{active:e.active})],8,Ul)),[[Me,e.active]])}var Gl=M(Fn,[["render",ql]]);Fn.__docgenInfo={exportName:"default",displayName:"FormWizardTab",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"beforeChange",type:{name:"func"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"active",title:"binding"}]}]};var Kl={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
import FormWizard from './FormWizard.vue'
import FormWizardTab from './FormWizardTab.vue'
import Checkbox from '../Checkbox/Checkbox.vue'
import Input from '../Input/Input.vue'
import DaterangePicker from '../DatePicker/DaterangePicker.vue'
import { ref, defineComponent, onMounted } from 'vue'

export default {
  title: 'Ui/FormWizard',
  component: FormWizard,
  argTypes: {
    validateOnBack: { control: { type: 'boolean' } },
  },
}

let DataComponent = defineComponent({
  props: {
    data: {
      type: Object
    }
  },
  template: \`
    <div class="flex flex-col py-3 gap-y-3">
      <div>Name: {{ data.name }}</div>
      <div>Surname: {{ data.surname }}</div>
      <div>Address: {{ data.address }}</div>
      <div v-if="data.date_range">Departure date: {{ data.date_range[0] }}</div>
      <div v-if="data.date_range">Return date: {{ data.date_range[1] }}</div>
    </div>
  \`
})

let FlightForm = defineComponent({
  template: \`
    <div class="flex flex-col py-3">
      <DaterangePicker @update:dateRange="updateDateRange" :date-range="dateRange"></DaterangePicker>
    </div>
  \`,
  components: {
    DaterangePicker,
    Checkbox
  },
  setup() {
    const date = []
    const dateRange = ref(date)
    const compareDateRange = ref(date)

    const updateDateRange = (updatedDate) => {
      dateRange.value = updatedDate
    }

    const validate = () => {
      if(dateRange.value.length < 2) return { error: "Please select a date range." }
      return {
        data: {
          date_range: dateRange.value
        }
      }
    }

    return {
      date, 
      // surname,
      // address,
      validate,
      dateRange,
      compareDateRange,
      updateDateRange
    }
  }
})

let ContactFormComponent = defineComponent({
  template: \`
    <div class="flex flex-col gap-y-3">
      <div class="flex sm:flex-row flex-col gap-x-3">
        <div class="flex-1">
          <Input v-model="name" title="Name"/>
        </div>
        <div class="flex-1">
          <Input v-model="surname" title="Surname"/>
        </div>
      </div>
      <Input v-model="address" title="Address"></Input>
      <Checkbox v-model="tos" title="Terms of Service"></Checkbox>
    </div>
  \`,
  components: {
    Input,
    Checkbox
  },
  setup() {
    let name = ref("")
    let nameError = ref("")

    let surname = ref("")
    let surnameError = ref("")

    let address = ref("")
    let addressError = ref("")

    let tos = ref(false)

    const validate = () => {
      if(name.value.length < 2) return { error: "A name must contain at least 2 characters." }
      if(surname.value.length < 2) return { error: "A surname must contain at least 2 characters." }
      if(address.value.length < 2) return { error: "An address must contain at least 2 characters." }
      if(!tos.value) return { error: "You have to accept ToS." }
      return { 
        data: { 
          name: name.value,
          surname: surname.value,
          address: address.value
        }
      }
    }

    return {
      name, 
      surname,
      address,
      tos,
      nameError,
      surnameError,
      addressError,
      validate
    }
  }
})

const DefaultTemplate = (args) => ({
  template: \`
    <FormWizard :number-of-displayed-steps="5" @on-complete="completed" @on-error="error" @on-validate="test" v-bind="args">
      <FormWizardTab title="Test 1">
        <h1>test 1</h1>
      </FormWizardTab>
      <FormWizardTab title="Test 2">
        <h1>test 2</h1>
      </FormWizardTab>
      <FormWizardTab title="Test 3">
        <h1>test 3</h1>
      </FormWizardTab>
      <FormWizardTab :before-change="validateContactForm" title="Contact form">
        <ContactFormComponent ref="contactFormComponent"/>
      </FormWizardTab>
      <FormWizardTab title="Flight date" :before-change="validateFlightDate">
        <FlightForm ref="flightForm"/>
      </FormWizardTab>
      <FormWizardTab title="Your data">
        <DataComponent :data="form"/>
      </FormWizardTab>
      <FormWizardTab title="Your data 2">
        <DataComponent :data="form"/>
      </FormWizardTab>
    </FormWizard>
  \`,
  components: { FormWizard, FormWizardTab, ContactFormComponent, FlightForm, DataComponent },
  setup() {

    let form = ref({})

    let contactFormComponent = ref()
    let flightForm = ref()
    
    const validateFlightDate = async () => {
        const { error, data } = flightForm.value.validate()
        if(error) {
          throw error;
        }
        
        Object.assign(form.value, data)
        console.log(form.value)
        return true
    }

    const validateContactForm = async () => {
      const { error, data } = contactFormComponent.value.validate()
      if(error) {
        throw error;
      }
      
      Object.assign(form.value, data)
      console.log(form.value)
      return true
  }
    
    return { args, validateContactForm, validateFlightDate, flightForm, contactFormComponent, form }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
    validateOnBack: false,
}
`,locationsMap:{default:{startLoc:{col:24,line:132},endLoc:{col:2,line:190},startBody:{col:24,line:132},endBody:{col:2,line:190}}}}},title:"Ui/FormWizard",component:In,argTypes:{validateOnBack:{control:{type:"boolean"}}}};let Jl=B({props:{data:{type:Object}},template:`
    <div class="flex flex-col py-3 gap-y-3">
      <div>Name: {{ data.name }}</div>
      <div>Surname: {{ data.surname }}</div>
      <div>Address: {{ data.address }}</div>
      <div v-if="data.date_range">Departure date: {{ data.date_range[0] }}</div>
      <div v-if="data.date_range">Return date: {{ data.date_range[1] }}</div>
    </div>
  `}),Xl=B({template:`
    <div class="flex flex-col py-3">
      <DaterangePicker @update:dateRange="updateDateRange" :date-range="dateRange"></DaterangePicker>
    </div>
  `,components:{DaterangePicker:pt,Checkbox:Ce},setup(){const e=[],t=i(e),o=i(e);return{date:e,validate:()=>t.value.length<2?{error:"Please select a date range."}:{data:{date_range:t.value}},dateRange:t,compareDateRange:o,updateDateRange:r=>{t.value=r}}}}),Ql=B({template:`
    <div class="flex flex-col gap-y-3">
      <div class="flex sm:flex-row flex-col gap-x-3">
        <div class="flex-1">
          <Input v-model="name" title="Name"/>
        </div>
        <div class="flex-1">
          <Input v-model="surname" title="Surname"/>
        </div>
      </div>
      <Input v-model="address" title="Address"></Input>
      <Checkbox v-model="tos" title="Terms of Service"></Checkbox>
    </div>
  `,components:{Input:Oe,Checkbox:Ce},setup(){let e=i(""),t=i(""),o=i(""),a=i(""),s=i(""),r=i(""),n=i(!1);return{name:e,surname:o,address:s,tos:n,nameError:t,surnameError:a,addressError:r,validate:()=>e.value.length<2?{error:"A name must contain at least 2 characters."}:o.value.length<2?{error:"A surname must contain at least 2 characters."}:s.value.length<2?{error:"An address must contain at least 2 characters."}:n.value?{data:{name:e.value,surname:o.value,address:s.value}}:{error:"You have to accept ToS."}}}});const Zl=e=>({template:`
    <FormWizard :number-of-displayed-steps="5" @on-complete="completed" @on-error="error" @on-validate="test" v-bind="args">
      <FormWizardTab title="Test 1">
        <h1>test 1</h1>
      </FormWizardTab>
      <FormWizardTab title="Test 2">
        <h1>test 2</h1>
      </FormWizardTab>
      <FormWizardTab title="Test 3">
        <h1>test 3</h1>
      </FormWizardTab>
      <FormWizardTab :before-change="validateContactForm" title="Contact form">
        <ContactFormComponent ref="contactFormComponent"/>
      </FormWizardTab>
      <FormWizardTab title="Flight date" :before-change="validateFlightDate">
        <FlightForm ref="flightForm"/>
      </FormWizardTab>
      <FormWizardTab title="Your data">
        <DataComponent :data="form"/>
      </FormWizardTab>
      <FormWizardTab title="Your data 2">
        <DataComponent :data="form"/>
      </FormWizardTab>
    </FormWizard>
  `,components:{FormWizard:In,FormWizardTab:Gl,ContactFormComponent:Ql,FlightForm:Xl,DataComponent:Jl},setup(){let t=i({}),o=i(),a=i();return{args:e,validateContactForm:async()=>{const{error:n,data:l}=o.value.validate();if(n)throw n;return Object.assign(t.value,l),console.log(t.value),!0},validateFlightDate:async()=>{const{error:n,data:l}=a.value.validate();if(n)throw n;return Object.assign(t.value,l),console.log(t.value),!0},flightForm:a,contactFormComponent:o,form:t}}}),Rn=Zl.bind({});Rn.args={validateOnBack:!1};const ei=["Default"];var ti=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kl,Default:Rn,__namedExportsOrder:ei});const jn=B({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:o}=G(e),a=S(()=>{var s,r,n,l,p;return{"gs-id":(s=o.value)==null?void 0:s.id,"gs-x":(r=o.value)==null?void 0:r.gridstack.x,"gs-y":(n=o.value)==null?void 0:n.gridstack.y,"gs-w":(l=o.value)==null?void 0:l.gridstack.w,"gs-h":(p=o.value)==null?void 0:p.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:a}}}),ni={class:"grid-stack-item-content bg-gray-300"};function oi(e,t,o,a,s,r){return u(),f("div",ve({class:"grid-stack-item"},e.widgetAttributes),[c("div",ni,[ge(F(e.widget.id)+" "+F(e.widget.gridstack)+" ",1),(u(),ee(at(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var ri=M(jn,[["render",oi]]);jn.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Mn=B({name:"RobustGrid",components:{GridItem:ri},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:o}=G(e),a,s=i();return te(()=>{console.log("mounting"),a=ar.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),a.on("change",(r,n)=>{!o.value||([...o.value],Array.isArray(n)&&o.value.forEach(l=>{let p=n.find(d=>d.id===l.id);p&&(l.gridstack=kt(He({},l.gridstack),{x:p.x,y:p.y,w:p.w,h:p.h}))}),t("update:widgets",o))})}),{gridContainer:s}}}),ai={ref:"gridContainer",class:"grid-stack bg-gray-200"};function si(e,t,o,a,s,r){const n=V("GridItem");return u(),f("div",null,[ge(F(e.locked)+" ",1),c("section",ai,[(u(!0),f(Y,null,re(e.widgets,l=>(u(),ee(n,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var Ln=M(Mn,[["render",si],["__scopeId","data-v-65dcbf20"]]);Mn.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var li={title:"Ui/Grid",component:Ln,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Ot=B({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const ii=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:Ln},setup(){let t=i([{id:"test",component:$t(Ot),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:$t(Ot),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return _e(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),ui=ii.bind(),di=["Default"];var ci=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:li,Default:ui,__namedExportsOrder:di}),ze=B({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const o=i(!0),a=i(!1),s=new Image;return s.onload=()=>{t("loaded",!0),o.value=!1},s.onerror=r=>{t("error",r),a.value=!0,o.value=!1},te(()=>{s.src=e.src}),{error:a,loading:o}},render(){return this.loading?De("div",{class:"flex items-center justify-center"},De(We,{size:24,stroke:2})):this.error?this.fallbackSrc?De("img",{src:this.fallbackSrc}):De(it,{size:20}):De("img",{src:this.src})}}),pi={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:ze,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const mi=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:ze},setup(){return{args:e}}}),Wn=mi.bind();Wn.args={title:"Img title"};const fi=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:ze},setup(){return{args:e}}}),On=fi.bind();On.args={title:"Img title"};const gi=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:ze},setup(){return{args:e}}}),En=gi.bind();En.args={title:"Img title"};const vi=["Default","Broken","Fallback"];var yi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pi,Default:Wn,Broken:On,Fallback:En,__namedExportsOrder:vi}),bi={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:Oe,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const mt=e=>({template:'<Input v-bind="args"/>',components:{Input:Oe},setup(){return{args:e}}}),zn=mt.bind();zn.args={modelValue:"Input text",title:"Input title"};const Nn=mt.bind();Nn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const An=mt.bind();An.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const hi=["Default","Hint","ErrorHint"];var ki=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bi,Default:zn,Hint:Nn,ErrorHint:An,__namedExportsOrder:hi}),wi={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:Se,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const ft=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:Se},setup(){return{args:e}}}),Hn=ft.bind();Hn.args={title:"Input title",outline:!1};const Un=ft.bind();Un.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Yn=ft.bind();Yn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Di=["Default","Hint","ErrorHint"];var _i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wi,Default:Hn,Hint:Un,ErrorHint:Yn,__namedExportsOrder:Di});const qn=B({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:o}=G(e),a=S(()=>`height:${t.value}px`),s=S(()=>`width:clamp(${t.value}px, ${o.value}%, 100%);`);return{heightComputed:a,widthComputed:s}}});function $i(e,t,o,a,s,r){return u(),f("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:ae([e.heightComputed])},[c("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:ae([e.widthComputed])},null,4)],4)}var Gn=M(qn,[["render",$i]]);qn.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Si={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:Gn,argTypes:{progress:{control:{type:"number"}}}};const Ci=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:Gn},setup(){return{args:e}}}),Ti=Ci.bind(),xi=["Default"];var Pi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Si,Default:Ti,__namedExportsOrder:xi});let $e,Xe,Qe,Ze,et,tt,nt,ot,rt,Be;const Kn=e=>{const t=e||navigator.userAgent,o=/(iPad).*OS\s([\d_]+)/.test(t),a=!o&&/(iPhone\sOS)\s([\d_]+)/.test(t);return/(Android);?[\s/]+([\d.]+)?/.test(t)||a||o},Bi=()=>{const e=document.body,t=window.innerWidth-e.clientWidth;$e=e.style.overflow,Xe=e.style.boxSizing,Qe=e.style.paddingRight,e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight=`${t+e.style.paddingRight}px`},Vi=()=>{const e=document.body;e.style.overflow=$e,e.style.boxSizing=Xe,e.style.paddingRight=Qe,$e="",Xe="",Qe=""},Ii=()=>{const e=document.documentElement,t=document.body;Be=e.scrollTop||t.scrollTop,Ze=e.style.height,et=e.style.overflow,tt=t.style.top,nt=t.style.width,ot=t.style.height,rt=t.style.position,$e=t.style.overflow,e.style.height="100%",e.style.overflow="hidden",t.style.top=`-${Be}px`,t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden"},Fi=()=>{const e="scrollBehavior"in document.documentElement.style,t=document.documentElement,o=document.body;t.style.height=Ze,t.style.overflow=et,o.style.top=tt,o.style.width=nt,o.style.height=ot,o.style.position=rt,o.style.overflow=$e,e?window.scrollTo({top:Be,behavior:"auto"}):window.scrollTo(0,Be),$e="",Ze="",et="",tt="",nt="",ot="",rt="",Be=""},Ri=()=>{Kn()&&Ii(),Bi()},ji=()=>{Kn()&&Fi(),Vi()};const Jn=B({name:"RobustModal",inheritAttrs:!1,props:{modalClass:{type:String},opened:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:o}=G(e);_e(o,n=>{n?Ri():ji()});function a(n){n.key==="Escape"&&o.value===!0&&(n.stopPropagation(),n.preventDefault(),r())}te(()=>{window.addEventListener("keydown",a)}),lt(()=>{window.removeEventListener("keydown",a)});async function s(){o.value=!0,t("update:opened",!0),t("open")}async function r(){o.value=!1,t("update:opened",!1),t("close")}return{open:s,close:r,opened:o}}}),Mi={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},Li={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},Wi={class:"leading-4"};function Oi(e,t,o,a,s,r){const n=V("ph-x");return u(),ee(lr,{to:"#modal-area"},[j(sr,ve(e.$attrs,{name:"slide"}),{default:X(()=>[e.opened?(u(),f("div",Mi,[c("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75",onClick:t[0]||(t[0]=fe((...l)=>e.close&&e.close(...l),["self"]))}),c("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Pe((...l)=>e.close&&e.close(...l),["esc"]))},[c("div",{class:_(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(u(),f("div",Li,[c("div",Wi,[E(e.$slots,"title",{},void 0,!0)]),c("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[j(n,{size:"20",class:"block"})])])):$("",!0),E(e.$slots,"default",{},void 0,!0)],2)],32)],512)):$("",!0)]),_:3},16)])}var Xn=M(Jn,[["render",Oi],["__scopeId","data-v-65cd2734"]]);Jn.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};var Ei={parameters:{storySource:{source:`import { ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}}}}},title:"Ui/Modal",component:Xn,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const zi=e=>({template:' <Button @click="args.opened.value = true">modal open {{args.opened}}</Button><Modal v-bind="args">test</Modal>',components:{Modal:Xn,Button:be},setup(){return{args:e}}}),Qn=zi.bind();let Et=i(!0);Qn.args={title:"Modal title",opened:Et,"onUpdate:opened":e=>{console.log("opeone"),Et.value=e}};const Ni=["Default"];var Ai=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ei,Default:Qn,__namedExportsOrder:Ni}),Hi={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const Zn=B({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:S(()=>Hi[e.variant])}}});function Ui(e,t,o,a,s,r){return u(),f("div",{class:_([e.computedClass,"mb-4 border-l-4 p-4"])},[E(e.$slots,"default")],2)}var eo=M(Zn,[["render",Ui]]);Zn.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};var Yi={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:eo,argTypes:{title:{control:{type:"text",default:"Title"}}}};const qi=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:eo},setup(){return{args:e}}}),Gi=qi.bind(),Ki=["Default"];var Ji=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yi,Default:Gi,__namedExportsOrder:Ki}),Xi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:Te,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Qi=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:Te},setup(){const t=i(!1);return{args:e,value:t}}}),to=Qi.bind({});to.args={title:"Popper title",description:"Popper description text to be placed here"};const Zi=["Default"];var eu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xi,Default:to,__namedExportsOrder:Zi});let tu=0;const no=B({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:o}){const a=(++tu).toString(),s=S({get(){return e.modelValue===e.value},set(){let r=e.modelValue;r=e.value,t("update:modelValue",r),t("change",r)}});return{cuid:a,isChecked:s,attrs:o}}}),nu={class:"inline-block"},ou=["id"],ru=["for"],au={key:0,class:"w-full select-none leading-4"};function su(e,t,o,a,s,r){return u(),f("div",nu,[ie(c("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=n=>e.isChecked=n),type:"radio",class:"hidden"},null,8,ou),[[ir,e.isChecked]]),c("label",{for:`radio_${e.cuid}`,class:_([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[c("div",{class:_(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[c("div",{class:_([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(u(),f("div",au,F(e.title),1)):$("",!0),c("div",null,[e.$slots.title?E(e.$slots,"title",{key:0}):$("",!0)])],10,ru)])}var oo=M(no,[["render",su]]);no.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};var lu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:oo,argTypes:{title:{control:{type:"text"}}}};const iu=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:oo},setup(){const t=i("test");return{args:e,value:t}}}),ro=iu.bind({});ro.args={title:"Radio title"};const uu=["Default"];var du=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lu,Default:ro,__namedExportsOrder:uu});const ao=B({name:"RobustSelect",components:{Popper:Te,InputWrapper:Se,PhCheck:qt,PhCaretDown:ut},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:o}){const a=i(),s=i(),{options:r}=G(e),n=i(!1),l=i(),p=i(),d=i("");let g=i([]);async function m(P){e.searchFunction!==void 0&&(g.value=await e.searchFunction(P)),P===""?g.value=r.value:g.value=r.value.filter(H=>H.title.toLowerCase().substring(0,P.length)===P.toLowerCase())}ur(d,async P=>{await m(P)},{debounce:150}),te(async()=>{await m("")});const b=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:P=>{P.state.styles.popper.width=`${Math.max(P.state.rects.reference.width,200)}px`},effect:P=>{P.state.elements.popper.style.width=`${P.state.elements.reference.getBoundingClientRect().width}px`}}],h=S(()=>e.options.find(P=>P.value===e.modelValue));function R(P){me(()=>{k()}),t("update:modelValue",P.value),t("change",P.value)}function C(){n.value=!0,me(()=>{s.value.focus()}),t("focus")}Le(l,P=>{n.value&&(p.value.wrapperRef.contains(P.target)&&(P.stopPropagation(),P.preventDefault()),A(),k(),t("blur"))});function k(){n.value=!1}function A(){d.value=""}return{refSelectInput:s,refSelectContainer:a,closeDropdown:k,open:n,props:e,openDropdown:C,inputWrapper:p,popperModifiers:b,activeItem:h,selectItem:R,computedOptions:g,resetFields:A,attrs:o,search:d,popperRef:l}}}),cu=["id"],pu={class:"min-w-0 select-none truncate"},mu={key:0,class:"max-h-72 overflow-auto"},fu=["onClick"],gu={key:1,class:"py-2 text-center text-gray-400"};function vu(e,t,o,a,s,r){var g,m;const n=V("PhCaretDown"),l=V("InputWrapper"),p=V("PhCheck"),d=V("Popper");return u(),f(Y,null,[j(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:X(b=>[e.$slots.prefix?(u(),f("div",{key:0,class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[E(e.$slots,"prefix",{tag:"div"})],2)):$("",!0),ie(c("div",ve({id:b.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[c("div",pu,F(e.activeItem?e.activeItem.title:"Select"),1)],16,cu),[[Me,!e.open]]),ie(c("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=h=>e.search=h),size:"1",class:_(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Me,e.open],[At,e.search]]),c("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[j(n,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((g=e.inputWrapper)==null?void 0:g.wrapperRef)?(u(),ee(d,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=b=>e.open=b),ref:"popperRef",class:"z-[100] origin-top","append-to":(m=e.inputWrapper)==null?void 0:m.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:X(()=>[e.computedOptions.length>0?(u(),f("ul",mu,[(u(!0),f(Y,null,re(e.computedOptions,b=>(u(),f("li",{key:b.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:h=>e.selectItem(b)},[c("span",null,F(b.title),1),e.modelValue===b.value?(u(),ee(p,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):$("",!0)],8,fu))),128))])):(u(),f("div",gu,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):$("",!0)],64)}var so=M(ao,[["render",vu]]);ao.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const yu=B({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});yu.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var bu={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:so,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const gt=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:so},setup(){let t=i(void 0),o=i([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:o,args:e}}}),lo=gt.bind();lo.args={title:"Input title"};const io=gt.bind();io.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const uo=gt.bind();uo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const hu=["Default","Hint","ErrorHint"];var ku=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bu,Default:lo,Hint:io,ErrorHint:uo,__namedExportsOrder:hu});const co=B({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const o=i(e.modelValue),a=i(!1),s=i(!1),r=i(e.modelValue),n=i(),l=i(),p=i(),d=S(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":a.value},{"has-icon":g},{"has-marker":e.showMarker}]),g=S(()=>Boolean(e.icon)),m=S(()=>({transform:"scaleX("+y(r.value)+")"})),b=S(()=>({left:y(r.value)*100+"%"})),h=S(()=>e.markerValue===void 0?e.modelValue:e.markerValue),R=S(()=>{const v=[];let U=e.step*Math.ceil(C()/e.step);for(;U<=k();)v.push(U),U+=e.step;return v}),C=()=>e.max>e.min?e.min:0,k=()=>e.max>e.min?e.max:100,A=()=>{n.value.focus()},P=()=>{N(o)},H=()=>{a.value=!0,t("focus")},K=()=>{a.value=!1,t("blur")},z=v=>{n.value.contains(v.target)||K()},q=v=>{v=x(v),e.snapToSteps&&(v=he(v)),N(v)},N=v=>{v=x(v),v!==r.value&&(r.value=v,t("update:modelValue",v),t("change",v))},ne=()=>{q(r.value+e.step)},se=()=>{q(r.value-e.step)},J=()=>{let v=l.value,U=v.offsetLeft;for(;v.offsetParent;)v=v.offsetParent,U+=v.offsetLeft;return U},Q=v=>({left:v+"%"}),le=()=>{document.addEventListener("touchend",w),document.addEventListener("mouseup",w),document.addEventListener("click",z),document.addEventListener("touchstart",z),de()},ue=()=>{document.removeEventListener("touchend",w),document.removeEventListener("mouseup",w),document.removeEventListener("click",z)},de=()=>{const v=x(r.value?r.value:0);N(v)},oe=v=>{e.disabled||(a.value||H(),s.value=!0,W(v),document.addEventListener("touchmove",I),document.addEventListener("mousemove",I),t("dragstart",r.value,v))},I=v=>{W(v)},W=v=>{const U=v.touches?v.touches[0].pageX:v.pageX,Z=l.value.offsetWidth,xe=(U-J())/Z,Ne=x(C()+xe*(k()-C()));s.value&&N(Math.round(Ne))},w=v=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&q(e.modelValue),document.removeEventListener("touchmove",I),document.removeEventListener("mousemove",I),t("dragend",r.value,v))},he=v=>{const U=Math.floor(v/e.step)*e.step,Z=U+e.step,xe=(U+Z)/2;return U<C()?Z>k()?v:Z:v>=xe&&Z<=k()?Z:U},y=v=>(v-C())/(k()-C()),x=v=>v<C()?C():v>k()?k():v;return te(()=>{le()}),dr(()=>{ue()}),{slider:n,track:l,thumb:p,initialValue:o,isActive:a,isDragging:s,localValue:r,classes:d,hasIcon:g,fillStyle:m,thumbStyle:b,markerText:h,snapPoints:R,moderatedMin:C,moderatedMax:k,focus:A,reset:P,onFocus:H,onBlur:K,onExternalClick:z,setValueWithSnap:q,setValue:N,incrementValue:ne,decrementValue:se,getTrackOffset:J,getPointStyle:Q,initializeSlider:le,teardownSlider:ue,initializeDrag:de,onDragStart:oe,onDragMove:I,dragUpdate:W,onDragStop:w,getNearestSnapPoint:he,relativeValue:y,moderateValue:x}}}),wu=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],Du=["name","value"],_u={key:1,class:"base-slider__icon"},$u={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Su={key:0},Cu={key:0,class:"base-slider__marker text-xs"},Tu=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[c("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),xu={class:"base-slider__marker-text text-xs"};function Pu(e,t,o,a,s,r){const n=V("feather");return u(),f("div",{ref:"slider",class:_(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Pe(fe((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Pe(fe((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Pe(fe((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Pe(fe((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(u(),f("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,Du)):$("",!0),e.hasIcon?(u(),f("div",_u,[E(e.$slots,"icon",{},()=>[j(n,{type:e.icon,size:"20"},null,8,["type"])])])):$("",!0),c("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[c("div",$u,[e.snapToSteps?(u(),f("div",Su,[(u(!0),f(Y,null,re(e.snapPoints,(l,p)=>(u(),f("span",{key:p,class:"base-slider__snap-point",style:ae({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):$("",!0)]),c("div",{class:"base-slider__track-fill bg-primary-400",style:ae(e.fillStyle)},null,4),c("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:ae(e.thumbStyle)},[e.showMarker?(u(),f("div",Cu,[Tu,c("span",xu,F(e.markerText),1)])):$("",!0)],4)],544)],42,wu)}var po=M(co,[["render",Pu]]);co.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};var Bu={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:po,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Vu=e=>({template:'<Slider v-bind="args" />',components:{Slider:po},setup(){return{args:e}}}),mo=Vu.bind();mo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:it};const Iu=["Default"];var Fu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bu,Default:mo,__namedExportsOrder:Iu}),Ru={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:We,argTypes:{}};const ju=e=>({template:"<Spinner />",components:{Spinner:We},setup(){return{args:e}}}),Mu=ju.bind(),Lu=["Default"];var Wu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ru,Default:Mu,__namedExportsOrder:Lu});const fo=B({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:o}=G(e);return{isChecked:S({get:()=>o.value,set:s=>{t("update:modelValue",s)}})}}}),Ou={class:"flex cursor-pointer items-center gap-x-3"},Eu={key:0},zu={class:"text-sm text-gray-400"};function Nu(e,t,o,a,s,r){return u(),f("label",Ou,[ie(c("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>e.isChecked=n),class:"hidden",type:"checkbox"},null,512),[[zt,e.isChecked]]),c("div",{class:_(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[c("div",{class:_(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(u(),f("div",Eu,[c("div",null,F(e.title),1),c("div",zu,F(e.description),1)])):$("",!0)])}var go=M(fo,[["render",Nu]]);fo.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};var Au={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:go,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Hu=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:go},setup(){const t=i(!1);return{args:e,value:t}}}),vo=Hu.bind({});vo.args={title:"Switch title",description:"Switch description text to be placed here"};const Uu=["Default"];var Yu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Au,Default:vo,__namedExportsOrder:Uu});const yo=B({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const o=i(),a=i([]),s=n=>{var l;(l=a.value)==null||l.push(n)};return te(()=>{const n=a.value.find(l=>l.dataset.value===e.modelValue);n&&(console.log(n),n.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:n=>{t("update:modelValue",n)},root:o,registerTab:s}}}),qu={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},Gu=["data-value"],Ku=["onClick"],Ju=c("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function Xu(e,t,o,a,s,r){return u(),f("div",qu,[(u(!0),f(Y,null,re(e.tabs,n=>(u(),f("div",{key:n.value,ref_for:!0,ref:e.registerTab,"data-value":n.value,class:_(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[n.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[E(e.$slots,"tab",{tab:n,select:()=>e.select(n.value)},()=>[c("div",{class:"px-4 py-3",onClick:()=>e.select(n.value)},F(n.title),9,Ku)])],10,Gu))),128)),Ju],512)}var vt=M(yo,[["render",Xu]]);yo.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};var Qu={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:vt,argTypes:{rounded:{control:{type:"boolean"}}}};const Zu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:vt},setup(){const t=i("item_1");return{args:e,value:t}}}),bo=Zu.bind();bo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const ed=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:vt},setup(){const t=i("item_1");return{args:e,value:t}}}),ho=ed.bind();ho.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const td=["Default","Slotted"];var nd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qu,Default:bo,Slotted:ho,__namedExportsOrder:td});const ko=B({name:"RobustTextarea",inheritAttrs:!1,model:{event:"update"},props:{label:{type:String},small:{type:Boolean},prefix:{type:String},suffix:{type:String},helper:{type:String}},setup(e,{emit:t}){return{onInput:a=>{t("update",a.value)}}}}),od={class:"input-container"},rd={class:"label-name"},ad={class:"input-section"},sd={key:0,class:"helper"};function ld(e,t,o,a,s,r){return u(),f("div",od,[c("label",null,[c("span",rd,F(e.label),1),c("div",ad,[e.prefix?(u(),f("div",{key:0,class:_(["prefix",{small:e.small}])},F(e.prefix),3)):$("",!0),c("textarea",ve(e.$attrs,{class:{small:e.small,prefixed:e.prefix,suffixed:e.suffix},onInput:t[0]||(t[0]=(...n)=>e.onInput&&e.onInput(...n))}),null,16),e.suffix?(u(),f("div",{key:1,class:_(["suffix",{small:e.small}])},F(e.suffix),3)):$("",!0)]),e.helper?(u(),f("div",sd,F(e.helper),1)):$("",!0)])])}var id=M(ko,[["render",ld],["__scopeId","data-v-7eedf0cf"]]);ko.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"small",type:{name:"boolean"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"helper",type:{name:"string"}}]};var ud={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

export default {
  title: 'Ui/Textarea',
  component: Textarea,
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
  template: '<Textarea v-bind="args"/>',
  components: { BaseInput },
  setup() {
    return { args }
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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:id,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const yt=e=>({template:'<Textarea v-bind="args"/>',components:{BaseInput},setup(){return{args:e}}}),wo=yt.bind();wo.args={title:"Input title"};const Do=yt.bind();Do.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const _o=yt.bind();_o.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const dd=["Default","Hint","ErrorHint"];var cd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ud,Default:wo,Hint:Do,ErrorHint:_o,__namedExportsOrder:dd});const $o=B({name:"RobustWidgetWrapper",components:{Popper:Te,PhDotsThreeVertical:cr},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const o=i(!1),a=i(),s=i();Le(s,n=>{o.value&&(a.value.contains(n.target)&&(n.stopPropagation(),n.preventDefault()),r(),t("blur"))});const r=()=>{o.value===!0&&(o.value=!1,t("blur"))};return{open:o,closeDropdown:r,popperRef:s,contextButtonRef:a}}}),pd={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function md(e,t,o,a,s,r){const n=V("PhDotsThreeVertical"),l=V("Popper");return u(),f(Y,null,[c("div",ve(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[ie(c("div",{class:_(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Me,e.stripe]]),e.title||e.$slots.title?(u(),f("div",pd,[e.$slots.title?E(e.$slots,"title",{key:0,title:e.title}):(u(),f(Y,{key:1},[ge(F(e.title),1)],64)),e.$slots.options?(u(),f("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=p=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[j(n,{size:"24",weight:"bold"})],512)):$("",!0)])):$("",!0),e.$slots.default?(u(),f("section",{key:1,class:_(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[E(e.$slots,"default")],2)):$("",!0),E(e.$slots,"raw")],16),j(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=p=>e.open=p),options:{placement:"bottom-end"}},{default:X(()=>[E(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var So=M($o,[["render",md]]);$o.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};var fd={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:So,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const gd=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:So},setup(){const t=i(!1);return{args:e,value:t}}}),Co=gd.bind({});Co.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const vd=["Default"];var yd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fd,Default:Co,__namedExportsOrder:vd});const bd=[br,hr,kr,wr,Dr,_r,$r,Sr,Cr,Tr,Br];bd.forEach(e=>{Object.keys(e).forEach(t=>{const o=e[t];switch(t){case"args":case"argTypes":return vr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(a=>gr(a,!1));case"loaders":return o.forEach(a=>fr(a,!1));case"parameters":return St(He({},o),!1);case"argTypesEnhancers":return o.forEach(a=>mr(a));case"argsEnhancers":return o.forEach(a=>pr(a));case"globals":case"globalTypes":{const a={};return a[t]=o,St(a,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function To(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Kr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":xa,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Oa,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":qa,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":Ds,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Es,"/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":Ks,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":rl,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":kl,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":xl,"/home/runner/work/robust-ui/robust-ui/src/components/FormWizard/FormWizard.stories.js":ti,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":ci,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":yi,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":ki,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":_i,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":Pi,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":Ai,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":Ji,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":eu,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":du,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":ku,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":Fu,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":Wu,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":Yu,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":nd,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":cd,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":yd}[e]}Object.assign(To,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/FormWizard/FormWizard.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":"./src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/FormWizard/FormWizard.stories.js":"./src/components/FormWizard/FormWizard.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});yr(To,{hot:!1},!1);
//# sourceMappingURL=iframe.c12204b1.js.map
