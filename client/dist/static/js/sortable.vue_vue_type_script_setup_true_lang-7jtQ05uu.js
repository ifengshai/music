import{d as r}from"./data-EEtByK52.js";import{d as t,r as n,o as s,k as p,h as l}from"./index-2S-pRSzX.js";const u=t({__name:"sortable",setup(c){const a=[{label:"日期",prop:"date",sortable:!0},{label:"姓名",prop:"name"},{label:"地址",prop:"address",formatter:({address:e})=>`格式化后的内容：${e}`}];return(e,d)=>{const o=n("pure-table");return s(),p(o,{data:l(r),columns:a,"default-sort":{prop:"date",order:"ascending"}},null,8,["data"])}}});export{u as _};