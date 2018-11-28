(function(t){function e(e){for(var n,r,s=e[0],c=e[1],i=e[2],d=0,m=[];d<s.length;d++)r=s[d],o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},l=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("1d50")},"1bb0":function(t,e,a){},"1d50":function(t,e,a){"use strict";a.r(e);a("8a52"),a("0352"),a("a6c7");var n=a("e832"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"}}),a("SearchPage")],1)},l=[],r=(a("e4f7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-app",[a("md-app-toolbar",{staticClass:"md-primary"},[a("span",{staticClass:"md-title"},[t._v("API demo")])]),a("md-app-content",[a("SearchMenu")],1)],1)}),s=[],c=a("0448"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"md-layout md-gutter md-alignment-left"},[a("div",{staticClass:"md-layout-item place"},[a("md-autocomplete",{attrs:{"md-options":t.places},on:{"md-changed":t.getValues,"md-opened":t.getValues},scopedSlots:t._u([{key:"md-autocomplete-item",fn:function(e){var n=e.item,o=e.term;return[a("md-highlight-text",{attrs:{"md-term":o}},[t._v(t._s(n.fullName))]),a("span",{staticClass:"md-suffix"},[t._v(t._s(n.score))])]}}]),model:{value:t.location,callback:function(e){t.location=e},expression:"location"}},[a("label",[t._v("Location name")])])],1),a("div",{staticClass:"md-layout-item coordinate"},[a("md-field",[a("label",[t._v("Latitude")]),a("md-input",{attrs:{type:"number",step:"0.01"},model:{value:t.lat,callback:function(e){t.lat=e},expression:"lat"}}),a("span",{staticClass:"md-suffix"},[t._v("N")])],1)],1),a("div",{staticClass:"md-layout-item coordinate"},[a("md-field",[a("label",[t._v("Longitude")]),a("md-input",{attrs:{type:"number",step:"0.01"},model:{value:t.lon,callback:function(e){t.lon=e},expression:"lon"}}),a("span",{staticClass:"md-suffix"},[t._v("W")])],1)],1)]),a("div",{staticClass:"detail"},[a("md-card",{staticClass:"md-layout md-gutter"},[a("md-card-header",[a("div",{staticClass:"md-title"},[t._v("Details")])]),a("md-card-content",[t.location&&"object"===typeof t.location?a("md-table",[a("md-table-row",[a("md-table-head",[t._v("id")]),a("md-table-cell",[t._v(t._s(t.location.id))])],1),a("md-table-row",[a("md-table-head",[t._v("Name")]),a("md-table-cell",[t._v(t._s(t.location.name))])],1),a("md-table-row",[a("md-table-head",[t._v(t._s("US"==t.location.countryCode?"State":"Province"))]),a("md-table-cell",[t._v(t._s(t.location.stateProvince))])],1),a("md-table-row",[a("md-table-head",[t._v("Country")]),a("md-table-cell",[t._v(t._s("CA"===t.location.countryCode?"Canada":"United States"))])],1),a("md-table-row",[a("md-table-head",[t._v("Coordinates")]),a("md-table-cell",[t._v(t._s(t.location.coordinates[1])+"N "+t._s(-t.location.coordinates[0])+"W")])],1),a("md-table-row",[a("md-table-head",[t._v("Distance")]),a("md-table-cell",[t._v(t._s(t.location.distance))])],1),a("md-table-row",[a("md-table-head",[t._v("Score")]),a("md-table-cell",[t._v(t._s(t.location.score))])],1)],1):t._e()],1)],1)],1),a("div",{staticClass:"options"},[a("md-card",{staticClass:"md-layout md-gutter"},[a("md-card-header",[a("div",{staticClass:"md-title"},[t._v("Options")])]),a("md-card-content",[a("div",{staticClass:"md-layout-item max-results"},[a("md-field",[a("label",[t._v("Maximum number of results")]),a("md-input",{attrs:{type:"number"},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}})],1)],1),a("div",{staticClass:"md-layout-item"},[a("md-switch",{model:{value:t.fuzzy,callback:function(e){t.fuzzy=e},expression:"fuzzy"}},[t._v("Fuzzy search")])],1)])],1)],1)])},u=[],d=(a("5a82"),a("c20a"),a("3287")),m=a("7338"),f=a.n(m);n["default"].use(c["MdAutocomplete"]),n["default"].use(c["MdCard"]),n["default"].use(c["MdField"]),n["default"].use(c["MdHighlightText"]),n["default"].use(c["MdList"]),n["default"].use(c["MdMenu"]),n["default"].use(c["MdSwitch"]),n["default"].use(c["MdTable"]);var p={name:"SearchMenu",data:function(){return{fuzzy:!0,lat:45.5,lon:73.57,max:10,places:[],location:null}},methods:{getValues:function(t){this.fetcher(t||"","-".concat(this.lon,",").concat(this.lat),this.max,this.fuzzy)},fetcher:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e,a,n,o){var l,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=e.replace(/\s/g,""),l="http://".concat(location.hostname,"/suggestions?locationName=").concat(e,"&startPoint=").concat(a,"&limit=").concat(n,"&fuzzy=").concat(o),t.next=5,f.a.get(l);case 5:r=t.sent,this.places=r.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,a,n,o){return t.apply(this,arguments)}}()}},v=p,b=(a("fac1"),a("a6c2")),h=Object(b["a"])(v,i,u,!1,null,"f1204734",null);h.options.__file="SearchMenu.vue";var _=h.exports;n["default"].use(c["MdApp"]),n["default"].use(c["MdButton"]),n["default"].use(c["MdContent"]),n["default"].use(c["MdTabs"]),n["default"].use(c["MdToolbar"]);var y={name:"SearchPage",components:{SearchMenu:_}},g=y,x=(a("580c"),Object(b["a"])(g,r,s,!1,null,"36eb5d7e",null));x.options.__file="SearchPage.vue";var C=x.exports,M={name:"app",components:{SearchPage:C}},w=M,S=(a("1f1f"),Object(b["a"])(w,o,l,!1,null,null,null));S.options.__file="App.vue";var z=S.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(z)}}).$mount("#app")},"1f1f":function(t,e,a){"use strict";var n=a("c783"),o=a.n(n);o.a},2617:function(t,e,a){},"580c":function(t,e,a){"use strict";var n=a("1bb0"),o=a.n(n);o.a},c783:function(t,e,a){},fac1:function(t,e,a){"use strict";var n=a("2617"),o=a.n(n);o.a}});
//# sourceMappingURL=app.c1c49535.js.map