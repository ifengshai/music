import{useRole as E}from"./hook-tpMbpzSH.js";import{R as T,D as U,P as A}from"./refresh-qw662f-T.js";import{u as s}from"./hooks-QG7FGeQA.js";import{E as F}from"./edit-pen-ADYwvCzA.js";import{d as I}from"./search-DTzpNWF3.js";import{d as N}from"./menu-_OwpKHc3.js";import{A as j}from"./add-circle-line-sUWhjfIG.js";import{d as L,x as M,r as t,o as O,c as q,a as o,w as l,h as e,j as m,_ as G}from"./index-2S-pRSzX.js";import"./form.vue_vue_type_script_setup_true_lang-L7bAyMme.js";import"./system-ZYa0JBtM.js";import"./hooks-HgHo26Ji.js";import"./epTheme-O3nBMrW2.js";import"./sortable.esm-uEDcjrHK.js";const H={class:"main"},J=L({name:"Role",__name:"index",setup(K){const d=M(),{form:r,loading:u,columns:h,dataList:b,pagination:k,onSearch:f,resetForm:y,openDialog:_,handleMenu:v,handleDelete:x,handleSizeChange:V,handleCurrentChange:R,handleSelectionChange:S}=E();return(Q,a)=>{const g=t("el-input"),p=t("el-form-item"),C=t("el-option"),w=t("el-select"),i=t("el-button"),P=t("el-form"),$=t("el-popconfirm"),D=t("pure-table");return O(),q("div",H,[o(P,{ref_key:"formRef",ref:d,inline:!0,model:e(r),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:l(()=>[o(p,{label:"角色名称：",prop:"name"},{default:l(()=>[o(g,{modelValue:e(r).name,"onUpdate:modelValue":a[0]||(a[0]=n=>e(r).name=n),placeholder:"请输入角色名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"角色标识：",prop:"code"},{default:l(()=>[o(g,{modelValue:e(r).code,"onUpdate:modelValue":a[1]||(a[1]=n=>e(r).code=n),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"状态：",prop:"status"},{default:l(()=>[o(w,{modelValue:e(r).status,"onUpdate:modelValue":a[2]||(a[2]=n=>e(r).status=n),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:l(()=>[o(C,{label:"已启用",value:"1"}),o(C,{label:"已停用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(p,null,{default:l(()=>[o(i,{type:"primary",icon:e(s)(e(I)),loading:e(u),onClick:e(f)},{default:l(()=>[m(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(s)(e(T)),onClick:a[3]||(a[3]=n=>e(y)(d.value))},{default:l(()=>[m(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(A),{title:"角色列表（仅演示，操作后不生效）",columns:e(h),onRefresh:e(f)},{buttons:l(()=>[o(i,{type:"primary",icon:e(s)(e(j)),onClick:a[4]||(a[4]=n=>e(_)())},{default:l(()=>[m(" 新增角色 ")]),_:1},8,["icon"])]),default:l(({size:n,dynamicColumns:z})=>[o(D,{"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(u),size:n,adaptive:"",data:e(b),columns:z,pagination:e(k),paginationSmall:n==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(S),onPageSizeChange:e(V),onPageCurrentChange:e(R)},{operation:l(({row:c})=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(F)),onClick:B=>e(_)("编辑",c)},{default:l(()=>[m(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(N)),onClick:e(v)},{default:l(()=>[m(" 菜单权限 ")]),_:2},1032,["size","icon","onClick"]),o($,{title:`是否确认删除角色名称为${c.name}的这条数据`,onConfirm:B=>e(x)(c)},{reference:l(()=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(U))},{default:l(()=>[m(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}}),me=G(J,[["__scopeId","data-v-3efa515c"]]);export{me as default};