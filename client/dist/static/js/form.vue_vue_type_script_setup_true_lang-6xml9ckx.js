import{R as s}from"./index-LXGOUNws.js";import{a2 as k,a$ as R,dE as C,d as I,x as v,r as d,o as c,k as B,w as l,h as r,D as V,e as D,c as E,v as S,a as e,C as F}from"./index-2S-pRSzX.js";import{u as N}from"./hooks-HgHo26Ji.js";const O=k({name:[{required:!0,message:"部门名称为必填项",trigger:"blur"}],phone:[{validator:(i,m,u)=>{m===""||R(m)?u():u(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(i,m,u)=>{m===""||C(m)?u():u(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),P={key:0},$=I({__name:"form",props:{formInline:{default:()=>({higherDeptOptions:[],parentId:0,name:"",principal:"",phone:"",email:"",sort:0,status:1,remark:""})}},setup(i,{expose:m}){const u=i,f=v(),{switchStyle:b}=N(),a=v(u.formInline);function x(){return f.value}return m({getRef:x}),(q,t)=>{const g=d("el-cascader"),n=d("el-form-item"),p=d("el-input"),h=d("el-input-number"),w=d("el-switch"),y=d("el-row"),U=d("el-form");return c(),B(U,{ref_key:"ruleFormRef",ref:f,model:a.value,rules:r(O),"label-width":"82px"},{default:l(()=>[e(y,{gutter:30},{default:l(()=>[e(r(s),null,{default:l(()=>[e(n,{label:"上级部门"},{default:l(()=>[e(g,{modelValue:a.value.parentId,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.parentId=o),class:"w-full",options:a.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择上级部门"},{default:l(({node:o,data:_})=>[D("span",null,V(_.name),1),o.isLeaf?S("",!0):(c(),E("span",P," ("+V(_.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),e(r(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门名称",prop:"name"},{default:l(()=>[e(p,{modelValue:a.value.name,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.name=o),clearable:"",placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(r(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门负责人"},{default:l(()=>[e(p,{modelValue:a.value.principal,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.principal=o),clearable:"",placeholder:"请输入部门负责人"},null,8,["modelValue"])]),_:1})]),_:1}),e(r(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"手机号",prop:"phone"},{default:l(()=>[e(p,{modelValue:a.value.phone,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value.phone=o),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),e(r(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"邮箱",prop:"email"},{default:l(()=>[e(p,{modelValue:a.value.email,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value.email=o),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1}),e(r(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"排序"},{default:l(()=>[e(h,{modelValue:a.value.sort,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value.sort=o),min:0,max:9999,"controls-position":"right"},null,8,["modelValue"])]),_:1})]),_:1}),e(r(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门状态"},{default:l(()=>[e(w,{modelValue:a.value.status,"onUpdate:modelValue":t[6]||(t[6]=o=>a.value.status=o),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:F(r(b))},null,8,["modelValue","style"])]),_:1})]),_:1}),e(r(s),null,{default:l(()=>[e(n,{label:"备注"},{default:l(()=>[e(p,{modelValue:a.value.remark,"onUpdate:modelValue":t[7]||(t[7]=o=>a.value.remark=o),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{$ as _};