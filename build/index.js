/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={204:(e,t,r)=>{(t=r(312)(!1)).push([e.id,".useritem{display:flex;gap:8px;background-color:rgba(0,0,0,0);font-size:20px;font-family:inherit,sans-serif;color:#000;line-height:1.2;outline:none;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:fit-content;background:rgba(0,0,0,0);border:0px;padding:12px 14px}.useritem--avatar{background-color:#a3a3a3;max-width:50px;min-width:50px;max-height:50px;min-height:50px;overflow:hidden;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:18px;outline:none}.useritem--title{font-weight:600}.useritem--description{font-size:18px;color:#a3a3a3}.useritem--disabled{opacity:.5;cursor:none !important;pointer-events:none !important}.useritem--loading{animation:fade 2s infinite}.useritem--loading--title,.useritem--loading--description,.useritem--loading--avatar{width:100%;background-color:#a3a3a3}.useritem--loading--avatar{max-width:50px;min-width:50px;max-height:50px;min-height:50px}.useritem--loading--title{width:140px}.useritem--loading--description{width:170px}.useritem--loading--title,.useritem--loading--description{min-height:18px}@keyframes fade{0%,100%{opacity:.15}50%{opacity:.35}}",""]),e.exports=t},312:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r,n,i,o=e[1]||"",a=e[3];if(!a)return o;if(t&&"function"==typeof btoa){var s=(r=a,n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(i," */")),c=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(c).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&i[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},700:(e,t,r)=>{var n=r(596),i=r(204);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},596:(e,t,r)=>{"use strict";var n,i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),o=[];function a(e){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:v(p,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,m=0;function v(e,t){var r,n,i;if(t.singleton){var o=m++;r=f||(f=c(t)),n=u.bind(null,r,o,!1),i=u.bind(null,r,o,!0)}else r=c(t),n=p.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var i=a(r[n]);o[i].references--}for(var c=s(e,t),l=0;l<r.length;l++){var d=a(r[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}r=c}}}},308:(e,t,r)=>{"use strict";var n=r(840),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:c,_owner:a.current}}t.jsx=c,t.jsxs=c},592:(e,t,r)=>{"use strict";e.exports=r(308)},840:e=>{"use strict";e.exports=require("react")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>t});var e=r(592);r(700);const t=({avatar:t=!0,avatarUrl:r,border:n=!0,color:i,description:o,disabled:a,loading:s,onClick:c,reverse:l,squared:d,shadow:u,style:p,title:f})=>s?(0,e.jsxs)("div",{className:"useritem useritem--loading",style:Object.assign({border:n?"1px solid #e5e5e5":"",borderRadius:d?"":"8px",display:"flex",alignItems:"center",flexDirection:l?"row-reverse":"row",boxShadow:u&&n?"-1px 0px 16px 0px rgba(0,0,0,0.05)":""},p),children:[(0,e.jsx)("div",{className:"useritem--loading--avatar",style:{borderRadius:d?"":"100px"}}),(0,e.jsxs)("div",{style:{display:"grid",gap:"8px"},children:[(0,e.jsx)("div",{className:"useritem--loading--title"}),(0,e.jsx)("div",{className:"useritem--loading--description"})]})]}):(0,e.jsxs)("div",{className:"useritem "+(a?"useritem--disabled":""),style:Object.assign({border:n?"1px solid #e5e5e5":"",borderRadius:d?"":"8px",display:"flex",alignItems:"center",flexDirection:l?"row-reverse":"row",boxShadow:u&&n?"-1px 0px 16px 0px rgba(0,0,0,0.05)":""},p),onClick:e=>{if(!s)return c?c(e):void 0},children:[t&&(0,e.jsx)("div",{className:"useritem--avatar",style:{backgroundColor:i,backgroundImage:`url(${r})`,backgroundSize:"cover",borderRadius:d?"":"100px"},children:(()=>{if(r)return;const e="AA";if(!f)return e;const t=f.split(" ");return t?0===t.length?e:t.map((e=>{if(e[0])return e[0].toUpperCase()})).join(""):e})()}),(0,e.jsxs)("div",{style:{flexDirection:l?"row-reverse":"row"},children:[f&&(0,e.jsx)("div",{className:"useritem--title",style:{textAlign:l?"right":"left"},children:f}),o&&(0,e.jsx)("div",{className:"useritem--description",style:{textAlign:l?"right":"left"},children:o})]})]})})(),module.exports=n})();