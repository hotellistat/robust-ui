var Sa=Object.defineProperty,xa=Object.defineProperties;var $a=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var Ot=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable;var Lt=(e,t,o)=>t in e?Sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,fe=(e,t)=>{for(var o in t||(t={}))Ot.call(t,o)&&Lt(e,o,t[o]);if(Fe)for(var o of Fe(t))Nt.call(t,o)&&Lt(e,o,t[o]);return e},xe=(e,t)=>xa(e,$a(t));var At=(e,t)=>{var o={};for(var n in e)Ot.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&Fe)for(var n of Fe(e))t.indexOf(n)<0&&Nt.call(e,n)&&(o[n]=e[n]);return o};import{d as E,c as w,u as _t,a as d,b as c,o as u,r as f,t as F,e as L,w as K,n as k,f as qe,g as b,h as O,i as h,P as Ta,j as Va,k as R,m as ue,l as pn,p as Z,v as mn,q as D,s as he,x as We,y as Ue,z as zt,A as Ge,B as Ht,C as Ia,D as Ba,E as fn,F as gn,G as Pa,H as ge,I as oe,J as ee,K as Ye,L as at,M as rt,N as Ra,O as Ma,Q as ja,R as Ea,S as La,T as Oa,U as Na,V as Aa,W as za,X as ye,Y as P,Z as A,_ as Ha,$ as yn,a0 as Ke,a1 as Q,a2 as ve,a3 as vn,a4 as je,a5 as Ee,a6 as ke,a7 as kt,a8 as st,a9 as Fa,aa as de,ab as ce,ac as ie,ad as Te,ae as Ft,af as Wa,ag as wt,ah as bn,ai as Je,aj as Ua,ak as lt,al as Ga,am as Ve,an as Ya,ao as qa,ap as Ct,aq as Dt,ar as St,as as Ka,at as Ja,au as Xa,av as Qa,aw as Le,ax as Za,ay as Wt,az as er,aA as tr,aB as nr,aC as Ut,aD as or,aE as ar,aF as rr,aG as sr,aH as lr,aI as ir,aJ as ur,aK as dr,aL as cr,aM as pr,aN as mr,aO as fr,aP as gr,aQ as yr,aR as vr,aS as br}from"./vendor.dc3ca7fc.js";const hr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};hr();const _r={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:_r});var S=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const xt=E({name:"RobustSpinner",props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=w(()=>.666*(e.size-2*e.safeMargin)),o=w(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:o}}}),Gt=()=>{_t(e=>({"47fb3f16":e.minDashOffset,"4945e0b0":e.maxDashOffset}))},Yt=xt.setup;xt.setup=Yt?(e,t)=>(Gt(),Yt(e,t)):Gt;const hn=xt,wr=["width","height","viewBox"],Cr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function Dr(e,t,o,n,r,s){return u(),d("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Cr)],8,wr)}var Xe=S(hn,[["render",Dr],["__scopeId","data-v-2e051f42"]]);hn.__docgenInfo={displayName:"RobustSpinner",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var Sr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const _n=E({name:"RobustButton",components:{Spinner:Xe},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=f(!1),{loading:o,variant:n}=F(e);return{variantStyles:w(()=>Sr[n.value]),loading:o,displaySpinner:t}}}),xr={key:0,class:"mr-2"},$r={class:"whitespace-no-wrap truncate"},Tr={key:1,class:"ml-2"};function Vr(e,t,o,n,r,s){const a=b("spinner");return u(),L(qe(e.tag),{disabled:e.disabled,class:k(["flex items-center justify-center truncate font-medium ring-opacity-50 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:K(()=>[c("div",{class:k(["flex select-none items-center",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(u(),d("div",xr,[O(e.$slots,"prefix",{tag:"div"})])):h("",!0),c("div",$r,[O(e.$slots,"default")]),e.$slots.suffix?(u(),d("div",Tr,[O(e.$slots,"suffix",{tag:"div"})])):h("",!0)],2),e.loading?(u(),L(a,{key:0,size:20,stroke:2,class:"spinner absolute"})):h("",!0)]),_:3},8,["disabled","class"])}var be=S(_n,[["render",Vr]]);_n.__docgenInfo={displayName:"RobustButton",exportName:"default",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Ir={parameters:{storySource:{source:`import Button from './Button.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:be,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Br=e=>({components:{Button:be},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Pr=Br.bind({}),Rr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <PhSmiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:be,PhSmiley:Ta},setup(){return{args:e}}}),Mr=Rr.bind(),jr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <PhPaperPlaneTilt size="20" />
  </template>
  </Button>`,components:{Button:be,PhPaperPlaneTilt:Va},setup(){return{args:e}}}),Er=jr.bind(),Lr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:be},setup(){return{args:e}}}),Or=Lr.bind(),Nr=["Default","Prefix","Suffix","Loading"];var Ar=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ir,Default:Pr,Prefix:Mr,Suffix:Er,Loading:Or,__namedExportsOrder:Nr});let zr=0;const kn=E({name:"RobustInputWrapper",inheritAttrs:!1,props:{title:{type:String},class:{type:String},hint:{type:String},error:{type:String},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const o=(++zr).toString(),n=/^on[^a-z]/,r=m=>n.test(m);let s=w(()=>Object.fromEntries(Object.entries(t).filter(m=>r(m[0]))));const a=f();function i(){}function l(){}return{cuid:o,wrapperRef:a,blurred:i,focused:l,listeners:s}}}),Hr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Fr={key:1,class:"block pt-1"},Wr={key:0,class:"select-none text-xs text-gray-400"},Ur={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Gr(e,t,o,n,r,s){return u(),d("fieldset",null,[e.title?(u(),d("legend",Hr,R(e.title),1)):h("",!0),c("div",ue(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.class,e.fixedHeight?e.condensed?"h-9":"h-10":void 0,{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[O(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(u(),d("label",Fr,[e.hint!==void 0?(u(),d("div",Wr,R(e.hint),1)):h("",!0),e.error!==void 0?(u(),d("div",Ur,R(e.error),1)):h("",!0)])):h("",!0)])}var Ce=S(kn,[["render",Gr]]);kn.__docgenInfo={displayName:"RobustInputWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string | string[] | object"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const wn=E({name:"RobustInput",inheritAttrs:!1,components:{InputWrapper:Ce,PhWarningCircle:pn},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const n=f(),r=o,s=w({get(){return e.modelValue},set(l){t("input",l),t("change",l),t("update:modelValue",l)}});function a(){var l;(l=n.value)==null||l.focus()}function i(){t("update:modelValue","")}return{inputFieldValue:s,inputAttrs:r,props:e,inputRef:n,focus:a,clear:i}}}),Yr=["id","disabled","readonly"],qr={key:1,class:"text-red-400"};function Kr(e,t,o,n,r,s){const a=b("PhWarningCircle"),i=b("InputWrapper");return u(),L(i,{title:e.title,hint:e.hint,error:e.error,class:k(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:K(l=>[e.$slots.prefix?(u(),d("div",{key:0,class:k(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[O(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),Z(c("input",ue({id:l.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=m=>e.inputFieldValue=m),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Yr),[[mn,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),d("div",{key:1,class:k(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),d("div",qr,[D(a,{size:"20",class:"block"})])):O(e.$slots,"suffix",{key:0,tag:"div"})],2)):h("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var $t=S(wn,[["render",Kr]]);wn.__docgenInfo={displayName:"RobustInput",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Jr=[{title:"today",preset:()=>{const e=he(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,he(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=he(We(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,he(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Ue(new Date),he(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Ue(new Date),zt(new Date)]},{title:"this_year",preset:()=>[Ge(new Date),Ht(new Date)]},{title:"this_year_so_far",preset:()=>[Ge(new Date),he(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=Ia(We(new Date,7));return[e,Ba(new Date(e))]}},{title:"last_month",preset:()=>{let e=Ue(We(Ue(new Date),1));return[e,zt(e)]}},{title:"last_year",preset:()=>{const e=Ge(We(Ge(new Date),1));return[e,Ht(new Date(e))]}}],Xr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const Cn=E({name:"RobustCalendar",components:{Input:$t,PhCaretLeft:fn,PhCaretRight:gn},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:o,past:n,today:r,modelValue:s}=F(e),a=f(),i=f(),l=f(),m=f(),y=f(),p=Array.isArray(s.value)?f(new Date):f(new Date(s.value)),g=f(),v=f({}),V=Jr,_=w(()=>Xr[e.variant]),C=w(()=>{const I=new Date(p.value);return Pa(I)}),U=w(()=>{try{return ge(p.value,"MMM")}catch{return}}),B=w(()=>{try{return ge(p.value,"yyyy")}catch{return}}),Y=w(()=>{const I=new Date(p.value);I.setDate(1);const $=I.getDay();return($===0?7:$)-1}),te=w(()=>new Date(p.value).getMonth()),q=w(()=>new Date(p.value).getFullYear()),W=()=>{if(console.log("applying time"),a.value!=""&&!Ye(new Date(a.value))&&(l.value="Please enter a valid date."),i.value!=""&&!Ye(new Date(i.value))&&(m.value="Please enter a valid date."),Ye(new Date(a.value))&&Ye(new Date(i.value))){l.value="",m.value="";const I=[new Date(a.value),new Date(i.value)];t("update:modelValue",I)}},G=(I,$)=>{const H=ne(I,$);return H<0?1:H>0?-1:0},ne=(I,$)=>{const H=Date.UTC($.getFullYear(),$.getMonth(),$.getDate()),me=Date.UTC(I.getFullYear(),I.getMonth(),I.getDate());return(H-me)/864e5},pe=I=>{if(!Array.isArray(s.value)||s.value.length<2||!G(...s.value))return!1;const $=new Date;$.setDate(I),$.setMonth(p.value.getMonth()),$.setFullYear(p.value.getFullYear());const H=at(s.value);return!G($,H)},ae=I=>{if(!Array.isArray(s.value)||s.value.length<2||!G(...s.value))return!1;const $=new Date;$.setDate(I),$.setMonth(p.value.getMonth()),$.setFullYear(p.value.getFullYear());const H=rt(s.value);return!G($,H)},M=I=>{if(!Array.isArray(s.value)||s.value.length<2)return!1;const $=new Date;$.setDate(I),$.setMonth(p.value.getMonth()),$.setFullYear(p.value.getFullYear());const H=at(s.value),me=rt(s.value);return G($,me)===-1&&G($,H)===1},J=I=>{const $=new Date;if($.setDate(I),$.setMonth(p.value.getMonth()),$.setFullYear(p.value.getFullYear()),Array.isArray(s.value)){const H=s.value.map(me=>new Date(me));for(let me=0;me<H.length;me++)if(!G(H[me],$))return!0}else if(!G(new Date(g.value),$))return!0};function re(I){t("update:modelValue",I),p.value=I[1]}function se(){p.value=Ra(p.value,1)}function De(){p.value=Ma(p.value,1)}function j(I){p.value=ja(p.value,I)}function z(){p.value=Ea(p.value,1)}function T(){p.value=La(p.value,1)}function He(I){p.value=Oa(p.value,I)}const Se=I=>{const $=new Date(p.value).setDate(I);return!(!r.value&&Na(y.value,$)||!n.value&&Aa(y.value,$)>0||!o.value&&za($))},_e=I=>{if(!Se(I))return;const $=new Date;if($.setDate(I),$.setMonth(p.value.getMonth()),$.setFullYear(p.value.getFullYear()),p.value=$,Array.isArray(s.value)){l.value="",m.value="";let H=[];s.value.length>=2?(H.push(new Date(p.value)),i.value=""):(H=s.value,H.push(new Date(p.value)),H.length>1&&(H=[he(at(H),{hours:0,minutes:0,seconds:0}),he(rt(H),{hours:23,minutes:59,seconds:59})],i.value=H[1].toLocaleDateString())),a.value=H[0].toLocaleDateString(),t("update:modelValue",H)}else g.value=new Date(p.value),t("update:modelValue",p.value)},x=()=>{p.value=new Date(new Date().setHours(12))};oe(s,I=>{const $=I[0]||void 0,H=I[1]||void 0;$?a.value=$.toLocaleDateString():a.value="",H?i.value=H.toLocaleDateString():i.value=""}),ee(()=>{if(Array.isArray(s.value)){p.value=new Date(s.value[1]||new Date),g.value=p.value;const I=s.value[0]||void 0,$=s.value[1]||void 0;I?a.value=I.toLocaleDateString():a.value="",$?i.value=$.toLocaleDateString():i.value=""}else p.value=new Date(s.value||new Date),g.value=p.value});const X=w(()=>{const I=[];for(let $=1900;$<=2100;$++)I.push($);return I}),le=f(!1);function Re(){le.value=!0}function nt(){le.value=!1}const ot=f(!1);function Ca(){ot.value=!0,ye(()=>{v.value[q.value].scrollIntoView({block:"start",behavior:"auto"})})}function Da(){ot.value=!1}return{months:w(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:a,to:i,errorFrom:l,errorTo:m,showMonthSelectionActive:le,showYearSelectionActive:ot,now:y,cursor:p,selectedDate:g,showMonthSelection:Re,showYearSelection:Ca,hideMonthSelection:nt,hideYearSelection:Da,daysInMonth:C,monthHeading:U,yearHeading:B,refYearEntry:v,setYear:j,setMonth:He,firstWeekday:Y,activeMonth:te,activeYear:q,compareDates:G,applyTime:W,dayDiff:ne,isFirst:pe,isLast:ae,isBetweenRange:M,isSelectedDay:J,addYear:se,subYear:De,addMonth:z,subMonth:T,dayAllowed:Se,daySelect:_e,reset:x,yearSelectionYears:X,quickActions:V,setQuickAction:re,variantStyling:_}}}),Qr={class:"relative flex w-max select-none"},Zr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},es={class:"absolute inset-0 overflow-auto py-2"},ts=["onClick"],ns={class:"p-4 dark:border-gray-600"},os={class:"mb-4 flex items-center text-center text-lg font-semibold"},as={class:"flex flex-1"},rs={class:"relative w-max"},ss={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},ls=["onClick"],is={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},us=["data-year","onClick"],ds=Ha('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),cs=["disabled","onClick"],ps={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},ms=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),fs=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function gs(e,t,o,n,r,s){const a=b("PhCaretLeft"),i=b("PhCaretRight"),l=b("Input");return u(),d("div",Qr,[Array.isArray(e.modelValue)?(u(),d("div",Zr,[c("div",es,[(u(!0),d(P,null,A(e.quickActions,m=>(u(),d("div",{key:m.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:y=>e.setQuickAction(m.preset())},R(m.title),9,ts))),128))])])):h("",!0),c("section",ns,[c("div",os,[c("div",as,[c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},R(e.monthHeading),1),c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},R(e.yearHeading),1)]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...m)=>e.subMonth&&e.subMonth(...m))},[D(a,{type:"chevron-left",size:"14",weight:"bold"})]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...m)=>e.addMonth&&e.addMonth(...m))},[D(i,{type:"chevron-right",size:"14",weight:"bold"})])]),c("div",rs,[e.showMonthSelectionActive?(u(),d("div",ss,[(u(!0),d(P,null,A(e.months,(m,y)=>(u(),d("div",{key:y,class:k(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===y?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(y),e.hideMonthSelection()}},R(m.title),11,ls))),128))])):h("",!0),e.showYearSelectionActive?(u(),d("div",is,[(u(!0),d(P,null,A(e.yearSelectionYears,m=>(u(),d("div",{ref_for:!0,ref:y=>e.refYearEntry[m]=y,key:m,class:k(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===m?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":m,onClick:()=>{e.setYear(m),e.hideYearSelection()}},R(m),11,us))),128))])):h("",!0),c("div",{class:k(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ds,(u(!0),d(P,null,A(e.firstWeekday,m=>(u(),d("div",{key:m+"_offset"}))),128)),(u(!0),d(P,null,A(e.daysInMonth,m=>(u(),d("div",{key:m+"_day",class:k(["relative",[e.isBetweenRange(m)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(m),onClick:y=>e.daySelect(m)},[e.isLast(m)||e.isFirst(m)?(u(),d("div",{key:0,class:k(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(m)?"right-0 w-1/2":e.isLast(m)?"left-0 w-1/2":""]])},null,2)):h("",!0),c("div",{class:k(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(m)||e.isLast(m)||e.isFirst(m)||e.isSelectedDay(m)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},R(m),3)],10,cs))),128))],2)])]),Array.isArray(e.modelValue)?(u(),d("div",ps,[ms,D(l,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=m=>e.from=m),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),fs,D(l,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=m=>e.to=m),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),O(e.$slots,"default")])):h("",!0)])}var Qe=S(Cn,[["render",gs]]);Cn.__docgenInfo={displayName:"RobustCalendar",exportName:"default",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var ys={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Qe,argTypes:{}};const Dn=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Qe},setup(){return{args:e}}}),qt=f(new Date),Sn=Dn.bind({});Sn.args={modelValue:qt,"onUpdate:modelValue":e=>{qt.value=e,console.log(e)}};const vs=[new Date,new Date],Kt=f(vs),xn=Dn.bind({});xn.args={modelValue:Kt,"onUpdate:modelValue":e=>{Kt.value=e,console.log(e)}};const bs=["Default","Range"];var hs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ys,Default:Sn,Range:xn,__namedExportsOrder:bs});const $n=E({components:{PhCheck:yn},name:"RobustCheckbox",emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const n="_"+Math.random().toString(36).substr(2,9),r=w({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(s){let a=e.modelValue;Array.isArray(a)?s?a.push(e.value):a.splice(a.indexOf(e.value),1):s?a=e.value:a=e.disabledValue,t("update:modelValue",a),t("change",a)}});return{cuid:n,isChecked:r,attrs:o}}}),_s={class:"inline-block"},ks={class:"flex cursor-pointer items-start"},ws=["id"],Cs={key:0,class:"w-full select-none pt-px leading-4"},Ds={key:1,class:"w-full select-none pt-px leading-4"};function Ss(e,t,o,n,r,s){const a=b("PhCheck");return u(),d("div",_s,[c("label",ks,[Z(c("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=i=>e.isChecked=i),type:"checkbox",class:"hidden"},null,8,ws),[[Ke,e.isChecked]]),c("div",{class:k(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[D(a,{class:k([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(u(),d("div",Cs,R(e.title),1)):h("",!0),!e.title&&e.$slots.title?(u(),d("div",Ds,[O(e.$slots,"title")])):h("",!0)])])}var Ze=S($n,[["render",Ss]]);$n.__docgenInfo={displayName:"RobustCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var xs={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Ze,argTypes:{title:{control:{type:"text"}}}};const $s=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Ze},setup(){return{value:f(!1),args:e}}}),Tn=$s.bind({});Tn.args={title:"Checkbox title"};const Ts=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Ze},setup(){return{value:f(!1),args:e}}}),Vn=Ts.bind({});Vn.args={title:"V-Slot Checkbox title"};const Vs=["Default","SlottedTitle"];var Is=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xs,Default:Tn,SlottedTitle:Vn,__namedExportsOrder:Vs});const In=E({name:"RobustCircularProgress",props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),Bs=["width","height","viewBox"],Ps=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function Rs(e,t,o,n,r,s){return u(),d("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Ps)],8,Bs)}var Bn=S(In,[["render",Rs]]);In.__docgenInfo={displayName:"RobustCircularProgress",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Ms={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Bn,argTypes:{progress:{control:{type:"number"}}}};const js=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Bn},setup(){return{args:e}}}),Es=js.bind(),Ls=["Default"];var Os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ms,Default:Es,__namedExportsOrder:Ls});function $e(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=As(e):/rgb/.test(e)?t=Xt(e):typeof e=="string"?t=Xt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:o,g:n,b:r,a:s}=t,{h:a,s:i,v:l}=zs(t);return{r:o,g:n,b:r,a:s===void 0?1:s,h:a,s:i,v:l}}function Pn(e){const t=document.createElement("canvas"),o=t.getContext("2d"),n=e*2;return t.width=n,t.height=n,o.fillStyle="#ffffff",o.fillRect(0,0,n,n),o.fillStyle="#ccd5db",o.fillRect(0,0,e,e),o.fillRect(e,e,e,e),t}function Jt(e,t,o,n,r,s){const a=e==="l",i=t.createLinearGradient(0,0,a?o:0,a?0:n);i.addColorStop(.01,r),i.addColorStop(.99,s),t.fillStyle=i,t.fillRect(0,0,o,n)}function Ns({r:e,g:t,b:o},n){const r=a=>("0"+Number(a).toString(16)).slice(-2),s=`#${r(e)}${r(t)}${r(o)}`;return n?s.toUpperCase():s}function As(e){e=e.slice(1);const t=o=>parseInt(o,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function Xt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function zs({r:e,g:t,b:o}){e=e/255,t=t/255,o=o/255;const n=Math.max(e,t,o),r=Math.min(e,t,o),s=n-r;let a=0;n===r?a=0:n===e?t>=o?a=60*(t-o)/s:a=60*(t-o)/s+360:n===t?a=60*(o-e)/s+120:n===o&&(a=60*(e-t)/s+240),a=Math.floor(a);const i=parseFloat((n===0?0:1-r/n).toFixed(2)),l=parseFloat(n.toFixed(2));return{h:a,s:i,v:l}}const Rn=E({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const o=f({}),{size:n,hsv:r,color:s}=F(e),a=f(),i=f(),l=p=>{const g=p,v=n.value,V=g.getContext("2d");g.width=v,g.height=v,V.fillStyle=s.value,V.fillRect(0,0,v,v),Jt("l",V,v,v,"#FFFFFF","rgba(255,255,255,0)"),Jt("p",V,v,v,"rgba(0,0,0,0)","#000000")},m=()=>{o.value={left:r.value.s*n.value-5+"px",top:(1-r.value.v)*n.value-5+"px"}},y=p=>{const{top:g,left:v}=a.value.getBoundingClientRect(),V=p.target.getContext("2d"),_=U=>{let B=U.clientX-v,Y=U.clientY-g;B<0&&(B=0),Y<0&&(Y=0),B>n.value&&(B=n.value),Y>n.value&&(Y=n.value),o.value={left:B-5+"px",top:Y-5+"px"};const te=V.getImageData(Math.min(B,n.value-1),Math.min(Y,n.value-1),1,1),[q,W,G]=te.data;t("selectSaturation",{r:q,g:W,b:G})};_(p);const C=()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",_),document.addEventListener("mouseup",C)};return ee(()=>{l(i.value),m()}),{slideSaturationStyle:o,selectSaturation:y,renderSlide:m,renderColor:l,saturation:a,canvasSaturation:i,color:s,hsv:r,size:n}}}),Hs={ref:"canvasSaturation"};function Fs(e,t,o,n,r,s){return u(),d("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ve((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[c("canvas",Hs,null,512),c("div",{style:Q(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Ws=S(Rn,[["render",Fs]]);Rn.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Mn=E({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const o=f({}),n=f(),{height:r,width:s,hsv:a}=F(e),i=f(),l=p=>{const g=p,v=s.value,V=r.value,_=g.getContext("2d");g.width=v,g.height=V;const C=_.createLinearGradient(0,0,0,V);C.addColorStop(0,"#FF0000"),C.addColorStop(.17*1,"#FF00FF"),C.addColorStop(.17*2,"#0000FF"),C.addColorStop(.17*3,"#00FFFF"),C.addColorStop(.17*4,"#00FF00"),C.addColorStop(.17*5,"#FFFF00"),C.addColorStop(1,"#FF0000"),_.fillStyle=C,_.fillRect(0,0,v,V)},m=()=>{o.value={top:(1-a.value.h/360)*r.value-2+"px"}},y=p=>{const{top:g}=i.value.getBoundingClientRect(),v=p.target.getContext("2d"),V=C=>{let U=C.clientY-g;U<0&&(U=0),U>r.value&&(U=r.value),o.value={top:U-2+"px"};const B=v.getImageData(0,Math.min(U,r.value-1),1,1),[Y,te,q]=B.data;t("selectHue",{r:Y,g:te,b:q})};V(p);const _=()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",V),document.addEventListener("mouseup",_)};return ee(()=>{l(n.value),m()}),{slideHueStyle:o,hue:i,width:s,height:r,renderSlide:m,selectHue:y,renderColor:l,hsv:a,canvasHue:n}}}),Us={ref:"canvasHue"};function Gs(e,t,o,n,r,s){return u(),d("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ve((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[c("canvas",Us,null,512),c("div",{style:Q(e.slideHueStyle),class:"slide"},null,4)],544)}var Ys=S(Mn,[["render",Gs]]);Mn.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const jn=E({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=f(5),{color:o,width:n,height:r}=F(e),s=f(),a=i=>{const l=i,m=n.value,y=r.value,p=t.value,g=Pn(p),v=l.getContext("2d");l.width=m,l.height=y,v.fillStyle=v.createPattern(g,"repeat"),v.fillRect(0,0,m,y),v.fillStyle=o.value,v.fillRect(0,0,m,y)};return ee(()=>{vn(()=>{a(s.value)}),a(s.value)}),{alphaSize:t,color:o,width:n,height:r,canvas:s}}}),qs={ref:"canvas"};function Ks(e,t,o,n,r,s){return u(),d("canvas",qs,null,512)}var Js=S(jn,[["render",Ks]]);jn.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const En=E({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:w({get(){return e.color||""},set(n){t("inputColor",n)}})}}}),Xs={class:"color-type"},Qs={class:"name"};function Zs(e,t,o,n,r,s){return u(),d("div",Xs,[c("span",Qs,R(e.name),1),Z(c("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.modelColor=a),class:"value"},null,512),[[je,e.modelColor]])])}var el=S(En,[["render",Zs]]);En.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Ln=E({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const o=f(),n=f([]),r=f();e.colorsHistoryKey&&localStorage&&(n.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),r.value=Pn(4).toDataURL(),Ee(()=>{s(o.value)});const s=i=>{if(!i)return;const l=n.value||[],m=l.indexOf(i);m>=0&&l.splice(m,1),l.length>=8&&(l.length=7),l.unshift(i),n.value=l||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(l))};return{setColorsHistory:s,colorsHistory:n,color:o,imgAlphaBase64:r,selectColor:i=>{t("selectColor",i)}}}}),tl={class:"colors"},nl=["onClick"],ol={key:0,class:"colors history"},al=["onClick"];function rl(e,t,o,n,r,s){return u(),d("div",null,[c("ul",tl,[(u(!0),d(P,null,A(e.colorsDefault,a=>(u(),d("li",{key:a,class:"item",onClick:i=>e.selectColor(a)},[c("div",{style:Q({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:Q({background:a}),class:"color"},null,4)],8,nl))),128))]),e.colorsHistory.length?(u(),d("ul",ol,[(u(!0),d(P,null,A(e.colorsHistory,a=>(u(),d("li",{key:a,class:"item",onClick:i=>e.selectColor(a)},[c("div",{style:Q({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:Q({background:a}),class:"color"},null,4)],8,al))),128))])):h("",!0)])}var sl=S(Ln,[["render",rl]]);Ln.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const On=E({name:"RobustColorPicker",components:{Saturation:Ws,Hue:Ys,Preview:Js,Box:el,Colors:sl},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const o=f(15),n=f(152),r=f(20),s=f(""),a=f(""),i=f(0),l=f(0),m=f(0),y=f(1),p=f(0),g=f(0),v=f(0),V=f(),_=f(),{theme:C,color:U}=F(e),B=w(()=>C.value==="light"),Y=w(()=>n.value+(o.value+8)*2),te=w(()=>Y.value-r.value),q=w(()=>({r:i.value,g:l.value,b:m.value,a:y.value})),W=w(()=>({h:p.value,s:g.value,v:v.value})),G=w(()=>`rgb(${i.value}, ${l.value}, ${m.value})`),ne=w(()=>`${i.value}, ${l.value}, ${m.value}`),pe=w(()=>`rgb(${ne.value})`),ae=w(()=>Ns(q.value,!0)),M=()=>{a.value=ae.value,s.value=ne.value};return ee(()=>{const z=$e(U.value);i.value=z.r,l.value=z.g,m.value=z.b,y.value=z.a,p.value=z.h,g.value=z.s,v.value=z.v,M()}),vn(()=>{t("changeColor",{rgba:q.value,hsv:W.value,hex:a.value})}),{hueWidth:o,hueHeight:n,previewHeight:r,modelRgba:s,modelHex:a,r:i,g:l,b:m,a:y,h:p,s:g,v,isLightTheme:B,totalWidth:Y,previewWidth:te,rgba:q,hsv:W,rgbString:G,rgbStringShort:ne,rgbaString:pe,hexString:ae,setText:M,selectSaturation:z=>{const T=$e(z);i.value=T.r,l.value=T.g,m.value=T.b,y.value=T.a,p.value=T.h,g.value=T.s,v.value=T.v,M()},selectHue:z=>{const T=$e(z);i.value=T.r,l.value=T.g,m.value=T.b,y.value=T.a,p.value=T.h,g.value=T.s,v.value=T.v,M(),ye(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide()})},inputHex:z=>{const T=$e(z);i.value=T.r,l.value=T.g,m.value=T.b,y.value=T.a,p.value=T.h,g.value=T.s,v.value=T.v,a.value=z,s.value=ne.value,ye(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),V.value.renderSlide()})},inputRgba:z=>{const T=$e(z);i.value=T.r,l.value=T.g,m.value=T.b,y.value=T.a,p.value=T.h,g.value=T.s,v.value=T.v,a.value=ae.value,s.value=`${i.value}, ${l.value}, ${m.value}`,ye(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),V.value.renderSlide()})},selectColor:z=>{const T=$e(z);i.value=T.r,l.value=T.g,m.value=T.b,y.value=T.a,p.value=T.h,g.value=T.s,v.value=T.v,M(),ye(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),V.value.renderSlide()})},saturation:_,hue:V,color:U,theme:C}}}),ll={class:"color-set"};function il(e,t,o,n,r,s){const a=b("Saturation"),i=b("Hue"),l=b("Preview"),m=b("Box"),y=b("Colors");return u(),d("div",{class:k(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:Q({width:e.totalWidth+"px"})},[c("div",ll,[D(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),D(i,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),c("div",{style:Q({height:e.previewHeight+"px"}),class:"color-show"},[D(l,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),D(m,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),D(m,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),D(y,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var Nn=S(On,[["render",il]]);On.__docgenInfo={displayName:"RobustColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var ul={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:Nn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const dl=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:Nn},setup(){return{args:e}}}),cl=dl.bind(),pl=["Default"];var ml=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ul,Default:cl,__namedExportsOrder:pl});const An=E({name:"RobustSeparator",props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),fl={key:1,class:"flex items-center"},gl={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function yl(e,t,o,n,r,s){return e.$slots.default?(u(),d("div",fl,[c("div",{class:k(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),c("div",gl,[O(e.$slots,"default")]),c("div",{class:k(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(u(),d("div",{key:0,class:k(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var vl=S(An,[["render",yl]]);An.__docgenInfo={displayName:"RobustSeparator",exportName:"default",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const zn=E({name:"RobustContentBox",components:{Separator:vl},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),bl={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},hl={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},_l={class:"flex"},kl={key:1,class:"text-gray-500 dark:text-gray-500"},wl={class:"p-4 sm:p-6"};function Cl(e,t,o,n,r,s){const a=b("Separator");return u(),d("section",bl,[e.description!==void 0||e.title!==void 0?(u(),d("header",hl,[e.stripe?(u(),d("div",{key:0,class:k(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):h("",!0),c("h1",_l,[c("div",{class:k(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[O(e.$slots,"title",{title:e.title},()=>[ke(R(e.title),1)])],2)]),e.description!==void 0?(u(),d("p",kl,[O(e.$slots,"description",{description:e.description},()=>[ke(R(e.description),1)])])):h("",!0)])):h("",!0),D(a),c("div",wl,[O(e.$slots,"default")])])}var Oe=S(zn,[["render",Cl]]);zn.__docgenInfo={displayName:"RobustContentBox",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var Dl={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Oe,argTypes:{title:{control:{type:"text"}}}};const Sl=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Oe},setup(){return{args:e}}}),xl=Sl.bind(),$l=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Oe},setup(){return{args:e}}}),Hn=$l.bind();Hn.args={title:"Input title"};const Tl=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Oe},setup(){return{args:e}}}),Fn=Tl.bind();Fn.args={title:"Input title"};const Vl=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Oe},setup(){return{args:e}}}),Wn=Vl.bind();Wn.args={title:"Input title"};const Il=["Default","Title","TitleProp","Stripe"];var Bl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dl,Default:xl,Title:Hn,TitleProp:Fn,Stripe:Wn,__namedExportsOrder:Il});const Ne=Symbol("Data Table settings state provider identifier"),Be=Symbol("Data Table settings update provider identifier"),Tt=Symbol("Data Table settings add udpated record provider identifier");var Pl={setup(){const e=kt({totalCount:0,pageSize:25,page:1,updatedRecords:{},isDirty:!1,keyword:""});oe(e.updatedRecords,()=>{e.isDirty||(e.isDirty=!0)},{deep:!0});const t=(n,r)=>{e[n]=r},o=n=>{e.updatedRecords[n.id]=n};st(Ne,F(Fa(e))),st(Tt,o),st(Be,t)},render(){return this.$slots.default()}};const Un={props:{size:{type:String,default:"24px"}}},Rl=e=>(de("data-v-738db624"),e=e(),ce(),e),Ml=["width","height"],jl=Rl(()=>c("path",{class:"icon","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"},null,-1)),El=[jl];function Ll(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},El,8,Ml)}var Ol=S(Un,[["render",Ll],["__scopeId","data-v-738db624"]]);Un.__docgenInfo={exportName:"default",displayName:"SortAscIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const Gn={props:{size:{type:String,default:"24px"}}},Nl=e=>(de("data-v-20e50232"),e=e(),ce(),e),Al=["width","height"],zl=Nl(()=>c("path",{class:"icon","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"},null,-1)),Hl=[zl];function Fl(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},Hl,8,Al)}var Wl=S(Gn,[["render",Fl],["__scopeId","data-v-20e50232"]]);Gn.__docgenInfo={exportName:"default",displayName:"SortDescIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const Yn={props:{size:{type:String,default:"24px"}}},Ul=e=>(de("data-v-040f55c5"),e=e(),ce(),e),Gl=["width","height"],Yl=Ul(()=>c("path",{class:"icon","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)),ql=[Yl];function Kl(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},ql,8,Gl)}var Jl=S(Yn,[["render",Kl],["__scopeId","data-v-040f55c5"]]);Yn.__docgenInfo={exportName:"default",displayName:"MenuIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const qn={props:{size:{type:String,default:"24px"}}},Xl=e=>(de("data-v-3e6ad335"),e=e(),ce(),e),Ql=["width","height"],Zl=Xl(()=>c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"},null,-1)),ei=[Zl];function ti(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},ei,8,Ql)}var Kn=S(qn,[["render",ti],["__scopeId","data-v-3e6ad335"]]);qn.__docgenInfo={exportName:"default",displayName:"PlusIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const Jn={props:{size:{type:String,default:"24px"}}},ni=e=>(de("data-v-0bc25aaa"),e=e(),ce(),e),oi=["width","height"],ai=ni(()=>c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1)),ri=[ai];function si(e,t,o,n,r,s){return u(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:o.size,height:o.size},ri,8,oi)}var Xn=S(Jn,[["render",si],["__scopeId","data-v-0bc25aaa"]]);Jn.__docgenInfo={exportName:"default",displayName:"MinusIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const Qn={components:{SortAscIcon:Ol,SortDescIcon:Wl,MenuIcon:Jl},props:{modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:o}=F(e),n=w({get(){return o.value},set(s){t("update:modelValue",s)}});return{sort:n,onToggle:()=>{n.value>0?n.value=-1:n.value+=1}}}};function li(e,t,o,n,r,s){const a=b("sort-asc-icon"),i=b("sort-desc-icon"),l=b("menu-icon");return u(),d("div",{class:k(["data-table-header__icon",n.sort?"visible":"sm:invisible"]),onClick:t[0]||(t[0]=(...m)=>n.onToggle&&n.onToggle(...m))},[n.sort<0?(u(),L(a,{key:0,size:"16px"})):n.sort>0?(u(),L(i,{key:1,size:"16px"})):(u(),L(l,{key:2,size:"16px"}))],2)}var ii=S(Qn,[["render",li]]);Qn.__docgenInfo={exportName:"default",displayName:"SortToggle",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}]};const Zn={components:{SortToggle:ii},props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:o}=F(e);return{cell:w({get(){return o.value},set(r){t("update:modelValue",r)}})}}},ui=["title"];function di(e,t,o,n,r,s){const a=b("sort-toggle");return u(),d(P,null,[c("span",{class:"font-medium text-sm uppercase truncate",title:n.cell.title},R(n.cell.title),9,ui),n.cell.sortable?(u(),L(a,{key:0,modelValue:n.cell.sortDirection,"onUpdate:modelValue":t[0]||(t[0]=i=>n.cell.sortDirection=i)},null,8,["modelValue"])):h("",!0)],64)}var ci=S(Zn,[["render",di],["__scopeId","data-v-7df05b06"]]);Zn.__docgenInfo={exportName:"default",displayName:"DataTableHeaderCell",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}}],events:[{name:"update:modelValue"}]};const eo={components:{HeaderCell:ci},emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},hideFirst:{type:Boolean,default:!1},isInlineEditMode:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t}){const{modelValue:o}=F(e);return{headersData:w({get(){const a=o.value,{sort:r}=a;return At(a,["sort"])},set(r){t("update:modelValue",r)}})}}},pi=e=>(de("data-v-11126b3d"),e=e(),ce(),e),mi={key:0},fi={key:0,class:"data-table-header border-bottom-2 flex items-center justify-between sm:justify-center px-4 py-2 text-sm tracking-wider cursor-pointer"},gi=pi(()=>c("span",{class:"font-medium uppercase truncate",title:"actions"}," actions ",-1)),yi=[gi];function vi(e,t,o,n,r,s){const a=b("header-cell");return u(),d(P,null,[(u(!0),d(P,null,A(o.hideFirst?Object.keys(n.headersData).slice(1):Object.keys(n.headersData),i=>(u(),d("div",{key:i,class:k(["data-table-header border-bottom-2 flex items-center justify-between sm:justify-center px-4 py-2 text-sm tracking-wider cursor-pointer",o.isInlineEditMode?"h-12 sm:h-auto":"h-10 sm:h-auto"])},[D(a,{modelValue:n.headersData[i],"onUpdate:modelValue":l=>n.headersData[i]=l},null,8,["modelValue","onUpdate:modelValue"])],2))),128)),o.hasActionColumn?(u(),d("div",mi,[o.isInlineEditMode?h("",!0):(u(),d("div",fi,yi))])):h("",!0)],64)}var bi=S(eo,[["render",vi],["__scopeId","data-v-11126b3d"]]);eo.__docgenInfo={exportName:"default",displayName:"DataTableHeader",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"data",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hideFirst",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInlineEditMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const Vt={components:{TableHeader:bi,PlusIcon:Kn,MinusIcon:Xn},emits:["update:modelValue"],props:{modelValue:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},config:Object,gridTemplateColumnsCss:String,isInlineEditMode:{type:Boolean,default:!0},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t}){const{modelValue:o,config:n}=F(e),r=w({get(){return o.value},set(s){t("update:modelValue",s)}});return fe({headersData:r},kt({size:Object.keys(r.value).length}))}},Qt=()=>{_t(e=>({b6b43b7a:e.size}))},Zt=Vt.setup;Vt.setup=Zt?(e,t)=>(Qt(),Zt(e,t)):Qt;const to=Vt,no=e=>(de("data-v-54c095ae"),e=e(),ce(),e),hi={class:"data-table-header-container grid sm:hidden col-span-1"},_i={class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-3 text-sm tracking-wider cursor-pointer bg-gray-700 border-b-2"},ki={class:"mr-2 text-white"},wi={class:"truncate w-full"},Ci=no(()=>c("div",{class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"}," Key ",-1)),Di=no(()=>c("div",{class:"data-table-header border-bottom-2 flex items-center justify-center px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-500"}," Key ",-1));function Si(e,t,o,n,r,s){const a=b("plus-icon"),i=b("minus-icon"),l=b("table-header");return u(),d(P,null,[c("div",hi,[o.config.groupBy?(u(!0),d(P,{key:0},A(o.data,(m,y)=>(u(),d(P,{key:y},[c("div",_i,[c("div",ki,[o.config.collapsed&&o.config.collapsed[y]?(u(),L(a,{key:0,size:"16px"})):(u(),L(i,{key:1,size:"16px"}))]),c("span",wi,R(`${o.config.groupBy.toUpperCase()}: ${y}`),1)]),o.config.collapsed&&o.config.collapsed[y]?h("",!0):(u(!0),d(P,{key:0},A(o.data[y].children,p=>(u(),d(P,{key:p.id},[Ci,D(l,{modelValue:n.headersData,"onUpdate:modelValue":t[0]||(t[0]=g=>n.headersData=g),hideFirst:!0},null,8,["modelValue"])],64))),128))],64))),128)):(u(!0),d(P,{key:1},A(o.data,m=>(u(),d("div",{key:m.id},[Di,D(l,{modelValue:n.headersData,"onUpdate:modelValue":t[1]||(t[1]=y=>n.headersData=y),isInlineEditMode:o.isInlineEditMode},null,8,["modelValue","isInlineEditMode"])]))),128))]),c("div",{class:"data-table-header-container hidden sm:grid col-span-1 grid-cols-1 bg-gray-500",style:Q({"grid-template-columns":o.gridTemplateColumnsCss})},[D(l,{modelValue:n.headersData,"onUpdate:modelValue":t[2]||(t[2]=m=>n.headersData=m),isInlineEditMode:o.isInlineEditMode},null,8,["modelValue","isInlineEditMode"])],4)],64)}var xi=S(to,[["render",Si],["__scopeId","data-v-54c095ae"]]);to.__docgenInfo={exportName:"default",displayName:"DataTableHeaderContainer",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"data",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"}},{name:"gridTemplateColumnsCss",type:{name:"string"}},{name:"isInlineEditMode",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}]};const oo={components:{PhCaretLeft:fn,PhCaretRight:gn},setup(){const{pageSize:e,totalCount:t,page:o}=ie(Ne),n=f(0),r=ie(Be),s=a=>r("page",a);return oe([t,e],()=>n.value=Math.ceil(t.value/e.value)),{pageSize:e,pageCount:n,page:o,setPage:s}}},ao=e=>(de("data-v-5e0c9306"),e=e(),ce(),e),$i={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},Ti=ao(()=>c("span",{class:"sr-only"},"Previous",-1)),Vi=["onClick"],Ii=ao(()=>c("span",{class:"sr-only"},"Next",-1));function Bi(e,t,o,n,r,s){const a=b("PhCaretLeft"),i=b("PhCaretRight");return u(),d("div",null,[c("nav",$i,[c("span",{onClick:t[0]||(t[0]=()=>n.page>1&&n.setPage(n.page-1)),class:"paginate-btn relative inline-flex items-center p-2 rounded-l-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[Ti,D(a,{type:"chevron-left",class:"h-5 w-5",size:"24",weight:"bold"})]),(u(!0),d(P,null,A(n.pageCount,l=>(u(),d("span",{key:l,onClick:()=>n.setPage(l),class:k(["paginate-btn relative inline-flex items-center px-4 py-2 border border-gray-700 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300",l===n.page?"bg-gray-200 active":""])},R(l),11,Vi))),128)),c("span",{onClick:t[1]||(t[1]=()=>n.page<n.pageCount&&n.setPage(n.page+1)),class:"paginate-btn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[Ii,D(i,{type:"chevron-right",class:"h-5 w-5",size:"24",weight:"bold"})])])])}var Pi=S(oo,[["render",Bi],["__scopeId","data-v-5e0c9306"]]);oo.__docgenInfo={exportName:"default",displayName:"PaginationBar",description:"",tags:{}};const ro={setup(){const e=f(),t=f(null),{pageSize:o}=ie(Ne),n=ie(Be),r=()=>{e.value=!e.value},s=i=>{i!==o.value&&(o.value=i,e.value=!1,n("pageSize",i))},a=i=>{e.value&&!t.value.contains(i.target)&&(e.value=!1)};return ee(()=>{document.addEventListener("click",a)}),Ee(()=>{document.removeEventListener("click",a)}),{isOpen:e,containerRef:t,pageSize:o,toggleDropdown:r,selectItem:s}}},Ri={class:"flex flex-col ml-2 h-full",ref:"containerRef"},Mi={class:"truncate min-w-0 select-none"},ji={key:0,class:"absolute top-[60px] ml-0.5 z-50 border rounded-lg py-2"},Ei=["onClick"];function Li(e,t,o,n,r,s){const a=b("ph-caret-down");return u(),d("div",null,[c("div",Ri,[c("div",{class:"flex relative items-center p-1.5 h-full cursor-pointer border border-gray-700 rounded-md overflow-hidden shadow-inner flex focus-within:outline-none focus-within:ring shadow-outline h-8",onClick:t[0]||(t[0]=(...i)=>n.toggleDropdown&&n.toggleDropdown(...i))},[c("div",{class:k(["bg-transparent w-full h-full text-current outline-none flex items-center",[e.$slots.prefix||"pl-2"]])},[c("div",Mi,R(n.pageSize),1)],2),c("div",{class:k(["h-full flex-shrink-0 flex items-center pr-2 text-gray-400",["pl-2"]])},[D(a,{size:18,class:k(["transition-transform duration-200",{"transform rotate-180":n.isOpen}])},null,8,["class"])])]),n.isOpen?(u(),d("ul",ji,[(u(),d(P,null,A([10,25,50],i=>c("li",{class:k(["px-4 py-1.5 cursor-pointer hover:bg-gray-400 transition-colors duration-200 flex justify-center items-center",n.pageSize===i?"bg-gray-200":""]),key:i,onClick:l=>n.selectItem(i)},[c("span",null,R(i),1)],10,Ei)),64))])):h("",!0)],512)])}var Oi=S(ro,[["render",Li]]);ro.__docgenInfo={exportName:"default",displayName:"PageSizeSelectBar",description:"",tags:{}};const so={components:{PageSizeSelectBar:Oi,PaginationBar:Pi},props:{config:Object},emits:["patch-records"],setup(e,{emit:t}){const{isDirty:o,updatedRecords:n}=ie(Ne),r=ie(Be),s=()=>{r("updatedRecords",{}),r("isDirty",!1)};return{isDirty:o,updatedRecords:n,patchRecords:()=>{t("patch-records",Object.values(n.value)),s()}}}},Ni={class:"sticky bottom-4 opacity-40 hover:opacity-100 sm:opacity-100 sm:flex"},Ai={class:"flex items-start ml-auto mt-4 w-full"},zi=ke(" Update "),Hi={class:"group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-gray-500 text-gray-200"};function Fi(e,t,o,n,r,s){const a=b("pagination-bar"),i=b("page-size-select-bar");return u(),d("div",Ni,[c("div",Ai,[o.config.hidePagination?h("",!0):(u(),L(a,{key:0})),o.config.hidePagination?h("",!0):(u(),L(i,{key:1})),n.isDirty&&(!o.config.hideUpdateButton||o.config.hideUpdateButton===!1)?(u(),d("button",{key:2,type:"button",onClick:t[0]||(t[0]=(...l)=>n.patchRecords&&n.patchRecords(...l)),class:"ml-auto inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[zi,c("span",Hi,R(Object.keys(n.updatedRecords).length),1)])):h("",!0)])])}var Wi=S(so,[["render",Fi]]);so.__docgenInfo={exportName:"default",displayName:"DataTableFooter",description:"",tags:{},props:[{name:"config",type:{name:"object"}}],events:[{name:"patch-records"}]};var Ui=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],Pe=E({name:"RobustPopper",props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:o}){const{open:n,appendTo:r}=F(e),s=f();let a;const i=f(!1),l={strategy:"absolute",placement:"bottom-start",modifiers:[...Ui,...e.modifiers]};function m(){a==null||a.destroy(),i.value=!1}async function y(v){if(!v)return;const V=Object.assign({},l,e.options);!s.value||(a=Wa(v,s.value,V),await a.update())}Ee(()=>{m()});async function p(){await y(r.value),s.value&&(a==null||a.update(),Ft.fromTo(s.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function g(){s.value&&Ft.fromTo(s.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{m()})}return ee(()=>{if(!o.default)throw new Error("Popper does not have a child slot");oe(n,v=>{i.value=!0,ye(async()=>{v?p():g()})})}),{appendTo:r,root:s,render:i}},render(){if(this.render)return Te("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const lo=E({name:"RobustDatePicker",components:{Popper:Pe,Calendar:Qe,InputWrapper:Ce,PhCaretDown:wt,PhCalendar:bn},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:o}){const n=f(),{modelValue:r}=F(e),s=f(!1),a=f(),i=f();Je(a,p=>{s.value&&(i.value.wrapperRef.contains(p.target)&&(p.stopPropagation(),p.preventDefault()),y(),t("blur"))});const l=w({get(){return(r==null?void 0:r.value)?r.value:new Date},set(p){s.value=!1,t("update:modelValue",p),t("change",p),t("blur")}}),m=w(()=>{if(!l.value)return"Select date";const p=l.value;try{return p?ge(p,"P"):"Unknown"}catch{return}});function y(){s.value===!0&&(s.value=!1,t("blur"))}return{attrs:o,refSelectContainer:n,open:s,props:e,displayDate:m,computedValue:l,closeDropdown:y,popperRef:a,inputWrapperRef:i}},methods:{}}),Gi=["id"],Yi={class:"min-w-0 truncate tabular-nums"};function qi(e,t,o,n,r,s){var p,g;const a=b("PhCalendar"),i=b("PhCaretDown"),l=b("InputWrapper"),m=b("Calendar"),y=b("Popper");return u(),d(P,null,[D(l,{title:e.title,hint:e.hint,error:e.error,class:k([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ve(v=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:K(v=>[c("div",{class:k(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[D(a,{size:"20"})],2),c("div",ue({id:v.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Yi,R(e.displayDate),1)],16,Gi),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[D(i,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((p=e.inputWrapperRef)==null?void 0:p.wrapperRef)?(u(),L(y,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(g=e.inputWrapperRef)==null?void 0:g.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=v=>e.open=v),options:{placement:"bottom-start"}},{default:K(()=>[D(m,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=v=>e.computedValue=v)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):h("",!0)],64)}var Ae=S(lo,[["render",qi]]);lo.__docgenInfo={displayName:"RobustDatePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const io=E({name:"RobustSelect",components:{Popper:Pe,InputWrapper:Ce,PhCheck:yn,PhCaretDown:wt},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:o}){const n=f(),r=f(),{options:s}=F(e),a=f(!1),i=f(),l=f(),m=f("");let y=f([]);async function p(B){e.searchFunction!==void 0&&(y.value=await e.searchFunction(B)),B===""?y.value=s.value:y.value=s.value.filter(Y=>Y.title.toLowerCase().substring(0,B.length)===B.toLowerCase())}Ua(m,async B=>{await p(B)},{debounce:150}),ee(async()=>{await p("")});const g=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:B=>{B.state.styles.popper.width=`${Math.max(B.state.rects.reference.width,200)}px`},effect:B=>{B.state.elements.popper.style.width=`${B.state.elements.reference.getBoundingClientRect().width}px`}}],v=w(()=>e.options.find(B=>B.value===e.modelValue));function V(B){ye(()=>{C()}),t("update:modelValue",B.value),t("change",B.value)}function _(){a.value=!0,ye(()=>{r.value.focus()}),t("focus")}Je(i,B=>{a.value&&(l.value.wrapperRef.contains(B.target)&&(B.stopPropagation(),B.preventDefault()),U(),C(),t("blur"))});function C(){a.value=!1}function U(){m.value=""}return{refSelectInput:r,refSelectContainer:n,closeDropdown:C,open:a,props:e,openDropdown:_,inputWrapper:l,popperModifiers:g,activeItem:v,selectItem:V,computedOptions:y,resetFields:U,attrs:o,search:m,popperRef:i}}}),Ki=["id"],Ji={class:"min-w-0 select-none truncate"},Xi={key:0,class:"max-h-72 overflow-auto"},Qi=["onClick"],Zi={key:1,class:"py-2 text-center text-gray-400"};function eu(e,t,o,n,r,s){var y,p;const a=b("PhCaretDown"),i=b("InputWrapper"),l=b("PhCheck"),m=b("Popper");return u(),d(P,null,[D(i,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:k([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:K(g=>[e.$slots.prefix?(u(),d("div",{key:0,class:k(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[O(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),Z(c("div",ue({id:g.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[c("div",Ji,R(e.activeItem?e.activeItem.title:"Select"),1)],16,Ki),[[lt,!e.open]]),Z(c("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=v=>e.search=v),size:"1",class:k(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[lt,e.open],[je,e.search]]),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[D(a,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((y=e.inputWrapper)==null?void 0:y.wrapperRef)?(u(),L(m,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=g=>e.open=g),ref:"popperRef",class:"z-[100] origin-top","append-to":(p=e.inputWrapper)==null?void 0:p.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:K(()=>[e.computedOptions.length>0?(u(),d("ul",Xi,[(u(!0),d(P,null,A(e.computedOptions,g=>(u(),d("li",{key:g.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:v=>e.selectItem(g)},[c("span",null,R(g.title),1),e.modelValue===g.value?(u(),L(l,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):h("",!0)],8,Qi))),128))])):(u(),d("div",Zi,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):h("",!0)],64)}var et=S(io,[["render",eu]]);io.__docgenInfo={displayName:"RobustSelect",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};const uo={components:{DatePicker:Ae,Select:et},props:{modelValue:{type:[String,Number]},type:{type:String},options:{type:Array},isInlineEditMode:{type:Boolean}},emits:["update:modelValue","click","change"],setup(e,{emit:t}){const{modelValue:o}=F(e);return{cell:w({get:()=>o.value,set:r=>{t("update:modelValue",r),t("change")}})}}},tu={key:0,class:"flex w-full"},nu={key:1,class:"flex items-center class w-full truncate"};function ou(e,t,o,n,r,s){const a=b("DatePicker"),i=b("Select");return u(),d("div",{class:k(["flex px-4 py-2 text-center whitespace-nowrap text-sm font-medium",o.isInlineEditMode?"h-12 sm:h-auto":"h-10 sm:h-auto"]),onClick:t[4]||(t[4]=l=>e.$emit("click"))},[o.isInlineEditMode?(u(),d("div",tu,[O(e.$slots,"leftIcon"),o.type==="text"||o.type==="number"?Z((u(),d("input",{key:0,type:"{{type}}","onUpdate:modelValue":t[0]||(t[0]=l=>n.cell=l),class:"bg-transparent truncate"},null,512)),[[je,n.cell]]):h("",!0),o.type==="checkbox"?Z((u(),d("input",{key:1,type:"checkbox",class:"bg-transparent truncate","onUpdate:modelValue":t[1]||(t[1]=l=>n.cell=l)},null,512)),[[Ke,n.cell]]):h("",!0),o.type==="date"?(u(),L(a,{key:2,class:"p-2 col-span-2 sm:col-span-1",modelValue:new Date(n.cell),"onUpdate:modelValue":t[2]||(t[2]=l=>n.cell=l)},null,8,["modelValue"])):h("",!0),o.type==="enum"?(u(),L(i,{key:3,class:"bg-transparent truncate rounded",modelValue:n.cell,"onUpdate:modelValue":t[3]||(t[3]=l=>n.cell=l),options:o.options},null,8,["modelValue","options"])):h("",!0)])):h("",!0),o.isInlineEditMode?h("",!0):(u(),d("div",nu,[c("span",null,R(n.cell),1)]))],2)}var co=S(uo,[["render",ou]]);uo.__docgenInfo={exportName:"default",displayName:"DataTableCell",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"type",type:{name:"string"}},{name:"options",type:{name:"array"}},{name:"isInlineEditMode",type:{name:"boolean"}}],events:[{name:"click"},{name:"update:modelValue"},{name:"change"}],slots:[{name:"leftIcon"}]};const po={components:{DataTableCell:co},props:{modelValue:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},isGrouped:{type:Boolean,default:!1},isInlineEditMode:{type:Boolean},actionComponent:{type:Object},hasActionColumn:{type:Boolean,default:!1}},emits:["update:modelValue","click","edit"],setup(e){const{modelValue:t}=F(e),o=ie(Tt);return{record:t,changeHandler:()=>{o(t.value)}}}},au=c("div",{class:"block sm:hidden data-table-header border-bottom-2 flex items-center justify-center text-center whitespace-nowrap px-4 py-2 text-sm tracking-wider cursor-pointer bg-gray-200 dark:bg-gray-500"},"Value",-1),ru={key:1},su={key:0,class:"flex items-center justify-center px-4 py-2 text-center whitespace-nowrap text-xs font-medium"};function lu(e,t,o,n,r,s){const a=b("data-table-cell"),i=b("ph-pencil");return u(),d(P,null,[au,o.isGrouped?(u(),L(a,{key:-1,modelValue:"",class:"hidden sm:grid"})):h("",!0),(u(!0),d(P,null,A(o.columns.slice(o.isGrouped?1:0),l=>O(e.$slots,l.key,{key:l.key,row:n.record,value:n.record[l.key],column:l.key},()=>[D(a,{type:l.type,column:l.key,options:l.options,isInlineEditMode:o.isInlineEditMode,class:k(l.fnClassRule?l.fnClassRule(n.record[l.key],n.record):null),onClick:t[0]||(t[0]=m=>e.$emit("click")),onChange:n.changeHandler,modelValue:n.record[l.key],"onUpdate:modelValue":m=>n.record[l.key]=m},null,8,["type","column","options","isInlineEditMode","class","onChange","modelValue","onUpdate:modelValue"])])),128)),o.hasActionColumn?(u(),d("div",ru,[o.isInlineEditMode?h("",!0):(u(),d("div",su,[o.actionComponent?(u(),L(qe(o.actionComponent),{key:0,record:n.record,onReload:t[1]||(t[1]=l=>e.$emit("reload")),onAction:t[2]||(t[2]=l=>e.$emit("action",l))},null,8,["record"])):(u(),d("button",{key:1,onClick:t[3]||(t[3]=l=>e.$emit("edit")),class:"p-1.5 rounded bg-blue-500 text-gray-100"},[D(i,{size:15})]))]))])):h("",!0)],64)}var iu=S(po,[["render",lu]]);po.__docgenInfo={exportName:"default",displayName:"DataTableRecord",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"isGrouped",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInlineEditMode",type:{name:"boolean"}},{name:"actionComponent",type:{name:"object"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"reload"},{name:"action"},{name:"edit"},{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"},{name:"column",title:"binding"}]}]};const mo={components:{DataTableCell:co,PlusIcon:Kn,MinusIcon:Xn},props:{modelValue:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},totalCount:{type:Number,default:2},collapsed:{type:Boolean,default:!1}},emits:["update:modelValue","toggle"],setup(e,{emit:t}){const{modelValue:o}=F(e),n=w({get:()=>o.value,set:s=>t("update:modelValue",s)});return{record:n,toggleGroup:()=>{t("toggle",n.value.group)}}}};function uu(e,t,o,n,r,s){const a=b("plus-icon"),i=b("minus-icon"),l=b("data-table-cell");return u(),d(P,null,[D(l,{key:"role",modelValue:n.record.group,class:"bg-gray-700 py-3 hidden sm:grid cursor-pointer border-b-2",onClick:n.toggleGroup},{leftIcon:K(()=>[o.collapsed?(u(),L(a,{key:0,size:"16px",class:"mr-2 text-white"})):(u(),L(i,{key:1,size:"16px",class:"mr-2 text-white"}))]),_:1},8,["modelValue","onClick"]),D(l,{key:"count",modelValue:`Count: ${n.record.count}`,class:"bg-gray-700 py-3 cursor-pointer border-b-2",onClick:n.toggleGroup},null,8,["modelValue","onClick"]),(u(!0),d(P,null,A(Array(o.totalCount-2).keys(),m=>(u(),L(l,{key:`empty-${m}`,modelValue:" ",class:"bg-gray-700 hidden sm:grid cursor-pointer border-b-2",onClick:n.toggleGroup},null,8,["onClick"]))),128))],64)}var du=S(mo,[["render",uu]]);mo.__docgenInfo={exportName:"default",displayName:"DataTableGroupRecord",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"collapsed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"toggle"}]};let Ie,it,ut,dt,ct,pt,mt,ft,gt,Me;const fo=e=>{const t=e||navigator.userAgent,o=/(iPad).*OS\s([\d_]+)/.test(t),n=!o&&/(iPhone\sOS)\s([\d_]+)/.test(t);return/(Android);?[\s/]+([\d.]+)?/.test(t)||n||o},cu=()=>{const e=document.body,t=window.innerWidth-e.clientWidth;Ie=e.style.overflow,it=e.style.boxSizing,ut=e.style.paddingRight,e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight=`${t+e.style.paddingRight}px`},pu=()=>{const e=document.body;e.style.overflow=Ie,e.style.boxSizing=it,e.style.paddingRight=ut,Ie="",it="",ut=""},mu=()=>{const e=document.documentElement,t=document.body;Me=e.scrollTop||t.scrollTop,dt=e.style.height,ct=e.style.overflow,pt=t.style.top,mt=t.style.width,ft=t.style.height,gt=t.style.position,Ie=t.style.overflow,e.style.height="100%",e.style.overflow="hidden",t.style.top=`-${Me}px`,t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden"},fu=()=>{const e="scrollBehavior"in document.documentElement.style,t=document.documentElement,o=document.body;t.style.height=dt,t.style.overflow=ct,o.style.top=pt,o.style.width=mt,o.style.height=ft,o.style.position=gt,o.style.overflow=Ie,e?window.scrollTo({top:Me,behavior:"auto"}):window.scrollTo(0,Me),Ie="",dt="",ct="",pt="",mt="",ft="",gt="",Me=""},gu=()=>{fo()&&mu(),cu()},yu=()=>{fo()&&fu(),pu()};const go=E({name:"RobustModal",inheritAttrs:!1,components:{PhX:Ga},props:{modalClass:{type:String},opened:{type:Boolean,default:!1}},setup(e,{emit:t}){const{opened:o}=F(e);oe(o,a=>{a?gu():yu()});function n(a){a.key==="Escape"&&o.value===!0&&(a.stopPropagation(),a.preventDefault(),s())}ee(()=>{window.addEventListener("keydown",n)}),Ee(()=>{window.removeEventListener("keydown",n)});async function r(){o.value=!0,t("update:opened",!0),t("open")}async function s(){o.value=!1,t("update:opened",!1),t("close")}return{open:r,close:s,opened:o}}}),vu={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},bu={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},hu={class:"leading-4"};function _u(e,t,o,n,r,s){const a=b("PhX");return u(),L(qa,{to:"#modal-area"},[D(Ya,ue(e.$attrs,{name:"slide"}),{default:K(()=>[e.opened?(u(),d("div",vu,[c("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75",onClick:t[0]||(t[0]=ve((...i)=>e.close&&e.close(...i),["self"]))}),c("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Ve((...i)=>e.close&&e.close(...i),["esc"]))},[c("div",{class:k(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(u(),d("div",bu,[c("div",hu,[O(e.$slots,"title",{},void 0,!0)]),c("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...i)=>e.close&&e.close(...i))},[D(a,{size:"20",class:"block"})])])):h("",!0),O(e.$slots,"default",{},void 0,!0)],2)],32)],512)):h("",!0)]),_:3},16)])}var It=S(go,[["render",_u],["__scopeId","data-v-5424aeae"]]);go.__docgenInfo={displayName:"RobustModal",exportName:"default",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"title"},{name:"default"}]};const Bt={components:{Record:iu,DataTableGroupRecord:du,DatePicker:Ae,Modal:It,Select:et},emits:["update:modelData","update:modelConfig","toggleGroup","clickRecord"],props:{columns:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})},config:Object,isInlineEditMode:{type:Boolean},hasActionColumn:{type:Boolean,default:!1},gridTemplateColumnsCss:String,actionComponent:{type:Object}},setup(e,{emit:t,slots:o}){const{data:n,columns:r,config:s,isInlineEditMode:a}=F(e),i=f(null),l=f(null),m=ie(Tt),y=w({get(){return n.value},set(_){t("update:modelData",_)}}),p=s.value.groupBy?w({get(){return[r.value.find(_=>_.key===s.value.groupBy),{title:"Count",key:"count",sortable:!0,editable:!0,hidden:!1,sortDirection:0}]}}):"";return fe({$slots:o,bodyData:y,groupColumns:p,toggleGroup:_=>{t("toggleGroup",_)},modalRef:i,openRecordEditModal:_=>{a.value||(l.value=y.value[_],i.value.open())},selectedRecord:l,updateSelectedRecord:()=>{m(l.value),i.value.close()}},kt({size:r.value.length}))}},en=()=>{_t(e=>({"65e55302":e.size}))},tn=Bt.setup;Bt.setup=tn?(e,t)=>(en(),tn(e,t)):en;const yo=Bt,ku={class:"px-6 pt-8 pb-4 grid grid-cols-2"},wu={class:"flex items-center min-w-[5.6rem]"},Cu={class:"flex w-full overflow-hidden"},Du=["type","onUpdate:modelValue"],Su=["onUpdate:modelValue"],xu={class:"p-4 pt-0 flex justify-end"};function $u(e,t,o,n,r,s){const a=b("data-table-group-record"),i=b("Record"),l=b("DatePicker"),m=b("Select"),y=b("Modal");return u(),d(P,null,[c("div",{class:"data-table-body block sm:grid col-span-1",style:Q({"grid-template-columns":o.gridTemplateColumnsCss})},[o.config.groupBy?(u(!0),d(P,{key:0},A(n.bodyData,(p,g)=>(u(),d(P,{key:g},[D(a,{modelValue:{group:g,count:p.children.length},columns:n.groupColumns,totalCount:o.columns.length,collapsed:o.config.collapsed&&o.config.collapsed[g],onToggle:n.toggleGroup},null,8,["modelValue","columns","totalCount","collapsed","onToggle"]),o.config.collapsed&&o.config.collapsed[g]?h("",!0):(u(!0),d(P,{key:0},A(n.bodyData[g].children,(v,V)=>(u(),L(i,{modelValue:n.bodyData[g].children[V],"onUpdate:modelValue":_=>n.bodyData[g].children[V]=_,columns:o.columns,key:v.id,"is-grouped":""},null,8,["modelValue","onUpdate:modelValue","columns"]))),128))],64))),128)):(u(!0),d(P,{key:1},A(n.bodyData,(p,g)=>(u(),L(i,{key:g,onEdit:v=>n.openRecordEditModal(g),onClick:v=>e.$emit("clickRecord",n.bodyData[g]),modelValue:n.bodyData[g],"onUpdate:modelValue":v=>n.bodyData[g]=v,columns:o.columns,isInlineEditMode:o.isInlineEditMode,actionComponent:o.actionComponent,hasActionColumn:o.hasActionColumn,onReload:t[0]||(t[0]=v=>e.$emit("reload")),onAction:t[1]||(t[1]=v=>e.$emit("action",v))},Ct({_:2},[A(n.$slots,(v,V)=>({name:V,fn:K(_=>[O(e.$slots,V,Dt(St(_||{})),void 0,!0)])}))]),1032,["onEdit","onClick","modelValue","onUpdate:modelValue","columns","isInlineEditMode","actionComponent","hasActionColumn"]))),128))],4),D(y,{name:"update-field",ref:"modalRef"},{default:K(()=>[c("div",ku,[(u(!0),d(P,null,A(o.columns,p=>(u(),d("div",{key:p.key,class:"flex items-center mx-2 my-4"},[c("span",wu,R(p.title)+":",1),c("div",Cu,[O(e.$slots,"leftIcon",{},void 0,!0),p.type==="text"||p.type==="number"?Z((u(),d("input",{key:0,type:p.type,class:"bg-transparent truncate","onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,Du)),[[mn,n.selectedRecord[p.key]]]):h("",!0),p.type==="checkbox"?Z((u(),d("input",{key:1,type:"checkbox",class:"bg-transparent truncate","onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,Su)),[[Ke,n.selectedRecord[p.key]]]):h("",!0),p.type==="date"?(u(),L(l,{key:2,class:"bg-transparent truncate",modelValue:new Date(n.selectedRecord[p.key]),"onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,["modelValue","onUpdate:modelValue"])):h("",!0),p.type==="enum"?(u(),L(m,{key:3,class:"bg-transparent truncate rounded",options:p.options,modelValue:n.selectedRecord[p.key],"onUpdate:modelValue":g=>n.selectedRecord[p.key]=g},null,8,["options","modelValue","onUpdate:modelValue"])):h("",!0)])]))),128))]),c("div",xu,[c("button",{onClick:t[2]||(t[2]=(...p)=>n.updateSelectedRecord&&n.updateSelectedRecord(...p))},"Save"),c("button",{onClick:t[3]||(t[3]=(...p)=>n.modalRef.close&&n.modalRef.close(...p)),class:"ml-2 bg-gray-400 hover:bg-gray-500"},"Cancel")])]),_:3},512)],64)}var Tu=S(yo,[["render",$u],["__scopeId","data-v-3c1a8e61"]]);yo.__docgenInfo={exportName:"default",displayName:"DataTableBody",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"data",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"}},{name:"isInlineEditMode",type:{name:"boolean"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gridTemplateColumnsCss",type:{name:"string"}},{name:"actionComponent",type:{name:"object"}}],events:[{name:"clickRecord"},{name:"reload"},{name:"action"},{name:"update:modelData"},{name:"update:modelConfig"},{name:"toggleGroup"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"leftIcon"}]};const vo={props:{columns:{type:Array,default:()=>[]},config:Object,activeColumn:Array},emits:["toggleColumn"],setup(e,{emit:t}){const o=f(),n=f(null),r=()=>{o.value=!o.value},s=l=>{o.value&&!n.value.contains(l.target)&&(o.value=!1)},a=l=>{t("toggleColumn",l)},i=l=>!!e.activeColumn.filter(m=>m.key===l).length;return ee(()=>{document.addEventListener("click",s)}),Ee(()=>{document.removeEventListener("click",s)}),{isOpen:o,toggleDropdown:r,containerRef:n,selectItem:a,activeColumn:e.activeColumn,isActive:i}}},Vu={key:0,class:"inline-block relative",ref:"containerRef"},Iu=c("div",{class:"truncate min-w-0 select-none"},"Columns",-1),Bu=[Iu],Pu={key:0,class:"absolute right-0 z-50 bg-white dark:bg-gray-700 shadow-2xl rounded-lg py-4"},Ru=["onClick"],Mu={class:"text-[0.9rem]"};function ju(e,t,o,n,r,s){const a=b("ph-caret-down"),i=b("ph-check");return!o.config.hideKeys||o.config.hideKeys!==!0?(u(),d("div",Vu,[c("div",{class:"flex bg-gray-200 dark:bg-gray-700 cursor-pointer rounded overflow-hidden flex focus-within:outline-none focus-within:ring shadow-outline h-8",onClick:t[0]||(t[0]=(...l)=>n.toggleDropdown&&n.toggleDropdown(...l))},[c("div",{class:k(["bg-transparent w-full h-full text-current outline-none flex items-center",[e.$slots.prefix||"pl-2"]])},Bu,2),c("div",{class:k(["h-full flex-shrink-0 flex items-center pr-2 text-gray-400",["pl-2"]])},[D(a,{type:"chevron-down",size:18,class:k(["transition-transform duration-200",{"transform rotate-180":n.isOpen}])},null,8,["class"])])]),n.isOpen?(u(),d("ul",Pu,[(u(!0),d(P,null,A(o.columns,l=>(u(),d("li",{onClick:m=>n.selectItem(l.key),class:k([n.isActive(l.key)?"":"bg-gray-400 hover:bg-gray-500","px-4 py-2 w-32 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-100 transition-colors duration-200 flex items-center"]),key:l.key},[D(i,{class:k(["text-gray-400 mr-1",l.hidden?"opacity-0":""]),size:"18"},null,8,["class"]),c("span",Mu,R(l.title),1)],10,Ru))),128))])):h("",!0)],512)):h("",!0)}var Eu=S(vo,[["render",ju]]);vo.__docgenInfo={exportName:"default",displayName:"DataTableSettings",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"config",type:{name:"object"}},{name:"activeColumn",type:{name:"array"}}],events:[{name:"toggleColumn"}]};const bo={props:{size:{type:String,default:"24px"}}},Lu=e=>(de("data-v-657dd88f"),e=e(),ce(),e),Ou=["width","height"],Nu=Lu(()=>c("path",{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"},null,-1)),Au=[Nu];function zu(e,t,o,n,r,s){return u(),d("svg",{width:o.size,height:o.size,viewBox:"0 0 24 24"},Au,8,Ou)}var Hu=S(bo,[["render",zu],["__scopeId","data-v-657dd88f"]]);bo.__docgenInfo={exportName:"default",displayName:"SearchIcon",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"24px"'}}]};const ho={components:{SearchIcon:Hu},emits:["search-submit"],setup(e,{emit:t}){const o=f(""),n=ie(Be);return oe(o,r=>{n("keyword",r)}),{keyword:o,submitSearch(){t("search-submit",o.value)}}}},Fu={class:"flex-1 flex justify-end"},Wu={class:"max-w-[14rem] min-w-[9rem] border border-gray-700 pl-2 rounded ml-2 flex items-center bg-gray-50 dark:bg-gray-800"};function Uu(e,t,o,n,r,s){const a=b("SearchIcon");return u(),d("div",Fu,[c("div",Wu,[D(a,{class:"text-gray-500 dark:text-gray-50",size:17}),Z(c("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.keyword=i),placeholder:"search...",onKeyup:t[1]||(t[1]=Ve((...i)=>n.submitSearch&&n.submitSearch(...i),["enter"])),class:"bg-gray-50 rounded w-full dark:bg-gray-800 px-2 py-1 outline-none"},null,544),[[je,n.keyword]])])])}var Gu=S(ho,[["render",Uu]]);ho.__docgenInfo={exportName:"default",displayName:"DataSearchBox",description:"",tags:{},events:[{name:"search-submit"}]};const Yu=function(e,t){return e.reduce(function(o,n){return(o[n[t]]=o[n[t]]||{children:[],collapsed:!1}).children.push(n),o},{})};function qu(e,t,o){const n=w({get(){return o.value?Yu(e.value,o.value):e.value}}),r=w({get(){if(!o.value)return t.value;const s=t.value.findIndex(l=>l.key===o.value);let a=[...t.value];return a=[a.splice(s,1)[0],...a],a}});return{groupedData:n,groupedColumn:r}}var Ku="/robust-ui/assets/loading.0d051c03.gif";const _o={components:{DataTableSettings:Eu,DataSearchBox:Gu,TableHeader:xi,TableFooter:Wi,TableBody:Tu},emits:["patch-records","page","search","record-click","search-submit"],data(){return{isInlineEditModeTabs:[{title:"Enable",value:"true"},{title:"Disable",value:"false"}],fieldTypes:[{title:"Text",value:"text"},{title:"Number",value:"number"},{title:"Enum",value:"enum"},{title:"Date",value:"date"}]}},props:{columns:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>({})},config:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},isTurnOnInlineMode:{type:Boolean,default:!1},isShowInlineTab:{type:Boolean,default:!1},actionComponent:{type:Object},isLoading:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t,slots:o}){const{columns:n,modelValue:r,config:s,totalCount:a,isTurnOnInlineMode:i,hasActionColumn:l}=F(e),m=ie(Be),{pageSize:y,page:p,keyword:g}=ie(Ne),v=f("true");i.value||(v.value="false");let V=y.value;const _=f(n.value),C=f(_.value.filter(M=>!M.hidden)),U=()=>{let M="",J=0;for(const se of C.value)J+=se.width;const re=v.value==="false"&&C.value.length&&l.value?100/C.value.length:0;for(const se of C.value)M+=se.width*(100-re)/J+"% ";return re!==0&&(M+=re+"%"),M},B=f(U()),Y=M=>m("totalCount",M);oe(a,()=>Y(a.value)),ee(()=>{Y(a.value)}),oe([y,p],()=>{let M=y.value*(p.value-1);const J=y.value;V!==y.value&&p.value!==1?(M=0,m("page",1)):V=y.value,t("page",{offset:M,limit:J})}),oe(g,M=>{t("search",M)});const{groupedData:te,groupedColumn:q}=qu(r,C,f(s.value.groupBy)),W=f(s.value),G=M=>{W.value.collapsed===void 0?W.value=xe(fe({},W.value),{collapsed:{[M]:!0}}):W.value.collapsed[M]===void 0?W.value.collapsed=xe(fe({},W.value.collapsed),{[M]:!0}):W.value.collapsed=xe(fe({},W.value.collapsed),{[M]:!W.value.collapsed[M]})},ne=w({get(){return xe(fe({},W.value),{size:q.value.length})}}),pe=M=>{_.value=_.value.map(J=>(J.key===M&&(J.hidden=!J.hidden),J)),C.value=_.value.filter(J=>!J.hidden)};return oe([C,v],()=>{B.value=U()}),{$slots:o,columnData:q,bodyData:te,toggleGroup:G,tableConfig:ne,allColumns:_,filteredColumns:C,toggleColumn:pe,isInlineEditMode:v,gridTemplateColumnsCss:B,recordClickHandler:M=>{v.value==="false"&&t("record-click",M)}}}},ko=e=>(de("data-v-b69b110c"),e=e(),ce(),e),Ju={class:"flex flex-wrap mb-1.5 items-center justify-between"},Xu={key:0,class:"flex items-start mr-4 my-2"},Qu=ko(()=>c("label",{class:"mr-1 whitespace-nowrap"},"Inline edit:",-1)),Zu={class:"flex justify-end"},ed={key:0,class:"loading min-h-[400px]"},td=ko(()=>c("div",{class:"relative w-full h-full"},[c("img",{src:Ku,alt:"Loading",width:"80",style:{position:"absolute",top:"50%",left:"50%"}})],-1)),nd=[td];function od(e,t,o,n,r,s){const a=b("base-tab-switch"),i=b("data-search-box"),l=b("data-table-settings"),m=b("table-header"),y=b("table-body"),p=b("table-footer");return u(),d("div",null,[c("div",Ju,[o.isTurnOnInlineMode&&o.isShowInlineTab?(u(),d("div",Xu,[Qu,D(a,{modelValue:n.isInlineEditMode,"onUpdate:modelValue":t[0]||(t[0]=g=>n.isInlineEditMode=g),tabs:r.isInlineEditModeTabs},null,8,["modelValue","tabs"])])):h("",!0),!n.tableConfig.hideSearch||n.tableConfig.hideSearch===!1?(u(),L(i,{key:1,class:"mr-2",onSearchSubmit:t[1]||(t[1]=g=>e.$emit("search-submit",g))})):h("",!0),c("div",Zu,[D(l,{columns:n.allColumns,config:n.tableConfig,activeColumn:n.filteredColumns,onToggleColumn:n.toggleColumn},null,8,["columns","config","activeColumn","onToggleColumn"])])]),(u(),d("div",{key:n.columnData.length,class:"grid sm:block grid-cols-2 border border-gray-700"},[D(m,{modelValue:n.columnData,"onUpdate:modelValue":t[2]||(t[2]=g=>n.columnData=g),data:n.bodyData,config:n.tableConfig,gridTemplateColumnsCss:n.gridTemplateColumnsCss,isInlineEditMode:n.isInlineEditMode==="true",hasActionColumn:o.hasActionColumn},null,8,["modelValue","data","config","gridTemplateColumnsCss","isInlineEditMode","hasActionColumn"]),D(y,{columns:n.columnData,isInlineEditMode:n.isInlineEditMode==="true",data:n.bodyData,"onUpdate:data":t[3]||(t[3]=g=>n.bodyData=g),config:n.tableConfig,"onUpdate:config":t[4]||(t[4]=g=>n.tableConfig=g),onToggleGroup:n.toggleGroup,onClickRecord:n.recordClickHandler,gridTemplateColumnsCss:n.gridTemplateColumnsCss,actionComponent:o.actionComponent,hasActionColumn:o.hasActionColumn,onReload:t[5]||(t[5]=g=>e.$emit("reload")),onAction:t[6]||(t[6]=g=>e.$emit("action",g))},Ct({_:2},[A(n.$slots,(g,v)=>({name:v,fn:K(V=>[O(e.$slots,v,Dt(St(V||{})),void 0,!0)])}))]),1032,["columns","isInlineEditMode","data","config","onToggleGroup","onClickRecord","gridTemplateColumnsCss","actionComponent","hasActionColumn"])])),D(p,{config:n.tableConfig,onPatchRecords:t[7]||(t[7]=g=>e.$emit("patch-records",g))},null,8,["config"]),o.isLoading?(u(),d("div",ed,nd)):h("",!0)])}var ad=S(_o,[["render",od],["__scopeId","data-v-b69b110c"]]);_o.__docgenInfo={exportName:"default",displayName:"DataTable",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"config",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"isTurnOnInlineMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isShowInlineTab",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actionComponent",type:{name:"object"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"search-submit"},{name:"reload"},{name:"action"},{name:"patch-records"},{name:"page"},{name:"search"},{name:"record-click"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const wo={components:{ProvideDataTableSettings:Pl,DataTable:ad},emits:["page","update:modelValue","patch-records","record-click","search-submit"],props:{columns:{type:Array,default:()=>[]},config:{type:Object,default:()=>({})},totalCount:{type:Number,default:0},modelValue:{type:Object,default:()=>({})},isTurnOnInlineMode:{type:Boolean,default:!1},isShowInlineTab:{type:Boolean,default:!1},actionComponent:{type:Object},isLoading:{type:Boolean,default:!1},hasActionColumn:{type:Boolean,default:!1}},setup(e,{emit:t,slots:o}){const{modelValue:n}=F(e),r=w(()=>e.columns.value.map(l=>l.key)),s=w({get(){return n.value},set(l){t("update:modelValue",l)}});return{page:l=>t("page",l),search:l=>t("search",l),bodyData:s,slotNames:r,$slots:o}}};function rd(e,t,o,n,r,s){const a=b("data-table"),i=b("provide-data-table-settings");return u(),L(i,null,{default:K(()=>[D(a,ue(e.$props,{onPage:n.page,onSearch:n.search,modelValue:n.bodyData,"onUpdate:modelValue":t[0]||(t[0]=l=>n.bodyData=l),class:"relative",totalCount:o.totalCount,"is-loading":o.isLoading,hasActionColumn:o.hasActionColumn,isTurnOnInlineMode:o.isTurnOnInlineMode,isShowInlineTab:o.isShowInlineTab,onPatchRecords:t[1]||(t[1]=l=>e.$emit("patch-records",l)),onRecordClick:t[2]||(t[2]=l=>e.$emit("record-click",l)),onReload:t[3]||(t[3]=l=>e.$emit("reload")),onAction:t[4]||(t[4]=l=>e.$emit("action",l)),onSearchSubmit:t[5]||(t[5]=l=>e.$emit("search-submit",l))}),Ct({_:2},[A(n.$slots,(l,m)=>({name:m,fn:K(y=>[O(e.$slots,m,Dt(St(y||{})))])}))]),1040,["onPage","onSearch","modelValue","totalCount","is-loading","hasActionColumn","isTurnOnInlineMode","isShowInlineTab"])]),_:3})}var Co=S(wo,[["render",rd]]);wo.__docgenInfo={exportName:"default",displayName:"DataTableContainer",description:"",tags:{},props:[{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"config",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:""}},{name:"isTurnOnInlineMode",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isShowInlineTab",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actionComponent",type:{name:"object"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasActionColumn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"patch-records"},{name:"record-click"},{name:"reload"},{name:"action"},{name:"search-submit"},{name:"page"},{name:"update:modelValue"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};var sd={parameters:{storySource:{source:`import { ref } from 'vue'
import DataTable from './DataTableContainer.vue'

export default {
  title: 'Ui/DataTable',
  component: DataTable,
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
    sortable: false,
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
    enddate_contract_formatted: '05/04/2022',
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
    enddate_contract_formatted: '05/04/2022',
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
  template: \`<DataTable
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
        <div class="flex items-center w-full">
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

    </DataTable>\`,
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
`,locationsMap:{default:{startLoc:{col:24,line:136},endLoc:{col:2,line:196},startBody:{col:24,line:136},endBody:{col:2,line:196}}}}},title:"Ui/DataTable",component:Co};const ld=[{title:"Hotel",key:"name",sortable:!0,editable:!0,hidden:!1,type:"text",sortDirection:0,width:40},{title:"City",key:"city",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Country",key:"country_name",sortable:!0,editable:!0,hidden:!1,sortDirection:0,type:"enum",options:[{title:"DEU",value:"DEU"}],width:30},{title:"Chain",key:"chain_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Brand",key:"brand_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"Contract",key:"contract_name",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"text",width:30},{title:"End Date",key:"enddate_contract_formatted",sortable:!1,editable:!0,hidden:!1,sortDirection:0,type:"date",sort:(e,t)=>new Date(e)-new Date(t),width:40},{title:"Custom Render",key:"custom_render",width:40}],id=[{id:"1d5b8be1-13ba-4b04-a76f-53105076f1e6",name:"Hartmann LLC",country:"DEU",city:"Lake Vivienneton",country_name:"Germany",chain_name:"Graham, Hilll and Sawayn",brand_name:"Megane",enddate_contract_formatted:"05/04/2022",contract_name:"Intelligent"},{id:"1d6f17a9-0e4c-4839-8cab-0e2f59921a4b",name:"Adams LLC",country:"DEU",city:"South Charlotte",country_name:"Germany",chain_name:"Kautzer LLC",brand_name:"Clarabelle",enddate_contract_formatted:"05/04/2022",contract_name:"Clever"},{id:"83be9c92-ed3a-4875-825c-8db64e0ca7b9",name:"Gorczany Inc",country:"DEU",city:"Konopelskiborough",country_name:"Germany",chain_name:"Gerhold - Kris",brand_name:"Andy",enddate_contract_formatted:"05/04/2022",contract_name:"Intelligent"}],ud={totalCount:200,pageSize:25,page:1,updatedRecords:{},isDirty:!1},dd=e=>({template:`<DataTable
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
        <div class="flex items-center w-full">
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

    </DataTable>`,components:{DataTable:Co},setup(){const t=f(200),o=f(ld),n=f(id),r=f(ud),s=f(!1),a=f(""),i=f({offset:0,limit:25});return{args:e,totalCount:t,tableColumns:o,tableConfig:r,tableData:n,isLoading:s,setPaginationParams:p=>{i.value=p},setKeyword:p=>{a.value=p},handleClickRecord:function(p){console.log(p)}}}}),cd=dd.bind(),pd=["Default"];var md=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sd,Default:cd,__namedExportsOrder:pd}),fd={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:Ae,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const gd=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:Ae},setup(){return{args:e}}}),yd=new Date,nn=f(yd),Do=gd.bind({});Do.args={modelValue:nn,"onUpdate:modelValue":e=>{nn.value=e}};const vd=["Default"];var bd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fd,Default:Do,__namedExportsOrder:vd});const So=E({name:"RobustDaterangePicker",components:{Calendar:Qe,Popper:Pe,InputWrapper:Ce,Button:be,Checkbox:Ze,DatePicker:Ae,PhCaretDown:wt,PhCalendar:bn,PhArrowLeft:Ka,PhArrowRight:Ja,PhClockCounterClockwise:Xa},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:o}){const{dateRange:n,compareDateRange:r,perspectiveDate:s,comparePerspectiveDate:a}=F(e),i=f(),l=f(!1),m=f(),y=f(),p=f(s.value),g=f(a.value),v=f(!1),V=f(),_=f(),C=f(!0),U=f(),B=w(()=>W.value.length>1),Y=(j,z)=>z?ge(j,"dd.MM.yyyy HH:mm:ss"):ge(j,"dd.MM.yyyy"),te=w(()=>e.dateHistory||[]);let q=f();const W=f(r.value),G=w({get(){return W.value},set(j){W.value=j,t("update:compareDate",j),t("blur")}}),ne=w({get:()=>G.value.length>1,set:j=>{M(j)}}),pe=w(()=>{if(!n.value)return"Select date";const j=n.value;try{return j.length>1?ge(j[0],"P")+" - "+ge(j[1],"P"):ge(j[0],"P")+" - "+ge(j[0],"P")}catch{return}});function ae(){l.value===!0&&(l.value=!1,v.value=!1,t("blur"))}const M=j=>{j?V.value=j:(t("update:comparison-date",void 0),G.value=void 0)};Je(U,j=>{l.value&&(m.value.wrapperRef.contains(j.target)&&(j.stopPropagation(),j.preventDefault()),ae(),t("blur"))});const J=()=>{q.value=n.value,l.value=!l.value},re=()=>{V.value=!1},se=async()=>{t("update:dateRange",q.value),t("change",q.value),t("blur"),l.value=!1},De=j=>{C.value=j};return oe(p,j=>{t("update:perspectiveDate",j)}),oe(g,j=>{t("update:comparePerspectiveDate",j)}),{displayCompare:V,computedCompare:G,attrs:o,props:e,refSelectContainer:i,pickedCompare:B,open:l,displayDate:pe,saveTime:se,tmpDateRange:q,dateConfig:_,closeDropdown:ae,showCompare:M,comparePerspectiveOf:g,compareWith:ne,storeHistory:C,handleClick:J,goBack:re,mainCalendar:y,perspectiveOf:p,enabledHistory:v,dateHistory:te,formatDate:Y,enableStoringHistory:De,inputWrapperRef:m,popperRef:U}},methods:{}}),hd=["id"],_d={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},kd=c("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},"Date range",-1),wd={key:0,class:"flex flex-col items-start gap-y-3"},Cd=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Dd={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},Sd={key:1},xd={key:0,class:"flex flex-col items-start"},$d=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Td={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},Vd=ke("Apply time range");function Id(e,t,o,n,r,s){var V,_;const a=b("PhCalendar"),i=b("PhCaretDown"),l=b("InputWrapper"),m=b("DatePicker"),y=b("Checkbox"),p=b("Calendar"),g=b("Button"),v=b("Popper");return u(),d(P,null,[D(l,{title:e.title,hint:e.hint,error:e.error,class:k([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ve(e.handleClick,["stop"])},{default:K(C=>[c("div",{class:k(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[D(a,{size:"20"})],2),c("div",ue({id:C.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",_d,R(e.displayDate),1)],16,hd),c("div",{class:k(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[D(i,{size:14,weight:"bold",class:k(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((V=e.inputWrapperRef)==null?void 0:V.wrapperRef)?(u(),L(v,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(_=e.inputWrapperRef)==null?void 0:_.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=C=>e.open=C),options:{placement:"bottom-start"}},{default:K(()=>[kd,c("div",null,[D(p,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=C=>e.tmpDateRange=C),"onClick:relativeDate":t[3]||(t[3]=C=>e.enableStoringHistory(!1))},{default:K(()=>[e.enablePerspective?(u(),d("div",wd,[c("div",null,[Cd,D(m,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=C=>e.perspectiveOf=C)},null,8,["modelValue"])]),e.enableComparison?(u(),L(y,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=C=>e.compareWith=C),title:"Compare with"},null,8,["modelValue"])):h("",!0)])):h("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(u(),d("h3",Dd,"Comparison date range")):h("",!0),e.enableComparison?(u(),d("div",Sd,[D(p,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=C=>e.computedCompare=C),"onClick:relativeDate":t[6]||(t[6]=C=>e.enableStoringHistory(!1))},{default:K(()=>[e.enablePerspective?(u(),d("div",xd,[$d,D(m,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=C=>e.comparePerspectiveOf=C)},null,8,["modelValue"])])):h("",!0)]),_:1},8,["modelValue"])])):h("",!0),c("div",Td,[D(g,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:K(()=>[Vd]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):h("",!0)],64)}var xo=S(So,[["render",Id]]);So.__docgenInfo={displayName:"RobustDaterangePicker",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var Bd={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:xo,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const Pd=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:xo},setup(){return{args:e}}}),$o=[new Date,new Date],on=f($o),an=f($o),To=Pd.bind({});To.args={dateRange:on,"onUpdate:dateRange":e=>{on.value=e},compareDateRange:an,"onUpdate:compareDateRange":e=>{an.value=e}};const Rd=["Default"];var Md=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bd,Default:To,__namedExportsOrder:Rd});let N,yt,vt,bt,we;const ht=(e,t,o=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,o):t.el.dispatchEvent(new CustomEvent(e,o))},jd=(e,t)=>{if(t.parentNode===e.parentNode){for(let o=e.previousSibling;o;o=o.previousSibling)if(o===t)return!0}return!1},rn=function(e,t){var o,n;if(ht("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;N=this,yt=we.handleClass&&N.querySelector(`.${we.handleClass}`),vt=Array.from((o=N==null?void 0:N.parentElement)==null?void 0:o.children).indexOf(N),(n=N==null?void 0:N.parentElement)==null||n.classList.add("drag")},sn=function(e){var o;if(!N)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(n=>{var r;if(Array.from((r=N==null?void 0:N.parentElement)==null?void 0:r.children).indexOf(n)>=0)return n})),Array.from((o=N==null?void 0:N.parentElement)==null?void 0:o.children).indexOf(t)!==-1&&(N.classList.add(we.placeholderClass),jd(N,t)?t.parentNode.insertBefore(N,t):t.parentNode.insertBefore(N,t.nextSibling))},ln=(e,t)=>{var r,s;if(!N)return;ht("end",t,e),yt&&N.setAttribute("draggable","false"),N.classList.remove(we.placeholderClass),(r=N==null?void 0:N.parentElement)==null||r.classList.remove("drag");const o=vt,n=Array.from((s=N==null?void 0:N.parentElement)==null?void 0:s.children).indexOf(N);bt.splice(n,0,bt.splice(o,1)[0]),ht("change",t,{from:o,to:n}),setTimeout(()=>{N=null,vt=null,yt=null},0)},un=(e,t)=>{const o=we.handleClass&&e.querySelector(`.${we.handleClass}`);o?(o.onmousedown=n=>{e.setAttribute("draggable","true")},o.ontouchstart=n=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},o.onmouseup=n=>{e.setAttribute("draggable","false")},o.ontouchend=n=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=n=>{n.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=n=>rn.bind(e,n,t)(),e.ondragenter=sn,e.ondragend=n=>ln.bind(e,n,t)(),e.ontouchstart=n=>rn.bind(e,n,t)(),e.ontouchmove=sn,e.ontouchend=n=>ln.bind(e,n,t)()};var Ed={mounted:(e,t,o)=>{let n=t.value.depth||0;for(;n;)e=e.firstElementChild,n--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(r){return console.error(r)}bt=t.value&&t.value.value,we={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(r=>un(r,o)),e.addEventListener("DOMNodeInserted",function(r){N||r.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(r.target)!==-1&&un(r.target,o)})}};const Vo=E({name:"RobustDraggable",directives:{draggable:Ed},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:o}=F(e),n=w({get:()=>o.value,set:r=>{t("update:modelValue",r)}});return ye(()=>{console.log("alo")}),{list:n}}});function Ld(e,t,o,n,r,s){const a=Qa("draggable");return Z((u(),d("div",null,[(u(!0),d(P,null,A(e.list,i=>(u(),d("div",{key:i},[O(e.$slots,"element",{item:i})]))),128))])),[[a,{value:e.list}]])}var Io=S(Vo,[["render",Ld]]);Vo.__docgenInfo={displayName:"RobustDraggable",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};var Od={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:Io,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const Nd=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:Io},setup(){let t=f([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),Ad=Nd.bind({}),zd=["Default"];var Hd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Od,Default:Ad,__namedExportsOrder:zd});const Bo=E({name:"RobustContentPlaceholder",props:{title:{type:String},description:{type:String},icon:{type:Object}}}),Fd={class:"py-4 flex flex-col text-center items-center"},Wd={class:"mb-4 text-gray-600 dark:text-gray-400"},Ud={class:"text-xl text-gray-600 dark:text-gray-400 mb-2"},Gd={class:"inline-block"};function Yd(e,t,o,n,r,s){return u(),d("div",Fd,[c("div",Wd,[e.$slots.icon?O(e.$slots,"icon",{key:1}):(u(),L(qe(e.icon),{key:0,size:"40"}))]),c("div",Ud,R(e.title),1),c("div",{class:k(["text-gray-400 dark:text-gray-500",[e.$slots.default?"mb-4":null]])},R(e.description),3),c("div",Gd,[O(e.$slots,"default")])])}var tt=S(Bo,[["render",Yd]]);Bo.__docgenInfo={displayName:"RobustContentPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}],slots:[{name:"icon"},{name:"default"}]};var ze=E({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const o=f(!0),n=f(!1),r=new Image;return r.onload=()=>{t("loaded",!0),o.value=!1},r.onerror=s=>{t("error",s),n.value=!0,o.value=!1},ee(()=>{r.src=e.src}),{error:n,loading:o}},render(){return this.loading?Te("div",{class:"flex items-center justify-center"},Te(Xe,{size:24,stroke:2})):this.error?this.fallbackSrc?Te("img",{src:this.fallbackSrc}):Te(Le,{size:20}):Te("img",{src:this.src})}}),qd={parameters:{storySource:{source:`import EmptyState from './EmptyState.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:14},endLoc:{col:2,line:20},startBody:{col:24,line:14},endBody:{col:2,line:20}},"call-to-action":{startLoc:{col:29,line:31},endLoc:{col:2,line:39},startBody:{col:29,line:31},endBody:{col:2,line:39}},"custom-icon":{startLoc:{col:27,line:50},endLoc:{col:2,line:61},startBody:{col:27,line:50},endBody:{col:2,line:61}}}}},title:"Ui/EmptyState",component:tt,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Kd=e=>({template:'<EmptyState v-bind="args" />',components:{EmptyState:tt},setup(){return{args:e}}}),Po=Kd.bind();Po.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Le};const Jd=e=>({template:`<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:tt,RobustButton:be},setup(){return{args:e}}}),Ro=Jd.bind();Ro.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Le};const Xd=e=>({template:`<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,components:{EmptyState:tt,RobustButton:be,RobustImg:ze},setup(){return{args:e}}}),Mo=Xd.bind();Mo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Le};const Qd=["Default","CallToAction","CustomIcon"];var Zd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qd,Default:Po,CallToAction:Ro,CustomIcon:Mo,__namedExportsOrder:Qd});const jo=E({name:"RobustGridItem",props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:o}=F(e),n=w(()=>{var r,s,a,i,l;return{"gs-id":(r=o.value)==null?void 0:r.id,"gs-x":(s=o.value)==null?void 0:s.gridstack.x,"gs-y":(a=o.value)==null?void 0:a.gridstack.y,"gs-w":(i=o.value)==null?void 0:i.gridstack.w,"gs-h":(l=o.value)==null?void 0:l.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:n}}}),ec={class:"grid-stack-item-content bg-gray-300"};function tc(e,t,o,n,r,s){return u(),d("div",ue({class:"grid-stack-item"},e.widgetAttributes),[c("div",ec,[ke(R(e.widget.id)+" "+R(e.widget.gridstack)+" ",1),(u(),L(qe(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var nc=S(jo,[["render",tc]]);jo.__docgenInfo={displayName:"RobustGridItem",exportName:"default",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Eo=E({name:"RobustGrid",components:{GridItem:nc},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:o}=F(e),n,r=f();return ee(()=>{console.log("mounting"),n=Za.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},r.value),n.on("change",(s,a)=>{!o.value||([...o.value],Array.isArray(a)&&o.value.forEach(i=>{let l=a.find(m=>m.id===i.id);l&&(i.gridstack=xe(fe({},i.gridstack),{x:l.x,y:l.y,w:l.w,h:l.h}))}),t("update:widgets",o))})}),{gridContainer:r}}}),oc={ref:"gridContainer",class:"grid-stack bg-gray-200"};function ac(e,t,o,n,r,s){const a=b("GridItem");return u(),d("div",null,[ke(R(e.locked)+" ",1),c("section",oc,[(u(!0),d(P,null,A(e.widgets,i=>(u(),L(a,{key:i.id,widget:i,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var Lo=S(Eo,[["render",ac]]);Eo.__docgenInfo={displayName:"RobustGrid",exportName:"default",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var rc={title:"Ui/Grid",component:Lo,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let dn=E({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const sc=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:Lo},setup(){let t=f([{id:"test",component:Wt(dn),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:Wt(dn),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return oe(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),lc=sc.bind(),ic=["Default"];var uc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rc,Default:lc,__namedExportsOrder:ic}),dc={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:ze,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const cc=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:ze},setup(){return{args:e}}}),Oo=cc.bind();Oo.args={title:"Img title"};const pc=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:ze},setup(){return{args:e}}}),No=pc.bind();No.args={title:"Img title"};const mc=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:ze},setup(){return{args:e}}}),Ao=mc.bind();Ao.args={title:"Img title"};const fc=["Default","Broken","Fallback"];var gc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dc,Default:Oo,Broken:No,Fallback:Ao,__namedExportsOrder:fc}),yc={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:$t,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Pt=e=>({template:'<Input v-bind="args"/>',components:{Input:$t},setup(){return{args:e}}}),zo=Pt.bind();zo.args={modelValue:"Input text",title:"Input title"};const Ho=Pt.bind();Ho.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Fo=Pt.bind();Fo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const vc=["Default","Hint","ErrorHint"];var bc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yc,Default:zo,Hint:Ho,ErrorHint:Fo,__namedExportsOrder:vc}),hc={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:Ce,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const Rt=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:Ce},setup(){return{args:e}}}),Wo=Rt.bind();Wo.args={title:"Input title",outline:!1};const Uo=Rt.bind();Uo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Go=Rt.bind();Go.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const _c=["Default","Hint","ErrorHint"];var kc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hc,Default:Wo,Hint:Uo,ErrorHint:Go,__namedExportsOrder:_c});const Yo=E({name:"RobustLinearProgress",props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:o}=F(e),n=w(()=>`height:${t.value}px`),r=w(()=>`width:clamp(${t.value}px, ${o.value}%, 100%);`);return{heightComputed:n,widthComputed:r}}});function wc(e,t,o,n,r,s){return u(),d("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:Q([e.heightComputed])},[c("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:Q([e.widthComputed])},null,4)],4)}var qo=S(Yo,[["render",wc]]);Yo.__docgenInfo={displayName:"RobustLinearProgress",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Cc={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:qo,argTypes:{progress:{control:{type:"number"}}}};const Dc=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:qo},setup(){return{args:e}}}),Sc=Dc.bind(),xc=["Default"];var $c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cc,Default:Sc,__namedExportsOrder:xc}),Tc={parameters:{storySource:{source:`import { ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:19},endLoc:{col:2,line:25},startBody:{col:24,line:19},endBody:{col:2,line:25}}}}},title:"Ui/Modal",component:It,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Vc=e=>({template:' <Button @click="args.opened.value = true">modal open {{args.opened}}</Button><Modal v-bind="args">test</Modal>',components:{Modal:It,Button:be},setup(){return{args:e}}}),Ko=Vc.bind();let cn=f(!0);Ko.args={title:"Modal title",opened:cn,"onUpdate:opened":e=>{console.log("opeone"),cn.value=e}};const Ic=["Default"];var Bc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tc,Default:Ko,__namedExportsOrder:Ic}),Pc={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const Jo=E({name:"RobustNotice",props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:w(()=>Pc[e.variant])}}});function Rc(e,t,o,n,r,s){return u(),d("div",{class:k([e.computedClass,"mb-4 border-l-4 p-4"])},[O(e.$slots,"default")],2)}var Xo=S(Jo,[["render",Rc]]);Jo.__docgenInfo={displayName:"RobustNotice",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};var Mc={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Xo,argTypes:{title:{control:{type:"text",default:"Title"}}}};const jc=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Xo},setup(){return{args:e}}}),Ec=jc.bind(),Lc=["Default"];var Oc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mc,Default:Ec,__namedExportsOrder:Lc}),Nc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:Pe,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Ac=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:Pe},setup(){const t=f(!1);return{args:e,value:t}}}),Qo=Ac.bind({});Qo.args={title:"Popper title",description:"Popper description text to be placed here"};const zc=["Default"];var Hc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nc,Default:Qo,__namedExportsOrder:zc});let Fc=0;const Zo=E({name:"RobustRadio",props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:o}){const n=(++Fc).toString(),r=w({get(){return e.modelValue===e.value},set(){let s=e.modelValue;s=e.value,t("update:modelValue",s),t("change",s)}});return{cuid:n,isChecked:r,attrs:o}}}),Wc={class:"inline-block"},Uc=["id"],Gc=["for"],Yc={key:0,class:"w-full select-none leading-4"};function qc(e,t,o,n,r,s){return u(),d("div",Wc,[Z(c("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),type:"radio",class:"hidden"},null,8,Uc),[[er,e.isChecked]]),c("label",{for:`radio_${e.cuid}`,class:k([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[c("div",{class:k(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[c("div",{class:k([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(u(),d("div",Yc,R(e.title),1)):h("",!0),c("div",null,[e.$slots.title?O(e.$slots,"title",{key:0}):h("",!0)])],10,Gc)])}var ea=S(Zo,[["render",qc]]);Zo.__docgenInfo={displayName:"RobustRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};var Kc={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:ea,argTypes:{title:{control:{type:"text"}}}};const Jc=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:ea},setup(){const t=f("test");return{args:e,value:t}}}),ta=Jc.bind({});ta.args={title:"Radio title"};const Xc=["Default"];var Qc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kc,Default:ta,__namedExportsOrder:Xc});const Zc=E({props:{value:{type:[String,Array,Object,Number]},identifier:{type:String}},setup(){return{}}});Zc.__docgenInfo={exportName:"default",displayName:"SelectOption",description:"",tags:{},props:[{name:"value",type:{name:"string|array|object|number"}},{name:"identifier",type:{name:"string"}}],slots:[{name:"default"}]};var ep={parameters:{storySource:{source:`import Select from './Select.vue'
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
})`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:53},startBody:{col:24,line:17},endBody:{col:2,line:53}}}}},title:"Ui/Select",component:et,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Mt=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:et},setup(){let t=f(void 0),o=f([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:o,args:e}}}),na=Mt.bind();na.args={title:"Input title"};const oa=Mt.bind();oa.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const aa=Mt.bind();aa.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const tp=["Default","Hint","ErrorHint"];var np=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ep,Default:na,Hint:oa,ErrorHint:aa,__namedExportsOrder:tp});const ra=E({name:"RobustSlider",props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const o=f(e.modelValue),n=f(!1),r=f(!1),s=f(e.modelValue),a=f(),i=f(),l=f(),m=w(()=>[{"is-dragging":r.value},{"is-disabled":e.disabled},{"is-active":n.value},{"has-icon":y},{"has-marker":e.showMarker}]),y=w(()=>Boolean(e.icon)),p=w(()=>({transform:"scaleX("+Se(s.value)+")"})),g=w(()=>({left:Se(s.value)*100+"%"})),v=w(()=>e.markerValue===void 0?e.modelValue:e.markerValue),V=w(()=>{const x=[];let X=e.step*Math.ceil(_()/e.step);for(;X<=C();)x.push(X),X+=e.step;return x}),_=()=>e.max>e.min?e.min:0,C=()=>e.max>e.min?e.max:100,U=()=>{a.value.focus()},B=()=>{G(o)},Y=()=>{n.value=!0,t("focus")},te=()=>{n.value=!1,t("blur")},q=x=>{a.value.contains(x.target)||te()},W=x=>{x=_e(x),e.snapToSteps&&(x=He(x)),G(x)},G=x=>{x=_e(x),x!==s.value&&(s.value=x,t("update:modelValue",x),t("change",x))},ne=()=>{W(s.value+e.step)},pe=()=>{W(s.value-e.step)},ae=()=>{let x=i.value,X=x.offsetLeft;for(;x.offsetParent;)x=x.offsetParent,X+=x.offsetLeft;return X},M=x=>({left:x+"%"}),J=()=>{document.addEventListener("touchend",T),document.addEventListener("mouseup",T),document.addEventListener("click",q),document.addEventListener("touchstart",q),se()},re=()=>{document.removeEventListener("touchend",T),document.removeEventListener("mouseup",T),document.removeEventListener("click",q)},se=()=>{const x=_e(s.value?s.value:0);G(x)},De=x=>{e.disabled||(n.value||Y(),r.value=!0,z(x),document.addEventListener("touchmove",j),document.addEventListener("mousemove",j),t("dragstart",s.value,x))},j=x=>{z(x)},z=x=>{const X=x.touches?x.touches[0].pageX:x.pageX,le=i.value.offsetWidth,Re=(X-ae())/le,nt=_e(_()+Re*(C()-_()));r.value&&G(Math.round(nt))},T=x=>{r.value&&(r.value=!1,e.snapToSteps&&e.modelValue%e.step!==0&&W(e.modelValue),document.removeEventListener("touchmove",j),document.removeEventListener("mousemove",j),t("dragend",s.value,x))},He=x=>{const X=Math.floor(x/e.step)*e.step,le=X+e.step,Re=(X+le)/2;return X<_()?le>C()?x:le:x>=Re&&le<=C()?le:X},Se=x=>(x-_())/(C()-_()),_e=x=>x<_()?_():x>C()?C():x;return ee(()=>{J()}),tr(()=>{re()}),{slider:a,track:i,thumb:l,initialValue:o,isActive:n,isDragging:r,localValue:s,classes:m,hasIcon:y,fillStyle:p,thumbStyle:g,markerText:v,snapPoints:V,moderatedMin:_,moderatedMax:C,focus:U,reset:B,onFocus:Y,onBlur:te,onExternalClick:q,setValueWithSnap:W,setValue:G,incrementValue:ne,decrementValue:pe,getTrackOffset:ae,getPointStyle:M,initializeSlider:J,teardownSlider:re,initializeDrag:se,onDragStart:De,onDragMove:j,dragUpdate:z,onDragStop:T,getNearestSnapPoint:He,relativeValue:Se,moderateValue:_e}}}),op=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],ap=["name","value"],rp={key:1,class:"base-slider__icon"},sp={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},lp={key:0},ip={key:0,class:"base-slider__marker text-xs"},up=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[c("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),dp={class:"base-slider__marker-text text-xs"};function cp(e,t,o,n,r,s){const a=b("feather");return u(),d("div",{ref:"slider",class:k(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...i)=>e.onBlur&&e.onBlur(...i)),onFocus:t[3]||(t[3]=(...i)=>e.onFocus&&e.onFocus(...i)),onKeydown:[t[4]||(t[4]=Ve(ve((...i)=>e.decrementValue&&e.decrementValue(...i),["prevent"]),["down"])),t[5]||(t[5]=Ve(ve((...i)=>e.decrementValue&&e.decrementValue(...i),["prevent"]),["left"])),t[6]||(t[6]=Ve(ve((...i)=>e.incrementValue&&e.incrementValue(...i),["prevent"]),["right"])),t[7]||(t[7]=Ve(ve((...i)=>e.incrementValue&&e.incrementValue(...i),["prevent"]),["up"]))]},[e.name?(u(),d("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,ap)):h("",!0),e.hasIcon?(u(),d("div",rp,[O(e.$slots,"icon",{},()=>[D(a,{type:e.icon,size:"20"},null,8,["type"])])])):h("",!0),c("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...i)=>e.onDragStart&&e.onDragStart(...i)),onTouchstart:t[1]||(t[1]=(...i)=>e.onDragStart&&e.onDragStart(...i))},[c("div",sp,[e.snapToSteps?(u(),d("div",lp,[(u(!0),d(P,null,A(e.snapPoints,(i,l)=>(u(),d("span",{key:l,class:"base-slider__snap-point",style:Q({left:100*e.relativeValue(i)+"%"})},null,4))),128))])):h("",!0)]),c("div",{class:"base-slider__track-fill bg-primary-400",style:Q(e.fillStyle)},null,4),c("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:Q(e.thumbStyle)},[e.showMarker?(u(),d("div",ip,[up,c("span",dp,R(e.markerText),1)])):h("",!0)],4)],544)],42,op)}var sa=S(ra,[["render",cp]]);ra.__docgenInfo={displayName:"RobustSlider",exportName:"default",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};var pp={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:sa,argTypes:{title:{control:{type:"text",default:"Title"}}}};const mp=e=>({template:'<Slider v-bind="args" />',components:{Slider:sa},setup(){return{args:e}}}),la=mp.bind();la.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Le};const fp=["Default"];var gp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pp,Default:la,__namedExportsOrder:fp}),yp={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Xe,argTypes:{}};const vp=e=>({template:"<Spinner />",components:{Spinner:Xe},setup(){return{args:e}}}),bp=vp.bind(),hp=["Default"];var _p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yp,Default:bp,__namedExportsOrder:hp});const ia=E({name:"RobustSwitch",props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:o}=F(e);return{isChecked:w({get:()=>o.value,set:r=>{t("update:modelValue",r)}})}}}),kp={class:"flex cursor-pointer items-center gap-x-3"},wp={key:0},Cp={class:"text-sm text-gray-400"};function Dp(e,t,o,n,r,s){return u(),d("label",kp,[Z(c("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),class:"hidden",type:"checkbox"},null,512),[[Ke,e.isChecked]]),c("div",{class:k(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[c("div",{class:k(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(u(),d("div",wp,[c("div",null,R(e.title),1),c("div",Cp,R(e.description),1)])):h("",!0)])}var ua=S(ia,[["render",Dp]]);ia.__docgenInfo={displayName:"RobustSwitch",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};var Sp={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:ua,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const xp=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:ua},setup(){const t=f(!1);return{args:e,value:t}}}),da=xp.bind({});da.args={title:"Switch title",description:"Switch description text to be placed here"};const $p=["Default"];var Tp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Sp,Default:da,__namedExportsOrder:$p});const ca=E({name:"RobustTabs",props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const o=f(),n=f([]),r=a=>{var i;(i=n.value)==null||i.push(a)};return ee(()=>{const a=n.value.find(i=>i.dataset.value===e.modelValue);a&&(console.log(a),a.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:a=>{t("update:modelValue",a)},root:o,registerTab:r}}}),Vp={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},Ip=["data-value"],Bp=["onClick"],Pp=c("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function Rp(e,t,o,n,r,s){return u(),d("div",Vp,[(u(!0),d(P,null,A(e.tabs,a=>(u(),d("div",{key:a.value,ref_for:!0,ref:e.registerTab,"data-value":a.value,class:k(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[a.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[O(e.$slots,"tab",{tab:a,select:()=>e.select(a.value)},()=>[c("div",{class:"px-4 py-3",onClick:()=>e.select(a.value)},R(a.title),9,Bp)])],10,Ip))),128)),Pp],512)}var jt=S(ca,[["render",Rp]]);ca.__docgenInfo={displayName:"RobustTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};var Mp={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:jt,argTypes:{rounded:{control:{type:"boolean"}}}};const jp=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:jt},setup(){const t=f("item_1");return{args:e,value:t}}}),pa=jp.bind();pa.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Ep=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:jt},setup(){const t=f("item_1");return{args:e,value:t}}}),ma=Ep.bind();ma.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const Lp=["Default","Slotted"];var Op=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mp,Default:pa,Slotted:ma,__namedExportsOrder:Lp});const fa=E({name:"RobustTextarea",inheritAttrs:!1,components:{InputWrapper:Ce,PhWarningCircle:pn},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:o}){const n=f(),r=o,s=w({get(){return e.modelValue},set(l){t("input",l),t("change",l),t("update:modelValue",l)}});function a(){var l;(l=n.value)==null||l.focus()}function i(){t("update:modelValue","")}return{inputFieldValue:s,inputAttrs:r,props:e,inputRef:n,focus:a,clear:i}}}),Np=["id","disabled","readonly"],Ap={key:1,class:"text-red-400"};function zp(e,t,o,n,r,s){const a=b("PhWarningCircle"),i=b("InputWrapper");return u(),L(i,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,class:k([e.condensed?"pt-1":"pt-2",e.$props.class]),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:K(l=>[e.$slots.prefix?(u(),d("div",{key:0,class:k(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[O(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),Z(c("textarea",ue({id:l.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=m=>e.inputFieldValue=m),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,Np),[[je,e.inputFieldValue]]),e.$slots.suffix||e.error?(u(),d("div",{key:1,class:k(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(u(),d("div",Ap,[D(a,{size:"20",class:"block"})])):O(e.$slots,"suffix",{key:0,tag:"div"})],2)):h("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var ga=S(fa,[["render",zp]]);fa.__docgenInfo={displayName:"RobustTextarea",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string | number | string[]"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Hp={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:ga,argTypes:{onTextarea:{action:"textarea"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Et=e=>({template:'<Textarea v-bind="args"/>',components:{Textarea:ga},setup(){return{args:e}}}),ya=Et.bind();ya.args={modelValue:"Textarea text",title:"Textarea title"};const va=Et.bind();va.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does"};const ba=Et.bind();ba.args={title:"Textarea title",hint:"This is an textarea hint. It is supposed to help the user understand the reason this textarea exists and what it does",error:"This is an textarea error. It tells the user, that there is something wrong with the current textarea state"};const Fp=["Default","Hint","ErrorHint"];var Wp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Hp,Default:ya,Hint:va,ErrorHint:ba,__namedExportsOrder:Fp});const ha=E({name:"RobustWidgetWrapper",components:{Popper:Pe,PhDotsThreeVertical:nr},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const o=f(!1),n=f(),r=f();Je(r,a=>{o.value&&(n.value.contains(a.target)&&(a.stopPropagation(),a.preventDefault()),s(),t("blur"))});const s=()=>{o.value===!0&&(o.value=!1,t("blur"))};return{open:o,closeDropdown:s,popperRef:r,contextButtonRef:n}}}),Up={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Gp(e,t,o,n,r,s){const a=b("PhDotsThreeVertical"),i=b("Popper");return u(),d(P,null,[c("div",ue(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[Z(c("div",{class:k(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[lt,e.stripe]]),e.title||e.$slots.title?(u(),d("div",Up,[e.$slots.title?O(e.$slots,"title",{key:0,title:e.title}):(u(),d(P,{key:1},[ke(R(e.title),1)],64)),e.$slots.options?(u(),d("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=l=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[D(a,{size:"24",weight:"bold"})],512)):h("",!0)])):h("",!0),e.$slots.default?(u(),d("section",{key:1,class:k(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[O(e.$slots,"default")],2)):h("",!0),O(e.$slots,"raw")],16),D(i,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=l=>e.open=l),options:{placement:"bottom-end"}},{default:K(()=>[O(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var _a=S(ha,[["render",Gp]]);ha.__docgenInfo={displayName:"RobustWidgetWrapper",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};var Yp={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:_a,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const qp=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:_a},setup(){const t=f(!1);return{args:e,value:t}}}),ka=qp.bind({});ka.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Kp=["Default"];var Jp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yp,Default:ka,__namedExportsOrder:Kp});function wa(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Ar,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":hs,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Is,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Os,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":ml,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Bl,"/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js":md,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":bd,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":Md,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":Hd,"/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":Zd,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":uc,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":gc,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":bc,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":kc,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":$c,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":Bc,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":Oc,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":Hc,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":Qc,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":np,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":gp,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":_p,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":Tp,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":Op,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":Wp,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Jp}[e]}Object.assign(wa,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DataTable/DataTable.stories.js":"./src/components/DataTable/DataTable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/EmptyState/EmptyState.stories.js":"./src/components/EmptyState/EmptyState.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});function Xp(e){e(wa,{hot:!1},!1)}const Qp=[ir,ur,dr,cr,pr,mr,fr,gr,yr,vr,kr].filter(Boolean);Qp.forEach(e=>{Object.keys(e).forEach(t=>{const o=e[t];switch(t){case"args":case"argTypes":return lr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(n=>sr(n,!1));case"loaders":return o.forEach(n=>rr(n,!1));case"parameters":return Ut(fe({},o),!1);case"argTypesEnhancers":return o.forEach(n=>ar(n));case"argsEnhancers":return o.forEach(n=>or(n));case"globals":case"globalTypes":{const n={};return n[t]=o,Ut(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});Xp(br);
//# sourceMappingURL=iframe.e984a1bc.js.map
