import{x as d,y as i,a as t,r as s,j as o,F as m,av as r}from"./index-2S-pRSzX.js";import{t as p}from"./data-EEtByK52.js";function h(){const l=d(""),n=i(()=>p.filter(e=>!l.value||e.name.toLowerCase().includes(l.value.toLowerCase()))),u=(e,a)=>{r(`您编辑了第 ${e} 行，数据为：${JSON.stringify(a)}`,{type:"success"})},c=(e,a)=>{r(`您删除了第 ${e} 行，数据为：${JSON.stringify(a)}`)};return{columns:[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{align:"right",headerRenderer:()=>t(s("el-input"),{modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,size:"small",clearable:!0,placeholder:"Type to search"},null),cellRenderer:({index:e,row:a})=>t(m,null,[t(s("el-button"),{size:"small",onClick:()=>u(e+1,a)},{default:()=>[o("Edit")]}),t(s("el-button"),{size:"small",type:"danger",onClick:()=>c(e+1,a)},{default:()=>[o("Delete")]})])}],filterTableData:n}}export{h as useColumns};