(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"proyects":[{"id":1,"name":"Dia 1","day":true,"img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-62029589.jpg","tech":["Prueba 1","Prueba 1","Prueba 1"],"about":"Prueba 1","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 1"},{"id":2,"name":"Dia 2","day":true,"img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-62029589.jpg","tech":["Prueba 2","Prueba 2","Prueba 2"],"about":"Prueba 2","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 2"},{"id":3,"day":false,"name":"Dia 3","img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-62029589.jpg","tech":["Prueba 3","Prueba 3","Prueba 3"],"about":"Prueba 3","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 3"},{"id":4,"day":false,"name":"Dia 4","img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-62029589.jpg","tech":["Prueba 4","Prueba 4","Prueba 4"],"about":"Prueba 4","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 4"},{"id":5,"day":false,"name":"Dia 5","img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-62029589.jpg","tech":["Prueba 5","Prueba 5","Prueba 5"],"about":"Prueba 5","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 5"},{"id":6,"day":false,"name":"Dia 6","img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-62029589.jpg","tech":["Prueba 6","Prueba 6","Prueba 6"],"about":"Prueba 6","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 6"},{"id":7,"day":false,"name":"Dia 7","img":"https://thumbs.dreamstime.com/b/peque%C3%B1a-raza-brit%C3%A1nicos-del-gatito-72029589.jpg","tech":["Prueba 7","Prueba 7","Prueba 7"],"about":"Prueba 7","github":"https://github.com/IreneBioque/web-layout","page":"https://irenebioque.github.io/web-layout/","descripcion":"Prueba 7"}]}')},23:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a(15),r=a.n(c),s=a(5),o=a(10),n=a(2),b=(a(23),a(0)),u=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Bienvenido al calendario rolero"}),Object(b.jsx)(s.b,{to:"/calendar",children:Object(b.jsx)("button",{children:"Ir al calendario"})})]})},l=(a(30),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:"header",children:"Calendario de adviento rolero"}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("p",{children:"Atr\xe1s"})})]})}),d=(a(31),a.p,a.p+"static/media/NO.763d2f4f.jpg"),h=function(e){var t=Object(i.useState)("listTech"),a=Object(o.a)(t,2),c=a[0],r=a[1];e.dataProyect.tech.map((function(e,t){return Object(b.jsx)("li",{className:c,children:e},t)}));return Object(b.jsx)("article",{className:"section__work section",children:Object(b.jsx)(s.b,{to:"./proyect/".concat(e.dataProyect.id),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h3",{className:"section__work--title",children:e.dataProyect.name}),Object(b.jsx)("div",{className:"hoverarea",children:Object(b.jsx)("img",{src:!0===e.dataProyect.day?e.dataProyect.img:d,alt:e.dataProyect.name,className:"section__work--image",onMouseOver:function(){r("listTech2")},onMouseLeave:function(){r("listTech")}})})]})})})},j=function(e){var t=e.data.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(h,{dataProyect:e})},e.id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"section__title",children:"Calendario"}),Object(b.jsx)("section",{id:"work",children:Object(b.jsx)("ul",{className:"section_proyects",children:t})})]})},p=(a(32),a(33),function(){return Object(b.jsxs)("div",{className:"notFoundPage",children:[Object(b.jsx)("p",{className:"notFoundPage__text",children:"P\xe1gina no encontrada. No vayas tan r\xe1pido todav\xeda no es el d\xeda. Tendr\xe1s que esperar un poco m\xe1s"}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("p",{children:"Vuelve atr\xe1s"})})]})}),m=function(e){var t=e.proyect.tech.map((function(e){return Object(b.jsx)("li",{children:e})}));return!0===e.proyect.day?Object(b.jsxs)("div",{className:"detail",children:[Object(b.jsx)("h1",{className:"titleDetail",children:e.proyect.name}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsxs)("p",{className:"Link",children:[Object(b.jsx)("i",{className:"fas fa-arrow-left arrow"}),"Volver atr\xe1s"]})}),Object(b.jsx)("a",{className:"LinkProyect",href:e.proyect.page,target:"_blank",rel:"noreferrer",children:"Ir al sitio web"}),Object(b.jsxs)("div",{className:"workDetail",children:[Object(b.jsx)("img",{src:e.proyect.img,alt:e.title,className:"workDetail__image"}),Object(b.jsx)("h3",{className:"workDetail__title",children:"Sobre este proyecto"}),Object(b.jsx)("p",{className:"workDetail__paragraph",children:e.proyect.description}),Object(b.jsx)("h3",{className:"workDetail__title",children:"Tecnolog\xedas"}),Object(b.jsx)("ul",{className:"workDetail__list",children:t}),Object(b.jsx)("h3",{className:"workDetail__title",children:"Github"}),Object(b.jsx)("p",{className:"workDetail__paragraph",children:"Si quieres colaborar, darme alguna idea o ver el c\xf3digo del proyecto te dejo aqu\xed el enlace a Github \xa1Gracias!"}),Object(b.jsx)("a",{className:"workDetail__link",href:e.proyect.github,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-github"})})]})]},e.proyect.id):Object(b.jsx)(p,{})},g=a(18),O=function(){var e=Object(i.useState)(g),t=Object(o.a)(e,2),a=t[0],c=(t[1],a.proyects.map((function(e){return{id:e.id,day:e.day,name:e.name,img:e.img,tech:e.tech,about:e.about,github:e.github,page:e.page,description:e.descripcion}}))),r=Object(n.f)("/proyect/:id"),s=null!==r?r.params.id:"",d=c.find((function(e){return e.id===parseInt(s)}));return Object(b.jsx)("div",{children:Object(b.jsxs)(n.c,{children:[Object(b.jsx)(n.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{})}),Object(b.jsxs)(n.a,{exact:!0,path:"/calendar",children:[Object(b.jsx)(l,{}),Object(b.jsx)("main",{className:"main",children:Object(b.jsx)(j,{data:c})})]}),Object(b.jsx)(n.a,{path:"/proyect/:id",children:Object(b.jsx)("section",{className:"characterDetail",children:Object(b.jsx)(m,{proyect:d})})}),Object(b.jsx)(n.a,{children:Object(b.jsx)(p,{data:c})})]})})};r.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.deabd73e.chunk.js.map