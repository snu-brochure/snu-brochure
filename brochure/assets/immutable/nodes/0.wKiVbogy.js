import{a as h,t as b,d as j,s as C}from"../chunks/disclose-version.CsTQ21i_.js";import{p as x,t as _,a as A,c as o,r as l,v as I,s as m,f as M,D as V}from"../chunks/utils.B2AQxnli.js";import{h as P,c as w,o as D,n as z,a as R,l as E,d as F,b as K,s as Y,e as q}from"../chunks/index.BCoG1uBV.js";import{s as k}from"../chunks/attributes.D7c_3hwg.js";import{s as N,a as u}from"../chunks/store.611ht5y3.js";import"../chunks/legacy.9lUsYEDV.js";import{t as S,a as B,i as G}from"../chunks/invertHeader.BstUqTEm.js";import{i as H,p as T}from"../chunks/client.DK2DUYho.js";import{L as J}from"../chunks/Logo.svg.Bvy3uMim.js";const Q=!0,ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));var W=b('<a class="logo svelte-77roib"><span><!></span></a>');function U(v,n){x(n,!1);const r=N(),s=()=>u(P,"$href",r);H();var a=W();_(()=>k(a,"href",s()("/")));var e=o(a),t=o(e);J(t),l(e),l(a),h(v,a),A()}var X=b('<button type="button" aria-label="Toggle nav" class="svelte-7wu631"><span class="svelte-7wu631"><i class="svelte-7wu631"></i></span></button>');function Z(v){const n=N(),r=()=>u(z,"$navOpened",n);var s=X();s.__click=function(...a){var e;(e=r()?w:D)==null||e.apply(this,a)},_(()=>S(s,"-opened",r())),h(v,s)}j(["click"]);var aa=b('<button aria-label="Close nav" type="button" class="nav-closer svelte-1c7d1w6"></button>');function ea(v){const n=N(),r=()=>u(R,"$navOpening",n),s=()=>u(z,"$navOpened",n);var a=aa();a.__click=function(...e){var t;(t=w)==null||t.apply(this,e)},_(()=>{S(a,"-opening",r()),S(a,"-opened",s())}),h(v,a)}j(["click"]);var ta=b('<li class="svelte-1vtb2de"><a class="svelte-1vtb2de"> </a></li>'),sa=b('<nav class="svelte-1vtb2de"><ul class="svelte-1vtb2de"><!> <!> <!></ul></nav>');function na(v,n){x(n,!1);const r=N(),s=()=>u(P,"$href",r),a=()=>u(E,"$lang",r);H();var e=sa(),t=o(e);{const i=(g,f=I,y=I)=>{var $=ta(),c=o($);_(()=>k(c,"href",s()(f())));var L=o(c,!0);l(c),l($),_(()=>{k(c,"aria-current",T.route.id==="/"+a()+f()?!0:void 0),C(L,y())}),h(g,$)};var d=o(t);i(d,()=>"/visionary-path.html",()=>"SNU VISIONARY PATH");var p=m(d,2);i(p,()=>"/initiatives.html",()=>"SNU INITIATIVES");var O=m(p,2);i(O,()=>"/information.html",()=>"SNU INFORMATION"),l(t)}l(e),h(v,e),A()}var ra=b('<li class="svelte-64fgr4"><a data-sveltekit-noscroll="" class="svelte-64fgr4"> </a></li>'),oa=b('<nav class="lang-nav svelte-64fgr4"><ul class="svelte-64fgr4"><!> <!></ul></nav>');function la(v,n){x(n,!1);const r=N(),s=()=>u(K,"$base",r),a=()=>u(E,"$lang",r);function e(i){var f;const g=((f=T.route.id)==null?void 0:f.replace(/\/(en|ko)\//,"/"))??"/";return g==="/"||g==="/ko.html"?i===F?s()+"/":s()+"/"+i+".html":s()+"/"+i+g}H();var t=oa(),d=o(t);{const i=(g,f=I,y=I)=>{var $=ra(),c=o($);_(()=>k(c,"href",e(f())));var L=o(c,!0);l(c),l($),_(()=>{k(c,"aria-current",a()===f()?!0:void 0),C(L,y())}),h(g,$)};var p=o(d);i(p,()=>"en",()=>"EN");var O=m(p,2);i(O,()=>"ko",()=>"KO"),l(d)}l(t),h(v,t),A()}var va=b('<header id="header" class="svelte-iz4ssf"><!> <!></header> <section class="nav-group svelte-iz4ssf"><section><!> <!></section> <!></section> <!>',1);function ia(v){const n=N(),r=()=>u(R,"$navOpening",n),s=()=>u(z,"$navOpened",n);var a=va(),e=M(a),t=o(e);U(t,{});var d=m(t,2);Z(d),l(e),B(e,$=>{var c;return(c=G)==null?void 0:c($)});var p=m(e,2),O=o(p),i=o(O);U(i,{});var g=m(i,2);na(g,{}),l(O);var f=m(O,2);la(f,{}),l(p);var y=m(p,2);ea(y),_(()=>{S(p,"-opening",r()),S(p,"-opened",s())}),h(v,a)}var ca=b('<!> <main class="svelte-1gaxmga"><!></main>',1);function Oa(v,n){x(n,!0);const r=N(),s=()=>u(E,"$lang",r);V(()=>{q(T.route.id??""),document.documentElement.setAttribute("lang",s()),w()});var a=ca(),e=M(a);ia(e);var t=m(e,2);_(()=>k(t,"data-id",(T.route.id??"").replace(/^\//,"").split("/")[1]));var d=o(t);Y(d,()=>n.children??I),l(t),h(v,a),A()}export{Oa as component,ba as universal};
