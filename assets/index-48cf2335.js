import{d as q,a as c,v as U,x as W,b as E,o,e as r,z as w,B as F,m as $,F as I,q as p,f as _,g as h,j as v,p as N,D as G,S as J,u as y,H as k,l as K,A as Q,P as O}from"./vue.esm-bundler-c29c03ae.js";import{_ as X}from"./index-7e9988f7.js";import{_ as Y}from"./index-54c9e3a1.js";import{w as Z,o as ee}from"./index-ed275ab4.js";import{I as ae}from"./PhCaretDown.vue-d1c52ee7.js";import{H as te}from"./PhCheck.vue-4321f7f1.js";const le={key:0,class:"flex justify-end py-2 px-4"},ne={key:0},oe={key:1},se={key:1,class:"max-h-72 overflow-auto"},ue=["onClick"],re={key:2,class:"py-2 text-center text-gray-400"},ie={name:"RobustSelect",inheritAttrs:!1},fe=q({...ie,props:{title:{type:String,default:void 0},class:{type:String,default:void 0},boxClass:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},searchFunction:{type:Function,default:void 0},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array],default:void 0}},emits:["update:modelValue","input","change","focus","blur"],setup(n,{emit:l}){const d=n,b=c(),V=c(),{options:m,modelValue:t}=U(d);c();const f=c(!1),A=c(),g=c(""),z=[],i=c([]);async function S(e){d.searchFunction!==void 0&&(i.value=await d.searchFunction(e)),e===""?i.value=m.value:i.value=m.value.filter(a=>a.title.toLowerCase().includes(e.toLowerCase()))}Z([g,m],async([e,a])=>{await S(e)},{debounce:150}),ee(A,e=>{var a;f.value&&((a=V.value)!=null&&a.wrapperRef.contains(e.target)&&e.stopPropagation(),R(),x())});function B(e){f.value=!0,P(),O(()=>{b.value&&b.value.focus()}),l("focus")}function x(){f.value=!1,l("blur")}W(async()=>{await S("")});const C=E(()=>d.options.find(e=>e.value===d.modelValue));function D(e){if(Array.isArray(t.value)){let a=t.value;t.value.includes(e.value)?a=t.value.filter(s=>s!==e.value):a=[...a,e.value],l("input",a),l("change",a),l("update:modelValue",a)}else l("input",e.value),e.value!==d.modelValue&&(l("change",e.value),l("update:modelValue",e.value)),O(()=>{x(),l("blur")})}function R(){g.value=""}function j(e){return Array.isArray(t.value)?t.value.includes(e.value):t.value===e.value}function H(){if(Array.isArray(t.value)){if(t.value.length<1)return"Select";const e=[];for(const a of t.value){const s=m.value.find(u=>u.value===a);e.push(s.title)}return e.join(", ")}else return C.value?C.value.title:"Select"}function P(){if(Array.isArray(t.value)){const e=[],a=[];for(const s of i.value)t.value.includes(s.value)?e.push(s):a.push(s);i.value=[...e,...a],i.value}}function T(){Array.isArray(t.value)&&(t.value.length<1?L():M())}function L(){const e=i.value.map(a=>a.value);l("input",e),l("change",e),l("update:modelValue",e)}function M(){const e=[];l("input",e),l("change",e),l("update:modelValue",e)}return(e,a)=>{var s;return o(),r(I,null,[w(X,$({ref_key:"refSelectWrapper",ref:V,type:"button",title:n.title,hint:n.hint,error:n.error,class:e.$props.class,readonly:n.readonly,condensed:n.condensed},e.$attrs,{onClick:k(B,["stop"]),onFocus:k(B,["stop"]),onBlur:k(x,["stop"])}),{default:F(()=>[e.$slots.prefix?(o(),r("div",{key:0,class:p(["pointer-events-none flex h-full select-none items-center pr-2 text-gray-400",[n.condensed?"pl-2":"pl-3"]])},[_(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),v("div",$({ref:"refSelect",class:["relative flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]]},e.$attrs),[v("div",{class:p([[!f.value||!n.searchable?"opacity-100":"opacity-0"],"min-w-0 select-none truncate"])},N(H()),3),f.value&&n.searchable?G((o(),r("input",{key:0,ref_key:"refSelectInput",ref:b,"onUpdate:modelValue":a[0]||(a[0]=u=>g.value=u),class:p(["pointer-events-none absolute block h-full w-full min-w-0 select-none bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]])},null,2)),[[J,g.value]]):h("",!0)],16),v("div",{class:p(["pointer-events-none flex h-full flex-shrink-0 select-none items-center pr-3 text-gray-400 dark:text-gray-500",[n.condensed?"pl-2":"pl-3"]])},[w(y(ae),{size:14,weight:"bold",class:p(["transition-transform duration-200",{"rotate-180 transform":f.value}])},null,8,["class"])],2)]),_:3},16,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),w(Y,{ref_key:"elementRef",ref:A,open:f.value,"onUpdate:open":a[1]||(a[1]=u=>f.value=u),"same-size":"",class:"z-[100] origin-top select-none overflow-hidden",reference:(s=V.value)==null?void 0:s.wrapperRef,middleware:z},{default:F(()=>[Array.isArray(y(t))?(o(),r("div",le,[v("button",{type:"button",class:"select-none font-light",onClick:T},[Array.isArray(y(t))&&y(t).length>0?(o(),r("div",ne," Clear all ")):(o(),r("div",oe,"Select all"))])])):h("",!0),i.value.length>0?(o(),r("div",se,[(o(!0),r(I,null,K(i.value,u=>(o(),r("button",{key:String(u.value),type:"button",class:"flex w-full min-w-0 max-w-full items-center gap-4 whitespace-pre-wrap px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:ce=>D(u)},[v("span",null,N(u.title),1),j(u)?(o(),Q(y(te),{key:0,class:"ml-auto flex-shrink-0 text-gray-400",weight:"bold",size:"14"})):h("",!0)],8,ue))),128))])):(o(),r("div",re,"No options"))]),_:1},8,["open","reference"])],64)}}});fe.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"boxClass",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"searchFunction",type:{name:"(query: string) => Promise<Array<Option>>"},defaultValue:{func:!1,value:"undefined"}},{name:"options",type:{name:"Array<Option>"},defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"Value | Array<Value>"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"},{name:"focus"},{name:"blur"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{fe as _};
//# sourceMappingURL=index-48cf2335.js.map
