(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d}));var a=t(122),r=t(123),c=t.n(r),u=t(0),i=t.n(u),o=t(118),l={loading:!0,user:null},s=Object(u.createContext)(l),f=function(e){var n=Object(u.useState)(),t=n[0],r=n[1],l=Object(u.useState)(),f=l[0],d=l[1];return Object(u.useEffect)((function(){var e=o.a.onAuthStateChanged(function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(n),n||d(null);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return function(){e()}}),[]),Object(u.useEffect)((function(){if(t){var e=o.b.collection("users").doc(t.uid).onSnapshot(function(){var e=Object(a.a)(c.a.mark((function e(n){var r,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=null!==(r=n.data())&&void 0!==r?r:{},d({data:u,fbUser:t,reload:function(){return Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.reload();case 2:case"end":return e.stop()}}),e)})))()}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return function(){e()}}}),[t]),i.a.createElement(s.Provider,{value:{loading:void 0===f,user:null!=f?f:null}},e.children)};function d(){var e=Object(u.useContext)(s);if(!e.loading)return e.user}},118:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(129),r=(t(151),t(162),t(8));if(r.a.canUseDOM){a.a.initializeApp({apiKey:"AIzaSyBxzHIAi4QHYE_b2z9Npz45FA6Gqvo_gUM",authDomain:"stc-rs.firebaseapp.com",projectId:"stc-rs",storageBucket:"stc-rs.appspot.com",messagingSenderId:"396574604098",appId:"1:396574604098:web:b0d421aa1fb42bcf19a6db",measurementId:"G-8757N7Y0S0"})}var c=r.a.canUseDOM?a.a.auth():void 0,u=r.a.canUseDOM?a.a.firestore():void 0},94:function(e,n,t){"use strict";t.r(n);var a=t(150),r=t(105),c=t(0),u=t.n(c),i=t(116),o=t(2),l=function(e){var n=Object(i.b)(),t=Object(o.l)();if(void 0===n)return u.a.createElement("div",null,"Loading...");var a=encodeURIComponent(t.pathname+t.search);return null===n?u.a.createElement(o.c,{to:"/login?redirect="+a}):u.a.createElement(o.d,e)},s=function(){Object(i.b)();return u.a.createElement("div",null)};n.default=function(){return u.a.createElement(a.a,{fallback:u.a.createElement("div",null,"Account page")},(function(){return u.a.createElement(r.a,null,u.a.createElement(i.a,null,u.a.createElement("div",{className:"container margin-vert--lg"},u.a.createElement(l,null,u.a.createElement(s,null)))))}))}}}]);