if(!self.define){let e,t={};const o=(o,s)=>(o=new URL(o+".js",s).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(t[i])return;let n={};const c=e=>o(e,i),l={module:{uri:i},exports:n,require:c};t[i]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"molly-math.js",revision:"1980855ab0fc9b05871327a95b8b8153"}],{})}));
