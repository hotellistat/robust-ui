import{d as ae,r as o,c as b,o as te,S as ne,a as d,b as c,f as _,g as y,q as m,H as le,J as se,D,y as re,T as w,G as L}from"./vue.esm-bundler-Bz3qryIq.js";const ue=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex","onKeydown"],oe=["name","value"],ie={key:0},de={class:"text-xs text-gray-400 dark:text-gray-500"},ce=ae({__name:"index",props:{name:{type:String,default:void 0},tabindex:{type:[String,Number],default:void 0},modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},vertical:{type:Boolean,default:!1},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1}},emits:["focus","blur","update:modelValue","change","dragstart","dragend"],setup(t,{expose:H,emit:U}){const a=t,i=U,W=o(a.modelValue),h=o(!1),f=o(!1),n=o(a.modelValue),E=o(),v=o(),X=o(),Y=b(()=>[{"is-dragging":f.value},{"is-disabled":a.disabled},{"is-active":h.value},{"has-marker":a.showMarker}]),$=b(()=>({transform:`scale(${a.vertical?1:p(n.value)},  ${a.vertical?p(n.value):1})`})),A=b(()=>({left:a.vertical?void 0:p(n.value)*100+"%",top:a.vertical?100-p(n.value)*100+"%":void 0})),G=b(()=>a.markerValue===void 0?a.modelValue:a.markerValue),I=b(()=>{const e=[];let l=a.step*Math.ceil(r()/a.step);for(;l<=u();)e.push(l),l+=a.step;return e}),r=()=>a.max>a.min?a.min:0,u=()=>a.max>a.min?a.max:100,J=()=>{E.value.focus()},R=()=>{V(W)},P=()=>{h.value=!0,i("focus")},C=()=>{h.value=!1,i("blur")},M=e=>{E.value.contains(e.target)||C()},N=e=>{e=S(e),a.snapToSteps&&(e=ee(e)),V(e)},V=e=>{e=S(e),e!==n.value&&(n.value=e,i("update:modelValue",e),i("change",e))},z=()=>{N(n.value+a.step)},q=()=>{N(n.value-a.step)},j=e=>({left:e+"%"}),O=()=>{document.addEventListener("touchend",x),document.addEventListener("mouseup",x),document.addEventListener("click",M),document.addEventListener("touchstart",M),Z()},Q=()=>{document.removeEventListener("touchend",x),document.removeEventListener("mouseup",x),document.removeEventListener("click",M)},Z=()=>{const e=S(n.value?n.value:0);V(e)},K=e=>{a.disabled||(h.value||P(),f.value=!0,F(e),document.addEventListener("touchmove",k),document.addEventListener("mousemove",k),i("dragstart",n.value,e))},k=e=>{F(e)},F=e=>{if(!v.value)return;const l=v.value.getBoundingClientRect();let s;if(a.vertical){const B=e.touches?e.touches[0].pageY:e.pageY,T=v.value.offsetHeight;s=(l.bottom-B)/T}else{const B=e.touches?e.touches[0].pageX:e.pageX,T=v.value.offsetWidth;s=(B-l.left)/T}const g=S(r()+s*(u()-r()));f.value&&V(Math.round(g))},x=e=>{f.value&&(f.value=!1,a.snapToSteps&&a.modelValue%a.step!==0&&N(a.modelValue),document.removeEventListener("touchmove",k),document.removeEventListener("mousemove",k),i("dragend",n.value,e))},ee=e=>{const l=Math.floor(e/a.step)*a.step,s=l+a.step,g=(l+s)/2;return l<r()?s>u()?e:s:e>=g&&s<=u()?s:l},p=e=>(e-r())/(u()-r()),S=e=>e<r()?r():e>u()?u():e;return te(()=>{O()}),ne(()=>{Q()}),H({getPointStyle:j,focus:J,reset:R}),(e,l)=>(d(),c("div",{ref_key:"slider",ref:E,class:m(["base-slider select-none",Y.value]),role:"slider","aria-valuemax":u(),"aria-valuemin":r(),"aria-valuenow":n.value,tabindex:t.disabled?null:t.tabindex||"0",onBlur:C,onFocus:P,onKeydown:[w(L(q,["prevent"]),["down"]),w(L(q,["prevent"]),["left"]),w(L(z,["prevent"]),["right"]),w(L(z,["prevent"]),["up"])]},[t.name?(d(),c("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:t.name,value:t.modelValue},null,8,oe)):_("",!0),y("div",{ref_key:"track",ref:v,class:m(["base-slider__track relative",[t.vertical?"vertical ":""]]),onMousedown:K,onTouchstart:K},[y("div",{class:m(["base-slider__track-background bg-gray-300 dark:bg-gray-400",[t.vertical?"vertical ":""]])},[t.snapToSteps?(d(),c("div",ie,[(d(!0),c(le,null,se(I.value,(s,g)=>(d(),c("span",{key:g,class:"base-slider__snap-point",style:D({[t.vertical?"bottom":"left"]:100*p(s)+"%"})},null,4))),128))])):_("",!0)],2),y("div",{class:m(["base-slider__track-fill bg-primary-400",[t.vertical?"vertical ":""]]),style:D($.value)},null,6),y("div",{ref_key:"thumb",ref:X,class:m(["base-slider__thumb bg-primary-400",[t.vertical?"vertical ":""]]),style:D(A.value)},[t.showMarker?(d(),c("div",{key:0,class:m(["base-slider__marker text-xs",[t.vertical?"vertical ":""]])},[y("span",de,re(G.value),1)],2)):_("",!0)],6)],34)],42,ue))}});ce.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},expose:[{name:"getPointStyle"},{name:"focus"},{name:"reset"}],props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"tabindex",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"vertical",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focus"},{name:"blur"},{name:"update:modelValue"},{name:"change"},{name:"dragstart"},{name:"dragend"}]};export{ce as _};
