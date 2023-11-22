import{d as ee,r as o,c as y,o as ae,M as te,a as d,b as c,f as T,g as b,n as m,F as ne,y as le,K as D,s as se,N as _,B as w}from"./vue.esm-bundler-ebcf9369.js";const re=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex","onKeydown"],ue=["name","value"],oe={key:0},ie={class:"text-xs text-gray-400 dark:text-gray-500"},de=ee({__name:"index",props:{name:{type:String,default:void 0},tabindex:{type:[String,Number],default:void 0},modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},vertical:{type:Boolean,default:!1},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1}},emits:["focus","blur","update:modelValue","change","dragstart","dragend"],setup(t,{expose:U,emit:i}){const a=t,W=o(a.modelValue),h=o(!1),v=o(!1),n=o(a.modelValue),L=o(),f=o(),X=o(),Y=y(()=>[{"is-dragging":v.value},{"is-disabled":a.disabled},{"is-active":h.value},{"has-marker":a.showMarker}]),$=y(()=>({transform:`scale(${a.vertical?1:p(n.value)},  ${a.vertical?p(n.value):1})`})),A=y(()=>({left:a.vertical?void 0:p(n.value)*100+"%",top:a.vertical?100-p(n.value)*100+"%":void 0})),H=y(()=>a.markerValue===void 0?a.modelValue:a.markerValue),I=y(()=>{const e=[];let l=a.step*Math.ceil(r()/a.step);for(;l<=u();)e.push(l),l+=a.step;return e}),r=()=>a.max>a.min?a.min:0,u=()=>a.max>a.min?a.max:100,R=()=>{L.value.focus()},j=()=>{V(W)},P=()=>{h.value=!0,i("focus")},C=()=>{h.value=!1,i("blur")},M=e=>{L.value.contains(e.target)||C()},E=e=>{e=S(e),a.snapToSteps&&(e=Z(e)),V(e)},V=e=>{e=S(e),e!==n.value&&(n.value=e,i("update:modelValue",e),i("change",e))},z=()=>{E(n.value+a.step)},K=()=>{E(n.value-a.step)},G=e=>({left:e+"%"}),J=()=>{document.addEventListener("touchend",x),document.addEventListener("mouseup",x),document.addEventListener("click",M),document.addEventListener("touchstart",M),Q()},O=()=>{document.removeEventListener("touchend",x),document.removeEventListener("mouseup",x),document.removeEventListener("click",M)},Q=()=>{const e=S(n.value?n.value:0);V(e)},F=e=>{a.disabled||(h.value||P(),v.value=!0,q(e),document.addEventListener("touchmove",k),document.addEventListener("mousemove",k),i("dragstart",n.value,e))},k=e=>{q(e)},q=e=>{if(!f.value)return;const l=f.value.getBoundingClientRect();let s;if(a.vertical){const N=e.touches?e.touches[0].pageY:e.pageY,B=f.value.offsetHeight;s=(l.bottom-N)/B}else{const N=e.touches?e.touches[0].pageX:e.pageX,B=f.value.offsetWidth;s=(N-l.left)/B}const g=S(r()+s*(u()-r()));v.value&&V(Math.round(g))},x=e=>{v.value&&(v.value=!1,a.snapToSteps&&a.modelValue%a.step!==0&&E(a.modelValue),document.removeEventListener("touchmove",k),document.removeEventListener("mousemove",k),i("dragend",n.value,e))},Z=e=>{const l=Math.floor(e/a.step)*a.step,s=l+a.step,g=(l+s)/2;return l<r()?s>u()?e:s:e>=g&&s<=u()?s:l},p=e=>(e-r())/(u()-r()),S=e=>e<r()?r():e>u()?u():e;return ae(()=>{J()}),te(()=>{O()}),U({getPointStyle:G,focus:R,reset:j}),(e,l)=>(d(),c("div",{ref_key:"slider",ref:L,class:m(["base-slider select-none",Y.value]),role:"slider","aria-valuemax":u(),"aria-valuemin":r(),"aria-valuenow":n.value,tabindex:t.disabled?null:t.tabindex||"0",onBlur:C,onFocus:P,onKeydown:[_(w(K,["prevent"]),["down"]),_(w(K,["prevent"]),["left"]),_(w(z,["prevent"]),["right"]),_(w(z,["prevent"]),["up"])]},[t.name?(d(),c("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:t.name,value:t.modelValue},null,8,ue)):T("",!0),b("div",{ref_key:"track",ref:f,class:m(["base-slider__track relative",[t.vertical?"vertical ":""]]),onMousedown:F,onTouchstart:F},[b("div",{class:m(["base-slider__track-background bg-gray-300 dark:bg-gray-400",[t.vertical?"vertical ":""]])},[t.snapToSteps?(d(),c("div",oe,[(d(!0),c(ne,null,le(I.value,(s,g)=>(d(),c("span",{key:g,class:"base-slider__snap-point",style:D({[t.vertical?"bottom":"left"]:100*p(s)+"%"})},null,4))),128))])):T("",!0)],2),b("div",{class:m(["base-slider__track-fill bg-primary-400",[t.vertical?"vertical ":""]]),style:D($.value)},null,6),b("div",{ref_key:"thumb",ref:X,class:m(["base-slider__thumb bg-primary-400",[t.vertical?"vertical ":""]]),style:D(A.value)},[t.showMarker?(d(),c("div",{key:0,class:m(["base-slider__marker text-xs",[t.vertical?"vertical ":""]])},[b("span",ie,se(H.value),1)],2)):T("",!0)],6)],34)],42,re))}});de.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},expose:[{name:"getPointStyle"},{name:"focus"},{name:"reset"}],props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"tabindex",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"number"},required:!0},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"vertical",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focus"},{name:"blur"},{name:"update:modelValue"},{name:"change"},{name:"dragstart"},{name:"dragend"}]};export{de as _};
//# sourceMappingURL=index-27180d89.js.map