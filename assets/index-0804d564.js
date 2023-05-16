import{d as g,j as v,a as b,o as l,z as V,A as x,p as t,b as s,e as r,f,C as h,K as k,g as $,m as C,y as B,u as S}from"./vue.esm-bundler-49cceb47.js";import{_ as w}from"./index-369a5683.js";import{J as N}from"./PhWarningCircle.vue-d9e821d9.js";const z=["disabled","readonly"],R={key:1,class:"text-red-400"},T=g({__name:"index",props:{title:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},class:{type:String,default:void 0},readonly:{type:Boolean,default:!1},inputClass:{type:String,default:void 0},modelValue:{type:String,default:void 0},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{expose:c,emit:n}){const d=e,o=v(),u=b({get(){return d.modelValue},set(a){n("input",a),n("change",a),n("update:modelValue",a)}});function m(){var a;(a=o.value)==null||a.focus()}function p(){n("update:modelValue","")}return c({focus:m,clear:p}),(a,i)=>(l(),V(w,{"fixed-height":!1,title:e.title,hint:e.hint,error:e.error,class:t(a.$props.class),"box-class":e.condensed?"pt-1":"pt-2",readonly:e.readonly,disabled:e.disabled,condensed:e.condensed},{default:x(()=>[a.$slots.prefix?(l(),s("div",{key:0,class:t(["flex h-full select-none items-center pr-2 text-gray-400",[e.condensed?"pl-2":"pl-3"]])},[r(a.$slots,"prefix",{tag:"div"})],2)):f("",!0),h($("textarea",C({ref_key:"inputRef",ref:o},a.$attrs,{"onUpdate:modelValue":i[0]||(i[0]=y=>u.value=y),disabled:e.disabled,size:"8",class:["block h-full w-full bg-transparent text-current outline-none dark:placeholder-gray-500",[d.inputClass,a.$slots.prefix||e.condensed?"pl-2":"pl-3",e.error?"pr-10":a.$slots.suffix||e.condensed?"pr-2":"pr-3",{"cursor-not-allowed":e.readonly},e.disabled?"cursor-not-allowed text-gray-500":""]],readonly:e.readonly}),null,16,z),[[k,u.value]]),a.$slots.suffix||e.error?(l(),s("div",{key:1,class:t(["pointer-events-none absolute inset-y-0 right-0 ml-auto flex h-full select-none items-center pl-2 text-gray-400",[e.condensed?"pr-2":"pr-3"]])},[e.error?(l(),s("div",R,[B(S(N),{size:"20",class:"block"})])):r(a.$slots,"suffix",{key:0,tag:"div"})],2)):f("",!0)]),_:3},8,["title","hint","error","class","box-class","readonly","disabled","condensed"]))}});T.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},expose:[{name:"focus"},{name:"clear"}],props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inputClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{T as _};
//# sourceMappingURL=index-0804d564.js.map
