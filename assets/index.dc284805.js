import{_ as u,y as c,r as p,o as i,c as d,a as o,z as n,e as m,m as _,S as v,l as f,s as $,x as k}from"./index.a582161d.js";const C={setup(){const e=c();return{jumpTo:a=>{e.push({name:a})}}}},b=e=>($("data-v-3e0b0e82"),e=e(),k(),e),j={id:"machine-learning"},x=b(()=>o("h1",null,"machine learning Demo",-1));function I(e,s,a,t,S,T){const l=p("router-view");return i(),d("div",j,[x,o("ul",null,[o("li",{onClick:s[0]||(s[0]=r=>t.jumpTo("mnist")),class:n({active:e.$route.name==="mnist"})},"Mnist",2),o("li",{onClick:s[1]||(s[1]=r=>t.jumpTo("irises")),class:n({active:e.$route.name==="irises"})},"Irises",2),o("li",{onClick:s[2]||(s[2]=r=>t.jumpTo("WebGPU")),class:n({active:e.$route.name==="WebGPU"})},"WebGPU",2)]),(i(),m(v,null,{default:_(()=>[f(l)]),_:1}))])}var w=u(C,[["render",I],["__scopeId","data-v-3e0b0e82"]]);export{w as default};