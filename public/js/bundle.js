var app=function(){"use strict";function t(){}function e(t,e){for(var n in e)t[n]=e[n];return t}function n(t,e){for(var n in e)t[n]=1;return t}function r(t,e){return 0===e&&t(),()=>{--e||t()}}function i(t){t()}function o(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n)}function a(t){t.parentNode.removeChild(t)}function c(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function h(){return document.createComment("")}function l(t,e,n,r){t.addEventListener(e,n,r)}function _(t,e,n,r){t.removeEventListener(e,n,r)}function g(t,e){t.data=""+e}function f(t,e,n){t.style.setProperty(e,n)}function m(t,e,n){t.classList[n?"add":"remove"](e)}function p(){return Object.create(null)}function v(t){t._lock=!0,w(t._beforecreate),w(t._oncreate),w(t._aftercreate),t._lock=!1}function y(t,e){t._handlers=p(),t._slots=p(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function w(t){for(;t&&t.length;)t.shift()()}var b={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var i=n[r];if(!i.__calling)try{i.__calling=!0,i.call(this,e)}finally{i.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(e({},t)),this.root._lock||v(this.root)},_recompute:t,_set:function(t){var n=this._state,r={},i=!1;for(var o in t=e(this._staged,t),this._staged={},t)this._differs(t[o],n[o])&&(r[o]=i=!0);i&&(this._state=e(e({},n),t),this._recompute(r,this._state),this._bind&&this._bind(r,this._state),this._fragment&&(this.fire("state",{changed:r,current:this._state,previous:n}),this._fragment.p(r,this._state),this.fire("update",{changed:r,current:this._state,previous:n})))},_stage:function(t){e(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}};function k(t){y(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=function(t,e){var n,r,c,h,f,m,p,v,y,w;function b(n){t.fire("select",{repository_name:e.repository_name})}return{c(){n=d("tr"),r=d("td"),c=u(e.repository_name),h=u("\n  "),f=d("td"),m=d("code"),p=u(e.registry_origin),v=u("/"),y=u(e.repository_name),l(r,"click",b)},m(t,e){s(t,n,e),o(n,r),o(r,c),o(n,h),o(n,f),o(f,m),o(m,p),o(m,v),o(m,y),w=!0},p(t,n){e=n,t.repository_name&&g(c,e.repository_name),t.registry_origin&&g(p,e.registry_origin),t.repository_name&&g(y,e.repository_name)},i(t,e){w||this.m(t,e)},o:i,d(t){t&&a(n),_(r,"click",b)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}e(k.prototype,b);var N={sort(){const{items:t,descending:e}=this.get();e?t.sort().reverse():t.sort(),this.set({items:t,descending:!e})}};function D(t,e,n){const r=Object.create(t);return r.repository_name=e[n],r}function x(e,n){var r,o;return{c(){(r=d("tr")).innerHTML='<td colspan="2">loading images...</td>'},m(t,e){s(t,r,e),o=!0},p:t,i(t,e){o||this.m(t,e)},o:i,d(t){t&&a(r)}}}function L(t,e){for(var n,i,o=e.items,d=[],u=0;u<o.length;u+=1)d[u]=j(t,D(e,o,u));function l(t,e,n){d[t]&&d[t].o(()=>{e&&(d[t].d(e),d[t]=null),n&&n()})}return{c(){for(var t=0;t<d.length;t+=1)d[t].c();n=h()},m(t,e){for(var r=0;r<d.length;r+=1)d[r].i(t,e);s(t,n,e),i=!0},p(e,r){if(e.registry_origin||e.items){o=r.items;for(var i=0;i<o.length;i+=1){const s=D(r,o,i);d[i]?d[i].p(e,s):(d[i]=j(t,s),d[i].c()),d[i].i(n.parentNode,n)}for(;i<d.length;i+=1)l(i,1)}},i(t,e){i||this.m(t,e)},o(t){if(!i)return;const e=r(t,(d=d.filter(Boolean)).length);for(let t=0;t<d.length;t+=1)l(t,0,e);i=!1},d(t){c(d,t),t&&a(n)}}}function j(t,e){var n,r={registry_origin:e.registry_origin,repository_name:e.repository_name},i=new k({root:t.root,store:t.store,data:r});return i.on("select",function(n){t.fire("select",{repository_name:e.repository_name})}),{c(){i._fragment.c()},m(t,e){i._mount(t,e),n=!0},p(t,n){e=n;var r={};t.registry_origin&&(r.registry_origin=e.registry_origin),t.items&&(r.repository_name=e.repository_name),i._set(r)},i(t,e){n||this.m(t,e)},o(t){n&&(i&&i._fragment.o(t),n=!1)},d(t){i.destroy(t)}}}function T(t){y(this,t),this._state=e({items:null,registry_origin:null,descending:null},t.data),this._intro=!!t.intro,this._fragment=function(t,e){var n,r,i,c,h,g,p,v,y,w,b,k,N;function D(e){t.sort()}var j=[L,x],T=[];function C(t){return t.items?0:1}return b=C(e),k=T[b]=j[b](t,e),{c(){n=d("table"),r=d("thead"),i=d("tr"),c=d("th"),h=u("Tag "),g=d("span"),p=u("\n\t\t\t\t"),(v=d("th")).textContent="Image Name",y=u("\n\n\t\t"),w=d("tbody"),k.c(),f(g,"line-height","1px"),m(g,"hidden",null==e.descending),m(g,"arrow-down",e.descending),m(g,"arrow-up",!e.descending),l(c,"click",D),n.className="u-full-width"},m(t,e){s(t,n,e),o(n,r),o(r,i),o(i,c),o(c,h),o(c,g),o(i,p),o(i,v),o(n,y),o(n,w),T[b].m(w,null),N=!0},p(e,n){e.descending&&(m(g,"hidden",null==n.descending),m(g,"arrow-down",n.descending),m(g,"arrow-up",!n.descending));var r=b;(b=C(n))===r?T[b].p(e,n):(k.o(function(){T[r].d(1),T[r]=null}),(k=T[b])||(k=T[b]=j[b](t,n)).c(),k.m(w,null))},i(t,e){N||this.m(t,e)},o(t){N&&(k?k.o(t):t(),N=!1)},d(t){t&&a(n),_(c,"click",D),T[b].d()}}}(this,this._state),this.root._oncreate.push(()=>{(async function(){var t="";const{descending:e}=this.get();var n=(await fetch("/v2/_catalog").then(function(e){return t=e.headers.get("Docker-Distribution-Api-Version"),e.json()})).repositories;this.fire("version",{version:t}),this.set({registry_origin:window.location.host,items:n})}).call(this),this.fire("update",{changed:n({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),v(this)),this._intro=!0}function C(e,n){var r;return{c(){(r=d("td")).textContent="..."},m(t,e){s(t,r,e)},p:t,d(t){t&&a(r)}}}function A(t,e){var n,r,i,c,h,l,_,f,m,p=e.tag.repository_name,v=e.tag.tag_name,y=e.tag.created_at;return{c(){n=d("td"),r=u(p),i=u("\n  "),c=d("td"),h=d("code"),l=u(v),_=u("\n  "),f=d("td"),m=u(y)},m(t,e){s(t,n,e),o(n,r),s(t,i,e),s(t,c,e),o(c,h),o(h,l),s(t,_,e),s(t,f,e),o(f,m)},p(t,e){t.tag&&p!==(p=e.tag.repository_name)&&g(r,p),t.tag&&v!==(v=e.tag.tag_name)&&g(l,v),t.tag&&y!==(y=e.tag.created_at)&&g(m,y)},d(t){t&&(a(n),a(i),a(c),a(_),a(f))}}}function B(t){y(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=function(t,e){var n,r;function o(t){return t.tag?A:C}var c=o(e),u=c(t,e);return{c(){n=d("tr"),u.c()},m(t,e){s(t,n,e),u.m(n,null),r=!0},p(e,r){c===(c=o(r))&&u?u.p(e,r):(u.d(1),(u=c(t,r)).c(),u.m(n,null))},i(t,e){r||this.m(t,e)},o:i,d(t){t&&a(n),u.d()}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}e(T.prototype,b),e(T.prototype,N),e(B.prototype,b);var O={sort(t){const{tags:e,descending:n,order_by:r}=this.get();var i=!0;n&&t==r&&(i=!1),e.sort(function(e,n){return i?n[t]>e[t]:n[t]<=e[t]}),this.set({tags:e,order_by:t,descending:i})}};function E(t,e,n){const r=Object.create(t);return r.tag=e[n],r}function H(t,e){var n,r,c,h,l,_,f,m,p=new e.Date(0);return{c(){n=d("tr"),(r=d("td")).textContent="loading tags...",c=u("\n      "),(h=d("td")).innerHTML="<code>...</code>",l=u("\n      "),_=d("td"),f=u(p)},m(t,e){s(t,n,e),o(n,r),o(n,c),o(n,h),o(n,l),o(n,_),o(_,f),m=!0},p(t,e){t.Date&&p!==(p=new e.Date(0))&&g(f,p)},i(t,e){m||this.m(t,e)},o:i,d(t){t&&a(n)}}}function M(t,e){for(var n,i,o=e.tags,d=[],u=0;u<o.length;u+=1)d[u]=V(t,E(e,o,u));function l(t,e,n){d[t]&&d[t].o(()=>{e&&(d[t].d(e),d[t]=null),n&&n()})}return{c(){for(var t=0;t<d.length;t+=1)d[t].c();n=h()},m(t,e){for(var r=0;r<d.length;r+=1)d[r].i(t,e);s(t,n,e),i=!0},p(e,r){if(e.tags){o=r.tags;for(var i=0;i<o.length;i+=1){const s=E(r,o,i);d[i]?d[i].p(e,s):(d[i]=V(t,s),d[i].c()),d[i].i(n.parentNode,n)}for(;i<d.length;i+=1)l(i,1)}},i(t,e){i||this.m(t,e)},o(t){if(!i)return;const e=r(t,(d=d.filter(Boolean)).length);for(let t=0;t<d.length;t+=1)l(t,0,e);i=!1},d(t){c(d,t),t&&a(n)}}}function V(t,e){var n,r,i={tag:e.tag},o=new B({root:t.root,store:t.store,data:i});return{c(){o._fragment.c(),n=u("\n    ")},m(t,e){o._mount(t,e),s(t,n,e),r=!0},p(t,e){var n={};t.tags&&(n.tag=e.tag),o._set(n)},i(t,e){r||this.m(t,e)},o(t){r&&(o&&o._fragment.o(t),r=!1)},d(t){o.destroy(t),t&&a(n)}}}function I(t){y(this,t),this._state=e(e({Date:Date},{tags:null,descending:null,order_by:null}),t.data),this._intro=!!t.intro,this._fragment=function(t,e){var n,r,i,c,h,g,p,v,y,w,b,k,N,D,x,L,j,T,C;function A(e){t.fire("select",null)}function B(e){t.sort("tag_name")}function O(e){t.sort("created_at")}var E=[M,H],V=[];function I(t){return t.tags?0:1}return j=I(e),T=V[j]=E[j](t,e),{c(){(n=d("button")).innerHTML='<span class="arrow-left"></span> Back',r=u("\n\n"),i=d("table"),c=d("thead"),h=d("tr"),(g=d("th")).textContent="Image Name",p=u("\n      "),v=d("th"),y=u("Tag "),w=d("span"),b=u("\n      "),k=d("th"),N=u("Created at "),D=d("span"),x=u("\n\n  "),L=d("tbody"),T.c(),l(n,"click",A),n.className="button",f(n,"font-weight","bolder"),f(w,"line-height","1px"),m(w,"hidden","tag_name"!=e.order_by),m(w,"arrow-down",e.descending),m(w,"arrow-up",!e.descending),l(v,"click",B),m(D,"hidden","created_at"!=e.order_by),m(D,"arrow-down",e.descending),m(D,"arrow-up",!e.descending),l(k,"click",O),i.className="u-full-width"},m(t,e){s(t,n,e),s(t,r,e),s(t,i,e),o(i,c),o(c,h),o(h,g),o(h,p),o(h,v),o(v,y),o(v,w),o(h,b),o(h,k),o(k,N),o(k,D),o(i,x),o(i,L),V[j].m(L,null),C=!0},p(e,n){e.order_by&&m(w,"hidden","tag_name"!=n.order_by),e.descending&&(m(w,"arrow-down",n.descending),m(w,"arrow-up",!n.descending)),e.order_by&&m(D,"hidden","created_at"!=n.order_by),e.descending&&(m(D,"arrow-down",n.descending),m(D,"arrow-up",!n.descending));var r=j;(j=I(n))===r?V[j].p(e,n):(T.o(function(){V[r].d(1),V[r]=null}),(T=V[j])||(T=V[j]=E[j](t,n)).c(),T.m(L,null))},i(t,e){C||this.m(t,e)},o(t){C&&(T?T.o(t):t(),C=!1)},d(t){t&&a(n),_(n,"click",A),t&&(a(r),a(i)),_(v,"click",B),_(k,"click",O),V[j].d()}}}(this,this._state),this.root._oncreate.push(()=>{(async function(){const t=[];var e="";const{repository_name:n}=this.get(),r=await fetch("/v2/"+n+"/tags/list").then(function(t){return e=t.headers.get("Docker-Distribution-Api-Version"),console.log(e),t.json()});for(var i=0;i<r.tags.length;i++){const e=r.tags[i];await fetch("/v2/"+n+"/manifests/"+e,{headers:{Accept:"application/vnd.docker.distribution.manifest.v2+json"}}).then(t=>t.json()).then(function(r){return fetch("/v2/"+n+"/blobs/"+r.config.digest,{headers:{Accept:r.config.mediaType}}).then(t=>t.json()).then(function(r){var i={tag_name:e,repository_name:n,created_at:new Date(r.created)};return t.push(i),i})})}this.fire("version",{version:e}),this.set({tags:t})}).call(this),this.fire("update",{changed:n({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),v(this)),this._intro=!0}e(I.prototype,b),e(I.prototype,O);var R={itemDetails(t){console.log(t),this.set({isList:!1,repository_name:t})},version(t){this.set({version:t})},close(){this.set({isList:!0})}};function P(t,e){var n,r={repository_name:e.repository_name},i=new I({root:t.root,store:t.store,data:r});return i.on("version",function(e){t.version(e.version)}),i.on("select",function(e){t.close()}),{c(){i._fragment.c()},m(t,e){i._mount(t,e),n=!0},p(t,e){var n={};t.repository_name&&(n.repository_name=e.repository_name),i._set(n)},i(t,e){n||this.m(t,e)},o(t){n&&(i&&i._fragment.o(t),n=!1)},d(t){i.destroy(t)}}}function q(e,n){var r,i=new T({root:e.root,store:e.store});return i.on("version",function(t){e.version(t.version)}),i.on("select",function(t){e.itemDetails(t.repository_name)}),{c(){i._fragment.c()},m(t,e){i._mount(t,e),r=!0},p:t,i(t,e){r||this.m(t,e)},o(t){r&&(i&&i._fragment.o(t),r=!1)},d(t){i.destroy(t)}}}function z(t){y(this,t),this._state=e({},t.data),this._intro=!!t.intro,this._fragment=function(t,e){var n,r,i,c,h,l,_,f,m,p,v,y,w,b,k,N,D,x,L,j,T;document.title=n=e.app_title;var C=[q,P],A=[];function B(t){return t.isList?0:1}return b=B(e),k=A[b]=C[b](t,e),{c(){r=u("\n\n"),i=d("div"),c=d("div"),h=d("div"),l=d("h1"),_=u(e.name),f=u("\n\t\t"),m=d("div"),p=d("h2"),v=u(e.subtitle),y=u("\n\t"),w=d("div"),k.c(),N=u("\n\n\t"),D=d("div"),x=u("Version: "),L=d("code"),j=u(e.version),h.className="six columns",m.className="six columns",c.className="row",w.className="row",D.className="row",i.className="container"},m(t,e){s(t,r,e),s(t,i,e),o(i,c),o(c,h),o(h,l),o(l,_),o(c,f),o(c,m),o(m,p),o(p,v),o(i,y),o(i,w),A[b].m(w,null),o(i,N),o(i,D),o(D,x),o(D,L),o(L,j),T=!0},p(e,r){T&&!e.app_title||n===(n=r.app_title)||(document.title=n),T&&!e.name||g(_,r.name),T&&!e.subtitle||g(v,r.subtitle);var i=b;(b=B(r))===i?A[b].p(e,r):(k.o(function(){A[i].d(1),A[i]=null}),(k=A[b])||(k=A[b]=C[b](t,r)).c(),k.m(w,null)),T&&!e.version||g(j,r.version)},i(t,e){T||this.m(t,e)},o(t){T&&(k?k.o(t):t(),T=!1)},d(t){t&&(a(r),a(i)),A[b].d()}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),v(this)),this._intro=!0}return e(z.prototype,b),e(z.prototype,R),new z({target:document.body,data:{name:"That Docker Registry",subtitle:"",item:null,isList:!0,app_title:"That Docker Registry",repository_name:null,version:"0.0"}})}();
//# sourceMappingURL=bundle.js.map
