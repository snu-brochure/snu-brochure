var Dn=Array.isArray,kn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,In=Object.prototype,Pn=Array.prototype,$t=Object.getPrototypeOf;const bn=()=>{};function Cn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,dt=4,j=8,st=16,T=32,W=64,tt=128,k=256,G=512,h=1024,S=2048,U=4096,b=8192,C=16384,Wt=32768,yt=65536,Fn=1<<17,zt=1<<19,Et=1<<20,ct=Symbol("$state"),qn=Symbol("legacy props"),Ln=Symbol("");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Mn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function Bn(){z=!0}const Hn=1,Vn=2,Gn=4,Kn=8,$n=16,Zn=1,Wn=2,ln="[",sn="[!",un="]",Tt={},zn=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function Jn(t){return on(ut(t))}function Qn(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function on(t){return a!==null&&a.f&E&&(m===null?mn([t]):m.push(t)),t}function Xn(t,n){return a!==null&&it()&&a.f&(E|st)&&(m===null||!m.includes(t))&&en(),an(t,n)}function an(t,n){return t.equals(n)||(t.v=n,t.version=jt(),gt(t,S),it()&&o!==null&&o.f&h&&!(o.f&T)&&(v!==null&&v.includes(t)?(g(o,S),X(o)):A===null?Tn([t]):A.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),l=r.length,s=0;s<l;s++){var u=r[s],i=u.f;i&S||!e&&u===o||(g(u,n),i&(h|k)&&(i&E?gt(u,U):X(u)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function tr(t){O=t}let w;function q(t){if(t===null)throw At(),Tt;return w=t}function nr(){return q(N(w))}function rr(t){if(O){if(N(w)!==null)throw At(),Tt;w=t}}function er(t=1){if(O){for(var n=t,r=w;n--;)r=N(r);w=r}}function lr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var vt,St,xt;function sr(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;St=_t(n,"firstChild").get,xt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function N(t){return xt.call(t)}function ur(t,n){if(!O)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function or(t,n){if(!O){var r=rt(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function ar(t,n=1,r=!1){let e=O?w:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=nt();return e===null?l==null||l.after(u):e.before(u),q(u),u}return q(e),e}function ir(t){t.textContent=""}function fn(t){var n=E|S;o===null?n|=k:o.f|=Et;var r=a!==null&&a.f&E?a:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function fr(t){const n=fn(t);return n.equals=mt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&E?ot(e):D(e)}}}function _n(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Ot(t){var n,r=o;Z(_n(t));try{Rt(t),n=Ut(t)}finally{Z(r)}return n}function Dt(t){var n=Ot(t),r=(R||t.f&k)&&t.deps!==null?U:h;g(t,r),t.equals(n)||(t.v=n,t.version=jt())}function ot(t){Rt(t),M(t,0),g(t,C),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){o===null&&a===null&&tn(),a!==null&&a.f&k&&Xt(),at&&Qt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=(t&W)!==0,s=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{pt(!0),Q(u),u.f|=Wt}catch(_){throw D(u),_}finally{pt(i)}}else n!==null&&X(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!p&&!l&&e&&(s!==null&&cn(u,s),a!==null&&a.f&E)){var d=a;(d.children??(d.children=[])).push(u)}return u}function _r(t){const n=F(j,null,!1);return g(n,h),n.teardown=t,n}function cr(t){kt();var n=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:a})}else{var e=Nt(t);return e}}function vr(t){return kt(),vn(t)}function pr(t){const n=F(W,t,!0);return(r={})=>new Promise(e=>{r.outro?dn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Nt(t){return F(dt,t,!1)}function vn(t){return F(j,t,!0)}function hr(t){return pn(t)}function pn(t,n=0){return F(j|st|n,t,!0)}function dr(t,n=!0){return F(j|T,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=at,e=a;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}bt(t,n&&!r),Pt(t),M(t,0),g(t,C);var u=t.transitions;if(u!==null)for(const p of u)p.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dn(t,n){var r=[];Ft(t,r,!0),yn(r,()=>{D(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ft(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&T)!==0;Ft(e,n,s?r:!1),e=l}}}function yr(t){qt(t,!0)}function qt(t,n){if(t.f&b){B(t)&&Q(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&T)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,et=[];function Lt(){K=!1;const t=et.slice();et=[],Zt(t)}function Er(t){K||(K=!0,queueMicrotask(Lt)),et.push(t)}function En(){K&&Lt()}const Yt=0,wn=1;let H=!1,V=Yt,L=!1,Y=null,I=!1,at=!1;function pt(t){I=t}function ht(t){at=t}let x=[],P=0;let a=null;function $(t){a=t}let o=null;function Z(t){o=t}let m=null;function mn(t){m=t}let v=null,y=0,A=null;function Tn(t){A=t}let Mt=1,R=!1,f=null;function jt(){return++Mt}function it(){return!z||f!==null&&f.l===null}function B(t){var u,i;var n=t.f;if(n&S)return!0;if(n&U){var r=t.deps,e=(n&k)!==0;if(r!==null){var l;if(n&G){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(t);t.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(B(s)&&Dt(s),e&&o!==null&&!R&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!e||o!==null&&!R)&&g(t,h)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw H=!1,t}function An(t){return(t.f&C)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,n,r,e){if(H){if(r===null&&(H=!1),An(n))throw t;return}r!==null&&(H=!0);{gn(t,n);return}}function Ut(t){var ft;var n=v,r=y,e=A,l=a,s=R,u=m,i=f,p=t.f;v=null,y=0,A=null,a=p&(T|W)?null:t,R=!I&&(p&k)!==0,m=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(M(t,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else t.deps=_=v;if(!R)for(c=y;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&y<_.length&&(M(t,y),_.length=y);return d}finally{v=n,y=r,A=e,a=l,R=s,m=u,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&E&&(v===null||!v.includes(n))&&(g(n,U),n.f&(k|G)||(n.f^=G),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function Q(t){var n=t.f;if(!(n&C)){g(t,h);var r=o,e=f;o=t;try{n&st?hn(t):bt(t),Pt(t),It(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.version=Mt}catch(s){J(s,t,r,e||t.ctx)}finally{o=r}}}function Bt(){if(P>1e3){P=0;try{nn()}catch(t){if(Y!==null)J(t,Y,null);else throw t}}P++}function Ht(t){var n=t.length;if(n!==0){Bt();var r=I;I=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Vt(l,s),xn(s)}}finally{I=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(C|b)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Rn(){if(L=!1,P>1001)return;const t=x;x=[],Ht(t),L||(P=0,Y=null)}function X(t){V===Yt&&(L||(L=!0,queueMicrotask(Rn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|T)){if(!(r&h))return;n.f^=h}}x.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&T)!==0,u=s&&(l&h)!==0,i=r.next;if(!u&&!(l&b))if(l&j){if(s)r.f^=h;else try{B(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Vt(p,n)}function Gt(t){var n=V,r=x;try{Bt();const l=[];V=wn,x=l,L=!1,Ht(r);var e=t==null?void 0:t();return En(),(x.length>0||l.length>0)&&Gt(),P=0,Y=null,e}finally{V=n,x=r}}async function wr(){await Promise.resolve(),Gt()}function mr(t){var _;var n=t.f,r=(n&E)!==0;if(r&&n&C){var e=Ot(t);return ot(t),e}if(a!==null){m!==null&&m.includes(t)&&rn();var l=a.deps;v===null&&l!==null&&l[y]===t?y++:v===null?v=[t]:v.push(t),A!==null&&o!==null&&o.f&h&&!(o.f&T)&&A.includes(t)&&(g(o,S),X(o))}else if(r&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=t,B(s)&&Dt(s)),t.v}function Tr(t){const n=a;try{return a=null,t()}finally{a=n}}const On=~(S|U|h);function g(t,n){t.f=t.f&On|n}function gr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function Ar(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=o,e=a;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];Z(s.effect),$(s.reaction),Nt(s.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{jn as $,a as A,o as B,sr as C,rt as D,N as E,Tt as F,tr as G,ln as H,q as I,nr as J,w as K,un as L,At as M,Yn as N,ir as O,kn as P,pr as Q,nt as R,dr as S,O as T,z as U,Zn as V,Wn as W,ct as X,In as Y,Pn as Z,ut as _,hr as a,_t as a0,zn as a1,Un as a2,$t as a3,pn as a4,yt as a5,sn as a6,lr as a7,yr as a8,dn as a9,Nt as aa,vn as ab,Er as ac,Mn as ad,Fn as ae,Gn as af,mt as ag,T as ah,W as ai,Hn as aj,Vn as ak,Kn as al,qn as am,fr as an,$n as ao,Gt as ap,wr as aq,Jn as ar,D as as,Ln as at,Kt as au,Jt as av,Ar as b,ur as c,ar as d,er as e,or as f,mr as g,Bn as h,cr as i,f as j,Tr as k,Zt as l,Qn as m,bn as n,Cn as o,gr as p,Sr as q,rr as r,Xn as s,_r as t,vr as u,fn as v,Nn as w,$ as x,Z as y,Dn as z};
