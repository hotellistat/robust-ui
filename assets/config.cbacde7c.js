import{h as d,c as y}from"./vue.esm-bundler.33188a4f.js";import{n as h,d as g}from"./iframe.d3475a2e.js";import{d as w,g as v,b as E,y as D,T as x}from"./index.05ac8006.js";function T(r){return typeof r=="function"?{render:r,name:r.name}:r}function l(r,t){let e=r;return e==null?null:t?{...T(e),components:{...e.components||{},story:t}}:{render(){return d(e)}}}function q(r,t){return t.reduce((e,a)=>s=>{let o,n=a(p=>(o=e({...s,...h(p)}),o),s);return o||(o=e(s)),n===o?o:l(n,o)},e=>l(r(e)))}var C=(r,t)=>{let{id:e,component:a}=t;if(!a)throw new Error(`Unable to render story ${e} as the component annotation is missing from the default export`);return d(a,r)},u=new Map;function U({title:r,name:t,storyFn:e,showMain:a,showError:s,showException:o},n){var m;let p,i=y({unmounted(){u.delete(n)},render(){return u.set(n,i),d(p)}});if(i.config.errorHandler=c=>o(c),p=e(),!p){s({title:`Expecting a Vue component from the story: "${t}" of "${r}".`,description:g`
      Did you forget to return the Vue component from the story?
      Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `});return}a(),(m=u.get(n))==null||m.unmount(),i.mount(n)}var $=["props","events","slots","methods"],b=r=>{if(!E(r))return null;let t={};return $.forEach(e=>{D(r,e).forEach(({propDef:a,docgenInfo:s,jsDocTags:o})=>{let{name:n,type:p,description:i,defaultValue:m,required:c}=a,f=e==="props"?x(s):{name:"void"};t[n]={name:n,description:i,type:{required:c,...f},table:{type:p,jsDocTags:o,defaultValue:m,category:e}}})}),t},M={docs:{inlineStories:!0,extractArgTypes:b,extractComponentDescription:v}},k=[w],F={framework:"vue3",...M};export{q as applyDecorators,k as argTypesEnhancers,F as parameters,C as render,U as renderToDOM};
//# sourceMappingURL=config.cbacde7c.js.map
