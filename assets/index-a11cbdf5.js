import{d as p,a as y,o as u,b as d,g as r,B as b,G as g,u as s,D as V,n as i,y as v,x as h,f as m,e as x}from"./vue.esm-bundler-e6794ced.js";import{H as k}from"./PhCheck.vue-470ff877.js";const B={class:"inline-block"},N={class:"flex items-start"},_={key:0,class:"w-full select-none pt-px"},w=p({__name:"index",props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(n,{emit:o}){const a=n,f="_"+Math.random().toString(36).substr(2,9),l=y({get(){return Array.isArray(a.modelValue)?a.modelValue.includes(a.value):a.modelValue===a.value},set(t){let e=a.modelValue;Array.isArray(e)?t?e.push(a.value):e.splice(e.indexOf(a.value),1):t?e=a.value:e=a.disabledValue,o("update:modelValue",e),o("change",e)}});return(t,e)=>(u(),d("div",B,[r("label",N,[b(r("input",{id:f,"onUpdate:modelValue":e[0]||(e[0]=c=>V(l)?l.value=c:null),type:"checkbox",class:"hidden"},null,512),[[g,s(l)]]),r("div",{class:i(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 rounded border text-white transition-all duration-100",[s(l)?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[v(s(k),{class:i([[s(l)?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),n.title?(u(),d("div",_,h(n.title),1)):m("",!0),t.$slots.title?x(t.$slots,"title",{key:1}):m("",!0)])]))}});w.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};export{w as _};
//# sourceMappingURL=index-a11cbdf5.js.map