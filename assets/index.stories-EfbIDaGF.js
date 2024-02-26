import{_ as p,p as s}from"./index-BLJEd7yD.js";import{r as m}from"./vue.esm-bundler-Bz3qryIq.js";import"./PhCaretRight.vue-BdMnY5Sb.js";import"./index-DEFBeL9q.js";import"./index-BU_rksmQ.js";import"./index-BlJvGyEY.js";import"./PhCheck.vue-LWmbIflT.js";import"./index-CJaCNXen.js";import"./index-DIemJ4uL.js";import"./index-BZHNt2Vw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CLsNVtzP.js";import"./index-SF679qGP.js";import"./index-B5I386vR.js";import"./index-B8HfPLlM.js";import"./index-D05znLir.js";import"./PhCaretDown.vue-DnCQUr8d.js";import"./index-QvkJk991.js";import"./PhWarningCircle.vue-BVo6iGy_.js";import"./index-6BUjMNqN.js";import"./PhWarning.vue-OkfWgJnO.js";import"./index-DTSWV6Q7.js";import"./index-CZvPACog.js";import"./index-CxUsfRvA.js";import"./index-MrLv7tfR.js";import"./index-B9fQDvLm.js";import"./index-CGQgqzjB.js";import"./index-DdH171X7.js";import"./index-BmUARsfE.js";import"./index-CFe1HMxT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CibTL6pJ.js";const H={title:"Ui/Calendar",component:p,argTypes:{preset:{options:s.map(t=>t.key),control:{type:"select"}},"onUpdate:preset":{},"onUpdate:modelValue":{}},args:{preset:"this_month",enableComparison:!0,enablePerspective:!0}},e={render:t=>({components:{Calendar:p},setup:()=>{const a=m(new Date);return{args:t,date:a}},template:`
      <Calendar v-bind="args" v-model="date" v-model:preset="args.preset"></Calendar>
      `})};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Calendar
    },
    setup: () => {
      const date = ref(new Date());
      // const dateRangeComparison = ref([new Date(), addDays(new Date(), 30)]);
      // const perspectiveDate = ref(new Date());
      // const perspectiveDateComparison = ref(new Date());
      // const activePreset = ref(undefined);
      // const activePresetComparison = ref(undefined);
      // const perspectivePreset = ref(undefined);
      // const perspectivePresetComparison = ref(undefined);

      return {
        args,
        date
      };
    },
    template: \`
      <Calendar v-bind="args" v-model="date" v-model:preset="args.preset"></Calendar>
      \`
  })
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,H as default};
