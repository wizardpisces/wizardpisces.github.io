import{_ as c,r as _,o as d,c as p,a as o,b as e,l as s,m as n}from"./index.159a70dc.js";const u={name:"Home",setup(){return{proxyClick:a=>{console.log("hehe")}}}},h={class:"home"},m=o("h1",null,"Hello.",-1),f=o("p",{class:"desc"},"Brief Introduction",-1),x=o("a",{href:"https://github.com/wizardpisces/tiny-sass-compiler",target:"__blank"},"tiny-sass-compiler",-1),g=o("br",null,null,-1),k=o("br",null,null,-1),b=o("br",null,null,-1);function y(a,l,v,r,C,B){const t=_("router-link");return d(),p("div",h,[m,f,o("p",{class:"desc-feature",onClick:l[0]||(l[0]=(...i)=>r.proxyClick&&r.proxyClick(...i))},[e(" 1. "),s(t,{to:"/sass"},{default:n(()=>[e("Demo Page")]),_:1}),e(" of "),x,e(),g,e(" 2. "),s(t,{to:"/blog/introduction"},{default:n(()=>[e("Blogs page")]),_:1}),e(),k,e(" 3. "),s(t,{to:"/machine-learning"},{default:n(()=>[e("Machine Learning - Deploy irises prediction model on web")]),_:1}),e(),b])])}var N=c(u,[["render",y]]);export{N as default};