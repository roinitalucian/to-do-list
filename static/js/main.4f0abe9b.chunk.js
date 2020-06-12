(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(7),o=a.n(l),i=(a(13),function(e){return e.children}),c=(a(14),function(e){return n.a.createElement(i,null,n.a.createElement("main",{className:"Content"},e.children))}),s=a(1),m=a(2),d=a(4),u=a(3),p=a(5),h=(a(15),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={editMode:!1},e.enterEditMode=function(){e.setState({editMode:!0})},e.exitEditMode=function(){e.setState({editMode:!1})},e.formatDate=function(e){var t=e.getFullYear()+"-";return e.getMonth()<9&&(t+="0"),t=t+(e.getMonth()+1)+"-",e.getDate()<9&&(t+="0"),t=t+e.getDate()+"T",e.getHours()<9&&(t+="0"),t=t+e.getHours()+":",e.getMinutes()<9&&(t+="0"),t+=e.getMinutes()},e.saveEdit=function(t){t.preventDefault(),e.props.editEntry(t),e.setState({editMode:!1})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=n.a.createElement(i,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card list-entry "+this.props.status},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",null,n.a.createElement("h4",{className:"card-title"},this.props.title),n.a.createElement("p",{className:"card-text"},this.props.description),n.a.createElement("p",null,this.props.deadline.toLocaleDateString()," ",this.props.deadline.toLocaleTimeString())),n.a.createElement("div",{className:"ml-auto"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("div",{"data-toggle":"dropdown"},n.a.createElement("p",{align:"right"},n.a.createElement("i",{className:"fas fa-bars",style:{fontSize:"2.5vh"}}))),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("div",{className:"dropdown-item",onClick:this.enterEditMode},"Edit"),n.a.createElement("div",{className:"dropdown-item",onClick:this.props.clickDelete},"Delete"))),n.a.createElement("p",{align:"right"},"Priority: ",n.a.createElement("span",{className:"pr-text "+this.props.priority},this.props.priority)),n.a.createElement("button",{type:"button",className:"btn "+this.props.status+"-btn",onClick:this.props.clickComplete},"Mark as completed"))))))),t=n.a.createElement(i,null,n.a.createElement("form",{onSubmit:this.saveEdit},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card list-entry "+this.props.status},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",null,n.a.createElement("h4",{className:"card-title"},n.a.createElement("input",{className:"form-control",type:"text",name:"title",defaultValue:this.props.title})),n.a.createElement("p",{className:"card-text"},n.a.createElement("textarea",{className:"form-control",name:"description",defaultValue:this.props.description})),n.a.createElement("p",null,n.a.createElement("input",{className:"form-control form-control-sm",type:"datetime-local",id:"dateSelect",name:"date",defaultValue:this.formatDate(this.props.deadline)}))),n.a.createElement("div",{className:"ml-auto"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("div",{"data-toggle":"dropdown"},n.a.createElement("p",{align:"right"},n.a.createElement("i",{className:"fas fa-bars",style:{fontSize:"2.5vh"}}))),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("div",{className:"dropdown-item"},"Edit"),n.a.createElement("div",{className:"dropdown-item",onClick:this.props.clickDelete},"Delete"))),n.a.createElement("p",{className:"form-inline",align:"right"},"Priority:",n.a.createElement("select",{className:"marginLeft form-control form-control-sm",id:"prioritySelect",defaultValue:this.props.priority,name:"priority"},n.a.createElement("option",{value:"low"},"low"),n.a.createElement("option",{value:"moderate"},"moderate"),n.a.createElement("option",{value:"high"},"high"))),n.a.createElement("div",{className:"marginRightZero"},n.a.createElement("button",{type:"button",className:"marginRight btn",onClick:this.exitEditMode},"Cancel"),n.a.createElement("input",{type:"submit",className:"btn",value:"Save"})))))))));return this.state.editMode?t:e}}]),a}(r.Component)),E=(a(16),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={value:"default"},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(i,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"d-flex justify-content-end"},n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",id:"showExpired",className:"checkLabel",onChange:this.props.showExpiredClick}),n.a.createElement("label",{htmlFor:"showExpired",className:"checkLabel"},"Hide expired"),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",id:"showCompleted",className:"checkLabel",onChange:this.props.showCompletedClick}),n.a.createElement("label",{htmlFor:"showCompleted",className:"checkLabel"},"Hide completed"),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"sortBy",className:"checkLabel"},"Sort by:"),n.a.createElement("select",{id:"sortBy",className:"checkLabel",onChange:this.props.sort},n.a.createElement("option",{value:"default"},"default"),n.a.createElement("option",{value:"date"},"due date"),n.a.createElement("option",{value:"priority"},"priority"))))))}}]),a}(r.Component)),f=(a(17),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).reverseButton=function(){var e=document.getElementById("plusButton"),t=document.getElementById("submitButton");"fa fa-plus-square"===e.className?(e.className="fa fa-minus-square",t.style.display="initial"):(e.className="fa fa-plus-square",t.style.display="none")},e.submitForm=function(){},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(i,null,n.a.createElement("form",{onSubmit:this.props.addClick.bind(this),id:"addForm"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"demo",className:"collapse"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{rows:"4",className:"form-control",placeholder:"Description",name:"description"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-inline"},n.a.createElement("label",{htmlFor:"prioritySelect",className:"marginRight"},"Priority:"),n.a.createElement("select",{className:"form-control form-control-sm marginRight",id:"prioritySelect",defaultValue:"moderate",name:"priority"},n.a.createElement("option",{value:"low"},"low"),n.a.createElement("option",{value:"moderate"},"moderate"),n.a.createElement("option",{value:"high"},"high")),n.a.createElement("label",{htmlFor:"dateSelect",className:"marginRight"},"Due date:"),n.a.createElement("input",{className:"form-control form-control-sm",type:"datetime-local",id:"dateSelect",name:"date"})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("i",{type:"button",className:"fa fa-plus-square","aria-hidden":"true","data-toggle":"collapse","data-target":"#demo",style:{fontSize:"7vh"},onClick:this.reverseButton,id:"plusButton"}),n.a.createElement("input",{type:"submit",className:"fa fa-plus-square","aria-hidden":"true",style:{fontSize:"7vh"},id:"submitButton"})))))}}]),a}(r.Component)),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={toDos:[],showExpired:!0,showCompleted:!0},e.idMax=0,e.deleteEntryHandler=function(t){var a=Object(p.a)(e.state.toDos);a.splice(t,1),e.setState({toDos:a})},e.completeHandler=function(t){var a=Object(p.a)(e.state.toDos);a[t].status="completed",e.setState({toDos:a})},e.showExpiredHandler=function(){e.setState({showExpired:!e.state.showExpired})},e.showCompletedHandler=function(){e.setState({showCompleted:!e.state.showCompleted})},e.sortHandler=function(t){console.log(t.target.value);var a=Object(p.a)(e.state.toDos);switch(t.target.value){case"priority":a.sort(e.prioritySort);break;case"date":a.sort(e.deadlineSort);break;default:a.sort(e.defaultSort)}e.setState({toDos:a})},e.addHandler=function(t){t.preventDefault();var a=t.target.title.value,r=t.target.description.value,n=new Date(t.target.date.value),l=t.target.priority.value,o=Object(p.a)(e.state.toDos);o.unshift({id:e.idMax++,title:a,description:r,deadline:n,priority:l,status:"due"}),e.setState({toDos:o})},e.editEntryHandler=function(t){return function(a){a.preventDefault(),console.log(a),console.log(t);var r=a.target.title.value,n=a.target.description.value,l=new Date(a.target.date.value),o=a.target.priority.value,i=Object(p.a)(e.state.toDos);i[t].title=r,i[t].description=n,i[t].deadline=l,i[t].priority=o,e.setState({toDos:i})}},e}return Object(m.a)(a,[{key:"prioritySort",value:function(e,t){return e.priority===t.priority?0:"high"===e.priority||"moderate"===e.priority&&"low"===t.priority?-1:1}},{key:"deadlineSort",value:function(e,t){return e.deadline<t.deadline?-1:1}},{key:"defaultSort",value:function(e,t){return e.id>t.id?-1:1}},{key:"render",value:function(){var e=this,t=this.state.toDos.map((function(t,a){return!1===e.state.showExpired&&"expired"===t.status||!1===e.state.showCompleted&&"completed"===t.status?null:n.a.createElement(h,{clickDelete:function(){return e.deleteEntryHandler(a)},clickComplete:function(){return e.completeHandler(a)},title:t.title,description:t.description,deadline:t.deadline,priority:t.priority,status:t.status,editEntry:e.editEntryHandler(a),key:t.id})}));return n.a.createElement(i,null,n.a.createElement(f,{addClick:this.addHandler}),n.a.createElement(E,{showExpiredClick:this.showExpiredHandler,showCompletedClick:this.showCompletedHandler,sort:this.sortHandler}),t)}}]),a}(r.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(i,null,n.a.createElement(v,null))}}]),a}(r.Component);a(18);var g=function(){return n.a.createElement("div",null,n.a.createElement(c,null,n.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4f0abe9b.chunk.js.map