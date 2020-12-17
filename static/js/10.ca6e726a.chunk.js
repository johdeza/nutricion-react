/*! For license information please see 10.ca6e726a.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{613:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&t.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&t.push(s)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},615:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(616);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},616:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(617);function r(t,e){if(t){if("string"===typeof t)return Object(a.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(t,e):void 0}}},617:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},625:function(t,e,n){"use strict";var a=n(615),r=n(1),i=n.n(r),o=n(744),s=n(745);e.a=function(){var t=i.a.useState(!1),e=Object(a.a)(t,2);e[0],e[1];return i.a.createElement("div",null,i.a.createElement(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},i.a.createElement(o.a.Brand,{href:"/"},"Nutrici\xf3n"),i.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(s.a,{className:"ml-auto"},i.a.createElement(s.a.Link,{href:"/"},"Inicio"),i.a.createElement(s.a.Link,{href:"#login"},"Login"),i.a.createElement(s.a.Link,{href:"#register"},"Nueva cuenta")))))}},626:function(t,e,n){"use strict";var a=n(1),r=n.n(a);e.a=function(){return r.a.createElement("footer",{className:"d-flex justify-content-center align-items-center bg-dark "},r.a.createElement("h6",{className:"text-white"},"\xaeNutrici\xf3n 2020"))}},644:function(t,e,n){"use strict";n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return h}));var a=n(29),r=n(35),i=(n(57),n(1)),o=n.n(i),s=n(80),u=n.n(s),c=!1,l=o.a.createContext(null),p="exited",f="entering",d="entered",h="exiting",m=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?i?(r=p,a.appearStatus=f):r=d:r=e.unmountOnExit||e.mountOnEnter?"unmounted":p,a.state={status:r},a.nextCallback=null,a}Object(r.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:p}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==d&&(e=f):n!==f&&n!==d||(e=h)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===f?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,a=this.context?this.context.isMounting:t,r=this.props.nodeRef?[a]:[u.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),l=a?s.appear:s.enter;!t&&!n||c?this.safeSetState({status:d},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:f},(function(){e.props.onEntering(i,o),e.onTransitionEnd(l,(function(){e.safeSetState({status:d},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:u.a.findDOMNode(this);e&&!c?(this.props.onExit(a),this.safeSetState({status:h},(function(){t.props.onExiting(a),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(a)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),a=null==t&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(a.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(l.Provider,{value:null},"function"===typeof n?n(t,r):o.a.cloneElement(o.a.Children.only(n),r))},e}(o.a.Component);function E(){}m.contextType=l,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},m.UNMOUNTED="unmounted",m.EXITED=p,m.ENTERING=f,m.ENTERED=d,m.EXITING=h;e.e=m},737:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(625),o=n(626);e.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("header",{className:"masthead"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 align-items-center"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",{className:"font-weight-light"},"NUTRICI\xd3N"),r.a.createElement("p",{className:"lead"},"Convi\xe9rtelo en tu estilo de vida, no en una obligaci\xf3n."))))),r.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=10.ca6e726a.chunk.js.map