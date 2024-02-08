(()=>{var e={916:(e,n,t)=>{(n=t(312)(!1)).push([e.id,"/* tailwindcss addons*/\n\n.relative {\n  position: relative;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.w-full {\n  width: 100%;\n}\n\n/* core */\n\n.useritem {\n  font-size: 16px;\n  color: black;\n  background-color: transparent;\n  line-height: 1.4;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  max-width: 275px;\n  width: 100%;\n}\n\n.useritem--item {\n  color: black;\n  cursor: pointer;\n  position: relative;\n  z-index: 99;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 12px;\n  transition: ease-in 100ms;\n  width: 100%;\n}\n\n.useritem--item--reverse {\n  flex-direction: row-reverse;\n}\n\n/* button */\n\n.useritem button {\n  outline: none;\n  background: transparent;\n  border: 0px;\n}\n\n/* avatar */\n\n.useritem--avatar {\n  min-width: 42px;\n  min-height: 42px;\n  overflow: hidden;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 18px;\n  outline: none;\n}\n\n/* infos */\n\n.useritem--infos {\n  width: 100%;\n}\n\n.useritem--infos--title {\n  font-size: 16px;\n  line-height: 1.25;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.useritem--infos--description {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.25;\n  color: #a0aec0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* styles */\n\n.useritem--border {\n  border: 1px solid lightgray;\n}\n\n.useritem--item--border--rounded {\n  border-radius: 8px;\n}\n\n.useritem--shadow {\n  -webkit-box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.05);\n  -moz-box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.05);\n  box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.05);\n}\n\n.useritem--disabled {\n  opacity: 0.5;\n  cursor: none!important;\n  pointer-events: none!important;\n}\n\n/* dropdown */\n\n.useritem--dropdown {\n  z-index: 99;\n  position: absolute;\n  top: 63px;\n  left:-1px;\n  right: -1px;\n  background-color: white;\n  min-width: 100%;\n  transition: ease-in;\n}\n\n.useritem--dropdown--open {\n  transform: translateY(0px);\n  opacity: 1;\n}\n\n.useritem--dropdown--closed {\n  transform: translateY(-100px);\n  transition: ease-in;\n  opacity: 0;\n}\n\n/* loading */\n\n.useritem--loading {\n  animation: opacityChange 1500ms infinite alternate;\n}\n\n.useritem--loading--state {\n    pointer-events: none!important;\n}\n\n/* status */\n\n.useritem--item--status {\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  background: lightgray;\n  border: 2px solid white;\n  border-radius: 36px;\n  overflow: hidden;\n}\n\n.useritem--item--status--online {\n  background: limegreen;\n}\n\n.useritem--item--status--squared {\n  bottom: -3px;\n  right: -3px;\n}",""]),e.exports=n},312:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,r,i,o=e[1]||"",a=e[3];if(!a)return o;if(n&&"function"==typeof btoa){var s=(t=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */")),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([s]).join("\n")}return[o].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},824:(e,n,t)=>{var r=t(596),i=t(916);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);r(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},596:(e,n,t)=>{"use strict";var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var s=e[i],l=n.base?s[0]+n.base:s[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var u=a(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:c,updater:h(p,n),references:1}),r.push(c)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,c=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,i;if(n.singleton){var o=f++;t=m||(m=l(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=l(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var l=s(e,n),d=0;d<t.length;d++){var c=a(t[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=l}}}},236:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#000" fillRule="evenodd" d="M8 8.5a1 1 0 00-.78 1.625l4 5a1 1 0 001.56 0l4-5A1 1 0 0016 8.5H8z" clipRule="evenodd"></path></svg>'},548:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M19.167 10l-2.034-2.325.284-3.075-3.009-.683-1.575-2.667L10 2.467 7.167 1.25 5.592 3.908l-3.009.675.284 3.084L.833 10l2.034 2.325-.284 3.083 3.009.684 1.575 2.658L10 17.525l2.833 1.217 1.575-2.659 3.009-.683-.284-3.075L19.167 10zm-11.35 3.342l-1.984-2a.83.83 0 010-1.175l.059-.059a.84.84 0 011.183 0l1.342 1.35 4.291-4.3a.84.84 0 011.184 0l.058.059a.83.83 0 010 1.175l-4.933 4.95a.86.86 0 01-1.2 0z"></path></svg>'}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var r={};(()=>{"use strict";t.r(r),t.d(r,{default:()=>l});const e=require("react");var n=t.n(e),i=t(236),o=t.n(i),a=t(548),s=t.n(a);t(824);const l=t=>{const{avatar:r=!0,avatarUrl:i="",border:a=!0,children:l,backgroundColor:d,dropdown:c,disabled:u,description:p="johndoe@mail.com",infos:m=!0,reverse:f,loading:h,onClick:g,online:v,shadow:x=!0,squared:b=!1,status:w,style:y,title:E="John Doe",verified:k}=t,[N,C]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{C(!1)}),[h]),n().createElement("div",{className:`useritem ${a?"useritem--border":""} ${b?"":"useritem--item--border--rounded"} ${x?"useritem--shadow":""} ${h?"useritem--loading--state":""}`,style:y},n().createElement("button",{onClick:e=>g?g(e):c?C(!N):void 0,className:`useritem--item ${u?"useritem--disabled":""} ${f?"useritem--item--reverse":""}`},r&&n().createElement("div",{className:"relative"},n().createElement("div",{className:"useritem--avatar "+(h?"useritem--loading":""),style:{backgroundColor:h?"lightgray":d||"#10b981",backgroundImage:!h&&i.length>0?`url(${i})`:"",backgroundSize:"cover",borderRadius:b?"":"32px"}},!h&&""===i&&n().createElement("span",null,E?E.split(" ").map((e=>e[0].toUpperCase())).join(""):"AA")),!h&&w&&n().createElement("div",{className:`useritem--item--status ${b?"useritem--item--status--squared":""} ${v?"useritem--item--status--online":""}`})),h&&n().createElement("div",{style:{display:"grid",gap:"8px"}},n().createElement("div",{className:"useritem--loading",style:{width:"120px",height:"16px",background:"lightgray"}}),n().createElement("div",{className:"useritem--loading",style:{width:"180px",height:"16px",background:"lightgray"}})),!h&&m&&n().createElement("div",{className:"useritem--infos truncate"},E&&n().createElement("div",{className:"truncate useritem--infos--title"},n().createElement("div",{className:"w-full "+(f?"text-right":"text-left"),style:{display:"flex",alignItems:"center",gap:"2px"}},E," ",k&&n().createElement("img",{src:s().src,alt:""}))),p&&n().createElement("div",{className:"truncate useritem--infos--description  "+(f?"text-right":"text-left")},p)),!h&&c&&n().createElement("div",null,n().createElement("img",{src:o().src,alt:"dropdown arrow down",style:{rotate:N&&c?"180deg":"",transition:"ease-in",transitionDuration:"100ms"}}))),c&&!h&&l&&n().createElement("div",{className:`useritem--dropdown ${N?"useritem--dropdown--open":"useritem--dropdown--closed"} ${a?"useritem--border":""} ${b?"":"useritem--item--border--rounded"}`,style:{borderRadius:"0px",borderTopRightRadius:"0px",borderTopLeftRadius:"0px"}},l))}})(),module.exports=r})();