import{d as x,t as R,l as c,a as g,o as V,f as D,x as d,w as b,e as i,u as o,n as p,v as B,m as C,M as P,H as S,b as N,C as U,g as $,F as z}from"./vue.esm-bundler-bdd4c61f.js";import{P as _}from"./index-76d4f674.js";import{_ as A,f as F}from"./index-0f7d3a02.js";import{_ as M}from"./index-65b9075a.js";import{n as O,A as W}from"./vue-phosphor-icons-f4f4d043.js";import{o as j}from"./index-39205538.js";const E=["id"],H={class:"min-w-0 truncate tabular-nums"},I=x({__name:"index",props:{title:{type:String,default:void 0},hint:{type:String,default:void 0},modelValue:{type:Object,default:void 0},error:{type:String,default:void 0},class:{type:String,default:void 0},condensed:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},emits:["blur","update:modelValue","change","blur"],setup(t,{emit:s}){const k=t,{modelValue:u}=R(k),a=c(!1),m=c(),f=c();j(m,e=>{a.value&&(f.value.wrapperRef.contains(e.target)&&(e.stopPropagation(),e.preventDefault()),w(),s("blur"))});const r=g({get(){return u!=null&&u.value?u.value:new Date},set(e){a.value=!1,s("update:modelValue",e),s("change",e),s("blur")}}),h=g(()=>{if(!r.value)return"Select date";const e=r.value;try{return e?F(e,"P"):"Unknown"}catch{return}});function w(){a.value===!0&&(a.value=!1,s("blur"))}return(e,l)=>{var v,y;return V(),D(z,null,[d(M,{ref_key:"inputWrapperRef",ref:f,title:t.title,hint:t.hint,error:t.error,class:p(e.$props.class),readonly:P,condensed:t.condensed,onClick:l[0]||(l[0]=S(n=>a.value=!a.value,["stop"]))},{default:b(n=>[i("div",{class:p(["flex h-full items-center pr-2 text-gray-400",[t.condensed?"pl-2":"pl-3"]])},[d(o(O),{size:"20"})],2),i("div",C({id:n.cuid,ref:"select",class:"flex h-full w-full cursor-default items-center bg-transparent pl-2 text-current outline-none"},e.$attrs),[i("div",H,B(o(h)),1)],16,E),i("div",{class:p(["flex h-full flex-shrink-0 items-center pr-3 text-gray-400 dark:text-gray-500",[t.condensed?"pl-2":"pl-3"]])},[d(o(W),{size:14,weight:"bold",class:p(["transition-transform duration-200",{"rotate-180 transform":a.value}])},null,8,["class"])],2)]),_:1},8,["title","hint","error","class","condensed"]),(v=f.value)!=null&&v.wrapperRef?(V(),N(o(_),{key:0,ref_key:"popperRef",ref:m,open:a.value,"onUpdate:open":l[2]||(l[2]=n=>a.value=n),class:"z-[100] origin-top-left","append-to":(y=f.value)==null?void 0:y.wrapperRef,options:{placement:"bottom-start"}},{default:b(()=>[d(A,{modelValue:o(r),"onUpdate:modelValue":l[1]||(l[1]=n=>U(r)?r.value=n:null)},null,8,["modelValue"])]),_:1},8,["open","append-to"])):$("",!0)],64)}}});I.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"Date"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dark",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"blur"},{name:"update:modelValue"},{name:"change"}]};export{I as _};
//# sourceMappingURL=index-5677d2be.js.map