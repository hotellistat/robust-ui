import{a as f,y as d,B as v,o as s,k as o,C as b,D as y,n as g,r as k,j as i,E as _}from"./iframe.d0acd4d4.js";const x=["data-value"],h=["onClick"],V=i("div",{class:"flex-1 border-b-2 dark:border-gray-700"},null,-1),C=f({__name:"index",props:{tabs:{type:Array,required:!0},modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(r,{emit:u}){const c=r,m=d(),l=d([]),p=e=>{var t;(t=l.value)==null||t.push(e)};v(()=>{const e=l.value.find(t=>t.dataset.value===c.modelValue);e&&(console.log(e),e.scrollIntoView({behavior:"smooth",block:"end"}))});const n=e=>{u("update:modelValue",e)};return(e,t)=>(s(),o("div",{ref_key:"root",ref:m,class:"relative flex select-none justify-start overflow-x-auto"},[(s(!0),o(b,null,y(r.tabs,a=>(s(),o("div",{key:a.value,ref_for:!0,ref:p,"data-value":a.value,class:g(["whitespace-no-wrap flex-shrink-0 border-b-2 font-medium",[a.value===r.modelValue?"border-primary-500":"text-gray-400 dark:border-gray-700 dark:text-gray-500"]])},[k(e.$slots,"tab",{tab:a,select:()=>n(a.value)},()=>[i("div",{class:"px-4 py-3",onClick:()=>n(a.value)},_(a.title),9,h)])],10,x))),128)),V],512))}});C.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",type:{name:"Tab[]"},required:!0},{name:"modelValue",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"tab",scoped:!0,bindings:[{name:"tab",title:"binding"},{name:"select",title:"binding"}]}]};export{C as _};
//# sourceMappingURL=index.311c326a.js.map