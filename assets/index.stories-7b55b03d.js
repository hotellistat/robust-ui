import{d as E,t as F,j as c,w as M,k as q,o as g,b as p,g as n,u as l,l as _,F as k,n as P,p as v,q as w,f as S,s as H,v as L}from"./vue.esm-bundler-11053946.js";import{I as T}from"./PhCaretDown.vue-6db8f745.js";import{I as U,H as A}from"./PhCaretRight.vue-8b6848f9.js";import{o as G}from"./index-1748c350.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const D=i=>(H("data-v-84623b55"),i=i(),L(),i),K={class:"flex"},Q={class:"relative z-0 inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},W=D(()=>n("span",{class:"sr-only"},"Previous",-1)),X=["onClick"],Y={key:0,class:"paginate-btn relative inline-flex w-12 items-center justify-center border-gray-200 bg-gray-50 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-800"},Z=D(()=>n("span",{class:"sr-only"},"Next",-1)),ee={key:0},ae={class:"min-w-0 select-none truncate"},te={class:"flex h-full flex-shrink-0 items-center pr-2 pl-2 text-gray-400"},ne={key:0,class:"absolute top-10 z-50 ml-0.5 w-full rounded-lg py-2 text-gray-700 shadow-2xl dark:bg-gray-700 dark:text-white"},re=["onClick"],j=E({__name:"index",props:{pageSize:{type:Number,default:0},totalCount:{type:Number,default:0},page:{type:Number,default:0},showPageSize:{type:Boolean,default:!0}},emits:["update:page","update:pageSize"],setup(i,{emit:m}){const b=i,{pageSize:f,totalCount:z,page:o}=F(b),r=c(0),h=c(null),u=c(!1),d=c([]),x=e=>{m("update:page",e)};M([z,f,o],()=>C());const O=()=>{u.value=!u.value},R=e=>{e!==f.value&&(u.value=!1,m("update:pageSize",e))};G(h,e=>{u.value&&!h.value.contains(e.target)&&(u.value=!1)});const C=()=>{r.value=Math.ceil(z.value/f.value);const e=[];if(r.value<10){for(let t=1;t<=r.value;t++)e.push(t);return d.value=e,d.value}let s=o.value-3<1?1:o.value-3,a=o.value+3>r.value?r.value:o.value+3;s===1&&(a=7+s),a===r.value&&(s=a-7),a<r.value-1&&s>2&&a-s===6&&(a-=1);for(let t=s;t<=a;t++)t>0&&t<r.value&&e.push(t);return e[0]!==1&&e.unshift(1),e[e.length-1]!==r.value&&e.push(r.value),d.value=e,d.value},$=e=>d.value[e+1]-d.value[e]>1;return q(()=>{C()}),(e,s)=>(g(),p("div",K,[n("nav",Q,[n("span",{class:"paginate-btn relative inline-flex items-center rounded-l-md border-gray-200 bg-gray-50 p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800",onClick:s[0]||(s[0]=()=>l(o)>1&&x(l(o)-1))},[W,_(l(U),{type:"chevron-left",class:"h-5 w-5",size:"24",weight:"bold"})]),(g(!0),p(k,null,P(d.value,(a,t)=>(g(),p(k,{key:t},[n("span",{class:v(["paginate-btn relative inline-flex w-12 items-center justify-center border-gray-200 bg-gray-50 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-800",a===l(o)?"active bg-gray-100 dark:text-gray-900":""]),onClick:()=>x(a)},w(a),11,X),$(t)?(g(),p("span",Y,"...")):S("",!0)],64))),128)),n("span",{class:"paginate-btn relative inline-flex items-center rounded-r-md border-gray-200 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800",onClick:s[1]||(s[1]=()=>l(o)<r.value&&x(l(o)+1))},[Z,_(l(A),{type:"chevron-right",class:"h-5 w-5",size:"24",weight:"bold"})])]),i.showPageSize?(g(),p("div",ee,[n("div",{ref_key:"containerRef",ref:h,class:"relative ml-2 flex h-full flex-col"},[n("div",{class:"shadow-outline flex flex h-full h-8 items-center overflow-hidden rounded-md border-gray-200 bg-gray-50 p-1.5 shadow-inner focus-within:outline-none focus-within:ring dark:border-gray-600 dark:bg-gray-800",onClick:O},[n("div",{class:v(["flex h-full w-full items-center bg-transparent text-current outline-none",[e.$slots.prefix||"pl-2"]])},[n("div",ae,w(l(f)),1)],2),n("div",te,[_(l(T),{size:18,class:v(["transition-transform duration-200",{"rotate-180 transform":u.value}])},null,8,["class"])])]),u.value?(g(),p("ul",ne,[(g(),p(k,null,P([10,25,50],a=>n("li",{key:a,class:v(["flex items-center justify-center px-4 py-1.5 transition-colors duration-200 hover:bg-gray-500 hover:text-white",l(f)===a?"bg-gray-500 text-white ":""]),onClick:t=>R(a)},[n("span",null,w(a),1)],10,re)),64))])):S("",!0)],512)])):S("",!0)]))}});const B=J(j,[["__scopeId","data-v-84623b55"]]);j.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pageSize",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"page",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"showPageSize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:page"},{name:"update:pageSize"}]};const ge={title:"Ui/Pagination",component:B},se=i=>({template:'<Pagination v-bind="args" :totalCount="200" v-model:page="page" v-model:pageSize="pageSize"/>',components:{Pagination:B},setup(){const m=c(2),b=c(10);return{args:i,page:m,pageSize:b}}}),y=se.bind({});var I,N,V;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  template: '<Pagination v-bind="args" :totalCount="200" v-model:page="page" v-model:pageSize="pageSize"/>',
  components: {
    Pagination
  },
  setup() {
    const page = ref(2);
    const pageSize = ref(10);
    return {
      args,
      page,
      pageSize
    };
  }
})`,...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const pe=["Default"];export{y as Default,pe as __namedExportsOrder,ge as default};
//# sourceMappingURL=index.stories-7b55b03d.js.map
