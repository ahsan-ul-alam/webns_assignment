import{W as C,p as O,X as A,Y as E,u as T,I as j,l as L,i as P,o as W,c as B,a as F,w as I,j as x,b as f,C as g,x as _,B as $,Z as D}from"./app-CJjH5JfA.js";const ie=C("modals",{state:()=>({accountModalOpen:!1,createUserModalOpen:!1,editUserModalOpen:!1,deleteUserModalOpen:!1,createCategoryModalOpen:!1,editCategoryModalOpen:!1,deleteCategoryModalOpen:!1,createLabelModalOpen:!1,editLabelModalOpen:!1,deleteLabelModalOpen:!1,createTicketModalOpen:!1,editTicketModalOpen:!1,deleteTicketModalOpen:!1}),actions:{},getters:{isModalOpen:e=>o=>e[o]||!1}});function q(e){return A()?(E(e),!0):!1}function v(e){return typeof e=="function"?e():T(e)}const S=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const N=Object.prototype.toString,U=e=>N.call(e)==="[object Object]",w=()=>{},V=z();function z(){var e,o;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((o=window==null?void 0:window.navigator)==null?void 0:o.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function G(e,o){function n(...t){return new Promise((r,i)=>{Promise.resolve(e(()=>o.apply(this,t),{fn:o,thisArg:this,args:t})).then(r).catch(i)})}return n}const H=e=>e();function R(e,o={}){let n,t,r=w;const i=l=>{clearTimeout(l),r(),r=w};return l=>{const m=v(e),h=v(o.maxWait);return n&&i(n),m<=0||h!==void 0&&h<=0?(t&&(i(t),t=null),Promise.resolve(l())):new Promise((c,p)=>{r=o.rejectOnCancel?p:c,h&&!t&&(t=setTimeout(()=>{n&&i(n),t=null,c(l())},h)),n=setTimeout(()=>{t&&i(t),t=null,c(l())},m)})}}function X(e,o,n={}){const{eventFilter:t=H,...r}=n;return O(e,G(t,o),r)}function le(e,o,n={}){const{debounce:t=0,maxWait:r=void 0,...i}=n;return X(e,o,{...i,eventFilter:R(t,{maxWait:r})})}function y(e){var o;const n=v(e);return(o=n==null?void 0:n.$el)!=null?o:n}const k=S?window:void 0;function b(...e){let o,n,t,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,t,r]=e,o=k):[o,n,t,r]=e,!o)return w;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const i=[],d=()=>{i.forEach(c=>c()),i.length=0},l=(c,p,s,a)=>(c.addEventListener(p,s,a),()=>c.removeEventListener(p,s,a)),m=O(()=>[y(o),v(r)],([c,p])=>{if(d(),!c)return;const s=U(p)?{...p}:p;i.push(...n.flatMap(a=>t.map(u=>l(c,a,u,s))))},{immediate:!0,flush:"post"}),h=()=>{m(),d()};return q(h),h}let M=!1;function Y(e,o,n={}){const{window:t=k,ignore:r=[],capture:i=!0,detectIframe:d=!1}=n;if(!t)return w;V&&!M&&(M=!0,Array.from(t.document.body.children).forEach(s=>s.addEventListener("click",w)),t.document.documentElement.addEventListener("click",w));let l=!0;const m=s=>r.some(a=>{if(typeof a=="string")return Array.from(t.document.querySelectorAll(a)).some(u=>u===s.target||s.composedPath().includes(u));{const u=y(a);return u&&(s.target===u||s.composedPath().includes(u))}}),c=[b(t,"click",s=>{const a=y(e);if(!(!a||a===s.target||s.composedPath().includes(a))){if(s.detail===0&&(l=!m(s)),!l){l=!0;return}o(s)}},{passive:!0,capture:i}),b(t,"pointerdown",s=>{const a=y(e);l=!m(s)&&!!(a&&!s.composedPath().includes(a))},{passive:!0}),d&&b(t,"blur",s=>{setTimeout(()=>{var a;const u=y(e);((a=t.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(u!=null&&u.contains(t.document.activeElement))&&o(s)},0)})].filter(Boolean);return()=>c.forEach(s=>s())}const Z=({target:e,currentModalModel:o})=>{j(()=>{Y(e,n=>o.value=!1),O(o,n=>{n?document.querySelector("body").classList.add("overflow-hidden"):document.querySelector("body").classList.remove("overflow-hidden")})})},J={tabindex:"-1","aria-hidden":"true",role:"dialog",class:"fixed top-0 left-0 right-0 z-[51] w-full p-2 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"},K={class:"flex items-start justify-between p-4 border-b"},Q=f("h3",{class:"text-lg font-medium text-gray-900"}," Heading ",-1),ee=f("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[f("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),te=f("span",{class:"sr-only"},"Close modal",-1),oe=[ee,te],ne={class:"p-6 space-y-6 overflow-y-auto"},se={class:"flex items-center justify-end p-6 space-x-3 border-t border-gray-200 rtl:space-x-reverse"},re={class:"fixed inset-0 z-50 bg-gray-900 bg-opacity-50"},ce={__name:"BaseModal",props:{isOpen:{type:[Boolean],required:!0,default:!1}},emits:["onClose","update:isOpen"],setup(e,{emit:o}){const n=e,t=o,r=L(),i=P({get:()=>n.isOpen,set:d=>{t("update:isOpen",d)}});return Z({target:r,currentModalModel:i}),(d,l)=>(W(),B(D,{to:"body"},[F($,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"translate-y-0 opacity-100 sm:scale-100","leave-active-class":"","leave-from-class":"translate-y-0 opacity-100 sm:scale-100","leave-to-class":"opacity-0"},{default:I(()=>[x(f("div",J,[f("div",{ref_key:"target",ref:r,class:"relative w-full max-w-xl max-h-[600px] overflow-y-auto bg-white rounded inset-1/2 -translate-x-1/2 -translate-y-1/2"},[f("div",K,[g(d.$slots,"header",{},()=>[Q]),f("button",{type:"button",onClick:l[0]||(l[0]=m=>d.$emit("onClose")),class:"inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"},oe)]),f("div",ne,[g(d.$slots,"default")]),f("div",se,[g(d.$slots,"footer")])],512)],512),[[_,e.isOpen]])]),_:3}),x(f("div",re,null,512),[[_,e.isOpen]])]))}};export{ce as _,ie as u,le as w};
