(function(t){function e(e){for(var n,r,s=e[0],l=e[1],d=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/wallet/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("1da1"),o=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("96cf"),a("2b0e")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-container",[t.ready&&!t.user?a("LoginForm"):t._e(),a("v-fade-transition",{attrs:{mode:"out-in"}},[t.ready&&t.user?a("router-view"):t._e()],1)],1)],1),t.ready&&t.user?a("Navigator"):t._e()],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-bottom-navigation",{attrs:{app:"",grow:"",color:"indigo"},model:{value:t.route,callback:function(e){t.route=e},expression:"route"}},[a("v-btn",{attrs:{color:"white",value:"Home",to:"/"}},[a("span",[t._v("概覽")]),a("v-icon",[t._v("mdi-calendar")])],1),a("v-btn",{staticClass:"new-btn",attrs:{color:"white",value:"New"},on:{click:function(e){e.stopPropagation(),t.$store.commit("mode_new"),t.$store.commit("show_dialog")}}},[a("span",[t._v("記帳")]),a("v-icon",[t._v("mdi-plus-box-multiple")])],1),a("v-btn",{attrs:{color:"white",value:"Setting",to:"/setting"}},[a("span",[t._v("設定")]),a("v-icon",[t._v("mdi-cog")])],1)],1)],1)},l=[],d={data:function(){return{route:""}}},c=d,u=(a("6cad"),a("2877")),p=a("6544"),_=a.n(p),g=a("b81c"),m=a("8336"),f=a("132d"),v=Object(u["a"])(c,s,l,!1,null,null,null),b=v.exports;_()(v,{VBottomNavigation:g["a"],VBtn:m["a"],VIcon:f["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-5"},[a("v-toolbar",{attrs:{dark:"",dense:"",color:"indigo"}},[a("v-tabs",{attrs:{dark:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[a("v-tab",[t._v("登入")]),a("v-tab",[t._v("註冊")])],1)],1),a("v-card-text",[a("v-tabs-items",{model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[a("v-tab-item",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Email",type:"text"},model:{value:t.login_data.email,callback:function(e){t.$set(t.login_data,"email",e)},expression:"login_data.email"}}),a("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-lock",label:"Password",type:"password"},model:{value:t.login_data.password,callback:function(e){t.$set(t.login_data,"password",e)},expression:"login_data.password"}}),a("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("login")])],1)],1),a("v-tab-item",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.signup.apply(null,arguments)}}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Email",type:"text"},model:{value:t.signup_data.email,callback:function(e){t.$set(t.signup_data,"email",e)},expression:"signup_data.email"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",label:"Password",type:"password"},model:{value:t.signup_data.password,callback:function(e){t.$set(t.signup_data,"password",e)},expression:"signup_data.password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",label:"Comfirm Password",type:"password"},model:{value:t.signup_data.comfirm_password,callback:function(e){t.$set(t.signup_data,"comfirm_password",e)},expression:"signup_data.comfirm_password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-account",label:"Name",type:"text"},model:{value:t.signup_data.name,callback:function(e){t.$set(t.signup_data,"name",e)},expression:"signup_data.name"}}),a("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("signup")])],1)],1)],1)],1)],1)],1)],1),a("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",icon:""},on:{click:function(e){t.snackbar.display=!1}}},"v-btn",n,!1),[a("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar.display,callback:function(e){t.$set(t.snackbar,"display",e)},expression:"snackbar.display"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},x=[],y=(a("b0c0"),a("ea7b")),k=a("e71f"),w={name:"LoginForm",data:function(){return{login_data:{email:"",password:""},signup_data:{email:"",password:"",comfirm_password:"",name:""},snackbar:{display:!1,text:""},mode:0}},methods:{login:function(){var t=this,e=Object(y["b"])();Object(y["d"])(e,this.login_data.email,this.login_data.password).then((function(e){e.user&&t.$store.commit("set_uid",e.user.uid)})).catch((function(e){t.snackbar.text=e.code,t.snackbar.display=!0}))},signup:function(){var t=this;if(this.signup_data.password!=this.signup_data.comfirm_password)return this.snackbar.text="密碼不相符",void(this.snackbar.display=!0);var e=Object(y["b"])();Object(y["a"])(e,this.signup_data.email,this.signup_data.password).then((function(e){var a=e.user;return t.$store.commit("set_uid",a.uid),Object(y["f"])(a,{displayName:t.signup_data.name})})).then((function(){var e=Object(k["c"])(Object(k["f"])(),"service",t.$store.state.uid),a={expense:[{name:"早餐",color:"#2196F3"},{name:"午餐",color:"#607D8B"},{name:"晚餐",color:"#4CAF50"},{name:"交通",color:"#00BCD4"},{name:"食物",color:"#FF9800"},{name:"文具",color:"#F44336"},{name:"其他",color:"#424242",default:!0}],income:[{name:"轉帳",color:"#3F51B5"},{name:"現金",color:"#009688",default:!0}]};return Object(k["h"])(e,a).then((function(t){console.log(t)}))})).catch((function(e){t.snackbar.text=e.code,t.snackbar.display=!0}))}}},$=w,O=a("b0af"),j=a("99d9"),V=a("0e8f"),C=a("4bd4"),D=a("a722"),F=a("2db4"),S=a("71a3"),E=a("c671"),T=a("fe57"),B=a("aac8"),P=a("8654"),A=a("71d9"),N=Object(u["a"])($,h,x,!1,null,null,null),M=N.exports;_()(N,{VBtn:m["a"],VCard:O["a"],VCardText:j["b"],VFlex:V["a"],VForm:C["a"],VIcon:f["a"],VLayout:D["a"],VSnackbar:F["a"],VTab:S["a"],VTabItem:E["a"],VTabs:T["a"],VTabsItems:B["a"],VTextField:P["a"],VToolbar:A["a"]});var I={components:{Navigator:b,LoginForm:M},data:function(){return{ready:!1,user:null}},mounted:function(){var t=this,e=Object(y["b"])();Object(y["c"])(e,(function(e){if(t.user=e,t.user){t.$store.commit("set_uid",e.uid);var a=Object(k["c"])(Object(k["f"])(),"service",e.uid);Object(k["d"])(a).then((function(e){t.$store.commit("set_person_data",e.data())})).then((function(){t.ready=!0}))}else t.ready=!0}))}},L=I,Y=a("7496"),H=a("a523"),J=a("0789"),R=a("f6c4"),z=Object(u["a"])(L,i,r,!1,null,null,null),G=z.exports;_()(z,{VApp:Y["a"],VContainer:H["a"],VFadeTransition:J["c"],VMain:R["a"]});var K=a("9483");Object(K["a"])("".concat("/wallet/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var q=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",dark:"",flat:"",color:"indigo"}},[a("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e){return a("v-tab",{key:e},[t._v(t._s(e))])})),1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-chart-arc")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"py-2",attrs:{flat:""}},[a("v-overlay",{attrs:{value:t.loading,opacity:0,absolute:!0}}),a("vc-date-picker",{attrs:{"disable-page-swipe":"",color:"indigo","is-expanded":"",attributes:t.calendar_attrs},on:{"update:to-page":t.update_page},model:{value:t.select_date,callback:function(e){t.select_date=e},expression:"select_date"}})],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-alert",{staticClass:"mb-0 px-2",attrs:{text:"",dense:"",color:"indigo",icon:"mdi-package-up"}},[t._v(t._s(t.count_.expense))])],1),a("v-col",[a("v-alert",{staticClass:"mb-0 px-2",attrs:{text:"",dense:"",color:"green darken-4",icon:"mdi-package-down"}},[t._v(t._s(t.count_.income))])],1),a("v-col",[a("v-alert",{staticClass:"mb-0 px-2",attrs:{text:"",dense:"",color:"orange",icon:"mdi-cash-multiple"}},[t._v(t._s(t.count_.income+t.count_.expense))])],1)],1)],1),t.day_docs.length?a("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[a("v-card",{attrs:{outlined:""}},[a("v-expansion-panels",{attrs:{accordion:""},model:{value:t.expand_list,callback:function(e){t.expand_list=e},expression:"expand_list"}},t._l(t.day_docs,(function(e){return a("v-expansion-panel",{key:e.uuid},[a("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("span",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.count))])]},proxy:!0}],null,!0)},[a("span",[a("v-chip",{style:{"background-color":t.get_tag(e).color},attrs:{dark:"","x-small":""}},[t._v(t._s(t.get_tag(e).name))]),t._v(" "+t._s(""==e.name?e.type:e.name)+" ")],1)]),a("v-expansion-panel-content",[a("v-row",[a("v-col",{staticClass:"px-1"},[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(a){t.$store.commit("mode_edit",e),t.$store.commit("show_dialog")}}},[t._v("修改")])],1),a("v-col",{staticClass:"px-1"},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,i=n.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"error",block:""},on:{click:function(a){return t.$store.commit("mode_edit",e)}}},"v-btn",i,!1),o),[t._v("刪除")])]}}],null,!0),model:{value:t.dialog.display,callback:function(e){t.$set(t.dialog,"display",e)},expression:"dialog.display"}},[a("v-card",[a("v-toolbar",{attrs:{color:"red",dark:"",dense:""}},[a("v-icon",{staticClass:"px-2"},[t._v("mdi-alert")]),a("v-toolbar-title",[t._v("注意")])],1),a("v-card-text",{staticClass:"text-h6 pa-5"},[t._v(" 確認刪除? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey white--text"},on:{click:function(e){t.dialog.display=!1}}},[t._v(" 取消 ")]),a("v-btn",{attrs:{color:"red white--text",loading:t.dialog.loading,disabled:t.dialog.loading},on:{click:function(e){return t.del_doc()}}},[t._v(" 確認 ")])],1)],1)],1)],1)],1)],1)],1)})),1)],1)],1):t._e()],1),a("v-dialog",{attrs:{persistent:t.edit_dialog.loading},on:{"click:outside":t.close_edit_dialog},model:{value:t.$store.state.dialog_display,callback:function(e){t.$set(t.$store.state,"dialog_display",e)},expression:"$store.state.dialog_display"}},[a("v-card",{staticClass:"pb-3"},[a("v-toolbar",{staticClass:"elevation-2",attrs:{color:"indigo",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{grow:""},model:{value:t.edit_dialog.tab,callback:function(e){t.$set(t.edit_dialog,"tab",e)},expression:"edit_dialog.tab"}},[a("v-tab",{attrs:{disabled:t.edit_dialog.loading},on:{click:t.change_tab}},[t._v("支出")]),a("v-tab",{attrs:{disabled:t.edit_dialog.loading},on:{click:t.change_tab}},[t._v("收入")])],1)]},proxy:!0}])},[a("v-toolbar-title",[t._v("紀錄")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",disabled:t.edit_dialog.loading},on:{click:function(e){return t.$store.commit("hide_dialog")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("br"),a("v-form",{staticClass:"px-5",attrs:{disabled:t.edit_dialog.loading},on:{submit:function(e){return e.preventDefault(),t.store_data.apply(null,arguments)}}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.edit_dialog.date_picker.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.edit_dialog.date_picker,"date",e)},"update:return-value":function(e){return t.$set(t.edit_dialog.date_picker,"date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"日期","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.edit_dialog.date_picker.date,callback:function(e){t.$set(t.edit_dialog.date_picker,"date",e)},expression:"edit_dialog.date_picker.date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.edit_dialog.date_picker.display,callback:function(e){t.$set(t.edit_dialog.date_picker,"display",e)},expression:"edit_dialog.date_picker.display"}},[a("v-date-picker",{attrs:{scrollable:"",color:"indigo"},model:{value:t.edit_dialog.date_picker.date,callback:function(e){t.$set(t.edit_dialog.date_picker,"date",e)},expression:"edit_dialog.date_picker.date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"indigo"},on:{click:function(e){t.edit_dialog.date_picker.display=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"indigo"},on:{click:function(e){return t.$refs.dialog.save(t.edit_dialog.date_picker.date)}}},[t._v("OK")])],1)],1),a("v-select",{attrs:{items:t.tag_list,chips:"",label:"標籤","prepend-icon":"mdi-tag"},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.on,o=e.attr,i=e.item;return[a("v-chip",t._g(t._b({style:{"background-color":t.get_tag_by_name(i).color},attrs:{dark:""}},"v-chip",o,!1),n),[t._v(t._s(t.get_tag_by_name(i).name))])]}},{key:"selection",fn:function(e){var n=e.item;return[a("v-chip",{style:{"background-color":t.get_tag_by_name(n).color},attrs:{dark:""}},[t._v(t._s(t.get_tag_by_name(n).name))])]}}]),model:{value:t.edit_dialog.tag,callback:function(e){t.$set(t.edit_dialog,"tag",e)},expression:"edit_dialog.tag"}}),a("v-text-field",{attrs:{label:"金額",type:"number","prepend-icon":"mdi-cash"},model:{value:t.edit_dialog.count,callback:function(e){t.$set(t.edit_dialog,"count",e)},expression:"edit_dialog.count"}}),a("v-text-field",{attrs:{label:"名稱(選填)","prepend-icon":"mdi-pencil","aria-autocomplete":"off"},model:{value:t.edit_dialog.name,callback:function(e){t.$set(t.edit_dialog,"name",e)},expression:"edit_dialog.name"}}),a("v-btn",{attrs:{color:"success",block:"",type:"submit",loading:t.edit_dialog.loading,disabled:t.edit_dialog.loading}},[t._v("儲存")])],1)],1)],1),a("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",icon:""},on:{click:function(e){t.snackbar.display=!1}}},"v-btn",n,!1),[a("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar.display,callback:function(e){t.$set(t.snackbar,"display",e)},expression:"snackbar.display"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},Z=[],Q=(a("d9e2"),a("d3b7"),a("159b"),a("7db0"),a("25f0"),a("4de4"),a("ac1f"),a("5319"),{name:"Calendar",data:function(){return{page:null,month_docs:new Array,select_date:new Date,tab:0,expand_list:null,tabs:["全部","收入","支出"],view:0,views:["日","周","月"],loading:!0,snackbar:{display:!1,text:""},calendar_attrs:[{bar:{style:{backgroundColor:"#9FA8DA"}},dates:[]},{bar:{style:{backgroundColor:"#F48FB1"}},dates:[]}],dialog:{display:!1,loading:!1},edit_dialog:{tab:0,date_picker:{display:!1,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},tag:null,count:null,name:"",_uuid:null,loading:!1}}},methods:{update_page:function(t){this.page=t,this.get_page_data()},get_page_data:function(){var t=this;this.loading=!0,this.month_docs=new Array,this.calendar_attrs[0].dates=new Array,this.calendar_attrs[1].dates=new Array;var e=Object(k["c"])(Object(k["f"])(),"service",this.uid,"wallet",this.page_path);Object(k["d"])(e).then((function(e){if(!e.exists())throw new Error("No data in this month");var a=Object(k["a"])(Object(k["f"])(),"service",t.uid,"wallet",t.page_path,"detail");Object(k["e"])(Object(k["g"])(a)).then((function(e){e.forEach((function(e){t.month_docs.push(e.data()),"支出"==e.data().type?t.calendar_attrs[0].dates.push(new Date(e.data().time)):"收入"==e.data().type&&t.calendar_attrs[1].dates.push(new Date(e.data().time))}))})).then((function(){t.loading=!1}))})).catch((function(e){console.log(e),t.loading=!1}))},get_tag:function(t){if("收入"==t.type){var e=this.person_data.income.find((function(e){return e.name==t.tag})),a=this.person_data.income.find((function(t){return t.default}));return e||a}if("支出"==t.type){var n=this.person_data.expense.find((function(e){return e.name==t.tag})),o=this.person_data.expense.find((function(t){return t.default}));return n||o}return{name:"Error",color:"#000000"}},get_tag_by_name:function(t){if(1==this.edit_dialog.tab){var e=this.person_data.income.find((function(e){return e.name==t})),a=this.person_data.income.find((function(t){return t.default}));return e||a}if(0==this.edit_dialog.tab){var n=this.person_data.expense.find((function(e){return e.name==t})),o=this.person_data.expense.find((function(t){return t.default}));return n||o}return{name:"Error",color:"#000000"}},change_tab:function(){this.edit_dialog.tag=null},store_data:function(){var t=this;this.edit_dialog.loading=!0,null==this.edit_dialog._uuid&&(this.edit_dialog._uuid=this.gen_uuid);var e=Object(k["c"])(Object(k["f"])(),"service",this.$store.state.uid,"wallet",this.edit_dialog.date_picker.date.substr(0,7),"detail",this.edit_dialog._uuid),a={count:(0==this.edit_dialog.tab?-1:1)*this.edit_dialog.count,name:this.edit_dialog.name,tag:this.get_tag_by_name(this.edit_dialog.tag).name,type:0==this.edit_dialog.tab?"支出":"收入",_uuid:this.edit_dialog._uuid,month:new Date(this.edit_dialog.date_picker.date).getMonth()+1,date:new Date(this.edit_dialog.date_picker.date).getDate(),year:new Date(this.edit_dialog.date_picker.date).getFullYear(),time:new Date(this.edit_dialog.date_picker.date).getTime()};"new"==this.$store.state.mode?Object(k["h"])(e,a).catch((function(e){t.snackbar.text=e,t.snackbar.display=!0})).then((function(){t.get_page_data(),t.$store.commit("hide_dialog"),t.edit_dialog.loading=!1})):"edit"==this.$store.state.mode&&Object(k["i"])(e,a).catch((function(e){t.snackbar.text=e,t.snackbar.display=!0})).then((function(){t.get_page_data(),t.$store.commit("hide_dialog"),t.edit_dialog.loading=!1}))},del_doc:function(){var t=this;this.dialog.loading=!0;var e=Object(k["c"])(Object(k["f"])(),"service",this.$store.state.uid,"wallet",this.$store.state.edit_doc.year+"-"+(this.$store.state.edit_doc.month<10?"0":"")+this.$store.state.edit_doc.month,"detail",this.$store.state.edit_doc._uuid);Object(k["b"])(e).catch((function(e){t.snackbar.text=e,t.snackbar.display=!0})).then((function(){t.get_page_data(),t.dialog.display=!1,t.dialog.loading=!1}))},close_edit_dialog:function(){this.edit_dialog.loading||this.$store.commit("hide_dialog")}},computed:{uid:function(){return this.$store.state.uid},person_data:function(){return this.$store.state.person_data},page_path:function(){return null==this.page?"":this.page.year.toString()+"-"+(this.page.month<10?"0":"")+this.page.month.toString()},day_docs:function(){var t=this;return null==this.select_date?[]:this.month_docs.filter((function(e){return e.date==t.select_date.getDate()&&e.month==t.select_date.getMonth()+1&&(0==t.tab||e.type==t.tabs[t.tab])}))},count_:function(){var t={income:0,expense:0};if(null==this.select_date)return t;for(var e in this.month_docs)this.month_docs[e].date<=this.select_date.getDate()&&this.month_docs[e].month==this.select_date.getMonth()+1&&("收入"==this.month_docs[e].type?t.income+=this.month_docs[e].count:"支出"==this.month_docs[e].type&&(t.expense+=this.month_docs[e].count));return t},tag_list:function(){if(0==this.edit_dialog.tab){var t=new Array;for(var e in this.$store.state.person_data.expense)t.push(this.person_data.expense[e].name);return t}if(1==this.edit_dialog.tab){var a=new Array;for(var n in this.$store.state.person_data.income)a.push(this.person_data.income[n].name);return a}return[]},gen_uuid:function(){var t=Date.now();return"undefined"!==typeof performance&&"function"===typeof performance.now&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?a:3&a|8).toString(16)}))}},watch:{select_date:function(){var t=null;this.select_date&&(t=this.select_date.getFullYear()+"-"+(this.select_date.getMonth()+1<10?"0":"")+(this.select_date.getMonth()+1)+"-"+(this.select_date.getDate()<10?"0":"")+this.select_date.getDate()),this.edit_dialog.date_picker.date=t,this.expand_list=null},"$store.state.dialog_display":function(){if(this.$store.state.dialog_display)if("edit"==this.$store.state.mode){var t=this.$store.state.edit_doc;this.edit_dialog.tab="收入"==t.type?1:0,this.edit_dialog.date_picker.date=t.year+"-"+(t.month<10?"0":"")+t.month+"-"+(t.date<10?"0":"")+t.date,this.edit_dialog.tag=this.get_tag_by_name(t.tag).name,this.edit_dialog.count=Math.abs(t.count),this.edit_dialog.name=t.name,this.edit_dialog._uuid=t._uuid}else this.edit_dialog.tab=0,this.edit_dialog.tag=null,this.edit_dialog.count=null,this.edit_dialog.name="",this.edit_dialog._uuid=null}}}),W=Q,X=a("0798"),tt=a("cc20"),et=a("62ad"),at=a("2e4b"),nt=a("169a"),ot=a("cd55"),it=a("49e2"),rt=a("c865"),st=a("0393"),lt=a("a797"),dt=a("0fd9"),ct=a("b974"),ut=a("2fa4"),pt=a("2a7f"),_t=Object(u["a"])(W,U,Z,!1,null,null,null),gt=_t.exports;_()(_t,{VAlert:X["a"],VBtn:m["a"],VCard:O["a"],VCardActions:j["a"],VCardText:j["b"],VChip:tt["a"],VCol:et["a"],VDatePicker:at["a"],VDialog:nt["a"],VExpansionPanel:ot["a"],VExpansionPanelContent:it["a"],VExpansionPanelHeader:rt["a"],VExpansionPanels:st["a"],VForm:C["a"],VIcon:f["a"],VOverlay:lt["a"],VRow:dt["a"],VSelect:ct["a"],VSnackbar:F["a"],VSpacer:ut["a"],VTab:S["a"],VTabs:T["a"],VTextField:P["a"],VToolbar:A["a"],VToolbarTitle:pt["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Detail ")])},ft=[],vt={},bt=vt,ht=Object(u["a"])(bt,mt,ft,!1,null,null,null),xt=ht.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" New ")])},kt=[],wt={},$t=wt,Ot=Object(u["a"])($t,yt,kt,!1,null,null,null),jt=Ot.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("LogoutBtn"),a("v-btn",{on:{click:t.set_tags}},[t._v("reset tags")])],1)},Ct=[],Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{elevation:"2"},on:{click:t.logout}},[t._v("Logout")])},Ft=[],St={name:"LogoutBtn",methods:{logout:function(){var t=Object(y["b"])();Object(y["e"])(t).then((function(){console.log("logged out")})).catch((function(t){console.log(t)})),this.$router.push("/")}}},Et=St,Tt=Object(u["a"])(Et,Dt,Ft,!1,null,null,null),Bt=Tt.exports;_()(Tt,{VBtn:m["a"]});var Pt={components:{LogoutBtn:Bt},data:function(){return{list:[{order:1},{order:2},{order:3},{order:4},{order:5}]}},methods:{set_tags:function(){var t=Object(k["c"])(Object(k["f"])(),"service",this.$store.state.uid),e={expense:[{name:"早餐",color:"#2196F3"},{name:"午餐",color:"#607D8B"},{name:"晚餐",color:"#4CAF50"},{name:"交通",color:"#00BCD4"},{name:"食物",color:"#FF9800"},{name:"文具",color:"#F44336"},{name:"其他",color:"#424242",default:!0}],income:[{name:"轉帳",color:"#3F51B5"},{name:"現金",color:"#009688",default:!0}]};Object(k["h"])(t,e).then((function(t){console.log(t)}))}}},At=Pt,Nt=Object(u["a"])(At,Vt,Ct,!1,null,null,null),Mt=Nt.exports;_()(Nt,{VBtn:m["a"]}),o["default"].use(q["a"]);var It=[{path:"/",name:"Home",component:gt},{path:"/detail",name:"Detail",component:xt},{path:"/new",name:"New",component:jt},{path:"/setting",name:"Setting",component:Mt}],Lt=new q["a"]({mode:"history",base:"/wallet/",routes:It}),Yt=Lt,Ht=a("2f62");o["default"].use(Ht["a"]);var Jt=new Ht["a"].Store({state:{uid:null,person_data:null,edit_doc:null,dialog_display:!1,select_date:null,mode:"new"},mutations:{set_uid:function(t,e){t.uid=e},set_person_data:function(t,e){t.person_data=e},mode_edit:function(t,e){t.mode="edit",t.edit_doc=e},mode_new:function(t){t.mode="new",t.edit_doc=null},show_dialog:function(t){t.dialog_display=!0},hide_dialog:function(t){t.dialog_display=!1},set_select_date:function(t,e){t.select_date=e}},actions:{},modules:{}}),Rt=a("f309");o["default"].use(Rt["a"]);var zt,Gt=new Rt["a"]({}),Kt=a("5887"),qt=a.n(Kt),Ut=a("260b"),Zt={apiKey:"AIzaSyBP5CCdYa7v8tomOfE0Yj04huNJ7Ar7vvU",authDomain:"wallet-49d18.firebaseapp.com",projectId:"wallet-49d18",storageBucket:"wallet-49d18.appspot.com",messagingSenderId:"358130182735",appId:"1:358130182735:web:38d723d96e63f266e1983a",measurementId:"G-MZN4GPN262"},Qt=Object(Ut["a"])(Zt),Wt=Object(y["b"])(Qt);o["default"].use(qt.a,{componentPrefix:"vc"}),o["default"].config.productionTip=!1,o["default"].prototype.$firebase=Qt,Object(y["c"])(Wt,Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:zt||(zt=new o["default"]({router:Yt,store:Jt,vuetify:Gt,render:function(t){return t(G)}}).$mount("#app"));case 1:case"end":return t.stop()}}),t)}))))},"6cad":function(t,e,a){"use strict";a("b1b1")},b1b1:function(t,e,a){}});