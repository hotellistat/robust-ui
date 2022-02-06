var ho=Object.defineProperty,bo=Object.defineProperties;var ko=Object.getOwnPropertyDescriptors;var yt=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,Do=Object.prototype.propertyIsEnumerable;var vt=(e,t,n)=>t in e?ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ze=(e,t)=>{for(var n in t||(t={}))wo.call(t,n)&&vt(e,n,t[n]);if(yt)for(var n of yt(t))Do.call(t,n)&&vt(e,n,t[n]);return e},ht=(e,t)=>bo(e,ko(t));import{a as $o,P as So,d as B,c as D,b as p,e as d,u as _o,o as i,f as bt,r as c,t as q,g as Q,w as Y,n as $,h as Ae,i as T,j as N,k as S,l as I,m as se,p as xo,q as le,v as Co,s as M,x as ne,y as Ie,z as Me,A as kt,B as je,C as wt,D as To,E as Po,F as Bo,G as Vo,H as Io,I as G,J as ve,K as oe,L as Le,M as Ue,N as qe,O as Mo,Q as jo,R as Lo,S as Oo,T as Eo,U as No,V as Ro,W as Wo,X as Fo,Y as ie,Z as z,_ as Z,$ as Ho,a0 as Dt,a1 as K,a2 as ue,a3 as $t,a4 as St,a5 as _t,a6 as we,a7 as Ge,a8 as De,a9 as xt,aa as zo,ab as Ye,ac as Ct,ad as Oe,ae as Ao,af as Uo,ag as qo,ah as Go,ai as Yo,aj as Tt,ak as Te,al as Ko,am as Jo,an as Xo,ao as Qo,ap as Zo,aq as Ke,ar as er,as as tr,at as Pt,au as nr,av as or,aw as rr,ax as ar,ay as sr,az as lr,aA as ir,aB as ur,aC as dr,aD as cr,aE as pr,aF as mr,aG as fr,aH as gr,aI as yr,aJ as vr}from"./vendor.cf066823.js";const hr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};hr();$o.use(So);const br={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",backgrounds:{disable:!0},themes:{clearable:!1,default:"Light",list:[{name:"Light",class:["light-mode"],color:"#f3f4f6"},{name:"Dark",class:["dark","dark-mode"],color:"#111827"}]}};var kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:br});var L=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const wr=["width","height","viewBox"],Dr=["stroke-width","stroke-dasharray","transform-origin","cx","cy","r"],Bt=B({props:{size:{type:Number,default:24},stroke:{type:Number,default:2},safeMargin:{type:Number,default:1}},setup(e){const t=e;_o(s=>({"4b98cae0":bt(n),"420ac91c":bt(o)}));const n=D(()=>.666*(t.size-2*t.safeMargin)),o=D(()=>3.1415*(t.size-2*t.safeMargin));return(s,a)=>(i(),p("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[d("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Dr)],8,wr))}});var Ee=L(Bt,[["__scopeId","data-v-74441302"]]);Bt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"24"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}}]};var $r={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white shadow ring-primary-500","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500",muted:"bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 text-gray-900 dark:text-white",transparent:"hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"};const Vt=B({components:{Spinner:Ee},props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:String,default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const t=c(!1),{loading:n,variant:o}=q(e);return{variantStyles:D(()=>$r[o.value]),loading:n,displaySpinner:t}}}),Sr={key:0,class:"mr-2"},_r={class:"whitespace-no-wrap truncate"},xr={key:1,class:"ml-2"};function Cr(e,t,n,o,s,a){const r=T("spinner");return i(),Q(Ae(e.tag),{disabled:e.disabled,class:$(["transition-color flex items-center justify-center truncate font-medium ring-opacity-50 duration-75 focus:ring",[e.disabled?"bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400":e.variantStyles,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:Y(()=>[d("div",{class:$(["flex select-none items-center transition-all duration-150",[e.loading?"opacity-0":"opacity-1"]])},[e.$slots.prefix?(i(),p("div",Sr,[N(e.$slots,"prefix",{tag:"div"})])):S("",!0),d("div",_r,[N(e.$slots,"default")]),e.$slots.suffix?(i(),p("div",xr,[N(e.$slots,"suffix",{tag:"div"})])):S("",!0)],2),e.loading?(i(),Q(r,{key:0,size:20,stroke:2,class:"spinner absolute"})):S("",!0)]),_:3},8,["disabled","class"])}var $e=L(Vt,[["render",Cr]]);Vt.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Tr={parameters:{storySource:{source:`import Button from './Button.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:2,line:27},startBody:{col:24,line:21},endBody:{col:2,line:27}},prefix:{startLoc:{col:23,line:31},endLoc:{col:2,line:42},startBody:{col:23,line:31},endBody:{col:2,line:42}},suffix:{startLoc:{col:23,line:46},endLoc:{col:2,line:57},startBody:{col:23,line:46},endBody:{col:2,line:57}},loading:{startLoc:{col:24,line:61},endLoc:{col:2,line:67},startBody:{col:24,line:61},endBody:{col:2,line:67}}}}},title:"Ui/Button",component:$e,argTypes:{onClick:{action:"clicked"},variant:{control:{type:"select",options:["primary","warn","muted","transparent"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},rounded:{control:{type:"boolean"}}}};const Pr=e=>({components:{Button:$e},template:'<Button v-bind="args">Click here</Button>',setup(){return{args:e}}}),Br=Pr.bind({}),Vr=e=>({template:`<Button v-bind="args">
  <template v-slot:prefix>
  <ph-smiley size="20" />
  </template>
  Click here
  </Button>`,components:{Button:$e},setup(){return{args:e}}}),Ir=Vr.bind(),Mr=e=>({template:`<Button v-bind="args">
  Click here
  <template v-slot:suffix>
  <ph-paper-plane-tilt size="20" />
  </template>
  </Button>`,components:{Button:$e},setup(){return{args:e}}}),jr=Mr.bind(),Lr=e=>({template:'<Button loading v-bind="args">Click here</Button>',components:{Button:$e},setup(){return{args:e}}}),Or=Lr.bind(),Er=["Default","Prefix","Suffix","Loading"];var Nr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tr,Default:Br,Prefix:Ir,Suffix:jr,Loading:Or,__namedExportsOrder:Er});let Rr=0;const It=B({inheritAttrs:!1,props:{title:{type:String},class:{type:String},hint:{type:String},error:{type:String},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(e,{attrs:t}){const n=(++Rr).toString(),o=/^on[^a-z]/,s=u=>o.test(u);let a=D(()=>Object.fromEntries(Object.entries(t).filter(u=>s(u[0]))));const r=c();function l(){}function m(){}return{cuid:n,wrapperRef:r,blurred:l,focused:m,listeners:a}}}),Wr={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},Fr={key:1,class:"block pt-1"},Hr={key:0,class:"select-none text-xs text-gray-400"},zr={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};function Ar(e,t,n,o,s,a){return i(),p("fieldset",null,[e.title?(i(),p("legend",Wr,I(e.title),1)):S("",!0),d("div",se(e.listeners,{ref:"wrapperRef",class:["relative flex min-w-52 rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",[e.$props.class,e.condensed?"h-9":"h-10",{"ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring focus-within:dark:border-primary-500":!e.readonly}]]}),[N(e.$slots,"default",{cuid:e.cuid,wrapperRef:e.wrapperRef})],16),e.hint!==void 0||e.error!==void 0?(i(),p("label",Fr,[e.hint!==void 0?(i(),p("div",Hr,I(e.hint),1)):S("",!0),e.error!==void 0?(i(),p("div",zr,I(e.error),1)):S("",!0)])):S("",!0)])}var Se=L(It,[["render",Ar]]);It.__docgenInfo={exportName:"default",displayName:"InputWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapperRef",title:"binding"}]}]};const Mt=B({inheritAttrs:!1,components:{InputWrapper:Se,PhWarningCircle:xo},props:{title:{type:String},hint:{type:String},error:{type:String},class:{type:String},readonly:{type:Boolean,default:!1},inputClass:{type:String},modelValue:{type:String},condensed:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t,attrs:n}){const o=c(),s=n,a=D({get(){return e.modelValue},set(m){t("input",m),t("change",m),t("update:modelValue",m)}});function r(){var m;(m=o.value)==null||m.focus()}function l(){t("update:modelValue","")}return{inputFieldValue:a,inputAttrs:s,props:e,inputRef:o,focus:r,clear:l}}}),Ur=["id","readonly"],qr={key:1,class:"text-red-400"};function Gr(e,t,n,o,s,a){const r=T("PhWarningCircle"),l=T("InputWrapper");return i(),Q(l,{title:e.title,hint:e.hint,error:e.error,class:$(e.$props.class),readonly:e.readonly,condensed:e.condensed},{default:Y(m=>[e.$slots.prefix?(i(),p("div",{key:0,class:$(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[N(e.$slots,"prefix",{tag:"div"})],2)):S("",!0),le(d("input",se({id:m.cuid,ref:"inputRef"},e.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=u=>e.inputFieldValue=u),size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-600",[e.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":e.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly}]],readonly:e.readonly}),null,16,Ur),[[Co,e.inputFieldValue]]),e.$slots.suffix||e.error?(i(),p("div",{key:1,class:$(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(i(),p("div",qr,[M(r,{size:"20",class:"block"})])):N(e.$slots,"suffix",{key:0,tag:"div"})],2)):S("",!0)]),_:3},8,["title","hint","error","class","readonly","condensed"])}var Je=L(Mt,[["render",Gr]]);Mt.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"}},{name:"modelValue",type:{name:"string"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Yr=[{title:"today",preset:()=>{const e=ne(new Date,{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ne(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"yesterday",preset:()=>{const e=ne(Ie(new Date,1),{hours:0,minutes:0,seconds:0,milliseconds:0});return[e,ne(new Date(e),{hours:23,minutes:59,seconds:59})]}},{title:"this_month_so_far",preset:()=>[Me(new Date),ne(new Date,{hours:23,minutes:59,seconds:59})]},{title:"this_month",preset:()=>[Me(new Date),kt(new Date)]},{title:"this_year",preset:()=>[je(new Date),wt(new Date)]},{title:"this_year_so_far",preset:()=>[je(new Date),ne(new Date,{hours:23,minutes:59,seconds:59})]},{title:"last_week",preset:()=>{let e=To(Ie(new Date,7));return[e,Po(new Date(e))]}},{title:"last_month",preset:()=>{let e=Me(Ie(Me(new Date),1));return[e,kt(e)]}},{title:"last_year",preset:()=>{const e=je(Ie(je(new Date),1));return[e,wt(new Date(e))]}}],Kr={primary:{background:"bg-primary-500 text-white hover:bg-primary-600"},secondary:{background:"bg-emerald-500 text-white hover:bg-emerald-600"}};const jt=B({components:{Input:Je,PhCaretLeft:Bo,PhCaretRight:Vo},inheritAttrs:!1,props:{future:{type:Boolean,default:!0},past:{type:Boolean,default:!0},today:{type:Boolean,default:!0},variant:{type:String,default:"primary"},modelValue:{type:Object,default:()=>new Date}},emits:["update:modelValue","click:relativeDate"],setup(e,{emit:t}){const{future:n,past:o,today:s,modelValue:a}=q(e),r=c(),l=c(),m=c(),u=c(),y=c(),f=c(),v=c(),g=c({}),P=Yr;f.value=Array.isArray(a.value)?new Date:new Date(a.value);const _=D(()=>Kr[e.variant]),h=D(()=>{const w=new Date(f.value);return Io(w)}),W=D(()=>{try{return G(f.value,"MMM")}catch{return}}),x=D(()=>{try{return G(f.value,"yyyy")}catch{return}}),F=D(()=>{const w=new Date(f.value);w.setDate(1);const V=w.getDay();return(V===0?7:V)-1}),J=D(()=>new Date(f.value).getMonth()),H=D(()=>new Date(f.value).getFullYear()),A=()=>{if(r.value!=""&&!Le(new Date(r.value))&&(m.value="Please enter a valid date."),l.value!=""&&!Le(new Date(l.value))&&(u.value="Please enter a valid date."),Le(new Date(r.value))&&Le(new Date(l.value))){m.value="",u.value="";const w=[new Date(r.value),new Date(l.value)];t("update:modelValue",w)}},R=(w,V)=>{const O=ee(w,V);return O<0?1:O>0?-1:0},ee=(w,V)=>{const O=Date.UTC(V.getFullYear(),V.getMonth(),V.getDate()),re=Date.UTC(w.getFullYear(),w.getMonth(),w.getDate());return(O-re)/864e5},de=w=>{if(!Array.isArray(a.value)||a.value.length<2||!R(...a.value))return!1;const V=new Date(f.value),O=new Date(V.setDate(w)),re=Ue(a.value);return!R(O,re)},te=w=>{if(!Array.isArray(a.value)||a.value.length<2||!R(...a.value))return!1;const V=new Date(f.value),O=new Date(V.setDate(w)),re=qe(a.value);return!R(O,re)},X=w=>{if(!Array.isArray(a.value)||a.value.length<2)return!1;const V=new Date(f.value),O=new Date(V.setDate(w)),re=Ue(a.value),ye=qe(a.value);return R(O,ye)===-1&&R(O,re)===1},ce=w=>{const V=new Date(f.value),O=new Date(V.setDate(w));if(Array.isArray(a.value)){const re=a.value.map(ye=>new Date(ye));for(let ye=0;ye<re.length;ye++)if(!R(re[ye],O))return!0}else if(!R(new Date(v.value),O))return!0};function pe(w){t("update:modelValue",w),f.value=w[1]}function me(){f.value=Mo(f.value,1)}function be(){f.value=jo(f.value,1)}function C(w){f.value=Lo(f.value,w)}function E(){f.value=Oo(f.value,1)}function k(){f.value=Eo(f.value,1)}function Ve(w){f.value=No(f.value,w)}const ke=w=>{const V=new Date(f.value).setDate(w);return!(!s.value&&Ro(y.value,V)||!o.value&&Wo(y.value,V)>0||!n.value&&Fo(V))},fe=w=>{if(!ke(w))return;const V=new Date(f.value);if(f.value=ne(new Date(V.setDate(w)),{hours:0,minutes:0,seconds:0,milliseconds:0}),!Array.isArray(a.value))v.value=new Date(f.value),t("update:modelValue",f.value);else{m.value="",u.value="";let O=[];a.value.length>1?(O.push(ne(new Date(f.value),{hours:0,minutes:0,seconds:0,milliseconds:0})),l.value=""):(O=a.value,O.push(ne(new Date(f.value),{hours:23,minutes:59,seconds:59})),O.length>1&&(O=[ne(Ue(O),{hours:0,minutes:0,seconds:0}),ne(qe(O),{hours:23,minutes:59,seconds:59})],l.value=G(O[1],"MM/dd/yyyy"))),r.value=G(O[0],"MM/dd/yyyy"),t("update:modelValue",O)}},b=()=>{f.value=new Date(new Date().setHours(12))};function U(){t("update:modelValue",f.value),this.$refs.modal.close()}ve([r,l],()=>{A()}),ve(a,w=>{const V=w[0]||void 0,O=w[1]||void 0;V?r.value=G(V,"MM/dd/yyyy"):r.value="",O?l.value=G(O,"MM/dd/yyyy"):l.value=""}),oe(()=>{if(!Array.isArray(a.value))f.value=new Date(a.value||new Date),v.value=new Date(f.value);else{f.value=new Date(a.value[1]||new Date),v.value=new Date(f.value);const w=a.value[0]||void 0,V=a.value[1]||void 0;w?r.value=G(w,"MM/dd/yyyy"):r.value="",V?l.value=G(V,"MM/dd/yyyy"):l.value=""}});const ae=D(()=>{const w=[];for(let V=1900;V<=2100;V++)w.push(V);return w}),ge=c(!1);function Fe(){ge.value=!0}function go(){ge.value=!1}const He=c(!1);function yo(){He.value=!0,ie(()=>{g.value[H.value].scrollIntoView({block:"start",behavior:"auto"})})}function vo(){He.value=!1}return{months:D(()=>[{title:"Jan"},{title:"Feb"},{title:"Mar"},{title:"Apr"},{title:"May"},{title:"Jun"},{title:"Jul"},{title:"Aug"},{title:"Sep"},{title:"Oct"},{title:"Nov"},{title:"Dec"}]),from:r,to:l,errorFrom:m,errorTo:u,showMonthSelectionActive:ge,showYearSelectionActive:He,now:y,cursor:f,selectedDate:v,showMonthSelection:Fe,showYearSelection:yo,hideMonthSelection:go,hideYearSelection:vo,daysInMonth:h,monthHeading:W,yearHeading:x,refYearEntry:g,setYear:C,setMonth:Ve,firstWeekday:F,activeMonth:J,activeYear:H,compareDates:R,applyTime:A,dayDiff:ee,isFirst:de,isLast:te,isBetweenRange:X,isSelectedDay:ce,addYear:me,subYear:be,addMonth:E,subMonth:k,dayAllowed:ke,daySelect:fe,reset:b,submit:U,yearSelectionYears:ae,quickActions:P,setDaterange:pe,variantStyling:_}}}),Jr={class:"relative flex w-max select-none"},Xr={key:0,class:"relative w-48 border-r border-gray-200 dark:border-gray-600"},Qr={class:"absolute inset-0 overflow-auto py-2"},Zr=["onClick"],ea={class:"p-4 dark:border-gray-600"},ta={class:"mb-4 flex items-center text-center text-lg font-semibold"},na={class:"flex flex-1"},oa={class:"relative w-max"},ra={key:0,class:"absolute inset-0 z-10 grid grid-cols-3 gap-4"},aa=["onClick"],sa={key:1,class:"absolute inset-0 z-10 flex flex-col gap-2 overflow-y-auto"},la=["data-year","onClick"],ia=Ho('<div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> M </div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> T </div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> W </div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> T </div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> F </div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> S </div><div class="pb-2 text-center text-sm text-gray-400 dark:text-gray-400"> S </div>',7),ua=["disabled","onClick"],da={key:1,class:"flex flex-shrink-0 flex-col items-start border-l border-gray-200 p-4 dark:border-gray-600"},ca=d("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"From",-1),pa=d("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"To",-1);function ma(e,t,n,o,s,a){const r=T("PhCaretLeft"),l=T("PhCaretRight"),m=T("Input");return i(),p("div",Jr,[Array.isArray(e.modelValue)?(i(),p("div",Xr,[d("div",Qr,[(i(!0),p(z,null,Z(e.quickActions,u=>(i(),p("div",{key:u.title,class:"cursor-pointer py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700",onClick:y=>e.setDaterange(u.preset())},I(u.title),9,Zr))),128))])])):S("",!0),d("section",ea,[d("div",ta,[d("div",na,[d("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[0]||(t[0]=()=>{e.showMonthSelection(),e.hideYearSelection()})},I(e.monthHeading),1),d("div",{class:"flex h-8 cursor-pointer items-center rounded-lg px-2 tabular-nums hover:bg-gray-100 dark:hover:bg-gray-700",onClick:t[1]||(t[1]=()=>{e.showYearSelection(),e.hideMonthSelection()})},I(e.yearHeading),1)]),d("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[2]||(t[2]=(...u)=>e.subMonth&&e.subMonth(...u))},[M(r,{type:"chevron-left",size:"14",weight:"bold"})]),d("div",{class:"flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",onClick:t[3]||(t[3]=(...u)=>e.addMonth&&e.addMonth(...u))},[M(l,{type:"chevron-right",size:"14",weight:"bold"})])]),d("div",oa,[e.showMonthSelectionActive?(i(),p("div",ra,[(i(!0),p(z,null,Z(e.months,(u,y)=>(i(),p("div",{key:y,class:$(["flex cursor-pointer items-center justify-center rounded-lg py-2 text-center",[e.activeMonth===y?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),onClick:()=>{e.setMonth(y),e.hideMonthSelection()}},I(u.title),11,aa))),128))])):S("",!0),e.showYearSelectionActive?(i(),p("div",sa,[(i(!0),p(z,null,Z(e.yearSelectionYears,u=>(i(),p("div",{ref_for:!0,ref:y=>e.refYearEntry[u]=y,key:u,class:$(["cursor-pointer rounded-lg py-2 text-center tabular-nums",[e.activeYear===u?e.variantStyling.background:"hover:bg-gray-100 dark:hover:bg-gray-600"]]),"data-year":u,onClick:()=>{e.setYear(u),e.hideYearSelection()}},I(u),11,la))),128))])):S("",!0),d("div",{class:$(["grid grid-cols-7 gap-y-1",[{"opacity-0":e.showMonthSelectionActive||e.showYearSelectionActive}]])},[ia,(i(!0),p(z,null,Z(e.firstWeekday,u=>(i(),p("div",{key:u+"_offset"}))),128)),(i(!0),p(z,null,Z(e.daysInMonth,u=>(i(),p("div",{key:u+"_day",class:$(["relative",[e.isBetweenRange(u)?e.variantStyling.background:""]]),disabled:!e.dayAllowed(u),onClick:y=>e.daySelect(u)},[e.isLast(u)||e.isFirst(u)?(i(),p("div",{key:0,class:$(["absolute z-0 h-full",[e.variantStyling.background,e.isFirst(u)?"right-0 w-1/2":e.isLast(u)?"left-0 w-1/2":""]])},null,2)):S("",!0),d("div",{class:$(["relative z-10 flex h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-lg text-sm font-medium tabular-nums",[e.isBetweenRange(u)||e.isLast(u)||e.isFirst(u)||e.isSelectedDay(u)?`rounded-0 ${e.variantStyling.background}`:"hover:bg-gray-200 dark:hover:bg-gray-700"]])},I(u),3)],10,ua))),128))],2)])]),Array.isArray(e.modelValue)?(i(),p("div",da,[ca,M(m,{modelValue:e.from,"onUpdate:modelValue":t[4]||(t[4]=u=>e.from=u),placeholder:"Date",error:e.errorFrom,class:"mb-2 w-full"},null,8,["modelValue","error"]),pa,M(m,{modelValue:e.to,"onUpdate:modelValue":t[5]||(t[5]=u=>e.to=u),placeholder:"Date",error:e.errorTo,class:"mb-2 w-full"},null,8,["modelValue","error"]),N(e.$slots,"default")])):S("",!0)])}var Ne=L(jt,[["render",ma]]);jt.__docgenInfo={exportName:"default",displayName:"Calendar",description:"",tags:{},props:[{name:"future",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"past",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"today",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"modelValue",type:{name:"[Date, Date] | Date"},defaultValue:{func:!0,value:"() => new Date()"}}],events:[{name:"update:modelValue"},{name:"click:relativeDate"}],slots:[{name:"default"}]};var fa={parameters:{storySource:{source:`import Calendar from './Calendar.vue'
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

export const Default = Template.bind({})

const date = [new Date(), new Date()]
const modelValue = ref(date)

export const Range = Template.bind({})
Range.args = {
  modelValue: modelValue,
  'onUpdate:modelValue': (val) => {
    modelValue.value = val
  },
}
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}},range:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},title:"Ui/Calendar",component:Ne,argTypes:{}};const Lt=e=>({template:'<Calendar v-bind="args"></Calendar>',components:{Calendar:Ne},setup(){return{args:e}}}),ga=Lt.bind({}),ya=[new Date,new Date],Ot=c(ya),Et=Lt.bind({});Et.args={modelValue:Ot,"onUpdate:modelValue":e=>{Ot.value=e}};const va=["Default","Range"];var ha=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fa,Default:ga,Range:Et,__namedExportsOrder:va});const Nt=B({emits:["update:modelValue","change"],props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o="_"+Math.random().toString(36).substr(2,9),s=D({get(){return Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue===e.value},set(a){let r=e.modelValue;Array.isArray(r)?a?r.push(e.value):r.splice(r.indexOf(e.value),1):a?r=e.value:r=e.disabledValue,t("update:modelValue",r),t("change",r)}});return{cuid:o,isChecked:s,attrs:n}}}),ba={class:"inline-block"},ka={class:"flex cursor-pointer items-start"},wa=["id"],Da={key:0,class:"w-full select-none pt-px leading-4"},$a={key:1,class:"w-full select-none pt-px leading-4"};function Sa(e,t,n,o,s,a){const r=T("ph-check");return i(),p("div",ba,[d("label",ka,[le(d("input",{id:e.cuid,"onUpdate:modelValue":t[0]||(t[0]=l=>e.isChecked=l),type:"checkbox",class:"hidden"},null,8,wa),[[Dt,e.isChecked]]),d("div",{class:$(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer rounded border text-white transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[M(r,{class:$([[e.isChecked?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),e.title&&!e.$slots.title?(i(),p("div",Da,I(e.title),1)):S("",!0),!e.title&&e.$slots.title?(i(),p("div",$a,[N(e.$slots,"title")])):S("",!0)])])}var Re=L(Nt,[["render",Sa]]);Nt.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};var _a={parameters:{storySource:{source:`import { computed } from '@vue/runtime-core'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}},"slotted-title":{startLoc:{col:21,line:27},endLoc:{col:2,line:35},startBody:{col:21,line:27},endBody:{col:2,line:35}}}}},title:"Ui/Checkbox",component:Re,argTypes:{title:{control:{type:"text"}}}};const xa=e=>({template:'<Checkbox v-bind="args" v-model="value"></Checkbox>',components:{Checkbox:Re},setup(){return{value:c(!1),args:e}}}),Rt=xa.bind({});Rt.args={title:"Checkbox title"};const Ca=e=>({template:'<Checkbox v-model="value"><template v-slot:title>{{args.title}}</template></Checkbox>',components:{Checkbox:Re},setup(){return{value:c(!1),args:e}}}),Wt=Ca.bind({});Wt.args={title:"V-Slot Checkbox title"};const Ta=["Default","SlottedTitle"];var Pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_a,Default:Rt,SlottedTitle:Wt,__namedExportsOrder:Ta});const Ba=["width","height","viewBox"],Va=["stroke-width","stroke-dasharray","stroke-dashoffset","transform-origin","cx","cy","r"],Xe=B({props:{size:{type:Number,default:32},stroke:{type:Number,default:4},safeMargin:{type:Number,default:1},progress:{type:Number,default:25}},setup(e){return(t,n)=>(i(),p("svg",{width:`${e.size}px`,height:`${e.size}px`,x:"0px",y:"0px",viewBox:`0 0 ${e.size} ${e.size}`},[d("circle",{fill:"transparent",stroke:"currentColor","stroke-width":e.stroke,"stroke-linecap":"round",transform:"rotate(-90)","stroke-dasharray":3.1415*(e.size-2*e.safeMargin),"stroke-dashoffset":3.1415*e.size*(1-e.progress/100),"transform-origin":`${.5*e.size} ${.5*e.size} 0`,cx:e.size/2,cy:e.size/2,r:e.size/2-e.stroke/2-e.safeMargin},null,8,Va)],8,Ba))}});Xe.__docgenInfo={exportName:"default",displayName:"CircularProgress",description:"",tags:{},props:[{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"32"}},{name:"stroke",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"safeMargin",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"25"}}]};var Ia={parameters:{storySource:{source:`import CircularProgress from './CircularProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:29},startBody:{col:24,line:11},endBody:{col:2,line:29}}}}},title:"Ui/CircularProgress",component:Xe,argTypes:{progress:{control:{type:"number"}}}};const Ma=e=>({template:`<CircularProgress v-bind="args" />
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
  `,components:{CircularProgress:Xe},setup(){return{args:e}}}),ja=Ma.bind(),La=["Default"];var Oa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ia,Default:ja,__namedExportsOrder:La});function _e(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Na(e):/rgb/.test(e)?t=zt(e):typeof e=="string"?t=zt(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:s,a}=t,{h:r,s:l,v:m}=Ra(t);return{r:n,g:o,b:s,a:a===void 0?1:a,h:r,s:l,v:m}}function Ft(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function Ht(e,t,n,o,s,a){const r=e==="l",l=t.createLinearGradient(0,0,r?n:0,r?0:o);l.addColorStop(.01,s),l.addColorStop(.99,a),t.fillStyle=l,t.fillRect(0,0,n,o)}function Ea({r:e,g:t,b:n},o){const s=r=>("0"+Number(r).toString(16)).slice(-2),a=`#${s(e)}${s(t)}${s(n)}`;return o?a.toUpperCase():a}function Na(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function zt(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Ra({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),s=Math.min(e,t,n),a=o-s;let r=0;o===s?r=0:o===e?t>=n?r=60*(t-n)/a:r=60*(t-n)/a+360:o===t?r=60*(n-e)/a+120:o===n&&(r=60*(e-t)/a+240),r=Math.floor(r);const l=parseFloat((o===0?0:1-s/o).toFixed(2)),m=parseFloat(o.toFixed(2));return{h:r,s:l,v:m}}const At=B({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},setup(e,{emit:t}){const n=c({}),{size:o,hsv:s,color:a}=q(e),r=c(),l=c(),m=f=>{const v=f,g=o.value,P=v.getContext("2d");v.width=g,v.height=g,P.fillStyle=a.value,P.fillRect(0,0,g,g),Ht("l",P,g,g,"#FFFFFF","rgba(255,255,255,0)"),Ht("p",P,g,g,"rgba(0,0,0,0)","#000000")},u=()=>{n.value={left:s.value.s*o.value-5+"px",top:(1-s.value.v)*o.value-5+"px"}},y=f=>{const{top:v,left:g}=r.value.getBoundingClientRect(),P=f.target.getContext("2d"),_=W=>{let x=W.clientX-g,F=W.clientY-v;x<0&&(x=0),F<0&&(F=0),x>o.value&&(x=o.value),F>o.value&&(F=o.value),n.value={left:x-5+"px",top:F-5+"px"};const J=P.getImageData(Math.min(x,o.value-1),Math.min(F,o.value-1),1,1),[H,A,R]=J.data;t("selectSaturation",{r:H,g:A,b:R})};_(f);const h=()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",_),document.addEventListener("mouseup",h)};return oe(()=>{m(l.value),u()}),{slideSaturationStyle:n,selectSaturation:y,renderSlide:u,renderColor:m,saturation:r,canvasSaturation:l,color:a,hsv:s,size:o}}}),Wa={ref:"canvasSaturation"};function Fa(e,t,n,o,s,a){return i(),p("div",{ref:"saturation",class:"saturation",onMousedown:t[0]||(t[0]=ue((...r)=>e.selectSaturation&&e.selectSaturation(...r),["prevent","stop"]))},[d("canvas",Wa,null,512),d("div",{style:K(e.slideSaturationStyle),class:"slide"},null,4)],544)}var Ha=L(At,[["render",Fa]]);At.__docgenInfo={exportName:"default",displayName:"Saturation",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const Ut=B({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},setup(e,{emit:t}){const n=c({}),o=c(),{height:s,width:a,hsv:r}=q(e),l=c(),m=f=>{const v=f,g=a.value,P=s.value,_=v.getContext("2d");v.width=g,v.height=P;const h=_.createLinearGradient(0,0,0,P);h.addColorStop(0,"#FF0000"),h.addColorStop(.17*1,"#FF00FF"),h.addColorStop(.17*2,"#0000FF"),h.addColorStop(.17*3,"#00FFFF"),h.addColorStop(.17*4,"#00FF00"),h.addColorStop(.17*5,"#FFFF00"),h.addColorStop(1,"#FF0000"),_.fillStyle=h,_.fillRect(0,0,g,P)},u=()=>{n.value={top:(1-r.value.h/360)*s.value-2+"px"}},y=f=>{const{top:v}=l.value.getBoundingClientRect(),g=f.target.getContext("2d"),P=h=>{let W=h.clientY-v;W<0&&(W=0),W>s.value&&(W=s.value),n.value={top:W-2+"px"};const x=g.getImageData(0,Math.min(W,s.value-1),1,1),[F,J,H]=x.data;t("selectHue",{r:F,g:J,b:H})};P(f);const _=()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",_)};return oe(()=>{m(o.value),u()}),{slideHueStyle:n,hue:l,width:a,height:s,renderSlide:u,selectHue:y,renderColor:m,hsv:r,canvasHue:o}}}),za={ref:"canvasHue"};function Aa(e,t,n,o,s,a){return i(),p("div",{ref:"hue",class:"hue",onMousedown:t[0]||(t[0]=ue((...r)=>e.selectHue&&e.selectHue(...r),["prevent","stop"]))},[d("canvas",za,null,512),d("div",{style:K(e.slideHueStyle),class:"slide"},null,4)],544)}var Ua=L(Ut,[["render",Aa]]);Ut.__docgenInfo={exportName:"default",displayName:"Hue",description:"",tags:{},props:[{name:"hsv",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"152"}}]};const qt=B({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},setup(e){const t=c(5),{color:n,width:o,height:s}=q(e),a=c(),r=l=>{const m=l,u=o.value,y=s.value,f=t.value,v=Ft(f),g=m.getContext("2d");m.width=u,m.height=y,g.fillStyle=g.createPattern(v,"repeat"),g.fillRect(0,0,u,y),g.fillStyle=n.value,g.fillRect(0,0,u,y)};return oe(()=>{$t(()=>{r(a.value)}),r(a.value)}),{alphaSize:t,color:n,width:o,height:s,canvas:a}}}),qa={ref:"canvas"};function Ga(e,t,n,o,s,a){return i(),p("canvas",qa,null,512)}var Ya=L(qt,[["render",Ga]]);qt.__docgenInfo={exportName:"default",displayName:"Preview",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"30"}}]};const Gt=B({props:{name:{type:String,default:""},color:{type:String,default:""}},setup(e,{emit:t}){return{modelColor:D({get(){return e.color||""},set(o){t("inputColor",o)}})}}}),Ka={class:"color-type"},Ja={class:"name"};function Xa(e,t,n,o,s,a){return i(),p("div",Ka,[d("span",Ja,I(e.name),1),le(d("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.modelColor=r),class:"value"},null,512),[[St,e.modelColor]])])}var Qa=L(Gt,[["render",Xa]]);Gt.__docgenInfo={exportName:"default",displayName:"Box",description:"",tags:{},props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Yt=B({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,required:!0},colorsHistoryKey:{type:String,default:""}},setup(e,{emit:t}){const n=c(),o=c([]),s=c();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),s.value=Ft(4).toDataURL(),_t(()=>{a(n.value)});const a=l=>{if(!l)return;const m=o.value||[],u=m.indexOf(l);u>=0&&m.splice(u,1),m.length>=8&&(m.length=7),m.unshift(l),o.value=m||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(m))};return{setColorsHistory:a,colorsHistory:o,color:n,imgAlphaBase64:s,selectColor:l=>{t("selectColor",l)}}}}),Za={class:"colors"},es=["onClick"],ts={key:0,class:"colors history"},ns=["onClick"];function os(e,t,n,o,s,a){return i(),p("div",null,[d("ul",Za,[(i(!0),p(z,null,Z(e.colorsDefault,r=>(i(),p("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[d("div",{style:K({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),d("div",{style:K({background:r}),class:"color"},null,4)],8,es))),128))]),e.colorsHistory.length?(i(),p("ul",ts,[(i(!0),p(z,null,Z(e.colorsHistory,r=>(i(),p("li",{key:r,class:"item",onClick:l=>e.selectColor(r)},[d("div",{style:K({background:`url(${e.imgAlphaBase64})`}),class:"alpha"},null,4),d("div",{style:K({background:r}),class:"color"},null,4)],8,ns))),128))])):S("",!0)])}var rs=L(Yt,[["render",os]]);Yt.__docgenInfo={displayName:"ColorPicker",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"colorsDefault",type:{name:"string[]"},required:!0},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const Kt=B({components:{Saturation:Ha,Hue:Ua,Preview:Ya,Box:Qa,Colors:rs},emits:["changeColor"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},colorsDefault:{type:Array,default:["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},setup(e,{emit:t}){const n=c(15),o=c(152),s=c(20),a=c(""),r=c(""),l=c(0),m=c(0),u=c(0),y=c(1),f=c(0),v=c(0),g=c(0),P=c(),_=c(),{theme:h,color:W}=q(e),x=D(()=>h.value==="light"),F=D(()=>o.value+(n.value+8)*2),J=D(()=>F.value-s.value),H=D(()=>({r:l.value,g:m.value,b:u.value,a:y.value})),A=D(()=>({h:f.value,s:v.value,v:g.value})),R=D(()=>`rgb(${l.value}, ${m.value}, ${u.value})`),ee=D(()=>`${l.value}, ${m.value}, ${u.value}`),de=D(()=>`rgb(${ee.value})`),te=D(()=>Ea(H.value,!0)),X=()=>{r.value=te.value,a.value=ee.value};return oe(()=>{const E=_e(W.value);l.value=E.r,m.value=E.g,u.value=E.b,y.value=E.a,f.value=E.h,v.value=E.s,g.value=E.v,X()}),$t(()=>{t("changeColor",{rgba:H.value,hsv:A.value,hex:r.value})}),{hueWidth:n,hueHeight:o,previewHeight:s,modelRgba:a,modelHex:r,r:l,g:m,b:u,a:y,h:f,s:v,v:g,isLightTheme:x,totalWidth:F,previewWidth:J,rgba:H,hsv:A,rgbString:R,rgbStringShort:ee,rgbaString:de,hexString:te,setText:X,selectSaturation:E=>{const k=_e(E);l.value=k.r,m.value=k.g,u.value=k.b,y.value=k.a,f.value=k.h,v.value=k.s,g.value=k.v,X()},selectHue:E=>{const k=_e(E);l.value=k.r,m.value=k.g,u.value=k.b,y.value=k.a,f.value=k.h,v.value=k.s,g.value=k.v,X(),ie(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide()})},inputHex:E=>{const k=_e(E);l.value=k.r,m.value=k.g,u.value=k.b,y.value=k.a,f.value=k.h,v.value=k.s,g.value=k.v,r.value=E,a.value=ee.value,ie(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),P.value.renderSlide()})},inputRgba:E=>{const k=_e(E);l.value=k.r,m.value=k.g,u.value=k.b,y.value=k.a,f.value=k.h,v.value=k.s,g.value=k.v,r.value=te.value,a.value=`${l.value}, ${m.value}, ${u.value}`,ie(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),P.value.renderSlide()})},selectColor:E=>{const k=_e(E);l.value=k.r,m.value=k.g,u.value=k.b,y.value=k.a,f.value=k.h,v.value=k.s,g.value=k.v,X(),ie(()=>{_.value.renderColor(_.value.canvasSaturation),_.value.renderSlide(),P.value.renderSlide()})},saturation:_,hue:P,color:W,theme:h}}}),as={class:"color-set"};function ss(e,t,n,o,s,a){const r=T("Saturation"),l=T("Hue"),m=T("Preview"),u=T("Box"),y=T("Colors");return i(),p("div",{class:$(["hu-color-picker rounded bg-gray-700 shadow",{light:e.isLightTheme}]),style:K({width:e.totalWidth+"px"})},[d("div",as,[M(r,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),M(l,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"])]),d("div",{style:K({height:e.previewHeight+"px"}),class:"color-show"},[M(m,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"])],4),M(u,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),M(u,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),M(y,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"])],6)}var Jt=L(Kt,[["render",ss]]);Kt.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"colorsDefault",type:{name:"string[]"},defaultValue:{func:!1,value:`[
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
]`}},{name:"colorsHistoryKey",type:{name:"string"},defaultValue:{func:!1,value:"'vue-colorpicker-history'"}}],events:[{name:"changeColor"}]};var ls={parameters:{storySource:{source:`import ColorPicker from './ColorPicker.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ColorPicker",component:Jt,argTypes:{title:{control:{type:"text",default:"Title"}}}};const is=e=>({template:'<ColorPicker v-bind="args" />',components:{ColorPicker:Jt},setup(){return{args:e}}}),us=is.bind(),ds=["Default"];var cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ls,Default:us,__namedExportsOrder:ds});const Xt=B({props:{vert:{type:Boolean,default:!1},colorClass:{type:String,default:"bg-gray-100 dark:bg-gray-600 "}}}),ps={key:1,class:"flex items-center"},ms={class:"flex-shrink-0 px-2 text-gray-300 dark:text-gray-500"};function fs(e,t,n,o,s,a){return e.$slots.default?(i(),p("div",ps,[d("div",{class:$(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2),d("div",ms,[N(e.$slots,"default")]),d("div",{class:$(["flex-1 bg-gray-100 dark:bg-gray-600",e.vert?"w-px self-stretch":"h-px w-full"])},null,2)])):(i(),p("div",{key:0,class:$(["flex-shrink-0",[e.colorClass,e.vert?"w-px self-stretch":"h-px w-full"]])},null,2))}var gs=L(Xt,[["render",fs]]);Xt.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"vert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"colorClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600 '"}}],slots:[{name:"default"}]};const Qt=B({components:{Separator:gs},props:{title:{type:String},description:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}}}),ys={class:"relative overflow-hidden rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"},vs={key:1,class:"p-4 sm:p-6"},hs={class:"flex"},bs={key:0,class:"text-gray-500 dark:text-gray-500"},ks={class:"p-4 sm:p-6"};function ws(e,t,n,o,s,a){const r=T("Separator");return i(),p("section",ys,[e.stripe?(i(),p("div",{key:0,class:$(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):S("",!0),e.description!==void 0||e.title!==void 0?(i(),p("header",vs,[d("h1",hs,[d("div",{class:$(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[N(e.$slots,"title",{title:e.title},()=>[we(I(e.title),1)])],2)]),e.description!==void 0?(i(),p("p",bs,[N(e.$slots,"description",{description:e.description},()=>[we(I(e.description),1)])])):S("",!0)])):S("",!0),M(r),d("div",ks,[N(e.$slots,"default")])])}var Pe=L(Qt,[["render",ws]]);Qt.__docgenInfo={exportName:"default",displayName:"ContentBox",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};var Ds={parameters:{storySource:{source:`import ContentBox from './ContentBox.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:19},startBody:{col:24,line:11},endBody:{col:2,line:19}},title:{startLoc:{col:22,line:23},endLoc:{col:2,line:34},startBody:{col:22,line:23},endBody:{col:2,line:34}},"title-prop":{startLoc:{col:26,line:42},endLoc:{col:2,line:50},startBody:{col:26,line:42},endBody:{col:2,line:50}},stripe:{startLoc:{col:23,line:58},endLoc:{col:2,line:66},startBody:{col:23,line:58},endBody:{col:2,line:66}}}}},title:"Ui/ContentBox",component:Pe,argTypes:{title:{control:{type:"text"}}}};const $s=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),Ss=$s.bind(),_s=e=>({template:`<ContentBox v-bind="args" >
  <template v-slot:title>
  <div class="text-red-500">some prefix</div>
  {{args.title}}</template>
      <div class="p-8 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),Zt=_s.bind();Zt.args={title:"Input title"};const xs=e=>({template:`<ContentBox v-bind="args" >
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),en=xs.bind();en.args={title:"Input title"};const Cs=e=>({template:`<ContentBox v-bind="args" stripe stripe-class="bg-primary-500">
      <div class="p-8 bg-gray-400 ">content</div>
  </ContentBox>`,components:{ContentBox:Pe},setup(){return{args:e}}}),tn=Cs.bind();tn.args={title:"Input title"};const Ts=["Default","Title","TitleProp","Stripe"];var Ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ds,Default:Ss,Title:Zt,TitleProp:en,Stripe:tn,__namedExportsOrder:Ts});const nn=B({props:{title:{type:String},description:{type:String},icon:{type:Object}}}),Bs={class:"py-4 text-gray-500 dark:text-gray-400"},Vs={class:"mb-2 flex justify-center"},Is={class:"mx-auto text-center text-xl font-bold"},Ms={class:"mx-auto text-center"};function js(e,t,n,o,s,a){return i(),p("div",Bs,[d("div",Vs,[(i(),Q(Ae(e.icon),{size:"40"}))]),d("div",Is,I(e.title),1),d("div",Ms,I(e.description),1)])}var on=L(nn,[["render",js]]);nn.__docgenInfo={exportName:"default",displayName:"ContentPlaceholder",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"icon",type:{name:"object"}}]};var Ls={parameters:{storySource:{source:`import ContentPlaceholder from './ContentPlaceholder.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/ContentPlaceholder",component:on,argTypes:{title:{control:{type:"text",default:"Title"}}}};const Os=e=>({template:'<ContentPlaceholder v-bind="args" />',components:{ContentPlaceholder:on},setup(){return{args:e}}}),rn=Os.bind();rn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Ge};const Es=["Default"];var Ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ls,Default:rn,__namedExportsOrder:Es}),Rs=[{name:"computeStyles",options:{roundOffsets:({x:e,y:t})=>({x:Math.round(e),y:Math.round(t)}),adaptive:!0,gpuAcceleration:!0}},{name:"offset",options:{offset:[0,2]}},{name:"preventOverflow",options:{padding:8}}],xe=B({props:{appendTo:{type:HTMLElement,required:!0},options:{type:Object},gpu:{type:Boolean,default:!0},height:{type:[String,Number],default:230},open:{type:Boolean,default:!1},modifiers:{type:Array,default:()=>[]}},setup(e,{emit:t,slots:n}){const{open:o,appendTo:s}=q(e),a=c();let r;const l=c(!1),m={strategy:"absolute",placement:"bottom-start",modifiers:[...Rs,...e.modifiers]};function u(){r==null||r.destroy(),l.value=!1}async function y(g){if(!g)return;const P=Object.assign({},m,e.options);!a.value||(r=zo(g,a.value,P),await r.update())}_t(()=>{u()});async function f(){await y(s.value),a.value&&(r==null||r.update(),xt.fromTo(a.value,{opacity:0},{opacity:1,duration:.05,ease:"power1"}).then(()=>{t("opened")}))}async function v(){a.value&&xt.fromTo(a.value,{opacity:1},{opacity:0,duration:.05,ease:"power1"}).then(()=>{u()})}return oe(()=>{if(!n.default)throw new Error("Popper does not have a child slot");ve(o,g=>{l.value=!0,ie(async()=>{g?f():v()})})}),{appendTo:s,root:a,render:l}},render(){if(this.render)return De("div",{ref:"root",onClick:e=>{e.preventDefault(),e.stopPropagation()},class:"absolute bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-2xl"},this.$slots.default?this.$slots.default():void 0)}});const an=B({components:{Popper:xe,Calendar:Ne,InputWrapper:Se,PhCaretDown:Ye,PhCalendar:Ct},props:{title:{type:String},hint:{type:String},modelValue:{type:Object},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n}){const o=c(),{modelValue:s}=q(e),a=c(!1),r=c(),l=c();Oe(r,f=>{a.value&&(l.value.wrapperRef.contains(f.target)&&(f.stopPropagation(),f.preventDefault()),y(),t("blur"))});const m=D({get(){return(s==null?void 0:s.value)?s.value:new Date},set(f){a.value=!1,t("update:modelValue",f),t("change",f),t("blur")}}),u=D(()=>{if(!m.value)return"Select date";const f=m.value;try{return f?G(f,"P"):"Unknown"}catch{return}});function y(){a.value===!0&&(a.value=!1,t("blur"))}return{attrs:n,refSelectContainer:o,open:a,props:e,displayDate:u,computedValue:m,closeDropdown:y,popperRef:r,inputWrapperRef:l}},methods:{}}),Ws=["id"],Fs={class:"min-w-0 truncate tabular-nums"};function Hs(e,t,n,o,s,a){var f,v;const r=T("PhCalendar"),l=T("PhCaretDown"),m=T("InputWrapper"),u=T("Calendar"),y=T("Popper");return i(),p(z,null,[M(m,{title:e.title,hint:e.hint,error:e.error,class:$([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:t[0]||(t[0]=ue(g=>e.open=!e.open,["stop"])),ref:"inputWrapperRef"},{default:Y(g=>[d("div",{class:$(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[M(r,{size:"20"})],2),d("div",se({id:g.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[d("div",Fs,I(e.displayDate),1)],16,Ws),d("div",{class:$(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(l,{size:14,weight:"bold",class:$(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed"]),((f=e.inputWrapperRef)==null?void 0:f.wrapperRef)?(i(),Q(y,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(v=e.inputWrapperRef)==null?void 0:v.wrapperRef,open:e.open,"onUpdate:open":t[2]||(t[2]=g=>e.open=g),options:{placement:"bottom-start"}},{default:Y(()=>[M(u,{modelValue:e.computedValue,"onUpdate:modelValue":t[1]||(t[1]=g=>e.computedValue=g)},null,8,["modelValue"])]),_:1},8,["append-to","open"])):S("",!0)],64)}var Qe=L(an,[["render",Hs]]);an.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"modelValue",type:{name:"Date"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var zs={parameters:{storySource:{source:`import DatePicker from './DatePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:21},startBody:{col:17,line:14},endBody:{col:2,line:21}}}}},title:"Ui/DatePicker",component:Qe,argTypes:{title:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const As=e=>({template:'<DatePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DatePicker>',components:{DatePicker:Qe},setup(){return{args:e}}}),Us=new Date,sn=c(Us),ln=As.bind({});ln.args={modelValue:sn,"onUpdate:modelValue":e=>{sn.value=e}};const qs=["Default"];var Gs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zs,Default:ln,__namedExportsOrder:qs});const un=B({components:{Calendar:Ne,Popper:xe,InputWrapper:Se,Button:$e,Checkbox:Re,DatePicker:Qe,PhCaretDown:Ye,PhCalendar:Ct,PhArrowLeft:Ao,PhArrowRight:Uo,PhClockCounterClockwise:qo},props:{title:{type:String},hint:{type:String},dateRange:{type:Object,required:!0},compareDateRange:{type:Object},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date},comparePerspectiveDate:{type:Date},enablePerspective:{type:Boolean,default:!1},error:{type:String},class:{type:String,default:"bg-gray-100 dark:bg-gray-600"},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},setup(e,{emit:t,attrs:n}){const{dateRange:o,compareDateRange:s,perspectiveDate:a,comparePerspectiveDate:r}=q(e),l=c(),m=c(!1),u=c(),y=c(),f=c(a.value),v=c(r.value),g=c(!1),P=c(),_=c(),h=c(!0),W=c(),x=D(()=>A.value.length>1),F=(C,E)=>E?G(C,"dd.MM.yyyy HH:mm:ss"):G(C,"dd.MM.yyyy"),J=D(()=>e.dateHistory||[]);let H=c();const A=c(s.value),R=D({get(){return A.value},set(C){A.value=C,t("update:compareDate",C),t("blur")}}),ee=D({get:()=>R.value.length>1,set:C=>{X(C)}}),de=D(()=>{if(!o.value)return"Select date";const C=o.value;try{return C.length>1?G(C[0],"P")+" - "+G(C[1],"P"):G(C[0],"P")+" - "+G(C[0],"P")}catch{return}});function te(){m.value===!0&&(m.value=!1,g.value=!1,t("blur"))}const X=C=>{C?P.value=C:(t("update:comparison-date",void 0),R.value=void 0)};Oe(W,C=>{m.value&&(u.value.wrapperRef.contains(C.target)&&(C.stopPropagation(),C.preventDefault()),te(),t("blur"))});const ce=()=>{H.value=o.value,m.value=!m.value},pe=()=>{P.value=!1},me=async()=>{t("update:dateRange",H.value),t("change",H.value),t("blur"),m.value=!1},be=C=>{h.value=C};return ve(f,C=>{t("update:perspectiveDate",C)}),ve(v,C=>{t("update:comparePerspectiveDate",C)}),{displayCompare:P,computedCompare:R,attrs:n,props:e,refSelectContainer:l,pickedCompare:x,open:m,displayDate:de,saveTime:me,tmpDateRange:H,dateConfig:_,closeDropdown:te,showCompare:X,comparePerspectiveOf:v,compareWith:ee,storeHistory:h,handleClick:ce,goBack:pe,mainCalendar:y,perspectiveOf:f,enabledHistory:g,dateHistory:J,formatDate:F,enableStoringHistory:be,inputWrapperRef:u,popperRef:W}},methods:{}}),Ys=["id"],Ks={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Js=d("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"}," Date range ",-1),Xs={key:0,class:"flex flex-col items-start gap-y-3"},Qs=d("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Zs={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-600"},el={key:1},tl={key:0,class:"flex flex-col items-start"},nl=d("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),ol={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-600"},rl=we("Apply time range");function al(e,t,n,o,s,a){var P,_;const r=T("PhCalendar"),l=T("PhCaretDown"),m=T("InputWrapper"),u=T("DatePicker"),y=T("Checkbox"),f=T("Calendar"),v=T("Button"),g=T("Popper");return i(),p(z,null,[M(m,{title:e.title,hint:e.hint,error:e.error,class:$([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,ref:"inputWrapperRef",onClick:ue(e.handleClick,["stop"])},{default:Y(h=>[d("div",{class:$(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[M(r,{size:"20"})],2),d("div",se({id:h.cuid,ref:"select",class:"flex h-full w-full items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[d("div",Ks,I(e.displayDate),1)],16,Ys),d("div",{class:$(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(l,{size:14,weight:"bold",class:$(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","readonly","condensed","onClick"]),((P=e.inputWrapperRef)==null?void 0:P.wrapperRef)?(i(),Q(g,{key:0,ref:"popperRef",class:"z-[100] origin-top-left","append-to":(_=e.inputWrapperRef)==null?void 0:_.wrapperRef,open:e.open,"onUpdate:open":t[7]||(t[7]=h=>e.open=h),options:{placement:"bottom-start"}},{default:Y(()=>[Js,d("div",null,[M(f,{ref:"mainCalendar",modelValue:e.tmpDateRange,"onUpdate:modelValue":t[2]||(t[2]=h=>e.tmpDateRange=h),"onClick:relativeDate":t[3]||(t[3]=h=>e.enableStoringHistory(!1))},{default:Y(()=>[e.enablePerspective?(i(),p("div",Xs,[d("div",null,[Qs,M(u,{placeholder:"Date",modelValue:e.perspectiveOf,"onUpdate:modelValue":t[0]||(t[0]=h=>e.perspectiveOf=h)},null,8,["modelValue"])]),e.enableComparison?(i(),Q(y,{key:0,modelValue:e.compareWith,"onUpdate:modelValue":t[1]||(t[1]=h=>e.compareWith=h),title:"Compare with"},null,8,["modelValue"])):S("",!0)])):S("",!0)]),_:1},8,["modelValue"])]),e.enableComparison?(i(),p("h3",Zs," Comparison date range ")):S("",!0),e.enableComparison?(i(),p("div",el,[M(f,{variant:"secondary",modelValue:e.computedCompare,"onUpdate:modelValue":t[5]||(t[5]=h=>e.computedCompare=h),"onClick:relativeDate":t[6]||(t[6]=h=>e.enableStoringHistory(!1))},{default:Y(()=>[e.enablePerspective?(i(),p("div",tl,[nl,M(u,{placeholder:"Date",modelValue:e.comparePerspectiveOf,"onUpdate:modelValue":t[4]||(t[4]=h=>e.comparePerspectiveOf=h)},null,8,["modelValue"])])):S("",!0)]),_:1},8,["modelValue"])])):S("",!0),d("div",ol,[M(v,{type:"primary",class:"ml-auto",onClick:e.saveTime},{default:Y(()=>[rl]),_:1},8,["onClick"])])]),_:1},8,["append-to","open"])):S("",!0)],64)}var dn=L(un,[["render",al]]);un.__docgenInfo={exportName:"default",displayName:"DaterangePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"hint",type:{name:"string"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"}},{name:"comparePerspectiveDate",type:{name:"date"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'bg-gray-100 dark:bg-gray-600'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};var sl={parameters:{storySource:{source:`import DaterangePicker from './DaterangePicker.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:24},startBody:{col:17,line:17},endBody:{col:2,line:24}}}}},title:"Ui/DaterangePicker",component:dn,argTypes:{condensed:{control:{type:"boolean"}},enableComparison:{control:{type:"boolean"}},enablePerspective:{control:{type:"boolean"}},perspectiveDate:{control:{type:"date"}},comparePerspectiveDate:{control:{type:"date"}},outline:{control:{type:"boolean"}}}};const ll=e=>({template:'<DaterangePicker class="p-2 col-span-2 sm:col-span-1" v-bind="args"></DaterangePicker>',components:{DaterangePicker:dn},setup(){return{args:e}}}),cn=[new Date,new Date],pn=c(cn),mn=c(cn),fn=ll.bind({});fn.args={dateRange:pn,"onUpdate:dateRange":e=>{pn.value=e},compareDateRange:mn,"onUpdate:compareDateRange":e=>{mn.value=e}};const il=["Default"];var ul=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sl,Default:fn,__namedExportsOrder:il});let j,Ze,et,tt,he;const nt=(e,t,n=void 0)=>{t.componentInstance?t.componentInstance.$emit(e,n):t.el.dispatchEvent(new CustomEvent(e,n))},dl=(e,t)=>{if(t.parentNode===e.parentNode){for(let n=e.previousSibling;n;n=n.previousSibling)if(n===t)return!0}return!1},gn=function(e,t){var n,o;if(nt("start",t,e),e.dataTransfer)e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",null);else if(this.getAttribute("draggable")!=="true")return;j=this,Ze=he.handleClass&&j.querySelector(`.${he.handleClass}`),et=Array.from((n=j==null?void 0:j.parentElement)==null?void 0:n.children).indexOf(j),(o=j==null?void 0:j.parentElement)==null||o.classList.add("drag")},yn=function(e){var n;if(!j)return;const t=Object.assign(this,{});e.type==="touchmove"&&(e.stopPropagation(),e.preventDefault(),Array.from(document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY)).forEach(o=>{var s;if(Array.from((s=j==null?void 0:j.parentElement)==null?void 0:s.children).indexOf(o)>=0)return o})),Array.from((n=j==null?void 0:j.parentElement)==null?void 0:n.children).indexOf(t)!==-1&&(j.classList.add(he.placeholderClass),dl(j,t)?t.parentNode.insertBefore(j,t):t.parentNode.insertBefore(j,t.nextSibling))},vn=(e,t)=>{var s,a;if(!j)return;nt("end",t,e),Ze&&j.setAttribute("draggable","false"),j.classList.remove(he.placeholderClass),(s=j==null?void 0:j.parentElement)==null||s.classList.remove("drag");const n=et,o=Array.from((a=j==null?void 0:j.parentElement)==null?void 0:a.children).indexOf(j);tt.splice(o,0,tt.splice(n,1)[0]),nt("change",t,{from:n,to:o}),setTimeout(()=>{j=null,et=null,Ze=null},0)},hn=(e,t)=>{const n=he.handleClass&&e.querySelector(`.${he.handleClass}`);n?(n.onmousedown=o=>{e.setAttribute("draggable","true")},n.ontouchstart=o=>{e.parentElement.classList.add("drag"),e.setAttribute("draggable","true")},n.onmouseup=o=>{e.setAttribute("draggable","false")},n.ontouchend=o=>{e.parentElement.classList.remove("drag"),e.setAttribute("draggable","false")},e.ondragend=o=>{o.target.setAttribute("draggable","false")}):e.setAttribute("draggable","true"),e.ondragstart=o=>gn.bind(e,o,t)(),e.ondragenter=yn,e.ondragend=o=>vn.bind(e,o,t)(),e.ontouchstart=o=>gn.bind(e,o,t)(),e.ontouchmove=yn,e.ontouchend=o=>vn.bind(e,o,t)()};var cl={mounted:(e,t,n)=>{let o=t.value.depth||0;for(;o;)e=e.firstElementChild,o--;try{if((t.value&&t.value.value)===void 0)throw new Error("A binding `value` property is not set.");if(!Array.isArray(t.value.value))throw new Error("`value` property value should be an array.")}catch(s){return console.error(s)}tt=t.value&&t.value.value,he={handleClass:t.value&&t.value.handle||"",placeholderClass:t.value&&t.value.placeholderClass||"v-draggable__placeholder"},Array.from(e.children).forEach(s=>hn(s,n)),e.addEventListener("DOMNodeInserted",function(s){j||s.target.nodeType===Node.ELEMENT_NODE&&Array.from(this.children).indexOf(s.target)!==-1&&hn(s.target,n)})}};const bn=B({directives:{draggable:cl},emits:["update:modelValue"],props:{modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const{modelValue:n}=q(e),o=D({get:()=>n.value,set:s=>{t("update:modelValue",s)}});return ie(()=>{console.log("alo")}),{list:o}}});function pl(e,t,n,o,s,a){const r=Go("draggable");return le((i(),p("div",null,[(i(!0),p(z,null,Z(e.list,l=>(i(),p("div",{key:l},[N(e.$slots,"element",{item:l})]))),128))])),[[r,{value:e.list}]])}var kn=L(bn,[["render",pl]]);bn.__docgenInfo={exportName:"default",displayName:"Draggable",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"element",scoped:!0,bindings:[{name:"item",title:"binding"}]}]};var ml={parameters:{storySource:{source:`import Draggable from './Draggable.vue'
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
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:50},startBody:{col:17,line:29},endBody:{col:2,line:50}}}}},title:"Ui/Draggable",component:kn,argTypes:{variant:{control:{type:"select",options:["primary","warn","muted"]}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"array"},default:[{name:"test",value:1},{name:"john",value:"doe"}]}}};const fl=e=>({template:`
  <Draggable v-bind="args" v-model="list">
    <template #element="{item}" class="cursor-pointer">
      {{item.name}}
    </template>
  </Draggable>`,components:{Draggable:kn},setup(){let t=c([{name:"test",value:1},{name:"john",value:"doe"}]);return{args:e,list:t}}}),gl=fl.bind({}),yl=["Default"];var vl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ml,Default:gl,__namedExportsOrder:yl});const wn=B({props:{widget:{type:Object},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){const{widget:n}=q(e),o=D(()=>{var s,a,r,l,m;return{"gs-id":(s=n.value)==null?void 0:s.id,"gs-x":(a=n.value)==null?void 0:a.gridstack.x,"gs-y":(r=n.value)==null?void 0:r.gridstack.y,"gs-w":(l=n.value)==null?void 0:l.gridstack.w,"gs-h":(m=n.value)==null?void 0:m.gridstack.h,"gs-no-move":e.locked,"gs-no-resize":e.locked}});return{props:e,widgetAttributes:o}}}),hl={class:"grid-stack-item-content bg-gray-300"};function bl(e,t,n,o,s,a){return i(),p("div",se({class:"grid-stack-item"},e.widgetAttributes),[d("div",hl,[we(I(e.widget.id)+" "+I(e.widget.gridstack)+" ",1),(i(),Q(Ae(e.widget.component),{options:e.widget.options},null,8,["options"]))])],16)}var kl=L(wn,[["render",bl]]);wn.__docgenInfo={exportName:"default",displayName:"GridItem",description:"",tags:{},props:[{name:"widget",type:{name:"Widget"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const Dn=B({components:{GridItem:kl},props:{widgets:{type:Array},locked:{type:Boolean,default:!1}},setup(e,{emit:t}){let{widgets:n}=q(e),o,s=c();return oe(()=>{console.log("mounting"),o=Yo.GridStack.init({cellHeight:256,column:8,acceptWidgets:!0},s.value),o.on("change",(a,r)=>{!n.value||([...n.value],Array.isArray(r)&&n.value.forEach(l=>{let m=r.find(u=>u.id===l.id);m&&(l.gridstack=ht(ze({},l.gridstack),{x:m.x,y:m.y,w:m.w,h:m.h}))}),t("update:widgets",n))})}),{gridContainer:s}}}),wl={ref:"gridContainer",class:"grid-stack bg-gray-200"};function Dl(e,t,n,o,s,a){const r=T("GridItem");return i(),p("div",null,[we(I(e.locked)+" ",1),d("section",wl,[(i(!0),p(z,null,Z(e.widgets,l=>(i(),Q(r,{key:l.id,widget:l,locked:e.locked},null,8,["widget","locked"]))),128))],512)])}var $n=L(Dn,[["render",Dl]]);Dn.__docgenInfo={exportName:"default",displayName:"Grid",description:"",tags:{},props:[{name:"widgets",type:{name:"Array<Widget>"}},{name:"locked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var $l={title:"Ui/Grid",component:$n,parameters:{storySource:{source:`import Grid from './Grid.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:30},endLoc:{col:2,line:72},startBody:{col:24,line:30},endBody:{col:2,line:72}}}},layout:"fullscreen"},argTypes:{locked:{control:{type:"boolean",default:!1}}}};let Sn=B({props:{options:{type:Object}},render(e){return"hi"+JSON.stringify(this.options)}});const Sl=e=>({template:'<Grid class="w-full" v-model:widgets="widgets" v-bind="args" />',components:{Grid:$n},setup(){let t=c([{id:"test",component:Tt(Sn),options:{key:"one"},gridstack:{x:1,y:0,w:3,h:1}},{id:"test1",component:Tt(Sn),options:{key:"one"},gridstack:{x:4,y:4,w:2,h:4}}]);return ve(t,()=>{console.log("widgets update",t)}),{args:e,widgets:t}}}),_l=Sl.bind(),xl=["Default"];var Cl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$l,Default:_l,__namedExportsOrder:xl}),We=B({props:{src:{type:String,required:!0},fallbackSrc:{type:String}},setup(e,{emit:t}){const n=c(!0),o=c(!1),s=new Image;return s.onload=()=>{t("loaded",!0),n.value=!1},s.onerror=a=>{t("error",a),o.value=!0,n.value=!1},oe(()=>{s.src=e.src}),{error:o,loading:n}},render(){return this.loading?De("div",{class:"flex items-center justify-center"},De(Ee,{size:24,stroke:2})):this.error?this.fallbackSrc?De("img",{src:this.fallbackSrc}):De(Ge,{size:20}):De("img",{src:this.src})}}),Tl={parameters:{storySource:{source:`import Img from './Img'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:24},startBody:{col:24,line:17},endBody:{col:2,line:24}},broken:{startLoc:{col:23,line:32},endLoc:{col:2,line:39},startBody:{col:23,line:32},endBody:{col:2,line:39}},fallback:{startLoc:{col:25,line:47},endLoc:{col:2,line:54},startBody:{col:25,line:47},endBody:{col:2,line:54}}}}},title:"Ui/Img",component:We,argTypes:{onImg:{action:"Img"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const Pl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb41ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" v-bind="args"/>',components:{Img:We},setup(){return{args:e}}}),_n=Pl.bind();_n.args={title:"Img title"};const Bl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" v-bind="args"/>',components:{Img:We},setup(){return{args:e}}}),xn=Bl.bind();xn.args={title:"Img title"};const Vl=e=>({template:'<Img src="https://images.unsplash.com/photo-1643103546016-a8f75dfb4" fallback-src="https://images.unsplash.com/photo-1523626752472-b55a628f1acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"  v-bind="args"/>',components:{Img:We},setup(){return{args:e}}}),Cn=Vl.bind();Cn.args={title:"Img title"};const Il=["Default","Broken","Fallback"];var Ml=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tl,Default:_n,Broken:xn,Fallback:Cn,__namedExportsOrder:Il}),jl={parameters:{storySource:{source:`import Input from './Input.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Input",component:Je,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const ot=e=>({template:'<Input v-bind="args"/>',components:{Input:Je},setup(){return{args:e}}}),Tn=ot.bind();Tn.args={title:"Input title"};const Pn=ot.bind();Pn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Bn=ot.bind();Bn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Ll=["Default","Hint","ErrorHint"];var Ol=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jl,Default:Tn,Hint:Pn,ErrorHint:Bn,__namedExportsOrder:Ll}),El={parameters:{storySource:{source:`import InputWrapper from './InputWrapper.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},hint:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}},"error-hint":{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/InputWrapper",component:Se,argTypes:{condensed:{control:{type:"boolean"}},outline:{control:{type:"boolean"}}}};const rt=e=>({template:'<InputWrapper v-bind="args"></InputWrapper>',components:{InputWrapper:Se},setup(){return{args:e}}}),Vn=rt.bind();Vn.args={title:"Input title",outline:!1};const In=rt.bind();In.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",outline:!1};const Mn=rt.bind();Mn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const Nl=["Default","Hint","ErrorHint"];var Rl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:El,Default:Vn,Hint:In,ErrorHint:Mn,__namedExportsOrder:Nl});const jn=B({props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(e){const{height:t,progress:n}=q(e),o=D(()=>`height:${t.value}px`),s=D(()=>`width:clamp(${t.value}px, ${n.value}%, 100%);`);return{heightComputed:o,widthComputed:s}}});function Wl(e,t,n,o,s,a){return i(),p("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-200",style:K([e.heightComputed])},[d("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:K([e.widthComputed])},null,4)],4)}var Ln=L(jn,[["render",Wl]]);jn.__docgenInfo={exportName:"default",displayName:"LinearProgress",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};var Fl={parameters:{storySource:{source:`import LinearProgress from './LinearProgress.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:2,line:17},startBody:{col:24,line:11},endBody:{col:2,line:17}}}}},title:"Ui/LinearProgress",component:Ln,argTypes:{progress:{control:{type:"number"}}}};const Hl=e=>({template:'<LinearProgress v-bind="args" />',components:{LinearProgress:Ln},setup(){return{args:e}}}),zl=Hl.bind(),Al=["Default"];var Ul=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fl,Default:zl,__namedExportsOrder:Al});let Ce,at,st,lt,it,ut,dt,ct,pt,Be;const On=e=>{const t=e||navigator.userAgent,n=/(iPad).*OS\s([\d_]+)/.test(t),o=!n&&/(iPhone\sOS)\s([\d_]+)/.test(t);return/(Android);?[\s/]+([\d.]+)?/.test(t)||o||n},ql=()=>{const e=document.body,t=window.innerWidth-e.clientWidth;Ce=e.style.overflow,at=e.style.boxSizing,st=e.style.paddingRight,e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight=`${t+e.style.paddingRight}px`},Gl=()=>{const e=document.body;e.style.overflow=Ce,e.style.boxSizing=at,e.style.paddingRight=st,Ce="",at="",st=""},Yl=()=>{const e=document.documentElement,t=document.body;Be=e.scrollTop||t.scrollTop,lt=e.style.height,it=e.style.overflow,ut=t.style.top,dt=t.style.width,ct=t.style.height,pt=t.style.position,Ce=t.style.overflow,e.style.height="100%",e.style.overflow="hidden",t.style.top=`-${Be}px`,t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden"},Kl=()=>{const e="scrollBehavior"in document.documentElement.style,t=document.documentElement,n=document.body;t.style.height=lt,t.style.overflow=it,n.style.top=ut,n.style.width=dt,n.style.height=ct,n.style.position=pt,n.style.overflow=Ce,e?window.scrollTo({top:Be,behavior:"auto"}):window.scrollTo(0,Be),Ce="",lt="",it="",ut="",dt="",ct="",pt="",Be=""},Jl=()=>{On()&&Yl(),ql()},Xl=()=>{On()&&Kl(),Gl()};const En=B({inheritAttrs:!1,props:{modalClass:{type:String}},setup(e,{emit:t}){const n=c(!1);ve(n,a=>{a?Jl():Xl()});async function o(){n.value=!0,t("open")}async function s(){n.value=!1,t("close")}return{open:o,close:s,modalOpen:n}}}),Ql={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24"},Zl={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},ei={class:"leading-4"};function ti(e,t,n,o,s,a){const r=T("ph-x");return i(),Q(Jo,{to:"#modal-area"},[M(Ko,se(e.$attrs,{name:"slide"}),{default:Y(()=>[e.modalOpen?(i(),p("div",Ql,[d("div",{class:"modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90",onClick:t[0]||(t[0]=ue((...l)=>e.close&&e.close(...l),["self"]))}),d("div",{class:"modal-box mx-auto h-full min-h-0 max-w-lg",onKeydown:t[2]||(t[2]=Te((...l)=>e.close&&e.close(...l),["esc"]))},[d("div",{class:$(["relative flex max-h-full min-h-0 w-full flex-col rounded-md bg-white shadow-xl dark:bg-gray-700",[e.modalClass]])},[e.$slots.title?(i(),p("div",Zl,[d("div",ei,[N(e.$slots,"title",{},void 0,!0)]),d("div",{class:"ml-auto cursor-pointer",onClick:t[1]||(t[1]=(...l)=>e.close&&e.close(...l))},[M(r,{size:"20",class:"block"})])])):S("",!0),N(e.$slots,"default",{},void 0,!0)],2)],32)],512)):S("",!0)]),_:3},16)])}var Nn=L(En,[["render",ti],["__scopeId","data-v-487d190d"]]);En.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"}}],slots:[{name:"title"},{name:"default"}]};var ni={parameters:{storySource:{source:`import Modal from './Modal.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Modal",component:Nn,argTypes:{onModal:{action:"Modal"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const oi=e=>({template:'<Modal v-bind="args">test</Modal>',components:{Modal:Nn},setup(){return{args:e}}}),Rn=oi.bind();Rn.args={title:"Modal title"};const ri=["Default"];var ai=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ni,Default:Rn,__namedExportsOrder:ri}),si={info:"border-primary-500 bg-primary-500/20 text-primary-900",warning:"border-yellow-600 bg-yellow-500/20 text-yellow-900",error:"border-pink-500 bg-pink-500/20 text-pink-900",success:"border-emerald-500 bg-emerald-500/20 text-emerald-900"};const Wn=B({props:{variant:{type:String,default:"info"}},setup(e){return{computedClass:D(()=>si[e.variant])}}});function li(e,t,n,o,s,a){return i(),p("div",{class:$([e.computedClass,"mb-4 border-l-4 p-4"])},[N(e.$slots,"default")],2)}var Fn=L(Wn,[["render",li]]);Wn.__docgenInfo={exportName:"default",displayName:"Notice",description:"",tags:{},props:[{name:"variant",values:["info","warning","error","success"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}}],slots:[{name:"default"}]};var ii={parameters:{storySource:{source:`import Notice from './Notice.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Notice",component:Fn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const ui=e=>({template:'<Notice v-bind="args" >This is a notice</Notice>',components:{Notice:Fn},setup(){return{args:e}}}),di=ui.bind(),ci=["Default"];var pi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ii,Default:di,__namedExportsOrder:ci}),mi={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Popper",component:xe,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const fi=e=>({template:'<Popper v-bind="args" v-model="value">ldsajfk</Popper>',components:{Popper:xe},setup(){const t=c(!1);return{args:e,value:t}}}),Hn=fi.bind({});Hn.args={title:"Popper title",description:"Popper description text to be placed here"};const gi=["Default"];var yi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mi,Default:Hn,__namedExportsOrder:gi});let vi=0;const zn=B({props:{modelValue:{type:[String,Number,Boolean,Object]},value:{type:[String,Number,Boolean,Object]},title:{type:String,default:""}},setup(e,{emit:t,attrs:n}){const o=(++vi).toString(),s=D({get(){return e.modelValue===e.value},set(){let a=e.modelValue;a=e.value,t("update:modelValue",a),t("change",a)}});return{cuid:o,isChecked:s,attrs:n}}}),hi={class:"inline-block"},bi=["id"],ki=["for"],wi={key:0,class:"w-full select-none leading-4"};function Di(e,t,n,o,s,a){return i(),p("div",hi,[le(d("input",{id:`radio_${e.cuid}`,"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),type:"radio",class:"hidden"},null,8,bi),[[Xo,e.isChecked]]),d("label",{for:`radio_${e.cuid}`,class:$([[e.$slots.title?"items-start":"items-center"],"flex cursor-pointer items-center"])},[d("div",{class:$(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-100",[e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-600"]])},[d("div",{class:$([[e.isChecked?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),e.title&&!e.$slots.title?(i(),p("div",wi,I(e.title),1)):S("",!0),d("div",null,[e.$slots.title?N(e.$slots,"title",{key:0}):S("",!0)])],10,ki)])}var An=L(zn,[["render",Di]]);zn.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"}},{name:"value",type:{name:"string|number|boolean|object"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"}]};var $i={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:23},startBody:{col:24,line:12},endBody:{col:2,line:23}}}}},title:"Ui/Radio",component:An,argTypes:{title:{control:{type:"text"}}}};const Si=e=>({template:`
    <div><Radio value="test" title="Radio title 1" v-model="value"/></div>
    <div><Radio value="arg" title="Radio title 2" v-model="value"/></div>
    <div><Radio value="more" title="Radio title 3" v-model="value"/></div>
    `,components:{Radio:An},setup(){const t=c("test");return{args:e,value:t}}}),Un=Si.bind({});Un.args={title:"Radio title"};const _i=["Default"];var xi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$i,Default:Un,__namedExportsOrder:_i});const qn=B({components:{Popper:xe,InputWrapper:Se,PhCheck:Qo,PhCaretDown:Ye},inheritAttrs:!1,props:{title:{type:String},zIndex:{type:String,default:"z-[50]"},hint:{type:String},error:{type:String},class:{type:String},modelValue:{type:[String,Boolean,Number]},options:{type:Array,required:!0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchFunction:{type:Function}},setup(e,{emit:t,attrs:n}){const o=c(),s=c(),{options:a}=q(e),r=c(!1),l=c(),m=c(),u=c("");let y=c([]);async function f(x){e.searchFunction!==void 0&&(y.value=await e.searchFunction(x)),x===""?y.value=a.value:y.value=a.value.filter(F=>F.title.toLowerCase().substring(0,x.length)===x.toLowerCase())}Zo(u,async x=>{await f(x)},{debounce:150}),oe(async()=>{await f("")});const v=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:x=>{x.state.styles.popper.width=`${Math.max(x.state.rects.reference.width,200)}px`},effect:x=>{x.state.elements.popper.style.width=`${x.state.elements.reference.getBoundingClientRect().width}px`}}],g=D(()=>e.options.find(x=>x.value===e.modelValue));function P(x){ie(()=>{h()}),t("update:modelValue",x.value),t("change",x.value)}function _(){r.value=!0,ie(()=>{s.value.focus()}),t("focus")}Oe(l,x=>{r.value&&(m.value.wrapperRef.contains(x.target)&&(x.stopPropagation(),x.preventDefault()),W(),h(),t("blur"))});function h(){r.value=!1}function W(){u.value=""}return{refSelectInput:s,refSelectContainer:o,closeDropdown:h,open:r,props:e,openDropdown:_,inputWrapper:m,popperModifiers:v,activeItem:g,selectItem:P,computedOptions:y,resetFields:W,attrs:n,search:u,popperRef:l}}}),Ci=["id"],Ti={class:"min-w-0 select-none truncate"},Pi={key:0,class:"max-h-72 overflow-auto"},Bi=["onClick"],Vi={key:1,class:"py-2 text-center text-gray-400"};function Ii(e,t,n,o,s,a){var y,f;const r=T("PhCaretDown"),l=T("InputWrapper"),m=T("PhCheck"),u=T("Popper");return i(),p(z,null,[M(l,{ref:"inputWrapper",title:e.title,hint:e.hint,error:e.error,class:$([e.$props.class,"cursor-pointer"]),readonly:e.readonly,condensed:e.condensed,onClick:e.openDropdown,onFocus:e.openDropdown,onBlur:e.closeDropdown},{default:Y(v=>[e.$slots.prefix?(i(),p("div",{key:0,class:$(["flex h-full items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[N(e.$slots,"prefix",{tag:"div"})],2)):S("",!0),le(d("div",se({id:v.cuid,ref:"select",class:["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]]},e.attrs),[d("div",Ti,I(e.activeItem?e.activeItem.title:"Select"),1)],16,Ci),[[Ke,!e.open]]),le(d("input",{ref:"refSelectInput","onUpdate:modelValue":t[0]||(t[0]=g=>e.search=g),size:"1",class:$(["block h-full w-full bg-transparent text-current outline-none",[e.$slots.prefix||e.condensed?"pl-2":"pl-3"]])},null,2),[[Ke,e.open],[St,e.search]]),d("div",{class:$(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[e.condensed?"pl-2":"pl-3"]])},[M(r,{size:14,weight:"bold",class:$(["transition-transform duration-200",{"rotate-180 transform":e.open}])},null,8,["class"])],2)]),_:3},8,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),((y=e.inputWrapper)==null?void 0:y.wrapperRef)?(i(),Q(u,{key:0,open:e.open,"onUpdate:open":t[1]||(t[1]=v=>e.open=v),ref:"popperRef",class:"z-[100] origin-top","append-to":(f=e.inputWrapper)==null?void 0:f.wrapperRef,modifiers:e.popperModifiers,options:{placement:"bottom-start"},onClosed:e.resetFields},{default:Y(()=>[e.computedOptions.length>0?(i(),p("ul",Pi,[(i(!0),p(z,null,Z(e.computedOptions,v=>(i(),p("li",{key:v.value,class:"flex cursor-pointer items-center px-4 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",onClick:g=>e.selectItem(v)},[d("span",null,I(v.title),1),e.modelValue===v.value?(i(),Q(m,{key:0,class:"ml-auto text-gray-400",weight:"bold",size:"14"})):S("",!0)],8,Bi))),128))])):(i(),p("div",Vi,"No options"))]),_:1},8,["open","append-to","modifiers","onClosed"])):S("",!0)],64)}var Gn=L(qn,[["render",Ii]]);qn.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"zIndex",type:{name:"string"},defaultValue:{func:!1,value:"'z-[50]'"}},{name:"hint",type:{name:"string"}},{name:"error",type:{name:"string"}},{name:"class",type:{name:"string"}},{name:"modelValue",type:{name:"string|boolean|number"}},{name:"options",type:{name:"Array<{ title: string; value: string | number }>"},required:!0},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchFunction",type:{name:"func"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};var Mi={parameters:{storySource:{source:`import Select from './Select.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}},hint:{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}},"error-hint":{startLoc:{col:24,line:16},endLoc:{col:2,line:52},startBody:{col:24,line:16},endBody:{col:2,line:52}}}}},title:"Ui/Select",component:Gn,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const mt=e=>({template:'<Select v-bind="args" :options="options" v-model="value"/><br/>Value: {{value}}',components:{Select:Gn},setup(){let t=c(void 0),n=c([{title:"Item 1",value:!0},{title:"Item 2",value:!1},{title:"Item 3",value:"test"},{title:"Hello",value:12},{title:"Bye",value:0}]);return{value:t,options:n,args:e}}}),Yn=mt.bind();Yn.args={title:"Input title"};const Kn=mt.bind();Kn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const Jn=mt.bind();Jn.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const ji=["Default","Hint","ErrorHint"];var Li=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mi,Default:Yn,Hint:Kn,ErrorHint:Jn,__namedExportsOrder:ji});const Xn=B({props:{name:String,tabindex:[String,Number],icon:String,modelValue:{type:Number,required:!0},value:{type:Number},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:[String,Number],disabled:{type:Boolean,default:!1}},setup(e,{emit:t}){const n=c(e.modelValue),o=c(!1),s=c(!1),a=c(e.modelValue),r=c(),l=c(),m=c(),u=D(()=>[{"is-dragging":s.value},{"is-disabled":e.disabled},{"is-active":o.value},{"has-icon":y},{"has-marker":e.showMarker}]),y=D(()=>Boolean(e.icon)),f=D(()=>({transform:"scaleX("+ke(a.value)+")"})),v=D(()=>({left:ke(a.value)*100+"%"})),g=D(()=>e.markerValue===void 0?e.modelValue:e.markerValue),P=D(()=>{const b=[];let U=e.step*Math.ceil(_()/e.step);for(;U<=h();)b.push(U),U+=e.step;return b}),_=()=>e.max>e.min?e.min:0,h=()=>e.max>e.min?e.max:100,W=()=>{r.value.focus()},x=()=>{R(n)},F=()=>{o.value=!0,t("focus")},J=()=>{o.value=!1,t("blur")},H=b=>{r.value.contains(b.target)||J()},A=b=>{b=fe(b),e.snapToSteps&&(b=Ve(b)),R(b)},R=b=>{b=fe(b),b!==a.value&&(a.value=b,t("update:modelValue",b),t("change",b))},ee=()=>{A(a.value+e.step)},de=()=>{A(a.value-e.step)},te=()=>{let b=l.value,U=b.offsetLeft;for(;b.offsetParent;)b=b.offsetParent,U+=b.offsetLeft;return U},X=b=>({left:b+"%"}),ce=()=>{document.addEventListener("touchend",k),document.addEventListener("mouseup",k),document.addEventListener("click",H),document.addEventListener("touchstart",H),me()},pe=()=>{document.removeEventListener("touchend",k),document.removeEventListener("mouseup",k),document.removeEventListener("click",H)},me=()=>{const b=fe(a.value?a.value:0);R(b)},be=b=>{e.disabled||(o.value||F(),s.value=!0,E(b),document.addEventListener("touchmove",C),document.addEventListener("mousemove",C),t("dragstart",a.value,b))},C=b=>{E(b)},E=b=>{const U=b.touches?b.touches[0].pageX:b.pageX,ae=l.value.offsetWidth,ge=(U-te())/ae,Fe=fe(_()+ge*(h()-_()));s.value&&R(Math.round(Fe))},k=b=>{s.value&&(s.value=!1,e.snapToSteps&&e.modelValue%e.step!=0&&A(e.modelValue),document.removeEventListener("touchmove",C),document.removeEventListener("mousemove",C),t("dragend",a.value,b))},Ve=b=>{const U=Math.floor(b/e.step)*e.step,ae=U+e.step,ge=(U+ae)/2;return U<_()?ae>h()?b:ae:b>=ge&&ae<=h()?ae:U},ke=b=>(b-_())/(h()-_()),fe=b=>b<_()?_():b>h()?h():b;return oe(()=>{ce()}),er(()=>{pe()}),{slider:r,track:l,thumb:m,initialValue:n,isActive:o,isDragging:s,localValue:a,classes:u,hasIcon:y,fillStyle:f,thumbStyle:v,markerText:g,snapPoints:P,moderatedMin:_,moderatedMax:h,focus:W,reset:x,onFocus:F,onBlur:J,onExternalClick:H,setValueWithSnap:A,setValue:R,incrementValue:ee,decrementValue:de,getTrackOffset:te,getPointStyle:X,initializeSlider:ce,teardownSlider:pe,initializeDrag:me,onDragStart:be,onDragMove:C,dragUpdate:E,onDragStop:k,getNearestSnapPoint:Ve,relativeValue:ke,moderateValue:fe}}}),Oi=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex"],Ei=["name","value"],Ni={key:1,class:"base-slider__icon"},Ri={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},Wi={key:0},Fi={key:0,class:"base-slider__marker text-xs"},Hi=d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36",height:"36"},[d("path",{d:"M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"})],-1),zi={class:"base-slider__marker-text text-xs"};function Ai(e,t,n,o,s,a){const r=T("feather");return i(),p("div",{ref:"slider",class:$(["base-slider",e.classes]),role:"slider","aria-valuemax":e.moderatedMax(),"aria-valuemin":e.moderatedMin(),"aria-valuenow":e.localValue,tabindex:e.disabled?null:e.tabindex||"0",onBlur:t[2]||(t[2]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[3]||(t[3]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:[t[4]||(t[4]=Te(ue((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["down"])),t[5]||(t[5]=Te(ue((...l)=>e.decrementValue&&e.decrementValue(...l),["prevent"]),["left"])),t[6]||(t[6]=Te(ue((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["right"])),t[7]||(t[7]=Te(ue((...l)=>e.incrementValue&&e.incrementValue(...l),["prevent"]),["up"]))]},[e.name?(i(),p("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:e.name,value:e.value},null,8,Ei)):S("",!0),e.hasIcon?(i(),p("div",Ni,[N(e.$slots,"icon",{},()=>[M(r,{type:e.icon,size:"20"},null,8,["type"])])])):S("",!0),d("div",{ref:"track",class:"base-slider__track",onMousedown:t[0]||(t[0]=(...l)=>e.onDragStart&&e.onDragStart(...l)),onTouchstart:t[1]||(t[1]=(...l)=>e.onDragStart&&e.onDragStart(...l))},[d("div",Ri,[e.snapToSteps?(i(),p("div",Wi,[(i(!0),p(z,null,Z(e.snapPoints,(l,m)=>(i(),p("span",{key:m,class:"base-slider__snap-point",style:K({left:100*e.relativeValue(l)+"%"})},null,4))),128))])):S("",!0)]),d("div",{class:"base-slider__track-fill bg-primary-400",style:K(e.fillStyle)},null,4),d("div",{ref:"thumb",class:"base-slider__thumb bg-primary-400",style:K(e.thumbStyle)},[e.showMarker?(i(),p("div",Fi,[Hi,d("span",zi,I(e.markerText),1)])):S("",!0)],4)],544)],42,Oi)}var Qn=L(Xn,[["render",Ai]]);Xn.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"name",type:{name:"string"}},{name:"tabindex",type:{name:"string|number"}},{name:"icon",type:{name:"string"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"value",type:{name:"number"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"}]};var Ui={parameters:{storySource:{source:`import Slider from './Slider.vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:18},startBody:{col:24,line:12},endBody:{col:2,line:18}}}}},title:"Ui/Slider",component:Qn,argTypes:{title:{control:{type:"text",default:"Title"}}}};const qi=e=>({template:'<Slider v-bind="args" />',components:{Slider:Qn},setup(){return{args:e}}}),Zn=qi.bind();Zn.args={title:"Input title",description:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",icon:Ge};const Gi=["Default"];var Yi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ui,Default:Zn,__namedExportsOrder:Gi}),Ki={parameters:{storySource:{source:`import Spinner from './Spinner.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:9},endLoc:{col:2,line:15},startBody:{col:24,line:9},endBody:{col:2,line:15}}}}},title:"Ui/Spinner",component:Ee,argTypes:{}};const Ji=e=>({template:"<Spinner />",components:{Spinner:Ee},setup(){return{args:e}}}),Xi=Ji.bind(),Qi=["Default"];var Zi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ki,Default:Xi,__namedExportsOrder:Qi});const eo=B({props:{title:{type:String,required:!1},description:{type:String,required:!1},modelValue:{type:[Boolean,Number,String,Object],required:!0}},setup(e,{emit:t}){const{modelValue:n}=q(e);return{isChecked:D({get:()=>n.value,set:s=>{t("update:modelValue",s)}})}}}),eu={class:"flex cursor-pointer items-center gap-x-3"},tu={key:0},nu={class:"text-sm text-gray-400"};function ou(e,t,n,o,s,a){return i(),p("label",eu,[le(d("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.isChecked=r),class:"hidden",type:"checkbox"},null,512),[[Dt,e.isChecked]]),d("div",{class:$(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",e.isChecked?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"])},[d("div",{class:$(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[e.isChecked?"translate-x-4":""]])},null,2)],2),e.title?(i(),p("div",tu,[d("div",null,I(e.title),1),d("div",nu,I(e.description),1)])):S("",!0)])}var to=L(eo,[["render",ou]]);eo.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}]};var ru={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:20},startBody:{col:24,line:13},endBody:{col:2,line:20}}}}},title:"Ui/Switch",component:to,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const au=e=>({template:'<Switch v-bind="args" v-model="value"></Switch>',components:{Switch:to},setup(){const t=c(!1);return{args:e,value:t}}}),no=au.bind({});no.args={title:"Switch title",description:"Switch description text to be placed here"};const su=["Default"];var lu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ru,Default:no,__namedExportsOrder:su});const oo=B({props:{tabs:{type:Array,required:!0},modelValue:{required:!0}},setup(e,{emit:t}){const n=c(),o=c([]),s=r=>{var l;(l=o.value)==null||l.push(r)};return oe(()=>{const r=o.value.find(l=>l.dataset.value===e.modelValue);r&&(console.log(r),r.scrollIntoView({behavior:"smooth",block:"end"}))}),{select:r=>{t("update:modelValue",r)},root:n,registerTab:s}}}),iu={ref:"root",class:"relative flex select-none justify-start overflow-x-auto"},uu=["data-value"],du=["onClick"],cu=d("div",{class:"flex-1 border-b-2 dark:border-gray-600"},null,-1);function pu(e,t,n,o,s,a){return i(),p("div",iu,[(i(!0),p(z,null,Z(e.tabs,r=>(i(),p("div",{key:r.value,ref_for:!0,ref:e.registerTab,"data-value":r.value,class:$(["whitespace-no-wrap flex-shrink-0 cursor-pointer border-b-2 font-medium",[r.value===e.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-600 dark:text-gray-500"]])},[N(e.$slots,"tab",{tab:r,select:()=>e.select(r.value)},()=>[d("div",{class:"px-4 py-3",onClick:()=>e.select(r.value)},I(r.title),9,du)])],10,uu))),128)),cu],512)}var ft=L(oo,[["render",pu]]);oo.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",required:!0}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};var mu={parameters:{storySource:{source:`import { ref } from '@vue/reactivity'
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
`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:2,line:19},startBody:{col:24,line:12},endBody:{col:2,line:19}},slotted:{startLoc:{col:21,line:40},endLoc:{col:2,line:57},startBody:{col:21,line:40},endBody:{col:2,line:57}}}}},title:"Ui/Tabs",component:ft,argTypes:{rounded:{control:{type:"boolean"}}}};const fu=e=>({template:'<Tabs v-bind="args" v-model="value"></Tabs>',components:{Tabs:ft},setup(){const t=c("item_1");return{args:e,value:t}}}),ro=fu.bind();ro.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const gu=e=>({template:`<Tabs v-bind="args" v-model="value">
  <template v-slot:tab="data">
  <div @click="data.select" class="px-4 py-3 flex items-center">
  <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
  <div>
  {{data.tab.title}}
  </div>
  </div>
  </template>

  </Tabs>`,components:{Tabs:ft},setup(){const t=c("item_1");return{args:e,value:t}}}),ao=gu.bind();ao.args={tabs:[{title:"Item 1",value:"item_1"},{title:"Item 2",value:"item_2"},{title:"Super long label that migh overflow on mobile",value:"item_3"}]};const yu=["Default","Slotted"];var vu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mu,Default:ro,Slotted:ao,__namedExportsOrder:yu});const so=B({inheritAttrs:!1,model:{event:"update"},props:{label:{type:String},small:{type:Boolean},prefix:{type:String},suffix:{type:String},helper:{type:String}},setup(e,{emit:t}){return{onInput:o=>{t("update",o.value)}}}}),hu={class:"input-container"},bu={class:"label-name"},ku={class:"input-section"},wu={key:0,class:"helper"};function Du(e,t,n,o,s,a){return i(),p("div",hu,[d("label",null,[d("span",bu,I(e.label),1),d("div",ku,[e.prefix?(i(),p("div",{key:0,class:$(["prefix",{small:e.small}])},I(e.prefix),3)):S("",!0),d("textarea",se(e.$attrs,{class:{small:e.small,prefixed:e.prefix,suffixed:e.suffix},onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r))}),null,16),e.suffix?(i(),p("div",{key:1,class:$(["suffix",{small:e.small}])},I(e.suffix),3)):S("",!0)]),e.helper?(i(),p("div",wu,I(e.helper),1)):S("",!0)])])}var $u=L(so,[["render",Du],["__scopeId","data-v-03bce853"]]);so.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"small",type:{name:"boolean"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"helper",type:{name:"string"}}]};var Su={parameters:{storySource:{source:`import Textarea from './Textarea.vue'

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
`,locationsMap:{default:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},hint:{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}},"error-hint":{startLoc:{col:24,line:17},endLoc:{col:2,line:23},startBody:{col:24,line:17},endBody:{col:2,line:23}}}}},title:"Ui/Textarea",component:$u,argTypes:{onInput:{action:"input"},readonly:{control:{type:"boolean"}},condensed:{control:{type:"boolean"}},modelValue:{control:{type:"text"}},outline:{control:{type:"boolean"}},hint:{control:{type:"text"}},error:{control:{type:"text"}}}};const gt=e=>({template:'<Textarea v-bind="args"/>',components:{BaseInput},setup(){return{args:e}}}),lo=gt.bind();lo.args={title:"Input title"};const io=gt.bind();io.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does"};const uo=gt.bind();uo.args={title:"Input title",hint:"This is an input hint. It is supposed to help the user understand the reason this input exists and what it does",error:"This is an input error. It tells the user, that there is something wrong with the current input state"};const _u=["Default","Hint","ErrorHint"];var xu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Su,Default:lo,Hint:io,ErrorHint:uo,__namedExportsOrder:_u});const co=B({components:{Popper:xe,PhDotsThreeVertical:tr},props:{title:{type:String},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e,{emit:t}){const n=c(!1),o=c(),s=c();Oe(s,r=>{n.value&&(o.value.contains(r.target)&&(r.stopPropagation(),r.preventDefault()),a(),t("blur"))});const a=()=>{n.value===!0&&(n.value=!1,t("blur"))};return{open:n,closeDropdown:a,popperRef:s,contextButtonRef:o}}}),Cu={key:0,class:"relative mb-3 flex justify-between px-4 pt-3 text-gray-600 dark:text-gray-400"};function Tu(e,t,n,o,s,a){const r=T("PhDotsThreeVertical"),l=T("Popper");return i(),p(z,null,[d("div",se(e.$attrs,{class:["group relative flex flex-col rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",{"pl-1":e.stripe}]}),[le(d("div",{class:$(["absolute top-0 left-0 bottom-0 w-1",e.stripeClass])},null,2),[[Ke,e.stripe]]),e.title||e.$slots.title?(i(),p("div",Cu,[e.$slots.title?N(e.$slots,"title",{key:0,title:e.title}):(i(),p(z,{key:1},[we(I(e.title),1)],64)),e.$slots.options?(i(),p("button",{key:2,ref:"contextButtonRef",onClick:t[0]||(t[0]=m=>e.open=!e.open),class:"ml-2 -mr-2 -mt-1 rounded-full border-none p-1 opacity-0 transition-all duration-150 hover:bg-gray-200 group-hover:opacity-100 dark:hover:bg-gray-700"},[M(r,{size:"24",weight:"bold"})],512)):S("",!0)])):S("",!0),e.$slots.default?(i(),p("section",{key:1,class:$(["h-full w-full px-4 pb-3",{"pt-3":!(e.title||e.$slots.title)}])},[N(e.$slots,"default")],2)):S("",!0),N(e.$slots,"raw")],16),M(l,{ref:"popperRef",class:"z-[100]","append-to":e.contextButtonRef,open:e.open,"onUpdate:open":t[1]||(t[1]=m=>e.open=m),options:{placement:"bottom-end"}},{default:Y(()=>[N(e.$slots,"options")]),_:3},8,["append-to","open"])],64)}var po=L(co,[["render",Tu]]);co.__docgenInfo={exportName:"default",displayName:"WidgetWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"default"},{name:"raw"},{name:"options"}]};var Pu={parameters:{storySource:{source:`import { computed, ref } from 'vue'
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
`,locationsMap:{default:{startLoc:{col:24,line:13},endLoc:{col:2,line:27},startBody:{col:24,line:13},endBody:{col:2,line:27}}}}},title:"Ui/WidgetWrapper",component:po,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}}}};const Bu=e=>({template:`<WidgetWrapper title="Widtet wrapper">
    Test content
    <template #options>
    <div style="padding: 16px">
       Hello option
    </div>
    </template>
  </WidgetWrapper>`,components:{WidgetWrapper:po},setup(){const t=c(!1);return{args:e,value:t}}}),mo=Bu.bind({});mo.args={title:"WidgetWrapper title",description:"WidgetWrapper description text to be placed here"};const Vu=["Default"];var Iu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pu,Default:mo,__namedExportsOrder:Vu});const Mu=[ir,ur,dr,cr,pr,mr,fr,gr,yr,vr,kr];Mu.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return sr.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>ar(o,!1));case"loaders":return n.forEach(o=>rr(o,!1));case"parameters":return Pt(ze({},n),!1);case"argTypesEnhancers":return n.forEach(o=>or(o));case"argsEnhancers":return n.forEach(o=>nr(o));case"globals":case"globalTypes":{const o={};return o[t]=n,Pt(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function fo(e){return{"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":Nr,"/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":ha,"/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":Pa,"/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":Oa,"/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":cs,"/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":Ps,"/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":Ns,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":Gs,"/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":ul,"/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":vl,"/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":Cl,"/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":Ml,"/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":Ol,"/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":Rl,"/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":Ul,"/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":ai,"/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":pi,"/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":yi,"/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":xi,"/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":Li,"/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":Yi,"/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":Zi,"/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":lu,"/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":vu,"/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":xu,"/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":Iu}[e]}Object.assign(fo,{keys:()=>["/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js"],resolve:e=>({"/home/runner/work/robust-ui/robust-ui/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Calendar/Calendar.stories.js":"./src/components/Calendar/Calendar.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/CircularProgress/CircularProgress.stories.js":"./src/components/CircularProgress/CircularProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ColorPicker/ColorPicker.stories.js":"./src/components/ColorPicker/ColorPicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentBox/ContentBox.stories.js":"./src/components/ContentBox/ContentBox.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/ContentPlaceholder/ContentPlaceholder.stories.js":"./src/components/ContentPlaceholder/ContentPlaceholder.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DatePicker.stories.js":"./src/components/DatePicker/DatePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/DatePicker/DaterangePicker.stories.js":"./src/components/DatePicker/DaterangePicker.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Draggable/Draggable.stories.js":"./src/components/Draggable/Draggable.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Grid/Grid.stories.js":"./src/components/Grid/Grid.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Img/Img.stories.js":"./src/components/Img/Img.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Input/Input.stories.js":"./src/components/Input/Input.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/InputWrapper/InputWrapper.stories.js":"./src/components/InputWrapper/InputWrapper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/LinearProgress/LinearProgress.stories.js":"./src/components/LinearProgress/LinearProgress.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Modal/Modal.stories.js":"./src/components/Modal/Modal.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Notice/Notice.stories.js":"./src/components/Notice/Notice.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Popper/Popper.stories.js":"./src/components/Popper/Popper.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Radio/Radio.stories.js":"./src/components/Radio/Radio.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Select/Select.stories.js":"./src/components/Select/Select.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Slider/Slider.stories.js":"./src/components/Slider/Slider.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Spinner/Spinner.stories.js":"./src/components/Spinner/Spinner.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Switch/Switch.stories.js":"./src/components/Switch/Switch.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Tabs/Tabs.stories.js":"./src/components/Tabs/Tabs.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/Textarea/Textarea.stories.js":"./src/components/Textarea/Textarea.stories.js","/home/runner/work/robust-ui/robust-ui/src/components/WidgetWrapper/WidgetWrapper.stories.js":"./src/components/WidgetWrapper/WidgetWrapper.stories.js"})[e]});lr(fo,{hot:!1},!1);
//# sourceMappingURL=iframe.e9591e5f.js.map
