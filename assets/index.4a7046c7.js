import{d as O,o as d,f as m,F as I,s as te,e as s,G as le,v as K,t as M,a as k,p as R,q as ne,b as $,x as c,w as D,u as l,H as W,n as C,r as H,g,Q as oe,m as G,T as se,R as re,l as f,P as ue,C as T,L as de}from"./vue.esm-bundler.33188a4f.js";import{u as ie,o as pe}from"./index.93394147.js";import{_ as fe}from"./index.f83e1052.js";import{_ as j,f as w}from"./index.6449c053.js";import{_ as ce}from"./index.e1074d21.js";import"./index.2873f8c8.js";import"./index.5dac3479.js";import"./index.b2fbf4f9.js";import"./index.8a79be7b.js";import"./index.41623a1f.js";import{_ as q}from"./index.60f39425.js";import"./index.190a6aae.js";import"./index.acceedd1.js";import{_ as me}from"./index.5f42a0cc.js";import"./index.c54557ad.js";import{a as ve,n as ye,A as ge}from"./vue-phosphor-icons.9c01704a.js";import"./index.356dabaa.js";import{P as be}from"./index.45e08a6c.js";import"./index.3622eec3.js";import"./index.7f9d26e3.js";import"./index.60f6c08f.js";import"./index.e62e3f5a.js";import"./index.ae49dfed.js";import"./index.7cae9c3b.js";import"./index.8eb96fcd.js";import"./index.3524925d.js";import"./index.be0a4cf2.js";import"./index.c4604e6b.js";import"./index.b74d1182.js";const De={class:"grid grid-cols-3 place-items-center gap-x-3 gap-y-3 p-4 sm:grid-cols-6"},Ce=["onClick"],ke={class:"hidden sm:block"},he=O({__name:"ColorPickerPalette",props:{colors:{type:Array,default:()=>["#FCA5A5","#EF4444","#FDBA74","#F97316","#FCD34D","#F59E0B","#FDE047","#EAB308","#BEF264","#84CC16","#86EFAC","#22C55E","#6EE7B7","#10B981","#5EEAD4","#14B8A6","#67E8F9","#06B6D4","#7DD3FC","#0EA5E9","#93C5FD","#3B82F6","#A5B4FC","#6366F1","#C4B5FD","#8B5CF6","#D8B4FE","#A855F7","#F0ABFC","#D946EF","#F9A8D4","#EC4899","#FDA4AF","#F43F5E"]}},emits:["change"],setup(t,{emit:h}){const n=u=>{h("change",u)};return(u,i)=>(d(),m("div",De,[(d(!0),m(I,null,te(t.colors,(v,x)=>(d(),m("div",{key:x,class:"flex flex-col items-center gap-y-1"},[s("div",{class:"h-8 w-16 rounded-md",style:le({background:v}),onClick:E=>n(v)},null,12,Ce),s("div",ke,K(v),1)]))),128))]))}});he.__docgenInfo={exportName:"default",displayName:"ColorPickerPalette",description:"",tags:{},props:[{name:"colors",type:{name:"string[]"},defaultValue:{func:!0,value:`() => [
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
]`}}],events:[{name:"change"}]};const xe={key:0,ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:pt-24",role:"dialog"},Fe=["onClick"],_e=["onKeydown"],Be={key:0,class:"flex flex-shrink-0 items-center p-4 text-xl"},Ee={class:"leading-4"},Ve=O({__name:"index",props:{modalClass:{type:String,default:void 0},opened:{type:Boolean,default:!1},size:{type:String,default:"md"},slideOutLeft:{type:Boolean,default:!1},slideOutRight:{type:Boolean,default:!1}},emits:["open","close","update:opened"],setup(t,{expose:h,emit:n}){const u=t,{opened:i}=M(u);let v;const x=k(()=>u.slideOutLeft?"robust-ui-modal__slide-left":u.slideOutRight?"robust-ui-modal__slide-right":"robust-ui-modal__fade"),E=k(()=>{let a="";switch(u.slideOutLeft?a+="absolute left-0 top-0 bottom-0 h-full min-h-0 w-full":u.slideOutRight?a+="absolute right-0 top-0 bottom-0 h-full min-h-0 w-full":a+="mx-auto h-full min-h-0",u.size){case"3xl":{a+=" max-w-7xl";break}case"2xl":{a+=" max-w-6xl";break}case"xl":{a+=" max-w-5xl";break}case"lg":{a+=" max-w-4xl";break}case"sm":{a+=" max-w-md";break}default:{a+=" max-w-lg";break}}return a}),p=k(()=>u.slideOutLeft||u.slideOutRight);R(i,b);function b(a){a?(window.addEventListener("keydown",V),v.value=!0):(window.removeEventListener("keydown",V),v.value=!1)}function V(a){a.key==="Escape"&&i.value===!0&&(a.stopPropagation(),a.preventDefault(),y())}ne(()=>{v=ie(document.body),b(i.value)});async function F(){i.value=!0,n("update:opened",!0),n("open")}async function y(){i.value=!1,n("update:opened",!1),n("close")}return h({open:F,close:y}),(a,A)=>(d(),$(re,{to:"body"},[c(se,G(a.$attrs,{name:l(x)}),{default:D(()=>[l(i)?(d(),m("div",xe,[s("div",{class:"robust-ui-modal__backdrop absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50",onClick:W(y,["self"])},null,8,Fe),s("div",{class:C(["robust-ui-modal__box",[l(E)]]),onKeydown:oe(y,["esc"])},[s("div",{class:C(["relative flex max-h-full min-h-0 w-full flex-col bg-white shadow-xl dark:bg-gray-800",[t.modalClass,l(p)?"h-full":"rounded-md"]])},[a.$slots.title?(d(),m("div",Be,[s("div",Ee,[H(a.$slots,"title")]),s("div",{class:"ml-auto",onClick:y},[c(l(ve),{size:"20",class:"block"})])])):g("",!0),H(a.$slots,"default")],2)],42,_e)],512)):g("",!0)]),_:3},16,["name"])]))}});Ve.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modalClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"slideOutLeft",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"slideOutRight",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"open"},{name:"close"},{name:"update:opened"}],slots:[{name:"title"},{name:"default"}]};const we=["id"],Ae={class:"min-w-0 truncate text-sm tabular-nums sm:text-base"},Pe=s("h3",{class:"font-lg border-b border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"}," Date range ",-1),Re={key:0,class:"flex flex-col items-start gap-y-3"},$e=s("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),Oe={key:0,class:"font-lg border-b border-t border-gray-200 p-4 font-medium text-gray-500 dark:border-gray-700"},Se={key:1},Le={key:0,class:"flex flex-col items-start"},Ne=s("label",{class:"mb-1 block text-sm font-medium text-gray-500 dark:text-gray-400"},"Perspective of",-1),ze={class:"flex items-start justify-between border-t border-gray-200 p-4 dark:border-gray-700"},Ue=O({__name:"index",props:{title:{type:String,default:void 0},hint:{type:String,default:void 0},dateRange:{type:Object,required:!0},compareDateRange:{type:Object,default:void 0},enableComparison:{type:Boolean,default:!1},perspectiveDate:{type:Date,default:void 0},comparePerspectiveDate:{type:Date,default:void 0},enablePerspective:{type:Boolean,default:!1},error:{type:String,default:void 0},class:{type:String,default:void 0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},dateHistory:{type:Array,default:()=>[]}},emits:["blur","focus","update:compareDate","update:perspectiveDate","update:comparePerspectiveDate","update:dateRange","change"],setup(t,{expose:h,emit:n}){const u=t,{dateRange:i,compareDateRange:v,perspectiveDate:x,comparePerspectiveDate:E}=M(u),p=f(!1),b=f(),V=f(),F=f(x.value),y=f(E.value),a=f(!1),A=f(),Q=f(!0),S=f(),_=f(),L=f(v.value),B=k({get(){return L.value},set(e){L.value=e,n("update:compareDate",e),n("blur")}}),P=k({get:()=>B.value.length>1,set:e=>{Y(e)}}),J=k(()=>{if(!i.value)return"Select date";const e=i.value;try{return e.length>1?w(e[0],"P")+" - "+w(e[1],"P"):w(e[0],"P")+" - "+w(e[0],"P")}catch{return}});function X(){p.value===!0&&(p.value=!1,a.value=!1,n("blur"))}const Y=e=>{e?A.value=e:(n("update:compareDate",void 0),B.value=void 0)};pe(S,e=>{p.value&&(b.value.wrapperRef.contains(e.target)&&(e.stopPropagation(),e.preventDefault()),X(),n("blur"))});const Z=()=>{_.value=i.value,p.value=!p.value},ee=()=>{A.value=!1},ae=async()=>{n("update:dateRange",_.value),n("change",_.value),n("blur"),p.value=!1},N=e=>{Q.value=e};return R(F,e=>{n("update:perspectiveDate",e)}),R(y,e=>{n("update:comparePerspectiveDate",e)}),h({goBack:ee}),(e,o)=>{var z,U;return d(),m(I,null,[c(l(me),{ref_key:"inputWrapperRef",ref:b,"box-class":"items-center",title:t.title,hint:t.hint,error:t.error,class:C(e.$props.class),readonly:ue,condensed:t.condensed,onClick:W(Z,["stop"])},{default:D(r=>[s("div",{class:C(["items-center text-gray-400",[t.condensed?"pl-2":"pl-3"]])},[c(l(ye),{size:"20"})],2),s("div",G({id:r.cuid,ref:"select",class:["w-full cursor-default items-center bg-transparent text-current outline-none",[t.condensed?"pl-2":"pl-3"]]},e.$attrs),[s("div",Ae,K(l(J)),1)],16,we),s("div",{class:C(["flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[t.condensed?"pl-2":"pl-3"]])},[c(l(ge),{size:14,weight:"bold",class:C(["transition-transform duration-200",{"rotate-180 transform":p.value}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","condensed","onClick"]),(z=b.value)!=null&&z.wrapperRef?(d(),$(l(be),{key:0,ref_key:"popperRef",ref:S,open:p.value,"onUpdate:open":o[7]||(o[7]=r=>p.value=r),class:"z-[100] origin-top-left","append-to":(U=b.value)==null?void 0:U.wrapperRef,options:{placement:"bottom-start"}},{default:D(()=>[Pe,s("div",null,[c(l(j),{ref_key:"mainCalendar",ref:V,modelValue:_.value,"onUpdate:modelValue":o[2]||(o[2]=r=>_.value=r),"onClick:relativeDate":o[3]||(o[3]=r=>N(!1))},{default:D(()=>[t.enablePerspective?(d(),m("div",Re,[s("div",null,[$e,c(l(q),{modelValue:F.value,"onUpdate:modelValue":o[0]||(o[0]=r=>F.value=r),placeholder:"Date"},null,8,["modelValue"])]),t.enableComparison?(d(),$(l(ce),{key:0,modelValue:l(P),"onUpdate:modelValue":o[1]||(o[1]=r=>T(P)?P.value=r:null),title:"Compare with"},null,8,["modelValue"])):g("",!0)])):g("",!0)]),_:1},8,["modelValue"])]),t.enableComparison?(d(),m("h3",Oe," Comparison date range ")):g("",!0),t.enableComparison?(d(),m("div",Se,[c(l(j),{modelValue:l(B),"onUpdate:modelValue":o[5]||(o[5]=r=>T(B)?B.value=r:null),variant:"secondary","onClick:relativeDate":o[6]||(o[6]=r=>N(!1))},{default:D(()=>[t.enablePerspective?(d(),m("div",Le,[Ne,c(l(q),{modelValue:y.value,"onUpdate:modelValue":o[4]||(o[4]=r=>y.value=r),placeholder:"Date"},null,8,["modelValue"])])):g("",!0)]),_:1},8,["modelValue"])])):g("",!0),s("div",ze,[c(l(fe),{type:"primary",class:"ml-auto",onClick:ae},{default:D(()=>[de("Apply time range")]),_:1})])]),_:1},8,["open","append-to"])):g("",!0)],64)}}});Ue.__docgenInfo={exportName:"default",displayName:"DateRangePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"dateRange",type:{name:"[Date, Date]"},required:!0},{name:"compareDateRange",type:{name:"[Date, Date]"},defaultValue:{func:!1,value:"undefined"}},{name:"enableComparison",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"perspectiveDate",type:{name:"date"},defaultValue:{func:!1,value:"undefined"}},{name:"comparePerspectiveDate",type:{name:"date"},defaultValue:{func:!1,value:"undefined"}},{name:"enablePerspective",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dateHistory",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"blur"},{name:"focus"},{name:"update:compareDate"},{name:"update:perspectiveDate"},{name:"update:comparePerspectiveDate"},{name:"update:dateRange"},{name:"change"}]};export{Ue as _,Ve as a};
//# sourceMappingURL=index.4a7046c7.js.map
