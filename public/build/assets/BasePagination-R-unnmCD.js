import{i as n,o as r,f as o,b as s,d as c,t as l,j as p,x,F as g,q as b,c as v,n as y,V as h,g as w}from"./app-CJjH5JfA.js";import{c as _}from"./index-Bb4qSo10.js";const C={key:0,class:"flex flex-wrap items-center justify-between gap-3 pt-8 flex-column md:flex-row","aria-label":"Table navigation"},V={class:"block w-full text-sm font-normal text-gray-500 md:w-auto"},B={class:"font-semibold text-gray-900"},L={class:"font-semibold text-gray-900"},j={class:"inline-flex -space-x-px text-sm rtl:space-x-reverse"},S={__name:"BasePagination",props:{data:{type:[Object],required:!0,default:()=>{}}},setup(a){const d=n(()=>e=>e.url?"Link":"span"),m=n(()=>e=>e.label.includes("Previous")?"previous":e.label.includes("Next")?"next":e.active?"current":"default"),f=n(()=>e=>_("text-sm items-center justify-center border border-gray-300 shadow-sm outline-none",{variants:{variant:{next:"px-2 py-2 text-gray-400 font-normal rounded-e-lg bg-white",previous:"px-2 py-2 text-gray-400 font-normal ms-0 rounded-s-lg bg-white",current:"px-4 py-2 text-gray-900 font-semibold bg-gray-50 pointer-events-none",default:"px-4 py-2 text-gray-500 font-semibold"},disabled:{true:"cursor-not-allowed opacity-75 hover:bg-white",false:"cursor-pointer hover:bg-gray-50 hover:text-gray-700"}},compoundVariants:[{variant:["previous","next"],current:!1,class:"bg-white"}],defaultVariants:{}})({variant:m.value(e),disabled:!e.url}));return(e,N)=>{var i,u;return(u=(i=a.data)==null?void 0:i.data)!=null&&u.length?(r(),o("nav",C,[s("span",V,[c(" Showing "),s("span",B,l(a.data.from)+"-"+l(a.data.to),1),c(" of "),s("span",L,l(a.data.total),1)]),p(s("ul",j,[(r(!0),o(g,null,b(a.data.links,t=>(r(),o("li",{key:t.label},[(r(),v(h(d.value(t)),{innerHTML:t.label,href:t.url,disabled:!t.url,class:y(f.value(t)),"aria-current":t.active?"page":void 0},null,8,["innerHTML","href","disabled","class","aria-current"]))]))),128))],512),[[x,a.data.last_page>1]])])):w("",!0)}}};export{S as _};
