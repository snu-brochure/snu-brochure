var Pt=Array.isArray,Ft=Array.from,qt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyDescriptors,Mt=Object.prototype,Lt=Array.prototype,Wn=Object.getPrototypeOf;const Xn=()=>{};function Yt(n){return n()}function Jn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,j=8,ln=16,T=32,W=64,nn=128,O=256,K=512,h=1024,R=2048,H=4096,C=8192,P=16384,Qn=32768,yn=65536,jt=1<<17,nt=1<<19,wn=1<<20,vn=Symbol("$state"),Ht=Symbol("legacy props"),Bt=Symbol("");function mn(n){return n===this.v}function tt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!tt(n,this.v)}function rt(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function et(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function st(n){throw new Error("https://svelte.dev/e/effect_orphan")}function lt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ut(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vt(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ut(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function at(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let B=!1;function $t(){B=!0}const Zt=1,zt=2,Wt=16,Xt=1,Jt=2,Qt=4,nr=8,tr=16,rr=1,er=2,ot="[",it="[!",ft="]",An={},sr=Symbol();function un(n,t){var r={f:0,v:n,reactions:null,equals:mn,version:0};return r}function lr(n){return gn(un(n))}function _t(n,t=!1){var e;const r=un(n);return t||(r.equals=Tn),B&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function ur(n,t=!1){return gn(_t(n,t))}function gn(n){return o!==null&&o.f&y&&(m===null?xt([n]):m.push(n)),n}function ar(n,t){return o!==null&&fn()&&o.f&(y|ln)&&(m===null||!m.includes(n))&&at(),ct(n,t)}function ct(n,t){return n.equals(t)||(n.v=t,n.version=Bn(),Rn(n,R),fn()&&a!==null&&a.f&h&&!(a.f&T)&&(v!==null&&v.includes(n)?(A(a,R),Q(a)):g===null?St([n]):g.push(n))),t}function Rn(n,t){var r=n.reactions;if(r!==null)for(var e=fn(),s=r.length,l=0;l<s;l++){var u=r[l],f=u.f;f&R||!e&&u===a||(A(u,t),f&(h|O)&&(f&y?Rn(u,H):Q(u)))}}function xn(n){console.warn("https://svelte.dev/e/hydration_mismatch")}let b=!1;function or(n){b=n}let w;function q(n){if(n===null)throw xn(),An;return w=n}function ir(){return q(k(w))}function fr(n){if(b){if(k(w)!==null)throw xn(),An;w=n}}function _r(n=1){if(b){for(var t=n,r=w;t--;)r=k(r);w=r}}function cr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ft){if(n===0)return t;n-=1}else(r===ot||r===it)&&(n+=1)}var e=k(t);t.remove(),t=e}}var pn,Sn,bn;function vr(){if(pn===void 0){pn=window;var n=Element.prototype,t=Node.prototype;Sn=cn(t,"firstChild").get,bn=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function tn(n=""){return document.createTextNode(n)}function rn(n){return Sn.call(n)}function k(n){return bn.call(n)}function pr(n,t){if(!b)return rn(n);var r=rn(w);if(r===null)r=w.appendChild(tn());else if(t&&r.nodeType!==3){var e=tn();return r==null||r.before(e),q(e),e}return q(r),r}function hr(n,t){if(!b){var r=rn(n);return r instanceof Comment&&r.data===""?k(r):r}return w}function dr(n,t=1,r=!1){let e=b?w:n;for(var s;t--;)s=e,e=k(e);if(!b)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var u=tn();return e===null?s==null||s.after(u):e.before(u),q(u),u}return q(e),e}function Er(n){n.textContent=""}function vt(n){var t=y|R;a===null?t|=O:a.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:mn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function yr(n){const t=vt(n);return t.equals=Tn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):D(e)}}}function pt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function On(n){var t,r=a;z(pt(n));try{Dn(n),t=Un(n)}finally{z(r)}return t}function kn(n){var t=On(n),r=(S||n.f&O)&&n.deps!==null?H:h;A(n,r),n.equals(t)||(n.v=t,n.version=Bn())}function an(n){Dn(n),Y(n,0),A(n,P),n.v=n.children=n.deps=n.ctx=n.reactions=null}function In(n){a===null&&o===null&&st(),o!==null&&o.f&O&&et(),on&&rt()}function ht(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var s=(n&W)!==0,l=a,u={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|R,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=I;try{hn(!0),J(u),u.f|=Qn}catch(_){throw D(u),_}finally{hn(f)}}else t!==null&&Q(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&wn)===0;if(!p&&!s&&e&&(l!==null&&ht(u,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(u)}return u}function wr(n){const t=F(j,null,!1);return A(t,h),t.teardown=n,t}function dt(n){In();var t=a!==null&&(a.f&T)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push({fn:n,effect:a,reaction:o})}else{var e=Nn(n);return e}}function mr(n){return In(),Et(n)}function Tr(n){const t=F(W,n,!0);return(r={})=>new Promise(e=>{r.outro?mt(t,()=>{D(t),e(void 0)}):(D(t),e(void 0))})}function Nn(n){return F(En,n,!1)}function Et(n){return F(j,n,!0)}function Ar(n){return yt(n)}function yt(n,t=0){return F(j|ln|t,n,!0)}function gr(n,t=!0){return F(j|T,n,!0,t)}function Cn(n){var t=n.teardown;if(t!==null){const r=on,e=o;dn(!0),Z(null);try{t.call(null)}finally{dn(r),Z(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function Fn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;D(r,t),r=e}}function wt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||D(t),t=r}}function D(n,t=!0){var r=!1;if((t||n.f&nt)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Fn(n,t&&!r),Pn(n),Y(n,0),A(n,P);var u=n.transitions;if(u!==null)for(const p of u)p.stop();Cn(n);var f=n.parent;f!==null&&f.first!==null&&qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function qn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function mt(n,t){var r=[];Mn(n,r,!0),Tt(r,()=>{D(n),t&&t()})}function Tt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Mn(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&yn)!==0||(e.f&T)!==0;Mn(e,t,l?r:!1),e=s}}}function Rr(n){Ln(n,!0)}function Ln(n,t){if(n.f&C){U(n)&&J(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&T)!==0;Ln(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let $=!1,en=[];function Yn(){$=!1;const n=en.slice();en=[],Jn(n)}function xr(n){$||($=!0,queueMicrotask(Yn)),en.push(n)}function At(){$&&Yn()}function gt(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const jn=0,Rt=1;let V=!1,G=jn,M=!1,L=null,I=!1,on=!1;function hn(n){I=n}function dn(n){on=n}let x=[],N=0;let o=null;function Z(n){o=n}let a=null;function z(n){a=n}let m=null;function xt(n){m=n}let v=null,E=0,g=null;function St(n){g=n}let Hn=1,S=!1,i=null;function Bn(){return++Hn}function fn(){return!B||i!==null&&i.l===null}function U(n){var u,f;var t=n.f;if(t&R)return!0;if(t&H){var r=n.deps,e=(t&O)!==0;if(r!==null){var s;if(t&K){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(n);n.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(U(l)&&kn(l),e&&a!==null&&!S&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}(!e||a!==null&&!S)&&A(n,h)}return!1}function bt(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw V=!1,n}function Dt(n){return(n.f&P)===0&&(n.parent===null||(n.parent.f&nn)===0)}function X(n,t,r,e){if(V){if(r===null&&(V=!1),Dt(t))throw n;return}r!==null&&(V=!0);{bt(n,t);return}}function Un(n){var _n;var t=v,r=E,e=g,s=o,l=S,u=m,f=i,p=n.f;v=null,E=0,g=null,o=p&(T|W)?null:n,S=!I&&(p&O)!==0,m=null,i=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!S)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,g=e,o=s,S=l,m=u,i=f}}function Ot(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(A(t,H),t.f&(O|K)||(t.f^=K),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Ot(n,r[e])}function J(n){var t=n.f;if(!(t&P)){A(n,h);var r=a,e=i;a=n;try{t&ln?wt(n):Fn(n),Pn(n),Cn(n);var s=Un(n);n.teardown=typeof s=="function"?s:null,n.version=Hn}catch(l){X(l,n,r,e||n.ctx)}finally{a=r}}}function Vn(){if(N>1e3){N=0;try{lt()}catch(n){if(L!==null)X(n,L,null);else throw n}}N++}function Gn(n){var t=n.length;if(t!==0){Vn();var r=I;I=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];Kn(s,l),kt(l)}}finally{I=r}}}function kt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(P|C)))try{U(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qn(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function It(){if(M=!1,N>1001)return;const n=x;x=[],Gn(n),M||(N=0,L=null)}function Q(n){G===jn&&(M||(M=!0,queueMicrotask(It))),L=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(W|T)){if(!(r&h))return;t.f^=h}}x.push(t)}function Kn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&T)!==0,u=l&&(s&h)!==0,f=r.next;if(!u&&!(s&C))if(s&j){if(l)r.f^=h;else try{U(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&En&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Kn(p,t)}function $n(n){var t=G,r=x;try{Vn();const s=[];G=Rt,x=s,M=!1,Gn(r);var e=n==null?void 0:n();return At(),(x.length>0||s.length>0)&&$n(),N=0,L=null,e}finally{G=t,x=r}}async function Sr(){await Promise.resolve(),$n()}function br(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&P){var e=On(n);return an(n),e}if(o!==null){m!==null&&m.includes(n)&&ut();var s=o.deps;v===null&&s!==null&&s[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&a!==null&&a.f&h&&!(a.f&T)&&g.includes(n)&&(A(a,R),Q(a))}else if(r&&n.deps===null)for(var l=n,u=l.parent,f=l;u!==null;)if(u.f&y){var p=u;f=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=n,U(l)&&kn(l)),n.v}function Zn(n){const t=o;try{return o=null,n()}finally{o=t}}const Nt=~(R|H|h);function A(n,t){n.f=n.f&Nt|t}function Dr(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},B&&!t&&(i.l={s:null,u:null,r1:[],r2:un(!1)})}function Or(n){const t=i;if(t!==null){const u=t.e;if(u!==null){var r=a,e=o;t.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];z(l.effect),Z(l.reaction),Nn(l.fn)}}finally{z(r),Z(e)}}i=t.p,t.m=!0}return{}}function kr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)sn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&sn(r)}}}function sn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{sn(n[e],t)}catch{}const r=Wn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}function Ir(n,t,r){if(n==null)return t(void 0),r&&r(void 0),Xn;const e=Zn(()=>n.subscribe(t,r));return e.unsubscribe?()=>e.unsubscribe():e}function Nr(n){i===null&&gt(),B&&i.l!==null?Ct(i).m.push(n):dt(()=>{const t=Zn(n);if(typeof t=="function")return t})}function Ct(n){var t=n.l;return t.u??(t.u={a:[],b:[],m:[]})}export{jt as $,Wn as A,zn as B,Nn as C,Et as D,yn as E,xr as F,wr as G,it as H,_t as I,Xn as J,Ir as K,Bt as L,ar as M,$t as N,tt as O,Nr as P,Mt as Q,Lt as R,vn as S,un as T,sr as U,Gt as V,cn as W,a as X,Kt as Y,Pt as Z,Vt as _,Or as a,Qt as a0,Tn as a1,T as a2,W as a3,z as a4,Xt as a5,B as a6,Jt as a7,nr as a8,Ht as a9,Mn as aA,Tt as aB,zt as aC,Zt as aD,Wt as aE,pn as aF,yr as aa,tr as ab,D as ac,ur as ad,_r as ae,$n as af,qt as ag,Sr as ah,lr as ai,Z as aj,o as ak,rn as al,tn as am,rr as an,er as ao,vr as ap,ot as aq,k as ar,An as as,ft as at,xn as au,Ut as av,Er as aw,Ft as ax,Tr as ay,C as az,yt as b,pr as c,ir as d,cr as e,hr as f,q as g,b as h,or as i,Rr as j,gr as k,mt as l,w as m,dt as n,i as o,Dr as p,Zn as q,fr as r,dr as s,Ar as t,mr as u,Jn as v,br as w,Yt as x,kr as y,vt as z};