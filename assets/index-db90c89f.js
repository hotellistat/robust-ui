import{d as g,c as v,e as r,f as o,k as n,q as V,v as h,s as d,x as k,u as x,y as u,z as c,g as m,j as f}from"./vue.esm-bundler-5304782f.js";import{H as N}from"./PhCheck.vue-ea5bd38e.js";const S={class:"inline-block"},w={class:"grid grid-cols-[1fr,auto] items-center"},A={class:"w-full select-none"},B={key:0},C={key:1,class:"opacity-60 text-sm"},_=g({__name:"index",props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},description:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(l,{emit:p}){const a=l,i=p,y="_"+Math.random().toString(36).substr(2,9),s=v({get(){return Array.isArray(a.modelValue)?a.modelValue.includes(a.value):a.modelValue===a.value},set(t){let e=a.modelValue;Array.isArray(e)?t?e.push(a.value):e.splice(e.indexOf(a.value),1):t?e=a.value:e=a.disabledValue,i("update:modelValue",e),i("change",e)}});return(t,e)=>(r(),o("div",S,[n("label",w,[V(n("input",{id:y,"onUpdate:modelValue":e[0]||(e[0]=b=>s.value=b),type:"checkbox",class:"hidden"},null,512),[[h,s.value]]),n("div",{class:d(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 rounded border text-white transition-all duration-100",[s.value?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[k(x(N),{class:d([[s.value?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),n("div",A,[u(c(l.title)+" ",1),m(t.$slots,"title")]),l.description||t.$slots.description?(r(),o("div",B)):f("",!0),l.description||t.$slots.description?(r(),o("p",C,[u(c(l.description)+" ",1),m(t.$slots,"description")])):f("",!0)])]))}});_.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"},{name:"description"}]};export{_};
