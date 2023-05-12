import{d as U,j as d,t as E,k as G,a as J,o as s,b as u,l as $,y as F,m as I,x as O,u as p,f as v,F as N,L as R,p as b,e as K,H as j,I as Q,g as y,q as z,O as X,n as Y}from"./vue.esm-bundler-b4bdeeb0.js";import{_ as Z}from"./index-d12beb5e.js";import{P as _}from"./index-56a24cc0.js";import{w as ee,o as ae}from"./index-7f9dbdf9.js";import{I as te}from"./PhCaretDown.vue-dd6a24d7.js";import{H as le}from"./PhCheck.vue-55785c72.js";const ne={class:"min-w-0 select-none truncate"},se={key:0,class:"flex justify-end py-2 px-4"},oe={key:0},ue={key:1},re={key:1,class:"max-h-72 overflow-auto"},ie=["onClick"],fe={key:2,class:"py-2 text-center text-gray-400"},de={name:"RobustSelect",inheritAttrs:!1},ce=U({...de,props:{title:{type:String,default:void 0},class:{type:String,default:void 0},boxClass:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},searchFunction:{type:Function,default:void 0},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array],default:void 0}},emits:["update:modelValue","input","change","focus","blur"],setup(n,{emit:l}){const c=n,x=d(),V=d(),{options:m,modelValue:t}=E(c);d();const i=d(!1),k=d(),h=d(""),r=d([]);async function S(e){c.searchFunction!==void 0&&(r.value=await c.searchFunction(e)),e===""?r.value=m.value:r.value=m.value.filter(a=>a.title.toLowerCase().includes(e.toLowerCase()))}ee([h,m],async([e,a])=>{await S(e)},{debounce:150}),ae(k,e=>{i.value&&(e.stopPropagation(),B(),w(),l("blur"))}),G(async()=>{await S("")});const D=[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{e.state.styles.popper.width=`${Math.max(e.state.rects.reference.width,320)}px`},effect:e=>{e.state.elements.popper.style.width=`${e.state.elements.reference.getBoundingClientRect().width}px`}}],A=J(()=>c.options.find(e=>e.value===c.modelValue));function P(e){if(Array.isArray(t.value)){let a=t.value;t.value.includes(e.value)?a=t.value.filter(o=>o!==e.value):a=[...a,e.value],l("input",a),l("change",a),l("update:modelValue",a)}else l("input",e.value),e.value!==c.modelValue&&(l("change",e.value),l("update:modelValue",e.value)),R(()=>{w(),l("blur")})}function C(){i.value=!0,M(),R(()=>{x.value&&x.value.focus()}),l("focus")}function w(){i.value=!1}function B(){h.value=""}function H(e){return Array.isArray(t.value)?t.value.includes(e.value):t.value===e.value}function L(){if(Array.isArray(t.value)){if(t.value.length<1)return"Select";const e=[];for(const a of t.value){const o=m.value.find(g=>g.value===a);e.push(o.title)}return e.join(", ")}else return A.value?A.value.title:"Select"}function M(){if(Array.isArray(t.value)){const e=[],a=[];for(const o of r.value)t.value.includes(o.value)?e.push(o):a.push(o);r.value=[...e,...a],r.value}}function T(){Array.isArray(t.value)&&(t.value.length<1?W():q())}function W(){const e=r.value.map(a=>a.value);l("input",e),l("change",e),l("update:modelValue",e)}function q(){const e=[];l("input",e),l("change",e),l("update:modelValue",e)}return(e,a)=>{var o,g;return s(),u(N,null,[$(Z,I({ref_key:"refSelectWrapper",ref:V,title:n.title,hint:n.hint,error:n.error,class:e.$props.class,readonly:n.readonly,condensed:n.condensed},e.$attrs,{onClick:C,onFocus:C,onBlur:w}),{default:F(()=>[e.$slots.prefix?(s(),u("div",{key:0,class:b(["flex h-full items-center pr-2 text-gray-400",[n.condensed?"pl-2":"pl-3"]])},[K(e.$slots,"prefix",{tag:"div"})],2)):v("",!0),j(y("div",I({ref:"select",class:["flex h-full min-w-0 flex-1 flex-shrink items-center bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]]},e.$attrs),[y("div",ne,z(L()),1)],16),[[Q,!i.value||!n.searchable]]),i.value&&n.searchable?j((s(),u("input",{key:1,ref_key:"refSelectInput",ref:x,"onUpdate:modelValue":a[0]||(a[0]=f=>h.value=f),size:1,class:b(["block h-full min-w-0 flex-1 flex-shrink bg-transparent text-current outline-none",[e.$slots.prefix||n.condensed?"pl-2":"pl-3"]])},null,2)),[[X,h.value]]):v("",!0),y("div",{class:b(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[n.condensed?"pl-2":"pl-3"]])},[$(p(te),{size:14,weight:"bold",class:b(["transition-transform duration-200",{"rotate-180 transform":i.value}])},null,8,["class"])],2)]),_:3},16,["title","hint","error","class","readonly","condensed"]),(o=V.value)!=null&&o.wrapperRef?(s(),O(p(_),{key:0,ref_key:"popperRef",ref:k,open:i.value,"onUpdate:open":a[1]||(a[1]=f=>i.value=f),class:"z-[100] origin-top overflow-hidden","append-to":(g=V.value)==null?void 0:g.wrapperRef,modifiers:D,options:{placement:"bottom-start"},onClosed:B},{default:F(()=>[Array.isArray(p(t))?(s(),u("div",se,[y("button",{class:"select-none font-light",onClick:T},[Array.isArray(p(t))&&p(t).length>0?(s(),u("div",oe," Clear all ")):(s(),u("div",ue,"Select all"))])])):v("",!0),r.value.length>0?(s(),u("div",re,[(s(!0),u(N,null,Y(r.value,f=>(s(),u("button",{key:String(f.value),class:"flex w-full min-w-0 max-w-full items-center gap-4 whitespace-pre-wrap px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:pe=>P(f)},[y("span",null,z(f.title),1),H(f)?(s(),O(p(le),{key:0,class:"ml-auto flex-shrink-0 text-gray-400",weight:"bold",size:"14"})):v("",!0)],8,ie))),128))])):(s(),u("div",fe,"No options"))]),_:1},8,["open","append-to"])):v("",!0)],64)}}});ce.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"boxClass",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"searchFunction",type:{name:"(query: string) => Promise<Array<Option>>"},defaultValue:{func:!1,value:"undefined"}},{name:"options",type:{name:"Array<Option>"},defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"Value | Array<Value>"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"},{name:"focus"},{name:"blur"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{ce as _};
//# sourceMappingURL=index-9fbae2cd.js.map
