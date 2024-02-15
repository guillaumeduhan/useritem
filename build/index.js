/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={916:(e,n,t)=>{(n=t(312)(!1)).push([e.id,"/* useritem */\n/*tailwindcss addons*/\n\n.relative {\n  position: relative;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.w-full {\n  width: 100%;\n}\n\n/* core */\n\n.useritem {\n  font-size: 16px;\n  color: black;\n  background-color: transparent;\n  line-height: 1.4;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: fit-content;\n}\n\n.useritem--item {\n  color: black;\n  cursor: pointer;\n  position: relative;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: ease-in 100ms;\n  width: 100%;\n}\n\n.useritem--item--reverse {\n  flex-direction: row-reverse;\n}\n\n/* button */\n\n.useritem button {\n  outline: none;\n  background: transparent;\n  border: 0px;\n}\n\n/* avatar */\n\n.useritem--avatar {\n  min-width: 46px;\n  min-height: 46px;\n  overflow: hidden;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 18px;\n  outline: none;\n}\n\n/* infos */\n\n.useritem--infos {\n  width: 100%;\n  max-width: 250px;\n}\n\n.useritem--infos--title {\n  font-size: 16px;\n  line-height: 1.25;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.useritem--infos--description {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.25;\n  color: #a0aec0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* styles */\n\n.useritem--border {\n  border: 1px solid #ededed;\n}\n\n.useritem--item--border--rounded {\n  border-radius: 8px;\n}\n\n.useritem--shadow {\n  -webkit-box-shadow: 0px 2px 15px 4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: 0px 2px 15px 4px rgba(0, 0, 0, 0.05);\n  box-shadow: 0px 2px 15px 4px rgba(0, 0, 0, 0.05);\n}\n\n.useritem--disabled {\n  opacity: 0.5;\n  cursor: none !important;\n  pointer-events: none !important;\n}\n\n/* dropdown */\n\n.useritem--dropdown {\n  z-index: 99;\n  position: absolute;\n  top: 63px;\n  left: -1px;\n  right: -1px;\n  background-color: white;\n  min-width: 100%;\n  transition: ease-in;\n}\n\n.useritem--dropdown--open {\n  transform: translateY(0px);\n  opacity: 1;\n}\n\n.useritem--dropdown--closed {\n  transform: translateY(-100px);\n  transition: ease-in;\n  opacity: 0;\n}\n\n/* loading */\n\n.useritem--loading {\n  animation: opacityChange 1500ms infinite alternate;\n}\n\n.useritem--loading--state {\n  pointer-events: none !important;\n}\n\n/* status */\n\n.useritem--item--status {\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  background: lightgray;\n  border: 2px solid white;\n  border-radius: 36px;\n  overflow: hidden;\n}\n\n.useritem--item--status--online {\n  background: limegreen;\n}\n\n.useritem--item--status--squared {\n  bottom: -3px;\n  right: -3px;\n}",""]),e.exports=n},312:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,r,i,o=e[1]||"",s=e[3];if(!s)return o;if(n&&"function"==typeof btoa){var a=(t=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */")),l=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([a]).join("\n")}return[o].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},824:(e,n,t)=>{var r=t(596),i=t(916);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);r(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},596:(e,n,t)=>{"use strict";var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function s(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],i=0;i<e.length;i++){var a=e[i],l=n.base?a[0]+n.base:a[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var u=s(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:c,updater:h(p,n),references:1}),r.push(c)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,c=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(n,i);else{var o=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(o,s[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var o=m++;t=f||(f=l(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=l(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=s(t[r]);o[i].references--}for(var l=a(e,n),d=0;d<t.length;d++){var c=s(t[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=l}}}},236:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#000" fillRule="evenodd" d="M8 8.5a1 1 0 00-.78 1.625l4 5a1 1 0 001.56 0l4-5A1 1 0 0016 8.5H8z" clipRule="evenodd"></path></svg>'},548:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M19.167 10l-2.034-2.325.284-3.075-3.009-.683-1.575-2.667L10 2.467 7.167 1.25 5.592 3.908l-3.009.675.284 3.084L.833 10l2.034 2.325-.284 3.083 3.009.684 1.575 2.658L10 17.525l2.833 1.217 1.575-2.659 3.009-.683-.284-3.075L19.167 10zm-11.35 3.342l-1.984-2a.83.83 0 010-1.175l.059-.059a.84.84 0 011.183 0l1.342 1.35 4.291-4.3a.84.84 0 011.184 0l.058.059a.83.83 0 010 1.175l-4.933 4.95a.86.86 0 01-1.2 0z"></path></svg>'},308:(e,n,t)=>{"use strict";var r=t(840),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,l={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:c,props:l,_owner:s.current}}n.jsx=l,n.jsxs=l},592:(e,n,t)=>{"use strict";e.exports=t(308)},840:e=>{"use strict";e.exports=require("react")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var r={};(()=>{"use strict";t.r(r),t.d(r,{default:()=>d});var e=t(592),n=t(840),i=t.n(n),o=t(236),s=t.n(o),a=t(548),l=t.n(a);t(824);const d=n=>{const{avatar:t=!0,avatarUrl:r,border:o=!0,children:a,backgroundColor:d,dropdown:c,disabled:u,description:p,infos:f=!0,reverse:m,loading:h,onClick:x,online:v,noPadding:g,shadow:b=!1,squared:w=!1,status:y,style:j,title:k="John Doe",verified:N}=n,[_,S]=i().useState(!1);return(0,e.jsxs)("div",{className:`useritem ${f?"useritem--infos":""} ${o?"useritem--border":""} ${w?"":"useritem--item--border--rounded"} ${b?"useritem--shadow":""} ${h?"useritem--loading--state":""}`,children:[(0,e.jsxs)("button",{onClick:e=>x?x(e):c?S(!_):void 0,className:`useritem--item ${u?"useritem--disabled":""} ${m?"useritem--item--reverse":""}`,style:Object.assign({height:g?"auto":"64px",padding:g?0:"2px 10px"},j),children:[t&&(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("div",{className:"useritem--avatar "+(h?"useritem--loading":""),style:{backgroundColor:h?"lightgray":d||"#10b981",backgroundImage:!h&&r&&r.length>0?`url(${r})`:"",backgroundSize:"cover",borderRadius:w?"":"32px"},children:!h&&!r&&(0,e.jsx)("span",{children:(()=>{const e="AA";if(!k)return e;const n=k.split(" ")||[];return n?0===n.length?e:n.map((e=>e[0].toUpperCase())).join(""):e})()})}),!h&&y&&(0,e.jsx)("div",{className:`useritem--item--status ${w?"useritem--item--status--squared":""} ${v?"useritem--item--status--online":""}`})]}),h&&(0,e.jsxs)("div",{style:{display:"grid",gap:"8px"},children:[(0,e.jsx)("div",{className:"useritem--loading",style:{width:"120px",height:"16px",background:"lightgray"}}),(0,e.jsx)("div",{className:"useritem--loading",style:{width:"180px",height:"16px",background:"lightgray"}})]}),!h&&f&&(0,e.jsxs)("div",{className:"useritem--infos truncate",children:[k&&(0,e.jsx)("div",{className:"truncate useritem--infos--title",children:(0,e.jsxs)("div",{className:"w-full "+(m?"text-right":"text-left"),style:{display:"flex",alignItems:"center",gap:"2px"},children:[k," ",N&&(0,e.jsx)("img",{src:l().src,alt:""})]})}),p&&(0,e.jsx)("div",{className:"truncate useritem--infos--description  "+(m?"text-right":"text-left"),children:p})]}),!h&&c&&(0,e.jsx)("div",{children:(0,e.jsx)("img",{src:s().src,alt:"dropdown arrow down",style:{rotate:_&&c?"180deg":"",transition:"ease-in",transitionDuration:"100ms"}})})]}),c&&!h&&a&&(0,e.jsx)("div",{className:`useritem--dropdown ${_?"useritem--dropdown--open":"useritem--dropdown--closed"} ${o?"useritem--border":""} ${w?"":"useritem--item--border--rounded"}`,style:{borderRadius:"0px",borderTopRightRadius:"0px",borderTopLeftRadius:"0px"},children:a})]})}})(),module.exports=r})();