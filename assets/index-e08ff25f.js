import{d as v,j as V,a as h,o as t,z as l,A as s,p as d,L as f,e as c,f as m,C as x,M as k,g as C,m as $,b as B,y as S,u as w}from"./vue.esm-bundler-49cceb47.js";import{_ as N}from"./index-369a5683.js";import{J as z}from"./PhWarningCircle.vue-d9e821d9.js";const D=["disabled","readonly"],I={key:1,class:"text-red-400"},M=v({__name:"index",props:{title:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},class:{type:String,default:void 0},readonly:{type:Boolean},inputClass:{type:String,default:void 0},modelValue:{type:null,default:void 0},condensed:{type:Boolean},disabled:{type:Boolean},interactive:{type:Boolean}},emits:["update:modelValue","input","change"],setup(e,{expose:y,emit:n}){const o=e,i=V(),u=h({get(){return o.modelValue},set(a){n("input",a),n("change",a),n("update:modelValue",a)}});function p(){var a;(a=i.value)==null||a.focus()}function g(){n("update:modelValue","")}return y({focus:p,clear:g}),(a,r)=>(t(),l(N,{title:e.title,hint:e.hint,error:e.error,class:d(a.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:s(()=>[a.$slots.prefix?(t(),l(f(e.interactive?"button":"label"),{key:0,class:d(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},{default:s(()=>[c(a.$slots,"prefix",{tag:"div"})]),_:3},8,["class"])):m("",!0),x(C("input",$({ref_key:"inputRef",ref:i},a.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=b=>u.value=b),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-500",[o.inputClass,a.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":a.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,D),[[k,u.value]]),a.$slots.suffix||e.error?(t(),l(f(e.interactive?"button":"label"),{key:1,class:d(["ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},{default:s(()=>[e.error?(t(),B("div",I,[S(w(z),{size:"20",class:"block"})])):c(a.$slots,"suffix",{key:0,tag:"div"})]),_:3},8,["class"])):m("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"]))}});M.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},expose:[{name:"focus"},{name:"clear"}],props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"readonly",type:{name:"boolean"}},{name:"inputClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"null"},defaultValue:{func:!1,value:"undefined"}},{name:"condensed",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"interactive",type:{name:"boolean"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{M as _};
//# sourceMappingURL=index-e08ff25f.js.map
