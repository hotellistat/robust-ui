import{d as b,r as d,o as f,a as s,b as o,F as v,y,g as i,n as g,e as _,s as k}from"./vue.esm-bundler-4b093791.js";const x=["data-value"],h=["onClick"],V=i("div",{class:"flex-1 border-b dark:border-gray-700"},null,-1),q=b({__name:"index",props:{tabs:{type:Array,required:!0},modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(r,{emit:u}){const c=r,m=d(),n=d([]),p=e=>{var a;(a=n.value)==null||a.push(e)};f(()=>{const e=n.value.find(a=>a.dataset.value===c.modelValue);e&&e.scrollIntoView({behavior:"smooth",block:"end"})});const l=e=>{u("update:modelValue",e)};return(e,a)=>(s(),o("div",{ref_key:"root",ref:m,class:"relative flex select-none justify-start overflow-x-auto"},[(s(!0),o(v,null,y(r.tabs,t=>(s(),o("button",{key:t.value,ref_for:!0,ref:p,type:"button","data-value":t.value,class:g(["whitespace-no-wrap flex-shrink-0",[t.value===r.modelValue?"border-b-2 border-primary-500":"border-b  text-gray-400 dark:border-gray-700 dark:text-gray-500"]])},[_(e.$slots,"tab",{tab:t,select:()=>l(t.value)},()=>[i("div",{class:"px-4 py-3",onClick:()=>l(t.value)},k(t.title),9,h)])],10,x))),128)),V],512))}});q.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};export{q as _};
//# sourceMappingURL=index-b97c47da.js.map
