import{d as l,l as a,q as c,h as r}from"./vue.esm-bundler.33188a4f.js";import{S as u}from"./index.8e769f33.js";import{s as f}from"./vue-phosphor-icons.9c01704a.js";const g=l({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String,default:void 0}},emits:["loaded","error"],setup(i,{emit:t}){const e=a(!0),o=a(!1),s=new Image;return s.onload=()=>{t("loaded",!0),e.value=!1},s.onerror=n=>{t("error",n),o.value=!0,e.value=!1},c(()=>{s.src=i.src}),{error:o,loading:e}},render(){return this.loading?r("div",{class:"flex items-center justify-center"},r(u,{size:24,stroke:2})):this.error?this.fallbackSrc?r("img",{src:this.fallbackSrc}):r(f,{size:20}):r("img",{src:this.src})}});export{g as I};
//# sourceMappingURL=index.3468ee49.js.map