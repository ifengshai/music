import{d as B,x as n,r as p,g as D,i as v,o as l,c as u,a as d,w as m,h as _,e as t,S as b,k as I,v as f,D as c,bh as N}from"./index-2S-pRSzX.js";import{R}from"./index-MrQoav3v.js";const V={"element-loading-background":"transparent"},z={class:"w-[18vw]"},j={class:"mt-1 text-center"},A={class:"flex flex-wrap justify-center items-center text-center"},E={key:1,class:"mt-1"},q=B({__name:"upload",props:{imgSrc:String},emits:["cropper"],setup(h,{emit:g}){const w=h,C=g,e=n(),k=n(),r=n(!1),s=n("");function x({base64:i,blob:o,info:a}){e.value=a,s.value=i,C("cropper",{base64:i,blob:o,info:a})}return(i,o)=>{const a=p("el-image"),y=p("el-popover"),S=D("loading");return v((l(),u("div",V,[d(y,{visible:r.value,placement:"right",width:"18vw"},{reference:m(()=>[t("div",z,[d(_(R),{ref_key:"refCropper",ref:k,src:w.imgSrc,circled:"",onCropper:x,onReadied:o[0]||(o[0]=M=>r.value=!0)},null,8,["src"]),v(t("p",j," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[b,r.value]])])]),default:m(()=>[t("div",A,[s.value?(l(),I(a,{key:0,src:s.value,"preview-src-list":Array.of(s.value),fit:"cover"},null,8,["src","preview-src-list"])):f("",!0),e.value?(l(),u("div",E,[t("p",null," 图像大小："+c(parseInt(e.value.width))+" × "+c(parseInt(e.value.height))+"像素 ",1),t("p",null," 文件大小："+c(_(N)(e.value.size))+"（"+c(e.value.size)+" 字节） ",1)])):f("",!0)])]),_:1},8,["visible"])])),[[S,!r.value]])}}});export{q as _};