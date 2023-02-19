import{d as c,G as m,b as y,q as g,o as a,e as n,y as r,g as l,j as p,f as b,u as i,m as v,n as h}from"./vue.esm-bundler-41a4e227.js";const x=["for"],k={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},V={key:1,class:"mt-2"},w={key:0,class:"select-none text-xs text-gray-400"},S={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"};let B=0;const C=c({__name:"index",props:{title:{type:String,default:void 0},class:{type:String,default:void 0},boxClass:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{expose:o}){const u=m(),d=(++B).toString(),f=y(()=>Object.fromEntries(Object.entries(u).filter(t=>/^on[^a-z]/.test(t[0])))),s=g();return o({wrapperRef:s}),(t,j)=>(a(),n("label",{for:i(d),class:h(["inline-block",[t.$props.class]])},[e.title?(a(),n("div",k,r(e.title),1)):l("",!0),p("div",v(i(f),{ref_key:"wrapperRef",ref:s,class:["relative flex rounded-md border border-gray-200 ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring dark:border-gray-600 focus-within:dark:border-primary-500",[t.$props.boxClass,e.fixedHeight?e.condensed?"h-8":"h-10":void 0,e.disabled?"text-gray-500":""]]}),[b(t.$slots,"default",{cuid:i(d),wrapperRef:s.value})],16),e.hint!==void 0||e.error!==void 0?(a(),n("div",V,[e.hint!==void 0?(a(),n("div",w,r(e.hint),1)):l("",!0),e.error!==void 0?(a(),n("div",S,r(e.error),1)):l("",!0)])):l("",!0)],10,x))}});C.__docgenInfo={exportName:"default",displayName:"InputWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"boxClass",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"cuid",title:"binding"},{name:"wrapper-ref",title:"binding"}]}]};export{C as _};
//# sourceMappingURL=index-81d554aa.js.map
