var ho=Object.defineProperty,bo=Object.defineProperties;var ko=Object.getOwnPropertyDescriptors;var gt=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,Do=Object.prototype.propertyIsEnumerable;var vt=(e,t,n)=>t in e?ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,He=(e,t)=>{for(var n in t||(t={}))wo.call(t,n)&&vt(e,n,t[n]);if(gt)for(var n of gt(t))Do.call(t,n)&&vt(e,n,t[n]);return e},yt=(e,t)=>bo(e,ko(t));import{a as $o,P as So,d as V,c as $,b as p,e as c,u as _o,o as i,f as ht,r as d,t as Y,g as X,w as q,n as S,h as Ae,i as P,j as N,k as _,l as I,m as re,p as xo,q as ae,v as Co,s as M,x as ue,y as Ve,z as Ie,A as bt,B as Me,C as kt,D as To,E as Po,F as Bo,G as Vo,H as Io,I as se,J as he,K as ne,L as je,M as ze,N as Ue,O as Mo,Q as jo,R as Lo,S as Oo,T as Eo,U as No,V as Ro,W as Fo,X as Wo,Y as le,Z as A,_ as Q,$ as Ho,a0 as wt,a1 as G,a2 as ie,a3 as Dt,a4 as $t,a5 as St,a6 as be,a7 as Ye,a8 as ke,a9 as _t,aa as Ao,ab as qe,ac as xt,ad as Le,ae as zo,af as Uo,ag as Yo,ah as qo,ai as Go,aj as Ct,ak as Ce,al as Ko,am as Jo,an as Xo,ao as Qo,ap as Zo,aq as Ge,ar as er,as as tr,at as Tt,au as nr,av as or,aw as rr,ax as ar,ay as sr,az as lr,aA as ir,aB as ur,aC as dr,aD as cr,aE as pr,aF as mr,aG as fr,aH as gr,aI as vr,aJ as yr}from"./vendor.cf066823.js";const hr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};hr();$o.use(So);const br={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:br});var L=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const wr=["width","height","viewBox"],Dr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"],Pt=V({props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=e;_o(s=>({"4b98cae0":ht(n),"420ac91c":ht(o)}));const n=$(()=>.666*(t.size-2*t.safeMargin)),o=$(()=>3.1415*(t.size-2*t.safeMargin));return(s,a)=>(i(),p("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Dr)],8,wr))}});var Oe=L(Pt,[["__scopeId","data-v-74441302"]]);Pt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var $r={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const Bt=V({components:{Spinner:Oe},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=d(!1),{loading:n,variant:o}=Y(e);return{variantStyles:$(()=>$r[o.value]),loading:n,displaySpinner:t}}}),Sr={key:0,class:"mr-2"},_r={class:"whitespace-no-wrap truncate"},xr={key:1,class:"ml-2"};function Cr(e,t,n,o,s,a){const r=P("spinner");return i(),X(Ae(e.tag),{disabled:e.disabled,class:S(["transition-color flex items-center justify-center truncate font-medium ring-opacity-50 duration-75 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:q(()=>[c("div",{class:S(["flex select-none items-center transition-all duration-150",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(i(),p("div",Sr,[N(e.$slots,"prefix",{tag:"div"})])):_("",!0),c("div",_r,[N(e.$slots,"default")]),e.$slots.suffix?(i(),p("div",xr,[N(e.$slots,"suffix",{tag:"div"})])):_("",!0)],2),e.loading?(i(),X(r,{key:0,size:20,stroke:2,class:"spinner absolute"})):_("",!0)]),_:3},8,["disabled","class"])}var we=L(Bt,[["render",Cr]]);Bt.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Tr={parameters:{storySource:{source:`import Button from './Button.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:we,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Pr=e=>({components:{Button:we},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Br=Pr.bind({}),Vr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <ph-smiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:we},setup(){return{args:e}}}),Ir=Vr.bind(),Mr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </Button>`,components:{Button:we},setup(){return{args:e}}}),jr=Mr.bind(),Lr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:we},setup(){return{args:e}}}),Or=Lr.bind(),Er=["Default","Prefix","Suffix","Loading"];var Nr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tr,Default:Br,Prefix:Ir,Suffix:jr,Loading:Or,__namedExportsOrder:Er});let Rr=0;const Vt=V({inheritAttrs:!1,props:{title:{type:String},class:{type:String},hint:{type:String},error:{type:String},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++Rr).toString(),o=/^on[^a-z]/,s=u=>o.test(u);let a=$(()=>Object.fromEntries(Object.entries(t).filter(u=>s(u[0]))));const r=d();function l(){}function m(){}return{cuid:n,wrapperRef:r,blurred:l,focused:m,listeners:a}}}),Fr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Wr={key:1,class:"block pt-1"},Hr={key:0,class:"select-none text-xs text-gray-400"},Ar={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function zr(e,t,n,o,s,a){return i(),p("fieldset",null,[e.title?(i(),p("legend",Fr,I(e.title),1)):_("",!0),c("div",re(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.class,e.condensed?"h-9":"h-10",{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly}]]}),[N(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(i(),p("label",Wr,[e.hint!==void 0?(i(),p("div",Hr,I(e.hint),1)):_("",!0),e.error!==void 0?(i(),p("div",Ar,I(e.error),1)):_("",!0)])):_("",!0)])}var De=L(Vt,[["render",zr]]);Vt.__docgenInfo={exportName:"default",displayName:"InputWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const It=V({inheritAttrs:!1,components:{InputWrapper:De,PhWarningCircle:xo},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=d(),s=n,a=$({get(){return e.modelValue},set(m){t("input",m),t("change",m),t("update:modelValue",m)}});function r(){var m;(m=o.value)==null||m.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),Ur=["id","readonly"],Yr={key:1,class:"text-red-400"};function qr(e,t,n,o,s,a){const r=P("PhWarningCircle"),l=P("InputWrapper");return i(),X(l,{title:e.title,hint:e.hint,error:e.error,class:S(e.$props.class),readonly:e.readonly,condensed:e.condensed},{default:q(m=>[e.$slots.prefix?(i(),p("div",{key:0,class:S(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[N(e.$slots,"prefix",{tag:"div"})],2)):_("",!0),ae(c("input",re({id:m.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=u=>e.inputFieldValue=u),size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly}]],readonly:e.readonly}),null,16,Ur),[[Co,e.inputFieldValue]]),e.$slots.suffix||e.error?(i(),p("div",{key:1,class:S(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(i(),p("div",Yr,[M(r,{size:"20",class:"block"})])):N(e.$slots,"suffix",{key:0,tag:"div"})],2)):_("",!0)]),_:3},8,["title","hint","error","class","readonly","condensed"])}var Ke=L(It,[["render",qr]]);It.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Gr=[{title:"today",preset:()=>{const e=ue(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ue(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=ue(Ve(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ue(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Ie(new Date),ue(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Ie(new Date),bt(new Date)]},{title:"this_year",preset:()=>[Me(new Date),kt(new Date)]},{title:"this_year_so_far",preset:()=>[Me(new Date),ue(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=To(Ve(new Date,7));return[e,Po(new Date(e))]}},{title:"last_month",preset:()=>{let e=Ie(Ve(Ie(new Date),1));return[e,bt(e)]}},{title:"last_year",preset:()=>{const e=Me(Ve(Me(new Date),1));return[e,kt(new Date(e))]}}],Kr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const Mt=V({components:{Input:Ke,PhCaretLeft:Bo,PhCaretRight:Vo},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:a}=Y(e),r=d(),l=d(),m=d(),u=d(),v=d(),f=Array.isArray(a.value)?d(new Date):d(new Date(a.value)),y=d(),g=d({}),B=Gr,x=$(()=>Kr[e.variant]),h=$(()=>{const D=new Date(f.value);return Io(D)}),F=$(()=>{try{return se(f.value,"MMM")}catch{return}}),C=$(()=>{try{return se(f.value,"yyyy")}catch{return}}),W=$(()=>{const D=new Date(f.value);D.setDate(1);const k=D.getDay();return(k===0?7:k)-1}),K=$(()=>new Date(f.value).getMonth()),H=$(()=>new Date(f.value).getFullYear()),z=()=>{if(console.log("applying time"),r.value!=""&&!je(new Date(r.value))&&(m.value="Please enter a valid date."),l.value!=""&&!je(new Date(l.value))&&(u.value="Please enter a valid date."),je(new Date(r.value))&&je(new Date(l.value))){m.value="",u.value="";const D=[new Date(r.value),new Date(l.value)];t("update:modelValue",D)}},R=(D,k)=>{const E=Z(D,k);return E<0?1:E>0?-1:0},Z=(D,k)=>{const E=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),oe=Date.UTC(D.getFullYear(),D.getMonth(),D.getDate());return(E-oe)/864e5},de=D=>{if(!Array.isArray(a.value)||a.value.length<2||!R(...a.value))return!1;const k=new Date;k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const E=ze(a.value);return!R(k,E)},ee=D=>{if(!Array.isArray(a.value)||a.value.length<2||!R(...a.value))return!1;const k=new Date;k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const E=Ue(a.value);return!R(k,E)},J=D=>{if(!Array.isArray(a.value)||a.value.length<2)return!1;const k=new Date;k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const E=ze(a.value),oe=Ue(a.value);return R(k,oe)===-1&&R(k,E)===1},ce=D=>{const k=new Date;if(k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear()),Array.isArray(a.value)){const E=a.value.map(oe=>new Date(oe));for(let oe=0;oe<E.length;oe++)if(!R(E[oe],k))return!0}else if(!R(new Date(y.value),k))return!0};function pe(D){t("update:modelValue",D),f.value=D[1]}function me(){f.value=Mo(f.value,1)}function ve(){f.value=jo(f.value,1)}function T(D){f.value=Lo(f.value,D)}function O(){f.value=Oo(f.value,1)}function w(){f.value=Eo(f.value,1)}function Be(D){f.value=No(f.value,D)}const ye=D=>{const k=new Date(f.value).setDate(D);return!(!s.value&&Ro(v.value,k)||!o.value&&Fo(v.value,k)>0||!n.value&&Wo(k))},fe=D=>{if(!ye(D))return;const k=new Date;if(k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear()),f.value=k,Array.isArray(a.value)){m.value="",u.value="";let E=[];a.value.length>=2?(E.push(new Date(f.value)),l.value=""):(E=a.value,E.push(new Date(f.value)),E.length>1&&(E=[ue(ze(E),{hours:0,minutes:0,seconds:0}),ue(Ue(E),{hours:23,minutes:59,seconds:59})],l.value=E[1].toLocaleDateString())),r.value=E[0].toLocaleDateString(),t("update:modelValue",E)}else y.value=new Date(f.value),t("update:modelValue",f.value)},b=()=>{f.value=new Date(new Date().setHours(12))};he(a,D=>{const k=D[0]||void 0,E=D[1]||void 0;k?r.value=k.toLocaleDateString():r.value="",E?l.value=E.toLocaleDateString():l.value=""}),ne(()=>{if(Array.isArray(a.value)){f.value=new Date(a.value[1]||new Date),y.value=f.value;const D=a.value[0]||void 0,k=a.value[1]||void 0;D?r.value=D.toLocaleDateString():r.value="",k?l.value=k.toLocaleDateString():l.value=""}else f.value=new Date(a.value||new Date),y.value=f.value});const U=$(()=>{const D=[];for(let k=1900;k<=2100;k++)D.push(k);return D}),te=d(!1);function xe(){te.value=!0}function Fe(){te.value=!1}const We=d(!1);function vo(){We.value=!0,le(()=>{g.value[H.value].scrollIntoView({block:"start",behavior:"auto"})})}function yo(){We.value=!1}return{months:$(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:r,to:l,errorFrom:m,errorTo:u,showMonthSelectionActive:te,showYearSelectionActive:We,now:v,cursor:f,selectedDate:y,showMonthSelection:xe,showYearSelection:vo,hideMonthSelection:Fe,hideYearSelection:yo,daysInMonth:h,monthHeading:F,yearHeading:C,refYearEntry:g,setYear:T,setMonth:Be,firstWeekday:W,activeMonth:K,activeYear:H,compareDates:R,applyTime:z,dayDiff:Z,isFirst:de,isLast:ee,isBetweenRange:J,isSelectedDay:ce,addYear:me,subYear:ve,addMonth:O,subMonth:w,dayAllowed:ye,daySelect:fe,reset:b,yearSelectionYears:U,quickActions:B,setQuickAction:pe,variantStyling:x}}}),Jr={class:"relative flex w-max select-none"},Xr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},Qr={class:"absolute inset-0 overflow-auto py-2"},Zr=["onClick"],ea={class:"p-4 dark:border-gray-600"},ta={class:"mb-4 flex items-center text-center text-lg font-semibold"},na={class:"flex flex-1"},oa={class:"relative w-max"},ra={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},aa=["onClick"],sa={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},la=["data-year","onClick"],ia=Ho('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),ua=["disabled","onClick"],da={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},ca=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),pa=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function ma(e,t,n,o,s,a){const r=P("PhCaretLeft"),l=P("PhCaretRight"),m=P("Input");return i(),p("div",Jr,[Array.isArray(e.modelValue)?(i(),p("div",Xr,[c("div",Qr,[(i(!0),p(A,null,Q(e.quickActions,u=>(i(),p("div",{key:u.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:v=>e.setQuickAction(u.preset())},I(u.title),9,Zr))),128))])])):_("",!0),c("section",ea,[c("div",ta,[c("div",na,[c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},I(e.monthHeading),1),c("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},I(e.yearHeading),1)]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...u)=>e.subMonth&&e.subMonth(...u))},[M(r,{type:"chevron-left",size:"14",weight:"bold"})]),c("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...u)=>e.addMonth&&e.addMonth(...u))},[M(l,{type:"chevron-right",size:"14",weight:"bold"})])]),c("div",oa,[e.showMonthSelectionActive?(i(),p("div",ra,[(i(!0),p(A,null,Q(e.months,(u,v)=>(i(),p("div",{key:v,class:S(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===v?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(v),e.hideMonthSelection()}},I(u.title),11,aa))),128))])):_("",!0),e.showYearSelectionActive?(i(),p("div",sa,[(i(!0),p(A,null,Q(e.yearSelectionYears,u=>(i(),p("div",{ref_for:!0,ref:v=>e.refYearEntry[u]=v,key:u,class:S(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===u?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":u,onClick:()=>{e.setYear(u),e.hideYearSelection()}},I(u),11,la))),128))])):_("",!0),c("div",{class:S(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ia,(i(!0),p(A,null,Q(e.firstWeekday,u=>(i(),p("div",{key:u+"_offset"}))),128)),(i(!0),p(A,null,Q(e.daysInMonth,u=>(i(),p("div",{key:u+"_day",class:S(["relative",[e.isBetweenRange(u)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(u),onClick:v=>e.daySelect(u)},[e.isLast(u)||e.isFirst(u)?(i(),p("div",{key:0,class:S(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(u)?"right-0 w-1/2":e.isLast(u)?"left-0 w-1/2":""]])},null,2)):_("",!0),c("div",{class:S(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(u)||e.isLast(u)||e.isFirst(u)||e.isSelectedDay(u)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},I(u),3)],10,ua))),128))],2)])]),Array.isArray(e.modelValue)?(i(),p("div",da,[ca,M(m,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=u=>e.from=u),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),pa,M(m,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=u=>e.to=u),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),N(e.$slots,"default")])):_("",!0)])}var Ee=L(Mt,[["render",ma]]);Mt.__docgenInfo={exportName:"default",displayName:"Calendar",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var fa={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ee,argTypes:{}};const jt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ee},setup(){return{args:e}}}),Lt=d(new Date),Ot=jt.bind({});Ot.args={modelValue:Lt,"onUpdate:modelValue":e=>{Lt.value=e,console.log(e)}};const ga=[new Date,new Date],Et=d(ga),Nt=jt.bind({});Nt.args={modelValue:Et,"onUpdate:modelValue":e=>{Et.value=e,console.log(e)}};const va=["Default","Range"];var ya=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fa,Default:Ot,Range:Nt,__namedExportsOrder:va});const Rt=V({emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=$({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(a){let r=e.modelValue;Array.isArray(r)?a?r.push(e.value):r.splice(r.indexOf(e.value),1):a?r=e.value:r=e.disabledValue,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),ha={class:"inline-block"},ba={class:"flex cursor-pointer items-start"},ka=["id"],wa={key:0,class:"w-full select-none pt-px leading-4"},Da={key:1,class:"w-full select-none pt-px leading-4"};function $a(e,t,n,o,s,a){const r=P("ph-check");return i(),p("div",ha,[c("label",ba,[ae(c("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,ka),[[wt,e.isChecked]]),c("div",{class:S(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[M(r,{class:S([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(i(),p("div",wa,I(e.title),1)):_("",!0),!e.title&&e.$slots.title?(i(),p("div",Da,[N(e.$slots,"title")])):_("",!0)])])}var Ne=L(Rt,[["render",$a]]);Rt.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var Sa={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Ne,argTypes:{title:{control:{type:"text"}}}};const _a=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Ne},setup(){return{value:d(!1),args:e}}}),Ft=_a.bind({});Ft.args={title:"Checkbox title"};const xa=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Ne},setup(){return{value:d(!1),args:e}}}),Wt=xa.bind({});Wt.args={title:"V-Slot Checkbox title"};const Ca=["Default","SlottedTitle"];var Ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Sa,Default:Ft,SlottedTitle:Wt,__namedExportsOrder:Ca});const Pa=["width","height","viewBox"],Ba=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"],Je=V({props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}},setup(e){return(t,n)=>(i(),p("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[c("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Ba)],8,Pa))}});Je.__docgenInfo={exportName:"default",displayName:"CircularProgress",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Va={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Je,argTypes:{progress:{control:{type:"number"}}}};const Ia=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Je},setup(){return{args:e}}}),Ma=Ia.bind(),ja=["Default"];var La=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Va,Default:Ma,__namedExportsOrder:ja});function $e(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ea(e):/rgb/.test(e)?t=zt(e):typeof e=="string"?t=zt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a}=t,{h:r,s:l,v:m}=Na(t);return{r:n,g:o,b:s,a:a===void 0?1:a,h:r,s:l,v:m}}function Ht(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function At(e,t,n,o,s,a){const r=e==="l",l=t.createLinearGradient(0,0,r?n:0,r?0:o);l.addColorStop(.01,s),l.addColorStop(.99,a),t.fillStyle=l,t.fillRect(0,0,n,o)}function Oa({r:e,g:t,b:n},o){const s=r=>("0"+Number(r).toString(16)).slice(-2),a=`#${s(e)}${s(t)}${s(n)}`;return o?a.toUpperCase():a}function Ea(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function zt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Na({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),a=o-s;let r=0;o===s?r=0:o===e?t>=n?r=60*(t-n)/a:r=60*(t-n)/a+360:o===t?r=60*(n-e)/a+120:o===n&&(r=60*(e-t)/a+240),r=Math.floor(r);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),m=parseFloat(o.toFixed(2));return{h:r,s:l,v:m}}const Ut=V({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=d({}),{size:o,hsv:s,color:a}=Y(e),r=d(),l=d(),m=f=>{const y=f,g=o.value,B=y.getContext("2d");y.width=g,y.height=g,B.fillStyle=a.value,B.fillRect(0,0,g,g),At("l",B,g,g,"#FFFFFF","rgba(255,255,255,0)"),At("p",B,g,g,"rgba(0,0,0,0)","#000000")},u=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},v=f=>{const{top:y,left:g}=r.value.getBoundingClientRect(),B=f.target.getContext("2d"),x=F=>{let C=F.clientX-g,W=F.clientY-y;C<0&&(C=0),W<0&&(W=0),C>o.value&&(C=o.value),W>o.value&&(W=o.value),n.value={left:C-5+"px",top:W-5+"px"};const K=B.getImageData(Math.min(C,o.value-1),Math.min(W,o.value-1),1,1),[H,z,R]=K.data;t("selectSaturation",{r:H,g:z,b:R})};x(f);const h=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",h)};return ne(()=>{m(l.value),u()}),{slideSaturationStyle:n,selectSaturation:v,renderSlide:u,renderColor:m,saturation:r,canvasSaturation:l,color:a,hsv:s,size:o}}}),Ra={ref:"canvasSaturation"};function Fa(e,t,n,o,s,a){return i(),p("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ie((...r)=>e.selectSaturation&&e.selectSaturation(...r),["prevent","stop"]))},[c("canvas",Ra,null,512),c("div",{style:G(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Wa=L(Ut,[["render",Fa]]);Ut.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Yt=V({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=d({}),o=d(),{height:s,width:a,hsv:r}=Y(e),l=d(),m=f=>{const y=f,g=a.value,B=s.value,x=y.getContext("2d");y.width=g,y.height=B;const h=x.createLinearGradient(0,0,0,B);h.addColorStop(0,"#FF0000"),h.addColorStop(.17*1,"#FF00FF"),h.addColorStop(.17*2,"#0000FF"),h.addColorStop(.17*3,"#00FFFF"),h.addColorStop(.17*4,"#00FF00"),h.addColorStop(.17*5,"#FFFF00"),h.addColorStop(1,"#FF0000"),x.fillStyle=h,x.fillRect(0,0,g,B)},u=()=>{n.value={top:(1-r.value.h/360)*s.value-2+"px"}},v=f=>{const{top:y}=l.value.getBoundingClientRect(),g=f.target.getContext("2d"),B=h=>{let F=h.clientY-y;F<0&&(F=0),F>s.value&&(F=s.value),n.value={top:F-2+"px"};const C=g.getImageData(0,Math.min(F,s.value-1),1,1),[W,K,H]=C.data;t("selectHue",{r:W,g:K,b:H})};B(f);const x=()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",B),document.addEventListener("mouseup",x)};return ne(()=>{m(o.value),u()}),{slideHueStyle:n,hue:l,width:a,height:s,renderSlide:u,selectHue:v,renderColor:m,hsv:r,canvasHue:o}}}),Ha={ref:"canvasHue"};function Aa(e,t,n,o,s,a){return i(),p("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ie((...r)=>e.selectHue&&e.selectHue(...r),["prevent","stop"]))},[c("canvas",Ha,null,512),c("div",{style:G(e.slideHueStyle),class:"slide"},null,4)],544)}var za=L(Yt,[["render",Aa]]);Yt.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const qt=V({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=d(5),{color:n,width:o,height:s}=Y(e),a=d(),r=l=>{const m=l,u=o.value,v=s.value,f=t.value,y=Ht(f),g=m.getContext("2d");m.width=u,m.height=v,g.fillStyle=g.createPattern(y,"repeat"),g.fillRect(0,0,u,v),g.fillStyle=n.value,g.fillRect(0,0,u,v)};return ne(()=>{Dt(()=>{r(a.value)}),r(a.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:a}}}),Ua={ref:"canvas"};function Ya(e,t,n,o,s,a){return i(),p("canvas",Ua,null,512)}var qa=L(qt,[["render",Ya]]);qt.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const Gt=V({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:$({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),Ga={class:"color-type"},Ka={class:"name"};function Ja(e,t,n,o,s,a){return i(),p("div",Ga,[c("span",Ka,I(e.name),1),ae(c("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.modelColor=r),class:"value"},null,512),[[$t,e.modelColor]])])}var Xa=L(Gt,[["render",Ja]]);Gt.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Kt=V({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=d(),o=d([]),s=d();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Ht(4).toDataURL(),St(()=>{a(n.value)});const a=l=>{if(!l)return;const m=o.value||[],u=m.indexOf(l);u>=0&&m.splice(u,1),m.length>=8&&(m.length=7),m.unshift(l),o.value=m||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(m))};return{setColorsHistory:a,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),Qa={class:"colors"},Za=["onClick"],es={key:0,class:"colors history"},ts=["onClick"];function ns(e,t,n,o,s,a){return i(),p("div",null,[c("ul",Qa,[(i(!0),p(A,null,Q(e.colorsDefault,r=>(i(),p("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[c("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:G({background:r}),class:"color"},null,4)],8,Za))),128))]),e.colorsHistory.length?(i(),p("ul",es,[(i(!0),p(A,null,Q(e.colorsHistory,r=>(i(),p("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[c("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),c("div",{style:G({background:r}),class:"color"},null,4)],8,ts))),128))])):_("",!0)])}var os=L(Kt,[["render",ns]]);Kt.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Jt=V({components:{Saturation:Wa,Hue:za,Preview:qa,Box:Xa,Colors:os},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=d(15),o=d(152),s=d(20),a=d(""),r=d(""),l=d(0),m=d(0),u=d(0),v=d(1),f=d(0),y=d(0),g=d(0),B=d(),x=d(),{theme:h,color:F}=Y(e),C=$(()=>h.value==="light"),W=$(()=>o.value+(n.value+8)*2),K=$(()=>W.value-s.value),H=$(()=>({r:l.value,g:m.value,b:u.value,a:v.value})),z=$(()=>({h:f.value,s:y.value,v:g.value})),R=$(()=>`rgb(${l.value}, ${m.value}, ${u.value})`),Z=$(()=>`${l.value}, ${m.value}, ${u.value}`),de=$(()=>`rgb(${Z.value})`),ee=$(()=>Oa(H.value,!0)),J=()=>{r.value=ee.value,a.value=Z.value};return ne(()=>{const O=$e(F.value);l.value=O.r,m.value=O.g,u.value=O.b,v.value=O.a,f.value=O.h,y.value=O.s,g.value=O.v,J()}),Dt(()=>{t("changeColor",{rgba:H.value,hsv:z.value,hex:r.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:a,modelHex:r,r:l,g:m,b:u,a:v,h:f,s:y,v:g,isLightTheme:C,totalWidth:W,previewWidth:K,rgba:H,hsv:z,rgbString:R,rgbStringShort:Z,rgbaString:de,hexString:ee,setText:J,selectSaturation:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,J()},selectHue:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,J(),le(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide()})},inputHex:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,r.value=O,a.value=Z.value,le(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide(),B.value.renderSlide()})},inputRgba:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,r.value=ee.value,a.value=`${l.value}, ${m.value}, ${u.value}`,le(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide(),B.value.renderSlide()})},selectColor:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,J(),le(()=>{x.value.renderColor(x.value.canvasSaturation),x.value.renderSlide(),B.value.renderSlide()})},saturation:x,hue:B,color:F,theme:h}}}),rs={class:"color-set"};function as(e,t,n,o,s,a){const r=P("Saturation"),l=P("Hue"),m=P("Preview"),u=P("Box"),v=P("Colors");return i(),p("div",{class:S(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:G({width:e.totalWidth+"px"})},[c("div",rs,[M(r,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),M(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),c("div",{style:G({height:e.previewHeight+"px"}),class:"color-show"},[M(m,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),M(u,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),M(u,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),M(v,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var Xt=L(Jt,[["render",as]]);Jt.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
import { PhWarning } from 'phosphor-vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:Xt,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ls=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:Xt},setup(){return{args:e}}}),is=ls.bind(),us=["Default"];var ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ss,Default:is,__namedExportsOrder:us});const Qt=V({props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),cs={key:1,class:"flex items-center"},ps={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function ms(e,t,n,o,s,a){return e.$slots.default?(i(),p("div",cs,[c("div",{class:S(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),c("div",ps,[N(e.$slots,"default")]),c("div",{class:S(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(i(),p("div",{key:0,class:S(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var fs=L(Qt,[["render",ms]]);Qt.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const Zt=V({components:{Separator:fs},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),gs={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},vs={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},ys={class:"flex"},hs={key:1,class:"text-gray-500 dark:text-gray-500"},bs={class:"p-4 sm:p-6"};function ks(e,t,n,o,s,a){const r=P("Separator");return i(),p("section",gs,[e.description!==void 0||e.title!==void 0?(i(),p("header",vs,[e.stripe?(i(),p("div",{key:0,class:S(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):_("",!0),c("h1",ys,[c("div",{class:S(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[N(e.$slots,"title",{title:e.title},()=>[be(I(e.title),1)])],2)]),e.description!==void 0?(i(),p("p",hs,[N(e.$slots,"description",{description:e.description},()=>[be(I(e.description),1)])])):_("",!0)])):_("",!0),M(r),c("div",bs,[N(e.$slots,"default")])])}var Te=L(Zt,[["render",ks]]);Zt.__docgenInfo={exportName:"default",displayName:"ContentBox",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var ws={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),$s=Ds.bind(),Ss=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),en=Ss.bind();en.args={title:"Input title"};const _s=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),tn=_s.bind();tn.args={title:"Input title"};const xs=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),nn=xs.bind();nn.args={title:"Input title"};const Cs=["Default","Title","TitleProp","Stripe"];var Ts=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ws,Default:$s,Title:en,TitleProp:tn,Stripe:nn,__namedExportsOrder:Cs});const on=V({props:{title:{type:String},description:{type:String},icon:{type:Object}}}),Ps={class:"py-4 text-gray-500 dark:text-gray-400"},Bs={class:"mb-2 flex justify-center"},Vs={class:"mx-auto text-center text-xl font-bold"},Is={class:"mx-auto text-center"};function Ms(e,t,n,o,s,a){return i(),p("div",Ps,[c("div",Bs,[(i(),X(Ae(e.icon),{size:"40"}))]),c("div",Vs,I(e.title),1),c("div",Is,I(e.description),1)])}var rn=L(on,[["render",Ms]]);on.__docgenInfo={exportName:"default",displayName:"ContentPlaceholder",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}]};var js={parameters:{storySource:{source:`import ContentPlaceholder from './ContentPlaceholder.vue'
import { PhWarning } from 'phosphor-vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ContentPlaceholder",component:rn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Ls=e=>({template:'<ContentPlaceholder v-bind="args" />',components:{ContentPlaceholder:rn},setup(){return{args:e}}}),an=Ls.bind();an.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Ye};const Os=["Default"];var Es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:js,Default:an,__namedExportsOrder:Os}),Ns=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],Se=V({props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=Y(e),a=d();let r;const l=d(!1),m={strategy:"absolute",placement:"bottom-start",modifiers:[...Ns,...e.modifiers]};function u(){r==null||r.destroy(),l.value=!1}async function v(g){if(!g)return;const B=Object.assign({},m,e.options);!a.value||(r=Ao(g,a.value,B),await r.update())}St(()=>{u()});async function f(){await v(s.value),a.value&&(r==null||r.update(),_t.fromTo(a.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function y(){a.value&&_t.fromTo(a.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{u()})}return ne(()=>{if(!n.default)throw new Error("Popper does not have a child slot");he(o,g=>{l.value=!0,le(async()=>{g?f():y()})})}),{appendTo:s,root:a,render:l}},render(){if(this.render)return ke("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const sn=V({components:{Popper:Se,Calendar:Ee,InputWrapper:De,PhCaretDown:qe,PhCalendar:xt},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=d(),{modelValue:s}=Y(e),a=d(!1),r=d(),l=d();Le(r,f=>{a.value&&(l.value.wrapperRef.contains(f.target)&&(f.stopPropagation(),f.preventDefault()),v(),t("blur"))});const m=$({get(){return(s==null?void 0:s.value)?s.value:new Date},set(f){a.value=!1,t("update:modelValue",f),t("change",f),t("blur")}}),u=$(()=>{if(!m.value)return"Select date";const f=m.value;try{return f?se(f,"P"):"Unknown"}catch{return}});function v(){a.value===!0&&(a.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:a,props:e,displayDate:u,computedValue:m,closeDropdown:v,popperRef:r,inputWrapperRef:l}},methods:{}}),Rs=["id"],Fs={class:"min-w-0 truncate tabular-nums"};function Ws(e,t,n,o,s,a){var f,y;const r=P("PhCalendar"),l=P("PhCaretDown"),m=P("InputWrapper"),u=P("Calendar"),v=P("Popper");return i(),p(A,null,[M(m,{title:e.title,hint:e.hint,error:e.error,class:S([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ie(g=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:q(g=>[c("div",{class:S(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[M(r,{size:"20"})],2),c("div",re({id:g.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Fs,I(e.displayDate),1)],16,Rs),c("div",{class:S(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(l,{size:14,weight:"bold",class:S(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((f=e.inputWrapperRef)==null?void 0:f.wrapperRef)?(i(),X(v,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(y=e.inputWrapperRef)==null?void 0:y.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=g=>e.open=g),options:{placement:"bottom-start"}},{default:q(()=>[M(u,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=g=>e.computedValue=g)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):_("",!0)],64)}var Xe=L(sn,[["render",Ws]]);sn.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Hs={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:Xe,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const As=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:Xe},setup(){return{args:e}}}),zs=new Date,ln=d(zs),un=As.bind({});un.args={modelValue:ln,"onUpdate:modelValue":e=>{ln.value=e}};const Us=["Default"];var Ys=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Hs,Default:un,__namedExportsOrder:Us});const dn=V({components:{Calendar:Ee,Popper:Se,InputWrapper:De,Button:we,Checkbox:Ne,DatePicker:Xe,PhCaretDown:qe,PhCalendar:xt,PhArrowLeft:zo,PhArrowRight:Uo,PhClockCounterClockwise:Yo},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:a,comparePerspectiveDate:r}=Y(e),l=d(),m=d(!1),u=d(),v=d(),f=d(a.value),y=d(r.value),g=d(!1),B=d(),x=d(),h=d(!0),F=d(),C=$(()=>z.value.length>1),W=(T,O)=>O?se(T,"dd.MM.yyyy HH:mm:ss"):se(T,"dd.MM.yyyy"),K=$(()=>e.dateHistory||[]);let H=d();const z=d(s.value),R=$({get(){return z.value},set(T){z.value=T,t("update:compareDate",T),t("blur")}}),Z=$({get:()=>R.value.length>1,set:T=>{J(T)}}),de=$(()=>{if(!o.value)return"Select date";const T=o.value;try{return T.length>1?se(T[0],"P")+" - "+se(T[1],"P"):se(T[0],"P")+" - "+se(T[0],"P")}catch{return}});function ee(){m.value===!0&&(m.value=!1,g.value=!1,t("blur"))}const J=T=>{T?B.value=T:(t("update:comparison-date",void 0),R.value=void 0)};Le(F,T=>{m.value&&(u.value.wrapperRef.contains(T.target)&&(T.stopPropagation(),T.preventDefault()),ee(),t("blur"))});const ce=()=>{H.value=o.value,m.value=!m.value},pe=()=>{B.value=!1},me=async()=>{t("update:dateRange",H.value),t("change",H.value),t("blur"),m.value=!1},ve=T=>{h.value=T};return he(f,T=>{t("update:perspectiveDate",T)}),he(y,T=>{t("update:comparePerspectiveDate",T)}),{displayCompare:B,computedCompare:R,attrs:n,props:e,refSelectContainer:l,pickedCompare:C,open:m,displayDate:de,saveTime:me,tmpDateRange:H,dateConfig:x,closeDropdown:ee,showCompare:J,comparePerspectiveOf:y,compareWith:Z,storeHistory:h,handleClick:ce,goBack:pe,mainCalendar:v,perspectiveOf:f,enabledHistory:g,dateHistory:K,formatDate:W,enableStoringHistory:ve,inputWrapperRef:u,popperRef:F}},methods:{}}),qs=["id"],Gs={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Ks=c("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"}," Date range ",-1),Js={key:0,class:"flex flex-col items-start gap-y-3"},Xs=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Qs={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},Zs={key:1},el={key:0,class:"flex flex-col items-start"},tl=c("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),nl={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},ol=be("Apply time range");function rl(e,t,n,o,s,a){var B,x;const r=P("PhCalendar"),l=P("PhCaretDown"),m=P("InputWrapper"),u=P("DatePicker"),v=P("Checkbox"),f=P("Calendar"),y=P("Button"),g=P("Popper");return i(),p(A,null,[M(m,{title:e.title,hint:e.hint,error:e.error,class:S([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ie(e.handleClick,["stop"])},{default:q(h=>[c("div",{class:S(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[M(r,{size:"20"})],2),c("div",re({id:h.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[c("div",Gs,I(e.displayDate),1)],16,qs),c("div",{class:S(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(l,{size:14,weight:"bold",class:S(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((B=e.inputWrapperRef)==null?void 0:B.wrapperRef)?(i(),X(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(x=e.inputWrapperRef)==null?void 0:x.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=h=>e.open=h),options:{placement:"bottom-start"}},{default:q(()=>[Ks,c("div",null,[M(f,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=h=>e.tmpDateRange=h),"onClick:relativeDate":t[3]||(t[3]=h=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(i(),p("div",Js,[c("div",null,[Xs,M(u,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=h=>e.perspectiveOf=h)},null,8,["modelValue"])]),e.enableComparison?(i(),X(v,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=h=>e.compareWith=h),title:"Compare with"},null,8,["modelValue"])):_("",!0)])):_("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(i(),p("h3",Qs," Comparison date range ")):_("",!0),e.enableComparison?(i(),p("div",Zs,[M(f,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=h=>e.computedCompare=h),"onClick:relativeDate":t[6]||(t[6]=h=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(i(),p("div",el,[tl,M(u,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=h=>e.comparePerspectiveOf=h)},null,8,["modelValue"])])):_("",!0)]),_:1},8,["modelValue"])])):_("",!0),c("div",nl,[M(y,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:q(()=>[ol]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):_("",!0)],64)}var cn=L(dn,[["render",rl]]);dn.__docgenInfo={exportName:"default",displayName:"DaterangePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var al={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:cn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const sl=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:cn},setup(){return{args:e}}}),pn=[new Date,new Date],mn=d(pn),fn=d(pn),gn=sl.bind({});gn.args={dateRange:mn,"onUpdate:dateRange":e=>{mn.value=e},compareDateRange:fn,"onUpdate:compareDateRange":e=>{fn.value=e}};const ll=["Default"];var il=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:al,Default:gn,__namedExportsOrder:ll});let j,Qe,Ze,et,ge;const tt=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},ul=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},vn=function(e,t){var n,o;if(tt("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;j=this,Qe=ge.handleClass&&j.querySelector(`.${ge.handleClass}`),Ze=Array.from((n=j==null?void 0:j.parentElement)==null?void 0:n.children).indexOf(j),(o=j==null?void 0:j.parentElement)==null||o.classList.add("drag")},yn=function(e){var n;if(!j)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=j==null?void 0:j.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=j==null?void 0:j.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(j.classList.add(ge.placeholderClass),ul(j,t)?t.parentNode.insertBefore(j,t):t.parentNode.insertBefore(j,t.nextSibling))},hn=(e,t)=>{var s,a;if(!j)return;tt("end",t,e),Qe&&j.setAttribute("draggable","false"),j.classList.remove(ge.placeholderClass),(s=j==null?void 0:j.parentElement)==null||s.classList.remove("drag");const n=Ze,o=Array.from((a=j==null?void 0:j.parentElement)==null?void 0:a.children).indexOf(j);et.splice(o,0,et.splice(n,1)[0]),tt("change",t,{from:n,to:o}),setTimeout(()=>{j=null,Ze=null,Qe=null},0)},bn=(e,t)=>{const n=ge.handleClass&&e.querySelector(`.${ge.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>vn.bind(e,o,t)(),e.ondragenter=yn,e.ondragend=o=>hn.bind(e,o,t)(),e.ontouchstart=o=>vn.bind(e,o,t)(),e.ontouchmove=yn,e.ontouchend=o=>hn.bind(e,o,t)()};var dl={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}et=t.value&&t.value.value,ge={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>bn(s,n)),e.addEventListener("DOMNodeInserted",function(s){j||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&bn(s.target,n)})}};const kn=V({directives:{draggable:dl},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=Y(e),o=$({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return le(()=>{console.log("alo")}),{list:o}}});function cl(e,t,n,o,s,a){const r=qo("draggable");return ae((i(),p("div",null,[(i(!0),p(A,null,Q(e.list,l=>(i(),p("div",{key:l},[N(e.$slots,"element",{item:l})]))),128))])),[[r,{value:e.list}]])}var wn=L(kn,[["render",cl]]);kn.__docgenInfo={exportName:"default",displayName:"Draggable",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};var pl={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:wn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const ml=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:wn},setup(){let t=d([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),fl=ml.bind({}),gl=["Default"];var vl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pl,Default:fl,__namedExportsOrder:gl});const Dn=V({props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=Y(e),o=$(()=>{var s,a,r,l,m;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(a=n.value)==null?void 0:a.gridstack.x,"gs-y":(r=n.value)==null?void 0:r.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(m=n.value)==null?void 0:m.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),yl={class:"grid-stack-item-content bg-gray-300"};function hl(e,t,n,o,s,a){return i(),p("div",re({class:"grid-stack-item"},e.widgetAttributes),[c("div",yl,[be(I(e.widget.id)+" "+I(e.widget.gridstack)+" ",1),(i(),X(Ae(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var bl=L(Dn,[["render",hl]]);Dn.__docgenInfo={exportName:"default",displayName:"GridItem",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const $n=V({components:{GridItem:bl},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=Y(e),o,s=d();return ne(()=>{console.log("mounting"),o=Go.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(a,r)=>{!n.value||([...n.value],Array.isArray(r)&&n.value.forEach(l=>{let m=r.find(u=>u.id===l.id);m&&(l.gridstack=yt(He({},l.gridstack),{x:m.x,y:m.y,w:m.w,h:m.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),kl={ref:"gridContainer",class:"grid-stack bg-gray-200"};function wl(e,t,n,o,s,a){const r=P("GridItem");return i(),p("div",null,[be(I(e.locked)+" ",1),c("section",kl,[(i(!0),p(A,null,Q(e.widgets,l=>(i(),X(r,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var Sn=L($n,[["render",wl]]);$n.__docgenInfo={exportName:"default",displayName:"Grid",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var Dl={title:"Ui/Grid",component:Sn,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let _n=V({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const $l=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:Sn},setup(){let t=d([{id:"test",component:Ct(_n),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:Ct(_n),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return he(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),Sl=$l.bind(),_l=["Default"];var xl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dl,Default:Sl,__namedExportsOrder:_l}),Re=V({props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=d(!0),o=d(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=a=>{t("error",a),o.value=!0,n.value=!1},ne(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?ke("div",{class:"flex items-center justify-center"},ke(Oe,{size:24,stroke:2})):this.error?this.fallbackSrc?ke("img",{src:this.fallbackSrc}):ke(Ye,{size:20}):ke("img",{src:this.src})}}),Cl={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Re,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Tl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Re},setup(){return{args:e}}}),xn=Tl.bind();xn.args={title:"Img title"};const Pl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Re},setup(){return{args:e}}}),Cn=Pl.bind();Cn.args={title:"Img title"};const Bl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Re},setup(){return{args:e}}}),Tn=Bl.bind();Tn.args={title:"Img title"};const Vl=["Default","Broken","Fallback"];var Il=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cl,Default:xn,Broken:Cn,Fallback:Tn,__namedExportsOrder:Vl}),Ml={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:Ke,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const nt=e=>({template:'<Input v-bind="args"/>',components:{Input:Ke},setup(){return{args:e}}}),Pn=nt.bind();Pn.args={title:"Input title"};const Bn=nt.bind();Bn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Vn=nt.bind();Vn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const jl=["Default","Hint","ErrorHint"];var Ll=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ml,Default:Pn,Hint:Bn,ErrorHint:Vn,__namedExportsOrder:jl}),Ol={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:De,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const ot=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:De},setup(){return{args:e}}}),In=ot.bind();In.args={title:"Input title",outline:!1};const Mn=ot.bind();Mn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const jn=ot.bind();jn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const El=["Default","Hint","ErrorHint"];var Nl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ol,Default:In,Hint:Mn,ErrorHint:jn,__namedExportsOrder:El});const Ln=V({props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=Y(e),o=$(()=>`height:${t.value}px`),s=$(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function Rl(e,t,n,o,s,a){return i(),p("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:G([e.heightComputed])},[c("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:G([e.widthComputed])},null,4)],4)}var On=L(Ln,[["render",Rl]]);Ln.__docgenInfo={exportName:"default",displayName:"LinearProgress",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Fl={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:On,argTypes:{progress:{control:{type:"number"}}}};const Wl=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:On},setup(){return{args:e}}}),Hl=Wl.bind(),Al=["Default"];var zl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fl,Default:Hl,__namedExportsOrder:Al});let _e,rt,at,st,lt,it,ut,dt,ct,Pe;const En=e=>{const t=e||navigator.userAgent,n=/(iPad).*OS\s([\d_]+)/.test(t),o=!n&&/(iPhone\sOS)\s([\d_]+)/.test(t);return/(Android);?[\s/]+([\d.]+)?/.test(t)||o||n},Ul=()=>{const e=document.body,t=window.innerWidth-e.clientWidth;_e=e.style.overflow,rt=e.style.boxSizing,at=e.style.paddingRight,e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight=`${t+e.style.paddingRight}px`},Yl=()=>{const e=document.body;e.style.overflow=_e,e.style.boxSizing=rt,e.style.paddingRight=at,_e="",rt="",at=""},ql=()=>{const e=document.documentElement,t=document.body;Pe=e.scrollTop||t.scrollTop,st=e.style.height,lt=e.style.overflow,it=t.style.top,ut=t.style.width,dt=t.style.height,ct=t.style.position,_e=t.style.overflow,e.style.height="100%",e.style.overflow="hidden",t.style.top=`-${Pe}px`,t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden"},Gl=()=>{const e="scrollBehavior"in document.documentElement.style,t=document.documentElement,n=document.body;t.style.height=st,t.style.overflow=lt,n.style.top=it,n.style.width=ut,n.style.height=dt,n.style.position=ct,n.style.overflow=_e,e?window.scrollTo({top:Pe,behavior:"auto"}):window.scrollTo(0,Pe),_e="",st="",lt="",it="",ut="",dt="",ct="",Pe=""},Kl=()=>{En()&&ql(),Ul()},Jl=()=>{En()&&Gl(),Yl()};const Nn=V({inheritAttrs:!1,props:{modalClass:{type:String}},setup(e,{emit:t}){const n=d(!1);he(n,a=>{a?Kl():Jl()});async function o(){n.value=!0,t("open")}async function s(){n.value=!1,t("close")}return{open:o,close:s,modalOpen:n}}}),Xl={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24"},Ql={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},Zl={class:"leading-4"};function ei(e,t,n,o,s,a){const r=P("ph-x");return i(),X(Jo,{to:"#modal-area"},[M(Ko,re(e.$attrs,{name:"slide"}),{default:q(()=>[e.modalOpen?(i(),p("div",Xl,[c("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90",onClick:t[0]||(t[0]=ie((...l)=>e.close&&e.close(...l),["self"]))}),c("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Ce((...l)=>e.close&&e.close(...l),["esc"]))},[c("div",{class:S(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(i(),p("div",Ql,[c("div",Zl,[N(e.$slots,"title",{},void 0,!0)]),c("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[M(r,{size:"20",class:"block"})])])):_("",!0),N(e.$slots,"default",{},void 0,!0)],2)],32)],512)):_("",!0)]),_:3},16)])}var Rn=L(Nn,[["render",ei],["__scopeId","data-v-487d190d"]]);Nn.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}}],slots:[{name:"title"},{name:"default"}]};var ti={parameters:{storySource:{source:`import Modal from './Modal.vue'

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
  template: '<Modal v-bind="args">test</Modal>',
  components: { Modal },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

Default.args = {
  title: 'Modal title',
}
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Modal",component:Rn,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ni=e=>({template:'<Modal v-bind="args">test</Modal>',components:{Modal:Rn},setup(){return{args:e}}}),Fn=ni.bind();Fn.args={title:"Modal title"};const oi=["Default"];var ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ti,Default:Fn,__namedExportsOrder:oi}),ai={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const Wn=V({props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:$(()=>ai[e.variant])}}});function si(e,t,n,o,s,a){return i(),p("div",{class:S([e.computedClass,"mb-4 border-l-4 p-4"])},[N(e.$slots,"default")],2)}var Hn=L(Wn,[["render",si]]);Wn.__docgenInfo={exportName:"default",displayName:"Notice",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};var li={parameters:{storySource:{source:`import Notice from './Notice.vue'
import { PhWarning } from 'phosphor-vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Hn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ii=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Hn},setup(){return{args:e}}}),ui=ii.bind(),di=["Default"];var ci=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:li,Default:ui,__namedExportsOrder:di}),pi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:Se,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const mi=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:Se},setup(){const t=d(!1);return{args:e,value:t}}}),An=mi.bind({});An.args={title:"Popper title",description:"Popper description text to be placed here"};const fi=["Default"];var gi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pi,Default:An,__namedExportsOrder:fi});let vi=0;const zn=V({props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++vi).toString(),s=$({get(){return e.modelValue===e.value},set(){let a=e.modelValue;a=e.value,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),yi={class:"inline-block"},hi=["id"],bi=["for"],ki={key:0,class:"w-full select-none leading-4"};function wi(e,t,n,o,s,a){return i(),p("div",yi,[ae(c("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),type:"radio",class:"hidden"},null,8,hi),[[Xo,e.isChecked]]),c("label",{for:`radio_${e.cuid}`,class:S([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[c("div",{class:S(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[c("div",{class:S([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(i(),p("div",ki,I(e.title),1)):_("",!0),c("div",null,[e.$slots.title?N(e.$slots,"title",{key:0}):_("",!0)])],10,bi)])}var Un=L(zn,[["render",wi]]);zn.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};var Di={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:Un,argTypes:{title:{control:{type:"text"}}}};const $i=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:Un},setup(){const t=d("test");return{args:e,value:t}}}),Yn=$i.bind({});Yn.args={title:"Radio title"};const Si=["Default"];var _i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Di,Default:Yn,__namedExportsOrder:Si});const qn=V({components:{Popper:Se,InputWrapper:De,PhCheck:Qo,PhCaretDown:qe},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=d(),s=d(),{options:a}=Y(e),r=d(!1),l=d(),m=d(),u=d("");let v=d([]);async function f(C){e.searchFunction!==void 0&&(v.value=await e.searchFunction(C)),C===""?v.value=a.value:v.value=a.value.filter(W=>W.title.toLowerCase().substring(0,C.length)===C.toLowerCase())}Zo(u,async C=>{await f(C)},{debounce:150}),ne(async()=>{await f("")});const y=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:C=>{C.state.styles.popper.width=`${Math.max(C.state.rects.reference.width,200)}px`},effect:C=>{C.state.elements.popper.style.width=`${C.state.elements.reference.getBoundingClientRect().width}px`}}],g=$(()=>e.options.find(C=>C.value===e.modelValue));function B(C){le(()=>{h()}),t("update:modelValue",C.value),t("change",C.value)}function x(){r.value=!0,le(()=>{s.value.focus()}),t("focus")}Le(l,C=>{r.value&&(m.value.wrapperRef.contains(C.target)&&(C.stopPropagation(),C.preventDefault()),F(),h(),t("blur"))});function h(){r.value=!1}function F(){u.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:h,open:r,props:e,openDropdown:x,inputWrapper:m,popperModifiers:y,activeItem:g,selectItem:B,computedOptions:v,resetFields:F,attrs:n,search:u,popperRef:l}}}),xi=["id"],Ci={class:"min-w-0 select-none truncate"},Ti={key:0,class:"max-h-72 overflow-auto"},Pi=["onClick"],Bi={key:1,class:"py-2 text-center text-gray-400"};function Vi(e,t,n,o,s,a){var v,f;const r=P("PhCaretDown"),l=P("InputWrapper"),m=P("PhCheck"),u=P("Popper");return i(),p(A,null,[M(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:S([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:q(y=>[e.$slots.prefix?(i(),p("div",{key:0,class:S(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[N(e.$slots,"prefix",{tag:"div"})],2)):_("",!0),ae(c("div",re({id:y.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[c("div",Ci,I(e.activeItem?e.activeItem.title:"Select"),1)],16,xi),[[Ge,!e.open]]),ae(c("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=g=>e.search=g),size:"1",class:S(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ge,e.open],[$t,e.search]]),c("div",{class:S(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(r,{size:14,weight:"bold",class:S(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((v=e.inputWrapper)==null?void 0:v.wrapperRef)?(i(),X(u,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=y=>e.open=y),ref:"popperRef",class:"z-[100] origin-top","append-to":(f=e.inputWrapper)==null?void 0:f.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:q(()=>[e.computedOptions.length>0?(i(),p("ul",Ti,[(i(!0),p(A,null,Q(e.computedOptions,y=>(i(),p("li",{key:y.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:g=>e.selectItem(y)},[c("span",null,I(y.title),1),e.modelValue===y.value?(i(),X(m,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):_("",!0)],8,Pi))),128))])):(i(),p("div",Bi,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):_("",!0)],64)}var Gn=L(qn,[["render",Vi]]);qn.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Ii={parameters:{storySource:{source:`import Select from './Select.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}},hint:{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}},"error-hint":{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}}}}},title:"Ui/Select",component:Gn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const pt=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Gn},setup(){let t=d(void 0),n=d([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),Kn=pt.bind();Kn.args={title:"Input title"};const Jn=pt.bind();Jn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Xn=pt.bind();Xn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Mi=["Default","Hint","ErrorHint"];var ji=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ii,Default:Kn,Hint:Jn,ErrorHint:Xn,__namedExportsOrder:Mi});const Qn=V({props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=d(e.modelValue),o=d(!1),s=d(!1),a=d(e.modelValue),r=d(),l=d(),m=d(),u=$(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":v},{"has-marker":e.showMarker}]),v=$(()=>Boolean(e.icon)),f=$(()=>({transform:"scaleX("+ye(a.value)+")"})),y=$(()=>({left:ye(a.value)*100+"%"})),g=$(()=>e.markerValue===void 0?e.modelValue:e.markerValue),B=$(()=>{const b=[];let U=e.step*Math.ceil(x()/e.step);for(;U<=h();)b.push(U),U+=e.step;return b}),x=()=>e.max>e.min?e.min:0,h=()=>e.max>e.min?e.max:100,F=()=>{r.value.focus()},C=()=>{R(n)},W=()=>{o.value=!0,t("focus")},K=()=>{o.value=!1,t("blur")},H=b=>{r.value.contains(b.target)||K()},z=b=>{b=fe(b),e.snapToSteps&&(b=Be(b)),R(b)},R=b=>{b=fe(b),b!==a.value&&(a.value=b,t("update:modelValue",b),t("change",b))},Z=()=>{z(a.value+e.step)},de=()=>{z(a.value-e.step)},ee=()=>{let b=l.value,U=b.offsetLeft;for(;b.offsetParent;)b=b.offsetParent,U+=b.offsetLeft;return U},J=b=>({left:b+"%"}),ce=()=>{document.addEventListener("touchend",w),document.addEventListener("mouseup",w),document.addEventListener("click",H),document.addEventListener("touchstart",H),me()},pe=()=>{document.removeEventListener("touchend",w),document.removeEventListener("mouseup",w),document.removeEventListener("click",H)},me=()=>{const b=fe(a.value?a.value:0);R(b)},ve=b=>{e.disabled||(o.value||W(),s.value=!0,O(b),document.addEventListener("touchmove",T),document.addEventListener("mousemove",T),t("dragstart",a.value,b))},T=b=>{O(b)},O=b=>{const U=b.touches?b.touches[0].pageX:b.pageX,te=l.value.offsetWidth,xe=(U-ee())/te,Fe=fe(x()+xe*(h()-x()));s.value&&R(Math.round(Fe))},w=b=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!=0&&z(e.modelValue),document.removeEventListener("touchmove",T),document.removeEventListener("mousemove",T),t("dragend",a.value,b))},Be=b=>{const U=Math.floor(b/e.step)*e.step,te=U+e.step,xe=(U+te)/2;return U<x()?te>h()?b:te:b>=xe&&te<=h()?te:U},ye=b=>(b-x())/(h()-x()),fe=b=>b<x()?x():b>h()?h():b;return ne(()=>{ce()}),er(()=>{pe()}),{slider:r,track:l,thumb:m,initialValue:n,isActive:o,isDragging:s,localValue:a,classes:u,hasIcon:v,fillStyle:f,thumbStyle:y,markerText:g,snapPoints:B,moderatedMin:x,moderatedMax:h,focus:F,reset:C,onFocus:W,onBlur:K,onExternalClick:H,setValueWithSnap:z,setValue:R,incrementValue:Z,decrementValue:de,getTrackOffset:ee,getPointStyle:J,initializeSlider:ce,teardownSlider:pe,initializeDrag:me,onDragStart:ve,onDragMove:T,dragUpdate:O,onDragStop:w,getNearestSnapPoint:Be,relativeValue:ye,moderateValue:fe}}}),Li=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],Oi=["name","value"],Ei={key:1,class:"base-slider__icon"},Ni={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Ri={key:0},Fi={key:0,class:"base-slider__marker text-xs"},Wi=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[c("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),Hi={class:"base-slider__marker-text text-xs"};function Ai(e,t,n,o,s,a){const r=P("feather");return i(),p("div",{ref:"slider",class:S(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Ce(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Ce(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Ce(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Ce(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(i(),p("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,Oi)):_("",!0),e.hasIcon?(i(),p("div",Ei,[N(e.$slots,"icon",{},()=>[M(r,{type:e.icon,size:"20"},null,8,["type"])])])):_("",!0),c("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[c("div",Ni,[e.snapToSteps?(i(),p("div",Ri,[(i(!0),p(A,null,Q(e.snapPoints,(l,m)=>(i(),p("span",{key:m,class:"base-slider__snap-point",style:G({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):_("",!0)]),c("div",{class:"base-slider__track-fill bg-primary-400",style:G(e.fillStyle)},null,4),c("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:G(e.thumbStyle)},[e.showMarker?(i(),p("div",Fi,[Wi,c("span",Hi,I(e.markerText),1)])):_("",!0)],4)],544)],42,Li)}var Zn=L(Qn,[["render",Ai]]);Qn.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};var zi={parameters:{storySource:{source:`import Slider from './Slider.vue'
import { PhWarning } from 'phosphor-vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:Zn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Ui=e=>({template:'<Slider v-bind="args" />',components:{Slider:Zn},setup(){return{args:e}}}),eo=Ui.bind();eo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Ye};const Yi=["Default"];var qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zi,Default:eo,__namedExportsOrder:Yi}),Gi={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Oe,argTypes:{}};const Ki=e=>({template:"<Spinner />",components:{Spinner:Oe},setup(){return{args:e}}}),Ji=Ki.bind(),Xi=["Default"];var Qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gi,Default:Ji,__namedExportsOrder:Xi});const to=V({props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=Y(e);return{isChecked:$({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),Zi={class:"flex cursor-pointer items-center gap-x-3"},eu={key:0},tu={class:"text-sm text-gray-400"};function nu(e,t,n,o,s,a){return i(),p("label",Zi,[ae(c("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),class:"hidden",type:"checkbox"},null,512),[[wt,e.isChecked]]),c("div",{class:S(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[c("div",{class:S(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(i(),p("div",eu,[c("div",null,I(e.title),1),c("div",tu,I(e.description),1)])):_("",!0)])}var no=L(to,[["render",nu]]);to.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};var ou={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:no,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const ru=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:no},setup(){const t=d(!1);return{args:e,value:t}}}),oo=ru.bind({});oo.args={title:"Switch title",description:"Switch description text to be placed here"};const au=["Default"];var su=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ou,Default:oo,__namedExportsOrder:au});const ro=V({props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=d(),o=d([]),s=r=>{var l;(l=o.value)==null||l.push(r)};return ne(()=>{const r=o.value.find(l=>l.dataset.value===e.modelValue);r&&(console.log(r),r.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:r=>{t("update:modelValue",r)},root:n,registerTab:s}}}),lu={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},iu=["data-value"],uu=["onClick"],du=c("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function cu(e,t,n,o,s,a){return i(),p("div",lu,[(i(!0),p(A,null,Q(e.tabs,r=>(i(),p("div",{key:r.value,ref_for:!0,ref:e.registerTab,"data-value":r.value,class:S(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[r.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[N(e.$slots,"tab",{tab:r,select:()=>e.select(r.value)},()=>[c("div",{class:"px-4 py-3",onClick:()=>e.select(r.value)},I(r.title),9,uu)])],10,iu))),128)),du],512)}var mt=L(ro,[["render",cu]]);ro.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};var pu={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:mt,argTypes:{rounded:{control:{type:"boolean"}}}};const mu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:mt},setup(){const t=d("item_1");return{args:e,value:t}}}),ao=mu.bind();ao.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const fu=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:mt},setup(){const t=d("item_1");return{args:e,value:t}}}),so=fu.bind();so.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const gu=["Default","Slotted"];var vu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pu,Default:ao,Slotted:so,__namedExportsOrder:gu});const lo=V({inheritAttrs:!1,model:{event:"update"},props:{label:{type:String},small:{type:Boolean},prefix:{type:String},suffix:{type:String},helper:{type:String}},setup(e,{emit:t}){return{onInput:o=>{t("update",o.value)}}}}),yu={class:"input-container"},hu={class:"label-name"},bu={class:"input-section"},ku={key:0,class:"helper"};function wu(e,t,n,o,s,a){return i(),p("div",yu,[c("label",null,[c("span",hu,I(e.label),1),c("div",bu,[e.prefix?(i(),p("div",{key:0,class:S(["prefix",{small:e.small}])},I(e.prefix),3)):_("",!0),c("textarea",re(e.$attrs,{class:{small:e.small,prefixed:e.prefix,suffixed:e.suffix},onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r))}),null,16),e.suffix?(i(),p("div",{key:1,class:S(["suffix",{small:e.small}])},I(e.suffix),3)):_("",!0)]),e.helper?(i(),p("div",ku,I(e.helper),1)):_("",!0)])])}var Du=L(lo,[["render",wu],["__scopeId","data-v-03bce853"]]);lo.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"small",type:{name:"boolean"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"helper",type:{name:"string"}}]};var $u={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:Du,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ft=e=>({template:'<Textarea v-bind="args"/>',components:{BaseInput},setup(){return{args:e}}}),io=ft.bind();io.args={title:"Input title"};const uo=ft.bind();uo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const co=ft.bind();co.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Su=["Default","Hint","ErrorHint"];var _u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$u,Default:io,Hint:uo,ErrorHint:co,__namedExportsOrder:Su});const po=V({components:{Popper:Se,PhDotsThreeVertical:tr},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=d(!1),o=d(),s=d();Le(s,r=>{n.value&&(o.value.contains(r.target)&&(r.stopPropagation(),r.preventDefault()),a(),t("blur"))});const a=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:a,popperRef:s,contextButtonRef:o}}}),xu={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Cu(e,t,n,o,s,a){const r=P("PhDotsThreeVertical"),l=P("Popper");return i(),p(A,null,[c("div",re(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[ae(c("div",{class:S(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ge,e.stripe]]),e.title||e.$slots.title?(i(),p("div",xu,[e.$slots.title?N(e.$slots,"title",{key:0,title:e.title}):(i(),p(A,{key:1},[be(I(e.title),1)],64)),e.$slots.options?(i(),p("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=m=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[M(r,{size:"24",weight:"bold"})],512)):_("",!0)])):_("",!0),e.$slots.default?(i(),p("section",{key:1,class:S(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[N(e.$slots,"default")],2)):_("",!0),N(e.$slots,"raw")],16),M(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=m=>e.open=m),options:{placement:"bottom-end"}},{default:q(()=>[N(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var mo=L(po,[["render",Cu]]);po.__docgenInfo={exportName:"default",displayName:"WidgetWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};var Tu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:mo,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Pu=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:mo},setup(){const t=d(!1);return{args:e,value:t}}}),fo=Pu.bind({});fo.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Bu=["Default"];var Vu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tu,Default:fo,__namedExportsOrder:Bu});const Iu=[ir,ur,dr,cr,pr,mr,fr,gr,vr,yr,kr];Iu.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return sr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>ar(o,!1));case"loaders":return n.forEach(o=>rr(o,!1));case"parameters":return Tt(He({},n),!1);case"argTypesEnhancers":return n.forEach(o=>or(o));case"argsEnhancers":return n.forEach(o=>nr(o));case"globals":case"globalTypes":{const o={};return o[t]=n,Tt(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function go(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Nr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":ya,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Ta,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":La,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":ds,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Ts,"/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":Es,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Ys,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":il,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":vl,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":xl,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":Il,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Ll,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Nl,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":zl,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":ri,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":ci,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":gi,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":_i,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":ji,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":qi,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":Qi,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":su,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":vu,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":_u,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Vu}[e]}Object.assign(go,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":"./src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});lr(go,{hot:!1},!1);
//# sourceMappingURL=iframe.92e956b4.js.map
