(this["webpackJsonpapp-nutricion"]=this["webpackJsonpapp-nutricion"]||[]).push([[37],{634:function(e,t,a){"use strict";var n=a(631),r=a.n(n);t.a={Alertas:function(e){r.a.fire({title:"\xbfEliminar Actividad?",text:"Est\xe1 seguro de eliminar esta Actividad!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(e){e.isConfirmed&&r.a.fire("Eliminado!","Actividad eliminada correctamente","success")}))},AlertaFormulario:function(e){r.a.fire({icon:"error",title:"Error...",text:e})},AlertaMensajeExito:function(e){r.a.fire({icon:"success",title:"Exito...",text:e})}}},730:function(e,t,a){"use strict";a.r(t);var n=a(158),r=a(627),c=a(105),l=a(621),i=a.n(l),o=a(622),u=a(615),s=a(1),m=a.n(s),d=a(614),f=a(618),p=a(623),E=a.n(p),b=(a(630),a(631)),h=a.n(b),v=a(634);t.default=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],p=Object(s.useState)(!1),b=Object(u.a)(p,2),g=b[0],O=b[1],j=Object(s.useState)([]),w=Object(u.a)(j,2),k=w[0],x=w[1],C=Object(s.useState)(!0),y=Object(u.a)(C,2),A=y[0],S=y[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("http://3.90.64.114/api/v1/web/aliments-categories");case 3:t=e.sent,x(t.data),S(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[A]),Object(s.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("http://3.90.64.114/api/v1/web/aliments");case 3:t=e.sent,a=t.data.aliments.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{categoria:e.aliments_category.name})})),l(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=Object(s.useState)([]),F=Object(u.a)(B,2),N=F[0],z=F[1],K=Object(s.useState)({id:"",name:"",cantidad:"",categoria:""}),P=Object(u.a)(K,2),_=P[0],I=P[1],J=function(e){var t=e.target,a=t.name,r=t.value;I((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(n.a)({},a,r))}))},M=function(e,t){console.log(e),I(e),O(!g)},T=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://3.90.64.114/api/v1/web/aliments",_);case 3:S(!0),v.a.AlertaMensajeExito("Alimento ingresado correctamente"),O(!g),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(v.a.AlertaFormulario(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.fire({title:"\xbfEliminar Alimento?",text:"Est\xe1 seguro de eliminar este Alimento!",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Si, eliminar!",showCancelButton:!0,cancelButtonColor:"#d33"}).then((function(e){e.isConfirmed&&(G(t),h.a.fire("Eliminado!","Alimento eliminado correctamente","success"))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(_)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.wb,null,m.a.createElement(d.u,null,m.a.createElement(d.j,null,m.a.createElement(d.n,null,"Alimentos",m.a.createElement(f.a,{name:"cilplus",className:"mfe-2"}),m.a.createElement(d.f,{size:"sm",color:"primary",onClick:function(){I({id:"",name:"",cantidad:"",categoria:""}),O(!g)}},"Nuevo")),m.a.createElement(d.k,null,m.a.createElement(d.y,{items:a,fields:[{key:"id",label:"Id",_style:{width:"10%"}},{key:"name",label:"Alimento",_style:{width:"40%"}},{key:"cantidad",label:"Cantidad"},{key:"categoria",label:"Categor\xeda"},{key:"Opciones",label:"Opciones",_style:{width:"1%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,footer:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{Opciones:function(e,t){return m.a.createElement("td",{className:"py-2"},m.a.createElement(d.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=N.indexOf(e),a=N.slice();-1!==t?a.splice(t,1):a=[].concat(Object(r.a)(N),[e]),z(a)}(t)}},N.includes(t)?"Ocultar":"Opciones"))},details:function(e,t){return m.a.createElement(d.v,{show:N.includes(t)},m.a.createElement(d.k,null,m.a.createElement("h4",null,e.name),m.a.createElement("p",{className:"text-muted"},"Categoria: ",e.categoria),m.a.createElement("p",{className:"text-muted"},"Id: ",e.id),m.a.createElement(d.f,{key:e.id,size:"sm",color:"info",onClick:function(){return M(e)}},m.a.createElement(f.a,{name:"cil-pencil",className:"mfe-2"}),"Editar"),m.a.createElement(d.f,{onClick:function(){return q(e.id)},size:"sm",color:"danger",className:"ml-1"},m.a.createElement(f.a,{name:"cil-trash",className:"mfe-2"}),"Eliminar")))}}}))))),m.a.createElement(d.wb,null,m.a.createElement(d.u,null,m.a.createElement(d.j,null,m.a.createElement(d.k,null,m.a.createElement(d.gb,{show:g,onClose:O},m.a.createElement(d.jb,{closeButton:!0},m.a.createElement(d.kb,null,"Alimento")),m.a.createElement(d.hb,null,m.a.createElement(d.K,null,m.a.createElement(d.K,{row:!0},m.a.createElement(d.u,{md:"3"},m.a.createElement(d.cb,{htmlFor:"disabled-input"},"Alimento:")),m.a.createElement(d.u,{xs:"12",md:"9"},m.a.createElement(d.S,{name:"name",onChange:J,value:_.name,placeholder:"Alimento"}))),m.a.createElement(d.K,{row:!0},m.a.createElement(d.u,{md:"3"},m.a.createElement(d.cb,{htmlFor:"disabled-input"},"Cantidad:")),m.a.createElement(d.u,{xs:"12",md:"9"},m.a.createElement(d.S,{name:"cantidad",onChange:J,value:_.cantidad,placeholder:"Cantidad"}))),m.a.createElement(d.K,{row:!0},m.a.createElement(d.u,{md:"3"},m.a.createElement(d.cb,{htmlFor:"select"},"Categor\xeda:")),m.a.createElement(d.u,{xs:"12",md:"9"},m.a.createElement(d.xb,{custom:!0,name:"categoria",value:_.categoria,id:"select",onChange:J},m.a.createElement("option",{value:"0"},"--Seleccione una Categor\xeda--"),k.map((function(e){return m.a.createElement("option",{key:e.id,value:e.categoria},e.name)}))))))),m.a.createElement(d.ib,null,m.a.createElement(d.f,{color:"danger",onClick:function(){return O(!1)}},"Cancelar"),m.a.createElement(d.f,{color:"primary",onClick:function(){return T()}},"Grabar")," ")),m.a.createElement("hr",null))))))}}}]);
//# sourceMappingURL=37.3a60ff7b.chunk.js.map