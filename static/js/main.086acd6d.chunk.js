(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports={modal:"ContextEventModal_modal__vanLV",content:"ContextEventModal_content__1i0SG",color:"ContextEventModal_color__FF-Bg",activeColor:"ContextEventModal_activeColor__K5DVb ContextEventModal_color__FF-Bg",colors:"ContextEventModal_colors__2oTiq"}},26:function(e){e.exports={months:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0435\u0440\u044c","\u041d\u043e\u044f\u0431\u0435\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0435\u0440\u044c"],weeks:[{short:"\u041f\u041d",long:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a"},{short:"\u0412\u0422",long:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a"},{short:"\u0421\u0420",long:"\u0421\u0440\u0435\u0434\u0430"},{short:"\u0427\u0422",long:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433"},{short:"\u041f\u0422",long:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430"},{short:"\u0421\u0411",long:"\u0421\u0443\u0431\u043e\u0442\u0430"},{short:"\u0412\u0421",long:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"}]}},30:function(e,t,n){e.exports={modal:"AddEventModal_modal__29UgL",content:"AddEventModal_content__3oBa1"}},36:function(e,t,n){e.exports={title:"Title_title__GTsjl"}},38:function(e,t,n){e.exports={header:"Header_header__1QYwk"}},40:function(e,t,n){e.exports={day:"DayOfMonth_day__1puXF"}},41:function(e,t,n){e.exports={event:"Event_event__2NQqm"}},42:function(e,t,n){e.exports={calendar:"CalendarMonth_calendar__1hxA0"}},44:function(e,t,n){e.exports=n(65)},49:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){e.exports={week:"RowOfMonth_week__2ZlD1"}},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),l=(n(49),n(12)),u=n(43),i=n(23),s=n(16),d=n(26),v=function(e){return d.months[e.getMonth()]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}},h=function(e){var t=[];e.setDate(1),e.setMonth(e.getMonth()+1);var n=e.getMonth();e.setMonth(e.getMonth()-1);var a=p(e);for(e.setDate(e.getDate()-a);e.getMonth()!==n;){for(var r=[],o=0;o<7;o+=1)r.push(E(e)),e.setDate(e.getDate()+1);t.push(r)}return t},p=function(e){var t=e.getDay();return 0===t&&(t=7),t-1},f={MONTH:"month",WEEK:"week",DAY:"day"},m=(new Date,Object(l.combineReducers)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s.b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_EVENT":return e.set(a.id,a.event);case"DELETE_EVENT":return e.delete(a);case"CHANGE_EVENT":return e.update(a.id,function(e){return e.merge(a.event)});default:return e}},dateEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s.b({eventDate:E()}),t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_EVENT":return e.updateIn(Object.values(e.get("eventDate")),function(e){return e?e.push(a.id):new s.a([a.id])});case"DELETE_EVENT":var r=e.getIn(Object.values(e.get("eventDate"))).findIndex(function(e){return e===a});return e.deleteIn([].concat(Object(u.a)(Object.values(e.get("eventDate"))),[r]));case"SET_DATE_EVENT":case"BACK_DATE_WITH_ANY_FORMAT":case"NEXT_DATE_WITH_ANY_FORMAT":case"SET_CURRENT_DATE_TODAY":return e.update("eventDate",function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E(),t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_DATE_EVENT":return Object(i.a)({},e,a);default:return e}}(e,{type:n,payload:a})});default:return e}},typeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.MONTH,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_TYPE_DISPLAY":return a;default:return e}},currentDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"BACK_DATE_WITH_ANY_FORMAT":var r=new Date(e);return r.setMonth(r.getMonth()-1),r;case"NEXT_DATE_WITH_ANY_FORMAT":var o=new Date(e);return o.setMonth(o.getMonth()+1),o;case"SET_CURRENT_DATE_TODAY":return new Date;case"SET_CURRENT_DAT":return a;default:return e}}})),g=n(33),y=n(2),_=n(3),D=n(5),b=n(4),T=n(6),C=n(34),O=function(e){return e.currentDate},j=function(e){return e.typeDisplay},k=function(e,t){var n=function(e,t){return e.dateEvents.getIn(Object.values(t.date))}(e,t);if(n)return n.map(function(t){return e.events.get(t)})},A=Object(C.a)([O,j],function(e,t){var n=new Date(e);switch(t){case f.MONTH:return h(n);case f.WEEK:return function(e){var t=p(e);e.setDate(e.getDate()-t);for(var n=[],a=0;a<7;a+=1)n.push(e.getDate()),e.setDate(e.getDate()+1);return n}(n);default:return h(n)}}),N=n(35),M=function(e){return{type:"SET_TYPE_DISPLAY",payload:e}},w=n(11),x=(n(62),function(e){var t=e.type,n=void 0===t?"button":t,a=e.onClick,o=void 0===a?function(){return null}:a,c=e.children;return r.a.createElement("button",{type:n,onClick:o},c)}),R=n(36),S=n.n(R),Y=function(e){var t=e.text;return r.a.createElement("h2",{className:S.a.title},t)},F=n(15),I=function(e){var t=e.options,n=e.value,a=e.onChange;return r.a.createElement("select",{value:n,onChange:a},t.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))},V=[{label:"\u041c\u0435\u0441\u044f\u0446",value:f.MONTH},{label:"\u041d\u0435\u0434\u0435\u043b\u044f",value:f.WEEK},{label:"\u0414\u0435\u043d\u044c",value:f.DAY}],H=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(D.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleChangeValue=function(e){var t=e.target,a=n.props,r=a.setTypeDisplay,o=a.history;r(t.value),o.push("/".concat(t.value))},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props.typeDisplay;return r.a.createElement(I,{options:V,value:e,onChange:this.handleChangeValue})}}]),t}(r.a.Component),W={setTypeDisplay:M},B=Object(l.compose)(Object(w.b)(function(e){return{typeDisplay:j(e)}},W),F.e)(H),K=n(38),L=n.n(K),P=function(e){var t=e.setDateToday,n=e.backDate,a=e.nextDate,o=e.date;return r.a.createElement("header",{className:L.a.header},r.a.createElement(Y,{text:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440"}),r.a.createElement(x,{onClick:t},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"),r.a.createElement(x,{onClick:n},"<"),r.a.createElement(x,{onClick:a},">"),r.a.createElement(Y,{text:"".concat(v(o)," ").concat(o.getFullYear())}),r.a.createElement(B,null))},U={setDateToday:function(){return{type:"SET_CURRENT_DATE_TODAY"}},backDate:function(){return{type:"BACK_DATE_WITH_ANY_FORMAT"}},nextDate:function(){return{type:"NEXT_DATE_WITH_ANY_FORMAT"}}},q=Object(w.b)(function(e){return{date:O(e)}},U)(P),G=n(39),X=(n(64),n(40)),J=n.n(X),Q=n(41),Z=n.n(Q),z=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(D.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isToggle:!1},n.handleToggle=function(){return n.setState(function(e){return{isToggle:!e.isToggle}})},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.state.isToggle;return(0,this.props.children)({isToggle:e,toggle:this.handleToggle})}}]),t}(r.a.Component),$=document.getElementById("modal-root"),ee=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(D.a)(this,Object(b.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){$.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){$.removeChild(this.el)}},{key:"render",value:function(){return c.a.createPortal(this.props.children,this.el)}}]),t}(r.a.Component),te=n(18),ne=n.n(te),ae=function(e){var t=e.deleteEvent,n=e.changeColor,a=e.colors,o=e.id,c=e.onClose,l=e.currentColor,u=e.style,i=r.a.createRef();return console.log(u),r.a.createElement("div",{ref:function(e){return i=e},onClick:function(e){e.stopPropagation(),e.target===i&&c()},className:ne.a.modal},r.a.createElement("div",{className:ne.a.content,style:u},r.a.createElement("button",{type:"Button",onClick:function(){t(o),c()}},"delete"),r.a.createElement("div",{className:ne.a.colors},a.map(function(e){return r.a.createElement("span",{className:e===l?ne.a.activeColor:ne.a.color,key:e.name,style:{backgroundColor:e.color},onClick:function(){return n(e)}})}))))},re=[{name:"blue",color:"blue"},{name:"aqua",color:"aqua"},{name:"darkviolet",color:"darkviolet"},{name:"darkgreen",color:"darkgreen"}],oe=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(D.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={colorEvent:re[0],styleContextMenu:null},n.handleChangeColor=function(e){n.setState({colorEvent:e})},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.event,a=t.deleteEvent,o=t.setCurrentDate,c=this.state,l=c.colorEvent,u=c.styleContextMenu,i={backgroundColor:l.color};return r.a.createElement(z,null,function(t){var c=t.isToggle,s=t.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.event,onContextMenu:function(t){t.preventDefault();var n=t.target.getBoundingClientRect(),a=n.left,r=n.top,c=n.height,l=window,u=l.innerWidth;r=100*(r+c)/l.innerHeight;var i={left:"".concat(a=100*a/u,"%"),top:"".concat(r,"%")};e.setState({styleContextMenu:i}),s(),o()},style:i},n.get("text")),c&&r.a.createElement(ee,null,r.a.createElement(ae,{colors:re,deleteEvent:a,id:n.get("id"),onClose:s,changeColor:e.handleChangeColor,currentColor:l,style:u})))})}}]),t}(r.a.Component),ce=Object(w.b)(function(e,t){return{events:k(e,t)}})(function(e){var t=e.date,n=e.setCurrentDate,a=e.deleteEvent,o=e.events,c=void 0===o?[]:o;console.log(c);var l=function(e){n(t)};return r.a.createElement("div",{className:J.a.day,onClick:l},t.date,c.map(function(e){return r.a.createElement(oe,{key:e.get("id"),event:e,deleteEvent:a,setCurrentDate:l})}))}),le=function(e){var t=e.week,n=e.setCurrentDate,a=e.deleteEvent;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(ce,{date:e,key:t,setCurrentDate:n,deleteEvent:a})}))},ue=n(42),ie=n.n(ue),se=n(30),de=n.n(se),ve=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(D.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).backElement=r.a.createRef(),n.state={text:""},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleAddEvent=function(){var e=n.props,t=e.addEvent,a=e.onClose;t(n.state),a()},n.closeModal=function(e){var t=n.props.onClose;e.target===n.backElement.current&&t()},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props.onClose,t=this.state.text;return r.a.createElement("div",{className:de.a.modal,onClick:this.closeModal,ref:this.backElement},r.a.createElement("div",{className:de.a.content},r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleAddEvent},"Save"),r.a.createElement("button",{onClick:e},"canvel")))}}]),t}(r.a.Component),Ee=function(e){var t=e.data,n=e.setCurrentDate,a=e.addEvent,o=e.deleteEvent;return r.a.createElement(z,null,function(e){var c=e.isToggle,l=e.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ie.a.calendar,onClick:l},t.map(function(e,t){return r.a.createElement(le,{week:e,key:t,setCurrentDate:n,deleteEvent:o})})),c&&r.a.createElement(ee,null,r.a.createElement(ve,{onClose:l,addEvent:a})))})},he=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{path:"/month",render:function(){return r.a.createElement(Ee,e)}}),r.a.createElement(F.a,{path:"/week",render:function(){return r.a.createElement("h1",null,"week")}}),r.a.createElement(F.a,{path:"/day",render:function(){return r.a.createElement("h1",null,"day")}}))},pe=function(e){function t(){return Object(y.a)(this,t),Object(D.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.format,t=this.props.setTypeDisplay;!function(e){return Object.values(f).some(function(t){return t===e})}(e)?this.props.history.replace("/month"):t(e)}},{key:"render",value:function(){var e=this.props,t=(e.history,e.location,e.match),n=e.typeDisplay,a=Object(G.a)(e,["history","location","match","typeDisplay"]);return t.params.format===n?r.a.createElement(he,a):null}}]),t}(r.a.Component),fe={setTypeDisplay:M,addEvent:function(e){var t=N.generate();return{type:"ADD_EVENT",payload:{id:t,event:new s.b(Object(i.a)({id:t},e))}}},deleteEvent:function(e){return{type:"DELETE_EVENT",payload:e}},changeEvent:function(e,t){return{type:"CHANGE_EVENT",payload:{id:e,event:new s.b(t)}}},setCurrentDate:function(e){return{type:"SET_DATE_EVENT",payload:e}}},me=Object(w.b)(function(e){return{data:A(e),typeDisplay:j(e)}},fe)(pe),ge=function(e){function t(){return Object(y.a)(this,t),Object(D.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(F.a,{exact:!0,path:"/:format",component:me}))}}]),t}(r.a.Component),ye=n(19),_e=Object(l.createStore)(m,Object(g.devToolsEnhancer)());c.a.render(r.a.createElement(w.a,{store:_e},r.a.createElement(ye.a,null,r.a.createElement(F.a,{component:ge}))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.086acd6d.chunk.js.map