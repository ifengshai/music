var E=Object.defineProperty,O=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var z=(n,t,e)=>t in n?E(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,f=(n,t)=>{for(var e in t||(t={}))R.call(t,e)&&z(n,e,t[e]);if(b)for(var e of b(t))G.call(t,e)&&z(n,e,t[e]);return n},x=(n,t)=>O(n,q(t));var L=(n,t,e)=>new Promise((m,p)=>{var w=l=>{try{c(e.next(l))}catch(v){p(v)}},u=l=>{try{c(e.throw(l))}catch(v){p(v)}},c=l=>l.done?m(l.value):Promise.resolve(l.value).then(w,u);c((e=e.apply(n,t)).next())});import{br as H,d as J,x as d,A as K,r,g as Q,o as g,c as h,e as W,a as s,w as _,j as X,h as C,S as k,i as y,F as S,k as Y,B as Z,v as ee,dx as te,av as ae,P as ne}from"./index-2S-pRSzX.js";import le from"./Card-PK30IehL.js";import{_ as oe}from"./DialogForm.vue_vue_type_script_setup_true_lang-7GXQFEnJ.js";import{u as se}from"./hooks-QG7FGeQA.js";import{d as ie}from"./search-DTzpNWF3.js";import{A as re}from"./add-circle-line-sUWhjfIG.js";import"./more-2-fill-g1QAeR5z.js";const ue=n=>H.request("post","/get-card-list",{data:n}),ce={class:"main"},de={class:"w-full flex justify-between mb-4"},me=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,Ce=J({name:"ListCard",__name:"index",setup(n){const t={name:"",status:"",description:"",type:"",mark:""},e=d({current:1,pageSize:12,total:0}),m=d([]),p=d(!0),w=()=>L(this,null,function*(){try{const{data:a}=yield ue();m.value=a.list,e.value=x(f({},e.value),{total:a.list.length})}catch(a){}finally{setTimeout(()=>{p.value=!1},500)}});K(()=>{w()});const u=d(!1),c=d(f({},t)),l=d(""),v=a=>{e.value.pageSize=a,e.value.current=1},I=a=>{e.value.current=a},V=a=>{te.confirm(a?`确认删除后${a.name}的所有产品信息将被清空, 且无法恢复`:"","提示",{type:"warning"}).then(()=>{ae("删除成功",{type:"success"})}).catch(()=>{})},A=a=>{u.value=!0,ne(()=>{c.value=x(f({},a),{status:a!=null&&a.isSetup?"1":"0"})})};return(a,i)=>{const D=r("el-button"),P=r("IconifyIconOffline"),B=r("el-icon"),M=r("el-input"),N=r("el-empty"),T=r("el-col"),j=r("el-row"),F=r("el-pagination"),U=Q("loading");return g(),h("div",ce,[W("div",de,[s(D,{icon:C(se)(C(re)),onClick:i[0]||(i[0]=o=>u.value=!0)},{default:_(()=>[X(" 新建产品 ")]),_:1},8,["icon"]),s(M,{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=o=>l.value=o),style:{width:"300px"},placeholder:"请输入产品名称",clearable:""},{suffix:_(()=>[s(B,{class:"el-input__icon"},{default:_(()=>[y(s(P,{icon:C(ie)},null,8,["icon"]),[[k,l.value.length===0]])]),_:1})]),_:1},8,["modelValue"])]),y((g(),h("div",{"element-loading-svg":me,"element-loading-svg-view-box":"-10, -10, 50, 50"},[y(s(N,{description:"暂无数据"},null,512),[[k,m.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(o=>o.name.toLowerCase().includes(l.value.toLowerCase())).length===0]]),e.value.total>0?(g(),h(S,{key:0},[s(j,{gutter:16},{default:_(()=>[(g(!0),h(S,null,Z(m.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(o=>o.name.toLowerCase().includes(l.value.toLowerCase())),(o,$)=>(g(),Y(T,{key:$,xs:24,sm:12,md:8,lg:6,xl:4},{default:_(()=>[s(le,{product:o,onDeleteItem:V,onManageProduct:A},null,8,["product"])]),_:2},1024))),128))]),_:1}),s(F,{currentPage:e.value.current,"onUpdate:currentPage":i[2]||(i[2]=o=>e.value.current=o),class:"float-right","page-size":e.value.pageSize,total:e.value.total,"page-sizes":[12,24,36],background:!0,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:v,onCurrentChange:I},null,8,["currentPage","page-size","total"])],64)):ee("",!0)])),[[U,p.value]]),s(oe,{visible:u.value,"onUpdate:visible":i[3]||(i[3]=o=>u.value=o),data:c.value},null,8,["visible","data"])])}}});export{Ce as default};
