import{d as pe,t as ge,r,c as y,o as ye,S as be,a as d,b as c,u as b,f as V,g as m,H as he,J as _e,D as S,y as O,q as ke,T as w,G as M}from"./vue.esm-bundler-af08b7b0.js";const xe=["aria-valuemax","aria-valuemin","aria-valuenow","tabindex","onKeydown"],Ve=["name","value"],Se={class:"base-slider__track-background bg-gray-300 dark:bg-gray-400"},we={key:0},Me={key:0,class:"base-slider__marker text-xs"},Ee={class:"text-sm text-gray-400"},Le={key:0,class:"base-slider__marker text-xs"},Te={class:"text-sm text-gray-400"},De=pe({__name:"index",props:{name:{type:String,default:void 0},tabindex:{type:[String,Number],default:void 0},modelValue:{type:Array,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},snapToSteps:{type:Boolean,default:!1},showMarker:{type:Boolean,default:!1},markerValue:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1}},emits:["focus","blur","update:modelValue","change","dragstart","dragend"],setup(h,{expose:j,emit:Q}){const Y=h,v=Q,{min:E,max:L,markerValue:Z,disabled:T,showMarker:D,step:l,snapToSteps:N,modelValue:o}=ge(Y),$=r(o.value),_=r(!1),p=r(!1),a=r(o.value),B=r(),H=r(),ee=r(),ae=r(),n=r(0);if(Array.isArray(o.value)&&(o.value.length>2||o.value.length<2))throw Error("modelValue must be number or array of 2 numbers");const te=y(()=>[{"is-dragging":p.value},{"is-disabled":T.value},{"is-active":_.value},{"has-marker":D.value}]),ne=y(()=>({transform:"scaleX("+(g(a.value[1])-g(a.value[0]))+")",left:q.value.left})),q=y(()=>({left:g(a.value[0])*100+"%"})),se=y(()=>({left:g(a.value[1])*100+"%"})),I=(e=0)=>Z.value??a.value[e],le=y(()=>{const e=[];let t=l.value*Math.ceil(u()/l.value);for(;t<=i();)e.push(t),t+=l.value;return e}),u=()=>L.value>E.value?E.value:0,i=()=>L.value>E.value?L.value:100,ue=()=>{B.value.focus()},re=()=>{for(let e=0;e<2;e++)n.value=e,X($.value[e])},K=()=>{_.value=!0,v("focus")},R=()=>{_.value=!1,v("blur")},P=e=>{var t;(t=B.value)!=null&&t.contains(e.target)||R()},C=e=>{e=z(e),N.value&&(e=ve(e)),X(e)},X=e=>{e=z(e),e!==a.value[n.value]&&(n.value===0&&e>=a.value[1]&&(e=a.value[1]),n.value===1&&e<=a.value[0]&&(e=a.value[0]),a.value[n.value]=e,v("update:modelValue",a.value),v("change",a.value))},F=()=>{C(a.value[n.value]+l.value)},U=()=>{C(a.value[n.value]-l.value)},oe=e=>({left:e+"%"}),ie=()=>{document.addEventListener("touchend",x),document.addEventListener("mouseup",x),document.addEventListener("click",P),document.addEventListener("touchstart",P),ce()},de=()=>{document.removeEventListener("touchend",x),document.removeEventListener("mouseup",x),document.removeEventListener("click",P)},ce=()=>{re()},W=e=>{if(T.value)return;_.value||K();const t=G(e);n.value=me(t),n.value,p.value=!0,J(e),document.addEventListener("touchmove",k),document.addEventListener("mousemove",k),v("dragstart",a.value,e)},k=e=>{J(e)},me=e=>{let t=0;if(a.value[0]===a.value[1]){const A=a.value[0];return e>A?1:0}const s=Math.abs(a.value[0]-e);return Math.abs(a.value[1]-e)<s&&(t=1),t},G=e=>{const t=H.value.getBoundingClientRect().left,s=e.touches?e.touches[0].pageX:e.pageX,f=H.value.offsetWidth,A=(s-t)/f,fe=z(u()+A*(i()-u()));return Math.round(fe)},J=e=>{const t=G(e);p.value&&X(Math.round(t))},x=e=>{p.value&&(p.value=!1,N.value&&o.value[n.value]%l.value!==0&&C(o.value[n.value]),document.removeEventListener("touchmove",k),document.removeEventListener("mousemove",k),v("dragend",a.value,e))},ve=e=>{const t=Math.floor(e/l.value)*l.value,s=t+l.value,f=(t+s)/2;return t<u()?s>i()?e:s:e>=f&&s<=i()?s:t},g=e=>(e-u())/(i()-u()),z=e=>e<u()?u():e>i()?i():e;return ye(()=>{ie()}),be(()=>{de()}),j({getPointStyle:oe,focus:ue}),(e,t)=>(d(),c("div",{ref_key:"slider",ref:B,class:ke(["base-slider relative",te.value]),role:"slider","aria-valuemax":i(),"aria-valuemin":u(),"aria-valuenow":a.value[0],tabindex:b(T)?null:h.tabindex||"0",onBlur:R,onFocus:K,onKeydown:[w(M(U,["prevent"]),["down"]),w(M(U,["prevent"]),["left"]),w(M(F,["prevent"]),["right"]),w(M(F,["prevent"]),["up"])]},[h.name?(d(),c("input",{key:0,class:"base-slider__hidden-input",type:"hidden",name:h.name,value:b(o)[0]},null,8,Ve)):V("",!0),m("div",{ref_key:"track",ref:H,class:"base-slider__track relative w-full",onMousedown:W,onTouchstart:W},[m("div",Se,[b(N)?(d(),c("div",we,[(d(!0),c(he,null,_e(le.value,(s,f)=>(d(),c("span",{key:f,class:"base-slider__snap-point",style:S({left:100*g(s)+"%"})},null,4))),128))])):V("",!0)]),m("div",{class:"base-slider__track-fill bg-primary-400",style:S(ne.value)},null,4),m("div",{ref_key:"firstThumb",ref:ee,class:"base-slider__thumb bg-primary-400",style:S(q.value)},[b(D)?(d(),c("div",Me,[m("span",Ee,O(I()),1)])):V("",!0)],4),m("div",{ref_key:"secondThumb",ref:ae,class:"base-slider__thumb bg-primary-400",style:S(se.value)},[b(D)?(d(),c("div",Le,[m("span",Te,O(I(1)),1)])):V("",!0)],4)],544)],42,xe))}});De.__docgenInfo={exportName:"default",displayName:"RangeSlider",description:"",tags:{},expose:[{name:"getPointStyle"},{name:"focus"}],props:[{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"tabindex",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"number[]"},required:!0},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"snapToSteps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMarker",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"markerValue",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focus"},{name:"blur"},{name:"update:modelValue"},{name:"change"},{name:"dragstart"},{name:"dragend"}]};export{De as _};
