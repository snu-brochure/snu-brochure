import{v as f,w,A as m,B as q}from"./utils.B2AQxnli.js";const a=[];function A(s,u){return{subscribe:x(s,u).subscribe}}function x(s,u=f){let r=null;const n=new Set;function i(t){if(q(s,t)&&(s=t,r)){const o=!a.length;for(const e of n)e[1](),a.push(e,s);if(o){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function l(t){i(t(s))}function b(t,o=f){const e=[t,o];return n.add(e),n.size===1&&(r=u(i,l)||f),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:i,update:l,subscribe:b}}function B(s,u,r){const n=!Array.isArray(s),i=n?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=u.length<2;return A(r,(b,t)=>{let o=!1;const e=[];let p=0,d=f;const y=()=>{if(p)return;d();const c=u(n?e[0]:e,b,t);l?b(c):d=typeof c=="function"?c:f},_=i.map((c,g)=>w(c,h=>{e[g]=h,p&=~(1<<g),o&&y()},()=>{p|=1<<g}));return o=!0,y(),function(){m(_),d(),o=!1}})}export{B as d,x as w};
