(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),o=n.n(s),r=(n(35),n(8)),i=n.n(r),l=n(10),u=n(12),d=n(2),j=n(9),h=n.n(j),b=n(1),p="/api";var x=Object(d.e)((function(e){var t=e.location.pathname,n=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(p,"/new-note"));case 3:200===(t=e.sent).status?console.log(t.data):console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:window.location.href="/";case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=t.slice(6),a=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(p,"/delete-note/").concat(c));case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:window.location.href="/";case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"Panel",children:[Object(b.jsx)("div",{className:"nameContainer",children:Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("p",{className:"appName",children:"FerisNotes"})})}),Object(b.jsxs)("div",{className:"rightContainer",children:[Object(b.jsx)("div",{className:"button-right",children:Object(b.jsx)("button",{className:"add-button",onClick:n,children:"Dodaj"})}),t.includes("/note/")&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"button-right",children:Object(b.jsx)("button",{className:"delete-button",onClick:a,children:"Usu\u0144"})})})]})]})})),v=n(14),O=(n(62),"/api");function f(){var e=Object(c.useState)(null),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(O,"/notes"));case 2:t=e.sent,console.log(t.data),a(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"homeContent",children:[Object(b.jsx)("div",{className:"noteListTitle",children:Object(b.jsx)("h1",{children:"Lista notatek"})}),Object(b.jsx)("div",{className:"noteList",children:n&&Object(b.jsx)("div",{className:"notes",children:n.map((function(e,t){return Object(b.jsx)(u.b,{to:"/note/"+e._id,children:Object(b.jsxs)("div",{className:"noteCard",children:[Object(b.jsx)("h5",{className:"noteTitle",children:e.noteTitle}),Object(b.jsx)("p",{className:"noteDesc",children:e.noteBody.substring(0,200)})]},t)},t)}))})})]})}n(63);var m="/api";var N=function(e){var t=a.a.useState("Tytu\u0142 notatki..."),n=Object(v.a)(t,2),c=n[0],s=n[1],o=a.a.useState("Zawarto\u015b\u0107 notatki..."),r=Object(v.a)(o,2),u=r[0],d=r[1],j=e.location.pathname.slice(6);return a.a.useEffect((function(){var t=e.location.pathname.slice(6);function n(){return(n=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(m,"/get-note?id=").concat(t));case 2:200===(n=e.sent).status?(n=n.data,console.log(n),s(n.noteTitle),d(n.noteBody)):window.location.href="/";case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"noteContent",children:Object(b.jsxs)("div",{className:"note",children:[Object(b.jsx)("div",{className:"noteTitleContainer",children:Object(b.jsx)("input",{type:"text",name:"noteTitle",className:"noteTitle",placeholder:"Wpisz tytu\u0142...",value:c,onChange:function(e){return s(e.target.value)}})}),Object(b.jsx)("div",{className:"noteBodyContainer",children:Object(b.jsx)("textarea",{name:"noteBody",spellcheck:"false",className:"noteBody",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Wpisz zawarto\u015b\u0107 notatki..."})}),Object(b.jsx)("button",{className:"save-btn",onClick:function(){console.log(c),console.log(u),h()({method:"post",data:{title:c,content:u,noteID:j},withCredentials:!0,url:"".concat(m,"/save-note")}).then((function(e){console.log(e)}))},children:"Zapisz"})]})})})};var g=function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(d.a,{path:"/note/:id",component:N})]})]})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.e130e4bb.chunk.js.map