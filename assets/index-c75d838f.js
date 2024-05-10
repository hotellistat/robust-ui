import{d as _,r as d,t as G,o as Q,c as X,e as s,f as r,x as $,B as F,m as I,H as A,u as v,A as N,j as h,I as O,s as m,g as Y,k as g,z as R,q as Z,J as ee,K as ae,L as j}from"./vue.esm-bundler-5304782f.js";import{_ as te}from"./index-dacb4fc9.js";import{_ as le}from"./index-8f79d0e7.js";import{w as q,o as ne}from"./index-01ad2f80.js";import{I as se}from"./PhCaretDown.vue-5bce5257.js";import{H as ue}from"./PhCheck.vue-ea5bd38e.js";import{l as S}from"./lodash-f6b38868.js";const oe={key:0,class:"flex justify-end px-4 py-2"},re={key:0},ie={key:1},fe={key:1,class:"max-h-72 overflow-auto"},ce=["onClick"],de={key:2,class:"py-2 text-center text-gray-400"},pe={name:"RobustSelect",inheritAttrs:!1},ve=_({...pe,props:{title:{type:String,default:void 0},class:{type:String,default:void 0},boxClass:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},searchFunction:{type:Function,default:void 0},placeholder:{type:String,default:"Select"},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array],default:void 0},border:{type:Boolean,default:()=>!0},lazy:{type:Boolean,default:!1}},emits:["update:modelValue","input","change","focus","blur","search"],setup(n,{emit:D}){const o=n,l=D,x=d(),b=d(),{options:y,modelValue:t,border:E}=G(o);d();const c=d(!1),B=d(),p=d(""),H=[],i=d([]);async function w(e){o.searchFunction!==void 0&&(i.value=await o.searchFunction(e)),e===""?i.value=y.value:i.value=y.value.filter(a=>a.title.toLowerCase().includes(e.toLowerCase()))}q(y,async()=>{o.lazy||await w(p.value)},{debounce:150}),q(p,async e=>{o.lazy||await w(p.value),l("search",e)},{debounce:150}),ne(B,e=>{var a;c.value&&((a=b.value)!=null&&a.wrapperRef.contains(e.target)&&e.stopPropagation(),T(),k())});function C(e){c.value=!0,U(),j(()=>{x.value&&x.value.focus()}),l("focus")}function k(){c.value=!1,l("blur")}Q(async()=>{await w("")});const z=X(()=>o.options.find(e=>S.isEqual(e.value,o.modelValue)));function L(e){if(Array.isArray(t.value)){let a=t.value;t.value.includes(e.value)?a=t.value.filter(u=>u!==e.value):a=[...a,e.value],l("input",a),l("change",a),l("update:modelValue",a)}else e.value!==o.modelValue&&(l("change",e.value),l("update:modelValue",e.value)),j(()=>{k(),l("blur")})}function T(){p.value=""}function M(e){return Array.isArray(t.value)?!!y.value.find(a=>S.isEqual(a.value,e.value)):S.isEqual(e.value,t.value)}function P(){if(Array.isArray(t.value)){if(t.value.length<1)return o.placeholder;const e=[];for(const a of t.value){const u=y.value.find(V=>V.value===a);u&&e.push(u.title)}return e.join(", ")}else return z.value?z.value.title:o.placeholder}function U(){if(Array.isArray(t.value)){const e=[],a=[];for(const u of i.value)t.value.includes(u.value)?e.push(u):a.push(u);i.value=[...e,...a],i.value}}function W(){Array.isArray(t.value)&&(t.value.length<1?J():K())}function J(){const e=i.value.map(a=>a.value);l("input",e),l("change",e),l("update:modelValue",e)}function K(){const e=[];l("input",e),l("change",e),l("update:modelValue",e)}return(e,a)=>{var u,V;return s(),r(O,null,[$(te,I({ref_key:"refSelectWrapper",ref:b,type:"button",title:n.title,hint:n.hint,error:n.error,class:e.$props.class,readonly:n.readonly,condensed:n.condensed,"box-class":!v(E)&&"border-0 focus-within:ring-0"},e.$attrs,{onClick:A(C,["stop"]),onFocus:A(C,["stop"]),onBlur:A(k,["stop"])}),{default:F(()=>[e.$slots.prefix?(s(),r("div",{key:0,class:m(["pointer-events-none flex h-full select-none items-center pr-2 text-gray-400",[n.condensed?"pl-2":"pl-3"]])},[Y(e.$slots,"prefix",{tag:"div"})],2)):h("",!0),g("div",I({ref:"refSelect",class:["relative flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]]},e.$attrs),[g("div",{class:m([[!c.value||!n.searchable?"opacity-100":"opacity-0"],"min-w-0 select-none truncate"])},R(P()),3),c.value&&n.searchable?Z((s(),r("input",{key:0,ref_key:"refSelectInput",ref:x,"onUpdate:modelValue":a[0]||(a[0]=f=>p.value=f),class:m(["pointer-events-none absolute block h-full w-full min-w-0 select-none bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]])},null,2)),[[ee,p.value]]):h("",!0)],16),g("div",{class:m(["pointer-events-none flex h-full flex-shrink-0 select-none items-center pr-3 text-gray-400 dark:text-gray-500",[n.condensed?"pl-2":"pl-3"]])},[$(v(se),{size:14,weight:"bold",class:m(["transition-transform duration-200",{"rotate-180 transform":c.value}])},null,8,["class"])],2)]),_:3},16,["title","hint","error","class","readonly","condensed","box-class"]),(u=b.value)!=null&&u.wrapperRef?(s(),N(le,{key:0,ref_key:"elementRef",ref:B,open:c.value,"onUpdate:open":a[1]||(a[1]=f=>c.value=f),"same-size":"",class:"z-[100] origin-top select-none overflow-hidden",reference:(V=b.value)==null?void 0:V.wrapperRef,middleware:H},{default:F(()=>[Array.isArray(v(t))?(s(),r("div",oe,[g("button",{type:"button",class:"select-none font-light",onClick:W},[Array.isArray(v(t))&&v(t).length>0?(s(),r("div",re," Clear all ")):(s(),r("div",ie,"Select all"))])])):h("",!0),i.value.length>0?(s(),r("div",fe,[(s(!0),r(O,null,ae(i.value,f=>(s(),r("button",{key:String(f.value),type:"button",class:m(["flex w-full min-w-0 max-w-full items-center gap-4 whitespace-pre-wrap px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",f.class]),onClick:me=>L(f)},[g("span",null,R(f.title),1),M(f)?(s(),N(v(ue),{key:0,class:"ml-auto flex-shrink-0 text-gray-400",weight:"bold",size:"14"})):h("",!0)],10,ce))),128))])):(s(),r("div",de,"No options"))]),_:1},8,["open","reference"])):h("",!0)],64)}}});ve.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"boxClass",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"searchFunction",type:{name:"(query: string) => Promise<Array<Option>>"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select'"}},{name:"options",type:{name:"Array<Option>"},defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"Value | Array<Value>"},defaultValue:{func:!1,value:"undefined"}},{name:"border",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"lazy",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"},{name:"focus"},{name:"blur"},{name:"search"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{ve as _};