(()=>{var e={5219:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(6792),a=r(1054),o=r(5222),i=r(6185),s=r(9385),l=r(9040),u=(r(5004),r(2629));function f(e){var t=e.navigation;return(0,u.jsxs)(s.default,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(a.default,{children:"Home Screen"}),(0,u.jsx)(l.default,{title:"Go to Details",onPress:function(){return t.navigate("Details",{name:"Jane Doe",itemId:Math.floor(100*Math.random()),otherParam:"anything you want here"})}}),(0,u.jsx)(l.default,{title:"Go back",onPress:function(){return t.goBack()}}),(0,u.jsx)(l.default,{title:"Go back to first screen in stack",onPress:function(){return t.popToTop()}})]})}n.default.create({});function c(e){var t=e.route,r=e.navigation,n=t.params,o=n.itemId,i=n.otherParam;return(0,u.jsxs)(s.default,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(a.default,{children:"Details Screen"}),(0,u.jsxs)(a.default,{children:["itemId: ",JSON.stringify(o)]}),(0,u.jsxs)(a.default,{children:["otherParam: ",JSON.stringify(i)]}),(0,u.jsx)(l.default,{title:"Go to Home",onPress:function(){return r.navigate("Home")}}),(0,u.jsx)(l.default,{title:"Go to Details ... again",onPress:function(){return r.push("Details",{name:"Jane Doe",itemId:Math.floor(100*Math.random()),otherParam:"anything you want here"})}}),(0,u.jsx)(l.default,{title:"Go back",onPress:function(){return r.goBack()}}),(0,u.jsx)(l.default,{title:"Go back to first screen in stack",onPress:function(){return r.popToTop()}})]})}n.default.create({});var d=r(6769).createURL("/"),h=(0,i.default)(),m=h.Navigator,g=h.Screen;function p(){var e={prefixes:[d,"https://anthonydweb.github.io/gameraid"],config:{screens:{Home:"gameraid",Details:"gameraid/Details/:itemId/:name",Profile:"gameraid/user"}}};return(0,u.jsx)(o.default,{linking:e,fallback:(0,u.jsx)(a.default,{children:"Loading..."}),children:(0,u.jsxs)(m,{children:[(0,u.jsx)(g,{name:"Home",component:f}),(0,u.jsx)(g,{name:"Details",component:c,options:function(e){return{title:e.route.params.name}}})]})})}n.default.create({})},4654:()=>{}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,a,o]=e[f],s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(f--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,a,o]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var f=l(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(f)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[572],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.409c50cc.js.map