var app=function(e){"use strict";function t(){}function n(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){for(var n in t)e[n]=1;return e}function r(e,t){return 0===t&&e(),function(){--t||e()}}function s(e){e()}function a(e,t){e.appendChild(t)}function o(e,t,n){e.insertBefore(t,n)}function l(e){e.parentNode.removeChild(e)}function c(e,t){for(var n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function f(){return document.createComment("")}function h(e,t,n,i){e.addEventListener(t,n,i)}function p(e,t,n,i){e.removeEventListener(t,n,i)}function m(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function v(e,t){e.data=""+t}function y(e,t,n){e.style.setProperty(t,n)}function g(){return Object.create(null)}function _(e){e._lock=!0,T(e._beforecreate),T(e._oncreate),T(e._aftercreate),e._lock=!1}function b(e,t){e._handlers=g(),e._slots=g(),e._bind=t._bind,e._staged={},e.options=t,e.root=t.root||e,e.store=t.store||e.root.store,t.root||(e._beforecreate=[],e._oncreate=[],e._aftercreate=[])}function T(e){for(;e&&e.length;)e.shift()()}e=e&&e.hasOwnProperty("default")?e.default:e;var k={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(n)for(var i=0;i<n.length;i+=1){var r=n[i];if(!r.__calling)try{r.__calling=!0,r.call(this,t)}finally{r.__calling=!1}}},on:function(e,t){var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}},set:function(e){this._set(n({},e)),this.root._lock||_(this.root)},_recompute:t,_set:function(e){var t=this._state,i={},r=!1;for(var s in e=n(this._staged,e),this._staged={},e)this._differs(e[s],t[s])&&(i[s]=r=!0);r&&(this._state=n(n({},t),e),this._recompute(i,this._state),this._bind&&this._bind(i,this._state),this._fragment&&(this.fire("state",{changed:i,current:this._state,previous:t}),this._fragment.p(i,this._state),this.fire("update",{changed:i,current:this._state,previous:t})))},_stage:function(e){n(this._staged,e)},_mount:function(e,t){this._fragment[this._fragment.i?"i":"m"](e,t||null)},_differs:function(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}};function x(e){e.changed,e.current,e.previous}function C(e,t){var n,i;return{c:function(){(n=d("span")).className=i=t.type+" legendIconStyle  svelte-c1342g",y(n,"background-color",t.backgroundColor),y(n,"border-color",t.borderColor)},m:function(e,t){o(e,n,t)},p:function(e,t){e.type&&i!==(i=t.type+" legendIconStyle  svelte-c1342g")&&(n.className=i),e.backgroundColor&&y(n,"background-color",t.backgroundColor),e.borderColor&&y(n,"border-color",t.borderColor)},d:function(e){e&&l(n)}}}function w(e,t){var n,i;return{c:function(){(n=d("img")).src=i=t.item.RenderStyle.iconUrl,m(n,"crossorigin",""),n.alt="Style Icon",n.className="svelte-c1342g"},m:function(e,t){o(e,n,t)},p:function(e,t){e.item&&i!==(i=t.item.RenderStyle.iconUrl)&&(n.src=i)},d:function(e){e&&l(n)}}}function N(e){var t=this;b(this,e),this._state=n({},e.data),this._recompute({item:1},this._state),this._intro=!!e.intro,this._handlers.state=[x],x.call(this,{changed:i({},this._state),current:this._state}),this._fragment=function(e,t){var n,i;function r(e){return e.item.RenderStyle.iconUrl?w:C}var a=r(t),c=a(e,t);return{c:function(){n=d("span"),c.c(),n.className="legendIconCell style svelte-c1342g"},m:function(e,t){o(e,n,t),c.m(n,null),i=!0},p:function(t,i){a===(a=r(i))&&c?c.p(t,i):(c.d(1),(c=a(e,i)).c(),c.m(n,null))},i:function(e,t){i||this.m(e,t)},o:s,d:function(e){e&&l(n),c.d()}}}(this,this._state),this.root._oncreate.push(function(){t.fire("update",{changed:i({},t._state),current:t._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),_(this)),this._intro=!0}n(N.prototype,k),N.prototype._recompute=function(e,t){var n;e.item&&(this._differs(t.backgroundColor,t.backgroundColor=(n=t.item,L.gmxUtil.dec2rgba(n.RenderStyle.fillColor,n.RenderStyle.fillOpacity||1)))&&(e.backgroundColor=!0),this._differs(t.borderColor,t.borderColor=function(e){var t=e.item;return L.gmxUtil.dec2rgba(t.RenderStyle.color,t.RenderStyle.opacity||1)}(t))&&(e.borderColor=!0))};var I={isOpened:function(){var e=this.get(),t=e.line,n=e.layersTree,i=t.content,r=i.properties,s=r.name||r.GroupID||"root",a=n.visible[s]||n.expanded[s],o=void 0===a?r&&r.visible:a;return o&&r.GroupID&&i.children,o},toggleVisibility:function(e){var t="group"===this.get().line.type?e.parentNode.getElementsByClassName("expanderInput")[0]:e;e.classList.contains("title"),t&&(t.checked?t.checked=!1:t.checked=!0)},toggleTimeline:function(e){e&&(e.classList.contains("disabled")?(e.classList.remove("disabled"),e.classList.add("enabled")):(e.classList.add("disabled"),e.classList.remove("enabled")))},showInfo:function(e){var t=e.parentNode.nextElementSibling.getElementsByClassName("description")[0];if(t)if(t.classList.contains("collapse")){var n=this.get().line;t.innerHTML=n.content.properties.description||"",t.classList.remove("collapse")}else t.classList.add("collapse")}};function E(e,t,n){var i=Object.create(e);return i.child=t[n],i}function M(e,t,n){var i=Object.create(e);return i.it=t[n],i}function S(e,t){var n,i,r,s="map"!==t.line.type&&D(e,t),a="map"!==t.line.type&&R(e,t);return{c:function(){s&&s.c(),n=u("\r\n\t\t"),a&&a.c(),i=f()},m:function(e,t){s&&s.m(e,t),o(e,n,t),a&&a.m(e,t),o(e,i,t),r=!0},p:function(t,r){"map"!==r.line.type?s?s.p(t,r):((s=D(e,r)).c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),"map"!==r.line.type?(a?a.p(t,r):(a=R(e,r))&&a.c(),a.i(i.parentNode,i)):a&&a.o(function(){a.d(1),a=null})},i:function(e,t){r||this.m(e,t)},o:function(e){r&&(a?a.o(e):e(),r=!1)},d:function(e){s&&s.d(e),e&&l(n),a&&a.d(e),e&&l(i)}}}function D(e,t){var n,i,r,s,a="group"===t.line.type&&P(e,t),c="layer"===t.line.type&&B(e,t);return{c:function(){n=d("div"),i=u("\r\n\t"),a&&a.c(),r=u("\r\n\t\t"),c&&c.c(),s=f(),n.className="borders "},m:function(e,t){o(e,n,t),o(e,i,t),a&&a.m(e,t),o(e,r,t),c&&c.m(e,t),o(e,s,t)},p:function(t,n){"group"===n.line.type?a?a.p(t,n):((a=P(e,n)).c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),"layer"===n.line.type?c?c.p(t,n):((c=B(e,n)).c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},d:function(e){e&&(l(n),l(i)),a&&a.d(e),e&&l(r),c&&c.d(e),e&&l(s)}}}function P(e,t){var n,i,r;function s(t){e.toggleVisibility(this)}return{c:function(){n=d("input"),i=u("\r\n\t"),r=d("span"),n.className="expander expanderInput hidden svelte-1n45zm8",m(n,"type","checkbox"),n.checked=t.isVisible,h(r,"click",s),r.className="expander pointer expanderCont cmd:toggleVisibility svelte-1n45zm8"},m:function(e,t){o(e,n,t),o(e,i,t),o(e,r,t)},p:function(e,t){e.isVisible&&(n.checked=t.isVisible)},d:function(e){e&&(l(n),l(i),l(r)),p(r,"click",s)}}}function B(e,t){var n,i,r,s,c,f=t.properties.styles.length>1&&z(e,t),h=t.properties.description&&A(e,t),p=t.properties.Temporal&&(t.properties.IsRasterCatalog||t.properties.Quicklook&&"null"!==t.properties.Quicklook)&&V(e,t);return{c:function(){f&&f.c(),n=u("\r\n\t"),i=d("span"),(r=d("span")).innerHTML='<svg role="img" class="svgIcon svelte-1n45zm8"><use xlink:href="#center-on-click" href="#center-on-click"></use></svg>',s=u("\r\n\t\t\t"),h&&h.c(),c=u("\r\n\t\t"),p&&p.c(),r.className="pointer cmd:fitBounds cont-center svelte-1n45zm8",r.title="Move map to this layer",i.className="icons  svelte-1n45zm8"},m:function(e,t){f&&f.m(e,t),o(e,n,t),o(e,i,t),a(i,r),a(i,s),h&&h.m(i,null),a(i,c),p&&p.m(i,null)},p:function(t,r){r.properties.styles.length>1?f||((f=z(e,r)).c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null),r.properties.description?h||((h=A(e,r)).c(),h.m(i,c)):h&&(h.d(1),h=null),r.properties.Temporal&&(r.properties.IsRasterCatalog||r.properties.Quicklook&&"null"!==r.properties.Quicklook)?p||((p=V(e,r)).c(),p.m(i,null)):p&&(p.d(1),p=null)},d:function(e){f&&f.d(e),e&&(l(n),l(i)),h&&h.d(),p&&p.d()}}}function z(e,t){var n;return{c:function(){(n=d("span")).innerHTML='<svg role="img" class="svgIcon svelte-1n45zm8"><use xlink:href="#overlays" href="#overlays"></use></svg>',n.className="cont-overlays svelte-1n45zm8"},m:function(e,t){o(e,n,t)},d:function(e){e&&l(n)}}}function A(e,t){var n;function i(t){e.showInfo(this,t)}return{c:function(){(n=d("span")).innerHTML='<svg role="img" class="svgIcon svelte-1n45zm8"><use xlink:href="#info-circle-i" href="#info-circle-i"></use></svg>',h(n,"click",i),n.className="pointer cmd:showInfo cont-info svelte-1n45zm8",n.title="View description"},m:function(e,t){o(e,n,t)},d:function(e){e&&l(n),p(n,"click",i)}}}function V(e,t){var n;function i(t){e.toggleTimeline(this)}return{c:function(){(n=d("span")).innerHTML='<svg role="img" class="svgIcon svelte-1n45zm8"><use xlink:href="#timeline-icon" href="#timeline-icon"></use></svg>',h(n,"click",i),n.className="pointer cmd:toggleTimeline timeline disabled svelte-1n45zm8"},m:function(e,t){o(e,n,t)},d:function(e){e&&l(n),p(n,"click",i)}}}function R(e,t){var n,i,s,c,f,m,y,g,_=t.properties.title,b="layer"===t.line.type&&O(e,t);function L(t){e.toggleVisibility(this)}var T="layer"===t.line.type&&H(e,t);return{c:function(){n=d("span"),b&&b.c(),i=u("\r\n\t\t"),s=d("label"),c=u(_),f=u("\r\n\t\t"),m=d("div"),y=u("\r\n"),T&&T.c(),h(s,"click",L),s.className="pointer title cmd:toggleVisibility svelte-1n45zm8",m.className="description collapse svelte-1n45zm8",n.className="cont"},m:function(e,t){o(e,n,t),b&&b.m(n,null),a(n,i),a(n,s),a(s,c),a(n,f),a(n,m),a(n,y),T&&T.m(n,null),g=!0},p:function(t,r){"layer"===r.line.type?(b?b.p(t,r):(b=O(e,r))&&b.c(),b.i(n,i)):b&&b.o(function(){b.d(1),b=null}),g&&!t.properties||_===(_=r.properties.title)||v(c,_),"layer"===r.line.type?(T?T.p(t,r):(T=H(e,r))&&T.c(),T.i(n,null)):T&&T.o(function(){T.d(1),T=null})},i:function(e,t){g||this.m(e,t)},o:function(e){g&&(e=r(e,2),b?b.o(e):e(),T?T.o(e):e(),g=!1)},d:function(e){e&&l(n),b&&b.d(),p(s,"click",L),T&&T.d()}}}function O(e,t){var n,i,r,s,a=t.styles.length&&t.styles.length<2&&t.styles[0].RenderStyle&&U(e,t);return{c:function(){n=d("input"),i=u("\r\n\t\t"),a&&a.c(),r=f(),n.className="check visibility pointer cmd:toggleVisibility svelte-1n45zm8",m(n,"type","checkbox"),n.checked=t.isVisible},m:function(e,t){o(e,n,t),o(e,i,t),a&&a.m(e,t),o(e,r,t),s=!0},p:function(t,i){s&&!t.isVisible||(n.checked=i.isVisible),i.styles.length&&i.styles.length<2&&i.styles[0].RenderStyle?(a?a.p(t,i):(a=U(e,i))&&a.c(),a.i(r.parentNode,r)):a&&a.o(function(){a.d(1),a=null})},i:function(e,t){s||this.m(e,t)},o:function(e){s&&(a?a.o(e):e(),s=!1)},d:function(e){e&&(l(n),l(i)),a&&a.d(e),e&&l(r)}}}function U(e,t){var n,i={item:t.styles[0],type:t.properties.GeometryType},r=new N({root:e.root,store:e.store,data:i});return{c:function(){r._fragment.c()},m:function(e,t){r._mount(e,t),n=!0},p:function(e,t){var n={};e.styles&&(n.item=t.styles[0]),e.properties&&(n.type=t.properties.GeometryType),r._set(n)},i:function(e,t){n||this.m(e,t)},o:function(e){n&&(r&&r._fragment.o(e),n=!1)},d:function(e){r.destroy(e)}}}function H(e,t){var n,i,r=t.styles.length&&t.styles.length>1&&t.styles[0].RenderStyle&&G(e,t);return{c:function(){r&&r.c(),n=f()},m:function(e,t){r&&r.m(e,t),o(e,n,t),i=!0},p:function(t,i){i.styles.length&&i.styles.length>1&&i.styles[0].RenderStyle?(r?r.p(t,i):(r=G(e,i))&&r.c(),r.i(n.parentNode,n)):r&&r.o(function(){r.d(1),r=null})},i:function(e,t){i||this.m(e,t)},o:function(e){i&&(r?r.o(e):e(),i=!1)},d:function(e){r&&r.d(e),e&&l(n)}}}function G(e,t){for(var n,i,s,u=t.styles,f=[],h=0;h<u.length;h+=1)f[h]=j(e,M(t,u,h));function p(e,t,n){f[e]&&f[e].o(function(){t&&(f[e].d(t),f[e]=null),n&&n()})}return{c:function(){n=d("div"),i=d("div");for(var e=0;e<f.length;e+=1)f[e].c();i.className="legend-cont svelte-1n45zm8",n.className="legend svelte-1n45zm8"},m:function(e,t){o(e,n,t),a(n,i);for(var r=0;r<f.length;r+=1)f[r].i(i,null);s=!0},p:function(t,n){if(t.styles||t.properties){u=n.styles;for(var r=0;r<u.length;r+=1){var s=M(n,u,r);f[r]?f[r].p(t,s):(f[r]=j(e,s),f[r].c()),f[r].i(i,null)}for(;r<f.length;r+=1)p(r,1)}},i:function(e,t){s||this.m(e,t)},o:function(e){if(s){for(var t=r(e,(f=f.filter(Boolean)).length),n=0;n<f.length;n+=1)p(n,0,t);s=!1}},d:function(e){e&&l(n),c(f,e)}}}function j(e,t){var n,i,r,s,c,f,h,p=t.it.Name,m={item:t.it,type:t.properties.GeometryType},y=new N({root:e.root,store:e.store,data:m});return{c:function(){n=d("div"),(i=d("span")).innerHTML='<svg role="img" class="svgIcon on svelte-1n45zm8"><use xlink:href="#eye-on" href="#eye-on"></use></svg>\n\t\t\t\t\t\t\t\t\t<svg role="img" class="svgIcon off svelte-1n45zm8"><use xlink:href="#eye-off" href="#eye-off"></use></svg>',r=u("\r\n\t\t\t\t\t"),y._fragment.c(),s=u("\r\n\t\t\t\t\t"),c=d("span"),f=u(p),i.className="legendIconEye enabled pointer cmd:toggleStyle svelte-1n45zm8",c.className="styleName svelte-1n45zm8",n.className="gmx-style-legend svelte-1n45zm8"},m:function(e,t){o(e,n,t),a(n,i),a(n,r),y._mount(n,null),a(n,s),a(n,c),a(c,f),h=!0},p:function(e,t){var n={};e.styles&&(n.item=t.it),e.properties&&(n.type=t.properties.GeometryType),y._set(n),h&&!e.styles||p===(p=t.it.Name)||v(f,p)},i:function(e,t){h||this.m(e,t)},o:function(e){h&&(y&&y._fragment.o(e),h=!1)},d:function(e){e&&l(n),y.destroy()}}}function W(e,t){for(var n,i,s,a=t.line.content.children||[],u=[],f=0;f<a.length;f+=1)u[f]=q(e,E(t,a,f));function h(e,t,n){u[e]&&u[e].o(function(){t&&(u[e].d(t),u[e]=null),n&&n()})}return{c:function(){n=d("ul");for(var e=0;e<u.length;e+=1)u[e].c();n.className=i="group css-treeview id_"+(t.properties?t.properties.name:"root")+" svelte-1n45zm8"},m:function(e,t){o(e,n,t);for(var i=0;i<u.length;i+=1)u[i].i(n,null);s=!0},p:function(t,r){if(t.line||t.layersTree){a=r.line.content.children||[];for(var o=0;o<a.length;o+=1){var l=E(r,a,o);u[o]?u[o].p(t,l):(u[o]=q(e,l),u[o].c()),u[o].i(n,null)}for(;o<u.length;o+=1)h(o,1)}s&&!t.properties||i===(i="group css-treeview id_"+(r.properties?r.properties.name:"root")+" svelte-1n45zm8")||(n.className=i)},i:function(e,t){s||this.m(e,t)},o:function(e){if(s){for(var t=r(e,(u=u.filter(Boolean)).length),n=0;n<u.length;n+=1)h(n,0,t);s=!1}},d:function(e){e&&l(n),c(u,e)}}}function q(e,t){var n,i={},r={line:t.child};void 0!==t.layersTree&&(r.layersTree=t.layersTree,i.layersTree=!0);var s=new $({root:e.root,store:e.store,data:r,_bind:function(t,n){var r={};!i.layersTree&&t.layersTree&&(r.layersTree=n.layersTree),e._set(r),i={}}});return e.root._beforecreate.push(function(){s._bind({layersTree:1},s.get())}),{c:function(){s._fragment.c()},m:function(e,t){s._mount(e,t),n=!0},p:function(e,n){t=n;var r={};e.line&&(r.line=t.child),!i.layersTree&&e.layersTree&&(r.layersTree=t.layersTree,i.layersTree=void 0!==t.layersTree),s._set(r),i={}},i:function(e,t){n||this.m(e,t)},o:function(e){n&&(s&&s._fragment.o(e),n=!1)},d:function(e){s.destroy(e)}}}function $(e){var t,i,s,c,f,h,p,m;b(this,e),this._state=n({line:null},e.data),this._recompute({line:1,properties:1,layersTree:1},this._state),this._intro=!!e.intro,this._fragment=(t=this,i=this._state,p=i.properties&&S(t,i),m=i.line.content.children&&W(t,i),{c:function(){s=d("li"),p&&p.c(),c=u("\r\n"),m&&m.c(),s.className=f="line cmd:toggleIcons id:"+i.nodeID+" svelte-1n45zm8"},m:function(e,t){o(e,s,t),p&&p.m(s,null),a(s,c),m&&m.m(s,null),h=!0},p:function(e,n){n.properties?(p?p.p(e,n):(p=S(t,n))&&p.c(),p.i(s,c)):p&&p.o(function(){p.d(1),p=null}),n.line.content.children?(m?m.p(e,n):(m=W(t,n))&&m.c(),m.i(s,null)):m&&m.o(function(){m.d(1),m=null}),h&&!e.nodeID||f===(f="line cmd:toggleIcons id:"+n.nodeID+" svelte-1n45zm8")||(s.className=f)},i:function(e,t){h||this.m(e,t)},o:function(e){h&&(e=r(e,2),p?p.o(e):e(),m?m.o(e):e(),h=!1)},d:function(e){e&&l(s),p&&p.d(),m&&m.d()}}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),_(this)),this._intro=!0}n($.prototype,k),n($.prototype,I),$.prototype._recompute=function(e,t){e.line&&this._differs(t.properties,t.properties=t.line.content.properties)&&(e.properties=!0),e.properties&&(this._differs(t.nodeID,t.nodeID=function(e){var t=e.properties;return t?t.name||t.GroupID:"root"}(t))&&(e.nodeID=!0),this._differs(t.styles,t.styles=function(e){var t=e.properties;return t.gmxStyles?t.gmxStyles.styles:[]}(t))&&(e.styles=!0)),(e.line||e.layersTree)&&this._differs(t.isVisible,t.isVisible=function(e){var t=e.line,n=e.layersTree,i=t.content.properties,r=i.name||i.GroupID||"root",s=n.visible[r]||n.expanded[r];return void 0===s?i&&i.visible:s}(t))&&(e.isVisible=!0)};var Q={cmd:/cmd:(\w+)/,id:/id:(\w+)/};var J={chkEvent:function(e){var t=e.target,n=t.className,i=Q.cmd.exec(n);if(i&&2===i.length){for(var r={cmd:i[1],type:e.type,originalEvent:e},s=0;s<5;s++){if(t.classList.contains("line")){(i=Q.id.exec(t.className))&&2===i.length&&(r.id=i[1]),r.target=t;break}t=t.parentNode}r.id&&(this.treeCommands(r),this.fire("command",r))}},treeCommands:function(e){var t=this.get(),n=t.layersTree;t.rawTree;if("toggleVisibility"===e.cmd){var i=e.target.getElementsByClassName("expanderInput")[0],r=i||e.target.getElementsByClassName("visibility")[0],s=(e.originalEvent.target,i?n.expanded:n.visible),a=e.id;return s[a]?(delete s[a],r.checked=!1):(s[a]=!0,r.checked=!0),this.set({layersTree:n}),!0}return!1},appendNode:function(e){this.options.appendNode(e)}};function Z(e){b(this,e),this._state=n({config:{},layersTree:{visible:{}},group:null,rawTree:null},e.data),this._intro=!!e.intro,this._fragment=function(e,t){var n,i,r={},s={line:t.rawTree};void 0!==t.layersTree&&(s.layersTree=t.layersTree,r.layersTree=!0);var a=new $({root:e.root,store:e.store,data:s,_bind:function(t,n){var i={};!r.layersTree&&t.layersTree&&(i.layersTree=n.layersTree),e._set(i),r={}}});function c(t){e.chkEvent(t)}return e.root._beforecreate.push(function(){a._bind({layersTree:1},a.get())}),{c:function(){n=d("div"),a._fragment.c(),h(n,"click",c),n.className="TreeView svelte-98my9k"},m:function(e,t){o(e,n,t),a._mount(n,null),i=!0},p:function(e,n){t=n;var i={};e.rawTree&&(i.line=t.rawTree),!r.layersTree&&e.layersTree&&(i.layersTree=t.layersTree,r.layersTree=void 0!==t.layersTree),a._set(i),r={}},i:function(e,t){i||this.m(e,t)},o:function(e){i&&(a&&a._fragment.o(e),i=!1)},d:function(e){e&&l(n),a.destroy(),p(n,"click",c)}}}(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),_(this)),this._intro=!0}n(Z.prototype,k),n(Z.prototype,J);var F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),X=function(){function e(){F(this,e),this.listeners={}}return K(e,[{key:"addEventListener",value:function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"on",value:function(e,t){return this.addEventListener(e,t),this}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var n=this.listeners[e],i=0,r=n.length;i<r;i++)if(n[i]===t)return n.splice(i,1),this.removeEventListener(e,t)}},{key:"off",value:function(e,t){return this.removeEventListener(e,t),this}},{key:"dispatchEvent",value:function(e){if(e.type in this.listeners){var t=this.listeners[e.type];Object.defineProperty(e,"target",{enumerable:!1,configurable:!1,writable:!1,value:this});for(var n=0,i=t.length;n<i;n++)t[n].call(this,e)}}}]),e}();class Y extends X{constructor(e,{position:t="left"}={}){super(),this._container=e,this._container.classList.add("noselect"),this._container.innerHTML=`<div class="scanex-sidebar">\n            <div class="${"left"===t?"tabs":"panes"}"></div>\n            <div class="${"left"===t?"panes":"tabs"}"></div>\n        </div>`,this._tabContainer=this._container.querySelector(".tabs"),this._paneContainer=this._container.querySelector(".panes"),this._current=null,this._data={}}enable(e){this._data[e]&&(this._data[e].enabled=!0)}enabled(e){const{enabled:t}=e&&this._data[e]?this._data[e]:{enabled:!1};return t}disable(e){this._data[e]&&(e===this.current&&(this.current=null),this._data[e].enabled=!1)}get current(){return this._current}set current(e){const t=this._tabContainer.children,n=this._paneContainer.children;let i=!1;for(let r=0;r<t.length;++r){const s=t[r].getAttribute("data-tab-id"),{opened:a,closed:o,enabled:l}=this._data[s];let c=t[r].querySelector("i"),d=n[r];s===e?(c.classList.remove(o),c.classList.add(a),d.classList.remove("hidden"),d.classList.add("shown"),i=!0):(c.classList.remove(a),c.classList.add(o),d.classList.remove("shown"),d.classList.add("hidden"))}this._current=i?e:null;let r=document.createEvent("Event");r.detail={current:this._current},r.initEvent("change",!1,!1),this.dispatchEvent(r)}addTab({id:e,icon:t,opened:n,closed:i,tooltip:r,enabled:s=!0}){let a=document.createElement("div"),o=document.createElement("i");t.split(/\s+/g).forEach(e=>o.classList.add(e)),o.classList.add(e===this._current?n:i),a.appendChild(o),a.setAttribute("data-tab-id",e),r&&a.setAttribute("title",r),a.addEventListener("click",this._toggle.bind(this,e)),this._tabContainer.appendChild(a);let l=document.createElement("div");return l.setAttribute("data-pane-id",e),l.classList.add(this.visible&&this.current===e?"shown":"hidden"),this._paneContainer.appendChild(l),this._data[e]={icon:t,opened:n,closed:i,enabled:s},l}removeTab(e){const t=this._tabContainer.querySelector(`[data-tab-id=${e}]`);t.removeEventListener("click",this._toggle.bind(this,e)),this._tabContainer.removeChild(t);const n=this._paneContainer.querySelector(`[data-pane-id=${e}]`);this._paneContainer.removeChild(n);for(let t=0;t<this._data.length;++t)if(this._data[t].id===e){this._data.splice(t,1);break}}_toggle(e){this.enabled(e)&&(this.current=this.current===e?null:e)}getPane(e){return this._paneContainer.querySelector(`[data-pane-id=${e}]`)}}var ee=L.Control.extend({includes:L.Evented?L.Evented.prototype:L.Mixin.Events,initialize:function(e){L.setOptions(this,e)},enable:function(e){this._sidebar.enable(e)},enabled:function(e){return this._sidebar.enabled(e)},disable:function(e){this._sidebar.disable(e)},getCurrent:function(){return this._sidebar.current},setCurrent:function(e){this._sidebar.current=e},addTab:function({id:e,icon:t,opened:n,closed:i,tooltip:r,enabled:s}){return this._sidebar.addTab({id:e,icon:t,opened:n,closed:i,tooltip:r,enabled:s})},removeTab:function(e){this._sidebar.removeTab(e)},getPane:function(e){return this._sidebar.getPane(e)},onAdd:function(e){this._container=L.DomUtil.create("div"),L.DomEvent.disableClickPropagation(this._container),L.DomEvent.disableScrollPropagation(this._container);const{position:t}=this.options;return this._sidebar=new Y(this._container,{position:"topleft"===t||"bottomleft"===t?"left":"right"}),this._sidebar.addEventListener("change",e=>{this.fire("change",e)}),this._container},addTo:function(e){return L.Control.prototype.addTo.call(this,e),this.options.addBefore&&this.addBefore(this.options.addBefore),this},addBefore:function(e){let t=this._parent&&this._parent._container;if(t||(t=this._map&&this._map._controlCorners[this.getPosition()]),t)for(let n=0,i=t.childNodes.length;n<i;n++){let i=t.childNodes[n];if(e===i._id){t.insertBefore(this._container,i);break}}else this.options.addBefore=e;return this}});var te,ne=(function(t){var n;n=function(e){function t(e,t){for(var n in e)e.hasOwnProperty(n)&&t(e[n],n,e)}function n(e,t){e.children.length?e.insertBefore(t,e.children[0]):e.appendChild(t)}var i=e.Control.extend({includes:e.Evented?e.Evented.prototype:e.Mixin.Events,_getActiveLayer:function(){return this._activeLayerId?this._layers[this._activeLayerId]:function(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&t++;return t}(this._layers)?function(e){for(var t in e)if(e.hasOwnProperty(t))return e[t]}(this._layers):null},_getPreviousLayer:function(){var e=this._getActiveLayer();return e?this._previousLayerId?this._layers[this._previousLayerId]:function(e,t){if(e.length){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}else for(var i in e)if(e.hasOwnProperty(i)&&t(e[i]))return e[i]}(this._layers,function(t){return t.id!==e.id}.bind(this))||null:null},_getInactiveLayers:function(){var e=[],n=this._getActiveLayer()?this._getActiveLayer().id:null,i=this._getPreviousLayer()?this._getPreviousLayer().id:null;return t(this._layers,function(t){t.id!==n&&t.id!==i&&e.push(t)}),e},_arrangeLayers:function(){var e={previous:function(){var e=this._getInactiveLayers();return this._getActiveLayer()&&e.unshift(this._getActiveLayer()),this._getPreviousLayer()&&e.unshift(this._getPreviousLayer()),e}};return e[this.options.behavior].apply(this,arguments)},_getLayerCellByLayerId:function(e){for(var t=this._container.getElementsByClassName("leaflet-iconLayers-layerCell"),n=0;n<t.length;n++)if(t[n].getAttribute("data-layerid")==e)return t[n]},_createLayerElement:function(t){var n=e.DomUtil.create("div","leaflet-iconLayers-layer");if(t.title){var i=e.DomUtil.create("div","leaflet-iconLayers-layerTitleContainer"),r=e.DomUtil.create("div","leaflet-iconLayers-layerTitle"),s=e.DomUtil.create("div","leaflet-iconLayers-layerCheckIcon");r.innerHTML=t.title,i.appendChild(r),n.appendChild(i),n.appendChild(s)}return t.icon&&n.setAttribute("style","background-image: url('"+t.icon+"')"),n},_createLayerElements:function(){for(var t,i,r=this._arrangeLayers(),s=this._getActiveLayer()&&this._getActiveLayer().id,a=0;a<r.length;a++)a%this.options.maxLayersInRow==0&&(t=e.DomUtil.create("div","leaflet-iconLayers-layersRow"),-1===this.options.position.indexOf("bottom")?this._container.appendChild(t):n(this._container,t)),(i=e.DomUtil.create("div","leaflet-iconLayers-layerCell")).setAttribute("data-layerid",r[a].id),0!==a&&e.DomUtil.addClass(i,"leaflet-iconLayers-layerCell_hidden"),r[a].id===s&&e.DomUtil.addClass(i,"leaflet-iconLayers-layerCell_active"),"left"===this._expandDirection?e.DomUtil.addClass(i,"leaflet-iconLayers-layerCell_expandLeft"):e.DomUtil.addClass(i,"leaflet-iconLayers-layerCell_expandRight"),i.appendChild(this._createLayerElement(r[a])),-1===this.options.position.indexOf("right")?t.appendChild(i):n(t,i)},_onLayerClick:function(e){e.stopPropagation();var t=e.currentTarget.getAttribute("data-layerid"),n=this._layers[t];this.setActiveLayer(n.layer),this.expand()},_attachEvents:function(){t(this._layers,function(e){var t=this._getLayerCellByLayerId(e.id);t&&t.addEventListener("click",this._onLayerClick.bind(this))}.bind(this));for(var e=this._container.getElementsByClassName("leaflet-iconLayers-layersRow"),n=function(e){e.stopPropagation(),this.expand()}.bind(this),i=function(e){e.stopPropagation(),this.collapse()}.bind(this),r=function(e){e.stopPropagation()},s=0;s<e.length;s++){var a=e[s];a.addEventListener("mouseenter",n),a.addEventListener("mouseleave",i),a.addEventListener("mousemove",r)}},_render:function(){this._container.innerHTML="",this._createLayerElements(),this._attachEvents()},_switchMapLayers:function(){if(this._map){var e=this._getActiveLayer(),n=this._getPreviousLayer();n?this._map.removeLayer(n.layer):t(this._layers,function(e){var t=e.layer;this._map.removeLayer(t)}.bind(this)),e&&this._map.addLayer(e.layer)}},options:{position:"bottomleft",behavior:"previous",expand:"horizontal",autoZIndex:!0,maxLayersInRow:5,manageLayers:!0},initialize:function(t,n){e.Util.isArray(arguments[0])||(n=t,t=[]),e.setOptions(this,n),this._expandDirection=-1!=this.options.position.indexOf("left")?"right":"left",this.options.manageLayers&&this.on("activelayerchange",this._switchMapLayers,this),this.setLayers(t)},onAdd:function(t){return this._container=e.DomUtil.create("div","leaflet-iconLayers"),e.DomUtil.addClass(this._container,"leaflet-iconLayers_"+this.options.position),this._render(),t.on("click",this.collapse,this),this.options.manageLayers&&this._switchMapLayers(),this._container},onRemove:function(e){e.off("click",this.collapse,this)},setLayers:function(t){this._layers={},t.map(function(t){var n=e.stamp(t.layer);this._layers[n]=e.extend(t,{id:n})}.bind(this)),this._container&&this._render()},setActiveLayer:function(t){var n=t&&this._layers[e.stamp(t)];n&&n.id!==this._activeLayerId&&(this._previousLayerId=this._activeLayerId,this._activeLayerId=n.id,this._container&&this._render(),this.fire("activelayerchange",{layer:t}))},expand:function(){this._arrangeLayers().slice(1).map(function(t){var n=this._getLayerCellByLayerId(t.id);e.DomUtil.removeClass(n,"leaflet-iconLayers-layerCell_hidden")}.bind(this))},collapse:function(){this._arrangeLayers().slice(1).map(function(t){var n=this._getLayerCellByLayerId(t.id);e.DomUtil.addClass(n,"leaflet-iconLayers-layerCell_hidden")}.bind(this))}}),r=function(e,t){return new i(e,t)};return r.Constructor=i,r},t.exports?t.exports=n(e):(window.L.control.iconLayers=n(window.L),window.L.Control.IconLayers=window.L.control.iconLayers.Constructor)}(te={exports:{}},te.exports),te.exports);window.serverBase;var ie={createMap:function(e){var t=this.get().layersTree,n=(e.app||{}).gmxMap||{},i=e.state||{},r=(i.calendar,n.mapID||"946GH"),s=(n.apiKey,i.map?i.map.position:{});t=i.layersTree||t,this.layersTree=t;var a=new L.Map("map",{srs:3857,layers:[],center:new L.LatLng(s.y||0,s.x||60),zoom:s.z||3});a.gmxControlsManager.init({gmxDrawing:{position:"right"},gmxZoom:{position:"gmxbottomright"},gmxHide:null}),a.gmxControlsManager.setSvgSprites("//www.kosmosnimki.ru/lib/geomixer_1.3/img/svg-symbols.svg");var o=new ee({position:"topleft"});o.addTo(a);var l=o.addTab({id:"treeView",icon:"icon-layers",opened:"opened",closed:"closed"});this.iconSidebar=o,this.treePane=l,this.mapID=r;var c={leafletMap:a,setZIndex:!0};L.gmx.loadMap(r,c).then(function(e){var n=this;this.gmxMap=e,e.layers.forEach(function(e){e._map&&(t.visible[e._gmx.layerID]=!0)}),o.on("change",function(i){"treeView"===i.detail.current?n._initTree({container:l,layersTree:t,rawTree:e.rawTree}):l.innerHTML=""}),this.iconSidebar.setCurrent("treeView");var i=L.control.gmxTimeline({moveable:!0}).on("dateInterval",function(t){e.layersByID[t.layerID].setDateInterval(t.beginDate,t.endDate)}).on("statechanged",function(e){console.log("statechanged",e)}).on("click",function(t){e.layersByID[t.layerID].repaint()});this.gmxTimeline=i,this._initBaseLayers(a,e.properties.BaseLayers)}.bind(this)),this.set({map:a,config:e})},_initBaseLayers:function(e,t){var n=e.gmxBaseLayersManager;n.initDefaults().then(function(){n.setActiveIDs(t);var i=n.getActiveIDs().map(function(e){var t=n.get(e);return t?{layer:t,icon:t.options.icon,title:t.options.rus}:null}).filter(function(e){return e}),r=new ne(i,{id:"iconLayers"});e.gmxControlsManager.add(r),e.addControl(r)})},_getNodeIndex:function(e){var t,n,i=e.parentNode.children;for(t=0,n=i.length;t<n&&i[t]!==e;t++);return t===n?null:t},_initTree:function(e){var t=this,n={type:"map",content:e.rawTree},i=new Z({appendNode:function(e){if(t.gmxMap.nodes){var n=t.get().map,i=t.mapID,r=t.layersTree,s=r.visible||{},a=t.gmxMap;a.layersByID;L.gmx.gmxMapManager.getMapFolder({treeConfig:r,mapId:i,folderId:e}).then(function(e){L.gmx.gmxMapManager.iterateNode(e.content,function(e){var t=e.content.properties,n=t.name;n&&n in s&&s[n]!==t.visible&&(t.visible=s[n])},{nodes:a.nodes}),a.addLayersToMap(n),this.treePane.innerHTML="",this._initTree({container:this.treePane,layersTree:this.layersTree,rawTree:a.rawTree})}.bind(t))}},target:e.container,data:{container:e.container,layersTree:e.layersTree,rawTree:n}});this._treeView=i,i.on("command",function(e){var n=t.get().map,r=e.cmd,s=e.originalEvent.target,a=t.gmxMap,o=!a.nodes||a.nodes[e.id],l=a.layersByID[e.id];if(l){if("fitBounds"===r)n.fitBounds(l.getBounds());else if("toggleVisibility"===r)l._map?n.removeLayer(l):n.addLayer(l);else if("toggleTimeline"===r)s.classList.contains("enabled")?(t.gmxTimeline._map||n.addControl(t.gmxTimeline),t.gmxTimeline.addLayer(l)):t.gmxTimeline.removeLayer(l);else if("toggleStyle"===r){var c=t._getNodeIndex(s.parentNode),d=l.getStyles();s.classList.contains("enabled")?(s.classList.remove("enabled"),d[c].disabled=!0):(s.classList.add("enabled"),delete d[c].disabled),l.setStyles(d)}}else"toggleVisibility"!==r||o||i.appendNode(e.id)})}};function re(e){var t=e.changed,n=e.current;e.previous;t.permalink&&n.permalink&&this.createMap(n.permalink)}function se(e){var r,a,c=this;b(this,e),this._state=n({layersTree:{visible:{}},permalink:null,map:null},e.data),this._intro=!!e.intro,this._handlers.state=[re],re.call(this,{changed:i({},this._state),current:this._state}),this._fragment=(this._state,{c:function(){(r=d("div")).id="map"},m:function(e,t){o(e,r,t),a=!0},p:t,i:function(e,t){a||this.m(e,t)},o:s,d:function(e){e&&l(r)}}),this.root._oncreate.push(function(){c.fire("update",{changed:i({},c._state),current:c._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),_(this)),this._intro=!0}n(se.prototype,k),n(se.prototype,ie);var ae=window.serverBase||"//maps.kosmosnimki.ru/";var oe={checkMe:function(e){},editTrigger:function(e,t){var n=e.parentNode,i=n.parentNode.lastChild;t?(i.previousElementSibling.classList.remove("hidden"),i.classList.add("hidden")):(i.previousElementSibling.classList.add("hidden"),i.classList.remove("hidden")),n.firstChild.classList.remove("checked"),n.lastChild.classList.remove("checked"),e.classList.add("checked")},getPermalink:function(e){var t=this,n={};e?fetch(ae+"TinyReference/Get.ashx?WrapStyle=None&id="+e,{mode:"cors",credentials:"include"}).then(function(e){return e.json()}).then(function(e){"ok"===e.Status&&(n=e.Result?JSON.parse(e.Result):{}),t.set({permalink:n,confStr:JSON.stringify(n,null,2)})}):setTimeout(function(){this.set({permalink:n,confStr:JSON.stringify(n,null,2)})}.bind(this),0)}};function le(e){var t=e.changed,n=e.current;e.previous;t.urlParams&&this.getPermalink(n.urlParams.config)}function ce(e){var t=e.changed,n=e.current;e.previous;if(n.urlParams.edit&&t.confStr){var i=document.getElementsByClassName("view")[0];i.innerHTML=n.confStr,hljs.highlightBlock(i)}}function de(e){var t=this._svelte,n=t.component,i=t.ctx;n.checkMe(i.it)}function ue(e,t,n){var i=Object.create(e);return i.it=t[n],i}function fe(e,t){for(var n,i,r,s,f,m,y,g,_,b,L,T,k,x,C,w,N=t.dropdownMenu,I=[],E=0;E<N.length;E+=1)I[E]=he(e,ue(t,N,E));function M(t){e.editTrigger(this,!0)}function S(t){e.editTrigger(this)}return{c:function(){n=d("div"),i=d("div"),r=d("div"),s=d("div");for(var e=0;e<I.length;e+=1)I[e].c();f=u("\r\n\t\t"),m=d("div"),y=d("div"),g=d("ul"),(_=d("li")).innerHTML='<i class="icon-bell svelte-1bxmf4s"></i>\n\t\t\t\t\t\t\t\t\t<span>Edit</span>',b=u("\r\n\t\t\t\t\t"),(L=d("li")).innerHTML='<i class="icon-eye svelte-1bxmf4s"></i>\n\t\t\t\t\t\t\t\t\t<span>View</span>',T=u("\r\n\t\t\t\t"),k=d("textarea"),x=u("\r\n\t\t\t\t"),C=d("div"),w=u(t.confStr),s.className="dropdownMenuWidget svelte-1bxmf4s",r.className="sidebarPanel-toolbarContainer svelte-1bxmf4s",h(_,"click",M),_.className="dropdownMenuWidget-item svelte-1bxmf4s",h(L,"click",S),L.className="dropdownMenuWidget-item checked svelte-1bxmf4s",g.className="dropdownMenuWidget right svelte-1bxmf4s",k.className="text-input hidden svelte-1bxmf4s",k.value=t.confStr,C.className="view svelte-1bxmf4s",y.className="editor svelte-1bxmf4s",m.className="sidebarPanel-codeEditorContainer svelte-1bxmf4s",i.className="sidebarPanel svelte-1bxmf4s",n.className="editor-sidebarContainer editor_sidebarExpanded svelte-1bxmf4s"},m:function(e,t){o(e,n,t),a(n,i),a(i,r),a(r,s);for(var l=0;l<I.length;l+=1)I[l].m(s,null);a(i,f),a(i,m),a(m,y),a(y,g),a(g,_),a(g,b),a(g,L),a(y,T),a(y,k),a(y,x),a(y,C),a(C,w)},p:function(t,n){if(t.dropdownMenu){N=n.dropdownMenu;for(var i=0;i<N.length;i+=1){var r=ue(n,N,i);I[i]?I[i].p(t,r):(I[i]=he(e,r),I[i].c(),I[i].m(s,null))}for(;i<I.length;i+=1)I[i].d(1);I.length=N.length}t.confStr&&(k.value=n.confStr,v(w,n.confStr))},d:function(e){e&&l(n),c(I,e),p(_,"click",M),p(L,"click",S)}}}function he(e,t){var n,i,r,s,c,f,m,y=t.it.title;return{c:function(){n=d("div"),i=d("i"),s=u("\r\n\t\t\t\t\t"),c=d("span"),f=u(y),i.className=r="icon-"+t.it.name+" svelte-1bxmf4s",n._svelte={component:e,ctx:t},h(n,"click",de),n.className=m="dropdownMenuWidget-item"+(t.it.checked?" checked":"")+" svelte-1bxmf4s"},m:function(e,t){o(e,n,t),a(n,i),a(n,s),a(n,c),a(c,f)},p:function(e,s){t=s,e.dropdownMenu&&r!==(r="icon-"+t.it.name+" svelte-1bxmf4s")&&(i.className=r),e.dropdownMenu&&y!==(y=t.it.title)&&v(f,y),n._svelte.ctx=t,e.dropdownMenu&&m!==(m="dropdownMenuWidget-item"+(t.it.checked?" checked":"")+" svelte-1bxmf4s")&&(n.className=m)},d:function(e){e&&l(n),p(n,"click",de)}}}function pe(e){var t=this;b(this,e),this._state=n({urlParams:{},dropdownMenu:[{name:"refresh",title:"Refresh"},{name:"link",title:"Share"}],map:null,permalink:null,confStr:""},e.data),this._intro=!!e.intro,this._handlers.state=[le],this._handlers.update=[ce],le.call(this,{changed:i({},this._state),current:this._state}),this._fragment=function(e,t){var n,i,r,s={},a=t.urlParams.edit&&fe(e,t),c={permalink:t.permalink};void 0!==t.map&&(c.map=t.map,s.map=!0);var f=new se({root:e.root,store:e.store,data:c,_bind:function(t,n){var i={};!s.map&&t.map&&(i.map=n.map),e._set(i),s={}}});return e.root._beforecreate.push(function(){f._bind({map:1},f.get())}),{c:function(){a&&a.c(),n=u("\r\n"),i=d("div"),f._fragment.c(),i.className="editor-viewerContainer editor_sidebarExpanded svelte-1bxmf4s"},m:function(e,t){a&&a.m(e,t),o(e,n,t),o(e,i,t),f._mount(i,null),r=!0},p:function(i,r){(t=r).urlParams.edit?a?a.p(i,t):((a=fe(e,t)).c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null);var o={};i.permalink&&(o.permalink=t.permalink),!s.map&&i.map&&(o.map=t.map,s.map=void 0!==t.map),f._set(o),s={}},i:function(e,t){r||this.m(e,t)},o:function(e){r&&(f&&f._fragment.o(e),r=!1)},d:function(e){a&&a.d(e),e&&(l(n),l(i)),f.destroy()}}}(this,this._state),this.root._oncreate.push(function(){(function(){}).call(t),t.fire("update",{changed:i({},t._state),current:t._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),_(this)),this._intro=!0}n(pe.prototype,k),n(pe.prototype,oe);var me,ve=(me={},location.search.substr(1).split("&").forEach(function(e){var t=e.split("=");me[t[0]]=t[1]}),me);return new pe({target:document.body,data:{urlParams:ve,name:"world"}})}(L);
//# sourceMappingURL=bundle.js.map
