(()=>{var t={568:t=>{!function(t,e,n,r,i){if("customElements"in n)i();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(i);var o=n.AWAITING_WEB_COMPONENTS_POLYFILL=l();o.then(i);var a=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(a).then((function(){o.isDone=!0,o.exec()})):c(s).then((function(){c(a).then((function(){o.isDone=!0,o.exec()}))}))}function l(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function c(t){var e=l(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var e;window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var o=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[r].concat(a).concat([o]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e),n.d(e,"BoxIconElement",(function(){return w}));var r,i,o,a,s=n(1),l=n.n(s),c=n(2),d=n.n(c),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=(i=(r=Object).getPrototypeOf||function(t){return t.__proto__},o=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},a="object"===("undefined"==typeof Reflect?"undefined":p(Reflect))?Reflect.construct:function(t,e,n){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),o(new r,n.prototype)},function(t){var e=i(t);return o(t,o((function(){return a(e,arguments,i(this).constructor)}),e))}),m=window,f={},b=document.createElement("template"),g=function(){return!!m.ShadyCSS};b.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+l.a+"\n"+d.a+'\n</style>\n<div id="icon"></div>';var w=u(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(b.content,!0)),g()&&m.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),h(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&f[n]||(f[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()}))),f[n]}},{key:"define",value:function(t){t=t||this.tagName,g()&&m.ShadyCSS.prepareTemplate(b,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),h(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){g()&&m.ShadyCSS.styleElement(this)}}]),e}());e.default=w,w.define()}])},t.exports=e()}))},195:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n.div-todo {\n\tdisplay: flex;\n\tbackground-color: bisque;\n}\n.div-izquierda {\n\tdisplay: flex;\n\twidth: 25%;\n}\n.div-centro {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 50%;\n}\n.div-derecha {\n\tdisplay: flex;\n\twidth: 25%;\n}\n\n@media (max-width: 600px) {\n\t.div-todo {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tbackground-color: bisque;\n\t}\n\t.div-izquierda {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\twidth: 90%;\n\t}\n\t.div-centro {\n\t\twidth: 90%;\n\t}\n\t.contenedoropinion {\n\t\twidth: 90%;\n\t}\n\t.contenedorpub {\n\t\twidth: 90%;\n\t}\n\t.div-derecha {\n\t\twidth: 90%;\n\t\tjustify-content: center;\n\t}\n}\n",""]);const s=a},358:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n\n.csstitulo {\n\tcolor: rgb(0, 0, 0);\n\tmargin: 20px;\n}\n\n.wrapper-tarjeta {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 400px;\n\theight: auto;\n\tbackground-color: white;\n\tborder-radius: 10%;\n\tmargin-top: 40px;\n}\n\n.ocultar {\n\tdisplay: none;\n}\n\n.mostrar {\n\tdisplay: block;\n}\n#btntoggle {\n\twidth: 100px;\n\theight: 40px;\n\tborder-color: transparent;\n\tbackground-color: white;\n\tborder-radius: 20px;\n\tmargin-left: 20px;\n\tmargin-top: 10px;\n}\n\n@media (max-width: 600px) {\n\t.wrapper-tarjeta {\n\t\twidth: 100%;\n\t}\n}\n",""]);const s=a},238:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,".wrapper-ficha {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n@media (max-width: 600px) {\n\t.wrapper-ficha {\n\t\tflex-wrap: wrap;\n\t\tmargin-top: 2rem;\n\t}\n}\n",""]);const s=a},886:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,".wrapper-opinion {\n\tbackground-color: white;\n\theight: 11rem;\n\twidth: 38rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 20px;\n\tmargin-bottom: 20px;\n\tmargin-top: 10px;\n}\n\n@media (max-width: 600px) {\n\t.wrapper-opinion {\n\t\twidth: 100%;\n\t\tflex-shrink: 1;\n\t}\n}\n",""]);const s=a},199:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,".fotopfp {\n\tmargin-left: 10px;\n\theight: 70px;\n\twidth: 70px;\n\tborder-radius: 40%;\n}\n.header {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n.publicacion {\n\tbackground-color: black;\n\theight: 20rem;\n\tdisplay: flex;\n}\n#publicacion {\n\tbackground-color: rgb(228, 228, 228);\n\tborder-radius: 20px;\n}\n#seguir2 {\n\tbackground-color: rgb(255, 187, 224);\n\tmargin-right: 15px;\n\tborder-color: transparent;\n\twidth: 85px;\n\theight: 30px;\n\tborder-radius: 30px;\n}\n.deshabilitar {\n\tbackground-color: rgb(212, 101, 162) !important;\n\tcolor: rgb(255, 255, 255);\n}\n.margintexto {\n\tmargin-left: 10px;\n\tpadding-bottom: 15px;\n}\n\n.habilitar {\n\tbackground-color: rgb(255, 187, 224) !important;\n\tcolor: black;\n}\n.fotopublic {\n\theight: 500px;\n\twidth: 500px;\n}\nimg {\n\twidth: 100%;\n\tmax-width: 600px;\n}\n.footer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n@media (max-width: 600px) {\n\t.fotopublic {\n\t\twidth: 100%;\n\t\tobject-fit: contain;\n\t}\n}\n",""]);const s=a},2:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n.wrapper-publicacion {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 38rem;\n\tpadding-top: 30px;\n\tborder-radius: 30px;\n\theight: auto;\n\tbackground-color: white;\n}\n@media (max-width: 600px) {\n\t.wrapper-publicacion {\n\t\twidth: 100%;\n\t}\n}\n",""]);const s=a},662:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,".fotopfp {\n\tmargin-left: 10px;\n\theight: 70px;\n\twidth: 70px;\n\tborder-radius: 40%;\n\tmargin-right: 10px;\n}\naderopinion {\n\tdisplay: flex;\n\n\twidth: 22rem;\n\tmargin-bottom: 20px;\n}\n.textopinion {\n\tdisplay: flex;\n}\n#write {\n\tborder-color: transparent;\n\tmargin-right: 20px;\n\twidth: 15rem;\n}\n#post {\n\tbackground-color: rgb(255, 187, 224);\n\tmargin-right: 15px;\n\tborder-color: transparent;\n\twidth: 85px;\n\theight: 30px;\n\tborder-radius: 30px;\n}\n.deshabilitar {\n\tbackground-color: rgb(212, 101, 162) !important;\n\tcolor: rgb(255, 255, 255);\n}\n.headeropinion {\n\tdisplay: flex;\n\tmargin-bottom: 10px;\n}\n\n.habilitar {\n\tbackground-color: rgb(255, 187, 224) !important;\n\tcolor: black;\n}\n.linea {\n\twidth: 100%;\n\theight: 5px;\n\tbackground-color: pink;\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n\tborder-radius: 20px;\n}\n\n@media (max-width: 600px) {\n\t.headeropinion {\n\t\twidth: 100%;\n\t}\n\t#write {\n\t\twidth: auto;\n\t}\n}\n",""]);const s=a},826:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,"body {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: Arial, sans-serif;\n\tdisplay: flex;\n\tbackground-color: #ffdbd1;\n}\n\n.etiqueta {\n\tcolor: #fa9ebc;\n}\n\n.texto {\n\tcolor: #570228;\n\tmargin: 0;\n\tfont-size: 15pt;\n}\n\n.sidebar {\n\tbackground-color: white;\n\tpadding: 20px;\n\tbox-sizing: border-box;\n\theight: auto;\n\tmargin-right: 30px;\n\tmargin-top: 50px;\n\tborder-radius: 30px;\n\twidth: 13rem;\n}\n\n.sidebar h2,\n.follow h2 {\n\tmargin-top: 0;\n}\n\n.sidebar ul,\n.follow ul {\n\tlist-style-type: none;\n\tpadding: 0;\n}\n\n.sidebar ul li,\n.follow ul li {\n\tmargin-bottom: 10px;\n}\n\n.sidebar ul li a,\n.follow ul li a {\n\ttext-decoration: none;\n}\n\n.content {\n\tflex: 1;\n\tpadding: 20px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start; /* Ajuste para alinear el contenido arriba */\n}\n\n.seguir {\n\tbackground-color: #fa9ebc;\n\tcolor: white;\n\tborder: none;\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n}\n\n.pequeno {\n\tfont-size: small;\n}\n\n.sugerencias {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.foto {\n\twidth: 30px; /* Ajusta el tamaño de la foto según sea necesario */\n\theight: 30%; /* Ajusta el tamaño de la foto según sea necesario */\n\tpadding: 0 4% 0% 0%;\n}\n\n.slider {\n\tdisplay: flex;\n\toverflow-x: auto; /* Permite desplazarse horizontalmente */\n}\n\n.slide {\n\tflex: 0 0 auto;\n\tmargin-right: 10px; /* Espacio entre las imágenes */\n}\n\n.menuiconos {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n@media (max-width: 600px) {\n\t* {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tbox-sizing: border-box;\n\t}\n\n\ta {\n\t\tdisplay: none;\n\t}\n\tli {\n\t\tpadding-right: 1rem;\n\t}\n\ti {\n\t\tfont-size: 2rem;\n\t}\n\t.menuiconos {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tmargin-top: 12px;\n\t}\n\t.sidebar {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tflex-direction: column;\n\t\twidth: 100%;\n\t\tmargin-right: 0px;\n\t\tmargin-top: 1rem;\n\t}\n}\n",""]);const s=a},918:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,".pfp {\n\theight: 70px;\n\twidth: 70px;\n\tborder-radius: 40%;\n\tpadding: 0 4% 0% 0%;\n\tborder-radius: 50%;\n\tmargin: 10px;\n}\n\n.slider {\n\tdisplay: flex;\n\toverflow-x: auto; /* Permite desplazarse horizontalmente */\n}\n\n.slide {\n\tflex: 0 0 auto;\n\tmargin-right: 10px; /* Espacio entre las imágenes */\n}\n\n.stories {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n",""]);const s=a},824:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),i=n.n(r),o=n(314),a=n.n(o)()(i());a.push([t.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n#whoto-container {\n\tmargin-bottom: 10px;\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n#names {\n\tflex-grow: 10;\n\tdisplay: flex;\n\tmargin-left: 10px;\n\theight: 60px;\n\n\tflex-direction: column;\n\tjustify-content: space-around;\n}\n.foto {\n\tmargin-left: 10px;\n\theight: 70px;\n\twidth: 70px;\n\tborder-radius: 40%;\n}\n#seguir {\n\tbackground-color: rgb(255, 187, 224);\n\tmargin-right: 15px;\n\tborder-color: transparent;\n\twidth: 85px;\n\theight: 30px;\n\tborder-radius: 50px;\n}\n.deshabilitar {\n\tbackground-color: rgb(212, 101, 162) !important;\n\tcolor: rgb(255, 255, 255);\n}\n\n.habilitar {\n\tbackground-color: rgb(255, 187, 224) !important;\n\tcolor: black;\n}\n",""]);const s=a},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t,e=n(824);!function(t){t.image="image",t.name="name",t.arroba="arroba"}(t||(t={}));class r extends HTMLElement{user(t,e){throw new Error("Method not implemented.")}constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,name:null,arroba:null})}followprofile(){console.log("123",this),"UNFOLLOW"==this.innerHTML?(this.innerHTML="FOLLOW",this.className="habilitar"):(this.innerHTML="UNFOLLOW",this.className="deshabilitar")}connectedCallback(){var t,e;this.render(),null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#seguir"))||void 0===e||e.addEventListener("click",this.followprofile)}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <div id="whoto-container">\n      <img class="foto" src="${this.image}">\n      <div id="names">\n      <p>${this.name}</p>\n      <p>${this.arroba}</p>\n      </div>\n\t\t\t<button id="seguir">FOLLOW</button>\n      </div>\n      `);const n=this.ownerDocument.createElement("style");n.innerHTML=e.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}window.customElements.define("crear-whotofollow",r);const i=[{image:"https://e00-telva.uecdn.es/assets/multimedia/imagenes/2024/02/18/17082291054247.jpg",name:"Iam The Real Coquette",arroba:"@IAmTheRealCoquette"},{image:"https://eldiario.com/wp-content/uploads/2024/01/Coquette-1-.jpg",name:"Charlie morningstar",arroba:"@charliemorningstar"},{image:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg",name:"How To bows",arroba:"@howtobows"},{image:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg",name:"How To bows",arroba:"@howtobows"},{image:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg",name:"How To bows",arroba:"@howtobows"},{image:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg",name:"How To bows",arroba:"@howtobows"}],o=[{user:"LadyNoir",userpfp:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg",image:"https://i.pinimg.com/564x/2a/b9/2d/2ab92d8d2861b73ce4af0f7f9c341ada.jpg",likes:"2040"},{user:"AventurineSimp",userpfp:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg",image:"https://i.pinimg.com/736x/88/69/e1/8869e10a10e7e658f082d4f1a49aa2c5.jpg",likes:"488"}],a=[{userpfp:"https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg"}],s=[{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.5.1/CHAMPION_SKIN/51039/ICON",name:"Caitlyn"},{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.6.1/CHAMPION_SKIN/235046/ICON",name:"Senna"},{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.6.1/CHAMPION_SKIN/145040/ICON",name:"Kaisa"},{image:"https://preview.redd.it/lovestruck-lux-port-mission-v0-2vwnvbfsnfac1.jpeg?auto=webp&s=161092691f8478293c7b88da9f08ac2848f167e6",name:"Lux"},{image:"https://i1.sndcdn.com/artworks-DzKaeKvz64CglhKq-O7Jy1w-t500x500.jpg",name:"Seraphine"},{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.5.1/CHAMPION_SKIN/134044/ICON",name:"Syndra"},{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.5.1/CHAMPION_SKIN/134044/ICON",name:"Syndra"},{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.5.1/CHAMPION_SKIN/134044/ICON",name:"Syndra"},{image:"https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.5.1/CHAMPION_SKIN/134044/ICON",name:"Syndra"}];var l=n(358);class c extends HTMLElement{constructor(){super(),this.profiles=[],this.showless=!1,this.attachShadow({mode:"open"})}mostrartoggle(){let t=0;this.profiles.forEach((e=>{this.showless?(t++,t>3&&(e.className="ocultar"),this.shadowRoot.querySelector("#btntoggle").innerHTML="Show More"):(e.className="mostrar",this.shadowRoot.querySelector("#btntoggle").innerHTML="Show Less")})),this.showless=!this.showless}connectedCallback(){var e,n;i.forEach((e=>{const n=this.ownerDocument.createElement("crear-whotofollow");n.setAttribute(t.image,e.image),n.setAttribute(t.name,e.name),n.setAttribute(t.arroba,e.arroba),this.profiles.push(n)})),this.render(),null===(n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#btntoggle"))||void 0===n||n.addEventListener("click",(()=>{this.mostrartoggle()}))}attributeChangedCallback(t,e,n){this.render()}render(){var t,e;let n=0;if(this.shadowRoot){const e=this.ownerDocument.createElement("div");e.className="wrapper-tarjeta";const r=this.ownerDocument.createElement("h2");r.innerHTML="Who to follow",r.className="csstitulo",e.appendChild(r),this.profiles.forEach((t=>{n++,n>3&&(t.className="ocultar"),e.appendChild(t)}));const i=this.ownerDocument.createElement("button");i.innerHTML="Show More",i.setAttribute("id","btntoggle"),e.appendChild(i),null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}const r=this.ownerDocument.createElement("style");r.innerHTML=l.A,null===(e=this.shadowRoot)||void 0===e||e.appendChild(r)}}window.customElements.define("tarjeta-whotofollow",c);var d,p=n(199);n(568),function(t){t.user="user",t.userpfp="userpfp",t.image="image",t.likes="likes"}(d||(d={}));class h extends HTMLElement{constructor(){super(),this.megusta=!1,this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({user:null,userpfp:null,image:null,likes:null})}followprofile(){"UNFOLLOW"==this.innerHTML?(this.innerHTML="FOLLOW",this.className="habilitar"):(this.innerHTML="UNFOLLOW",this.className="deshabilitar")}corazontoggle(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#corazon");this.megusta?null==e||e.setAttribute("type","regular"):null==e||e.setAttribute("type","solid"),this.megusta=!this.megusta}favoritotoggle(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#favorito");this.megusta?null==e||e.setAttribute("type","regular"):null==e||e.setAttribute("type","solid"),this.megusta=!this.megusta}connectedCallback(){var t,e,n,r,i,o;this.render(),null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#seguir2"))||void 0===e||e.addEventListener("click",this.followprofile),null===(r=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("#corazon"))||void 0===r||r.addEventListener("click",(()=>{this.corazontoggle()})),null===(o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("#favorito"))||void 0===o||o.addEventListener("click",(()=>{this.favoritotoggle()}))}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){var t,e;if(this.shadowRoot){this.shadowRoot.innerHTML='\n\t\t\t<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"><\/script>';const e=this.ownerDocument.createElement("div");e.setAttribute("id","publicacion");const n=this.ownerDocument.createElement("div");n.className="header";const r=this.ownerDocument.createElement("img");r.className="fotopfp",r.setAttribute("src",this.userpfp);const i=this.ownerDocument.createElement("h3");i.innerHTML=this.user;const o=this.ownerDocument.createElement("button");o.setAttribute("id","seguir2"),o.innerHTML="FOLLOW",n.appendChild(r),n.appendChild(i),n.appendChild(o);const a=this.ownerDocument.createElement("img");a.className="fotopublic",a.setAttribute("src",this.image);const s=this.ownerDocument.createElement("div");s.className="footer";const l=this.ownerDocument.createElement("box-icon");l.setAttribute("id","corazon"),l.setAttribute("name","heart"),l.setAttribute("size","md"),l.setAttribute("color","red");const c=this.ownerDocument.createElement("box-icon");c.setAttribute("id","favorito"),c.setAttribute("name","message-alt"),c.setAttribute("size","md"),c.setAttribute("color","yellow"),s.appendChild(l),s.appendChild(c);const d=this.ownerDocument.createElement("p");d.className="margintexto",d.innerHTML=this.likes+" Likes",e.appendChild(n),e.appendChild(a),e.appendChild(s),e.appendChild(d),null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}const n=this.ownerDocument.createElement("style");n.innerHTML=p.A,null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)}}window.customElements.define("crear-publicacion",h);var u=n(2);class m extends HTMLElement{constructor(){super(),this.profiles=[],this.attachShadow({mode:"open"})}connectedCallback(){o.forEach((t=>{var e;const n=this.ownerDocument.createElement("crear-publicacion");n.setAttribute(d.user,t.user),n.setAttribute(d.userpfp,t.userpfp),n.setAttribute(d.image,t.image),n.setAttribute(d.likes,t.likes),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),this.profiles.push(n)})),this.render()}attributeChangedCallback(t,e,n){this.render()}render(){var t,e;if(this.shadowRoot){const n=this.ownerDocument.createElement("div");n.className="wrapper-publicacion",this.profiles.forEach((t=>{n.appendChild(t)})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const r=this.ownerDocument.createElement("style");r.innerHTML=u.A,null===(e=this.shadowRoot)||void 0===e||e.appendChild(r)}}}window.customElements.define("public-wrapper",m);var f,b=n(662);!function(t){t.userpfp="userpfp"}(f||(f={}));class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({userpfp:null})}onClickPost(){"POSTED"==this.innerHTML?(this.innerHTML="POST",this.className="habilitar"):(this.innerHTML="POSTED",this.className="deshabilitar")}connectedCallback(){var t,e;this.render(),null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#post"))||void 0===e||e.addEventListener("click",this.onClickPost)}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\n\t\t\t\t<div class="headeropinion">\n\t\t\t\t\t<img class="fotopfp" src="${this.userpfp}" />\n          <h2>What is happening?</h2>\n        </div>\n\n        <div class="textopinion">\n        <input id="write" type="text" placeholder="write" />\n        <button id="post">POST</button>\n\n        </div>\n\t\t\t\t<div class="linea"></div>\n      `);const e=this.ownerDocument.createElement("style");e.innerHTML=b.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}window.customElements.define("crear-opinion",g);var w=n(886);class x extends HTMLElement{constructor(){super(),this.opinions=[],this.attachShadow({mode:"open"})}connectedCallback(){a.forEach((t=>{const e=this.ownerDocument.createElement("crear-opinion");e.setAttribute(f.userpfp,t.userpfp),this.opinions.push(e)})),this.render()}attributeChangedCallback(t,e,n){this.render()}render(){var t,e;if(this.shadowRoot){const n=this.ownerDocument.createElement("div");n.className="wrapper-opinion",this.opinions.forEach((t=>{n.appendChild(t)})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const r=this.ownerDocument.createElement("style");r.innerHTML=w.A,null===(e=this.shadowRoot)||void 0===e||e.appendChild(r)}}}window.customElements.define("wrapper-opinion",x);var v,y=n(826);!function(t){t.coquette="coquette",t.inicio="inicio",t.busqueda="busqueda",t.mensajes="mensajes",t.inotificaciones="notificaciones",t.crear="crear",t.perfil="perfil"}(v||(v={}));class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({coquette:null,inicio:null,busqueda:null,mensajes:null,notificaciones:null,crear:null,perfil:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t<style>\n\t\t\t${y.A}\n\t\t\t</style>\n\t\t\t<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>\n\t\t\t<div class="sidebar">\n\t\t\t\t<h2 class="etiqueta">Coquette</h2>\n\t\t\t\t<ul class="menuiconos">\n\t\t\t\t\t<li><i class="bx bx-home-alt"></i><a class="texto" href="index.html">Inicio</a></li>\n\t\t\t\t\t<li><i class="bx bx-search-alt-2"></i> <a class="texto" href="#">Búsqueda</a></li>\n\t\t\t\t\t<li><i class="bx bx-message-square-detail"></i> <a class="texto" href="#">Mensajes</a></li>\n\t\t\t\t\t<li><i class="bx bx-bell"></i> <a class="texto" href="#">Notificaciones</a></li>\n\t\t\t\t\t<li><i class="bx bxs-plus-circle"></i> <a class="texto" href="#">Crear</a></li>\n\t\t\t\t\t<li><i class="bx bxs-user"></i> <a class="texto" href="#">Perfil</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n          `);const e=this.ownerDocument.createElement("style");e.innerHTML=y.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("card-inicio",k);var C,L=n(918);!function(t){t.image="image",t.name="name"}(C||(C={}));class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,name:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\n    <div class="stories">\n\n\t<img class="pfp" src="${this.image}">\n\n\t  <p>${this.name}</p>\n\n\n\t</div>\n\n\n    </div>\n          `);const e=this.ownerDocument.createElement("style");e.innerHTML=L.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}}customElements.define("story-card",E);const M=E;var A=n(238);class O extends HTMLElement{constructor(){super(),this.storiesArray=[],this.attachShadow({mode:"open"})}connectedCallback(){s.forEach((t=>{const e=new M;e.setAttribute(C.image,t.image),e.setAttribute(C.name,t.name),this.storiesArray.push(e)})),this.render()}attributeChangedCallback(t,e,n){this.render()}render(){var t,e;if(this.shadowRoot){const e=this.ownerDocument.createElement("div");e.className="wrapper-ficha",this.storiesArray.forEach((t=>{e.appendChild(t)})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}const n=this.ownerDocument.createElement("style");n.innerHTML=A.A,null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)}}window.customElements.define("card-stories",O);var S=n(195);class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){this.render()}render(){var t;if(this.shadowRoot){const e=this.ownerDocument.createElement("div");e.className="div-todo";const n=this.ownerDocument.createElement("div");n.className="div-centro",this.tarjeta=this.ownerDocument.createElement("tarjeta-whotofollow"),this.tarjeta2=this.ownerDocument.createElement("public-wrapper"),this.tarjeta2.className="contenedorpub",this.tarjeta3=this.ownerDocument.createElement("wrapper-opinion"),this.tarjeta3.className="contenedoropinion",this.tarjeta4=this.ownerDocument.createElement("card-inicio"),this.tarjeta5=this.ownerDocument.createElement("card-stories"),n.appendChild(this.tarjeta5),n.appendChild(this.tarjeta3),n.appendChild(this.tarjeta2);const r=this.ownerDocument.createElement("div");r.className="div-izquierda",r.appendChild(this.tarjeta4);const i=this.ownerDocument.createElement("div");i.className="div-derecha",i.appendChild(this.tarjeta);const o=this.ownerDocument.createElement("style");o.innerHTML=S.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(o),e.appendChild(r),e.appendChild(n),e.appendChild(i),this.shadowRoot.appendChild(e)}}}window.customElements.define("app-container",j)})()})();