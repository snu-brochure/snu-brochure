import{ak as we,T as ke,h as x,Z as U,V as pe,B as Ce,al as le,X as Ie,Y as ee,_ as Y,a2 as L,am as R,$ as oe,a0 as ce,a1 as Te,q as xe,y as ae,an as Q,ao as te,ap as Z,aq as Ae,ar as Ne,as as Se,aa as De,at as fe,au as Me,av as Le,ad as qe,aw as He,Q as Re,l as ne,ax as Be,ay as Oe,p as ue,a5 as ze,x as C,v as F,az as ie,f as Ve,a as ve,aj as re,c as S,n as de,r as D,s as _e,t as me}from"./index-client.CCYLx5zA.js";import{d as he,c as Ue,e as X,a as H,t as O}from"./disclose-version.D_3l79Q0.js";import{i as P}from"./store.Ck7WYwAI.js";import{a as be}from"./index.CPEBVpSn.js";import{a as Ye}from"./invertHeader.BEP-ciiW.js";import{s as Fe,t as ge}from"./class.D6cH1zlD.js";import{b as Xe}from"./this.DEynawsZ.js";import{p as q}from"./props.BQp9cmk_.js";function la(i,e){return e}function Ke(i,e,a,c){for(var v=[],h=e.length,u=0;u<h;u++)Ae(e[u].e,v,!0);var m=h>0&&v.length===0&&a!==null;if(m){var d=a.parentNode;Ne(d),d.append(a),c.clear(),T(i,e[0].prev,e[h-1].next)}Se(v,()=>{for(var y=0;y<h;y++){var f=e[y];m||(c.delete(f.k),T(i,f.prev,f.next)),De(f.e,!m)}})}function oa(i,e,a,c,v,h=null){var u=i,m={flags:e,items:new Map,first:null},d=(e&fe)!==0;if(d){var y=i;u=x?U(Me(y)):y.appendChild(we())}x&&pe();var f=null,g=!1;ke(()=>{var w=a(),s=Ce(w)?w:w==null?[]:le(w),o=s.length;if(g&&o===0)return;g=o===0;let _=!1;if(x){var I=u.data===Ie;I!==(o===0)&&(u=ee(),U(u),Y(!1),_=!0)}if(x){for(var E=null,t,r=0;r<o;r++){if(L.nodeType===8&&L.data===Le){u=L,_=!0,Y(!1);break}var b=s[r],n=c(b,r);t=Ee(L,m,E,null,b,n,r,v,e),m.items.set(n,t),E=t}o>0&&U(ee())}if(!x){var l=qe;Pe(s,m,u,v,e,(l.f&R)!==0,c)}h!==null&&(o===0?f?oe(f):f=ce(()=>h(u)):f!==null&&Te(f,()=>{f=null})),_&&Y(!0),a()}),x&&(u=L)}function Pe(i,e,a,c,v,h,u,m){var G,J,W,j;var d=(v&He)!==0,y=(v&(Q|Z))!==0,f=i.length,g=e.items,w=e.first,s=w,o,_=null,I,E=[],t=[],r,b,n,l;if(d)for(l=0;l<f;l+=1)r=i[l],b=u(r,l),n=g.get(b),n!==void 0&&((G=n.a)==null||G.measure(),(I??(I=new Set)).add(n));for(l=0;l<f;l+=1){if(r=i[l],b=u(r,l),n=g.get(b),n===void 0){var z=s?s.e.nodes_start:a;_=Ee(z,e,_,_===null?e.first:_.next,r,b,l,c,v),g.set(b,_),E=[],t=[],s=_.next;continue}if(y&&Qe(n,r,l,v),n.e.f&R&&(oe(n.e),d&&((J=n.a)==null||J.unfix(),(I??(I=new Set)).delete(n))),n!==s){if(o!==void 0&&o.has(n)){if(E.length<t.length){var A=t[0],k;_=A.prev;var p=E[0],N=E[E.length-1];for(k=0;k<E.length;k+=1)se(E[k],A,a);for(k=0;k<t.length;k+=1)o.delete(t[k]);T(e,p.prev,N.next),T(e,_,p),T(e,N,A),s=A,_=N,l-=1,E=[],t=[]}else o.delete(n),se(n,s,a),T(e,n.prev,n.next),T(e,n,_===null?e.first:_.next),T(e,_,n),_=n;continue}for(E=[],t=[];s!==null&&s.k!==b;)(h||!(s.e.f&R))&&(o??(o=new Set)).add(s),t.push(s),s=s.next;if(s===null)continue;n=s}E.push(n),_=n,s=n.next}if(s!==null||o!==void 0){for(var M=o===void 0?[]:le(o);s!==null;)(h||!(s.e.f&R))&&M.push(s),s=s.next;var V=M.length;if(V>0){var ye=v&fe&&f===0?a:null;if(d){for(l=0;l<V;l+=1)(W=M[l].a)==null||W.measure();for(l=0;l<V;l+=1)(j=M[l].a)==null||j.fix()}Ke(e,M,ye,g)}}d&&xe(()=>{var $;if(I!==void 0)for(n of I)($=n.a)==null||$.apply()}),ae.first=e.first&&e.first.e,ae.last=_&&_.e}function Qe(i,e,a,c){c&Q&&te(i.v,e),c&Z?te(i.i,a):i.i=a}function Ee(i,e,a,c,v,h,u,m,d,y){var f=(d&Q)!==0,g=(d&Be)===0,w=f?g?Re(v):ne(v):v,s=d&Z?ne(u):u,o={i:s,v:w,k:h,a:null,e:null,prev:a,next:c};try{return o.e=ce(()=>m(i,w,s),x),o.e.prev=a&&a.e,o.e.next=c&&c.e,a===null?e.first=o:(a.next=o,a.e.next=o.e),c!==null&&(c.prev=o,c.e.prev=o.e),o}finally{}}function se(i,e,a){for(var c=i.next?i.next.e.nodes_start:a,v=e?e.e.nodes_start:a,h=i.e.nodes_start;h!==c;){var u=Oe(h);v.before(h),h=u}}function T(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function K(i){function e(a){i.contains(a.target)||i.dispatchEvent(new CustomEvent("clickoutside"))}return document.addEventListener("mouseup",e,{passive:!0}),{destroy(){document.removeEventListener("mouseup",e)}}}var Ze=O('<button type="button" aria-label="Close" class="svelte-hc7iod"></button>'),Ge=O('<div><div class="outer svelte-hc7iod"><div class="inner svelte-hc7iod"><div aria-modal="true" class="svelte-hc7iod"><!></div></div></div> <!></div>');function ca(i,e){ue(e,!0);let a=q(e,"showModal",15),c=q(e,"closeButton",3,!1),v=q(e,"className",3,""),h=q(e,"disabled",11,!1);const u=255;let m=re(void 0),d=re(!1);function y(){var r,b,n,l;if(!a())return;const t=(r=C(m))==null?void 0:r.querySelector(".ck-body-wrapper");t&&((b=document.querySelector("body"))==null||b.append(t)),(n=C(m))==null||n.remove(),a(!1),(l=e.oncloseend)==null||l.call(e)}const f=()=>new Promise(t=>{var r;h()||((r=e.onclosestart)==null||r.call(e),F(d,!1),setTimeout(()=>{y(),t()},u*2))});async function g(){const t=document.querySelectorAll(".dialog-wrap.-opened");t.length>0&&t[t.length-1]===C(m)&&await(f==null?void 0:f())}async function w(t){t.target.querySelector(".ck-focused")||await g()}async function s(t){if(!C(d))return;const r=t.target;!r.closest(".dialog-root")&&(r.tagName==="DIV"&&r.classList.contains("objet-root")||r.tagName==="UL"&&r.classList.contains("sortable-root"))&&await g()}async function o(t){C(d)&&t.key==="Escape"&&(t.preventDefault(),await g())}ze(()=>{var t;C(m)&&a()&&((document.getElementById("app")??document.body).append(C(m)),setTimeout(()=>{F(d,!0)},10),(t=e.onopen)==null||t.call(e,{close:f}))});var _=Ue();X("keyup",ie,o),X("click",ie,s);var I=Ve(_);{var E=t=>{var r=Ge(),b=S(r),n=S(b),l=S(n),z=S(l);be(z,()=>e.children??de,()=>({close:f})),D(l),Ye(l,p=>K==null?void 0:K(p)),D(n),D(b);var A=_e(b,2);{var k=p=>{var N=Ze();N.__click=f,H(p,N)};P(A,p=>{c()&&p(k)})}D(r),Xe(r,p=>F(m,p),()=>C(m)),me(()=>{Fe(r,`dialog-wrap ${v()??""} svelte-hc7iod`),ge(r,"-opened",C(d))}),X("clickoutside",l,w),H(t,r)};P(I,t=>{a()&&t(E)})}H(i,_),ve()}he(["click"]);var Je=O('<div class="close svelte-1tryzbi"><button type="button" class="svelte-1tryzbi">Close</button></div>'),We=O('<div class="dialog-root svelte-1tryzbi"><!> <!></div>');function fa(i,e){ue(e,!0);let a=q(e,"inverted",3,!1);var c=We(),v=S(c);{var h=m=>{var d=Je(),y=S(d);y.__click=function(...f){var g;(g=e.close)==null||g.apply(this,f)},D(d),H(m,d)};P(v,m=>{e.close&&m(h)})}var u=_e(v,2);be(u,()=>e.children??de),D(c),me(()=>ge(c,"-inverted",a())),H(i,c),ve()}he(["click"]);let B;function je(){B||(B=new IntersectionObserver(i=>{i.forEach(e=>{const a=e.isIntersecting?"enterviewport":"exitviewport";e.target.dispatchEvent(new CustomEvent(a))})}))}function ua(i){return je(),B.observe(i),{destroy(){B.unobserve(i)}}}export{fa as D,ca as M,oa as e,la as i,ua as v};
