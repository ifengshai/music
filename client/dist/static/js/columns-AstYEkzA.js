import{S as c}from"./sortable.esm-uEDcjrHK.js";import{x as p,aK as i,a,r as u,P as d}from"./index-2S-pRSzX.js";import{a as m}from"./data-4mz6IcD_.js";function x(){const e=p(i(m,!0)),n=o=>{o.preventDefault(),d(()=>{const r=document.querySelector(".el-table__body-wrapper tbody");c.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:t,oldIndex:l})=>{const s=e.value.splice(l,1)[0];e.value.splice(t,0,s)}})})};return{columns:[{label:"ID",prop:"id",cellRenderer:({row:o})=>a("div",{class:"flex items-center"},[a(u("iconify-icon-online"),{icon:"icon-park-outline:drag",class:"drag-btn cursor-grab",onMouseenter:r=>n(r)},null),a("p",{class:"ml-[16px]"},[o.id])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],dataList:e}}export{x as useColumns};
