import{_,o as i,c as d,a as o,b as e,k as l,l as r,r as p}from"./index.aca4d14c.js";const u={name:"Home",setup(){return{proxyClick:a=>{console.log("hehe")}}}},h={class:"home"},m=o("h1",null,"Hello.",-1),f=o("p",{class:"desc"},"Brief Introduction",-1),x=o("a",{href:"https://github.com/wizardpisces/tiny-sass-compiler",target:"__blank"},"tiny-sass-compiler",-1),k=o("br",null,null,-1),g=o("br",null,null,-1);function y(a,s,b,t,v,C){const n=p("router-link");return i(),d("div",h,[m,f,o("p",{class:"desc-feature",onClick:s[0]||(s[0]=(...c)=>t.proxyClick&&t.proxyClick(...c))},[e(" 1. "),l(n,{to:"/sass"},{default:r(()=>[e("Demo Page")]),_:1}),e(" of "),x,e(),k,e(" 2. "),l(n,{to:"/blog/\u5173\u4E8EGPT"},{default:r(()=>[e("Blog page")]),_:1}),e(),g])])}var N=_(u,[["render",y]]);export{N as default};