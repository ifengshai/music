import{d as C,x as r,aK as w,K as H,y as M,aL as b,aM as N,r as a,o as T,k as I,w as n,j as l,h as o,a as d,e as c,E as p,D as Z}from"./index-2S-pRSzX.js";import{u as B}from"./hooks-QG7FGeQA.js";const D={width:24,height:24,body:'<path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6Zm9 16h-4v2h4v-2Zm0-8h-4v2h4v-2ZM9 4H5v2h4V4Z"/>'},K=D,P={class:"card-header"},R={class:"font-medium"},S=C({name:"MenuTree",__name:"menu-tree",setup(q){const u=r(""),m=r({value:"uniqueId",children:"children"}),h=r(),_=w(H().wholeMenus,!0),i=M(()=>b(_)),v=N(i.value),f=e=>{h.value.filter(e)},x=(e,t)=>p(t.meta.title).indexOf(e)!==-1;return(e,t)=>{const k=a("el-link"),V=a("el-input"),y=a("el-tree-v2"),g=a("el-card");return T(),I(g,{shadow:"never"},{header:n(()=>[c("div",P,[c("span",R,[l(" 菜单树结构（采用element-plus的 "),d(k,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:o(B)(o(K)),style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:n(()=>[l(" Tree V2 ")]),_:1},8,["icon"]),l(" 组件并支持国际化） ")])])]),default:n(()=>[d(V,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=s=>u.value=s),class:"mb-4",placeholder:"请输入关键字查找",clearable:"",onInput:f},null,8,["modelValue"]),d(y,{ref_key:"treeRef",ref:h,data:i.value,props:m.value,"show-checkbox":"",height:500,"filter-method":x,"default-expanded-keys":o(v)},{default:n(({data:s})=>[c("span",null,Z(o(p)(s.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{S as default};
