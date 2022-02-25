var la=Object.defineProperty,ia=Object.defineProperties;var ua=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable;var $t=(e,t,o)=>t in e?la(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,me=(e,t)=>{for(var o in t||(t={}))Vt.call(t,o)&&$t(e,o,t[o]);if(Ne)for(var o of Ne(t))Bt.call(t,o)&&$t(e,o,t[o]);return e},Ce=(e,t)=>ia(e,ua(t));var Pt=(e,t)=>{var o={};for(var n in e)Vt.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&Ne)for(var n of Ne(e))t.indexOf(n)<0&&Bt.call(e,n)&&(o[n]=e[n]);return o};import{d as M,c as D,u as ut,a as c,b as p,o as u,r as m,t as N,e as E,w as q,n as S,f as Ge,g as _,h as F,i as w,P as da,j as ca,k as j,m as de,l as nn,p as ue,v as pa,q as C,s as be,x as ze,y as Ue,z as It,A as He,B as Rt,C as ma,D as fa,E as on,F as an,G as ga,H as fe,I as ne,J,K as We,L as tt,M as nt,N as ya,O as ba,Q as va,R as ha,S as _a,T as ka,U as wa,V as Da,W as Ca,X as ie,Y as R,Z as z,_ as Sa,$ as dt,a0 as rn,a1 as Z,a2 as ge,a3 as sn,a4 as ct,a5 as Ie,a6 as ye,a7 as pt,a8 as ot,a9 as xa,aa as Ta,ab as $a,ac as Va,ad as qe,ae as Ye,af as ln,ag as un,ah as Re,ai as Ee,aj as he,ak as xe,al as Et,am as Ba,an as dn,ao as Pa,ap as at,aq as Ia,ar as Ra,as as Te,at as Ea,au as ja,av as mt,aw as ft,ax as gt,ay as Ma,az as La,aA as Oa,aB as je,aC as Fa,aD as Aa,aE as Na,aF as za,aG as Ua,aH as Ha,aI as jt,aJ as Mt,aK as Wa,aL as Ga,aM as qa,aN as Ya,aO as Ka,aP as Xa,aQ as Ja,aR as Qa,aS as Za,aT as er,aU as tr,aV as nr,aW as or,aX as ar,aY as rr,aZ as sr}from"./vendor.4c8a4c5e.js";const lr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};lr();const ir={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var ur=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ir});var P=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o};const yt=M({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=D(()=>.666*(e.size-2*e.safeMargin)),o=D(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:o}}}),Lt=()=>{ut(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},Ot=yt.setup;yt.setup=Ot?(e,t)=>(Lt(),Ot(e,t)):Lt;const cn=yt,dr=["width","height","viewBox"],cr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function pr(e,t,o,n,s,r){return u(),c("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[p("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,cr)],8,dr)}var Me=P(cn,[["render",pr],["__scopeId","data-v-2e051f42"]]);cn.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var mr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const pn=M({name:"RobustButton",components:{RobustSpinner:Me},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=m(!1),{loading:o,variant:n}=N(e);return{variantStyles:D(()=>mr[n.value]),loading:o,displaySpinner:t}}}),fr={key:0,class:"mr-2"},gr={class:"whitespace-no-wrap truncate"},yr={key:1,class:"ml-2"};function br(e,t,o,n,s,r){const a=_("RobustSpinner");return u(),E(Ge(e.tag),{disabled:e.disabled,class:S(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:q(()=>[p("div",{class:S(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(u(),c("div",fr,[F(e.$slots,"prefix",{tag:"div"})])):w("",!0),p("div",gr,[F(e.$slots,"default")]),e.$slots.suffix?(u(),c("div",yr,[F(e.$slots,"suffix",{tag:"div"})])):w("",!0)],2),e.loading?(u(),E(a,{key:0,size:20,stroke:2,class:"spinner absolute"})):w("",!0)]),_:3},8,["disabled","class"])}var ae=P(pn,[["render",br]]);pn.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var vr={parameters:{storySource:{source:`import Button from './Button.vue'
import { PhSmiley, PhPaperPlaneTilt } from '@dnlsndr/vue-phosphor-icons'
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
  template: '<Button v-bind="args" >Click here</Button>',
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:ae,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const hr=e=>({components:{Button:ae},template:'<Button v-bind="args" >Click here</Button>',setup(){return{args:e}}}),_r=hr.bind({}),kr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:ae,PhSmiley:da},setup(){return{args:e}}}),wr=kr.bind(),Dr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:ae,PhPaperPlaneTilt:ca},setup(){return{args:e}}}),Cr=Dr.bind(),Sr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:ae},setup(){return{args:e}}}),xr=Sr.bind(),Tr=["Default","Prefix","Suffix","Loading"];var $r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vr,Default:_r,Prefix:wr,Suffix:Cr,Loading:xr,__namedExportsOrder:Tr});let Vr=0;const mn=M({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},boxClass:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const o=(++Vr).toString(),n=/^on[^a-z]/,s=d=>n.test(d);let r=D(()=>Object.fromEntries(Object.entries(t).filter(d=>s(d[0]))));const a=m();function l(){}function i(){}return{cuid:o,wrapperRef:a,blurred:l,focused:i,listeners:r}}}),Br={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Pr={key:1,class:"block pt-1"},Ir={key:0,class:"select-none text-xs text-gray-400"},Rr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Er(e,t,o,n,s,r){return u(),c("fieldset",{class:S([e.$props.class])},[e.title?(u(),c("legend",Br,j(e.title),1)):w("",!0),p("div",de(e.listeners,{ref:"wrapperRef",class:["relative flex rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.boxClass,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[F(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(u(),c("label",Pr,[e.hint!==void 0?(u(),c("div",Ir,j(e.hint),1)):w("",!0),e.error!==void 0?(u(),c("div",Rr,j(e.error),1)):w("",!0)])):w("",!0)],2)}var ke=P(mn,[["render",Er]]);mn.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"boxClass",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const fn=M({name:"RobustInput",inheritAttrs:!1,components:{RobustInputWrapper:ke,PhWarningCircle:nn},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const n=m(),s=o,r=D({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function a(){var i;(i=n.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:r,inputAttrs:s,props:e,inputRef:n,focus:a,clear:l}}}),jr=["id","disabled","readonly"],Mr={key:1,class:"text-red-400"};function Lr(e,t,o,n,s,r){const a=_("PhWarningCircle"),l=_("RobustInputWrapper");return u(),E(l,{title:e.title,hint:e.hint,error:e.error,class:S(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(i=>[e.$slots.prefix?(u(),c("div",{key:0,class:S(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[F(e.$slots,"prefix",{tag:"div"})],2)):w("",!0),ue(p("input",de({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=d=>e.inputFieldValue=d),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,jr),[[pa,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),c("div",{key:1,class:S(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),c("div",Mr,[C(a,{size:"20",class:"block"})])):F(e.$slots,"suffix",{key:0,tag:"div"})],2)):w("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var $e=P(fn,[["render",Lr]]);fn.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Or=[{title:"today",preset:()=>{const e=be(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,be(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=be(ze(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,be(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Ue(new Date),be(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Ue(new Date),It(new Date)]},{title:"this_year",preset:()=>[He(new Date),Rt(new Date)]},{title:"this_year_so_far",preset:()=>[He(new Date),be(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=ma(ze(new Date,7));return[e,fa(new Date(e))]}},{title:"last_month",preset:()=>{let e=Ue(ze(Ue(new Date),1));return[e,It(e)]}},{title:"last_year",preset:()=>{const e=He(ze(He(new Date),1));return[e,Rt(new Date(e))]}}],Fr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const gn=M({name:"RobustCalendar",components:{RobustInput:$e,PhCaretLeft:on,PhCaretRight:an},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:o,past:n,today:s,modelValue:r}=N(e),a=m(),l=m(),i=m(),d=m(),g=m(),f=Array.isArray(r.value)?m(new Date):m(new Date(r.value)),k=m(),v=m({}),b=Or,y=D(()=>Fr[e.variant]),h=D(()=>{const B=new Date(f.value);return ga(B)}),I=D(()=>{try{return fe(f.value,"MMM")}catch{return}}),$=D(()=>{try{return fe(f.value,"yyyy")}catch{return}}),Y=D(()=>{const B=new Date(f.value);B.setDate(1);const T=B.getDay();return(T===0?7:T)-1}),ee=D(()=>new Date(f.value).getMonth()),K=D(()=>new Date(f.value).getFullYear()),W=()=>{if(console.log("applying time"),a.value!=""&&!We(new Date(a.value))&&(i.value="Please enter a valid date."),l.value!=""&&!We(new Date(l.value))&&(d.value="Please enter a valid date."),We(new Date(a.value))&&We(new Date(l.value))){i.value="",d.value="";const B=[new Date(a.value),new Date(l.value)];t("update:modelValue",B)}},G=(B,T)=>{const H=te(B,T);return H<0?1:H>0?-1:0},te=(B,T)=>{const H=Date.UTC(T.getFullYear(),T.getMonth(),T.getDate()),pe=Date.UTC(B.getFullYear(),B.getMonth(),B.getDate());return(H-pe)/864e5},ce=B=>{if(!Array.isArray(r.value)||r.value.length<2||!G(...r.value))return!1;const T=new Date;T.setDate(B),T.setMonth(f.value.getMonth()),T.setFullYear(f.value.getFullYear());const H=tt(r.value);return!G(T,H)},oe=B=>{if(!Array.isArray(r.value)||r.value.length<2||!G(...r.value))return!1;const T=new Date;T.setDate(B),T.setMonth(f.value.getMonth()),T.setFullYear(f.value.getFullYear());const H=nt(r.value);return!G(T,H)},L=B=>{if(!Array.isArray(r.value)||r.value.length<2)return!1;const T=new Date;T.setDate(B),T.setMonth(f.value.getMonth()),T.setFullYear(f.value.getFullYear());const H=tt(r.value),pe=nt(r.value);return G(T,pe)===-1&&G(T,H)===1},X=B=>{const T=new Date;if(T.setDate(B),T.setMonth(f.value.getMonth()),T.setFullYear(f.value.getFullYear()),Array.isArray(r.value)){const H=r.value.map(pe=>new Date(pe));for(let pe=0;pe<H.length;pe++)if(!G(H[pe],T))return!0}else if(!G(new Date(k.value),T))return!0};function re(B){t("update:modelValue",B),f.value=B[1]}function se(){f.value=ya(f.value,1)}function we(){f.value=ba(f.value,1)}function O(B){f.value=va(f.value,B)}function U(){f.value=ha(f.value,1)}function V(){f.value=_a(f.value,1)}function Ae(B){f.value=ka(f.value,B)}const De=B=>{const T=new Date(f.value).setDate(B);return!(!s.value&&wa(g.value,T)||!n.value&&Da(g.value,T)>0||!o.value&&Ca(T))},ve=B=>{if(!De(B))return;const T=new Date;if(T.setDate(B),T.setMonth(f.value.getMonth()),T.setFullYear(f.value.getFullYear()),f.value=T,Array.isArray(r.value)){i.value="",d.value="";let H=[];r.value.length>=2?(H.push(new Date(f.value)),l.value=""):(H=r.value,H.push(new Date(f.value)),H.length>1&&(H=[be(tt(H),{hours:0,minutes:0,seconds:0}),be(nt(H),{hours:23,minutes:59,seconds:59})],l.value=H[1].toLocaleDateString())),a.value=H[0].toLocaleDateString(),t("update:modelValue",H)}else k.value=new Date(f.value),t("update:modelValue",f.value)},x=()=>{f.value=new Date(new Date().setHours(12))};ne(r,B=>{const T=B[0]||void 0,H=B[1]||void 0;T?a.value=T.toLocaleDateString():a.value="",H?l.value=H.toLocaleDateString():l.value=""}),J(()=>{if(Array.isArray(r.value)){f.value=new Date(r.value[1]||new Date),k.value=f.value;const B=r.value[0]||void 0,T=r.value[1]||void 0;B?a.value=B.toLocaleDateString():a.value="",T?l.value=T.toLocaleDateString():l.value=""}else f.value=new Date(r.value||new Date),k.value=f.value});const Q=D(()=>{const B=[];for(let T=1900;T<=2100;T++)B.push(T);return B}),le=m(!1);function Pe(){le.value=!0}function Ze(){le.value=!1}const et=m(!1);function ra(){et.value=!0,ie(()=>{v.value[K.value].scrollIntoView({block:"start",behavior:"auto"})})}function sa(){et.value=!1}return{months:D(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:a,to:l,errorFrom:i,errorTo:d,showMonthSelectionActive:le,showYearSelectionActive:et,now:g,cursor:f,selectedDate:k,showMonthSelection:Pe,showYearSelection:ra,hideMonthSelection:Ze,hideYearSelection:sa,daysInMonth:h,monthHeading:I,yearHeading:$,refYearEntry:v,setYear:O,setMonth:Ae,firstWeekday:Y,activeMonth:ee,activeYear:K,compareDates:G,applyTime:W,dayDiff:te,isFirst:ce,isLast:oe,isBetweenRange:L,isSelectedDay:X,addYear:se,subYear:we,addMonth:U,subMonth:V,dayAllowed:De,daySelect:ve,reset:x,yearSelectionYears:Q,quickActions:b,setQuickAction:re,variantStyling:y}}}),Ar={class:"relative flex w-max select-none"},Nr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},zr={class:"absolute inset-0 overflow-auto py-2"},Ur=["onClick"],Hr={class:"p-4 dark:border-gray-600"},Wr={class:"mb-4 flex items-center text-center text-lg font-semibold"},Gr={class:"flex flex-1"},qr={class:"relative w-max"},Yr={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},Kr=["onClick"],Xr={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},Jr=["data-year","onClick"],Qr=Sa('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),Zr=["disabled","onClick"],es={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},ts=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),ns=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function os(e,t,o,n,s,r){const a=_("PhCaretLeft"),l=_("PhCaretRight"),i=_("RobustInput");return u(),c("div",Ar,[Array.isArray(e.modelValue)?(u(),c("div",Nr,[p("div",zr,[(u(!0),c(R,null,z(e.quickActions,d=>(u(),c("div",{key:d.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:g=>e.setQuickAction(d.preset())},j(d.title),9,Ur))),128))])])):w("",!0),p("section",Hr,[p("div",Wr,[p("div",Gr,[p("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},j(e.monthHeading),1),p("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},j(e.yearHeading),1)]),p("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...d)=>e.subMonth&&e.subMonth(...d))},[C(a,{type:"chevron-left",size:"14",weight:"bold"})]),p("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...d)=>e.addMonth&&e.addMonth(...d))},[C(l,{type:"chevron-right",size:"14",weight:"bold"})])]),p("div",qr,[e.showMonthSelectionActive?(u(),c("div",Yr,[(u(!0),c(R,null,z(e.months,(d,g)=>(u(),c("div",{key:g,class:S(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===g?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(g),e.hideMonthSelection()}},j(d.title),11,Kr))),128))])):w("",!0),e.showYearSelectionActive?(u(),c("div",Xr,[(u(!0),c(R,null,z(e.yearSelectionYears,d=>(u(),c("div",{ref_for:!0,ref:g=>e.refYearEntry[d]=g,key:d,class:S(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===d?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":d,onClick:()=>{e.setYear(d),e.hideYearSelection()}},j(d),11,Jr))),128))])):w("",!0),p("div",{class:S(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[Qr,(u(!0),c(R,null,z(e.firstWeekday,d=>(u(),c("div",{key:d+"_offset"}))),128)),(u(!0),c(R,null,z(e.daysInMonth,d=>(u(),c("div",{key:d+"_day",class:S(["relative",[e.isBetweenRange(d)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(d),onClick:g=>e.daySelect(d)},[e.isLast(d)||e.isFirst(d)?(u(),c("div",{key:0,class:S(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(d)?"right-0 w-1/2":e.isLast(d)?"left-0 w-1/2":""]])},null,2)):w("",!0),p("div",{class:S(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(d)||e.isLast(d)||e.isFirst(d)||e.isSelectedDay(d)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},j(d),3)],10,Zr))),128))],2)])]),Array.isArray(e.modelValue)?(u(),c("div",es,[ts,C(i,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=d=>e.from=d),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),ns,C(i,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=d=>e.to=d),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),F(e.$slots,"default")])):w("",!0)])}var Ke=P(gn,[["render",os]]);gn.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var as={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ke,argTypes:{}};const yn=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ke},setup(){return{args:e}}}),Ft=m(new Date),bn=yn.bind({});bn.args={modelValue:Ft,"onUpdate:modelValue":e=>{Ft.value=e,console.log(e)}};const rs=[new Date,new Date],At=m(rs),vn=yn.bind({});vn.args={modelValue:At,"onUpdate:modelValue":e=>{At.value=e,console.log(e)}};const ss=["Default","Range"];var ls=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:as,Default:bn,Range:vn,__namedExportsOrder:ss});const hn=M({components:{PhCheck:dt},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const n="_"+Math.random().toString(36).substr(2,9),s=D({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(r){let a=e.modelValue;Array.isArray(a)?r?a.push(e.value):a.splice(a.indexOf(e.value),1):r?a=e.value:a=e.disabledValue,t("update:modelValue",a),t("change",a)}});return{cuid:n,isChecked:s,attrs:o}}}),is={class:"inline-block"},us={class:"flex cursor-pointer items-start"},ds=["id"],cs={key:0,class:"w-full select-none pt-px leading-4"},ps={key:1,class:"w-full select-none pt-px leading-4"};function ms(e,t,o,n,s,r){const a=_("PhCheck");return u(),c("div",is,[p("label",us,[ue(p("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,ds),[[rn,e.isChecked]]),p("div",{class:S(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[C(a,{class:S([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(u(),c("div",cs,j(e.title),1)):w("",!0),!e.title&&e.$slots.title?(u(),c("div",ps,[F(e.$slots,"title")])):w("",!0)])])}var Ve=P(hn,[["render",ms]]);hn.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var fs={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Ve,argTypes:{title:{control:{type:"text"}}}};const gs=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Ve},setup(){return{value:m(!1),args:e}}}),_n=gs.bind({});_n.args={title:"Checkbox title"};const ys=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Ve},setup(){return{value:m(!1),args:e}}}),kn=ys.bind({});kn.args={title:"V-Slot Checkbox title"};const bs=["Default","SlottedTitle"];var vs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fs,Default:_n,SlottedTitle:kn,__namedExportsOrder:bs});const wn=M({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),hs=["width","height","viewBox"],_s=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function ks(e,t,o,n,s,r){return u(),c("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[p("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,_s)],8,hs)}var Dn=P(wn,[["render",ks]]);wn.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var ws={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Dn,argTypes:{progress:{control:{type:"number"}}}};const Ds=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Dn},setup(){return{args:e}}}),Cs=Ds.bind(),Ss=["Default"];var xs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ws,Default:Cs,__namedExportsOrder:Ss});function Se(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=$s(e):/rgb/.test(e)?t=zt(e):typeof e=="string"?t=zt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:o,g:n,b:s,a:r}=t,{h:a,s:l,v:i}=Vs(t);return{r:o,g:n,b:s,a:r===void 0?1:r,h:a,s:l,v:i}}function Cn(e){const t=document.createElement("canvas"),o=t.getContext("2d"),n=e*2;return t.width=n,t.height=n,o.fillStyle="#ffffff",o.fillRect(0,0,n,n),o.fillStyle="#ccd5db",o.fillRect(0,0,e,e),o.fillRect(e,e,e,e),t}function Nt(e,t,o,n,s,r){const a=e==="l",l=t.createLinearGradient(0,0,a?o:0,a?0:n);l.addColorStop(.01,s),l.addColorStop(.99,r),t.fillStyle=l,t.fillRect(0,0,o,n)}function Ts({r:e,g:t,b:o},n){const s=a=>("0"+Number(a).toString(16)).slice(-2),r=`#${s(e)}${s(t)}${s(o)}`;return n?r.toUpperCase():r}function $s(e){e=e.slice(1);const t=o=>parseInt(o,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function zt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Vs({r:e,g:t,b:o}){e=e/255,t=t/255,o=o/255;const n=Math.max(e,t,o),s=Math.min(e,t,o),r=n-s;let a=0;n===s?a=0:n===e?t>=o?a=60*(t-o)/r:a=60*(t-o)/r+360:n===t?a=60*(o-e)/r+120:n===o&&(a=60*(e-t)/r+240),a=Math.floor(a);const l=parseFloat((n===0?0:1-s/n).toFixed(2)),i=parseFloat(n.toFixed(2));return{h:a,s:l,v:i}}const Sn=M({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const o=m({}),{size:n,hsv:s,color:r}=N(e),a=m(),l=m(),i=f=>{const k=f,v=n.value,b=k.getContext("2d");k.width=v,k.height=v,b.fillStyle=r.value,b.fillRect(0,0,v,v),Nt("l",b,v,v,"#FFFFFF","rgba(255,255,255,0)"),Nt("p",b,v,v,"rgba(0,0,0,0)","#000000")},d=()=>{o.value={left:s.value.s*n.value-5+"px",top:(1-s.value.v)*n.value-5+"px"}},g=f=>{const{top:k,left:v}=a.value.getBoundingClientRect(),b=f.target.getContext("2d"),y=I=>{let $=I.clientX-v,Y=I.clientY-k;$<0&&($=0),Y<0&&(Y=0),$>n.value&&($=n.value),Y>n.value&&(Y=n.value),o.value={left:$-5+"px",top:Y-5+"px"};const ee=b.getImageData(Math.min($,n.value-1),Math.min(Y,n.value-1),1,1),[K,W,G]=ee.data;t("selectSaturation",{r:K,g:W,b:G})};y(f);const h=()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",h)};return J(()=>{i(l.value),d()}),{slideSaturationStyle:o,selectSaturation:g,renderSlide:d,renderColor:i,saturation:a,canvasSaturation:l,color:r,hsv:s,size:n}}}),Bs={ref:"canvasSaturation"};function Ps(e,t,o,n,s,r){return u(),c("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ge((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[p("canvas",Bs,null,512),p("div",{style:Z(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Is=P(Sn,[["render",Ps]]);Sn.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const xn=M({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const o=m({}),n=m(),{height:s,width:r,hsv:a}=N(e),l=m(),i=f=>{const k=f,v=r.value,b=s.value,y=k.getContext("2d");k.width=v,k.height=b;const h=y.createLinearGradient(0,0,0,b);h.addColorStop(0,"#FF0000"),h.addColorStop(.17*1,"#FF00FF"),h.addColorStop(.17*2,"#0000FF"),h.addColorStop(.17*3,"#00FFFF"),h.addColorStop(.17*4,"#00FF00"),h.addColorStop(.17*5,"#FFFF00"),h.addColorStop(1,"#FF0000"),y.fillStyle=h,y.fillRect(0,0,v,b)},d=()=>{o.value={top:(1-a.value.h/360)*s.value-2+"px"}},g=f=>{const{top:k}=l.value.getBoundingClientRect(),v=f.target.getContext("2d"),b=h=>{let I=h.clientY-k;I<0&&(I=0),I>s.value&&(I=s.value),o.value={top:I-2+"px"};const $=v.getImageData(0,Math.min(I,s.value-1),1,1),[Y,ee,K]=$.data;t("selectHue",{r:Y,g:ee,b:K})};b(f);const y=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",y)};return J(()=>{i(n.value),d()}),{slideHueStyle:o,hue:l,width:r,height:s,renderSlide:d,selectHue:g,renderColor:i,hsv:a,canvasHue:n}}}),Rs={ref:"canvasHue"};function Es(e,t,o,n,s,r){return u(),c("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ge((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[p("canvas",Rs,null,512),p("div",{style:Z(e.slideHueStyle),class:"slide"},null,4)],544)}var js=P(xn,[["render",Es]]);xn.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Tn=M({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=m(5),{color:o,width:n,height:s}=N(e),r=m(),a=l=>{const i=l,d=n.value,g=s.value,f=t.value,k=Cn(f),v=i.getContext("2d");i.width=d,i.height=g,v.fillStyle=v.createPattern(k,"repeat"),v.fillRect(0,0,d,g),v.fillStyle=o.value,v.fillRect(0,0,d,g)};return J(()=>{sn(()=>{a(r.value)}),a(r.value)}),{alphaSize:t,color:o,width:n,height:s,canvas:r}}}),Ms={ref:"canvas"};function Ls(e,t,o,n,s,r){return u(),c("canvas",Ms,null,512)}var Os=P(Tn,[["render",Ls]]);Tn.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const $n=M({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:D({get(){return e.color||""},set(n){t("inputColor",n)}})}}}),Fs={class:"color-type"},As={class:"name"};function Ns(e,t,o,n,s,r){return u(),c("div",Fs,[p("span",As,j(e.name),1),ue(p("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.modelColor=a),class:"value"},null,512),[[ct,e.modelColor]])])}var zs=P($n,[["render",Ns]]);$n.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Vn=M({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const o=m(),n=m([]),s=m();e.colorsHistoryKey&&localStorage&&(n.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Cn(4).toDataURL(),Ie(()=>{r(o.value)});const r=l=>{if(!l)return;const i=n.value||[],d=i.indexOf(l);d>=0&&i.splice(d,1),i.length>=8&&(i.length=7),i.unshift(l),n.value=i||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(i))};return{setColorsHistory:r,colorsHistory:n,color:o,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),Us={class:"colors"},Hs=["onClick"],Ws={key:0,class:"colors history"},Gs=["onClick"];function qs(e,t,o,n,s,r){return u(),c("div",null,[p("ul",Us,[(u(!0),c(R,null,z(e.colorsDefault,a=>(u(),c("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[p("div",{style:Z({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),p("div",{style:Z({background:a}),class:"color"},null,4)],8,Hs))),128))]),e.colorsHistory.length?(u(),c("ul",Ws,[(u(!0),c(R,null,z(e.colorsHistory,a=>(u(),c("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[p("div",{style:Z({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),p("div",{style:Z({background:a}),class:"color"},null,4)],8,Gs))),128))])):w("",!0)])}var Ys=P(Vn,[["render",qs]]);Vn.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Bn=M({name:"RobustColorPicker",components:{Saturation:Is,Hue:js,Preview:Os,Box:zs,Colors:Ys},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const o=m(15),n=m(152),s=m(20),r=m(""),a=m(""),l=m(0),i=m(0),d=m(0),g=m(1),f=m(0),k=m(0),v=m(0),b=m(),y=m(),{theme:h,color:I}=N(e),$=D(()=>h.value==="light"),Y=D(()=>n.value+(o.value+8)*2),ee=D(()=>Y.value-s.value),K=D(()=>({r:l.value,g:i.value,b:d.value,a:g.value})),W=D(()=>({h:f.value,s:k.value,v:v.value})),G=D(()=>`rgb(${l.value}, ${i.value}, ${d.value})`),te=D(()=>`${l.value}, ${i.value}, ${d.value}`),ce=D(()=>`rgb(${te.value})`),oe=D(()=>Ts(K.value,!0)),L=()=>{a.value=oe.value,r.value=te.value};return J(()=>{const U=Se(I.value);l.value=U.r,i.value=U.g,d.value=U.b,g.value=U.a,f.value=U.h,k.value=U.s,v.value=U.v,L()}),sn(()=>{t("changeColor",{rgba:K.value,hsv:W.value,hex:a.value})}),{hueWidth:o,hueHeight:n,previewHeight:s,modelRgba:r,modelHex:a,r:l,g:i,b:d,a:g,h:f,s:k,v,isLightTheme:$,totalWidth:Y,previewWidth:ee,rgba:K,hsv:W,rgbString:G,rgbStringShort:te,rgbaString:ce,hexString:oe,setText:L,selectSaturation:U=>{const V=Se(U);l.value=V.r,i.value=V.g,d.value=V.b,g.value=V.a,f.value=V.h,k.value=V.s,v.value=V.v,L()},selectHue:U=>{const V=Se(U);l.value=V.r,i.value=V.g,d.value=V.b,g.value=V.a,f.value=V.h,k.value=V.s,v.value=V.v,L(),ie(()=>{y.value.renderColor(y.value.canvasSaturation),y.value.renderSlide()})},inputHex:U=>{const V=Se(U);l.value=V.r,i.value=V.g,d.value=V.b,g.value=V.a,f.value=V.h,k.value=V.s,v.value=V.v,a.value=U,r.value=te.value,ie(()=>{y.value.renderColor(y.value.canvasSaturation),y.value.renderSlide(),b.value.renderSlide()})},inputRgba:U=>{const V=Se(U);l.value=V.r,i.value=V.g,d.value=V.b,g.value=V.a,f.value=V.h,k.value=V.s,v.value=V.v,a.value=oe.value,r.value=`${l.value}, ${i.value}, ${d.value}`,ie(()=>{y.value.renderColor(y.value.canvasSaturation),y.value.renderSlide(),b.value.renderSlide()})},selectColor:U=>{const V=Se(U);l.value=V.r,i.value=V.g,d.value=V.b,g.value=V.a,f.value=V.h,k.value=V.s,v.value=V.v,L(),ie(()=>{y.value.renderColor(y.value.canvasSaturation),y.value.renderSlide(),b.value.renderSlide()})},saturation:y,hue:b,color:I,theme:h}}}),Ks={class:"color-set"};function Xs(e,t,o,n,s,r){const a=_("Saturation"),l=_("Hue"),i=_("Preview"),d=_("Box"),g=_("Colors");return u(),c("div",{class:S(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:Z({width:e.totalWidth+"px"})},[p("div",Ks,[C(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),C(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),p("div",{style:Z({height:e.previewHeight+"px"}),class:"color-show"},[C(i,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),C(d,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),C(d,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),C(g,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var Pn=P(Bn,[["render",Xs]]);Bn.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var Js={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:Pn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Qs=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:Pn},setup(){return{args:e}}}),Zs=Qs.bind(),el=["Default"];var tl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Js,Default:Zs,__namedExportsOrder:el});const In=M({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),nl={key:1,class:"flex items-center"},ol={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function al(e,t,o,n,s,r){return e.$slots.default?(u(),c("div",nl,[p("div",{class:S(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),p("div",ol,[F(e.$slots,"default")]),p("div",{class:S(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(u(),c("div",{key:0,class:S(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var rl=P(In,[["render",al]]);In.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const Rn=M({name:"RobustContentBox",components:{RobustSeparator:rl},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),sl={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},ll={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},il={class:"flex"},ul={key:1,class:"text-gray-500 dark:text-gray-500"},dl={class:"p-4 sm:p-6"};function cl(e,t,o,n,s,r){const a=_("RobustSeparator");return u(),c("section",sl,[e.description!==void 0||e.title!==void 0?(u(),c("header",ll,[e.stripe?(u(),c("div",{key:0,class:S(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):w("",!0),p("h1",il,[p("div",{class:S(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[F(e.$slots,"title",{title:e.title},()=>[ye(j(e.title),1)])],2)]),e.description!==void 0?(u(),c("p",ul,[F(e.$slots,"description",{description:e.description},()=>[ye(j(e.description),1)])])):w("",!0)])):w("",!0),C(a),p("div",dl,[F(e.$slots,"default")])])}var Le=P(Rn,[["render",cl]]);Rn.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var pl={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Le,argTypes:{title:{control:{type:"text"}}}};const ml=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),fl=ml.bind(),gl=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),En=gl.bind();En.args={title:"Input title"};const yl=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),jn=yl.bind();jn.args={title:"Input title"};const bl=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Le},setup(){return{args:e}}}),Mn=bl.bind();Mn.args={title:"Input title"};const vl=["Default","Title","TitleProp","Stripe"];var hl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pl,Default:fl,Title:En,TitleProp:jn,Stripe:Mn,__namedExportsOrder:vl});const bt=Symbol("Data Table settings state provider identifier"),Xe=Symbol("Data Table settings update provider identifier"),vt=Symbol("Data Table settings add udpated record provider identifier");var _l={setup(){const e=pt({totalCount:0,pageSize:25,page:1,updatedRecords:{},isDirty:!1,keyword:""});ne(e.updatedRecords,()=>{e.isDirty||(e.isDirty=!0)},{deep:!0});const t=(n,s)=>{e[n]=s},o=n=>{e.updatedRecords[n.id]=n};ot(bt,N(xa(e))),ot(vt,o),ot(Xe,t)},render(){return this.$slots.default()}};const Ln={components:{PhSortDescending:Ta,PhSortAscending:$a,PhList:Va},props:{modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:o}=N(e),n=D({get(){return o.value},set(r){t("update:modelValue",r)}});return{sort:n,onToggle:()=>{n.value>0?n.value=-1:n.value+=1}}}};function kl(e,t,o,n,s,r){const a=_("ph-sort-descending"),l=_("ph-sort-ascending"),i=_("ph-list");return u(),c("div",{class:S(["data-table-header__icon",n.sort?"visible":"sm:invisible"]),onClick:t[0]||(t[0]=(...d)=>n.onToggle&&n.onToggle(...d))},[n.sort<0?(u(),E(a,{key:0,size:"16px"})):n.sort>0?(u(),E(l,{key:1,size:"16px"})):(u(),E(i,{key:2,size:"16px"}))],2)}var wl=P(Ln,[["render",kl]]);Ln.__docgenInfo={exportName:"default",displayName:"SortToggle",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}]};const On={components:{SortToggle:wl},props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:o}=N(e);return{cell:D({get(){return o.value},set(s){t("update:modelValue",s)}})}}},Dl=["title"];function Cl(e,t,o,n,s,r){const a=_("sort-toggle");return u(),c(R,null,[p("span",{class:"font-medium text-sm uppercase truncate",title:n.cell.title},j(n.cell.title),9,Dl),n.cell.sortable?(u(),E(a,{key:0,modelValue:n.cell.sortDirection,"onUpdate:modelValue":t[0]||(t[0]=l=>n.cell.sortDirection=l)},null,8,["modelValue"])):w("",!0)],64)}var Sl=P(On,[["render",Cl],["__scopeId","data-v-149a1c8f"]]);On.__docgenInfo={exportName:"default",displayName:"DataTableHeaderCell",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}}],events:[{name:"update:modelValue"}]};const Fn={components:{HeaderCell:Sl},emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},hideFirst:{type:Boolean,default:!1},isInlineEditMode:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t}){const{modelValue:o}=N(e);return{headersData:D({get(){const a=o.value,{sort:s}=a;return Pt(a,["sort"])},set(s){t("update:modelValue",s)}})}}},xl=e=>(qe("data-v-601d07c3"),e=e(),Ye(),e),Tl={key:0},$l={key:0,class:"data-table-header border-bottom-2 flex items-center justify-between sm:justify-center px-4 py-2 text-sm tracking-wider cursor-pointer"},Vl=xl(()=>p("span",{class:"font-medium uppercase truncate",title:"actions"},"actions",-1)),Bl=[Vl];function Pl(e,t,o,n,s,r){const a=_("header-cell");return u(),c(R,null,[(u(!0),c(R,null,z(o.hideFirst?Object.keys(n.headersData).slice(1):Object.keys(n.headersData),l=>(u(),c("div",{key:l,class:S(["data-table-header border-bottom-2 flex items-center justify-between sm:justify-center px-4 py-2 text-sm tracking-wider cursor-pointer",o.isInlineEditMode?"h-12 sm:h-auto":"h-10 sm:h-auto"])},[C(a,{modelValue:n.headersData[l],"onUpdate:modelValue":i=>n.headersData[l]=i},null,8,["modelValue","onUpdate:modelValue"])],2))),128)),o.hasActionColumn?(u(),c("div",Tl,[o.isInlineEditMode?w("",!0):(u(),c("div",$l,Bl))])):w("",!0)],64)}var Il=P(Fn,[["render",Pl],["__scopeId","data-v-601d07c3"]]);Fn.__docgenInfo={exportName:"default",displayName:"DataTableHeader",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"data",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hideFirst",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInlineEditMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const ht={components:{TableHeader:Il,PhPlus:ln,PhMinus:un},emits:["update:modelValue"],props:{modelValue:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},config:Object,gridTemplateColumnsCss:String,isInlineEditMode:{type:Boolean,default:!0},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t}){const{modelValue:o,config:n}=N(e),s=D({get(){return o.value},set(r){t("update:modelValue",r)}});return me({headersData:s},pt({size:Object.keys(s.value).length}))}},Ut=()=>{ut(e=>({"1afdaa38":e.size}))},Ht=ht.setup;ht.setup=Ht?(e,t)=>(Ut(),Ht(e,t)):Ut;const An=ht,Nn=e=>(qe("data-v-967b83ec"),e=e(),Ye(),e),Rl={class:"data-table-header-container grid sm:hidden col-span-1"},El={class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-3 text-sm tracking-wider cursor-pointer bg-gray-700 border-b-2"},jl={class:"mr-2 text-white"},Ml={class:"truncate w-full"},Ll=Nn(()=>p("div",{class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"},"Key",-1)),Ol=Nn(()=>p("div",{class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"},"Key",-1));function Fl(e,t,o,n,s,r){const a=_("ph-plus"),l=_("ph-minus"),i=_("table-header");return u(),c(R,null,[p("div",Rl,[o.config.groupBy?(u(!0),c(R,{key:0},z(o.data,(d,g)=>(u(),c(R,{key:g},[p("div",El,[p("div",jl,[o.config.collapsed&&o.config.collapsed[g]?(u(),E(a,{key:0,size:"16px"})):(u(),E(l,{key:1,size:"16px"}))]),p("span",Ml,j(`${o.config.groupBy.toUpperCase()}: ${g}`),1)]),o.config.collapsed&&o.config.collapsed[g]?w("",!0):(u(!0),c(R,{key:0},z(o.data[g].children,f=>(u(),c(R,{key:f.id},[Ll,C(i,{modelValue:n.headersData,"onUpdate:modelValue":t[0]||(t[0]=k=>n.headersData=k),hideFirst:!0},null,8,["modelValue"])],64))),128))],64))),128)):(u(!0),c(R,{key:1},z(o.data,d=>(u(),c("div",{key:d.id},[Ol,C(i,{modelValue:n.headersData,"onUpdate:modelValue":t[1]||(t[1]=g=>n.headersData=g),isInlineEditMode:o.isInlineEditMode},null,8,["modelValue","isInlineEditMode"])]))),128))]),p("div",{class:"data-table-header-container hidden sm:grid col-span-1 grid-cols-1 bg-gray-500",style:Z({"grid-template-columns":o.gridTemplateColumnsCss})},[C(i,{modelValue:n.headersData,"onUpdate:modelValue":t[2]||(t[2]=d=>n.headersData=d),isInlineEditMode:o.isInlineEditMode},null,8,["modelValue","isInlineEditMode"])],4)],64)}var Al=P(An,[["render",Fl],["__scopeId","data-v-967b83ec"]]);An.__docgenInfo={exportName:"default",displayName:"DataTableHeaderContainer",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"data",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"}},{name:"gridTemplateColumnsCss",type:{name:"string"}},{name:"isInlineEditMode",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const zn={components:{PhCaretLeft:on,PhCaretRight:an,PhCaretDown:Re},props:{pageSize:{type:Number},totalCount:{type:Number},page:{type:Number},showPageSize:{type:Boolean,default:!0}},emits:["update:page","update:pageSize"],setup(e,{emit:t}){const{pageSize:o,totalCount:n,page:s}=N(e),r=m(0),a=m(null),l=m(!1),i=m([]),d=b=>{t("update:page",b)};ne([n,o,s],()=>k());const g=()=>{l.value=!l.value},f=b=>{b!==o.value&&(l.value=!1,t("update:pageSize",b))};Ee(a,b=>{l.value&&!a.value.contains(b.target)&&(l.value=!1)});const k=()=>{r.value=Math.ceil(n.value/o.value);let b=[];if(r.value<10){for(let I=1;I<=r.value;I++)b.push(I);return i.value=b,i.value}let y=s.value-3<1?1:s.value-3,h=s.value+3>r.value?r.value:s.value+3;y===1&&(h=7+y),h===r.value&&(y=h-7),h<r.value-1&&y>2&&h-y===6&&(h-=1);for(let I=y;I<=h;I++)I>0&&I<r.value&&b.push(I);return b[0]!==1&&b.unshift(1),b[b.length-1]!==r.value&&b.push(r.value),i.value=b,i.value},v=b=>i.value[b+1]-i.value[b]>1;return J(()=>{k()}),{isOpen:l,pageSize:o,pageCount:r,page:s,listPages:i,setPage:d,toggleDropdown:g,selectItem:f,showDot:v,containerRef:a}}},Un=e=>(qe("data-v-9bb7331c"),e=e(),Ye(),e),Nl={class:"flex"},zl={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},Ul=Un(()=>p("span",{class:"sr-only"},"Previous",-1)),Hl=["onClick"],Wl={key:0,class:"paginate-btn relative inline-flex items-center justify-center w-12 py-2 border border-gray-700 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300"},Gl=Un(()=>p("span",{class:"sr-only"},"Next",-1)),ql={key:0},Yl={class:"flex flex-col ml-2 h-full relative",ref:"containerRef"},Kl={class:"truncate min-w-0 select-none"},Xl={key:0,class:"absolute top-10 ml-0.5 z-50 shadow-2xl rounded-lg py-2 w-full dark:bg-gray-700 bg-white dark:text-white text-gray-700"},Jl=["onClick"];function Ql(e,t,o,n,s,r){const a=_("PhCaretLeft"),l=_("PhCaretRight"),i=_("ph-caret-down");return u(),c("div",Nl,[p("nav",zl,[p("span",{onClick:t[0]||(t[0]=()=>n.page>1&&n.setPage(n.page-1)),class:"paginate-btn relative inline-flex items-center p-2 rounded-l-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[Ul,C(a,{type:"chevron-left",class:"h-5 w-5",size:"24",weight:"bold"})]),(u(!0),c(R,null,z(n.listPages,(d,g)=>(u(),c(R,{key:g},[p("span",{onClick:()=>n.setPage(d),class:S(["paginate-btn relative inline-flex items-center justify-center w-12 py-2 border border-gray-700 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300",d===n.page?"bg-gray-200 active dark:text-gray-900":""])},j(d),11,Hl),n.showDot(g)?(u(),c("span",Wl,"...")):w("",!0)],64))),128)),p("span",{onClick:t[1]||(t[1]=()=>n.page<n.pageCount&&n.setPage(n.page+1)),class:"paginate-btn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[Gl,C(l,{type:"chevron-right",class:"h-5 w-5",size:"24",weight:"bold"})])]),o.showPageSize?(u(),c("div",ql,[p("div",Yl,[p("div",{class:"flex items-center p-1.5 h-full cursor-pointer border border-gray-700 rounded-md overflow-hidden shadow-inner flex focus-within:outline-none focus-within:ring shadow-outline h-8",onClick:t[2]||(t[2]=(...d)=>n.toggleDropdown&&n.toggleDropdown(...d))},[p("div",{class:S(["bg-transparent w-full h-full text-current outline-none flex items-center",[e.$slots.prefix||"pl-2"]])},[p("div",Kl,j(n.pageSize),1)],2),p("div",{class:S(["h-full flex-shrink-0 flex items-center pr-2 text-gray-400",["pl-2"]])},[C(i,{size:18,class:S(["transition-transform duration-200",{"transform rotate-180":n.isOpen}])},null,8,["class"])])]),n.isOpen?(u(),c("ul",Xl,[(u(),c(R,null,z([10,25,50],d=>p("li",{class:S(["px-4 py-1.5 cursor-pointer hover:bg-gray-500 transition-colors duration-200 flex justify-center items-center hover:text-white",n.pageSize===d?"bg-gray-500 text-white ":""]),key:d,onClick:g=>n.selectItem(d)},[p("span",null,j(d),1)],10,Jl)),64))])):w("",!0)],512)])):w("",!0)])}var _t=P(zn,[["render",Ql],["__scopeId","data-v-9bb7331c"]]);zn.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pageSize",type:{name:"number"}},{name:"totalCount",type:{name:"number"}},{name:"page",type:{name:"number"}},{name:"showPageSize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:page"},{name:"update:pageSize"}]};const Hn={components:{Button:ae,Pagination:_t},props:{config:Object},emits:["patch-records"],setup(e,{emit:t}){const{isDirty:o,updatedRecords:n,pageSize:s,totalCount:r,page:a}=he(bt),l=he(Xe),i=()=>{l("updatedRecords",{}),l("isDirty",!1)};return{isDirty:o,updatedRecords:n,patchRecords:()=>{t("patch-records",Object.values(n.value)),i()},pageSize:s,totalCount:r,page:a,setPage:k=>l("page",k),selectPageSize:k=>{k!==s.value&&(s.value=k,l("pageSize",k))}}}},Zl={class:"sticky bottom-4 opacity-40 hover:opacity-100 sm:opacity-100 sm:flex"},ei={class:"flex items-start ml-auto mt-4 w-full"},ti=ye(" Update "),ni={class:"group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-gray-500 text-gray-200"};function oi(e,t,o,n,s,r){const a=_("pagination"),l=_("Button");return u(),c("div",Zl,[p("div",ei,[C(a,{"total-count":n.totalCount,page:n.page,"page-size":n.pageSize,"onUpdate:page":n.setPage,"onUpdate:pageSize":n.selectPageSize},null,8,["total-count","page","page-size","onUpdate:page","onUpdate:pageSize"]),n.isDirty&&(!o.config.hideUpdateButton||o.config.hideUpdateButton===!1)?(u(),E(l,{key:0,type:"button",onClick:n.patchRecords,class:"ml-auto inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:q(()=>[ti,p("span",ni,j(Object.keys(n.updatedRecords).length),1)]),_:1},8,["onClick"])):w("",!0)])])}var ai=P(Hn,[["render",oi]]);Hn.__docgenInfo={exportName:"default",displayName:"DataTableFooter",description:"",tags:{},props:[{name:"config",type:{name:"object"}}],events:[{name:"patch-records"}]};var ri=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],Be=M({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:o}){const{open:n,appendTo:s}=N(e),r=m();let a;const l=m(!1),i={strategy:"absolute",placement:"bottom-start",modifiers:[...ri,...e.modifiers]};function d(){a==null||a.destroy(),l.value=!1}async function g(v){if(!v)return;const b=Object.assign({},i,e.options);!r.value||(a=Ba(v,r.value,b),await a.update())}Ie(()=>{d()});async function f(){await g(s.value),r.value&&(a==null||a.update(),Et.fromTo(r.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function k(){r.value&&Et.fromTo(r.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{d()})}return J(()=>{if(!o.default)throw new Error("Popper does not have a child slot");ne(n,v=>{l.value=!0,ie(async()=>{v?f():k()})})}),{appendTo:s,root:r,render:l}},render(){if(this.render)return xe("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const Wn=M({name:"RobustDatePicker",components:{RobustPopper:Be,RobustCalendar:Ke,RobustInputWrapper:ke,PhCaretDown:Re,PhCalendar:dn},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const n=m(),{modelValue:s}=N(e),r=m(!1),a=m(),l=m();Ee(a,f=>{r.value&&(l.value.wrapperRef.contains(f.target)&&(f.stopPropagation(),f.preventDefault()),g(),t("blur"))});const i=D({get(){return(s==null?void 0:s.value)?s.value:new Date},set(f){r.value=!1,t("update:modelValue",f),t("change",f),t("blur")}}),d=D(()=>{if(!i.value)return"Select date";const f=i.value;try{return f?fe(f,"P"):"Unknown"}catch{return}});function g(){r.value===!0&&(r.value=!1,t("blur"))}return{attrs:o,refSelectContainer:n,open:r,props:e,displayDate:d,computedValue:i,closeDropdown:g,popperRef:a,inputWrapperRef:l}},methods:{}}),si=["id"],li={class:"min-w-0 truncate tabular-nums"};function ii(e,t,o,n,s,r){var f,k;const a=_("PhCalendar"),l=_("PhCaretDown"),i=_("RobustInputWrapper"),d=_("RobustCalendar"),g=_("RobustPopper");return u(),c(R,null,[C(i,{title:e.title,hint:e.hint,error:e.error,class:S([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ge(v=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:q(v=>[p("div",{class:S(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[C(a,{size:"20"})],2),p("div",de({id:v.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[p("div",li,j(e.displayDate),1)],16,si),p("div",{class:S(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[C(l,{size:14,weight:"bold",class:S(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((f=e.inputWrapperRef)==null?void 0:f.wrapperRef)?(u(),E(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(k=e.inputWrapperRef)==null?void 0:k.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=v=>e.open=v),options:{placement:"bottom-start"}},{default:q(()=>[C(d,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=v=>e.computedValue=v)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):w("",!0)],64)}var Oe=P(Wn,[["render",ii]]);Wn.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Gn=M({name:"RobustSelect",components:{RobustPopper:Be,RobustInputWrapper:ke,PhCheck:dt,PhCaretDown:Re},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:o}){const n=m(),s=m(),{options:r}=N(e),a=m(!1),l=m(),i=m(),d=m("");let g=m([]);async function f($){e.searchFunction!==void 0&&(g.value=await e.searchFunction($)),$===""?g.value=r.value:g.value=r.value.filter(Y=>Y.title.toLowerCase().substring(0,$.length)===$.toLowerCase())}Pa(d,async $=>{await f($)},{debounce:150}),J(async()=>{await f("")});const k=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:$=>{$.state.styles.popper.width=`${Math.max($.state.rects.reference.width,200)}px`},effect:$=>{$.state.elements.popper.style.width=`${$.state.elements.reference.getBoundingClientRect().width}px`}}],v=D(()=>e.options.find($=>$.value===e.modelValue));function b($){ie(()=>{h()}),t("update:modelValue",$.value),t("change",$.value)}function y(){a.value=!0,ie(()=>{s.value.focus()}),t("focus")}Ee(l,$=>{a.value&&(i.value.wrapperRef.contains($.target)&&($.stopPropagation(),$.preventDefault()),I(),h(),t("blur"))});function h(){a.value=!1}function I(){d.value=""}return{refSelectInput:s,refSelectContainer:n,closeDropdown:h,open:a,props:e,openDropdown:y,inputWrapper:i,popperModifiers:k,activeItem:v,selectItem:b,computedOptions:g,resetFields:I,attrs:o,search:d,popperRef:l}}}),ui=["id"],di={class:"min-w-0 select-none truncate"},ci={key:0,class:"max-h-72 overflow-auto"},pi=["onClick"],mi={key:1,class:"py-2 text-center text-gray-400"};function fi(e,t,o,n,s,r){var g,f;const a=_("PhCaretDown"),l=_("RobustInputWrapper"),i=_("PhCheck"),d=_("RobustPopper");return u(),c(R,null,[C(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:S([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:q(k=>[e.$slots.prefix?(u(),c("div",{key:0,class:S(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[F(e.$slots,"prefix",{tag:"div"})],2)):w("",!0),ue(p("div",de({id:k.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[p("div",di,j(e.activeItem?e.activeItem.title:"Select"),1)],16,ui),[[at,!e.open]]),ue(p("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=v=>e.search=v),size:"1",class:S(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[at,e.open],[ct,e.search]]),p("div",{class:S(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[C(a,{size:14,weight:"bold",class:S(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((g=e.inputWrapper)==null?void 0:g.wrapperRef)?(u(),E(d,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=k=>e.open=k),ref:"popperRef",class:"z-[100] origin-top","append-to":(f=e.inputWrapper)==null?void 0:f.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:q(()=>[e.computedOptions.length>0?(u(),c("ul",ci,[(u(!0),c(R,null,z(e.computedOptions,k=>(u(),c("li",{key:k.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:v=>e.selectItem(k)},[p("span",null,j(k.title),1),e.modelValue===k.value?(u(),E(i,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):w("",!0)],8,pi))),128))])):(u(),c("div",mi,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):w("",!0)],64)}var Je=P(Gn,[["render",fi]]);Gn.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const qn={components:{DatePicker:Oe,Select:Je,Input:$e,Checkbox:Ve},props:{modelValue:{type:[String,Number]},type:{type:String},options:{type:Array},isInlineEditMode:{type:Boolean}},emits:["update:modelValue","click","change"],setup(e,{emit:t}){const{modelValue:o}=N(e);return{cell:D({get:()=>o.value,set:s=>{t("update:modelValue",s),t("change")}})}}},gi={key:0,class:"flex w-full items-center"},yi={key:1,class:"flex items-center class w-full truncate"};function bi(e,t,o,n,s,r){const a=_("Input"),l=_("Checkbox"),i=_("DatePicker"),d=_("Select");return u(),c("div",{class:S(["flex px-4 py-2 text-center whitespace-nowrap text-sm font-medium",o.isInlineEditMode?"h-12 sm:h-auto":"h-10 sm:h-auto"]),onClick:t[4]||(t[4]=g=>e.$emit("click"))},[o.isInlineEditMode?(u(),c("div",gi,[F(e.$slots,"leftIcon"),o.type==="text"||o.type==="number"?(u(),E(a,{key:0,type:"{{type}}",modelValue:n.cell,"onUpdate:modelValue":t[0]||(t[0]=g=>n.cell=g),class:"bg-transparent truncate"},null,8,["modelValue"])):w("",!0),o.type==="checkbox"?(u(),E(l,{key:1,class:"bg-transparent truncate",modelValue:n.cell,"onUpdate:modelValue":t[1]||(t[1]=g=>n.cell=g)},null,8,["modelValue"])):w("",!0),o.type==="date"?(u(),E(i,{key:2,class:"p-2 col-span-2 sm:col-span-1","model-value":new Date(n.cell),"onUpdate:modelValue":t[2]||(t[2]=g=>n.cell=g)},null,8,["model-value"])):w("",!0),o.type==="enum"?(u(),E(d,{key:3,class:"bg-transparent truncate rounded",modelValue:n.cell,"onUpdate:modelValue":t[3]||(t[3]=g=>n.cell=g),options:o.options},null,8,["modelValue","options"])):w("",!0)])):w("",!0),o.isInlineEditMode?w("",!0):(u(),c("div",yi,[p("span",null,j(n.cell),1)]))],2)}var Yn=P(qn,[["render",bi]]);qn.__docgenInfo={exportName:"default",displayName:"DataTableCell",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"type",type:{name:"string"}},{name:"options",type:{name:"array"}},{name:"isInlineEditMode",type:{name:"boolean"}}],events:[{name:"click"},{name:"update:modelValue"},{name:"change"}],slots:[{name:"leftIcon"}]};const Kn={components:{DataTableCell:Yn,Button:ae},props:{modelValue:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},isGrouped:{type:Boolean,default:!1},isInlineEditMode:{type:Boolean},actionComponent:{type:Object},hasActionColumn:{type:Boolean,default:!1}},emits:["update:modelValue","click","edit"],setup(e){const{modelValue:t}=N(e),o=he(vt);return{record:t,changeHandler:()=>{o(t.value)}}}},vi=p("div",{class:"block sm:hidden data-table-header border-bottom-2 flex items-center justify-center text-center whitespace-nowrap px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-200 dark:bg-gray-500"},"Value",-1),hi={key:1},_i={key:0,class:"flex items-center justify-center px-4 py-2 text-center whitespace-nowrap text-xs font-medium"};function ki(e,t,o,n,s,r){const a=_("data-table-cell"),l=_("ph-pencil"),i=_("Button");return u(),c(R,null,[vi,o.isGrouped?(u(),E(a,{key:-1,class:"hidden sm:grid"})):w("",!0),(u(!0),c(R,null,z(o.columns.slice(o.isGrouped?1:0),d=>F(e.$slots,d.key,{key:d.key,row:n.record,value:n.record[d.key],column:d.key},()=>[C(a,{type:d.type,column:d.key,options:d.options,"is-inline-edit-mode":o.isInlineEditMode,class:S(d.fnClassRule?d.fnClassRule(n.record[d.key],n.record):null),onClick:t[0]||(t[0]=g=>e.$emit("click")),onChange:n.changeHandler,modelValue:n.record[d.key],"onUpdate:modelValue":g=>n.record[d.key]=g},null,8,["type","column","options","is-inline-edit-mode","class","onChange","modelValue","onUpdate:modelValue"])])),128)),o.hasActionColumn?(u(),c("div",hi,[o.isInlineEditMode?w("",!0):(u(),c("div",_i,[o.actionComponent?(u(),E(Ge(o.actionComponent),{key:0,record:n.record,onReload:t[1]||(t[1]=d=>e.$emit("reload")),onAction:t[2]||(t[2]=d=>e.$emit("action",d))},null,8,["record"])):(u(),E(i,{key:1,onClick:t[3]||(t[3]=d=>e.$emit("edit")),class:"p-1.5 rounded bg-blue-500 text-gray-100"},{default:q(()=>[C(l,{size:15})]),_:1}))]))])):w("",!0)],64)}var wi=P(Kn,[["render",ki]]);Kn.__docgenInfo={exportName:"default",displayName:"DataTableRecord",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"isGrouped",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInlineEditMode",type:{name:"boolean"}},{name:"actionComponent",type:{name:"object"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"reload"},{name:"action"},{name:"edit"},{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"},{name:"column",title:"binding"}]}]};const Xn={components:{DataTableCell:Yn,PhPlus:ln,PhMinus:un},props:{modelValue:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},totalCount:{type:Number,default:2},collapsed:{type:Boolean,default:!1}},emits:["update:modelValue","toggle"],setup(e,{emit:t}){const{modelValue:o}=N(e),n=D({get:()=>o.value,set:r=>t("update:modelValue",r)});return{record:n,toggleGroup:()=>{t("toggle",n.value.group)}}}};function Di(e,t,o,n,s,r){const a=_("ph-plus"),l=_("ph-minus"),i=_("data-table-cell");return u(),c(R,null,[C(i,{key:"role","model-value":n.record.group,class:"bg-gray-700 py-3 hidden sm:grid cursor-pointer border-b-2",onClick:n.toggleGroup},{leftIcon:q(()=>[o.collapsed?(u(),E(a,{key:0,size:"16px",class:"mr-2 text-white"})):(u(),E(l,{key:1,size:"16px",class:"mr-2 text-white"}))]),_:1},8,["model-value","onClick"]),C(i,{key:"count","model-value":`Count: ${n.record.count}`,class:"bg-gray-700 py-3 cursor-pointer border-b-2",onClick:n.toggleGroup},null,8,["model-value","onClick"]),(u(!0),c(R,null,z(Array(o.totalCount-2).keys(),d=>(u(),E(i,{key:`empty-${d}`,"model-value":" ",class:"bg-gray-700 hidden sm:grid cursor-pointer border-b-2",onClick:n.toggleGroup},null,8,["onClick"]))),128))],64)}var Ci=P(Xn,[["render",Di]]);Xn.__docgenInfo={exportName:"default",displayName:"DataTableGroupRecord",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"collapsed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"toggle"}]};const Jn=M({name:"RobustModal",inheritAttrs:!1,components:{PhX:Ia},props:{modalClass:{type:String},opened:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:o}=N(e);let n=Ra(document.body);ne(o,l=>{l?n.value=!0:n.value=!1});function s(l){l.key==="Escape"&&o.value===!0&&(l.stopPropagation(),l.preventDefault(),a())}J(()=>{window.addEventListener("keydown",s)}),Ie(()=>{window.removeEventListener("keydown",s)});async function r(){o.value=!0,t("update:opened",!0),t("open")}async function a(){o.value=!1,t("update:opened",!1),t("close")}return{open:r,close:a,opened:o}}}),Si={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},xi={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},Ti={class:"leading-4"};function $i(e,t,o,n,s,r){const a=_("PhX");return u(),E(ja,{to:"#modal-area"},[C(Ea,de(e.$attrs,{name:"slide"}),{default:q(()=>[e.opened?(u(),c("div",Si,[p("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75",onClick:t[0]||(t[0]=ge((...l)=>e.close&&e.close(...l),["self"]))}),p("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Te((...l)=>e.close&&e.close(...l),["esc"]))},[p("div",{class:S(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(u(),c("div",xi,[p("div",Ti,[F(e.$slots,"title",{},void 0,!0)]),p("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[C(a,{size:"20",class:"block"})])])):w("",!0),F(e.$slots,"default",{},void 0,!0)],2)],32)],512)):w("",!0)]),_:3},16)])}var kt=P(Jn,[["render",$i],["__scopeId","data-v-8b5e15d4"]]);Jn.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};const wt={components:{Record:wi,DataTableGroupRecord:Ci,DatePicker:Oe,Modal:kt,Select:Je,Button:ae,Input:$e,Checkbox:Ve},emits:["update:modelData","update:modelConfig","toggleGroup","clickRecord"],props:{columns:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})},config:Object,isInlineEditMode:{type:Boolean},hasActionColumn:{type:Boolean,default:!1},gridTemplateColumnsCss:String,actionComponent:{type:Object}},setup(e,{emit:t,slots:o}){const{data:n,columns:s,config:r,isInlineEditMode:a}=N(e),l=m(null),i=m(null),d=he(vt),g=D({get(){return n.value},set(y){t("update:modelData",y)}}),f=r.value.groupBy?D({get(){return[s.value.find(y=>y.key===r.value.groupBy),{title:"Count",key:"count",sortable:!0,editable:!0,hidden:!1,sortDirection:0}]}}):"";return me({$slots:o,bodyData:g,groupColumns:f,toggleGroup:y=>{t("toggleGroup",y)},modalRef:l,openRecordEditModal:y=>{a.value||(i.value=g.value[y],l.value.open())},selectedRecord:i,updateSelectedRecord:()=>{d(i.value),l.value.close()}},pt({size:s.value.length}))}},Wt=()=>{ut(e=>({"1991ca01":e.size}))},Gt=wt.setup;wt.setup=Gt?(e,t)=>(Wt(),Gt(e,t)):Wt;const Qn=wt,Vi={class:"px-6 pt-8 pb-4 grid grid-cols-2"},Bi={class:"flex items-center min-w-[5.6rem]"},Pi={class:"flex w-full overflow-hidden"},Ii={class:"p-4 pt-0 flex justify-end"},Ri=ye("Save"),Ei=ye("Cancel");function ji(e,t,o,n,s,r){const a=_("data-table-group-record"),l=_("Record"),i=_("Input"),d=_("Checkbox"),g=_("DatePicker"),f=_("Select"),k=_("Button"),v=_("Modal");return u(),c(R,null,[p("div",{class:"data-table-body block sm:grid col-span-1",style:Z({"grid-template-columns":o.gridTemplateColumnsCss})},[o.config.groupBy?(u(!0),c(R,{key:0},z(n.bodyData,(b,y)=>(u(),c(R,{key:y},[C(a,{"model-value":{group:y,count:b.children.length},columns:n.groupColumns,"total-count":o.columns.length,collapsed:o.config.collapsed&&o.config.collapsed[y],onToggle:n.toggleGroup},null,8,["model-value","columns","total-count","collapsed","onToggle"]),o.config.collapsed&&o.config.collapsed[y]?w("",!0):(u(!0),c(R,{key:0},z(n.bodyData[y].children,(h,I)=>(u(),E(l,{modelValue:n.bodyData[y].children[I],"onUpdate:modelValue":$=>n.bodyData[y].children[I]=$,columns:o.columns,key:h.id,"is-grouped":""},null,8,["modelValue","onUpdate:modelValue","columns"]))),128))],64))),128)):(u(!0),c(R,{key:1},z(n.bodyData,(b,y)=>(u(),E(l,{key:y,onEdit:h=>n.openRecordEditModal(y),onClick:h=>e.$emit("clickRecord",n.bodyData[y]),modelValue:n.bodyData[y],"onUpdate:modelValue":h=>n.bodyData[y]=h,columns:o.columns,"is-inline-edit-mode":o.isInlineEditMode,"action-component":o.actionComponent,"has-action-column":o.hasActionColumn,onReload:t[0]||(t[0]=h=>e.$emit("reload")),onAction:t[1]||(t[1]=h=>e.$emit("action",h))},mt({_:2},[z(n.$slots,(h,I)=>({name:I,fn:q($=>[F(e.$slots,I,ft(gt($||{})),void 0,!0)])}))]),1032,["onEdit","onClick","modelValue","onUpdate:modelValue","columns","is-inline-edit-mode","action-component","has-action-column"]))),128))],4),C(v,{name:"update-field",ref:"modalRef"},{default:q(()=>[p("div",Vi,[(u(!0),c(R,null,z(o.columns,b=>(u(),c("div",{key:b.key,class:"flex items-center mx-2 my-4"},[p("span",Bi,j(b.title)+":",1),p("div",Pi,[F(e.$slots,"leftIcon",{},void 0,!0),b.type==="text"||b.type==="number"?(u(),E(i,{key:0,type:b.type,class:"bg-transparent truncate",modelValue:n.selectedRecord[b.key],"onUpdate:modelValue":y=>n.selectedRecord[b.key]=y},null,8,["type","modelValue","onUpdate:modelValue"])):w("",!0),b.type==="checkbox"?(u(),E(d,{key:1,type:"checkbox",class:"bg-transparent truncate",modelValue:n.selectedRecord[b.key],"onUpdate:modelValue":y=>n.selectedRecord[b.key]=y},null,8,["modelValue","onUpdate:modelValue"])):w("",!0),b.type==="date"?(u(),E(g,{key:2,class:"bg-transparent truncate",modelValue:new Date(n.selectedRecord[b.key]),"onUpdate:modelValue":y=>n.selectedRecord[b.key]=y},null,8,["modelValue","onUpdate:modelValue"])):w("",!0),b.type==="enum"?(u(),E(f,{key:3,class:"bg-transparent truncate rounded",options:b.options,modelValue:n.selectedRecord[b.key],"onUpdate:modelValue":y=>n.selectedRecord[b.key]=y},null,8,["options","modelValue","onUpdate:modelValue"])):w("",!0)])]))),128))]),p("div",Ii,[C(k,{onClick:n.updateSelectedRecord},{default:q(()=>[Ri]),_:1},8,["onClick"]),C(k,{onClick:n.modalRef.close,class:"ml-2 bg-gray-400 hover:bg-gray-500"},{default:q(()=>[Ei]),_:1},8,["onClick"])])]),_:3},512)],64)}var Mi=P(Qn,[["render",ji],["__scopeId","data-v-1394885b"]]);Qn.__docgenInfo={exportName:"default",displayName:"DataTableBody",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"data",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"}},{name:"isInlineEditMode",type:{name:"boolean"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gridTemplateColumnsCss",type:{name:"string"}},{name:"actionComponent",type:{name:"object"}}],events:[{name:"clickRecord"},{name:"reload"},{name:"action"},{name:"update:modelData"},{name:"update:modelConfig"},{name:"toggleGroup"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"leftIcon"}]};const Zn={components:{PhCheck:dt,PhCaretDown:Re},props:{columns:{type:Array,default:()=>[]},config:Object},emits:["toggleColumn"],setup(e,{emit:t}){const o=m(),n=m(null),s=()=>{o.value=!o.value},r=l=>{o.value&&!n.value.contains(l.target)&&(o.value=!1)},a=l=>{t("toggleColumn",l)};return J(()=>{document.addEventListener("click",r)}),Ie(()=>{document.removeEventListener("click",r)}),{isOpen:o,toggleDropdown:s,containerRef:n,selectItem:a}}},Li={key:0,class:"inline-block relative",ref:"containerRef"},Oi=p("div",{class:"truncate min-w-0 select-none text-gray-700 dark:text-gray-50"},"Columns",-1),Fi=[Oi],Ai={key:0,class:"absolute right-0 z-50 bg-white dark:bg-gray-700 shadow-2xl rounded-lg py-4 text-gray-700 dark:text-gray-50"},Ni=["onClick"],zi={class:"text-[0.9rem]"};function Ui(e,t,o,n,s,r){const a=_("ph-caret-down"),l=_("ph-check");return!o.config.hideKeys||o.config.hideKeys!==!0?(u(),c("div",Li,[p("div",{class:"flex bg-gray-200 dark:bg-gray-700 cursor-pointer rounded overflow-hidden flex focus-within:outline-none focus-within:ring shadow-outline h-8",onClick:t[0]||(t[0]=(...i)=>n.toggleDropdown&&n.toggleDropdown(...i))},[p("div",{class:S(["bg-transparent w-full h-full text-current outline-none flex items-center",[e.$slots.prefix||"pl-2"]])},Fi,2),p("div",{class:S(["h-full flex-shrink-0 flex items-center pr-2 text-gray-400",["pl-2"]])},[C(a,{type:"chevron-down",size:18,class:S(["transition-transform duration-200",{"transform rotate-180":n.isOpen}])},null,8,["class"])])]),n.isOpen?(u(),c("ul",Ai,[(u(!0),c(R,null,z(o.columns,i=>(u(),c("li",{onClick:d=>n.selectItem(i.key),class:"px-4 py-2 w-32 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-100 transition-colors duration-200 flex items-center",key:i.key},[C(l,{class:S(["text-gray-400 mr-1",i.hidden?"opacity-0":""]),size:"18"},null,8,["class"]),p("span",zi,j(i.title),1)],8,Ni))),128))])):w("",!0)],512)):w("",!0)}var Hi=P(Zn,[["render",Ui]]);Zn.__docgenInfo={exportName:"default",displayName:"DataTableSettings",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"config",type:{name:"object"}}],events:[{name:"toggleColumn"}]};const eo={components:{PhMagnifyingGlass:Ma,Input:$e},emits:["search-submit"],setup(e,{emit:t}){const o=m(""),n=he(Xe);return ne(o,s=>{n("keyword",s)}),{keyword:o,submitSearch(){t("search-submit",o.value)}}}},Wi={class:"flex-1 flex justify-end"};function Gi(e,t,o,n,s,r){const a=_("ph-magnifying-glass"),l=_("Input");return u(),c("div",Wi,[C(l,{modelValue:n.keyword,"onUpdate:modelValue":t[0]||(t[0]=i=>n.keyword=i),placeholder:"search...",onKeyup:Te(n.submitSearch,["enter"])},{prefix:q(()=>[C(a,{class:"text-gray-500 dark:text-gray-50",size:"18"})]),_:1},8,["modelValue","onKeyup"])])}var qi=P(eo,[["render",Gi]]);eo.__docgenInfo={exportName:"default",displayName:"DataSearchBox",description:"",tags:{},events:[{name:"search-submit"}]};const Yi=function(e,t){return e.reduce(function(o,n){return(o[n[t]]=o[n[t]]||{children:[],collapsed:!1}).children.push(n),o},{})};function Ki(e,t,o){const n=D({get(){return o.value?Yi(e.value,o.value):e.value}}),s=D({get(){if(!o.value)return t.value;const r=t.value.findIndex(i=>i.key===o.value);let a=[...t.value];return a=[a.splice(r,1)[0],...a],a}});return{groupedData:n,groupedColumn:s}}const to={components:{DataTableSettings:Hi,DataSearchBox:qi,TableHeader:Al,TableFooter:ai,TableBody:Mi,Spinner:Me},emits:["patch-records","page","search","record-click","search-submit"],data(){return{isInlineEditModeTabs:[{title:"Enable",value:"true"},{title:"Disable",value:"false"}],fieldTypes:[{title:"Text",value:"text"},{title:"Number",value:"number"},{title:"Enum",value:"enum"},{title:"Date",value:"date"}]}},props:{columns:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},isTurnOnInlineMode:{type:Boolean,default:!1},isShowInlineTab:{type:Boolean,default:!1},actionComponent:{type:Object},isLoading:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t,slots:o}){const{columns:n,modelValue:s,config:r,totalCount:a,isTurnOnInlineMode:l,hasActionColumn:i}=N(e),d=he(Xe),{pageSize:g,page:f,keyword:k}=he(bt),v=m("true");l.value||(v.value="false");let b=g.value;const y=m(n.value),h=m(y.value.filter(L=>!L.hidden)),I=()=>{let L="",X=0;for(const se of h.value)X+=se.width;const re=v.value==="false"&&h.value.length&&i.value?100/h.value.length:0;for(const se of h.value)L+=se.width*(100-re)/X+"% ";return re!==0&&(L+=re+"%"),L},$=m(I()),Y=L=>d("totalCount",L);ne(a,()=>Y(a.value)),J(()=>{Y(a.value)}),ne([g,f],()=>{let L=g.value*(f.value-1);const X=g.value;b!==g.value&&f.value!==1?(L=0,d("page",1)):b=g.value,t("page",{offset:L,limit:X})}),ne(k,L=>{t("search",L)});const{groupedData:ee,groupedColumn:K}=Ki(s,h,m(r.value.groupBy)),W=m(r.value),G=L=>{W.value.collapsed===void 0?W.value=Ce(me({},W.value),{collapsed:{[L]:!0}}):W.value.collapsed[L]===void 0?W.value.collapsed=Ce(me({},W.value.collapsed),{[L]:!0}):W.value.collapsed=Ce(me({},W.value.collapsed),{[L]:!W.value.collapsed[L]})},te=D({get(){return Ce(me({},W.value),{size:K.value.length})}}),ce=L=>{y.value=y.value.map(X=>(X.key===L&&(X.hidden=!X.hidden),X)),h.value=y.value.filter(X=>!X.hidden)};return ne([h,v],()=>{$.value=I()}),{$slots:o,columnData:K,bodyData:ee,toggleGroup:G,tableConfig:te,allColumns:y,filteredColumns:h,toggleColumn:ce,isInlineEditMode:v,gridTemplateColumnsCss:$,recordClickHandler:L=>{v.value==="false"&&t("record-click",L)}}}},Xi=e=>(qe("data-v-74697ac6"),e=e(),Ye(),e),Ji={class:"flex flex-wrap mb-1.5 items-center justify-between"},Qi={key:0,class:"flex items-start mr-4 my-2"},Zi=Xi(()=>p("label",{class:"mr-1 whitespace-nowrap"},"Inline edit:",-1)),eu={class:"flex justify-end"},tu={key:0,class:"loading min-h-[400px]"},nu={class:"relative w-full h-full flex items-center justify-center text-white"};function ou(e,t,o,n,s,r){const a=_("base-tab-switch"),l=_("data-search-box"),i=_("data-table-settings"),d=_("table-header"),g=_("table-body"),f=_("table-footer"),k=_("Spinner");return u(),c("div",null,[p("div",Ji,[o.isTurnOnInlineMode&&o.isShowInlineTab?(u(),c("div",Qi,[Zi,C(a,{modelValue:n.isInlineEditMode,"onUpdate:modelValue":t[0]||(t[0]=v=>n.isInlineEditMode=v),tabs:s.isInlineEditModeTabs},null,8,["modelValue","tabs"])])):w("",!0),!n.tableConfig.hideSearch||n.tableConfig.hideSearch===!1?(u(),E(l,{key:1,class:"mr-2",onSearchSubmit:t[1]||(t[1]=v=>e.$emit("search-submit",v))})):w("",!0),p("div",eu,[C(i,{columns:n.allColumns,config:n.tableConfig,"active-column":n.filteredColumns,onToggleColumn:n.toggleColumn},null,8,["columns","config","active-column","onToggleColumn"])])]),(u(),c("div",{key:n.columnData.length,class:"grid sm:block grid-cols-2 border border-gray-700"},[C(d,{modelValue:n.columnData,"onUpdate:modelValue":t[2]||(t[2]=v=>n.columnData=v),data:n.bodyData,config:n.tableConfig,"grid-template-columns-css":n.gridTemplateColumnsCss,"is-inline-edit-mode":n.isInlineEditMode==="true","has-action-column":o.hasActionColumn},null,8,["modelValue","data","config","grid-template-columns-css","is-inline-edit-mode","has-action-column"]),C(g,{columns:n.columnData,"is-inline-edit-mode":n.isInlineEditMode==="true",data:n.bodyData,"onUpdate:data":t[3]||(t[3]=v=>n.bodyData=v),config:n.tableConfig,"onUpdate:config":t[4]||(t[4]=v=>n.tableConfig=v),onToggleGroup:n.toggleGroup,onClickRecord:n.recordClickHandler,"grid-template-columns-css":n.gridTemplateColumnsCss,"action-component":o.actionComponent,"has-action-column":o.hasActionColumn,onReload:t[5]||(t[5]=v=>e.$emit("reload")),onAction:t[6]||(t[6]=v=>e.$emit("action",v))},mt({_:2},[z(n.$slots,(v,b)=>({name:b,fn:q(y=>[F(e.$slots,b,ft(gt(y||{})),void 0,!0)])}))]),1032,["columns","is-inline-edit-mode","data","config","onToggleGroup","onClickRecord","grid-template-columns-css","action-component","has-action-column"])])),C(f,{config:n.tableConfig,onPatchRecords:t[7]||(t[7]=v=>e.$emit("patch-records",v))},null,8,["config"]),o.isLoading?(u(),c("div",tu,[p("div",nu,[C(k,{size:100})])])):w("",!0)])}var au=P(to,[["render",ou],["__scopeId","data-v-74697ac6"]]);to.__docgenInfo={exportName:"default",displayName:"DataTable",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"isTurnOnInlineMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isShowInlineTab",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actionComponent",type:{name:"object"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"search-submit"},{name:"reload"},{name:"action"},{name:"patch-records"},{name:"page"},{name:"search"},{name:"record-click"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const no={components:{ProvideDataTableSettings:_l,DataTable:au},emits:["page","update:modelValue","patch-records","record-click","search-submit"],props:{columns:{type:Array,default:()=>[]},config:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},modelValue:{type:Object,default:()=>({})},isTurnOnInlineMode:{type:Boolean,default:!1},isShowInlineTab:{type:Boolean,default:!1},actionComponent:{type:Object},isLoading:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t,slots:o}){const{modelValue:n}=N(e),s=D(()=>e.columns.value.map(i=>i.key)),r=D({get(){return n.value},set(i){t("update:modelValue",i)}});return{page:i=>t("page",i),search:i=>t("search",i),bodyData:r,slotNames:s,$slots:o}}};function ru(e,t,o,n,s,r){const a=_("data-table"),l=_("provide-data-table-settings");return u(),E(l,null,{default:q(()=>[C(a,de(e.$props,{onPage:n.page,onSearch:n.search,modelValue:n.bodyData,"onUpdate:modelValue":t[0]||(t[0]=i=>n.bodyData=i),class:"relative","total-count":o.totalCount,"is-loading":o.isLoading,"has-action-column":o.hasActionColumn,"is-turn-on-inline-mode":o.isTurnOnInlineMode,"is-show-inline-tab":o.isShowInlineTab,onPatchRecords:t[1]||(t[1]=i=>e.$emit("patch-records",i)),onRecordClick:t[2]||(t[2]=i=>e.$emit("record-click",i)),onReload:t[3]||(t[3]=i=>e.$emit("reload")),onAction:t[4]||(t[4]=i=>e.$emit("action",i)),onSearchSubmit:t[5]||(t[5]=i=>e.$emit("search-submit",i))}),mt({_:2},[z(n.$slots,(i,d)=>({name:d,fn:q(g=>[F(e.$slots,d,ft(gt(g||{})))])}))]),1040,["onPage","onSearch","modelValue","total-count","is-loading","has-action-column","is-turn-on-inline-mode","is-show-inline-tab"])]),_:3})}var oo=P(no,[["render",ru]]);no.__docgenInfo={exportName:"default",displayName:"DataTableContainer",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"config",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"isTurnOnInlineMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isShowInlineTab",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actionComponent",type:{name:"object"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"patch-records"},{name:"record-click"},{name:"reload"},{name:"action"},{name:"search-submit"},{name:"page"},{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};var su={title:"Ui/DataTable",component:oo,parameters:{storySource:{source:`import { ref } from 'vue'
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
    title: 'Bool',
    key: 'bool',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'checkbox',
    width: 30,
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
      {
        title: 'EU',
        value: 'EU',
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
    bool: true,
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
    bool: true,
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
    bool: false,
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
`,locationsMap:{default:{startLoc:{col:24,line:162},endLoc:{col:2,line:224},startBody:{col:24,line:162},endBody:{col:2,line:224}}}},backgrounds:{default:"dark",values:[{name:"light",value:"#00aced"},{name:"dark",value:"#111827"}]}}};const lu=[{title:"Hotel",key:"name",sortable:!0,editable:!0,hidden:!1,type:"text",sortDirection:0,width:40},{title:"Bool",key:"bool",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"checkbox",width:30},{title:"City",key:"city",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Country",key:"country_name",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"enum",options:[{title:"DEU",value:"DEU"},{title:"EU",value:"EU"}],width:30},{title:"Chain",key:"chain_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Brand",key:"brand_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Contract",key:"contract_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"End Date",key:"enddate_contract_formatted",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"date",sort:(e,t)=>new Date(e)-new Date(t),width:40},{title:"Custom Render",key:"custom_render",width:40}],iu=[{id:"1d5b8be1-13ba-4b04-a76f-53105076f1e6",name:"Hartmann LLC",country:"DEU",city:"Lake Vivienneton",country_name:"Germany",chain_name:"Graham, Hilll and Sawayn",brand_name:"Megane",enddate_contract_formatted:"05/04/2022",contract_name:"Intelligent",bool:!0},{id:"1d6f17a9-0e4c-4839-8cab-0e2f59921a4b",name:"Adams LLC",country:"DEU",city:"South Charlotte",country_name:"Germany",chain_name:"Kautzer LLC",brand_name:"Clarabelle",enddate_contract_formatted:"06/04/2022",contract_name:"Clever",bool:!0},{id:"83be9c92-ed3a-4875-825c-8db64e0ca7b9",name:"Gorczany Inc",country:"DEU",city:"Konopelskiborough",country_name:"Germany",chain_name:"Gerhold - Kris",brand_name:"Andy",enddate_contract_formatted:"07/04/2022",contract_name:"Intelligent",bool:!1}],uu={totalCount:200,pageSize:25,page:1,updatedRecords:{},isDirty:!1},du=e=>({template:`
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
`,components:{DataTable:oo},setup(){const t=m(200),o=m(lu),n=m(iu),s=m(uu),r=m(!1),a=m(""),l=m({offset:0,limit:25});return{args:e,totalCount:t,tableColumns:o,tableConfig:s,tableData:n,isLoading:r,setPaginationParams:f=>{l.value=f},setKeyword:f=>{a.value=f},handleClickRecord:function(f){console.log(f)}}}}),ao=du.bind();ao.parameters={backgrounds:{default:"dark"}};const cu=["Default"];var pu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:su,Default:ao,__namedExportsOrder:cu}),mu={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:Oe,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const fu=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:Oe},setup(){return{args:e}}}),gu=new Date,qt=m(gu),ro=fu.bind({});ro.args={modelValue:qt,"onUpdate:modelValue":e=>{qt.value=e}};const yu=["Default"];var bu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mu,Default:ro,__namedExportsOrder:yu});const vu=M({props:{colors:{type:Array,default:["#FCA5A5","#EF4444","#FDBA74","#F97316","#FCD34D","#F59E0B","#FDE047","#EAB308","#BEF264","#84CC16","#86EFAC","#22C55E","#6EE7B7","#10B981","#5EEAD4","#14B8A6","#67E8F9","#06B6D4","#7DD3FC","#0EA5E9","#93C5FD","#3B82F6","#A5B4FC","#6366F1","#C4B5FD","#8B5CF6","#D8B4FE","#A855F7","#F0ABFC","#D946EF","#F9A8D4","#EC4899","#FDA4AF","#F43F5E"]}},setup(e,{emit:t}){return{selectedColor:n=>{t("change",n)}}}});vu.__docgenInfo={exportName:"default",displayName:"ColorPalette",description:"",tags:{},props:[{name:"colors",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}}]};const so=M({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),hu={class:"py-4 flex flex-col text-center items-center"},_u={class:"mb-4 text-gray-600 dark:text-gray-400"},ku={class:"text-xl text-gray-600 dark:text-gray-400 mb-2"},wu={class:"inline-block"};function Du(e,t,o,n,s,r){return u(),c("div",hu,[p("div",_u,[e.$slots.icon?F(e.$slots,"icon",{key:1}):(u(),E(Ge(e.icon),{key:0,size:"40"}))]),p("div",ku,j(e.title),1),p("div",{class:S(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},j(e.description),3),p("div",wu,[F(e.$slots,"default")])])}var Qe=P(so,[["render",Du]]);so.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};let A,rt,st,lt,_e;const it=(e,t,o=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,o):t.el.dispatchEvent(new CustomEvent(e,o))},Cu=(e,t)=>{if(t.parentNode===e.parentNode){for(let o=e.previousSibling;o;o=o.previousSibling)if(o===t)return!0}return!1},Yt=function(e,t){var o,n;if(it("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;A=this,rt=_e.handleClass&&A.querySelector(`.${_e.handleClass}`),st=Array.from((o=A==null?void 0:A.parentElement)==null?void 0:o.children).indexOf(A),(n=A==null?void 0:A.parentElement)==null||n.classList.add("drag")},Kt=function(e){var o;if(!A)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(n=>{var s;if(Array.from((s=A==null?void 0:A.parentElement)==null?void 0:s.children).indexOf(n)>=0)return n})),Array.from((o=A==null?void 0:A.parentElement)==null?void 0:o.children).indexOf(t)!==-1&&(A.classList.add(_e.placeholderClass),Cu(A,t)?t.parentNode.insertBefore(A,t):t.parentNode.insertBefore(A,t.nextSibling))},Xt=(e,t)=>{var s,r;if(!A)return;it("end",t,e),rt&&A.setAttribute("draggable","false"),A.classList.remove(_e.placeholderClass),(s=A==null?void 0:A.parentElement)==null||s.classList.remove("drag");const o=st,n=Array.from((r=A==null?void 0:A.parentElement)==null?void 0:r.children).indexOf(A);lt.splice(n,0,lt.splice(o,1)[0]),it("change",t,{from:o,to:n}),setTimeout(()=>{A=null,st=null,rt=null},0)},Jt=(e,t)=>{const o=_e.handleClass&&e.querySelector(`.${_e.handleClass}`);o?(o.onmousedown=n=>{e.setAttribute("draggable","true")},o.ontouchstart=n=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},o.onmouseup=n=>{e.setAttribute("draggable","false")},o.ontouchend=n=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=n=>{n.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=n=>Yt.bind(e,n,t)(),e.ondragenter=Kt,e.ondragend=n=>Xt.bind(e,n,t)(),e.ontouchstart=n=>Yt.bind(e,n,t)(),e.ontouchmove=Kt,e.ontouchend=n=>Xt.bind(e,n,t)()};var Su={mounted:(e,t,o)=>{let n=t.value.depth||0;for(;n;)e=e.firstElementChild,n--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}lt=t.value&&t.value.value,_e={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Jt(s,o)),e.addEventListener("DOMNodeInserted",function(s){A||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Jt(s.target,o)})}};const lo=M({name:"RobustDraggable",directives:{draggable:Su},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:o}=N(e),n=D({get:()=>o.value,set:s=>{t("update:modelValue",s)}});return ie(()=>{console.log("alo")}),{list:n}}});function xu(e,t,o,n,s,r){const a=La("draggable");return ue((u(),c("div",null,[(u(!0),c(R,null,z(e.list,l=>(u(),c("div",{key:l},[F(e.$slots,"element",{item:l})]))),128))])),[[a,{value:e.list}]])}var io=P(lo,[["render",xu]]);lo.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};const uo=M({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:o}=N(e),n=D(()=>{var s,r,a,l,i;return{"gs-id":(s=o.value)==null?void 0:s.id,"gs-x":(r=o.value)==null?void 0:r.gridstack.x,"gs-y":(a=o.value)==null?void 0:a.gridstack.y,"gs-w":(l=o.value)==null?void 0:l.gridstack.w,"gs-h":(i=o.value)==null?void 0:i.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:n}}}),Tu={class:"grid-stack-item-content bg-gray-300"};function $u(e,t,o,n,s,r){return u(),c("div",de({class:"grid-stack-item"},e.widgetAttributes),[p("div",Tu,[ye(j(e.widget.id)+" "+j(e.widget.gridstack)+" ",1),(u(),E(Ge(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var Vu=P(uo,[["render",$u],["__scopeId","data-v-7520d7ac"]]);uo.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const co=M({name:"RobustGrid",components:{GridItem:Vu},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:o}=N(e),n,s=m();return J(()=>{console.log("mounting"),n=Oa.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),n.on("change",(r,a)=>{!o.value||([...o.value],Array.isArray(a)&&o.value.forEach(l=>{let i=a.find(d=>d.id===l.id);i&&(l.gridstack=Ce(me({},l.gridstack),{x:i.x,y:i.y,w:i.w,h:i.h}))}),t("update:widgets",o))})}),{gridContainer:s}}}),Bu={ref:"gridContainer",class:"grid-stack bg-gray-200"};function Pu(e,t,o,n,s,r){const a=_("GridItem");return u(),c("div",null,[ye(j(e.locked)+" ",1),p("section",Bu,[(u(!0),c(R,null,z(e.widgets,l=>(u(),E(a,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var po=P(co,[["render",Pu],["__scopeId","data-v-dc6f9d18"]]);co.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Fe=M({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const o=m(!0),n=m(!1),s=new Image;return s.onload=()=>{t("loaded",!0),o.value=!1},s.onerror=r=>{t("error",r),n.value=!0,o.value=!1},J(()=>{s.src=e.src}),{error:n,loading:o}},render(){return this.loading?xe("div",{class:"flex items-center justify-center"},xe(Me,{size:24,stroke:2})):this.error?this.fallbackSrc?xe("img",{src:this.fallbackSrc}):xe(je,{size:20}):xe("img",{src:this.src})}});const mo=M({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:o}=N(e),n=D(()=>`height:${t.value}px`),s=D(()=>`width:clamp(${t.value}px, ${o.value}%, 100%);`);return{heightComputed:n,widthComputed:s}}});function Iu(e,t,o,n,s,r){return u(),c("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:Z([e.heightComputed])},[p("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:Z([e.widthComputed])},null,4)],4)}var fo=P(mo,[["render",Iu]]);mo.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Ru={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const go=M({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:D(()=>Ru[e.variant])}}});function Eu(e,t,o,n,s,r){return u(),c("div",{class:S([e.computedClass,"mb-4 border-l-4 p-4"])},[F(e.$slots,"default")],2)}var yo=P(go,[["render",Eu]]);go.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};let ju=0;const bo=M({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:o}){const n=(++ju).toString(),s=D({get(){return e.modelValue===e.value},set(){let r=e.modelValue;r=e.value,t("update:modelValue",r),t("change",r)}});return{cuid:n,isChecked:s,attrs:o}}}),Mu={class:"inline-block"},Lu=["id"],Ou=["for"],Fu={key:0,class:"w-full select-none leading-4"};function Au(e,t,o,n,s,r){return u(),c("div",Mu,[ue(p("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),type:"radio",class:"hidden"},null,8,Lu),[[Fa,e.isChecked]]),p("label",{for:`radio_${e.cuid}`,class:S([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[p("div",{class:S(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[p("div",{class:S([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(u(),c("div",Fu,j(e.title),1)):w("",!0),p("div",null,[e.$slots.title?F(e.$slots,"title",{key:0}):w("",!0)])],10,Ou)])}var vo=P(bo,[["render",Au]]);bo.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};const ho=M({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const o=m(e.modelValue),n=m(!1),s=m(!1),r=m(e.modelValue),a=m(),l=m(),i=m(),d=D(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":n.value},{"has-icon":g},{"has-marker":e.showMarker}]),g=D(()=>Boolean(e.icon)),f=D(()=>({transform:"scaleX("+De(r.value)+")"})),k=D(()=>({left:De(r.value)*100+"%"})),v=D(()=>e.markerValue===void 0?e.modelValue:e.markerValue),b=D(()=>{const x=[];let Q=e.step*Math.ceil(y()/e.step);for(;Q<=h();)x.push(Q),Q+=e.step;return x}),y=()=>e.max>e.min?e.min:0,h=()=>e.max>e.min?e.max:100,I=()=>{a.value.focus()},$=()=>{G(o)},Y=()=>{n.value=!0,t("focus")},ee=()=>{n.value=!1,t("blur")},K=x=>{a.value.contains(x.target)||ee()},W=x=>{x=ve(x),e.snapToSteps&&(x=Ae(x)),G(x)},G=x=>{x=ve(x),x!==r.value&&(r.value=x,t("update:modelValue",x),t("change",x))},te=()=>{W(r.value+e.step)},ce=()=>{W(r.value-e.step)},oe=()=>{let x=l.value,Q=x.offsetLeft;for(;x.offsetParent;)x=x.offsetParent,Q+=x.offsetLeft;return Q},L=x=>({left:x+"%"}),X=()=>{document.addEventListener("touchend",V),document.addEventListener("mouseup",V),document.addEventListener("click",K),document.addEventListener("touchstart",K),se()},re=()=>{document.removeEventListener("touchend",V),document.removeEventListener("mouseup",V),document.removeEventListener("click",K)},se=()=>{const x=ve(r.value?r.value:0);G(x)},we=x=>{e.disabled||(n.value||Y(),s.value=!0,U(x),document.addEventListener("touchmove",O),document.addEventListener("mousemove",O),t("dragstart",r.value,x))},O=x=>{U(x)},U=x=>{const Q=x.touches?x.touches[0].pageX:x.pageX,le=l.value.offsetWidth,Pe=(Q-oe())/le,Ze=ve(y()+Pe*(h()-y()));s.value&&G(Math.round(Ze))},V=x=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&W(e.modelValue),document.removeEventListener("touchmove",O),document.removeEventListener("mousemove",O),t("dragend",r.value,x))},Ae=x=>{const Q=Math.floor(x/e.step)*e.step,le=Q+e.step,Pe=(Q+le)/2;return Q<y()?le>h()?x:le:x>=Pe&&le<=h()?le:Q},De=x=>(x-y())/(h()-y()),ve=x=>x<y()?y():x>h()?h():x;return J(()=>{X()}),Aa(()=>{re()}),{slider:a,track:l,thumb:i,initialValue:o,isActive:n,isDragging:s,localValue:r,classes:d,hasIcon:g,fillStyle:f,thumbStyle:k,markerText:v,snapPoints:b,moderatedMin:y,moderatedMax:h,focus:I,reset:$,onFocus:Y,onBlur:ee,onExternalClick:K,setValueWithSnap:W,setValue:G,incrementValue:te,decrementValue:ce,getTrackOffset:oe,getPointStyle:L,initializeSlider:X,teardownSlider:re,initializeDrag:se,onDragStart:we,onDragMove:O,dragUpdate:U,onDragStop:V,getNearestSnapPoint:Ae,relativeValue:De,moderateValue:ve}}}),Nu=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],zu=["name","value"],Uu={key:1,class:"base-slider__icon"},Hu={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Wu={key:0},Gu={key:0,class:"base-slider__marker text-xs"},qu=p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[p("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),Yu={class:"base-slider__marker-text text-xs"};function Ku(e,t,o,n,s,r){const a=_("feather");return u(),c("div",{ref:"slider",class:S(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Te(ge((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Te(ge((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Te(ge((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Te(ge((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(u(),c("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,zu)):w("",!0),e.hasIcon?(u(),c("div",Uu,[F(e.$slots,"icon",{},()=>[C(a,{type:e.icon,size:"20"},null,8,["type"])])])):w("",!0),p("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[p("div",Hu,[e.snapToSteps?(u(),c("div",Wu,[(u(!0),c(R,null,z(e.snapPoints,(l,i)=>(u(),c("span",{key:i,class:"base-slider__snap-point",style:Z({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):w("",!0)]),p("div",{class:"base-slider__track-fill bg-primary-400",style:Z(e.fillStyle)},null,4),p("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:Z(e.thumbStyle)},[e.showMarker?(u(),c("div",Gu,[qu,p("span",Yu,j(e.markerText),1)])):w("",!0)],4)],544)],42,Nu)}var _o=P(ho,[["render",Ku]]);ho.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};const ko=M({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:o}=N(e);return{isChecked:D({get:()=>o.value,set:s=>{t("update:modelValue",s)}})}}}),Xu={class:"flex cursor-pointer items-center gap-x-3"},Ju={key:0},Qu={class:"text-sm text-gray-400"};function Zu(e,t,o,n,s,r){return u(),c("label",Xu,[ue(p("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),class:"hidden",type:"checkbox"},null,512),[[rn,e.isChecked]]),p("div",{class:S(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[p("div",{class:S(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(u(),c("div",Ju,[p("div",null,j(e.title),1),p("div",Qu,j(e.description),1)])):w("",!0)])}var wo=P(ko,[["render",Zu]]);ko.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};const Do=M({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const o=m(),n=m([]),s=a=>{var l;(l=n.value)==null||l.push(a)};return J(()=>{const a=n.value.find(l=>l.dataset.value===e.modelValue);a&&(console.log(a),a.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:a=>{t("update:modelValue",a)},root:o,registerTab:s}}}),ed={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},td=["data-value"],nd=["onClick"],od=p("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function ad(e,t,o,n,s,r){return u(),c("div",ed,[(u(!0),c(R,null,z(e.tabs,a=>(u(),c("div",{key:a.value,ref_for:!0,ref:e.registerTab,"data-value":a.value,class:S(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[a.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[F(e.$slots,"tab",{tab:a,select:()=>e.select(a.value)},()=>[p("div",{class:"px-4 py-3",onClick:()=>e.select(a.value)},j(a.title),9,nd)])],10,td))),128)),od],512)}var Dt=P(Do,[["render",ad]]);Do.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};const rd=M({name:"RobustTabsSwitch",props:{tabs:{type:Array,required:!0},rounded:{type:Boolean,default:!1},modelValue:{required:!0}},setup(e,{emit:t}){const o=m([]),n=N(e),s=b=>{var y;(y=o.value)==null||y.push(b)},r=m(0),a=m(0),l=m(!1),i=m();m();const d=new ResizeObserver(()=>{const b=g();b&&f(b)});J(()=>{i.value&&d.observe(i.value),ie(()=>{l.value=!0})}),Ie(()=>{i.value&&d.unobserve(i.value)});const g=()=>o.value.find(b=>b.dataset.value===n.modelValue.value),f=b=>{var $;const y=($=i.value)==null?void 0:$.getBoundingClientRect();if(!y)throw new Error("no container box specified");const h=b.getBoundingClientRect(),I={x:h.x-y.x,y:h.y-y.y};r.value=I.x,a.value=h.width},k=(b,y)=>{t("update:modelValue",y),b.target&&b.target instanceof HTMLElement&&f(b.target)},v=g();return v&&f(v),{root:i,select:k,registerTab:s,showBackground:l,backgroundXOffset:r,backgroundWidth:a}}});rd.__docgenInfo={displayName:"RobustTabsSwitch",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",required:!0}]};const Co=M({name:"RobustTextarea",inheritAttrs:!1,components:{RobustInputWrapper:ke,PhWarningCircle:nn},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const n=m(),s=o,r=D({get(){return e.modelValue},set(i){t("input",i),t("change",i),t("update:modelValue",i)}});function a(){var i;(i=n.value)==null||i.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:r,inputAttrs:s,props:e,inputRef:n,focus:a,clear:l}}}),sd=["id","disabled","readonly"],ld={key:1,class:"text-red-400"};function id(e,t,o,n,s,r){const a=_("PhWarningCircle"),l=_("RobustInputWrapper");return u(),E(l,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,"box-class":[e.condensed?"pt-1":"pt-2",e.$props.class],readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(i=>[e.$slots.prefix?(u(),c("div",{key:0,class:S(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[F(e.$slots,"prefix",{tag:"div"})],2)):w("",!0),ue(p("textarea",de({id:i.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=d=>e.inputFieldValue=d),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,sd),[[ct,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),c("div",{key:1,class:S(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),c("div",ld,[C(a,{size:"20",class:"block"})])):F(e.$slots,"suffix",{key:0,tag:"div"})],2)):w("",!0)]),_:3},8,["title","hint","error","box-class","readonly","disabled","condensed"])}var So=P(Co,[["render",id]]);Co.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const xo=M({name:"RobustWidgetWrapper",components:{RobustPopper:Be,PhDotsThreeVertical:Na},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const o=m(!1),n=m(),s=m();Ee(s,a=>{o.value&&(n.value.contains(a.target)&&(a.stopPropagation(),a.preventDefault()),r(),t("blur"))});const r=()=>{o.value===!0&&(o.value=!1,t("blur"))};return{open:o,closeDropdown:r,popperRef:s,contextButtonRef:n}}}),ud={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function dd(e,t,o,n,s,r){const a=_("PhDotsThreeVertical"),l=_("RobustPopper");return u(),c(R,null,[p("div",de(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[ue(p("div",{class:S(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[at,e.stripe]]),e.title||e.$slots.title?(u(),c("div",ud,[e.$slots.title?F(e.$slots,"title",{key:0,title:e.title}):(u(),c(R,{key:1},[ye(j(e.title),1)],64)),e.$slots.options?(u(),c("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=i=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[C(a,{size:"24",weight:"bold"})],512)):w("",!0)])):w("",!0),e.$slots.default?(u(),c("section",{key:1,class:S(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[F(e.$slots,"default")],2)):w("",!0),F(e.$slots,"raw")],16),C(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=i=>e.open=i),options:{placement:"bottom-end"}},{default:q(()=>[F(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var To=P(xo,[["render",dd]]);xo.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};const $o=M({name:"RobustDaterangePicker",components:{RobustCalendar:Ke,RobustPopper:Be,RobustInputWrapper:ke,RobustButton:ae,RobustCheckbox:Ve,RobustDatePicker:Oe,PhCaretDown:Re,PhCalendar:dn,PhArrowLeft:za,PhArrowRight:Ua,PhClockCounterClockwise:Ha},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:o}){const{dateRange:n,compareDateRange:s,perspectiveDate:r,comparePerspectiveDate:a}=N(e),l=m(),i=m(!1),d=m(),g=m(),f=m(r.value),k=m(a.value),v=m(!1),b=m(),y=m(),h=m(!0),I=m(),$=D(()=>W.value.length>1),Y=(O,U)=>U?fe(O,"dd.MM.yyyy HH:mm:ss"):fe(O,"dd.MM.yyyy"),ee=D(()=>e.dateHistory||[]);let K=m();const W=m(s.value),G=D({get(){return W.value},set(O){W.value=O,t("update:compareDate",O),t("blur")}}),te=D({get:()=>G.value.length>1,set:O=>{L(O)}}),ce=D(()=>{if(!n.value)return"Select date";const O=n.value;try{return O.length>1?fe(O[0],"P")+" - "+fe(O[1],"P"):fe(O[0],"P")+" - "+fe(O[0],"P")}catch{return}});function oe(){i.value===!0&&(i.value=!1,v.value=!1,t("blur"))}const L=O=>{O?b.value=O:(t("update:comparison-date",void 0),G.value=void 0)};Ee(I,O=>{i.value&&(d.value.wrapperRef.contains(O.target)&&(O.stopPropagation(),O.preventDefault()),oe(),t("blur"))});const X=()=>{K.value=n.value,i.value=!i.value},re=()=>{b.value=!1},se=async()=>{t("update:dateRange",K.value),t("change",K.value),t("blur"),i.value=!1},we=O=>{h.value=O};return ne(f,O=>{t("update:perspectiveDate",O)}),ne(k,O=>{t("update:comparePerspectiveDate",O)}),{displayCompare:b,computedCompare:G,attrs:o,props:e,refSelectContainer:l,pickedCompare:$,open:i,displayDate:ce,saveTime:se,tmpDateRange:K,dateConfig:y,closeDropdown:oe,showCompare:L,comparePerspectiveOf:k,compareWith:te,storeHistory:h,handleClick:X,goBack:re,mainCalendar:g,perspectiveOf:f,enabledHistory:v,dateHistory:ee,formatDate:Y,enableStoringHistory:we,inputWrapperRef:d,popperRef:I}},methods:{}}),cd=["id"],pd={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},md=p("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},"Date range",-1),fd={key:0,class:"flex flex-col items-start gap-y-3"},gd=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),yd={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},bd={key:1},vd={key:0,class:"flex flex-col items-start"},hd=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),_d={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},kd=ye("Apply time range");function wd(e,t,o,n,s,r){var b,y;const a=_("PhCalendar"),l=_("PhCaretDown"),i=_("RobustInputWrapper"),d=_("RobustDatePicker"),g=_("RobustCheckbox"),f=_("RobustCalendar"),k=_("RobustButton"),v=_("RobustPopper");return u(),c(R,null,[C(i,{title:e.title,hint:e.hint,error:e.error,class:S([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ge(e.handleClick,["stop"])},{default:q(h=>[p("div",{class:S(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[C(a,{size:"20"})],2),p("div",de({id:h.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[p("div",pd,j(e.displayDate),1)],16,cd),p("div",{class:S(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[C(l,{size:14,weight:"bold",class:S(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((b=e.inputWrapperRef)==null?void 0:b.wrapperRef)?(u(),E(v,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(y=e.inputWrapperRef)==null?void 0:y.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=h=>e.open=h),options:{placement:"bottom-start"}},{default:q(()=>[md,p("div",null,[C(f,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=h=>e.tmpDateRange=h),"onClick:relativeDate":t[3]||(t[3]=h=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(u(),c("div",fd,[p("div",null,[gd,C(d,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=h=>e.perspectiveOf=h)},null,8,["modelValue"])]),e.enableComparison?(u(),E(g,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=h=>e.compareWith=h),title:"Compare with"},null,8,["modelValue"])):w("",!0)])):w("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(u(),c("h3",yd,"Comparison date range")):w("",!0),e.enableComparison?(u(),c("div",bd,[C(f,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=h=>e.computedCompare=h),"onClick:relativeDate":t[6]||(t[6]=h=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(u(),c("div",vd,[hd,C(d,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=h=>e.comparePerspectiveOf=h)},null,8,["modelValue"])])):w("",!0)]),_:1},8,["modelValue"])])):w("",!0),p("div",_d,[C(k,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:q(()=>[kd]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):w("",!0)],64)}var Vo=P($o,[["render",wd]]);$o.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var Dd={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:Vo,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const Cd=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:Vo},setup(){return{args:e}}}),Bo=[new Date,new Date],Qt=m(Bo),Zt=m(Bo),Po=Cd.bind({});Po.args={dateRange:Qt,"onUpdate:dateRange":e=>{Qt.value=e},compareDateRange:Zt,"onUpdate:compareDateRange":e=>{Zt.value=e}};const Sd=["Default"];var xd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dd,Default:Po,__namedExportsOrder:Sd}),Td={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:io,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const $d=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:io},setup(){let t=m([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),Vd=$d.bind({}),Bd=["Default"];var Pd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Td,Default:Vd,__namedExportsOrder:Bd}),Id={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:Qe,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Rd=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:Qe},setup(){return{args:e}}}),Io=Rd.bind();Io.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const Ed=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Qe,RobustButton:ae},setup(){return{args:e}}}),Ro=Ed.bind();Ro.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const jd=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:Qe,RobustButton:ae,RobustImg:Fe},setup(){return{args:e}}}),Eo=jd.bind();Eo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const Md=["Default","CallToAction","CustomIcon"];var Ld=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Id,Default:Io,CallToAction:Ro,CustomIcon:Eo,__namedExportsOrder:Md}),Od={title:"Ui/Grid",component:po,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let en=M({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const Fd=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:po},setup(){let t=m([{id:"test",component:jt(en),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:jt(en),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return ne(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),Ad=Fd.bind(),Nd=["Default"];var zd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Od,Default:Ad,__namedExportsOrder:Nd}),Ud={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Fe,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Hd=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Fe},setup(){return{args:e}}}),jo=Hd.bind();jo.args={title:"Img title"};const Wd=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Fe},setup(){return{args:e}}}),Mo=Wd.bind();Mo.args={title:"Img title"};const Gd=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Fe},setup(){return{args:e}}}),Lo=Gd.bind();Lo.args={title:"Img title"};const qd=["Default","Broken","Fallback"];var Yd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ud,Default:jo,Broken:Mo,Fallback:Lo,__namedExportsOrder:qd}),Kd={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:$e,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ct=e=>({template:'<Input class="mb-4" :cthulu="true" v-bind="args"/>',components:{Input:$e},setup(){return{args:e}}}),Oo=Ct.bind();Oo.args={modelValue:"Input text",title:"Input title"};const Fo=Ct.bind();Fo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Ao=Ct.bind();Ao.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Xd=["Default","Hint","ErrorHint"];var Jd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kd,Default:Oo,Hint:Fo,ErrorHint:Ao,__namedExportsOrder:Xd}),Qd={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

export default {
  title: 'Ui/InputWrapper',
  component: InputWrapper,
  argTypes: {
    condensed: { control: { type: 'boolean' } },
    outline: { control: { type: 'boolean' } },
  },
}

const DefaultTemplate = (args) => ({
  template: \`<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>\`,
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:ke,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const St=e=>({template:'<InputWrapper v-bind="args" class="min-w-52"></InputWrapper>',components:{InputWrapper:ke},setup(){return{args:e}}}),No=St.bind();No.args={title:"Input title",outline:!1};const zo=St.bind();zo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Uo=St.bind();Uo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Zd=["Default","Hint","ErrorHint"];var ec=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qd,Default:No,Hint:zo,ErrorHint:Uo,__namedExportsOrder:Zd}),tc={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:fo,argTypes:{progress:{control:{type:"number"}}}};const nc=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:fo},setup(){return{args:e}}}),oc=nc.bind(),ac=["Default"];var rc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tc,Default:oc,__namedExportsOrder:ac}),sc={parameters:{storySource:{source:`import { ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}}}}},title:"Ui/Modal",component:kt,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const lc=e=>({template:' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',components:{Modal:kt,RobustButton:ae},setup(){return{args:e}}}),Ho=lc.bind();let tn=m(!0);Ho.args={title:"Modal title",opened:tn,"onUpdate:opened":e=>{console.log("opeone"),tn.value=e}};const ic=["Default"];var uc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sc,Default:Ho,__namedExportsOrder:ic}),dc={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:yo,argTypes:{title:{control:{type:"text",default:"Title"}}}};const cc=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:yo},setup(){return{args:e}}}),pc=cc.bind(),mc=["Default"];var fc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dc,Default:pc,__namedExportsOrder:mc}),gc={parameters:{storySource:{source:`import { ref, watch } from 'vue'
import Pagination from './Pagination.vue'

export default {
  title: 'Ui/Pagination',
  component: Pagination,
}

const DefaultTemplate = (args) => ({
  template:
    '<Pagination v-bind="args" :totalCount="200" v-model:page="page" v-model:pageSize="pageSize"/>',
  components: { Pagination },
  setup() {
    const page = ref(2)
    const pageSize = ref(10)
    return { args, page, pageSize }
  },
})

export const Default = DefaultTemplate.bind({})
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:18},startBody:{col:24,line:9},endBody:{col:2,line:18}}}}},title:"Ui/Pagination",component:_t};const yc=e=>({template:'<Pagination v-bind="args" :totalCount="200" v-model:page="page" v-model:pageSize="pageSize"/>',components:{Pagination:_t},setup(){const t=m(2),o=m(10);return{args:e,page:t,pageSize:o}}}),bc=yc.bind({}),vc=["Default"];var hc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gc,Default:bc,__namedExportsOrder:vc}),_c={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:Be,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const kc=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:Be},setup(){const t=m(!1);return{args:e,value:t}}}),Wo=kc.bind({});Wo.args={title:"Popper title",description:"Popper description text to be placed here"};const wc=["Default"];var Dc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_c,Default:Wo,__namedExportsOrder:wc}),Cc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:vo,argTypes:{title:{control:{type:"text"}}}};const Sc=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:vo},setup(){const t=m("test");return{args:e,value:t}}}),Go=Sc.bind({});Go.args={title:"Radio title"};const xc=["Default"];var Tc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cc,Default:Go,__namedExportsOrder:xc});const $c=M({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});$c.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var Vc={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:Je,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const xt=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Je},setup(){let t=m(void 0),o=m([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:o,args:e}}}),qo=xt.bind();qo.args={title:"Input title"};const Yo=xt.bind();Yo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Ko=xt.bind();Ko.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Bc=["Default","Hint","ErrorHint"];var Pc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vc,Default:qo,Hint:Yo,ErrorHint:Ko,__namedExportsOrder:Bc}),Ic={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:_o,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Rc=e=>({template:'<Slider v-bind="args" />',components:{Slider:_o},setup(){return{args:e}}}),Xo=Rc.bind();Xo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:je};const Ec=["Default"];var jc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ic,Default:Xo,__namedExportsOrder:Ec}),Mc={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Me,argTypes:{}};const Lc=e=>({template:"<Spinner />",components:{Spinner:Me},setup(){return{args:e}}}),Oc=Lc.bind(),Fc=["Default"];var Ac=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mc,Default:Oc,__namedExportsOrder:Fc}),Nc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:wo,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const zc=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:wo},setup(){const t=m(!1);return{args:e,value:t}}}),Jo=zc.bind({});Jo.args={title:"Switch title",description:"Switch description text to be placed here"};const Uc=["Default"];var Hc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nc,Default:Jo,__namedExportsOrder:Uc}),Wc={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:Dt,argTypes:{rounded:{control:{type:"boolean"}}}};const Gc=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:Dt},setup(){const t=m("item_1");return{args:e,value:t}}}),Qo=Gc.bind();Qo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const qc=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:Dt},setup(){const t=m("item_1");return{args:e,value:t}}}),Zo=qc.bind();Zo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Yc=["Default","Slotted"];var Kc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wc,Default:Qo,Slotted:Zo,__namedExportsOrder:Yc}),Xc={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:So,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Tt=e=>({template:'<Textarea v-bind="args"/>',components:{Textarea:So},setup(){return{args:e}}}),ea=Tt.bind();ea.args={modelValue:"Textarea text",title:"Textarea title"};const ta=Tt.bind();ta.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const na=Tt.bind();na.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const Jc=["Default","Hint","ErrorHint"];var Qc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xc,Default:ea,Hint:ta,ErrorHint:na,__namedExportsOrder:Jc}),Zc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:To,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const ep=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:To},setup(){const t=m(!1);return{args:e,value:t}}}),oa=ep.bind({});oa.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const tp=["Default"];var np=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zc,Default:oa,__namedExportsOrder:tp});function aa(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":$r,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":ls,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":vs,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":xs,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":tl,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":hl,"/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js":pu,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":bu,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":xd,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":Pd,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":Ld,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":zd,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":Yd,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Jd,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":ec,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":rc,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":uc,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":fc,"/home/runner/work/robust-ui/robust-ui/src/components/Pagination/Pagination.stories.js":hc,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":Dc,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":Tc,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":Pc,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":jc,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":Ac,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":Hc,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":Kc,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":Qc,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":np}[e]}Object.assign(aa,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Pagination/Pagination.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js":"./src/components/DataTable/DataTable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Pagination/Pagination.stories.js":"./src/components/Pagination/Pagination.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});function op(e){e(aa,{hot:!1},!1)}const ap=[Xa,Ja,Qa,Za,er,tr,nr,or,ar,rr,ur].filter(Boolean);ap.forEach(e=>{Object.keys(e).forEach(t=>{const o=e[t];switch(t){case"args":case"argTypes":return Ka.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(n=>Ya(n,!1));case"loaders":return o.forEach(n=>qa(n,!1));case"parameters":return Mt(me({},o),!1);case"argTypesEnhancers":return o.forEach(n=>Ga(n));case"argsEnhancers":return o.forEach(n=>Wa(n));case"globals":case"globalTypes":{const n={};return n[t]=o,Mt(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});op(sr);
//# sourceMappingURL=iframe.0190b023.js.map
