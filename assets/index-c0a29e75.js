import{d as c,c as p,a as i,b as u,g as a,l as g,J as b,n,s as y,f as d,e as f}from"./vue.esm-bundler-22b53bfc.js";const v={class:"inline-block"},h={key:0,class:"w-full select-none pt-px"},V=c({__name:"index",props:{modelValue:{type:[String,Number,Boolean,Object],required:!0},value:{type:[String,Number,Boolean,Object],required:!0},title:{type:String,default:""}},emits:["update:modelValue","change"],setup(l,{emit:o}){const e=l,t=p({get(){return e.modelValue===e.value},set(){o("update:modelValue",e.value),o("change",e.value)}});return(r,s)=>(i(),u("div",v,[a("label",{class:n([[r.$slots.title?"items-start":"items-center"],"flex items-center"])},[g(a("input",{"onUpdate:modelValue":s[0]||(s[0]=m=>t.value=m),type:"radio",class:"hidden"},null,512),[[b,t.value]]),a("div",{class:n(["relative mr-2 box-content flex h-4 w-4 flex-shrink-0 flex-grow-0 items-center justify-center rounded-full border transition-all duration-100",[t.value?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[a("div",{class:n([[t.value?"opacity-1":"opacity-0"],"h-2 w-2 rounded-full bg-white transition-all duration-100"])},null,2)],2),l.title?(i(),u("div",h,y(l.title),1)):d("",!0),r.$slots.title?f(r.$slots,"title",{key:1}):d("",!0)],2)]))}});V.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object"},required:!0},{name:"value",type:{name:"string|number|boolean|object"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};export{V as _};
//# sourceMappingURL=index-c0a29e75.js.map