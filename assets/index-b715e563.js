import{d as c,a as p,o,b as u,g as r,C as y,I as b,p as d,y as g,u as v,t as V,f as i,e as h}from"./vue.esm-bundler-b37ea11a.js";import{H as x}from"./PhCheck.vue-97ccf9ac.js";const k={class:"inline-block"},N={class:"flex items-start"},_={key:0,class:"w-full select-none pt-px"},w=c({__name:"index",props:{modelValue:{type:[Array,String,Number,Boolean],default:!1},value:{type:[Array,String,Number,Boolean],default:!0},disabledValue:{type:[Array,String,Number,Boolean],default:!1},title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(s,{emit:n}){const a=s,m="_"+Math.random().toString(36).substr(2,9),t=p({get(){return Array.isArray(a.modelValue)?a.modelValue.includes(a.value):a.modelValue===a.value},set(l){let e=a.modelValue;Array.isArray(e)?l?e.push(a.value):e.splice(e.indexOf(a.value),1):l?e=a.value:e=a.disabledValue,n("update:modelValue",e),n("change",e)}});return(l,e)=>(o(),u("div",k,[r("label",N,[y(r("input",{id:m,"onUpdate:modelValue":e[0]||(e[0]=f=>t.value=f),type:"checkbox",class:"hidden"},null,512),[[b,t.value]]),r("div",{class:d(["relative mr-2 box-content h-4 w-4 flex-shrink-0 flex-grow-0 rounded border text-white transition-all duration-100",[t.value?"border-primary-500 bg-primary-500 ":"border-gray-300  bg-gray-100 dark:border-gray-500 dark:bg-gray-700"]])},[g(v(x),{class:d([[t.value?"opacity-1":"opacity-0"],"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-100"]),size:"14",weight:"bold"},null,8,["class"])],2),s.title?(o(),u("div",_,V(s.title),1)):i("",!0),l.$slots.title?h(l.$slots,"title",{key:1}):i("",!0)])]))}});w.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabledValue",type:{name:"array|string|number|boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"title"}]};export{w as _};
//# sourceMappingURL=index-b715e563.js.map