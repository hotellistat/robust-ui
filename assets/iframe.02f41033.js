var wo=Object.defineProperty,Do=Object.defineProperties;var $o=Object.getOwnPropertyDescriptors;var gt=Object.getOwnPropertySymbols;var _o=Object.prototype.hasOwnProperty,So=Object.prototype.propertyIsEnumerable;var vt=(e,t,n)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,He=(e,t)=>{for(var n in t||(t={}))_o.call(t,n)&&vt(e,n,t[n]);if(gt)for(var n of gt(t))So.call(t,n)&&vt(e,n,t[n]);return e},yt=(e,t)=>Do(e,$o(t));import{a as Co,P as xo,d as V,c as $,u as To,b as c,e as p,o as i,r as d,t as Y,f as X,w as q,n as _,g as Ae,h as P,i as N,j as S,k as I,m as re,l as Po,p as ae,v as Bo,q as M,s as ue,x as Ve,y as Ie,z as ht,A as Me,B as bt,C as Vo,D as Io,E as Mo,F as jo,G as Lo,H as se,I as he,J as ne,K as je,L as ze,M as Ue,N as Oo,O as Eo,Q as No,R as Ro,S as Fo,T as Wo,U as Ho,V as Ao,W as zo,X as le,Y as A,Z as Q,_ as Uo,$ as kt,a0 as G,a1 as ie,a2 as wt,a3 as Dt,a4 as $t,a5 as be,a6 as Ye,a7 as ke,a8 as _t,a9 as Yo,aa as qe,ab as St,ac as Le,ad as qo,ae as Go,af as Ko,ag as Jo,ah as Xo,ai as Ct,aj as xe,ak as Qo,al as Zo,am as er,an as tr,ao as nr,ap as Ge,aq as or,ar as rr,as as xt,at as ar,au as sr,av as lr,aw as ir,ax as ur,ay as dr,az as pr,aA as cr,aB as mr,aC as fr,aD as gr,aE as vr,aF as yr,aG as hr,aH as br,aI as kr}from"./vendor.e623752f.js";const wr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};wr();Co.use(xo);const Dr={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var $r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:Dr});var L=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const Ke=V({props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=$(()=>.666*(e.size-2*e.safeMargin)),n=$(()=>3.1415*(e.size-2*e.safeMargin));return{minDashOffset:t,maxDashOffset:n}}}),Tt=()=>{To(e=>({"963a4c2a":e.minDashOffset,"4844aa7d":e.maxDashOffset}))},Pt=Ke.setup;Ke.setup=Pt?(e,t)=>(Tt(),Pt(e,t)):Tt;const Bt=Ke,_r=["width","height","viewBox"],Sr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"];function Cr(e,t,n,o,s,r){return i(),c("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[p("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Sr)],8,_r)}var Oe=L(Bt,[["render",Cr],["__scopeId","data-v-72bf0edf"]]);Bt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var xr={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const Vt=V({components:{Spinner:Oe},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=d(!1),{loading:n,variant:o}=Y(e);return{variantStyles:$(()=>xr[o.value]),loading:n,displaySpinner:t}}}),Tr={key:0,class:"mr-2"},Pr={class:"whitespace-no-wrap truncate"},Br={key:1,class:"ml-2"};function Vr(e,t,n,o,s,r){const a=P("spinner");return i(),X(Ae(e.tag),{disabled:e.disabled,class:_(["transition-color flex items-center justify-center truncate font-medium ring-opacity-50 duration-75 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:q(()=>[p("div",{class:_(["flex select-none items-center transition-all duration-150",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(i(),c("div",Tr,[N(e.$slots,"prefix",{tag:"div"})])):S("",!0),p("div",Pr,[N(e.$slots,"default")]),e.$slots.suffix?(i(),c("div",Br,[N(e.$slots,"suffix",{tag:"div"})])):S("",!0)],2),e.loading?(i(),X(a,{key:0,size:20,stroke:2,class:"spinner absolute"})):S("",!0)]),_:3},8,["disabled","class"])}var we=L(Vt,[["render",Vr]]);Vt.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Ir={parameters:{storySource:{source:`import Button from './Button.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:we,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Mr=e=>({components:{Button:we},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),jr=Mr.bind({}),Lr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <ph-smiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:we},setup(){return{args:e}}}),Or=Lr.bind(),Er=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </Button>`,components:{Button:we},setup(){return{args:e}}}),Nr=Er.bind(),Rr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:we},setup(){return{args:e}}}),Fr=Rr.bind(),Wr=["Default","Prefix","Suffix","Loading"];var Hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ir,Default:jr,Prefix:Or,Suffix:Nr,Loading:Fr,__namedExportsOrder:Wr});let Ar=0;const It=V({inheritAttrs:!1,props:{title:{type:String},class:{type:String},hint:{type:String},error:{type:String},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++Ar).toString(),o=/^on[^a-z]/,s=u=>o.test(u);let r=$(()=>Object.fromEntries(Object.entries(t).filter(u=>s(u[0]))));const a=d();function l(){}function m(){}return{cuid:n,wrapperRef:a,blurred:l,focused:m,listeners:r}}}),zr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Ur={key:1,class:"block pt-1"},Yr={key:0,class:"select-none text-xs text-gray-400"},qr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Gr(e,t,n,o,s,r){return i(),c("fieldset",null,[e.title?(i(),c("legend",zr,I(e.title),1)):S("",!0),p("div",re(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.class,e.condensed?"h-9":"h-10",{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly},e.disabled?"text-gray-500":""]]}),[N(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(i(),c("label",Ur,[e.hint!==void 0?(i(),c("div",Yr,I(e.hint),1)):S("",!0),e.error!==void 0?(i(),c("div",qr,I(e.error),1)):S("",!0)])):S("",!0)])}var De=L(It,[["render",Gr]]);It.__docgenInfo={exportName:"default",displayName:"InputWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Mt=V({inheritAttrs:!1,components:{InputWrapper:De,PhWarningCircle:Po},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=d(),s=n,r=$({get(){return e.modelValue},set(m){t("input",m),t("change",m),t("update:modelValue",m)}});function a(){var m;(m=o.value)==null||m.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:r,inputAttrs:s,props:e,inputRef:o,focus:a,clear:l}}}),Kr=["id","disabled","readonly"],Jr={key:1,class:"text-red-400"};function Xr(e,t,n,o,s,r){const a=P("PhWarningCircle"),l=P("InputWrapper");return i(),X(l,{title:e.title,hint:e.hint,error:e.error,class:_(e.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:q(m=>[e.$slots.prefix?(i(),c("div",{key:0,class:_(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[N(e.$slots,"prefix",{tag:"div"})],2)):S("",!0),ae(p("input",re({id:m.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=u=>e.inputFieldValue=u),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"text-gray-500 cursor-not-allowed":""]],readonly:e.readonly}),null,16,Kr),[[Bo,e.inputFieldValue]]),e.$slots.suffix||e.error?(i(),c("div",{key:1,class:_(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(i(),c("div",Jr,[M(a,{size:"20",class:"block"})])):N(e.$slots,"suffix",{key:0,tag:"div"})],2)):S("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"])}var Je=L(Mt,[["render",Xr]]);Mt.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Qr=[{title:"today",preset:()=>{const e=ue(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ue(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=ue(Ve(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ue(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Ie(new Date),ue(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Ie(new Date),ht(new Date)]},{title:"this_year",preset:()=>[Me(new Date),bt(new Date)]},{title:"this_year_so_far",preset:()=>[Me(new Date),ue(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=Vo(Ve(new Date,7));return[e,Io(new Date(e))]}},{title:"last_month",preset:()=>{let e=Ie(Ve(Ie(new Date),1));return[e,ht(e)]}},{title:"last_year",preset:()=>{const e=Me(Ve(Me(new Date),1));return[e,bt(new Date(e))]}}],Zr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const jt=V({components:{Input:Je,PhCaretLeft:Mo,PhCaretRight:jo},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:r}=Y(e),a=d(),l=d(),m=d(),u=d(),v=d(),f=Array.isArray(r.value)?d(new Date):d(new Date(r.value)),y=d(),g=d({}),B=Qr,C=$(()=>Zr[e.variant]),h=$(()=>{const D=new Date(f.value);return Lo(D)}),F=$(()=>{try{return se(f.value,"MMM")}catch{return}}),x=$(()=>{try{return se(f.value,"yyyy")}catch{return}}),W=$(()=>{const D=new Date(f.value);D.setDate(1);const k=D.getDay();return(k===0?7:k)-1}),K=$(()=>new Date(f.value).getMonth()),H=$(()=>new Date(f.value).getFullYear()),z=()=>{if(console.log("applying time"),a.value!=""&&!je(new Date(a.value))&&(m.value="Please enter a valid date."),l.value!=""&&!je(new Date(l.value))&&(u.value="Please enter a valid date."),je(new Date(a.value))&&je(new Date(l.value))){m.value="",u.value="";const D=[new Date(a.value),new Date(l.value)];t("update:modelValue",D)}},R=(D,k)=>{const E=Z(D,k);return E<0?1:E>0?-1:0},Z=(D,k)=>{const E=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),oe=Date.UTC(D.getFullYear(),D.getMonth(),D.getDate());return(E-oe)/864e5},de=D=>{if(!Array.isArray(r.value)||r.value.length<2||!R(...r.value))return!1;const k=new Date;k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const E=ze(r.value);return!R(k,E)},ee=D=>{if(!Array.isArray(r.value)||r.value.length<2||!R(...r.value))return!1;const k=new Date;k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const E=Ue(r.value);return!R(k,E)},J=D=>{if(!Array.isArray(r.value)||r.value.length<2)return!1;const k=new Date;k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear());const E=ze(r.value),oe=Ue(r.value);return R(k,oe)===-1&&R(k,E)===1},pe=D=>{const k=new Date;if(k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear()),Array.isArray(r.value)){const E=r.value.map(oe=>new Date(oe));for(let oe=0;oe<E.length;oe++)if(!R(E[oe],k))return!0}else if(!R(new Date(y.value),k))return!0};function ce(D){t("update:modelValue",D),f.value=D[1]}function me(){f.value=Oo(f.value,1)}function ve(){f.value=Eo(f.value,1)}function T(D){f.value=No(f.value,D)}function O(){f.value=Ro(f.value,1)}function w(){f.value=Fo(f.value,1)}function Be(D){f.value=Wo(f.value,D)}const ye=D=>{const k=new Date(f.value).setDate(D);return!(!s.value&&Ho(v.value,k)||!o.value&&Ao(v.value,k)>0||!n.value&&zo(k))},fe=D=>{if(!ye(D))return;const k=new Date;if(k.setDate(D),k.setMonth(f.value.getMonth()),k.setFullYear(f.value.getFullYear()),f.value=k,Array.isArray(r.value)){m.value="",u.value="";let E=[];r.value.length>=2?(E.push(new Date(f.value)),l.value=""):(E=r.value,E.push(new Date(f.value)),E.length>1&&(E=[ue(ze(E),{hours:0,minutes:0,seconds:0}),ue(Ue(E),{hours:23,minutes:59,seconds:59})],l.value=E[1].toLocaleDateString())),a.value=E[0].toLocaleDateString(),t("update:modelValue",E)}else y.value=new Date(f.value),t("update:modelValue",f.value)},b=()=>{f.value=new Date(new Date().setHours(12))};he(r,D=>{const k=D[0]||void 0,E=D[1]||void 0;k?a.value=k.toLocaleDateString():a.value="",E?l.value=E.toLocaleDateString():l.value=""}),ne(()=>{if(Array.isArray(r.value)){f.value=new Date(r.value[1]||new Date),y.value=f.value;const D=r.value[0]||void 0,k=r.value[1]||void 0;D?a.value=D.toLocaleDateString():a.value="",k?l.value=k.toLocaleDateString():l.value=""}else f.value=new Date(r.value||new Date),y.value=f.value});const U=$(()=>{const D=[];for(let k=1900;k<=2100;k++)D.push(k);return D}),te=d(!1);function Ce(){te.value=!0}function Fe(){te.value=!1}const We=d(!1);function bo(){We.value=!0,le(()=>{g.value[H.value].scrollIntoView({block:"start",behavior:"auto"})})}function ko(){We.value=!1}return{months:$(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:a,to:l,errorFrom:m,errorTo:u,showMonthSelectionActive:te,showYearSelectionActive:We,now:v,cursor:f,selectedDate:y,showMonthSelection:Ce,showYearSelection:bo,hideMonthSelection:Fe,hideYearSelection:ko,daysInMonth:h,monthHeading:F,yearHeading:x,refYearEntry:g,setYear:T,setMonth:Be,firstWeekday:W,activeMonth:K,activeYear:H,compareDates:R,applyTime:z,dayDiff:Z,isFirst:de,isLast:ee,isBetweenRange:J,isSelectedDay:pe,addYear:me,subYear:ve,addMonth:O,subMonth:w,dayAllowed:ye,daySelect:fe,reset:b,yearSelectionYears:U,quickActions:B,setQuickAction:ce,variantStyling:C}}}),ea={class:"relative flex w-max select-none"},ta={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},na={class:"absolute inset-0 overflow-auto py-2"},oa=["onClick"],ra={class:"p-4 dark:border-gray-600"},aa={class:"mb-4 flex items-center text-center text-lg font-semibold"},sa={class:"flex flex-1"},la={class:"relative w-max"},ia={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},ua=["onClick"],da={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},pa=["data-year","onClick"],ca=Uo('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">M</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">W</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">T</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">F</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400">S</div>',7),ma=["disabled","onClick"],fa={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},ga=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),va=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function ya(e,t,n,o,s,r){const a=P("PhCaretLeft"),l=P("PhCaretRight"),m=P("Input");return i(),c("div",ea,[Array.isArray(e.modelValue)?(i(),c("div",ta,[p("div",na,[(i(!0),c(A,null,Q(e.quickActions,u=>(i(),c("div",{key:u.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:v=>e.setQuickAction(u.preset())},I(u.title),9,oa))),128))])])):S("",!0),p("section",ra,[p("div",aa,[p("div",sa,[p("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},I(e.monthHeading),1),p("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},I(e.yearHeading),1)]),p("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...u)=>e.subMonth&&e.subMonth(...u))},[M(a,{type:"chevron-left",size:"14",weight:"bold"})]),p("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...u)=>e.addMonth&&e.addMonth(...u))},[M(l,{type:"chevron-right",size:"14",weight:"bold"})])]),p("div",la,[e.showMonthSelectionActive?(i(),c("div",ia,[(i(!0),c(A,null,Q(e.months,(u,v)=>(i(),c("div",{key:v,class:_(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===v?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(v),e.hideMonthSelection()}},I(u.title),11,ua))),128))])):S("",!0),e.showYearSelectionActive?(i(),c("div",da,[(i(!0),c(A,null,Q(e.yearSelectionYears,u=>(i(),c("div",{ref_for:!0,ref:v=>e.refYearEntry[u]=v,key:u,class:_(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===u?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":u,onClick:()=>{e.setYear(u),e.hideYearSelection()}},I(u),11,pa))),128))])):S("",!0),p("div",{class:_(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ca,(i(!0),c(A,null,Q(e.firstWeekday,u=>(i(),c("div",{key:u+"_offset"}))),128)),(i(!0),c(A,null,Q(e.daysInMonth,u=>(i(),c("div",{key:u+"_day",class:_(["relative",[e.isBetweenRange(u)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(u),onClick:v=>e.daySelect(u)},[e.isLast(u)||e.isFirst(u)?(i(),c("div",{key:0,class:_(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(u)?"right-0 w-1/2":e.isLast(u)?"left-0 w-1/2":""]])},null,2)):S("",!0),p("div",{class:_(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(u)||e.isLast(u)||e.isFirst(u)||e.isSelectedDay(u)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},I(u),3)],10,ma))),128))],2)])]),Array.isArray(e.modelValue)?(i(),c("div",fa,[ga,M(m,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=u=>e.from=u),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),va,M(m,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=u=>e.to=u),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),N(e.$slots,"default")])):S("",!0)])}var Ee=L(jt,[["render",ya]]);jt.__docgenInfo={exportName:"default",displayName:"Calendar",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var ha={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ee,argTypes:{}};const Lt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ee},setup(){return{args:e}}}),Ot=d(new Date),Et=Lt.bind({});Et.args={modelValue:Ot,"onUpdate:modelValue":e=>{Ot.value=e,console.log(e)}};const ba=[new Date,new Date],Nt=d(ba),Rt=Lt.bind({});Rt.args={modelValue:Nt,"onUpdate:modelValue":e=>{Nt.value=e,console.log(e)}};const ka=["Default","Range"];var wa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ha,Default:Et,Range:Rt,__namedExportsOrder:ka});const Ft=V({emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=$({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(r){let a=e.modelValue;Array.isArray(a)?r?a.push(e.value):a.splice(a.indexOf(e.value),1):r?a=e.value:a=e.disabledValue,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),Da={class:"inline-block"},$a={class:"flex cursor-pointer items-start"},_a=["id"],Sa={key:0,class:"w-full select-none pt-px leading-4"},Ca={key:1,class:"w-full select-none pt-px leading-4"};function xa(e,t,n,o,s,r){const a=P("ph-check");return i(),c("div",Da,[p("label",$a,[ae(p("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,_a),[[kt,e.isChecked]]),p("div",{class:_(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[M(a,{class:_([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(i(),c("div",Sa,I(e.title),1)):S("",!0),!e.title&&e.$slots.title?(i(),c("div",Ca,[N(e.$slots,"title")])):S("",!0)])])}var Ne=L(Ft,[["render",xa]]);Ft.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var Ta={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Ne,argTypes:{title:{control:{type:"text"}}}};const Pa=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Ne},setup(){return{value:d(!1),args:e}}}),Wt=Pa.bind({});Wt.args={title:"Checkbox title"};const Ba=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Ne},setup(){return{value:d(!1),args:e}}}),Ht=Ba.bind({});Ht.args={title:"V-Slot Checkbox title"};const Va=["Default","SlottedTitle"];var Ia=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ta,Default:Wt,SlottedTitle:Ht,__namedExportsOrder:Va});const At=V({props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}}}),Ma=["width","height","viewBox"],ja=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"];function La(e,t,n,o,s,r){return i(),c("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[p("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,ja)],8,Ma)}var zt=L(At,[["render",La]]);At.__docgenInfo={exportName:"default",displayName:"CircularProgress",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Oa={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:zt,argTypes:{progress:{control:{type:"number"}}}};const Ea=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:zt},setup(){return{args:e}}}),Na=Ea.bind(),Ra=["Default"];var Fa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oa,Default:Na,__namedExportsOrder:Ra});function $e(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Ha(e):/rgb/.test(e)?t=qt(e):typeof e=="string"?t=qt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a:r}=t,{h:a,s:l,v:m}=Aa(t);return{r:n,g:o,b:s,a:r===void 0?1:r,h:a,s:l,v:m}}function Ut(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function Yt(e,t,n,o,s,r){const a=e==="l",l=t.createLinearGradient(0,0,a?n:0,a?0:o);l.addColorStop(.01,s),l.addColorStop(.99,r),t.fillStyle=l,t.fillRect(0,0,n,o)}function Wa({r:e,g:t,b:n},o){const s=a=>("0"+Number(a).toString(16)).slice(-2),r=`#${s(e)}${s(t)}${s(n)}`;return o?r.toUpperCase():r}function Ha(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function qt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Aa({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),r=o-s;let a=0;o===s?a=0:o===e?t>=n?a=60*(t-n)/r:a=60*(t-n)/r+360:o===t?a=60*(n-e)/r+120:o===n&&(a=60*(e-t)/r+240),a=Math.floor(a);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),m=parseFloat(o.toFixed(2));return{h:a,s:l,v:m}}const Gt=V({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=d({}),{size:o,hsv:s,color:r}=Y(e),a=d(),l=d(),m=f=>{const y=f,g=o.value,B=y.getContext("2d");y.width=g,y.height=g,B.fillStyle=r.value,B.fillRect(0,0,g,g),Yt("l",B,g,g,"#FFFFFF","rgba(255,255,255,0)"),Yt("p",B,g,g,"rgba(0,0,0,0)","#000000")},u=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},v=f=>{const{top:y,left:g}=a.value.getBoundingClientRect(),B=f.target.getContext("2d"),C=F=>{let x=F.clientX-g,W=F.clientY-y;x<0&&(x=0),W<0&&(W=0),x>o.value&&(x=o.value),W>o.value&&(W=o.value),n.value={left:x-5+"px",top:W-5+"px"};const K=B.getImageData(Math.min(x,o.value-1),Math.min(W,o.value-1),1,1),[H,z,R]=K.data;t("selectSaturation",{r:H,g:z,b:R})};C(f);const h=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",h)};return ne(()=>{m(l.value),u()}),{slideSaturationStyle:n,selectSaturation:v,renderSlide:u,renderColor:m,saturation:a,canvasSaturation:l,color:r,hsv:s,size:o}}}),za={ref:"canvasSaturation"};function Ua(e,t,n,o,s,r){return i(),c("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ie((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[p("canvas",za,null,512),p("div",{style:G(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Ya=L(Gt,[["render",Ua]]);Gt.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Kt=V({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=d({}),o=d(),{height:s,width:r,hsv:a}=Y(e),l=d(),m=f=>{const y=f,g=r.value,B=s.value,C=y.getContext("2d");y.width=g,y.height=B;const h=C.createLinearGradient(0,0,0,B);h.addColorStop(0,"#FF0000"),h.addColorStop(.17*1,"#FF00FF"),h.addColorStop(.17*2,"#0000FF"),h.addColorStop(.17*3,"#00FFFF"),h.addColorStop(.17*4,"#00FF00"),h.addColorStop(.17*5,"#FFFF00"),h.addColorStop(1,"#FF0000"),C.fillStyle=h,C.fillRect(0,0,g,B)},u=()=>{n.value={top:(1-a.value.h/360)*s.value-2+"px"}},v=f=>{const{top:y}=l.value.getBoundingClientRect(),g=f.target.getContext("2d"),B=h=>{let F=h.clientY-y;F<0&&(F=0),F>s.value&&(F=s.value),n.value={top:F-2+"px"};const x=g.getImageData(0,Math.min(F,s.value-1),1,1),[W,K,H]=x.data;t("selectHue",{r:W,g:K,b:H})};B(f);const C=()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",B),document.addEventListener("mouseup",C)};return ne(()=>{m(o.value),u()}),{slideHueStyle:n,hue:l,width:r,height:s,renderSlide:u,selectHue:v,renderColor:m,hsv:a,canvasHue:o}}}),qa={ref:"canvasHue"};function Ga(e,t,n,o,s,r){return i(),c("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ie((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[p("canvas",qa,null,512),p("div",{style:G(e.slideHueStyle),class:"slide"},null,4)],544)}var Ka=L(Kt,[["render",Ga]]);Kt.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Jt=V({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=d(5),{color:n,width:o,height:s}=Y(e),r=d(),a=l=>{const m=l,u=o.value,v=s.value,f=t.value,y=Ut(f),g=m.getContext("2d");m.width=u,m.height=v,g.fillStyle=g.createPattern(y,"repeat"),g.fillRect(0,0,u,v),g.fillStyle=n.value,g.fillRect(0,0,u,v)};return ne(()=>{wt(()=>{a(r.value)}),a(r.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:r}}}),Ja={ref:"canvas"};function Xa(e,t,n,o,s,r){return i(),c("canvas",Ja,null,512)}var Qa=L(Jt,[["render",Xa]]);Jt.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const Xt=V({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:$({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),Za={class:"color-type"},es={class:"name"};function ts(e,t,n,o,s,r){return i(),c("div",Za,[p("span",es,I(e.name),1),ae(p("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.modelColor=a),class:"value"},null,512),[[Dt,e.modelColor]])])}var ns=L(Xt,[["render",ts]]);Xt.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Qt=V({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=d(),o=d([]),s=d();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Ut(4).toDataURL(),$t(()=>{r(n.value)});const r=l=>{if(!l)return;const m=o.value||[],u=m.indexOf(l);u>=0&&m.splice(u,1),m.length>=8&&(m.length=7),m.unshift(l),o.value=m||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(m))};return{setColorsHistory:r,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),os={class:"colors"},rs=["onClick"],as={key:0,class:"colors history"},ss=["onClick"];function ls(e,t,n,o,s,r){return i(),c("div",null,[p("ul",os,[(i(!0),c(A,null,Q(e.colorsDefault,a=>(i(),c("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[p("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),p("div",{style:G({background:a}),class:"color"},null,4)],8,rs))),128))]),e.colorsHistory.length?(i(),c("ul",as,[(i(!0),c(A,null,Q(e.colorsHistory,a=>(i(),c("li",{key:a,class:"item",onClick:l=>e.selectColor(a)},[p("div",{style:G({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),p("div",{style:G({background:a}),class:"color"},null,4)],8,ss))),128))])):S("",!0)])}var is=L(Qt,[["render",ls]]);Qt.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Zt=V({components:{Saturation:Ya,Hue:Ka,Preview:Qa,Box:ns,Colors:is},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=d(15),o=d(152),s=d(20),r=d(""),a=d(""),l=d(0),m=d(0),u=d(0),v=d(1),f=d(0),y=d(0),g=d(0),B=d(),C=d(),{theme:h,color:F}=Y(e),x=$(()=>h.value==="light"),W=$(()=>o.value+(n.value+8)*2),K=$(()=>W.value-s.value),H=$(()=>({r:l.value,g:m.value,b:u.value,a:v.value})),z=$(()=>({h:f.value,s:y.value,v:g.value})),R=$(()=>`rgb(${l.value}, ${m.value}, ${u.value})`),Z=$(()=>`${l.value}, ${m.value}, ${u.value}`),de=$(()=>`rgb(${Z.value})`),ee=$(()=>Wa(H.value,!0)),J=()=>{a.value=ee.value,r.value=Z.value};return ne(()=>{const O=$e(F.value);l.value=O.r,m.value=O.g,u.value=O.b,v.value=O.a,f.value=O.h,y.value=O.s,g.value=O.v,J()}),wt(()=>{t("changeColor",{rgba:H.value,hsv:z.value,hex:a.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:r,modelHex:a,r:l,g:m,b:u,a:v,h:f,s:y,v:g,isLightTheme:x,totalWidth:W,previewWidth:K,rgba:H,hsv:z,rgbString:R,rgbStringShort:Z,rgbaString:de,hexString:ee,setText:J,selectSaturation:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,J()},selectHue:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,J(),le(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide()})},inputHex:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,a.value=O,r.value=Z.value,le(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide(),B.value.renderSlide()})},inputRgba:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,a.value=ee.value,r.value=`${l.value}, ${m.value}, ${u.value}`,le(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide(),B.value.renderSlide()})},selectColor:O=>{const w=$e(O);l.value=w.r,m.value=w.g,u.value=w.b,v.value=w.a,f.value=w.h,y.value=w.s,g.value=w.v,J(),le(()=>{C.value.renderColor(C.value.canvasSaturation),C.value.renderSlide(),B.value.renderSlide()})},saturation:C,hue:B,color:F,theme:h}}}),us={class:"color-set"};function ds(e,t,n,o,s,r){const a=P("Saturation"),l=P("Hue"),m=P("Preview"),u=P("Box"),v=P("Colors");return i(),c("div",{class:_(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:G({width:e.totalWidth+"px"})},[p("div",us,[M(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),M(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),p("div",{style:G({height:e.previewHeight+"px"}),class:"color-show"},[M(m,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),M(u,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),M(u,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),M(v,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var en=L(Zt,[["render",ds]]);Zt.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var ps={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:en,argTypes:{title:{control:{type:"text",default:"Title"}}}};const cs=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:en},setup(){return{args:e}}}),ms=cs.bind(),fs=["Default"];var gs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ps,Default:ms,__namedExportsOrder:fs});const tn=V({props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),vs={key:1,class:"flex items-center"},ys={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function hs(e,t,n,o,s,r){return e.$slots.default?(i(),c("div",vs,[p("div",{class:_(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),p("div",ys,[N(e.$slots,"default")]),p("div",{class:_(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(i(),c("div",{key:0,class:_(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var bs=L(tn,[["render",hs]]);tn.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const nn=V({components:{Separator:bs},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),ks={class:"relative rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},ws={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},Ds={class:"flex"},$s={key:1,class:"text-gray-500 dark:text-gray-500"},_s={class:"p-4 sm:p-6"};function Ss(e,t,n,o,s,r){const a=P("Separator");return i(),c("section",ks,[e.description!==void 0||e.title!==void 0?(i(),c("header",ws,[e.stripe?(i(),c("div",{key:0,class:_(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):S("",!0),p("h1",Ds,[p("div",{class:_(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[N(e.$slots,"title",{title:e.title},()=>[be(I(e.title),1)])],2)]),e.description!==void 0?(i(),c("p",$s,[N(e.$slots,"description",{description:e.description},()=>[be(I(e.description),1)])])):S("",!0)])):S("",!0),M(a),p("div",_s,[N(e.$slots,"default")])])}var Te=L(nn,[["render",Ss]]);nn.__docgenInfo={exportName:"default",displayName:"ContentBox",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var Cs={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Te,argTypes:{title:{control:{type:"text"}}}};const xs=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),Ts=xs.bind(),Ps=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),on=Ps.bind();on.args={title:"Input title"};const Bs=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),rn=Bs.bind();rn.args={title:"Input title"};const Vs=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Te},setup(){return{args:e}}}),an=Vs.bind();an.args={title:"Input title"};const Is=["Default","Title","TitleProp","Stripe"];var Ms=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cs,Default:Ts,Title:on,TitleProp:rn,Stripe:an,__namedExportsOrder:Is});const sn=V({props:{title:{type:String},description:{type:String},icon:{type:Object}}}),js={class:"py-4 text-gray-500 dark:text-gray-400"},Ls={class:"mb-2 flex justify-center"},Os={class:"mx-auto text-center text-xl font-bold"},Es={class:"mx-auto text-center"};function Ns(e,t,n,o,s,r){return i(),c("div",js,[p("div",Ls,[(i(),X(Ae(e.icon),{size:"40"}))]),p("div",Os,I(e.title),1),p("div",Es,I(e.description),1)])}var ln=L(sn,[["render",Ns]]);sn.__docgenInfo={exportName:"default",displayName:"ContentPlaceholder",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}]};var Rs={parameters:{storySource:{source:`import ContentPlaceholder from './ContentPlaceholder.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ContentPlaceholder",component:ln,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Fs=e=>({template:'<ContentPlaceholder v-bind="args" />',components:{ContentPlaceholder:ln},setup(){return{args:e}}}),un=Fs.bind();un.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Ye};const Ws=["Default"];var Hs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rs,Default:un,__namedExportsOrder:Ws}),As=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],_e=V({props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=Y(e),r=d();let a;const l=d(!1),m={strategy:"absolute",placement:"bottom-start",modifiers:[...As,...e.modifiers]};function u(){a==null||a.destroy(),l.value=!1}async function v(g){if(!g)return;const B=Object.assign({},m,e.options);!r.value||(a=Yo(g,r.value,B),await a.update())}$t(()=>{u()});async function f(){await v(s.value),r.value&&(a==null||a.update(),_t.fromTo(r.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function y(){r.value&&_t.fromTo(r.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{u()})}return ne(()=>{if(!n.default)throw new Error("Popper does not have a child slot");he(o,g=>{l.value=!0,le(async()=>{g?f():y()})})}),{appendTo:s,root:r,render:l}},render(){if(this.render)return ke("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const dn=V({components:{Popper:_e,Calendar:Ee,InputWrapper:De,PhCaretDown:qe,PhCalendar:St},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=d(),{modelValue:s}=Y(e),r=d(!1),a=d(),l=d();Le(a,f=>{r.value&&(l.value.wrapperRef.contains(f.target)&&(f.stopPropagation(),f.preventDefault()),v(),t("blur"))});const m=$({get(){return(s==null?void 0:s.value)?s.value:new Date},set(f){r.value=!1,t("update:modelValue",f),t("change",f),t("blur")}}),u=$(()=>{if(!m.value)return"Select date";const f=m.value;try{return f?se(f,"P"):"Unknown"}catch{return}});function v(){r.value===!0&&(r.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:r,props:e,displayDate:u,computedValue:m,closeDropdown:v,popperRef:a,inputWrapperRef:l}},methods:{}}),zs=["id"],Us={class:"min-w-0 truncate tabular-nums"};function Ys(e,t,n,o,s,r){var f,y;const a=P("PhCalendar"),l=P("PhCaretDown"),m=P("InputWrapper"),u=P("Calendar"),v=P("Popper");return i(),c(A,null,[M(m,{title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ie(g=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:q(g=>[p("div",{class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[M(a,{size:"20"})],2),p("div",re({id:g.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[p("div",Us,I(e.displayDate),1)],16,zs),p("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(l,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((f=e.inputWrapperRef)==null?void 0:f.wrapperRef)?(i(),X(v,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(y=e.inputWrapperRef)==null?void 0:y.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=g=>e.open=g),options:{placement:"bottom-start"}},{default:q(()=>[M(u,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=g=>e.computedValue=g)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):S("",!0)],64)}var Xe=L(dn,[["render",Ys]]);dn.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var qs={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:Xe,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Gs=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:Xe},setup(){return{args:e}}}),Ks=new Date,pn=d(Ks),cn=Gs.bind({});cn.args={modelValue:pn,"onUpdate:modelValue":e=>{pn.value=e}};const Js=["Default"];var Xs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qs,Default:cn,__namedExportsOrder:Js});const mn=V({components:{Calendar:Ee,Popper:_e,InputWrapper:De,Button:we,Checkbox:Ne,DatePicker:Xe,PhCaretDown:qe,PhCalendar:St,PhArrowLeft:qo,PhArrowRight:Go,PhClockCounterClockwise:Ko},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:r,comparePerspectiveDate:a}=Y(e),l=d(),m=d(!1),u=d(),v=d(),f=d(r.value),y=d(a.value),g=d(!1),B=d(),C=d(),h=d(!0),F=d(),x=$(()=>z.value.length>1),W=(T,O)=>O?se(T,"dd.MM.yyyy HH:mm:ss"):se(T,"dd.MM.yyyy"),K=$(()=>e.dateHistory||[]);let H=d();const z=d(s.value),R=$({get(){return z.value},set(T){z.value=T,t("update:compareDate",T),t("blur")}}),Z=$({get:()=>R.value.length>1,set:T=>{J(T)}}),de=$(()=>{if(!o.value)return"Select date";const T=o.value;try{return T.length>1?se(T[0],"P")+" - "+se(T[1],"P"):se(T[0],"P")+" - "+se(T[0],"P")}catch{return}});function ee(){m.value===!0&&(m.value=!1,g.value=!1,t("blur"))}const J=T=>{T?B.value=T:(t("update:comparison-date",void 0),R.value=void 0)};Le(F,T=>{m.value&&(u.value.wrapperRef.contains(T.target)&&(T.stopPropagation(),T.preventDefault()),ee(),t("blur"))});const pe=()=>{H.value=o.value,m.value=!m.value},ce=()=>{B.value=!1},me=async()=>{t("update:dateRange",H.value),t("change",H.value),t("blur"),m.value=!1},ve=T=>{h.value=T};return he(f,T=>{t("update:perspectiveDate",T)}),he(y,T=>{t("update:comparePerspectiveDate",T)}),{displayCompare:B,computedCompare:R,attrs:n,props:e,refSelectContainer:l,pickedCompare:x,open:m,displayDate:de,saveTime:me,tmpDateRange:H,dateConfig:C,closeDropdown:ee,showCompare:J,comparePerspectiveOf:y,compareWith:Z,storeHistory:h,handleClick:pe,goBack:ce,mainCalendar:v,perspectiveOf:f,enabledHistory:g,dateHistory:K,formatDate:W,enableStoringHistory:ve,inputWrapperRef:u,popperRef:F}},methods:{}}),Qs=["id"],Zs={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},el=p("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},"Date range",-1),tl={key:0,class:"flex flex-col items-start gap-y-3"},nl=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),ol={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},rl={key:1},al={key:0,class:"flex flex-col items-start"},sl=p("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),ll={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},il=be("Apply time range");function ul(e,t,n,o,s,r){var B,C;const a=P("PhCalendar"),l=P("PhCaretDown"),m=P("InputWrapper"),u=P("DatePicker"),v=P("Checkbox"),f=P("Calendar"),y=P("Button"),g=P("Popper");return i(),c(A,null,[M(m,{title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ie(e.handleClick,["stop"])},{default:q(h=>[p("div",{class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[M(a,{size:"20"})],2),p("div",re({id:h.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[p("div",Zs,I(e.displayDate),1)],16,Qs),p("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(l,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((B=e.inputWrapperRef)==null?void 0:B.wrapperRef)?(i(),X(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(C=e.inputWrapperRef)==null?void 0:C.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=h=>e.open=h),options:{placement:"bottom-start"}},{default:q(()=>[el,p("div",null,[M(f,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=h=>e.tmpDateRange=h),"onClick:relativeDate":t[3]||(t[3]=h=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(i(),c("div",tl,[p("div",null,[nl,M(u,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=h=>e.perspectiveOf=h)},null,8,["modelValue"])]),e.enableComparison?(i(),X(v,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=h=>e.compareWith=h),title:"Compare with"},null,8,["modelValue"])):S("",!0)])):S("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(i(),c("h3",ol,"Comparison date range")):S("",!0),e.enableComparison?(i(),c("div",rl,[M(f,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=h=>e.computedCompare=h),"onClick:relativeDate":t[6]||(t[6]=h=>e.enableStoringHistory(!1))},{default:q(()=>[e.enablePerspective?(i(),c("div",al,[sl,M(u,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=h=>e.comparePerspectiveOf=h)},null,8,["modelValue"])])):S("",!0)]),_:1},8,["modelValue"])])):S("",!0),p("div",ll,[M(y,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:q(()=>[il]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):S("",!0)],64)}var fn=L(mn,[["render",ul]]);mn.__docgenInfo={exportName:"default",displayName:"DaterangePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var dl={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:fn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const pl=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:fn},setup(){return{args:e}}}),gn=[new Date,new Date],vn=d(gn),yn=d(gn),hn=pl.bind({});hn.args={dateRange:vn,"onUpdate:dateRange":e=>{vn.value=e},compareDateRange:yn,"onUpdate:compareDateRange":e=>{yn.value=e}};const cl=["Default"];var ml=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dl,Default:hn,__namedExportsOrder:cl});let j,Qe,Ze,et,ge;const tt=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},fl=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},bn=function(e,t){var n,o;if(tt("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;j=this,Qe=ge.handleClass&&j.querySelector(`.${ge.handleClass}`),Ze=Array.from((n=j==null?void 0:j.parentElement)==null?void 0:n.children).indexOf(j),(o=j==null?void 0:j.parentElement)==null||o.classList.add("drag")},kn=function(e){var n;if(!j)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=j==null?void 0:j.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=j==null?void 0:j.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(j.classList.add(ge.placeholderClass),fl(j,t)?t.parentNode.insertBefore(j,t):t.parentNode.insertBefore(j,t.nextSibling))},wn=(e,t)=>{var s,r;if(!j)return;tt("end",t,e),Qe&&j.setAttribute("draggable","false"),j.classList.remove(ge.placeholderClass),(s=j==null?void 0:j.parentElement)==null||s.classList.remove("drag");const n=Ze,o=Array.from((r=j==null?void 0:j.parentElement)==null?void 0:r.children).indexOf(j);et.splice(o,0,et.splice(n,1)[0]),tt("change",t,{from:n,to:o}),setTimeout(()=>{j=null,Ze=null,Qe=null},0)},Dn=(e,t)=>{const n=ge.handleClass&&e.querySelector(`.${ge.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>bn.bind(e,o,t)(),e.ondragenter=kn,e.ondragend=o=>wn.bind(e,o,t)(),e.ontouchstart=o=>bn.bind(e,o,t)(),e.ontouchmove=kn,e.ontouchend=o=>wn.bind(e,o,t)()};var gl={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}et=t.value&&t.value.value,ge={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>Dn(s,n)),e.addEventListener("DOMNodeInserted",function(s){j||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&Dn(s.target,n)})}};const $n=V({directives:{draggable:gl},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=Y(e),o=$({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return le(()=>{console.log("alo")}),{list:o}}});function vl(e,t,n,o,s,r){const a=Jo("draggable");return ae((i(),c("div",null,[(i(!0),c(A,null,Q(e.list,l=>(i(),c("div",{key:l},[N(e.$slots,"element",{item:l})]))),128))])),[[a,{value:e.list}]])}var _n=L($n,[["render",vl]]);$n.__docgenInfo={exportName:"default",displayName:"Draggable",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};var yl={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:_n,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const hl=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:_n},setup(){let t=d([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),bl=hl.bind({}),kl=["Default"];var wl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yl,Default:bl,__namedExportsOrder:kl});const Sn=V({props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=Y(e),o=$(()=>{var s,r,a,l,m;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(r=n.value)==null?void 0:r.gridstack.x,"gs-y":(a=n.value)==null?void 0:a.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(m=n.value)==null?void 0:m.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),Dl={class:"grid-stack-item-content bg-gray-300"};function $l(e,t,n,o,s,r){return i(),c("div",re({class:"grid-stack-item"},e.widgetAttributes),[p("div",Dl,[be(I(e.widget.id)+" "+I(e.widget.gridstack)+" ",1),(i(),X(Ae(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var _l=L(Sn,[["render",$l]]);Sn.__docgenInfo={exportName:"default",displayName:"GridItem",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Cn=V({components:{GridItem:_l},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=Y(e),o,s=d();return ne(()=>{console.log("mounting"),o=Xo.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(r,a)=>{!n.value||([...n.value],Array.isArray(a)&&n.value.forEach(l=>{let m=a.find(u=>u.id===l.id);m&&(l.gridstack=yt(He({},l.gridstack),{x:m.x,y:m.y,w:m.w,h:m.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),Sl={ref:"gridContainer",class:"grid-stack bg-gray-200"};function Cl(e,t,n,o,s,r){const a=P("GridItem");return i(),c("div",null,[be(I(e.locked)+" ",1),p("section",Sl,[(i(!0),c(A,null,Q(e.widgets,l=>(i(),X(a,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var xn=L(Cn,[["render",Cl]]);Cn.__docgenInfo={exportName:"default",displayName:"Grid",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var xl={title:"Ui/Grid",component:xn,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Tn=V({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const Tl=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:xn},setup(){let t=d([{id:"test",component:Ct(Tn),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:Ct(Tn),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return he(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),Pl=Tl.bind(),Bl=["Default"];var Vl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xl,Default:Pl,__namedExportsOrder:Bl}),Re=V({props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=d(!0),o=d(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=r=>{t("error",r),o.value=!0,n.value=!1},ne(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?ke("div",{class:"flex items-center justify-center"},ke(Oe,{size:24,stroke:2})):this.error?this.fallbackSrc?ke("img",{src:this.fallbackSrc}):ke(Ye,{size:20}):ke("img",{src:this.src})}}),Il={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:Re,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Ml=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:Re},setup(){return{args:e}}}),Pn=Ml.bind();Pn.args={title:"Img title"};const jl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:Re},setup(){return{args:e}}}),Bn=jl.bind();Bn.args={title:"Img title"};const Ll=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:Re},setup(){return{args:e}}}),Vn=Ll.bind();Vn.args={title:"Img title"};const Ol=["Default","Broken","Fallback"];var El=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Il,Default:Pn,Broken:Bn,Fallback:Vn,__namedExportsOrder:Ol}),Nl={parameters:{storySource:{source:`import Input from './Input.vue'

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
  modelValue: "Input text",
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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:Je,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const nt=e=>({template:'<Input v-bind="args"/>',components:{Input:Je},setup(){return{args:e}}}),In=nt.bind();In.args={modelValue:"Input text",title:"Input title"};const Mn=nt.bind();Mn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const jn=nt.bind();jn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Rl=["Default","Hint","ErrorHint"];var Fl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nl,Default:In,Hint:Mn,ErrorHint:jn,__namedExportsOrder:Rl}),Wl={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:De,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const ot=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:De},setup(){return{args:e}}}),Ln=ot.bind();Ln.args={title:"Input title",outline:!1};const On=ot.bind();On.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const En=ot.bind();En.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Hl=["Default","Hint","ErrorHint"];var Al=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wl,Default:Ln,Hint:On,ErrorHint:En,__namedExportsOrder:Hl});const Nn=V({props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=Y(e),o=$(()=>`height:${t.value}px`),s=$(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function zl(e,t,n,o,s,r){return i(),c("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:G([e.heightComputed])},[p("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:G([e.widthComputed])},null,4)],4)}var Rn=L(Nn,[["render",zl]]);Nn.__docgenInfo={exportName:"default",displayName:"LinearProgress",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Ul={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:Rn,argTypes:{progress:{control:{type:"number"}}}};const Yl=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:Rn},setup(){return{args:e}}}),ql=Yl.bind(),Gl=["Default"];var Kl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ul,Default:ql,__namedExportsOrder:Gl});let Se,rt,at,st,lt,it,ut,dt,pt,Pe;const Fn=e=>{const t=e||navigator.userAgent,n=/(iPad).*OS\s([\d_]+)/.test(t),o=!n&&/(iPhone\sOS)\s([\d_]+)/.test(t);return/(Android);?[\s/]+([\d.]+)?/.test(t)||o||n},Jl=()=>{const e=document.body,t=window.innerWidth-e.clientWidth;Se=e.style.overflow,rt=e.style.boxSizing,at=e.style.paddingRight,e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight=`${t+e.style.paddingRight}px`},Xl=()=>{const e=document.body;e.style.overflow=Se,e.style.boxSizing=rt,e.style.paddingRight=at,Se="",rt="",at=""},Ql=()=>{const e=document.documentElement,t=document.body;Pe=e.scrollTop||t.scrollTop,st=e.style.height,lt=e.style.overflow,it=t.style.top,ut=t.style.width,dt=t.style.height,pt=t.style.position,Se=t.style.overflow,e.style.height="100%",e.style.overflow="hidden",t.style.top=`-${Pe}px`,t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden"},Zl=()=>{const e="scrollBehavior"in document.documentElement.style,t=document.documentElement,n=document.body;t.style.height=st,t.style.overflow=lt,n.style.top=it,n.style.width=ut,n.style.height=dt,n.style.position=pt,n.style.overflow=Se,e?window.scrollTo({top:Pe,behavior:"auto"}):window.scrollTo(0,Pe),Se="",st="",lt="",it="",ut="",dt="",pt="",Pe=""},ei=()=>{Fn()&&Ql(),Jl()},ti=()=>{Fn()&&Zl(),Xl()};const Wn=V({inheritAttrs:!1,props:{modalClass:{type:String}},setup(e,{emit:t}){const n=d(!1);he(n,r=>{r?ei():ti()});async function o(){n.value=!0,t("open")}async function s(){n.value=!1,t("close")}return{open:o,close:s,modalOpen:n}}}),ni={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24"},oi={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},ri={class:"leading-4"};function ai(e,t,n,o,s,r){const a=P("ph-x");return i(),X(Zo,{to:"#modal-area"},[M(Qo,re(e.$attrs,{name:"slide"}),{default:q(()=>[e.modalOpen?(i(),c("div",ni,[p("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90",onClick:t[0]||(t[0]=ie((...l)=>e.close&&e.close(...l),["self"]))}),p("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=xe((...l)=>e.close&&e.close(...l),["esc"]))},[p("div",{class:_(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(i(),c("div",oi,[p("div",ri,[N(e.$slots,"title",{},void 0,!0)]),p("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[M(a,{size:"20",class:"block"})])])):S("",!0),N(e.$slots,"default",{},void 0,!0)],2)],32)],512)):S("",!0)]),_:3},16)])}var Hn=L(Wn,[["render",ai],["__scopeId","data-v-cc17a222"]]);Wn.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}}],slots:[{name:"title"},{name:"default"}]};var si={parameters:{storySource:{source:`import Modal from './Modal.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Modal",component:Hn,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const li=e=>({template:'<Modal v-bind="args">test</Modal>',components:{Modal:Hn},setup(){return{args:e}}}),An=li.bind();An.args={title:"Modal title"};const ii=["Default"];var ui=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:si,Default:An,__namedExportsOrder:ii}),di={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const zn=V({props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:$(()=>di[e.variant])}}});function pi(e,t,n,o,s,r){return i(),c("div",{class:_([e.computedClass,"mb-4 border-l-4 p-4"])},[N(e.$slots,"default")],2)}var Un=L(zn,[["render",pi]]);zn.__docgenInfo={exportName:"default",displayName:"Notice",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};var ci={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Un,argTypes:{title:{control:{type:"text",default:"Title"}}}};const mi=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Un},setup(){return{args:e}}}),fi=mi.bind(),gi=["Default"];var vi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ci,Default:fi,__namedExportsOrder:gi}),yi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:_e,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const hi=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:_e},setup(){const t=d(!1);return{args:e,value:t}}}),Yn=hi.bind({});Yn.args={title:"Popper title",description:"Popper description text to be placed here"};const bi=["Default"];var ki=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yi,Default:Yn,__namedExportsOrder:bi});let wi=0;const qn=V({props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++wi).toString(),s=$({get(){return e.modelValue===e.value},set(){let r=e.modelValue;r=e.value,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),Di={class:"inline-block"},$i=["id"],_i=["for"],Si={key:0,class:"w-full select-none leading-4"};function Ci(e,t,n,o,s,r){return i(),c("div",Di,[ae(p("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),type:"radio",class:"hidden"},null,8,$i),[[er,e.isChecked]]),p("label",{for:`radio_${e.cuid}`,class:_([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[p("div",{class:_(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[p("div",{class:_([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(i(),c("div",Si,I(e.title),1)):S("",!0),p("div",null,[e.$slots.title?N(e.$slots,"title",{key:0}):S("",!0)])],10,_i)])}var Gn=L(qn,[["render",Ci]]);qn.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};var xi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:Gn,argTypes:{title:{control:{type:"text"}}}};const Ti=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:Gn},setup(){const t=d("test");return{args:e,value:t}}}),Kn=Ti.bind({});Kn.args={title:"Radio title"};const Pi=["Default"];var Bi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xi,Default:Kn,__namedExportsOrder:Pi});const Jn=V({components:{Popper:_e,InputWrapper:De,PhCheck:tr,PhCaretDown:qe},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=d(),s=d(),{options:r}=Y(e),a=d(!1),l=d(),m=d(),u=d("");let v=d([]);async function f(x){e.searchFunction!==void 0&&(v.value=await e.searchFunction(x)),x===""?v.value=r.value:v.value=r.value.filter(W=>W.title.toLowerCase().substring(0,x.length)===x.toLowerCase())}nr(u,async x=>{await f(x)},{debounce:150}),ne(async()=>{await f("")});const y=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:x=>{x.state.styles.popper.width=`${Math.max(x.state.rects.reference.width,200)}px`},effect:x=>{x.state.elements.popper.style.width=`${x.state.elements.reference.getBoundingClientRect().width}px`}}],g=$(()=>e.options.find(x=>x.value===e.modelValue));function B(x){le(()=>{h()}),t("update:modelValue",x.value),t("change",x.value)}function C(){a.value=!0,le(()=>{s.value.focus()}),t("focus")}Le(l,x=>{a.value&&(m.value.wrapperRef.contains(x.target)&&(x.stopPropagation(),x.preventDefault()),F(),h(),t("blur"))});function h(){a.value=!1}function F(){u.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:h,open:a,props:e,openDropdown:C,inputWrapper:m,popperModifiers:y,activeItem:g,selectItem:B,computedOptions:v,resetFields:F,attrs:n,search:u,popperRef:l}}}),Vi=["id"],Ii={class:"min-w-0 select-none truncate"},Mi={key:0,class:"max-h-72 overflow-auto"},ji=["onClick"],Li={key:1,class:"py-2 text-center text-gray-400"};function Oi(e,t,n,o,s,r){var v,f;const a=P("PhCaretDown"),l=P("InputWrapper"),m=P("PhCheck"),u=P("Popper");return i(),c(A,null,[M(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:_([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:q(y=>[e.$slots.prefix?(i(),c("div",{key:0,class:_(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[N(e.$slots,"prefix",{tag:"div"})],2)):S("",!0),ae(p("div",re({id:y.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[p("div",Ii,I(e.activeItem?e.activeItem.title:"Select"),1)],16,Vi),[[Ge,!e.open]]),ae(p("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=g=>e.search=g),size:"1",class:_(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ge,e.open],[Dt,e.search]]),p("div",{class:_(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(a,{size:14,weight:"bold",class:_(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((v=e.inputWrapper)==null?void 0:v.wrapperRef)?(i(),X(u,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=y=>e.open=y),ref:"popperRef",class:"z-[100] origin-top","append-to":(f=e.inputWrapper)==null?void 0:f.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:q(()=>[e.computedOptions.length>0?(i(),c("ul",Mi,[(i(!0),c(A,null,Q(e.computedOptions,y=>(i(),c("li",{key:y.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:g=>e.selectItem(y)},[p("span",null,I(y.title),1),e.modelValue===y.value?(i(),X(m,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):S("",!0)],8,ji))),128))])):(i(),c("div",Li,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):S("",!0)],64)}var Xn=L(Jn,[["render",Oi]]);Jn.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Ei={parameters:{storySource:{source:`import Select from './Select.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}},hint:{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}},"error-hint":{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}}}}},title:"Ui/Select",component:Xn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ct=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Xn},setup(){let t=d(void 0),n=d([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),Qn=ct.bind();Qn.args={title:"Input title"};const Zn=ct.bind();Zn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const eo=ct.bind();eo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Ni=["Default","Hint","ErrorHint"];var Ri=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ei,Default:Qn,Hint:Zn,ErrorHint:eo,__namedExportsOrder:Ni});const to=V({props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=d(e.modelValue),o=d(!1),s=d(!1),r=d(e.modelValue),a=d(),l=d(),m=d(),u=$(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":v},{"has-marker":e.showMarker}]),v=$(()=>Boolean(e.icon)),f=$(()=>({transform:"scaleX("+ye(r.value)+")"})),y=$(()=>({left:ye(r.value)*100+"%"})),g=$(()=>e.markerValue===void 0?e.modelValue:e.markerValue),B=$(()=>{const b=[];let U=e.step*Math.ceil(C()/e.step);for(;U<=h();)b.push(U),U+=e.step;return b}),C=()=>e.max>e.min?e.min:0,h=()=>e.max>e.min?e.max:100,F=()=>{a.value.focus()},x=()=>{R(n)},W=()=>{o.value=!0,t("focus")},K=()=>{o.value=!1,t("blur")},H=b=>{a.value.contains(b.target)||K()},z=b=>{b=fe(b),e.snapToSteps&&(b=Be(b)),R(b)},R=b=>{b=fe(b),b!==r.value&&(r.value=b,t("update:modelValue",b),t("change",b))},Z=()=>{z(r.value+e.step)},de=()=>{z(r.value-e.step)},ee=()=>{let b=l.value,U=b.offsetLeft;for(;b.offsetParent;)b=b.offsetParent,U+=b.offsetLeft;return U},J=b=>({left:b+"%"}),pe=()=>{document.addEventListener("touchend",w),document.addEventListener("mouseup",w),document.addEventListener("click",H),document.addEventListener("touchstart",H),me()},ce=()=>{document.removeEventListener("touchend",w),document.removeEventListener("mouseup",w),document.removeEventListener("click",H)},me=()=>{const b=fe(r.value?r.value:0);R(b)},ve=b=>{e.disabled||(o.value||W(),s.value=!0,O(b),document.addEventListener("touchmove",T),document.addEventListener("mousemove",T),t("dragstart",r.value,b))},T=b=>{O(b)},O=b=>{const U=b.touches?b.touches[0].pageX:b.pageX,te=l.value.offsetWidth,Ce=(U-ee())/te,Fe=fe(C()+Ce*(h()-C()));s.value&&R(Math.round(Fe))},w=b=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!=0&&z(e.modelValue),document.removeEventListener("touchmove",T),document.removeEventListener("mousemove",T),t("dragend",r.value,b))},Be=b=>{const U=Math.floor(b/e.step)*e.step,te=U+e.step,Ce=(U+te)/2;return U<C()?te>h()?b:te:b>=Ce&&te<=h()?te:U},ye=b=>(b-C())/(h()-C()),fe=b=>b<C()?C():b>h()?h():b;return ne(()=>{pe()}),or(()=>{ce()}),{slider:a,track:l,thumb:m,initialValue:n,isActive:o,isDragging:s,localValue:r,classes:u,hasIcon:v,fillStyle:f,thumbStyle:y,markerText:g,snapPoints:B,moderatedMin:C,moderatedMax:h,focus:F,reset:x,onFocus:W,onBlur:K,onExternalClick:H,setValueWithSnap:z,setValue:R,incrementValue:Z,decrementValue:de,getTrackOffset:ee,getPointStyle:J,initializeSlider:pe,teardownSlider:ce,initializeDrag:me,onDragStart:ve,onDragMove:T,dragUpdate:O,onDragStop:w,getNearestSnapPoint:Be,relativeValue:ye,moderateValue:fe}}}),Fi=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],Wi=["name","value"],Hi={key:1,class:"base-slider__icon"},Ai={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},zi={key:0},Ui={key:0,class:"base-slider__marker text-xs"},Yi=p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[p("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),qi={class:"base-slider__marker-text text-xs"};function Gi(e,t,n,o,s,r){const a=P("feather");return i(),c("div",{ref:"slider",class:_(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=xe(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=xe(ie((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=xe(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=xe(ie((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(i(),c("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,Wi)):S("",!0),e.hasIcon?(i(),c("div",Hi,[N(e.$slots,"icon",{},()=>[M(a,{type:e.icon,size:"20"},null,8,["type"])])])):S("",!0),p("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[p("div",Ai,[e.snapToSteps?(i(),c("div",zi,[(i(!0),c(A,null,Q(e.snapPoints,(l,m)=>(i(),c("span",{key:m,class:"base-slider__snap-point",style:G({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):S("",!0)]),p("div",{class:"base-slider__track-fill bg-primary-400",style:G(e.fillStyle)},null,4),p("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:G(e.thumbStyle)},[e.showMarker?(i(),c("div",Ui,[Yi,p("span",qi,I(e.markerText),1)])):S("",!0)],4)],544)],42,Fi)}var no=L(to,[["render",Gi]]);to.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};var Ki={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:no,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Ji=e=>({template:'<Slider v-bind="args" />',components:{Slider:no},setup(){return{args:e}}}),oo=Ji.bind();oo.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Ye};const Xi=["Default"];var Qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ki,Default:oo,__namedExportsOrder:Xi}),Zi={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Oe,argTypes:{}};const eu=e=>({template:"<Spinner />",components:{Spinner:Oe},setup(){return{args:e}}}),tu=eu.bind(),nu=["Default"];var ou=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zi,Default:tu,__namedExportsOrder:nu});const ro=V({props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=Y(e);return{isChecked:$({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),ru={class:"flex cursor-pointer items-center gap-x-3"},au={key:0},su={class:"text-sm text-gray-400"};function lu(e,t,n,o,s,r){return i(),c("label",ru,[ae(p("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.isChecked=a),class:"hidden",type:"checkbox"},null,512),[[kt,e.isChecked]]),p("div",{class:_(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[p("div",{class:_(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(i(),c("div",au,[p("div",null,I(e.title),1),p("div",su,I(e.description),1)])):S("",!0)])}var ao=L(ro,[["render",lu]]);ro.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};var iu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:ao,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const uu=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:ao},setup(){const t=d(!1);return{args:e,value:t}}}),so=uu.bind({});so.args={title:"Switch title",description:"Switch description text to be placed here"};const du=["Default"];var pu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:iu,Default:so,__namedExportsOrder:du});const lo=V({props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=d(),o=d([]),s=a=>{var l;(l=o.value)==null||l.push(a)};return ne(()=>{const a=o.value.find(l=>l.dataset.value===e.modelValue);a&&(console.log(a),a.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:a=>{t("update:modelValue",a)},root:n,registerTab:s}}}),cu={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},mu=["data-value"],fu=["onClick"],gu=p("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function vu(e,t,n,o,s,r){return i(),c("div",cu,[(i(!0),c(A,null,Q(e.tabs,a=>(i(),c("div",{key:a.value,ref_for:!0,ref:e.registerTab,"data-value":a.value,class:_(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[a.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[N(e.$slots,"tab",{tab:a,select:()=>e.select(a.value)},()=>[p("div",{class:"px-4 py-3",onClick:()=>e.select(a.value)},I(a.title),9,fu)])],10,mu))),128)),gu],512)}var mt=L(lo,[["render",vu]]);lo.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};var yu={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:mt,argTypes:{rounded:{control:{type:"boolean"}}}};const hu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:mt},setup(){const t=d("item_1");return{args:e,value:t}}}),io=hu.bind();io.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const bu=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:mt},setup(){const t=d("item_1");return{args:e,value:t}}}),uo=bu.bind();uo.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const ku=["Default","Slotted"];var wu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yu,Default:io,Slotted:uo,__namedExportsOrder:ku});const po=V({inheritAttrs:!1,model:{event:"update"},props:{label:{type:String},small:{type:Boolean},prefix:{type:String},suffix:{type:String},helper:{type:String}},setup(e,{emit:t}){return{onInput:o=>{t("update",o.value)}}}}),Du={class:"input-container"},$u={class:"label-name"},_u={class:"input-section"},Su={key:0,class:"helper"};function Cu(e,t,n,o,s,r){return i(),c("div",Du,[p("label",null,[p("span",$u,I(e.label),1),p("div",_u,[e.prefix?(i(),c("div",{key:0,class:_(["prefix",{small:e.small}])},I(e.prefix),3)):S("",!0),p("textarea",re(e.$attrs,{class:{small:e.small,prefixed:e.prefix,suffixed:e.suffix},onInput:t[0]||(t[0]=(...a)=>e.onInput&&e.onInput(...a))}),null,16),e.suffix?(i(),c("div",{key:1,class:_(["suffix",{small:e.small}])},I(e.suffix),3)):S("",!0)]),e.helper?(i(),c("div",Su,I(e.helper),1)):S("",!0)])])}var xu=L(po,[["render",Cu],["__scopeId","data-v-7378e37e"]]);po.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"small",type:{name:"boolean"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"helper",type:{name:"string"}}]};var Tu={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:xu,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ft=e=>({template:'<Textarea v-bind="args"/>',components:{BaseInput},setup(){return{args:e}}}),co=ft.bind();co.args={title:"Input title"};const mo=ft.bind();mo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const fo=ft.bind();fo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Pu=["Default","Hint","ErrorHint"];var Bu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tu,Default:co,Hint:mo,ErrorHint:fo,__namedExportsOrder:Pu});const go=V({components:{Popper:_e,PhDotsThreeVertical:rr},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=d(!1),o=d(),s=d();Le(s,a=>{n.value&&(o.value.contains(a.target)&&(a.stopPropagation(),a.preventDefault()),r(),t("blur"))});const r=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:r,popperRef:s,contextButtonRef:o}}}),Vu={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Iu(e,t,n,o,s,r){const a=P("PhDotsThreeVertical"),l=P("Popper");return i(),c(A,null,[p("div",re(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[ae(p("div",{class:_(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ge,e.stripe]]),e.title||e.$slots.title?(i(),c("div",Vu,[e.$slots.title?N(e.$slots,"title",{key:0,title:e.title}):(i(),c(A,{key:1},[be(I(e.title),1)],64)),e.$slots.options?(i(),c("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=m=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[M(a,{size:"24",weight:"bold"})],512)):S("",!0)])):S("",!0),e.$slots.default?(i(),c("section",{key:1,class:_(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[N(e.$slots,"default")],2)):S("",!0),N(e.$slots,"raw")],16),M(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=m=>e.open=m),options:{placement:"bottom-end"}},{default:q(()=>[N(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var vo=L(go,[["render",Iu]]);go.__docgenInfo={exportName:"default",displayName:"WidgetWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};var Mu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:vo,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const ju=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:vo},setup(){const t=d(!1);return{args:e,value:t}}}),yo=ju.bind({});yo.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Lu=["Default"];var Ou=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mu,Default:yo,__namedExportsOrder:Lu});const Eu=[pr,cr,mr,fr,gr,vr,yr,hr,br,kr,$r];Eu.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return ur.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>ir(o,!1));case"loaders":return n.forEach(o=>lr(o,!1));case"parameters":return xt(He({},n),!1);case"argTypesEnhancers":return n.forEach(o=>sr(o));case"argsEnhancers":return n.forEach(o=>ar(o));case"globals":case"globalTypes":{const o={};return o[t]=n,xt(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function ho(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Hr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":wa,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Ia,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Fa,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":gs,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Ms,"/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":Hs,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Xs,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":ml,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":wl,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":Vl,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":El,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Fl,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Al,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":Kl,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":ui,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":vi,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":ki,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":Bi,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":Ri,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":Qi,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":ou,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":pu,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":wu,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":Bu,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Ou}[e]}Object.assign(ho,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":"./src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});dr(ho,{hot:!1},!1);
//# sourceMappingURL=iframe.02f41033.js.map
