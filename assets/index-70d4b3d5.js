import{d as o,a4 as u,b as f,a as c,o as a,e as n,t as s,g as l,z as m,A as y,m as p,u as g,N as b,p as v,f as x}from"./vue.esm-bundler-17561e39.js";const h={key:0,class:"mb-1 block select-none text-sm font-medium text-gray-500 dark:text-gray-400"},k={key:1,class:"mt-2"},w={key:0,class:"select-none text-xs text-gray-400"},V={key:1,class:"select-none text-xs text-red-400 dark:text-red-400"},C=o({__name:"index",props:{tag:{type:String,default:"div"},title:{type:String,default:void 0},class:{type:String,default:void 0},boxClass:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},fixedHeight:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{expose:i}){const d=u();f(()=>Object.fromEntries(Object.entries(d).filter(t=>/^on[^a-z]/.test(t[0]))));const r=c();return i({wrapperRef:r}),(t,S)=>(a(),n("div",{class:v(["inline-block",[t.$props.class]])},[e.title?(a(),n("label",h,s(e.title),1)):l("",!0),(a(),m(b(e.tag),p(g(d),{ref_key:"wrapperRef",ref:r,class:["relative flex w-full rounded-md border border-black/[.15] border-gray-200 text-left ring-primary-500 ring-opacity-30 focus-within:border-primary-500 focus-within:outline-none focus-within:ring dark:border-white/[.15] dark:border-gray-600 focus-within:dark:border-primary-500",[t.$props.boxClass,e.fixedHeight?e.condensed?"h-8":"h-10":void 0,e.disabled?"text-gray-500":""]]}),{default:y(()=>[x(t.$slots,"default",{wrapperRef:r.value})]),_:3},16,["class"])),e.hint!==void 0||e.error!==void 0?(a(),n("div",k,[e.hint!==void 0?(a(),n("div",w,s(e.hint),1)):l("",!0),e.error!==void 0?(a(),n("div",V,s(e.error),1)):l("",!0)])):l("",!0)],2))}});C.__docgenInfo={exportName:"default",displayName:"InputWrapper",description:"",tags:{},expose:[{name:"wrapperRef"}],props:[{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"class",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"boxClass",type:{name:"string | string[] | object"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixedHeight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"condensed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"wrapper-ref",title:"binding"}]}]};export{C as _};
//# sourceMappingURL=index-70d4b3d5.js.map
