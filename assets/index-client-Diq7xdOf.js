const pr="5.0.0-next.225",ht="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);const wt=1,mt=2,Vn=4,yt=8,Et=16,Un=1,gt=2,Z=Symbol();var Yn=Array.isArray,bt=Array.from,xt=Object.isFrozen,Wn=Object.defineProperty,k=Object.getOwnPropertyDescriptor,Tt=Object.getOwnPropertyDescriptors,Ot=Object.prototype,Pt=Array.prototype,zn=Object.getPrototypeOf;function en(n){return typeof n=="function"}const hr=()=>{};function St(n){return n()}function an(n){for(var t=0;t<n.length;t++)n[t]()}function wr(n,t,r=!1){return n===void 0?r?t():t:n}const N=2,Gn=4,V=8,Hn=16,O=32,En=64,I=128,un=256,x=512,D=1024,U=2048,B=4096,Y=8192,Rt=16384,gn=32768,Dt=65536,At=1<<18,w=Symbol("$state"),mr=Symbol("");function Zn(n){return n===this.v}function Nt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function bn(n){return!Nt(n,this.v)}function It(n){throw new Error("effect_in_teardown")}function Ct(){throw new Error("effect_in_unowned_derived")}function qt(n){throw new Error("effect_orphan")}function Lt(){throw new Error("effect_update_depth_exceeded")}function Ft(n){throw new Error("props_invalid_value")}function Mt(){throw new Error("state_unsafe_mutation")}function K(n){return{f:0,v:n,reactions:null,equals:Zn,version:0}}function jt(n){var r;const t=K(n);return t.equals=bn,a!==null&&a.l!==null&&((r=a.l).s??(r.s=[])).push(t),t}function T(n,t){return d!==null&&wn()&&d.f&N&&Mt(),n.equals(t)||(n.v=t,n.version=ft(),Jn(n,D),wn()&&v!==null&&v.f&x&&!(v.f&O)&&(y!==null&&y.includes(n)?(b(v,D),fn(v)):R===null?Wt([n]):R.push(n))),t}function Jn(n,t){var r=n.reactions;if(r!==null)for(var e=wn(),u=r.length,i=0;i<u;i++){var s=r[i],o=s.f;o&D||!e&&s===v||(b(s,t),o&(x|I)&&(o&N?Jn(s,U):fn(s)))}}function Qn(n){v===null&&d===null&&qt(),d!==null&&d.f&I&&Ct(),Tn&&It()}function Nn(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function W(n,t,r,e=!0){var u=(n&En)!==0,i=v,s={ctx:a,deps:null,nodes_start:null,nodes_end:null,f:n|D,first:null,fn:t,last:null,next:null,parent:u?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var o=j;try{Cn(!0),rn(s),s.f|=Rt}catch(f){throw on(s),f}finally{Cn(o)}}else t!==null&&fn(s);var l=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null;return!l&&!u&&e&&(i!==null&&Nn(s,i),d!==null&&d.f&N&&Nn(s,d)),s}function kt(n){const t=W(V,null,!1);return b(t,x),t.teardown=n,t}function cn(n){Qn();var t=v!==null&&(v.f&V)!==0&&a!==null&&!a.m;if(t){var r=a;(r.e??(r.e=[])).push(n)}else{var e=xn(n);return e}}function Bt(n){return Qn(),tn(n)}function Kt(n){const t=W(En,n,!0);return()=>{on(t)}}function xn(n){return W(Gn,n,!1)}function yr(n,t){var r=a,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=tn(()=>{n(),!e.ran&&(e.ran=!0,T(r.l.r2,!0),G(t))})}function Er(){var n=a;tn(()=>{if(g(n.l.r2)){for(var t of n.l.r1){var r=t.effect;z(r)&&rn(r),t.ran=!1}n.l.r2.v=!1}})}function tn(n){return W(V,n,!0)}function gr(n){return tn(n)}function Xn(n,t=0){return W(V|Hn|t,n,!0)}function sn(n,t=!0){return W(V|O,n,!0,t)}function nt(n){var t=n.teardown;if(t!==null){const r=Tn,e=d;qn(!0),Ln(null);try{t.call(null)}finally{qn(r),Ln(e)}}}function on(n,t=!0){var r=!1;if((t||n.f&At)&&n.nodes_start!==null){for(var e=n.nodes_start,u=n.nodes_end;e!==null;){var i=e===u?null:Rn(e);e.remove(),e=i}r=!0}On(n,t&&!r),nn(n,0),b(n,Y);var s=n.transitions;if(s!==null)for(const l of s)l.stop();nt(n);var o=n.parent;o!==null&&n.f&O&&o.first!==null&&tt(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function tt(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function _n(n,t){var r=[];rt(n,r,!0),$t(r,()=>{on(n),t&&t()})}function $t(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var u of n)u.out(e)}else t()}function rt(n,t,r){if(!(n.f&B)){if(n.f^=B,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var u=e.next,i=(e.f&gn)!==0||(e.f&O)!==0;rt(e,t,i?r:!1),e=u}}}function In(n){et(n,!0)}function et(n,t){if(n.f&B){n.f^=B,z(n)&&rn(n);for(var r=n.first;r!==null;){var e=r.next,u=(r.f&gn)!==0||(r.f&O)!==0;et(r,u?t:!1),r=e}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||t)&&i.in()}}let vn=!1,dn=[];function Vt(){vn=!1;const n=dn.slice();dn=[],an(n)}function ut(n){vn||(vn=!0,queueMicrotask(Vt)),dn.push(n)}function pn(n){let t=N|D;v===null&&(t|=I);const r={deps:null,deriveds:null,equals:Zn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(d!==null&&d.f&N){var e=d;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Ut(n){const t=pn(n);return t.equals=bn,t}function it(n){On(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)Yt(t[r])}}function st(n){var t;it(n),t=at(n);var r=(M||n.f&I)&&n.deps!==null?U:x;b(n,r),n.equals(t)||(n.v=t,n.version=ft())}function Yt(n){it(n),nn(n,0),b(n,Y),n.first=n.last=n.deps=n.reactions=n.fn=null}function lt(n){throw new Error("lifecycle_outside_component")}let ln=!1,j=!1,Tn=!1;function Cn(n){j=n}function qn(n){Tn=n}let hn=[],X=0,d=null;function Ln(n){d=n}let v=null,y=null,E=0,R=null;function Wt(n){R=n}let ot=0,M=!1,a=null;function ft(){return ot++}function wn(){return a!==null&&a.l===null}function z(n){var s,o;var t=n.f;if(t&D)return!0;if(t&U){var r=n.deps,e=(t&I)!==0;if(r!==null){var u;if(t&un){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=[])).push(n);n.f^=un}for(u=0;u<r.length;u++){var i=r[u];if(z(i)&&st(i),i.version>n.version)return!0;e&&!M&&!((o=i==null?void 0:i.reactions)!=null&&o.includes(n))&&(i.reactions??(i.reactions=[])).push(n)}}e||b(n,x)}return!1}function zt(n,t,r){throw n}function at(n){var f;var t=y,r=E,e=R,u=d,i=M;y=null,E=0,R=null,d=n.f&(O|En)?null:n,M=!j&&(n.f&I)!==0;try{var s=(0,n.fn)(),o=n.deps;if(y!==null){var l;if(nn(n,E),o!==null&&E>0)for(o.length=E+y.length,l=0;l<y.length;l++)o[E+l]=y[l];else n.deps=o=y;if(!M)for(l=E;l<o.length;l++)((f=o[l]).reactions??(f.reactions=[])).push(n)}else o!==null&&E<o.length&&(nn(n,E),o.length=E);return s}finally{y=t,E=r,R=e,d=u,M=i}}function Gt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var u=r.length-1;u===0?r=t.reactions=null:(r[e]=r[u],r.pop())}}r===null&&t.f&N&&(b(t,U),t.f&(I|un)||(t.f^=un),nn(t,0))}function nn(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Gt(n,r[e])}function On(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;on(r,t),r=e}}function rn(n){var t=n.f;if(!(t&Y)){b(n,x);var r=n.ctx,e=v,u=a;v=n,a=r;try{t&Hn||On(n),nt(n);var i=at(n);n.teardown=typeof i=="function"?i:null,n.version=ot}catch(s){zt(s)}finally{v=e,a=u}}}function Ht(){X>1e3&&(X=0,Lt()),X++}function Zt(n){var t=n.length;if(t!==0){Ht();var r=j;j=!0;try{for(var e=0;e<t;e++){var u=n[e];if(u.first===null&&!(u.f&O))Fn([u]);else{var i=[];ct(u,i),Fn(i)}}}finally{j=r}}}function Fn(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(Y|B))&&z(e)&&(rn(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?tt(e):e.fn=null))}}function Jt(){if(ln=!1,X>1001)return;const n=hn;hn=[],Zt(n),ln||(X=0)}function fn(n){ln||(ln=!0,queueMicrotask(Jt));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&O){if(!(r&x))return;b(t,U)}}hn.push(t)}function ct(n,t){var r=n.first,e=[];n:for(;r!==null;){var u=r.f,i=(u&(Y|B))===0,s=(u&O)!==0,o=(u&x)!==0,l=r.first;if(i&&(!s||!o)){if(s&&b(r,x),u&V){if(!s&&z(r)&&(rn(r),l=r.first),l!==null){r=l;continue}}else if(u&Gn)if(s||o){if(l!==null){r=l;continue}}else e.push(r)}var f=r.next;if(f===null){let h=r.parent;for(;h!==null;){if(n===h)break n;var _=h.next;if(_!==null){r=_;continue n}h=h.parent}}r=f}for(var c=0;c<e.length;c++)l=e[c],t.push(l),ct(l,t)}function g(n){var t=n.f;if(t&Y)return n.v;if(d!==null){var r=d.deps;y===null&&r!==null&&r[E]===n?E++:y===null?y=[n]:y.push(n),R!==null&&v!==null&&v.f&x&&!(v.f&O)&&R.includes(n)&&(b(v,D),fn(v))}if(t&N){var e=n;z(e)&&st(e)}return n.v}function G(n){const t=d;try{return d=null,n()}finally{d=t}}const Qt=~(D|U|x);function b(n,t){n.f=n.f&Qt|t}function br(n){return Pn().get(n)}function xr(n,t){return Pn().set(n,t),t}function Tr(n){return Pn().has(n)}function Pn(n){return a===null&&lt(),a.c??(a.c=new Map(Xt(a)||void 0))}function Xt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Mn(n,t=1){var r=+g(n);return T(n,r+t),r}function Or(n,t){var r={};for(var e in n)t.includes(e)||(r[e]=n[e]);return r}function nr(n,t=!1,r){a={p:a,c:null,e:null,m:!1,s:n,x:null,l:null},t||(a.l={s:null,u:null,r1:[],r2:K(!1)})}function tr(n){const t=a;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)xn(e[r])}a=t.p,t.m=!0}return{}}function rr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(w in n)mn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&w in r&&mn(r)}}}function mn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{mn(n[e],t)}catch{}const r=zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Tt(r);for(let u in e){const i=e[u].get;if(i)try{i.call(n)}catch{}}}}}function J(n,t=null,r){if(typeof n=="object"&&n!=null&&!xt(n)){if(w in n){const u=n[w];if(u.t===n||u.p===n)return u.p}const e=zn(n);if(e===Ot||e===Pt){const u=new Proxy(n,er);return Wn(n,w,{value:{s:new Map,v:K(0),a:Yn(n),p:u,t:n},writable:!0,enumerable:!1}),u}}return n}function jn(n,t=1){T(n,n.v+t)}const er={defineProperty(n,t,r){if(r.value){const e=n[w],u=e.s.get(t);u!==void 0&&T(u,J(r.value,e))}return Reflect.defineProperty(n,t,r)},deleteProperty(n,t){const r=n[w],e=r.s.get(t),u=r.a,i=delete n[t];if(u&&i){const s=r.s.get("length"),o=n.length-1;s!==void 0&&s.v!==o&&T(s,o)}return e!==void 0&&T(e,Z),i&&jn(r.v),i},get(n,t,r){var i;if(t===w)return Reflect.get(n,w);const e=n[w];let u=e.s.get(t);if(u===void 0&&(!(t in n)||(i=k(n,t))!=null&&i.writable)&&(u=K(J(n[t],e)),e.s.set(t,u)),u!==void 0){const s=g(u);return s===Z?void 0:s}return Reflect.get(n,t,r)},getOwnPropertyDescriptor(n,t){const r=Reflect.getOwnPropertyDescriptor(n,t);if(r&&"value"in r){const u=n[w].s.get(t);u&&(r.value=g(u))}return r},has(n,t){var i;if(t===w)return!0;const r=n[w],e=Reflect.has(n,t);let u=r.s.get(t);return(u!==void 0||v!==null&&(!e||(i=k(n,t))!=null&&i.writable))&&(u===void 0&&(u=K(e?J(n[t],r):Z),r.s.set(t,u)),g(u)===Z)?!1:e},set(n,t,r,e){const u=n[w];let i=u.s.get(t);i===void 0&&(G(()=>e[t]),i=u.s.get(t)),i!==void 0&&T(i,J(r,u));const s=u.a,o=!(t in n);if(s&&t==="length")for(let f=r;f<n.length;f+=1){const _=u.s.get(f+"");_!==void 0&&T(_,Z)}var l=Reflect.getOwnPropertyDescriptor(n,t);if(l!=null&&l.set?l.set.call(e,r):n[t]=r,o){if(s){const f=u.s.get("length"),_=n.length;f!==void 0&&f.v!==_&&T(f,_)}jn(u.v)}return!0},ownKeys(n){const t=n[w];return g(t.v),Reflect.ownKeys(n)}};var kn,_t,vt;function ur(){if(kn===void 0){kn=window;var n=Element.prototype,t=Node.prototype;_t=k(t,"firstChild").get,vt=k(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function Sn(n=""){return document.createTextNode(n)}function P(n){return _t.call(n)}function Rn(n){return vt.call(n)}function Pr(n){return P(n)}function Sr(n,t){{var r=P(n);return r instanceof Comment&&r.data===""?Rn(r):r}}function Rr(n,t=!1){return Rn(n)}const ir=new Set,Bn=new Set;function sr(n,t,r,e){function u(i){if(e.capture||Q.call(t,i),!i.cancelBubble)return r.call(this,i)}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ut(()=>{t.addEventListener(n,u,e)}):t.addEventListener(n,u,e),u}function Dr(n,t,r,e,u){var i={capture:e,passive:u},s=sr(n,t,r,i);(t===document.body||t===window||t===document)&&kt(()=>{t.removeEventListener(n,s,i)})}function Q(n){var q;var t=this,r=t.ownerDocument,e=n.type,u=((q=n.composedPath)==null?void 0:q.call(n))||[],i=u[0]||n.target,s=0,o=n.__root;if(o){var l=u.indexOf(o);if(l!==-1&&(t===document||t===window)){n.__root=t;return}var f=u.indexOf(t);if(f===-1)return;l<=f&&(s=l)}if(i=u[s]||n.target,i!==t){Wn(n,"currentTarget",{configurable:!0,get(){return i||r}});try{for(var _,c=[];i!==null;){var h=i.parentNode||i.host||null;try{var p=i["__"+e];if(p!==void 0&&!i.disabled)if(Yn(p)){var[A,...C]=p;A.apply(i,[n,...C])}else p.call(i,n)}catch(S){_?c.push(S):_=S}if(n.cancelBubble||h===t||h===null)break;i=h}if(_){for(let S of c)queueMicrotask(()=>{throw S});throw _}}finally{n.__root=t,i=t}}}function dt(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function $(n,t){var r=v;r.nodes_start===null&&(r.nodes_start=n,r.nodes_end=t)}function Ar(n,t){var r=(t&Un)!==0,e=(t&gt)!==0,u,i=!n.startsWith("<!>");return()=>{u===void 0&&(u=dt(i?n:"<!>"+n),r||(u=P(u)));var s=e?document.importNode(u,!0):u.cloneNode(!0);if(r){var o=P(s),l=s.lastChild;$(o,l)}else $(s,s);return s}}function Nr(n,t,r="svg"){var e=!n.startsWith("<!>"),u=(t&Un)!==0,i=`<${r}>${e?n:"<!>"+n}</${r}>`,s;return()=>{if(!s){var o=dt(i),l=P(o);if(u)for(s=document.createDocumentFragment();P(l);)s.appendChild(P(l));else s=P(l)}var f=s.cloneNode(!0);if(u){var _=P(f),c=f.lastChild;$(_,c)}else $(f,f);return f}}function Ir(n=""){{var t=Sn(n+"");return $(t,t),t}}function Cr(){var n=document.createDocumentFragment(),t=document.createComment(""),r=Sn();return n.append(t,r),$(t,r),n}function qr(n,t){n!==null&&n.before(t)}const lr=["wheel","touchstart","touchmove","touchend","touchcancel"];function or(n){return lr.includes(n)}function Lr(n,t){t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t==null?"":t+"")}function Fr(n,t){const r=t.anchor??t.target.appendChild(Sn());return fr(n,{...t,anchor:r})}const F=new Map;function fr(n,{target:t,anchor:r,props:e={},events:u,context:i,intro:s=!0}){ur();var o=new Set,l=c=>{for(var h=0;h<c.length;h++){var p=c[h];if(!o.has(p)){o.add(p);var A=or(p);t.addEventListener(p,Q,{passive:A});var C=F.get(p);C===void 0?(document.addEventListener(p,Q,{passive:A}),F.set(p,1)):F.set(p,C+1)}}};l(bt(ir)),Bn.add(l);var f=void 0,_=Kt(()=>(sn(()=>{if(i){nr({});var c=a;c.c=i}u&&(e.$$events=u),f=n(r,e)||{},i&&tr()}),()=>{for(var c of o){t.removeEventListener(c,Q);var h=F.get(c);--h===0?(document.removeEventListener(c,Q),F.delete(c)):F.set(c,h)}Bn.delete(l),yn.delete(f)}));return yn.set(f,_),f}let yn=new WeakMap;function Mr(n){const t=yn.get(n);t==null||t()}function jr(n,t,r,e=null,u=!1){var i=n,s=null,o=null,l=null,f=u?gn:0;Xn(()=>{l!==(l=!!t())&&(l?(s?In(s):s=sn(()=>r(i)),o&&_n(o,()=>{o=null})):(o?In(o):e&&(o=sn(()=>e(i))),s&&_n(s,()=>{s=null})))},f)}function kr(n,t,r){var e=n,u,i;Xn(()=>{u!==(u=t())&&(i&&(_n(i),i=null),u&&(i=sn(()=>r(e,u))))})}function Kn(n,t){var e;var r=n&&((e=n[w])==null?void 0:e.t);return n===t||r===t}function Br(n={},t,r,e){return xn(()=>{var u,i;return tn(()=>{u=i,i=[],G(()=>{n!==r(...i)&&(t(n,...i),u&&Kn(r(...u),n)&&t(null,...u))})}),()=>{ut(()=>{i&&Kn(r(...i),n)&&t(null,...i)})}}),n}function Kr(){const n=a,t=n.l.u;t&&(t.b.length&&Bt(()=>{$n(n),an(t.b)}),cn(()=>{const r=G(()=>t.m.map(St));return()=>{for(const e of r)typeof e=="function"&&e()}}),t.a.length&&cn(()=>{$n(n),an(t.a)}))}function $n(n){if(n.l.s)for(const t of n.l.s)g(t);rr(n.s)}const ar={get(n,t){if(!n.exclude.includes(t))return n.props[t]},set(n,t){return!1},getOwnPropertyDescriptor(n,t){if(!n.exclude.includes(t)&&t in n.props)return{enumerable:!0,configurable:!0,value:n.props[t]}},has(n,t){return n.exclude.includes(t)?!1:t in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(t=>!n.exclude.includes(t))}};function $r(n,t,r){return new Proxy({props:n,exclude:t},ar)}const cr={get(n,t){if(!n.exclude.includes(t))return g(n.version),t in n.special?n.special[t]():n.props[t]},set(n,t,r){return t in n.special||(n.special[t]=vr({get[t](){return n.props[t]}},t,Vn)),n.special[t](r),Mn(n.version),!0},getOwnPropertyDescriptor(n,t){if(!n.exclude.includes(t)&&t in n.props)return{enumerable:!0,configurable:!0,value:n.props[t]}},deleteProperty(n,t){return n.exclude.includes(t)?!1:(n.exclude.push(t),Mn(n.version),!0)},has(n,t){return n.exclude.includes(t)?!1:t in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(t=>!n.exclude.includes(t))}};function Vr(n,t){return new Proxy({props:n,exclude:t,special:{},version:K(0)},cr)}const _r={get(n,t){let r=n.props.length;for(;r--;){let e=n.props[r];if(en(e)&&(e=e()),typeof e=="object"&&e!==null&&t in e)return e[t]}},getOwnPropertyDescriptor(n,t){let r=n.props.length;for(;r--;){let e=n.props[r];if(en(e)&&(e=e()),typeof e=="object"&&e!==null&&t in e){const u=k(e,t);return u&&!u.configurable&&(u.configurable=!0),u}}},has(n,t){for(let r of n.props)if(en(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(n){const t=[];for(let r of n.props){en(r)&&(r=r());for(const e in r)t.includes(e)||t.push(e)}return t}};function Ur(...n){return new Proxy({props:n},_r)}function vr(n,t,r,e){var Dn;var u=(r&wt)!==0,i=(r&mt)!==0,s=(r&yt)!==0,o=(r&Et)!==0,l=n[t],f=(Dn=k(n,t))==null?void 0:Dn.set,_=e,c=!0,h=()=>(o&&c&&(c=!1,_=G(e)),_);l===void 0&&e!==void 0&&(f&&i&&Ft(),l=h(),f&&f(l));var p;if(i)p=()=>{var m=n[t];return m===void 0?h():(c=!0,m)};else{var A=(u?pn:Ut)(()=>n[t]);A.f|=Dt,p=()=>{var m=g(A);return m!==void 0&&(_=void 0),m===void 0?_:m}}if(!(r&Vn))return p;if(f){var C=n.$$legacy;return function(m,L){return arguments.length>0?((!i||!L||C)&&f(L?p():m),m):p()}}var q=!1,S=jt(l),H=pn(()=>{var m=p(),L=g(S);return q?(q=!1,L):S.v=m});return u||(H.equals=bn),function(m,L){var pt=g(H);if(arguments.length>0){const An=L?g(H):i&&s?J(m):m;return H.equals(An)||(q=!0,T(S,An),g(H)),m}return pt}}function Yr(n){a===null&&lt(),a.l!==null?dr(a).m.push(n):cn(()=>{const t=G(n);if(typeof t=="function")return t})}function dr(n){var t=n.l;return t.u??(t.u={a:[],b:[],m:[]})}export{kr as A,Dr as B,xr as C,J as D,gn as E,Tr as F,br as G,K as H,cn as I,Ur as J,$r as K,mr as L,pn as M,Fr as N,Mr as O,Ir as P,Lr as Q,hr as R,Or as S,wr as T,pr as V,sn as a,Xn as b,vr as c,on as d,Er as e,Kr as f,Cr as g,Sr as h,Yn as i,jr as j,Br as k,yr as l,Pr as m,g as n,qr as o,nr as p,tr as q,Nr as r,Rr as s,gr as t,jt as u,rr as v,T as w,Vr as x,Ar as y,Yr as z};
