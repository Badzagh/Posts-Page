(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(14),r=c.n(a),d=(c(22),c(11)),i=c.n(d),s=c(15),l=c(6),j=c(3),p=(c(24),c(0));function u(e,t){switch(t.type){case"editTitle":return Object(j.a)(Object(j.a)({},e),{},{editTitle:t.payload});case"editBody":return Object(j.a)(Object(j.a)({},e),{},{editBody:t.payload});case"id":return Object(j.a)(Object(j.a)({},e),{},{id:t.value});case"editForm":return Object(j.a)(Object(j.a)({},e),{},{editForm:t.payload});default:return e}}var b=function(e){var t=e.posts,c=Object(n.useReducer)(u,{editTitle:"",editBody:"",id:1,editForm:"edit-form-hidden"}),o=Object(l.a)(c,2),a=o[0],r=o[1],d=["","https://randomwordgenerator.com/img/picture-generator/54e2d7404b52a514f1dc8460962e33791c3ad6e04e507441722872d5924fcd_640.jpg","https://randomwordgenerator.com/img/picture-generator/57e8d6474d57a514f1dc8460962e33791c3ad6e04e507440742f7cd7904bc4_640.jpg","https://www.asalesguy.com/wp-content/uploads/2016/09/dark-path-970882.jpeg","https://randompicturegenerator.com/img/people-generator/gbb18dc4db1059b5ef1f6c29a86a932f4600728d365ea6602329d861b0a2d6feeb7408ab798e0c87ddddf095809b8abc0_640.jpg","https://randomwordgenerator.com/img/picture-generator/57e4d5424850a914f1dc8460962e33791c3ad6e04e50744172297cd5914cc7_640.jpg","https://randomwordgenerator.com/img/picture-generator/57e5d1414952a914f1dc8460962e33791c3ad6e04e5074417c2d78d39644c5_640.jpg","https://randomwordgenerator.com/img/picture-generator/57e3d3474254a514f1dc8460962e33791c3ad6e04e50744172287ad2964cc0_640.jpg","https://randomwordgenerator.com/img/picture-generator/57e7d74a4855a814f1dc8460962e33791c3ad6e04e50744074267ad19644c0_640.jpg","https://randomwordgenerator.com/img/picture-generator/52e3d3454a52a914f1dc8460962e33791c3ad6e04e507440712f7bd5904ec6_640.jpg","https://randompicturegenerator.com/img/people-generator/gb4612c18d373b8d417f10aa4b359fd5fcd0c238fe9b1a09802c3d28817c9300f3c5c526faef7801f7c6c4333eba122c8_640.jpg"],i=function(e){r({type:"editForm",payload:"edit-form-visible"}),r({type:"id",value:e.target.value}),console.log(e.target.value),console.log(a.id)},s=function(e){r({type:"editForm",payload:"edit-form-hidden"}),r({type:"id",value:1})};return Object(p.jsxs)("div",{className:"post-list",children:[t.map((function(e){return Object(p.jsxs)("div",{className:"post-list-item",children:[Object(p.jsx)("img",{src:d[e.id]}),Object(p.jsx)("h4",{children:e.title}),Object(p.jsx)("p",{children:e.body}),Object(p.jsx)("span",{children:"Wed jun 23 2021"}),Object(p.jsx)("button",{onClick:i,value:e.id,children:"Edit post"})]},e.id)})),Object(p.jsxs)("div",{className:a.editForm,children:[Object(p.jsx)("h4",{children:"Edit Post"}),Object(p.jsx)("input",{onChange:function(e){return function(e){r({type:"editTitle",payload:e.target.value})}(e)},type:"text",value:a.editTitle}),Object(p.jsx)("textarea",{onChange:function(e){return function(e){r({type:"editBody",payload:e.target.value})}(e)},type:"text",value:a.editBody}),Object(p.jsx)("button",{onClick:function(){fetch("https://jsonplaceholder.typicode.com/posts/".concat(a.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a.editTitle,body:a.editBody})}).then((function(e){return e.json()})).then((function(){return window.location.reload()}))},children:"CLICK TO EDIT"}),Object(p.jsx)("span",{className:"close-icon-left",onClick:s}),Object(p.jsx)("span",{className:"close-icon-right",onClick:s})]})]})};function h(e,t){return Object(j.a)(Object(j.a)({},e),{},{posts:t.payload})}var f=function(){var e=Object(n.useReducer)(h,{posts:[]}),t=Object(l.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){var e=new AbortController;return setTimeout((function(){function t(){return(t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{signal:e.signal}).then((function(e){return e.json()})).then((function(e){o({payload:e}),console.log(e,"its posts")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),100),function(){return e.abort()}}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b,{posts:c.posts})})},g=c(8);var O=function(){return Object(p.jsxs)("div",{className:"header-container",children:[Object(p.jsx)("h1",{children:"OUR BLOGS"}),Object(p.jsxs)("nav",{children:[Object(p.jsx)(g.b,{to:"/Posts",children:"Blog posts"}),Object(p.jsx)(g.b,{to:"/create",children:"New Blog"})]})]})};function m(e,t){switch(t.type){case"title":return Object(j.a)(Object(j.a)({},e),{},{title:t.payload});case"body":return Object(j.a)(Object(j.a)({},e),{},{body:t.payload});default:return e}}var y=function(){var e=Object(n.useReducer)(m,{title:"",body:""}),t=Object(l.a)(e,2),c=t[0],o=t[1];return Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsx)("h2",{children:"Create Post"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({userId:10,title:c.title,body:c.body})};fetch("https://jsonplaceholder.typicode.com/posts",t).then((function(e){e.json(),console.log(e,"request sucsess")})).then((function(e){console.log("post added")}))},children:[Object(p.jsx)("label",{children:"Blog title:"}),Object(p.jsx)("input",{onChange:function(e){return function(e){o({type:"title",payload:e.target.value})}(e)},id:"title-value",type:"text",value:c.title}),Object(p.jsx)("label",{children:"Blog text:"}),Object(p.jsx)("textarea",{onChange:function(e){return function(e){o({type:"body",payload:e.target.value})}(e)},type:"text",id:"text-value",value:c.body}),Object(p.jsx)("button",{type:"submit",children:"Add Blog"})]})]})},x=c(2);var v=function(){return Object(p.jsx)(g.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{exact:!0,path:"/posts",children:Object(p.jsx)(f,{})}),Object(p.jsx)(x.a,{exact:!0,path:"/create",children:Object(p.jsx)(y,{})})]})})]})})};r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.52a1809c.chunk.js.map