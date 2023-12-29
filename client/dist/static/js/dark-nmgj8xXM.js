var G=Object.defineProperty;var N=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var R=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,P=(t,e)=>{for(var n in e||(e={}))_.call(e,n)&&R(t,n,e[n]);if(N)for(var n of N(e))ee.call(e,n)&&R(t,n,e[n]);return t};import{ah as w,y as i,aw as te,ag as ne,H as U,x as E,n as y,u as oe,ax as ae,K as ue,at as Q,E as W,ay as le,a8 as se,az as re,V as ce,Q as ie,am as fe,o as H,c as z,e as k}from"./index-2S-pRSzX.js";import{u as M}from"./epTheme-O3nBMrW2.js";import{e as j}from"./mitt-y5r8hZta.js";import{u as de}from"./app-p3c9jCfG.js";function me(){const{$storage:t,$config:e}=w(),n=()=>{var r,c,h,f,g,d,l,s,m,p,b,T,C,B;te().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=ne),t.locale||(t.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},U().locale.value=(c=e==null?void 0:e.Locale)!=null?c:"zh"),t.layout||(t.layout={layout:(h=e==null?void 0:e.Layout)!=null?h:"vertical",theme:(f=e==null?void 0:e.Theme)!=null?f:"default",darkMode:(g=e==null?void 0:e.DarkMode)!=null?g:!1,sidebarStatus:(d=e==null?void 0:e.SidebarStatus)!=null?d:!0,epThemeColor:(l=e==null?void 0:e.EpThemeColor)!=null?l:"#409EFF"}),t.configure||(t.configure={grey:(s=e==null?void 0:e.Grey)!=null?s:!1,weak:(m=e==null?void 0:e.Weak)!=null?m:!1,hideTabs:(p=e==null?void 0:e.HideTabs)!=null?p:!1,hideFooter:(b=e.HideFooter)!=null?b:!0,showLogo:(T=e==null?void 0:e.ShowLogo)!=null?T:!0,showModel:(C=e==null?void 0:e.ShowModel)!=null?C:"smart",multiTagsCache:(B=e==null?void 0:e.MultiTagsCache)!=null?B:!1})},o=i(()=>t==null?void 0:t.layout.layout),u=i(()=>t.layout);return{layout:o,layoutTheme:u,initStorage:n}}const x={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"D:/workspace/music_ui/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},he="/",ge="assets",V=t=>{let e=t.replace("#","").match(/../g);for(let n=0;n<3;n++)e[n]=parseInt(e[n],16);return e},K=(t,e,n)=>{let o=[t.toString(16),e.toString(16),n.toString(16)];for(let u=0;u<3;u++)o[u].length==1&&(o[u]=`0${o[u]}`);return`#${o.join("")}`},ve=(t,e)=>{let n=V(t);for(let o=0;o<3;o++)n[o]=Math.floor(n[o]*(1-e));return K(n[0],n[1],n[2])},pe=(t,e)=>{let n=V(t);for(let o=0;o<3;o++)n[o]=Math.floor((255-n[o])*e+n[o]);return K(n[0],n[1],n[2])},O=t=>`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`,D=({scopeName:t,multipleScopeVars:e})=>{const n=Array.isArray(e)&&e.length?e:x.multipleScopeVars;let o=document.documentElement.className;new RegExp(O(t)).test(o)||(n.forEach(u=>{o=o.replace(new RegExp(O(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=o.replace(/(^\s+|\s+$)/g,""))},$=({id:t,href:e})=>{const n=document.createElement("link");return n.rel="stylesheet",n.href=e,n.id=t,n},be=t=>{const e=P({scopeName:"theme-default",customLinkHref:r=>r},t),n=e.themeLinkTagId||x.themeLinkTagId;let o=document.getElementById(n);const u=e.customLinkHref(`${he.replace(/\/$/,"")}${`/${ge}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(o){o.id=`${n}_old`;const r=$({id:n,href:u});o.nextSibling?o.parentNode.insertBefore(r,o.nextSibling):o.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{o.parentNode.removeChild(o),o=null},60),D(e)};return}o=$({id:n,href:u}),D(e),document[(e.themeLinkTagInjectTo||x.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(o)};function De(){var d;const{layoutTheme:t,layout:e}=me(),n=E([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:o}=w(),u=E((d=o==null?void 0:o.layout)==null?void 0:d.darkMode),r=document.documentElement;function c(l=(s=>(s=y().Theme)!=null?s:"default")()){var m,p;if(t.value.theme=l,be({scopeName:`layout-theme-${l}`}),o.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(m=o.layout)==null?void 0:m.sidebarStatus,epThemeColor:(p=o.layout)==null?void 0:p.epThemeColor},l==="default"||l==="light")f(y().EpThemeColor);else{const b=n.value.find(T=>T.themeColor===l);f(b.color)}}function h(l,s,m){document.documentElement.style.setProperty(`--el-color-primary-${l}-${s}`,u.value?ve(m,s/10):pe(m,s/10))}const f=l=>{M().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let s=1;s<=2;s++)h("dark",s,l);for(let s=1;s<=9;s++)h("light",s,l)};function g(){M().epTheme==="light"&&u.value?c("default"):c(M().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:n,dataThemeChange:g,setEpThemeColor:f,setLayoutThemeColor:c}}const Te="data:image/jpeg;base64,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",ke="当前路由配置不正确，请检查配置";function Ce(){var S,F;const t=de(),e=oe().options.routes,{wholeMenus:n}=ae(ue()),o=(F=(S=y())==null?void 0:S.TooltipEffect)!=null?F:"light",u=i(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),r=i(()=>{var a;return(a=Q())==null?void 0:a.email}),c=i(()=>(a,v)=>({background:a===v?M().epThemeColor:"",color:a===v?"#f4f4f5":"#000"})),h=i(()=>(a,v)=>a===v?"":"dark:hover:!text-primary"),f=i(()=>r.value?{marginRight:"10px"}:""),g=i(()=>!t.getSidebarStatus),d=i(()=>t.getDevice),{$storage:l,$config:s}=w(),m=i(()=>{var a;return(a=l==null?void 0:l.layout)==null?void 0:a.layout}),p=i(()=>s.Title);function b(a){const v=y().Title;v?document.title=`${W(a.title)} | ${v}`:document.title=W(a.title)}function T(){Q().logOut()}function C(){var a;le.push((a=se())==null?void 0:a.path)}function B(){j.emit("openPanel")}function X(){t.toggleSideBar()}function Y(a){a==null||a.handleResize()}function I(a){var L;if(!a.children)return console.error(ke);const v=/^http(s?):\/\//,A=(L=a.children[0])==null?void 0:L.path;return v.test(A)?a.path+"/"+A:A}function J(a){n.value.length===0||Z(a)||j.emit("changLayoutRoute",a)}function Z(a){return re.includes(a)}function q(){return new URL("/logo.svg",import.meta.url).href}return{title:p,device:d,layout:m,logout:T,routers:e,$storage:l,backTopMenu:C,onPanel:B,getDivStyle:u,changeTitle:b,toggleSideBar:X,menuSelect:J,handleResize:Y,resolvePath:I,getLogo:q,isCollapse:g,pureApp:t,username:r,userAvatar:Te,avatarsStyle:f,tooltipEffect:o,getDropdownItemStyle:c,getDropdownItemClass:h}}function $e(t){const{$storage:e,changeTitle:n,handleResize:o}=Ce(),{locale:u,t:r}=U(),c=ce();function h(){e.locale={locale:"zh"},u.value="zh",t&&o(t.value)}function f(){e.locale={locale:"en"},u.value="en",t&&o(t.value)}return ie(()=>u.value,()=>{n(c.meta)}),fe(()=>{var g,d;u.value=(d=(g=e.locale)==null?void 0:g.locale)!=null?d:"zh"}),{t:r,route:c,locale:u,translationCh:h,translationEn:f}}const Be={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},Me=k("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ye=[Me];function Ae(t,e){return H(),z("svg",Be,[...ye])}const Ue={render:Ae},xe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},we=k("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),He=k("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121M23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1),ze=[we,He];function Se(t,e){return H(),z("svg",xe,[...ze])}const Ve={render:Se},Fe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Le=k("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ne=k("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1),Re=[Le,Ne];function Pe(t,e){return H(),z("svg",Fe,[...Re])}const Ke={render:Pe};export{$e as a,De as b,Ke as c,Ve as d,me as e,Ue as g,be as t,Ce as u};
