(function(t){function e(e){for(var a,s,c=e[0],u=e[1],i=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"33b3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],s={name:"App"},c=s,u=n("2877"),i=n("6544"),l=n.n(i),p=n("7496"),f=n("f6c4"),m=Object(u["a"])(c,r,o,!1,null,null,null),h=m.exports;l()(m,{VApp:p["a"],VMain:f["a"]});var d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"col-6"},[n("v-row",{staticClass:"col-12",attrs:{justify:"center"}},[n("NewComment"),t._l(t.paginatedData(),(function(e){return n("v-card",{key:e.id,staticClass:"my-4 px-5 pb-3",attrs:{"max-width":"600"}},[n("v-row",{staticStyle:{height:"80px"},attrs:{align:"center"}},[n("v-col",{staticClass:"col-1"},[n("v-avatar",[n("img",{attrs:{src:e.author.avatar}})])],1),n("v-col",{staticClass:"col-6"},[n("v-card-title",[t._v(t._s(e.author.name))]),n("v-card-subtitle",{staticClass:"text-subtitle-1"},[t._v(t._s(e.author.company))])],1),n("v-col",{staticClass:"col-5"},[n("v-card-subtitle",[t._v(t._s(e.created_at)+" ")])],1)],1),n("v-row",[n("v-card-text",{staticClass:"text-jastify font-weight-bold"},[t._v(" "+t._s(e.body))])],1)],1)})),n("v-pagination",{attrs:{length:t.pageCount()},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],2)],1)},b=[],g=n("1da1"),w=n("5530"),y=(n("96cf"),n("fb6a"),n("ac1f"),n("5319"),n("2f62")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-4 pb-4 new-comment"},[n("v-card-title",[t._v(" Новый комментарий ")]),n("v-textarea",{attrs:{counter:"",solo:"",label:"Ваш комментарий"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("v-btn",{attrs:{block:"",elevation:"2"},on:{click:function(e){t.newComment(t.text),t.clear()}}},[t._v("Отправить")])],1)},O=[],C={name:"newComment",data:function(){return{text:"",rules:{}}},computed:Object(y["c"])(["allPosts"]),methods:Object(w["a"])(Object(w["a"])({},Object(y["b"])(["newComment"])),{},{clear:function(){this.text=""}}),mounted:function(){}},_=C,j=(n("c45d"),n("8336")),P=n("b0af"),V=n("99d9"),M=n("a844"),k=Object(u["a"])(_,x,O,!1,null,null,null),D=k.exports;l()(k,{VBtn:j["a"],VCard:P["a"],VCardTitle:V["c"],VTextarea:M["a"]});var S={name:"comments",components:{NewComment:D},data:function(){return{page:1,commentsOnPage:20}},computed:Object(y["c"])(["allPosts"]),methods:Object(w["a"])(Object(w["a"])({},Object(y["b"])(["fetchPosts"])),{},{pageCount:function(){return this.allPosts.length/this.commentsOnPage===0?Math.floor(this.allPosts.length/this.commentsOnPage):Math.floor(this.allPosts.length/this.commentsOnPage)+1},paginatedData:function(){return this.allPosts.slice(this.page-1,this.page+this.commentsOnPage)}}),watch:{$route:function(t,e){this.$router.replace({query:{id:this.page}})}},mounted:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchPosts();case 1:case"end":return e.stop()}}),e)})))()}},T=S,J=n("8212"),$=n("62ad"),A=n("a523"),R=n("891e"),E=n("0fd9"),F=Object(u["a"])(T,v,b,!1,null,null,null),N=F.exports;l()(F,{VAvatar:J["a"],VCard:P["a"],VCardSubtitle:V["a"],VCardText:V["b"],VCardTitle:V["c"],VCol:$["a"],VContainer:A["a"],VPagination:R["a"],VRow:E["a"]}),a["a"].use(d["a"]);var B=[{path:"/",component:N},{path:"/:id",name:"commentsPage",component:N}],H=new d["a"]({routes:B}),Y=H;n("d3b7"),n("159b");a["a"].use(y["a"]);var q=new y["a"].Store({state:{posts:[],months:["January","February","March","April","May","June","July","August","September","October","November","December"],author:{id:16,name:"John Doe",avatar:"http://placeimg.com/640/480/business",company:"BigCountry"}},getters:{allPosts:function(t){return t.posts}},actions:{fetchPosts:function(t){return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bigcountry-task.vercel.app/comments.json");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,a.forEach((function(e){var n=new Date(Date.parse(e.created_at)),a=n.getDate()+" "+t.state.months[n.getMonth()]+" "+n.getFullYear()+", at "+n.getHours()+":"+n.getMinutes();e.created_at=a})),t.commit("updatePosts",a);case 8:case"end":return e.stop()}}),e)})))()},newComment:function(t,e){var n=new Date,a=n.getDate()+" "+t.state.months[n.getMonth()]+" "+n.getFullYear()+", at "+n.getHours()+":"+n.getMinutes(),r={id:t.state.posts.length+1,body:e,created_at:a,author:t.state.author};t.commit("pushComment",r)}},mutations:{updatePosts:function(t,e){t.posts=e},pushComment:function(t,e){t.posts.unshift(e)}}}),z=n("f309");a["a"].use(z["a"]);var G=new z["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Y,store:q,vuetify:G,render:function(t){return t(h)}}).$mount("#app")},c45d:function(t,e,n){"use strict";n("33b3")}});
//# sourceMappingURL=app.b903f0e1.js.map