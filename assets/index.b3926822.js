import{r as o,o as s,d as e,f as l,C as a,g as r}from"./vendor.9222577a.js";const t={name:"Home",setup:()=>({proxyClick:o=>{console.log("hehe")}})},n={class:"home"},c=l("h1",null,"Hello.",-1),i=l("p",{class:"desc"},"Brief Introduction",-1),u=r(" 1. "),p=r("Demo Page"),d=r(" of "),f=l("a",{href:"https://github.com/wizardpisces/tiny-sass-compiler",target:"__blank"},"tiny-sass-compiler",-1),m=r(),k=l("br",null,null,-1),g=r(" 2. "),h=r("Blog page"),b=r(),y=l("br",null,null,-1),C=r(" 3. "),_=r("Bookmarks");t.render=function(r,t,x,B,v,H){const j=o("router-link");return s(),e("div",n,[c,i,l("p",{class:"desc-feature",onClick:t[1]||(t[1]=(...o)=>B.proxyClick&&B.proxyClick(...o))},[u,l(j,{to:"/sass"},{default:a((()=>[p])),_:1}),d,f,m,k,g,l(j,{to:"/blog/《系统之美》"},{default:a((()=>[h])),_:1}),b,y,C,l(j,{to:"/bookmark"},{default:a((()=>[_])),_:1})])])};export default t;