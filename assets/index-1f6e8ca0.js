import{d as c,b as p,o as i,e as u,j as l,C as g,Y as b,p as n,t as y,g as d,f}from"./vue.esm-bundler-17561e39.js";const v={class:"inline-block"},V={key:0,class:"w-full select-none pt-px"},h=c({__name:"index",props:{modelValue:{type:[String,Number,Boolean,Object],required:!0},value:{type:[String,Number,Boolean,Object],required:!0},title:{type:String,default:""}},emits:["update:modelValue","change"],setup(r,{emit:o}){const t=r,a=p({get(){return t.modelValue===t.value},set(){let e=t.modelValue;e=t.value,o("update:modelValue",e),o("change",e)}});return(e,s)=>(i(),u("div",v,[l("label",{class:n([[e.$slots.title?"items-start":"items-center"],"flex items-center"])},[g(l("input",{"onUpdate:modelValue":s[0]||(s[0]=m=>a.value=m),type:"radio",class:"hidden"},null,512),[[b,a.value]]),l("div",{class:n(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 items-center justify-center rounded-full border transition-all duration-100",[a.value?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[l("div",{class:n([[a.value?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),r.title?(i(),u("div",V,y(r.title),1)):d("",!0),e.$slots.title?f(e.$slots,"title",{key:1}):d("",!0)],2)]))}});h.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"},required:!0},{name:"value",type:{name:"string|number|boolean|object"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};export{h as _};
//# sourceMappingURL=index-1f6e8ca0.js.map
