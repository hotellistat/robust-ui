import{d as $,i as w,c as d,a as t,b as s,e as v,u as a,f as h,m as O,g as o,t as V,w as z,o as M,j as N,p as B,k as E,W as Z,X as A,l as R,Y as P,B as j,n as C,N as D}from"./vue.esm-bundler-ebcf9369.js";import{u as K}from"./index-a579ba8f.js";const X=["width","height","fill","transform"],I={key:0},T=o("path",{d:"M208.5,191.5a12,12,0,0,1,0,17,12.1,12.1,0,0,1-17,0L128,145,64.5,208.5a12.1,12.1,0,0,1-17,0,12,12,0,0,1,0-17L111,128,47.5,64.5a12,12,0,0,1,17-17L128,111l63.5-63.5a12,12,0,0,1,17,17L145,128Z"},null,-1),W=[T],q={key:1},G=o("path",{d:"M205.7,194.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3,61.7,205.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,50.3,61.7A8.1,8.1,0,0,1,61.7,50.3L128,116.7l66.3-66.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"},null,-1),Y=[G],F={key:2},H=o("path",{d:"M205.7,194.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3,61.7,205.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,50.3,61.7A8.1,8.1,0,0,1,61.7,50.3L128,116.7l66.3-66.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"},null,-1),J=[H],Q={key:3},U=o("path",{d:"M204.2,195.8a5.9,5.9,0,1,1-8.4,8.4L128,136.5,60.2,204.2a5.9,5.9,0,0,1-8.4-8.4L119.5,128,51.8,60.2a5.9,5.9,0,0,1,8.4-8.4L128,119.5l67.8-67.7a5.9,5.9,0,0,1,8.4,8.4L136.5,128Z"},null,-1),ee=[U],le={key:4},ae=o("path",{d:"M205.7,194.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3,61.7,205.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,50.3,61.7A8.1,8.1,0,0,1,61.7,50.3L128,116.7l66.3-66.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"},null,-1),te=[ae],oe={key:5},se=o("path",{d:"M202.8,197.2a3.9,3.9,0,0,1,0,5.6,3.9,3.9,0,0,1-5.6,0L128,133.7,58.8,202.8a3.9,3.9,0,0,1-5.6,0,3.9,3.9,0,0,1,0-5.6L122.3,128,53.2,58.8a4,4,0,0,1,5.6-5.6L128,122.3l69.2-69.1a4,4,0,1,1,5.6,5.6L133.7,128Z"},null,-1),ne=[se],re={name:"PhX"},ie=$({...re,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(m){const f=m,n=w("weight","regular"),l=w("size","1em"),r=w("color","currentColor"),c=w("mirrored",!1),i=d(()=>f.weight??n),b=d(()=>f.size??l),k=d(()=>f.color??r),x=d(()=>f.mirrored!==void 0?f.mirrored?"scale(-1, 1)":void 0:c?"scale(-1, 1)":void 0);return(p,L)=>(t(),s("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:a(b),height:a(b),fill:a(k),transform:a(x)},p.$attrs),[v(p.$slots,"default"),a(i)==="bold"?(t(),s("g",I,W)):a(i)==="duotone"?(t(),s("g",q,Y)):a(i)==="fill"?(t(),s("g",F,J)):a(i)==="light"?(t(),s("g",Q,ee)):a(i)==="regular"?(t(),s("g",le,te)):a(i)==="thin"?(t(),s("g",oe,ne)):h("",!0)],16,X))}}),ue={ref:"root",class:"fixed top-0 bottom-0 left-0 right-0 z-[100] p-4 lg:p-12",role:"dialog"},de=["onClick"],fe=["onKeydown"],me={key:0,class:"flex flex-shrink-0 items-center p-6 text-xl"},ce={class:"leading-4"},pe={key:1,class:"w-full flex-shrink-0"},ge={key:2,class:"w-full flex-shrink-0"},ve=$({__name:"index",props:{modalClass:{type:String,default:void 0},opened:{type:Boolean,default:!1},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!0},autoOverflow:{type:Boolean,default:!0},slideOutLeft:{type:Boolean,default:!1},slideOutRight:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},emits:["open","close","update:opened"],setup(m,{expose:f,emit:n}){const l=m,{opened:r}=V(l);let c;const i=d(()=>l.slideOutLeft?"robust-ui-modal__slide-left":l.slideOutRight?"robust-ui-modal__slide-right":"robust-ui-modal__fade"),b=d(()=>{let e="";switch(l.slideOutLeft?e+="absolute left-0 top-0 bottom-0 h-full min-h-0 w-full":l.slideOutRight?e+="absolute right-0 top-0 bottom-0 h-full min-h-0 w-full":l.center?e+="mx-auto h-full min-h-0 flex items-center":e+="mx-auto h-full min-h-0",l.size){case"full":{e+=" w-full";break}case"3xl":{e+=" max-w-7xl";break}case"2xl":{e+=" max-w-6xl";break}case"xl":{e+=" max-w-5xl";break}case"lg":{e+=" max-w-4xl";break}case"sm":{e+=" max-w-md";break}default:{e+=" max-w-lg";break}}return e}),k=d(()=>{let e="";switch(l.size){case"full":{e+=" h-full";break}}return e}),x=d(()=>l.slideOutLeft||l.slideOutRight);z(r,p);function p(e){e?(window.addEventListener("keydown",L),c.value=!0):(window.removeEventListener("keydown",L),c.value=!1)}function L(e){e.key==="Escape"&&r.value===!0&&(e.stopPropagation(),e.preventDefault(),g())}M(()=>{c=K(document.documentElement),p(r.value)});async function S(){r.value=!0,n("update:opened",!0)}async function g(){l.dismissable&&(r.value=!1,n("update:opened",!1))}async function y(){r.value=!1,n("update:opened",!1)}return f({open:S,close:g}),(e,u)=>(t(),N(A,{to:"body"},[B(Z,O(e.$attrs,{name:i.value,onAfterLeave:u[0]||(u[0]=_=>n("close")),onLeaveCancelled:u[1]||(u[1]=_=>n("close")),onAfterEnter:u[2]||(u[2]=_=>n("open")),onEnterCancelled:u[3]||(u[3]=_=>n("open"))}),{default:E(()=>[R(o("div",ue,[o("div",{class:"robust-ui-modal__backdrop absolute top-0 left-0 right-0 bottom-0 bg-white/60 dark:bg-black/40",onClick:j(g,["self"])},null,8,de),o("div",{class:C(["robust-ui-modal__box",[b.value]]),onKeydown:D(g,["esc"])},[o("div",{class:C(["relative flex max-h-full min-h-0 w-full flex-col border border-gray-200 bg-white/60 backdrop-blur-3xl dark:border-gray-800 dark:bg-gray-800/70",[m.modalClass,k.value,x.value?"h-full":"rounded-2xl"]])},[e.$slots.title?(t(),s("div",me,[o("div",ce,[v(e.$slots,"title",{close:y})]),l.dismissable?(t(),s("button",{key:0,type:"button",class:"-m-4 ml-auto p-4 text-gray-400 transition-colors duration-150 hover:text-gray-900 dark:hover:text-gray-100",onClick:g},[B(a(ie),{size:"20",class:"block"})])):h("",!0)])):h("",!0),e.$slots.header?(t(),s("div",pe,[v(e.$slots,"header",{close:y})])):h("",!0),o("section",{class:C([[m.autoOverflow?"overflow-y-auto supports-[overflow:overlay]:[overflow-y:overlay]":void 0],"flex-1"])},[v(e.$slots,"default",{close:y})],2),e.$slots.footer?(t(),s("div",ge,[v(e.$slots,"footer",{close:y})])):h("",!0)],2)],42,fe)],512),[[P,a(r)]])]),_:3},16,["name"])]))}});ve.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"}],props:[{name:"modalClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"dismissable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoOverflow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"slideOutLeft",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"slideOutRight",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"open"},{name:"close"},{name:"update:opened"}],slots:[{name:"title",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"header",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"footer",scoped:!0,bindings:[{name:"close",title:"binding"}]}]};export{ie as G,ve as _};
//# sourceMappingURL=index-fda8bd1a.js.map
