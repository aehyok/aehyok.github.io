(window["webpackJsonp_map-app"]=window["webpackJsonp_map-app"]||[]).push([["vue-leaflet"],{4923:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o=a("e11e"),l=(a("6cc5"),Object(n["hb"])("data-v-655a0bd9"));Object(n["I"])("data-v-655a0bd9");var c=Object(n["n"])("div",{id:"map",style:{width:"100vw",height:"800px"}},null,-1),d=Object(n["m"])("click 激活");Object(n["F"])();var r={expose:[],setup:function(e){var t={},r=Object(n["J"])({longitude:0,latitude:0,altitude:0,gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]});return Object(n["B"])((function(){delete o["Icon"].Default.prototype._getIconUrl,o["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var e=[34.263742732916505,108.01650524139406];t=o["map"]("map",{zoom:16,minZoom:13,maxZoom:20,center:[e[0],e[1]],zoomControl:!0,doubleClickZoom:!1,attributionControl:!1,tap:!1});var n=o["layerGroup"]();n.addTo(t),t.on("zoomend",(function(e){console.log(e,"zoomend")})),t.on("click",(function(e){n.clearLayers();o["divIcon"]({html:"狗子",className:"my-div-icon",iconSize:40});var a=o["marker"]([e.latlng.lat,e.latlng.lng],{draggable:!0}).addTo(t);a.on("dragend",(function(e){console.log("dragend",e)})),a.on("moveend",(function(e){console.log("moveend",e)})),a.on("click",(function(e){console.log("click",e),alert("")})),r.longitude=e.latlng.lng,r.latitude=e.latlng.lat,n.addLayer(a)}));var l=o["tileLayer"]("https://mt{s}.sea.utuapp.cn/610403/satellite/{z}/{x}/{y}.png",{subdomains:["1","2","3","4"],minZoom:10,maxZoom:20}),c=o["tileLayer"]("https://mt{s}.sea.utuapp.cn/610403/overlay/{z}/{x}/{y}.png",{subdomains:["1","2","3","4"],minZoom:10,maxZoom:20}),d=o["tileLayer"]("https://mt{s}.sea.utuapp.cn/610403/models/610403102210/{z}/{x}/{y}.png",{subdomains:["1","2","3","4"],minZoom:10,maxZoom:22}),i=o["layerGroup"]([l,c,d]);i.addTo(t)})),function(e,t){var a=Object(n["O"])("el-button"),o=Object(n["O"])("el-table-column"),i=Object(n["O"])("el-table"),u=Object(n["O"])("el-popover");return Object(n["E"])(),Object(n["i"])(n["b"],null,[c,Object(n["n"])(u,{placement:"right",width:400,trigger:"click"},{reference:l((function(){return[Object(n["n"])(a,null,{default:l((function(){return[d]})),_:1})]})),default:l((function(){return[Object(n["n"])(i,{data:Object(n["W"])(r).gridData},{default:l((function(){return[Object(n["n"])(o,{width:"150",property:"date",label:"日期"}),Object(n["n"])(o,{width:"100",property:"name",label:"姓名"}),Object(n["n"])(o,{width:"300",property:"address",label:"地址"})]})),_:1},8,["data"])]})),_:1})],64)}}};a("4f1a");r.__scopeId="data-v-655a0bd9";t["default"]=r},"4f1a":function(e,t,a){"use strict";a("74fb")},"74fb":function(e,t,a){}}]);