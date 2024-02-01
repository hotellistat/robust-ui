import{c as _,u as z,r as $,_ as Mt,w as Z,$ as H,O as Pt,P as Ft,d as Nt,t as Wt,a0 as Ht,a as zt,b as $t,e as It,D as jt,f as Xt,K as Yt}from"./vue.esm-bundler-72d4ff20.js";const qt=["top","right","bottom","left"],q=Math.min,A=Math.max,tt=Math.round,Q=Math.floor,V=t=>({x:t,y:t}),Ut={left:"right",right:"left",bottom:"top",top:"bottom"},Kt={start:"end",end:"start"};function K(t,e){return typeof t=="function"?t(e):t}function P(t){return t.split("-")[0]}function G(t){return t.split("-")[1]}function Gt(t){return t==="x"?"y":"x"}function Rt(t){return t==="y"?"height":"width"}function it(t){return["top","bottom"].includes(P(t))?"y":"x"}function Ot(t){return Gt(it(t))}function Jt(t,e,n){n===void 0&&(n=!1);const o=G(t),r=Ot(t),s=Rt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=et(i)),[i,et(i)]}function Qt(t){const e=et(t);return[lt(t),e,lt(e)]}function lt(t){return t.replace(/start|end/g,e=>Kt[e])}function Zt(t,e,n){const o=["left","right"],r=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?s:i;default:return[]}}function te(t,e,n,o){const r=G(t);let s=Zt(P(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(lt)))),s}function et(t){return t.replace(/left|right|bottom|top/g,e=>Ut[e])}function ee(t){return{top:0,right:0,bottom:0,left:0,...t}}function ne(t){return typeof t!="number"?ee(t):{top:t,right:t,bottom:t,left:t}}function nt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function pt(t,e,n){let{reference:o,floating:r}=t;const s=it(e),i=Ot(e),l=Rt(i),c=P(e),a=s==="y",f=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,p=o[l]/2-r[l]/2;let u;switch(c){case"top":u={x:f,y:o.y-r.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-r.width,y:d};break;default:u={x:o.x,y:o.y}}switch(G(e)){case"start":u[i]-=p*(n&&a?-1:1);break;case"end":u[i]+=p*(n&&a?-1:1);break}return u}const oe=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,l=s.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:d}=pt(a,o,c),p=o,u={},m=0;for(let g=0;g<l.length;g++){const{name:x,fn:h}=l[g],{x:w,y:v,data:R,reset:b}=await h({x:f,y:d,initialPlacement:o,placement:p,strategy:r,middlewareData:u,rects:a,platform:i,elements:{reference:t,floating:e}});f=w??f,d=v??d,u={...u,[x]:{...u[x],...R}},b&&m<=50&&(m++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(a=b.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:f,y:d}=pt(a,p,c)),g=-1)}return{x:f,y:d,placement:p,strategy:r,middlewareData:u}};async function ot(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=K(e,t),m=ne(u),x=l[p?d==="floating"?"reference":"floating":d],h=nt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:f,strategy:c})),w=d==="floating"?{...i.floating,x:o,y:r}:i.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},b=nt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:v,strategy:c}):w);return{top:(h.top-b.top+m.top)/R.y,bottom:(b.bottom-h.bottom+m.bottom)/R.y,left:(h.left-b.left+m.left)/R.x,right:(b.right-h.right+m.right)/R.x}}const ie=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...x}=K(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const h=P(r),w=P(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(a.floating)),R=p||(w||!g?[et(l)]:Qt(l));!p&&m!=="none"&&R.push(...te(l,g,m,v));const b=[l,...R],O=await ot(e,x),y=[];let L=((o=s.flip)==null?void 0:o.overflows)||[];if(f&&y.push(O[h]),d){const M=Jt(r,i,v);y.push(O[M[0]],O[M[1]])}if(L=[...L,{placement:r,overflows:y}],!y.every(M=>M<=0)){var k,ut;const M=(((k=s.flip)==null?void 0:k.index)||0)+1,mt=b[M];if(mt)return{data:{index:M,overflows:L},reset:{placement:mt}};let X=(ut=L.filter(N=>N.overflows[0]<=0).sort((N,W)=>N.overflows[1]-W.overflows[1])[0])==null?void 0:ut.placement;if(!X)switch(u){case"bestFit":{var dt;const N=(dt=L.map(W=>[W.placement,W.overflows.filter(Y=>Y>0).reduce((Y,Bt)=>Y+Bt,0)]).sort((W,Y)=>W[1]-Y[1])[0])==null?void 0:dt[0];N&&(X=N);break}case"initialPlacement":X=l;break}if(r!==X)return{reset:{placement:X}}}return{}}}};function gt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ht(t){return qt.some(e=>t[e]>=0)}const re=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=K(t,e);switch(o){case"referenceHidden":{const s=await ot(e,{...r,elementContext:"reference"}),i=gt(s,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:ht(i)}}}case"escaped":{const s=await ot(e,{...r,altBoundary:!0}),i=gt(s,n.floating);return{data:{escapedOffsets:i,escaped:ht(i)}}}default:return{}}}}};async function se(t,e){const{placement:n,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=P(n),l=G(n),c=it(n)==="y",a=["left","top"].includes(i)?-1:1,f=s&&c?-1:1,d=K(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof m=="number"&&(u=l==="end"?m*-1:m),c?{x:u*f,y:p*a}:{x:p*a,y:u*f}}const le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:s,placement:i,middlewareData:l}=e,c=await se(e,t);return i===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:i}}}}},ce=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:r,elements:s}=e,{apply:i=()=>{},...l}=K(t,e),c=await ot(e,l),a=P(n),f=G(n),d=it(n)==="y",{width:p,height:u}=o.floating;let m,g;a==="top"||a==="bottom"?(m=a,g=f===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(g=a,m=f==="end"?"top":"bottom");const x=u-c[m],h=p-c[g],w=!e.middlewareData.shift;let v=x,R=h;if(d){const O=p-c.left-c.right;R=f||w?q(h,O):O}else{const O=u-c.top-c.bottom;v=f||w?q(x,O):O}if(w&&!f){const O=A(c.left,0),y=A(c.right,0),L=A(c.top,0),k=A(c.bottom,0);d?R=p-2*(O!==0||y!==0?O+y:A(c.left,c.right)):v=u-2*(L!==0||k!==0?L+k:A(c.top,c.bottom))}await i({...e,availableWidth:R,availableHeight:v});const b=await r.getDimensions(s.floating);return p!==b.width||u!==b.height?{reset:{rects:!0}}:{}}}};function B(t){return Ct(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function D(t){var e;return(e=(Ct(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ct(t){return t instanceof Node||t instanceof C(t).Node}function S(t){return t instanceof Element||t instanceof C(t).Element}function T(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function yt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function ae(t){return["table","td","th"].includes(B(t))}function ct(t){const e=at(),n=E(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function At(t){let e=j(t);for(;T(e)&&!rt(e);){if(ct(e))return e;e=j(e)}return null}function at(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(B(t))}function E(t){return C(t).getComputedStyle(t)}function st(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||D(t);return yt(e)?e.host:e}function Et(t){const e=j(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&J(e)?e:Et(e)}function U(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Et(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=C(r);return s?e.concat(i,i.visualViewport||[],J(r)?r:[],i.frameElement&&n?U(i.frameElement):[]):e.concat(r,U(r,[],n))}function Lt(t){const e=E(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=T(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,l=tt(n)!==s||tt(o)!==i;return l&&(n=s,o=i),{width:n,height:o,$:l}}function ft(t){return S(t)?t:t.contextElement}function I(t){const e=ft(t);if(!T(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=Lt(e);let i=(s?tt(n.width):n.width)/o,l=(s?tt(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const fe=V(0);function Tt(t){const e=C(t);return!at()||!e.visualViewport?fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ue(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function F(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=ft(t);let i=V(1);e&&(o?S(o)&&(i=I(o)):i=I(t));const l=ue(s,n,o)?Tt(s):V(0);let c=(r.left+l.x)/i.x,a=(r.top+l.y)/i.y,f=r.width/i.x,d=r.height/i.y;if(s){const p=C(s),u=o&&S(o)?C(o):o;let m=p.frameElement;for(;m&&o&&u!==p;){const g=I(m),x=m.getBoundingClientRect(),h=E(m),w=x.left+(m.clientLeft+parseFloat(h.paddingLeft))*g.x,v=x.top+(m.clientTop+parseFloat(h.paddingTop))*g.y;c*=g.x,a*=g.y,f*=g.x,d*=g.y,c+=w,a+=v,m=C(m).frameElement}}return nt({width:f,height:d,x:c,y:a})}const de=[":popover-open",":modal"];function St(t){let e=!1,n=0,o=0;function r(s){try{e=e||t.matches(s)}catch{}}if(de.forEach(s=>{r(s)}),e){const s=At(t);if(s){const i=s.getBoundingClientRect();n=i.x,o=i.y}}return[e,n,o]}function me(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=D(o),[i]=e?St(e.floating):[!1];if(o===s||i)return n;let l={scrollLeft:0,scrollTop:0},c=V(1);const a=V(0),f=T(o);if((f||!f&&r!=="fixed")&&((B(o)!=="body"||J(s))&&(l=st(o)),T(o))){const d=F(o);c=I(o),a.x=d.x+o.clientLeft,a.y=d.y+o.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+a.x,y:n.y*c.y-l.scrollTop*c.y+a.y}}function pe(t){return Array.from(t.getClientRects())}function Dt(t){return F(D(t)).left+st(t).scrollLeft}function ge(t){const e=D(t),n=st(t),o=t.ownerDocument.body,r=A(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=A(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+Dt(t);const l=-n.scrollTop;return E(o).direction==="rtl"&&(i+=A(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:l}}function he(t,e){const n=C(t),o=D(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,l=0,c=0;if(r){s=r.width,i=r.height;const a=at();(!a||a&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:s,height:i,x:l,y:c}}function ye(t,e){const n=F(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=T(t)?I(t):V(1),i=t.clientWidth*s.x,l=t.clientHeight*s.y,c=r*s.x,a=o*s.y;return{width:i,height:l,x:c,y:a}}function wt(t,e,n){let o;if(e==="viewport")o=he(t,n);else if(e==="document")o=ge(D(t));else if(S(e))o=ye(e,n);else{const r=Tt(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return nt(o)}function kt(t,e){const n=j(t);return n===e||!S(n)||rt(n)?!1:E(n).position==="fixed"||kt(n,e)}function we(t,e){const n=e.get(t);if(n)return n;let o=U(t,[],!1).filter(l=>S(l)&&B(l)!=="body"),r=null;const s=E(t).position==="fixed";let i=s?j(t):t;for(;S(i)&&!rt(i);){const l=E(i),c=ct(i);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||J(i)&&!c&&kt(t,i))?o=o.filter(f=>f!==i):r=l,i=j(i)}return e.set(t,o),o}function ve(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?we(e,this._c):[].concat(n),o],l=i[0],c=i.reduce((a,f)=>{const d=wt(e,f,r);return a.top=A(d.top,a.top),a.right=q(d.right,a.right),a.bottom=q(d.bottom,a.bottom),a.left=A(d.left,a.left),a},wt(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xe(t){const{width:e,height:n}=Lt(t);return{width:e,height:n}}function be(t,e,n,o){const r=T(e),s=D(e),i=n==="fixed",l=F(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const a=V(0);if(r||!r&&!i)if((B(e)!=="body"||J(s))&&(c=st(e)),r){const g=F(e,!0,i,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else s&&(a.x=Dt(s));let f=l.left+c.scrollLeft-a.x,d=l.top+c.scrollTop-a.y;const[p,u,m]=St(o);return p&&(f+=u,d+=m,r&&(f+=e.clientLeft,d+=e.clientTop)),{x:f,y:d,width:l.width,height:l.height}}function vt(t,e){return!T(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function _t(t,e){const n=C(t);if(!T(t))return n;let o=vt(t,e);for(;o&&ae(o)&&E(o).position==="static";)o=vt(o,e);return o&&(B(o)==="html"||B(o)==="body"&&E(o).position==="static"&&!ct(o))?n:o||At(t)||n}const Re=async function(t){const e=this.getOffsetParent||_t,n=this.getDimensions;return{reference:be(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}};function Oe(t){return E(t).direction==="rtl"}const Ce={convertOffsetParentRelativeRectToViewportRelativeRect:me,getDocumentElement:D,getClippingRect:ve,getOffsetParent:_t,getElementRects:Re,getClientRects:pe,getDimensions:xe,getScale:I,isElement:S,isRTL:Oe};function Ae(t,e){let n=null,o;const r=D(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function i(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:f,width:d,height:p}=t.getBoundingClientRect();if(l||e(),!d||!p)return;const u=Q(f),m=Q(r.clientWidth-(a+d)),g=Q(r.clientHeight-(f+p)),x=Q(a),w={rootMargin:-u+"px "+-m+"px "+-g+"px "+-x+"px",threshold:A(0,q(1,c))||1};let v=!0;function R(b){const O=b[0].intersectionRatio;if(O!==c){if(!v)return i();O?i(!1,O):o=setTimeout(()=>{i(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(R,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(R,w)}n.observe(t)}return i(!0),s}function Ee(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ft(t),f=r||s?[...a?U(a):[],...U(e)]:[];f.forEach(h=>{r&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const d=a&&l?Ae(a,n):null;let p=-1,u=null;i&&(u=new ResizeObserver(h=>{let[w]=h;w&&w.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=u)==null||v.observe(e)})),n()}),a&&!c&&u.observe(a),u.observe(e));let m,g=c?F(t):null;c&&x();function x(){const h=F(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,m=requestAnimationFrame(x)}return n(),()=>{var h;f.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),d==null||d(),(h=u)==null||h.disconnect(),u=null,c&&cancelAnimationFrame(m)}}const Le=ie,Te=ce,Se=re,De=(t,e,n)=>{const o=new Map,r={platform:Ce,...n},s={...r.platform,_c:o};return oe(t,e,{...r,platform:s})};function xt(t){var e;return(e=t==null?void 0:t.$el)!=null?e:t}function Vt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function bt(t,e){const n=Vt(t);return Math.round(e*n)/n}function ke(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,r=_(()=>{var y;return(y=z(n.open))!=null?y:!0}),s=_(()=>z(n.middleware)),i=_(()=>{var y;return(y=z(n.placement))!=null?y:"bottom"}),l=_(()=>{var y;return(y=z(n.strategy))!=null?y:"absolute"}),c=_(()=>{var y;return(y=z(n.transform))!=null?y:!0}),a=_(()=>xt(t.value)),f=_(()=>xt(e.value)),d=$(0),p=$(0),u=$(l.value),m=$(i.value),g=Mt({}),x=$(!1),h=_(()=>{const y={position:u.value,left:"0",top:"0"};if(!f.value)return y;const L=bt(f.value,d.value),k=bt(f.value,p.value);return c.value?{...y,transform:"translate("+L+"px, "+k+"px)",...Vt(f.value)>=1.5&&{willChange:"transform"}}:{position:u.value,left:L+"px",top:k+"px"}});let w;function v(){a.value==null||f.value==null||De(a.value,f.value,{middleware:s.value,placement:i.value,strategy:l.value}).then(y=>{d.value=y.x,p.value=y.y,u.value=y.strategy,m.value=y.placement,g.value=y.middlewareData,x.value=!0})}function R(){typeof w=="function"&&(w(),w=void 0)}function b(){if(R(),o===void 0){v();return}if(a.value!=null&&f.value!=null){w=o(a.value,f.value,v);return}}function O(){r.value||(x.value=!1)}return Z([s,i,l],v,{flush:"sync"}),Z([a,f],b,{flush:"sync"}),Z(r,O,{flush:"sync"}),Pt()&&Ft(R),{x:H(d),y:H(p),strategy:H(u),placement:H(m),middlewareData:H(g),isPositioned:H(x),floatingStyles:h,update:v}}const _e=Nt({__name:"index",props:{reference:{type:Object,required:!0},open:{type:Boolean,default:!1},sameSize:{type:Boolean,default:!1},offset:{type:Number,default:4},strategy:{type:String,default:"absolute"},placement:{type:String,default:"bottom-start"},transform:{type:Boolean,default:!0},middleware:{type:Array,default:()=>[]}},setup(t){const e=t,{reference:n}=Wt(e),o=$(),{floatingStyles:r,update:s}=ke(n,o,{strategy:e.strategy,placement:e.placement,transform:e.transform,middleware:[Le({padding:10}),le({mainAxis:e.offset}),Se(),e.sameSize?Te({apply({rects:l,elements:c}){Object.assign(c.floating.style,{width:`${l.reference.width}px`,minWidth:"200px"})}}):void 0,...e.middleware]});let i;return Z(()=>e.open,l=>{l?Yt(()=>{i=Ee(n.value,o.value,s)}):i==null||i()}),Ht(()=>{i==null||i()}),(l,c)=>t.open?(zt(),$t("div",{key:0,ref_key:"floating",ref:o,style:jt(z(r)),class:"absolute rounded-md border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800"},[It(l.$slots,"default")],4)):Xt("",!0)}});_e.__docgenInfo={exportName:"default",displayName:"Floating",description:"",tags:{},props:[{name:"reference",type:{name:"ReferenceElement"},required:!0},{name:"open",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sameSize",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"strategy",type:{name:"Strategy"},defaultValue:{func:!1,value:"'absolute'"}},{name:"placement",type:{name:"Placement"},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"transform",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"middleware",type:{name:"Middleware[]"},defaultValue:{func:!0,value:"() => []"}}],slots:[{name:"default"}]};export{_e as _};
