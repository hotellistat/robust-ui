import{d as b,l as V,a as h,o as l,b as x,w as k,f as d,r as o,n as s,g as r,A as $,B,u as f,e as C,m as S,C as w,x as N}from"./vue.esm-bundler-bdd4c61f.js";import{_ as z}from"./index-65b9075a.js";import{r as R}from"./vue-phosphor-icons-f4f4d043.js";const D=["id","disabled","readonly"],I={key:1,class:"text-red-400"},A=b({__name:"index",props:{title:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},class:{type:String,default:void 0},readonly:{type:Boolean,default:!1},inputClass:{type:String,default:void 0},modelValue:{type:[String,Number,null,void 0],default:void 0},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{expose:c,emit:n}){const m=e,u=V(),t=h({get(){return m.modelValue},set(a){n("input",a),n("change",a),n("update:modelValue",a)}});function p(){var a;(a=u.value)==null||a.focus()}function y(){n("update:modelValue","")}return c({focus:p,clear:y}),(a,i)=>(l(),x(z,{title:e.title,hint:e.hint,error:e.error,class:s(a.$props.class),readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:k(g=>[a.$slots.prefix?(l(),d("div",{key:0,class:s(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[o(a.$slots,"prefix",{tag:"div"})],2)):r("",!0),$(C("input",S({id:g.cuid,ref_key:"inputRef",ref:u},a.$attrs,{"onUpdate:modelValue":i[0]||(i[0]=v=>w(t)?t.value=v:null),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-500",[a.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":a.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,D),[[B,f(t)]]),a.$slots.suffix||e.error?(l(),d("div",{key:1,class:s(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(l(),d("div",I,[N(f(R),{size:"20",class:"block"})])):o(a.$slots,"suffix",{key:0,tag:"div"})],2)):r("",!0)]),_:3},8,["title","hint","error","class","readonly","disabled","condensed"]))}});A.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"string|number|null|undefined"},defaultValue:{func:!1,value:"undefined"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{A as _};
//# sourceMappingURL=index-24de9e36.js.map
