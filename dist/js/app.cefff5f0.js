(function(t){function e(e){for(var s,i,r=e[0],c=e[1],u=e[2],d=0,b=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/CalendarFrontend/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},2795:function(t,e,n){"use strict";var s=n("9719"),a=n.n(s);a.a},"3e20":function(t,e,n){},"46cf":function(t,e,n){},"4c28":function(t,e,n){"use strict";var s=n("c84a"),a=n.n(s);a.a},5653:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid align-items-center text-center w-100",attrs:{id:"app"}},[t.showAuthModal?n("ModalAuth",{attrs:{authType:t.authType},on:{close:function(e){return t.authenticate()}}}):t._e(),n("div",{staticClass:"auth text-right row w-100 d-flex align-items-center justify-content-end"},[n("flash-message",{staticClass:"alerts"}),n("h4",[n("button",{staticClass:"button btn-sm btn-success",on:{click:function(e){return t.fetchJobsWithNumber(7)}}},[t._v("7")]),n("button",{staticClass:"button btn-sm btn-success",on:{click:function(e){return t.fetchJobsWithNumber(14)}}},[t._v("14")]),n("button",{staticClass:"button btn-sm btn-success",on:{click:function(e){return t.fetchJobsWithNumber(30)}}},[t._v("30")]),n("button",{staticClass:"ml-2 btn-sm btn-success",on:{click:function(e){return t.auth("login")}}},[t._v("Log in")]),n("button",{staticClass:"mr-2 button btn-sm btn-success",on:{click:function(e){return t.auth("register")}}},[t._v("Register")])])],1),t._l(t.days,(function(e){return n("div",[n("Day",{attrs:{day:e},on:{refresh:function(e){return t.fetchDays()}}})],1)}))],2)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dady",attrs:{id:"Day"}},[n("h1",[t._v(t._s(t.date))]),n("ul",t._l(t.day.jobs,(function(e){return n("Job",{key:e.id,attrs:{job:t.JobDataTransform(e)},on:{remove:function(n){return t.removeJob(e)},edit:t.editJob,add:function(n){return t.addJob(e)}}})})),1),n("button",{staticClass:"btn btn-sm btn-custom p-0",attrs:{type:"button",id:"addBtn"},on:{click:function(e){t.showModal=!0}}},[n("font-awesome-icon",{attrs:{icon:"plus-square"}})],1),t.showModal?n("ModalAdd",{attrs:{"crud-operation":"add",job:t.emptyJob},on:{add:function(e){return t.addJob(t.emptyJob)},close:function(e){t.showModal=!1}}}):t._e(),n("hr")],1)},r=[],c=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Job"}},[n("div",{staticClass:"text-left m-0 p-0"},[n("div",{staticClass:"job-text"},[n("h4",{staticClass:"p-0 m-0"},[t._v(t._s(t.job.text))])])]),n("div",{staticClass:"btn-group-sm text-left",attrs:{role:"group"}},[t.job.prio?n("button",{staticClass:"btn btn-sm btn-custom pl-0",style:{color:t.getPrioColor},attrs:{type:"button"}},[t._v("Prio: "+t._s(t.job.prio)+"\n        ")]):t._e(),t.date?n("button",{staticClass:"btn btn-sm btn-custom",style:{color:t.getDeadLineColor},attrs:{type:"button"}},[t._v("Dead\n            Line: "+t._s(t.date)+"\n        ")]):t._e(),n("button",{staticClass:"btn btn-sm btn-custom p-0",attrs:{type:"button",id:"removeBtn"},on:{click:function(e){return t.removeJob(t.job)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("button",{staticClass:"btn btn-sm btn-custom p-0",attrs:{type:"button",id:"editBtn"},on:{click:function(e){t.showModal=!0}}},[n("font-awesome-icon",{attrs:{icon:"pen-square"}})],1)]),t.showModal?n("modal",{attrs:{job:t.job},on:{edit:function(e){return t.editJob(t.job)},close:function(e){t.showModal=!1}}}):t._e()],1)}),u=[],l=(n("a481"),n("d225")),d=n("b0b4"),b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"task",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;Object(l["a"])(this,t),this.type=e,this.text=n,this.prio=s,this.deadLine=a,this.id=o,this.day=i,this.user=r,this.perpetual=c}return Object(d["a"])(t,[{key:"jobRequest",value:function(){return{type:this.type,text:this.text,prio:this.prio,deadLine:this.deadLine,day:this.day,perpetual:this.perpetual}}}]),t}(),p=b,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("h4",[t._v("Edit existing task\n                    "),n("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"pen-alt"}})],1)]),n("div",{staticClass:"modal-body justify-content-center flex-nowrap"},[n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.job.text,expression:"job.text"}],attrs:{type:"text",required:""},domProps:{value:t.job.text},on:{input:function(e){e.target.composing||t.$set(t.job,"text",e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"}),n("label",[t._v(t._s(t.job.type))])]),n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.job.prio,expression:"job.prio"}],attrs:{type:"number",required:""},domProps:{value:t.job.prio},on:{input:function(e){e.target.composing||t.$set(t.job,"prio",e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"}),n("label",[t._v("Prio")])]),n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.job.deadLine,expression:"job.deadLine"}],attrs:{type:"date",required:""},domProps:{value:t.job.deadLine},on:{input:function(e){e.target.composing||t.$set(t.job,"deadLine",e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"})])]),n("div",{staticClass:"modal-footer justify-content-start"},[n("button",{staticClass:"btn-sm btn-primary",on:{click:function(e){return t.$emit("edit",t.job)}}},[t._v("\n                        SAVE\n                ")]),n("button",{staticClass:"btn-sm btn-primary",on:{click:function(e){return t.$emit("close")}}},[t._v("\n                    close\n                ")])])])])])},h=[],m={name:"Modal",methods:{},props:{showModal:{type:Boolean,default:function(){return!1}},job:p,crudOperation:{type:String,default:function(){return"edit"}}}},v=m,y=(n("fb89"),n("2877")),g=Object(y["a"])(v,f,h,!1,null,"28d6f9f8",null),j=g.exports,C={name:"Job",methods:{editJob:function(t){this.showModal=!1,this.$emit("edit",t)},removeJob:function(t){this.$emit("remove",t)}},components:{Modal:j},props:{job:p},data:function(){return{showModal:!1}},computed:{date:function(){if(this.job.deadLine){var t=this.job.deadLine.split("T");return t[0].replace(/-/g,"/")}return this.job.deadLine},getPrioColor:function(){var t=this.job.prio;return t<5?"green":t>=5&&t<=10?"orange":"red"},getDeadLineColor:function(){var t=new Date,e=this.job.deadLine.split("T"),n=new Date(e[0]),s=Math.round((t.getTime()-n.getTime())/-1e8);return s<5?"red":s>=5&&s<10?"orange":"green"}}},w=C,_=(n("a2c3"),Object(y["a"])(w,c,u,!1,null,"35288d8d",null)),x=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("h4",[t._v("Add new task\n                    "),n("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"laptop-code"}})],1)]),n("div",{staticClass:"modal-body justify-content-center flex-nowrap"},[n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.job.text,expression:"job.text"}],attrs:{type:"text",required:""},domProps:{value:t.job.text},on:{input:function(e){e.target.composing||t.$set(t.job,"text",e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"}),n("label",[t._v(t._s(t.job.type))])]),n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.job.prio,expression:"job.prio"}],attrs:{type:"number",required:""},domProps:{value:t.job.prio},on:{input:function(e){e.target.composing||t.$set(t.job,"prio",e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"}),n("label",[t._v("Prio")])]),n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.job.deadLine,expression:"job.deadLine"}],attrs:{type:"date",required:""},domProps:{value:t.job.deadLine},on:{input:function(e){e.target.composing||t.$set(t.job,"deadLine",e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"})]),n("div",{staticClass:"group mt-4 d-flex justify-content-start w-100"},[n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.pon},on:{click:function(e){t.days.pon=!t.days.pon}}},[t._v("Pon")]),n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.wto},on:{click:function(e){t.days.wto=!t.days.wto}}},[t._v("Wto")]),n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.sro},on:{click:function(e){t.days.sro=!t.days.sro}}},[t._v("Sro")]),n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.czw},on:{click:function(e){t.days.czw=!t.days.czw}}},[t._v("Czw")]),n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.pia},on:{click:function(e){t.days.pia=!t.days.pia}}},[t._v("Pia")]),n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.sob},on:{click:function(e){t.days.sob=!t.days.sob}}},[t._v("Sob")]),n("button",{staticClass:"button btn-sm btn-secondary",class:{"btn-success":t.days.nie},on:{click:function(e){t.days.nie=!t.days.nie}}},[t._v("Nie")])])]),n("div",{staticClass:"modal-footer justify-content-start"},[n("button",{staticClass:"btn-sm btn-primary",on:{click:function(e){t.addJob(this),t.crudOperation="add"}}},[t._v("\n                    save\n                ")]),n("button",{staticClass:"btn-sm btn-primary",on:{click:function(e){return t.$emit("close")}}},[t._v("\n                    close\n                ")])])])])])},J=[],O=(n("ac6a"),n("ffc1"),{name:"ModalAdd",data:function(){return{days:{pon:!1,wto:!1,sro:!1,czw:!1,pia:!1,sob:!1,nie:!1}}},methods:{addJob:function(){this.job.perpetual=this.getPerpetualDays(this.days),this.$emit("add",this.job)},getPerpetualDays:function(t){for(var e=Object.entries(t),n=[],s=0;s<e.length;s++){var a=e[s][1],o=e[s][0];a&&n.push(o)}return n}},props:{showModal:{type:Boolean,default:function(){return!1}},job:p,crudOperation:String}}),M=O,P=(n("9b76"),Object(y["a"])(M,k,J,!1,null,"3cc4f6cc",null)),D=P.exports,$=(n("7f7f"),n("bc3a")),L=n.n($),S="http://localhost:9090",A=L.a.create({baseURL:S}),T="/job",N={editJob:function(t){return A.put("".concat(T),t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},removeJob:function(t){return A.delete("".concat(T,"/").concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},addJob:function(t){return A.post("".concat(T),t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},getAllJobs:function(t){return A.get(T+"?numberOfDays="+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}},q="/auth",W={login:function(t){return localStorage.setItem("token",""),A.post(q+"/login",t)},registerUser:function(t){return localStorage.setItem("token",""),A.post(q+"/register",t)}},z={job:N,auth:W},B={get:function(t){return z[t]}};function E(t){switch(t){case 6:return"Sob.";case 0:return"Nd.";case 1:return"Pon.";case 2:return"Wt.";case 3:return"Śr.";case 4:return"Czw.";case 5:return"Pt."}}var I={name:"Day",methods:{removeJob:function(t){var e=this,n=this.day.jobs.indexOf(t);this.day.jobs.splice(n,1),this.repo.removeJob(t.id).then((function(){e.$emit("refresh"),e.flash("Removed :)","success")})).catch((function(t){e.flash("Wasnt able to remove:"+t,"error")}))},addJob:function(t){var e=this;this.showModal=!1,t.day=this.day.day,this.repo.addJob(t).then((function(){e.$emit("refresh"),e.flash("Added :)","success")})).catch((function(t){e.flash("Wasnt able to add:"+t,"error")}))},editJob:function(t){var e=this;t.day=this.day.day,this.repo.editJob(new p(t.type,t.text,t.prio,t.deadLine,t.id,t.day)).then((function(){e.$emit("refresh"),e.flash("Edited :)","success")})).catch((function(t){e.flash("Wasnt able to edit:"+t,"error")}))},JobDataTransform:function(t){return new p(t.type,t.text,t.prio,t.deadLine,t.id)}},computed:{date:function(){var t=this.day.day.split("T");t=t[0].split("-").splice(1,2),t=t.join("/");var e=new Date(this.day.day.split("T")[0]).getDay();return E(e)+" "+t}},props:{day:Object},components:{Job:x,ModalAdd:D},data:function(){return{showModal:!1,emptyJob:new p,repo:B.get("job")}}},R=I,U=(n("4c28"),Object(y["a"])(R,i,r,!1,null,"7efa3a78",null)),F=U.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("h4",[t._v("\n                    "+t._s(t.authType)+"\n                ")])]),n("div",{staticClass:"modal-body justify-content-center flex-nowrap"},[n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"}),n("label",[t._v("Login")])]),n("div",{staticClass:"group mt-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{staticClass:"highlight"}),n("span",{staticClass:"bar"}),n("label",[t._v("Password")])])]),n("div",{staticClass:"modal-footer justify-content-start"},[n("button",{staticClass:"btn-sm btn-primary",on:{click:function(e){return t.auth()}}},[t._v("\n                    "+t._s(t.authType)+"\n                ")]),n("button",{staticClass:"btn-sm btn-primary",on:{click:function(e){return t.$emit("close")}}},[t._v("\n                    close\n                ")])])])])])},G=[],H={name:"ModalAuth",data:function(){return{username:"",password:""}},props:{authType:String},methods:{auth:function(){var t=this;"login"===this.authType?W.login({username:this.username,password:this.password}).then((function(e){localStorage.setItem("token",e.data),t.$emit("close"),t.flash("Logged in :)","success")})).catch((function(e){t.flash("Wrong credentials :(","error")})):W.registerUser({username:this.username,password:this.password}).then((function(e){localStorage.setItem("token",e.data),t.$emit("close"),t.flash("Registered :)","success")})).catch((function(e){t.flash("Wrong credentials :(","error")}))}}},K=H,Q=(n("2795"),Object(y["a"])(K,V,G,!1,null,"2d8acd84",null)),X=Q.exports;n("f59c");var Y=B.get("job"),Z={name:"app",components:{Day:F,ModalAuth:X},data:function(){return{days:[],authType:String,showAuthModal:!1,numberOfDays:14}},methods:{fetchDays:function(){var t=this;Y.getAllJobs(this.numberOfDays).then((function(e){t.days=e.data})).catch((function(e){return t.flash("Data didnt fetch :( cause:"+e,"error")}))},auth:function(t){this.showAuthModal=!0,this.authType=t},authenticate:function(){this.showAuthModal=!1,this.fetchDays()},fetchJobsWithNumber:function(t){this.numberOfDays=t,this.fetchDays()}},created:function(){this.fetchDays()}},tt=Z,et=(n("034f"),Object(y["a"])(tt,a,o,!1,null,null,null)),nt=et.exports,st=(n("4989"),n("ab8b"),n("ecee")),at=n("c074"),ot=n("ad3d"),it=n("d00d"),rt=n.n(it);s["a"].use(rt.a,{messageOptions:{timeout:1e3}}),st["c"].add(at["e"],at["c"],at["d"],at["b"],at["a"],at["g"],at["f"]),s["a"].component("font-awesome-icon",ot["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(nt)}}).$mount("#app")},"64a9":function(t,e,n){},9719:function(t,e,n){},"9b76":function(t,e,n){"use strict";var s=n("5653"),a=n.n(s);a.a},a2c3:function(t,e,n){"use strict";var s=n("46cf"),a=n.n(s);a.a},c84a:function(t,e,n){},fb89:function(t,e,n){"use strict";var s=n("3e20"),a=n.n(s);a.a}});
//# sourceMappingURL=app.cefff5f0.js.map