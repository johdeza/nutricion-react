(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[38],{634:function(e,t,a){"use strict";var n=a(631),r=a.n(n);t.a={Alertas:function(e){r.a.fire({title:"\xbfEliminar Actividad?",text:"Est\xe1 seguro de eliminar esta Actividad!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(e){e.isConfirmed&&r.a.fire("Eliminado!","Actividad eliminada correctamente","success")}))},AlertaFormulario:function(e){r.a.fire({icon:"error",title:"Error...",text:e})},AlertaMensajeExito:function(e){r.a.fire({icon:"success",title:"Exito...",text:e})}}},729:function(e,t,a){"use strict";a.r(t);var n=a(158),r=a(105),c=a(627),l=a(621),i=a.n(l),o=a(622),s=a(615),u=a(618),m=a(1),f=a.n(m),d=a(614),p=a(623),E=a.n(p),b=(a(630),a(631)),h=a.n(b),v=a(634);t.default=function(){var e=Object(m.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1],p=Object(m.useState)(!1),b=Object(s.a)(p,2),g=b[0],C=b[1],j=Object(m.useState)([]),O=Object(s.a)(j,2),w=O[0],k=O[1],x=Object(m.useState)({id:"",name:""}),y=Object(s.a)(x,2),N=y[0],S=y[1];Object(m.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("http://3.90.64.114/api/v1/web/aliments-categories");case 3:t=e.sent,k(t.data),l(!1),console.log(w),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[a]);var A=Object(m.useState)([]),B=Object(s.a)(A,2),F=B[0],z=B[1],P=function(e){var t=e.target,a=t.name,c=t.value;S((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a,c))}))},_=function(e,t){console.log(e),S(e),C(!g)},J=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://3.90.64.114/api/v1/web/aliments-categories",N);case 3:l(!0),v.a.AlertaMensajeExito("Categoria-Alimento ingresado correctamente"),C(!g),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v.a.AlertaFormulario(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.fire({title:"\xbfEliminar Categor\xeda?",text:"Est\xe1 seguro de eliminar esta Categoria!",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Si, eliminar!",showCancelButton:!0,cancelButtonColor:"#d33"}).then((function(e){e.isConfirmed&&(T(),h.a.fire("Eliminado!","Categoria eliminada correctamente","success"))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(N)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f.a.createElement(f.a.Fragment,null,f.a.createElement(d.wb,null,f.a.createElement(d.u,null,f.a.createElement(d.j,null,f.a.createElement(d.n,null,"Categor\xedas",f.a.createElement(u.a,{name:"cil-plus",className:"mfe-2"}),f.a.createElement(d.f,{onClick:function(){return S({id:"",name:""}),void C(!g)},className:"mr-1",size:"sm",color:"primary"},"Nuevo")),f.a.createElement(d.k,null,f.a.createElement(d.y,{items:w,fields:[{key:"id",label:"Id",_style:{width:"10%"}},{key:"name",label:"Categor\xeda",_style:{width:"40%"}},{key:"Opciones",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,footer:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{Opciones:function(e,t){return f.a.createElement("td",{className:"py-2"},f.a.createElement(d.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=F.indexOf(e),a=F.slice();-1!==t?a.splice(t,1):a=[].concat(Object(c.a)(F),[e]),z(a)}(t)}},F.includes(t)?"Ocultar":"Opciones"))},details:function(e,t){return f.a.createElement(d.v,{show:F.includes(t)},f.a.createElement(d.k,null,f.a.createElement("h4",null,e.name),f.a.createElement("p",{className:"text-muted"}),f.a.createElement(d.f,{key:e.id,size:"sm",color:"info",onClick:function(){return _(e)}},f.a.createElement(u.a,{name:"cil-pencil",className:"mfe-2"}),"Editar"),f.a.createElement(d.f,{onClick:function(){return M(e.id)},size:"sm",color:"danger",className:"ml-1"},f.a.createElement(u.a,{name:"cil-trash",className:"mfe-2"}),"Eliminar")))}}}))))),f.a.createElement(d.wb,null,f.a.createElement(d.u,null,f.a.createElement(d.j,null,f.a.createElement(d.k,null,f.a.createElement(d.gb,{show:g,onClose:C},f.a.createElement(d.jb,{closeButton:!0},f.a.createElement(d.kb,null,"Categor\xeda")),f.a.createElement(d.hb,null,f.a.createElement(d.K,null,f.a.createElement(d.V,null,f.a.createElement(d.X,null,f.a.createElement(d.Y,null,"Nombre:")),f.a.createElement(d.S,{name:"id",onChange:P,value:N.id,placeholder:"id",hidden:!0}),f.a.createElement(d.S,{name:"name",onChange:P,value:N.name,placeholder:"Nombre"})))),f.a.createElement(d.ib,null,f.a.createElement(d.f,{color:"danger",onClick:function(){return C(!1)}},f.a.createElement(u.a,{name:"cil-x-circle",className:"md"})," ","Cancelar"),f.a.createElement(d.f,{color:"primary",onClick:function(){return J()}},f.a.createElement(u.a,{name:"cil-save",className:"mfe-2"}),"Grabar")," ")),f.a.createElement("hr",null))))))}}}]);
//# sourceMappingURL=38.18ec782d.chunk.js.map