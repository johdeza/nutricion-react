/*! For license information please see 12.4b88f0cf.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{613:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},625:function(e,t,n){"use strict";var a=n(615),r=n(1),o=n.n(r),i=n(744),s=n(745);t.a=function(){var e=o.a.useState(!1),t=Object(a.a)(e,2);t[0],t[1];return o.a.createElement("div",null,o.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(i.a.Brand,{href:"/"},"Nutrici\xf3n"),o.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(s.a,{className:"ml-auto"},o.a.createElement(s.a.Link,{href:"/"},"Inicio"),o.a.createElement(s.a.Link,{href:"#login"},"Login"),o.a.createElement(s.a.Link,{href:"#register"},"Nueva cuenta")))))}},626:function(e,t,n){"use strict";var a=n(1),r=n.n(a);t.a=function(){return r.a.createElement("footer",{className:"d-flex justify-content-center align-items-center bg-dark "},r.a.createElement("h6",{className:"text-white"},"\xaeNutrici\xf3n 2020"))}},641:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"===typeof clearTimeout?clearTimeout:i}catch(e){a=i}}();var l,c=[],u=!1,m=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):m=-1,c.length&&d())}function d(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++m<t;)l&&l[m].run();m=-1,t=c.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===i||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},644:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f}));var a=n(29),r=n(35),o=(n(57),n(1)),i=n.n(o),s=n(80),l=n.n(s),c=!1,u=i.a.createContext(null),m="exited",p="entering",d="entered",f="exiting",h=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,o=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?o?(r=m,a.appearStatus=p):r=d:r=t.unmountOnExit||t.mountOnEnter?"unmounted":m,a.state={status:r},a.nextCallback=null,a}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:m}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==d&&(t=p):n!==p&&n!==d||(t=f)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===m&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[l.a.findDOMNode(this),a],o=r[0],i=r[1],s=this.getTimeouts(),u=a?s.appear:s.enter;!e&&!n||c?this.safeSetState({status:d},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:p},(function(){t.props.onEntering(o,i),t.onTransitionEnd(u,(function(){t.safeSetState({status:d},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:l.a.findDOMNode(this);t&&!c?(this.props.onExit(a),this.safeSetState({status:f},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:m},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:m},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=r[0],i=r[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(u.Provider,{value:null},"function"===typeof n?n(e,r):i.a.cloneElement(i.a.Children.only(n),r))},t}(i.a.Component);function E(){}h.contextType=u,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},h.UNMOUNTED="unmounted",h.EXITED=m,h.ENTERING=p,h.ENTERED=d,h.EXITING=f;t.e=h},738:function(e,t,n){"use strict";n.r(t);var a=n(621),r=n.n(a),o=n(622),i=n(158),s=n(105),l=n(615),c=n(1),u=n.n(c),m=n(625),p=n(626),d=n(623),f=n.n(d),h=n(19);t.default=function(){var e=Object(h.g)(),t=Object(c.useState)({name:"",address:"",identificationCard:"",birthday:"",sex:"",email:"",password:"",clinicName:"",telephone:"",addressClinic:""}),n=Object(l.a)(t,2),a=n[0],d=n[1],E=function(e){console.log(e.target.name),console.log(e.target.value),d(Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))},v=function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,f.a.post("http://3.90.64.114/api/v1/web/nutriologist",a);case 4:t.sent,e.push("/login"),alert("Cuenta registrada!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),t.t0.response?(console.log(t.t0.response.data),console.log(t.t0.response.status)):t.t0.request?console.log(t.t0.request):console.log("Error",t.t0.message),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement(m.a,null),u.a.createElement("br",null),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"jumbotron"},u.a.createElement("p",{className:"display-4 text-center lead"},"Nueva cuenta Nutri\xf3logo"),u.a.createElement("hr",{className:"my-4"}),u.a.createElement("form",{onSubmit:v},u.a.createElement("p",{className:"display-8"},"Datos del Nutri\xf3logo"),u.a.createElement("div",{className:"form-group row "},u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre Completo",name:"name",onChange:E})),u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Direcci\xf3n particular",name:"address",onChange:E})),u.a.createElement("div",{className:"col-sm-12 mb-1"},u.a.createElement("input",{type:"tel",className:"form-control",placeholder:"C\xe9dula profesional",name:"identificationCard",onChange:E}))),u.a.createElement("div",{className:"form-group row "},u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("label",null,"Fecha de nacimiento"),u.a.createElement("input",{type:"date",className:"form-control",placeholder:"Fecha de nacimiento",name:"birthday",onChange:E})),u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("label",null,"Sexo"),u.a.createElement("select",{className:"form-control",name:"sex",onChange:E},u.a.createElement("option",null,"Mujer "),u.a.createElement("option",null,"Hombre"),u.a.createElement("option",null,"Prefiero no especificar")))),u.a.createElement("p",{className:"display-8"},"Credenciales de acceso"),u.a.createElement("div",{className:"form-group row "},u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo electr\xf3nico",name:"email",onChange:E})),u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"password",onChange:E}))),u.a.createElement("p",{className:"display-8"},"Datos de la cl\xednica"),u.a.createElement("div",{className:"form-group row "},u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre de la cl\xednica",name:"clinicName",onChange:E})),u.a.createElement("div",{className:"col-sm-6 mb-1"},u.a.createElement("input",{type:"tel",className:"form-control",placeholder:"Tel\xe9fono o celular de la cl\xednica",name:"telephone",onChange:E})),u.a.createElement("div",{className:"col-sm-12 mb-1"},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Direcci\xf3n de la cl\xednica",name:"addressClinic",onChange:E}))),u.a.createElement("div",{className:"d-flex"},u.a.createElement("a",{className:"btn btn-danger btn-lg",href:"/"},"Cancelar"),u.a.createElement("button",{className:"btn btn-primary btn-lg ml-auto",type:"submit"},"Crear cuenta"))))),u.a.createElement(p.a,null))}}}]);
//# sourceMappingURL=12.4b88f0cf.chunk.js.map