import{s as v,a as h}from"./vue-virtual-scroller.esm-3bNJND30.js";import{d as x,x as r,y as w,r as d,o as g,c as y,e as i,j as I,a as l,w as m,h as p,D as V,_ as C}from"./index-2S-pRSzX.js";const b={class:"dynamic-scroller-demo"},k={class:"flex-ac mb-4 shadow-2xl"},z={class:"flex items-center"},B=x({__name:"vertical",setup(N){const o=r([]),s=r("");for(let e=0;e<800;e++)o.value.push({id:e});const u=w(()=>{if(!s.value)return o.value;const e=s.value;return o.value.filter(t=>t.id==e)});return(e,t)=>{const _=d("el-input"),f=d("IconifyIconOnline");return g(),y("div",b,[i("div",k,[I(" 垂直模式 vertical "),l(_,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),class:"!w-[350px]",clearable:"",placeholder:"Filter..."},null,8,["modelValue"])]),l(p(h),{items:u.value,"min-item-size":54,class:"scroller"},{default:m(({item:a,index:n,active:c})=>[l(p(v),{item:a,active:c,"size-dependencies":[a.id],"data-index":n,"data-active":c,title:`Click to change message ${n}`,class:"message"},{default:m(()=>[i("div",z,[l(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),i("span",null,V(a.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title"])]),_:1},8,["items"])])}}}),O=C(B,[["__scopeId","data-v-7aa14f18"]]);export{O as default};
