import{d as g,a as f,o as u,f as c,A as b,S as y,u as a,e as r,C as v,n as o,v as h,g as m,r as V}from"./vue.esm-bundler-bdd4c61f.js";const _={class:"inline-block"},k=["id"],w=["for"],x={key:0,class:"w-full select-none truncate pt-px leading-4"};let S=0;const N=g({__name:"index",props:{modelValue:{type:[String,Number,Boolean,Object],required:!0},value:{type:[String,Number,Boolean,Object],required:!0},title:{type:String,default:""}},emits:["update:modelValue","change"],setup(n,{emit:s}){const l=n,i=(++S).toString(),t=f({get(){return l.modelValue===l.value},set(){let e=l.modelValue;e=l.value,s("update:modelValue",e),s("change",e)}});return(e,d)=>(u(),c("div",_,[b(r("input",{id:`radio_${a(i)}`,"onUpdate:modelValue":d[0]||(d[0]=p=>v(t)?t.value=p:null),type:"radio",class:"hidden"},null,8,k),[[y,a(t)]]),r("label",{for:`radio_${a(i)}`,class:o([[e.$slots.title?"items-start":"items-center"],"flex items-center"])},[r("div",{class:o(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 items-center justify-center rounded-full border transition-all duration-100",[a(t)?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[r("div",{class:o([[a(t)?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),n.title?(u(),c("div",x,h(n.title),1)):m("",!0),e.$slots.title?V(e.$slots,"title",{key:1}):m("",!0)],10,w)]))}});N.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"},required:!0},{name:"value",type:{name:"string|number|boolean|object"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};export{N as _};
//# sourceMappingURL=index-a4664727.js.map
