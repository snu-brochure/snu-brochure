import{Q as k,R as I,S as P,T as q,V as B,W as S,X as y,Y as F,Z as U,l as h,z as d,m as V,_ as N,q as O,$ as A,a0 as j,a1 as z,a2 as R,v as T,a3 as G,a4 as Q,a5 as X,a6 as Z,a7 as x,a8 as J,x as K,p as ee,a as re,d as te}from"./utils.UQKjAkRN.js";const ae=["touchstart","touchmove"];function ne(e){return ae.includes(e)}const $=new Set,L=new Set;function ue(e){for(var r=0;r<e.length;r++)$.add(e[r]);for(var t of L)t(e)}function E(e){var D;var r=this,t=r.ownerDocument,f=e.type,n=((D=e.composedPath)==null?void 0:D.call(e))||[],a=n[0]||e.target,o=0,l=e.__root;if(l){var u=n.indexOf(l);if(u!==-1&&(r===document||r===window)){e.__root=r;return}var p=n.indexOf(r);if(p===-1)return;u<=p&&(o=u)}if(a=n[o]||e.target,a!==r){k(e,"currentTarget",{configurable:!0,get(){return a||t}});var b=B,c=S;I(null),P(null);try{for(var s,i=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+f];if(m!==void 0&&!a.disabled)if(q(m)){var[W,...Y]=m;W.apply(a,[e,...Y])}else m.call(a,e)}catch(w){s?i.push(w):s=w}if(e.cancelBubble||v===r||v===null)break;a=v}if(s){for(let w of i)queueMicrotask(()=>{throw w});throw s}}finally{e.__root=r,delete e.currentTarget,I(b),P(c)}}}function C(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function _(e,r){var t=S;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function de(e,r){var t=(r&F)!==0,f=(r&U)!==0,n,a=!e.startsWith("<!>");return()=>{if(h)return _(d,null),d;n===void 0&&(n=C(a?e:"<!>"+e),t||(n=y(n)));var o=f?document.importNode(n,!0):n.cloneNode(!0);if(t){var l=y(o),u=o.lastChild;_(l,u)}else _(o,o);return o}}function fe(e,r,t="svg"){var f=!e.startsWith("<!>"),n=`<${t}>${f?e:"<!>"+e}</${t}>`,a;return()=>{if(h)return _(d,null),d;if(!a){var o=C(n),l=y(o);a=y(l)}var u=a.cloneNode(!0);return _(u,u),u}}function le(e=""){if(!h){var r=N(e+"");return _(r,r),r}var t=d;return t.nodeType!==3&&(t.before(t=N()),O(t)),_(t,t),t}function ce(){if(h)return _(d,null),d;var e=document.createDocumentFragment(),r=document.createComment(""),t=N();return e.append(r,t),_(r,t),e}function _e(e,r){if(h){S.nodes_end=d,V();return}e!==null&&e.before(r)}function ve(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function oe(e,r){return H(e,r)}function he(e,r){A(),r.intro=r.intro??!1;const t=r.target,f=h,n=d;try{for(var a=y(t);a&&(a.nodeType!==8||a.data!==j);)a=z(a);if(!a)throw R;T(!0),O(a),V();const o=H(e,{...r,anchor:a});if(d===null||d.nodeType!==8||d.data!==G)throw Q(),R;return T(!1),o}catch(o){if(o===R)return r.recover===!1&&X(),A(),Z(t),T(!1),oe(e,r);throw o}finally{T(f),O(n)}}const g=new Map;function H(e,{target:r,anchor:t,props:f={},events:n,context:a,intro:o=!0}){A();var l=new Set,u=c=>{for(var s=0;s<c.length;s++){var i=c[s];if(!l.has(i)){l.add(i);var v=ne(i);r.addEventListener(i,E,{passive:v});var m=g.get(i);m===void 0?(document.addEventListener(i,E,{passive:v}),g.set(i,1)):g.set(i,m+1)}}};u(x($)),L.add(u);var p=void 0,b=J(()=>{var c=t??r.appendChild(N());return K(()=>{if(a){ee({});var s=te;s.c=a}n&&(f.$$events=n),h&&_(c,null),p=e(c,f)||{},h&&(S.nodes_end=d),a&&re()}),()=>{var v;for(var s of l){r.removeEventListener(s,E);var i=g.get(s);--i===0?(document.removeEventListener(s,E),g.delete(s)):g.set(s,i)}L.delete(u),c!==t&&((v=c.parentNode)==null||v.removeChild(c))}});return M.set(p,b),p}let M=new WeakMap;function me(e,r){const t=M.get(e);return t?(M.delete(e),t(r)):Promise.resolve()}const se="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);export{_e as a,le as b,ce as c,ue as d,he as h,oe as m,fe as n,ve as s,de as t,me as u};
