import{d as E,r as d,t as _,o as G,c as J,a as u,b as r,p as F,k as $,m as z,j as I,f as y,F as N,n as v,e as K,g as m,s as O,l as Q,v as X,u as h,B as S,y as Y,C as R}from"./vue.esm-bundler-ebcf9369.js";import{_ as Z}from"./index-44e83eb1.js";import{_ as ee}from"./index-bccff33e.js";import{w as j,o as ae}from"./index-a579ba8f.js";import{I as le}from"./PhCaretDown.vue-76628bb3.js";import{H as te}from"./PhCheck.vue-910ea200.js";const ne={key:0,class:"flex justify-end px-4 py-2"},ue={key:0},se={key:1},oe={key:1,class:"max-h-72 overflow-auto"},re=["onClick"],ie={key:2,class:"py-2 text-center text-gray-400"},fe={name:"RobustSelect",inheritAttrs:!1},ce=E({...fe,props:{title:{type:String,default:void 0},class:{type:String,default:void 0},boxClass:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},searchFunction:{type:Function,default:void 0},placeholder:{type:String,default:"Select"},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array],default:void 0},lazy:{type:Boolean,default:!1}},emits:["update:modelValue","input","change","focus","blur","search"],setup(n,{emit:t}){const s=n,w=d(),g=d(),{options:b,modelValue:l}=_(s);d();const c=d(!1),A=d(),p=d(""),D=[],i=d([]);async function k(e){s.searchFunction!==void 0&&(i.value=await s.searchFunction(e)),e===""?i.value=b.value:i.value=b.value.filter(a=>a.title.toLowerCase().includes(e.toLowerCase()))}j(b,async()=>{s.lazy||await k(p.value)},{debounce:150}),j(p,async e=>{s.lazy||await k(p.value),t("search",e)},{debounce:150}),ae(A,e=>{var a;c.value&&((a=g.value)!=null&&a.wrapperRef.contains(e.target)&&e.stopPropagation(),H(),x())});function B(e){c.value=!0,P(),R(()=>{w.value&&w.value.focus()}),t("focus")}function x(){c.value=!1,t("blur")}G(async()=>{await k("")});const C=J(()=>s.options.find(e=>e.value===s.modelValue));function T(e){if(Array.isArray(l.value)){let a=l.value;l.value.includes(e.value)?a=l.value.filter(o=>o!==e.value):a=[...a,e.value],t("input",a),t("change",a),t("update:modelValue",a)}else t("input",e.value),e.value!==s.modelValue&&(t("change",e.value),t("update:modelValue",e.value)),R(()=>{x(),t("blur")})}function H(){p.value=""}function L(e){return Array.isArray(l.value)?l.value.includes(e.value):l.value===e.value}function M(){if(Array.isArray(l.value)){if(l.value.length<1)return s.placeholder;const e=[];for(const a of l.value){const o=b.value.find(V=>V.value===a);e.push(o.title)}return e.join(", ")}else return C.value?C.value.title:s.placeholder}function P(){if(Array.isArray(l.value)){const e=[],a=[];for(const o of i.value)l.value.includes(o.value)?e.push(o):a.push(o);i.value=[...e,...a],i.value}}function U(){Array.isArray(l.value)&&(l.value.length<1?W():q())}function W(){const e=i.value.map(a=>a.value);t("input",e),t("change",e),t("update:modelValue",e)}function q(){const e=[];t("input",e),t("change",e),t("update:modelValue",e)}return(e,a)=>{var o,V;return u(),r(N,null,[F(Z,z({ref_key:"refSelectWrapper",ref:g,type:"button",title:n.title,hint:n.hint,error:n.error,class:e.$props.class,readonly:n.readonly,condensed:n.condensed},e.$attrs,{onClick:S(B,["stop"]),onFocus:S(B,["stop"]),onBlur:S(x,["stop"])}),{default:$(()=>[e.$slots.prefix?(u(),r("div",{key:0,class:v(["pointer-events-none flex h-full select-none items-center pr-2 text-gray-400",[n.condensed?"pl-2":"pl-3"]])},[K(e.$slots,"prefix",{tag:"div"})],2)):y("",!0),m("div",z({ref:"refSelect",class:["relative flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]]},e.$attrs),[m("div",{class:v([[!c.value||!n.searchable?"opacity-100":"opacity-0"],"min-w-0 select-none truncate"])},O(M()),3),c.value&&n.searchable?Q((u(),r("input",{key:0,ref_key:"refSelectInput",ref:w,"onUpdate:modelValue":a[0]||(a[0]=f=>p.value=f),class:v(["pointer-events-none absolute block h-full w-full min-w-0 select-none bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]])},null,2)),[[X,p.value]]):y("",!0)],16),m("div",{class:v(["pointer-events-none flex h-full flex-shrink-0 select-none items-center pr-3 text-gray-400 dark:text-gray-500",[n.condensed?"pl-2":"pl-3"]])},[F(h(le),{size:14,weight:"bold",class:v(["transition-transform duration-200",{"rotate-180 transform":c.value}])},null,8,["class"])],2)]),_:3},16,["title","hint","error","class","readonly","condensed","onClick","onFocus","onBlur"]),(o=g.value)!=null&&o.wrapperRef?(u(),I(ee,{key:0,ref_key:"elementRef",ref:A,open:c.value,"onUpdate:open":a[1]||(a[1]=f=>c.value=f),"same-size":"",class:"z-[100] origin-top select-none overflow-hidden",reference:(V=g.value)==null?void 0:V.wrapperRef,middleware:D},{default:$(()=>[Array.isArray(h(l))?(u(),r("div",ne,[m("button",{type:"button",class:"select-none font-light",onClick:U},[Array.isArray(h(l))&&h(l).length>0?(u(),r("div",ue," Clear all ")):(u(),r("div",se,"Select all"))])])):y("",!0),i.value.length>0?(u(),r("div",oe,[(u(!0),r(N,null,Y(i.value,f=>(u(),r("button",{key:String(f.value),type:"button",class:v(["flex w-full min-w-0 max-w-full items-center gap-4 whitespace-pre-wrap px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",f.class]),onClick:de=>T(f)},[m("span",null,O(f.title),1),L(f)?(u(),I(h(te),{key:0,class:"ml-auto flex-shrink-0 text-gray-400",weight:"bold",size:"14"})):y("",!0)],10,re))),128))])):(u(),r("div",ie,"No options"))]),_:1},8,["open","reference"])):y("",!0)],64)}}});ce.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"boxClass",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"searchFunction",type:{name:"(query: string) => Promise<Array<Option>>"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select'"}},{name:"options",type:{name:"Array<Option>"},defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"Value | Array<Value>"},defaultValue:{func:!1,value:"undefined"}},{name:"lazy",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"},{name:"focus"},{name:"blur"},{name:"search"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{ce as _};
//# sourceMappingURL=index-97254010.js.map
