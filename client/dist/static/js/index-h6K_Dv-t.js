import{d as le,u as te,x as d,J as s,r,o as oe,k as ie,w as l,j as u,a as e,h as D,e as E,bn as i,ab as ce,bo as R,F as b,aj as _,bp as B,av as a,bq as re}from"./index-2S-pRSzX.js";import{_ as m}from"./form.vue_vue_type_script_setup_true_lang-qw2yNM_L.js";import{_ as ae}from"./formPrimitive.vue_vue_type_script_setup_true_lang-FDWNtkJI.js";const de={class:"card-header"},se={class:"font-medium"},me=le({name:"DialogPage",__name:"index",setup(Ce){const A=te();function h(){i({title:"基本使用",contentRenderer:()=>e("p",null,[u("弹框内容-基本使用")])})}function w(){i({title:"可拖拽",draggable:!0,contentRenderer:()=>_("p","弹框内容-可拖拽")})}function $(){i({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function g(){i({title:"全屏按钮",fullscreenIcon:!0,contentRenderer:()=>e("p",null,[u("弹框内容-全屏按钮")])})}function x(){i({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-无背景遮罩层")])})}function I(){i({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[u("弹框内容-自定义弹出位置")])})}const y=ce(()=>i({title:"延时2秒打开弹框",openDelay:1400,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒打开弹框")])}),600);function P(){i({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒关闭弹框")])})}function S(){i({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[u("弹框内容-不显示右上角关闭按钮图标")])})}function O(){i({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过键盘ESC关闭")])})}function N(){i({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过点击modal关闭")])})}function T(){i({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[u("弹框内容-隐藏底部取消、确定按钮")])})}function z(){i({title:"自定义头部",showClose:!1,headerRenderer:({close:t,titleId:o,titleClass:c})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:o,class:c},[u("自定义头部")]),e(r("el-button"),{type:"danger",onClick:t},{default:()=>[u("关闭")]})]),contentRenderer:()=>e("p",null,[u("弹框内容-自定义头部")])})}function j(){i({title:"自定义底部",footerRenderer:({options:t,index:o})=>e(r("el-button"),{onClick:()=>B(t,o)},{default:()=>[t.title,u("-"),o]}),contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部")])})}function H(){i({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:t,index:o},button:c})=>{B(t,o)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:t,index:o},button:c})=>{B(t,o)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:t,index:o},button:c})=>{B(t,o)}}],contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部按钮")])})}function M(){i({title:"打开后的回调",open:({options:t,index:o})=>a({options:t,index:o}),contentRenderer:()=>e("p",null,[u("弹框内容-打开后的回调")])})}function V(){i({title:"关闭后的回调",closeCallBack:({options:t,index:o,args:c})=>{let n="";(c==null?void 0:c.command)==="cancel"?n="您点击了取消按钮":(c==null?void 0:c.command)==="sure"?n="您点击了确定按钮":n="您点击了右上角关闭按钮或者空白页",a(n)},contentRenderer:()=>e("p",null,[u("弹框内容-关闭后的回调")])})}function U(){i({title:"嵌套的弹框",contentRenderer:({index:t})=>e(r("el-button"),{onClick:()=>i({title:`第${t+1}个子弹框`,width:"40%",contentRenderer:({index:o})=>e(r("el-button"),{onClick:()=>i({title:`第${o+1}个子弹框`,width:"30%",contentRenderer:()=>e(b,null,[e(r("el-button"),{round:!0,onClick:()=>re()},{default:()=>[u("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[u("点击打开第"),o+1,u("个子弹框")]})})},{default:()=>[u("点击打开第"),t+1,u("个子弹框")]})})}function q(){const t=d(1);i({title:`第${t.value}页`,contentRenderer:()=>e(b,null,[e(r("el-button"),{disabled:!(t.value>1),onClick:()=>{t.value-=1,R(`第${t.value}页`)}},{default:()=>[u("上一页")]}),e(r("el-button"),{onClick:()=>{t.value+=1,R(`第${t.value}页`)}},{default:()=>[u("下一页")]})])})}function J(){i({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>m,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:t,args:o})=>{const{formInline:c}=t.props,n=`姓名：${c.user} 城市：${c.region}`;(o==null?void 0:o.command)==="cancel"?a(`您点击了取消按钮，当前表单数据为 ${n}`):(o==null?void 0:o.command)==="sure"?a(`您点击了确定按钮，当前表单数据为 ${n}`):a(`您点击了右上角关闭按钮或者空白页，当前表单数据为 ${n}`)}})}const C=d({user:"菜虚鲲",region:"浙江"}),W=s(C.value);function G(){i({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>_(m,{formInline:C.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${C.value.user} 城市：${C.value.region}`),C.value=s(W)}})}const f=d({user:"菜虚鲲",region:"浙江"}),K=s(f.value);function L(){i({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(m,{formInline:f.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${f.value.user} 城市：${f.value.region}`),f.value=s(K)}})}const F=d({user:"菜虚鲲",region:"浙江"}),Q=s(F.value);function X(){i({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(m,{formInline:F.value},null),closeCallBack:()=>{a(`当前表单数据为 姓名：${F.value.user} 城市：${F.value.region}`),F.value=s(Q)}})}const k=d("Hello World"),Y=d(k.value);function Z(){i({width:"30%",title:"子组件 prop 为 primitive 类型 demo",contentRenderer:()=>_(ae,{data:k.value,"onUpdate:data":t=>k.value=t}),closeCallBack:()=>{a(`当前表单内容：${k.value}`),k.value=Y.value}})}function ee(){i({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(t,{options:o,index:c})=>{}})}function ue(){i({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口）")]),beforeSure:(t,{options:o,index:c})=>{}})}return(t,o)=>{const c=r("el-link"),n=r("el-button"),p=r("el-space"),v=r("el-divider"),ne=r("el-card");return oe(),ie(ne,{shadow:"never"},{header:l(()=>[E("div",de,[E("span",se,[u(" 二次封装 element-plus 的 "),e(c,{href:"https://element-plus.org/zh-CN/component/dialog.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:l(()=>[u(" Dialog ")]),_:1}),u(" ，采用函数式调用弹框组件（更多操作实例请参考 "),E("span",{class:"cursor-pointer text-primary",onClick:o[0]||(o[0]=fe=>D(A).push({name:"Dept"}))},"系统管理页面"),u(" ） ")])])]),default:l(()=>[e(p,{wrap:""},{default:l(()=>[e(n,{onClick:h},{default:l(()=>[u(" 基本使用 ")]),_:1}),e(n,{onClick:w},{default:l(()=>[u(" 可拖拽 ")]),_:1}),e(n,{onClick:$},{default:l(()=>[u(" 全屏 ")]),_:1}),e(n,{onClick:g},{default:l(()=>[u(" 全屏按钮 ")]),_:1}),e(n,{onClick:x},{default:l(()=>[u(" 无背景遮罩层 ")]),_:1}),e(n,{onClick:I},{default:l(()=>[u(" 自定义弹出位置 ")]),_:1}),e(n,{onClick:D(y)},{default:l(()=>[u(" 延时2秒打开弹框 ")]),_:1},8,["onClick"]),e(n,{onClick:P},{default:l(()=>[u(" 延时2秒关闭弹框 ")]),_:1}),e(n,{onClick:S},{default:l(()=>[u(" 不显示右上角关闭按钮图标 ")]),_:1}),e(n,{onClick:O},{default:l(()=>[u(" 禁止通过键盘ESC关闭 ")]),_:1}),e(n,{onClick:N},{default:l(()=>[u(" 禁止通过点击modal关闭 ")]),_:1}),e(n,{onClick:T},{default:l(()=>[u(" 隐藏底部取消、确定按钮 ")]),_:1}),e(n,{onClick:z},{default:l(()=>[u(" 自定义头部 ")]),_:1}),e(n,{onClick:j},{default:l(()=>[u(" 自定义底部 ")]),_:1}),e(n,{onClick:H},{default:l(()=>[u(" 自定义底部按钮 ")]),_:1}),e(n,{onClick:M},{default:l(()=>[u(" 打开后的回调 ")]),_:1}),e(n,{onClick:V},{default:l(()=>[u(" 关闭后的回调 ")]),_:1}),e(n,{onClick:U},{default:l(()=>[u(" 嵌套的弹框 ")]),_:1}),e(n,{onClick:q},{default:l(()=>[u(" 更改弹框自身属性值 ")]),_:1})]),_:1}),e(v),e(p,{wrap:""},{default:l(()=>[e(n,{onClick:J},{default:l(()=>[u(" 结合Form表单（第一种方式） ")]),_:1}),e(n,{onClick:G},{default:l(()=>[u(" 结合Form表单（第二种方式） ")]),_:1}),e(n,{onClick:L},{default:l(()=>[u(" 结合Form表单（第三种方式） ")]),_:1}),e(n,{onClick:X},{default:l(()=>[u(" 结合Form表单（第四种方式） ")]),_:1}),e(n,{onClick:Z},{default:l(()=>[u(" 子组件 prop 为 primitive 类型 ")]),_:1})]),_:1}),e(v),e(p,{wrap:""},{default:l(()=>[e(n,{onClick:ee},{default:l(()=>[u(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")]),_:1}),e(n,{onClick:ue},{default:l(()=>[u(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、编辑弹框内容后调用接口） ")]),_:1})]),_:1})]),_:1})}}});export{me as default};
