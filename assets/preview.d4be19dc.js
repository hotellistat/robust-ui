import{w as T,i as q,s as X}from"./iframe.d0acd4d4.js";module&&module.hot&&module.hot.decline&&module.hot.decline();var K="links",x=()=>Math.random().toString(16).slice(2),z=class{constructor({transport:e,async:t=!1}={}){this.sender=x(),this.events={},this.data={},this.isAsync=t,e&&(this.transport=e,this.transport.setHandler(n=>this.handleEvent(n)))}get hasTransport(){return!!this.transport}addListener(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)}emit(e,...t){let n={type:e,args:t,from:this.sender},s={};t.length>=1&&t[0]&&t[0].options&&(s=t[0].options);let o=()=>{this.transport&&this.transport.send(n,s),this.handleEvent(n)};this.isAsync?setImmediate(o):o()}last(e){return this.data[e]}eventNames(){return Object.keys(this.events)}listenerCount(e){let t=this.listeners(e);return t?t.length:0}listeners(e){return this.events[e]||void 0}once(e,t){let n=this.onceListener(e,t);this.addListener(e,n)}removeAllListeners(e){e?this.events[e]&&delete this.events[e]:this.events={}}removeListener(e,t){let n=this.listeners(e);n&&(this.events[e]=n.filter(s=>s!==t))}on(e,t){this.addListener(e,t)}off(e,t){this.removeListener(e,t)}handleEvent(e){let t=this.listeners(e.type);t&&t.length&&t.forEach(n=>{n.apply(e,e.args)}),this.data[e.type]=e.args}onceListener(e,t){let n=(...s)=>(this.removeListener(e,n),t(...s));return n}},I=(e=>(e.CHANNEL_CREATED="channelCreated",e.CONFIG_ERROR="configError",e.STORY_INDEX_INVALIDATED="storyIndexInvalidated",e.STORY_SPECIFIED="storySpecified",e.SET_CONFIG="setConfig",e.SET_STORIES="setStories",e.SET_CURRENT_STORY="setCurrentStory",e.CURRENT_STORY_WAS_SET="currentStoryWasSet",e.FORCE_RE_RENDER="forceReRender",e.FORCE_REMOUNT="forceRemount",e.PRELOAD_ENTRIES="preloadStories",e.STORY_PREPARED="storyPrepared",e.STORY_CHANGED="storyChanged",e.STORY_UNCHANGED="storyUnchanged",e.STORY_RENDERED="storyRendered",e.STORY_MISSING="storyMissing",e.STORY_ERRORED="storyErrored",e.STORY_THREW_EXCEPTION="storyThrewException",e.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",e.PLAY_FUNCTION_THREW_EXCEPTION="playFunctionThrewException",e.UPDATE_STORY_ARGS="updateStoryArgs",e.STORY_ARGS_UPDATED="storyArgsUpdated",e.RESET_STORY_ARGS="resetStoryArgs",e.SET_GLOBALS="setGlobals",e.UPDATE_GLOBALS="updateGlobals",e.GLOBALS_UPDATED="globalsUpdated",e.REGISTER_SUBSCRIPTION="registerSubscription",e.PREVIEW_KEYDOWN="previewKeydown",e.SELECT_STORY="selectStory",e.STORIES_COLLAPSE_ALL="storiesCollapseAll",e.STORIES_EXPAND_ALL="storiesExpandAll",e.DOCS_RENDERED="docsRendered",e.SHARED_STATE_CHANGED="sharedStateChanged",e.SHARED_STATE_SET="sharedStateSet",e.NAVIGATE_URL="navigateUrl",e.UPDATE_QUERY_PARAMS="updateQueryParams",e))(I||{}),{CHANNEL_CREATED:Re,CONFIG_ERROR:Te,STORY_INDEX_INVALIDATED:Ae,STORY_SPECIFIED:pe,SET_STORIES:Oe,SET_CONFIG:k,SET_CURRENT_STORY:ve,CURRENT_STORY_WAS_SET:ge,FORCE_RE_RENDER:Ce,FORCE_REMOUNT:ye,STORY_PREPARED:me,STORY_CHANGED:Q,STORY_UNCHANGED:Ne,PRELOAD_ENTRIES:De,STORY_RENDERED:Le,STORY_MISSING:Ie,STORY_ERRORED:Pe,STORY_THREW_EXCEPTION:be,STORY_RENDER_PHASE_CHANGED:we,PLAY_FUNCTION_THREW_EXCEPTION:Ye,UPDATE_STORY_ARGS:Ge,STORY_ARGS_UPDATED:$e,RESET_STORY_ARGS:Ue,SET_GLOBALS:He,UPDATE_GLOBALS:Fe,GLOBALS_UPDATED:Me,REGISTER_SUBSCRIPTION:Be,PREVIEW_KEYDOWN:We,SELECT_STORY:J,STORIES_COLLAPSE_ALL:Ve,STORIES_EXPAND_ALL:je,DOCS_RENDERED:qe,SHARED_STATE_CHANGED:Xe,SHARED_STATE_SET:Ke,NAVIGATE_URL:xe,UPDATE_QUERY_PARAMS:ze}=I,{LOGLEVEL:Z,console:S}=T,E={trace:1,debug:2,info:3,warn:4,error:5,silent:10},ee=Z,f=E[ee]||E.info,te={trace:(e,...t)=>f<=E.trace&&S.trace(e,...t),debug:(e,...t)=>f<=E.debug&&S.debug(e,...t),info:(e,...t)=>f<=E.info&&S.info(e,...t),warn:(e,...t)=>f<=E.warn&&S.warn(e,...t),error:(e,...t)=>f<=E.error&&S.error(e,...t),log:(e,...t)=>f<E.silent&&S.log(e,...t)};function re(){let e={setHandler:()=>{},send:()=>{}};return new z({transport:e})}var ne=(e=>(e.TAB="tab",e.PANEL="panel",e.TOOL="tool",e.TOOLEXTRA="toolextra",e.PREVIEW="preview",e.NOTES_ELEMENT="notes-element",e))(ne||{}),ie=class{constructor(){this.loaders={},this.elements={},this.config={},this.getChannel=()=>(this.channel||this.setChannel(re()),this.channel),this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.getElements=e=>(this.elements[e]||(this.elements[e]={}),this.elements[e]),this.addPanel=(e,t)=>{this.add(e,{type:"panel",...t})},this.add=(e,t)=>{let{type:n}=t,s=this.getElements(n);s[e]={id:e,...t}},this.setConfig=e=>{Object.assign(this.config,e),this.hasChannel()&&this.getChannel().emit(k,e)},this.getConfig=()=>this.config,this.register=(e,t)=>{this.loaders[e]&&te.warn(`${e} was loaded twice, this could have bad side-effects`),this.loaders[e]=t},this.loadAddons=e=>{Object.values(this.loaders).forEach(t=>t(e))},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},y="__STORYBOOK_ADDONS";function ae(){return T[y]||(T[y]=new ie),T[y]}var P=ae(),se=({name:e,parameterName:t,wrapper:n,skipIfNoParametersOrOptions:s=!1})=>{let o=l=>(u,c)=>{let h=c.parameters&&c.parameters[t];return h&&h.disable||s&&!l&&!h?u(c):n(u,c,{options:l,parameters:h})};return(...l)=>typeof l[0]=="function"?o()(...l):(...u)=>{if(u.length>1)return l.length>1?o(l)(...u):o(...l)(...u);throw new Error(`Passing stories directly into ${e}() is not allowed,
        instead use addDecorator(${e}) and pass options with the '${t}' parameter`)}},oe={},R={};Object.defineProperty(R,"__esModule",{value:!0});R.includeConditionalArg=R.testValue=void 0;var L=le(q);function le(e){return e&&e.__esModule?e:{default:e}}var b=function(t){return t.map(function(n){return typeof n<"u"}).filter(Boolean).length},w=function(t,n){var s=t,o=s.exists,l=s.eq,u=s.neq,c=s.truthy;if(b([o,l,u,c])>1)throw new Error("Invalid conditional test ".concat(JSON.stringify({exists:o,eq:l,neq:u})));if(typeof l<"u")return(0,L.default)(n,l);if(typeof u<"u")return!(0,L.default)(n,u);if(typeof o<"u"){var h=typeof n<"u";return o?h:!h}var A=typeof c>"u"?!0:c;return A?!!n:!n};R.testValue=w;var ue=function(t,n,s){if(!t.if)return!0;var o=t.if,l=o.arg,u=o.global;if(b([l,u])!==1)throw new Error("Invalid conditional value ".concat(JSON.stringify({arg:l,global:u})));var c=l?n[l]:s[u];return w(t.if,c)};R.includeConditionalArg=ue;var Y={},de={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=de;Object.keys(t).forEach(function(n){n==="default"||n==="__esModule"||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})})(Y);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t={sanitize:!0,toId:!0,storyNameFromExport:!0,isExportStory:!0,parseKind:!0,includeConditionalArg:!0};e.isExportStory=B,Object.defineProperty(e,"includeConditionalArg",{enumerable:!0,get:function(){return s.includeConditionalArg}}),e.parseKind=e.storyNameFromExport=e.toId=e.sanitize=void 0;var n=l(X),s=R,o=Y;Object.keys(o).forEach(function(r){r==="default"||r==="__esModule"||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return o[r]}})});function l(r){return r&&r.__esModule?r:{default:r}}function u(r,i){return H(r)||U(r,i)||h(r,i)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(r,i){if(!!r){if(typeof r=="string")return A(r,i);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(a);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(r,i)}}function A(r,i){(i==null||i>r.length)&&(i=r.length);for(var a=0,d=new Array(i);a<i;a++)d[a]=r[a];return d}function U(r,i){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var a=[],d=!0,p=!1,O=void 0;try{for(var _=r[Symbol.iterator](),v;!(d=(v=_.next()).done)&&(a.push(v.value),!(i&&a.length===i));d=!0);}catch(g){p=!0,O=g}finally{try{!d&&_.return!=null&&_.return()}finally{if(p)throw O}}return a}}function H(r){if(Array.isArray(r))return r}var m=function(i){return i.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};e.sanitize=m;var N=function(i,a){var d=m(i);if(d==="")throw new Error("Invalid ".concat(a," '").concat(i,"', must include alphanumeric characters"));return d},F=function(i,a){return"".concat(N(i,"kind")).concat(a?"--".concat(N(a,"name")):"")};e.toId=F;var M=function(i){return(0,n.default)(i)};e.storyNameFromExport=M;function D(r,i){return Array.isArray(i)?i.includes(r):r.match(i)}function B(r,i){var a=i.includeStories,d=i.excludeStories;return r!=="__esModule"&&(!a||D(r,a))&&(!d||!D(r,d))}var W=function(i,a){var d=a.rootSeparator,p=a.groupSeparator,O=i.split(d,2),_=u(O,2),v=_[0],g=_[1],V=(g||i).split(p).filter(function(j){return!!j});return{root:g?v:null,groups:V}};e.parseKind=W})(oe);var{document:G,HTMLElement:ce}=T,he=e=>P.getChannel().emit(J,e),$=e=>{let{target:t}=e;if(!(t instanceof ce))return;let n=t,{sbKind:s,sbStory:o}=n.dataset;(s||o)&&(e.preventDefault(),he({kind:s,story:o}))},C=!1,Ee=()=>{C||(C=!0,G.addEventListener("click",$))},_e=()=>{C&&(C=!1,G.removeEventListener("click",$))},Se=se({name:"withLinks",parameterName:K,wrapper:(e,t)=>(Ee(),P.getChannel().once(Q,_e),e(t))}),ke=[Se];export{ke as decorators};
//# sourceMappingURL=preview.d4be19dc.js.map