import{q as b,a as x,p as C,u as R,R as k,S as B}from"./vue.esm-bundler-e6794ced.js";var I;const N=typeof window<"u",M=e=>typeof e=="string",h=()=>{},E=N&&((I=window==null?void 0:window.navigator)==null?void 0:I.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function w(e){return typeof e=="function"?e():R(e)}function U(e,r){function t(...n){return new Promise((s,i)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(s).catch(i)})}return t}const q=e=>e();function G(e,r={}){let t,n,s=h;const i=o=>{clearTimeout(o),s(),s=h};return o=>{const c=w(e),p=w(r.maxWait);return t&&i(t),c<=0||p!==void 0&&p<=0?(n&&(i(n),n=null),Promise.resolve(o())):new Promise((u,v)=>{s=r.rejectOnCancel?v:u,p&&!n&&(n=setTimeout(()=>{t&&i(t),n=null,u(o())},p)),t=setTimeout(()=>{n&&i(n),n=null,u(o())},c)})}}function H(e){return e}function F(e){return k()?(B(e),!0):!1}function V(e){return typeof e=="function"?x(e):C(e)}var S=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,X=(e,r)=>{var t={};for(var n in e)Y.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&S)for(var n of S(e))r.indexOf(n)<0&&K.call(e,n)&&(t[n]=e[n]);return t};function z(e,r,t={}){const n=t,{eventFilter:s=q}=n,i=X(n,["eventFilter"]);return b(e,U(s,r),i)}var J=Object.defineProperty,Z=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,T=(e,r,t)=>r in e?J(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,te=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&T(e,t,r[t]);if(y)for(var t of y(r))L.call(r,t)&&T(e,t,r[t]);return e},re=(e,r)=>Z(e,ee(r)),ne=(e,r)=>{var t={};for(var n in e)D.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&y)for(var n of y(e))r.indexOf(n)<0&&L.call(e,n)&&(t[n]=e[n]);return t};function fe(e,r,t={}){const n=t,{debounce:s=0,maxWait:i=void 0}=n,f=ne(n,["debounce","maxWait"]);return z(e,r,re(te({},f),{eventFilter:G(s,{maxWait:i})}))}function O(e){var r;const t=w(e);return(r=t==null?void 0:t.$el)!=null?r:t}const Q=N?window:void 0;function _(...e){let r,t,n,s;if(M(e[0])||Array.isArray(e[0])?([t,n,s]=e,r=Q):[r,t,n,s]=e,!r)return h;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const i=[],f=()=>{i.forEach(u=>u()),i.length=0},o=(u,v,m)=>(u.addEventListener(v,m,s),()=>u.removeEventListener(v,m,s)),c=b(()=>O(r),u=>{f(),u&&i.push(...t.flatMap(v=>n.map(m=>o(u,v,m))))},{immediate:!0,flush:"post"}),p=()=>{c(),f()};return F(p),p}function pe(e,r,t={}){const{window:n=Q,ignore:s=[],capture:i=!0,detectIframe:f=!1}=t;if(!n)return;let o=!0,c;const p=a=>s.some(l=>{if(typeof l=="string")return Array.from(n.document.querySelectorAll(l)).some(d=>d===a.target||a.composedPath().includes(d));{const d=O(l);return d&&(a.target===d||a.composedPath().includes(d))}}),u=a=>{n.clearTimeout(c);const l=O(e);if(!(!l||l===a.target||a.composedPath().includes(l))){if(a.detail===0&&(o=!p(a)),!o){o=!0;return}r(a)}},v=[_(n,"click",u,{passive:!0,capture:i}),_(n,"pointerdown",a=>{const l=O(e);l&&(o=!a.composedPath().includes(l)&&!p(a))},{passive:!0}),_(n,"pointerup",a=>{if(a.button===0){const l=a.composedPath();a.composedPath=()=>l,c=n.setTimeout(()=>u(a),50)}},{passive:!0}),f&&_(n,"blur",a=>{var l;const d=O(e);((l=n.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(d!=null&&d.contains(n.document.activeElement))&&r(a)})].filter(Boolean);return()=>v.forEach(a=>a())}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g="__vueuse_ssr_handlers__";P[g]=P[g]||{};P[g];var $;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})($||($={}));function W(e){const r=window.getComputedStyle(e);if(r.overflowX==="scroll"||r.overflowY==="scroll")return!0;{const t=e.parentNode;return!t||t.tagName==="BODY"?!1:W(t)}}function oe(e){const r=e||window.event,t=r.target;return W(t)?!1:r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)}function de(e,r=!1){const t=C(r);let n=null,s;b(V(e),o=>{if(o){const c=o;s=c.style.overflow,t.value&&(c.style.overflow="hidden")}},{immediate:!0});const i=()=>{const o=w(e);!o||t.value||(E&&(n=_(o,"touchmove",c=>{oe(c)},{passive:!1})),o.style.overflow="hidden",t.value=!0)},f=()=>{const o=w(e);!o||!t.value||(E&&(n==null||n()),o.style.overflow=s,t.value=!1)};return F(f),x({get(){return t.value},set(o){o?i():f()}})}var ae=Object.defineProperty,j=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,A=(e,r,t)=>r in e?ae(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,le=(e,r)=>{for(var t in r||(r={}))se.call(r,t)&&A(e,t,r[t]);if(j)for(var t of j(r))ie.call(r,t)&&A(e,t,r[t]);return e};const ue={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};le({linear:H},ue);export{pe as o,de as u,fe as w};
//# sourceMappingURL=index-7162fc24.js.map