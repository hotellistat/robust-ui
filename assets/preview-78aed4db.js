import{s as E}from"./index-d475d2ea.js";import"./index-44b71ee6.js";import"./toString-4d66ddb6.js";import"./_commonjsHelpers-725317a4.js";module&&module.hot&&module.hot.decline&&module.hot.decline();var O="links";const r=__STORYBOOK_MODULE_PREVIEW_API__.addons,m=__STORYBOOK_MODULE_PREVIEW_API__.makeDecorator,c=__STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED,d=__STORYBOOK_MODULE_CORE_EVENTS__.SELECT_STORY;var{document:a,HTMLElement:l}=E,L=e=>r.getChannel().emit(d,e),i=e=>{let{target:t}=e;if(!(t instanceof l))return;let s=t,{sbKind:o,sbStory:_}=s.dataset;(o||_)&&(e.preventDefault(),L({kind:o,story:_}))},n=!1,R=()=>{n||(n=!0,a.addEventListener("click",i))},S=()=>{n&&(n=!1,a.removeEventListener("click",i))},T=m({name:"withLinks",parameterName:O,wrapper:(e,t)=>(R(),r.getChannel().once(c,S),e(t))}),Y=[T];export{Y as decorators};
//# sourceMappingURL=preview-78aed4db.js.map
