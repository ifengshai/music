import{t as s}from"./data-EEtByK52.js";import{d,x as _,r as o,o as m,c,a as e,w as b,h as i}from"./index-2S-pRSzX.js";const V=d({__name:"layout",setup(f){const a=_("fixed"),n=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(x,t)=>{const l=o("el-radio-button"),r=o("el-radio-group"),u=o("pure-table");return m(),c("div",null,[e(r,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=p=>a.value=p)},{default:b(()=>[e(l,{label:"fixed"}),e(l,{label:"auto"})]),_:1},8,["modelValue"]),e(u,{data:i(s),columns:n,"table-layout":a.value},null,8,["data","table-layout"])])}}});export{V as _};
