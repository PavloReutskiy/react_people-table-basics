(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(5),r=(n(19),n(20),n(2)),s=(n(21),n(0)),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=n(8),o=n(4),l=n(1),b="https://mate-academy.github.io/react_people-table/api/people.json";function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(b)})).then((function(e){return e.json()}));var e}n(23);var d=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},x=n(6),O=n.n(x),u=function(e){var t=e.person,n=t.slug,c=t.name,r=t.sex;return Object(s.jsx)(a.b,{to:"/people/".concat(n),className:O()({"has-text-danger":"f"===r}),children:c})},p=function(e){var t=e.people,n=Object(r.h)().personSlug;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){var t=e.sex,c=e.born,a=e.died,r=e.motherName,j=e.fatherName,i=e.mother,o=e.father,l=e.slug;return Object(s.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":n===l}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(u,{person:e})}),Object(s.jsx)("td",{children:t}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:a}),Object(s.jsx)("td",{children:i?Object(s.jsx)(u,{person:i}):r||"-"}),Object(s.jsx)("td",{children:o?Object(s.jsx)(u,{person:o}):j||"-"})]})}))})]})},m=function(){var e=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!0),r=Object(o.a)(a,2),s=r[0],j=r[1],i=Object(l.useState)(""),b=Object(o.a)(i,2),d=b[0],x=b[1];return Object(l.useEffect)((function(){h().then(c).then((function(){return j(!1)})).catch((function(){return x("Something went wrong")}))}),[]),{isLoading:s,people:n,errorMessage:d}}(),t=e.people,n=e.isLoading,c=e.errorMessage,a=function(e){return e?null===t||void 0===t?void 0:t.find((function(t){return t.name===e})):null},r=t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{mother:a(e.motherName),father:a(e.fatherName)})}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[n&&Object(s.jsx)(d,{}),c&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:c}),!n&&0===t.length&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),0!==r.length&&Object(s.jsx)(p,{people:r})]})})]})},f=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},v=function(e){var t=e.to,n=e.text;return Object(s.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:n})},g=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(v,{to:"/",text:"Home"}),Object(s.jsx)(v,{to:"/people",text:"People"})]})})}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsxs)(r.b,{path:"/people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(m,{})}),Object(s.jsx)(r.b,{path:":personSlug",element:Object(s.jsx)(m,{})})]}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(f,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(g,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ed8fbf3a.chunk.js.map