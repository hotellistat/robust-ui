import{M as L,N as T,O as _,r as S,w as b,P as F,Q as I,u as j,c as x}from"./vue.esm-bundler-5304782f.js";function W(e){return F()?(I(e),!0):!1}function w(e){return typeof e=="function"?e():j(e)}const P=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const C=Object.prototype.toString,M=e=>C.call(e)==="[object Object]",v=()=>{},O=R();function R(){var e,t;return P&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function N(e,t){function n(...o){return new Promise((s,c)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(c)})}return n}const Y=e=>e();function B(e,t={}){let n,o,s=v;const c=i=>{clearTimeout(i),s(),s=v};return i=>{const l=w(e),f=w(t.maxWait);return n&&c(n),l<=0||f!==void 0&&f<=0?(o&&(c(o),o=null),Promise.resolve(i())):new Promise((a,p)=>{s=t.rejectOnCancel?p:a,f&&!o&&(o=setTimeout(()=>{n&&c(n),o=null,a(i())},f)),n=setTimeout(()=>{o&&c(o),o=null,a(i())},l)})}}function G(...e){if(e.length!==1)return L(...e);const t=e[0];return typeof t=="function"?T(_(()=>({get:t,set:v}))):S(t)}function H(e,t,n={}){const{eventFilter:o=Y,...s}=n;return b(e,N(o,t),s)}function q(e,t,n={}){const{debounce:o=0,maxWait:s=void 0,...c}=n;return H(e,t,{...c,eventFilter:B(o,{maxWait:s})})}function h(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const k=P?window:void 0;function g(...e){let t,n,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,s]=e,t=k):[t,n,o,s]=e,!t)return v;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const c=[],m=()=>{c.forEach(a=>a()),c.length=0},i=(a,p,r,u)=>(a.addEventListener(p,r,u),()=>a.removeEventListener(p,r,u)),l=b(()=>[h(t),w(s)],([a,p])=>{if(m(),!a)return;const r=M(p)?{...p}:p;c.push(...n.flatMap(u=>o.map(d=>i(a,u,d,r))))},{immediate:!0,flush:"post"}),f=()=>{l(),m()};return W(f),f}let A=!1;function Q(e,t,n={}){const{window:o=k,ignore:s=[],capture:c=!0,detectIframe:m=!1}=n;if(!o)return v;O&&!A&&(A=!0,Array.from(o.document.body.children).forEach(r=>r.addEventListener("click",v)),o.document.documentElement.addEventListener("click",v));let i=!0;const l=r=>s.some(u=>{if(typeof u=="string")return Array.from(o.document.querySelectorAll(u)).some(d=>d===r.target||r.composedPath().includes(d));{const d=h(u);return d&&(r.target===d||r.composedPath().includes(d))}}),a=[g(o,"click",r=>{const u=h(e);if(!(!u||u===r.target||r.composedPath().includes(u))){if(r.detail===0&&(i=!l(r)),!i){i=!0;return}t(r)}},{passive:!0,capture:c}),g(o,"pointerdown",r=>{const u=h(e);i=!l(r)&&!!(u&&!r.composedPath().includes(u))},{passive:!0}),m&&g(o,"blur",r=>{setTimeout(()=>{var u;const d=h(e);((u=o.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(d!=null&&d.contains(o.document.activeElement))&&t(r)},0)})].filter(Boolean);return()=>a.forEach(r=>r())}function E(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function D(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:D(n)}}function X(e){const t=e||window.event,n=t.target;return D(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const y=new WeakMap;function V(e,t=!1){const n=S(t);let o=null,s;b(G(e),i=>{const l=E(w(i));if(l){const f=l;y.get(f)||y.set(f,s),n.value&&(f.style.overflow="hidden")}},{immediate:!0});const c=()=>{const i=E(w(e));!i||n.value||(O&&(o=g(i,"touchmove",l=>{X(l)},{passive:!1})),i.style.overflow="hidden",n.value=!0)},m=()=>{var i;const l=E(w(e));!l||!n.value||(O&&(o==null||o()),l.style.overflow=(i=y.get(l))!=null?i:"",y.delete(l),n.value=!1)};return W(m),x({get(){return n.value},set(i){i?c():m()}})}export{Q as o,V as u,q as w};
