import{d as p,t as d,a,o as m,b as c,g as i,C as r,u as t}from"./vue.esm-bundler-7f60e394.js";const g={name:"RobustLinearProgress"},f=p({...g,props:{height:{type:Number,default:8},progress:{type:Number,default:50}},setup(s){const o=s,{height:e,progress:n}=d(o),u=a(()=>`height:${e.value}px`),l=a(()=>`width:clamp(${e.value}px, ${n.value}%, 100%);`);return(h,y)=>(m(),c("div",{class:"wrapper relative min-w-16 rounded-full bg-gray-100 dark:bg-gray-600",style:r([t(u)])},[i("div",{class:"progress bg-primary h-full rounded-full bg-primary-500",style:r([t(l)])},null,4)],4))}});f.__docgenInfo={exportName:"default",displayName:"LinearProgress",description:"",tags:{},props:[{name:"height",type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"50"}}]};export{f as _};
//# sourceMappingURL=index-88c349b4.js.map