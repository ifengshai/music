var S=Object.defineProperty;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&c(t,a,e[a]);if(u)for(var a of u(e))y.call(e,a)&&c(t,a,e[a]);return t};import{t as z}from"./data-4mz6IcD_.js";import{x as l,a2 as h,bD as L,A as D,b6 as d,aK as E}from"./index-2S-pRSzX.js";function B(){const t=l([]),e=l(!0),a=l("no"),o=l("nohide"),g=l("default"),p=l(!1),i=l("right"),v=[{type:"selection",align:"left",reserveSelection:!0,hide:()=>a.value==="no"},{label:"日期",prop:"date",hide:()=>o.value==="hideDate"},{label:"姓名",prop:"name",hide:()=>o.value==="hideName"},{label:"地址",prop:"address",hide:()=>o.value==="hideAddress"}],s=h({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:"right",background:!0,small:!1}),r=h({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});function m(n){s.small=n}function b(n){}function x(n){r.text=`正在加载第${n}页...`,e.value=!0,d(600).then(()=>{e.value=!1})}return L(()=>{s.align=i.value}),D(()=>{d(600).then(()=>{const n=[];Array.from({length:6}).forEach(()=>{n.push(E(z,!0))}),n.flat(1/0).forEach((A,C)=>{t.value.push(f({id:C},A))}),s.total=t.value.length,e.value=!1})}),{loading:e,columns:v,dataList:t,select:a,hideVal:o,tableSize:g,pagination:s,loadingConfig:r,paginationAlign:i,paginationSmall:p,onChange:m,onSizeChange:b,onCurrentChange:x}}export{B as useColumns};
