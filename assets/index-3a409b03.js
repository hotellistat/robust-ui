import{d as b,t as y,c as m,a as r,j as g,k as c,n,x as p,e as s,b as u,u as o,f as i,g as v}from"./vue.esm-bundler-4b093791.js";import{_ as h}from"./index-06095ad2.js";const w={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white  ring-primary-500 shadow-glow shadow-primary-500/50","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500 shadow-glow shadow-yellow-500/50",danger:"bg-rose-400 active:bg-rose-600 text-gray-900 shadow ring-rose-500 shadow-glow shadow-rose-500/50","danger-text":"hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500","danger-outline":"border border-rose-500 hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500",muted:"bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white ring-gray-200",transparent:"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white",dark:"hover:bg-gray-900 bg-gray-800 text-gray-200 ring-gray-800"},x=b({__name:"index",props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:[String,Boolean],default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const f=e,{loading:t,variant:d}=y(f),l=m(()=>{if(d.value!==!1)return w[d.value]});return(a,k)=>(r(),g(p(e.tag),{disabled:e.disabled,class:n(["flex items-center justify-center font-medium",[l.value&&e.disabled?" bg-gray-900/5 text-gray-900/40 dark:bg-white/10 dark:text-white/50":void 0,l.value&&!e.disabled?l.value+" ring-opacity-50 focus:ring":void 0,e.condensed?"h-8 gap-2 px-3":" h-10 gap-3 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:c(()=>[s(a.$slots,"raw",{},()=>[a.$slots.prefix?(r(),u("div",{key:0,class:n([o(t)?"invisible":"visible"])},[s(a.$slots,"prefix",{tag:"div"})],2)):i("",!0),v("span",{class:n([[o(t)?"invisible":"visible"],"whitespace-no-wrap inline-block truncate align-top"])},[s(a.$slots,"default")],2),a.$slots.suffix?(r(),u("div",{key:1,class:n([o(t)?"invisible":"visible"])},[s(a.$slots,"suffix",{tag:"div"})],2)):i("",!0),o(t)?(r(),g(h,{key:2,size:e.condensed?16:20,stroke:2,class:"spinner absolute"},null,8,["size"])):i("",!0)])]),_:3},8,["disabled","class"]))}});x.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string | false"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"raw"},{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{x as _};
//# sourceMappingURL=index-3a409b03.js.map
