import{a as m,t as O,d as j,s as q,c as V}from"../chunks/disclose-version.CNizDa-z.js";import{p as T,t as b,c as i,r as v,a as L,s as _,n as I,f as w,$ as F,o as K}from"../chunks/index-client.-5ps3okq.js";import{s as k,a as f,i as Y}from"../chunks/store.DruqF5eq.js";import{a as N,h as C,c as z,o as B,n as E,t as x,d as P,l as H,e as D,f as R,g as G,s as J}from"../chunks/index.DXcVvNa9.js";import{i as M}from"../chunks/legacy.CJ6ySOFp.js";import{a as Q}from"../chunks/actions.D4P5E7tX.js";import{L as W}from"../chunks/Logo.svg.CcSx1K6k.js";import{p as S}from"../chunks/client.BzGZRKRr.js";import{i as X}from"../chunks/invertHeader.Bt4DYMvN.js";const Z=!0,Na=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z},Symbol.toStringTag,{value:"Module"}));var aa=O('<a class="logo svelte-4umpb4"><span><!></span></a>');function U(c,s){T(s,!1);const t=k(),n=()=>f(C,"$href",t);M();var e=aa();b(()=>N(e,"href",n()("/")));var a=i(e),o=i(a);W(o),v(a),v(e),m(c,e),L()}var ea=O('<button type="button" aria-label="Toggle nav" class="svelte-15hhz6t"><span class="svelte-15hhz6t"><i class="svelte-15hhz6t"></i></span></button>');function ta(c){const s=k(),t=()=>f(E,"$navOpened",s);var n=ea();n.__click=function(...e){var a;(a=t()?z:B)==null||a.apply(this,e)},b(()=>x(n,"-opened",t())),m(c,n)}j(["click"]);var na=O('<button aria-label="Close nav" type="button" class="nav-closer svelte-hig358"></button>');function sa(c){const s=k(),t=()=>f(P,"$navOpening",s),n=()=>f(E,"$navOpened",s);var e=na();e.__click=function(...a){var o;(o=z)==null||o.apply(this,a)},b(()=>{x(e,"-opening",t()),x(e,"-opened",n())}),m(c,e)}j(["click"]);var oa=O('<li class="svelte-9d2wn7"><a class="svelte-9d2wn7"> </a></li>'),ra=O('<nav class="svelte-9d2wn7"><ul class="svelte-9d2wn7"><!> <!> <!></ul></nav>');function la(c,s){T(s,!1);const t=k(),n=()=>f(C,"$href",t),e=()=>f(H,"$lang",t);M();var a=ra(),o=i(a);{const r=(p,u=I,y=I)=>{var h=oa(),d=i(h);b(()=>N(d,"href",n()(u())));var A=i(d,!0);v(d),v(h),b(()=>{N(d,"aria-current",S.route.id==="/"+e()+u()?!0:void 0),q(A,y())}),m(p,h)};var g=i(o);r(g,()=>"/visionary-path.html",()=>"SNU VISIONARY PATH");var l=_(g,2);r(l,()=>"/initiatives.html",()=>"SNU INITIATIVES");var $=_(l,2);r($,()=>"/information.html",()=>"SNU INFORMATION"),v(o)}v(a),m(c,a),L()}var ia=O('<li class="svelte-ha2esx"><a data-sveltekit-noscroll="" class="svelte-ha2esx"> </a></li>'),va=O('<nav class="lang-nav svelte-ha2esx"><ul class="svelte-ha2esx"><!> <!></ul></nav>');function ca(c,s){T(s,!1);const t=k(),n=()=>f(R,"$base",t),e=()=>f(H,"$lang",t);function a(r){var u;const p=((u=S.route.id)==null?void 0:u.replace(/\/(en|ko)\//,"/"))??"/";return p==="/"||p==="/ko.html"?r===D?n()+"/":n()+"/"+r+".html":n()+"/"+r+p}M();var o=va(),g=i(o);{const r=(p,u=I,y=I)=>{var h=ia(),d=i(h);b(()=>N(d,"href",a(u())));var A=i(d,!0);v(d),v(h),b(()=>{N(d,"aria-current",e()===u()?!0:void 0),q(A,y())}),m(p,h)};var l=i(g);r(l,()=>"en",()=>"EN");var $=_(l,2);r($,()=>"ko",()=>"KO"),v(g)}v(o),m(c,o),L()}var pa=O('<header id="header" class="svelte-1iavkqb"><!> <!></header> <section class="nav-group svelte-1iavkqb"><section><!> <!></section> <!></section> <!>',1);function ua(c){const s=k(),t=()=>f(P,"$navOpening",s),n=()=>f(E,"$navOpened",s);var e=pa(),a=w(e),o=i(a);U(o,{});var g=_(o,2);ta(g),v(a),Q(a,h=>{var d;return(d=X)==null?void 0:d(h)});var l=_(a,2),$=i(l),r=i($);U(r,{});var p=_(r,2);la(p,{}),v($);var u=_($,2);ca(u,{}),v(l);var y=_(l,2);sa(y),b(()=>{x(l,"-opening",t()),x(l,"-opened",n())}),m(c,e)}var da=O('<!> <main class="svelte-1sug4bv"><!></main>',1);function ya(c,s){T(s,!0);const t=k(),n=()=>f(H,"$lang",t),e=()=>f(R,"$base",t);F(()=>{G(S.route.id??""),document.documentElement.setAttribute("lang",n()),z()}),K(()=>{document.documentElement.classList.remove("loading")});var a=V(),o=w(a);{var g=l=>{var $=da(),r=w($);ua(r);var p=_(r,2);b(()=>N(p,"data-id",(S.route.id??"").replace(/^\//,"").split("/")[1]));var u=i(p);J(u,()=>s.children??I),v(p),m(l,$)};Y(o,l=>{e()&&l(g)})}m(c,a),L()}export{ya as component,Na as universal};
