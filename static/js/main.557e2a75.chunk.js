(this["webpackJsonpgithub-repos-vm"]=this["webpackJsonpgithub-repos-vm"]||[]).push([[0],{37:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var c,n,a=r(0),s=r(1),i=r.n(s),l=r(30),o=r.n(l),j=(r(37),r(10)),b=r(2),u=r(13),d=Object(s.createContext)(),h=Object(s.createContext)(),O=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(s.useContext)(d),i=Object(s.useContext)(h);return Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"form-control",onChange:function(e){return c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(n.clearUsers(),r.trim()?(i.hide(),n.search(r.trim())):i.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f!"))},type:"text",value:r,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f..."})})},p=function(e){var t=e.user;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card-img-top",src:t.avatar_url,alt:t.login}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:t.login}),Object(a.jsx)(j.b,{className:"btn btn-primary",to:"/github-repos-vm/profile/"+t.login,children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})]})]})},m=function(){var e=Object(s.useContext)(d),t=e.users,r=e.loading;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"row",children:r?Object(a.jsx)("p",{className:"text-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):t.map((function(e){return Object(a.jsx)("div",{className:"col-sm-4 mb-4",children:Object(a.jsx)(p,{user:e})},e.id)}))})]})},x=function(){return Object(a.jsx)("div",{className:"jumbotron",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"display-4",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("p",{className:"lead",children:["\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: ",Object(a.jsx)("strong",{children:"1.0.0"})]})]})})},v=function(e){var t=e.repos;return Object(a.jsx)(i.a.Fragment,{children:t.map((function(e){return Object(a.jsx)("div",{className:"card mb-3",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("h5",{children:Object(a.jsx)("a",{href:e.html_url,rel:"noopener noreferrer",target:"_blank",children:e.name})})})},e.id)}))})},g=function(e){var t=e.match,r=Object(s.useContext)(d),c=r.getRepos,n=r.getUser,l=r.user,o=r.repos,b=r.loading,u=t.params.name;if(Object(s.useEffect)((function(){c(u),n(u)}),[]),b)return Object(a.jsx)("p",{className:"text-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."});var h=l.name,O=l.company,p=l.avatar_url,m=l.location,x=l.bio,g=l.blog,f=l.login,y=l.html_url,N=l.followers,w=l.following,E=l.public_repos,k=l.public_gists;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(j.b,{to:"/github-repos-vm/",className:"btn btn-link",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(a.jsx)("img",{src:p,alt:h,style:{width:"200px"}}),Object(a.jsx)("h1",{children:h}),m&&Object(a.jsxs)("p",{children:["\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",m]})]}),Object(a.jsxs)("div",{className:"col",children:[x&&Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("h3",{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(a.jsx)("p",{children:x})]}),Object(a.jsx)("a",{className:"btn btn-dark",href:y,rel:"noopener noreferrer",target:"_blank",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(a.jsxs)("ul",{className:"list-group",style:{listStyle:"none",margin:"5px 0"},children:[f&&Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c: "}),f]}),O&&Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: "}),O]}),g&&Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"\u0421\u0430\u0439\u0442: "}),g]})]}),Object(a.jsxs)("div",{className:"badge badge-primary mr-1",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438: ",N]}),Object(a.jsxs)("div",{className:"badge badge-success mr-1",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d: ",w]}),Object(a.jsxs)("div",{className:"badge badge-info mr-1",children:["\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438: ",E]}),Object(a.jsxs)("div",{className:"badge badge-dark",children:["Gists: ",k]})]})]})})}),Object(a.jsx)(v,{repos:o})]})},f=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",children:[Object(a.jsx)("div",{className:"navbar-brand",children:"GitHub \u041f\u043e\u0438\u0441\u043a"}),Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.c,{className:"nav-link",to:"/github-repos-vm/",exact:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.c,{className:"nav-link",to:"/github-repos-vm/about",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})},y=function(){var e=Object(s.useContext)(h),t=e.alert,r=e.hide;return t?Object(a.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(a.jsx)("button",{className:"close",onClick:r,type:"button","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},N=r(12),w=r.n(N),E=r(15),k=r(16),_=r.n(k),C=r(7),R=r(9),S="SHOW_ALERT",U="HIDE_ALERT",A="GET_REPOS",L="GET_USER",T="SEARCH_USERS",F="CLEAR_USERS",D="SET_LOADING",G=(c={},Object(C.a)(c,A,(function(e,t){var r=t.payload;return Object(R.a)(Object(R.a)({},e),{},{repos:r,loading:!1})})),Object(C.a)(c,L,(function(e,t){var r=t.payload;return Object(R.a)(Object(R.a)({},e),{},{user:r,loading:!1})})),Object(C.a)(c,T,(function(e,t){var r=t.payload;return Object(R.a)(Object(R.a)({},e),{},{users:r,loading:!1})})),Object(C.a)(c,F,(function(e){return Object(R.a)(Object(R.a)({},e),{},{users:[]})})),Object(C.a)(c,D,(function(e){return Object(R.a)(Object(R.a)({},e),{},{loading:!0})})),Object(C.a)(c,"DEFAULT",(function(e){return e})),c),H=function(e,t){return(G[t.type]||G.DEFAULT)(e,t)},P=function(e){var t=e.children,r=Object(s.useReducer)(H,{user:{},users:[],loading:!1,repos:[]}),c=Object(u.a)(r,2),n=c[0],i=c[1],l=function(){var e=Object(E.a)(w.a.mark((function e(t){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,_.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&"));case 3:r=e.sent,i({type:A,payload:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(E.a)(w.a.mark((function e(t){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,_.a.get("https://api.github.com/users/".concat(t,"?"));case 3:r=e.sent,i({type:L,payload:r.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(E.a)(w.a.mark((function e(t){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,_.a.get("https://api.github.com/search/users?q=".concat(t,"&"));case 3:r=e.sent,i({type:T,payload:r.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return i({type:D})},h=n.user,O=n.users,p=n.repos,m=n.loading;return Object(a.jsx)(d.Provider,{value:{user:h,users:O,repos:p,loading:m,getRepos:l,getUser:o,search:j,clearUsers:function(){return i({type:F})},setLoading:b},children:t})},I=(n={},Object(C.a)(n,S,(function(e,t){return t.payload})),Object(C.a)(n,U,(function(){return null})),Object(C.a)(n,"DEFAULT",(function(e){return e})),n),W=function(e,t){return(I[t.type]||I.DEFAULT)(e,t)},B=function(e){var t=e.children,r=Object(s.useReducer)(W,null),c=Object(u.a)(r,2),n=c[0],i=c[1];return Object(a.jsx)(h.Provider,{value:{hide:function(){return i({type:U})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";i({type:S,payload:{type:t,text:e}})},alert:n},children:t})};var J=function(){return Object(a.jsx)(P,{children:Object(a.jsx)(B,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"container pt-4",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/github-repos-vm/",exact:!0,component:m}),Object(a.jsx)(b.a,{path:"/github-repos-vm/about",component:x}),Object(a.jsx)(b.a,{path:"/github-repos-vm/profile/:name",component:g})]})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(J,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.557e2a75.chunk.js.map