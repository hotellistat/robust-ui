import{d as c,j as i,s as u,v as f,w as m,h as e}from"./vue.esm-bundler-b37ea11a.js";import{_ as d}from"./index-ed922b58.js";import{I as g}from"./PhWarning.vue-22197565.js";const I=c({name:"RobustImg",props:{src:{type:String,required:!0},fallbackSrc:{type:String,default:void 0}},emits:["loaded","error"],setup(n,{emit:a}){const s=i(!0),o=i(!1),{src:t}=u(n),r=new Image;return r.onload=()=>{a("loaded",!0),s.value=!1},r.onerror=l=>{a("error",l),o.value=!0,s.value=!1},f(()=>{r.src=t.value}),m(t,()=>{r.src=t.value}),{error:o,loading:s}},render(){return this.loading?e("div",{class:"flex items-center justify-center"},e(d,{size:24,stroke:2})):this.error?this.fallbackSrc?e("img",{src:this.fallbackSrc}):e(g,{size:20}):e("img",{src:this.src})}});export{I};
//# sourceMappingURL=index-160d70fd.js.map