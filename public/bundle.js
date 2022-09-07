(()=>{"use strict";var r={402:(r,n,e)=>{e.d(n,{Z:()=>s});var o=e(81),t=e.n(o),i=e(645),a=e.n(i)()(t());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat&family=Roboto:wght@100;300;400;700&family=Raleway&display=swap);"]),a.push([r.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --color-primary: #F3F3F3;\r\n    --color-secondary: rgb(204, 31, 0);\r\n    --color-nav-underline: black;\r\n    --font-primary: 'Raleway', sans-serif;\r\n    --font-secondary: 'Lobster', cursive;\r\n    --border-seprator: 1px solid rgb(224, 224, 224);\r\n    --color-gradient: linear-gradient(68.4deg, rgb(34, 0, 255), rgb(22, 2, 91) 100.2%);\r\n    --border-radius-btns: 0.5em;\r\n    --font-size-small: 0.8rem;\r\n    --font-size-large: 1.2rem;\r\n}\r\n\r\nbody {\r\n    font-family: var(--font-primary);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom: var(--border-seprator);\r\n    position: sticky;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n    padding: 0.5em;\r\n    z-index: 999;\r\n}\r\n\r\n.sidebar-opener,\r\n.sidebar-closer {\r\n    margin-right: 1em;\r\n    font-size: 1.5rem;\r\n    position: absolute;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    padding: 0.5em;\r\n}\r\n\r\n.sidebar-opener {\r\n    right: 0;\r\n}\r\n\r\n.sidebar-closer {\r\n    top: 0.2em;\r\n    font-size: 2.8rem;\r\n    left: 0.2em;\r\n}\r\n\r\n.sidebar-backdrop {\r\n    display: none;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 5;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.nav-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    list-style-type: none;\r\n    padding: 6em 1.5em;\r\n    background-color: #F3F3F3;\r\n    width: 60%;\r\n    transform: translateX(100%);\r\n    transition: all 0.5s;\r\n    z-index: 999;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.nav-logo {\r\n    font-family: var(--font-secondary);\r\n    font-size: 2rem;\r\n    margin-left: .5em;\r\n}\r\n\r\n.nav-item {\r\n    position: relative;\r\n    font-size: 1.3rem;\r\n    width: 100%;\r\n    margin: 0.8em 0.5em;\r\n}\r\n\r\n.nav-link {\r\n    display: block;\r\n}\r\n\r\n.sidebar-btns {\r\n    position: absolute;\r\n    width: 100%;\r\n    gap: 1em;\r\n    bottom: 1em;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.nav-btn {\r\n    width: 90%;\r\n    border: 2px solid black;\r\n    border-radius: var(--border-radius-btns);\r\n    padding: 1em;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.nav-item::before {\r\n    content: '';\r\n    width: 0%;\r\n    bottom: -2px;\r\n    border-radius: 999px;\r\n    height: 2px;\r\n    background-color: var(--color-nav-underline);\r\n    position: absolute;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.nav-item:hover::before {\r\n    content: '';\r\n    width: 13%;\r\n    bottom: -2px;\r\n    height: 2px;\r\n    background-color: var(--color-nav-underline);\r\n    position: absolute;\r\n}\r\n\r\n.active-nav-item::before {\r\n    content: '';\r\n    width: 13%;\r\n    height: 2px;\r\n    background-color: var(--color-nav-underline);\r\n    position: absolute;\r\n}\r\n\r\n#hero {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 83vh;\r\n    padding: 1em;\r\n    text-align: center;\r\n}\r\n\r\n#hero h4 {\r\n    color: gray;\r\n    font-size: 1.2rem;\r\n    font-family: var(--font-secondary);\r\n    margin: .5em 0;\r\n    font-weight: 300;\r\n}\r\n\r\n#hero h1 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#hero p {\r\n    color: gray;\r\n    font-size: 0.8rem;\r\n    margin: 1em 0;\r\n}\r\n\r\n.hero-img-container {\r\n    position: relative;\r\n    width: 80%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-img {\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.hero-img-back {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    position: absolute;\r\n    z-index: -1;\r\n    border-radius: 500px 500px 0 0;\r\n    top: 50px;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    padding: 1em 4em;\r\n    border-radius: var(--border-radius-btns);\r\n    font-family: var(--font-primary);\r\n    cursor: pointer;\r\n}\r\n\r\n.hero-info button {\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: bold;\r\n    margin-top: 1em;\r\n    width: 100%;\r\n}\r\n\r\n.hero-statics {\r\n    display: none;\r\n}\r\n\r\n.gradient-bg {\r\n    background-image: var(--color-gradient);\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    color: transparent;\r\n}\r\n\r\n#features {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    grid-auto-rows: 170px;\r\n    justify-items: center;\r\n    gap: 1em;\r\n    width: 100%;\r\n    padding: 1em;\r\n    margin: 1em 0;\r\n}\r\n\r\n.feature {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    width: 90%;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    padding: 1em 2em;\r\n    border: 1px solid gray;\r\n    overflow: hidden;\r\n}\r\n\r\n.feature p {\r\n    font-size: var(--font-size-small);\r\n}\r\n\r\n.feature-icon {\r\n    font-size: 2rem;\r\n}\r\n\r\n.feature-header {\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n@media only screen and (min-width:768px) {\r\n    a {\r\n        text-decoration: none;\r\n        color: black;\r\n    }\r\n\r\n    nav {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 1em 6em;\r\n        border-bottom: var(--border-seprator);\r\n        position: sticky;\r\n        top: 0;\r\n        right: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .nav-items {\r\n        display: flex;\r\n        list-style-type: none;\r\n        gap: 1.5em;\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .nav-logo {\r\n        font-family: var(--font-secondary);\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .nav-item {\r\n        position: relative;\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .nav-item::before {\r\n        content: '';\r\n        width: 0%;\r\n        bottom: -2px;\r\n        border-radius: 999px;\r\n        height: 2px;\r\n        background-color: var(--color-nav-underline);\r\n        position: absolute;\r\n        transition: all 0.3s;\r\n    }\r\n\r\n    .nav-item:hover::before {\r\n        content: '';\r\n        width: 60%;\r\n        bottom: -2px;\r\n        height: 2px;\r\n        background-color: var(--color-nav-underline);\r\n        position: absolute;\r\n    }\r\n\r\n    .active-nav-item::before {\r\n        content: '';\r\n        width: 60%;\r\n        height: 2px;\r\n        background-color: var(--color-nav-underline);\r\n        position: absolute;\r\n    }\r\n\r\n    .hero {\r\n        display: flex;\r\n        height: 89vh;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .hero h4 {\r\n        color: gray;\r\n        font-size: 1.2rem;\r\n        font-family: var(--font-secondary);\r\n        margin: .5em 0;\r\n        font-weight: 300;\r\n    }\r\n\r\n    .hero h1 {\r\n        font-size: 3rem;\r\n        font-family: var(--font-primary);\r\n    }\r\n\r\n    .hero p {\r\n        font-family: var(--font-primary);\r\n        color: gray;\r\n        margin: 1em 0;\r\n    }\r\n\r\n    .hero-img-container {\r\n        order: 2;\r\n        position: relative;\r\n        margin-top: 2em;\r\n        width: 50%;\r\n        height: 85%;\r\n        overflow: hidden;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    .hero-img-back {\r\n        width: 60%;\r\n        height: 85%;\r\n        background-color: black;\r\n        position: absolute;\r\n        z-index: -1;\r\n        border-radius: 500px 500px 0 0;\r\n        top: 100px;\r\n    }\r\n\r\n    .btn {\r\n        border: none;\r\n        outline: none;\r\n        background-color: transparent;\r\n        padding: 1em 4em;\r\n        border-radius: 0.5em;\r\n        font-family: var(--font-primary);\r\n        cursor: pointer;\r\n    }\r\n\r\n    .hero-info button {\r\n        background-color: black;\r\n        color: white;\r\n        font-weight: bold;\r\n        margin-top: 1em;\r\n    }\r\n}",""]);const s=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<r.length;c++){var d=[].concat(r[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var i={},a=[],s=0;s<r.length;s++){var l=r[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var f=e(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(m);else{var u=t(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var i=o(r=r||[],t=t||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var l=o(r,t),c=0;c<i.length;c++){var d=e(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var i=n[o]={id:o,exports:{}};return r[o](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),o=e(795),t=e.n(o),i=e(569),a=e.n(i),s=e(565),l=e.n(s),c=e(216),d=e.n(c),p=e(589),f=e.n(p),m=e(402),u={};u.styleTagTransform=f(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=t(),u.insertStyleElement=d(),n()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;var b=document.querySelector(".nav-items"),h=document.querySelector(".sidebar-opener"),g=document.querySelector(".sidebar-closer"),v=document.querySelector(".sidebar-backdrop"),y=document.body;function x(){v.style.display="none",b.style.transform="translateX(100%)",y.style.overflowY="unset"}h.addEventListener("click",(function(){v.style.display="block",b.style.transform="translateX(0)",y.style.overflowY="hidden"})),[g,v].forEach((function(r){r.addEventListener("click",x)}))})()})();