import{a as g,e as b,o as u,k as m,J as f,a2 as y,u as a,j as l,L as v,n,E as h,l as c,r as V}from"./iframe.d0acd4d4.js";const k={class:"inline-block"},_=["id"],w=["for"],j={key:0,class:"w-full select-none leading-4"};let N=0;const S=g({__name:"index",props:{modelValue:{type:[String,Number,Boolean,Object],required:!0},value:{type:[String,Number,Boolean,Object],required:!0},title:{type:String,default:""}},emits:["update:modelValue","change"],setup(o,{emit:s}){const r=o,i=(++N).toString(),t=b({get(){return r.modelValue===r.value},set(){let e=r.modelValue;e=r.value,s("update:modelValue",e),s("change",e)}});return(e,d)=>(u(),m("div",k,[f(l("input",{id:`radio_${a(i)}`,"onUpdate:modelValue":d[0]||(d[0]=p=>v(t)?t.value=p:null),type:"radio",class:"hidden"},null,8,_),[[y,a(t)]]),l("label",{for:`radio_${a(i)}`,class:n([[e.$slots.title?"items-start":"items-center"],"flex items-center"])},[l("div",{class:n(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 items-center justify-center rounded-full border transition-all duration-100",[a(t)?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[l("div",{class:n([[a(t)?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),o.title&&!e.$slots.title?(u(),m("div",j,h(o.title),1)):c("",!0),l("div",null,[e.$slots.title?V(e.$slots,"title",{key:0}):c("",!0)])],10,w)]))}});S.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"},required:!0},{name:"value",type:{name:"string|number|boolean|object"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};export{S as _};
//# sourceMappingURL=index.3827de92.js.map