import{d as c,o as t,f as a,n as d,g as i,e as n,r as o,x as u,L as l,v as r}from"./vue.esm-bundler.33188a4f.js";import{S as f}from"./index.60f6c08f.js";const m={class:"relative rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"},p={key:0,class:"relative overflow-hidden rounded-md p-4 sm:p-6"},g={class:"flex"},y={key:1,class:"text-gray-500 dark:text-gray-500"},v={class:"p-4 sm:p-6"},b={name:"RobustContentBox"},h=c({...b,props:{title:{type:String,default:void 0},description:{type:String,default:void 0},stripe:{type:Boolean,default:!1},stripeClass:{type:String,default:"bg-primary-500"}},setup(e){return(s,x)=>(t(),a("section",m,[e.description!==void 0||e.title!==void 0?(t(),a("header",p,[e.stripe?(t(),a("div",{key:0,class:d(["absolute inset-x-0 top-0 h-1",e.stripeClass])},null,2)):i("",!0),n("h1",g,[n("div",{class:d(["text-xl font-semibold",[e.description!==void 0?"mb-2":""]])},[o(s.$slots,"title",{title:e.title},()=>[l(r(e.title),1)])],2)]),e.description!==void 0?(t(),a("p",y,[o(s.$slots,"description",{description:e.description},()=>[l(r(e.description),1)])])):i("",!0)])):i("",!0),u(f),n("div",v,[o(s.$slots,"default")])]))}});h.__docgenInfo={exportName:"default",displayName:"ContentBox",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"stripe",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stripeClass",type:{name:"string"},defaultValue:{func:!1,value:"'bg-primary-500'"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"title",title:"binding"}]},{name:"description",scoped:!0,bindings:[{name:"description",title:"binding"}]},{name:"default"}]};export{h as _};
//# sourceMappingURL=index.13ec36d0.js.map