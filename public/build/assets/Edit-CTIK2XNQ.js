import{T as x,s as $,l as b,p as k,o as c,c as E,w as i,a,d as p,u as e,b as o,A as U,y as P,f,g as w,B as V,e as h,k as C,Q as F,r as g,j as A,x as B,F as D}from"./app-CJjH5JfA.js";import{u as S,_ as N}from"./BaseModal-DhD6O_bo.js";import{_ as v}from"./BaseButton-E4CvXj1D.js";import{_}from"./BaseInput-CedS8Wev.js";import"./index-Bb4qSo10.js";const T=o("h3",{class:"text-lg font-medium text-gray-900"}," Delete Account ",-1),M=o("p",{class:"text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),O={class:"mt-6"},L={__name:"DeleteAccountModal",setup(u){const t=x({password:""}),r=S(),{accountModalOpen:n}=$(r),s=()=>{t.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>{n.value=!1,t.reset()}})},l=b(null);return k(n,d=>{d&&setTimeout(()=>{l.value.focus()},0)}),(d,m)=>(c(),E(N,{"is-open":e(n),"onUpdate:isOpen":m[2]||(m[2]=y=>P(n)?n.value=y:null),onOnClose:m[3]||(m[3]=y=>n.value=!1)},{header:i(()=>[T]),footer:i(()=>[a(v,{variant:"secondary",onClick:m[1]||(m[1]=y=>n.value=!1)},{default:i(()=>[p(" Cancel ")]),_:1}),a(v,{variant:"danger",class:"ms-3","is-loading":e(t).processing,onClick:s},{default:i(()=>[p(" Delete ")]),_:1},8,["is-loading"])]),default:i(()=>[o("div",null,[M,o("div",O,[a(_,{ref_key:"input",ref:l,label:"Password",id:"delete-account-password",type:"password",modelValue:e(t).password,"onUpdate:modelValue":m[0]||(m[0]=y=>e(t).password=y),onKeyup:U(s,["enter"]),"error-message":e(t).errors.password},null,8,["modelValue","error-message"])])])]),_:1},8,["is-open"]))}},j={class:"space-y-6"},H={__name:"DeleteUserForm",setup(u){const t=S(),{accountModalOpen:r}=$(t);return(n,s)=>(c(),f("section",j,[a(v,{variant:"danger",onClick:s[0]||(s[0]=l=>r.value=!0)},{default:i(()=>[p(" Delete Account ")]),_:1}),a(L)]))}},I=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),o("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),K=o("hr",{class:"my-6"},null,-1),R={class:"flex items-center gap-4"},Q={key:0,class:"text-sm text-gray-600"},Y={__name:"UpdatePasswordForm",setup(u){const t=x({current_password:"",password:"",password_confirmation:""}),r=()=>{t.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>{C().add({type:"success",message:"Password updated successfully"}),t.reset()},onError:()=>{}})};return(n,s)=>(c(),f("section",null,[I,K,o("form",{onSubmit:h(r,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[a(_,{label:"Current Password",id:"update-current-password",type:"password",modelValue:e(t).current_password,"onUpdate:modelValue":s[0]||(s[0]=l=>e(t).current_password=l),"error-message":e(t).errors.current_password,onFocus:s[1]||(s[1]=l=>e(t).clearErrors("current_password"))},null,8,["modelValue","error-message"])]),o("div",null,[a(_,{label:"New Password",id:"update-new-password",type:"password",autocomplete:"new-password",modelValue:e(t).password,"onUpdate:modelValue":s[2]||(s[2]=l=>e(t).password=l),"error-message":e(t).errors.password,onFocus:s[3]||(s[3]=l=>e(t).clearErrors("password"))},null,8,["modelValue","error-message"])]),o("div",null,[a(_,{label:"Confirm Password",id:"update-password-confirmation",type:"password",autocomplete:"new-password",modelValue:e(t).password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=l=>e(t).password_confirmation=l),"error-message":e(t).errors.password_confirmation,onFocus:s[5]||(s[5]=l=>e(t).clearErrors("password_confirmation"))},null,8,["modelValue","error-message"])]),o("div",R,[a(v,{"is-loading":e(t).processing},{default:i(()=>[p("Save")]),_:1},8,["is-loading"]),a(V,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:i(()=>[e(t).recentlySuccessful?(c(),f("p",Q,"Saved.")):w("",!0)]),_:1})])],32)]))}},q=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),o("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),z=o("hr",{class:"my-6"},null,-1),G={key:0},J={class:"mt-2 text-sm text-gray-800"},W={class:"mt-2 text-sm font-medium text-green-600"},X={class:"flex items-center gap-4"},Z={key:0,class:"text-sm text-gray-600"},ee={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(u){const t=F().props.auth.user,r=x({name:t.name,email:t.email});return(n,s)=>{const l=g("Link");return c(),f("section",null,[q,z,o("form",{onSubmit:s[4]||(s[4]=h(d=>e(r).patch(n.route("profile.update")),["prevent"])),class:"space-y-6"},[o("div",null,[a(_,{label:"Name",id:"update-profile-name",type:"text",modelValue:e(r).name,"onUpdate:modelValue":s[0]||(s[0]=d=>e(r).name=d),"error-message":e(r).errors.name,onFocus:s[1]||(s[1]=d=>e(r).clearErrors("name")),autocomplete:"name"},null,8,["modelValue","error-message"])]),o("div",null,[a(_,{label:"Email",id:"update-profile-email",type:"email",modelValue:e(r).email,"onUpdate:modelValue":s[2]||(s[2]=d=>e(r).email=d),"error-message":e(r).errors.email,onFocus:s[3]||(s[3]=d=>e(r).clearErrors("email")),autocomplete:"username"},null,8,["modelValue","error-message"])]),u.mustVerifyEmail&&e(t).email_verified_at===null?(c(),f("div",G,[o("p",J,[p(" Your email address is unverified. "),a(l,{href:n.route("verification.send"),method:"post",as:"button",class:"text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"},{default:i(()=>[p(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),A(o("div",W," A new verification link has been sent to your email address. ",512),[[B,u.status==="verification-link-sent"]])])):w("",!0),o("div",X,[a(v,{"is-loading":e(r).processing},{default:i(()=>[p("Save")]),_:1},8,["is-loading"]),a(V,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:i(()=>[e(r).recentlySuccessful?(c(),f("p",Z,"Saved.")):w("",!0)]),_:1})])],32)])}}},se={class:"flex items-center justify-between p-6"},te=o("h2",{class:"text-xl font-semibold leading-tight text-gray-800"},"Profile",-1),oe={class:"grid gap-6"},ae={class:"p-6 bg-white rounded-lg shadow sm:p-8"},re={class:"p-6 bg-white rounded-lg shadow sm:p-8"},me={__name:"Edit",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(u){return(t,r)=>{const n=g("Head"),s=g("AuthenticatedLayout");return c(),f(D,null,[a(n,{title:"Profile"}),a(s,null,{header:i(()=>[o("div",se,[te,a(e(H))])]),default:i(()=>[o("div",oe,[o("div",ae,[a(e(ee),{status:u.status,"must-verify-email":u.mustVerifyEmail,class:"max-w-xl"},null,8,["status","must-verify-email"])]),o("div",re,[a(e(Y),{class:"max-w-xl"})])])]),_:1})],64)}}};export{me as default};
