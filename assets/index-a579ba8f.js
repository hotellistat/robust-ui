import{D as P,E as k,G as F,r as S,w as O,H as I,I as T,u as j,c as C}from"./vue.esm-bundler-ebcf9369.js";function D(e){return I()?(T(e),!0):!1}function v(e){return typeof e=="function"?e():j(e)}const W=typeof window<"u"&&typeof document<"u",_=Object.prototype.toString,x=e=>_.call(e)==="[object Object]",w=()=>{},E=R();function R(){var e;return W&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function H(e,o){function t(...n){return new Promise((u,c)=>{Promise.resolve(e(()=>o.apply(this,n),{fn:o,thisArg:this,args:n})).then(u).catch(c)})}return t}const M=e=>e();function N(e,o={}){let t,n,u=w;const c=i=>{clearTimeout(i),u(),u=w};return i=>{const a=v(e),f=v(o.maxWait);return t&&c(t),a<=0||f!==void 0&&f<=0?(n&&(c(n),n=null),Promise.resolve(i())):new Promise((l,m)=>{u=o.rejectOnCancel?m:l,f&&!n&&(n=setTimeout(()=>{t&&c(t),n=null,l(i())},f)),t=setTimeout(()=>{n&&c(n),n=null,l(i())},a)})}}function Y(...e){if(e.length!==1)return P(...e);const o=e[0];return typeof o=="function"?k(F(()=>({get:o,set:w}))):S(o)}function B(e,o,t={}){const{eventFilter:n=M,...u}=t;return O(e,H(n,o),u)}function q(e,o,t={}){const{debounce:n=0,maxWait:u=void 0,...c}=t;return B(e,o,{...c,eventFilter:N(n,{maxWait:u})})}function h(e){var o;const t=v(e);return(o=t==null?void 0:t.$el)!=null?o:t}const b=W?window:void 0;function y(...e){let o,t,n,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,n,u]=e,o=b):[o,t,n,u]=e,!o)return w;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const c=[],p=()=>{c.forEach(l=>l()),c.length=0},i=(l,m,r,s)=>(l.addEventListener(m,r,s),()=>l.removeEventListener(m,r,s)),a=O(()=>[h(o),v(u)],([l,m])=>{if(p(),!l)return;const r=x(m)?{...m}:m;c.push(...t.flatMap(s=>n.map(d=>i(l,s,d,r))))},{immediate:!0,flush:"post"}),f=()=>{a(),p()};return D(f),f}let A=!1;function G(e,o,t={}){const{window:n=b,ignore:u=[],capture:c=!0,detectIframe:p=!1}=t;if(!n)return;E&&!A&&(A=!0,Array.from(n.document.body.children).forEach(r=>r.addEventListener("click",w)),n.document.documentElement.addEventListener("click",w));let i=!0;const a=r=>u.some(s=>{if(typeof s=="string")return Array.from(n.document.querySelectorAll(s)).some(d=>d===r.target||r.composedPath().includes(d));{const d=h(s);return d&&(r.target===d||r.composedPath().includes(d))}}),l=[y(n,"click",r=>{const s=h(e);if(!(!s||s===r.target||r.composedPath().includes(s))){if(r.detail===0&&(i=!a(r)),!i){i=!0;return}o(r)}},{passive:!0,capture:c}),y(n,"pointerdown",r=>{const s=h(e);s&&(i=!r.composedPath().includes(s)&&!a(r))},{passive:!0}),p&&y(n,"blur",r=>{setTimeout(()=>{var s;const d=h(e);((s=n.document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!(d!=null&&d.contains(n.document.activeElement))&&o(r)},0)})].filter(Boolean);return()=>l.forEach(r=>r())}function g(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function L(e){const o=window.getComputedStyle(e);if(o.overflowX==="scroll"||o.overflowY==="scroll"||o.overflowX==="auto"&&e.clientWidth<e.scrollWidth||o.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const t=e.parentNode;return!t||t.tagName==="BODY"?!1:L(t)}}function X(e){const o=e||window.event,t=o.target;return L(t)?!1:o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)}function V(e,o=!1){const t=S(o);let n=null,u;O(Y(e),i=>{const a=g(v(i));if(a){const f=a;u=f.style.overflow,t.value&&(f.style.overflow="hidden")}},{immediate:!0});const c=()=>{const i=g(v(e));!i||t.value||(E&&(n=y(i,"touchmove",a=>{X(a)},{passive:!1})),i.style.overflow="hidden",t.value=!0)},p=()=>{const i=g(v(e));!i||!t.value||(E&&(n==null||n()),i.style.overflow=u,t.value=!1)};return D(p),C({get(){return t.value},set(i){i?c():p()}})}export{G as o,V as u,q as w};
//# sourceMappingURL=index-a579ba8f.js.map