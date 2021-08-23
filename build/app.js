(()=>{"use strict";var e,t,n,r,o,i,a,c,s,l,f,u,d,p,m={384:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap);"]),o.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after{content:"";content:none}q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{font-family:"Roboto",sans-serif;font-weight:400;font-size:.875rem;color:#000}h1{font-size:1.25rem;font-weight:500}h2{font-family:"Open Sans",sans-serif;font-size:1rem}.card{background:#fff;text-align:center;display:flex;flex-direction:column;justify-content:center;border-radius:5px}.btn{margin:0 auto;background-color:#ff5c00;border-radius:2em;text-transform:uppercase;letter-spacing:.1em;width:140px;height:40px;border:none;color:#fff;text-align:center}.btn:hover{background-color:#e65300}body,html{width:auto;height:100%}body{display:flex;flex-direction:column;background:#fff}.nav{display:flex;justify-content:space-between;position:relative;padding-bottom:0;align-items:center;width:100%;margin-top:30px}.nav .cart{display:flex;justify-content:center;align-items:center}.nav .cart .cart__img{width:35px;height:35px;margin:0 20px}.nav .cart .cart__counter{position:absolute;margin-top:6px}.nav .logo{display:flex;justify-content:center;align-items:center;margin:0 20px}.nav .logo .logo__img{width:90px;height:auto}.information{text-align:center;margin:40px 30px;font-weight:300}.information .information__title{font-family:"Open Sans",sans-serif;font-weight:500;margin:25px 0 25px 0}.information .information__text{font-weight:300;font-family:"Open Sans",sans-serif;line-height:1.4}.product{display:flex;flex-direction:column;justify-content:center;background:#ebebeb;width:auto;height:100%;padding:25px}.product .product__card .product__price{color:#ff5c00}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],f=i[l]||0,u="".concat(l," ").concat(f);i[l]=f+1;var d=n(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(t[d].references++,t[d].updater(p)):t.push({identifier:u,updater:o(p,r),references:1}),a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var f=n(i[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function g(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return m[e](n,n.exports,g),n.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var t=g.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),e=g(379),t=g.n(e),n=g(795),r=g.n(n),o=g(569),i=g.n(o),a=g(565),c=g.n(a),s=g(216),l=g.n(s),f=g(589),u=g.n(f),d=g(384),(p={}).styleTagTransform=u(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),t()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals,g.p,g.p,g.p,g.p,g.p})();