import{a as h,t as b,d as j,s as C}from"../chunks/disclose-version.CsTQ21i_.js";import{p as T,t as _,a as w,c as r,r as l,v as I,s as m,f as M,D as V}from"../chunks/utils.B2AQxnli.js";import{h as P,c as L,o as D,n as z,a as R,l as E,d as F,b as K,s as Y,e as q}from"../chunks/index.BCoG1uBV.js";import{s as k}from"../chunks/attributes.D7c_3hwg.js";import{s as N,a as u}from"../chunks/store.611ht5y3.js";import"../chunks/legacy.9lUsYEDV.js";import{t as x,a as B,i as G}from"../chunks/invertHeader.BstUqTEm.js";import{i as H,p as S}from"../chunks/client.CN7mpKg9.js";import{L as J}from"../chunks/Logo.svg.Bvy3uMim.js";const Q=!0,ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));var W=b('<a class="logo svelte-4umpb4"><span><!></span></a>');function U(v,n){T(n,!1);const o=N(),s=()=>u(P,"$href",o);H();var a=W();_(()=>k(a,"href",s()("/")));var e=r(a),t=r(e);J(t),l(e),l(a),h(v,a),w()}var X=b('<button type="button" aria-label="Toggle nav" class="svelte-19528vf"><span class="svelte-19528vf"><i class="svelte-19528vf"></i></span></button>');function Z(v){const n=N(),o=()=>u(z,"$navOpened",n);var s=X();s.__click=function(...a){var e;(e=o()?L:D)==null||e.apply(this,a)},_(()=>x(s,"-opened",o())),h(v,s)}j(["click"]);var aa=b('<button aria-label="Close nav" type="button" class="nav-closer svelte-1c7d1w6"></button>');function ea(v){const n=N(),o=()=>u(R,"$navOpening",n),s=()=>u(z,"$navOpened",n);var a=aa();a.__click=function(...e){var t;(t=L)==null||t.apply(this,e)},_(()=>{x(a,"-opening",o()),x(a,"-opened",s())}),h(v,a)}j(["click"]);var ta=b('<li class="svelte-9d2wn7"><a class="svelte-9d2wn7"> </a></li>'),sa=b('<nav class="svelte-9d2wn7"><ul class="svelte-9d2wn7"><!> <!> <!></ul></nav>');function na(v,n){T(n,!1);const o=N(),s=()=>u(P,"$href",o),a=()=>u(E,"$lang",o);H();var e=sa(),t=r(e);{const i=($,d=I,y=I)=>{var g=ta(),c=r(g);_(()=>k(c,"href",s()(d())));var A=r(c,!0);l(c),l(g),_(()=>{k(c,"aria-current",S.route.id==="/"+a()+d()?!0:void 0),C(A,y())}),h($,g)};var f=r(t);i(f,()=>"/visionary-path.html",()=>"SNU VISIONARY PATH");var p=m(f,2);i(p,()=>"/initiatives.html",()=>"SNU INITIATIVES");var O=m(p,2);i(O,()=>"/information.html",()=>"SNU INFORMATION"),l(t)}l(e),h(v,e),w()}var oa=b('<li class="svelte-ha2esx"><a data-sveltekit-noscroll="" class="svelte-ha2esx"> </a></li>'),ra=b('<nav class="lang-nav svelte-ha2esx"><ul class="svelte-ha2esx"><!> <!></ul></nav>');function la(v,n){T(n,!1);const o=N(),s=()=>u(K,"$base",o),a=()=>u(E,"$lang",o);function e(i){var d;const $=((d=S.route.id)==null?void 0:d.replace(/\/(en|ko)\//,"/"))??"/";return $==="/"||$==="/ko.html"?i===F?s()+"/":s()+"/"+i+".html":s()+"/"+i+$}H();var t=ra(),f=r(t);{const i=($,d=I,y=I)=>{var g=oa(),c=r(g);_(()=>k(c,"href",e(d())));var A=r(c,!0);l(c),l(g),_(()=>{k(c,"aria-current",a()===d()?!0:void 0),C(A,y())}),h($,g)};var p=r(f);i(p,()=>"en",()=>"EN");var O=m(p,2);i(O,()=>"ko",()=>"KO"),l(f)}l(t),h(v,t),w()}var va=b('<header id="header" class="svelte-iz4ssf"><!> <!></header> <section class="nav-group svelte-iz4ssf"><section><!> <!></section> <!></section> <!>',1);function ia(v){const n=N(),o=()=>u(R,"$navOpening",n),s=()=>u(z,"$navOpened",n);var a=va(),e=M(a),t=r(e);U(t,{});var f=m(t,2);Z(f),l(e),B(e,g=>{var c;return(c=G)==null?void 0:c(g)});var p=m(e,2),O=r(p),i=r(O);U(i,{});var $=m(i,2);na($,{}),l(O);var d=m(O,2);la(d,{}),l(p);var y=m(p,2);ea(y),_(()=>{x(p,"-opening",o()),x(p,"-opened",s())}),h(v,a)}var ca=b('<!> <main class="svelte-1p8t9d7"><!></main>',1);function Oa(v,n){T(n,!0);const o=N(),s=()=>u(E,"$lang",o);V(()=>{q(S.route.id??""),document.documentElement.setAttribute("lang",s()),L()});var a=ca(),e=M(a);ia(e);var t=m(e,2);_(()=>k(t,"data-id",(S.route.id??"").replace(/^\//,"").split("/")[1]));var f=r(t);Y(f,()=>n.children??I),l(t),h(v,a),w()}export{Oa as component,ba as universal};
