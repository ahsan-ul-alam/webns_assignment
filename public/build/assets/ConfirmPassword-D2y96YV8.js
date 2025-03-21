import{T as p,r as n,o as c,c as u,w as i,a as t,b as e,u as o,d as f,e as _}from"./app-CJjH5JfA.js";import{_ as w}from"./BaseInput-CedS8Wev.js";import{_ as x}from"./BaseButton-E4CvXj1D.js";import"./index-Bb4qSo10.js";const b=e("h3",{class:"mb-4 text-xl font-bold text-gray-700"}," Confirm your password ",-1),g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y={class:"flex justify-end mt-4"},N={__name:"ConfirmPassword",setup(h){const s=p({password:""}),d=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>{const m=n("Head"),l=n("GuestLayout");return c(),u(l,null,{default:i(()=>[t(m,{title:"Confirm Password"}),b,g,e("form",{onSubmit:_(d,["prevent"])},[e("div",null,[t(w,{autofocus:"",label:"Password",id:"confirm-password-password",autocomplete:"current-password",type:"password",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=a=>o(s).password=a),"error-message":o(s).errors.password,onFocus:r[1]||(r[1]=a=>o(s).clearErrors("password"))},null,8,["modelValue","error-message"])]),e("div",y,[t(x,{class:"ms-4","is-loading":o(s).processing},{default:i(()=>[f(" Confirm ")]),_:1},8,["is-loading"])])],32)]),_:1})}}};export{N as default};
