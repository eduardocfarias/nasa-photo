(function(e){function n(n){for(var r,i,c=n[0],u=n[1],l=n[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={1:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"79d7852a",3:"909b8d18",4:"efd95bd9",5:"480c69b1"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var p=l;a.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);t("ddb0"),t("5319"),t("7d6e"),t("e54f"),t("985d"),t("31cd");var r=t("2b0e"),o=t("1f91"),a=t("42d2"),i=t("b05d");r["a"].use(i["a"],{config:{brand:{primary:"#0b3e91",secondary:"#26A69A",accent:"#9C27B0",dark:"#1d1d1d",positive:"#21BA45",negative:"#fc3e21",info:"#31CCEC",warning:"#F2C037"}},lang:o["a"],iconSet:a["a"]});var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},u=[],l={name:"App"},s=l,p=t("2877"),d=Object(p["a"])(s,c,u,!1,null,null,null),f=d.exports,h=t("8c4f");const v=[{path:"/",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"713b")),children:[{path:"",name:"home",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"8b24"))},{path:"/rovers",name:"rovers",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"5a4e"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"e51e"))}];var b=v;r["a"].use(h["a"]);var m=function(){const e=new h["a"]({scrollBehavior:()=>({x:0,y:0}),routes:b,mode:"hash",base:""});return e},w=async function(){const e="function"===typeof m?await m({Vue:r["a"]}):m,n={router:e,render:e=>e(f),el:"#q-app"};return{app:n,router:e}},y=t("9483");Object(y["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var g=t("a925"),P={failed:"Action failed",success:"Action was successful"},j={"en-us":P};r["a"].use(g["a"]);const O=new g["a"]({locale:"en-us",fallbackLocale:"en-us",messages:j});var x=({app:e})=>{e.i18n=O},C=t("bc3a"),_=t.n(C);const k=_.a.create({baseURL:"https://api.nasa.gov/mars-photos/api/v1/",params:{api_key:"TU6FE4MCPECh0DYgoLrervlGyavPM85fpUzyLfyH"}});r["a"].prototype.$axios=k,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(0).then(t.t.bind(null,"a0db",7));const A="";async function S(){const{app:e,router:n}=await w();let t=!1;const o=e=>{t=!0;const r=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,""),i=[x,void 0];for(let u=0;!1===t&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:n,Vue:r["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:A})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==t&&new r["a"](e)}S()},"31cd":function(e,n,t){}});