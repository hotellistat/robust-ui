import{w as r,a as T}from"./iframe.396c2e91.js";var c="outline",f=()=>Math.random().toString(16).slice(2),_=class{constructor({transport:t,async:e=!1}={}){this.sender=f(),this.events={},this.data={},this.isAsync=e,t&&(this.transport=t,this.transport.setHandler(n=>this.handleEvent(n)))}get hasTransport(){return!!this.transport}addListener(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)}emit(t,...e){let n={type:t,args:e,from:this.sender},o={};e.length>=1&&e[0]&&e[0].options&&(o=e[0].options);let i=()=>{this.transport&&this.transport.send(n,o),this.handleEvent(n)};this.isAsync?setImmediate(i):i()}last(t){return this.data[t]}eventNames(){return Object.keys(this.events)}listenerCount(t){let e=this.listeners(t);return e?e.length:0}listeners(t){return this.events[t]||void 0}once(t,e){let n=this.onceListener(t,e);this.addListener(t,n)}removeAllListeners(t){t?this.events[t]&&delete this.events[t]:this.events={}}removeListener(t,e){let n=this.listeners(t);n&&(this.events[t]=n.filter(o=>o!==e))}on(t,e){this.addListener(t,e)}off(t,e){this.removeListener(t,e)}handleEvent(t){let e=this.listeners(t.type);e&&e.length&&e.forEach(n=>{n.apply(t,t.args)}),this.data[t.type]=t.args}onceListener(t,e){let n=(...o)=>(this.removeListener(t,n),e(...o));return n}},E=(t=>(t.CHANNEL_CREATED="channelCreated",t.CONFIG_ERROR="configError",t.STORY_INDEX_INVALIDATED="storyIndexInvalidated",t.STORY_SPECIFIED="storySpecified",t.SET_CONFIG="setConfig",t.SET_STORIES="setStories",t.SET_INDEX="setIndex",t.SET_CURRENT_STORY="setCurrentStory",t.CURRENT_STORY_WAS_SET="currentStoryWasSet",t.FORCE_RE_RENDER="forceReRender",t.FORCE_REMOUNT="forceRemount",t.PRELOAD_ENTRIES="preloadStories",t.STORY_PREPARED="storyPrepared",t.STORY_CHANGED="storyChanged",t.STORY_UNCHANGED="storyUnchanged",t.STORY_RENDERED="storyRendered",t.STORY_MISSING="storyMissing",t.STORY_ERRORED="storyErrored",t.STORY_THREW_EXCEPTION="storyThrewException",t.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",t.PLAY_FUNCTION_THREW_EXCEPTION="playFunctionThrewException",t.UPDATE_STORY_ARGS="updateStoryArgs",t.STORY_ARGS_UPDATED="storyArgsUpdated",t.RESET_STORY_ARGS="resetStoryArgs",t.SET_GLOBALS="setGlobals",t.UPDATE_GLOBALS="updateGlobals",t.GLOBALS_UPDATED="globalsUpdated",t.REGISTER_SUBSCRIPTION="registerSubscription",t.PREVIEW_KEYDOWN="previewKeydown",t.SELECT_STORY="selectStory",t.STORIES_COLLAPSE_ALL="storiesCollapseAll",t.STORIES_EXPAND_ALL="storiesExpandAll",t.DOCS_RENDERED="docsRendered",t.SHARED_STATE_CHANGED="sharedStateChanged",t.SHARED_STATE_SET="sharedStateSet",t.NAVIGATE_URL="navigateUrl",t.UPDATE_QUERY_PARAMS="updateQueryParams",t))(E||{}),{CHANNEL_CREATED:M,CONFIG_ERROR:F,STORY_INDEX_INVALIDATED:k,STORY_SPECIFIED:B,SET_STORIES:W,SET_INDEX:X,SET_CONFIG:x,SET_CURRENT_STORY:V,CURRENT_STORY_WAS_SET:K,FORCE_RE_RENDER:j,FORCE_REMOUNT:z,STORY_PREPARED:Q,STORY_CHANGED:q,STORY_UNCHANGED:J,PRELOAD_ENTRIES:Z,STORY_RENDERED:tt,STORY_MISSING:et,STORY_ERRORED:nt,STORY_THREW_EXCEPTION:ot,STORY_RENDER_PHASE_CHANGED:it,PLAY_FUNCTION_THREW_EXCEPTION:rt,UPDATE_STORY_ARGS:st,STORY_ARGS_UPDATED:lt,RESET_STORY_ARGS:at,SET_GLOBALS:dt,UPDATE_GLOBALS:pt,GLOBALS_UPDATED:ut,REGISTER_SUBSCRIPTION:mt,PREVIEW_KEYDOWN:ht,SELECT_STORY:ct,STORIES_COLLAPSE_ALL:Et,STORIES_EXPAND_ALL:$t,DOCS_RENDERED:Rt,SHARED_STATE_CHANGED:St,SHARED_STATE_SET:Tt,NAVIGATE_URL:ft,UPDATE_QUERY_PARAMS:_t}=E,{LOGLEVEL:O,console:l}=r,s={trace:1,debug:2,info:3,warn:4,error:5,silent:10},A=O,a=s[A]||s.info,p={trace:(t,...e)=>a<=s.trace&&l.trace(t,...e),debug:(t,...e)=>a<=s.debug&&l.debug(t,...e),info:(t,...e)=>a<=s.info&&l.info(t,...e),warn:(t,...e)=>a<=s.warn&&l.warn(t,...e),error:(t,...e)=>a<=s.error&&l.error(t,...e),log:(t,...e)=>a<s.silent&&l.log(t,...e)};function g(){let t={setHandler:()=>{},send:()=>{}};return new _({transport:t})}var b=(t=>(t.TAB="tab",t.PANEL="panel",t.TOOL="tool",t.TOOLEXTRA="toolextra",t.PREVIEW="preview",t.NOTES_ELEMENT="notes-element",t))(b||{}),C=class{constructor(){this.loaders={},this.elements={},this.config={},this.getChannel=()=>(this.channel||this.setChannel(g()),this.channel),this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=t=>{this.channel=t,this.resolve()},this.setServerChannel=t=>{this.serverChannel=t},this.getElements=t=>(this.elements[t]||(this.elements[t]={}),this.elements[t]),this.addPanel=(t,e)=>{this.add(t,{type:"panel",...e})},this.add=(t,e)=>{let{type:n}=e,o=this.getElements(n);o[t]={id:t,...e}},this.setConfig=t=>{Object.assign(this.config,t),this.hasChannel()&&this.getChannel().emit(x,t)},this.getConfig=()=>this.config,this.register=(t,e)=>{this.loaders[t]&&p.warn(`${t} was loaded twice, this could have bad side-effects`),this.loaders[t]=e},this.loadAddons=t=>{Object.values(this.loaders).forEach(e=>e(t))},this.promise=new Promise(t=>{this.resolve=()=>t(this.getChannel())})}},u="__STORYBOOK_ADDONS";function N(){return r[u]||(r[u]=new C),r[u]}N();var{window:D}=r,v=(t,e)=>t.length===e.length&&t.every((n,o)=>n===e[o]),$=()=>new Error("Storybook preview hooks can only be called inside decorators and story functions.");function L(){return D.STORYBOOK_HOOKS_CONTEXT||null}function R(){let t=L();if(t==null)throw $();return t}function y(t,e,n){let o=R();if(o.currentPhase==="MOUNT"){n!=null&&!Array.isArray(n)&&p.warn(`${t} received a final argument that is not an array (instead, received ${n}). When specified, the final argument must be an array.`);let i={name:t,deps:n};return o.currentHooks.push(i),e(i),i}if(o.currentPhase==="UPDATE"){let i=o.getNextHook();if(i==null)throw new Error("Rendered more hooks than during the previous render.");return i.name!==t&&p.warn(`Storybook has detected a change in the order of Hooks${o.currentDecoratorName?` called by ${o.currentDecoratorName}`:""}. This will lead to bugs and errors if not fixed.`),n!=null&&i.deps==null&&p.warn(`${t} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`),n!=null&&i.deps!=null&&n.length!==i.deps.length&&p.warn(`The final argument passed to ${t} changed size between renders. The order and size of this array must remain constant.
Previous: ${i.deps}
Incoming: ${n}`),(n==null||i.deps==null||!v(n,i.deps))&&(e(i),i.deps=n),i}throw $()}function S(t,e,n){let{memoizedState:o}=y(t,i=>{i.memoizedState=e()},n);return o}function I(t,e){return S("useMemo",t,e)}function P(t,e){let n=R(),o=S("useEffect",()=>({create:t}),e);n.currentEffects.includes(o)||n.currentEffects.push(o)}var h=t=>{(Array.isArray(t)?t:[t]).forEach(Y)},Y=t=>{let e=r.document.getElementById(t);e&&e.parentElement&&e.parentElement.removeChild(e)},w=(t,e)=>{let n=r.document.getElementById(t);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let o=r.document.createElement("style");o.setAttribute("id",t),o.innerHTML=e,r.document.head.appendChild(o)}};function G(t){return T`
    ${t} body {
      outline: 1px solid #2980b9 !important;
    }

    ${t} article {
      outline: 1px solid #3498db !important;
    }

    ${t} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${t} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${t} section {
      outline: 1px solid #66b8da !important;
    }

    ${t} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${t} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${t} h1 {
      outline: 1px solid #162544 !important;
    }

    ${t} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${t} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${t} h4 {
      outline: 1px solid #449baf !important;
    }

    ${t} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${t} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${t} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${t} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${t} div {
      outline: 1px solid #036cdb !important;
    }

    ${t} p {
      outline: 1px solid #ac050b !important;
    }

    ${t} hr {
      outline: 1px solid #ff063f !important;
    }

    ${t} pre {
      outline: 1px solid #850440 !important;
    }

    ${t} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${t} ol {
      outline: 1px solid #ff050c !important;
    }

    ${t} ul {
      outline: 1px solid #d90416 !important;
    }

    ${t} li {
      outline: 1px solid #d90416 !important;
    }

    ${t} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${t} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${t} dd {
      outline: 1px solid #e80174 !important;
    }

    ${t} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${t} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${t} table {
      outline: 1px solid #00cc99 !important;
    }

    ${t} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${t} thead {
      outline: 1px solid #98daca !important;
    }

    ${t} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${t} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${t} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${t} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${t} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${t} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${t} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${t} button {
      outline: 1px solid #da8301 !important;
    }

    ${t} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${t} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${t} form {
      outline: 1px solid #d23600 !important;
    }

    ${t} input {
      outline: 1px solid #fca600 !important;
    }

    ${t} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${t} label {
      outline: 1px solid #ee8900 !important;
    }

    ${t} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${t} meter {
      outline: 1px solid #e8630c !important;
    }

    ${t} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${t} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${t} output {
      outline: 1px solid #ff9619 !important;
    }

    ${t} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${t} select {
      outline: 1px solid #e26e0f !important;
    }

    ${t} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${t} details {
      outline: 1px solid #33848f !important;
    }

    ${t} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${t} command {
      outline: 1px solid #438da1 !important;
    }

    ${t} menu {
      outline: 1px solid #449da6 !important;
    }

    ${t} del {
      outline: 1px solid #bf0000 !important;
    }

    ${t} ins {
      outline: 1px solid #400000 !important;
    }

    ${t} img {
      outline: 1px solid #22746b !important;
    }

    ${t} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${t} embed {
      outline: 1px solid #98daca !important;
    }

    ${t} object {
      outline: 1px solid #00cc99 !important;
    }

    ${t} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${t} video {
      outline: 1px solid #6ee866 !important;
    }

    ${t} audio {
      outline: 1px solid #027353 !important;
    }

    ${t} source {
      outline: 1px solid #012426 !important;
    }

    ${t} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${t} track {
      outline: 1px solid #59a600 !important;
    }

    ${t} map {
      outline: 1px solid #7be500 !important;
    }

    ${t} area {
      outline: 1px solid #305900 !important;
    }

    ${t} a {
      outline: 1px solid #ff62ab !important;
    }

    ${t} em {
      outline: 1px solid #800b41 !important;
    }

    ${t} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${t} i {
      outline: 1px solid #803156 !important;
    }

    ${t} b {
      outline: 1px solid #cc1169 !important;
    }

    ${t} u {
      outline: 1px solid #ff0430 !important;
    }

    ${t} s {
      outline: 1px solid #f805e3 !important;
    }

    ${t} small {
      outline: 1px solid #d107b2 !important;
    }

    ${t} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${t} q {
      outline: 1px solid #240018 !important;
    }

    ${t} cite {
      outline: 1px solid #64003c !important;
    }

    ${t} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${t} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${t} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${t} time {
      outline: 1px solid #d6606d !important;
    }

    ${t} code {
      outline: 1px solid #e04251 !important;
    }

    ${t} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${t} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${t} var {
      outline: 1px solid #d90047 !important;
    }

    ${t} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${t} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${t} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${t} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${t} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${t} rp {
      outline: 1px solid #803e49 !important;
    }

    ${t} span {
      outline: 1px solid #cc2643 !important;
    }

    ${t} br {
      outline: 1px solid #db687d !important;
    }

    ${t} wbr {
      outline: 1px solid #db175b !important;
    }`}var U=(t,e)=>{let{globals:n}=e,o=n[c]===!0,i=e.viewMode==="docs",m=I(()=>{let d=i?`#anchor--${e.id} .docs-story`:".sb-show-main";return G(d)},[e]);return P(()=>{let d=i?`addon-outline-docs-${e.id}`:"addon-outline";return o?w(d,m):h(d),()=>{h(d)}},[o,m,e]),t()},xt=[U],Ot={[c]:!1};export{xt as decorators,Ot as globals};
//# sourceMappingURL=preview.7a4c2e1c.js.map
