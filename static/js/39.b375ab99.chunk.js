(this["webpackJsonpapp-nutricion"]=this["webpackJsonpapp-nutricion"]||[]).push([[39],{627:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(617);var r=a(616);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},728:function(e,t,a){"use strict";a.r(t);var n=a(627),r=a(621),c=a.n(r),l=a(105),i=a(622),o=a(615),s=a(618),u=a(1),m=a.n(u),f=a(614),p=a(623),b=a.n(p);a(630);t.default=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(u.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("http://3.90.64.114/api/v1/mobile/nutriologist/");case 3:t=e.sent,a=t.data.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{nombre:e.user.name})})),console.log(a),r(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=Object(u.useState)([]),d=Object(o.a)(p,2),E=d[0],y=d[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.wb,null,m.a.createElement(f.u,null,m.a.createElement(f.j,null,m.a.createElement(f.n,null,"Nutri\xf3logos",m.a.createElement(s.a,{name:"cil-plus",className:"mfe-2"}),m.a.createElement(f.f,{size:"sm",color:"primary"},"Nuevo")),m.a.createElement(f.k,null,m.a.createElement(f.y,{items:a,fields:[{key:"id",label:"Id",_style:{width:"10%"}},{key:"nombre",label:"Nutri\xf3logo",_style:{width:"40%"}},{key:"Opciones",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,footer:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{Opciones:function(e,t){return m.a.createElement("td",{className:"py-2"},m.a.createElement(f.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=E.indexOf(e),a=E.slice();-1!==t?a.splice(t,1):a=[].concat(Object(n.a)(E),[e]),y(a)}(t)}},E.includes(t)?"Ocultar":"Opciones"))},details:function(e,t){return m.a.createElement(f.v,{show:E.includes(t)},m.a.createElement(f.k,null,m.a.createElement("h4",null,e.nombre),m.a.createElement("p",{className:"text-muted"}),m.a.createElement(f.f,{size:"sm",color:"info"},m.a.createElement(s.a,{name:"cil-pencil",className:"mfe-2"}),"Editar"),m.a.createElement(f.f,{size:"sm",color:"danger",className:"ml-1"},m.a.createElement(s.a,{name:"cil-trash",className:"mfe-2"}),"Eliminar")))}}}))))))}}}]);
//# sourceMappingURL=39.b375ab99.chunk.js.map