import{V as l,u as h,dO as d,b1 as f,W as n}from"./index-2S-pRSzX.js";function y(){const i=l(),s=h(),a=d(i.params)?i.query:i.params;function o(t,u){Object.keys(t).forEach(e=>{f(t[e])||(t[e]=t[e].toString())}),u==="query"?(n().handleTags("push",{path:"/tabs/query-detail",name:"TabQueryDetail",query:t,meta:{title:{zh:`No.${t.id} - 详情信息`,en:`No.${t.id} - DetailInfo`},dynamicLevel:3}}),s.push({name:"TabQueryDetail",query:t})):u==="params"&&(n().handleTags("push",{path:"/tabs/params-detail/:id",name:"TabParamsDetail",params:t,meta:{title:{zh:`No.${t.id} - 详情信息`,en:`No.${t.id} - DetailInfo`}}}),s.push({name:"TabParamsDetail",params:t}))}return{toDetail:o,initToDetail:t=>{a&&o(a,t)},getParameter:a,router:s}}export{y as u};