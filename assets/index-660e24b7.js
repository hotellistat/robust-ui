import{d as m,i as b,t as p,a as v,o as r,x as d,y as h,g,b as u,e as s,f as n,p as f,u as a,z as x}from"./vue.esm-bundler-7f60e394.js";import{_ as w}from"./index-cdad79fe.js";const k={primary:"bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white  ring-primary-500 shadow-glow shadow-primary-500/50","primary-outline":"bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10",warn:"bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500 shadow-glow shadow-yellow-500/50",danger:"bg-rose-500 active:bg-rose-600 text-gray-900/75 shadow ring-rose-500 shadow-glow shadow-rose-500/50","danger-text":"hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500","danger-outline":"border border-rose-500 hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500",muted:"bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white ring-gray-200",transparent:"hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white",dark:"hover:bg-gray-900 bg-gray-800 text-gray-200 ring-gray-800"},B={key:0,class:"mr-2"},V={class:"whitespace-no-wrap inline-block truncate align-top"},C={key:1,class:"ml-2"},$=m({__name:"index",props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},variant:{type:[String,Boolean],default:"primary"},condensed:{type:Boolean,default:!1}},setup(e){const c=e,y=b("enableCursorPointer",!0),{loading:l,variant:i}=p(c),o=v(()=>{if(i.value!==!1)return k[i.value]});return(t,N)=>(r(),d(x(e.tag),{disabled:e.disabled,class:f(["flex items-center justify-center truncate font-medium",[a(y)?"":"cursor-default",a(o)&&e.disabled?"bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-400":void 0,a(o)&&!e.disabled?a(o)+" ring-opacity-50 focus:ring":void 0,e.condensed?"h-8 px-3":"h-10 px-4",e.rounded?"rounded-full":"rounded-md"]])},{default:h(()=>[g("div",{class:f(["flex select-none items-center",[a(l)?"opacity-0":"opacity-1"]])},[t.$slots.prefix?(r(),u("div",B,[s(t.$slots,"prefix",{tag:"div"})])):n("",!0),g("span",V,[s(t.$slots,"default")]),t.$slots.suffix?(r(),u("div",C,[s(t.$slots,"suffix",{tag:"div"})])):n("",!0)],2),a(l)?(r(),d(w,{key:0,size:20,stroke:2,class:"spinner absolute"})):n("",!0)]),_:3},8,["disabled","class"]))}});$.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"string | false"},defaultValue:{func:!1,value:"'primary'"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"prefix",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"default"},{name:"suffix",scoped:!0,bindings:[{name:"tag",title:"binding"}]}]};export{$ as _};
//# sourceMappingURL=index-660e24b7.js.map
