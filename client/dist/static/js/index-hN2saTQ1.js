import{l as M,M as x}from"./index-jlsaagEY.js";import{d as k,x as a,A as L,as as c,a0 as w,r as y,k as f,w as I,o as h,h as g,_ as C}from"./index-2S-pRSzX.js";const F=k({name:"Welcome",__name:"index",setup(N){a();const o=a(!1),p=a([]),t=a(1);return setTimeout(()=>{o.value=!o.value},800),L(()=>{c().set_indexNumber(0),c().shouldFlush==1&&new Promise((v,i)=>{M().then(e=>{let r=[];e.data.list.forEach(s=>{var u,n,l,d,_,m;r.push({music_id:(u=s.Id)!=null?u:0,name:(n=s.MusicName)!=null?n:"",artist:(l=s.MusicArtist)!=null?l:"",url:(d=s.MusicFile)!=null?d:"",cover:(_=s.MusicImage)!=null?_:"",lrc:(m=s.MusicLyric)!=null?m:"",theme:"#ebd0c2"})}),w().setItem("musicList",JSON.stringify(r)),t.value=t.value+1,c().set_shouldFlush(0)}).catch(e=>{i(e)})})}),(v,i)=>{const e=y("el-card");return h(),f(e,{shadow:"never"},{default:I(()=>[(h(),f(g(x),{fatherMusicList:p.value,key:t.value},null,8,["fatherMusicList"]))]),_:1})}}}),A=C(F,[["__scopeId","data-v-cc72fc9f"]]);export{A as default};
