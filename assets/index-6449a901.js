import{d as g,t as b,c as f,a as l,b as s,l as y,A as v,g as e,n as r,s as d,f as h}from"./vue.esm-bundler-ae7acd23.js";const x={class:"flex items-center gap-x-3"},V={key:0},k={class:"text-sm text-gray-400"},_=g({__name:"index",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},modelValue:{type:[Boolean,Number,String,Object],required:!0}},emits:["update:modelValue","change","input"],setup(t,{emit:u}){const c=t,o=u,{modelValue:m}=b(c),a=f({get:()=>m.value,set:n=>{o("input",n),o("change",n),o("update:modelValue",n)}});return(n,i)=>(l(),s("label",x,[y(e("input",{"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p),class:"hidden",type:"checkbox"},null,512),[[v,a.value]]),e("div",{type:"checkbox",class:r(["duration-250 relative box-content h-4 w-8 rounded-2xl border-4 transition-colors",[a.value?"border-primary-500 bg-primary-500":"border-gray-300 bg-gray-300 dark:border-gray-500 dark:bg-gray-500"]])},[e("div",{class:r(["duration-250 absolute top-0 left-0 h-4 w-4 rounded-full bg-white transition ease-in-out",[a.value?"translate-x-4":""]])},null,2)],2),t.title?(l(),s("div",V,[e("div",null,d(t.title),1),e("div",k,d(t.description),1)])):h("",!0)]))}});_.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"boolean|number|string|object"},required:!0}],events:[{name:"update:modelValue"},{name:"change"},{name:"input"}]};export{_};
//# sourceMappingURL=index-6449a901.js.map
