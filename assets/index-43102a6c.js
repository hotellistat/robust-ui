import{R as o}from"./DocsRenderer-NNNQARDV-c87f46d5.js";import"./iframe-0c78a3c2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-eee72b75.js";import"./index-356e4a49.js";const i=o.createContext({});function s(t){return e;function e(r){const n=u(r.components);return o.createElement(t,{...r,allComponents:n})}}function u(t){const e=o.useContext(i);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const m={};function M({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||m:n=u(t),o.createElement(i.Provider,{value:n},e)}export{i as MDXContext,M as MDXProvider,u as useMDXComponents,s as withMDXComponents};