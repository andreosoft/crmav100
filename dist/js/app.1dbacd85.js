(function(e){function t(t){for(var o,a,c=t[0],i=t[1],s=t[2],f=0,l=[];f<c.length;f++)a=c[f],r[a]&&l.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0baaed":"b691ba8b","chunk-2d0c498f":"a6077d92","chunk-2d0d6ae4":"b67ffd19","chunk-3a5e7379":"29f12756","chunk-4aa28ab5":"8b3d9226","chunk-5dab0d19":"18385de3","chunk-6bb9705c":"9f077886","chunk-7cac2d05":"9583c96a","chunk-86552f1a":"8231da9b","chunk-8846837a":"03115f9a","chunk-788838f6":"d3b4858e","chunk-8edc4f72":"69e12c28","chunk-beb40810":"22fdbe99","chunk-ca89aeac":"f3a45883"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-6bb9705c":1,"chunk-788838f6":1,"chunk-ca89aeac":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0baaed":"31d6cfe0","chunk-2d0c498f":"31d6cfe0","chunk-2d0d6ae4":"31d6cfe0","chunk-3a5e7379":"31d6cfe0","chunk-4aa28ab5":"31d6cfe0","chunk-5dab0d19":"31d6cfe0","chunk-6bb9705c":"e85c9966","chunk-7cac2d05":"31d6cfe0","chunk-86552f1a":"31d6cfe0","chunk-8846837a":"31d6cfe0","chunk-788838f6":"2393743e","chunk-8edc4f72":"31d6cfe0","chunk-beb40810":"31d6cfe0","chunk-ca89aeac":"296eff69"}[e]+".css",r=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===o||f===r))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===o||f===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var o=n("2b0e"),a=n("2f62"),r=n("f499"),u=n.n(r),c=n("795b"),i=n.n(c),s=n("bc3a"),f=n.n(s),l=n("a3be"),d={token:localStorage.getItem("user-token")||"",profile:localStorage.getItem("user-profile")||"",status:"",error:""},h={isAuthenticated:function(e){return!!e.token},profile:function(e){return JSON.parse(e.profile)},role:function(e){return e.profile?JSON.parse(e.profile).role:0},status:function(e){return e.status},error:function(e){return e.error}},p={login:function(e,t){var n=e.commit;e.dispatch;return new i.a(function(e,o){n("authLoading"),f()({url:l["a"].token_login,data:t,method:"POST"}).then(function(t){"ok"==t.data.status?(n("authSuccess",t.data.token),n("updateProfile",t.data.profile)):n("authError",t.data.error),e(t)})})},logout:function(e){var t=e.commit;e.dispatch;t("authLogout")}},m={authLoading:function(e){e.status="loading"},authSuccess:function(e,t){e.status="success",e.token=t,localStorage.setItem("user-token",t),f.a.defaults.headers.common["Authorization"]=t},authError:function(e,t){e.status="error",e.error=t,localStorage.removeItem("user-token")},authLogout:function(e){e.token="",localStorage.removeItem("user-token"),localStorage.removeItem("user-profile"),delete f.a.defaults.headers.common["Authorization"]},updateProfile:function(e,t){e.profile=u()(t),localStorage.setItem("user-profile",u()(t))},updateStore:function(e,t){var n=JSON.parse(e.profile);n.store=t,e.profile=u()(n),localStorage.setItem("user-profile",e.profile)}},b={namespaced:!0,state:d,getters:h,actions:p,mutations:m},g={profile:"",status:""},k={profile:function(e){return JSON.parse(localStorage.getItem("user-profile"))},status:function(e){return e.status}},v={userInfo:function(e){var t=e.commit;e.dispatch;t("loading"),f()({url:l["a"].token_user_info,method:"GET"}).then(function(e){"ok"==e.data.status&&(t("success",e.data.data),console.log("userInfo end"))}).catch(function(e){console.log(e)})}},_={loading:function(e){e.status="loading"},success:function(e,t){e.status="success",localStorage.setItem("user-profile",u()(t))},error:function(e){e.status="error"},logout:function(e){e.profile={}}},w={namespaced:!0,state:g,getters:k,actions:v,mutations:_};o["a"].use(a["a"]);t["a"]=new a["a"].Store({modules:{auth:b,user:w}})},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("795b"),a=n.n(o),r=n("f499"),u=n.n(r),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},s=[],f=(n("5c0b"),n("2877")),l={},d=Object(f["a"])(l,i,s,!1,null,null,null),h=d.exports,p=n("d665"),m=n("bc3a"),b=n.n(m),g={data:{appName:"CRMAV100",info:{visible:!1,text:""}}},k=n("4360"),v={data:[{route:"/index",icon:"fa-home",title:"Главная страница",auth:[1,50,100]},{route:"/requests/100",icon:"fas fa-calendar-check",title:"Перезвонить",auth:[1,50,100]},{route:"/requests/101",icon:"fas fa-calendar-times",title:"Не отвечает",auth:[1,50,100]},{route:"/requests/102",icon:"far fa-angry",title:"Отказ",auth:[1,50,100]},{route:"/requests/103",icon:"fas fa-database",title:"Архив",auth:[1,50,100]},{route:"/content/0",icon:"fa-file-alt",title:"Контент",auth:[50,100]},{route:"/users",icon:"fa-users",title:"Пользователи",auth:[100]},{route:"/help",icon:"fa-question-circle",title:"Помощь",auth:[1,50,100]}]};n("3022");c["a"].config.productionTip=!1;var _=localStorage.getItem("user-token");_&&(b.a.defaults.headers.common["Authorization"]=_),new c["a"]({router:p["a"],store:k["a"],render:function(e){return e(h)},el:"#app",mixins:[g],data:{showMenu:!0,mainMenu:{data:v.data},phone_number:""},methods:{logout:function(){this.$store.commit("auth/authLogout"),window.location.href="/"},goBack:function(){p["a"].go(-1)},showInfo:function(e){var t=this;this.info.text=e,this.info.visible=!0,setTimeout(function(){t.info.visible=!1},2e3)},path_code:function(e){return window.btoa(unescape(encodeURIComponent(u()(e))))},path_decode:function(e){return JSON.parse(decodeURIComponent(escape(window.atob(e))))}},created:function(){},mounted:function(){b.a.interceptors.response.use(void 0,function(e){return new a.a(function(t,n){throw 403===e.response.status&&(localStorage.removeItem("user-token"),localStorage.removeItem("user-profile"),window.location.href="/"),e})})}})},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(e,t,n){},a3be:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");var o=window.location.hostname,a=/(.*)\.crmav100.ru/g,r=a.exec(o);"undefined"==r[1]&&(r[1]="test");var u="https://"+r[1]+".api.crmav100.ru";t["a"]={token_login:u+"/users/signup/get_token",set_profile:u+"/users/signup/set_profile",users:u+"/users/api",content:u+"/content/api",request:u+"/request/request_api",request_get_offer:u+"/request/request_api/get_offer",offers_all:u+"/request/offers",offers:u+"/request/offers_api"}},d665:function(e,t,n){"use strict";var o=n("2b0e"),a=n("8c4f");o["a"].use(a["a"]);var r=new a["a"]({saveScrollPosition:!0,history:!0,routes:[{path:"/",redirect:function(e){return"/index"}},{path:"/",meta:{auth:[1,100]},component:function(){return n.e("chunk-6bb9705c").then(n.bind(null,"6a34"))},children:[{path:"/profile",name:"profile",meta:{title:"Мой профиль",auth:[1,50,100]},component:function(){return Promise.all([n.e("chunk-8846837a"),n.e("chunk-beb40810")]).then(n.bind(null,"2c30"))}},{path:"/index",name:"index",meta:{title:"Кабинет",auth:[1,50,100]},component:function(){return n.e("chunk-2d0baaed").then(n.bind(null,"37f9"))}},{path:"/users/",name:"users",meta:{title:"Пользователи",auth:[50,100]},component:function(){return n.e("chunk-86552f1a").then(n.bind(null,"4468"))}},{path:"/users/create",name:"user_create",meta:{title:"Информация о пользователе",auth:[50,100]},component:function(){return Promise.all([n.e("chunk-8846837a"),n.e("chunk-8edc4f72")]).then(n.bind(null,"5fd2"))}},{path:"/users/:id",name:"user_info",meta:{title:"Информация о пользователе",auth:[50,100]},component:function(){return Promise.all([n.e("chunk-8846837a"),n.e("chunk-8edc4f72")]).then(n.bind(null,"5fd2"))}},{path:"/requests/:id",name:"offers",meta:{title:"Заявки",auth:[50,100]},component:function(){return n.e("chunk-7cac2d05").then(n.bind(null,"25a3"))}},{path:"/requests/create",name:"request_create",meta:{title:"Новая заявка",auth:[50,100]},component:function(){return Promise.all([n.e("chunk-8846837a"),n.e("chunk-788838f6")]).then(n.bind(null,"cf2b"))}},{path:"/requests/create/:id",name:"request_form",meta:{title:"Заявка",auth:[50,100]},component:function(){return Promise.all([n.e("chunk-8846837a"),n.e("chunk-788838f6")]).then(n.bind(null,"cf2b"))}},{path:"/content/:parent_id",name:"content",meta:{title:"Контент",auth:[100]},component:function(){return n.e("chunk-3a5e7379").then(n.bind(null,"1b49"))}},{path:"/content/create",name:"content_create",meta:{title:"Создать контент",auth:[100]},component:function(){return n.e("chunk-ca89aeac").then(n.bind(null,"68fa"))}},{path:"/content/update/:id",name:"content_update",meta:{title:"Изменить контент",auth:[100]},component:function(){return n.e("chunk-ca89aeac").then(n.bind(null,"68fa"))}},{path:"/help",name:"help",meta:{title:"Помощь",auth:[1,50,100]},component:function(){return n.e("chunk-2d0d6ae4").then(n.bind(null,"741b"))}}]},{path:"/",component:function(){return n.e("chunk-4aa28ab5").then(n.bind(null,"8578"))},children:[{path:"/login",name:"login",meta:{title:"login",auth:["0"]},component:function(){return n.e("chunk-5dab0d19").then(n.bind(null,"dd3b"))}},{path:"*",name:"notfound",meta:{title:"404",auth:["*"]},component:function(){return n.e("chunk-2d0c498f").then(n.bind(null,"3c09"))}}]}]});t["a"]=r}});
//# sourceMappingURL=app.1dbacd85.js.map